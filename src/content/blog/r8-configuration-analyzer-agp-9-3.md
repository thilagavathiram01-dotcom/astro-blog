---
title: "How to Run the R8 Configuration Analyzer on Android"
description: "Run the R8 Configuration Analyzer in AGP 9.3, read shrinking and obfuscation scores, and tighten keep rules that bloat Android apps."
pubDate: 2026-10-07T12:00:00
heroImage: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "developer", "how-to"]
noindex: false
---

A release build that ignores keep rules ships unused code. Android Gradle Plugin 9.3 adds the R8 Configuration Analyzer so you can see which rules block shrinking, optimization, and obfuscation before you add another blanket `-keep`.

The report is official Android tooling, not a third-party plugin. It works as a standalone Gradle task when you are iterating, and it is written automatically on a full R8 release build. Android also ships an optional agent skill that can read the same configuration.

If you already ship [adaptive Glance widgets](/blog/adaptive-glance-widgets-phone-wear-auto/), this report is the right next check. Glance has open issues around keep rules, and a widget that works in debug can vanish in a minified release.

## What the three scores mean

R8 Configuration Analyzer scores the share of classes, fields, and methods that R8 is still allowed to touch.

Shrinking is unused-code removal. A shrinking score of 66% means R8 can remove unused members from 66% of the codebase. The rest is held by keep rules, including rules that libraries ship as consumer ProGuard files.

Optimization covers rewrites such as method inlining and class merging. Those changes affect startup and memory, not only APK size. Obfuscation is renaming to shorter names, which cuts metadata size.

A low score is not always a bug. Reflection, JNI, and serialization need explicit keeps. The analyzer exists so you can tell a required keep from a copied rule that matches an entire package.

