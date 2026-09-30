---
title: "How to Set Up Gemini After Assistant Leaves Android"
description: "Google Assistant is leaving Android phones. Set Gemini as default, remap Hey Google and the power button, and keep Nest speakers on Assistant."
pubDate: 2026-09-30T11:00:00
heroImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "android", "tutorials", "how-to", "google", "ai-tools"]
noindex: false
---

Google Assistant on phones is no longer a fallback. Starting 4 September 2026, Google began moving mobile accounts to Gemini. By late September, testers in the US and Europe reported that the **Switch to Google Assistant** control had vanished from Google app 17.60 stable and 17.62 beta.

The shortcuts you already use still work. “Hey Google,” a long press on power, and a corner swipe now open Gemini. Nest speakers and Home displays stay on Assistant for now. This guide walks through what changed, how to finish setup, and how to get the old jobs done with the new assistant.

## What actually changed on the phone

Google emailed users in August with a firm mobile timeline. Assistant on phones, tablets, and devices that pair to the phone — Wear OS, many headphones, Android Auto — moves to Gemini. Smart speakers and smart displays are excluded from this wave.

On an updated phone you will notice three things:

- The Gemini account menu no longer lists a switch back to Assistant.
- Power-button and corner-swipe gestures open Gemini instead of the old overlay.
- Routines that used Assistant phrasing still run, but replies come from Gemini.

If your phone is too old for Gemini, or Gemini Apps are not offered in your country, Assistant can remain. Everyone else should treat the switch as permanent once the Google app update lands.

![Android smartphone on a desk with a voice assistant overlay ready to take a command](https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=800&q=80)

## Confirm Gemini is the default assistant

Do this once after the Google app updates.

1. Open **Settings** → **Apps** → **Default apps** (wording varies by skin).
2. Open **Digital assistant app** or **Assist app**.
3. Choose **Google** / **Gemini**.
4. Open the **Gemini** app, tap your profile photo, and check that **Switch to Google Assistant** is gone. If the row is still there, you have not received the retirement update yet.

On Samsung One UI, Xiaomi HyperOS, and similar skins, the same control often sits under **Settings → Apps → Choose default apps → Digital assistant app**. You can also open the Google app, tap your photo, then **Settings → Google Assistant → Digital assistants from Google** if that screen still exists on your build.

Say “Hey Google, what assistant are you?” If the reply identifies Gemini, the hotword is wired correctly.

## Remap the gestures you already use

You do not need new muscle memory. You do need to confirm each trigger still points at Gemini.

**Power button.** Settings → System → Gestures → **Press and hold power button**. Set it to the digital assistant, not the power menu, if that is how you used Assistant.

**Corner swipe.** On Pixels this is Settings → System → Gestures → **Navigation mode** related assistant swipe. Leave it on if you used the bottom-corner swipe to summon Assistant.

**Hey Google.** Open Gemini → profile → **Gemini settings** (or Google app Settings → Voice). Turn on **Hey Google** and run Voice Match so the phone accepts your voice from the lock screen. Lock-screen actions still need the device unlocked for some Live features.

**Pixel Buds and Wear OS.** After the phone migrates, paired buds and watches follow the phone assistant. Update the Pixel Buds app if you want Gemini to change volume and ANC from a spoken command. That control started shipping with the September Pixel Buds app update.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/3TSdIYMX8pw"
    title="The Android Show: I/O Edition | Gemini Intelligence"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

Google’s Android Show segment on Gemini Intelligence is the official overview of the same assistant layer now sitting on the power button.

## Recreate the daily Assistant jobs in Gemini

Most short commands transfer. Use the same verbs you used with Assistant, then add one extra constraint when the model over-explains.

- **Timers and alarms.** “Set a 12-minute timer named pasta.” “Alarm for 6:30 weekdays.”
- **Messages and calls.** “Text Alex I’m 10 minutes late.” Confirm the draft before send.
- **Lists.** “Add oat milk to the Groceries list in Keep.” Keep is slower than the old Assistant hook for some users. If a list write hangs, open Keep and check that the Gemini connection is on. See [how to use Keep with Gemini Live](/blog/keep-live-gemini-android/) if you take notes by voice.
- **Home controls.** “Turn off the hallway lights.” Home devices still work from the phone. Nest speakers themselves stay on Assistant until Google says otherwise.
- **Find Hub memory.** On Android 16+ in supported countries you can say, “Remember in Find Hub that I put my passport in the bedroom drawer,” and later ask Gemini where it is. Google documented this in the September 2026 Android Drop.

