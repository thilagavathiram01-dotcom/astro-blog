---
title: "Using Claude Ship for Automated PR Reviews on GitHub"
description: "Learn how Claude Ship reviews, fixes, and approves GitHub pull requests with Code Review, PR Steward, and Approvals. Step-by-step setup for teams."
pubDate: 2026-11-25T12:00:00
heroImage: "https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "developer"]
noindex: false
---

AI agents write code faster than most teams can review it. Anthropic launched Claude Ship in beta on November 23, 2026, to close that gap. The system reviews pull requests, pushes fixes, and can approve routine changes under a policy your team writes.

Claude Ship bundles three agents. Code Review is already generally available. PR Steward and Claude Approvals are in public beta. Together they move a pull request from open to ready-to-merge while your branch rules still decide what actually merges. Teams stay in control of which repositories run the agents and which changes need a human signature.

This guide covers how Claude Ship works, how to try it on your own pull requests, and how admins turn it on for a repository. All details come from Anthropic’s announcement and Claude Code documentation.

## What Claude Ship Does on a Pull Request

Claude Ship splits the work after you open a pull request into three stages.

Code Review reads the change against the surrounding codebase. It collects findings, checks them, ranks them by severity, and posts inline comments plus a summary. Teams choose Quick, Standard, or Deep review levels per repository. On the Claude Code team, where Claude writes most of the code, merged pull requests more than doubled from June to September 2026 while the share of reverted changes fell by more than 40 percent.

PR Steward keeps the pull request green. It acts on failing CI checks, merge conflicts, and review feedback from Code Review or people. It pushes commits with the fixes and comments on what changed and how to undo it. The agent is designed never to approve or merge anything. Developers can steer it with `@claude` comments or pause it with `@claude stop`.

Claude Approvals checks the pull request against a policy file you place in the repository (`.claude/approvals.yml`). The policy works like a smarter CODEOWNERS file. It can let Claude approve routine changes or require human sign-off for others. Anthropic recommends starting in observe-only mode so the check reports what the policy would decide before you enforce it.

Your GitHub branch protection rules still control the final merge. Claude Approvals posts a check that says who still needs to approve. You make that check required only if you want it to block merges.



![Developer working at a multi-monitor coding setup](https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=800&q=80)



## Try Claude Ship on Your Own Pull Requests

Individual developers can test the flow without an admin turning anything on. Update Claude Code and run the `/ship` command when a change is ready.

The command pushes your branch, opens the pull request if one does not exist, runs a review, and works through feedback and failing checks. What can merge still depends on your permissions and the repository’s branch rules. Running `/ship` counts as regular Claude Code usage.

This path lets you see Code Review and the fix loop before your team enables the full agents. It also works in the Claude desktop app as the command rolls out.

## Turn Claude Ship On for a Team Repository

Admins with the Owner role set the agents up one repository at a time. Go to Organization settings > Claude Ship.

Turn them on in this order:

1. Set up Code Review. Connect the GitHub repository, choose the review level, and decide when reviews run.
2. Set up PR Steward. Start with the Manual setting that waits for an `@claude steward` comment. Set a spend limit so the agent does not run without a cap.
3. Add a Claude Approvals policy file on the default branch. Start in observe mode. The Claude Approvals check will report the decision without blocking.

Once a policy file is present, automatic Code Review behavior can change. You may need to add `claude/code_review` to a rule if you want reviews to keep running on every pull request.

Admins can set monthly spend limits for Code Review and PR Steward. Claude Approvals has no base charge, but any classifiers in the policy and any Code Reviews the policy triggers are billed on tokens. Usage is separate from your plan’s included usage and draws from organization credits.

Claude Ship is available on Claude Team and Enterprise plans for GitHub repositories. It is not available to organizations with Zero Data Retention, the HIPAA configuration, or customer-managed encryption keys.

Eligible Enterprise organizations can claim at least $10,000 in Claude Ship credits to use within 30 days of claiming. The claim window runs through January 15, 2027.

## How the Claude Code Team Uses It

Anthropic runs Claude Ship on many of its own pull requests. One change is that people outside the core engineering group can now act on feedback. A product manager can discuss a customer report with Claude Tag, have it open a pull request, and move on while the agents handle review, fixes, and the approval decision.

In one recent case a customer found unclear Analytics API documentation. The product manager confirmed no fix was already in flight. Claude Tag opened the pull request. Code Review found nothing blocking. A docs reviewer signed off. Claude Approvals passed. The fix merged the same evening.

That speed comes from keeping humans on the decisions that need judgment and letting the agents handle the mechanical steps.



![Close-up of a backlit mechanical keyboard in a developer workspace](https://images.unsplash.com/photo-1754548930550-be9fa88874f4?auto=format&fit=crop&w=800&q=80)



## Tips for Rolling Claude Ship Out Safely

Start with one repository and observe mode. Watch the Claude Approvals check for a week before you make it required. This builds confidence that the policy matches how your team actually wants to approve changes.

Set spend limits before you turn PR Steward on for automatic runs. The agent can push multiple commits while it works through feedback, and those commits are billed.

Keep branch protection rules that require human approval for high-risk paths. Claude Approvals can approve routine changes, but your rules still decide the final gate. If you use auto-merge or a merge queue with a policy that does not require a person, a change can merge without human action. Review that setting carefully.

Document the policy file in your repository so the whole team understands which changes Claude can approve and which still need a person. The file uses natural language rules and can reference Code Review findings or your own classifiers.

If you already use Code Review, its settings move under the Claude Ship page. Check the new location after you enable the other agents.

## Watch a Related Walkthrough

Claude Ship builds on the Code Review agent that has been generally available since October 2026. This video explains how Anthropic’s own team reviews code when agents write most of it, including the layers that run before a pull request even opens.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/thUI2u9cMrs"
    title="Claude Code Review, Explained: Who Checks AI-Written Code"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Claude Ship gives teams a way to keep pull-request velocity high as more code comes from agents. Code Review finds issues, PR Steward pushes fixes, and Claude Approvals applies the policy you write. Your branch rules remain the final authority on what merges.

Developers can try the flow today with `/ship` in Claude Code. Admins can enable the full agents on one repository at a time, starting in observe mode. The combination keeps humans focused on the changes that need judgment while the agents handle the rest.

If you want more background on working with Claude models in other Google tools, see our guide to [accessing Claude Opus 5.5 in Google Antigravity](/blog/access-claude-opus-5-5-google-antigravity/).

## Sources

- Anthropic, “Introducing Claude Ship,” November 23, 2026: https://claude.com/resources/articles/introducing-claude-ship
- Claude Code Docs, “Claude Ship”: https://code.claude.com/docs/en/claude-ship
- Anthropic product page: https://claude.com/product/claude-ship
