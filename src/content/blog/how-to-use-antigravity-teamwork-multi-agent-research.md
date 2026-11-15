---
title: "How to Use Antigravity /teamwork for Complex Research"
description: "Step-by-step guide to Google Antigravity /teamwork multi-agent teams for long-horizon research, proofs, and large coding projects."
pubDate: 2026-11-15T19:00:00
heroImage: "https://images.unsplash.com/photo-1707944745899-104a4b12d945?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "ai", "productivity", "google"]
noindex: false
---

Google Research shared results on November 13, 2026, from Antigravity’s /teamwork multi-agent systems. Researchers used Gemini 4 models with specialized agent teams to prove the 2013 Courtade–Kumar conjecture in full generality and formalize it in Lean 4. The same tools are now available for external users on paid plans.

/teamwork coordinates agents across hours or days for projects too large for a single session. It partitions context, runs independent verification, and hands off clean artifacts between milestones.

![Scientists collaborating on research in a laboratory](https://images.unsplash.com/photo-1707944745899-104a4b12d945?auto=format&fit=crop&w=800&q=80)

## What /teamwork Does

The command launches a multi-agent team with clear roles. A Sentinel coordinates. A Project Orchestrator breaks work into milestones. Explorers research without editing files. Workers implement in isolated tracks. Critics, Challengers, Auditors, and a Success Auditor verify at each gate.

It runs in a dedicated project directory (default ~/teamwork_projects/{PROJECT_NAME}). Exclusive file ownership prevents conflicts. Context stays partitioned so long runs do not lose detail.

Execution paths include general distributed coding (default), iterative coding for smaller changes, document review, and math/proof modes (including large-team variants for hard conjectures).

## When to Choose /teamwork

Use it for multi-milestone projects that span hours to days: repository-wide migrations, system simulations, formal proofs, or deep research. For hard but shorter debugging, prefer /boost. For broad tasks that split cleanly across independent files, use /swarm on Pro or Ultra plans. Everyday questions stay with the default agent.

Paid plans are required. Academic researchers can apply for six months of free highest-tier access via the form linked from the Google Research post.

## Step-by-Step Setup and Use

1. Open the Antigravity App or CLI on a paid plan. Sign in with your Google account.
2. Start a new conversation and type `/teamwork` followed by your goal. Example: `/teamwork Prove the bounds for adaptive data analysis queries and formalize the result in Lean 4.`
3. Complete the Phase 1 scoping interview. The agent asks about objectives, requirements, independent verification methods (tests, benchmarks, or rubrics), acceptance criteria, and the working directory. Specify what you want, not how to build it.
4. Review the generated prompt artifact. Edit if needed, then approve with a single confirmation.
5. Phase 2 runs autonomously. Sentinel and the Project Orchestrator coordinate Workers and verification agents. Monitor progress in the subagent panel (App) or status bar (CLI). Use Alt+J in the CLI to jump to agents waiting for approval.
6. The Success Auditor performs a final end-to-end check before presenting results. Review artifacts (request, project plan, progress) in the workspace folder.

Integrity modes range from development (lenient, default) to demo and benchmark (strictest, from-scratch only). The interview maps your constraints to a mode.

![Two colleagues collaborating on a laptop](https://images.unsplash.com/photo-1758876203026-99a024dc43b9?auto=format&fit=crop&w=800&q=80)

## Tips for Better Results

Provide clear, testable acceptance criteria during the interview. Pair the system with external verifiers such as Lean 4, existing test suites, or hardware oracles when possible. Start with a bounded task that has an automated pass/fail signal.

Multi-agent runs consume quota faster than single chats. Monitor usage on paid plans. For Gemini model details, see the earlier guide on [how to use the Gemini 4 Hydrogen API](/blog/how-to-use-gemini-4-hydrogen-api-guide/).

Keep humans in the loop for final acceptance. The system is designed for collaboration with experts, not fully unsupervised deployment on production systems.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/buHC7bQE1X4"
    title="Get Out of the Model's Way — Kevin Hou, Google Antigravity"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

/teamwork turns Antigravity into a research partner for open problems that need sustained multi-agent effort and rigorous checks. The November 13 results on the Courtade–Kumar conjecture and related formalizations show the pattern in action. Run a scoping interview on a real project, approve the prompt, and let the team work through verified milestones.

## Sources

- [Advancing science & engineering with Antigravity’s /teamwork](https://research.google/blog/advancing-science-engineering-with-antigravitys-teamwork-feature/) — Vahab Mirrokni, Google Research, November 13, 2026
- [Teamwork agent teams (/teamwork)](https://antigravity.google/docs/teamwork/) — Google Antigravity Docs
- [Teamwork: when AI becomes a research partner](https://antigravity.google/blog/teamwork-when-ai-becomes-a-research-partner/) — Antigravity Blog
- Researcher access program form linked from the Google Research post
