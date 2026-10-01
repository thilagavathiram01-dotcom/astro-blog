---
title: "How to Find Your Phone with Gemini on Google Home"
description: "Use Hey Google find my phone on Gemini speakers, set Find Hub, and fix ringing after the September 30 Home update."
pubDate: 2026-10-01T11:00:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["google", "tutorials", "how-to", "gemini", "android", "productivity"]
noindex: false
---

Google’s September 30, 2026 Home release notes list **improved Find My Phone reliability** for Gemini for Home early access. The command itself is not new. You still say “Hey Google, find my phone” to a Nest or Google Home speaker, and the assistant rings a signed-in device.

What changed is how often that request is heard in a noisy room and how consistently Gemini picks the right phone. The same notes also cover background chatter filtering, faster everyday commands, better multilingual households, and more reliable custom commands inside Routines.

This guide walks through the official setup, the phrases Google documents, and the checks that stop the speaker from ringing the wrong tablet.

## What the September 30 update actually changes

Google’s [What’s new in Google Home](https://support.google.com/googlehome/answer/15962877) page is the source of record. Under Gemini for Home (Early Access) it says Google rolled out quality and reliability improvements for the feature when you ask Gemini to help locate your phone.

The same Voice Assistant block lists four related changes:

- Better filtering of background conversations so Gemini is less likely to ignore you.
- Lower latency on common smart home, media, alarm, and timer requests.
- Language recognition updates for homes where three languages are commonly spoken.
- Custom Routine commands interpreted the same way as a spoken request when the routine starts by voice or on a chosen speaker.

The Google Home app side of that drop (reported as Android **4.31.27.1** by 9to5Google) is separate. Speaker Find My Phone lives on the Gemini for Home service, not in a new tile in the app.

You still need Find Hub (the current name for Find My Device) turned on for Android. A speaker can only ring a phone that Google already treats as findable.



![Smartphone on a wooden table next to a compact wireless speaker](https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80)



## What you need before you ask Gemini

Google’s help article [Find your phone, tablet, or accessory with a Google Nest device](https://support.google.com/googlehome/answer/7535860) lists the hardware and account rules.

You need a voice assistant-enabled Nest or Google Home speaker, display, or Nest Wifi device that is already in the Home app.

For an **Android** phone or tablet:

- The device has power.
- It is on mobile data or Wi-Fi.
- It is signed in to a Google Account.
- **Find Hub** (Find My Device) is on.
- The device is visible on Google Play.

For **iPhone or iPad**, the same article says the feature is available in the **United States and Canada**. You need the Google Home app, notifications (including Critical Alerts on iOS), and Voice Match on the speaker.

Accessories only work if they can be found on the Find My Device Network. Google’s Android phrasing includes examples such as “ring my headphones” and “find my Pixel Buds.”

## Step 1. Confirm Find Hub on Android

1. Open **Settings** on the phone you expect the speaker to ring.
2. Search for **Find Hub** or **Find My Device**.
3. Turn on location and the option that allows the device to be found.
4. Sign in with the same Google Account you use in the Google Home app.

If Find Hub is off, Gemini on the speaker has nothing to ring. The speaker command does not replace the map view in the [Find Hub app](https://www.android.com/find) or on android.com/find.

For items you describe by voice instead of ringing hardware, use the phone-side flow in [Find Hub remembered items](/blog/find-hub-remembered-gemini/). That feature stores a storage spot. It does not play a sound.

## Step 2. Match the speaker to your voice

Voice Match keeps “find my phone” tied to *your* devices in a shared home.

1. Open the **Google Home** app.
2. Tap your profile picture.
3. Open **Home settings**.
4. Open **Gemini for Home voice assistant** (or **Google Assistant** on homes that have not switched).
5. Open **Voice Match** and enable it on the speakers you use in each room.

If Voice Match is off, Gemini may ring another household member’s phone or refuse the request. Retrain Voice Match after a firmware drop if the speaker starts asking which device you mean every time.

## Step 3. Say a specific command

Google documents these phrases:

- “Hey Google, find my phone.”
- “Hey Google, find my Pixel.”
- “Hey Google, find my Pixel Buds.”
- “Hey Google, ring my headphones.”
- On iOS: “find my iPhone” or “find my iPad.”

Be specific when more than one device is on the account. Google warns that a generic “find my phone” can ring a different device. Name the model when you own two Pixels.

On Android, the help page states the assistant should ring the device **even if it is set to Do not disturb**. On iPhone, the Home app sends a notification that rings for about **25 seconds**. Dismiss that notification to stop the sound.

The speaker does not draw a map. If the phone is outside the house or powered off, use Find Hub in a browser or on another Android device instead.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/MYeGHVQ9XaQ"
    title="How to Find Your Device on Android with Find Hub"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step 4. Fix a command that does nothing

Work through this list in order.

**The speaker did not hear you.** The September 30 notes improved background chatter filtering, but a TV at full volume can still win. Walk closer to the speaker and use the wake word once.

**The wrong device rang.** Name the model. Check Voice Match. In Find Hub, confirm which devices sit on the same Google Account as the Home structure.

**Android stays silent.** Confirm Find Hub is on, the phone has a network path, and the device is visible on Google Play. A work profile or a second user can hide the phone from the consumer Find Hub graph.

**iPhone stays silent.** Confirm you are in the US or Canada, Home app notifications and Critical Alerts are on, and you last signed into the Home app on the iPhone you want to ring.

**Gemini is not on the speaker.** Find My Phone works with the voice assistant that is active on that device. Homes still on classic Assistant keep the older command path. Gemini for Home early access is the branch named in the September 30 reliability note.

If you also use Find Hub memory from the September Android Drop, keep the two jobs separate. Remembered items store a note such as a passport location. Speaker Find My Phone only rings hardware. The [September 2026 Android Drop guide](/blog/android-september-2026-drop-guide/) covers the phone inventory side.



![Person holding a smartphone in a living room with home audio nearby](https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&w=800&q=80)



## How this fits with Find Hub on the map

Use the speaker when the phone is in the house and you only need a loud ring.

Use Find Hub when you need a last-seen map pin, directions, Play sound from another device, Mark as lost, or a factory reset. Google’s account help for lost Android devices still runs those actions from the Find Hub app or the web page after you sign in.

Do not treat the speaker command as a theft tool. It assumes the phone can receive a ring request. Offline finding, tags, and crowd-sourced network pings stay inside Find Hub.

## Tips

- Name the device in the command if you own more than one phone or tablet.
- Retrain Voice Match after you add a new speaker.
- Keep Find Hub on before you travel. The speaker cannot recover a setting you turned off last month.
- Put a Nest Mini or Home Speaker in the room where phones usually vanish (kitchen, bedroom charger pile).
- If a Routine should ring a phone, write the same phrase you would say out loud. Google’s September 30 note says custom Routine commands now follow that spoken interpretation.
- Update the Home app, then wait. Gemini for Home reliability fixes roll out on Google’s servers and may land days after the app version.

## Conclusion

“Find my phone” on a Google speaker is still a ring request, not a map. The September 30 Gemini for Home update aims to make that ring happen more often in a busy household and to pick the device you named.

Turn on Find Hub, finish Voice Match, and use a specific phrase. If the phone is not in the house, open Find Hub on another device instead of repeating the same voice command.

## Sources

- [What’s new in Google Home](https://support.google.com/googlehome/answer/15962877) — Google Home and Nest Help, September 30, 2026
- [Find your phone, tablet, or accessory with a Google Nest device](https://support.google.com/googlehome/answer/7535860) — Google Home and Nest Help
- [Find, secure, or erase a lost Android device](https://support.google.com/accounts/answer/6160491) — Google Account Help
- [Google Home update improves Find My Phone voice commands](https://9to5google.com/2026/09/30/google-home-update-find-my-phone-improvements/) — 9to5Google
- [How to Find Your Device on Android with Find Hub](https://www.youtube.com/watch?v=MYeGHVQ9XaQ) — Android on YouTube
