---
title: "How to Use Antigravity Teamwork With Gemini 3.7 Flash"
description: "Run /teamwork-preview in Google Antigravity with Gemini 3.7 Flash: scope the brief, pick an integrity mode, and let agent teams verify work."
pubDate: 2026-09-23T16:00:00
heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["developer", "gemini", "ai-tools", "tutorials", "ai"]
noindex: false
---

A single Gemini session can write a patch. It struggles when the work lasts hours, spans dozens of files, or needs a proof that other agents try to break.

Google Antigravity Teamwork is the multi-agent layer for that class of job. Google documented updates on August 27 and August 31, 2026. Pairing Teamwork with Gemini 3.7 Flash is how the company reported long-horizon math, a RISC-V simulator that boots xv6, and merged library patches.

This guide follows Antigravity Docs for `/teamwork-preview`, the Teamwork research post, and the Gemini 3.7 Flash model announcement. Treat Google’s research scores as Google’s scores. Your repo and budget will look different.

## What Teamwork is (and is not)

Teamwork is a preview slash command in Antigravity 2.0 and the Antigravity CLI. Docs say it is for large software projects, complex simulations, and deep research. Agents propose, critique, and refine work over hours or days.

Google says it is available as `/teamwork-preview` on all paid plans. It is not the default chat agent. It is not a one-shot “fix this file” command. For a small bug, the docs tell you to opt into the lighter iterative path or skip Teamwork.

Roles the docs name:

- **Sentinel** takes over after you approve the brief, posts progress, and starts the Success Auditor at the end.
- **Project Orchestrator** splits the brief into milestones and hands work to a fresh successor between milestones.
- **Explorers** read the repo and do not edit source.
- **Workers** use terminal and file tools on non-overlapping tracks.
- **Critic, Challenger, Auditor, Success Auditor** review, attack, and check evidence before a milestone ships.

Work lives in a dedicated folder. Default is `~/teamwork_projects/{PROJECT_NAME}`.



![Developer workstation with multiple monitors and code](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)



## Pick Gemini 3.7 Flash before you start a team

Antigravity’s model table lists Gemini 3.7 Flash on Free, Google AI Plus, Pro, Ultra, and Enterprise. The reasoning model is sticky for a user turn. Change it before you send `/teamwork-preview`, not mid-run.

Google’s August 13 model post prices 3.7 Flash at an introductory **$0.75 per 1M input tokens** and **$3.75 per 1M output tokens** through December 31, 2026. That rate also applies to 3.6 Flash for the same window.

Reported coding numbers versus 3.6 Flash: DeepSWE v1.1 **65.3% vs 49.0%**, FrontierCode 1.1 Main **43.6% vs 34.4%**, WebDev Arena Elo **1588 vs 1538**. Knowledge-work GDP.pdf: **34.0% vs 22.0%**. Those are Google’s published evals.

For Teamwork research, Google says Long Proof with Gemini 3.7 Flash and 3.1 Pro reached **71% on TCSBench** in internal testing. Three of seven listed math results were reproduced with 3.7 Flash. The consumer Teamwork preview balances cost and parallelism; some published runs used higher parallelism than the default product.

If you already use 3.7 Flash for single-agent coding, keep that loop for small diffs. See the [Gemini 3.7 Flash coding agents guide](/blog/gemini-3-7-flash-coding-agents/) for the single-agent path. Use Teamwork when you can name an independent test the team must pass.

## Run Phase 1: scope the brief

Docs split every Teamwork project into two phases. Phase 1 is a scoping interview. Principle: specify what, not how.

1. Open Antigravity 2.0 or the CLI on a paid plan.
2. Select **Gemini 3.7 Flash** in the model dropdown under the prompt box.
3. Start a new conversation and send a goal with the command:

```
/teamwork-preview Migrate our REST API service from Express to Fastify, including full test coverage, TypeScript typing, and benchmark validation.
```

4. Answer the interview in order: purpose (demo, production, eval, exploration), audience, requirement blocks you actually care about, and an objective check for each requirement.
5. Agree acceptance criteria that a script or independent agent can judge.
6. Confirm the project directory. Change it if `~/teamwork_projects/` is the wrong disk.
7. Read the generated **prompt artifact**. Edit constraints. Do not approve a brief that lets agents push to `main` or touch secrets.

Integrity modes recorded in that artifact:

