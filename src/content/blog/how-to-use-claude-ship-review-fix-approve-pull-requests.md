---
title: "How to Use Claude Ship for PR Reviews and Approvals"
description: "Step-by-step guide to Claude Ship beta: review, fix, and approve GitHub pull requests with /ship in Claude Code and team policies."
pubDate: 2026-11-24T14:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "developer"]
noindex: false
---

Developers open a pull request and then switch context to address review comments, fix failing checks, and chase an approval. Claude Ship, launched in beta on 23 November 2026, aims to handle that loop.

It reviews changes, works on fixes, and can approve routine work when a team's written policy allows it. You stay in control of which repositories run it and which changes still need a person.

## What Claude Ship Includes

Claude Ship combines three agents for GitHub repositories on Claude Team and Enterprise plans. Code Review is already generally available. PR Steward and Claude Approvals are in beta.

Code Review examines the proposed changes against the broader codebase. It collects findings, checks them, and posts comments on the pull request. Teams can choose Quick, Standard, or Deep review levels per repository.

PR Steward keeps a pull request green. It acts on failing CI checks, merge conflicts, and review feedback. After each push it comments with what changed and how to reverse it. It does not approve or merge. You can steer it by commenting `@claude` with an instruction or stop it with `@claude stop`.

Claude Approvals applies an approval policy that the team writes as a file in the repository. It can approve routine changes itself or require human sign-off for others. Anthropic describes it as a smarter CODEOWNERS file. Teams can include Code Review findings or their own natural-language classifiers as signals.

![Developer reviewing code on a laptop](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Try It Yourself with the /ship Command

Individual developers can use the new `/ship` command in Claude Code without waiting for an organization-wide rollout. It is rolling out in the Claude Code CLI and desktop app.

You need Claude Code v2.1.330 or later, the GitHub CLI 2.63 or later signed in, and git 2.38 or later. Run Claude Code inside your local clone of the repository.

When your change is ready, type `/ship` at the Claude Code prompt. Claude commits the work if needed, pushes the branch, opens the pull request as you, runs a review, and then works on feedback and failing checks. What can actually merge still depends on your GitHub permissions and the repository's branch rules.

If the pull request is already open and you only want fixes, use `/steward` instead. It skips the review and focuses on feedback and checks.

Running `/ship` counts as regular Claude Code usage. It is available to developers who have access to Claude Code, even if their organization has not enabled the full Ship agents.

## Set Up Claude Ship for a Team Repository

Organization owners on Team or Enterprise plans enable the agents under Organization settings > Claude Ship. Start with one repository and add agents one at a time.

1. Connect the Claude GitHub App if it is not already linked.
2. Turn on Code Review for the repository and pick the review level (Quick, Standard, or Deep). Set a monthly spend limit.
3. Enable PR Steward. Begin in Manual mode so it starts only when someone comments `@claude steward`. Switch to automatic once the team is comfortable.
4. Add an approval policy file (typically `.claude/approvals.yml`) on the default branch. Start in observe mode. In observe mode Claude Approvals reports what the policy would decide but does not approve anything. Observe mode is still billed.

Once the policy file exists, Claude Approvals starts for that repository. An admin can turn it off. The agents respect existing branch protection rules and required checks.

Usage is billed on tokens. Admins can set spend limits for Code Review and PR Steward. Claude Approvals has no base charge, but any classifiers in the policy and any triggered Code Reviews are billed.

Claude Ship is not available to organizations that use Zero Data Retention, the HIPAA configuration, or customer-managed encryption keys.

![Team collaborating around a laptop](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/pSt3TfnaDdU"
    title="Claude Ship: AI That Reviews, Fixes and Approves Your Pull Requests"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical Tips for a Safe Rollout

Start small. Enable the agents on one repository and keep Approvals in observe mode for at least a few weeks. Compare the decisions it would have made against what humans actually approved.

Write a clear policy. Specify which paths or labels require a human, whether the author counts, and any extra signals such as Code Review severity. Test the policy in observe mode before making the Claude Approvals check required in branch protection.

Set spend limits early. Token usage depends on pull-request volume, size, review depth, and how often PR Steward intervenes. Limits prevent surprises.

Keep humans in the loop for sensitive areas. Security-sensitive code, infrastructure changes, or anything that touches production data should still require explicit human approval even after you trust the system.

If you already use Claude Code for development, pair this with the local review and skills features described in our guide to [Claude Haiku 5.5 setup for API and Claude Code](/blog/claude-haiku-5-5-setup-guide-for-api-and-claude-code/).

## Conclusion

Claude Ship moves the post-pull-request work into the same agent loop that many teams already use for writing code. Developers can try it today with `/ship`. Teams can enable it repository by repository under explicit policies and spend controls.

Begin with observe mode and one repository. Measure the quality of reviews and the accuracy of approval decisions before expanding. The official documentation continues to update as the beta progresses.

## Sources

- [Introducing Claude Ship](https://claude.com/resources/articles/introducing-claude-ship) — Anthropic
- [Claude Ship product page](https://claude.com/product/claude-ship) — Anthropic
- [Claude Ship documentation](https://code.claude.com/docs/en/claude-ship) — Claude Code Docs
- [Get a pull request ready with /ship and /steward](https://code.claude.com/docs/en/ship-command) — Claude Code Docs
