---
title: "How to Publish Android Games to Car Screens in 2026"
description: "Games on Android Auto and Automotive OS left beta. Add manifest flags, handle parked state, then ship on Play production."
pubDate: 2026-09-22T16:30:00
heroImage: "https://images.unsplash.com/photo-1449965408869-eaa3ac729def?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "how-to", "google"]
noindex: false
---

On 21 September 2026, Google moved the games category for Android Auto and cars with Google built-in from beta to general availability. Developers can now publish titles to open testing and production on Google Play, not only internal and closed tracks.

The work is smaller than a new game engine. If your title already follows adaptive layout rules, you mainly edit the manifest, respect the parked state, and pass car app quality review.

This guide follows the official Android Developers Blog post by Jan Kleinert and the [Build games for cars](https://developer.android.com/training/cars/parked/games) docs. Pair it with existing large-screen work you may already have for [App Bubbles on Android 17](/blog/android-17-app-bubbles/).

## What changed on 21 September 2026

Google opened open testing and production for the games category on two surfaces:

- **Android Auto** on phones running Android 15 and higher, projected to a compatible head unit while the vehicle is parked.
- **Android Automotive OS (AAOS)** with Google built-in, where the game installs on the car itself.

Early access partners already shipped titles such as Angry Birds 2, Farm Heroes Saga, Candy Crush Soda Saga, and Beach Buggy Racing 2 during beta. Play now lists public collections for [games on Android Auto](https://play.google.com/store/apps/streamchild/promotion_apps_beto__games_on_android_auto__collection?hl=en) and [games on Android Automotive OS](https://play.google.com/store/apps/streamchild/promotion_apps_beto_games_on_android_automotive_os_collection?hl=en).

The target session is downtime: a charging stop, a curbside pickup, or a parked wait. Games stay parked-only. The system blocks launch and interaction while the car is in motion or UX restrictions are active.

Android Studio still ships a car app template if you want a clean module to test launcher flags:

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Ga1awqSUbKk"
    title="Develop Android car apps faster with the new template in Android Studio"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Mark the app as a game

Play only places the title in the car games category if the manifest says so. Add `android:appCategory` on the application tag.

```xml
<application
    android:appCategory="game"
    ... >
</application>
```

Skip this flag and the review path treats you as a generic parked app, not a game.

## Declare Android Auto support

Android Auto games require Android 15 or later on the phone. Add `CAR_LAUNCHER` to an activity intent filter.

```xml
<activity ...>
    <intent-filter>
        <action android:name="android.intent.action.MAIN" />
        <category android:name="android.intent.category.LAUNCHER" />
        <category android:name="android.intent.category.CAR_LAUNCHER" />
    </intent-filter>
</activity>
```

You can put `CAR_LAUNCHER` on a different activity if the car should open a dedicated entry screen. Keep that activity simple. Car screens vary in size and the first frame should already fill the display.

## Declare Android Automotive OS support

AAOS needs a hardware feature flag. Set `android:required` based on the Play track.

```xml
<uses-feature
    android:name="android.hardware.type.automotive"
    android:required="false" />
```

Google’s distribution rules:

- **Mobile track** that also ships to phones: `android:required` must be `"false"`.
- **Dedicated AAOS track**: `"true"`, `"false"`, or omit the attribute. An omitted value behaves like `"true"` and limits distribution to automotive devices.

Choose the dedicated track only if you maintain a car-specific APK or App Bundle.

![Dashboard of a parked car with a wide infotainment display](https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80)

## Handle the parked state

Games are parked apps. Do not add the `distractionOptimized` metadata element on any activity. Android Auto and AAOS already block the activity when the vehicle moves.

You still own audio and resume behavior:

1. Stop game audio when the user starts driving. Do not leave a soundtrack running in the background.
2. Do not let the player unpause while UX restrictions are active.
3. When the user opens the game again from the car launcher, restore the previous session as closely as you can.
4. Keep the frame rate stable. Freeze or stutter during play fails quality review.

Google’s TrivialKart for Unity sample shows the parked overlay on the Desktop Head Unit. Use that sample if you ship a Unity title and need a reference for pause-on-drive.

## Declare optional gamepad support

Car screens accept touch. Many players still plug in a controller. If your input layer already maps a gamepad, declare the feature so Play can surface the title to controller shoppers.

```xml
<uses-feature
    android:name="android.hardware.gamepad"
    android:required="false" />
```

Keep `required` as `false` unless the game cannot run without a pad. A required gamepad hides the title from touch-only cars.

## Fit odd car screens

Head units ship as portrait stacks and very wide landscapes. Google asks for a full-screen layout with no heavy letterboxing or pillarboxing. The DO-2 car app quality rule calls out large unused bars on landscape Android Auto screens.

Practical checks:

- Use adaptive layouts or a camera that recenters on the playfield when the aspect ratio changes.
- Test Android Auto against the documented Desktop Head Unit sizes, including 800×480 at 160 dpi.
- Test AAOS with bundled hardware profiles in the automotive emulator, not only a phone emulator.

If you already made the title work on foldables and tablets, reuse that layout path. Do not ship a phone-only canvas and hope the car scales it.

![Person connecting a game controller next to a laptop](https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=800&q=80)

## Test before you opt in on Play

1. Build a release or internal-test bundle with the new manifest flags.
2. Run the **Desktop Head Unit** for Android Auto. Confirm launch from the car launcher, pause when you flip the DHU into a driving restriction, and resume after park.
3. Run the **Android Automotive OS emulator**. Confirm the automotive feature flag does not crash on a non-car phone if you used `required="false"`.
4. Walk the [car app quality guidelines for games](https://developer.android.com/docs/quality-guidelines/car-app-quality?category=games).
5. In Play Console, opt in to the Android Auto and Android Automotive OS form factors.

Play reviews the game against those guidelines before open testing or production. Closed and internal tracks still help you collect logs from a small driver group first.

## Publishing checklist

- `android:appCategory="game"` is on the application tag.
- `CAR_LAUNCHER` is on the activity you want on Android Auto.
- `android.hardware.type.automotive` matches the track you picked.
- No `distractionOptimized` metadata on activities.
- Audio stops when driving starts.
- Session state restores after a relaunch.
- Layout fills portrait and wide landscape without large empty bars.
- Gamepad feature is optional unless a pad is mandatory.
- DHU and AAOS emulator runs are recorded for the review notes.

## Tips that save a rejection

- Treat parked play as a short session. Save often. Charging stops end without warning.
- Avoid multi-minute unskippable ads. Reviewers watch for distraction and for blocked back navigation.
- Keep permissions lean. A parked game that asks for location in the background looks like a driving app and invites extra scrutiny.
- If you ship both a phone APK and an AAOS module, keep shared game code in a common Gradle module so the parked-state logic cannot drift.
- Read [Add support for Android Auto to your parked app](https://developer.android.com/training/cars/parked/auto) when the DHU crops your HUD. That page lists the canonical resolutions Google tests.

## Conclusion

Games for Android Auto and Google-built-in cars are no longer limited to partner beta tracks. Mark the app as a game, add `CAR_LAUNCHER` and the automotive feature flag, stop audio when the car moves, and submit after DHU and emulator checks.

Start with one adaptive title you already sell on phones. The manifest work is small. The review is about parked-only behavior and screen fit, not a rewrite of your engine.

## Sources

- [Bring your Android game to the car screen today — Android Developers Blog (21 Sep 2026)](https://android-developers.googleblog.com/2026/09/bring-android-game-to-car-screen.html)
- [Build games for cars — Android Developers](https://developer.android.com/training/cars/parked/games)
- [Add support for Android Auto to your parked app](https://developer.android.com/training/cars/parked/auto)
- [Car app quality guidelines (games)](https://developer.android.com/docs/quality-guidelines/car-app-quality?category=games)
- [Distribute to cars — choose an AAOS track](https://developer.android.com/training/cars/distribute#choose-track-aaos)
- [Desktop Head Unit](https://developer.android.com/training/cars/testing/dhu)
- [Android Automotive OS emulator](https://developer.android.com/training/cars/testing/emulator)
- [Develop Android car apps faster with the new template in Android Studio — Android Developers (YouTube)](https://www.youtube.com/watch?v=Ga1awqSUbKk)
