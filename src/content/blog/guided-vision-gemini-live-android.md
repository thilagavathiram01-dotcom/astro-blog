---
title: "How to Use Guided Vision in Gemini Live on Android"
description: "Turn on Guided Vision in Gemini Live, add an accessibility shortcut, and get spoken help reading labels and finding objects."
pubDate: 2026-09-24T11:30:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "gemini", "tutorials", "how-to"]
noindex: false
---

Google’s September 2026 Android Drop added Guided Vision to Gemini Live. The feature shares your camera during a live voice session and talks you through what is in front of the lens. It is built with blind and low-vision testers, but anyone who needs spoken labels can use it.

This guide follows Google’s official help pages and the September Android Drop post. Availability is rolling out. If a toggle is missing, wait for the Gemini app update rather than assuming a broken install.

## What Guided Vision actually does

Guided Vision is not a separate app. It is a camera mode inside Gemini Live. You point the phone, talk, and Gemini answers with audio. Official examples include reading fine print on a food label, ordering from a dim restaurant menu, and identifying household objects.

If the shot is off-center, Gemini gives voice cues to reframe, pan, or center the object. That framing help is the difference from a one-shot photo question in a normal Gemini chat.

Google lists four practical jobs:

- Read or translate text on labels, signs, menus, and appliance displays.
- Identify objects and describe where they sit, such as a spice jar in a cabinet.
- Describe color, shape, and pattern so you can match clothes or sort items.
- Describe a room or search for something that dropped, such as an earbud.

Google is explicit about the limits. Guided Vision can be wrong. It is not a medical device, mobility aid, or travel guide. Do not use it for navigation or obstacle detection.



![Person holding an Android phone and pointing the camera at a kitchen counter](https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80)



## Requirements before you start

Google says Guided Vision is coming to phones on **Android 9 or later** in countries where Gemini is available. The Gemini mobile app must be installed from Play Store. Live camera sharing also needs a device with enough RAM for Gemini Live; Google’s older Live camera notes list Android 10+ and 2 GB of RAM for basic camera share.

Update these packages first:

1. Gemini (Google app / Gemini app).
2. Android Accessibility Suite if you use TalkBack.
3. Google Play system updates under Settings.

The official help article states the feature is rolling out slowly. A missing “Use Guided Vision in Live” switch usually means your account or region is not in the current wave.

If you already set up other September Drop tools, keep this next to the Find Hub memory flow in our [September 2026 Android Drop guide](/blog/android-september-2026-drop-guide/). Guided Vision answers “what is in front of me right now.” Find Hub remembered items answer “where did I put this last week.”

## Turn Guided Vision on in the Gemini app

Google’s support steps:

1. Open the Gemini app on Android.
2. Tap your profile picture or initial at the top, then open **Settings**.
3. Turn **Use Guided Vision in Live** on.
4. When the on-screen notification appears, tap **Start Live** if you want a session immediately.

After the switch is on, start any Live chat and share the camera. That combination starts Guided Vision. To stop, tap **End Live session**.

A Live session without the camera is just voice. Share the camera or the feature has nothing to describe.

## Add a one-tap accessibility shortcut

Hunting through Settings every time defeats the point. Google lets you bind Guided Vision to Android’s accessibility shortcuts.

1. Open the system **Settings** app.
2. Tap **Accessibility**.
3. Under Vision assistance, tap **Guided Vision**.
4. Turn **Guided vision shortcut** on.
5. Tap the shortcut row and pick one trigger:
   - **Accessibility button** (floating button).
   - **Accessibility gesture** (two-finger swipe up from the bottom).
   - **Volume keys** (press and hold both volume keys).

Use the volume-key hold if you already rely on hardware shortcuts and do not want another overlay. Use the floating button if you share the phone and want a visible control.

