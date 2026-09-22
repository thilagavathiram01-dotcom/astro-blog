---
title: "How to Use Sign-to-Text on Pixel 11"
description: "Set up Pixel 11 sign-to-text in Gboard and Live Transcribe to turn ASL into English in real time."
pubDate: 2026-09-20T14:00:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["pixel", "android", "how-to", "tutorials", "google"]
noindex: false
---

Pixel 11 can turn American Sign Language into written English while you sign. The feature lives in Gboard and Live Transcribe. It is built for moments when typing is slower than signing, or when you want to reply in your first language.

Google developed sign-to-text with the Deaf community. It uses a Sign Language-to-Text (SL2T) model from Google DeepMind. The model reads hand shapes, facial expression, and upper-body movement, then streams English into the text field.

This guide covers setup, camera framing, Gboard use, Live Transcribe, privacy notes, and limits you should know before you rely on it in a real conversation.

## What you need before you start

You need a Pixel 11, Pixel 11 Pro, Pixel 11 Pro XL, or Pixel 11 Pro Fold. Google’s help article lists Pixel 11 devices as a hard requirement.

Install the latest Gboard from Google Play. Set the keyboard language to English (US) or English (Canada). Other keyboard languages will not unlock the control.

Grant Gboard camera access. If the camera permission is off, the Sign-to-text button will not start a session.

On Pixel 11 Pro Fold, translations can also show on the cover display so the other person can read without flipping the phone.



![Person holding a smartphone with the front camera facing them](https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80)



## Add Sign-to-text to the Gboard toolbar

Open any app that accepts text, such as Messages or Keep. Confirm Gboard is the active keyboard.

Look at the Gboard toolbar above the keys. If you already see Sign-to-text, tap it.

If it is missing, tap the toolbar menu, then Edit. Touch and hold Sign-to-text and drag it onto the toolbar. Save the layout.

The first launch shows an onboarding screen. Read it. Google includes short clips on how far to hold the phone so the front camera sees your face, torso, and both hands.

Tap through and allow camera access if Android asks again.

## Frame the camera the way the model expects

Hold the phone at chest height, slightly below eye level. Keep arms inside the preview. Landmarks appear over your face, hands, and upper body when tracking is working.

Leave space around your elbows. Two-handed signs need room. One-handed signing also works, which matters if you hold the phone with the other hand.

Lighting matters more than resolution. Avoid a bright window behind you. The model needs clear contrast on hands and face, because facial grammar is part of ASL, not decoration.

When you finish a thought, move your hands out of the frame. That pause tells Gboard the phrase is complete so it can settle the sentence.

## Sign a message in any text field

Open Messages, Gmail, Docs, Chrome, or Gemini. Tap the text field so Gboard appears.

Tap Sign-to-text. The front camera preview opens. Sign at a natural pace. Words stream into the field as the model commits them.

Review the draft before you send. The model is useful, but it is still early. Fix names, addresses, and numbers the same way you would after voice dictation.

You can mix tools. Sign the body of a message, then use Gboard’s writing tools or [Gboard Rambler on Pixel 11](/blog/gboard-rambler-pixel-11/) if you want a spoken pass to clean up a sentence.

To prompt Gemini with ASL, open the Gemini app, focus the composer, and use the same Sign-to-text control. Google demonstrated this path at the Made by Google 2026 event.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/VC_Ft0stjCM"
    title="Google Pixel 11 event in 8 minutes"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Use Live Transcribe for face-to-face talk

Gboard is for composing text. Live Transcribe is for a live exchange, such as a coffee order or a meeting without an interpreter.

Open Live Transcribe on the Pixel 11. Start captions for the other speaker as usual. When it is your turn, use sign-to-text so your reply appears as English on screen.

On the Fold, keep the cover screen facing the other person when you want them to read the translation while you sign toward the inner or cover camera, depending on how you hold the device.

Google positions this as a support tool, not a replacement for a human interpreter in medical, legal, or other high-stakes settings.



![Two people talking across a table with a phone between them](https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80)



## How privacy works on device

Google says an on-device model tracks points on the signer. Only those geometric coordinates go to the server for translation. The original camera frames are discarded.

That design reduces the chance that raw video of your face and home leaves the phone. It still requires a network path for the translation step itself.

Treat sign-to-text like any cloud-assisted input. Do not sign passwords, one-time codes, or confidential documents into apps you would not type those details into.

You can revoke Gboard camera access in Android Settings > Apps > Gboard > Permissions when you are not using the feature.

## Limits you should plan around

Support today is ASL to written English. Google says more sign languages and more devices are planned. Do not assume British Sign Language or other languages will work on the same control.

The keyboard language must stay en-US or en-CA. Switching Gboard to another spoken language hides or blocks the tool.

Fast signing, heavy occlusion, or a shaky one-handed hold will drop landmarks. Slow down, reset the frame, and sign the phrase again rather than fighting a bad preview.

Accuracy will vary with regional signs, fingerspelling of uncommon names, and lighting. Always read the output before you send or speak it aloud through another app.

## Quick checklist

1. Update Gboard and set English (US) or English (Canada).
2. Pin Sign-to-text on the toolbar and allow the camera.
3. Frame face, torso, and hands in the preview.
4. Sign, pause with hands out of frame, then edit the draft.
5. Use Live Transcribe when the other person is speaking aloud.

If the button never appears, confirm you are on a Pixel 11 device and that Gboard—not a third-party keyboard—is selected for the app.

## Conclusion

Sign-to-text gives ASL users a direct path into Android text fields on Pixel 11. Setup is short: current Gboard, camera permission, and a stable front-camera frame.

Use it to write messages, search, prompt Gemini, and reply in Live Transcribe. Keep a human interpreter for critical conversations, and scan every draft before it leaves the phone.

Google is expanding languages and devices. Check Pixel Phone Help after system updates, because the toolbar entry and supported locales can change with a Play services or Gboard release.

## Sources

- [How to use sign-to-text translation on Pixel 11](https://blog.google/products-and-platforms/devices/pixel/american-sign-language-sign-to-text-pixel-11/) — Google Pixel Blog
- [Use sign-to-text to translate ASL into English](https://support.google.com/pixelphone/answer/17468449) — Pixel Phone Help
- [7 Pixel 11 updates you should know about](https://blog.google/products-and-platforms/devices/pixel/pixel-11-features/) — Google Pixel Blog
