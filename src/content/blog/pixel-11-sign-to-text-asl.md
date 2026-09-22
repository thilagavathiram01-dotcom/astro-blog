---
title: "How to Use Pixel 11 Sign-to-Text for ASL in Gboard"
description: "Set up Pixel 11 sign-to-text: add the Gboard toolbar button, grant camera access, and translate ASL to English in any app or Live Transcribe."
pubDate: 2026-09-22T11:00:00
heroImage: "https://images.unsplash.com/photo-1512947333899-60d450adb2d3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["pixel", "android", "tutorials", "how-to", "google"]
noindex: false
---

Pixel 11 can turn American Sign Language into English text while you type. Google calls the feature **sign-to-text**. It runs inside Gboard and Live Transcribe, so you can sign into Messages, Search, Docs, or Gemini instead of hunting for keys.

The model behind it is **SL2T**, announced by Google DeepMind on 12 August 2026 and documented for Pixel owners in official Help. This guide follows those pages only: what you need, how to pin the toolbar button, how to frame the camera, and what leaves the phone.

## What sign-to-text is (and is not)

Sign-to-text is machine translation, not a word-for-word gloss of each handshape. DeepMind is explicit: sign languages are independent languages with their own grammar. The model watches hands, arms, torso, head, and face together, then writes English sentences.

At launch it supports **ASL to English** on **Pixel 11** devices. Gboard language must be **en-US or en-CA**. Google says more devices and more sign languages will follow, at no extra cost.

It is not a substitute for an interpreter in a medical, legal, or safety-critical setting. Official testers and the AISLAC impact report treat it as an early product. Review the on-screen output before you send it.

## What you need before the first session

Google’s Pixel Phone Help lists two hard requirements:

1. A **Pixel 11** phone (including Pro, Pro XL, and Pro Fold).
2. The latest **Gboard**, with keyboard language set to English (United States) or English (Canada).

You also need a working front camera and a network connection. Translation runs on Google servers after an on-device pose tracker extracts landmarks. Offline use is not described in the Help article.

On Pixel 11 Pro Fold, translations can appear on the cover display so the other person can read while you sign toward the inner camera. Regular Pixel 11 models show text in the field you already focused.



