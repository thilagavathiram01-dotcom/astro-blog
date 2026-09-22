---
title: "How to Use Sign-to-Text ASL Translation on Pixel 11"
description: "Set up Pixel 11 sign-to-text: add the Gboard button, sign ASL to the front camera, and send English text in chats, Live Transcribe, and Gemini."
pubDate: 2026-09-22T06:30:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["pixel", "android", "tutorials", "how-to", "google"]
noindex: false
---

Pixel 11 can turn American Sign Language into written English while you sign at the front camera. Google ships the feature as **sign-to-text**, powered by a Sign Language-to-Text (SL2T) model that reads hand shapes, facial expressions, and body movement.

It is an early product. Google and on-stage testers have said as much. Treat it as a daily typing aid for ASL users, not a replacement for an interpreter.

This guide covers setup on Gboard, Live Transcribe, what the model actually does, and how to get cleaner sentences.

## What sign-to-text is (and is not)

On Pixel 11, Pixel 11 Pro, Pixel 11 Pro XL, and Pixel 11 Pro Fold, sign-to-text sits in two places:

- **Gboard**, so you can compose messages, search, or prompt Gemini in English while you sign in ASL
- **Live Transcribe**, so a signer can contribute English captions in a spoken conversation

Google’s product posts say the model supports one-handed and two-handed signing. Facial grammar matters. ASL is not English on the hands; brow raise, mouth shape, and body shift change meaning. The SL2T stack is built to use those cues, not only isolated signs.

Limits to keep in mind:

- Shipping language today is **ASL to written English**. Google says more sign languages are planned.
- The SL2T research model is trained across **50+ sign languages**, but Pixel 11 dictation starts with ASL.
- Lighting, framing, and camera angle still matter. The front camera has to see your hands and face.
- Google describes the feature as early. Expect missed signs and awkward word order on complex sentences.

For other Pixel accessibility tools that shipped around the same time, see the [September 2026 Android Drop guide](/blog/android-september-2026-drop-guide/).



![Person holding a smartphone during a conversation](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)



## Before you start

You need:

1. A **Pixel 11 series** phone with current system and Play updates.
2. **Gboard** set as the active keyboard.
3. Camera permission for Gboard or Live Transcribe when the feature asks for it.
4. Enough light for the front camera to see both hands and your face.

Sign-to-text is a Pixel 11 series feature in Google’s own how-to. Do not expect the same button on older Pixels or other Android brands unless Google later expands it.

Update path:

1. Open **Settings → System → System update** and install anything pending.
2. Open Play Store and update **Gboard**, **Live Transcribe & Notifications**, and the **Google** app.
3. Confirm Gboard is default: **Settings → System → Languages & input → On-screen keyboard**.

## Add sign-to-text to the Gboard toolbar

Google’s official Pixel 11 steps are short: add the control to the Gboard toolbar, then sign to the front camera. Translations show as English text (on Fold models, Google notes the outer display for the translated line).

Do this once:

1. Open any app with a text field (Messages, Gmail, Chrome, Gemini).
2. Tap the field so Gboard appears.
3. Tap the four-square **toolbar** icon on the Gboard strip (the same row as voice typing and the emoji key, depending on your layout).
4. Find **Sign to text** and add it to the toolbar. If you do not see it, tap edit/customize on that toolbar and enable the item, then drag it into the visible row.
5. Tap the new **Sign to text** control. A camera preview should open.

The first launch usually asks for camera access. Allow it only for this keyboard feature if you want to keep the permission tight.

Framing tips that match how the demo works on stage and in hands-on clips:

- Hold the phone in landscape or propped so the front camera sees torso, face, and both hands.
- Stand or sit with light on your face, not behind you.
- Keep signs inside the preview. If a hand leaves the frame, the model drops that sign.
- Pause briefly at the end of a phrase so the decoder can commit a sentence.

You can use one hand if that is how you sign that phrase. Google explicitly supports one-handed and two-handed input.

## Use it in chats, search, and Gemini

Once the camera session is open, sign a short phrase, then check the English line before you send it.

Typical flow in Messages:

1. Open the thread and tap the compose box.
2. Start sign-to-text from the Gboard toolbar.
3. Sign the message.
4. Read the English draft. Edit any word the model missed.
5. Send as usual.

The same draft box works in other Gboard fields. Made by Google 2026 showed ASL used to write, chat, and **prompt Gemini from the keyboard**. That is useful when you want Gemini to draft a reply, look something up, or run a phone task without switching to voice typing.

Keep prompts short at first. “Text Mom I am 10 minutes late” is easier for the model than a long story with role shift and classifiers.

On Pixel 11 Pro Fold, Google says translations can appear on the **outer display** while you sign. That lets you keep the cover screen facing a conversation partner while you check the English line.



![Laptop and phone on a desk used for writing and messages](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80)



## Use sign-to-text with Live Transcribe

