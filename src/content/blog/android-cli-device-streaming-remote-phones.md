---
title: "Set Up Android Device Streaming from the Command Line"
description: "Reserve real Android phones with Android Device Streaming in the CLI, connect over ADB, and run agent tests from the terminal."
pubDate: 2026-10-03T12:00:00
heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "how-to"]
noindex: false
---

A missing Pixel is no longer a reason to skip a hardware check. On 2 October 2026, Google added Android Device Streaming to Android CLI, so an agent or a terminal session can reserve a physical phone in a Google data center and talk to it over a secure ADB-over-SSL connection.

That means you can spin up a device, deploy a build, pull logs, and capture screenshots without a USB cable. The same session still wipes the phone and factory-resets it when you are done, which is how Device Streaming has worked in Android Studio.

If you already use the CLI for builds, start with the [Android CLI agent skills guide](/blog/android-cli-agent-skills/) and then add remote hardware to the same workflow.

## What the CLI update actually adds

Android CLI is Google's command-line tool for creating, building, testing, and managing Android projects from any agent. The October update adds `android device remote`, which reserves physical devices and attaches them to `adb` on your machine.

The Android Developers Blog shows a Pixel 10 Pro connection as the example. Studio's Device Streaming docs also list recent Pixel models plus phones from Samsung, OPPO, OnePlus, Xiaomi, vivo, and Transsion, hosted in Google data centers and partner device labs. Availability still depends on what `android device remote models` returns for your project.

Device Streaming is billed to a Google Cloud project. Google says you can try it at no cost on Firebase Spark-plan projects, and usage past the monthly no-cost minutes may be billed. Check the current pricing page before a long agent run.

![Developer working on a laptop beside a phone](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Install the CLI and sign in

Install Android CLI from the official download page. On Linux x86_64, the local installer is:

```bash
curl -fsSL https://dl.google.com/android/cli/latest/linux_x86_64/install.sh | bash
```

Mac and Windows have their own installers on the same page. After the binary is on your path, initialize the agent skill:

```bash
android init
```

Sign in before you reserve a device. `android auth login` opens Google sign-in in the browser and waits up to five minutes. If the browser does not open, copy the printed URL. The refresh token is stored in the system keyring when one is available. On Linux, install `libsecret-tools` and sign in again if you want keyring storage instead of a user-only file.

Use an account that can access a project with Device Streaming enabled.

## Reserve a remote phone

The documented flow is short.

1. List projects that are ready for streaming:

```bash
android device remote projects
```

2. List models. Each entry is a `<codename>/<api>` pair, such as the docs example `tokay/34`.

```bash
android device remote models --project=YOUR_PROJECT_ID
```

3. Create a reservation. By default the command waits until the device is ready and connects it to `adb`:

```bash
android device remote create tokay/34 --project=YOUR_PROJECT_ID
```

Pass `--connect=false` if you only want the reservation ID, then connect later:

```bash
android device remote connect RESERVATION_ID --project=YOUR_PROJECT_ID
```

To stop repeating the project flag, add this line to `~/.androidrc`:

```text
device remote --project YOUR_PROJECT_ID
```

If the model is invalid or busy, the create command prints the devices that are available. Do not guess a codename.

## Run the app and collect evidence

Once the phone is attached, treat it like a USB device. Official docs say you can use `android run`, `android install`, `adb`, and other device commands against that reservation.

A practical agent loop looks like this:

1. Build and launch with `android run` on the connected device.
2. Capture the screen with `android screen` if you need a visual check.
3. Pull logcat or a trace if the failure is timing- or hardware-specific.
4. Disconnect, then remove the reservation so you stop the session:

```bash
android device remote disconnect RESERVATION_ID --project=YOUR_PROJECT_ID
android device remote remove RESERVATION_ID --project=YOUR_PROJECT_ID
```

Other subcommands cover `list`, `extend`, and `models`. Extend a reservation only when a test is still running. Leaving a device reserved burns the no-cost minutes and, past that quota, billable time.

Google wipes your data and factory-resets the unit before the next developer gets it. Do not store production credentials on the streamed phone.

![Android phone showing an app interface](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## Pair streaming with Android skills

The same post expands the Android skills catalog past 20 skills. Skills are `SKILL.md` files that inject current guidance from developer.android.com into the agent, instead of relying on the model's training cutoff.

Useful companions for a remote-device session:

- Play policy audit for manifests, runtime permissions, target SDK, and privacy disclosures.
- Android Intent security, to catch implicit intent hijacking and weak PendingIntent declarations.
- Profiler guidance that maps frame drops and CPU or memory traces to Perfetto SQL.
- CameraX migration, Compose for TV, Media3 Cast, and Play Engage SDK skills when the hardware path matters.
- The Wear OS Compose Material 3 skill (`wear-compose-m3`), which FotMob used to migrate lists to `TransformingLazyColumn`, apply `ScreenScaffold` padding, and drop custom rotary boilerplate. Android Tech Lead Roy Solberg said the team migrated eight lists in an afternoon.

Install and refresh skills from the project root:

```bash
android skills list
android skills add wear-compose-m3 --project=.
android skills update --all
```

Skills are environment-agnostic. Google says they work in Android Studio, Antigravity, and third-party agents such as Claude and Codex.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/w39GHTi7H5k"
    title="Device Streaming in Android Studio"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips before you hand the session to an agent

Confirm the project with `android device remote projects` before the agent starts creating reservations. A wrong project ID fails late and wastes the sign-in flow.

Cap session length. Ask the agent to disconnect and remove the reservation in a `finally` step, even when the test fails.

Prefer a specific `<codename>/<api>` from `models` over a brand name. API level is part of the reservation key.

Keep secrets out of the streamed device. The wipe is real, but logs you pull locally can still contain tokens.

Use Studio's Device Manager when you need to rotate or unfold a device by hand. Use the CLI when an agent must deploy, screenshot, and collect traces without a GUI.

If wireless debugging on a phone you own is enough, the [ADB Wi-Fi 2 guide](/blog/adb-wifi-2-wireless-debugging/) covers that path. Device Streaming is the better fit when you do not have the hardware.

## Conclusion

Android Device Streaming in the CLI closes the gap between agent-written code and hardware you do not own. Install Android CLI, run `android auth login`, reserve a `<codename>/<api>` device, and drive it with the same install, run, and screen commands you already use locally. End the reservation when the check is done.

The Wear Compose Material 3 skill and the wider skills catalog are optional, but they stop the agent from inventing Wear OS or Play policy patterns while the remote phone is on the clock.

## Sources

- Android Developers Blog, 2 October 2026: Device Streaming and Android skills available in Android CLI. https://android-developers.googleblog.com/2026/10/android-cli-device-streaming-and-skills.html
- Android CLI `android device remote` command reference. https://developer.android.com/tools/agents/android-cli/commands/device_remote
- `android device remote create` reference. https://developer.android.com/tools/agents/android-cli/commands/device_remote_create
- Android Device Streaming, powered by Firebase. https://developer.android.com/studio/run/android-device-streaming
- Download Android CLI. https://developer.android.com/tools/agents/android-cli/download
- `android auth login`. https://developer.android.com/tools/agents/android-cli/commands/auth_login
