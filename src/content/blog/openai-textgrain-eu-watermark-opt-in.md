---
title: "Enable OpenAI textGrain Watermarks for EU Text Rules"
description: "See how to handle OpenAI textGrain watermarks: EU ChatGPT rollout, API opt-in from settings, detector limits, and what a hit does not prove."
pubDate: 2026-10-06T09:00:00
heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["chatgpt", "security", "ai", "how-to"]
noindex: false
---

OpenAI began opt-in text watermarking for API customers on 5 October 2026, and it plans to mark eligible ChatGPT and Codex text in the European Union over the following weeks. The method is called textGrain. It does not add hidden characters. It changes how the model picks words so a detector can look for a statistical pattern.

If you publish AI-assisted copy, run support workflows, or ship an app on the API, you need a practical read of what is on, what stays off, and what a detection result can support. Image and audio checks are already public. Text detection is not.

## What OpenAI turned on, and where

The EU AI Act requires generative AI providers to make generated text identifiable in a machine-readable way. OpenAI says text watermarking is still early, so it is rolling the feature out in stages rather than switching it on everywhere.

Three parts of the 5 October announcement matter for day-to-day use:

- API customers worldwide can opt in to text watermarking for select models. It stays off by default.
- Eligible ChatGPT and Codex text in the EU will get an invisible watermark over the coming weeks, across all plans. OpenAI is not making text watermarking a global default at launch.
- Detector access opens by application. The first reviewers are approved researchers and expert organizations. The public tool at openai.com/verify still covers images and audio, not text.

OpenAI's Help Center adds a product note: in the EU, ChatGPT-generated text uses textGrain to meet the Act. API customers can turn text watermarks on from project or organization settings. Coverage can vary by product, model, export path, file type, and when the content was created.

