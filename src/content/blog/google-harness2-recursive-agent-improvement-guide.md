---
title: "Set Up Google Harness2 for Recursive Agent Improvement"
description: "Step-by-step guide to install Google Harness2 and improve AI agent harnesses without retraining models. Official setup for developers."
pubDate: 2026-10-21T10:00:00
heroImage: "https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "ai", "developer"]
noindex: false
---

Google Research open-sourced Harness2, a framework that lets an AI agent refine the system around a frozen model. The model weights stay fixed. Gains come from editing prompts, tools, memory, and skills during a task.

A single refinement step improved tested setups across three professional benchmarks. GLM-5 under OpenCode rose from 64.2 to 75.7 on WorkBuddy-Bench. The project is research code under Apache 2.0, not an official Google product.

This guide covers installation, a local demo that needs no API keys, and the basic workflow for model-backed runs. It draws only from the [official repository](https://github.com/google-research/harness2) and the paper on arXiv.

## What a harness is

A harness is everything that turns a model into an agent: the system prompt, guardrails, memory, tool guidance, subagents, skills, scripts, and plugins. Harness2 treats these eight pieces as editable files. It never changes the underlying model.

Task-level recursion proposes candidate edits, runs them on the same task, and keeps only changes backed by observed differences in behavior. Harnessing-level recursion then stores the adopted harness and lessons for later tasks. The process works without ground-truth answers.

![Developer coding on a multi-monitor setup](https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=800&q=80)

## Prerequisites and install

You need Linux, Python 3.12 or 3.13, and the uv package manager. Clone the repository:

```bash
git clone https://github.com/google-research/harness2.git
cd harness2
```

Create a virtual environment and install the package:

```bash
uv venv --python 3.12 .venv
source .venv/bin/activate
uv pip install -e '.[render]'
```

The local demo runs with deterministic editors and real Python execution. It requires no model credentials:

```bash
harness2-demo --output runs/demo --k 2
```

This executes both parallel and sequential recursion modes. Inspect the output directory for the generated harness files and trajectories.

## How the recursion works

For the current task, an editor proposes two candidates: one targeting general agent failures such as planning or tool use, and one targeting domain knowledge. Both run on the identical task. A composer compares the trajectories and retains only edits supported by behavioral contrasts.

After the task, the framework writes the adopted harness and evidence-supported lessons into a persistent improvement harness. Future tasks start from this updated base. You can scale the task-level budget with the `--k` flag and choose `--mode parallel` or `--mode sequential`.

Parallel mode probes multiple candidates at once. Sequential mode carries the refined harness through successive steps. Official results show further gains when the recursion budget increases.

## Running model-backed benchmarks

For full benchmarks you need Node.js 20 or later, the Google Cloud CLI, and Vertex AI access. Copy the example environment file and set your project and model IDs:

```bash
cp .env.example .env
# Edit .env with GOOGLE_CLOUD_PROJECT and model settings
gcloud auth application-default login
```

Supported executors are OpenCode (default) and Codex. The reported experiments used Gemini 3.5 Flash and GLM-5, with Claude Opus 4.8 as the default editor.

To run a small LAB legal benchmark slice:

```bash
harness2-setup lab
harness2-check --bench lab
harness2 --bench lab --k 1 --mode parallel \
  --only-domains antitrust-competition --max-tasks 1
harness2-judge --bench lab --k 1 --mode parallel
harness2-report --bench lab --k 1 --mode parallel
```

Start with `--max-tasks 1` or `--dry-run` to control cost. Results land under the `runs/` directory, including adopted harnesses, reflection notes, and evaluation outputs. Repeat the same command to resume an interrupted run.

## Benchmark results from the paper

A single Harness2 step improved every tested configuration. On WorkBuddy-Bench (office, web, and code tasks), GLM-5 under OpenCode gained 11.5 points. Gemini 3.5 Flash under OpenCode moved from 72.4 to 77.5. JobBench and the LAB legal benchmark also showed gains, up to 4.5 points and 11.8 percentage points on partial pass rate respectively.

The authors note that a weaker model with an improved harness can outperform a stronger model on its original harness. These numbers come from three runs averaged; the framework does not guarantee the same lift on every custom task.

![Coder workspace with illuminated keyboard and code](https://images.unsplash.com/photo-1754548930550-be9fa88874f4?auto=format&fit=crop&w=800&q=80)

## Tips for practical use

Keep network access restricted before evaluation. The executor runs with unrestricted network access by default, and public benchmark materials may be reachable. Configure the restrictions described in the experiment guide.

Align on clear, measurable goals before a long run. Give the agent a concrete way to verify its own work, such as a test suite or logs. The framework is designed for open-world tasks that have no pre-existing grader.

If you already use agent skills or CLI tools, the same principle applies: the files and instructions around the model often matter as much as the model itself. See our guide on [Android skills for AI agents](/blog/android-skills-ai-agents/) for related patterns on device.

## Watch a hands-on test

The following video walks through a real legal task run with Gemini 3.5 Flash, shows the harness edits the agent produced, and compares results before and after one refinement step.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/zn2RMbMGVIY"
    title="Google Harness²: AI Agents That Fix Their Own Setup (I Tested It)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Harness2 demonstrates that agent quality can improve by editing the surrounding system rather than waiting for a stronger model. The local demo runs immediately. Model-backed experiments require Vertex AI credentials and incur API costs.

The repository includes setup guides, benchmark adapters for JobBench, LAB, and WorkBuddy-Bench, and clear disclaimers. Treat it as research infrastructure and review the license and third-party notices before production use.

## Sources

- [google-research/harness2](https://github.com/google-research/harness2) — official README, install instructions, and disclaimer
- [Harness^2: Recursive Agent Harnessing for an Open World](https://arxiv.org/abs/2610.14224) — paper with methodology and results
- Video: Google Harness²: AI Agents That Fix Their Own Setup (I Tested It)
