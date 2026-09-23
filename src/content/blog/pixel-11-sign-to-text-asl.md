---
title: "How to Use Pixel 11 Sign-to-Text for ASL Messages"
description: "Set up Gboard sign-to-text on Pixel 11 to translate American Sign Language into English in Messages, Search, and Gemini. Camera setup, privacy, and edits."
pubDate: 2026-09-23T11:30:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["pixel", "android", "tutorials", "how-to", "google", "ai"]
noindex: false
---

Pixel 11 can turn American Sign Language into written English while you type. The tool lives in Gboard. You sign to the front camera. Words land in the text field as you go.

Google built the feature with Deaf and hard-of-hearing testers. It uses a multilingual sign language-to-text (SL2T) model from Google DeepMind. The first language is ASL. More sign languages are planned.

This guide follows Google’s official Pixel Help steps: who can use it, how to add the toolbar button, how to frame the camera, and what the phone does with your video.

## Who can use sign-to-text

Google lists two hard requirements:

- A **Google Pixel 11** phone (the Pixel 11 series, including Pro models that shipped with the feature)
- The latest **Gboard** build, with the keyboard language set to **English (US)** or **English (Canada)**

It works in any app that accepts Gboard input. Official examples include Messages, notes, web search, and Gemini prompts. Face-to-face conversation is still a Live Transcribe job, not this keyboard tool.

If you are on an older Pixel, another Android brand, or a work-managed profile that blocks Gboard camera access, the Sign-to-text control will not appear.



![Person using a smartphone at a desk to communicate](https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80)



## Add Sign-to-text to the Gboard toolbar

Gboard must be allowed to use the camera. Without that permission the feature never starts.

1. Open any text field so Gboard appears.
2. On the Gboard toolbar, tap **Sign-to-text**. If you do not see it, tap the toolbar menu, then **Sign-to-text**.
3. To pin it: tap **Edit**, touch and hold **Sign-to-text**, and drag it onto the toolbar.
4. Read the onboarding screen. Google includes short clips on how to place the phone so the front camera sees your face, upper body, and both hands.
5. Grant camera permission when Android asks.

Pin the button if you will use it daily. Hunting through the overflow menu with one hand already raised to sign is a poor start.

## Sign a message

1. Open the app you want to write in. Confirm Gboard is the active keyboard.
2. Tap **Sign-to-text**. The front camera and a preview window open.
3. Hold the phone so the camera sees your **hands, upper body, and face**. Lighting matters. Backlight from a window washes out handshapes.
4. Sign. Overlay landmarks appear on face, hands, and torso. English words stream into the text field.
5. When you finish a phrase, move your hands out of the camera frame. That is the official “I’m done” signal.
6. Tap **Sign-to-text** again to return to the regular keys.

Google says the model supports one-handed and two-handed signing. Facial expression is part of the input, not decoration. ASL grammar rides on face and body, so crop the camera at chest height, not only at the hands.

On Pixel 11 foldables, Google notes that translations can appear on the outer display while you sign. Check that path if you prefer the cover screen as a readout for the other person.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/VC_Ft0stjCM"
    title="Google Pixel 11 event in 8 minutes"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Edit without starting over

You do not have to resign a whole sentence when one word is wrong.

- Tap the standard keyboard key and fix spelling by hand.
- Pick an alternate word from Gboard’s suggestion strip while you still have the camera open.
- Use Gboard writing tools to add punctuation and tighten the sentence after the stream stops.

You can mix signing and typing in the same draft. The cursor stays where you left it.

If a health warning appears, Gboard asks you to close other camera apps. Sign-to-text needs a clean camera session.



![Two people collaborating with phones and a laptop](https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80)



## What Google does with the camera feed

Pixel Help is specific about privacy. Read it before you grant camera access on a shared phone.

- The feature watches face, hands, and upper body in real time.
- It sends a **2D set of key points**, not the video file, to Google servers for translation.
- Pose coordinates, video, and translations are **not stored**.
- Inputs are not saved, shared, or used to train models, according to the same help article.

That is a server-side translation path, not an offline Nano-only path. You need a network connection for the live stream to work as documented.

Treat the preview window like any camera UI: do not sign in a space you would not want on a live view, even if the raw video is not uploaded.

## Where it helps, and where it does not

**Good fits**

- Composing a text or email in ASL instead of typing English as a second language
- Searching the web or prompting Gemini without switching input modes
- Moments when an interpreter is not in the room, which is how Google framed the Made by Google demo with actor Daniel Durant

**Not a substitute**

- Live, two-way spoken conversation in a cafe. Use [Live Transcribe](https://support.google.com/accessibility/android/answer/9158064) for that.
- Navigation or safety-critical signing in motion. Framing breaks as soon as the phone moves.
- Other sign languages today. Google says more languages will follow. Until then, only ASL is supported.

Google still calls the product early. Expect missed signs, odd word order, and the need to pick from the suggestion strip. Proofread before you send.

If you already use other 2026 Android comfort tools, pair this keyboard habit with the rest of your setup. Our [September 2026 Android Drop guide](/blog/android-september-2026-drop-guide/) covers Find Hub remembered items, Motion Assist, and Guided vision in Gemini Live.

## Quick checks when it fails

**No Sign-to-text button.** Confirm you are on Pixel 11, Gboard is updated, and the keyboard language is en-US or en-CA.

**Camera never opens.** Revoke and re-grant Gboard camera permission in Settings → Apps → Gboard → Permissions.

**Landmarks jitter or words stall.** Raise the phone, add light on your face, and keep shoulders in frame. Close other apps that hold the camera.

**Wrong language in the box.** Switch Gboard back to English (US) or English (Canada). Other keyboard languages are not in the prerequisite list.

**You need a spoken reply for someone in the room.** Sign-to-text writes. It does not speak. Use Live Transcribe or a separate text-to-speech step.

## Conclusion

Sign-to-text is a Gboard camera mode on Pixel 11, not a new system app. Pin the toolbar button, give the front camera a chest-up frame, sign, then drop your hands to stop the stream. Edit with the suggestion strip and the regular keys.

Keep the official limits in view. It is ASL to English text, it needs the network, and it is not Live Transcribe. Used that way, it is a practical way to write in the language you already use.

## Sources

- [How to use sign-to-text translation on Pixel 11](https://blog.google/products-and-platforms/devices/pixel/american-sign-language-sign-to-text-pixel-11/) — Google Blog, 21 August 2026
- [Use sign-to-text to translate ASL into English text](https://support.google.com/pixelphone/answer/17468449) — Pixel Phone Help
- [7 Pixel 11 updates you should know about](https://blog.google/products-and-platforms/devices/pixel/pixel-11-features/) — Google Blog, 12 August 2026
- [Google Pixel 11 event in 8 minutes](https://www.youtube.com/watch?v=VC_Ft0stjCM) — The Verge
