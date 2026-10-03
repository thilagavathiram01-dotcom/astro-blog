---
title: "How to Use Pixel 11 Sign-to-Text for ASL in Gboard"
description: "Set up Pixel 11 sign-to-text in Gboard to turn American Sign Language into English text in Messages, notes, Search, and Gemini."
pubDate: 2026-10-03T14:00:00
heroImage: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["pixel", "android", "tutorials", "how-to", "google"]
noindex: false
---

Typing English is a workaround for many people whose first language is American Sign Language. Pixel 11 treats signing as input. Sign-to-text in Gboard watches the front camera, reads ASL, and streams English into the field you already have open.

Google DeepMind and Android built the feature with Deaf partners and ship it at no extra cost on Pixel 11. It is not a general Android keyboard trick. Pixel Help requires a Pixel 11, the latest Gboard, and a keyboard language of English (United States) or English (Canada).

## What sign-to-text actually does

Sign-to-text is powered by SL2T, Google DeepMind’s sign-language-to-text model. The August 12, 2026 research post says SL2T drives dictation in Gboard and Live Transcribe on Pixel 11, starting with ASL to English. More devices are planned, and other sign languages are planned after ASL.

The model does not treat signs as English words pasted onto hands. DeepMind describes sign languages as separate languages with their own grammar. SL2T looks at hand shape, face, and upper-body movement together, then translates that sequence into English text.

Google’s product note from Sharlene Yuan, product manager for Android Accessibility, says the Pixel 11 feature supports one-handed and two-handed signing. That matters when one hand is holding the phone. DeepMind also says the team tuned the model for left-handed signers, about 10 percent of signers in their framing.

You can sign anywhere Gboard can type: Google Messages, notes, web search, or a Gemini prompt. Live Transcribe is the path Google calls out for in-person chats, so you can sign a reply instead of typing one.

![Person using a laptop during a focused work session](https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=80)

## Check the phone before you start

Confirm three things or the button will not appear, or it will fail after you tap it.

1. The phone is a Pixel 11 series device. Pixel Help does not list older Pixels.
2. Gboard is updated from the Play Store and is the selected keyboard.
3. The keyboard language is en-US or en-CA.

Camera permission is required. If Gboard cannot use the camera, sign-to-text will not run. Grant the permission when the preview opens, or set it under Settings, Apps, Gboard, Permissions.

A system-health warning can also block the session. Pixel Help says Gboard shows a short notice and asks you to close other apps if the phone cannot keep up.

## Add Sign-to-text to the Gboard toolbar

Open any app that accepts typing, such as Messages, so the keyboard is on screen.

1. Tap the Gboard toolbar and look for Sign-to-text.
2. If it is missing, open the keyboard menu and choose Sign-to-text.
3. To pin it: tap Edit on the toolbar, touch and hold Sign-to-text, and drag it onto the bar.
4. Read the onboarding screen. Google includes short videos on how to frame the front camera around your face, upper body, and hands.
5. Continue and allow camera access if you have not already.

Google’s August 21 post says to sign toward the front camera and that translations appear on the outer display. Pixel Help describes the same flow as words streaming into the text field of the app you opened. Use the preview window to confirm the phone sees you before you start a real message.

## Sign a message

1. Open Messages, Keep, Chrome, or the Gemini app. Confirm Gboard is the keyboard.
2. Tap Sign-to-text on the toolbar, or open it from the keyboard menu.
3. Hold the phone so the front camera sees your hands, upper body, and face. Landmarks should draw over those areas in the preview.
4. Sign. English words stream into the field as you go. Suggested words sit on the toolbar; tap one if the model offers a better match.
5. Move your hands out of the camera view when you are done signing. That tells Gboard the turn is finished.
6. Tap Sign-to-text again to return to the normal keyboard.

You can edit without starting over. Switch to the standard keyboard and fix a word, pick another suggestion from the strip, or run Gboard writing tools to add punctuation and tidy the sentence. Pixel Help says you can move between signing and typing without losing your place.

