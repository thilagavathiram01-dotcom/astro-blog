---
title: "Enable Play Games Sidekick in Google Play Console"
description: "Turn on Play Games Sidekick in Play Console, test the overlay on Android 13+, and set entry point position before a staged rollout."
pubDate: 2026-10-05T11:00:00
heroImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "how-to", "google", "developer"]
noindex: false
---

Players leave a match the moment they open YouTube for a walkthrough or switch apps to check an achievement. Play Games Sidekick is Google's in-game overlay for titles installed from Google Play. It keeps utilities, progress, offers, and videos on top of the session.

Google documents Sidekick as a Play Console toggle plus an optional SDK path, not a custom UI you draw yourself. This guide follows the [Play Games Sidekick docs](https://developer.android.com/games/pgs/play-games-sidekick) and the [Sidekick SDK page](https://developer.android.com/games/pgs/play-games-sidekick-sdk), updated through late September 2026.

If you also sell AI features or consumables, pair this overlay work with Play's usage-based billing setup in our guide to [usage-based billing for AI apps](/blog/google-play-usage-based-billing-ai-apps/).

## What players see in the overlay

Sidekick is a floating entry point. Players drag it toward the center of the screen to open the panel. Features depend on your Play Games Services setup and Play Points enrollment.

Documented utilities include screenshot, screen record, YouTube Livestream, and Do Not Disturb. Achievements appear only if you implement the achievements API. Gaming streaks, Play Points exchange, boosters, coupons, Play Pass offers, and quests show up when those programs apply to the title. Official and creator videos appear when you add them for the Play listing and Sidekick, using Google's store video showcase flow.

Players need a phone on Android 13 or higher, one Play Games gamer profile, and a copy of the game installed from the Play Store. A sideloaded build will not show the production overlay.

![Android phone on a desk beside a game controller](https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=800&q=80)

## Turn Sidekick on in Play Console

For Android App Bundles, Google injects Sidekick when you opt in during release creation. You do not ship a custom overlay view for the standard path.

1. Open [Play Console](https://play.google.com/console) and select the game.
2. Create an internal or closed testing release. Google points to the standard testing-track setup for this step.
3. When you add Sidekick to the bundle, select **Sidekick is on by default**.
4. Roll the build to testers and confirm the entry point in a Play-installed build.
5. After functional checks, promote toward production. Google recommends a phased release, and the Sidekick docs specifically call for a 5% staged rollout before you ramp to 100%.

Players can still hide the overlay from Play Store settings. Enabling the default does not lock the control on the device.

To apply the same choice to future uploads, open the game, go to **Testing > Advanced settings**, open the **Play Games Sidekick** tab, and pick either automatic default-on for new bundles or no automatic default. Save the change. If updates are rare, Google says it may periodically update Sidekick for you. You can opt out in those advanced settings.

Publishing through the Google Play Developer Publishing API still works. Turn on automatic addition for bundle uploads first, then keep your normal release process. Sidekick is attached to the Android App Bundle.

Games that ship a production release with Sidekick meet the related [Level Up user-experience guideline](https://play.google.com/console/about/levelup/#user-experience-guidelines).

## Test the overlay on a device

Closed testing is enough for functional checks. It is not a clean A/B for revenue, because the track does not give you a direct production comparison. Use it to confirm the entry point, then use a production staged rollout for metrics.

On a tester phone, after the release is available:

1. Open the Google Play Store app.
2. Tap the profile icon, then **Settings**.
3. Open **About**.
4. Tap **Play Store version** seven times until you see the developer message.
5. Go to **General**, then **Developer options**.
6. Turn on **Play Games Sidekick**.
7. Launch the game and confirm the entry point.

Hide it the same way a player would. Open the overlay, open settings, and turn off **Show Play Sidekick** under Google Play Games in Play Store settings. Support docs also describe a notification entry point if the player switches away from the floating icon.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/xy9wq-hreNE"
    title="Introducing the Google Play Games Level Up program"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

Android Developers covers Sidekick in the Level Up overview above, including the Console toggle and the goal of keeping profile, progress, and rewards inside the session.

## Set the entry point and a short snooze

The default anchor is the logical end edge, vertically centered, which is the middle-right side in both orientations. With 3-button navigation, the entry point moves to the side opposite the navigation bar.

Override that in `AndroidManifest.xml` by pointing a meta-data item at an XML resource:

```xml
<meta-data
    android:name="com.google.android.finsky.deku.OVERLAY_CONFIG"
    android:resource="@xml/sidekick_config" />
```

Place `res/xml/sidekick_config.xml` next to it:

```xml
<?xml version="1.0" encoding="utf-8"?>
<deku-config>
    <default-entrypoint-position orientation="landscape" value="MIDDLE_LEFT" />
    <default-entrypoint-position orientation="portrait" value="TOP_RIGHT" />
    <snooze duration_seconds="300" />
</deku-config>
```

Supported positions are `MIDDLE_LEFT`, `MIDDLE_RIGHT`, `TOP_LEFT`, `TOP_RIGHT`, `BOTTOM_LEFT`, and `BOTTOM_RIGHT`. These are physical edges. `MIDDLE_LEFT` stays on the left even in a right-to-left locale. If a player drags the icon, that position wins over your XML default and persists across sessions.

The snooze tag hides the entry point during the first-time experience for the number of seconds you set. The cap is 30 minutes. A larger value falls back to that limit. The sample above hides the icon for five minutes, which is enough for a tutorial fight without blocking later sessions.

![Hands holding a game controller during a mobile session](https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=800&q=80)

## Use the SDK only when bundles are not an option

Most games should stay on app bundles and the Console toggle. The Sidekick SDK is for teams that still publish APKs, or that use an anti-tampering product Google has not cleared for the injected overlay.

Add Google's Maven repo and this dependency:

```kotlin
dependencies {
    implementation("com.google.android.play:sidekick:+")
}
```

The latest SDK requires `minSdkVersion` 23. Tests still go through internal or closed tracks. To turn the feature off later, ship a build without the SDK or ask Play support for a remote disable. You cannot flip a local debug flag in production.

If game activities run in another process, declare the documented `DekuContentProvider` entries for each process, up to five, with your package name in the authority and `android:exported="false"`. Complete the Sidekick SDK registration form before upload. Google says approval takes one to two weeks. After that, still select **Add Play Games Sidekick to app bundles you upload** in Console so the bundle is checked and not duplicated.

## Watch stability before you ramp the rollout

Google's playbook is a 5% production staged rollout, filtered by the app version that contains Sidekick.

Track Android vitals for crashes and ANRs on that version in Play Console. Compare engagement for the same version against the rest of production. Check revenue and in-app purchase totals in Google Analytics or your own BI tools, not only in Console, and compare the 5% cohort with the remaining traffic. Ramp to 100% only after those series stay stable.

Achievements that stay in Draft never appear in Sidekick. Locked achievements are visible to every player only after the game earns an achievements badge: at least 100 unique players must call the achievements API within the last 30 days. Without that badge, players see only achievements they have already unlocked.

## Tips before you ship

Keep the entry point off critical HUD edges. A middle-right default collides with many shooters and racing games. Set landscape to `MIDDLE_LEFT` or `TOP_RIGHT` and confirm both orientations on a gesture-nav phone and a 3-button phone.

Add store videos before you expect them inside Sidekick. The overlay shows the videos you attach. An empty video shelf looks like a broken integration.

Do not treat closed testing as a revenue experiment. Use it for the entry point, snooze, and achievement list. Use the 5% production cohort for crash rate and spend.

Send product feedback through the form linked from the Sidekick docs if the overlay fights an anti-cheat SDK or a custom immersive mode.

## Keep the session inside the game

Sidekick is a Console release setting for app bundles, a device developer toggle for testers, and a small XML file if you need a custom anchor or a first-session snooze. The SDK is the exception path for APKs and incompatible tamper protection.

Ship it on a closed track, confirm Android 13 phones with a Play install and a gamer profile, then watch vitals and revenue on a 5% production rollout. Players can hide the icon. Your job is to make the default position and the achievement data worth leaving visible.

### Sources

- [Play Games Sidekick](https://developer.android.com/games/pgs/play-games-sidekick), Android Developers, last updated 2026-09-30
- [Sidekick SDK](https://developer.android.com/games/pgs/play-games-sidekick-sdk), Android Developers
- [Get started with Play Games Sidekick](https://support.google.com/googleplay/answer/16706839), Google Play Help
- [Introducing the Google Play Games Level Up program](https://www.youtube.com/watch?v=xy9wq-hreNE), Android Developers
