---
title: "How to Set Up GitHub Agentic Workflows for Repo Automation"
description: "Step-by-step guide to install the gh-aw extension, add agentic workflows, and automate GitHub repo tasks with coding agents after the October 2026 GA."
pubDate: 2026-10-31T10:00:00
heroImage: "https://images.unsplash.com/photo-1780253256194-34e5867ccb8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "developer", "ai", "productivity"]
noindex: false
---

GitHub Agentic Workflows reached general availability on October 28, 2026. You can now define repository automation in plain Markdown, compile it to GitHub Actions, and let coding agents handle tasks that need reasoning.

Traditional Actions workflows follow fixed steps. Agentic workflows let agents read issues, pull requests, and code, then decide what to do next. They run inside the same Actions environment you already use.

## What You Need Before Starting

Confirm these items first:

- A GitHub repository where you have write access
- GitHub Actions enabled
- GitHub CLI version 2.0.0 or newer, authenticated with `gh auth status`
- An AI engine account (GitHub Copilot is the default and requires a Copilot license; Claude Code, OpenAI Codex, Google Gemini, or Pi also work)

Linux, macOS, or Windows with WSL all work. Start with Copilot if you already have a license. No extra API key is required for the basic path.

![Developer typing code on a laptop](https://images.unsplash.com/photo-1780253256194-34e5867ccb8c?auto=format&fit=crop&w=800&q=80)

## Install the gh-aw Extension

Open a terminal in any directory and run:

```bash
gh extension install github/gh-aw
```

This adds the `gh aw` commands. Verify with `gh aw --help`. The extension is open source under the MIT license and lives in the github/gh-aw repository.

## Add Your First Workflow

From the root of your repository, add a sample workflow:

```bash
gh aw add-wizard githubnext/agentics/repo-status
```

The wizard walks you through four main steps:

1. It checks that you can write to the repository.
2. It asks which AI engine to use (Copilot, Claude Code, OpenAI Codex, Google Gemini, or Pi).
3. It helps you set the required secret if needed.
4. It adds the Markdown source and the compiled `.lock.yml` file under `.github/workflows/`.

The sample `repo-status` workflow gathers recent activity and opens a daily summary issue. You can choose to trigger a first run immediately.

For Copilot, the wizard can use organization billing or a fine-grained personal access token stored as `COPILOT_GITHUB_TOKEN`. For Claude you set `ANTHROPIC_API_KEY`; for Codex `OPENAI_API_KEY` or `CODEX_API_KEY`; for Gemini `GEMINI_API_KEY`. Workload identity federation options exist for keyless setups on Claude and Gemini.

## Watch the Run and Review Output

A typical first run finishes in two to three minutes. Watch it from the Actions tab or with:

```bash
gh aw status
gh run watch
```

When it succeeds, a new issue titled “Daily Repo Report” appears. The report covers recent issues, pull requests, discussions, releases, and code changes, plus suggested next steps.

If the run fails, open the job logs. Common causes are missing secrets, disabled Actions, or insufficient permissions.

![Laptop showing code next to glasses on a desk](https://images.unsplash.com/photo-1763568258187-a0d90864ed66?auto=format&fit=crop&w=800&q=80)

## Understand the Workflow Structure

Every agentic workflow is a Markdown file with YAML frontmatter followed by natural-language instructions. A minimal example looks like this:

```yaml
---
on:
  issues:
    types: [opened]
permissions: read-all
safe-outputs:
  add-comment:
---

# Issue Clarifier

Analyze the current issue and ask for additional details if the description is unclear.
```

The frontmatter sets the trigger, default read-only permissions, and allowed write operations through safe-outputs. The body is the prompt the coding agent receives.

Run `gh aw compile` after any frontmatter change. This generates the hardened `.lock.yml` that GitHub Actions actually executes. Commit both files.

You can also create workflows by prompting a coding agent with the official create.md template and describing the task you want.

## Security and Safe Outputs

Agents start with read-only access and run inside a sandboxed container behind the Agent Workflow Firewall. Every proposed write goes through the safe-outputs process. A separate threat-detection job scans changes before they are applied.

You control which operations are allowed (add-comment, create-issue, create-pull-request, and others). Set `strict: true` for production workflows. Use `staged: true` to preview outputs without writing anything.

These layers reduce the risk of the “lethal trifecta” (private data + untrusted content + outbound access). Still review the first few runs carefully.

## Customize and Schedule

Open the `.md` file and edit the natural-language sections to match your priorities. After changing frontmatter, recompile:

```bash
gh aw compile
```

Push both files, then trigger a new run:

```bash
gh aw run repo-status
```

Common triggers include `schedule` (cron), `workflow_dispatch`, `issues`, and `pull_request`. Pre-built templates cover issue triage, dependency updates, documentation sync, and code review. Browse them in the githubnext/agentics repository or the official gallery.

## Tips for Reliable Workflows

- Keep the first version small. Confirm it produces useful output before expanding scope.
- Use `gh aw forecast` (now non-experimental) to estimate AI credit usage, including threat-detection costs.
- Prefer Copilot for the simplest start; switch engines only when you need a specific model.
- Limit tools and network access in the frontmatter to what the task actually requires.
- Review safe-output results the same way you review a human pull request.

GitHub reports that teams using these workflows have seen measurable time savings and higher velocity, though results depend on the task and the quality of the instructions.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/3_i03fGXs9U"
    title="Introducing GitHub Agentic Workflows | intent-driven repository automation"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Next Steps

Start with the official quickstart, then explore creating your own workflow or the security architecture docs. For a broader view of AI-assisted publishing, see our earlier post on [letting AI write your blog posts](/blog/ai-workflow/).

Agentic workflows sit alongside your existing CI/CD. Use deterministic Actions for builds and tests; use agentic workflows when the task needs context and judgment. The combination lets you automate more of the repetitive reasoning work without giving up control.

## Sources

- GitHub Changelog: GitHub Agentic Workflows generally available (October 28, 2026)
- Official documentation: github.github.io/gh-aw and github.github.com/gh-aw
- Quickstart guide and creating-workflows guide
- github/gh-aw repository and githubnext/agentics examples