Live Transcribe already captions speech. Sign-to-text adds the other direction: you sign, the phone writes English into the transcript so a hearing person can read what you said.

Setup pattern:

1. Open **Live Transcribe**.
2. Start a session in a quiet enough room that speech captions still work for the other person.
3. Switch to the sign-to-text / camera input when it is your turn (the control sits with the other Live Transcribe input options after the Pixel 11 software is current).
4. Sign toward the front camera. Confirm the English sentence landed in the transcript before you continue.

This is the mode to use at a counter, clinic check-in, or small meeting when no interpreter is present. It is still a first-generation decoder. For medical, legal, or safety-critical talk, book an interpreter.

## How the SL2T model fits

Google published a wider language note in September 2026: SL2T is trained across more than 50 sign languages and now powers dictation in Gboard and Live Transcribe on Pixel 11, starting with ASL to English. The company frames that as a first step for the estimated 70 million people who use sign languages worldwide.

What that means in practice:

- The research stack is multilingual. The consumer switch on Pixel 11 is ASL first.
- The model looks at more than handshape. Google’s Pixel post lists facial expressions and body movements because those carry grammar in ASL.
- Output is written English sentences, not a gloss of each sign. Word order will follow English more than ASL syntax. That is why you should read the draft.

Actor Daniel Durant’s on-stage check at Made by Google 2026 matches those claims: one-handed and two-handed signing, plus facial grammar. He also called it a good start, which is the right bar for a v1 keyboard.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/VC_Ft0stjCM"
    title="Google Pixel 11 event in 8 minutes"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

The Verge recap above includes the sign-to-text demo (chapter around 5:02) from the Made by Google 2026 event.

## Get cleaner English from the decoder

These habits cut error rate without waiting for a model update:

- **Sign toward the camera, not the other person**, when you need a clean transcript. Then turn the phone or Fold cover so they can read.
- **Finish the sentence.** Trailing movement helps the model close a clause.
- **Avoid busy backgrounds.** High-contrast walls beat patterned shirts and moving crowds behind you.
- **Do not bounce the phone.** A stand, bag, or Fold cover kickstand beats a one-handed hover if you need both hands to sign.
- **Edit before send.** Treat the English line like speech-to-text: fast first draft, then a two-second proof.
- **Shorten Gemini prompts.** Task-shaped phrases beat storytelling.

If the button is missing after updates, confirm you are on a Pixel 11 series device, Gboard is default, and the toolbar customization panel is not hiding extra keys.

## Privacy and permission notes

Sign-to-text needs the front camera while the session is open. Close the camera overlay when you finish a message so the preview is not running in the background.

Gboard already handles other dictation modes. Use the same caution you use for voice typing: do not sign passwords, one-time codes, or card numbers into a preview you cannot fully control in public.

Google has not published a Pixel 11-specific “this model runs only on device” claim for SL2T in the short product how-to. If on-device versus networked processing matters for your workplace, check the latest Pixel privacy and Gboard help pages on that phone before you rely on it for restricted data.

## Troubleshooting

**No Sign to text key.** Update Gboard and system software. Open the Gboard toolbar editor and enable the item. Confirm the device is Pixel 11, 11 Pro, 11 Pro XL, or 11 Pro Fold.

**Camera opens but no text appears.** Raise light levels, move your face and both hands into frame, and hold still at the end of a phrase. Restart the overlay.

**Text is English words in the wrong order.** That is expected when ASL structure is dense. Split the thought into two shorter signs-and-pauses, then edit.

**Fold outer display stays blank.** Wake the cover screen, keep sign-to-text active, and check that translations are not sitting on the inner display only. Unfold once to confirm the session started.

**Live Transcribe ignores signing.** Update Live Transcribe, grant camera permission to that app as well as Gboard, and start a fresh session.

## Conclusion

Sign-to-text gives ASL users a Pixel 11 keyboard that meets them in their language. Add the Gboard control, frame the front camera, sign a short phrase, and read the English line before it goes out. Use Live Transcribe when a hearing person needs to read along.

Keep expectations honest. Google shipped ASL first, called the work early, and is still expanding sign languages. For everyday texts and Gemini prompts, that is already useful. For high-stakes conversations, it is a backup, not the plan.

## Sources

- [How to use sign-to-text translation on Pixel 11](https://blog.google/products-and-platforms/devices/pixel/american-sign-language-sign-to-text-pixel-11/) — Google
- [7 Pixel 11 updates you should know about](https://blog.google/products-and-platforms/devices/pixel/pixel-11-features/) — Google
- [AI for everyone in every language](https://blog.google/innovation-and-ai/technology/ai/ai-for-every-language/) — Google (SL2T trained across 50+ sign languages; Pixel 11 starts with ASL to English)
- [Introducing new Pixel 11 phones](https://blog.google/products-and-platforms/devices/pixel/new-pixel-devices-2026/) — Google
