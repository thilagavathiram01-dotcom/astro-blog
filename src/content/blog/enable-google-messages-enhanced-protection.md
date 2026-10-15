---
title: "Enable Enhanced Protection in Google Messages to Stop Scam Texts"
description: "Turn on the new Enhanced protection mode in Google Messages to use Gemini AI and Private AI Compute against sophisticated text scams on Android."
pubDate: 2026-10-15T10:00:00
heroImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "security", "gemini", "tutorials", "google"]
noindex: false
---

Scammers no longer blast obvious phishing links. They start with a casual hello, build a short conversation, then ask for money or a code. Google Messages already flags many of these. The new Enhanced protection mode adds a stronger layer that uses cloud Gemini models to read intent earlier.

Google announced the setting on 14 October 2026. It rolls out over the coming weeks as an opt-in toggle. When active, it analyzes conversations with unknown senders through Private AI Compute, checks unfamiliar links with on-device Gemini Nano, and shows clearer warnings before you open links from numbers not in your contacts.

## What Enhanced protection actually does

The mode builds on existing Scam Detection in Google Messages. That baseline already runs on-device and flags more than 5 million suspected scam calls and texts each month across Phone by Google and Messages.

Enhanced protection adds three pieces:

- **Cloud Gemini analysis via Private AI Compute.** For conversations with unrecognized senders, the system can send context to Google’s more capable cloud models. These evaluate complex, multi-message patterns that on-device models may miss. Data is encrypted and processed in a sealed environment that Google states is inaccessible to anyone else, including Google itself. This matches the design of Private AI Compute, which Google introduced for other Pixel features.
- **Smarter link checks with Gemini Nano.** Existing URL protections catch known bad sites. With the mode on, on-device Gemini Nano also uses real-time web signals to judge brand-new domains before you tap. This targets the fresh sites scammers register daily.
- **Redesigned link checkpoints.** Warnings give more context and a pause before you open a link from an unknown number. This checkpoint previously appeared only in select countries or on devices with Android Advanced Protection enabled.

The cloud analysis augments on-device detection rather than replacing it. You can still report a message as spam, which sends content to Google for review.

![Smartphone showing messaging app on a wooden desk](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80)

## Which phones support each part

Support is split by feature. Google’s announcement lists these requirements in footnotes:

- Cloud Scam Detection through Private AI Compute: Pixel 6 and newer, Samsung Galaxy S24 series and newer, Galaxy Z Flip and Z Fold6 and newer, and other Android AICore devices.
- Gemini Nano link checks: Pixel 10 and newer, Galaxy S26 series, Galaxy Z Flip8 and Z Fold8, and other select devices.
- Link checkpoint warnings: Android 6 and later.

Some features may not appear in every country. The setting itself is opt-in and stays off until you turn it on. Check Google Messages settings once the update reaches your device.

## How to enable Enhanced protection

Google has not published an exact menu path yet because the feature is still rolling out. In practice, look in the same area as other Messages safety controls:

1. Open the Google Messages app.
2. Tap your profile icon in the top-right corner.
3. Select Messages settings.
4. Open Protection and safety (or the equivalent spam/scam section on your build).
5. Look for Enhanced protection or a similar opt-in control and turn it on.

Update Google Messages from the Play Store first. The toggle appears only after the server-side rollout reaches your account. On some devices you may also see related controls under Android Advanced Protection in system Settings > Security & privacy.

If the option is missing, wait a few days and check again. Pixel devices often receive these updates first.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/ZHTOLbHbnQY"
    title="How Android Protects You From AI Voice Cloning & Fake Calls"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What you see when it flags a conversation

Expect a warning inside the chat or in the notification shade for high-confidence cases. The system aims to catch slow-burn patterns: a wrong-number opener that shifts into a request for personal details or money. Link warnings appear before you leave the app.

You stay in control. The feature does not auto-delete or auto-block every suspicious thread. It surfaces a signal so you can decide. Treat any request for money, gift cards, or a verification code from an unknown number as a hang-up moment, even if the conversation felt normal at first.

## Privacy notes and limits

Private AI Compute is designed so the encrypted analysis stays private to you. Google has stated that data processed this way is not accessible to the company. Optional spam reports still send message content for review, as before.

Limits remain:

- The cloud layer requires an AICore-capable device listed above.
- Gemini Nano link checks need newer flagships.
- It does not cover every third-party chat app. Separate notification-based Scam Detection is expanding to more OEMs later this year.
- It does not replace basic habits. Never reply “STOP” to unsolicited texts, and do not click links from unknown senders.

Pair the setting with existing tools. [Fake call detection in Phone by Google](/blog/android-fake-call-detection/) already verifies whether a saved contact’s device is actually placing a call. Android Advanced Protection adds tighter device and account controls. Together they cover more of the scam surface.

![Close-up of a phone lock screen with security icons](https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80)

## Additional Android scam defenses rolling out

The same 14 October announcement includes two related protections:

- Automatic screen-share privacy now extends to Chrome and Android WebView on Android 15 and later, blanking login and payment fields during live sharing sessions. This is rolling out in October.
- Call-forwarding protection blocks apps from enabling forwarding in the background and warns before an MMI code takes effect. It arrives on Pixel and select devices in early December.

Notification Scam Detection, previously Pixel-focused, is expanding to phones from HONOR, Infinix, Motorola, OPPO, OnePlus, realme, TECNO, vivo, Xiaomi, and others later this year.

## Quick checklist

1. Update Google Messages and Phone by Google.
2. Confirm your device meets the AICore or Gemini Nano requirements if you want the full set.
3. Enable Enhanced protection once it appears under Messages settings > Protection and safety.
4. Leave on-device Scam Detection active.
5. Teach family the callback rule: hang up and call the person back from a saved contact card if money or a code is requested.
6. Report confirmed scams inside the app so the system improves.

## Conclusion

Enhanced protection mode gives Google Messages a stronger Gemini-powered signal against conversational scams while keeping the analysis private through Private AI Compute. The setting is opt-in and rolls out over the coming weeks. Check Messages settings after updating, enable it on a supported device, and combine it with the fake-call handshake already available in Phone by Google. The tools flag more threats; your decision to hang up and verify still stops the loss.

## Sources

- [New Android protections to help keep you safe from mobile scams](https://blog.google/security/new-android-scam-protections/) — Google, 14 October 2026
- [Private AI Compute advances AI privacy](https://blog.google/innovation-and-ai/products/google-private-ai-compute/) — Google, 11 November 2025
- [Android is using AI to suss out scammers in Google Messages](https://www.theverge.com/tech/1010928/android-scam-protection-enhanced-protection-google-messages) — The Verge
- [Google Messages adding ‘enhanced protection mode’ on Android](https://9to5google.com/2026/10/14/google-messages-enhanced-protection-mode/) — 9to5Google
