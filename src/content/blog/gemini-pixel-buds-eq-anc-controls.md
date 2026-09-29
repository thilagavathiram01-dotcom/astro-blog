---
title: "Use Gemini to Control Pixel Buds EQ, ANC, and More"
description: "Update the Pixel Buds app, connect Gemini, and change EQ, ANC, conversation detection, and touch controls by voice."
pubDate: 2026-09-29T09:00:00
heroImage: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "gemini", "pixel", "tutorials", "how-to", "google"]
noindex: false
---

Google is rolling out a Pixel Buds app update that lets Gemini change earbud settings without opening menus. After the companion app reaches version 1.0.981607934, Gemini can connect to Pixel Buds and adjust EQ, noise control, conversation detection, and touch controls by voice.

The change matches a promise from the Pixel 11 launch: a September Pixel Buds update that puts more audio controls on Gemini. On phones that already have the app, commands such as “Hey Google, turn on noise cancellation” now hit the buds instead of dumping you into system Bluetooth settings.

This guide covers requirements, the Connected Apps setup, voice commands that work today, and the official gesture and EQ paths that still matter when you want a manual fallback.

## What the September Pixel Buds app actually adds

9to5Google and Android Authority both report the same Gemini copy after the Play Store update: you can control settings like EQ preset, ANC mode, conversation detection, and touch controls. The Gemini overlay shows a “Connecting to Pixel Buds” state, then confirms the change out loud.

That connector appears as **@Pixel Buds** inside Gemini Connected Apps. Without the new app build, the same phrases only open Android Bluetooth settings. Firmware for Dynamic ANC, Pixel Watch sleep sync, and a tap-to-start Live Translate path was previewed separately and is not required for the voice settings connector.

Google’s own Pixel Buds Help pages already list Gemini as the digital assistant for any Pixel Buds model on Android 10 or later. The September app change is the missing link between those voice sessions and the sound sliders that used to live only in the companion app.



![Wireless earbuds on a desk next to a phone](https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80)



## Check that Gemini is your default assistant

Gemini must be the default digital assistant before Pixel Buds will hand voice requests to it. Google documents two official paths.

**From Android Settings**

1. Open **Settings**.
2. Tap **Apps**, then **Assistant**.
3. Open **Digital assistants from Google** and choose **Gemini**.
4. Finish the on-screen prompts.

**From the Google app**

1. Open the Google app.
2. Tap your profile picture, then **Settings**, then **Google Assistant**.
3. Tap **Digital assistants from Google** and choose **Gemini**.

If you still need the full default-assistant walkthrough, use our earlier guide on [how to set Gemini as the default assistant on Android](/blog/gemini-default-assistant-android/). After the September 4, 2026 mobile Assistant cutoff, most phones no longer offer a switch-back toggle.

You also need:

- Any Google Pixel Buds model
- Android 10 or later
- Current Gemini, Google, and Pixel Buds apps
- A signed-in Google Account and an internet connection

