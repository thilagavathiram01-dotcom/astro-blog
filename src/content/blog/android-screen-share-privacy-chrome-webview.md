---
title: "How Android Automatically Hides Passwords During Screen Sharing"
description: "Android 15+ blanks login and payment fields in Chrome and WebView during live screen shares. See how the protection works and stops scams."
pubDate: 2026-11-09T16:00:00
heroImage: "https://images.unsplash.com/photo-1762330465065-af76f23809db?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "security", "how-to", "google"]
noindex: false
---

Screen sharing helps when you need remote support from family or a colleague. It also gives scammers a clear view of passwords, credit-card details, and one-time codes if you fall for a fake tech-support call. Android has long hidden sensitive fields inside native apps during screen shares. In October 2026 Google extended the same automatic protection to Chrome and Android WebView.

The feature blanks login fields and payment screens in the shared view while you continue typing on your device. No extra toggle is required once the update reaches your phone. It rolls out to Android 15 and later devices.

![Smartphone showing privacy settings screen](https://images.unsplash.com/photo-1762330465065-af76f23809db?auto=format&fit=crop&w=800&q=80)

## What the screen-share privacy feature does

Google’s October 14, 2026 security blog post describes the change under “Automatic screen-share privacy.” Android already redacts sensitive content in native apps. The update brings the same behavior to the browser and to web content loaded inside other apps via WebView.

During a live screen-share session the system detects login forms and payment screens. It blanks those areas in the remote viewer’s feed. Your local screen stays normal so you can still enter the information. The protection covers Chrome and any app that uses Android WebView to display web pages.

Footnote 6 in the same post states the feature is rolling out that month to Android 15+ devices. Rollout is gradual, so some phones receive it later than others depending on the manufacturer and Google Play services updates.

This builds on earlier Android 15 work that already protected password fields and notifications during screen recording or casting in native apps. Developers can still request additional callbacks when screen recording starts, but the blanking itself is handled by the system.

## Who receives the update

- Devices running Android 15 or higher.
- Chrome must be updated through the Play Store.
- Apps that embed web content through Android WebView receive the protection automatically once the system update lands.

You do not need to enable a Chrome flag or change a setting. The behavior is on by default after the rollout reaches your device. If you are on Android 14 or earlier the older native-app protections still apply, but Chrome pages remain fully visible to the remote viewer.

To confirm you have the update, check Settings → About phone for your Android version and open the Play Store to update Chrome and Google Play services. After a system update restarts your phone so the new screen-share rules take effect.

## How the blanking works in practice

When you start a screen share (through the system cast menu, a remote-support app, or Chrome’s own share options) the operating system monitors the displayed content. If it recognizes a password field, credit-card form, or payment screen it replaces that region with a blank or obscured area in the shared stream.

The detection uses standard autofill hints and form types that Android already understands. Native apps that set the correct inputType or autofill hints were already covered. Chrome and WebView now supply the same signals for web forms. Other content on the page—product images, account balances outside the form, or chat history—can still appear to the remote viewer.

The protection applies only while the screen-share session is active. Once you stop sharing, the fields display normally again. It also applies to screen recording in the same way.

![Purple smartphone with fingerprint sensor on wooden surface](https://images.unsplash.com/photo-1773408400448-8e8a3c119ba8?auto=format&fit=crop&w=800&q=80)

## Practical steps to stay protected

1. Update your phone to Android 15 or later if it is available for your model.
2. Open the Play Store and update Chrome plus Google Play services.
3. Restart the device after the updates finish.
4. When a caller asks you to share your screen for “support,” hang up and call the company on a number you look up yourself.
5. Prefer partial-screen or single-app sharing when the option appears. Android 15 and later let you share only one app instead of the entire display on many devices.

If you must share your screen with a trusted person, navigate away from login or payment pages before you start the share, then return after the sensitive step is done. The automatic blanking still covers the fields, but avoiding the pages entirely removes any residual risk.

## Extra protections that work with this feature

Android also hides private notification content and one-time passwords during screen shares. That protection arrived with Android 15 and continues to apply. Combined with the new Chrome and WebView blanking, fewer details leak even if a scammer convinces you to share your screen.

Call-forwarding safeguards rolled out alongside the screen-share change. Android now blocks apps from quietly enabling call forwarding in the background and warns you before an MMI code takes effect. Scammers often try to redirect your calls so they can intercept verification codes. Pair the screen-share protection with these call controls.

For stronger overall device security consider enabling Advanced Protection. Our guide on [How to Turn On Advanced Protection on Android 16+](/blog/android-advanced-protection-setup/) walks through the single switch that locks Play Protect, blocks sideloading, and adds extra theft and browser hardening.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/rVM13aY2rwU"
    title="How to Disable Screen Share Protections on Android"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips if the feature feels too strict

Some power users or developers temporarily disable screen-share protections through Developer options. The toggle is labeled “Disable screen share protections.” Turning it on removes the system-level blanking for the next sessions. Re-enable the protections when you finish testing.

Only use the disable option on a device you control and only for short periods. Leaving it off increases the chance that a remote viewer sees passwords or card numbers. After you turn the toggle back off, restart or start a new share session so the protections return.

Manufacturer skins sometimes move the exact menu path. Search Settings for “screen share” or “developer options” if you cannot find the switch. Enabling Developer options itself requires tapping the build number seven times under About phone.

## What the protection does not cover

The blanking targets login fields and payment screens. It does not hide every piece of personal information. Account numbers shown as plain text, recent transactions outside a payment form, or photos you have open can still appear in the shared view. Never share your screen with an unsolicited caller.

WebView protection depends on the app using the system WebView component. Some apps embed their own browser engines and may not receive the same automatic blanking. Stick to official banking and shopping apps that use standard Android components.

## Conclusion

Android’s automatic screen-share privacy feature removes one common path scammers use to harvest credentials. Once your Android 15+ device receives the October 2026 rollout, Chrome and WebView login and payment areas blank themselves during live shares. Keep the system and Chrome updated, avoid sharing your screen with strangers, and combine the feature with Advanced Protection and call-forwarding warnings for broader coverage.

The change requires no daily action from you. It simply raises the cost for anyone trying to watch you type a password or card number over a remote session.

## Sources

- [New Android protections to help keep you safe from mobile scams](https://blog.google/security/new-android-scam-protections/) — Google Blog, October 14, 2026
- [How Does Android 15 Protect Against Screen Spying?](https://www.guardsquare.com/blog/android-15-screen-spying-protection) — Guardsquare
- [How to Disable Screen Share Protections on Android](https://www.youtube.com/watch?v=rVM13aY2rwU) — YouTube
