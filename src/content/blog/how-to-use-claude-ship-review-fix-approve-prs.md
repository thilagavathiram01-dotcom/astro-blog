---
title: "How to Use Claude Ship for Faster GitHub PR Reviews"
description: "Step-by-step guide to Claude Ship beta: use /ship in Claude Code, Code Review, PR Steward, and Approvals to review, fix, and approve GitHub pull requests."
pubDate: 2026-11-24T18:00:00
heroImage: "https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "developer"]
noindex: false
---

AI coding agents now write code faster than most teams can review it. Anthropic's Claude Ship, launched in beta on 23 November 2026, addresses that bottleneck. It bundles agents that review pull requests, push fixes for feedback and failing checks, and approve changes that match a team's written policy.

This guide shows how to use it on your own PRs with the `/ship` command in Claude Code, and how Team or Enterprise admins turn it on for a whole repository. All facts come from Anthropic's official docs and announcement.

## What Claude Ship does

Claude Ship has three parts:

- **Code Review** (generally available): examines a pull request against the surrounding codebase, verifies findings, and posts severity-ranked comments. Teams choose Quick, Standard, or Deep.
- **PR Steward** (beta): works on review feedback, failing CI checks, and merge conflicts. It comments on what changed and how to roll it back. It does not approve or merge.
- **Claude Approvals** (beta): checks the PR against a policy file the team writes in the repository (`.claude/approvals.yml`). It can post an approving review where the policy allows. GitHub branch rules still decide what merges.

Individuals on Pro, Max, or Ultra can use the local `/ship` command. Full repository-wide agents require Claude Team or Enterprise plans and GitHub repositories. Usage is billed on tokens for the org agents. Anthropic notes that its own Claude Code team more than doubled merged pull requests from June to September while the share of reverted changes fell by over 40 percent (self-reported).

![Developer at a multi-monitor workstation reviewing code](https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=800&q=80)

## Prerequisites

For the local `/ship` command:

- Claude Code version 2.1.330 or later (run `claude update` if needed).
- GitHub CLI 2.63 or later and Git 2.38 or later.
- A local clone of a GitHub repository.
- Signed in to Claude and GitHub.

Cloud sessions do not have `/ship`. The command runs in a terminal on your machine.

For full Claude Ship agents on a repository, an Owner on a Team or Enterprise plan enables them in organization settings. They are not available with Zero Data Retention, HIPAA configuration, or customer-managed encryption keys.

## Step-by-step: run /ship on your own change

1. Finish the change in a local Claude Code session on the feature branch. Check `git status` so only intended files are staged or unstaged. `/ship` can commit everything present.
2. In the same session, type `/ship` and press Enter. It proceeds without a confirmation prompt (you get a brief window to cancel with Esc before commit and push).
3. Claude commits (if needed), pushes the branch, opens the pull request in your name, and runs a review (high effort by default; use `/ship medium` or `/ship low` for lighter).
4. It then watches the PR for up to seven days in that session. It works on feedback and failing checks. Type `/ship stop` to end the watch early. Keep the session open, the machine awake, and the branch checked out.
5. Review the comments and any fixes. Merge yourself when branch rules are satisfied. `/ship` and PR Steward do not merge.

If the PR is already open and you only want fixes (no new review), use `/steward` instead.

Anyone who can see the PR can read the commit message Claude writes from the session conversation.

## Watch a short explainer

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/5GyV1tHPXZU"
    title="Claude Ship : Claude Code Just Got a Powerful New Superpower"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Turn on Claude Ship for a whole repository

Admins with the Owner role go to Organization settings > Claude Ship. Enable agents one at a time, in this order, for one repository:

1. Code Review (set Quick/Standard/Deep).
2. PR Steward (start with Manual / `@claude steward` trigger). Set a spend limit.
3. Claude Approvals. Add the policy file. Start in observe mode so it reports what it would decide without approving. Observe mode is still billed.

The policy lives in the repo like a smarter CODEOWNERS file. Teams stay in control of which changes need a human.

Eligible Enterprise organizations can claim at least $10,000 in Claude Ship credits (claim by 15 January 2027; terms apply).

## Tips and caveats

- Start in observe mode for Approvals and review the first few decisions.
- `/ship` checks filenames for secrets (e.g., `.env`) but inspect contents yourself.
- Keep the local session alive for the watch. Cloud sessions lack the command.
- Branch protection, required reviews, and merge queues still apply. Claude Approvals can count as a required approval only where your rules allow.
- Token costs add up on Team/Enterprise. Set spend limits.
- Anthropic states that Claude Ship uses AI and may miss bugs or security issues.

If you already coordinate parallel work with Claude Code Projects, see our guide on [using Claude Code Projects for parallel cloud threads](/blog/claude-code-projects-parallel-threads/).

![Close-up of programming code on a monitor](https://images.unsplash.com/photo-1753998943619-b9cd910887e5?auto=format&fit=crop&w=800&q=80)

## Conclusion

Claude Ship moves part of the post-coding workflow to agents while leaving final merges and policy decisions with the team. Individuals try it immediately with `/ship` in Claude Code. Teams enable the full set on GitHub repositories after writing a clear approval policy and starting in observe mode.

Update Claude Code, run a small PR through `/ship`, and measure whether the reduced review latency is worth the token spend for your workflow.

## Sources

- [Introducing Claude Ship](https://claude.com/resources/articles/introducing-claude-ship) — Anthropic, 23 November 2026
- [Claude Ship docs](https://code.claude.com/docs/en/claude-ship) — Claude Code Docs
- [Get a pull request ready with /ship and /steward](https://code.claude.com/docs/en/ship-command) — Claude Code Docs
- [Claude Ship product page](https://claude.com/product/claude-ship) — Anthropic
