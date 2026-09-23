---
title: "How to Use Guided Vision in Gemini Live on Android"
description: "Turn on Guided Vision in Gemini Live, add an Accessibility shortcut, and get audio help reading labels and finding objects on Android 9+."
pubDate: 2026-09-23T09:30:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "gemini", "tutorials", "how-to", "ai", "pixel"]
noindex: false
---

You already point Gemini Live at a bird, a ripped stitch, or a dark restaurant menu. Guided Vision adds something more useful than a one-shot caption: spoken coaching that tells you to pan, reframe, or center the object until the model can actually help.

Google announced the feature in the [September 2026 Android Drop](https://blog.google/products-and-platforms/platforms/android/android-drop-september-2026/). It was built with blind and low-vision testers. It is rolling out slowly to phones on **Android 9 and newer** in countries where Gemini is available.

This guide shows how to enable it in the Gemini app, add a hardware shortcut, start a Live camera session, and stay within Google’s own safety limits.



![Person holding an Android phone to inspect an object](https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=800&q=80)



## What Guided Vision actually does

Guided Vision runs inside **Gemini Live**, not the regular typed chat. You share the rear or front camera. Gemini talks you through what is in the frame.

Google’s help article lists four jobs it is meant to handle:

- **Read or translate text** on labels, signs, menus, and appliance displays.
- **Identify objects** and say where they sit, such as a spice jar in a cabinet.
- **Describe objects** by color, shape, and pattern (for example, whether a shirt matches pants).
- **Describe a space** so you can look for a dropped earbud or learn a room layout.

If the camera is off-target, you hear voice cues to adjust, pan, or center the subject. That feedback loop is the difference between Live camera chat and Guided Vision.

Google is explicit about what it is not. Guided Vision can be wrong. It is **not** a medical device, mobility aid, or travel guide. Do not use it for navigation or obstacle detection. You remain responsible for your own safety.

## Check that the toggle exists

The rollout is server-side. Two phones on the same Android version can disagree for days.

1. Update **Gemini** from Play Store.
2. Update **Android Accessibility Suite** (TalkBack) if you use it.
3. Confirm Gemini is offered in your country.
4. Open Gemini and look for **Use Guided Vision in Live** under Settings.

Google’s drop post says the feature is coming to **Android 9+**. You do not need Android 17. That version is required for [Motion Assist](/blog/android-17-motion-assist/), a different September drop tool.

If the toggle is missing, wait and check again after the next Gemini app update. Google’s support page states access arrives over time.

## Turn Guided Vision on in the Gemini app

Follow the official path from [Android Accessibility Help](https://support.google.com/accessibility/android/answer/18365638).

1. Open the **Gemini** app on Android.
2. Tap your profile picture or initial at the top, then **Settings**.
3. Turn **Use Guided Vision in Live** on.
4. If a notification appears, tap **Start Live** to jump straight into a session.

Once the switch is on, start Live as usual and share the camera. End the session with **End Live session**.

Keep the phone unlocked while you talk. Live camera needs an active session, not a lock-screen overlay.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/atAk9c54sAw"
    title="Hit a snag? Gemini Live can help. Share your camera and screen"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Add a shortcut you can hit without hunting menus

You can bind Guided Vision to the same accessibility controls used for TalkBack and Magnification.

### Accessibility shortcut

1. Open **Settings → Accessibility**.
2. Under **Vision assistance**, tap **Guided Vision**.
3. Turn **Guided vision shortcut** on.
4. Tap the shortcut row and pick one trigger:
   - **Accessibility button** (floating button)
   - **Accessibility gesture** (two-finger swipe up from the bottom)
   - **Volume keys** (press and hold both volume keys)

Use volume keys if you often hold the phone away from your face and cannot see the floating button. Use the gesture if you already swipe that way for TalkBack.

### TalkBack menu

1. Update TalkBack from Play Store.
2. With TalkBack on, tap the screen with **three fingers** to open the TalkBack menu.
3. Choose **Guided Vision**.

That path starts Live with the camera so you do not have to hunt the Gemini Live icon first.



![Developer working at a laptop with a phone nearby](https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80)



## Start a useful camera session

A sloppy frame wastes the first 20 seconds of every request. Use a short routine.

1. Trigger Live with camera from Gemini, the accessibility shortcut, or TalkBack.
2. Hold the phone so the subject fills most of the frame. Keep a little margin so Gemini can ask you to pan.
3. Say what you need in one sentence: “Read the ingredients on this label” or “Where is the pepper in this cabinet?”
4. If Gemini asks you to move, follow the voice cue before you repeat the question.
5. When you are done, tap **End Live session**. Camera sharing stops with the session.

Good first tasks:

- A food label with small allergen text
- A paper menu in dim light
- A shirt and a pair of pants laid side by side
- A spice rack or junk drawer
- A room where you dropped a small item

Skip anything that needs guaranteed accuracy for health or travel. Google’s footnote on the drop post repeats the same warning as the help center.

## Pair it with other September drop tools

Guided Vision describes what is in front of you. It does not remember where you put a passport last week. For that, use [Find Hub remembered items with Gemini](/blog/find-hub-remembered-gemini/) on Android 16 and newer where Find Hub is supported.

If you get carsick while reading those labels in a passenger seat, turn on Motion Assist on Android 17 instead of staring harder at a still screen.

Keep Gemini Live updated if you also use the newer **Gemini 3.8 Live** dialogue models. Those models power the spoken side of Live; Guided Vision is the camera-coaching layer on top.

## Troubleshooting

**No Guided Vision row in Gemini Settings.** Update Gemini, confirm country availability, and wait. The feature is flagged as a slow rollout.

**No Guided Vision page under Accessibility.** Same story. The Settings entry appears with the Play services / Gemini package rollout, not with a full OS upgrade.

**Live starts but never describes the scene.** Confirm you shared the **camera**, not only the microphone. End Live and start again from the shortcut that opens Live with camera.

**Voice cues never ask you to reframe.** Point at a smaller object and hold the phone farther away so the subject is off-center. Then ask Gemini to find it.

**TalkBack menu has no Guided Vision item.** Update Android Accessibility Suite and try the three-finger menu again.

**You need hands-free start.** Bind volume keys or the accessibility button. Do not rely on a tiny Gemini Live icon when you cannot see the screen well.

## Tips that keep the answers honest

- Name the task. “Read the sodium line” beats “what is this.”
- Add a photo only when Gemini asks or when the object is still. Live already sees the stream.
- Repeat a reading if the first pass skips a line. Models miss text on glare and curves.
- Treat color calls as approximate in mixed lighting.
- Stop the session in public if you do not want the camera facing other people.

## Conclusion

Guided Vision is a Live camera mode with spoken framing help, not a new standalone app. Turn the Gemini setting on, add an Accessibility shortcut you can reach in one motion, and keep Google’s limits in mind: labels, objects, colors, and rooms — not navigation and not medical advice.

If the menus are empty today, check again after the next Gemini update. The September drop listed this as “coming soon” on Android 9+, and the help center still marks the rollout as gradual.

## Sources

- [September Android Drop (Google)](https://blog.google/products-and-platforms/platforms/android/android-drop-september-2026/)
- [Get audio descriptions with Guided Vision in Gemini Live (Google Support)](https://support.google.com/accessibility/android/answer/18365638)
- [Gemini availability](https://support.google.com/gemini/answer/14579026)
- [Accessibility shortcuts on Android](https://support.google.com/accessibility/android/answer/7650693)
- [Gemini Live camera help (Google YouTube)](https://www.youtube.com/watch?v=atAk9c54sAw)
