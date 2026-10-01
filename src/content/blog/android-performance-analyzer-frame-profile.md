---
title: "Android Performance Analyzer: Capture a Frame Profile"
description: "Install Android Performance Analyzer, connect an Android 12+ device with adb, and capture a Vulkan frame profile for game debugging."
pubDate: 2026-10-01T17:00:00
heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "how-to"]
noindex: false
---

A dropped frame in a game is hard to explain if CPU time, GPU time, and power data live in separate tools. Android Performance Analyzer (APA) puts system tracing and frame capture in one desktop app, and it is in open beta from the Android team.

Google introduced APA as the next profiler for the Android ecosystem. It was built with Samsung Austin Research Center and LunarG. System traces use Perfetto. Frame profiling uses LunarG GFXReconstruct (GFXR). Official docs now point game and Vulkan developers to APA, and they point other apps to the profilers in Android Studio.

This guide covers the requirements, install path, and the capture steps published on developer.android.com.

## What APA is for

APA ships in two forms. You can download a standalone desktop app, or use the updated System Trace viewer inside Android Studio (Panda 4 canary and later, per the May 2026 announcement).

The System Profiler records CPU, GPU, memory, and power, then shows how your process interacts with the rest of the device. GPU counters cover hardware from Qualcomm, Arm, Imagination, and Samsung on most devices running Android 12 or later. SurfaceFlinger events show time spent in rendering and display composition. Vulkan debug markers you set in code can appear as named tracks.

The Frame Profiler is narrower. It records one frame: the API calls, the parameters, and relevant GPU memory, saved as a GFXR file. Official docs say the tool loops that frame up to 100 times and averages the results, dropping samples contaminated by another app's GPU work. You can export a capture to RenderDoc if you need a frame debugger rather than a profiler.

If you are not profiling a game or a Vulkan renderer, stay in Android Studio. The Frame Profiler quickstart states that APA is currently intended for games and Vulkan-based graphics.

![Developer workstation with multiple monitors showing code and traces](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80)

## Check the requirements first

The computer that runs the Frame Profiler needs one of these operating systems:

- 64-bit Windows 10 or higher
- macOS 12 or higher on an Apple silicon Mac (Intel Macs are unsupported)
- 64-bit Linux with the libraries Android Studio lists for 64-bit machines

You also need the Android SDK, including Platform-Tools, and the `ANDROID_HOME` environment variable set.

The test device needs:

- A supported Android device on Android 12 or higher
- A USB cable
- USB debugging enabled, and the device visible to adb
- Install via USB enabled if that option appears in Developer options

APA validates a device the first time you connect it. Leave the phone alone during that check. Disturbing it can fail validation. If setup is correct and validation still fails, use Retry in the Device menu, or unplug and reconnect. A green check next to the device name in the Configure a GFXR Recording window means validation passed.

For the app under test, Google recommends a release build, or a build with performance compiler flags and packaging options turned on. Match the engine and API compatibility notes in the APA compatibility guide before you spend time on a capture that the tool cannot replay.

Wireless debugging is useful for day-to-day installs, but the Frame Profiler quickstart still lists a USB cable. If you are setting up adb for the first time, the steps in [ADB Wi-Fi 2 wireless debugging](/blog/adb-wifi-2-wireless-debugging/) cover pairing and authorization.

## Install and open a project

Download the standalone profiler from the Android Performance Analyzer page on developer.android.com. The same site hosts the Frame Profiler quickstart, capture guide, and compatibility list.

Open APA and either pick an existing project or click New Project. Name the project and choose a directory. APA opens the empty project for you.

Keep the game installed on the device before you record. Profile the build your players will run, not a debug build full of extra logging, unless you are specifically measuring that debug path.

![Close-up of a laptop keyboard and code on screen](https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=800&q=80)

## Capture one frame

The official basic workflow is short:

1. Click Record Trace in the title bar to open New Capture.
2. Select Frame, then Configure. That opens Configure a GFXR Recording.
3. Set the capture options for your engine and API, then click OK. APA opens Control Recording and starts the app on the device.
4. Play to the frame you care about, such as a heavy scene or a known hitch, and click Start.
5. APA pulls that single frame and opens the output in the trace view. Tracks fill in as each analysis task finishes.

Do not treat the first capture as the answer. The tool averages repeated loops of the same frame so short frequency spikes do not dominate. If another app wakes the GPU during the loop, those samples are filtered out. A clean device state, with fewer background apps, still makes the session easier to read.

After the trace opens, look at frame duration and the named Vulkan markers you added. System traces in the same app can then show whether a long frame lines up with a CPU frequency drop, a GPU counter spike, or a power limit. The May 2026 Android Developers post also describes agentic trace analysis inside APA for reading Perfetto data, plus FPS and frame-duration tracks you can line up with other activity.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/peplbYt0Ohg"
    title="Introducing Android Performance Analyzer - The Next Evolution in Profiling for Android"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Read the result without chasing noise

A frame profile answers a different question than a system trace. The system view covers a span of time and the whole device. The frame view covers one rendered image: render passes, API calls, and GPU time inside that frame.

Use both when a scene hitches only in one camera angle. Capture the frame first so you know which pass is expensive. Then take a system trace while you reproduce the same camera move, and check whether the GPU was already busy with composition or whether a CPU thread stalled before the draw.

Google's announcement says APA loads and renders traces much faster than the original Android GPU Inspector. AGI's own docs now call APA the recommended tool for profiling games and link to the public beta. You do not need to abandon AGI overnight if a project still depends on an older capture, but new work should start in APA.

## Practical tips

Name captures after the scene and the device GPU. A Mali trace and an Adreno trace of the same level are not interchangeable, even when the frame time looks similar.

Add Vulkan debug markers around your heaviest passes before the session. The Android Developers overview lists them as a requested feature, and they show up as track names inside APA.

Prefer a charged device on a stable USB connection. Validation and capture both assume adb stays up. If the device drops offline, fix authorization before you change game code.

Export to RenderDoc only when you need to inspect draw calls and resources. The Frame Profiler is not a full frame debugger.

Watch power counters if you are optimizing a long session, not a single screenshot. A frame that is fast at a high GPU clock can still drain the battery once clocks settle.

## What to do next

Install the beta, confirm the device passes validation, and capture one known-bad frame. Compare that GFXR view with a short system trace of the same scene. That pair of files is enough to decide whether the next change belongs in a shader, a CPU job, or a clock and thermal limit.

Docs and downloads live on the Android Performance Analyzer section of developer.android.com. The Android Developers video from May 2026 walks through the same system and frame views if you want the UI before you install.

## Sources

- Android Developers Blog, Introducing Android Performance Analyzer (19 May 2026): https://developer.android.com/blog/posts/introducing-android-performance-analyzer-the-next-evolution-in-profiling-for-android
- Frame Profiler quickstart, Android Developers (updated 2 September 2026): https://developer.android.com/android-performance-analyzer/frame-profiler/quickstart
- About the Frame Profiler: https://developer.android.com/android-performance-analyzer/frame-profiler
- Android GPU Inspector page noting APA as the recommended game profiler: https://developer.android.com/agi
- Android Developers, Introducing Android Performance Analyzer (YouTube, 23 May 2026): https://www.youtube.com/watch?v=peplbYt0Ohg
