---
title: "Audit Android R8 Keep Rules with Config Analyzer"
description: "Learn how to run the R8 Configuration Analyzer, read shrinking scores, and tighten keep rules so Android release builds stay smaller and faster."
pubDate: 2026-10-07T14:00:00
heroImage: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "developer", "how-to"]
noindex: false
---

Broad keep rules quietly cancel the gains you expected from R8. The R8 Configuration Analyzer, documented by Android Developers, shows which rules block shrinking, optimization, and obfuscation before you ship a release build.

UK bank Monzo reported a 30% improvement in cold starts and a 35% drop in ANRs after switching to the optimized default ProGuard file and letting R8 do its job. Those numbers come from the [Android Developers case study](https://developer.android.com/blog/posts/monzo-boosts-performance-metrics-by-up-to-35-with-a-simple-r8-update). The analyzer is the next step: it tells you which rules still hold the optimizer back.

This guide follows the official [R8 Configuration Analyzer](https://developer.android.com/topic/performance/app-optimization/r8-configuration-analyzer) docs. You will generate the HTML report, read the three scores, and clean subsumed, unused, and library rules.

## What the analyzer measures

R8 shrinks unused code, optimizes reachable code, and shortens names. Keep rules exist so reflection, JNI, and serialization still work. A rule that is wider than the reflection surface stops R8 on classes that never needed protection.

The report tracks three percentages of your codebase that R8 can still touch:

- **Shrinking score.** Share of classes, fields, and methods eligible for removal when unused. A score of 66% means R8 can shrink 66% of that surface.
- **Optimization score.** Share eligible for changes such as method inlining and class merging. Those changes affect startup and memory, not only download size.
- **Obfuscation score.** Share eligible for shorter names, which cuts metadata and memory use.

A low score is not a failure of R8. It usually means a `-keep` rule, a consumer rule from a library, or a global flag such as `-dontoptimize` is blocking work.

![Developer reviewing Android build output on a laptop](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Generate the report

Android Gradle Plugin 9.3.0 and higher can produce the report without a full APK. From the project root, run the module task:

```bash
./gradlew :app:analyzeReleaseR8Config
```

Replace `:app` with your application module name if it differs. The task skips APK and bundle packaging, so you can iterate on rules faster. Open the HTML file at `app/build/reports/r8/r8-config-analyzer-release.html`.

A full release build also writes a copy. After `assembleRelease`, look in `build/outputs/mapping/release/configanalyzer.html`. To turn that automatic file off, set this in `gradle.properties`:

```properties
android.experimental.r8.enableR8ConfigurationAnalyzer=false
```

Leave it on while you are cleaning rules. You want a fresh report after every keep-file edit.

### If you are still on AGP 9.2 or earlier

The docs say you can temporarily pin a newer R8 on the buildscript classpath in `settings.gradle.kts`:

```kotlin
pluginManagement {
    repositories {
        google()
        mavenCentral()
    }
    buildscript {
        dependencies {
            classpath("com.android.tools:r8:9.4.14")
        }
    }
}
```

Then dump the report while assembling release:

```bash
mkdir -p /tmp/r8analysis
./gradlew assembleRelease \
  -Dcom.android.tools.r8.dumpkeepradiushtmltodirectory=/tmp/r8analysis
```

Remove the classpath pin after the audit so your normal toolchain stays unchanged. The analyzer is also available from R8 9.3.7-dev, and AGP 9.3.0-alpha05 is the documented floor for the built-in task path.

You can also install Google's Android skill and ask an agent to run the same check:

```bash
android skills add r8-analyzer
```

The skill prompt in the docs is `Analyze the R8 configuration`. It still depends on the Gradle report, so run the task yourself if the agent cannot execute Gradle.

## Read keep-rule analysis

Open the summary first, then Keep Rule Analysis. Click a rule to see the classes, fields, and methods it blocks, and which optimization properties it disables.

Sort mentally by impact, not by file order. A single `-keep class com.example.** { *; }` can dominate the optimization score even if you also have a precise rule for one model class. The broader rule subsumes the narrow one. Android's example is exactly that pattern: a package-wide keep makes the class-level keep redundant and blocks the rest of the package.

Work through rules in this order:

1. Note the percentage of classes, fields, and methods each rule prevents R8 from optimizing.
2. Open the detail view and list members that are actually reached by reflection, JNI, or a serialization library.
3. Narrow the rule with a specific class, member, or keep modifier. The [keep-option guide](https://developer.android.com/topic/performance/app-optimization/add-keep-rules) and [keep-rule best practices](https://developer.android.com/topic/performance/app-optimization/keep-rules-best-practices) are the official references.
4. Rebuild the analyzer report and run the tests that cover those classes.

Do not delete a rule because the percentage looks high. Confirm the call path first. A payment SDK that loads classes by name will crash in release if you strip the keep without a replacement.

![Android phone on a desk next to notes](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## Clean library, subsumed, and unused rules

Third-party AARs ship consumer ProGuard files. Authors often keep more than your app uses, because they cannot see your call sites. The analyzer merges those rules and shows which library contributes the widest block.

Official guidance is to contact the maintainer with the report data, and to search existing issues before filing a new one. If you need a local experiment, filter that library's rules, import the ones you still need, and rerun the analyzer. Treat the filter as a measurement, not a permanent fork, until you have release tests.

Subsumed rules overlap. If the narrow rule already names every reflected member, delete the package-wide rule. If the broad rule is the correct boundary, delete the narrow duplicate and tighten the broad rule to reflected members only. Re-run the report and confirm the conflict section is gone.

The analyzer also flags two kinds of clutter:

- **Unused rules** match zero classes, methods, or fields in the current build. They linger after refactors and deleted dependencies.
- **Identical rules** repeat the same targets in one file or across files.

Removing them does not raise the optimization score by itself. It makes the next audit readable, which is how broad rules get fixed.

Global flags deserve a separate pass. `-dontoptimize` turns off inlining and related rewrites. `-dontshrink` keeps unused code. `-dontobfuscate` keeps long names. The Android performance docs treat these as production hazards, not defaults. From AGP 8, full mode is the default unless `android.enableR8.fullMode=false` is still in `gradle.properties`. Delete that line if you find it. Point release builds at `proguard-android-optimize.txt`, not the legacy `proguard-android.txt` file that injects `-dontoptimize`. That single swap is the change Monzo documented.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/A0I6pNSM14o"
    title="How to debug and troubleshoot R8 optimizer"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical tips before you ship

Run the standalone task on every keep-file change. A full `assembleRelease` is slower and hides the feedback the analyzer is meant to give.

Compare scores across builds, not against a universal target. A game engine and a Compose app will not share the same ceiling. Track whether your shrinking, optimization, and obfuscation scores move up after each narrowed rule.

Pair the report with startup traces. Keep-rule cleanup reduces code and metadata. Baseline profiles still shape which code is compiled ahead of first frame. If you have not added one, the walkthrough in [Android baseline profiles](/blog/android-baseline-profiles-guide/) covers the profile side of the same release build.

Test a minified release, not only debug. Reflection failures show up after R8, often on a screen you did not open in the last session. Cover payment, login, serialization, and any class loaded by name.

Check mapping files after a score jump. If a crash appears, `mapping.txt` from the release output is how you decode the stack. Do not flip `-dontobfuscate` back on as a shortcut.

## Conclusion

The R8 Configuration Analyzer is a report, not a new shrinker. On AGP 9.3.0 and higher, `./gradlew :app:analyzeReleaseR8Config` writes an HTML file that scores shrinking, optimization, and obfuscation, then lists the keep rules responsible. Narrow rules to reflected members, drop subsumed and unused lines, and ask library authors to tighten consumer rules that dominate the score.

Ship the release build you measured. A higher optimization score only helps users after the APK or bundle that produced the report is the one you upload.

## Sources

- Android Developers, [Use R8 Configuration Analyzer](https://developer.android.com/topic/performance/app-optimization/r8-configuration-analyzer) (updated 2026-09-08)
- Android Developers, [Enable app optimization with R8](https://developer.android.com/topic/performance/app-optimization/enable-app-optimization)
- Android Developers Blog, [Monzo boosts performance metrics by up to 35% with a simple R8 update](https://developer.android.com/blog/posts/monzo-boosts-performance-metrics-by-up-to-35-with-a-simple-r8-update) (30 Mar 2026)
- Android Developers, [How to debug and troubleshoot R8 optimizer](https://www.youtube.com/watch?v=A0I6pNSM14o)