| Mode | When to pick it |
| --- | --- |
| **development** (default) | Fast iteration. Auditor flags fakes and facade code. Libraries are allowed. |
| **demo** | Reproducible talk or blog. No copying core logic from open source, no outsourcing the core to external tools, no reading tests to reverse-engineer answers. |
| **benchmark** | From-scratch eval. Standard library only. Strictest Auditor. |

If you ban all four shortcuts the docs list, the run maps to **benchmark**.



![Notebook and laptop used for planning a software project](https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80)



## Run Phase 2: let the team work, then read artifacts

After you approve the prompt, Sentinel hands the project to the Project Orchestrator. You should not type step-by-step commands. Watch artifacts instead.

Artifacts in the workspace:

- **Request** — original goal, constraints, acceptance tests.
- **Project plan** — milestones, tracks, dependencies.
- **Progress** — live status.

Watch the UI subagent panel or the CLI status bar. Exclusive file ownership means two Workers should not edit the same file at once. Each subagent keeps scratch files in its own directory.

Execution path is chosen from your wording:

- Default: **General / Distributed coding** for multi-file work and simulations.
- Say “keep it small” or “keep it focused” for **Iterative coding** that cannot split the task.
- “Review this paper” or “critique this design doc” for **Document Review**.
- “Prove theorem X” for **Math / Proof**.
- “Use a very large team of agents” for **Math / Proof (Large Team)**.

Success Auditor must confirm an end-to-end pass before Sentinel presents the project. If tests were mocked, Auditor is supposed to reject the milestone.

Official I/O demo of the agent-first Antigravity desktop app:

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/T_fnhr5lVBw"
    title="Google Antigravity | I/O 2026 Keynote"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What Google claims Teamwork already did

Use these as existence proofs, not as a promise that your first run will match them.

**Math.** Seven listed results include improved coreset bounds for ℓp subspace approximation (FOCS open problem; arXiv:2608.26047), a sparse convex optimization lower bound (JMLR; arXiv:2608.02588), and Knuth’s Cycles constructions with 40-plus page Lean-checked proofs. Google says human experts confirmed the listed results except Knuth, which was checked in Lean.

**Systems.** With Gemini 3.7 Flash, Teamwork built a cycle-accurate out-of-order RISC-V simulator that boots xv6 to shell. Google reports **0.71%** cycle alignment error versus hardware ground truth and 100-plus RISC-V benchmarks.

**Open source.** Google reports upstream work on Eigen SIMD paths and ParlayHash (**2×** insert throughput, **25%** less memory).

Those campaigns can run longer than a lunch break. Budget tokens and disk before you point Teamwork at a production monorepo.

## Tips that keep a run inspectable

**Name the oracle.** “Tests must pass `npm test` and this latency script” is an Auditor job. “Make it better” is not.

**Keep secrets out of the project folder.** Isolated directories still inherit your machine credentials if a Worker runs a deploy script you left in PATH.

**Do not change the model mid-turn.** Docs say a mid-run model switch waits until the current user turn finishes or you cancel.

**Start in development mode.** Switch to demo or benchmark only when you need the extra bans.

**Read Critic and Challenger notes before you merge.** Teamwork can be confident and wrong in the same milestone. The point of the extra agents is the paper trail.

## Conclusion

Teamwork is Antigravity’s paid-plan preview for work that needs a team, not a single chat. Set Gemini 3.7 Flash, invoke `/teamwork-preview`, finish the scoping interview, pick an integrity mode, and approve one prompt artifact. Then read plan and progress files while Sentinel, Orchestrator, Workers, and auditors run in an isolated directory.

Use it for migrations, simulations, and proofs you can test. Leave everyday one-file edits to a normal 3.7 Flash session.

## Sources

- [Teamwork agent teams (/teamwork-preview) — Antigravity Docs](https://antigravity.google/docs/teamwork/)
- [Teamwork: When AI Becomes a Research Partner](https://antigravity.google/blog/teamwork-when-ai-becomes-a-research-partner)
- [Gemini Multi-Agent Teams in Antigravity](https://blog.google/innovation-and-ai/technology/developers-tools/antigravity-teamwork-multi-agent/)
- [Introducing Gemini 3.7 Flash](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/)
- [Gemini 3.7 Flash in Google Antigravity](https://antigravity.google/blog/gemini-3-7-flash-in-google-antigravity)
- [Antigravity models](https://antigravity.google/docs/models)
