---
title: "How to Render Compose Previews with Android CLI"
description: "Step-by-step guide to the android preview command for headless Jetpack Compose preview rendering in agents, without emulators or Android Studio."
pubDate: 2026-11-01T10:00:00
heroImage: "https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "how-to", "ai-tools"]
noindex: false
---

Agents that edit Android UI often waste cycles launching emulators just to check a button layout. Android CLI now includes the `android preview` command set that builds a target and renders Jetpack Compose `@Preview` functions to PNG images on the host machine.

This runs without a connected device, emulator, or open Android Studio instance. Google reported that agents using the preview flow finished UI tasks 77 percent faster and used up to three times fewer tokens in internal tests.

You get visual confirmation of layout changes and optional component-tree JSON for structured inspection. Pair it with existing Android skills so the agent follows current Compose practices.

## Prerequisites

Install the latest Android CLI from the official download page. Confirm the `android` binary is on your PATH by running `android --version`.

Your project must use Jetpack Compose and contain at least one `@Preview` function. The command builds the target, so a working Gradle setup and Android SDK are required.

Supported on Linux, macOS, and Windows. No special device enrollment is needed because rendering happens on the host.

## List available previews

Start in the project root. Run:

```bash
android preview list :app
```

Replace `:app` with your module path if different. The command scans the target and prints fully qualified names of `@Preview` functions.

Use the output to pick the exact preview you want to render. If the list is empty, confirm the module applies the Compose plugin and the functions are annotated correctly.

For agents, the structured `--format=json` option on related commands makes parsing easier. The list step keeps the agent from guessing names.

![Developer coding on a laptop with code visible](https://images.unsplash.com/photo-1529465230221-a0d10e46fcbb?auto=format&fit=crop&w=800&q=80)

## Render a single preview

With a fully qualified name in hand, render it:

```bash
android preview render :app --fqn=com.example.app.HomeScreenKt.HomeScreenPreview --output=./previews
```

The command builds the target if needed, renders the composable offscreen, and writes a PNG to the output directory. It prints the absolute path of the generated image.

Add `--component-tree` to also produce a companion JSON file. The JSON includes bounds, component names, source locations, semantics, parameters, and modifiers.

Agents can read the PNG for visual checks and the JSON for precise layout data. This combination replaces many round-trips through an emulator.

## Speed up repeated renders

For iterative work, keep the renderer warm:

```bash
android preview render :app --daemon --fqn=com.example.app.HomeScreenKt.HomeScreenPreview --output=./previews
```

The daemon stays active and shuts down after ten minutes of inactivity. Subsequent renders skip cold-start overhead.

You can pass multiple `--fqn` flags in one invocation to render several previews after a single build. This is useful when validating a set of related screens.

Omit the image with `--no-image` if you only need the component tree. That further reduces token use when the agent only inspects structure.

## Integrate with agents

Android CLI is available as an official plugin for Claude Code, Codex, and Google Antigravity. Once installed, the agent can call `android preview list` and `android preview render` directly.

Combine it with the 30-plus official Android skills that cover Compose performance, adaptive layouts, and permissions. The skills give the agent current guidance so generated code matches platform recommendations.

For deeper IDE integration, use Bring Your Own Agent in Android Studio Rabbit 2. See our guide on [using BYOA agents in Android Studio Rabbit 2](/blog/android-studio-byoa-agents-rabbit-2/).

The headless preview flow shines in terminal-only or CI environments where launching Android Studio is impractical. Agents can validate UI changes and propose fixes without human intervention on a device.

## Tips for reliable results

Always specify the fully qualified name. Short names can collide across packages.

Use `--output` with a dedicated directory so generated files do not clutter the project. Clean the directory between runs if the agent needs fresh images.

If builds fail, check that the target compiles independently with Gradle. The preview command uses the same build system.

For multi-module projects, pass the correct build reference. The format is `[system://][path]?[target]`.

Monitor token usage. The component-tree JSON is denser than a screenshot description, so agents spend less time describing pixels.

## Conclusion

The `android preview` commands give agents a fast, private way to inspect Compose UI without devices or full IDE sessions. List the previews, render the ones that matter, and feed the PNG and JSON back into the next reasoning step.

Start with a single screen in your current project. Once the daemon and component tree are in the workflow, UI iteration becomes a structured loop instead of a visual guess.

Check the official Android CLI docs for the full option list and any updates that ship after Android Dev Summit 2026.

## Sources

- Android Developers: android preview command documentation
- Android Dev Summit 2026 tools and performance session
- Android CLI overview and agent plugins

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/w-auFZP5gJo"
    title="The latest in Android dev tools from Android Dev Summit 2026"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Troubleshooting common issues

If the command reports that no previews were found, open the Kotlin file and verify the function has both `@Composable` and `@Preview`. Nested previews inside other functions are not always detected.

Build errors usually surface the same way they do in Android Studio. Run a normal Gradle assemble on the target first to isolate problems. The preview renderer does not hide compiler issues.

On systems with limited memory, the daemon can help because it reuses the compiled state. For one-off checks the non-daemon path is sufficient.

When the generated PNG looks empty, confirm the preview function actually composes visible content. Previews that only return empty boxes will render blank images.

The component-tree JSON is especially useful for agents that need to verify text content, clickable areas, or modifier order without interpreting pixels.

Agents that combine this command with the official Android skills for Compose performance can catch both visual and structural problems in one pass. The skill supplies recommended patterns while the preview confirms the result.

This workflow keeps the entire loop on the developer machine. No data leaves the host unless the agent itself makes an external call.

For projects that already use screenshot testing, the PNG output can serve as a quick manual reference before you update golden images. It does not replace the formal screenshot test infrastructure.

You can script a small loop that lists previews, renders a subset, and feeds the paths to an agent for review. The structured output formats make that automation straightforward.

Once you have the basic flow working, experiment with the `--daemon` flag on longer sessions. The ten-minute inactivity timeout keeps resource use reasonable while still delivering the speed gains Google measured.

The same Android CLI that powers this preview command also exposes device streaming and other agent-friendly tools. Those features complement the headless render path when you eventually need to validate on real hardware.

Start small. Pick one screen, render it, and inspect both the image and the JSON. The pattern scales cleanly to larger UI changes.