Those requirements come from [Use Gemini on Pixel Buds](https://support.google.com/googlepixelbuds/answer/15437307).

## Update the Pixel Buds app and connect Gemini

1. Open the Play Store, search for **Pixel Buds**, and install or update the companion app.
2. Confirm the version is **1.0.981607934** or newer under the app’s store listing or Android app info.
3. Pair the buds and leave them in your ears so Gemini can reach them.
4. Open Gemini and go to **Settings**, then **Apps** (Connected Apps).
5. Look for **Pixel Buds** and allow the connector if it is off.

When the connector is live, a request such as “turn up the bass” should show the Pixel Buds connection line instead of a generic Bluetooth page.

If Pixel Buds is missing from Connected Apps, force-stop Gemini, reopen it, and check again after the Play Store update finishes installing. Connectors often appear in Settings before they show in the `@` picker.

## Voice commands that change sound and noise control

Start Gemini with “Hey Google,” “OK Google,” or a configured press-and-hold on a bud. Then ask for a setting, not a vague “make it sound better.”

Useful phrases reported with the new connector:

- “Turn on noise cancellation.”
- “Turn off noise cancellation.”
- “Turn up the bass.”
- Switch conversation detection on or off when you need voices to punch through music.
- Change a touch-control assignment when a gesture keeps firing the wrong action.

Google already documents volume by voice on the gesture help page: “Hey Google, turn up the volume” and “Hey Google, turn down the volume.” Those still work. The new connector is what lets Gemini reach EQ presets and ANC modes that used to require sliders.

Official EQ presets in the Pixel Buds app remain **Default**, **Light bass**, **Heavy bass**, **Balanced**, **Vocal boost**, **Clarity**, and **Last saved**. Ask for those names when you want a known target instead of a custom five-band mix.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/8aJpecIJ4a4"
    title="Google Pixel Buds Pro 2 With Gemini | Better Than Ever"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Gestures still matter when Gemini is busy

Voice is not the only control path. Google’s [Learn controls for Google Pixel Buds](https://support.google.com/googlepixelbuds/answer/7560934) page lists the defaults:

- Swipe forward or back on a supported bud to raise or lower volume.
- Press and hold to cycle Active Noise Cancellation and Transparency (Adaptive is available on Pixel Buds Pro 2).
- Press and hold, wait for the chime, then speak to Gemini if that bud is mapped to the assistant.
- Double tap to stop Gemini or to hear spoken notifications, depending on model and mapping.

On Pixel Buds Pro, Gemini activation depends on how you assign the left and right buds. If both sides stay on noise control, you must use the hotword. Map at least one side to Gemini if you want a hold gesture as a backup when the hotword is noisy.

You can also disable touch controls entirely in the Pixel Buds app when pockets or hats keep triggering skips.



![Person adjusting wireless headphones while looking at a phone](https://images.unsplash.com/photo-1484704849700-f032a5070ee6?auto=format&fit=crop&w=800&q=80)



## Set EQ and ANC by hand when voice misses

Voice will not always pick the exact five-band curve you saved last week. Use the official sliders.

**On a Pixel phone**

1. Open the Pixel Buds app or Settings for the paired buds.
2. Tap **Sound**, then **Equalizer**.
3. Pick a preset, or hold a frequency and slide it, then tap **Save**.

**Quick Settings shortcut**

1. Swipe down and touch and hold the Bluetooth tile.
2. Open the paired Pixel Buds settings.
3. Tap **Sound**.

**ANC modes** (Pixel Buds Pro, Pro 2, and 2a)

- **Noise Cancellation** — blocks outside sound; one chime.
- **Transparency** — lets outside sound in; two chimes.
- **Adaptive** — Pro 2 only; reduces loud noise while keeping some awareness.

Change the mode from Device details in the Pixel Buds app, or with the press-and-hold gesture. Conversation Detection still pauses media when you start talking and resumes when you stop.

## Tips that keep the connector reliable

Keep the buds in your ears when you issue a settings command. Gemini needs an active connection, not a case that is closed on a desk.

Speak the setting name. “Heavy bass” and “noise cancellation” map cleanly. “Make the subway quieter” may land on volume or a search result instead of ANC.

Update firmware from the Pixel Buds app when a banner appears. Dynamic ANC that compensates for a shifting seal, Watch sleep sync that pauses media and silences notifications, and tap-to-start Live Translate were previewed with the Pixel 11 event and may arrive on a later firmware train.

Do not expect Nest speakers or Home displays to pick up these earbud settings. Google still treats Home hardware as a separate Gemini for Home track.

If a command opens Bluetooth settings instead of the Gemini overlay, the companion app is old or the Connected App toggle is off. Update first, then reconnect.

## Conclusion

The useful part of this drop is small and specific: Gemini can now change Pixel Buds sound and noise settings that used to live only in a settings tree. Update the companion app, confirm Gemini is the default assistant, turn on the Pixel Buds connector, and use named presets and ANC modes.

Keep the official gesture and EQ pages bookmarked. They are the fallback when a voice request is ambiguous or the connector has not reached your account yet.

## Sources

- [Use Gemini on Pixel Buds (Google Help)](https://support.google.com/googlepixelbuds/answer/15437307)
- [Learn controls for Google Pixel Buds (Google Help)](https://support.google.com/googlepixelbuds/answer/7560934)
- [Adjust your Pixel Buds equalizer (Google Help)](https://support.google.com/googlepixelbuds/answer/15437308)
- [Use Active Noise Control on Google Pixel Buds (Google Help)](https://support.google.com/googlepixelbuds/answer/12312672)
- [Pixel Buds app update lets Gemini control audio and settings (9to5Google)](https://9to5google.com/2026/09/28/pixel-buds-gemini-controls/)
- [Latest Pixel Buds update lets Gemini control earbud settings (Android Authority)](https://www.androidauthority.com/pixel-buds-settings-gemini-3716399/)
- [Google Pixel Buds Pro 2 With Gemini (YouTube, Made by Google)](https://www.youtube.com/watch?v=8aJpecIJ4a4)
