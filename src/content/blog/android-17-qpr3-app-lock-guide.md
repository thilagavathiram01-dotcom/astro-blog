---
title: "Android 17 QPR3 App Lock Guide for Pixel Phones"
description: "How to use native App Lock on Pixel with Android 17 QPR3 Beta 3. Step-by-step setup, effects on notifications, and comparison to Private Space."
pubDate: 2026-11-19T14:00:00
heroImage: "https://images.unsplash.com/photo-1592890288564-76628a30a657?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "pixel", "security", "how-to"]
noindex: false
---

Pixel owners have waited years for a built-in way to lock individual apps. Android 17 QPR3 Beta 3 finally brings native App Lock back after Google pulled it from earlier betas for polish. You can now protect banking, messages, or photos behind the same fingerprint, face, or PIN that unlocks your phone.

This guide shows exactly how to set it up on a Pixel running the current beta, what changes once an app is locked, and when the stable version arrives. It also explains why App Lock is not the same as Private Space.

## What App Lock does on Android 17

App Lock sits at the system level. It does not add a second password inside each app. After you lock an icon, opening that app triggers the normal system authentication sheet.

Google’s on-device prompt lists the main effects:

- Notification content from the locked app is hidden.
- Widgets and shortcuts for that app are removed from the home screen.
- Recent apps previews are redacted.
- AI agents and services you already allowed can still access the app’s data.

The lock targets casual snooping when you hand over an unlocked phone. It does not encrypt the app’s files or block skilled attackers.

![Person holding a black Android smartphone](https://images.unsplash.com/photo-1592890288564-76628a30a657?auto=format&fit=crop&w=800&q=80)

## Requirements and beta status

You need a supported Pixel on Android 17 QPR3 Beta 3 or later. Eligible devices start at the Pixel 6a and run through the Pixel 11 series (builds DP11.261016.003 or .004). Enroll in the Android Beta Program if the update is not already on your phone.

A screen lock must already be set: PIN, pattern, password, fingerprint, or face. App Lock reuses that credential. No separate app PIN is created.

Google plans the stable QPR3 platform release, which includes App Lock, for Q1 2027. Samsung has already added a similar feature in One UI 9.5 betas based on earlier Android 17 code.

If you are still on an older beta track, check our [Android 17 QPR3 Beta 3 install guide](/blog/android-17-qpr3-beta-3-pixel-install-guide/) for build numbers and enrollment steps.

## Lock one app from the home screen

This is the fastest method for most people.

1. Long-press the app icon on the home screen or in the app drawer.
2. Tap **App lock** in the context menu.
3. Read the summary. It notes that notification content will be hidden and widgets will be removed.
4. Tap **Add app lock**.
5. Authenticate with fingerprint, face, PIN, pattern, or password.

Open the app once to confirm the system auth sheet appears. To remove the lock, long-press the same icon and choose **Remove app lock**. That step also requires authentication.

A locked app’s icon does not change appearance, so others cannot easily see which apps are protected.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/TD1jCLssiYU"
    title="Pixel FINALLY has App Lock"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Manage multiple apps in Settings

Long-pressing many icons is slow. Use the central list instead.

1. Open **Settings**.
2. Go to **Security & privacy > App lock**.
3. Authenticate to enter the page.
4. Toggle apps on or off from the unified list.

Changes take effect immediately. This page remains the source of truth even if you use a third-party launcher that hides the long-press option.

Once you unlock an app, it stays unlocked while it is in the foreground plus a short grace period. Locking the phone screen re-locks every protected app right away.

![Hand holding a smartphone showing app icons](https://images.unsplash.com/photo-1744900647430-965ccc7a6078?auto=format&fit=crop&w=800&q=80)

## What to lock first

Start with apps that hold sensitive data:

- Banking, wallet, and tax apps
- Messaging apps that stay signed in
- Photos or Gallery
- Authenticator or password manager apps that do not already prompt for biometrics
- Health, dating, or work apps you would not open in public

Skip apps you open constantly unless the extra tap is worth the protection. Stacking App Lock on an app that already has its own biometric gate creates two prompts.

Certain preloaded system apps and apps that hold special roles cannot be locked.

## App Lock versus Private Space

Both features exist, and they solve different problems.

**App Lock** protects an existing app in your main profile. The app stays on the home screen (icon unchanged). Notifications still arrive, but their content is stripped. Widgets disappear. Agents you already permitted keep access.

**Private Space** creates a separate profile. Apps installed there do not appear on the main home screen at all. It is stronger when you want a second account, a fully hidden photo library, or a clean cut from the primary profile. See our earlier guide on [Android Private Space](/blog/android-private-space/) for setup details.

Google itself notes that photos and videos stored in a locked app may still appear in other apps that already have access. For stronger isolation, use Private Space.

## Practical limits and tips

- Review connected AI agents and services. App Lock does not revoke permissions you previously granted.
- Plan for missing widgets. A locked banking widget will not stay on the home screen.
- Test a notification. Send yourself a message from a locked app and confirm the lock-screen preview hides the body text.
- Back up before you enroll in the beta. Preview software can introduce bugs.
- App Lock is not a theft tool. Use Find Hub’s Mark as lost and Theft Detection Lock for stolen-device protection.

A five-minute routine works well: lock Messages, Photos, and one finance app from the home screen, then open Settings to audit the full list.

## Conclusion

Native App Lock on Pixel finally closes a long-standing gap. Long-press an icon, confirm with the credential you already use, and sensitive apps stay closed when the phone is unlocked but in someone else’s hands. Notifications lose their text, widgets vanish, and recent-app cards are blanked.

It is available now in the QPR3 beta and scheduled for the stable QPR3 release in early 2027. Use it for everyday borrowed-phone moments. Pair it with Private Space when you need stronger separation. Review agent permissions so a locked icon is not still readable by an assistant you already trusted.

## Sources

- [Google Pixel App Lock re-released in beta](https://9to5google.com/2026/11/18/google-pixel-app-lock-release-beta/) — 9to5Google, 18 November 2026
- [Google brings back App Lock for Pixel, stable set for Q1 2027](https://www.digitaltrends.com/phones/google-brings-back-app-lock-for-pixel-with-a-stable-release-set-for-q1-2027/) — Digital Trends
- [Android 17 QPR3 Beta App Lock: How to Lock Apps Natively on Pixel](https://nokiapoweruser.com/google-android-17-qpr3-beta-native-app-lock-guide/) — NPowerUser
- [Android Beta Program](https://www.android.com/beta/) — Google
