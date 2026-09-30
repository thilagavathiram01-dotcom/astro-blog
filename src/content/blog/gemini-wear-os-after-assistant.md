---
title: "How to Use Gemini on Wear OS After Assistant Ends"
description: "Set Gemini as the Wear OS assistant after the 2026 mobile cutover: install the watch app, Hey Google, tiles, and Pixel Raise to Talk."
pubDate: 2026-09-30T14:00:00
heroImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "gemini", "google", "how-to", "tutorials"]
noindex: false
---

Google Assistant is no longer the voice assistant on most Android phones. When that switch lands on a paired handset, Wear OS follows. Google’s Gemini Apps team said that once Gemini is the assistant on the phone, it is also the assistant on paired Wear OS watches, compatible earbuds, and Android Auto.

Nest speakers and Home displays still use Assistant for now. Your watch does not. This guide covers the official Wear OS setup after that cutover: install the watch app, keep Gemini as the phone default, and use the button, hotword, tile, and complication Google documents.

## What changed in September 2026

Google told users that from 4 September 2026 most people could no longer use or switch back to Google Assistant on a phone or tablet. Reports in late September showed the “Switch to Google Assistant” control missing from the Gemini app after Google app 17.60 stable and 17.62 beta.

The same notice covers peripherals tied to that phone. Wear OS is on that list. You cannot keep Assistant on the watch while Gemini owns the phone. There is no supported rollback on devices that already took the update.

If your speaker still answers as Assistant, that is expected. Google has not applied the same deadline to Nest and Home hardware.

## What you need

Wear OS Help lists these requirements before Gemini will chat on the watch:

- Gemini is the digital assist app on the connected Android phone.
- The watch runs Wear OS 4 or later.
- You use an eligible Gemini language and region.
- You sign in with the same Google account on phone and watch.

Google Assistant on Wear was documented for Wear OS 3. Gemini is not. Wear OS 2.x has no Assistant and no Gemini. Check the manufacturer if your model is older than Wear OS 4.

Update the watch Play Store apps before you hunt for settings. Open Play Store on the watch, then manage updates. On Pixel Watch, Google Health Help also asks you to keep Pixel Watch apps current.



![Person checking a smartwatch on their wrist outdoors](https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&w=800&q=80)



## Set Gemini on the phone first

The watch copies the phone’s default assistant. If the phone is still waiting on the September migration, finish that first.

1. Update **Gemini** and the **Google** app from Play Store on the phone.
2. Open Gemini and complete any on-screen assistant setup.
3. Confirm Gemini answers a long-press of the power button or a “Hey Google” prompt.
4. Do not look for “Switch to Google Assistant.” On updated accounts that control is gone.

If you want less Gemini on the lock screen or fewer hotword wakes, use Gemini Apps Help to turn off lock-screen Gemini or “Hey Google.” Those phone toggles also reduce accidental wakes that start a session the watch then inherits.

For Chrome-side questions on the same phone, see [How to Use Gemini in Chrome on Android](/blog/gemini-in-chrome-android/).

## Install Gemini on the watch

Wear OS Help and the older “Set up Gemini or Google Assistant on your watch” article share the same install path.

1. Wake the watch.
2. Open the app list, then **Play Store**.
3. Search **Gemini**.
4. Install **Google Gemini on Wear OS** if it is not already present.
5. Open **Gemini** from the app list and finish any paired-phone prompts.

Google says the watch rollout follows Gemini mobile availability. If the listing is missing, you are outside the current region, language, or Wear OS version. Wait for Play Store. Do not sideload an old Assistant APK.

On many watches the former Assistant package simply renamed itself. After the update the icon and screenshots show Gemini. A leftover “Assistant” tile usually opens Gemini once the package is current.

## Talk to Gemini from the wrist

Wear OS Help documents four launch methods.

**Button.** Press and hold the button your watch maker assigned to the assistant. On Pixel Watch that is typically the button above the crown. Other brands map it in their own button settings. If the hold does nothing, open the maker’s button or gesture menu and assign Gemini.

**Hotword.** Say “Hey Google” while the watch screen is awake. Google states the watch must be awake to listen. To toggle detection: **Settings → Google → Digital assistant → “Hey Google.”**

**Complication.** Add Gemini on a watch face that supports complications, then tap the spark icon.

**Tile.** In the watch’s tile editor, add the Gemini tile and swipe to it.

Google’s July 2025 Wear OS post also lists those same starts: “Hey Google,” a side-button hold, or the Gemini app icon.



![Close-up of a modern smartwatch face on a desk](https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80)



## Pixel extras: Raise to Talk and Offline Gemini