For camera jobs such as reading a label, start **Live** and share video. The full camera flow is in [How to Use Gemini Live Guided Vision on Android](/blog/gemini-live-guided-vision/).

![Person using a phone with headphones while walking, speaking a short voice command](https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80)

## Connect the apps Gemini needs

Gemini only acts inside apps you authorize. After the Assistant sunset, review connections once.

1. Open [gemini.google.com](https://gemini.google.com) or the Gemini app.
2. Open **Settings → Apps** (sometimes under **Personal Intelligence → Connected Apps**).
3. Enable Calendar, Keep, Maps, YouTube Music, Wallet, and any third-party tools you actually use.
4. Test with a narrow prompt: “What’s on my calendar after 3pm?” or “Read my last Keep list named Packing.”

Wallet is a new connection in late September 2026. Gemini can surface spending and pass insights from saved Wallet data when that Connected App is on. Treat it as a summary, not a bank statement.

A longer setup for third-party tools lives in [Connect apps to Gemini](/blog/connect-apps-to-gemini/). Turn off anything you do not want in chat history.

## What still lives on Assistant

Do not expect the phone change to rewrite your house.

- Google Nest and Home speakers and displays still run Assistant.
- TVs and some cars that talk to Google Assistant built-in hardware are on their own schedule.
- Broadcasts such as “Hey Google, broadcast dinner is ready” from a Nest speaker are unchanged.
- If a household mixes a migrated Pixel with a Nest Hub, you will talk to two assistants. Keep routines short and device-specific.

Google Help still publishes a “switch back to Assistant” article. That page describes the old setting. On Google app 17.60+ the control is gone, so the help text is stale for updated phones.

## If Gemini misses a command Assistant handled instantly

Work the short list before you assume a feature died.

1. Update **Google** and **Gemini** from Play Store.
2. Confirm the digital assistant default is Google/Gemini, not Bixby, Gemini as a dual-app conflict, or a third-party assistant.
3. Re-train Voice Match.
4. Check Gemini Apps Activity. Some on-device actions work without it, but connected-app answers need it on.
5. Retry with a shorter prompt. “Timer 10 minutes” beats a paragraph.

Keep list writes and some Home commands can lag compared with classic Assistant. That is a known complaint in user reports from 28–29 September 2026, not a sign that the phone skipped the update.

## Quick checklist

- Update Google app past 17.60 and confirm the switch-back row is gone
- Set Gemini as the default Assist app
- Re-enable Hey Google, power-button hold, and corner swipe
- Connect Calendar, Keep, Maps, Music, and Wallet if you need them
- Leave Nest speakers on Assistant until Google migrates them
- Use Live + camera for anything that used to need “what’s on this label”

Assistant on the phone had one job: fire a command and get out of the way. Gemini can do that, plus follow-ups. Keep the first sentence as short as the old Assistant phrase, then add detail only if the first answer is wrong.

## Sources

- [Gemini fully replaces Google Assistant on Android — 9to5Google](https://9to5google.com/2026/09/28/google-assistant-gemini-android/)
- [Google has started killing Assistant on phones — Android Authority](https://www.androidauthority.com/google-now-killing-assistant-gemini-3716545/)
- [Google plans to kill Assistant on your phone on September 4 — Ars Technica](https://arstechnica.com/ai/2026/08/google-plans-to-kill-assistant-on-your-phone-on-september-4/)
- [Get started with the Gemini mobile app — Gemini Apps Help](https://support.google.com/gemini?p=activity_to_mobile)
- [September Android Drop — blog.google](https://blog.google/products-and-platforms/platforms/android/android-drop-september-2026/)
- [The Android Show: I/O Edition | Gemini Intelligence — Android on YouTube](https://www.youtube.com/watch?v=3TSdIYMX8pw)
