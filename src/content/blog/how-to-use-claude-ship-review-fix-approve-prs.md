---
title: "How to Use Claude Ship to Review, Fix, and Approve PRs"
description: "Step-by-step guide to Anthropic's Claude Ship agents for reviewing, fixing, and approving GitHub pull requests with /ship."
pubDate: 2026-11-24T12:00:00
heroImage: "https://images.unsplash.com/photo-1607706189992-eae578626c86?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "developer"]
noindex: false
---

Pull requests slow teams down. You finish a change, open the PR, then wait for reviews, fix failing checks, and hunt for an approver. Anthropic launched Claude Ship in beta on November 23, 2026, to handle those steps. The suite lets Claude review pull requests, push fixes, and approve routine changes under a policy your team writes.

This guide shows how to use Claude Ship, starting with the `/ship` command in Claude Code and covering team setup.

## What Claude Ship Does

Claude Ship bundles three agents for GitHub repositories on Claude Team and Enterprise plans. Code Review is generally available. PR Steward and Claude Approvals are in beta.

Code Review examines the change against the surrounding codebase. It collects findings, checks them, ranks them by severity, and posts inline comments. Teams pick Quick, Standard, or Deep levels per repository. On Anthropic’s own Claude Code team, merged pull requests more than doubled from June to September 2026 while the share of reverted changes fell by more than 40%.

PR Steward keeps the pull request green. It handles failing CI checks, merge conflicts, and review feedback from Code Review or teammates. After each push it comments with what changed and how to undo it. It does not approve or merge. Comment `@claude` with an instruction to steer it, or `@claude stop` to pause.

Claude Approvals reads a policy file the team places in the repository (typically `.claude/approvals.yml`). It can approve routine changes when the policy allows and require human sign-off for others. Anthropic recommends starting in observe-only mode so you see what it would do before making it a required check.

GitHub branch rules and your permissions still decide what merges. Claude Ship uses AI and may miss bugs or security issues.

![Developer reviewing code on dual monitors](https://images.unsplash.com/photo-1730130054404-c2bd8e7038c2?auto=format&fit=crop&w=800&q=80)

## How to Run /ship on Your Own Pull Request

Individual developers on paid Claude plans can try the flow with the `/ship` command in Claude Code. It works in the terminal CLI and is rolling out in the desktop app. Cloud sessions do not support it.

Prerequisites:
- Claude Code v2.1.330 or later
- GitHub CLI 2.63 or later, signed in
- git 2.38 or later

Update Claude Code with `claude update`, then restart the session if the command is missing.

1. Finish your change in a local clone. Prefer the same Claude Code session so the commit message draws from the conversation.
2. Check `git status`. On eligible private repositories, `/ship` can commit untracked files. Inspect for secrets yourself.
3. Type `/ship` at the Claude Code prompt and press Enter. It can commit, push, and open the pull request as you after a short cancellation window.
4. Claude runs a review, then watches for feedback, failing checks, and conflicts. It pushes fixes and comments on each push.
5. Merge when checks pass and comments are addressed, subject to your permissions and branch protection.

If the pull request is already open and you only want fixes, run `/steward` instead. Running `/ship` counts as normal Claude Code usage.

For public repositories, commit on a feature branch first. Keep the session open while the watch runs, and avoid parallel edits on the same files.

## Set Up Claude Ship for a Team Repository

Admins with the Owner role turn agents on per repository at Organization settings > Claude Ship. Start with one repository.

Recommended order:
1. Enable Code Review and choose the review level plus spend limits.
2. Enable PR Steward. Begin with Manual (`@claude steward`) mode so it only acts when triggered. Set a spend limit.
3. Add an approval policy file on the default branch. Start in observe mode. The Claude Approvals check reports what the policy would decide without blocking merges.

The policy file works like a smarter CODEOWNERS. It can require more human approvals for certain paths or allow Claude to approve when Code Review findings are clear. Once the file is present, automatic Code Review behavior can change; add `claude/code_review` to rules if you want reviews to continue.

Usage is billed on tokens for Code Review and PR Steward. Claude Approvals has no base charge but bills for any classifiers or triggered reviews. Admins can set limits. Eligible Enterprise organizations can claim at least $10,000 in credits by January 15, 2027, to use within 30 days.

Claude Ship is not available with Zero Data Retention, the HIPAA configuration, or customer-managed encryption keys.

## Tips for Safe Rollout

Start small. Enable on one low-risk repository and watch observe-mode results for a few days.

Write a clear policy. Specify which paths need human review and which signals (Code Review findings, file types) Claude Approvals should consider.

Use branch protection. Require the approvals you want. PR Steward never merges on its own.

Monitor spend. Token usage scales with PR size, review depth, and how often Steward runs. Set limits early.

Comment `@claude stop` if Steward goes off track. Review its undo instructions before accepting a push.

Pair it with existing tools. It works alongside your current CI and required checks. For browser-based agent tasks, see our guide on the [Agents API computer use features](/blog/agents-api-computer-use-browser-tasks/).

![Close-up of code on a laptop screen](https://images.unsplash.com/photo-1753998943619-b9cd910887e5?auto=format&fit=crop&w=800&q=80)

## Watch Claude Ship in Action

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/pSt3TfnaDdU"
    title="Claude Ship: AI That Reviews, Fixes and Approves Your Pull Requests"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Claude Ship moves the post-PR work closer to the speed of agent-assisted coding. Developers can run `/ship` on their next change today. Teams can turn on the agents repository by repository, starting in observe mode, and keep full control through policy files and GitHub rules.

Update Claude Code, try `/ship` on a small change, and review the official docs before enabling it across a team. The goal is simple: open the pull request and get back to building.

## Sources

- Anthropic, “Introducing Claude Ship,” November 23, 2026. https://claude.com/resources/articles/introducing-claude-ship
- Claude Code Docs, “Claude Ship.” https://code.claude.com/docs/en/claude-ship
- Claude Code Docs, “Get a pull request ready with /ship and /steward.” https://code.claude.com/docs/en/ship-command
