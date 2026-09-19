---
title: "How to Use Pixel Scam Detection on Chat Notifications After the September 2026 Drop"
description: "Turn on Pixel Scam Detection for chat-app notifications and Gboard warnings: Pixel 6 and newer, 10 countries, languages, call vs message settings, and what the Likely scam chip actually does."
pubDate: 2026-09-19T22:30:00
tags: ["android", "pixel", "tutorials"]
heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80"
---

The [September 2026 Pixel Drop](https://blog.google/products-and-platforms/devices/pixel/september-2026-pixel-drop/) is not a new camera mode. It is a safety expansion: Pixel can now flag **likely scam chat notifications** in more countries and languages, and — in the United States — warn you **inside Gboard** before you type a reply.

Google’s own Pixel Help page is explicit about what this is and is not. The notification feature inspects **new message notifications** from supported apps. It does **not** sit inside WhatsApp or Messages and read every thread in real time. Call-time Scam Detection is a separate switch with a different device list.

This guide follows Pixel Phone Help, Phone app Help, and the official September Pixel Drop post.

![Person reviewing a smartphone notification lock screen](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=80)

## What shipped in the September drop

Google’s Pixel blog summarizes the safety piece in one sentence: inline **Gboard** warnings in the U.S., and **expanded Scam Detection for chat-app notifications** in more regions.

Reporting that matches that post (Android Authority, PhoneArena, FoneArena) lists the notification expansion as:

- **Devices:** Pixel 6 and newer phones (not Pixel Tablet)
- **Countries for notification warnings:** United States, United Kingdom, Australia, Canada, Singapore, India, Germany, Mexico, Japan, France
- **Languages commonly cited for those alerts:** English plus Arabic, French, German, Japanese, Portuguese, and Spanish

Treat the country list as the confirmed September footprint. Earlier Google security posts talked about Messages protection in “more than 20 countries” without naming every market. Do not merge those two lists into one map.

**Gboard inline “Likely scam” chips** are documented as a U.S. rollout on Pixel 6 and newer. Google says processing for that keyboard warning happens on device. Other keyboards can pick it up only if they use **Keyboard Suggestions**.

Call Scam Detection is still a **Pixel 9 and newer** (with documented A-series exceptions on some help pages) opt-in that listens for scam speech patterns on a call. Do not assume the September chat expansion turned call detection on for Pixel 6–8.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/c-_XZL19m08" title="Safer with Google Presents: 2-Step Verification" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## How notification Scam Detection works

Pixel Phone Help ([Protect yourself with spam & scam detection](https://support.google.com/pixelphone/answer/16704479)) describes the chat path this way:

- The phone looks at **incoming notifications** from supported messaging apps.
- A suspicious notification can show a red warning icon.
- When you expand it, you may see a **Likely scam** control.
- Tap **Likely scam** for an explanation, **More details**, **Done** (treat as scam), or **Not a scam**.

If you mark a thread **Not a scam**, Help says Scam Detection is turned off for that conversation for a while. That is useful when a bank’s real one-time code looks like a phishing template. It is also how a rushed tap can silence a later real warning on the same sender.

Google states the feature **may not catch every scam**. It does not replace “do not send money or codes to a stranger.”

Australian-localized Help notes that in the U.S. the warning button may appear under the notification, in the keyboard, or both. That matches the September Gboard split.

![Close-up of hands typing on a smartphone keyboard](https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=1400&q=80)

## Turn message warnings on or off

Chat-notification Scam Detection is **on by default** in current Help text. To confirm or disable it:

1. Open **Settings**.
2. Tap **Security & privacy**.
3. Tap **More security & privacy**.
4. Tap **Scam Detection**.
5. Toggle **Message scams**.

Update the phone first (**Settings → System → Software update**) and update **Gboard**, **Phone by Google**, and **Messages** from Play Store. Feature Drops often land as a system image plus app flags over several days.

If you travel, Help for **call** Scam Detection says the feature expects a SIM for the country where it is offered. Do not assume a U.S.-only Gboard chip follows you on roaming.

## Turn on call Scam Detection (separate feature)

Phone app Help ([Use Scam Detection](https://g.co/pixel/scam-detection-help)) covers live calls, not the notification chip.

Eligibility in that article (verify on your own device; Google updates region tables):

- Pixel 6 and later in the **United States**
- Pixel 9 and later, excluding Pixel 9a, in **Australia, Canada, India, Ireland, and the UK** (other Pixel Drop posts have also named France, Italy, Spain, Mexico, Germany, and Japan for call detection in earlier 2026 drops)

Setup:

1. Update the **Phone** app.
2. Open **Phone**.
3. Tap **More → Settings → Scam Detection**.
4. Turn **Scam Detection** on.

On Pixel 9 and later, Google says the call feature is powered by **Gemini Nano on device**. Earlier Pixels use other on-device models. Help states conversation audio is not stored or sent to Google servers for this feature.

When it is on, you get an audible beep at the start of a watched call and periodically after that so the other person knows something is running. A high-likelihood hit can alert with notification, sound, and vibration. You can tap **Not a scam** or **End call**.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/2bIwZntp38w" title="September 2026 Android Drop – ALL New Features in Action" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## What to do when you see Likely scam

Use the chip as a pause, not a verdict.

- Do not tap a payment or “verify account” link from that notification.
- Open the official app or website you already use for that bank, carrier, or delivery company. Do not use the link in the message.
- If the text claims to be a family emergency, call the person on a number you already have saved — not the number in the message.
- If it is a false positive, mark **Not a scam** so the thread is usable. Optionally share the message with Google when Help offers that checkbox; it is not required.

Gboard’s U.S. chip is meant to catch you **as you start typing a reply**. If you only glance at lock-screen notifications, the shade warning is the one that matters.

![Padlock and smartphone suggesting account security](https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1400&q=80)

## Limits you should plan for

- **Not every chat app** is guaranteed. Help says “many popular apps” and “supported apps.” If an app suppresses rich notifications, there is nothing for the model to score.
- **In-app chat is not continuously scanned** for the notification feature. A scam that never produces a notification can slip through.
- **Languages and countries** are staged. If you are outside the September list, you may still have Messages-only or call-only protection from earlier drops.
- **Pixel Tablet** is excluded from the notification expansion in current reporting.
- **Accuracy is not 100%.** Google repeats that scammers change tactics.

## A short setup checklist

1. Install the September Pixel Drop / current system update on a Pixel 6 or newer phone.
2. Update Gboard, Phone, and Messages.
3. Confirm **Settings → Security & privacy → More security & privacy → Scam Detection → Message scams** is on.
4. In the U.S., send yourself a test from a second device only to learn the UI — do not try to “trigger” a scam classifier with a joke phishing text to a friend.
5. If you want call protection and your model plus country qualify, enable Scam Detection in the Phone app and expect the periodic beep.

## Conclusion

The September 2026 Pixel Drop makes chat-notification Scam Detection useful outside the original U.S. English footprint and adds a U.S.-only Gboard warning so the keyboard can interrupt a bad reply. Keep **Message scams** on, treat **Likely scam** as a stop sign, and turn on call detection separately if your Pixel 9-class device and country are supported.

It will miss some fraud. It will also flag some legitimate one-time codes. The value is the extra second before you tap.

## Sources

- [September Pixel Drop: New Pixel VIP updates, Pixel Watch features, and more](https://blog.google/products-and-platforms/devices/pixel/september-2026-pixel-drop/) — Google
- [Protect yourself with spam & scam detection on your Pixel phone](https://support.google.com/pixelphone/answer/16704479) — Pixel Phone Help
- [Use Scam Detection](https://g.co/pixel/scam-detection-help) — Phone app Help
- [September Pixel Drop community thread](https://support.google.com/pixelphone/thread/466181739) — Pixel Help
- [How Android helps keep you safe from impersonation scams with fake call detection](https://blog.google/security/android-fake-call-detection/) — Google
