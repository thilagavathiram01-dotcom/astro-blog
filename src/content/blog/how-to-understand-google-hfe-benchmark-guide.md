---
title: "How to Understand Google’s HFE Benchmark"
description: "Guide to Google DeepMind’s Humanity’s First Exam measuring LLM reliability on everyday tasks, with leaderboard and Kaggle steps."
pubDate: 2026-11-25T10:30:00
heroImage: "https://images.unsplash.com/photo-1695144244472-a4543101ef35?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "tutorials", "how-to", "developer"]
noindex: false
---

Google DeepMind launched Humanity’s First Exam (HFE) on November 24, 2026. The benchmark tests whether frontier models answer simple, everyday questions consistently, not just once.

Most existing tests measure peak capability on hard math, coding, or science problems. HFE instead checks the reliability floor. Models that score high on single attempts still fail when the same task appears with small changes or must succeed on every try.

This guide explains the dataset, the scoring metrics, how to view the live leaderboard, and how to join the open Kaggle competition.

## What HFE Measures

HFE contains 544 elementary text and image prompts across 20 foundational capabilities. These include object counting, color identification, spatial reasoning, basic arithmetic, constraint satisfaction, and false-premise checks.

The prompts form 136 families. Each family has one seed prompt and three controlled variants. Variants keep the core task but change entities, clause order, or visual details. Every family uses the same modality for all four prompts.

About 58 percent of the prompts are multimodal (text plus image). The rest are text-only. A public subset of 112 prompts (28 complete families) is released under CC-BY-4.0 on Kaggle. The remaining 432 prompts stay private to limit contamination.

One public example asks a model to list the color of the third letter of each word in a neon sign, separated by semicolons. The expected answer is green; yellow; white; blue; blue.

![Neon AI sign on circuit board](https://images.unsplash.com/photo-1695144244472-a4543101ef35?auto=format&fit=crop&w=800&q=80)

## Key Metrics: Family Pass^4 and the Reliability Gap

Standard pass@1 records whether a model succeeds on a single sample. HFE adds stricter measures.

Family pass@4 checks whether at least one of the sampled attempts across a family succeeds. Family pass^4 estimates the probability that all four prompts in a family succeed across the required draws. In the technical evaluation, models receive six independent samples per prompt at temperature 1.0. An LLM judge then scores semantic equivalence to the gold answer.

Top models reach 96 to 98 percent on pass@1 and 100 percent on family pass@4. On family pass^4 they average roughly 85.8 percent (range 80.5 to 92.4 percent). The difference is called the Family Reliability Gap. It ranges from 7.6 to 80.1 percentage points across the 18 models tested.

Visual perception accounts for the majority of errors (around 73-74 percent). Extra reasoning time helps less on image tasks than on pure text or symbolic ones. Many failures are single-element slips rather than complete misunderstandings.

On the live Kaggle leaderboard at launch, GPT-6.2 Astra led at 90.7 percent family pass^4, followed by GPT-6.2 Sol at 87.5 percent and Gemini 4 Neon at 85.6 percent. Scores can shift as more submissions arrive and configurations differ slightly from the paper.

## How to View the Leaderboard and Public Dataset

1. Open the official Kaggle HFE leaderboard: https://www.kaggle.com/benchmarks/deepmind/hfe/leaderboard.
2. Sort by family pass^4 or other reported metrics to compare current frontier and fast models.
3. Download the public split from https://www.kaggle.com/datasets/deepmind/hfe-public. It contains 112 prompts in CSV and JSONL formats plus a reference agent.
4. Read the technical report at https://storage.googleapis.com/deepmind-media/papers/hfe_tech_paper.pdf for full methodology, error analysis, and model configurations.
5. Test your own prompts against the public examples to see where consistency breaks.

The public set lets developers reproduce scoring logic and experiment without risking the private holdout. Always treat public scores as directional; official rankings use the private set.

![AI represented by lightbulb and brain](https://images.unsplash.com/photo-1750365919878-2735d30fa3d8?auto=format&fit=crop&w=800&q=80)

## Joining the Kaggle Competition

DeepMind invites the community to keep HFE current. A three-week competition runs through December 15, 2026. Participants submit everyday questions that people solve quickly but current models still miss.

Steps to participate:

1. Visit the competition page on Kaggle (linked from the main HFE benchmark).
2. Review the submission guidelines for prompt format, gold answers, and evidence that models fail.
3. Create original, elementary tasks covering the 20 capability areas or new edge cases.
4. Include clear gold answers and, where relevant, image assets.
5. Submit before the December 15 deadline. Top contributions can earn Kaggle swag prizes totaling $50,000 in value.

Accepted prompts help refresh the dataset so scores remain relevant as models improve. Focus on reliable, verifiable tasks rather than adversarial puzzles.

## Practical Tips for Developers

Use family-style testing in your own evaluation harnesses. Run the same prompt and three close variants multiple times. Report both single-shot accuracy and a strict all-must-pass rate.

Prioritize visual and spatial checks when building agents that read screenshots or diagrams. The HFE results show these remain the weakest areas even for top models.

If you integrate Gemini models, compare their HFE-style reliability against the public leaderboard before shipping automated workflows that cannot tolerate occasional slips. For related DeepMind tools, see our guide on [accessing Genie 4 in Project Genie](/blog/access-genie-4-project-genie-guide/).

Temperature and sampling settings affect consistency. The official protocol uses temperature 1.0 with multiple independent draws. Match that setup when you want comparable numbers.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/5NCmJA8VoAE"
    title="Give Me 45 Minutes, I'll Make LLM Evaluation Click Forever"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Humanity’s First Exam shifts attention from peak scores to consistent everyday performance. High pass@1 numbers no longer hide reliability gaps. Developers can now track the live Kaggle leaderboard, experiment with the public 112-prompt set, and contribute new questions through mid-December.

Start by reviewing the technical report and the public dataset. Then test a few of your production prompts with family variants. The gap between one-shot success and reliable success is where most real-world failures appear.

## Sources

- Google Blog: Humanity’s First Exam: Testing LLM reliability (November 24, 2026)
- Technical report: Humanity’s First Exam: Measuring the Reliability Floor of LLMs
- Kaggle HFE leaderboard and public dataset (deepmind/hfe)
- Kaggle competition page for new prompt submissions through December 15, 2026
