---
title: "Ship Smarter Consumer Keep Rules for R8 DEX Optimization"
description: "How library providers ship narrow consumer keep rules so apps meet Google Play DEX optimization thresholds and unlock full R8 performance."
pubDate: 2026-11-27T12:00:00
heroImage: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "developer", "how-to"]
noindex: false
---

Google Play now tracks DEX code optimization scores for apps and games. Starting in 2027, releases with more than 10 MB of uncompressed DEX (50 MB for games) must reach at least 25 percent optimization, 25 percent obfuscation, and 25 percent shrinking. R8 can only optimize within the rules it receives. Broad consumer keep rules shipped by libraries block that work for every app that depends on them.

Library authors control a large part of those scores. When you package narrow consumer rules, downstream apps unlock better startup times, lower memory use, and higher Play Console scores without extra work from app developers.

This guide shows how to audit, narrow, and ship consumer keep rules that protect reflection and JNI targets while letting R8 do its job.

## What consumer keep rules actually do

Consumer keep rules live inside your AAR or JAR. They tell R8 which parts of your library must survive app-level optimization. App developers never copy them into their own `proguard-rules.pro` files. The rules apply automatically when the library is on the classpath.

Package-wide rules such as `-keep public class com.example.sdk.** { *; }` preserve unused classes, methods, and fields. They also override narrower rules that other libraries or the app itself may supply. The result shows up in Play Console as lower optimization percentages and larger DEX files.

R8 builds a reference graph from entry points. A precise rule that keeps only the class or method your library reflects on lets R8 shrink, optimize, and obfuscate everything else.

![Laptop and phone workspace for Android development](https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=800&q=80)

## Test narrow rules before you ship them

Create a minimal sample app that depends on your library. Enable R8 full mode and exercise the critical paths that use reflection or JNI.

Run the R8 Configuration Analyzer on the sample. The report lists every keep rule (including yours) and shows the percentage of classes, fields, and methods it blocks. Look for rules that keep large numbers of items you never access dynamically.

Use the Android CLI analyze command on your AAR:

```
android analyze --analysis=optimization your-library.aar
```

Compare the kept-item counts across versions. Upload mapping files to the Play SDK Console so you can read deobfuscated crash reports without forcing `keepnames` on your consumers.

## Prefer codegen over reflection

Reflection hides call sites from R8’s static analysis. Every reflective access needs a keep rule. Code generation (as Hilt and many serialization libraries do) makes those calls visible at compile time. R8 then sees the real usage and needs almost no extra rules.

Where reflection remains necessary—optional feature modules, ad mediation adapters, or plugin systems—keep only the entry point. Example for an optional decoder loaded by class name:

```
-keepclassmembers class com.example.media.OptionalDecoder {
  public <init>();
}
```

R8 retains the constructor and follows the graph from there. It still removes unused methods and fields inside the class and everything else in the package.

Jetpack Keep annotations (currently alpha) can generate these narrow rules automatically from annotations placed on reflective calls. See our earlier guide on [generating R8 keep rules with Jetpack Keep](/blog/how-to-generate-r8-keep-rules-with-jetpack-keep/) for the setup steps.

## Scope rules for third-party dependencies

A common anti-pattern is:

```
-keep public class com.google.android.gms.** { *; }
```

If your library uses only a handful of GMS classes via reflection, that rule forces every app to retain the entire package even when those apps already supply tighter rules. Write rules that match only the specific classes and members you access. Most Google libraries already ship their own consumer rules; a package-wide rule from your AAR will subsume them.

For ad mediation, use conditional keep rules so R8 can drop unused formats when the corresponding adapter is absent. Jetpack Keep can emit those conditional rules from source annotations.

![Laptop showing code next to glasses on a desk](https://images.unsplash.com/photo-1763568258187-a0d90864ed66?auto=format&fit=crop&w=800&q=80)

## Ship rules inside the library, not in documentation

Place the rules in a file referenced by `consumerProguardFiles` in your library’s `build.gradle.kts`:

```kotlin
android {
    defaultConfig {
        consumerProguardFiles("consumer-rules.pro")
    }
}
```

Apps with R8 enabled pick them up automatically. Documenting the rules instead creates friction and leaves apps carrying stale rules after they upgrade. When you rename classes or change reflection targets, update the consumer file in the same release. Downstream apps receive the correct rules without manual steps.

Avoid global options such as `-dontobfuscate` or `-allowaccessmodification`. They limit optimization across the entire app.

## Handle stack traces without sacrificing optimization

Obfuscated stack traces look unreadable, but you do not need to disable renaming. Firebase Crashlytics, Play Console, and Android Studio Logcat (AGP 9+) deobfuscate them automatically when the mapping file is present. Upload the mapping file for each library version to the SDK Console. App developers can share a deobfuscated trace with you; you can read it without forcing `keepnames` on every consumer.

## Tips for library authors

- Audit with the R8 Configuration Analyzer on a sample app before every release.
- Prefer Jetpack Keep annotations or codegen over handwritten package-wide rules.
- Test the exact reflection and JNI paths in a release build of the sample app.
- Monitor SDK Console crash data after you narrow rules; fix any regressions in the next version.
- Compare `android analyze` output across versions to catch accidental rule widening.

When libraries ship precise consumer rules, apps become smaller and faster. Start with the analyzer report on your next release candidate. The numbers it surfaces tell you exactly which rules are costing your users startup time and memory.

## Sources

- [Ship smarter keep rules: How library providers can unblock app-level DEX code optimization](https://developer.android.com/blog/posts/ship-smarter-keep-rules-unblock-dex-optimization) — Android Developers Blog, 17 Nov 2026
- [Optimization for library authors](https://developer.android.com/topic/performance/app-optimization/library-optimization) — Android Developers
- [R8 Configuration Analyzer](https://developer.android.com/topic/performance/app-optimization/r8-configuration-analyzer) — Android Developers

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/A0I6pNSM14o"
    title="How to debug and troubleshoot R8 optimizer | Spotlight Week"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
