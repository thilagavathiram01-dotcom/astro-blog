---
title: "Humanity’s First Exam: Measure LLM Reliability"
description: "Google DeepMind’s Humanity’s First Exam measures if LLMs answer everyday questions reliably every time on Kaggle. Learn the family pass^4 metric and results."
pubDate: 2026-11-26T09:00:00
heroImage: "https://images.unsplash.com/photo-1695144244472-a4543101ef35?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials"]
noindex: false
---

Frontier models solve hard math and coding problems with high accuracy. They still miss simple color counts or object tallies on repeated tries. Google DeepMind launched Humanity’s First Exam (HFE) on 24 November 2026 to measure that reliability gap.

HFE uses 544 elementary text and image prompts across 20 foundational capabilities. Prompts form 136 families of four related variants. The test asks whether a model answers every slight variation correctly, not whether it succeeds once.

## What the benchmark contains

Each family starts with a seed prompt and adds three controlled changes. Changes alter objects, order, or visual details while keeping the core task. 316 prompts are multimodal (text plus image). 228 are text-only. Every family stays in one modality.

One public example shows a neon sign. The prompt asks for the color of the third letter in each word, listed in order and separated by semicolons. The expected answer is green; yellow; white; blue; blue.

![Neon AI sign on a circuit board](https://images.unsplash.com/photo-1695144244472-a4543101ef35?auto=format&fit=crop&w=800&q=80)

DeepMind released a stratified public subset of 112 prompts (28 complete families) under CC-BY-4.0 on Kaggle. The remaining 432 prompts stay private to limit contamination. Live scores appear on the Kaggle HFE leaderboard.

## How family pass^4 scoring works

Standard pass@1 records success on a single sample. Family pass@4 checks whether at least one sample across the four prompts succeeds. Family pass^4 estimates the probability that all relevant samples across the four prompts are correct. It acts as the reliability floor.

The technical report evaluates models zero-shot, single-turn, without tools. Each prompt receives six independent draws at temperature 1.0. A Gemini 3.1 Pro judge checks semantic equivalence to the gold answer.

The Family Reliability Gap is the difference between the capability ceiling (family pass@4) and the reliability floor (family pass^4). Large gaps show models that can solve a task once but fail on close variants.

## Early results from 18 models

The top five models reach 96% to 98% on pass@1 and 100% on family pass@4. Their average family pass^4 score is 85.8%, ranging from 80.5% to 92.4%. Across all 18 models the reliability gap spans 7.6 to 80.1 percentage points.

Visual perception accounts for roughly 73–74% of wrong answers. Position, direction, or path errors make up about 31%. Object counting accounts for about 23%. Extra reasoning time helps text and symbolic tasks more than visual ones. In 39% of failed prompt–model pairs the answer is off by one element. This pattern appears in 167 of 298 counting errors.

On the live Kaggle leaderboard at launch, GPT-6.2 Astra (xhigh) led near 90.7%. GPT-6.2 Sol (xhigh) followed near 87.5%. Gemini 4 Neon (high) sat near 85.6%. Scores include confidence intervals and depend on sampling settings. The technical report and leaderboard use slightly different configurations.

![Blue neon sign at night](https://images.unsplash.com/photo-1766188396253-0c0c5d947895?auto=format&fit=crop&w=800&q=80)

## How to explore the public data and leaderboard

Open the Kaggle benchmark page for Humanity’s First Exam. The leaderboard lists models with their family pass^4 scores and reasoning levels. Download the public dataset from the linked Kaggle dataset page. It includes CSV and JSONL files with prompt IDs, gold answers, and metadata.

Load the 112 public prompts into your own evaluation harness. Sample six responses per prompt at temperature 1.0. Grade them against the gold answers. Compare your results to the published scores. This process mirrors the protocol used for the private holdout.

For teams that already run Gemini-assisted analysis, the same structured prompting style applies. See the guide on [analyzing data with Gemini in BigQuery](/blog/analyze-data-gemini-bigquery-step-by-step/) for a related workflow that turns natural language into repeatable queries.

## Join the three-week Kaggle competition

DeepMind invites submissions of everyday questions that current models still get wrong. The competition runs through 15 December 2026. Selected prompts will refresh the HFE dataset. Contributors may receive acknowledgment in future papers. The prize pool includes $50,000 in Kaggle merchandise.

Submit tasks that a person can solve in one or two minutes. Focus on counting, color identification, spatial order, or simple arithmetic with visual elements. Clear, unambiguous answers help the grading process.

## Tips for using HFE results

Check both the reliability floor and the gap, not only the single-shot score. A model that hits 100% family pass@4 can still sit at 85% on family pass^4. That difference matters for automated pipelines that cannot tolerate occasional slips.

Visual tasks drive most errors. Test your own image-based workflows with repeated samples. Text-only families show higher consistency for the top models.

Scores do not predict failure rates in ordinary use. They stress elementary reliability under controlled variation. Combine HFE with domain-specific tests for production decisions.

Frontier models improved on HFE over the six months before launch. The public leaderboard and competition keep the measure current as models advance.

## Conclusion

Humanity’s First Exam shifts focus from capability ceilings to reliability floors. The 544-prompt set and family pass^4 metric reveal gaps that single-shot benchmarks hide. Download the public split, review the leaderboard, and consider submitting a hard everyday question before 15 December.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/j7RT2-VySmo"
    title="Google's New AI Exam: Can Models Get Easy Questions Right Every Time?"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- [Humanity’s First Exam: Testing LLM reliability](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/humanitys-first-exam/) — Google DeepMind blog, 24 November 2026
- [Humanity’s First Exam technical report](https://storage.googleapis.com/deepmind-media/papers/hfe_tech_paper.pdf) — Google DeepMind, 24 November 2026
- [Humanity's First Exam (HFE) - Public Split](https://www.kaggle.com/datasets/deepmind/hfe-public) — Kaggle dataset
- [HFE leaderboard](https://www.kaggle.com/benchmarks/deepmind/hfe/leaderboard) — Kaggle
