---
title: "Test Android Apps on Remote Devices with CLI"
description: "Step-by-step guide to reserve and test Android apps on real remote devices using Android CLI Device Streaming."
pubDate: 2026-11-10T14:00:00
heroImage: "https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "how-to", "developer"]
noindex: false
---

Testing Android apps on physical hardware catches bugs that emulators miss. Hardware-specific issues, OS quirks, and performance problems show up only on real devices. Android Device Streaming, powered by Firebase, gives you remote access to physical devices in Google data centers. With Android CLI, you and your AI agents can reserve, connect, and interact with those devices entirely from the terminal.

This guide walks through the exact commands from the official Android CLI documentation. You will list projects, pick a device model, create a reservation, deploy your app, and clean up when finished. The workflow works whether you drive it yourself or hand it to an agent equipped with Android skills.

![Laptop and smartphone on a developer desk](https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=800&q=80)

## Prerequisites

Install Android CLI first. Follow the official setup at developer.android.com/tools/agents/android-cli. Sign in with a Google account that has access to a Google Cloud project with Device Streaming enabled.

Run this to confirm your login:

```bash
android auth login
```

You need a Firebase or Google Cloud project that supports Device Streaming. Spark plan projects include free monthly minutes; additional usage is billed. Check the current pricing on the Android Device Streaming page.

## Find a project and list device models

Start by listing projects ready for streaming:

```bash
android device remote projects
```

Note the project ID you want to use. You can set a default in `~/.androidrc`:

```
device remote --project my-project-id
```

Next, list available device models:

```bash
android device remote models --project=my-project-id
```

Output shows codenames and API levels, such as `pixel_10_pro/36`. Choose one that matches the hardware and Android version you need to test.

![Person holding an Android phone](https://images.unsplash.com/photo-1584091377126-3817650725fc?auto=format&fit=crop&w=800&q=80)

## Create a reservation and connect

Reserve the device and connect it to adb in one step:

```bash
android device remote create pixel_10_pro/36 --project=my-project-id
```

The command returns a reservation ID. The device appears in `adb devices` as a remote target over a secure SSL connection. Treat it like a USB-connected phone.

If you prefer to create without immediate connection, add `--connect=false`, then connect later:

```bash
android device remote connect <reservation-id> --project=my-project-id
```

You can extend a reservation if testing takes longer:

```bash
android device remote extend <reservation-id> --project=my-project-id
```

List active reservations at any time:

```bash
android device remote list --project=my-project-id
```

## Deploy and interact with your app

Once the device is connected, standard Android CLI and adb commands work. Install and run your app:

```bash
android install path/to/app.apk
android run
```

Capture screenshots, pull logs, or run UI tests exactly as you would on a local device. The connection supports headless operation, so agents can collect traces or take screenshots without a local display.

Android Device Streaming also works inside Android Studio via the Device Manager. The CLI route is useful when you work in a terminal-first environment or when an agent needs to drive the entire flow.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/gQswwgjX6n8"
    title="Test on real hardware through Android CLI"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Clean up

When you finish, disconnect and remove the reservation to stop billing:

```bash
android device remote disconnect <reservation-id> --project=my-project-id
android device remote remove <reservation-id> --project=my-project-id
```

Confirm with the list command that no reservations remain.

## Tips for reliable remote testing

Keep sessions short. Free minutes on Spark plans are limited, and idle reservations still count. Prefer specific device models when you need to reproduce a user-reported crash on a particular phone.

Combine Device Streaming with Android skills. Skills give agents official guidance on testing strategies, profilers, and Play policy checks. See our guide on setting up Android skills for any agent: [Android CLI skills for any agent](/blog/android-cli-skills-any-agent/).

If a command fails, add `-v` for verbose output. Check that your Google Cloud project has the Device Streaming API enabled and that your account has the necessary permissions.

Partner Device Labs from Samsung, Xiaomi, and others expand the available models. Enable them in the Google Cloud console under your project before they appear in the models list.

## Conclusion

Android CLI Device Streaming removes the barrier of owning every test device. You reserve a physical Pixel, Galaxy, or other model in seconds, deploy your build, and gather real hardware data without leaving the terminal. Agents can drive the same workflow once you install the relevant skills.

Start with a short session on a single device model. Measure the time from reservation to first screenshot, then expand to the devices your users actually own. Official documentation at developer.android.com covers every subcommand and billing detail.

## Sources

- Android Developers Blog: Device Streaming and Android skills - available in Android CLI (2 October 2026)
- Android CLI reference: android device remote
- Android Device Streaming documentation
- YouTube: Test on real hardware through Android CLI (Android Developers)
