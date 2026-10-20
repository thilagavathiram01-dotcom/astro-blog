---
title: "How to Enable R8 Full Mode and Cut ANRs 32% on Android"
description: "Step-by-step guide to enable R8 full mode, Baseline Profiles, and Startup Profiles. See how Grab reduced ANRs by 32% and improved startup by 35%."
pubDate: 2026-10-20T10:00:00
heroImage: "https://images.unsplash.com/photo-oYzjGQ7LCVE?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "developer", "productivity"]
noindex: false
---

Grab's Android superapp serves millions across Southeast Asia. After years of growth, the team faced rising Application Not Responding (ANR) rates, a swelling download size, and slower cold starts. In a October 2026 case study on the Android Developers Blog, Grab reported cutting user-perceived ANRs by about 32%, reducing download size by roughly 30%, and improving cold-start time by 35%.<grok type="render_inline_citation" citation_id="60" />

They did it by turning on R8 optimization, moving to full mode, refining keep rules, and shipping Baseline Profiles plus Startup Profiles. The same tools are available to any Android team. This guide walks through the practical steps.

## What R8 optimization actually changes

R8 is Android's code shrinker and optimizer. When you enable minification, it removes unused code and resources, then rewrites remaining methods for faster execution. Full mode (the default since Android Gradle Plugin 8.0) applies deeper whole-program optimizations such as more aggressive inlining and class merging.

Apps that stay on the older `proguard-android.txt` default file (or that still contain `android.enableR8.fullMode=false`) leave most of those gains on the table. Reddit saw roughly 40% faster cold starts and 30% fewer ANRs after enabling full mode. Disney+ and Monzo reported similar double-digit improvements from a single configuration change.<grok type="render_inline_citation" citation_id="63" />

Grab's results followed the same pattern, scaled to a 10-million-line hybrid Bazel/Gradle codebase.

![Developer typing code on a laptop during an Android performance session](https://images.unsplash.com/photo-xaWYIbNIOdw?auto=format&fit=crop&w=800&q=80)

## Step 1: Enable R8 in your release build

Open the app module's `build.gradle.kts` (or `.gradle`) and confirm the release block looks like this:

```kotlin
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
```

Use `proguard-android-optimize.txt`, not `proguard-android.txt`. The optimize file does not contain `-dontoptimize`.

Next, check `gradle.properties`. If this line exists, delete it:

```
android.enableR8.fullMode=false
```

Full mode has been the default since AGP 8.0. Removing the opt-out is enough for most projects. For AGP 9.3 and later the configuration surface changes slightly; follow the current official enablement guide if your project has already moved there.<grok type="render_inline_citation" citation_id="75" />

Build a release variant and verify the APK or AAB is smaller. Then run a cold-start Macrobenchmark before and after so you have numbers, not impressions.

## Step 2: Add Baseline Profiles and Startup Profiles

R8 improves the code that runs. Baseline Profiles tell the Android Runtime which methods to AOT-compile at install time so the first launch does not pay the interpretation and JIT cost. Startup Profiles further rearrange DEX layout so the hottest startup classes sit in the primary DEX file.

Grab measured an immediate 12% cold-start gain from R8 alone and another 15% once Baseline Profiles covered critical initialization paths (including Dagger graphs). The combination removed the post-release ANR spikes they had seen every week.<grok type="render_inline_citation" citation_id="60" />

If you have not generated profiles yet, follow the existing walkthrough: [How to Create Android Baseline Profiles for Faster First Launch](/blog/android-baseline-profiles-guide/). Use the Android Studio Baseline Profile Generator template, keep the generation variant unminified, and ship the rewritten rules with a minified release build.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/QqO2jZ-NZko"
    title="Boost Android app performance with the R8 optimizer | Spotlight Week"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step 3: Move from compat mode to full mode carefully

Large or old codebases often start in compat mode (`android.enableR8.fullMode=false`) so reflection-heavy libraries keep working. Grab did exactly that in their first phase (shipped 2025). After nine months they switched to full mode (shipped 2026) and gained another 14% size reduction, 10% startup improvement, and 10% ANR drop.

Common blockers:

- Gson versions older than 2.11 need explicit keep rules for `TypeToken` and the `Signature` attribute.
- Dynamic proxies and certain reflection patterns require targeted `-keep` rules for the specific classes and methods that are looked up at runtime.
- Broad `-keep class ** { *; }` rules defeat the optimizer. Prefer narrow rules.

The official full-mode migration guide lists the exact keep patterns for Gson, Retrofit, and other popular libraries. Adopt them one library at a time and re-test the affected user journeys.<grok type="render_inline_citation" citation_id="83" />

## Step 4: Refine keep rules with the Configuration Analyzer

After full mode is stable, run the R8 Configuration Analyzer (or the Android skill `r8-analyzer`). Grab's scores started at 72% optimization / 73% shrinking / 79.6% obfuscation and later rose to 78.2% / 79.1% / 81.7% after they trimmed legacy keep rules. That extra pass cut another 3.6% from download size.

Track the three scores in CI. Any new keep rule should require a justification and a review. This stops the gradual erosion that happens when teams add broad rules to silence a crash and never remove them.

![Multiple screens showing code and performance metrics in a developer workspace](https://images.unsplash.com/photo-gCyjEr-g2oI?auto=format&fit=crop&w=800&q=80)

## Practical tips for teams with large codebases

Grab's hybrid Bazel (debug) / Gradle (release) setup made experimental R8 builds slow. They aligned daily QA builds with production R8 settings so regressions surfaced before release. They also automated mapping-file uploads to Firebase Crashlytics so stack traces stayed readable.

Other habits that helped:

- Test only the code paths covered by the keep rules you are narrowing.
- Use incremental adoption: tree-shaking only, then obfuscation, then full mode.
- Re-generate Baseline Profiles after any large navigation or dependency change.
- Measure user-perceived ANRs and cold-start percentiles in Play Console, not just local benchmarks.

The Android App Performance Score treats "R8 full mode enabled" and "Baseline Profiles covering a user journey" as explicit criteria. Hitting both moves the static score and, more importantly, the real-user metrics.

## Conclusion

Enabling R8 full mode plus Baseline and Startup Profiles is one of the highest-leverage changes an Android team can make. Grab's multi-phase rollout produced a cumulative 32% drop in user-perceived ANRs, a 30% smaller download, and a 35% faster cold start on a decade-old superapp. The same levers exist for every project that still runs the older ProGuard defaults or has never generated a profile.

Start with the optimize ProGuard file and the full-mode default. Add profiles next. Then use the Configuration Analyzer to keep the gains. Measure before and after so the improvement is visible in Play vitals, not only in a local benchmark.

## Sources

- [Grab Reduces ANRs by 32% and improves startup time by 35% with R8 and Profile guided optimization](https://developer.android.com/blog/posts/grab-r8-profile-guided-optimization-anr-startup-time) — Android Developers Blog, 19 October 2026
- [Enable app optimization with R8](https://developer.android.com/topic/performance/app-optimization/enable-app-optimization) — Android Developers
- [Use R8 in full mode](https://developer.android.com/topic/performance/app-optimization/full-mode) — Android Developers
- [Baseline Profiles overview](https://developer.android.com/topic/performance/baselineprofiles/overview) — Android Developers
- [Use R8 to shrink, optimize, and fast-track your app](https://developer.android.com/blog/posts/use-r8-to-shrink-optimize-and-fast-track-your-app) — Android Developers Blog
- [Boost Android app performance with the R8 optimizer | Spotlight Week](https://www.youtube.com/watch?v=QqO2jZ-NZko) — Google for Developers