![Person reviewing notes beside a laptop in a quiet workspace](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## How textGrain marks a passage

textGrain adds an invisible statistical signal through the model's word choices. OpenAI's Help Center is explicit that the mark is part of the wording. It does not insert hidden characters, invisible spaces, or odd punctuation. A detector looks for the pattern across a passage, including after some edits.

OpenAI published a technical report, "textGrain: Entropy-Calibrated Watermarking for Language Model Text," and said it will update that report and later open-source the method. On the Astra model at maximum effort, OpenAI reported no meaningful quality gap with watermarking on. Examples from that table include the Artificial Analysis Intelligence Index at 49.57 unwatermarked and 49.76 watermarked, GPQA Diamond at 94.44% and 93.94%, and BrowseComp at 87.92% and 87.35%.

Detection is less stable than those quality scores. At a target false positive rate of 1%, OpenAI's detector found watermarks in about 80% of 200-token psychology passages and about 95% of 400-token passages from the ELI5 set. Mathematics was substantially harder because word choice is more constrained. On 400-token passages, replacing 10% of words with synonyms dropped detection from about 92% to 66%. Replacing 25% dropped it to 17%.

Treat those figures as OpenAI's own evaluations, not as a guarantee for your documents.

## Step-by-step: decide whether to opt in on the API

ChatGPT and Codex users in the EU do not flip a switch for the consumer rollout. OpenAI says the watermark will be added to eligible text over the coming weeks. API teams do have a choice, and the default is off.

1. Read the 5 October post and the Help Center article on provenance signals before you change a project. Confirm which models your app calls, because OpenAI limits the opt-in to select models.
2. Open organization or project settings in the API platform. The Help Center says text watermarks are turned on from those settings. OpenAI has not published a public click-path beyond that, so follow the control labeled for text watermarking if it is present for your account.
3. Leave the setting off if you need unmarked text for a workflow that cannot tolerate statistical word-choice shifts, or if you are still testing quality on your prompts. Turn it on if you want machine-readable marking for transparency duties or customer requirements.
4. Generate a sample of the same prompt with the setting off and on. Compare tone, length, and any structured output your app parses. OpenAI's Astra benchmarks did not show a meaningful drop, but your format constraints may differ, especially for short or mathematical answers.
5. Document the choice for your team. Note the date, the project, and that a missing watermark later does not prove a human wrote the text.
6. If you also generate images or audio, keep using the separate image and audio path. Those files can carry Content Credentials and SynthID. Text watermarking does not replace that stack.

Cloud partners are expected to offer watermarking for OpenAI model outputs on their services in the coming weeks. Until that lands, assume direct API settings are the control you can set today.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/UZnOfPvhCdw"
    title="The EU AI Act Goes Live: Inside Article 50 Transparency Rules for Deepfakes, Chatbots, and AI Watermarking"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What a detection result can and cannot support

OpenAI lists five limits that should sit in any internal policy:

- A watermark can indicate that an OpenAI system generated or processed part of a passage. It does not measure how much a person edited or decided.
- It does not set ownership, lawful use, disclosure duties, or responsibility.
- It does not identify a user, account, prompt, or conversation. OpenAI says the detector reports whether it sees an OpenAI watermark without revealing prompts.
- It does not check whether the text is true.
- A miss does not prove human authorship. The passage may be short, edited, translated, from an unsupported model, created before watermarking, or written by another company's tool.

That last point is why OpenAI is not shipping a public text detector at launch. Applications for researcher and expert-organization access opened on 5 October, in line with the EU Code of Practice on AI-generated content. Qualifying uses named in the Help Center include academic work on provenance, detection reliability, and how people read results.

![Close-up of a circuit board representing machine-readable signals](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80)

## Check images and audio while text stays gated

Text is the new piece. Images and audio already have a public path, and OpenAI says that path stays public.

For a file you can upload, use openai.com/verify. The tool looks for supported signals such as a SynthID watermark or a trusted C2PA manifest tied to OpenAI. A hit means the file was likely generated by an OpenAI model. Developers can send a file to `POST /v1/content_provenance_checks` and read C2PA and SynthID results in the same response. The docs describe C2PA checks for images and SynthID checks for images and audio.

If you also review Google-generated media, the same idea shows up under a different name. Our guide to [checking SynthID watermarks in Gemini](/blog/check-synthid-watermarks-gemini/) walks through that signal. OpenAI embeds SynthID in supported images and audio as well, and adds Content Credentials on supported image outputs. Metadata can be stripped by a screenshot or a format change. A watermark may remain. Neither signal is a full history of who edited the file.

## Tips before you rely on a mark

Keep samples long enough to be meaningful. OpenAI's own tests show a clear gap between 200-token and 400-token passages, and a steep drop after light synonym edits.

Do not use a textGrain miss in a misconduct process. The company states that absence is not proof of human writing, and false positives remain part of the design target.

Separate EU product behavior from API behavior in your runbooks. EU ChatGPT and Codex text is scheduled to be marked. API text is opt-in and off by default, including for customers outside the EU.

Store provenance next to the content you publish. If you export ChatGPT text into a CMS, the watermark lives in the wording, not in a sidecar file. Heavy rewriting can erase it.

Revisit the setting when OpenAI updates the technical report or opens the method. The 5 October post says each part of the plan can change as evidence and standards move.

## Conclusion

textGrain is OpenAI's answer to machine-readable text marking under the EU AI Act, not a public authorship test. EU ChatGPT and Codex users should expect eligible text to carry the signal over the coming weeks. API teams can opt in from project or organization settings and should leave it off until they have checked their own prompts. Researchers who need a detector can apply. Everyone else should keep using openai.com/verify and the Content Provenance API for images and audio, and read any text result as a limited signal about OpenAI involvement.

## Sources

- OpenAI, "Our approach to EU text provenance rules," 5 October 2026: https://openai.com/index/eu-text-provenance/
- OpenAI Help Center, "Provenance signals in OpenAI-generated content": https://help.openai.com/en/articles/8912793-provenance-signals-in-openai-generated-content
- OpenAI API docs, Content Provenance: https://developers.openai.com/api/docs/guides/content-provenance
- OpenAI technical report, textGrain (PDF linked from the 5 October post): https://cdn.openai.com/pdf/e9508624-d767-41b6-a26d-e34ca798ada6/textgrain-entropy-calibrated-watermarking-for-language-model-text.pdf
- European Commission, Code of Practice on AI-generated content: https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content
