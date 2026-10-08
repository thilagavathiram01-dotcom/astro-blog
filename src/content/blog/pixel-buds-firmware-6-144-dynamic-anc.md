---
title: "Pixel Buds 6.144 Update: ANC, Mute, and Translate"
description: "Install Pixel Buds software release 6.144 on Pro 2 and 2a. Dynamic ANC, tap-to-mute, Gemini settings, Live Translate, and sleep pause."
pubDate: 2026-10-08T14:30:00
heroImage: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["pixel", "how-to", "gemini"]
noindex: false
---

Pixel Buds software release_6.144 is rolling out for Pixel Buds Pro 2 and Pixel Buds 2a. Google's Pixel Buds Community post on October 6, 2026 lists Dynamic Active Noise Cancellation, Enhanced Live Translate, Gemini voice settings, Tap to Mute, and sleep auto-pause. The original Pixel Buds Pro is not on that list.

9to5Google later reported that Google clarified the rollout: the 2022 Pixel Buds Pro was removed from the announcement and does not get these features. If your case still says Pixel Buds Pro without the "2," treat this firmware as out of scope until Google says otherwise.

## Which model gets which feature

Release_6.144 is one software package, but the feature set splits by hardware.

| Feature | Pixel Buds Pro 2 | Pixel Buds 2a | Extra requirement |
| --- | --- | --- | --- |
| Dynamic Active Noise Cancellation | Yes | No | None listed beyond the firmware |
| Enhanced Live Translate | Yes | Yes | Google Translate app; select countries and languages |
| Gemini voice settings | Yes | Yes | Gemini app, Google Account, internet |
| Tap to Mute | Yes | Yes | Paired Pixel phone |
| Auto-pause while sleeping | Yes | Yes | Pixel Watch sleep sensing |

Dynamic ANC is the only Pro 2 exclusive in the announcement. Google says the buds "automatically adjust audio or noise cancellation based on your ear seal." 9to5Google's write-up of the same note says this compensates for subtle shifts when a bud moves in your ear.

![White wireless earbuds in an open charging case on a desk](https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80)

## Install release_6.144

The update arrives through the Pixel Buds companion app, not a system image you sideload. Community reports already show staggered delivery, so a missing prompt does not mean the account is excluded.

