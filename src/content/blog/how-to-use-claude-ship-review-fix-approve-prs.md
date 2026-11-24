---
title: "How to Use Claude Ship for PR Reviews and Approvals"
description: "Step-by-step guide to Claude Ship: review, fix, and approve GitHub pull requests with Anthropic agents on Team and Enterprise plans."
pubDate: 2026-11-24T15:00:00
heroImage: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "developer", "ai"]
noindex: false
---

Opening a pull request often means waiting. Reviewers reply, CI fails, conflicts appear, and someone has to approve. Anthropic's Claude Ship, launched in beta on 23 November 2026, aims to shrink that loop for teams that already use coding agents.

Claude Ship combines three agents for GitHub repositories on Claude Team and Enterprise plans. Code Review is generally available. PR Steward and Claude Approvals are in public beta. Usage is billed on tokens. Organizations with Zero Data Retention, the HIPAA configuration, or customer-managed encryption keys cannot use it.

This guide follows the official Claude Ship documentation and announcement. It covers what each agent does, how to enable them, the `/ship` command, and policy setup. It does not replace your GitHub branch protection rules.

## What the three agents do

Code Review reads a pull request against the surrounding codebase. It collects findings, adversarially verifies them, ranks them by severity, and posts inline comments. Teams pick Quick, Standard, or Deep for each repository. On Anthropic's Claude Code team, where Claude's review is one layer among others, merged pull requests more than doubled from June to September 2026 while the share of reverted changes fell by more than 40 percent. Those numbers come from Anthropic's own measurements.

PR Steward works to keep a pull request green. It responds to failing CI checks, merge conflicts, and review feedback from Code Review, other tools, or people. After every push it comments with what changed and how to undo it. Developers can reply with `@claude` to steer it or `@claude stop` to have it step back. It is designed not to approve or merge.

Claude Approvals applies an approval policy that the team writes as a file in the repository (typically `.claude/approvals.yml` on the default branch). It can approve routine changes when the policy allows, or require human sign-off for others. Anthropic compares it to a smarter CODEOWNERS file. Teams can include signals such as Code Review findings or their own natural-language classifiers. Official guidance recommends starting in observe-only mode before making the check required in GitHub.

Your GitHub branch rules still decide what can merge. Claude Ship does not override them.

![Developer reviewing code on dual monitors](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Two ways to start

### For individual developers: the `/ship` command

Update Claude Code. When a change is ready, run `/ship`. Claude pushes the branch, opens the pull request, reviews it, and works on feedback and failing checks. What can merge still depends on your permissions and the repository's branch rules. Running `/ship` counts as regular Claude Code usage.

### For admins: enable per repository

Go to Organization settings > Claude Ship. You need an Owner role. Turn agents on one repository at a time, in this order:

1. Set up Code Review. Connect GitHub and choose the review level and when reviews run.
2. Set up PR Steward. Start with Manual (`@claude steward`) so it only acts when asked. Set a spend limit.
3. Set up Claude Approvals. Add a policy file on the default branch. Begin in observe mode so the check reports what the policy would decide without blocking merges.

Admins can set monthly spend limits for Code Review and PR Steward. Claude Approvals has no base charge, but classifiers and any Code Reviews it triggers are billed on tokens.

Eligible Enterprise organizations can claim at least $10,000 in Claude Ship credits to use within 30 days of claiming. Claim by 15 January 2027. Terms apply.

## Write a simple approval policy

The policy file lives in the repository. It defines rules for paths and when Claude may approve. Official docs describe starting in observe mode so you can see decisions before you rely on them for branch protection.

A minimal approach is to require human approval for sensitive paths and allow Claude for routine ones. After you observe the check's behavior, you can make Claude Approvals a required status check in GitHub if your branch protection rules allow it.

Keep the policy under version control so changes are reviewed like any other code.

![Team collaborating around a laptop with code visible](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Practical tips from the docs

- Enable agents one repository at a time. Do not turn everything on across the organization at once.
- Use observe mode for Claude Approvals until you trust the decisions.
- Set spend limits early. Token usage depends on PR size, review level, and how much PR Steward does.
- PR Steward comments after every push with undo instructions. Read those comments before accepting the fixes.
- Branch protection still matters. Require the checks and approvals your team wants.
- `/ship` in Claude Code is available to developers even if full repository automation is not yet enabled.
- Claude Ship is not available with Zero Data Retention, HIPAA configuration, or customer-managed keys.

If you already use coding agents for other tasks, the pattern is similar to hosted tools that need explicit approval gates. See [how to run browser tasks with Agents API computer use](/blog/agents-api-computer-use-browser-tasks/) for another example of controlled agent access.

## Watch a breakdown of the agents

This short explainer covers the three parts of Claude Ship, the `/ship` command, and the main caveats from the 23 November announcement.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/pSt3TfnaDdU"
    title="Claude Ship: AI That Reviews, Fixes and Approves Your Pull Requests"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Claude Ship moves part of the pull-request cycle into agents that review, fix, and (under a team-written policy) approve. Code Review is generally available. PR Steward and Claude Approvals are in beta and billed on tokens. Start with one repository, begin Approvals in observe mode, keep your GitHub branch rules, and measure the effect on your own queue before expanding.

The goal Anthropic states is to ship code as fast as teams write it. The controls are the policy file, spend limits, and existing branch protection.

## Sources

- [Introducing Claude Ship](https://claude.com/resources/articles/introducing-claude-ship) — Anthropic, 23 November 2026
- [Claude Ship documentation](https://code.claude.com/docs/en/claude-ship) — Anthropic Claude Code docs
- [Claude Ship product page](https://claude.com/product/claude-ship) — Anthropic
- [Claude Ship: AI That Reviews, Fixes and Approves Your Pull Requests](https://www.youtube.com/watch?v=pSt3TfnaDdU) — YouTube explainer, 24 November 2026
