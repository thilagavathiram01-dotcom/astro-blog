---
title: "How to Lock Apps on Pixel With Android 17 App Lock"
description: "Lock any Pixel app behind fingerprint or PIN with Android 17 QPR2 App Lock. Steps, limits, and how it differs from Private Space."
pubDate: 2026-09-20T14:00:00
heroImage: "https://images.unsplash.com/photo-1614064641938-8b0383284c42?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "pixel", "security", "how-to"]
noindex: false
---

Handing a Pixel to a friend should not open your banking app. Android 17 QPR2 Beta 3 put a system **App Lock** on Pixel phones so any icon can demand the same fingerprint, face, or PIN you already use at the lock screen.

The feature is still in the QPR2 beta track. 9to5Google first documented it on 14 August 2026. Google’s usual QPR cadence points at a December stable Feature Drop. This guide covers what testers can do today, what Google’s on-device copy actually promises, and where App Lock is weaker than [Private Space](/blog/android-private-space/).

## What App Lock does

App Lock is a launcher-and-settings feature, not an extra password inside each app. After you lock an icon, opening that app shows the system authentication sheet.

Google’s in-product explanation, reported by 9to5Google and confirmed in QPR2 Beta 3 walkthroughs, lists three side effects:

- Notification **content** is hidden (you still get a notification, not the message text).
- Widgets and shortcuts for that app are **removed** from the home screen.
- AI agents and services you already allowed can **still** read the app’s data.

That last line matters. App Lock is a shoulder-surfing and borrowed-phone control. It is not a vault and it does not re-encrypt the app’s files.

![Person unlocking an Android phone with a fingerprint](https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=800&q=80)

## What you need