![Developer reviewing Android build output on a laptop](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Requirements before you run it

You need a module that already runs R8. In the app `build.gradle` or `build.gradle.kts`, release minification must be on. Android documents the analyzer for AGP 9.3.0 and higher. The docs also note availability from R8 9.3.7-dev, and AGP 9.3.0-alpha05 or newer for the integrated report path.

Full mode is the configuration worth measuring. Compatibility mode keeps more code so older rules do not break, which hides the problems the analyzer is meant to surface.

Confirm the Android Gradle Plugin version in the project build file before you chase a missing task. On AGP 9.2 and earlier, Google documents a temporary classpath override to a newer R8 and a system property that dumps an HTML report. That path is for analysis only. Do not leave a pinned R8 classpath in a release branch unless you intend to own that version.

## Generate the report without a full APK

When you are editing keep rules, skip packaging. From the project root, run the module task:

```bash
./gradlew :app:analyzeReleaseR8Config
```

Replace `app` if your application module has another name. The task does not produce an APK or App Bundle. The HTML report lands at `app/build/reports/r8/r8-config-analyzer-release.html`. Open that file in a browser.

On a normal release build such as `assembleRelease`, Android writes the same kind of report to `build/outputs/mapping/release/configanalyzer.html`. You can turn that automatic output off with the Gradle property `android.experimental.r8.enableR8ConfigurationAnalyzer=false`.

For AGP 9.2 and earlier, the documented workaround adds a newer R8 on the buildscript classpath in `settings.gradle` or `settings.gradle.kts`, then runs a minified assemble with `-Dcom.android.tools.r8.dumpkeepradiushtmltodirectory` pointed at an output folder. The official example uses R8 `9.4.14` and `/tmp/r8analysis`. Treat that pin as temporary.

## Read keep-rule analysis

The summary section shows the three scores. Below that, Keep Rule Analysis lists each rule and the share of classes, fields, and methods it blocks. Click a rule for the members it matches and the optimization properties it disables.

Sort by impact, not by file order. A rule that matches `com.example.** { *; }` will dominate a rule that keeps one reflected field. The broad rule is the one to rewrite first.

Android's guidance is narrow: keep only members reached by reflection or another dynamic lookup that R8 cannot see. Prefer a specific class and member over a package wildcard. After each edit, rerun `analyzeReleaseR8Config` and compare the scores. A higher score means more of the program is eligible for R8, not that the app is already smaller. Size changes show up on the next release build.

![Close-up of code on a monitor during an Android build review](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Find library rules and subsumed rules

Libraries ship consumer keep rules because the author cannot see your call sites. Some of those rules are wider than your app needs, and they can block optimization outside the library. The analyzer shows the merged effect, so you can trace a costly rule back to a dependency.

Google recommends contacting the maintainer with the report data, and checking existing issues before you file a new one. If you need a local experiment, you can filter rules from a library, import the ones you still need, and rerun the analyzer. Measure before you ship that filter. A filtered rule that drops a reflected entry point will fail only on the release variant.

Subsumed rules are overlaps. If one rule keeps `com.example.package.**` and another keeps a single class in that package, the package rule already covers the class. The analyzer flags that pattern. Delete the broader rule only when the narrow rule matches the members you actually reflect on. If the broad rule is the correct set, delete the narrow duplicate instead.

Unused rules match nothing in the current build. Identical rules repeat the same target in one file or across files. Both add noise. Remove them after you confirm they are leftovers from a deleted dependency or a copy-paste ProGuard snippet.

## Optional agent skill

Android publishes an R8 analyzer skill in the android/skills repository. With the Android CLI you can add it:

```bash
android skills add r8-analyzer
```

The documented prompt is `Analyze the R8 configuration`. The skill does not replace the Gradle task. Use the HTML report as the source of truth, and use the skill to walk the same keep files while you edit.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/A0I6pNSM14o"
    title="How to debug and troubleshoot R8 optimizer"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## A practical pass on an existing app

Start from a clean release configuration. Run `analyzeReleaseR8Config` and save the three scores. Open the highest-impact app-owned rule. If it uses `**` and `{ *; }`, replace it with the class and members that reflection actually reads. Rerun the task.

Next, check library rules that move the optimization score by a large amount. Note the dependency coordinate in your issue tracker. Do not delete a consumer rule in the same change as an app rule. You will not know which edit broke a release test.

Then clear unused and identical rules. Finish with a minified release build and the tests that hit reflection, serialization, and any Glance or widget code path. Mapping files still belong in Play Console so crash reports retrace. The analyzer does not upload them for you.

Android 17 also applies device RAM-based memory limits aimed at extreme leaks and outliers. A smaller, fully optimized binary is not a style preference on that release. It is headroom. The R8 Configuration Analyzer is the fastest way to see which keep file is spending that headroom.

## Tips that prevent a bad release

Never ship `-dontshrink`, `-dontobfuscate`, or a keep of every class as a temporary fix that stays in `proguard-rules.pro`. Those flags disable the work the scores are measuring.

Avoid a leading `!` in a class filter unless you have read the matching rules. Negation does not mean "keep only the outside of this package" in the way most people expect, and a single bad rule can freeze optimization for the whole program.

Re-run the analyzer after you add a library. Consumer rules arrive with the dependency, and yesterday's scores will not match today's graph.

## Close the loop

Generate the HTML report, rank rules by how much they block, and narrow the ones you own. Library rules get a measured experiment or an upstream bug, not a silent `-keep` pasted from a forum. The task to remember is `analyzeReleaseR8Config`, and the file to open is `r8-config-analyzer-release.html`.

## Sources

- Android Developers, Use R8 Configuration Analyzer: https://developer.android.com/topic/performance/app-optimization/r8-configuration-analyzer
- Android Developers, Enable app optimization with R8: https://developer.android.com/topic/performance/app-optimization/enable-app-optimization
- Android skills, r8-analyzer: https://github.com/android/skills/tree/main/performance/r8-analyzer
- Android Developers, How to debug and troubleshoot R8 optimizer (YouTube): https://www.youtube.com/watch?v=A0I6pNSM14o
