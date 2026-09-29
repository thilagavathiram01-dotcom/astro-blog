---
title: "Control Pixel Buds EQ and ANC With Gemini Voice"
description: "Update the Pixel Buds app, connect Gemini, and change EQ, ANC, and touch controls with Hey Google voice commands."
pubDate: 2026-09-29T14:00:00
heroImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["pixel", "gemini", "android", "tutorials", "how-to", "google"]
noindex: false
---

Google promised Gemini audio control for Pixel Buds at Made by Google 2026. The Pixel Buds app update that enables it is now on the Play Store, and Gemini can change EQ, ANC, Conversation Detection, and touch controls without opening a settings screen.

This guide walks through the official feature list, the app version that adds the connector, how to confirm Pixel Buds in Gemini Connected Apps, and the voice phrases that work once the buds are paired.

## What Google shipped in September

On 12 August 2026, Google’s Pixel blog listed four Pixel Buds updates for September: Dynamic ANC on Pixel Buds Pro 2, Gemini audio control, Pixel Watch sleep sync, and tap-to-start Live Translate. Gemini audio control is the piece that is live in the companion app first.

The official wording is short: adjust your Buds’ settings with Gemini, for example “Hey Google, turn up the bass.” Independent reports of Pixel Buds app version 1.0.981607934 match that promise. After the update, Gemini lists Pixel Buds as a Connected App and can change settings that used to live only in the Pixel Buds menus.

The three other previewed features still depend on firmware. Dynamic ANC compensates when the ear seal shifts. Sleep sync pauses music, turns off touch controls, and silences notifications when a Pixel Watch detects sleep. Live Translate starts from a tap on the buds and covers more than 70 languages.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/yoYOavi3tQc"
    title="How to use Gestures on your Google Pixel Buds 2a and Pro 2"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What you need before you start

You need a pair of supported Pixel Buds paired to an Android phone, the Pixel Buds app from Play Store, and Gemini set as the assistant on that phone. Google Assistant is no longer a fallback on phones that completed the September 2026 mobile migration.

Confirm these items first:

1. Pixel Buds are connected in Bluetooth settings and show as in use for media or calls.
2. The Pixel Buds app is version 1.0.981607934 or newer. Open Play Store, search Pixel Buds, and tap Update if the button is present.
3. Gemini is installed and set as the digital assistant. Long-press the power button or use “Hey Google” and confirm Gemini opens, not an old Assistant card.
4. Keep Activity is on if Gemini asks for it when you enable a Connected App. Google’s Connected Apps help page states that many connectors need activity enabled.

If a voice command still opens system Bluetooth settings instead of a Gemini overlay, the phone does not have the new Pixel Buds connector yet. Wait for Play Store to finish the app update, then reopen Gemini.

![Wireless headphones on a desk next to a phone](https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80)

## Step 1 — Update the Pixel Buds app

Open the Play Store on the phone that owns the buds.

1. Search for **Pixel Buds** and open the official Google listing.
2. Update to **1.0.981607934** or a later build if one is listed.
3. Open the Pixel Buds app and confirm the case and both earbuds show as connected.
4. Leave the buds in your ears or in the open case so Gemini can reach them when you test a command.

The app update is what exposes the Gemini connector. Firmware for Dynamic ANC, sleep sync, and Live Translate can arrive later through the same app. You do not need those firmware bits for EQ and ANC voice control.

## Step 2 — Connect Pixel Buds inside Gemini

Treat Pixel Buds like any other Connected App. The same Apps page that added Airtable and Adobe in September also lists hardware connectors when the companion app supports them. See our [Connected Apps setup guide](/blog/gemini-connected-apps-september-2026/) if the Apps screen is hard to find.

On the Gemini Android app:

1. Open the menu and tap your profile.
2. Open **Connected Apps** or **Personal Intelligence**, then **Connected Apps**.
3. Find **Pixel Buds** and turn the toggle on.
4. Approve any permission card the Pixel Buds app presents.

