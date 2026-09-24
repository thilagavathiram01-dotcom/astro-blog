---
title: "How to Use Guided Vision in Gemini Live on Android"
description: "Turn on Guided Vision in Gemini Live to hear camera descriptions, set accessibility shortcuts, and know official limits."
pubDate: 2026-09-20T14:00:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "gemini", "tutorials", "how-to", "google"]
noindex: false
---

Google’s September 2026 Android Drop added Guided Vision to Gemini Live: spoken help while you point the camera at the world around you. It is built with blind and low-vision communities, but anyone who needs a label read aloud or an object identified can use the same flow.

This guide follows Google’s official help pages and the Android Drop post. Availability is still rolling out, so treat missing toggles as a staged launch, not a broken phone.

## What Guided Vision actually does

Guided Vision is not a separate app. It is a Gemini Live mode that uses your camera and returns audio descriptions in near real time.

Google lists four practical jobs:

- Read or translate text on labels, signs, menus, and appliance displays.
- Identify objects and help you find where they sit, such as a spice jar in a cabinet.
- Describe color, shape, and pattern so you can compare items.
- Summarize a room or help locate something that dropped nearby.

If the shot is off-center, Gemini can tell you to reframe, pan, or center the object. That framing loop is the part that is new compared with a one-shot photo question.

Google is explicit about what it is not. Guided Vision can make mistakes. It is not a medical device, a mobility aid, or a substitute for a travel guide. Do not use it for navigation or obstacle detection.



![Person holding an Android phone and pointing the camera at nearby objects](https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=800&q=80)



## Requirements before you hunt for the switch

From Google’s September Android Drop:

- Phones running **Android 9 or later**
- A country where the **Gemini app** is available
- The **Gemini** mobile app, not only the web chat

Google’s accessibility help article adds that the feature **rolls out slowly**. You may not see the setting on day one even if your OS version matches.

Also update:

1. Gemini from Google Play
2. TalkBack if you use a screen reader (`com.google.android.marvin.talkback`)
3. The system Accessibility menus so Guided Vision can appear under Vision assistance

If Gemini Live itself is new to you, start a normal Live session first so camera and microphone permissions are already granted. Google’s Gemini Live help covers the base flow: open Gemini, tap Live (or swipe left), then share the camera.

For the rest of the September Drop, including Find Hub remembered items and Motion Assist, see the overview in [How to Use Android’s September 2026 Drop](/blog/android-september-2026-drop-guide/).

## Turn Guided Vision on in the Gemini app

Google’s steps:

1. Open the **Gemini** app on Android.
2. Tap your profile picture or initial, then **Settings**.
3. Turn **Use Guided Vision in Live** on.

When you enable it, an on-screen notification can offer **Start Live**. That shortcut opens a Live chat with the camera ready, so you do not hunt for the camera chip after the conversation starts.

Once the setting is on:

1. Go Live.
2. Share the device camera.
3. Ask out loud. Examples that match Google’s own list: “Read this label,” “Where is the pepper?,” “Does this shirt match these pants?,” “Describe this room.”
4. End the session with **End Live session**.

If the toggle is missing, wait for the app update rather than resetting Gemini. Early testers have reported the same staged rollout Google already documents.

## Add a hardware or accessibility shortcut

Opening Gemini, then Settings, then Live is too many steps when you already have both hands on a jar or a mailbox. Google exposes Guided Vision in Android’s accessibility shortcut system.

1. Open **Settings**.
2. Tap **Accessibility**.
3. Under **Vision assistance**, tap **Guided Vision**.
4. Confirm **Guided vision shortcut** is on.
5. Tap **Guided vision shortcut** and pick one trigger:
   - **Accessibility button** — floating button
   - **Accessibility gesture** — swipe up from the bottom with two fingers
   - **Volume keys** — press and hold both volume keys

The official accessibility shortcuts article is the same surface used for TalkBack, Select to Speak, and other vision tools, so you can keep Guided Vision next to the shortcut you already use.

### Start from TalkBack

