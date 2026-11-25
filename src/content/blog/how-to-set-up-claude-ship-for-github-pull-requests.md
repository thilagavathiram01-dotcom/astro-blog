---
title: "How to Set Up Claude Ship for GitHub Pull Requests"
description: "Step-by-step guide to enabling Anthropic Claude Ship agents for reviewing, fixing, and approving GitHub PRs on Team and Enterprise plans."
pubDate: 2026-11-25T21:30:00
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "developer"]
noindex: false
---

Developers using AI coding tools face a new bottleneck. Code gets written quickly, but pull requests pile up waiting for review, fixes, and approval. Anthropic introduced Claude Ship on November 23, 2026, to address this. The beta feature combines three agents that review GitHub pull requests, push fixes, and apply team-defined approval policies.

Claude Ship runs on Claude Team and Enterprise plans for GitHub repositories. Code Review is generally available. PR Steward and Claude Approvals are in public beta. Organizations with Zero Data Retention, HIPAA configuration, or customer-managed encryption keys cannot use it.

## What Claude Ship Does

Claude Ship consists of three agents that handle different stages of a pull request.

Code Review examines the change against the surrounding codebase. It looks for logic errors, security issues, and edge cases, verifies its own findings, and posts inline comments ranked by severity. Admins choose Quick, Standard, or Deep review levels per repository.

PR Steward keeps a pull request green. It responds to failing CI checks, merge conflicts, and review feedback from Code Review or team members. After each push it comments with what changed and how to undo it. It does not approve or merge pull requests. Developers can steer it with an @claude comment or stop it with @claude stop.

Claude Approvals checks the pull request against a policy file the team writes in the repository. It can approve routine changes when the policy allows and require human sign-off for others. Anthropic recommends starting in observe-only mode so the check reports what the policy would decide without blocking merges.

![Developers collaborating on code reviews](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Prerequisites

You need a Claude Team or Enterprise plan. The repository must be on GitHub. An Owner role is required to turn on the agents in organization settings. Update Claude Code to a recent version if you plan to use the local /ship command.

Billing is separate from plan usage and based on token consumption. Admins can set spend limits for Code Review and PR Steward. Eligible Enterprise organizations can claim at least $10,000 in Claude Ship credits if claimed by January 15, 2027.

## Set Up Claude Ship for a Repository

Admins enable the agents one at a time through Organization settings > Claude Ship.

First, connect the GitHub organization or repository and turn on Code Review. Choose the review level and when reviews run. Set a monthly spend limit if desired.

Next, enable PR Steward. Begin with the Manual (@claude steward) trigger so it only starts when a developer comments on a pull request. Set a spend limit before allowing automatic starts.

Then add Claude Approvals. Create a policy file named .claude/approvals.yml on the default branch. Start in observe mode. The check reports decisions without blocking merges until you make it a required status check in GitHub branch protection rules.

Once the policy file exists, automatic Code Review behavior can change. Add claude/code_review to a policy rule if you want reviews to continue on matching paths.

Teams should start with one repository, one agent at a time, and observe mode for Approvals until the policy is trusted.

## Use the /ship Command Locally

Individual developers can try the workflow without full repository automation. In Claude Code, run /ship when a change is ready. Claude pushes the branch, opens the pull request, runs a review, and works on feedback and failing checks.

The local command uses normal Claude Code usage. It does not approve or merge on its own. What can merge still depends on your GitHub permissions and branch protection rules. You can also run /steward on an existing pull request to handle fixes without a full review.

![Laptop showing code and terminal](https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=800&q=80)

## Write an Approval Policy

The policy file lives in the repository and acts like a smarter CODEOWNERS file. It can require a certain number of human approvals for specific paths, allow Claude to post an approving review under defined conditions, and consider Code Review results or custom classifiers written in natural language.

Start simple. Require two approvals for most changes, drop to one when Code Review passes, and always require two humans for edits to the policy file itself. When multiple rules match, the strictest applies. Test in observe mode and review the Claude Approvals check comments before enforcing the check in branch protection.

If you use auto-merge or a merge queue with a policy that does not require a person, a change can merge without human action. Branch protection rules remain the final gate.

## Tips for Rolling Out

Monitor token spend after enabling each agent. Code Review and PR Steward have configurable limits; Approvals bills for classifier runs and any reviews it triggers. Turn agents off in reverse order (Approvals, then PR Steward, then Code Review) if costs rise.

Keep humans in the loop for sensitive paths such as authentication, payments, or infrastructure. Read AI review comments critically rather than accepting them automatically. Anthropic notes that Claude Ship uses AI and may miss bugs or security issues.

Compare the approach with other tools. GitHub Copilot code review and similar features handle different parts of the workflow. See our guide on [using GitHub Copilot for pull request reviews](/blog/how-to-use-github-copilot-code-review-for-prs/) for another option.

## Conclusion

Claude Ship moves the post-write portion of the development loop closer to the speed of AI-assisted coding. Teams control where it runs and which changes still need a person. Start with one repository in observe mode, set clear spend limits, and refine the policy based on real pull requests before expanding.

Eligible Enterprise customers should review the credit terms and claim before the January 15, 2027 deadline. Official documentation at code.claude.com/docs/en/claude-ship and the launch post on claude.com provide the latest setup details as the beta evolves.

Sources: Anthropic, "Introducing Claude Ship" (November 23, 2026); Claude Code documentation for Claude Ship, PR Steward, and Approvals.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/8-nqh6OlTW4"
    title="I Let Claude Ship Handle My Pull Requests (It Was Shocking)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