1. Update the [Pixel Buds app](https://play.google.com/store/apps/details?id=com.google.android.apps.wearables.maestro.companion) from the Play Store.
2. Put both buds in your ears or in the open case, and confirm they are connected to the phone that has the app.
3. Open the Pixel Buds app.
4. Scroll to More settings, then Firmware update (some builds label this Firmware).
5. Tap Check for updates.
6. Install when release_6.144 is offered. Keep the case open, the buds nearby, and the phone unlocked until the progress bar finishes.
7. Reopen Firmware update and confirm the installed version reads release_6.144.

If the check returns nothing, wait and try again later. Google did not publish a forced-install switch. Charge the case first. A low case battery is a common reason companion apps refuse a buds firmware write.

## Turn on Dynamic ANC on Pro 2

After the firmware is on a Pixel Buds Pro 2 pair, Dynamic ANC is the seal-based mode Google described. It is not listed for the 2a.

1. Open the Pixel Buds app with the Pro 2 connected.
2. Open the noise control section.
3. Leave Active Noise Cancellation enabled. Dynamic adjustment is tied to the ear seal, so a poor tip fit still weakens cancellation.
4. Run the in-app fit check if your tips have not been seated since the update. Swap tip sizes until the seal test passes.
5. Walk, talk, or shift your jaw. The point of the feature is that ANC should change when the seal changes, not stay at one fixed level.

You can also ask Gemini to turn Active Noise Cancellation on. That voice path is covered in the next section, and in more detail in [how to change Pixel Buds EQ and ANC with Gemini](/blog/gemini-pixel-buds-eq-anc-controls/).

![Person wearing wireless earbuds while working at a laptop](https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80)

## Change settings by voice

Google's announcement says you can use Gemini voice commands to turn on Active Noise Cancellation, adjust EQ, or enable touch controls. Both Pro 2 and 2a are listed.

The footnote on that post is specific. You need the Pixel Buds app, a compatible Android phone with the Gemini mobile app, a Google Account, and an internet connection. Features can differ by subscription and account. Some apps need setup. Availability is limited to select countries and languages, and data rates may apply.

1. Set Gemini as the assistant on the phone paired to the buds.
2. Confirm the Pixel Buds app is signed in with the same Google Account.
3. Wear the buds and say "Hey Google," or press and hold an earbud, then ask for the change. Examples that match Google's wording: turn on Active Noise Cancellation, change the EQ, or enable touch controls.
4. Open the Pixel Buds app afterward and confirm the toggle matches what you asked. Google's footnote says to check responses for accuracy.

Voice control does not replace the firmware install. If release_6.144 is not on the buds yet, Gemini cannot add Dynamic ANC or Tap to Mute.

## Mute a call with a tap

Tap to Mute lets you mute and unmute the microphone during a call by tapping the buds. Google lists it for Pro 2 and 2a, and only when the buds are paired to a Pixel phone.

1. Pair the buds to a Pixel phone and place or answer a call.
2. Tap a bud to mute the microphone.
3. Tap again to unmute.

This is separate from the older single-tap media play/pause gesture. Use it on a live call first, not while music is playing, so you can tell which action the tap took. If mute does not register, confirm the phone is a Pixel and that firmware update shows release_6.144.

## Start Live Translate from a bud

Enhanced Live Translate is the travel feature in this release. Google's wording: leave the phone in your pocket and start translating with a touch on the earbuds. Conversation and listening mode both go through the Google Translate app.

The footnote points to [g.co/pixel/livetranslate](https://g.co/pixel/livetranslate). Results may vary. It is available in select countries and languages, not for all media or apps, and translation may not be instantaneous.

1. Install or update the Google Translate app on the paired phone.
2. Download the language packs you need while you still have Wi-Fi.
3. Wear the Pro 2 or 2a buds and touch a bud to start a translate session, as described in the release note.
4. For a two-person exchange, use conversation mode in Translate. For following speech around you, use listening mode.
5. Keep the phone nearby with a data connection. Pocketing the phone does not mean the phone can be off.

Background listening on Android is a separate Translate control. If the bud touch does not start a session, open Translate and confirm Live Translate is allowed for your region, then retry. The [Android Live Translate background guide](/blog/google-translate-live-background-android/) covers the phone-side path.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/cWuK9l1CfQQ"
    title="#MadeByGoogle ‘24: Pixel Buds Pro 2"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Pause audio when a Pixel Watch sees sleep

Auto-pause uses sleep sensing on a Pixel Watch, not a microphone guess inside the buds. Google says the watch can tell when you fall asleep, then the buds pause playback, turn off touch gestures, and silence notifications.

1. Pair a Pixel Watch that has sleep sensing available to the same account as the buds.
2. Wear the watch and the Pro 2 or 2a buds.
3. Confirm release_6.144 is installed and the Pixel Buds app is updated.
4. Start media, then rely on the watch sleep signal. When it fires, playback should pause, touch controls should stop, and notifications should stay quiet.

The announcement footnote for this feature only says it requires the Pixel Buds app. It does not say the original Pixel Buds Pro or a non-Pixel watch can send the sleep signal.

## Tips if a feature is missing

- Check the model name in the Pixel Buds app before you troubleshoot. Pro 2 and 2a are in scope. The original Pro is not, per Google's clarification reported by 9to5Google on October 7, 2026.
- Dynamic ANC will not appear on a 2a pair. That is the published split, not a failed install.
- Tap to Mute needs a Pixel phone. A non-Pixel Android phone can still pair the buds and miss that gesture.
- Gemini settings need internet and the Gemini app. Airplane mode will block the voice path even when the firmware is current.
- Live Translate is region and language limited. A missing touch action can be a country limit, not a firmware bug.
- Sleep pause needs the Pixel Watch signal. Buds alone do not detect sleep in the wording of the release note.

## Conclusion

Release_6.144 is the October 2026 Pixel Buds package for Pro 2 and 2a. Install it from More settings, then Firmware update, in the Pixel Buds app, and confirm the version string. Use Dynamic ANC only on Pro 2, Tap to Mute only on a Pixel phone, Gemini for ANC, EQ, and touch controls, and a bud touch plus Google Translate for Live Translate. Sleep pause waits on a Pixel Watch. The 2022 Pixel Buds Pro is outside this feature list until Google publishes a separate note.

## Sources

- [A huge Pixel Buds update is coming your way!](https://support.google.com/googlepixelbuds/thread/470579319/a-huge-pixel-buds-update-is-coming-your-way), Google Pixel Buds Community, October 6, 2026.
- [Google rolling out Pixel Buds Pro 2 and 2a update](https://9to5google.com/2026/10/06/pixel-buds-pro-update-oct-2026/), 9to5Google, October 6, 2026, updated October 7, 2026.
- [Pixel Buds Live Translate](https://g.co/pixel/livetranslate), Google.
- [#MadeByGoogle ‘24: Pixel Buds Pro 2](https://www.youtube.com/watch?v=cWuK9l1CfQQ), Made by Google, August 13, 2024.
