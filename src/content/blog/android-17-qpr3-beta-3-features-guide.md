---
title: "Android 17 QPR3 Beta 3 Features: App Lock, Bubbles Guide"
description: "How to use Android 17 QPR3 Beta 3 features on Pixel: enable app lock, launch bubbles from Recents, add camera tile, and more."
pubDate: 2026-10-30T19:00:00
heroImage: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "pixel", "how-to", "tutorials"]
noindex: false
---

Android 17 QPR3 Beta 3 arrived on October 29, 2026 for Pixel devices in the beta program. It restores app lock, adds a Recents option for bubbles, and places a camera tile in Quick Settings. The build also returns lock-screen blur and fixes 26 bugs.

This guide shows how to use the main changes. Features in beta are not guaranteed for the stable release. Install the update first if needed. See our [Android 17 QPR3 Beta 3 install guide](/blog/android-17-qpr3-beta-3-pixel-install-guide/) for enrollment and flash steps.

Build numbers are DP11.261016.004 on Pixel 11 models and DP11.261016.003 on other supported Pixels from the 6a. Security patch level remains 2026-10-05.

## Key changes in Beta 3

App lock returns after the product team pulled it from earlier QPR2 betas for more polish. Lock an app and it requires your device PIN, pattern, password, or biometric to open. Notification content hides. Widgets and shortcuts are removed. Recents content is redacted while locked.

You can launch any app as a bubble from the Recents overview. This helps users on third-party launchers, who previously lacked an easy path to the Android 17 bubbles feature.

A new camera tile in Quick Settings gives an accessibility-friendly shortcut. It helps people who struggle with the double-press power gesture or the long-press lock-screen shortcut. Lock-screen blur returns on shortcuts, the fingerprint button, and notifications. Alarms on the lock screen now show AM or PM correctly. The power menu gains a screenshot button that captures the full screen, including status and navigation bars.

![Android smartphone on a wooden desk](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## How to lock an app

App lock uses your existing device credential. It does not create a separate PIN.

1. Long-press the app icon on the home screen or in the app drawer.
2. In the context menu, tap App lock.
3. Confirm with your fingerprint, face unlock, PIN, pattern, or password.

The app now requires authentication before it opens. Its notification previews hide content. Any widgets or home-screen shortcuts for that app disappear. When the app appears in Recents, its content is redacted.

To manage locked apps, open Settings > Security & privacy > App lock. You can add or remove apps from the list there. AI agents and services you previously granted access to can still reach the app data. The lock stops casual physical access, not software you already authorized.

Test it on a non-critical app first. Unlocking happens through the normal system authentication sheet.

## Launch bubbles from Recents

Android 17 introduced system-wide app bubbles. Beta 3 makes them easier to start from Recents.

1. Swipe up and hold to open the Recents overview.
2. Find the app you want.
3. Tap the dropdown menu on that app card.
4. Select the bubble option.

The app opens as a floating bubble. You can drag it, minimize it by tapping the icon, or dismiss it by dragging to the bottom. Multiple bubbles can stay active.

On the stock Pixel Launcher, the home-screen long-press context menu still offers a bubble shortcut. The Recents method is new and works with alternative launchers. This lets third-party launcher users access the feature without extra steps.

Bubbles appear on phones, foldables, and tablets. On larger screens they can pin to a bubble bar in some configurations.

![Person holding a smartphone showing app icons](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Add the camera Quick Settings tile

The camera tile is optional. Add it if the power-button gestures are hard to use.

1. Swipe down twice to open the full Quick Settings panel.
2. Tap the pencil or edit icon.
3. Find the Camera tile and drag it into the active area.
4. Tap Done.

Tap the tile to open the camera app. Google describes it as an accessibility improvement. Existing methods (double-press power or lock-screen long-press) still work.

## Other interface updates

Lock-screen blur is back. Shortcuts, the fingerprint button, and notification backgrounds use the frosted effect again. The product team had temporarily removed it in earlier betas to fix bugs.

Lock-screen alarms now display the correct AM or PM indicator when you use 12-hour format.

The power menu includes a Screenshot option. Press and hold the power button (or the power + volume-up combination that opens the menu). Tap Screenshot. The capture includes the status bar and navigation bar. This is useful for bug reports or tutorials that need the full UI.

These changes sit alongside the 26 bug fixes listed in the official release notes. Notable ones cover foldable inner-display black screens, Recents flicker, bubbles that stuck when dismissed, Mobile Data tile sizing, PEAP Wi-Fi authentication, and lock-screen crashes.

## Tips for daily use

Back up before you rely on beta features. App lock and bubbles can change before the stable Feature Drop.

If you use a third-party launcher, test the Recents bubble option. Confirm that locked apps still hide notification content and redact Recents correctly.

The camera tile is most helpful for one-handed use or when the power button is awkward. You can still double-press power or use the lock-screen shortcut.

Report issues through the Android Beta Feedback app on the device. Include the build number (DP11.261016.003 or .004) and steps to reproduce.

Stable QPR3 is expected later as a Pixel Feature Drop. Timelines point toward 2027, but Google has not set a firm date on the release notes.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/86EkKDfkuyk"
    title="Android 17 QPR3 Beta 3 Is Here! New Features, Bug Fixes & Performance Improvements"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Android 17 QPR3 Beta 3 brings back app lock and adds practical shortcuts for bubbles and the camera. Lock sensitive apps with your device credential, start bubbles from Recents even on alternative launchers, and add the camera tile if power gestures are difficult. The power-menu screenshot and restored lock-screen blur round out the visible changes. These updates sit on top of 26 bug fixes. Try them on a backup device if you can, and verify behavior after each beta.

## Sources

- Android Developers, Android 17 QPR3 release notes (October 29, 2026): https://developer.android.com/about/versions/17/qpr3/release-notes
- Mishaal Rahman, Android community updates on app lock, Recents bubbles, and camera tile (October 29, 2026)
- 9to5Google, Here's everything new in Android 17 QPR3 Beta 3 (October 29, 2026)
- Android Authority and Android Police coverage of the Beta 3 rollout (October 29–30, 2026)
- In Depth Tech Reviews, Android 17 QPR3 Beta 3 overview, YouTube
