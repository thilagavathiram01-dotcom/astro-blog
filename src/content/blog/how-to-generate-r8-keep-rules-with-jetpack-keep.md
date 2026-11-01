---
title: "How to Generate R8 Keep Rules with Jetpack Keep"
description: "Step-by-step guide to Jetpack Keep annotations that generate conditional R8 keep rules for reflection and JNI in Android apps."
pubDate: 2026-11-01T10:00:00
heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "how-to"]
noindex: false
---

R8 shrinks and obfuscates Android apps by removing unused code. Reflection and JNI calls break that process because R8 cannot always see the targets. Developers traditionally write separate keep rules files that stay out of sync with the code. Jetpack Keep moves those rules into annotations next to the reflective calls.

The Jetpack Keep Gradle plugin reads the annotations at build time and emits conditional keep rules for R8. Conditional rules keep a target only when R8 also keeps the calling code. Unused optional features therefore do not bloat the release APK.

Google introduced the library as an alpha at Android Dev Summit 2026 alongside other performance tools. Official documentation is available on the Android Developers site under app optimization.

![Android developer reviewing code on a laptop](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Requirements and setup

Your project needs Android Gradle Plugin 8.7 or higher. The library and plugin ship at the same version (currently 1.0.0-alpha01). Add them to your version catalog:

```toml
[versions]
annotationKeep = "1.0.0-alpha01"

[libraries]
androidx-annotation-keep = { group = "androidx.annotation.keep", name = "keep", version.ref = "annotationKeep" }

[plugins]
androidx-annotation-keep = { id = "androidx.annotation.keep", version.ref = "annotationKeep" }
```

Declare the plugin in the root build.gradle.kts without applying it, next to the Android plugin. Apply both the plugin and the dependency in every module that contains reflection or JNI.

```kotlin
plugins {
    alias(libs.plugins.android.application)
    alias(libs.plugins.androidx.annotation.keep)
}

dependencies {
    implementation(libs.androidx.annotation.keep)
}
```

Sync the project. For app modules the plugin registers a variant-specific ExtractKeepRules task. Library modules package the generated rules as consumer keep rules.

## Annotate reflection calls

Place an annotation on the function, constructor, field, or class that performs the reflective call. The generated rule keeps the target only if R8 keeps the annotated element.

Four annotations cover the common cases:

- `@UsesReflectionToConstruct` for `getDeclaredConstructor().newInstance()`
- `@UsesReflectionToAccessMethod` for method lookups
- `@UsesReflectionToAccessField` for field access
- `@UnconditionallyKeep` for JNI or external entry points that R8 cannot see

Prefer `classConstant` when the class is on the compile classpath. Use `className` only for optional dependencies. Specify `parameterTypes` to keep a single overload; an empty array keeps only the no-argument constructor.

Example for constructing an implementation by name:

```kotlin
@UsesReflectionToConstruct(
    classConstant = StartupTask::class,
    parameterTypes = []
)
fun execute(className: String) {
    val task = Class.forName(className)
        .getDeclaredConstructor()
        .newInstance() as StartupTask
    task.run()
}
```

The generated rule keeps the no-argument constructor of every `StartupTask` implementation, but only while `execute` remains in the optimized app.

## Use lint to find missing annotations

Jetpack Keep ships two lint checks. `ReflectionWithoutKeepAnnotations` flags reflective calls that lack a matching annotation. `MissingKeepAnnotationPlugin` flags modules that depend on the library but do not apply the plugin.

Run lint on the module:

```bash
./gradlew :app:lint
```

Apply automatic fixes:

```bash
./gradlew :app:lintFix
```

Review every added annotation. Lint inserts a TODO placeholder when it cannot determine the target class. Replace the placeholder before the code compiles.

## Verify the generated rules

For an app module run the extraction task for the release variant:

```bash
./gradlew :app:releaseExtractKeepRules
```

The plugin writes rules to `app/build/generated/release/androidx.annotation.keep.rules.pro`. Each rule includes a context comment that points back to the annotated code. Compare the output with your existing manual rules before you delete them.

A package-wide manual rule may cover reflection that lint did not flag. Keep any rule that protects library or cross-module reflection.

![Close-up of code on a computer screen](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Tips for production use

Target the most specific class. Broader interfaces keep more members in subclasses and increase APK size.

Repeat the annotation when one function reflects on multiple targets. The plugin generates one conditional rule per annotation.

Test a full release build after you remove the old keep rules. R8 full mode and shrinking can surface previously hidden issues.

Pair Jetpack Keep with the R8 Configuration Analyzer to audit remaining manual rules. Our guide to [auditing Android R8 keep rules](/blog/audit-android-r8-keep-rules-with-config-analyzer/) shows how to run the analyzer and interpret its reports.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/bwlRxGJMzWs"
    title="Type-safe keep rules and DEX optimization"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Jetpack Keep keeps R8 rules next to the code that needs them and generates conditional rules that shrink cleanly. Lint surfaces missing annotations, and the extraction task lets you inspect the output before you delete manual rules.

Start with one module that uses reflection. Annotate the calls, extract the rules, and compare them with your current proguard files. Once the release build stays stable, expand the annotations across the project.

Official sources:
- [Generate keep rules from annotations](https://developer.android.com/topic/performance/app-optimization/jetpack-keep-annotations)
- [What's new in Android developer tools and performance at Android Dev Summit](https://developer.android.com/blog/posts/android-dev-summit-26-developer-tools-performance)
- [Annotation Keep release notes](https://developer.android.com/jetpack/androidx/releases/annotation-keep)
