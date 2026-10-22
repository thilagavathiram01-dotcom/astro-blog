---
title: "Enable Enhanced Scam Protection in Google Messages"
description: "Turn on Enhanced Protection mode in Google Messages for stronger scam detection with Gemini on Android. Step-by-step setup guide."
pubDate: 2026-10-22T14:00:00
heroImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "security", "gemini", "tutorials", "how-to", "google"]
noindex: false
---

Google rolled out new Android scam defenses on October 14, 2026. The centerpiece is an opt-in Enhanced Protection mode in Google Messages that uses Gemini models to catch more sophisticated text scams.

Scammers now use slow-burn conversations, brand-new phishing sites, and social engineering. Standard filters miss many of them. Enhanced Protection adds cloud analysis for unknown senders and smarter link checks on supported phones.

This guide shows how to enable the mode, what it actually does, the other protections rolling out alongside it, and practical steps you can take today. All details come from Google’s official announcement on the Keyword blog.

## Why Scams Are Harder to Spot Now

Mobile scams have moved beyond simple robocalls and obvious phishing texts. Attackers use spoofed numbers that look like your bank, fake delivery alerts, and long conversations that slowly build trust before asking for money or codes.

A Google survey with YouGov across the U.S., Canada, and Australia found that 40% of smartphone users are “very” or “extremely” concerned about mobile fraud. AI voice cloning and caller ID spoofing make traditional red flags less reliable. Users cannot catch every threat on their own, which is why Android’s built-in tools now intercept many of them automatically.

Google reports that AI-powered Scam Detection in Phone by Google and Google Messages already flags more than 5 million suspected scam calls and texts every month. The new features build on that foundation.

## What Enhanced Protection Mode Does

Enhanced Protection is a single opt-in switch in Google Messages. When you turn it on, three defenses activate:

- Scam Detection with Private AI Compute. For chats with numbers not in your contacts, Google Messages sends conversation context to cloud Gemini models. The models evaluate intent faster than on-device checks alone, especially in slow-burn conversations where the real goal appears only after several messages. Analysis runs in Private AI Compute, where data stays encrypted and processed in a secure dedicated space inaccessible to Google or anyone else.
- Smarter link safety checks with Gemini Nano. On supported devices, the on-device model checks unfamiliar links using real-time web signals before you open them. Google Messages already flags known malicious and phishing sites. The new layer targets brand-new domains that have not yet been cataloged.
- Built-in checkpoints for unfamiliar links. Redesigned warnings appear before you tap links from unsaved numbers. These give clearer context and extra time to pause. The feature was previously limited to select countries or devices with Android Advanced Protection enabled.

Google says the mode rolls out in the coming weeks after the October 14 announcement. If you already have other Gemini features enabled, check Messages settings once the update arrives.

Availability notes from the announcement: cloud analysis works on Pixel 6 and newer, Galaxy S24 series and newer, Galaxy Z Flip and Z Fold6 and newer, and other Android AICore devices. Gemini Nano link checks require newer hardware such as Pixel 10 and later, Galaxy S26 series, Galaxy Z Flip8 and Z Fold8, and other select devices.

