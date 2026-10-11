---
title: "Reserve Remote Android Devices with Android CLI"
description: "Step-by-step guide to reserve real physical Android devices using Android CLI Device Streaming and test apps with AI agents from the terminal."
pubDate: 2026-10-11T17:05:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials"]
noindex: false
---

Testing Android apps on real hardware catches problems that emulators miss. Different screen sizes, sensors, and OS versions create edge cases. Not every developer owns a Pixel, Galaxy, or older mid-range phone for every check. Android Device Streaming solves this by giving remote access to physical devices in Google data centers. Android CLI now brings that access straight into the terminal so AI agents can use it too.

You connect over a secure ADB-over-SSL link. The device appears local. Your agent can install builds, collect logs, capture screenshots, and inspect UI without you plugging in hardware. This turns testing into part of an automated or agent-driven workflow. If you already use Android CLI for builds or skills, this adds real-device validation without extra setup.

## What Android Device Streaming in CLI Offers

Android Device Streaming lets you reserve physical phones and tablets hosted by Google and partner labs. Once reserved, the device connects as if it were attached by USB. Android CLI exposes the full `android device remote` command set so you or an agent can list projects, browse models, create reservations, connect, and release devices.

The connection stays open in the background after you create a reservation. Subsequent commands like `android run`, `android install`, or standard `adb` treat the remote device like any other. You can also capture screenshots and UI hierarchies from the terminal. This works for both manual checks and agent loops that build, deploy, and verify.

![Developer workspace with laptop and smartphone](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## Prerequisites Before You Start

You need the Android CLI installed. Download it from the official Android developers site and run `android init` to set up the android-cli skill for your agent. Sign in with a Google account that has access to a Firebase or Google Cloud project with Device Streaming enabled. Spark plan projects include free monthly minutes; heavier use may incur charges.

Your project should already build with Gradle. Have the Android SDK available so ADB and related tools work. If you pair this with Android skills, install relevant ones such as the profiler or testing skills so the agent follows current platform guidance. Confirm Keep Activity or equivalent settings if you use Gemini-related agents, though the streaming commands themselves do not require it.

## Step-by-Step: Reserve and Connect a Remote Device

1. List available projects. Run `android device remote projects`. Note a project ID that shows Device Streaming as ready.

2. Browse device models. Run `android device remote models`. Look for the codename and API level you need, such as a recent Pixel or Galaxy form factor.

3. Create the reservation. Run `android device remote create <codename>/<api> --project=YOUR_PROJECT_ID`. The command reserves the device and, by default, connects it to local ADB. A background process maintains the link.

4. Confirm the connection. Run `adb devices`. The remote device should appear. If you used `--connect=false`, run `android device remote connect <reservation-id>` separately.

5. Deploy and test. Build your debug APK, then use `android run --apks=path/to/app-debug.apk` or standard Gradle install tasks. Capture a screenshot with `android screen capture --output=screen.png` or inspect layout with `android layout --pretty`.

6. Clean up. When finished, run `android device remote disconnect <reservation-id>` followed by `android device remote remove <reservation-id>` to release the device and stop billing minutes.

These steps work the same whether you type them or instruct an agent to run them. The agent can list models, choose a target based on your prompt, reserve it, deploy the latest build, and report results.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/gQswwgjX6n8"
    title="Test on real hardware through Android CLI"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Using the Workflow with AI Agents

Pair Device Streaming with Android skills for better results. After `android init`, run `android skills list` to see available skills. Add ones that match your task, such as the Wear Compose Material 3 skill or profiler guidance, with `android skills add <skill-name> --project=.`. The skill injects current official patterns into the agent’s context so generated code or test steps stay accurate.

Prompt your agent to reserve a device, deploy the app, exercise a specific flow, and check logs or screenshots. Because the connection looks like a normal ADB device, the agent can use existing terminal tools without special remote-device logic. This closes the loop: the agent writes code, builds it, installs it on real hardware, and inspects the outcome.

For longer sessions, extend the reservation if the CLI supports it, or recreate when the current one expires. Monitor free minutes on your project to avoid unexpected charges. Combine this with local emulators for quick iteration, then move final verification to a remote device.

## Tips for Efficient Remote Testing

Reserve only the device you need and release it promptly. Multiple reservations consume minutes even if idle. Use the models list to match your target audience’s common hardware rather than always picking the newest flagship. Capture annotated screenshots so the agent or a teammate can review UI issues without re-running the session.

If a connection drops, reconnect with the reservation ID before creating a new one. Keep your local ADB version current so the SSL tunnel stays stable. For CI pipelines, script the reserve-deploy-test-release sequence and run it on a machine with the CLI installed. Document the project ID and typical device codenames in your team notes so everyone uses the same setup.

![Coding on a laptop screen](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Related Android CLI Resources

If you want more on skills and agent workflows, see our earlier guide on [setting up Android CLI with agent skills](/blog/android-cli-agent-skills/). That post covers installing skills and using them across different agents. Device Streaming builds on the same foundation and adds hardware access.

## Conclusion

Android CLI Device Streaming removes the hardware barrier for real-device testing. You reserve a physical phone from the terminal, connect it over ADB, and let an agent or yourself deploy and inspect the app. The process takes a few commands once the CLI is set up and a project is linked. Start with a single model that matches your users, practice the reserve-and-release cycle, then integrate it into agent prompts or CI. Real hardware checks become part of everyday development instead of a separate lab step.

## Sources

- Android Developers Blog: Device Streaming and Android skills - available in Android CLI (October 2, 2026)
- Android Developers documentation: Android Device Streaming and Android CLI device remote commands
- Android Developers YouTube: Test on real hardware through Android CLI
