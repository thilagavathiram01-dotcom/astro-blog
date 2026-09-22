---
title: "How to Use Pixel 11 Sign-to-Text for ASL"
description: "Set up Pixel 11 sign-to-text in Gboard to translate American Sign Language into English in any app."
pubDate: 2026-09-22T14:00:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["pixel", "android", "how-to", "ai", "google"]
noindex: false
---

Pixel 11 can turn American Sign Language into written English as you sign. Google built the feature with Deaf testers and ships it in Gboard and Live Transcribe at no extra cost.

You no longer have to type English if ASL is your first language. Hold the phone so the front camera sees your face, torso, and hands. English words stream into the text field.

This guide follows Google’s official Pixel Help steps and the DeepMind write-up of the SL2T model. It covers setup, signing technique, privacy, Live Transcribe, and limits you should know before you rely on it.

## What sign-to-text actually does

Sign-to-text is a Gboard input method on Pixel 11. It is not a word-for-word finger-spelling reader. ASL is its own language with grammar that lives in handshape, location, movement, and the face.

Google DeepMind’s sign-language-to-text model (SL2T) translates those movements into English sentences. The company says the model is trained on more than 100,000 hours of data across more than 50 sign languages, with about a quarter of that data in ASL.

You can use it anywhere Gboard types: Messages, Docs, Search, Keep, and Gemini. Live Transcribe uses the same model for in-person chats so you can sign a reply instead of passing a keyboard back and forth.

Pixel 11 is required today. Gboard must be current, and the keyboard language must be English (United States) or English (Canada).



![Person holding a smartphone with both hands in natural light](https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=800&q=80)



## Set up sign-to-text on Pixel 11

Grant the camera permission first. Without it, the toolbar item will not start a session.

1. Open any text field so Gboard appears.
2. On the Gboard toolbar, tap **Sign-to-text**. If you do not see it, tap the menu, then **Edit**, and drag **Sign-to-text** onto the toolbar.
3. Read the onboarding screens. Google includes short clips that show how far to hold the phone and how much of your upper body should stay in frame.
4. Allow camera access when Android asks.

Keep Gboard set as the default keyboard for the apps you use most. If another keyboard is active, the Sign-to-text control will not appear.

After onboarding, the same toolbar button opens a live preview. Landmarks overlay your face, hands, and shoulders so you can see what the on-device tracker is using.

## Sign a message, search, or Gemini prompt

Open Messages, Search, or Gemini. Tap **Sign-to-text** on the toolbar.

Hold the phone in landscape or portrait so the front camera sees your signing space. Google designed the model for one-handed and two-handed signing, including the common case where you hold the phone in one hand.

Start signing. English words appear in the field as you go. When you finish a thought, move your hands out of the camera view. That pause tells Gboard the utterance is complete.

Tap **Sign-to-text** again to return to the regular keys. You can mix modes: sign a clause, tap a suggestion, then type a name or URL.

Google’s testers reported that signing in ASL felt faster and more natural than composing English on a tiny keyboard. Treat that as a starting point, then edit like any other draft.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/G9kPt-zNgdk"
    title="Pixel 11 phones will recognize ASL"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Edit the translation without starting over

The first pass will not always match what you meant. Rare signs, fast fingerspelling, and classifier constructions are known weak spots in SL2T 1.0.

Use three edit paths:

- Tap the standard keyboard and change a word by hand.
- Pick an alternate from Gboard’s suggestion strip while you sign.
- Run Gboard writing tools to add punctuation or tighten the sentence.

You do not lose the draft when you switch from camera to keys. That mix is the practical workflow: sign the bulk of the thought, then clean proper nouns.

If you also use Gemini-powered voice cleanup on Pixel, pair the two carefully. Sign-to-text is for ASL. Voice tools such as [Rambler on Pixel 11](/blog/gboard-rambler-pixel-11/) are for spoken English. Pick one input per message so the keyboard does not fight itself.



![Close-up of hands using a smartphone keyboard](https://images.unsplash.com/photo-1581291518857-4d3d037c3278?auto=format&fit=crop&w=800&q=80)



## Use Live Transcribe for face-to-face talks

Gboard covers apps. Live Transcribe covers the room.

Open Live Transcribe when you order coffee, sit in a meeting, or talk with someone who does not sign. The hearing person’s speech appears as text. You reply by signing into the same session instead of typing every line.

Google Product Manager Sharlene Yuan notes that sign-to-text works in Live Transcribe and across the device with Gboard. Keep lighting even and avoid putting the phone flat on a table if your face drops out of frame.

Do not treat this as a medical device or a substitute for an interpreter in legal, medical, or safety-critical settings. It is an input method with known error modes.

## How privacy works

Google’s Pixel Help page is explicit. The camera feed does not go to the server as video.

An on-device model (MediaPipe Holistic) extracts 2D pose landmarks for the face, hands, and upper body. Only those coordinates travel to Google’s servers for translation. The raw video is discarded. Pose data, video, and translations are not stored, shared, or used to train models, according to Google.

That design is the reason landmarks appear in the preview. You are watching the same skeleton the cloud model receives.

If Gboard shows a system health warning, close other camera-heavy apps and try again. The keyboard will ask you to free resources rather than keep a half-working session.

## Limits you should plan for

SL2T scores 70 BLEURT zero-shot on the FLEURS-ASL sd-test set, which DeepMind calls higher than prior published numbers. Benchmarks are not a promise that every sign lands.

DeepMind lists remaining errors: rare signs, rapid fingerspelling, passive constructions, some classifier depictions, and tense when context is thin. Left-handed signers were a focus in training; one-handed signing while holding a phone was another.

The first language pair is ASL to English only. More sign languages and more devices are planned. Until then, set Gboard to en-US or en-CA and stay on Pixel 11 hardware.

Give the model a stable frame. Shake, harsh backlight, and cropped hands will drop quality faster than any model update can fix.

## Tips that improve first-pass quality

Hold the phone at chest height so the camera sees shoulders, not just fingertips.

Sign at a conversational pace. Rushing fingerspelling is the failure mode DeepMind already flagged.

Finish a sentence, drop your hands, then check the text before you send.

Use writing tools for punctuation after the translation lands. Do not expect the stream to insert every comma.

Add Sign-to-text to the Gboard toolbar so you are not hunting through the menu in a live chat.

## Conclusion

Pixel 11 sign-to-text puts ASL on the same keyboard path hearing users already have for speech. Setup is a toolbar pin plus a camera permission. Daily use is hold, sign, drop your hands, then edit.

Start in Messages or Notes, not in a high-stakes conversation. Learn how your lighting and one-handed grip look in the landmark preview. When the draft is close, polish it with Gboard’s ordinary keys.

Google says more languages and devices are coming. Until they ship, Pixel 11 plus current Gboard is the supported path.

## Sources

- [Use sign-to-text on Pixel](https://support.google.com/pixelphone/answer/17468449?hl=en) — Google Pixel Help
- [How to use sign-to-text translation on Pixel 11](https://blog.google/products-and-platforms/devices/pixel/american-sign-language-sign-to-text-pixel-11/) — blog.google
- [Putting sign language AI into users’ hands](https://deepmind.google/blog/putting-sign-language-ai-into-users-hands/) — Google DeepMind
- [7 Pixel 11 updates you should know about](https://blog.google/products-and-platforms/devices/pixel/pixel-11-features/) — blog.google
