---
title: "How to Evaluate AI Agents with the MKA Benchmark"
description: "Step-by-step guide to the Multimodal Knowledge Agent benchmark: public tasks, Gemini 4 Carbon results, and testing your own agents."
pubDate: 2026-11-11T09:00:00
heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "tutorials", "how-to"]
noindex: false
---

Google DeepMind and Artificial Analysis launched the Multimodal Knowledge Agent (MKA) benchmark on November 10, 2026. It tests how AI agents handle real professional work that depends on visual files such as architectural blueprints, engineering schematics, and clinical scans.

Unlike text-only benchmarks, MKA requires agents to produce finished deliverables like slide decks, spreadsheets, and marked-up drawings. Gemini 4 Carbon ranks second in quality while completing tasks at roughly six times lower average cost than the leading model.

This guide shows how to explore the public tasks, understand the results, and test an agent yourself.

## What the MKA Benchmark Measures

Most knowledge-work benchmarks can be solved from text alone. Everyday professional tasks look different. Architects cross-reference floor plans and elevations. Engineers trace schematics. Analysts synthesize charts and reports.

MKA was built with domain experts from 10 verticals and 83 occupations. The private evaluation set contains 200 tasks. Each task represents a multi-step project that would take a professional three to eight hours. Every task pairs a realistic prompt with a bundle of multimodal input files and an expert rubric of roughly 70 yes/no checks. Scoring weights 75 percent on factual accuracy and 25 percent on visual design.

![Laptop displaying data charts and graphs](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80)

Artificial Analysis runs every model in the same open-source agent harness called Stirrup. The harness provides a Linux sandbox, code execution, web search, and an image viewer. An agentic autorater grades the outputs. Domain experts agreed with the autorater 96 percent of the time when they reviewed results themselves.

The full 200-task set stays private to prevent leakage into training data. Google released a separate set of 10 public showcase tasks on Hugging Face so developers can inspect the format and test their own agents.

## Key Results from the November 2026 Evaluation

Claude Fable 5.2 leads the Climb Weighted Satisfaction Rate (WSR) at 57 percent. Gemini 4 Carbon follows at 54 percent, and Claude Opus 5.5 sits at 53 percent.

Gemini 4 Carbon sits on the Pareto frontier of quality and price. It completes tasks at about six times lower average cost than the top-scoring model. Cost per task across models ranges from roughly $1 to over $30 within a narrow band of top scores. Models also differ sharply in efficiency, using between 30 and 130 turns on average per task.

No single model dominates every vertical. Gemini 4 Carbon leads in healthcare. Gemini 4 Argon leads in science. Claude models lead several others. Strong visual perception is required. Models that lose vision attempt to compensate and fail on most tasks.

You can view the live leaderboard and methodology on Artificial Analysis.

## How to Explore the Public Showcase Tasks

The 10 public tasks cover unique domains: logistics and mapping, construction, engineering, science, business, finance, education, law and government, and software and data.

1. Open the Hugging Face dataset: https://huggingface.co/datasets/google/multimodal-knowledge-agent.
2. Download or browse a task folder under `tasks/task_<id>/`.
3. Read `metadata.json` for the full prompt, role, vertical, and economic rationale.
4. Inspect the input files in the `input/` folder. These include PDFs of drawings, spreadsheets, and images that cannot be solved by OCR alone.
5. Review `rubrics.json` for the weighted yes/no criteria.

One construction example asks the agent to produce an architectural section and elevation coordination audit PowerPoint. It must check floor plans against sections and elevations and report only mismatches.

These public tasks let you verify your agent’s ability to read dense visual files and generate polished deliverables.

## Testing an Agent with Gemini 4 Carbon

Gemini 4 Carbon is available on the paid tier of the Gemini API in Google AI Studio. It shares the same introductory pricing as Gemini 4 Argon: $2 per million input tokens and $10 per million output tokens through November 30, 2026.

To test Carbon on a public MKA-style task:

1. Sign in to Google AI Studio and enable billing for your project.
2. Select the model `gemini-4-carbon`.
3. Set the thinking level to medium or high for complex visual reasoning. High thinking uses more tokens but improves multi-step accuracy.
4. Upload the task’s input files (PDFs, images, spreadsheets).
5. Paste the full prompt from the metadata file.
6. Instruct the model to use tools for code execution if needed and to output the exact deliverable format requested (for example, a .pptx or .xlsx).

Here is a minimal Python example using the Interactions API:

```python
from google import genai

client = genai.Client()

interaction = client.interactions.create(
    model="gemini-4-carbon",
    input="Create a coordination audit PowerPoint from the attached floor plans and elevations. Report only mismatches."
    # Attach files via the files API or UI
)
print(interaction.output_text)
```

For full agent loops, use the open-source Stirrup harness from Artificial Analysis. It already supports Gemini models and provides the same tools used in the official evaluation. Install it with `pip install stirrup` and configure a Gemini client.

If you are already building with Carbon, see our guide to [building with Gemini 4 Carbon in AI Studio](/blog/how-to-build-with-gemini-4-carbon-in-ai-studio/) for setup, thinking levels, and code patterns.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/l32KKNKdpIk"
    title="Gemini 4 Carbon is Live!"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for Better Results on Visual Knowledge Work

- Give the agent explicit permission to view and crop images rather than relying on extracted text.
- Break long tasks into verification loops. Ask the model to list findings, then generate the deliverable, then self-check against the rubric.
- Prefer high thinking levels for tasks with dense schematics or multi-page drawings.
- Monitor token usage. Carbon’s long-horizon strength comes at higher cost if left unconstrained.
- Compare outputs side-by-side with the public task rubrics before scaling to private workflows.

## Conclusion

The Multimodal Knowledge Agent benchmark shifts evaluation from pure text reasoning to the visual, multi-file work that professionals actually perform. Gemini 4 Carbon delivers strong quality at a practical cost, placing it on the Pareto frontier for this new class of tasks.

Download the 10 public tasks, run them through your agent setup, and compare results against the published leaderboard. The combination of realistic prompts, expert rubrics, and an open harness gives developers a concrete way to measure progress on agentic knowledge work.

## Sources

- Google DeepMind: [Introducing the Multimodal Knowledge Agent benchmark](https://blog.google/innovation-and-ai/models-and-research/gemini-models/multimodal-knowledge-agent-benchmark/)
- Artificial Analysis: [MKA Benchmark](https://artificialanalysis.ai/evaluations/mka)
- Hugging Face: [google/multimodal-knowledge-agent](https://huggingface.co/datasets/google/multimodal-knowledge-agent)
- Stirrup agent harness: [GitHub](https://github.com/ArtificialAnalysis/Stirrup)
