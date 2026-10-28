---
title: "Google Elephant-Goldfish Model: Design-First AI Coding Guide"
description: "Install and use Google's open-source Elephant-Goldfish Model plugin for design-first AI coding with Claude Code, Codex, and Antigravity."
pubDate: 2026-10-28T14:00:00
heroImage: "https://images.unsplash.com/photo-1569693799105-4eb645d89aea?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "developer", "google"]
noindex: false
---

Google open-sourced the Elephant-Goldfish Model plugin on October 22, 2026. Thousands of Google engineers already use it daily to ship production code. The plugin enforces a design-first workflow before any AI agent writes a single line of code.<grok type="render_inline_citation" citation_id="171" />

The Elephant holds full project context and drafts the specification. Goldfish reviewers start with zero memory of the conversation. They read only the design document and referenced source files. This separation surfaces assumptions and edge cases that a single long-running session often misses.

You remain the decision maker. Approve the specification before implementation begins.

## Why design before code

AI coding tools increase velocity. They also increase the volume of incomplete or ambiguous implementations. When one session both designs and codes, it inherits the same blind spots.

The Elephant-Goldfish Model (EGM) splits the work. The Elephant explores options under a strict no-code rule. Goldfish sessions validate the resulting document without prior conversation history. The result is a specification a fresh agent can implement without inventing missing decisions.

This matches the principle that design is the new code. Clear specifications reduce rework more effectively than faster code generation alone.<grok type="render_inline_citation" citation_id="181" />

![Laptop displaying source code on a desk](https://images.unsplash.com/photo-1569693799105-4eb645d89aea?auto=format&fit=crop&w=800&q=80)

## Core roles and commands

Three roles operate in the workflow:

- **Elephant**: Loads project history, architecture, and requirements. Drafts the design. Writes no code.
- **Goldfish**: Stateless subagents. Read only the design document and named source files. Surface gaps, ambiguities, and edge cases.
- **You**: Make trade-offs, resolve conflicts, and approve the final specification.

The plugin exposes three primary commands:

1. `/egm-brainstorm` — Clarify the concept. Spawn Goldfish reviewers across multiple lenses. Produce a concepts brief.
2. `/egm-draft` — Turn the brief into a Markdown design document under `docs/designs/`. Iterate section by section.
3. `/egm-review` — Run the Goldfish Protocol: comprehension check, antagonistic review, and implementation-readiness gate.

After approval, hand the specification to your coding agent for implementation. An optional drift report compares the finished code against the specification.

In Claude Code the commands appear with the `/egm:` prefix. Codex and Antigravity expose them as skills or slash commands after installation.

## Install the plugin

Install the complete plugin. Skills alone do not include the reviewer personas or document standards.

### Antigravity

```bash
agy plugin install https://github.com/google/elephant-goldfish-model
```

You can also open the Plugins Manager inside the IDE or CLI and install from the marketplace.

### Claude Code

```bash
claude plugin marketplace add google/elephant-goldfish-model
claude plugin install egm@egm
```

If the commands do not appear, enable the plugin:

```bash
claude plugin enable egm@egm
```

Start a fresh session after installation.

### Codex

```bash
codex plugin marketplace add google/elephant-goldfish-model
codex plugin add egm@egm
```

Select the `egm` skill from the available skills in a new session. Resolve paths relative to the installed skill directory rather than assuming a fixed cache location.

Support also exists for Claude Cowork and ChatGPT Work. Consult the repository’s harness documentation for those environments. The plugin is not an officially supported Google product.<grok type="render_inline_citation" citation_id="173" />

## Step-by-step workflow

1. Choose a feature that requires design decisions. Small, clear bug fixes stay on your normal coding path.
2. Start a new session and run `/egm-brainstorm` (or `/egm:egm-brainstorm` in Claude Code). Describe the goal. Answer clarifying questions. Review the concepts brief the Goldfish swarm produces.
3. Run `/egm-draft`. The Elephant builds the Markdown design document section by section. Cover the problem, technical plan, alternatives considered, and an implementation plan that names specific files.
4. Run `/egm-review`. A Goldfish first explains the design back. If the summary is incomplete or wrong, return to drafting. Additional Goldfish then perform antagonistic review for edge cases, hidden dependencies, and logical gaps. A final check confirms file paths, data structures, and function signatures are present and unambiguous.
5. Approve the specification. Ask your coding agent to implement it. Save approved designs under `docs/designs/`.
6. Optionally generate a drift report after implementation to compare code against the specification.

The process is fluid. Use the command that addresses the current bottleneck. Keep the no-code rule during brainstorm and draft phases.

![Close-up of computer source code on a monitor](https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=800&q=80)

## Practical tips

- Start with a medium-sized feature rather than a full application rewrite. The first successful cycle builds confidence in the review loop.
- Keep design documents self-contained. A Goldfish that cannot reconstruct the plan from the document alone signals ambiguity.
- Resolve antagonistic findings before the implementation-readiness check. Open decisions left in the specification force the coding agent to invent details.
- Monitor token or credit usage. Each Goldfish review consumes a fresh session.
- Customize the Markdown rules and personas in the repository if your team uses different document standards.
- For existing codebases, the bootstrap skill can generate per-directory READMEs that improve Elephant context.

Teams already using agent skills for Android development can layer EGM on top of those workflows. The design document becomes the contract the agent implements. See our guide on [Android CLI skills for any agent](/blog/android-cli-skills-any-agent/) for related setup patterns.

## Watch the workflow

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/GUhW6I-c3iA"
    title="Elephant-Goldfish: Google's Free 2-AI Workflow, Now in Claude"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## When to use EGM

Use the plugin when a feature involves architectural choices, new data flows, or non-obvious edge cases. Skip it for trivial one-line fixes or well-understood library upgrades.

The open-source repository includes customizable rules, defined subagent personas, and structured review workflows under the Apache 2.0 license. Developers can extend the Goldfish checks or adapt the document template to local standards.

Human judgment remains the final artifact. The plugin moves the developer from micromanaging individual code changes to reviewing and approving a clear specification.

## Conclusion

The Elephant-Goldfish Model plugin gives AI coding agents a structured design phase and an adversarial review step before implementation. Install it in Antigravity, Claude Code, or Codex, run the three commands on a real feature, and compare the resulting specification against a one-shot coding prompt.

Official sources:

- [Google Open Source Blog announcement](https://opensource.googleblog.com/2026/10/introducing-elephant-goldfish-model-plugin.html)
- [elephant-goldfish-model repository](https://github.com/google/elephant-goldfish-model)
- [EGM website](https://egm.dev/)
