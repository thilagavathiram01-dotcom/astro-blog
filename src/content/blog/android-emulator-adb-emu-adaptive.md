---
title: "How to Control Android Emulator Form Factors with adb"
description: "Use adb emu fold, rotate, posture, and resize-display to test adaptive Android layouts without extra AVDs."
pubDate: 2026-09-24T06:30:00
heroImage: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "how-to"]
noindex: false
---

Adaptive Android apps must survive fold, unfold, rotate, and resize events. Android 17 made that the default on large windows: orientation and resizability locks no longer apply when the available width is over 600 dp.

You can click through those cases in the Resizable Emulator. You can also drive the same changes from a terminal. On 31 August 2026, Android Developer Relations Engineer Rob Orgiu documented fire-and-forget `adb emu` commands that fold, rotate, pose, and resize a running virtual device and return control to your shell.

This guide walks through those official commands, when to use each one, and how to wire them into a local check before you ship a Googlebook or foldable layout.

## Why terminal control beats extra AVDs

A phone AVD, a foldable AVD, and a tablet AVD eat RAM and hide the moment a layout actually breaks. One resizable or foldable emulator plus scripted commands keeps the process on a single process.

Orgiu's point is simple: the emulator already exposes console commands. The `adb emu` shortcut sends them and does not wait for an interactive console session. That is enough for a pre-commit script or a CI step that only needs to flip form factor and take a screenshot.

If several emulators are running, target one by serial:

```bash
adb -s <serial> emu <command> <parameter>
```

List serials with `adb devices`. Use the serial that matches the AVD you intend to fold or resize.

![Laptop with code editor open beside a notebook](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## Step 1: Fold and unfold a virtual foldable

Start a foldable AVD or the Resizable Emulator in a foldable preset. Then run:

```bash
adb emu fold
```

If the device is unfolded, this command folds it, shows the smaller outer display, and powers on the virtual external screen. To go the other way:

```bash
adb emu unfold
```

Unfold powers the inner display. Watch two things after each command: does activity state survive, and does the layout pick the compact or expanded window size class?

Do not treat fold as a recreation you can ignore. Users close a Pixel-class fold mid-form. Your ViewModel or saved state handle has to keep the draft.

## Step 2: Rotate without touching the toolbar

Adaptive work includes orientation, not only width. The official rotate command turns the virtual device 90 degrees clockwise:

```bash
adb emu rotate
```

Run it four times to walk a full circle. After each turn, confirm that lists keep scroll position, that media continues, and that you did not lock the activity to portrait in the manifest.

Android 17 (API 37) ignores those locks on large screens. A command-line rotate is a cheap way to see letterboxing before a reviewer does.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/cjagE2Ivaro"
    title="Building adaptive apps for Android"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step 3: Set posture instead of guessing hinge angle

Foldables have postures beyond open and closed. Tabletop mode (half-opened) is the one that usually breaks video and camera UIs. Query the emulator first:

```bash
adb emu posture
```

The console prints usage and IDs. Orgiu's example looks like this:

```text
Usage: "posture <posture_id>" 1: closed    2: half-opened    3: opened    …
```

Set tabletop with the half-opened ID:

```bash
adb emu posture 2
```

Not every AVD supports every ID. Pixel Fold and Resizable templates officially support postures 1, 2, and 3. IDs 4 or 5 on those templates return `KO: Failed to set posture`. Check the usage line before you script a number.

After posture 2, confirm that dual-pane or split media layouts still receive input on both regions of the hinge.

## Step 4: Resize the Resizable Emulator by index

The Resizable Emulator can jump between phone, unfolded, and tablet presets. Ask it which indexes exist:

```bash
adb emu resize-display
```

The reply lists presets. The documented mapping is:

```text
KO usage: "resize-display <index>" 0: phone    1: unfolded    2: tablet
```

Then pick one:

```bash
adb emu resize-display 1
```

Index 1 is the unfolded width. Index 2 is tablet. Index 0 returns you to a compact phone window. This is the command you want in a loop that screenshots compact, medium, and expanded layouts from one AVD.

Pair resize with the same window size class logic you use in production Compose code. If a pane only appears after a manual drag in Studio, the size class branch is not wired.

![Close-up of a code editor with syntax highlighting](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Step 5: Script a short adaptive smoke pass

A local script does not replace device labs. It does catch the failures that cost the most time: stretched phone chrome, lost state on fold, and letterboxed rotate.

Example sequence on a named AVD serial:

```bash
SERIAL=emulator-5554

adb -s "$SERIAL" emu resize-display 0
# screenshot phone

adb -s "$SERIAL" emu resize-display 1
# screenshot unfolded

adb -s "$SERIAL" emu resize-display 2
# screenshot tablet

adb -s "$SERIAL" emu rotate
adb -s "$SERIAL" emu fold
adb -s "$SERIAL" emu unfold
adb -s "$SERIAL" emu posture 2
```

Insert your own screenshot or `adb shell screencap` calls between lines. Keep the script fire-and-forget so a failed posture on an unsupported AVD does not hang the shell.

When the layout is meant for Googlebook-class extra-large width, continue the pass in the desktop emulator and follow the pane checklist in our [Googlebook adaptive apps guide](/blog/adapt-android-apps-googlebook/). Terminal resize will not replace free-form windowing tests, but it will tell you whether the compact-to-expanded jump already works.

## Tips that keep the commands honest

- Confirm the AVD template before you script posture 4 or 5.
- Prefer serial targeting whenever two emulators share a host.
- Treat `KO` output as a failed assertion, not noise.
- After fold and rotate, inspect process death and `savedInstanceState`, not only pixels.
- Install the official adaptive skill if an agent is editing layouts: `android skills add adaptive`.
- Re-read Android 17's large-screen rule: targeting API 37 means your app must adapt above 600 dp.

The emulator is not a substitute for a physical foldable or a laptop trackpad. Use it to fail fast, then move to hardware for hinge glare, palm rejection, and multi-instance drag and drop.

## Conclusion

`adb emu` is the missing middle between clicking the Resizable Emulator toolbar and standing up three AVDs. Fold and unfold check state. Rotate checks configuration changes. Posture checks hinge UI. `resize-display` walks phone, unfolded, and tablet widths on one process.

Add the four commands to the same script you already use for install and screenshot. Then keep the layout rules in window size classes, not in a device model name.

## Sources

- [Emulator control for adaptive app development — Android Developers' Blog, 31 August 2026](https://developer.android.com/blog/posts/emulator-control-for-adaptive-app-development)
- [Adaptive development for the expanding Android ecosystem — Android Developers](https://developer.android.com/blog/posts/adaptive-development-for-the-expanding-android-ecosystem)
- [Build adaptive apps — Android Developers](https://developer.android.com/develop/ui/compose/build-adaptive-apps)
- [Extended controls, settings, and help — Android Emulator](https://developer.android.com/studio/run/emulator-extended-controls)
- [Building adaptive apps for Android (YouTube)](https://www.youtube.com/watch?v=cjagE2Ivaro)
