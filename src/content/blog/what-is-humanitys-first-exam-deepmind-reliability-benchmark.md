---
title: "What Is Humanity’s First Exam? DeepMind’s LLM Reliability Benchmark"
description: "Humanity’s First Exam (HFE) by Google DeepMind tests LLM reliability on everyday tasks. Learn key metrics, leaderboard results, and how to join the Kaggle competition."
pubDate: 2026-11-25T14:00:00
heroImage: "https://images.unsplash.com/photo-1695144244472-a4543101ef35?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai", "gemini", "tutorials"]
noindex: false
---

Google DeepMind launched Humanity’s First Exam (HFE) on November 24, 2026. This benchmark measures whether large language models answer simple, everyday questions consistently, not just once.<grok type="render_inline_citation" citation_id="348" />

Most existing tests focus on peak performance in math, coding, or science. HFE instead checks the reliability floor. It asks if a model can solve elementary tasks every time, even with small variations.

The dataset contains 544 text and image prompts across 20 foundational capabilities. These group into 136 families of four related prompts each: one seed and three controlled variants.<grok type="render_inline_citation" citation_id="350" />

## Why Reliability Matters More Than Peak Scores

Frontier models score high on single attempts. The top five reach 96% to 98% on pass@1. They also hit 100% on family pass@4, meaning they solve at least one version of a task family correctly.<grok type="render_inline_citation" citation_id="350" />

Yet the headline metric, family pass^4, averages only 85.8% for those same models. This measures the chance that all four prompts in a family succeed across multiple draws. The gap between ceiling and floor, called the Family Reliability Gap, ranges from 7.6 to 80.1 percentage points across 18 models tested.<grok type="render_inline_citation" citation_id="350" />

Visual perception drives most errors. About 74% of wrong answers come from counting objects, identifying colors, or spatial reasoning. Extra thinking time helps far less on visual tasks than on text or symbolic ones. In 39% of failed prompt-model pairs, the answer is off by a single element.<grok type="render_inline_citation" citation_id="351" />

![Neon AI sign on circuit board representing reliability challenges](https://images.unsplash.com/photo-1695144244472-a4543101ef35?auto=format&fit=crop&w=800&q=80)

## How HFE Works: Families, Metrics, and Evaluation

Each family shares the same underlying task but changes entities, word order, or visual details. This tests whether success depends on exact phrasing or image layout.

Evaluation uses six independent draws per prompt at temperature 1.0. An LLM judge checks semantic equivalence to the gold answer. Family pass^4 estimates the unbiased probability that all four prompts in a family pass on four out of six draws. The public split releases 112 prompts (28 families) under CC-BY-4.0 so researchers can reproduce results without contaminating the full set.<grok type="render_inline_citation" citation_id="349" />

One public example asks for the color of the third letter in each word of a neon sign, listed in order and separated by semicolons. The answer is green; yellow; white; blue; blue.<grok type="render_inline_citation" citation_id="348" />

Human judges without AI tools achieved 90.8% success on the base tasks, confirming the questions are elementary for people.<grok type="render_inline_citation" citation_id="357" />

## Current Leaderboard Highlights

At launch, OpenAI’s GPT-6.2 Astra (xhigh) led the Kaggle leaderboard at 90.7% family pass^4. GPT-6.2 Sol followed at 87.5%, and Google’s Gemini 4 Neon (high) placed third at 85.6%.<grok type="render_inline_citation" citation_id="354" />

All three reached 100% family pass@4. The technical report ranks Astra highest at 92.4% family pass^4 in its evaluation of 18 models. These numbers show progress over six months, yet the reliability gap remains clear.<grok type="render_inline_citation" citation_id="353" />

![Stylized brain with neural connections illustrating AI consistency](https://images.unsplash.com/photo-1737505599159-5ffc1dcbc08f?auto=format&fit=crop&w=800&q=80)

## How to Explore the Benchmark and Join the Competition

Start by reviewing the live leaderboard on Kaggle. Download the public split dataset to test your own prompts or models. The reference agent code draws six concurrent completions for comparison.<grok type="render_inline_citation" citation_id="349" />

To help expand HFE, join the three-week Kaggle competition that runs through December 15, 2026. Submit everyday questions that almost anyone solves in a minute or two, but current frontier models still get wrong. The prize pool is $50,000 in Kaggle swag.<grok type="render_inline_citation" citation_id="354" />

Strong submissions have concise, verifiable answers and support natural variants. Categories that work well include object counting, color identification, spatial reasoning, and detecting missing elements. For developers building with Gemini, this highlights why consistency checks matter alongside capability tests. You can explore related tools in our guide on [accessing Genie 4 for interactive worlds](/blog/access-genie-4-project-genie-guide/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/G5nksgpEbN8"
    title="I Re-Ran My AI Eval With Nothing Changed. 76% Became 83%: Flaky LLM Tests, pass@k vs pass^k"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for Interpreting HFE Scores

Check the exact metric. Family pass^4 is stricter than pass@1 or family pass@4. A model that solves a task once may still fail its variants.

Watch for modality differences. Text-only families score higher than multimodal ones for most models. Visual perception remains the weakest area.

Compare thinking levels. Higher reasoning budgets improve text and symbolic tasks more than pure visual ones.

Use the public subset for local testing, but rely on the private holdout for official rankings to avoid contamination.

## What This Means for Everyday AI Use

High single-shot scores can hide inconsistency. If you rely on a model for repeated tasks such as counting items in photos, extracting colors, or following simple sequences, the reliability floor matters more than peak performance.

HFE shows that progress on hard benchmarks does not automatically raise the floor. The community competition aims to keep the dataset current as models improve.

Read the full technical report for methodology details and confidence intervals. Explore the Kaggle leaderboard for the latest rankings.

Sources:
- Google DeepMind blog announcement
- HFE technical report
- Kaggle public dataset and leaderboard
- Kaggle competition announcement

This benchmark gives a clearer view of where current models still stumble on basic consistency. Test it yourself and contribute new prompts before the December 15 deadline.