![Person holding a smartphone at chest height with both hands visible](https://images.unsplash.com/photo-1556656793-85edba7a875f?auto=format&fit=crop&w=800&q=80)



## Pin sign-to-text on the Gboard toolbar

Do this once so you are not digging through the overflow menu in a live conversation.

1. Open any text field so Gboard appears.
2. On the toolbar, tap **Edit** (or open the Gboard menu).
3. Touch and hold **Sign-to-text**, then drag it onto the toolbar.
4. Tap the new **Sign-to-text** button.
5. Read the onboarding screen. Google includes short videos on how to frame face, upper body, and hands.
6. Grant **camera** permission when Android asks. Without it, the feature will not start.

If the button is missing, update Gboard from Play Store and confirm the keyboard language is en-US or en-CA. The Help article does not list a toggle under Settings for older Pixels.

## Sign into any app that uses Gboard

1. Open Messages, Gmail, Keep, Chrome, Gemini, or any other app that accepts keyboard input.
2. Tap the text field and confirm Gboard is the active keyboard.
3. Tap **Sign-to-text**. A camera preview opens.
4. Hold the phone so the front camera sees your **hands, upper body, and face**. Landmarks overlay those regions when tracking is healthy.
5. Sign. English words stream into the text field.
6. When you finish a phrase, move your hands out of the camera view. That is the official end-of-utterance signal.
7. Tap **Sign-to-text** again to return to the regular keys.

Google’s tips from the same Help page:

- Pick a suggested word from the toolbar while you sign.
- Tap **Minimize** if you need more of the app on screen.
- Switch to the standard keyboard at any time to fix a word by typing.
- Use Gboard writing tools to add punctuation or tidy a sentence after translation.

You can mix signing and typing in the same draft. The cursor stays where you left it.

## Use Live Transcribe for face-to-face talk

Gboard covers anything you would type. Live Transcribe covers the other half of a spoken conversation: you see the other person’s speech as text, then sign a reply instead of pecking a reply box.

Google’s examples are everyday: ordering coffee, talking with a colleague, a short exchange when no interpreter is present. Open Live Transcribe from Accessibility settings or your shortcut, start the session, then use sign-to-text for your side of the dialogue.

Pair this with other Pixel accessibility tools when you need them. If you already set up Guided vision or Motion Assist from the [September 2026 Android Drop](/blog/android-september-2026-drop-guide/), keep those shortcuts on the same Accessibility page so you are not hunting during a conversation.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/c84y9gAY90c"
    title="Made by Google '26"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

The official Made by Google 2026 stream includes the on-stage sign-to-text demo with actor Daniel Durant. Annie Jean-Baptiste introduces the feature as early, built with the Deaf and hard of hearing community, and limited to ASL at launch.

## How privacy is supposed to work

Two official sources agree on the pipeline.

On the phone, **MediaPipe Holistic** tracks pose landmarks. DeepMind says only those geometric coordinates go to the server. The camera frames are discarded.

Pixel Help adds: coordinates are a 2D representation of key points, not video. Inputs are not saved, shared, or used to train models. Pose coordinates, videos, and translations are not stored on the device after the session.

If Gboard shows a system health warning, close other camera-heavy apps and try again. That notice is in the official privacy section.

Do not assume “on-device only.” Landmark extraction is on-device. Translation is on Google servers. You still need a network path.



![Close-up of a laptop and phone on a desk during a video call](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)



## Framing, one-handed signing, and left-handed users

Poor framing is the most common failure. The camera needs face plus both arms when you use two-handed signs. Sit or stand with light on your face, not behind you. Keep the phone high enough that your torso is in view.

DeepMind trained for two practical cases that matter on a phone:

- **One-handed signing**, because the other hand often holds the device.
- **Left-handed signers**, about 10 percent of users in their notes.

The Pixel blog also states that one-handed and two-handed signing are both supported. If tracking boxes jump off your hands, pause, re-center, and start the phrase again instead of signing faster.

When a word is wrong, prefer the suggestion strip or a typed edit. Rapid fingerspelling and rare signs are the error types DeepMind lists on the FLEURS-ASL examples. Do not keep re-signing the same token if the model already committed a nearby English word; correct it on the keyboard.

## What to try first

Use short, real tasks so you learn the end-of-sign gesture.

- Draft a one-line text in Messages.
- Search Chrome for a place name.
- Prompt Gemini with a question you would otherwise type.
- Answer a colleague in Live Transcribe, then read the English line before you send it.

If you use Gboard Rambler for spoken multilingual dictation on the same phone, keep the two modes separate. Rambler is speech-to-polished-text. Sign-to-text is ASL-to-English. They share a toolbar, not a pipeline.

## Limits Google already published

Stay inside the official envelope:

- Pixel 11 family only at launch.
- ASL to English only.
- Gboard en-US or en-CA.
- Camera permission required.
- Network required for the translation step.
- Not a certified interpreter, medical device, or courtroom tool.

DeepMind scored SL2T at **70 BLEURT** zero-shot on FLEURS-ASL (sd-test) and trained on more than **100,000 hours** of data across more than **50 sign languages**, with about a quarter of that data in ASL. Those figures come from the 12 August research post. They describe model quality in a benchmark, not guaranteed accuracy on your kitchen lighting.

Google established the AI Sign Language Advisory Committee (AISLAC) and published a joint impact report with community groups for the 1.0 release. Read that report if you are evaluating the feature for an organization.

## Conclusion

Sign-to-text puts ASL next to voice typing on Pixel 11. Pin the Gboard button, grant the camera, frame face and hands, and treat the streamed English as a first draft you can edit.

Start with Messages and Live Transcribe. Those two surfaces match how Google shipped the feature: dictation anywhere you type, plus a reply path in a live spoken conversation. When more sign languages arrive, the same toolbar button is the place to look.

## Sources

- [Here's how to use sign-to-text translation on Pixel 11 — Google blog](https://blog.google/products-and-platforms/devices/pixel/american-sign-language-sign-to-text-pixel-11/)
- [Putting sign language AI into users’ hands — Google DeepMind](https://deepmind.google/blog/putting-sign-language-ai-into-users-hands/)
- [Use sign-to-text (Pixel Phone Help)](https://support.google.com/pixelphone/answer/17468449)
- [Live Transcribe (Android Accessibility Help)](https://support.google.com/accessibility/android/answer/9158064)
- [Made by Google ’26 (YouTube)](https://www.youtube.com/watch?v=c84y9gAY90c)
