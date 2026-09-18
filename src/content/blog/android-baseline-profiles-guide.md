---
title: "How to Create Android Baseline Profiles for Faster First Launch"
description: "Generate Baseline Profiles with the Android Studio template, Macrobenchmark, and AGP 8+, then ship AOT-compiled startup and scroll paths so new users see about 30% faster first runs."
pubDate: 2026-09-18T18:20:00
tags: ["android", "tutorials", "performance"]
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=80"
---

A new install should not feel like a warm-up lap. Without a Baseline Profile, Android interprets and JIT-compiles critical code the first time someone opens your app. Official Android documentation still cites about **30% faster execution** on those first-run paths when you ship a profile so ART can AOT-compile them at install time.

This guide is a practical walkthrough for app teams: what a Baseline Profile is, how it differs from a Startup Profile, how to generate one with current AGP and Android Studio templates, and how to check that it actually moved Time to initial display.

## What a Baseline Profile does

A Baseline Profile is a set of human-readable method and class rules that the build compiles into `assets/dexopt/baseline.prof` inside the APK or App Bundle. Google Play delivers that profile with the app. During install, ART AOT-compiles the listed paths so startup, navigation, and scroll work do not wait on interpretation.

That is different from **Cloud Profiles**, which Play builds later from real-user traces. Cloud Profiles still help over time. A Baseline Profile is under your control and is available on first launch after an install or update.

**Startup Profiles** are related but not the same file. They inform **DEX layout** at compile time so hot startup code sits together on disk. Official docs treat the Baseline Profile as the broader runtime compilation set; a Startup Profile is the extra layout pass. You usually generate both with the same Gradle plugin.

![Developer reviewing an Android phone next to a laptop during a performance test](https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=1200&q=80)

## What you need first

Google’s current recommended floor (or higher) is:

- Android Gradle Plugin **8.0.0** (8.2+ if you want the Baseline Profile Generator module template)
- Macrobenchmark `androidx.benchmark:benchmark-macro-junit4:**1.5.0**`
- Profile Installer `androidx.profileinstaller:profileinstaller:**1.4.1**`

Use the newest stable AGP you can. AGP 8.2 added R8 rewriting of profile rules so you can capture profiles from a **non-minified** generation build and apply them to a **minified** release. AGP 8.4 also installs profiles on local non-debuggable installs so a local release run is closer to production.

Two build variants matter:

- **Generation / benchmark variant:** obfuscation off (`isMinifyEnabled = false`) so method names in `baseline-prof.txt` match source.
- **Release variant:** obfuscation on. R8 rewrites the unobfuscated rules onto the minified DEX.

Do not generate the profile from the same minified flavor you ship.

## Create the module with the Studio template

On Android Studio Iguana or later with AGP 8.2+:

1. **File > New > New Module**
2. Choose **Baseline Profile Generator**
3. Set the target application module, module name, package, and whether to use a Gradle-managed device
4. Finish and commit the new module if you use source control

The template wires generation tests, a benchmark test for startup, and a **Generate Baseline Profile** run configuration. If you have product flavors, Studio creates one configuration per flavor.

Open the generated generator class and treat default startup as the minimum, not the product. Add the journeys users actually feel.

```kotlin
class BaselineProfileGenerator {
    @get:Rule
    val baselineProfileRule = BaselineProfileRule()

    @Test
    fun appStartupAndUserJourneys() {
        baselineProfileRule.collect(packageName = PACKAGE_NAME) {
            uiAutomator {
                startApp(PACKAGE_NAME)
                onElement { textAsString() == "COMPOSE LAZYLIST" }.click()
                onElement { viewIdResourceName == "myLazyColumn" }.also {
                    it.fling(Direction.DOWN)
                    it.fling(Direction.UP)
                }
                pressBack()
            }
        }
    }
}
```

