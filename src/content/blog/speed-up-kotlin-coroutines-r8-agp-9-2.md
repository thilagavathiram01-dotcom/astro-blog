---
title: "Make Kotlin Coroutines 2x Faster with R8 and AGP 9.2"
description: "Update to AGP 9.2.0 so R8 rewrites AtomicFieldUpdater calls into faster Unsafe variants and speeds Kotlin coroutine launch and cancel by up to 2x."
pubDate: 2026-10-01T09:00:00
heroImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "how-to"]
noindex: false
---

Kotlin coroutines are the default way Android apps handle async work. They also sit on a hot path inside Jetpack Compose. Starting with Android Gradle Plugin 9.2.0, R8 rewrites a common atomic helper so launching and cancelling those coroutines can run up to 2x faster.

The change comes from a July 27, 2026 Android Developers case study by Jonathan Starup and Andrei Shikov. R8 now turns most `Atomic*FieldUpdater` calls into `Unsafe` variants. On common operations those variants run 2x to 4x faster. The library that benefits most is `kotlinx.atomicfu`, which `kotlinx.coroutines` uses for lock-free parent and child links.

You do not rewrite coroutine code to pick this up. You ship a release build with a current AGP and with R8 actually running.

## Why coroutine launch was expensive

Compose uses suspend functions for pointer events, animations, and other interactions. The Compose team found that coroutines were a bottleneck outside composition. Creating and updating `Modifier.clickable` spent 80% of its time launching and cancelling internal coroutines that updated an `InteractionSource`.

An ART method trace of an empty `LaunchedEffect { }` splits into three parts: initialize the coroutine, start it, and complete it. Cancellation looks like completion, plus a `CancellationException`.

Those traces showed repeated calls into `java.util.concurrent.atomic.AtomicReferenceFieldUpdater`. Each call is short. The volume is the problem. `kotlinx.atomicfu` implements lock-free atomics with that updater. The updater takes a class and a field name, then runs reflective checks that the field exists and is accessible. Starting, suspending, cancelling, and completing a coroutine each hit at least one atomic operation.

JVM has optimized this pattern for years. ART did not hide the checks. A Pixel 5 on API 33, with `compareAndSet` already JIT-compiled during warmup, measured:

- `java.util.concurrent.atomic.AtomicReference.compareAndSet`: 50.7 ns
- `kotlinx.atomicfu` `compareAndSet`: 135 ns

That is about 2.7x slower for the atomicfu path. The useful work inside the updater is an `Unsafe` field access. The reflection around it was pure overhead when the field is a static, obvious target.

