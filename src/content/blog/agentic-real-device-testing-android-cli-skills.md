---
title: "Test Android Apps on Real Devices with AI Agents via CLI"
description: "Step-by-step guide to using Android CLI skills and Device Streaming for agent-driven real-device testing after Android Dev Summit 2026."
pubDate: 2026-11-09T11:00:00
heroImage: "https://images.unsplash.com/photo-1764452008254-eed469a4fad3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "ai-tools", "tutorials", "developer"]
noindex: false
---

Android Dev Summit 2026 put agentic workflows at the center of Android development. Google expanded Android CLI so any LLM or coding agent can drive real physical devices through Device Streaming while using official Android skills that supply current best practices.

This combination lets agents build, deploy, inspect, and validate apps on hardware they do not have sitting on the desk. Emulators remain useful, but hardware-specific issues, sensor behavior, and performance under real thermal and network conditions still require physical devices.

## Why Agents Need Real Devices and Skills

Agents that only generate code or run against local emulators miss the gaps that appear on actual phones. Device Streaming, powered by Firebase, provisions a physical device in a Google lab and exposes it over a secure ADB-over-SSL connection. The agent treats the remote device exactly as it would a USB-connected one: install APKs, pull logs, capture screenshots, and run instrumentation.

Android skills are SKILL.md files maintained by the Android team. They inject official guidance into the agent’s context for tasks where models commonly underperform—permissions security, Compose performance, Wear OS patterns, Play policy checks, and profiler usage. Skills are installed once and then triggered automatically when the agent’s prompt matches the skill metadata.

For setup details on skills themselves, see our earlier guide on [setting up Android skills with the CLI for any agent](/blog/setup-android-skills-with-cli-for-ai-agents/).

![Developer workspace with laptop and plant](https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=800&q=80)

## Install and Initialize Android CLI

Download the latest Android CLI from the official tools page and ensure the binary is on your PATH. Then run:

```bash
android init
```

This installs the base android-cli skill so the agent knows the available commands. Sign in with a Google account that has access to a Cloud project where Device Streaming is enabled:

```bash
android auth login
```

Confirm available projects and device models:

```bash
android device remote projects
android device remote models --project=YOUR_PROJECT_ID
```

List all official skills:

```bash
android skills list --long
```

Install the ones relevant to your workflow. For a full set across detected agents:

```bash
android skills add --all
```

Or target a single skill into the current project:

```bash
android skills add android-profiler --project=.
```

## Reserve a Remote Device and Deploy

With skills and authentication in place, the agent can reserve hardware. A typical sequence the agent executes (or you run first):

```bash
android device remote create PIXEL_10_PRO/35 \
  --project=YOUR_PROJECT_ID
```

The command returns a reservation ID. Connect it so ADB sees the device:

```bash
android device remote connect RESERVATION_ID \
  --project=YOUR_PROJECT_ID
adb devices -l
```

The serial appears as a normal connected device. From there the agent can build and install:

```bash
android run --device=REMOTE_SERIAL
```

Or use standard Gradle and adb install once the connection is live. Device Hub (`android device hub`) gives a lightweight view of local and remote devices without opening Android Studio.

![Code on a computer screen](https://images.unsplash.com/photo-1542903660-eedba2cda473?auto=format&fit=crop&w=800&q=80)

## Pair Skills with Remote Testing

Skills make the remote session more reliable. After installing the profiler skill, prompt the agent: “Profile cold start on the remote Pixel and identify the top frame-time contributors.” The skill supplies the correct Perfetto capture commands and analysis patterns instead of the model inventing adb shell syntax.

The Play policy compliance skill can audit the manifest, permissions, and privacy disclosures before you submit. Run it against the same codebase the agent just deployed to the remote device so the policy check and the runtime behavior are validated together.

For Wear OS work, add the wear-compose-m3 skill and then reserve a Wear device (when available in the catalog) or test the companion phone path. The skill covers TransformingLazyColumn padding, ambient mode, and Material 3 edge morphing that base models frequently get wrong.

Internal testing numbers shared at the summit showed agents using CLI previews completed UI tasks up to 77% faster with fewer tokens. Combining those previews with a subsequent real-device run on Device Streaming closes the loop from visual validation to hardware confirmation.

## Practical Tips

Keep CLI and skills updated with `android update` and `android skills update --all`. Sessions have time limits; extend them with `android device remote extend` for longer test suites.

Review agent-generated changes before trusting results on remote hardware. The device confirms behavior, but the agent can still misinterpret requirements.

Use the official Android plugins for Claude Code, Codex, or Antigravity if you prefer those harnesses; they surface the same CLI commands and skills.

## Conclusion

Android CLI plus Device Streaming and the growing skills catalog turn any agent into a participant that can reach real hardware and follow current Android guidance. The workflow is the same whether you drive it from the terminal or let the agent issue the commands after you install the skills.

Start with `android init`, install the skills that match your current pain points, reserve a device, and let the agent run the next regression pass on hardware you do not own.

## Sources

- Android Developers Blog: Device Streaming and Android skills - available in Android CLI (2 October 2026)
- Android Dev Summit 2026 announcements on tools and performance
- Official Android skills documentation and GitHub repository
- Android CLI command reference for `device remote` and `skills`

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/JMPd2jbQEqo"
    title="Android CLI and skills to improve your development"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