If TalkBack is on:

1. Update TalkBack from Play Store.
2. With TalkBack enabled, tap the screen with **three fingers** to open the TalkBack menu.
3. Choose **Guided Vision**.

That path starts Gemini Live with the camera, which is the combination Guided Vision needs. If Guided Vision is absent from the TalkBack menu, TalkBack or Gemini has not received the matching update yet.



![Close-up of hands adjusting an Android phone camera for a live description](https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80)



## Prompts that match what Google designed

Keep requests short and tied to the camera frame.

**Text**

- “Read the ingredients on this package.”
- “Translate this menu section.”
- “What does this oven display say?”

**Find and identify**

- “Help me find the pepper in this spice rack.”
- “What object is in the center of the frame?”

**Describe**

- “What color is this shirt, and does it match these pants?”
- “Describe the pattern on this fabric.”

**Space**

- “Describe the layout of this room from left to right.”
- “I dropped an earbud. What is on the floor in front of me?”

If Gemini asks you to pan or center, move the phone slowly and wait for the next spoken cue. Rapid sweeping makes the model chase a moving frame.

Use a second confirmation for anything that matters: medication labels, allergens, prices, or locking instructions. Guided Vision is a description aid, not a verified reader.

## Limits you should treat as hard rules

Copy these from Google’s help page and keep them in mind:

- The model can be wrong about objects, text, and position.
- It is not a medical device.
- It is not a mobility aid.
- It is not a substitute for a safe-travel guide.
- Do not use it for navigation or obstacle detection.
- You remain responsible for health and safety.

That last line is why you should not walk while treating the stream as a white-cane replacement. Stop, frame, listen, then move.

Camera sharing also means Gemini can see whatever you point at. Avoid documents, faces, or screens you do not intend to share. End Live when you are done so the camera session does not linger.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/1LYsbVfwgzA"
    title="September 2026 Android Feature Drop: EVERY new feature!"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## How this fits the rest of Gemini on Android

Guided Vision sits next to other camera and Live work Google has shipped through 2026. Gemini Live already supported camera and screen share on many Android phones. The September Drop adds spoken framing help and a first-class accessibility entry.

Related tools on this site:

- [Find Hub remembered items with Gemini](/blog/find-hub-remembered-gemini/) for unlabeled objects you store on purpose
- [Android 17 Motion Assist](/blog/android-17-motion-assist/) if you also picked up that passenger overlay from the same drop

If you build voice agents rather than use the consumer app, Gemini 3.8 Live on the Live API is a different product surface. Guided Vision here is the on-device Gemini app path, not an API flag you flip in AI Studio.

## Quick setup checklist

1. Update Gemini and TalkBack.
2. Enable **Use Guided Vision in Live** in Gemini Settings.
3. Grant camera and microphone access on the first Live start.
4. Assign the Accessibility shortcut you will actually reach one-handed.
5. Practice on a cereal box or a room you know, then try a dim menu or a small label.
6. End Live when finished.

Ten minutes is enough. The useful part is muscle memory: shortcut, camera, short question, spoken reframe, end session.

## Conclusion

Guided Vision is a narrow, useful feature. Point the camera, talk, and get a description plus framing help. Turn it on in Gemini Settings, pin a shortcut, and stay inside Google’s published limits.

If the toggle has not arrived, keep Gemini updated and check Accessibility → Vision assistance after each app update. When it lands, it is one of the more concrete accessibility wins in the September 2026 Android Drop.

## Sources

- [September Android Drop (official Google blog)](https://blog.google/products-and-platforms/platforms/android/android-drop-september-2026/)
- [Get audio descriptions with Guided Vision in Gemini Live (Android Accessibility Help)](https://support.google.com/accessibility/android/answer/18365638)
- [Talk naturally with Gemini Live (Gemini Apps Help)](https://support.google.com/gemini/answer/15274899)
- [Android accessibility shortcuts](https://support.google.com/accessibility/android/answer/7650693)
- [Gemini app availability](https://support.google.com/gemini/answer/14579026)
