---
title: "How to Enable Enhanced Protection in Google Messages"
description: "Turn on Enhanced Protection mode in Google Messages for stronger AI scam detection using Gemini and Private AI Compute on Android."
pubDate: 2026-11-04T14:00:00
heroImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "security", "how-to"]
noindex: false
---

Google Messages now offers an opt-in Enhanced Protection mode that adds cloud-powered Gemini analysis to catch sophisticated conversational scams. The feature rolled out starting in late October 2026 after Google announced it on October 14. It builds on existing on-device Scam Detection and is designed for slow-burn attacks that develop across multiple messages.

This guide shows exactly how to enable it, which devices support the full set of features, and how the privacy model works. If you use Google Messages as your default SMS app, the setting is worth checking.

## What Enhanced Protection Adds

Standard Protection in Google Messages already filters spam and flags known harmful links. Enhanced Protection turns on three additional layers:

- **Scam Detection with Private AI Compute.** When you chat with an unknown sender, Messages can send conversation context to Google’s most capable cloud Gemini models. The models evaluate intent more quickly than on-device detection alone. Analysis happens in Private AI Compute, where data is encrypted and processed in a secure dedicated space that Google says is inaccessible to anyone else, including Google itself.
- **Smarter link checks with Gemini Nano.** On supported devices, the on-device Gemini Nano model combines existing URL protections with real-time web signals. This helps flag brand-new phishing sites that have not yet been added to blocklists.
- **Redesigned link checkpoints.** You get clearer warnings and extra time before tapping links from numbers that are not in your contacts. This was previously limited to certain countries or devices running Android Advanced Protection.

Google reports that AI-powered Scam Detection in Phone by Google and Google Messages already flags more than 5 million suspected scam calls and texts every month. Enhanced Protection is meant to catch the more nuanced cases that slip past simpler filters.

![Person holding a smartphone showing security-related interface](https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=800&q=80)

## Which Phones Support It

Device requirements differ by feature. Google listed these in footnotes to its October 14 announcement:

| Feature | Supported devices |
|---------|-------------------|
| Cloud Scam Detection (Private AI Compute) | Pixel 6 and newer, Galaxy S24 series and newer, Galaxy Z Flip6 / Z Fold6 and newer, other Android AICore devices |
| Gemini Nano link checks | Pixel 10 and newer, Galaxy S26 series, Galaxy Z Flip8 / Z Fold8, other select devices |
| Link checkpoints | Android 6 and later |

The feature is rolling out gradually. It first appeared in Google Messages beta builds around late October 2026. If you do not see the option yet, update Google Messages from the Play Store and check again in a few days.

## How to Enable Enhanced Protection

The setting is opt-in and not turned on by default. Follow these steps:

1. Open the **Google Messages** app.
2. Tap your **profile picture or initials** in the top-right corner.
3. Select **Messages settings**.
4. Tap **Protection & Safety** (or **Protection and safety**).
5. Open **Spam and scam protection**.
6. Choose **Enhanced protection**.

You will typically see three options:

- Enhanced protection
- Standard protection
- No protection (not recommended)

Select Enhanced protection and confirm if prompted. The change takes effect immediately for new conversations with unknown senders.

If the menu looks slightly different on your device, look under Messages settings for any section labeled Protection, Safety, or Spam. Some manufacturer skins rearrange the labels, but the Enhanced option appears once the update reaches your phone.

## Privacy and Data Handling

Google emphasizes that Enhanced Protection uses Private AI Compute for the cloud analysis. Message context is encrypted in transit and processed in a dedicated environment. Google states that the data remains private to you and is not accessible to Google or anyone else for other purposes.

On-device Gemini Nano link checks stay on the phone. Existing on-device Scam Detection continues to run locally as before. You can still report a conversation as spam; that optional report can send message content to Google for analysis, the same as before.

If you prefer to avoid any cloud processing of conversation context, stay on Standard protection. The trade-off is reduced ability to catch novel, multi-message scams.

## Additional Android Scam Protections

The same October announcement included other defenses that roll out on different schedules:

- **Expanded chat scam alerts.** On-device “Likely scam” warnings in the notification shade are expanding beyond Pixel to devices from Honor, Motorola, Oppo, OnePlus, Xiaomi, and others. These are separate from the Messages Enhanced Protection setting.
- **Screen-share privacy.** Chrome and Android WebView now blank login and payment fields during live screen sharing on Android 15 and later.
- **Call-forwarding protection.** Starting in early December on Pixel and select devices, Android blocks background call forwarding and warns you if someone tries to trick you into entering an MMI forwarding code.

These complement the Messages feature but are controlled in different places (system settings or the Phone app).

![Close-up of a smartphone screen with app icons](https://images.unsplash.com/photo-1715289302856-e488857f25f8?auto=format&fit=crop&w=800&q=80)

## Tips for Staying Safe

Even with Enhanced Protection enabled, treat urgent requests for money, verification codes, or account credentials as suspicious. Scammers still succeed when users override warnings.

- Never share one-time passcodes or passwords in a text conversation with an unknown number.
- Verify unexpected delivery, toll, bank, or prize messages by going directly to the official website or app instead of tapping the link.
- Keep Google Messages and your Android system updated. Many of these protections arrive via Play Services and app updates.
- Consider enabling Android Advanced Protection if your device supports it for an extra layer of controls. You can read more about related Android security options in our guide to [Android Advanced Protection setup](/blog/android-advanced-protection-setup/).

## Watch: Overview of the New Android Scam Protections

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/B4XSwBWTIOc"
    title="Google's Android Scam Protections: Opt-In Gemini in Messages, Wider Chat Alerts, Call-Forward Block"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Enhanced Protection in Google Messages is a practical upgrade for anyone who receives texts from unknown numbers. It combines on-device Gemini Nano checks with optional cloud analysis in Private AI Compute, and the steps to turn it on take less than a minute once the option appears.

Check Messages settings today. If the Enhanced option is missing, update the app and revisit the menu later. Combined with the broader Android scam defenses rolling out this season, it raises the baseline protection without requiring a new phone for most recent Pixel and Galaxy users.

## Sources

- Google Security Blog: [New Android protections to help keep you safe from mobile scams](https://blog.google/security/new-android-scam-protections/) (October 14, 2026)
- Google Support references linked in the official announcement for device eligibility and Private AI Compute details.