![Smartphone on a desk showing a security interface](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## How to Enable Enhanced Protection

The setting is opt-in, so it will not turn itself on. Once the update reaches your device, follow these steps:

1. Open the Google Messages app.
2. Tap your profile picture or the menu icon, then go to Settings.
3. Look for Spam protection, Scam detection, or a similar section.
4. Find Enhanced Protection (or a similarly named toggle) and turn it on.
5. Confirm any prompts about data use or connected features. You can turn the setting off at any time in the same menu.

If the option does not appear yet, update Google Messages from the Play Store and check again in a few days. Google noted the rollout happens over the coming weeks.

While you wait, keep standard Scam Detection enabled. It continues to work independently of the new mode.

## Other New Android Scam Defenses

Google announced several related protections in the same post:

- Expanded chat notification scam alerts. Previously limited mostly to Pixel, these on-device warnings will reach hundreds of millions more users later this year through partners including HONOR, Infinix, iQOO, itel, JOVI, Motorola, OPPO, OnePlus, realme, TECNO, vivo, and Xiaomi. A “likely scam” warning can appear in the notification shade before you open a popular chat app. Tapping it shows tips such as not sharing personal information or opening links.
- Automatic screen-share privacy. Android already hides sensitive fields in native apps during screen sharing. The same protection now extends to Chrome and Android WebView on Android 15 and later devices, blanking login and payment screens automatically. This rolls out this month and helps against scams that ask you to share your screen so the attacker can see codes or passwords.
- Proactive call-forwarding protection. Apps can no longer quietly enable call forwarding in the background. If someone tries to trick you into entering an MMI forwarding code on the dial pad, Android warns you before the change takes effect. This starts in early December on Pixel and other select devices and aims to stop attackers from redirecting one-time passcodes.
- Verified financial calls. Android works with banks such as Banco do Brasil, Itaú Unibanco, and Revolut to verify in real time whether an incoming call claiming to be from the bank is genuine. If verification fails, the call ends automatically and you receive an alert. Google reported blocking more than 3 million spoofed calls from two Brazilian banks alone since the feature launched in June. The program is expanding to more partners.

An independent evaluation commissioned by Google and performed by Leviathan Security Group found Android devices provide the highest level of built-in scam and fraud protection among the tested phones (including Pixel 11 Pro, iPhone 18 Pro, Galaxy S26, and Motorola Razr 2026) when features are left at their default settings.

![Close-up of a smartphone screen with app icons](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## Practical Tips While the Rollout Continues

Enhanced Protection strengthens detection, but it does not replace basic habits. Scammers adapt, and no system catches every attempt.

- Pause before tapping any link from an unknown number, even if no warning appears. Check the domain carefully and avoid shortened URLs.
- Never share one-time passcodes, banking details, or passwords over text or during an unexpected call. Legitimate organizations do not ask for these this way.
- Keep Google Messages and Play Services updated so new protections arrive promptly. Check the Play Store regularly for Messages updates.
- Review your contacts list. Scam Detection focuses on unknown senders; saved numbers receive lighter checks. Remove or rename entries that look suspicious.
- If you use screen sharing for remote support, know that Chrome and WebView now hide sensitive fields on Android 15+. Still avoid sharing your screen with unknown callers.
- Enable standard Scam Detection in both Phone by Google and Messages if it is not already on. The monthly flag volume shows these tools are actively working.

For more on Android’s broader security tools, including Advanced Protection Mode, see our earlier guide on [Android Advanced Protection setup](/blog/android-advanced-protection-setup/).

## Device Compatibility Summary

Not every feature arrives on every phone at the same time:

- Enhanced Protection cloud analysis: Pixel 6+, Galaxy S24+, Galaxy Z Flip/Fold6+, other AICore devices. Rolling out in the coming weeks (opt-in).
- Gemini Nano link checks: Pixel 10+, Galaxy S26 series, Galaxy Z Flip8/Z Fold8, select others. Part of the same Enhanced Protection toggle.
- Link checkpoints: Android 6+ devices once Enhanced Protection is available.
- Chat notification alerts: Expanding beyond Pixel to listed partner brands later this year.
- Screen-share privacy in Chrome/WebView: Android 15+ this month.
- Call-forwarding protection: Early December on Pixel and select devices.

Check your device model and Android version in Settings > About phone to see which pieces apply to you.

## Watch the Official Overview

Google and Android channels have shared short explainers on scam detection features. This clip covers related real-time protections that work alongside the new Messages mode.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/4Vp8aiuyvCQ"
    title="Stay ahead of scammers"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- Google Keyword blog: New Android protections to help keep you safe from mobile scams (October 14, 2026). https://blog.google/security/new-android-scam-protections/
- Leviathan Security Group evaluation referenced in the Google announcement.
- Google support documentation on Scam Detection availability and Private AI Compute.

Enable the mode when it appears, keep your apps updated, and treat unexpected requests for money or codes with caution. The combination of on-device checks, cloud Gemini analysis in Private AI Compute, expanded notification warnings, and call protections gives Android stronger built-in defenses against evolving mobile scams. Review the settings on your phone in the coming weeks so the new tools are ready when you need them.
