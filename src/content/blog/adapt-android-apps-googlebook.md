---
title: "How to Adapt Android Apps for Googlebook Laptops"
description: "Make your Android app Googlebook-ready with window size classes, Navigation 3 panes, multi-instance, and Play desktop badges."
pubDate: 2026-09-23T12:00:00
heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "how-to"]
noindex: false
---

Googlebook is a laptop category on a shared Android foundation. Partner hardware from HP, Dell, Lenovo, Acer, and Asus ships high-resolution OLED touchscreens, keyboards, trackpads, and OS-level Gemini Intelligence. Users expect phone apps to become desktop tools when the window grows.

You do not ship a second APK. On 22 September 2026, Android Developer Product Manager Fahd Imtiaz and Product Marketing Manager Loryn Hairston wrote that adaptive development is how modern Android apps scale across large displays. If you already use adaptive UI, window size classes, and multi-input support, you are close.

This guide walks through the official checklist: desktop layout, Navigation 3 scenes, input, multi-instance, Continue On, and the Play surfaces that reward the work.

## Why Googlebook is worth the layout pass

Google Play highlights optimized titles with dedicated badging, enhanced search, and featured spots on curated store homepages. Meeting that quality bar also prepares the app for the [Apps Experience Program](https://developer.android.com/distribute/aep), which Google describes as a program rate card built to drive business growth.

When someone sets up a new Googlebook from an Android phone, optimized apps are highlighted for transfer. That is day-one presence without a marketing campaign.

Do not stretch a phone layout across 1600dp. Reorganize content into panes. Treat the window, not the physical panel, as the source of truth.

![Developer working at a laptop with code on screen](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Step 1: Drive layout from window size classes

Free-form desktop windowing means the user can resize your window at any time. Official Android docs classify available width as compact, medium, expanded, large, or extra large. Extra-large width starts at 1600dp and is the desktop case.

Compute the class from the window, not the device:

```kotlin
val windowSizeClass =
    currentWindowAdaptiveInfo(
        supportLargeAndXLargeWidth = true
    ).windowSizeClass
```

`currentWindowAdaptiveInfo()` lives in the Compose Material 3 Adaptive library. Pass `supportLargeAndXLargeWidth = true` so large and extra-large breakpoints exist. Height is classified separately; you always have two classes.

Use those classes to reflow, reveal, or change presentation. Locking portrait causes letterboxing when the window is resized. Google is explicit: do not design only for a portrait phone.

Adjust type scale for laptop viewing distance. Cap line length with a max content width. Enlarge click targets so a trackpad click is not a miss.

## Step 2: Put Navigation 3 in charge of panes

Navigation 3 can coordinate multi-pane layouts from the back stack. Two official scene strategies matter on a laptop:

- `ListDetailSceneStrategy` for list plus detail side by side when width is expanded or larger.
- `SupportingPaneSceneStrategy` for a primary canvas plus a supporting pane.

Scene decorators wrap screens with a persistent navigation rail. Pair the scenes with layout primitives such as Grid and FlexBox. Experimental MediaQuery and Styles APIs can later tune visual styles for desktop density.

The goal is one back stack that grows extra panes when space appears and collapses them when the user shrinks the window.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/UMACTIwgAX8"
    title="New Tools for Building Adaptively Across Form Factors"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step 3: Treat keyboard, pointer, and windows as first-class

Compose already handles physical keyboard navigation and pointer selection. Add the desktop extras Google lists for Googlebook:

1. Contextual cursors for text entry, pane resize, and tools.
2. Right-click menus and hover states.
3. Discoverable shortcuts through the Keyboard Shortcuts Helper.
4. Multi-instance so the user can open two independent windows of your app.
5. Drag and drop of text, images, and files between windows, including dropping onto empty workspace to start a new task.
6. A styled caption header bar with custom background, search, or tabs, while you leave system window controls alone.

Multi-instance is how a student compares two notes. Drag and drop is how a photo moves from Files into your editor. Neither belongs in a stretched phone chrome.

If you already shipped tablet and foldable work, this step is mostly wiring. Notability’s Android Engineering Manager Ryan Shea told Google: the team had targeted tablets and foldables first, so scaling to a laptop-class experience was “mostly turning a dial we had already built.” That left time for Continue On and side-by-side study layouts.

![Two people collaborating with laptops on a wooden table](https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80)

## Step 4: Connect the phone with Continue On

[Continue On](https://developer.android.com/develop/better-together/continue-on) hands a task between phone, tablet, and Googlebook. Pass state through `HandoffActivityData` so document position and active tabs survive the jump. Optional web fallbacks keep the path alive if the Android activity is not installed on the destination.

Handoff is bidirectional. A commute draft on the phone should open at the same paragraph on the laptop. The reverse should work when the user leaves the desk.

Surface glanceable state with desktop widgets. Then score the build against the [desktop app quality guidelines](https://developer.android.com/develop/adaptive-apps/quality-guidelines/adaptive-app-quality/experiences/desktop).

Phone-side Gemini habits still matter for users who pair a Pixel or Galaxy with the laptop. Our [Googlebook setup guide](/blog/googlebook-setup-magic-pointer/) covers Continue On, Files, and Cast My Apps from the owner’s chair. Your job is to preserve enough state that those system features have something useful to resume.

## Step 5: Test on the desktop emulator, not only a phone

Android Studio’s desktop emulator is a virtual desktop on your workstation. Use it to:

- Resize free-form windows and watch panes appear and disappear.
- Launch a second instance and drag content between windows.
- Click, hover, and tab through keyboard paths.

Google points developers to [Android Studio Canary](https://developer.android.com/studio/preview) for that virtual device.

To speed layout refactors, install the official adaptive skill through the Android CLI:

```bash
android skills add adaptive
```

The skill lives in the [android/skills](https://github.com/android/skills/tree/main/jetpack-compose/adaptive) repository and gives coding agents context to turn mobile layouts into responsive Compose containers. It does not replace a pass against the quality guidelines.

## Play listing and what “optimized” actually means

After the code works, update the Play listing so Googlebook users can find the desktop-ready build. Official benefits Google lists:

- Optimized-for-desktop badging
- Enhanced search ranking for those titles
- Featured spots on curated homepages
- Prominent transfer during phone-to-Googlebook setup

Enrollment in the Apps Experience Program is a separate business decision. Layout quality is the technical gate either way.

## Common failures to fix before you ship

- Layout keyed to device model or screen inches instead of window size class.
- Portrait-only manifest flags that letterbox a resized window.
- Bottom navigation that never becomes a rail on expanded width.
- No second activity instance, so comparison workflows die.
- Missing hover and right-click, so trackpad users feel like they are on a phone.
- Handoff that sends an empty intent with no scroll position or tab id.
- Caption bar that hides system close and maximize controls.

Fix those before you ask for a badge.

## Conclusion

Googlebook rewards one adaptive codebase, not a laptop fork. Size classes decide the skeleton. Navigation 3 scenes fill the extra width. Keyboard, pointer, multi-instance, and drag and drop make the window feel native. Continue On keeps the phone in the loop.

Start with the extra-large width path in the emulator. Then read the desktop design guide and the Googlebook developer hub and ship the panes you already planned for tablets.

## Sources

- [Land your apps on Googlebook with adaptive development — Android Developers Blog, 22 September 2026](https://android-developers.googleblog.com/2026/09/adaptive-development-scale-app-googlebook.html)
- [Use window size classes — Android Developers](https://developer.android.com/develop/adaptive-apps/guides/use-window-size-classes)
- [Get started with adaptive apps — Android Developers](https://developer.android.com/develop/adaptive-apps/guides/get-started-with-adaptive-apps)
- [Googlebook developer hub](https://developer.android.com/adaptive-apps)
- [Desktop design guide](https://developer.android.com/design/ui/desktop)
- [New Tools for Building Adaptively Across Form Factors (YouTube)](https://www.youtube.com/watch?v=UMACTIwgAX8)
