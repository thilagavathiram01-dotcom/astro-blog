---
title: "How to Use Pixel Scam Detection and Gboard Warnings"
description: "Turn on Pixel Scam Detection for calls and chat notifications, use new Gboard ‘Likely scam’ chips in the U.S., and double-check suspicious texts with Circle to Search."
pubDate: 2026-09-18T15:15:00
tags: ["android", "pixel", "tutorials"]
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
---

The September 15, 2026 Pixel Drop did not invent Scam Detection. It widened it. Chat-notification warnings now cover more countries and languages. In the United States, Gboard can also show a **Likely scam** chip while you type a reply in supported chat apps.

This guide is the setup path: calls, notification warnings, keyboard chips, and a manual check with Circle to Search or Lens when the model is silent. Every availability note below comes from Google’s Pixel help pages and the official drop post. Features still miss some scams. Treat a warning as a pause, not a verdict.

![Person checking a smartphone notification lock screen](https://images.unsplash.com/photo-1556656793-85d60d04e206?auto=format&fit=crop&w=1200&h=700&q=80)

## What Pixel Scam Detection actually covers

Google ships three related layers. They are not the same switch.

- **Caller ID and spam labels** on incoming calls (separate from live Scam Detection).
- **Scam Detection during a live call** in the Phone app, on eligible Pixels. This is off by default. You opt in.
- **Scam Detection for chat message notifications**, on by default where the feature is offered. It reads *new message notifications* from supported apps. Google says it does not sit inside the chat thread and score every bubble after you open the app.
- **Gboard inline warnings (United States).** On Pixel 6 and newer in the U.S., a warning can appear above the keyboard when you start typing a reply to a suspicious message. Google’s Pixel Drop post and help page both describe this as a U.S. extra, not a worldwide keyboard feature.

Google is explicit: not every scam is caught, and scammers change tactics. Do not send money, gift cards, or one-time codes just because a warning failed to appear.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/99r8Ya0nzyY" title="How Android Combats Mobile Scams — Android" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Who gets which layer

### Live call detection (Phone app)

Google’s Phone help article lists:

- **Pixel 6 and later in the United States**
- **Pixel 9 and later, excluding Pixel 9a**, in Australia, Canada, India, Ireland, and the United Kingdom

A local SIM for that country is required. On Pixel 9 and later, Google says call detection is powered by **Gemini Nano on the device**. Earlier eligible Pixels use Google’s on-device machine-learning models. Either way, the conversation is processed on the phone, not uploaded as a default cloud transcript.

### Chat-notification detection

Google’s current Pixel help page lists these regions: Australia, Canada, France, Germany, India, Japan, Mexico, Singapore, Spain, the United Kingdom, and the United States.

Languages listed on the same page: Arabic, English, French, German, Indonesian, Japanese, Portuguese, and Spanish.

The September Pixel Drop expanded notification coverage and languages. If your country is on the list but the toggle is missing, update System Intelligence / the September package and wait out the staged rollout.

### Gboard chips

Google documents keyboard warnings for **users in the United States**, on Pixel 6 and newer, in selected apps. Do not expect the chip in other countries yet even if notification warnings already work there.

![Close-up of hands typing on a smartphone keyboard](https://images.unsplash.com/photo-1556656793-85d60d04e206?auto=format&fit=crop&w=1200&h=640&q=80)

## Step-by-step: turn on live call Scam Detection

Call detection is the one you must opt into.

1. Update the **Phone by Google** app from Play Store.
2. Open **Phone**.
3. Tap **More** (three dots) → **Settings** → **Scam Detection**.
4. Turn **Scam Detection** on.

What happens on a call:

- Google plays a short **audible beep** at the start of the call and again every few minutes so the other person can hear that detection is running.
- If the model sees patterns associated with scams (urgent payment, gift cards, government impersonation, and similar scripts), you get an on-screen warning and, on many Pixels, a haptic alert.
- You can turn the feature off for one call from the in-call menu, or turn it off globally in Settings.

If you take a lot of customer-support or banking calls, listen for the beep so you are not surprised. If you never want the other party to hear a tone, leave this layer off and rely on Call Screen and notification warnings instead.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/qLmaD2IHGhg" title="March Feature Drop: Gemini Live, Scam Detection and more — Made by Google Podcast" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Step-by-step: manage chat-notification warnings

Message-scam detection is **on by default** where it is offered.

1. Open **Settings**.
2. Tap **Security & privacy** → **More security & privacy** → **Scam Detection**.
3. Turn **Message scams** on or off.

When a new notification looks suspicious:

1. Expand the notification. Look for a red warning icon and a **Likely scam** button.
2. In the United States you may also see that button under the notification text, on the keyboard, or both.
3. Tap **Likely scam** for the explanation.
4. Choose **Done** if you agree it is a scam, or **Not a scam** if it is a false alarm.

Google’s important catch: if you mark a thread **Not a scam**, detection is turned off for that conversation for a while. Use that only when you know the sender.

You can optionally share the flagged message with Google to improve the model. Message content is not sent unless you choose to share it. Google says the detector runs in a secure, isolated environment and looks for patterns such as requests for personal information.

## How to use the Gboard “Likely scam” chip (U.S.)

1. Confirm you are on a **Pixel 6 or newer** in the United States.
2. Use **Gboard** as the keyboard (Settings → System → Languages & input → On-screen keyboard).
3. Open a supported chat app and start a reply to a new, suspicious message.
4. If the model fires, a **Likely scam** chip appears above the keys.
5. Read the chip before you send a code, account number, or payment screenshot.

Google says this processing is on-device and in real time. The chip is a second chance after you already opened the thread — the moment people usually type “what’s the PIN?” without thinking.

If the chip never appears:

- You may be outside the U.S. rollout.
- The app may not be in the selected-apps list yet.
- The September Pixel Drop / Gboard update may not have landed.
- You already marked that conversation as not a scam.

## Double-check a message with Circle to Search or Lens

Warnings can miss well-written fraud. Google documents two manual checks.

**Circle to Search**

1. Open the suspicious message in the app.
2. Touch and hold the Home button or the navigation handle.
3. Circle the text.
4. Read the overview. Google says the system uses AI plus web information and can suggest next steps.

**Google Lens**

1. Screenshot the message.
2. Open the Google app → Lens.
3. Pick the screenshot.
4. Tap **Search** and look for safety warnings.

Use these when a relative, a bank, a delivery firm, or a “government office” asks for money or a code and Scam Detection stayed quiet.

![Using a phone camera to inspect a document](https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?auto=format&fit=crop&w=1200&h=700&q=80)

## A practical habit that matches the tools

1. Leave **Message scams** on.
2. Turn **call Scam Detection** on only if you accept the beep and want live alerts.
3. Keep **Call Screen** available for unknown numbers.
4. Never confirm a payment request that arrived in the same chat. Call a number you already have, or open the official app.
5. If Gboard warns you mid-reply, stop typing. Ask the person a question only they would know, on a second channel.

A useful test: have a trusted contact send a clearly fake “send gift cards now” text. Confirm the notification label appears in your country. If it does not, you are still waiting on the drop or you are on an unsupported app.

## Limits worth reading twice

- Notification detection looks at **new notifications**, not the full history inside the app.
- Call detection eligibility is narrower than chat detection and excludes Pixel 9a in several countries.
- Gboard chips are **U.S.-only** in Google’s current docs.
- Marking **Not a scam** silences that conversation for a period.
- On-device processing is not the same as “never wrong.”
- The Pixel Tablet is often left out of phone-centric drops. Confirm on the device before you promise the feature to someone.

## Conclusion

Pixel Scam Detection is useful when you treat it as three small switches instead of one magic filter. Opt into live call alerts if you want them. Leave message-notification warnings on. In the U.S., watch for the Gboard chip before you send a reply that includes money or codes. When the model is quiet and the message still feels off, circle the text or run it through Lens.

Start in **Settings → Security & privacy → More security & privacy → Scam Detection**, then open the Phone app settings for the call toggle. Check Google’s help pages if a control is missing after the September 2026 Pixel Drop — staged rollouts are normal.

## Sources

- [September Pixel Drop (official Google blog)](https://blog.google/products-and-platforms/devices/pixel/september-2026-pixel-drop/)
- [Protect yourself with spam & scam detection on your Pixel phone](https://support.google.com/pixelphone/answer/16704479) — Pixel Phone Help
- [Use Scam Detection (Phone app)](https://support.google.com/phoneapp/answer/15654065) — Phone app Help
- [September Pixel Drop community notes](https://support.google.com/pixelphone/thread/466181739)