![Android phone on a desk beside a laptop used for app profiling](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## What R8 changes in AGP 9.2.0

R8 is a whole-program compiler. It can see a static final updater created with constant class, type, and field-name arguments, prove the field is valid, and drop the checks.

The optimization has three steps, described in the Android Developers post:

1. Instrumentation adds an offset field next to the updater, using `Unsafe.objectFieldOffset` on the declared field.
2. Replacement rewrites each call site that R8 can prove safe. A `compareAndSet` becomes a `compareAndSwapObject` on that offset. R8 inserts null checks unless it can rule nulls out.
3. Clean-up deletes the updater or the offset, whichever is unused, and removes the initializer when the instrumented field cannot throw.

After that, `kotlinx.atomicfu` and most direct uses of `AtomicIntFieldUpdater`, `AtomicLongFieldUpdater`, and `AtomicReferenceFieldUpdater` match `AtomicReference` performance. Some atomicfu benchmarks are faster still, because the atomicfu compiler plugin can inline atomic instances into fields and skip an allocation.

Compose runtime microbenchmarks caught the effect. Updating those benchmarks to the new R8 produced a 2x improvement when launching and cancelling coroutines inside `LaunchedEffect`.

ART is adding a similar optimization in the VM. If the app targets API 36 and runs on a recent Android build, the device may already apply part of this. The same coroutine benchmarks saw about a 15% improvement after recent ART JIT updates. The R8 rewrite still matters: it applies at build time, including on older devices.

## Turn the optimization on

The Android team says apps get this by default when you upgrade to AGP 9.2.0, or when you use R8 9.2.0 directly. R8 only rewrites release bytecode when minification is enabled.

### 1. Set the plugin version

In the version catalog or root build file, use AGP 9.2.0 or newer:

```kotlin
plugins {
    id("com.android.application") version "9.2.0" apply false
    id("org.jetbrains.kotlin.android") version "2.2.0" apply false
}
```

Match the Kotlin version your project already compiles with. AGP 9.2.0 also tightens `-keepattributes` wildcards for runtime-invisible annotations. A rule such as `-keepattributes *Annotation*` no longer keeps those attributes unless you name them. Check release builds if you depend on them.

### 2. Let R8 run in full mode

Open `gradle.properties`. Delete this line if it is present:

```properties
android.enableR8.fullMode=false
```

Full mode is what lets R8 apply whole-program rewrites. Leaving the flag at false keeps a compatibility mode that skips optimizations you want.

In the app module, enable minify on the variant you ship:

```kotlin
android {
    buildTypes {
        release {
            isMinifyEnabled = true
            isShrinkResources = true
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }
}
```

`proguard-android-optimize.txt` is the optimize default. The non-optimize default file turns optimizations off.

Optimized resource shrinking is separate from the atomic rewrite, and it is already standard when `isShrinkResources` is true on AGP 9.0.0 and later. Keep it on. Smaller DEX and fewer unused resources do not replace the coroutine speedup, but they ship in the same release build.

### 3. Build a release and check the mapping

```bash
./gradlew :app:assembleRelease
```

Debug builds do not run this R8 pass, so a debug `LaunchedEffect` will not show the speedup. Install the release artifact, or a benchmark build type that sets `isMinifyEnabled = true`.

If you need to confirm which R8 AGP invoked, check the build scan or the resolved R8 jar. Android docs describe swapping the bundled R8 if you must pin a newer shrinker.

![Developer workstation with code on screen during a release build](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Measure launch and cancel, not just app size

Size reports will not show this change. The win is time inside coroutine start and cancel.

A practical check:

1. Add a Macrobenchmark module if you do not have one. Startup and frame benchmarks still matter, and [baseline profiles](/blog/android-baseline-profiles-guide/) remain the right companion for cold start.
2. Add a microbenchmark around a tight `LaunchedEffect` or a `lifecycleScope.launch` plus cancel loop, using `BenchmarkRule.measureRepeated`.
3. Run it on a release-minified build before and after the AGP bump, on the same device, with the same thermal state.
4. Capture an ART method trace in Android Studio or Perfetto. Before the rewrite you should see `AtomicReferenceFieldUpdater` on the coroutine path. After it, those calls should be gone or rare, replaced by `Unsafe` field access.

Do not compare a debug build to a minified release and call the gap an R8 atomic win. Minify, inlining, and class shrinking move other numbers at the same time.

## Keep rules that can block the rewrite

R8 only replaces a call site when three checks pass:

- The updater value traces back to an instrumented field.
- The holder is the original holder type or a subclass.
- The new value is the original field type or a subclass.

Reflection-heavy or fully dynamic updater use stays on the slow path. That is expected. A `-keep` rule that preserves the updater field and every call site can also stop clean-up. Prefer narrow keep rules. Avoid `-keep class kotlin.coroutines.** { *; }` and broad atomicfu keeps unless a crash forces them.

If a release build throws on a field updater after the upgrade, capture the stack, then keep only the class that failed. Re-run the benchmark. A blanket keep puts the reflective checks back on the hot path.

## Ship checklist

- AGP is 9.2.0 or newer.
- `android.enableR8.fullMode=false` is absent.
- Release uses `isMinifyEnabled = true` and the optimize ProGuard file.
- You installed a minified build, not a debug APK.
- A trace or microbenchmark shows less time in `AtomicReferenceFieldUpdater` during launch and cancel.
- Keep rules stayed narrow after any crash triage.

The user-facing result is quieter jank on clickable Compose UI and faster structured concurrency, without a cloud call and without new runtime permissions. Pair the AGP bump with baseline profiles if startup is still the metric you report.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/QqO2jZ-NZko"
    title="Boost Android app performance with the R8 optimizer | Spotlight Week"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- Android Developers, "How R8 made Kotlin Coroutines on Android 2x faster" (July 27, 2026): https://developer.android.com/blog/posts/how-r8-made-kotlin-coroutines-on-android-2x-faster
- Android Gradle plugin 9.2.0 release notes: https://developer.android.com/build/releases/agp-9-2-0-release-notes
- Enable app optimization (R8 minify and resource shrinking): https://developer.android.com/topic/performance/app-optimization/enable-app-optimization
- Kotlin coroutines issue on atomic field updater cost: https://github.com/Kotlin/kotlinx.coroutines/issues/3950