That pattern matches the official overview sample: start the app, hit a list screen, fling, go back. Keep startup steps in a rule with `includeInStartupProfile = true`. Keep non-startup journeys out of the Startup Profile so DEX layout stays focused on launch.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/yJm5On5Gp4c" title="Making apps blazing fast with Baseline Profiles" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Generate the profile

Run the **Generate Baseline Profile** configuration, or from the terminal:

```bash
./gradlew :app:generateBaselineProfile
```

Use a flavor-specific task if you need one (`:app:generateReleaseBaselineProfile` and similar). Generation is an instrumented test. Official guidance: rooted physical device, emulator, or a Gradle-managed device with `systemImageSource = "aosp"` because the generator needs root. Connected devices work when they are rooted or on API 33+.

When the task finishes, the plugin copies `baseline-prof.txt` into the app module under `src/<variant>/generated/baselineProfiles/`. You should not hand-copy files out of `build/outputs` unless you are debugging the pipeline.

Confirm the text file still has readable class names. If you see obfuscated identifiers, the generation variant was minified and the profile will not map cleanly.

## What to include (and what to skip)

Cover journeys that cost frames or wait time:

- Cold start through first meaningful content
- The first two or three navigation hops after launch
- A representative scroll on the home feed or search results
- Login, checkout, or another flow you measure in vitals

Call `reportFullyDrawn()` (or `FullyDrawnReporter`) when async content is actually on screen. Time to full display (TTFD) is TTID plus that async work. If you never report fully drawn, only TTID is recorded, and code that runs after the first frame never lands in the profile.

Libraries can ship their own profiles. Jetpack Compose already does. Your app profile should still cover *your* composition and navigation, not only framework code.

![Close-up of Android code on a monitor during an app build](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80)

## Measure before you trust the file

The template adds a startup benchmark. Run it on a **physical** device. Official sample output looks like this:

```
StartupBenchmarks_startupCompilationBaselineProfiles
timeToInitialDisplayMs   min 161.8,   median 178.9,   max 194.6
StartupBenchmarks_startupCompilationNone
timeToInitialDisplayMs   min 184.7,   median 196.9,   max 202.9
```

Compare **CompilationBaselineProfiles** against **CompilationNone**. If the gap is noise, expand the journeys or check that Profile Installer is on the release classpath and that Play will receive `baseline.prof` inside the AAB.

Ship the release build with R8 full mode enabled. Startup-profile DEX layout only applies when the release app is obfuscated and optimized.

## Common mistakes

- Generating profiles from a minified variant
- Checking in an empty or stale `baseline-prof.txt` after a large navigation rewrite
- Optimizing only `Application.onCreate` and ignoring the first Compose list
- Skipping `reportFullyDrawn()` so TTFD never includes the real first screen
- Assuming sideloaded or non-Play installs behave like Play (Cloud Profiles are Play-only; Baseline Profiles still travel inside the APK when Profile Installer can apply them)

Android’s App Performance Score treats “Baseline Profiles present and covering a user journey” plus Startup Profiles as explicit startup criteria. If you already chase Play vitals, this is one of the cheaper static wins.

## Conclusion

Baseline Profiles are not a micro-benchmark hobby. They are the install-time contract that first-run users get compiled code for the paths you care about. Add the Studio generator module, record startup plus one real scroll or navigation journey, keep generation unminified and release minified, and read TTID on a phone before you call the change done.

Re-generate the profile when you change the first-run graph. The file is cheap to refresh and expensive to leave stale.

## Sources

- [Baseline Profiles overview](https://developer.android.com/topic/performance/baselineprofiles/overview) — Android Developers
- [Create Baseline Profiles](https://developer.android.com/topic/performance/baselineprofiles/create-baselineprofile) — Android Developers
- [Manually create and measure Baseline Profiles](https://developer.android.com/topic/performance/baselineprofiles/manually-create-measure) — Android Developers
- [Get your App Performance Score](https://developer.android.com/topic/performance/app-score) — Android Developers
- [Making apps blazing fast with Baseline Profiles](https://www.youtube.com/watch?v=yJm5On5Gp4c) — Android Developers
