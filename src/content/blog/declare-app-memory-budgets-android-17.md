---
title: "How to Declare App Memory Budgets in Android 17"
description: "Learn to declare Android 17 app memory budgets in the manifest with state-specific, multi-process, and runtime options to control RAM use."
pubDate: 2026-11-09T17:00:00
heroImage: "https://images.unsplash.com/photo-1722900879089-221a411fc7c6?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "developer"]
noindex: false
---

Android 17 introduces per-app memory limits to keep one heavy app from slowing the whole device. You can go further by declaring your own memory budgets. These tell the system your expected working set so it can reclaim unused pages with eviction and zRAM swap before you hit the harder system ceiling.

Budgets take effect on Android 17 QPR2 (API level 37.2) and higher. On older versions the platform ignores the new XML elements, so you can ship them safely. Exceeding a budget does not kill your process. The OS first drops cold file-backed pages, then compresses anonymous heap into zRAM. As long as your active working set stays under the budget, performance stays normal. Set the budget too low and you pay in extra CPU and possible jank from refaults.

This guide shows how to declare budgets in the manifest, calibrate them against real user flows, and use the runtime APIs when workloads change dynamically. It builds on the system-level limits covered in our [Android 17 per-app memory limits guide](/blog/android-17-per-app-memory-limits-guide/).

## Declare a baseline budget

The simplest approach puts one `<memory-budget>` inside the `<application>` tag. It applies across all processes and states.

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.simpleapp">

    <application
        android:label="@string/app_name">

        <!-- Baseline budget for the application -->
        <memory-budget android:maxMb="256" />

    </application>
</manifest>
```

This sets a 256 MB resident memory ceiling. When the process exceeds it, the kernel starts reclaiming inactive pages. Size the number for your typical working set, not the absolute peak RSS you see after a long session.

![Close-up of computer memory chips on a circuit board](https://images.unsplash.com/photo-1771189957022-63bb560121ab?auto=format&fit=crop&w=800&q=80)

## Vary budgets by process state

Apps need different amounts of memory depending on visibility. Declare multiple clauses with the `android:state` attribute.

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.simpleapp">

    <application
        android:label="@string/app_name">

        <!-- Default budget for visible foreground UI -->
        <memory-budget android:maxMb="200" />

        <!-- Tighter budget when playing audio in background -->
        <memory-budget
            android:maxMb="120"
            android:state="perceptible" />

        <!-- Minimal budget when fully in background -->
        <memory-budget
            android:maxMb="48"
            android:state="background" />

    </application>
</manifest>
```

A clause without `android:state` acts as the fallback for unspecified states (usually foreground). More specific clauses override it when the process moves to perceptible or background.

The platform maps these to `RunningAppProcessInfo.importance`:

- **foreground**: `IMPORTANCE_FOREGROUND` or `IMPORTANCE_TOP_SLEEPING` (visible Activity or top app).
- **perceptible**: `IMPORTANCE_FOREGROUND_SERVICE` or `IMPORTANCE_VISIBLE` (media playback, navigation, active downloads).
- **background**: lower importance levels for jobs, receivers, and syncs.

When the process becomes cached (`IMPORTANCE_CACHED`), the platform releases the active budget and falls back to normal cached-process reclamation.

## Multi-process budgets

If you split work across processes, place `<memory-budget>` inside a `<process>` tag under `<processes>`.

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.radio">

    <application
        android:label="@string/app_name">

        <!-- Package baseline: main process with UI and audio playback -->
        <memory-budget android:maxMb="180" />

        <!-- Tighter budget when audio plays in the background -->
        <memory-budget
            android:maxMb="64"
            android:state="perceptible" />

        <processes>
            <!-- Dedicated background sync process -->
            <process android:process=":sync">
                <memory-budget android:maxMb="32" />
            </process>
        </processes>

    </application>
</manifest>
```

Memory charged to a subprocess counts against both its own process budget and the package budget. The tighter of the two applies. List only the processes that need a custom budget; others stay under the system limit.

## Scale for display density and form factors

For apps whose memory grows with screen pixels, use the optional scaling attributes.

```xml
<!-- Baseline 180MB + 16MB multiplied by (density ratio)^2 -->
<memory-budget
    android:maxMb="180"
    android:additionalMbPerDensity="16"/>