Details on how Android accessibility shortcuts work sit in [Google’s shortcut help article](https://support.google.com/accessibility/android/answer/7650693).

### Start from TalkBack

If TalkBack is on:

1. Update Android Accessibility Suite from Play Store.
2. With TalkBack running, tap the screen with three fingers to open the TalkBack menu.
3. Choose **Guided Vision**.

That path starts Live with the camera so you do not have to hunt icons after TalkBack is speaking.



![Close-up of a smartphone camera module ready to scan nearby objects](https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80)



## How to run a useful session

Start Live, share the camera, then ask a specific question. Vague prompts waste the first few seconds of audio.

Try prompts that match Google’s own examples:

- “Read the ingredients on this label, starting at the top.”
- “Is this shirt a similar color to these pants?”
- “Where is the pepper in this spice rack?”
- “Describe the layout of this room from left to right.”
- “Translate the heading on this menu.”

Hold the phone steady. If Gemini asks you to pan or center, move slowly and wait for the next cue. Fast sweeps give it a blurry frame and a weaker description.

Use good light when you can. Google highlights low-lit menus as a supported case, but contrast still helps text reading. For tiny print, move closer until Gemini confirms it can see the block of text.

End the session when you are done. Live keeps the microphone and camera hot until you tap End.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/XdwcRT2ZhiY"
    title="See what’s new in our September Android Drop"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Privacy and safety habits

Camera share in Live sends what the lens sees to Gemini for that session. Treat it like any other Live camera or screen-share feature.

- Do not point the camera at documents you would not upload to a chat: badges, full card numbers, medical records.
- Stop the session before you hand the phone to someone else.
- Remember Google’s warning: do not treat spoken directions as a substitute for a cane, guide, or safe-travel practice.
- If a description sounds wrong, ask again from a different angle instead of acting on the first pass.

Guided Vision is a description aid. You stay responsible for movement and safety.

## Troubleshooting when the switch is missing

**No Guided Vision row in Gemini Settings.** Update Gemini, sign out and back in, and confirm Gemini is available in your country. Google’s Gemini availability list is the source of truth for regions.

**No Guided Vision row under Accessibility.** The system page arrives with the same rollout. After the Gemini toggle appears, check Settings again.

**Live starts but never describes the scene.** Confirm the camera is actually shared inside the Live session. Voice-only Live will not narrate the room.

**TalkBack menu has no Guided Vision item.** Update Android Accessibility Suite, then reopen the three-finger TalkBack menu.

**Descriptions are late or generic.** Ask for a smaller target (“read the bold line under Nutrition Facts”) and hold still. Network quality affects Live audio.

## Tips that save time

Put the shortcut on volume keys if you already use hardware accessibility controls. That avoids a floating button on the home screen.

Name the object in the first sentence. “Find the blue bottle on the second shelf” beats “what am I looking at.”

Use Guided Vision for short tasks. For a stored location you already know, log it in Find Hub with Gemini instead of scanning the house every time.

If you only need a still photo explained, a regular Gemini image question may be enough. Reserve Live for moments when you need back-and-forth framing help.

## Conclusion

Guided Vision is the September Drop feature that matters most if you want spoken help from the camera, not another widget. Turn the Gemini setting on, bind a shortcut, and practice on a cereal box or a shirt before you need it in a restaurant.

Keep Google’s limits in mind. The model can misread text and it will not replace navigation tools. Used for labels, colors, and “where did this object go on this table,” it is a practical Live camera mode rather than a headline demo.

## Sources

- [Get audio descriptions with Guided Vision in Gemini Live (Android Accessibility Help)](https://support.google.com/accessibility/android/answer/18365638)
- [September Android Drop (Google blog)](https://blog.google/products-and-platforms/platforms/android/android-drop-september-2026/)
- [Talk naturally with Gemini Live on Android](https://support.google.com/gemini/answer/15274899)
- [Android accessibility shortcuts](https://support.google.com/accessibility/android/answer/7650693)
- [Gemini app availability](https://support.google.com/gemini/answer/14579026)
- [Official September Android Drop video (Android on YouTube)](https://www.youtube.com/watch?v=XdwcRT2ZhiY)
