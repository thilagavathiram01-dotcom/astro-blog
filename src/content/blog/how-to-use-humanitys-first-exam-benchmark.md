---
title: "How to Use Humanity’s First Exam with Gemini"
description: "Step-by-step guide to testing Gemini model reliability with Google DeepMind’s Humanity’s First Exam benchmark on Kaggle."
pubDate: 2026-11-25T17:00:00
heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "tutorials", "how-to", "developer"]
noindex: false
---

Google DeepMind launched Humanity’s First Exam (HFE) on 24 November 2026. The benchmark measures whether large language models answer simple, everyday questions correctly every time, not just once.

Frontier models score high on complex math and coding tests. They still miss basic visual counting or color sequences across slight variations. HFE targets that reliability floor.

This guide shows how to access the public dataset, run evaluations against Gemini models via the Gemini API, and interpret the results. You will need a Google AI Studio API key and basic Python knowledge.

## What Humanity’s First Exam Measures

HFE contains 544 text and image prompts across 20 foundational capabilities. These include object counting, color identification, spatial reasoning, basic arithmetic, constraint following, and false-premise detection.

Prompts are grouped into 136 families. Each family has one seed prompt and three controlled variants that change entities, word order, or visual details while keeping the core task the same.

The headline metric is family pass^4. It estimates the probability that a model answers all four prompts in a family correctly across the required samples. Top models reach 96–98% on single-shot pass@1 yet average around 85.6% on family pass^4.

Visual perception accounts for roughly 74% of errors. Extra reasoning time helps less on image tasks than on pure text.

![Neon sign example from the Humanity’s First Exam public dataset](https://images.unsplash.com/photo-1540479792160-fb8181ec222c?auto=format&fit=crop&w=800&q=80)

One public example asks for the color of the third letter in each word of a neon sign. The expected answer is green; yellow; white; blue; blue.

## Access the Public Dataset on Kaggle

DeepMind released a stratified 20% public split of 112 prompts (28 complete families) under CC-BY-4.0.

1. Go to the Kaggle dataset page: https://www.kaggle.com/datasets/deepmind/hfe-public
2. Download `hfe_public_112.jsonl` or the CSV version.
3. Review the columns: uuid, prompt, gold_answer, modality, subcategory, and family identifiers.

The remaining 432 prompts stay private to limit contamination. Official scores appear on the Kaggle leaderboard at https://www.kaggle.com/benchmarks/deepmind/hfe.

A companion competition runs until 15 December 2026. Participants can submit everyday questions that current models still get wrong. The prize pool includes $50,000 in Kaggle swag.

## Evaluate Gemini Models with the Gemini API

You can run the public prompts against Gemini 4 models (Hydrogen, Neon, Carbon, or Argon) using the Gemini API in Google AI Studio.

First, install the client:

```bash
pip install google-generativeai
```

Set your API key as an environment variable. Then use this minimal evaluation script (adapt for multimodal prompts by uploading images):

```python
import google.generativeai as genai
import json
import os

genai.configure(api_key=os.environ["GEMINI_API_KEY"])
model = genai.GenerativeModel("gemini-4-neon")  # or gemini-4-hydrogen

with open("hfe_public_112.jsonl") as f:
    prompts = [json.loads(line) for line in f]

results = []
for item in prompts[:5]:  # start with a small sample
    response = model.generate_content(
        item["prompt"],
        generation_config={"temperature": 1.0}
    )
    results.append({
        "uuid": item["uuid"],
        "gold": item["gold_answer"],
        "model": response.text.strip()
    })

print(json.dumps(results, indent=2))
```

For full family pass^4 scoring, sample each prompt multiple times (the paper uses 6 draws) and check semantic equivalence against the gold answer. An LLM judge such as Gemini 3.1 Pro can grade free-form answers when exact string match is insufficient.

![Developer analyzing model evaluation results](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80)

Track both pass@1 (any correct sample) and family pass^4 (all variants correct). The gap between them is the Family Reliability Gap. Even the strongest models show gaps of 7–14 percentage points on HFE.

## Tips for Reliable Testing

- Use temperature 1.0 for sampling diversity, matching the official protocol.
- Separate text-only and multimodal results. Visual tasks drive most failures.
- Avoid contaminating the private holdout. Stick to the public 112 prompts for local experiments.
- Compare against the live Kaggle leaderboard. GPT-6.2 Astra currently leads at roughly 90.7% family pass^4, followed by GPT-6.2 Sol and Gemini 4 Neon.
- For production agents, treat high single-shot scores as insufficient. Require consistent success across variants.

If you already evaluate models on other Android-related benchmarks, see our guide on [choosing AI models with Android Bench 2.0](/blog/android-bench-2-0-choose-ai-models/).

## Watch a Short Overview

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/j7RT2-VySmo"
    title="Google's New AI Exam: Can Models Get Easy Questions Right Every Time?"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Humanity’s First Exam highlights a practical gap: models that solve hard problems can still fail simple, repeated ones. The public dataset and Kaggle leaderboard give developers a concrete way to measure and improve reliability.

Download the 112-prompt split, run it against your Gemini API key, and check the Family Reliability Gap. Then consider submitting new hard-for-models everyday questions before the 15 December deadline.

## Sources

- Google DeepMind blog: Humanity’s First Exam announcement (24 November 2026)
- Technical report: Humanity’s First Exam: Measuring the Reliability Floor of LLMs
- Kaggle dataset: HFE Public Split (CC-BY-4.0)
- Kaggle benchmark leaderboard and competition page
