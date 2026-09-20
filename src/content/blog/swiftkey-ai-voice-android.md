---
title: "How to Use SwiftKey AI Voice Typing on Any Android Phone"
description: "SwiftKey beta 9.13.16.4 adds an offline AI voice mode that cleans filler words like Pixel 11 Rambler. Install the beta, download the model, and dictate in any app."
pubDate: 2026-09-20T20:30:00
tags: ["android", "ai-tools", "tutorials"]
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
---

Pixel 11 owners have spent the last few months dictating messy thoughts into Gboard **Rambler** and getting clean, punctuated text back. Everyone else has been waiting. Microsoft’s SwiftKey beta now ships a similar **AI voice** mode that works on ordinary Android phones — including devices that never get Gemini Intelligence — and it can run after you download a local model, with Wi‑Fi and mobile data switched off.

This guide walks through what the feature actually does, how to turn it on from the Play Store beta, where it still lags behind Rambler, and when you should stay on Gboard instead.

## What SwiftKey AI voice does

Traditional voice typing writes every word you say. If you hesitate, correct yourself, or drop an “um,” that noise lands in the draft.

SwiftKey’s new mode is closer to Rambler’s job description: you speak in full thoughts, a waveform shows that the mic is live, and when you stop, the keyboard inserts formatted text with filler stripped and punctuation added. Hands-on reports from [Android Central](https://www.androidcentral.com/apps-software/this-keyboard-app-brings-pixel-11s-best-feature-to-all-android-phones), [9to5Google](https://9to5google.com/2026/09/15/swiftkey-ai-voice-pixel-11-rambler-copy-android/), and [Android Authority](https://www.androidauthority.com/swiftkey-ai-voice-mode-3709656/) all describe the same flow in **SwiftKey beta 9.13.16.4**.

Useful differences versus Gboard Rambler:

- **Device reach.** Rambler, per [Google’s Gboard Help page](https://support.google.com/gboard/answer/17468539), still lists Pixel 11 series as a prerequisite. SwiftKey beta installs on most Android 8+ phones.
- **Offline use.** After the on-device model download (about **163 MB** in Android Central’s Fold 8 test), dictation continued with radios off. Rambler still needs a network.
- **Live preview.** SwiftKey does not stream a word-by-word caption while you talk. You wait for the cleaned block.
- **Voice edits.** Rambler can take spoken rewrite requests (“make this shorter,” “fix the spelling”). Testers have not found the same command set in SwiftKey’s beta.
- **Language.** Early coverage says the AI voice path is **English-only** for now.

Treat AI voice as polished dictation, not a full Gemini rewrite assistant.

![Person holding an Android phone and speaking toward the microphone](https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=1200&h=675&q=80)

## Before you switch keyboards

1. Confirm you are willing to use a **beta** keyboard as the system default. Betas can crash or lag in banking apps. Keep Gboard installed so you can switch back from Settings → System → Languages & input → On-screen keyboard.
2. Give yourself roughly **200 MB** of free storage for the voice model.
3. Use a **personal** Microsoft account if you want SwiftKey backup and clipboard sync. You can skip sign-in for local typing.
4. If you handle regulated work on the phone, read Microsoft’s voice-typing note: classic SwiftKey voice typing can send audio to Microsoft speech services. The new AI voice path is described by testers as on-device after the model lands — verify the in-app disclosure on your build before you dictate client names or health details.

## Install SwiftKey Beta and set it as default

1. Open the Play Store listing for **[Microsoft SwiftKey Beta](https://play.google.com/store/apps/details?id=com.touchtype.swiftkey.beta)** (package `com.touchtype.swiftkey.beta`). Join the beta if Play asks.
2. Install or update until the version is **9.13.16.4** or newer. APKMirror mirrors of that build appeared on 12 September 2026; Play may take a day longer in some regions.
3. Open the SwiftKey app → **Enable SwiftKey** → choose it as the current keyboard.
4. Grant **microphone** permission when Android asks. Without it, the toolbar mic stays dead.
5. Open any text field (Messages, Gmail, Keep) so the keyboard appears.

You can also enable SwiftKey from **Settings → System → Keyboard → On-screen keyboard** if the setup wizard is incomplete.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/pPWGSRjQpPU" title="How to use Voice Typing on Microsoft SwiftKey Keyboard" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Turn on AI voice the first time

The beta surfaces AI voice next to the existing microphone, not as a hidden developer flag.

1. Tap the **microphone** on the SwiftKey toolbar (or long-press the comma key, which Microsoft documents for multimodal voice typing).
2. If you see **Try voice with AI** or an **AI voice** card, accept it.
3. Download the language model when prompted. Stay on Wi‑Fi. The download is a one-time cost; later sessions can run offline.
4. Speak a short test sentence with a filler and a mid-thought correction, for example: “Can we meet Tuesday — um, no, Wednesday — at the usual café.”
5. Tap stop or Done. Check that the inserted text dropped the “um” and kept Wednesday.

Microsoft’s older [Voice to Text help article](https://support.microsoft.com/en-us/swiftkey-keyboard/how-do-i-use-voice-to-text-with-microsoft-swiftkey-keyboard) still describes multimodal dictation (talk and type at the same time) and the option to fall back to Google Voice Typing under **Settings → Rich input**. AI voice sits on top of that stack. If the AI card never appears, confirm the beta version, English as an active SwiftKey language, and that multimodal voice typing is not switched off.

![Close-up of a smartphone keyboard while composing a message](https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1200&h=675&q=80)

## A practical dictation habit

Use AI voice where cleanup saves time:

- A two-paragraph email you would otherwise type with one thumb on a commute
- A shopping list spoken while your hands are busy
- Meeting notes you will paste into Keep or Docs

Skip it when the exact wording matters more than speed: one-time passcodes, legal quotes, code snippets, or names you have never added to SwiftKey’s dictionary.

Because there is no live caption, pause every few sentences and glance at the field. If a proper noun is wrong, fix it on the keys while the mic is still open — testers note you can keep typing during capture, which matches Microsoft’s multimodal design.

To sanity-check offline mode once: enable Airplane mode, open Messages, dictate one sentence, and confirm text still appears. If it fails, the model did not finish downloading.

## How it compares with Gboard Rambler

If you already own a Pixel 11, Rambler remains the deeper product. Google’s help page documents spoken edits, structured output, and use anywhere Gboard appears. Gemini 3.5 Transcribe — the model Google says powers Rambler — is also wired for multilingual code-switching in Google’s own demos.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/IWYsGdpF2rY" title="Google introduces Rambler as part of Gemini Intelligence — The Verge" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

Stay on Gboard when:

- You have a Pixel 11 and want voice rewrite commands
- You dictate in more than English
- You prefer Google’s keyboard search, stickers, and Workspace shortcuts in the same toolbar

Move to SwiftKey beta when:

- Your phone is not a Pixel 11
- You need dictation on a plane or in a basement with no signal
- You already live in SwiftKey themes, flow typing, and Windows clipboard sync

Do not sideload patched Gboard APKs to force Rambler onto unsupported phones. That path breaks Play Protect, can drop keyboard updates, and is not something Google supports.

## Troubleshooting

**No AI voice card.** Update the beta, set English as a SwiftKey language, and tap the mic from a plain text field rather than a password box.

**Mic icon missing.** Open SwiftKey Settings and confirm Voice typing is on. Microsoft’s help article also lists hiding the icon as an option — re-enable it there.

**Audio goes to Google instead of SwiftKey.** Under Rich input, multimodal voice typing may be off, which hands capture to Android’s Google Voice Typing IME. Turn multimodal back on.

**Huge storage use.** The ~163 MB model is expected. Uninstalling the beta removes it; switching back to stable SwiftKey will drop AI voice until Microsoft ships it on the production track.

**Wrong words for jargon.** Add the term to SwiftKey’s dictionary, or type it once so the keyboard learns it. Custom vocabulary biasing is a Gemini 3.5 Transcribe API feature, not something the SwiftKey beta documents.

## Conclusion

SwiftKey’s AI voice mode is the first widely installable answer to Pixel 11 Rambler. It will not rewrite a paragraph on command, and it is still a beta limited to English. What it does well is enough for daily mail and chat: speak the way you actually talk, let the local model drop the filler, and keep working in airplane mode.

Install the beta, run one offline test sentence, and keep Gboard one tap away until Microsoft promotes the feature to stable. That is a safer upgrade path than waiting on Google to unlock Rambler for every Android skin.

## Sources

- [This keyboard app brings Pixel 11’s best feature to all Android phones](https://www.androidcentral.com/apps-software/this-keyboard-app-brings-pixel-11s-best-feature-to-all-android-phones) — Android Central, 14 September 2026
- [SwiftKey ‘AI voice’ is Pixel 11’s Rambler for other Android phones](https://9to5google.com/2026/09/15/swiftkey-ai-voice-pixel-11-rambler-copy-android/) — 9to5Google, 15 September 2026
- [SwiftKey’s answer to Gboard’s Rambler mode](https://www.androidauthority.com/swiftkey-ai-voice-mode-3709656/) — Android Authority, 10 September 2026
- [Rambler voice input on Gboard](https://support.google.com/gboard/answer/17468539) — Google Gboard Help
- [How do I use Voice to Text with Microsoft SwiftKey Keyboard?](https://support.microsoft.com/en-us/swiftkey-keyboard/how-do-i-use-voice-to-text-with-microsoft-swiftkey-keyboard) — Microsoft Support
- [Microsoft SwiftKey Beta on Google Play](https://play.google.com/store/apps/details?id=com.touchtype.swiftkey.beta)
