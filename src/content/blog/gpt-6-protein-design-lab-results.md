---
title: "GPT-6 Designs Proteins That Bind in Lab Tests"
description: "OpenAI GPT-6 models design protein shapes and sequences using reasoning and code. Lab tests with Onava showed 35 of 322 minibinders bound targets."
pubDate: 2026-11-25T21:00:00
heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai", "ai-tools", "tutorials"]
noindex: false
---

OpenAI reported on 24 November 2026 that its GPT-6 family can design new protein structures and amino-acid sequences using only reasoning and general-purpose code. The models do not call specialized biology tools to generate the designs themselves.

Researchers can guide the process with ordinary language prompts that specify binding sites and desired shapes. In wet-lab tests run with partner Onava, proteins based on GPT-6.2 designs showed evidence of binding across five targets.

The findings appear in a preprint titled GPT-6 as a Universal Foundation Model for Protein Biology: Beyond Specialized Models. An internal research model matched or outperformed specialist tools on many computational tasks.

## Lab results from Onava

Onava synthesized and tested 322 small proteins called minibinders against five targets: PD-L1, IL-7Rα, TrkA, VEGF-A and IL-17A. Thirty-five designs (10.9 percent) bound their intended target. Hits broke down as five for PD-L1, three for IL-7Rα, one for TrkA, eight for VEGF-A and 18 for IL-17A.

At least one binder worked for every target. The strongest result against IL-17A reached a dissociation constant of 1.21 nanomolar. OpenAI notes that hit rates depend on filtering strictness and the exact definition of binding.

Specialized models still played supporting roles. SolubleMPNN supplied amino-acid sequences for the first round. Other tools such as Boltz-2, OpenDDE and ESMFold2 helped select candidates predicted to fold correctly and bind at the marked site.

![Scientist examining samples under a microscope in a laboratory](https://images.unsplash.com/photo-1631816285219-c6af3851e360?auto=format&fit=crop&w=800&q=80)

## Sequence redesign and antibody work

In separate experiments GPT-6.2 received existing minibinder structures and proposed new sequences without seeing the originals. Early screens showed binding in 75 of 88 designs for MDM2 (85 percent), 26 of 42 for VEGF-A (62 percent) and 8 of 59 for PD-1 (14 percent).

Median sequence differences from the originals reached 43 percent for MDM2, 50 percent for VEGF-A and 15 percent for PD-1. Across three unpublished structures, 14 of 107 new sequences bound (13.1 percent). For one PD-L1 structure the model produced two sequences that differed from each other at 44 of 90 positions.

Antibody loop redesign also retained function. Of 182 redesigned VHH fragments aimed at IL-4Rα, 128 (70 percent) showed signs of binding. Across fragments from five therapeutic antibodies targeting PD-1 or PD-L1, 179 of 272 (66 percent) kept binding. Roughly half the amino acids in the binding loops changed.

These results do not yet prove improved affinity or selectivity. They show that the model can rewrite substantial portions of a sequence while preserving the ability to bind.

## How the models reason

GPT-6 writes and runs code to explore shapes and amino-acid choices. When designing a minibinder for IL-7Rα, the model first proposed how the two proteins might interact, then settled on a design with five coiled sections.

The written reasoning draws on mathematics, physics, chemistry and patterns observed in known protein sequences and structures. Researchers steer the process by describing attachment points and overall shape in plain language instead of specialized model inputs.

Computational benchmarks showed progress. On the PoseBusters docking set GPT-6.2 matched the observed pose 93 percent of the time versus 50 percent for DiffDock-L. An internal model reached 96 percent. On MotifBench the internal model scored 43.7 percent against 27.8 percent for RFdiffusion.

Full structure prediction remains weaker. The models lag specialist tools such as ESMFold2 on sequence-to-structure accuracy. OpenAI states that the work does not yet establish end-to-end de novo minibinder generation without any specialist help.

![Researcher holding a multi-well plate in a laboratory](https://images.unsplash.com/photo-1575468130797-aa950b68aeec?auto=format&fit=crop&w=800&q=80)

## What the numbers mean for research

A 10.9 percent hit rate sits below some earlier specialist reports such as the original RFdiffusion study. OpenAI points out that direct comparison is difficult because filtering and binding definitions vary widely. The transparency of both strong and weak numbers is useful for the field.

The practical gain is flexibility. A general-purpose model accepts ordinary prompts and can incorporate new constraints without retraining a specialist architecture. Researchers already use Gemini-style tools for data analysis; the same prompt-driven style now applies to molecular design tasks.

If you work with large biological datasets, the same careful prompting habits apply. See the step-by-step guide on [analyzing data with Gemini in BigQuery](/blog/analyze-data-gemini-bigquery-step-by-step/) for patterns that transfer to scientific workflows.

## Tips for following the work

- Read the preprint for full methods, filtering criteria and per-target counts.
- Treat the 10.9 percent figure as an early, hybrid result rather than a replacement for specialist pipelines.
- Track whether later models close the gap on sequence-to-structure prediction.
- Watch for independent lab replications; the current numbers come from OpenAI and Onava.

## Sources

- [GPT-6 models demonstrate intrinsic protein-design capabilities](https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities/) — OpenAI
- Preprint: GPT-6 as a Universal Foundation Model for Protein Biology: Beyond Specialized Models

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/g2GN9uLebYo"
    title="How AI Designs New Proteins"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
