---
title: "How to Test Android Apps on Real Devices with Android CLI"
description: "Step-by-step guide to set up Android CLI Device Streaming so AI agents can test apps on remote physical Android phones from the terminal."
pubDate: 2026-10-25T14:00:00
heroImage: "https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "ai-tools", "developer", "how-to"]
noindex: false
---

Testing on real hardware catches issues that emulators miss. Android Device Streaming now works directly through Android CLI. Your agent can reserve a physical Pixel or partner device, deploy a build, collect logs, and capture screenshots—all from the terminal over a secure ADB-over-SSL connection.

You no longer need a full device farm on your desk. The same workflow works whether you pair the CLI with Claude, Codex, Gemini, or another agent.

## Install and initialize Android CLI

Download Android CLI from the official agents page. After installation, update it:

```
android update
```

Run the init command so your agent receives the android-cli skill:

```
android init
```

This places structured instructions in the agent context. The skill covers project scaffolding, builds, emulator management, and the new remote device commands. Confirm the install with `android -V`.

Sign in with a Google account that can access a Cloud project where Device Streaming is enabled:

```
android auth login
```

The command opens a browser flow. Complete it before you reserve devices.

![Developer workspace with laptop showing code and a smartphone on the desk](https://images.unsplash.com/photo-1778146448308-149ff6244135?auto=format&fit=crop&w=800&q=80)

## List projects and available models

Remote devices are billed against a Google Cloud project. List the projects your account can use:

```
android device remote projects
```

Pick one and note the project ID. You can set a default in `~/.androidrc` so you do not pass `--project` on every command:

```
device remote --project your-project-id
```

Next, see which physical devices are available:

```
android device remote models
```

The output shows codename and API level pairs such as `shiba/34` or similar. Choose the model that matches the hardware and OS version you need to test.

## Reserve and connect a remote device

Create a reservation and connect it to local ADB in one step:

```
android device remote create shiba/34 --project your-project-id
```

The command returns a reservation ID. The device appears in `adb devices` as if it were plugged in over USB. If you prefer to connect later, pass `--connect=false` on create, then run:

```
android device remote connect <reservation-id>
```

Your agent can now treat the remote phone exactly like a local device. Install an APK, run tests, or pull logs with ordinary ADB or Android CLI commands such as `android install` and `android run`.

## Run tests and capture evidence

With the device connected, deploy your debug build:

```
android install --device <serial>
```

Collect logcat, take a screenshot, or start a Perfetto trace. Because the connection is standard ADB-over-SSL, any existing script or agent tool that speaks ADB continues to work. When the session ends, disconnect and release the reservation so unused minutes return to your quota:

```
android device remote disconnect <reservation-id>
android device remote remove <reservation-id>
```

Sessions are wiped and factory-reset before the device returns to the pool.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/gQswwgjX6n8"
    title="Test on real hardware through Android CLI"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Pair with Android skills for better agent results

Android skills ground the model in current platform guidance. After `android init`, list available skills:

```
android skills list
```

Add specialized ones for the task at hand, for example:

```
android skills add wear-compose-m3 --project=.
```

The skill supplies Wear OS Compose patterns, rotary input rules, and ambient-mode constraints that the base model often lacks. Early users report that the skill catches mistakes the underlying LLM misses, such as forgetting to forward content padding into a TransformingLazyColumn.

Skills work with any agent. They do not replace compilation or real-device verification—they reduce outdated suggestions so the agent reaches a working build faster.

![Android phone showing a custom home screen](https://images.unsplash.com/photo-1760900051041-90417b9c110e?auto=format&fit=crop&w=800&q=80)

## Tips for reliable agent-driven testing

- Always list models before you create a reservation so you pick a device that matches your target API level.
- Extend a session with `android device remote extend` if a long test run is still in progress.
- Keep Android CLI updated; new skills and device-streaming improvements land through `android update`.
- Review agent-generated test code before you trust the results. The remote device confirms behavior, but the agent can still misinterpret requirements.
- For partner lab devices (Samsung, Xiaomi, and others), enable the lab once in the Google Cloud Console for your project.

Device Streaming usage beyond the monthly free minutes on a Spark plan incurs charges. Check the current Firebase pricing page before you schedule large test matrices.

## Conclusion

Android CLI Device Streaming removes the need to own every phone you want to test. Agents can reserve real hardware, deploy builds, and gather evidence without leaving the terminal. Combined with official Android skills, the workflow keeps agent output aligned with current platform guidance.

Start with `android init`, list available models, and reserve a device for your next regression pass. For a shorter overview of the same feature, see our earlier post on [remote phone testing with Android CLI](/blog/android-cli-device-streaming-remote-testing/).

**Sources**

- Android Developers Blog: Device Streaming and Android skills - available in Android CLI (2 October 2026)
- Android CLI command reference: android device remote
- Android Device Streaming documentation on developer.android.com
- Official Android Developers YouTube: Test on real hardware through Android CLI
