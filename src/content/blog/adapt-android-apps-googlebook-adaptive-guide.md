---
title: "Adapt Android Apps for Googlebook with Adaptive Layouts"
description: "Step-by-step guide to preparing your Android app for Googlebook laptops using window size classes, Navigation 3 multi-pane layouts, and the adaptive skill."
pubDate: 2026-11-06T10:00:00
heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "how-to", "developer"]
noindex: false
---

Googlebook laptops bring Android apps into a desktop environment with large touchscreens, keyboards, and trackpads. Users expect higher information density and precise input instead of stretched phone layouts. Adaptive development lets one codebase handle phones, foldables, tablets, and these new laptops.

This guide walks through the practical steps to adapt an existing Jetpack Compose app for Googlebook. You will use window size classes, Navigation 3 scene strategies, and Android CLI skills. No separate app is required.

## Understand the Googlebook opportunity

Googlebook devices run on the Android stack with ChromeOS desktop foundations. Partners including HP, Dell, Lenovo, Acer, and Asus ship models with OLED touchscreens, dedicated keyboards, and all-day battery life. OS-level Gemini integration is built in.

Apps optimized for desktop receive better Google Play visibility through dedicated badging and curated collections. Optimized apps are also highlighted when users set up a new Googlebook from their Android phone. Meeting desktop quality guidelines prepares your app for the Apps Experience Program rate card.

The core requirement is adaptive layouts that respond to available window space rather than device type. Free-form windowing means users can resize your app at any time.

![Laptop and phone workspace for cross-device development](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Build multi-pane layouts with Navigation 3

On a laptop, a single-pane phone layout wastes space. Navigation 3 provides scene strategies that coordinate panes from the back stack.

Install the adaptive skill first so agents receive current guidance:

```bash
android skills add adaptive
```

Then implement ListDetailSceneStrategy or SupportingPaneSceneStrategy. When the window reaches expanded width, the list and detail appear side by side. On compact windows they stack.

Use scene decorators to add a persistent navigation rail on desktop. Pair the strategies with Grid or FlexBox for denser content. Experimental mediaQuery and Styles APIs let you adjust visual density based on window characteristics. See our guide on [building adaptive layouts with mediaQuery](/blog/adaptive-layouts-mediaquery-jetpack-compose-guide/) for the query patterns.

Base decisions on WindowSizeClass rather than physical screen size. Compact and medium widths keep one pane; expanded widths reveal the second.

## Support keyboard, trackpad, and multi-instance workflows

Jetpack Compose handles physical keyboard navigation and pointer events natively. Add contextual cursors for text fields and resize handles. Implement right-click context menus and hover states.

Make keyboard shortcuts discoverable with the Keyboard Shortcuts Helper. Users expect common shortcuts to work without opening menus.

Enable multi-instance support so users can open two windows of your app side by side. Combine this with drag-and-drop so text, images, or files move between windows. Custom app bars can sit in the desktop caption area while respecting system window controls.

Continue On lets users start a task on their phone and resume it on the Googlebook. Pass state through HandoffActivityData to preserve scroll position or open tabs.

## Test with the desktop emulator and CLI tools

Android Studio Canary includes a desktop emulator. Create a virtual desktop device, resize windows freely, and verify multi-instance behavior with mouse and keyboard input.

Googlebook hardware supports ADB over Wi-Fi on all models. Some models also support USB debugging on specific ports. Pair from your workstation or from the on-device Linux terminal.

The adaptive skill in Android CLI gives agents the context to refactor layouts. After installing it, prompt an agent with “Adapt the main screen for expanded window size classes using Navigation 3.” Review the resulting changes before merging.

Googlebook also includes an isolated Linux environment for local builds and Antigravity tools, so you can test directly on the device.

![Developer coding on a multi-monitor desk setup](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80)

## Practical tips for production readiness

Start with window size classes and the Material 3 Adaptive library components such as NavigationSuiteScaffold. These cover most navigation transitions.

Measure line lengths and set maximum content widths so text remains readable at desktop viewing distances. Increase click target sizes where pointer precision is high.

Test resizability early. Android 17 removes orientation and resizability opt-outs on large screens for apps targeting API 37. Adaptive layouts become the baseline.

Review the desktop app quality guidelines. They cover multi-window behavior, keyboard support, and continuity features. Meeting Tier 2 of the adaptive quality guidelines unlocks Play badging.

Use the desktop emulator for the first pass, then confirm on physical hardware or Device Streaming if available. Capture traces with the profiler when testing multi-instance performance.

## Conclusion

Adapting for Googlebook reuses the same adaptive foundations you already apply to tablets and foldables. Window size classes, Navigation 3 scene strategies, and the adaptive skill move an existing Compose app to a laptop-class experience without a second codebase. Optimized apps gain Play visibility and day-one presence on new devices.

Install the adaptive skill, update your layouts to respond to expanded windows, and test in the desktop emulator. The same patterns prepare your app for other large-screen Android form factors.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/aZjbDY3UXws"
    title="Inside the first wave on Googlebook with Notability and Logitech"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- [Build adaptive apps for Googlebook](https://developer.android.com/develop/adaptive-apps/guides/googlebook/overview) — Android Developers
- [Land your apps on Googlebook with adaptive development](https://developer.android.com/blog/posts/land-your-apps-on-googlebook-with-adaptive-development) — Android Developers Blog, 22 September 2026
- [ADB debugging on Googlebook](https://developer.android.com/develop/adaptive-apps/guides/googlebook/adb-debugging) — Android Developers
- [Inside the first wave on Googlebook with Notability and Logitech](https://www.youtube.com/watch?v=aZjbDY3UXws) — Android Developers, Android Dev Summit 2026
