---
title: "How to Add Guided Vision to Android Accessibility Shortcuts"
description: "Set up Guided vision in Gemini Live with Android accessibility shortcuts and TalkBack so camera descriptions are one gesture away."
pubDate: 2026-09-20T14:00:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "how-to", "gemini", "tutorials"]
noindex: false
---

Guided vision in Gemini Live describes what your camera sees out loud. Google built it with blind and low-vision testers for tasks such as reading a food label, checking a dim restaurant menu, or naming an object on a table.

The feature is easy to miss if you only open the Gemini app when you already need help. An Accessibility shortcut or the TalkBack menu gets you into the camera session without hunting through app settings first.

This guide follows Google’s official September 2026 Android Drop notes and the Android accessibility shortcut help page. Availability still depends on country, Gemini app version, and a phone running Android 9 or later.

## What Guided vision can and cannot do

Share the camera inside Gemini Live. Gemini speaks a description of the scene. If the shot is off-center, the session can tell you to reframe, pan, or move closer.

Google lists three everyday examples: fine print on packaging, a menu in low light, and household objects. Treat those as the intended scope.

Google also states the limits in plain language. Guided vision can make mistakes. It is not a medical device, a mobility aid, or a stand-in for a safe-travel guide. Do not use it for navigation or obstacle detection.

If you need a wider picture of the September drop, including Find Hub remembered items and Motion Assist, start with the [September 2026 Android Drop guide](/blog/android-september-2026-drop-guide/).



![Person holding an Android phone up to scan an object with the camera](https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=800&q=80)



## Before you start

Confirm four things so you do not debug the wrong layer.

