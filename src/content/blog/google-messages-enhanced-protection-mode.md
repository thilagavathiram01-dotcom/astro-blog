---
title: "How to Enable Enhanced Protection in Google Messages"
description: "Turn on the new opt-in Enhanced protection mode in Google Messages to catch slow-burn scams with Gemini AI. Steps, device support, and privacy details."
pubDate: 2026-10-16T09:00:00
heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "security", "google", "how-to", "gemini"]
noindex: false
---

Scammers no longer send one obvious phishing text. They start polite conversations that only ask for money or codes after days of small talk. Google announced an opt-in Enhanced protection mode in Google Messages on 14 October 2026 to catch these slow-burn attacks.

The mode adds cloud Gemini analysis for unknown senders, smarter on-device link checks, and clearer warnings. It rolls out over the coming weeks. This guide covers what it does, which phones support each part, and how to turn it on when it appears on your device.

## What Enhanced protection adds

Google Messages already runs on-device Scam Detection. Enhanced protection layers extra tools on top. You must opt in.

The main addition uses Google’s most capable cloud Gemini models. When you chat with a number not saved in your contacts, the app can send conversation context to Private AI Compute. Google says your data stays encrypted in a secure dedicated space that remains inaccessible to anyone else, including Google. This helps spot intent that on-device models might miss in longer chats.

A second layer uses on-device Gemini Nano. It combines existing URL protections with real-time web signals to judge whether an unfamiliar link is trustworthy before you open it. Scammers often register brand-new domains that have not been listed yet.

The third piece redesigns warnings for links from unsaved numbers. These checkpoints give clearer context and more time to pause. Google previously limited this to select countries or devices with Android Advanced Protection enabled.

![Person holding a smartphone showing a messaging conversation](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Device requirements

Not every part runs on every Android phone. Google lists support in footnotes on its announcement.

Cloud analysis via Private AI Compute works on Pixel 6 and newer, Samsung Galaxy S24 series and newer, Galaxy Z Flip and Z Fold 6 and newer, and other Android devices with AICore. Users can still report a message as spam, which sends the content to Google for analysis.

Gemini Nano link checks need newer hardware: Pixel 10 and newer, Galaxy S26 series, Galaxy Z Flip 8 and Z Fold 8, or other select devices.

Built-in checkpoints for unfamiliar links work on Android 6 and later once the mode arrives.

The same announcement expands separate features. Notification-level scam alerts that started on Pixel now reach hundreds of millions more users on phones from HONOR, Infinix, iQOO, itel, JOVI, Motorola, OPPO, OnePlus, realme, TECNO, vivo, Xiaomi, and others. Screen-share privacy that hides login and payment fields in Chrome and WebView rolls out this month to Android 15+ devices. Call-forwarding protection that blocks quiet background enabling and warns about MMI codes arrives in early December on Pixel and other select devices.

## How to turn on Enhanced protection

The setting is not live everywhere yet. Google says it rolls out in the coming weeks. When it reaches your phone, look in the same area as existing spam tools.

1. Open the Google Messages app.
2. Tap your profile picture or the three-dot menu.
3. Select Messages settings.
4. Open Spam protection or the scam and security section.
5. Look for Enhanced protection and turn the toggle on.

Keep the base Spam protection enabled as well. Enhanced mode builds on it rather than replacing it. Update Google Messages from the Play Store if the option is missing after a week or two.

On supported devices the Nano link checks activate with the same toggle. You do not need a separate switch for them.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/KvYEeS94ZZI"
    title="How to Enable or Disable Spam Protection in Google Messages"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What the warnings look like and how to respond

When the system flags a conversation or link, treat the warning as a pause, not a puzzle.

If a message from an unknown sender is marked, review the full thread before replying. Do not share codes, account details, or money. Call the real person or company from a number you already saved, or open their official app or website yourself.

For links, the redesigned checkpoint appears before the page loads. Read the explanation. If you still want to open it, you can proceed after confirming. New domains are the ones Gemini Nano is designed to catch.

Notification scam alerts, once expanded, appear in the shade before you open the chat app. Tapping them shows tips such as not sharing personal information and not opening attachments.

These tools sit alongside other Android defenses. Pair them with [fake call detection in Phone by Google](/blog/android-fake-call-detection/) for voice impersonation and with [Android Advanced Protection](/blog/android-advanced-protection-setup/) for stricter sign-in rules.

![Android phone home screen with messaging and security apps](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## Privacy and limits

The cloud analysis is the part that leaves the device. Google stresses that Private AI Compute keeps the data encrypted and inaccessible to the company. The feature is opt-in for this reason. On-device Scam Detection continues to run without sending message content.

Gemini Nano link checks stay on the phone. They do not replace the existing URL blocklist; they add real-time signals for unknown sites.

Limits remain. The mode focuses on unknown senders. Saved contacts still rely on other tools. It does not stop every social-engineering attempt, especially if a scammer uses a real stolen number or account. Screen-share and call-forwarding protections have their own rollout schedules and device lists.

Google reports that existing Scam Detection in Phone by Google and Google Messages already flags more than 5 million suspected scam calls and texts each month. A YouGov survey it commissioned across the US, Canada, and Australia found 40 percent of smartphone users are “very” or “extremely” concerned about mobile fraud.

## Tips for safer messaging

- Keep Google Messages updated and leave Spam protection on.
- Save trusted numbers only after you verify them through another channel.
- Never send one-time codes or passwords to anyone who contacted you first.
- Check the notification shade for scam alerts even if you have not opened the app.
- Use the official bank or service app for sensitive actions instead of following text links.
- Review the new screen-share privacy once it arrives so login fields stay hidden during shared sessions.

If a warning appears on a message you know is legitimate, you can report it as not spam. False positives are possible while models adapt to new tactics.

## Conclusion

Enhanced protection mode gives Google Messages stronger tools against slow-burn text scams without making the cloud step mandatory. Opt in when the setting appears, confirm your device supports the Nano link checks if you want the newest domain detection, and treat every warning as a reason to pause and verify through a different channel.

The same announcement brings broader notification alerts, screen-share privacy, and call-forwarding blocks. Together they raise the bar for the most common mobile fraud paths. Update the app, watch for the new toggle, and keep the default protections active.

## Sources

- [New Android protections to help keep you safe from mobile scams](https://blog.google/security/new-android-scam-protections/) — Google, 14 October 2026
- [Android is using AI to suss out scammers in Google Messages](https://www.theverge.com/tech/1010928/android-scam-protection-enhanced-protection-google-messages) — The Verge
- [Private AI Compute](https://blog.google/innovation-and-ai/products/google-private-ai-compute/) — Google
