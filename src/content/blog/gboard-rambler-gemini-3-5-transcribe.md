---
title: "How to Use Gboard Rambler With Gemini 3.5 Transcribe"
description: "Turn on Gboard Rambler on Pixel 11, dictate clean text with Gemini 3.5 Transcribe, edit by voice, and know the official limits."
pubDate: 2026-09-20T14:00:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "gemini", "pixel", "how-to"]
noindex: false
---

Gboard still has the old microphone that types every “um.” Rambler is the other path. It runs on [Gemini 3.5 Transcribe](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5-transcribe/), Google’s speech-to-text model announced on August 26, 2026, and it turns a messy spoken thought into formatted sentences.

Google’s own [Gboard Help page](https://support.google.com/gboard/answer/17468539) is the source of truth for setup. This guide follows that page and the model blog so you can turn Rambler on, dictate in any app that uses Gboard, rewrite with voice, and fall back when you go offline.

## What Rambler actually does

Classic Gboard voice typing is literal. You say “meet on Tuesday, no, Wednesday” and both days can land in the box.

Rambler is intent-first. Google says Gemini 3.5 Transcribe handles self-corrections, strips filler words, and auto-formats grammar and punctuation. On Gboard you can also speak an edit: change a word, shorten the draft, or add an emoji without tapping the suggestion strip.

Google measured the model (via Artificial Analysis) at an average word error rate of 4.0% for streaming and 2.6% for non-streaming work. Those figures are lab numbers, not a promise for a noisy street. Still check names, amounts, and addresses before you send.

Rambler works in any field where Gboard works: Messages, Gmail, WhatsApp, Slack, the browser bar. It is a keyboard feature, not a separate app.



![Person holding a smartphone and speaking while composing a message](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)



## Check you meet the official requirements

As of Google’s current Help article, you need all of the following:

1. A **Pixel 11 series** phone.
2. The [latest Gboard](https://play.google.com/store/apps/details?id=com.google.android.inputmethod.latin) from Play Store, set as the default keyboard.
3. Microphone permission for Gboard. Choose **Allow only while using the app**.
4. An internet connection for the full feature set. Offline mode still runs basic cleanup.

If your phone is not Pixel 11, do not hunt for a hidden toggle. Help lists that series only. Earlier coverage of a summer rollout on Pixel 10 and Galaxy S26 described the first Gemini Intelligence wave. Treat the Help page as current hardware policy and ignore third-party patches that force the flag on unsupported devices.

Language support on Help includes Arabic, English, French, German, Hindi and other supported Indian languages, Italian, Japanese, Korean, Portuguese, Russian, and Spanish. You can switch languages mid-sentence. Gemini 3.5 Transcribe itself auto-detects more than 85 languages in the developer APIs; Rambler’s consumer list is the shorter Help list above.

## Turn Rambler on

Google walks first-time users through an in-keyboard dialog.

1. Open any app with a text field, such as Gmail or Google Messages.
2. Tap the field so Gboard appears.
3. Tap the microphone.
4. If you see the Rambler introduction, tap **Start**.
5. If there is no dialog, open Gboard **Menu → Settings → Voice typing** and select **Rambler**.

Return to the field and tap the microphone again. Help notes that a glowing animation on the keyboard means capture is active. The text box itself stays empty until processing finishes, which is different from the old live word-by-word stream.

To switch back later: **Settings → Voice typing → Standard voice typing**. That restores word-for-word dictation with Gboard’s older extras.

## Dictate a message the way you talk

1. Tap the microphone.
2. Speak at a normal pace. Do not pause for commas. Do not clean up “um” yourself.
3. Correct yourself out loud: “ship Friday—no, Monday.”
4. Tap **Done**, or hold the microphone while you speak and release it when you finish.
5. Read the result before you send.

Good first tests:

- A two-sentence work update with one mid-thought change.
- An address plus a postal code.
- A mix of English and one other supported language in the same breath.

Google designed 3.5 Transcribe to keep alphanumeric strings such as order IDs and postal codes. That is the right place to stress-test it, because older voice typing often mangled those tokens.



![Close-up of a phone keyboard and microphone used for voice input](https://images.unsplash.com/photo-1551650975-87deedd944c4?auto=format&fit=crop&w=800&q=80)



## Edit and rewrite without tapping

Rambler can act on text already in the field. Help does not give a fixed command list. Speak the change in plain language.

Rewrite examples Google lists:

- “Make this sound more professional.”
- “Make this shorter and more direct.”

You can append the rewrite to the same take, or run it as a second command after the draft appears.

Emoji:

- “Add a sushi emoji.”
- “Add some emoji” if you want Gboard to pick.

Targeted edits:

- “Change blue to green.”
- “Change Saturday to Sunday.”

Tap the screen if you need a surgical word swap. Voice rewrite is for tone and structure. Precise spelling of a last name is still faster with a tap.

## What works offline

Help is explicit. With no network, or after a drop mid-dictation:

- Basic cleanup, punctuation, and capitalization still run.
- Stylistic rewrites and complex conversational edits wait until you are back online.

If the connection dies while you speak, you get a **Retry** button. Tap it to process the take offline instead of discarding it.

Full Rambler features need the network because they call Gemini 3.5 Transcribe. That is the same model Google exposed to developers as `gemini-3.5-transcribe` (batch, Interactions API) and `gemini-3.5-transcribe-live` (streaming Live API).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/PWPsZssgfDo"
    title="How to build with Gemini 3.5 Transcribe"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

The official Google for Developers walkthrough above shows why the model is better at emails, phone numbers, and language switches than a classic ASR stack. Rambler is the consumer surface of that stack.

## Privacy, safety, and caps

Google’s Help text on processing:

- Text, audio, and your corrections are **temporarily processed** by Google.
- They are **not saved, stored, or shared**, and they are deleted after the text is delivered.
- Rambler can be wrong. Proofread.

Safety guardrails refuse to rewrite or generate severe policy-violating content. Help names child sexual abuse material, harassment, and hate speech. In those cases you see a rejection message instead of a polished draft.

Usage limits exist so the service stays available. Help does not publish a numeric quota. If dictation suddenly stops accepting long takes, wait and retry rather than assuming the feature was removed.

## Where else 3.5 Transcribe shows up

Rambler is not the only product on this model. Google’s August 26 post also lists:

- Voice input in the **Gemini app on macOS** (English), including voice commands that can call other Gemini models for file work or image generation.
- Microphone input in **Google Antigravity**, which can use on-screen context and chat history when you allow it.
- Build mode in **Google AI Studio** for voice-driven prototyping.
- Talk-to-type in **Chrome**, described as coming soon for any web field.

If you already use Gemini on a Pixel for other September tools, pair this keyboard habit with the rest of the drop. Our guide to the [September 2026 Android Drop](/blog/android-september-2026-drop-guide/) covers Find Hub memory, Motion Assist, and Guided vision on the same devices.

## A short practice loop

Spend ten minutes the first evening you have Rambler:

1. Confirm Gboard is default and Voice typing is set to Rambler.
2. Dictate one messy paragraph into Notes, then ask it to sound more direct.
3. Change one proper noun by voice.
4. Toggle airplane mode, dictate a sentence, and tap Retry to see the offline path.
5. Switch back to Standard voice typing once so you know the escape hatch.

If the first take looks too tidy, that is the product. If it drops a number, type the number. The keyboard is still there.

## Conclusion

Rambler is useful when you already talk faster than you type: walking replies, long WhatsApp voice-that-should-have-been-text, first drafts of mail. It is not a court reporter. Google’s published error rates are low, not zero, and Help still tells you to read the output.

Keep Gboard updated, stay on a Pixel 11 if that is the listed device, and treat Standard voice typing as the fallback when you need a verbatim quote. That is the whole setup.

## Sources

- [Introducing Gemini 3.5 Transcribe](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5-transcribe/) — Google
- [Rambler voice input on Gboard](https://support.google.com/gboard/answer/17468539) — Gboard Help
- [Gemini Intelligence on Android](https://blog.google/products-and-platforms/platforms/android/gemini-intelligence/) — Google
- [Live Transcribe API docs](https://ai.google.dev/gemini-api/docs/live-api/live-transcribe) — Google AI for Developers
- [Batch Transcribe API docs](https://ai.google.dev/gemini-api/docs/transcribe) — Google AI for Developers