1. The Gemini app is installed from Google Play and you can sign in.
2. Your country is on Google’s [Gemini availability list](https://support.google.com/gemini/answer/14579026).
3. The phone runs Android 9 or later. Google’s drop post uses that floor for Guided vision.
4. You know how you want to launch it: volume-key shortcut, accessibility button, TalkBack menu, or Gemini settings.

Update Gemini and the Google app from Play Store. Feature flags in Gemini Live often arrive in the app, not in a full system OTA.

If Gemini Live itself is missing, open Gemini → Settings and look for Live or camera sharing. Guided vision sits on top of that Live session, not as a separate Play Store app.

## Add Guided vision to an Accessibility shortcut

Android’s Accessibility shortcut is a hardware or on-screen control that starts a chosen accessibility tool. Google points people to that same control for Guided vision.

Official shortcut help lives on [Android accessibility shortcuts](https://support.google.com/accessibility/android/answer/7650693). The exact labels vary slightly by Android version and manufacturer skin, but the path is stable.

### Volume key shortcut

1. Open **Settings → Accessibility**.
2. Open **Accessibility shortcuts** (sometimes listed as **Accessibility button & shortcut**).
3. Choose **Volume keys** or **Hold volume keys**.
4. Select the service list and add **Guided vision** if it appears, or add **Gemini** / the Gemini Live camera action if that is how your build exposes it.
5. Hold both volume keys for a few seconds to test. You should hear or see confirmation that the shortcut fired.

Use this when you already hold the phone in one hand and cannot see the screen well enough to tap a tiny icon.

### Accessibility button

1. In the same Accessibility shortcuts screen, turn on the **Accessibility button**.
2. Place it in the navigation bar or as a floating button, depending on your Android version.
3. Assign Guided vision (or Gemini Live camera) to that button.
4. Tap once from any screen to start the session.

The button is slower than volume keys but easier to discover if someone else set the phone up for you.

### TalkBack menu

Google also lists the TalkBack menu as an official entry point.

1. Turn TalkBack on under **Settings → Accessibility → TalkBack** if you already use it.
2. Use the TalkBack menu gesture (commonly a swipe down then right, or the assigned menu action).
3. Look for Guided vision or Gemini Live camera sharing.
4. Start the session and follow the spoken framing prompts.

If you do not use TalkBack day to day, prefer the volume-key shortcut so you do not leave TalkBack running by accident.

## Turn it on from Gemini app settings

Google’s third official path is Gemini itself.

1. Open the Gemini app.
2. Open Gemini settings.
3. Find Live, camera, or Guided vision.
4. Enable Guided vision and, if offered, add it to system shortcuts from that screen.

This path is useful when the Accessibility list has not picked up the new service yet. App-side flags often land before Settings shows a dedicated row.

After you enable it once, go back and bind the Accessibility shortcut so you are not opening Gemini from the app drawer every time.



![Close-up of a smartphone camera lens ready to capture a scene](https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80)



## Run a first session the way Google describes

Practice at a table before you need a label in a store.

1. Launch Guided vision from your shortcut.
2. Point the rear camera at a cereal box, a bottle, or a printed page.
3. Hold the phone steady. If the voice asks you to reframe, pan, or center the object, follow that prompt instead of moving faster.
4. Ask a specific question after the first description: “Read the ingredients” or “What is the large object on the left?”
5. End the Live session from the Gemini controls so the camera is no longer shared.

Keep questions narrow. “What is in front of me?” is weaker than “Read the price on this tag.” Gemini still can misread text or misidentify objects. Confirm anything that would change a medical, legal, or payment decision with a second source.

## Pair it with other September drop tools

Guided vision is one piece of the [September Android Drop](https://blog.google/products-and-platforms/platforms/android/android-drop-september-2026/). Two nearby features help the same daily loop.

**Find Hub remembered items** (Android 16+ where Gemini and Find Hub are both available). After you identify an object, you can tell Gemini where you put it: “Remember in Find Hub that I put my passport in my bedroom drawer.” Optionally attach a photo. Later ask Gemini or open the remembered-items tab in Find Hub.

**Motion Assist** (Android 17, passenger use). If camera use in a moving car makes you nauseous, Motion Assist adds a bubble overlay that moves with the vehicle. It is a comfort feature, not a driver aid.

Do not mix Guided vision with driving. The official warning already rules out navigation and obstacle detection. A passenger reading a label is the intended case.

## If the shortcut does nothing

Work through this list in order.

- Confirm Gemini is updated and that Live works when you start it from the Gemini app.
- Sign out and back into the same Google Account on Gemini.
- Recheck country availability. A VPN does not replace Google’s regional check.
- Look again under Accessibility shortcuts after a reboot. Newly registered accessibility services sometimes appear only after Settings reloads.
- On OEM skins, search Settings for “shortcut,” “accessibility button,” or “volume key.” Samsung, Xiaomi, and others nest the same Android control in different menus.
- If Guided vision is still listed as “coming soon” on your device, keep the Gemini Live camera path and bind that instead.

Google announced Guided vision as rolling out to Android 9 and up, which is a wide range. Expect staggered app flags rather than one system update that flips every phone on the same day.

## Watch how Gemini Live camera sessions work

This Android Developers session covers current accessibility work on Android, including how shortcuts and TalkBack fit into new camera and AI features.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/EDqgZS8q2rA"
    title="Android accessibility updates"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips that keep the feature usable

- Assign one shortcut only. Two launchers for the same tool make it harder to remember the gesture.
- Practice the volume-key hold until you can start a session without looking at the screen.
- Clean the rear camera lens. Guided vision cannot describe a smudge.
- Use daylight or a lamp when you care about small print. Low light is a supported scenario, not a guarantee.
- Stop the Live session when you are done. A live camera share should not sit in the background.
- Re-read Google’s footnote before you rely on the tool outdoors: it is not for navigation or obstacle detection.

## Conclusion

Guided vision is useful when the launch path is short. Bind it to the Accessibility shortcut or TalkBack menu, run one practice session on a labeled object, and keep Google’s safety limits in mind.

Once the shortcut works, you can add a remembered item in Find Hub for things you put down after you identify them. That combination covers “what is this” and “where did I leave it” without extra apps.

## Sources

- [September Android Drop (Google blog)](https://blog.google/products-and-platforms/platforms/android/android-drop-september-2026/)
- [Android.com September 2026 feature page](https://www.android.com/intl/en_us/new-features-on-android/featured/september-2026/)
- [Android accessibility shortcuts](https://support.google.com/accessibility/android/answer/7650693)
- [Gemini app availability](https://support.google.com/gemini/answer/14579026)