```

On an xxhdpi display this grows the budget significantly. Alternatively, `android:additionalBytesPerDisplayPixel` adds a fixed number of bytes per physical pixel—useful for full-screen buffers.

For Wear OS or other form factors, add `android:feature="watch"` (or `automotive`, `leanback`) on a tighter clause. The last applicable clause in the manifest wins, so put the general baseline first and the specialized overrides after it.

## Measure working set and calibrate

A good budget sits just above the knee—the lowest value where reclaim only drops cold slack and refaults stay near baseline. Below the knee the kernel swaps out pages the app still needs, raising CPU time and eventually frame times.

Test on a release build (R8-optimized, non-debuggable) running Android 17 QPR2. Script a 30–60 second user flow for each state with Macrobenchmark or UI Automator. Start each run from a fresh process (`adb shell am force-stop`).

Sample the cgroup files:

```bash
PID=$(adb shell pidof -s com.example.app)
CG=/sys/fs/cgroup$(adb shell "sed -n 's/^0:://p' /proc/$PID/cgroup")
adb shell "cat $CG/memory.current $CG/memory.swap.current"
adb shell "grep -E '^(anon|file|workingset_refault_.*) ' $CG/memory.stat"
```

You can also sweep candidate budgets without rebuilding:

```bash
adb shell am memory-limiter manual <PID> 120MB
adb shell am memory-limiter manual <PID> none
```

A candidate passes if the process survives, refaults stay close to baseline, CPU time rises ≤5 %, janky frames rise ≤1 percentage point, and P95 frame time rises ≤3 ms. Set `android:maxMb` 10–20 % above the knee so normal variation does not push you below it.

![Smartphone screen showing app icons](https://images.unsplash.com/photo-1715289302856-e488857f25f8?auto=format&fit=crop&w=800&q=80)

## Runtime APIs for dynamic control

Manifest declarations are preferred. For workloads that change (for example an image editor that is light while browsing thumbnails and heavy while editing), use `MemoryBudgetManager` on API 37.2+.

```kotlin
if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.BAKLAVA &&
    Build.VERSION.SDK_INT_FULL >= Build.VERSION_CODES_FULL.CINNAMON_BUN_2) {
    val budgetManager = context.getSystemService(MemoryBudgetManager::class.java)
    try {
        budgetManager.processBudgetBytes = 96L * 1024L * 1024L
    } catch (e: IllegalArgumentException) {
        // Exceeds manifest ceiling or system limit
    }
    // Later: budgetManager.clearProcessBudget()
}
```

A runtime budget can only tighten a manifest ceiling; it cannot raise it. Register an `OnOverBudgetListener` on a background `HandlerThread` so you can drop large caches before the OS does more aggressive reclaim. Call the APIs only at lifecycle or task boundaries, not in tight loops.

Native code can use the NDK headers in `libandroid.so` (`AMemoryBudgetManager_setProcessBudget` and related functions).

## Testing and verification

After adding the declarations, install a release build and check `adb shell dumpsys meminfo <package>`. The Memory Budget section shows the active budget and its source. Also inspect process state with `adb shell dumpsys activity processes <package>`.

Watch for the system memory limiter as well. If your app still hits the device-wide ceiling, you will see exit reasons containing “MemoryLimiter:AnonSwap”. The budgets you declare help you stay well under that hard limit.

## Tips for production

- Prefer a single baseline budget unless you have clear state-specific or multi-process needs.
- Calibrate on the exact release build and device classes your users have.
- Keep 10–20 % headroom above the measured knee.
- Use runtime APIs only for temporary tightening; clear them when the heavy work ends.
- Combine with R8 shrinking and bitmap best practices. Less resident code and fewer large bitmaps make every budget easier to meet.

## Conclusion

Declaring `<memory-budget>` elements gives you an explicit contract with the Android 17 memory system. The OS reclaims cold pages and swaps inactive heap so your process stays within the working set you measured, without the abrupt kills that come from the system-wide limiter. Start with a simple baseline, measure the knee on real flows, then add state or process overrides only where they reduce field memory use. The runtime APIs remain available when a single static value cannot cover every mode of your app.

Official documentation: [Set app memory budgets](https://developer.android.com/topic/performance/memory/app-memory-budgets).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/fOXJR5qLq54"
    title="Engineering memory-performant Android apps"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
