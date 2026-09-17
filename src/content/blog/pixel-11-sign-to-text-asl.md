---
title: "How to Use Sign-to-Text on Pixel 11: ASL to English in Gboard"
description: "Set up Pixel 11 sign-to-text so American Sign Language becomes English text in Gboard and Live Transcribe. Camera setup, privacy details, and editing tips from official docs."
pubDate: 2026-09-17T17:50:00
tags: ["android", "tutorials", "pixel"]
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
---

Pixel 11 can turn American Sign Language into written English while you sign toward the front camera. The feature lives in **Gboard** and **Live Transcribe**, not in a separate app. Google built it with the Deaf community and powers it with DeepMind’s sign-language-to-text model, SL2T.

This guide follows Google’s Pixel Help steps and DeepMind’s published privacy design. It is a how-to for people who already have a Pixel 11. It is not a substitute for a certified interpreter.

## What you need

Google’s official prerequisites are short:

- A **Pixel 11** series phone (including Pro and Fold models that shipped with the feature)
- The latest **Gboard** from Play Store
- Keyboard language set to **English (US)** or **English (Canada)**
- Camera permission for Gboard

The first language pair is **ASL to English**. Google has said more devices and more sign languages are planned. Do not assume an older Pixel will show the control after a Gboard update.

![Person holding a smartphone at chest height, ready to use the front camera](https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&h=675&q=80)

## Add Sign-to-text to the Gboard toolbar

You can launch the feature from the overflow menu, but pinning it is faster.

1. Open any text field so Gboard appears.
2. On the Gboard toolbar, tap **Edit** (or the pencil control used to rearrange tools).
3. Touch and hold **Sign-to-text**, then drag it onto the toolbar.
4. Tap **Sign-to-text** once. Review the onboarding screens.
5. Grant camera access if Android asks. Without that permission the feature will not start.

Google’s onboarding includes short videos on framing: the front camera needs your **face, upper body, and hands**. One-handed and two-handed signing are both supported.

On Pixel 11 Fold, translations can also show on the **cover display** so the other person can read while you sign on the inner screen. That layout is why Google highlights the Fold in launch demos.

## Sign into any app that uses Gboard

Sign-to-text works wherever Gboard is the active keyboard: Messages, Keep, Chrome, Docs, Gemini, search, and most third-party apps.

1. Open the app and tap a text field.
2. Confirm Gboard is selected (not a third-party keyboard).
3. Tap **Sign-to-text** on the toolbar. A camera preview opens.
4. Hold the phone so the front camera sees your hands, torso, and face. Avoid backlighting that hides handshape.
5. Sign at a natural pace. Overlay landmarks appear on face, hands, and upper body. Words stream into the text field.
6. When you are done with a phrase, **move your hands out of the camera view**. That is the documented end-of-utterance signal.
7. Tap **Sign-to-text** again to return to the regular keyboard.

Tips from Pixel Help:

- Pick alternative words from the **suggestion strip** while you sign
- Tap **Minimize** if the keyboard is covering too much of the preview
- Switch to typing at any time without losing the draft

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/G9kPt-zNgdk" title="Pixel 11 ASL sign-to-text demo from The Verge" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

*Made by Google stage demo of Pixel 11 recognizing one-handed and two-handed ASL, including facial grammar. Embedded from The Verge.*

## Use Live Transcribe for face-to-face talk

Gboard is for writing into apps. **Live Transcribe** is for in-person conversation: ordering coffee, talking with a colleague, or any moment where the other person is speaking and you want to reply in sign instead of typing.

Install or update Live Transcribe from Play Store, start a session, then use the sign-language control when it appears. The hearing person still sees English text. You still review the line before you treat it as sent.

Do not use this pipeline for medical advice, legal proceedings, police encounters, classroom exams, job interviews, or government benefits. DeepMind’s product notes say SL2T does not meet legal interpreter requirements and must not replace a human interpreter in those settings.

![Close-up of hands over a smartphone keyboard during a conversation](https://images.unsplash.com/photo-1556656793-b76473c26777?auto=format&fit=crop&w=1200&h=675&q=80)

## Edit the translation before you send it

ASL grammar is not English word order. The model translates meaning into English sentences, so you should still proofread names, numbers, and tone.

Ways to fix a line without starting over:

- Tap the standard keyboard key and edit like any other draft
- Choose a different word from Gboard’s prediction strip
- Use Gboard **writing tools** to add punctuation or tighten the sentence
- Re-sign only the unclear phrase after you delete the bad span

If landmarks jitter or words stall, check lighting, step back so elbows are in frame, and close apps that are hammering the camera. Pixel Help says Gboard will warn you if the phone is under system load.

## How privacy is designed

This is the part worth reading once.

Google’s support page and DeepMind’s SL2T post describe the same pipeline:

- An **on-device** model (MediaPipe Holistic) tracks pose landmarks on your face, hands, and upper body
- The **camera video is discarded** on the phone
- Only a **2D coordinate stream** (key points, not pixels) is sent to Google servers for translation
- Pixel Help states that pose coordinates, videos, and translations **are not stored**, and inputs are not used to train models

That is why the preview shows a skeleton overlay. The cloud model is translating geometry, not a saved recording of your face.

You still grant camera permission. Anyone who can see your screen can see the draft. Treat a shared or work-profile phone the same way you would treat an open microphone.

## Troubleshooting

**No Sign-to-text button.** Confirm the device is Pixel 11, Gboard is current, and the keyboard language is en-US or en-CA. Other English locales may hide the tool.

**Preview opens, nothing translates.** Recheck camera permission for Gboard (Settings → Apps → Gboard → Permissions). Frame face and both hands. Strong backlight behind you hides handshape.

**Words appear late.** Finish the sign and drop your hands out of frame so the model can close the sentence. Partial phrases stay open until that cue.

**Fold cover screen is blank.** Unlock the cover display and keep the inner session active. Cover output is a Fold layout, not a second independent translator.

**You need another sign language.** It is not in this first ship. Wait for Google’s language expansion rather than forcing a different Gboard locale.

## Conclusion

Sign-to-text puts ASL next to voice typing on Pixel 11: pin the toolbar button, grant the camera, frame face and hands, sign, then drop your hands to end the phrase. Use Gboard when you are writing into an app. Use Live Transcribe when you are standing across from someone. Read the English line before you send it, and keep a human interpreter for anything high-stakes.

If the control is missing, you are not on Pixel 11 or Gboard has not received the language pack yet. That is an availability limit, not a hidden setting.

## Sources

- [Use sign-to-text to translate ASL into English text](https://support.google.com/pixelphone/answer/17468449) — Pixel Phone Help
- [How to use sign-to-text translation on Pixel 11](https://blog.google/products-and-platforms/devices/pixel/american-sign-language-sign-to-text-pixel-11/) — Google Pixel Blog, 21 Aug 2026
- [Putting sign language AI into users’ hands](https://deepmind.google/blog/putting-sign-language-ai-into-users-hands/) — Google DeepMind
- [7 Pixel 11 updates](https://blog.google/products-and-platforms/devices/pixel/pixel-11-features/) — Google Pixel Blog
- [Live Transcribe help](https://support.google.com/accessibility/android/answer/9158064) — Android Accessibility