- A Pixel on **Android 17 QPR2 Beta 3 or later**. Coverage of Beta 5 (15 September 2026) still lists Pixel 6a through Pixel 11 series. Pixel 6 and Pixel 6 Pro are off the current QPR2 device list.
- Enrollment in the [Android Beta for Pixel](https://www.android.com/beta/) program if the stable QPR2 package has not reached you yet.
- A screen lock: PIN, pattern, password, fingerprint, or face. App Lock reuses that credential.

If you only need install steps and build numbers for the current preview, use our [Android 17 QPR2 Beta 5 install guide](/blog/android-17-qpr2-beta-5/).

Samsung One UI 9.5 betas have shown a similar lock icon in early leaks. Treat that as OEM work, not a promise that every Android 17 phone ships App Lock on day one.

## Lock one app from the home screen

This is the path most people will use.

1. Long-press the app icon on the home screen or in the app drawer.
2. Open the Actions menu. On QPR2 Beta 3 the list includes App info, Pause app, Widgets, Remove, Bubble, and **App lock** at the bottom.
3. Tap **App lock**.
4. Read the overflow card. Confirm you accept hidden notification text, removed widgets, and continued access for agents you already authorized.
5. Authenticate with fingerprint, face, or PIN.
6. Open the app once. You should see the system auth sheet before the first screen.

To undo the lock, long-press the same icon and choose **Remove app lock**. That also asks for biometrics or PIN.

Recent Apps shows a locked app as a blank card with a padlock, according to independent QPR2 walkthroughs. That stops someone from peeking at a banking session from the overview grid.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/G4z5eYf661Y"
    title="Android 17 QPR2 Beta 3 Is Here! Hidden Features & Major Changes"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Lock several apps from Settings

Long-pressing ten icons is slow. QPR2 also exposes a bulk list.

1. Open **Settings → Security & privacy → App lock**.
2. Authenticate to enter the page.
3. Toggle apps on or off. Search and sort are available when the list is long.
4. Leave Settings. The next launch of each newly locked app should prompt.

Use this page as the source of truth. If a long-press option is missing because you use a third-party launcher, Settings still owns the lock list on Pixel’s system implementation.

Early Canary builds only locked apps one by one from the Pixel Launcher. QPR1 Beta 6 already contained strings about adding App Lock to multiple apps at once in Settings. QPR2 Beta 3 is the first public beta where that list is usable.

![Home screen of an Android phone with app icons](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## What to lock first

Start with apps that leak identity or money if someone taps once:

- Banking, wallets, and tax apps
- The default Photos or Gallery app
- Messaging apps you keep signed in
- Authenticator or password-manager apps that are not already gated by their own biometric prompt
- Dating or medical apps you would not open on a shared table

Skip apps you open dozens of times an hour unless the friction is worth it. You will hit the auth sheet every launch.

If an app already has its own lock (many banks do), stacking App Lock adds a second prompt. That is optional, not required.

## App Lock vs Private Space

Use both if you need them. They solve different jobs.

**App Lock** hides one tap from a person holding an unlocked phone. The app stays in the same profile. Notifications still arrive, with content stripped. Allowed agents can still call into the app.

**Private Space** is a second Android profile with its own lock. Apps installed there do not sit on the main home screen. That is the better tool when you want a second work account, a hidden photo library, or a clean cut from the primary profile.

Privacy Guides’ write-up of QPR2 Beta 3 is blunt: do not treat App Lock as protection against a skilled attacker with physical access and forensic tools. It does not separately encrypt the app. Use it against casual snooping.

## Limits you should plan for

- **Agents keep access.** If Gemini, a third-party MCP client, or another service already has permission to that app, App Lock does not revoke it. Review connected apps under Google Account and each agent’s settings.
- **Widgets disappear.** A locked banking widget will not sit on the home screen. Plan a replacement glance, or leave that app unlocked.
- **Launcher differences.** The long-press action is documented on Pixel Launcher. A custom launcher may omit the shortcut even when Settings still works.
- **Beta risk.** QPR2 is preview software. Enrolling can complicate leaving the program later. Back up first.
- **Not a stolen-phone control.** Find Hub’s Mark as lost and Theft Detection Lock still handle theft. App Lock does not replace them.

QPR1 teardowns also showed strings for a biometrics-only mode that would disable PIN fallback. That mode was not the shipping Beta 3 behavior described by 9to5Google. Until Google documents it in stable release notes, assume PIN or pattern still works as a fallback.

## A five-minute setup

1. Confirm Android 17 QPR2 (Settings → About phone → Build number starts with `CP41` on current QPR2 betas).
2. Lock Messages, Photos, and one finance app from the home-screen menu.
3. Open Settings → Security & privacy → App lock and add anything you missed.
4. Send yourself a test message and check that the lock-screen notification hides the body.
5. Open Recents and confirm the locked card is blank.
6. If you share the phone with a child or colleague, pair App Lock with Private Space for the apps that should not appear at all.

## Conclusion

Pixel App Lock is a small system switch that finally matches what Samsung skins and iOS 18 already offered: long-press an icon, require the same credential you use to wake the phone, hide notification text, and drop widgets that would leak the same data.

Use it for borrowed-phone moments. Keep Private Space for apps that should not live in the primary profile. Review agent permissions so a locked banking icon is not still readable by a connected assistant. When QPR2 leaves beta, the same Settings page is the place to audit the list.

## Sources

- [Android 17 QPR2 adds App lock to Pixel](https://9to5google.com/2026/08/14/android-17-qpr2-app-lock/) — 9to5Google, 14 August 2026
- [Android Will Allow You to Lock Any App Behind Your Fingerprint or PIN](https://www.privacyguides.org/news/2026/08/18/android-will-allow-you-to-lock-any-app-behind-your-fingerprint-or-pin/) — Privacy Guides
- [Android 17 QPR2 release notes](https://developer.android.com/about/versions/17/qpr2/release-notes) — Android Developers
- [Get Android 17](https://developer.android.com/about/versions/17/get) — Android Developers
- [Android Beta Program](https://www.android.com/beta/) — Google
