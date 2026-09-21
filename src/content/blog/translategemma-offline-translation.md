---
title: "How to Use TranslateGemma for Offline Translation"
description: "Run Google TranslateGemma on-device for offline translation across 55 languages, then pair it with Language Explorer and Live Translate."
pubDate: 2026-09-20T14:00:00
heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "google", "ai"]
noindex: false
---

Cloud translation fails the moment a plane mode toggle, a village network, or a privacy rule blocks the request. Google's answer is **TranslateGemma**, a family of open translation models that run on a phone, laptop, or private server without sending the source text to a remote API.

On 15 September 2026, Google restated that goal in [AI for everyone in every language](https://blog.google/innovation-and-ai/technology/ai/ai-for-every-language/). TranslateGemma is the offline piece. Gemini 3.5 Live Translate is the live speech piece. Language Explorer is the map of the languages those tools still miss.

This guide shows how to pick a model size, run a first translation locally, and decide when you still need the cloud.



![Globe viewed from space representing global language coverage](https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80)



## What Google actually shipped

TranslateGemma launched on 15 January 2026 as an open suite built on Gemma 3. Google published 4B, 12B, and 27B instruction-tuned checkpoints and evaluated them on **55 language pairs** in the WMT24++ benchmark.

Official facts to keep straight:

- The models live on Hugging Face under the [google/translategemma](https://huggingface.co/collections/google/translategemma) collection.
- The 12B checkpoint beat the larger Gemma 3 27B baseline on MetricX in Google's published comparison.
- Inputs can be plain text or an image (normalized to 896×896). Context is 2K tokens.
- The September 2026 language post describes the same family as lightweight models that run on-device so translation does not require the internet.

It is not a replacement for Google Translate's 250+ language catalog. It is a local engine for the 55 pairs Google trained and measured.

## Pick a model size before you download

Match the checkpoint to the machine, not to the marketing name.

| Size | Official target | Practical use |
| --- | --- | --- |
| **4B** | Mobile and edge | A recent Android phone or a small SBC |
| **12B** | Laptops and desktops | Daily offline docs on a 16 GB machine |
| **27B** | Servers and workstations | Highest quality in a private cluster |

Google's January post is explicit: the 4B model is the mobile and edge option. If you only need short messages on a phone, start there. If you translate multi-paragraph reports, use 12B on a laptop first and move to 27B only after you measure quality on your pair.

Weights follow the Gemma terms of use. Read those terms before you ship a product on top of the checkpoints.

## Run a first translation on a laptop

You need Python, a GPU or a patient CPU, and the official instruction-tuned checkpoint.

1. Create a clean virtual environment and install a current `transformers` build that lists Gemma 3 support.
2. Download `google/translategemma-12b-it` (or the 4B IT checkpoint if VRAM is tight).
3. Use the Gemma tokenizer's chat template. TranslateGemma expects the published translation template, not a free-form "please translate" prompt.
4. Pass a single source string and a clear target language. Keep the request under the 2K-token input budget.
5. Print the model output and compare it to a human reference on one paragraph you already understand.

Do not feed a 40-page PDF in one call. Split by heading, translate section by section, and keep a glossary of names that the model must copy unchanged.

For phones, follow Google's mobile path: quantized 4B weights through Google AI Edge or a GGUF build that your on-device runtime already supports. The September post only claims efficient on-device inference. It does not publish a Play Store app named TranslateGemma.



![Developer working on a laptop with code on screen](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)



## Translate a photo without an API key

TranslateGemma still accepts images. That matters when the source is a printed form, a whiteboard, or a street sign and you cannot upload the frame to a cloud OCR service.

1. Capture the image so the text fills most of the frame.
2. Resize toward 896×896 before you call the processor. That is the size Google documents.
3. Use the image translation chat template, not the text-only template.
4. Ask for extraction and translation in one turn. The model card describes text-extraction-and-translation from an image input.
5. Check numbers, seals, and proper nouns by eye. Multimodal translation can drop a digit even when the surrounding sentence is fine.

This path is for a single sign or worksheet. It is a poor fit for a 200-page scanned book.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/UlbokBsjMRY"
    title="Gemini 3.5 Live Translate, Gemini in Xcode, and more! — Google Developer News"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## When to leave the laptop and use Live Translate

Offline text is the wrong tool for a live conversation. For speech that must keep pace with a speaker, use **Gemini 3.5 Live Translate** instead. Google states that the speech model covers **70 languages** and **2,000+ language pairs**, and that it keeps code-switching and emotional cues that a text pipeline strips out.

Walk through the consumer and API steps in our earlier guide: [How to Use Gemini 3.5 Live Translate](/blog/gemini-3-5-live-translate/). Use headphones in the Google Translate app. Use the Live API only when you are building that loop into your own product.

On Android keyboards, Gemini 3.5 Transcribe also powers **Rambler** in Gboard. Rambler cleans filler words and lets you switch languages by voice. See [Gboard Rambler and Gemini 3.5 Transcribe](/blog/gboard-rambler-gemini-3-5-transcribe/) if your job is dictation rather than document translation.

## Map the languages you still cannot serve

Fifty-five trained pairs is not the whole planet. Google's Language Explorer is the official map of that gap.

1. Open [Language Explorer](https://sites.research.google/languages/language-explorer).
2. Search a language, script, or region. The tool visualizes **LinguaMeta**, which Google calls the largest open-source language data repository.
3. Note whether the language is spoken, written, signed, or all three. Explorer continuously maps more than **7,000** languages.
4. If your users speak a language outside TranslateGemma's 55 pairs, plan a different stack: Google Translate online, a community dataset, or a fine-tune.

Google lists three open-data partnerships that feed this work: **WAXAL** (27 Sub-Saharan African languages), **Project Vaani** (more than 30,000 hours across 109 languages in India), and the **Amplify Initiative** (15,000 multimodal items from more than 1,600 local experts).

Those datasets are for research and future models. They are not a drop-in replacement for TranslateGemma weights.

## Feature phones and sign language sit outside this model

Two official limits matter if you serve users who do not own a recent smartphone.

Google is funding Viamo's **Ask Viamo Anything** assistant so Gemini can answer questions over interactive voice response on feature phones. The Rwanda pilot has already used Gemini to answer more than **2 million** questions. That is a phone-call product, not an on-device Gemma build.

For sign language, Google points to **Sign Language-to-Text (SL2T)**, trained across 50+ sign languages. On Pixel 11 it powers sign-to-text dictation in Gboard and Live Transcribe, starting with ASL to English. TranslateGemma does not replace that stack.

## A practical study or field workflow

Use this sequence when you need quality and an audit trail.

1. Collect source files on the device that will stay offline.
2. Run TranslateGemma 12B on each section and save the raw output next to the source.
3. Have a bilingual reviewer mark names, units, and legal phrases.
4. Keep a short glossary and feed those locked terms back into the next prompt.
5. When you regain connectivity, spot-check the same paragraph in Google Translate or with a human editor.
6. If the next task is a spoken meeting, switch to Live Translate. Do not pipe meeting audio through the 4B text model.

College students in the U.S. can still claim one year of Google AI Pro (then $19.99/month unless cancelled) through Google's student offer. That plan raises Gemini Notebook limits. It does not change TranslateGemma's open weights.

## Tips that prevent bad output

- State the source and target language in the template every time. Do not rely on auto-detect for offline text.
- Keep sentences short when you use the 4B model.
- Never paste secrets into a hosted demo if your reason for TranslateGemma was privacy. Host the weights yourself.
- Treat MetricX wins as a benchmark result, not a guarantee on medical or legal text.
- Watch token count. A 2K window fills fast once you add a glossary and an image.

## Conclusion

TranslateGemma is the offline translator you run when the network is gone or the text must stay on the device. Start with the 4B build on a phone or the 12B build on a laptop, use the official chat template, and keep each request inside 2K tokens.

Use Language Explorer to see which languages you still cannot cover. Use [Gemini 3.5 Live Translate](/blog/gemini-3-5-live-translate/) when the input is a live voice, not a file. That split — local text model, cloud speech model, open language map — is the stack Google described in September 2026.

## Sources

- [AI for everyone in every language](https://blog.google/innovation-and-ai/technology/ai/ai-for-every-language/) — Google Blog, 15 September 2026
- [TranslateGemma: A new family of open translation models](https://blog.google/innovation-and-ai/technology/developers-tools/translategemma/) — Google Blog, 15 January 2026
- [google/translategemma-12b-it model card](https://huggingface.co/google/translategemma-12b-it) — Hugging Face
- [Language Explorer](https://sites.research.google/languages/language-explorer) — Google Research
- [Gemini 3.5 Live Translate](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-live-3-5-translate/) — Google Blog
- [Google Developer News: Gemini 3.5 Live Translate](https://www.youtube.com/watch?v=UlbokBsjMRY) — Google for Developers
