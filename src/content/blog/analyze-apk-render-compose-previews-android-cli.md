---
title: "How to Analyze APKs and Render Compose Previews with Android CLI"
description: "Step-by-step guide to android analyze and android preview in Android CLI 1.1 for inspecting APKs, AABs, and rendering Compose previews without a device or IDE."
pubDate: 2026-10-26T17:00:00
heroImage: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "developer", "ai-tools"]
noindex: false
---

Android CLI 1.1 added two commands that move inspection and UI checks out of Android Studio. The `android analyze` command reads package details, DEX sizes, and R8 optimization metrics from APKs, AABs, AARs, and JARs. The `android preview` command lists and renders Jetpack Compose `@Preview` functions to PNG images and component trees on the host machine. No connected device or running IDE is required.

These features landed in version 1.1.16717390 (October 2026). They complement the earlier field signals and profiler tools. Official descriptions appear in the Android CLI release notes and command reference.

![Developer at a multi-monitor setup reviewing code](https://images.unsplash.com/photo-1623479322729-28b25c16b011?auto=format&fit=crop&w=800&q=80)

## Prerequisites

Update or install Android CLI to version 1.1 or newer. The quick Linux path is:

```bash
curl -fsSL https://dl.google.com/android/cli/latest/linux_x86_64/install.sh | bash
android update
```

Windows and macOS use the matching scripts or package managers listed on the download page. Confirm with `android --version`.

You need an Android project that builds, or a ready APK/AAB/AAR/JAR. For previews, the project must contain at least one `@Preview` composable and a valid Gradle target. The CLI uses the local Android SDK; set `--sdk` if the default location is wrong.

## Analyze build artifacts

Run `android analyze` against one or more files. The default output is a human-readable summary. Add `--format=json` or `--format=textproto` for machines and agents.

```bash
android analyze app-release.apk
android analyze --format=json app-release.aab
```

Filter categories with `--analysis`. Values are `basic` and `optimization`. Basic reports package name, version name, and version code for apps. Optimization covers AGP version, uncompressed DEX size, R8 shrinking and optimization ratios, resource optimization status, and DEX marker metadata.

```bash
android analyze --analysis=optimization library.aar
android analyze app-release.apk library.aar
```

For libraries the command also surfaces keep-rule impact, kept versus total classes/methods/fields, and warnings about low optimization or blocked consumer rules. Native `.so` files are listed when present.

This is useful in CI or when an agent needs to confirm that R8 ran as expected before a release. Pair it with the earlier [Crashlytics signals guide](/blog/query-crashlytics-android-cli-signals/) when you want both local artifact health and field stability data.

## List and render Compose previews

The `android preview` subcommands work headlessly. First list the available `@Preview` functions in a target:

```bash
android preview list :app
```

The output shows fully qualified names. Render one or more:

```bash
android preview render --fqn com.example.app.ui.HomeScreenPreview --output ./previews/
```

The command builds the target, writes PNG images, and can emit component-tree JSON. No emulator or Android Studio process is required. The release notes note that the render runs on the host machine.

Use the rendered images to compare against design files or to feed visual checks into an agent workflow. Because the process is deterministic and offline, it fits CI pipelines that previously needed a running Studio instance.

![Terminal window showing code and command output](https://images.unsplash.com/photo-1774901128276-1eab48f1fb9c?auto=format&fit=crop&w=800&q=80)

## Practical workflow

1. Build a release or debug artifact with your normal Gradle task or `android build`.
2. Run `android analyze` on the output APK or AAB and check the R8 ratios and DEX size.
3. List previews with `android preview list` on the relevant module.
4. Render the key screens to a folder and inspect the PNGs.
5. If an agent is involved, pass the JSON analysis and the image paths as context for further changes.

The analyze step catches missing shrinking or unexpectedly large DEX files early. The preview step confirms that composables still render after those changes.

## Tips

- Prefer `--format=json` when scripts or agents will parse the result. Human-readable output is easier for quick checks.
- Render only the previews you care about. Full-project renders take longer because they still perform a build.
- Keep the CLI current. Later point releases may add more analysis categories or output options.
- If a preview fails, run the same target with a normal Gradle build first to surface compile errors.
- Combine with `android studio` commands when you already have Studio open and need semantic navigation instead of pure headless rendering.

## Video overview

The Android Developers channel demonstrates the broader CLI and skills surface that these commands sit inside:

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/JMPd2jbQEqo"
    title="Android CLI and skills to improve your development"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Android CLI 1.1 turns artifact inspection and Compose preview rendering into ordinary terminal commands. Analyze an APK or AAB for size and R8 metrics, then list and render previews without starting a device or the IDE. Both outputs are designed for humans and for agents that already drive the rest of the Android workflow.

Update the CLI, point it at a recent build, and run the two commands on your next feature. The release notes and command reference pages list every flag if you need finer control.

## Sources

- Android CLI release notes (version 1.1.16717390, October 2026): https://developer.android.com/tools/agents/android-cli/release-notes
- Android CLI command reference: https://developer.android.com/tools/agents/android-cli/commands
- android analyze command page: https://developer.android.com/tools/agents/android-cli/commands/analyze
- android preview command page: https://developer.android.com/tools/agents/android-cli/commands/preview