Minimize the keyboard if the preview blocks the text you are checking.

![Hands typing on a laptop keyboard beside a notebook](https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80)

## Use it in Live Transcribe and Gemini

DeepMind says Live Transcribe on Pixel 11 can take signed replies during a face-to-face conversation, instead of forcing a typed back-and-forth. Open Live Transcribe, start the session, and use sign-to-text when you need to answer. Spoken input from the other person still follows the usual Live Transcribe path.

In Gemini, open a chat, switch on Sign-to-text, and sign the request. The English text lands in the prompt box. Send it the same way you would send a typed prompt. If you also use camera help for low vision, [Guided Vision in Gemini Live](/blog/gemini-live-guided-vision-android/) is a separate camera mode and does not replace this keyboard feature.

Dictation by voice is still available for people who speak. [Rambler on Pixel 11](/blog/gboard-rambler-pixel-11/) is the voice path in Gboard. Sign-to-text is the ASL path. They do not share a button.

## What leaves the phone

Privacy is specific, and the two official write-ups match.

An on-device model, MediaPipe Holistic, tracks points on the face, hands, and upper body. DeepMind says only those geometric coordinates go to the server for translation, and the camera video is discarded immediately. Pixel Help says Gboard sends a 2D representation of key points, not your video. Pose coordinates, videos, and translations are not stored. Inputs are not saved, shared, or used to train models.

That is not the same as “nothing is processed off the phone.” Translation runs on Google’s servers. The video itself is what stays off the server.

## Limits to plan around

ASL to English is the shipping language. DeepMind says the model was trained on more than 100,000 hours across more than 50 sign languages, with about a quarter of that data in ASL, but the Pixel 11 product starts with ASL. Do not expect British Sign Language, Auslan, or other languages until Google says they are available.

On the FLEURS-ASL benchmark (sd-test), DeepMind reports a zero-shot score of 70 BLEURT and notes remaining errors on rare signs, fast fingerspelling, classifier depictions, and tense without context. Treat the English as a draft. Read it before you send a message or submit a search.

Framing still matters. If landmarks do not sit on your face and hands, step back or tilt the phone until the preview is stable. One-handed signing is supported, but the camera still needs a clear view of the signing hand and your face, because facial expression carries grammar.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/2yFOPjh-Two"
    title="Pixel now reads sign language — Daniel Durant shows how Pixel 11 turns ASL into text"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips that save a second take

- Update Gboard before you hunt for the button. An old build will not show Sign-to-text.
- Face a light source. The on-device tracker needs a readable view of hands and face.
- Finish a phrase by moving your hands out of frame, then check suggestions before you send.
- Use writing tools for punctuation if the stream lands as a run of words.
- Close heavy apps if Gboard shows a system-health warning.
- Keep expectations local: this is Pixel 11 only today, even if you install Gboard on another Android phone.

## Conclusion

Sign-to-text puts ASL on the same shelf as voice dictation for Pixel 11 owners who use Gboard in English (US or Canada). Pin the button, grant the camera, frame your face and hands, and sign into Messages, notes, Search, Gemini, or Live Transcribe. The phone sends pose points, not video, and Google says those inputs are not kept or used for training.

Read the English before you send it. The model is a translator, not a court reporter, and Google still lists more sign languages as future work.

## Sources

- Pixel Phone Help: Use sign-to-text to translate American Sign Language (ASL) into English text in real time — https://support.google.com/pixelphone/answer/17468449
- Google Blog: Here's how to use sign-to-text translation on Pixel 11 (Sharlene Yuan, August 21, 2026) — https://blog.google/products-and-platforms/devices/pixel/american-sign-language-sign-to-text-pixel-11/
- Google DeepMind: Putting sign language AI into users’ hands (August 12, 2026) — https://deepmind.google/blog/putting-sign-language-ai-into-users-hands/
- Made by Google: Pixel now reads sign language (Daniel Durant, August 13, 2026) — https://www.youtube.com/watch?v=2yFOPjh-Two
