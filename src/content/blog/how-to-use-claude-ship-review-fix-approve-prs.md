---
title: "How to Use Claude Ship for PR Reviews and Approvals"
description: "Step-by-step guide to Claude Ship: review, fix, and approve GitHub pull requests with Anthropic's beta agents on Team and Enterprise plans."
pubDate: 2026-11-24T14:00:00
heroImage: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "developer"]
noindex: false
---

Developers open a pull request and then switch context. They dig into old code, push a fix, and wait for approval. Anthropic built Claude Ship to compress those steps. The beta feature, announced on 23 November 2026, lets Claude review pull requests, push fixes, and approve routine changes when a team policy allows it.

Claude Ship runs on Claude Team and Enterprise plans for GitHub repositories. Code Review is generally available. PR Steward and Claude Approvals are in beta. Usage is billed on tokens. Admins can set spend limits. Organizations with Zero Data Retention, the HIPAA configuration, or customer-managed encryption keys cannot use it.

This guide shows how individual developers start with the `/ship` command and how admins enable the full set of agents for a repository.

## What the three agents do

Claude Ship combines three agents:

**Code Review** reads a change against the surrounding codebase through multiple lenses. It collects findings, adversarially verifies them, categorizes them, and posts them as inline comments. Teams choose Quick, Standard, or Deep review levels per repository. On the Claude Code team, where Claude's review is one layer of a broader process, merged PRs more than doubled from June to September 2026 while the share of reverted changes fell by more than 40%.

**PR Steward** keeps a pull request green. It acts on failing CI checks, merge conflicts, and review feedback from Code Review, other tools, or teammates. After every push it comments with what it changed and how to undo it. It is designed not to approve or merge. Developers can comment `@claude` with an instruction or `@claude stop` to have it step back.

**Claude Approvals** applies a policy the team writes as a file in the repository. It can approve routine changes if the policy allows, or require deeper human sign-off for certain paths or scenarios. Anthropic compares it to a smarter CODEOWNERS file. Teams can include Code Review findings or their own natural-language classifiers as signals. Anthropic recommends starting in observe-only mode before making Claude Approvals a required check in GitHub branch protection.

GitHub branch rules and the developer's permissions still control what actually merges. Claude Ship does not override those.

![Laptop screen showing lines of code in a dark workspace](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Use `/ship` from Claude Code

Individual developers can try the flow on their own changes without waiting for an organization-wide rollout. Update Claude Code, then run the command when a change is ready.

1. Finish the change in your local clone.
2. Open Claude Code in the repository directory.
3. Run `/ship`.
4. Claude commits (if needed), pushes the branch, opens the pull request, and starts a review.
5. It then works on feedback and failing checks, pushing fixes and commenting on each push.

What can merge depends on your GitHub permissions and the repository's branch protection rules. The command counts as regular Claude Code usage. It is rolling out in the CLI and the desktop app.

If the pull request is already open and you only want fixes, run `/steward` instead. It skips the initial review and starts the watch on feedback and checks.

## Enable Claude Ship for a repository

Admins turn the agents on one repository at a time. You need an Owner role. Go to Organization settings > Claude Ship.

Recommended order:

1. Set up Code Review. Connect the GitHub repository and choose the review level and when reviews run.
2. Set up PR Steward. Start with the Manual setting (triggered by `@claude steward`) so the team controls when it acts. Set a spend limit.
3. Add an approval policy file (`.claude/approvals.yml`) on the default branch. Start in observe mode. The Claude Approvals check reports what the policy would decide without blocking merges.

Once the policy file exists, automatic Code Review behavior can change. To keep reviews on paths the policy covers, add `claude/code_review` to a rule. Admins can also set monthly spend limits for Code Review and PR Steward.

Teams can start with one repository, run the policy in observe mode, and expand only after they trust the results. Claude Ship works alongside existing branch protection and required checks.

![Developer reviewing code on dual monitors](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Watch a walkthrough of the agents

This short explainer covers the three agents, the `/ship` command, and the points teams should check before enabling approvals.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/pSt3TfnaDdU"
    title="Claude Ship: AI That Reviews, Fixes and Approves Your Pull Requests"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips before you turn it on

- Begin with observe mode for Claude Approvals. Review the check results before you require them in branch protection.
- Set spend limits early. Token billing scales with review depth, pull-request size, and how much PR Steward does.
- Keep a human in the loop for sensitive paths. Write the policy so high-risk changes still need a person.
- Use `@claude stop` if PR Steward heads in the wrong direction.
- Confirm the repository is on GitHub and the organization is not under Zero Data Retention, HIPAA, or customer-managed keys.
- Eligible Enterprise organizations can claim at least $10,000 in Claude Ship credits (claim by 15 January 2027, use within 30 days). Check the credit terms before you assume they apply.

If you already use agent workflows, Claude Ship targets the handoff after the code is written. For other agent patterns, see [how to run browser tasks with the Agents API computer use tool](/blog/agents-api-computer-use-browser-tasks/).

## Conclusion

Claude Ship moves the post-write steps of a pull request into agents that review, fix, and (when the policy allows) approve. Developers start with `/ship` in Claude Code. Admins enable the agents repository by repository, beginning with Code Review, then PR Steward, then an approval policy in observe mode.

The feature is in beta on Team and Enterprise plans. GitHub rules still decide the final merge. Start small, watch the results, and expand only after the policy matches how your team wants to ship.

## Sources

- [Introducing Claude Ship](https://claude.com/resources/articles/introducing-claude-ship) — Anthropic, 23 November 2026
- [Claude Ship documentation](https://code.claude.com/docs/en/claude-ship) — Claude Code Docs
- [Get a pull request ready with /ship and /steward](https://code.claude.com/docs/en/ship-command) — Claude Code Docs
- [Claude Ship product page](https://claude.com/product/claude-ship) — Anthropic