On the web at [gemini.google.com](https://gemini.google.com), open **Settings & help**, then **Apps**, and look for the same Pixel Buds row. Voice control still runs on the phone that holds the Bluetooth session. The web page is useful only to confirm the connector exists on the account.

After the toggle is on, type `@` in a Gemini chat and look for **Pixel Buds**. You can force the connector with `@Pixel Buds` when a spoken request is ambiguous.

## Step 3 — Run the first voice commands

Wear the buds. Say “Hey Google” or long-press the power button so Gemini listens.

Try these phrases first. They match Google’s own example and the settings Gemini lists for the connector:

- “Hey Google, turn up the bass.”
- “Hey Google, turn on noise cancellation.”
- “Hey Google, turn off noise cancellation.”
- “Hey Google, turn on conversation detection.”
- “Hey Google, change my Pixel Buds touch controls.”

Gemini should show an overlay with a **Connecting to Pixel Buds** status, then confirm the change out loud. Open the Pixel Buds app afterward and check that EQ, ANC, or Conversation Detection actually moved. If the overlay never appears, the connector is off or the app is still on an older build.

Keep commands specific. “Make these sound better” is weaker than “switch to the Bass Boost EQ preset.” Name the setting you can see in the Pixel Buds app so Gemini does not guess.

![Person using wireless earbuds outdoors](https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80)

## Step 4 — Combine Gemini with the existing gestures

Voice control does not replace taps. Google’s Pixel Buds help video still documents tap, double tap, triple tap, press-and-hold ANC switching, and Pro 2 swipe volume.

Use both surfaces:

- Gestures for play, pause, skip, volume, and ANC mode while your phone stays in a pocket.
- Gemini for EQ presets, Conversation Detection, and touch-control maps that have no gesture.
- Gemini Live on a long press when you want a longer conversation, which Pixel Buds Pro 2 already supported before this app update.

Double tap still stops a Gemini spoken response. That remains the fastest way to cut off an answer that ran long.

If you wear Pixel Buds Pro 2, head gestures for calls and message replies stay separate from the new Connected App. Nod and shake still work through the existing Gemini path on the phone, not through the Pixel Buds connector toggle.

## Step 5 — Know what still needs firmware

Do not expect every August announcement on day one of the app update.

**Dynamic ANC** is a Pixel Buds Pro 2 firmware feature. It adjusts cancellation when the tip seal shifts. Until the buds report a firmware update in the Pixel Buds app, ANC voice commands only switch the mode you already have.

**Pixel Watch sleep sync** needs a Pixel Watch that can detect sleep and a firmware build that pauses audio, disables touch, and mutes notifications on the buds. Pair the watch first. Then look for a sleep or bedtime toggle in the Pixel Buds app after the firmware lands.

**Live Translate from a tap** is also firmware. Google’s August post says a tap starts listening mode for more than 70 languages and that the phone can play the other person’s translation. That path is independent of “turn up the bass.”

Check **Pixel Buds app → Firmware** or the device card after each Play Store update. Voice EQ control can work while those three items are still pending.

## Tips that keep the connector reliable

- Update the Pixel Buds app before you hunt through Gemini settings. The connector does not appear without that build.
- Say the product name if Gemini opens Bluetooth settings instead: “Hey Google, on my Pixel Buds, turn on noise cancellation.”
- Use `@Pixel Buds` in a typed chat when you are in a quiet office and do not want to speak.
- Review Gemini Apps Activity after you test. Delete chats that include location or calendar context you did not mean to store.
- Disconnect Pixel Buds from Connected Apps if you lend the phone. The buds stay paired in Bluetooth; only the Gemini write path turns off.

Workspace or school accounts may hide Connected Apps. Use a personal Google Account on the phone that owns the buds if the toggle never appears.

## Conclusion

Gemini audio control is the first of the September Pixel Buds updates that you can use today. Update the Pixel Buds app, enable the Pixel Buds Connected App, and start with bass and ANC commands. Confirm the change in the companion app so you know the overlay is not only talking.

Leave firmware-dependent features on the checklist. Dynamic ANC, sleep sync, and tap-to-translate will show up in the same Pixel Buds app when Google ships those builds. Until then, voice control already removes the need to open EQ and ANC menus mid-commute.

## Sources

- [Pixel Buds Pro 2: Introducing new features and color (Google, 12 Aug 2026)](https://blog.google/products-and-platforms/devices/pixel/google-pixel-buds-mbg-2026/)
- [Pixel Buds app update lets Gemini control audio and settings (9to5Google, 28 Sep 2026)](https://9to5google.com/2026/09/28/pixel-buds-gemini-controls/)
- [Use and manage connected apps in Gemini (Gemini Apps Help)](https://support.google.com/gemini/answer/13695044)
- [How to use Gestures on your Google Pixel Buds 2a and Pro 2 (Google, YouTube)](https://www.youtube.com/watch?v=yoYOavi3tQc)
- [Control touch on Pixel Buds (Pixel Buds Help)](https://support.google.com/googlepixelbuds/answer/7560934)
