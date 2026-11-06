---
title: "How to Optimize Apps for Android 17 Memory Limits"
description: "Android 17 per-app memory limits can slow or kill your app. Learn detection, adb testing, and optimization steps to stay under the cap."
pubDate: 2026-11-06T18:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "how-to", "developer"]
noindex: false
---

Android 17 introduces per-app memory limits that scale with device RAM. These limits target extreme memory use so one app cannot slow the whole phone. If your app exceeds its budget, the system first compresses pages into zRAM. Continued growth can terminate the process with no standard stack trace.

The feature launched on Pixel devices and expands to more manufacturers across 4 GB to 16 GB+ RAM devices. Google Play will also enforce related memory thresholds starting in 2027. Optimizing now prevents unexpected kills and keeps the user experience smooth.

## How Android 17 Memory Limits Work

Limits apply to anonymous RSS plus uncompressed swap. When an app hits its allocation, the system moves cold pages into zRAM. Compression and decompression add CPU overhead, which can cause jank.

If usage continues past the zRAM threshold, the process is terminated. The exit appears as `REASON_OTHER` in `ApplicationExitInfo` with the description containing `MemoryLimiter:AnonSwap`. Most well-behaved apps stay under the conservative limits. Outliers with leaks or large in-memory caches are the primary targets.

You can read more about related privacy controls in the [Android 17 location button guide](/blog/android-17-location-privacy-button-guide/).

![Person holding a smartphone](https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80)

## Detect Memory Limiter Kills

Use the existing `ApplicationExitInfo` API to identify limiter terminations after the fact.

```kotlin
val activityManager = getSystemService(Context.ACTIVITY_SERVICE) as ActivityManager
val exits = activityManager.getHistoricalProcessExitReasons(packageName, 0, 10)

exits.filter { it.reason == ApplicationExitInfo.REASON_OTHER }
    .filter { it.description?.contains("MemoryLimiter:AnonSwap") == true }
    .forEach { exit ->
        Log.w("MemoryLimiter", "Killed at ${exit.timestamp}, PSS=${exit.pss}")
        // Send to Crashlytics or your monitoring
    }
```

Crashlytics 20.1.0 adds extra debug data for these events. Android Vitals in Play Console tracks Memory Usage (Anonymous RSS + swap) and Bitmap Memory Usage across process states and RAM classes. ProfilingManager (API 35+) supports trigger-based heap dumps with `TRIGGER_TYPE_ANOMALY`.

## Test Limits Locally with adb

Devices that enforce the limiter expose `am memory-limiter` commands. These are no-ops on devices without the feature.

1. Find your process PID:
```bash
adb shell pidof com.example.app
```

2. Check current status:
```bash
adb shell am memory-limiter status
```
Example output shows visible and not-visible limits in MB.

3. Apply a tight manual limit for testing:
```bash
adb shell am memory-limiter manual <pid> 300
```

4. Restore the system default:
```bash
adb shell am memory-limiter manual <pid> none
```

5. Remove all limits for the process:
```bash
adb shell am memory-limiter manual <pid> max
```

You can also ignore a UID or all processes temporarily with `am memory-limiter ignore`. Use a low limit while exercising image-heavy or data-heavy flows to reproduce kills before users see them.

![Close-up of hands typing code on a laptop](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## Practical Optimization Steps

Enable R8 fully. Set `isMinifyEnabled = true` and `isShrinkResources = true` in your release build type. Prefer `proguard-android-optimize.txt` over the legacy file. Shrinking and obfuscation reduce the resident code size that stays in memory.

Manage bitmaps carefully. Decode images at the size you display them. Recycle or release large bitmaps when they leave the screen. Avoid holding full-resolution bitmaps in memory across configuration changes or process states.

Audit caches and large objects. Move big datasets to disk or Room when possible. Use paging for lists. Release memory in `onTrimMemory` and `onLowMemory` callbacks. Prefer view binding or Compose over retaining heavy view hierarchies.

For games and media apps, follow the official memory guidance. Profile with Android Studio Memory Profiler and heap dumps. Target the 90th percentile memory usage shown in Android Vitals.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/4BlGtrTeCMU"
    title="Optimize your app performance for the next generation of Android (I/O Connect ‘26)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for Staying Under the Limit

Monitor production with Android Vitals and Crashlytics so you catch rising memory before limits tighten across more devices. Test on both low-RAM and high-RAM hardware. Background and cached process states have tighter budgets than the visible foreground state.

Most sessions will not hit the limits. Extreme leaks and unbounded caches are the main risks. Address those first, then measure again.

## Conclusion

Android 17 per-app memory limits protect overall device performance by constraining outliers. Detect kills with `ApplicationExitInfo`, reproduce them with adb commands, and reduce your footprint with R8, careful bitmap handling, and caching discipline. Check Android Vitals regularly and stay ahead of the broader rollout and 2027 Play thresholds.

Sources: Android Developers Blog on preparing apps for broader memory limits, Android 17 behavior changes documentation for app memory limits, and official Memory Limiter shell command reference.
