---
title: "What Is the Multimodal Knowledge Agent Benchmark?"
description: "How the MKA benchmark tests AI agents on visual knowledge work and Gemini 4 Carbon quality and cost results."
pubDate: 2026-11-17T14:00:00
heroImage: "https://images.unsplash.com/photo-1731702981680-a38f38529d76?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "ai", "tutorials"]
noindex: false
---

Professional knowledge work often involves blueprints, schematics, scans, and charts that text-only models cannot fully understand. Google DeepMind and Artificial Analysis launched the Multimodal Knowledge Agent (MKA) benchmark on November 10, 2026, to measure how well AI agents handle these visual tasks and produce finished deliverables.

Gemini 4 Carbon places second in quality on the private 200-task set while finishing work at roughly six times lower average cost than the leading model. This article explains how MKA works, what the results show, and how to explore the public tasks.

## Why visual knowledge work needs a new benchmark

Most existing agent benchmarks can be solved from text alone. Real jobs in architecture, engineering, healthcare, finance, and science require reading page layouts, cross-referencing drawings, and producing polished reports, spreadsheets, or marked-up images.

Domain experts across 10 verticals and 83 occupations created the tasks. Each one mirrors a multi-step project that takes a seasoned professional three to eight hours. Scoring weights factual accuracy at 75 percent and visual design quality at 25 percent.

![Architectural blueprints spread across a work surface](https://images.unsplash.com/photo-1762146828422-50a8bd416d3c?auto=format&fit=crop&w=800&q=80)

## How MKA evaluates agents

Every model runs inside the same open-source agent harness called Stirrup. The harness supplies identical tools, a sandbox, and a fixed turn budget. This removes differences caused by custom scaffolding.

An agentic autorater grades each output. It opens files, renders pages, checks spreadsheet formulas, and compares results against an expert-written rubric of about 70 yes/no items. When domain experts reviewed the same outputs, they agreed with the autorater 96 percent of the time.

The full 200-task set stays private with Artificial Analysis so tasks cannot leak into training data or be searched online. Ten public sample tasks are available on Hugging Face for anyone to inspect and test.

Models show large efficiency differences. Tested systems used between 30 and 130 turns on average per task. Strong visual perception is required; removing vision causes large score drops.

## Gemini 4 Carbon results

Gemini 4 Carbon ranks second in quality among the models evaluated. It completes tasks at an average of six times lower cost than the top-scoring model. Carbon sits on the Pareto frontier of quality and price for the MKA evaluation.

Independent reporting from Artificial Analysis lists Claude Fable 5.2 at the top of the Climb WSR metric (around 57 percent), Carbon near 54 percent, and Claude Opus 5.5 near 53 percent. The differences between the top three are small enough that statistical tests treat them as effectively tied on the headline score.

No single model leads every vertical. Carbon performs particularly well in healthcare. Other models lead in engineering, construction, science, and law.

If you are already building with Carbon, see our guide to [adding Gemini 4 Carbon to Android apps with Firebase AI Logic](/blog/add-gemini-4-carbon-android-firebase-ai-logic/).

![Technical drawings and geometric projections](https://images.unsplash.com/photo-1727522974676-c2f9c32ee692?auto=format&fit=crop&w=800&q=80)

## What the benchmark reveals about agent behavior

Frontier models approach the same visual task in different ways. Some take many short steps; others plan longer sequences. Cost varies widely even among models with similar quality scores.

When vision is removed, models attempt to compensate with text reasoning and often fail on layout-dependent checks. This confirms that native multimodal perception is essential for professional visual work.

The autorater’s high agreement with human experts makes the scores reliable for comparing systems. Because the private set is held out, results better reflect generalization than memorization.

## How to explore MKA yourself

Visit the Artificial Analysis MKA page to view the public leaderboard and methodology. Download the 10 public tasks from the Hugging Face dataset (google/multimodal-knowledge-agent) to test your own agent harness.

Run models under the same Stirrup constraints if you want comparable numbers. Expect large differences in turn count and token use. Track both quality against the rubric and total cost.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/0JC1Mjsifz0"
    title="Gemini 4 Carbon: NO-HYPE Full Review (& Testing)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for using these insights

Choose models based on both quality and cost for document-heavy workflows. Carbon offers a strong balance for many visual knowledge tasks.

Test prompts that require reading multiple related files and producing a formatted deliverable. Include explicit instructions for layout, formulas, and citations.

Monitor turn efficiency. Excessively long trajectories increase cost without always improving accuracy.

## Conclusion

The Multimodal Knowledge Agent benchmark gives a clearer view of how AI agents perform real visual knowledge work. Gemini 4 Carbon delivers near-top quality at substantially lower average cost, placing it on the practical Pareto frontier.

Teams building agents for architecture, engineering, healthcare, or data analysis can use the public tasks and leaderboard to evaluate options. As more models are tested under the same harness, MKA will continue to highlight differences in perception, planning, and efficiency.

**Sources**

- Blog.google: Introducing the Multimodal Knowledge Agent benchmark (November 10, 2026)
- Artificial Analysis: Multimodal Knowledge Agent (MKA) benchmark article
- Hugging Face dataset: google/multimodal-knowledge-agent
- Technical report referenced in the Google DeepMind announcement
