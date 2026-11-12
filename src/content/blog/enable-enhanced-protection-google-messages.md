---
title: "How to Enable Enhanced Protection in Google Messages"
description: "Step-by-step guide to turn on the opt-in Enhanced Protection mode in Google Messages for advanced Gemini AI scam detection on Android devices."
pubDate: 2026-11-12T20:00:00
heroImage: "https://images.unsplash.com/photo-1776797391265-01a0490d4c99?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "security", "how-to", "gemini"]
noindex: false
---

Scammers now use long conversations and brand-new websites that basic filters miss. Google added an opt-in Enhanced Protection mode to Google Messages that brings cloud Gemini models and on-device checks to catch these threats earlier.

The mode is not on by default. You choose it after updating the app. Google says the cloud analysis runs in Private AI Compute so your data stays encrypted and inaccessible to anyone else, including Google.

This guide shows what the mode adds, which phones get which pieces, and the exact steps to turn it on.



![Person holding a smartphone showing a text conversation](https://images.unsplash.com/photo-1776797391265-01a0490d4c99?auto=format&fit=crop&w=800&q=80)



## What Enhanced Protection adds

Standard Protection already blocks known spam and flags some harmful links. Enhanced Protection layers three stronger defenses on top.

First, Scam Detection can call Google’s cloud Gemini models when you chat with an unknown sender. The models look at the full conversation context to spot slow-burn scams that do not start with obvious red flags. This runs in Private AI Compute.

Second, on supported phones the on-device Gemini Nano model checks unfamiliar links against real-time web signals before you open them. This catches newly registered phishing sites that older URL lists have not seen yet.

Third, redesigned warnings appear before you tap links sent from numbers not saved in your contacts. These give clearer context and extra time to pause.

Google already reports that its existing Scam Detection tools flag more than 5 million suspected scam calls and texts each month. The new mode aims to catch more sophisticated cases on top of that baseline.

## Which phones support each part

Support is split by feature. Check your model against Google’s footnotes from the October 14, 2026 announcement.

Cloud Scam Detection with Private AI Compute works on Pixel 6 and newer, Samsung Galaxy S24 series and newer, Galaxy Z Flip6 and Z Fold6 and newer, and other Android AICore devices.

Gemini Nano link checks require Pixel 10 and newer, Galaxy S26 series, Galaxy Z Flip8 and Z Fold8, or other select devices.

Link checkpoints work on Android 6 and later once the mode is enabled.

The setting itself rolls out gradually. Update Google Messages from the Play Store and wait a few days if you do not see it yet. Some users first saw it in the beta channel.



![Close-up of a smartphone screen with text message bubbles](https://images.unsplash.com/photo-1760360497581-0606569510a6?auto=format&fit=crop&w=800&q=80)



## How to turn on Enhanced Protection

1. Open the Google Play Store and update Google Messages to the latest version.
2. Open Google Messages.
3. Tap your profile picture or initials in the top-right corner.
4. Tap Messages settings.
5. Tap Protection & safety.
6. Tap Spam and scam protection (the label may vary slightly by version).
7. Choose Enhanced protection.

You may see three options: Enhanced protection, Standard protection, and No protection (not recommended). Select the first one.

If the option is missing, confirm you are on a supported device and that Play services is current. The rollout began in the weeks after October 14 and continued into November.

## Privacy details worth knowing

Google states that the cloud analysis uses Private AI Compute. Your message context is encrypted and processed in a dedicated space that remains inaccessible to Google or anyone else.

You can still report a conversation as spam yourself. That report sends the message contents to Google for analysis, separate from the automatic Enhanced Protection checks.

On-device Gemini Nano link checks stay on the phone. No conversation text leaves the device for those checks.

If you prefer to avoid any cloud processing, stay on Standard Protection. That keeps the existing on-device detection without the Private AI Compute layer.

## Tips for safer messaging

Even with the mode on, treat unexpected requests for money or codes with caution. Contact the real company through a number or site you already know.

Save important contacts so unknown-sender rules apply correctly. The mode focuses its strongest checks on numbers not in your contacts.

Pair this with other Android security tools. Our guide to [Advanced Protection on Android](/blog/android-advanced-protection-setup/) covers the broader device-wide bundle that includes link warnings and more.

Keep Google Messages and Play services updated. New scam patterns can arrive faster than model updates.

## What to do if the setting does not appear

- Confirm your phone meets the AICore or device requirements listed above.
- Check Settings → Google → All services → System services for AICore status.
- Join the Google Messages beta program from the Play Store page for earlier access.
- Restart the phone after updating the app.

Google has not published a fixed date when every supported phone will see the option. Availability still depends on region and device in some cases.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/9sczC3JFCG8"
    title="AI Scam Detection on Android: The Privacy Trade-Off"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Enhanced Protection gives Google Messages stronger tools against conversational scams and new phishing links. It stays optional so you decide whether the cloud layer fits your privacy preferences.

Update the app, open Protection & safety, and select Enhanced protection. Supported phones then gain the Private AI Compute checks and Gemini Nano link analysis on top of the existing filters.

Stay alert for requests that ask you to act quickly. The mode helps, but it does not replace verifying the source yourself.

## Sources

- [New Android protections to help keep you safe from mobile scams](https://blog.google/security/new-android-scam-protections/) — Google Security Blog
- [Google Messages rolling out Enhanced Protection mode on Android](https://9to5google.com/2026/10/23/google-messages-enhanced-protection/) — 9to5Google
- [AI Scam Detection on Android: The Privacy Trade-Off](https://www.youtube.com/watch?v=9sczC3JFCG8) — YouTube
