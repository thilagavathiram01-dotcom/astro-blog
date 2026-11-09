---
title: "Render Compose Previews Headlessly with Android CLI"
description: "Use the android preview command in Android CLI to render Jetpack Compose previews without emulators or IDEs for faster AI agent UI work."
pubDate: 2026-11-09T18:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "ai-tools", "developer"]
noindex: false
---

AI coding agents finish UI tasks faster when they can see the result of a Compose change without waiting for an emulator boot. The `android preview` command in Android CLI renders `@Preview` functions to PNG images on your host machine.

Google introduced this capability as part of the agentic tooling updates at Android Dev Summit 2026. Agents that used the headless preview path completed UI tasks 77% faster and consumed up to three times fewer tokens in Google's internal measurements. The command requires no running device, emulator, or Android Studio instance.

This guide shows how to install Android CLI, list available previews, render them, and feed the output back to an agent such as Claude Code or Codex.

## Why headless previews help agents

Traditional preview workflows force an agent to launch an emulator or switch to the IDE design surface. Both steps add latency and extra context. The `android preview` set builds the target and renders the composable offscreen.

You get PNG images and, optionally, a component tree JSON file that lists bounds, names, semantics, and modifiers. An agent can read the image description or the JSON directly instead of parsing Logcat or screenshots from a device.

The feature pairs with the official Android CLI plugins for Claude Code and Codex. Once the plugin is installed, the agent already knows the `android` command surface.

## Install Android CLI

Download the latest binary for your platform from the [Android CLI page](https://developer.android.com/cli). On Linux the one-liner is:

```bash
curl -fsSL https://dl.google.com/android/cli/latest/linux_x86_64/install.sh | bash
```

Verify the install:

```bash
android --version
```

The command also accepts `--sdk` if your Android SDK lives outside the default location. Run `android update` after the first install so the tool can locate the SDK and platform tools.

## List available Compose previews

From the root of a Gradle project that already contains `@Preview` functions, run:

```bash
android preview list :app
```

The command discovers every `@Preview` in the target and prints the fully qualified names. Example output looks like:

```
com.example.app.HomeScreenKt.HomeScreenPreview
com.example.app.SettingsScreenKt.SettingsPreview
```

Use these names with the `--fqn` flag in the render step. You can also omit the module path to use the default target in the current workspace.

## Render previews to PNG

The render subcommand builds the target and writes images. A minimal invocation:

```bash
android preview render :app --fqn=com.example.app.HomeScreenKt.HomeScreenPreview
```

By default the PNGs land in a temporary directory and the absolute paths are printed to stdout. Add flags to control the output:

```bash
android preview render :app \
  --output=./previews \
  --component-tree \
  --daemon \
  --fqn=com.example.app.HomeScreenKt.HomeScreenPreview \
  --fqn=com.example.app.SettingsScreenKt.SettingsPreview
```

- `--output` sets a stable directory.
- `--component-tree` writes a companion JSON file next to each PNG.
- `--daemon` keeps a warm background process so subsequent renders skip cold-start overhead.

The JSON contains the component tree, bounds, semantics, parameters, and modifiers. Agents can parse it to decide whether a layout change matches the expected structure without visual inspection.

## Feed results back to an agent

After the plugin is installed, an agent can call the same commands itself. For Claude Code:

```bash
claude plugin marketplace add android/android-cli-plugin
claude plugin install android-cli@android-cli-plugin
```

For Codex the verbs differ slightly:

```bash
codex plugin marketplace add android/android-cli-plugin
codex plugin add android-cli@android-cli-plugin
```

Once the skill is present, ask the agent to render a specific preview, inspect the PNG or JSON, and iterate. Example prompt:

"Render the HomeScreenPreview with android preview, check the component tree for the title text bounds, and adjust the padding if the title overlaps the toolbar."

Because the render runs headlessly, the agent stays in the terminal and does not need to manage emulator state.

## Tips for reliable results

Start with a clean Gradle sync. The preview command uses the same build system as a normal assemble, so unresolved dependencies or missing SDK platforms will fail the same way a normal build fails.

Prefer `--daemon` during an iterative session. The first render pays the full compile cost; later ones reuse the warm process.

When you need semantics rather than pixels, always pass `--component-tree`. The JSON is smaller and more precise for agents than a description of a screenshot.

If you also want to test on a real device, combine the preview step with `android device remote`. That command gives agents access to physical devices in Google's lab without local hardware.

For projects that already use AppFunctions or Android MCP, the same CLI surface lets agents both render UI and invoke app functions. See our guide on [adding AppFunctions to an Android app](/blog/android-appfunctions-agents/) for the complementary setup.

## Limitations to know

The command renders `@Preview` functions only. It does not replace a full instrumented test or a device-side screenshot of a running activity. Dynamic content that depends on runtime state, network, or user interaction will still need an emulator or device.

Google's 77% figure comes from internal testing on UI tasks. Your mileage depends on project size, the complexity of the previews, and how well the agent uses the structured output.

The feature is available with the current Android CLI releases that shipped alongside Android Studio Rabbit 2. Check the [CLI release notes](https://developer.android.com/tools/agents/android-cli/release-notes) if a command is missing on your install.

## Conclusion

Headless Compose previews remove one of the biggest friction points for AI agents working on Android UI. Install Android CLI, list the previews in your module, render them with optional component trees, and let the agent iterate without leaving the terminal.

The same tooling works with the official plugins for Claude Code and Codex, and it pairs with other agent features such as AppFunctions and device streaming. Start with a single preview on a small screen, confirm the output, then expand to the rest of the project.

## Sources

- [android preview command reference](https://developer.android.com/tools/agents/android-cli/commands/preview)
- [Android CLI overview](https://developer.android.com/cli)
- [Android Dev Summit 2026 tools announcements](https://developer.android.com/blog/posts/android-dev-summit-26-developer-tools-performance)
- [Agent plugins documentation](https://developer.android.com/tools/agents/android-cli/agent-plugins)

![Multiple computer screens showing code in a developer workspace](https://images.unsplash.com/photo-1759661990336-51bd4b951fea?auto=format&fit=crop&w=800&q=80)

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/8Lmv7LGgL4E"
    title="Android Dev Summit 2026 keynote"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

![Close-up of syntax-highlighted code on a monitor](https://images.unsplash.com/photo-1743090660977-babf07732432?auto=format&fit=crop&w=800&q=80)