Pixel Watch has two extras that other Wear OS models may lack.

**Raise to Talk** (Pixel Watch 4 and 5, per Google Health Help). Raise the watch and speak without “Hey Google.” A mini glow at the bottom of the face shows the watch is listening. Wear OS Help notes that Raise to Talk can fire on ordinary arm motion. Turn it off in the Pixel Watch Gemini or gesture settings if it wakes during workouts.

**Offline Gemini** (Pixel Watch 5 only). Google Health Help says you need Google Gemini on Wear OS version **1.36 or later**. Offline mode covers basic voice actions such as a timer or starting a run when the watch has no network. Complex Gmail or Maps requests still need a connection.

Pixel examples for health and fitness:

- “Start my run.”
- “What’s my heart rate?”
- “What’s my step count?”

Those queries use the Google Health app on the watch. Grant Health permission if Gemini cannot read metrics.

## Useful prompts that still work on a small screen

Google’s Wear OS blog listed tasks that avoid typing on a 1.2-inch display:

- “What is the address for my dentist appointment today? Navigate there.”
- “Remind me to go grocery shopping after work.”
- Send a short message or reply from notifications.
- Play music and skip tracks.

Gemini can use Gmail and Calendar if you enable those connections in the Gemini app on the **phone**, not only on the watch. Wear OS Help repeats that app actions follow the phone’s Gemini app settings.

Keep prompts short. Ask one action. Confirm before Gemini sends a message or starts navigation. The watch screen is a poor place to review a long draft.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/3TSdIYMX8pw"
    title="The Android Show: I/O Edition | Gemini Intelligence"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Location, privacy, and Nest devices

The Wear Gemini app uses the location permission you set for the **Google** app on the watch. That app hosts the digital assistant stack. To inspect it:

1. Open **Settings** on the watch.
2. Tap **Location**, then **Google** / **Digital Assistant**.
3. Check **Use precise location**.
4. Set access to Allow all the time, only while using the app, ask every time, or don’t allow.

Gemini may also use saved Home and Work addresses from your Google account. Update those in Google Maps if the watch keeps routing to an old office.

Nest speakers are a separate product. Google’s September 2026 Assistant cutover did not remove Assistant from Home speakers and displays. Do not expect a watch command to change the kitchen speaker’s assistant engine.

## Troubleshooting

**Watch still says Assistant.** Update Google Gemini on Wear OS from the watch Play Store. Restart the watch. Confirm the phone already lost the switch-back control.

**Hey Google does nothing.** Wake the screen first. Enable Hey Google Detection under Settings → Google → Digital assistant. Charge the watch; low-power modes often pause hotword.

**Gemini opens on the phone instead.** The watch app is missing or signed into a different account. Install the Wear package and match the phone account.

**Gmail or Calendar actions fail.** Enable those apps in Gemini settings on the phone and accept the permission prompts. The watch cannot grant Workspace access by itself.

**Wear OS 3 watch.** Official docs keep Gemini on Wear OS 4+. Assistant on Wear OS 3 is outside the current Gemini watch program. A phone-side Gemini session will not add a full watch Gemini app on that generation.

## Conclusion

Treat the watch as an extension of the phone assistant, not a second product. After the September 2026 mobile cutover, that assistant is Gemini. Install Google Gemini on Wear OS, keep the same Google account, and use a button hold or an awake-screen “Hey Google” for short tasks.

Add a tile or complication if you want a tap target that does not fight Raise to Talk. Leave Nest hardware alone until Google publishes a speaker deadline. If the watch Play Store has no Gemini listing, you are waiting on Wear OS 4, region, or language—not a hidden toggle.

## Sources

- [Use Gemini on your smartwatch](https://support.google.com/wearos/answer/16401122) — Wear OS Help
- [Set up Gemini or Google Assistant on your watch](https://support.google.com/androidwear/answer/7314149) — Wear OS Help
- [Here’s an update on our work to upgrade mobile Assistant devices to Gemini](https://support.google.com/gemini/thread/396052272) — Gemini Apps Community
- [Gemini is coming to your Wear OS smartwatch](https://blog.google/products-and-platforms/platforms/wear-os/gemini-wear-os-watches/) — Google Blog, 9 July 2025
- [Chat with Gemini on your Google Pixel Watch](https://support.google.com/googlehealth/answer/16393978) — Google Health Help
- [Gemini fully replaces Google Assistant on Android](https://9to5google.com/2026/09/28/google-assistant-gemini-android/) — 9to5Google, 28 September 2026
- [The Android Show: I/O Edition | Gemini Intelligence](https://www.youtube.com/watch?v=3TSdIYMX8pw) — Android on YouTube
