---
title: "How to Use GitHub Copilot Code Review for PRs"
description: "Step-by-step guide to requesting and configuring GitHub Copilot code reviews on pull requests for faster feedback."
pubDate: 2026-10-23T14:00:00
heroImage: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "developer", "tutorials"]
noindex: false
---

Pull request reviews take time. GitHub Copilot code review spots bugs, security issues, and style problems so you can focus on architecture and logic. This guide shows how to request reviews, set effort levels, and enable automatic checks using official GitHub steps.

Copilot code review works on GitHub.com, the CLI, VS Code, and other IDEs. It is available on paid Copilot plans. Organization members without a license can use it if an admin enables the policy.

## What Copilot code review checks

Copilot examines changes for logic bugs, unclear error messages, insecure patterns, and deviations from coding guidelines. It leaves comments with severity labels: High, Medium, or Low. Suggested changes can be applied with a click.

By default, reviews are comments only. They do not count as approvals unless you enable that option. The overview comment includes an assessment of whether the pull request looks ready.

For Android developers building with AI tools, this pairs well with workflows like those in [building native Android apps with prompts in Google AI Studio](/blog/build-native-android-apps-google-ai-studio/).

![Developer coding on a laptop at night](https://images.unsplash.com/photo-1764452008254-eed469a4fad3?auto=format&fit=crop&w=800&q=80)

## Request a review on a pull request

Open or create a pull request on GitHub.com.

In the right sidebar under Reviewers, find Copilot and click Request.

Wait for the review. It usually finishes in under 30 seconds.

Read the comments. Each one includes a severity level to help you prioritize.

Apply suggested changes. Accept one suggestion or group several into a single commit.

You can also request a review via the REST API by adding `copilot-pull-request-reviewer[bot]` as a reviewer, or with the CLI command `gh pr edit NUMBER --add-reviewer @copilot`.

## Choose a review effort level

Copilot supports two effort levels today:

- Lite provides targeted feedback on clear bugs, security issues, and style problems. It is faster and uses fewer resources.
- Balanced digs deeper into complex logic, security-sensitive code, and changes that cross services. It uses a higher-reasoning model.

Select the effort in the Reviewers section before requesting the review. You can also set a default effort in your personal Copilot settings under Code review.

Organization owners can set a default for automatic reviews on organization repositories.

## Enable automatic reviews

Manual requests work for occasional use. Automatic reviews catch issues earlier.

Go to your profile picture, then Copilot settings, then Code review.

Turn on Automatic Copilot code review. This triggers when you open a pull request, co-author one, or move one out of draft.

Optionally enable Review new pushes so Copilot re-reviews after each push.

Optionally enable Review draft pull requests for early feedback.

Repository administrators can also add a ruleset that automatically requests Copilot reviews on target branches.

## Customize reviews with instructions

Add repository custom instructions so Copilot follows your standards.

Create `.github/copilot-instructions.md` for rules that apply to the whole repository. Example:

```
When performing a code review, focus on readability and avoid nested ternary operators.
When performing a code review, apply the checks in the /security/security-checklist.md file.
```

Place path-specific rules in `.github/instructions/**/*.instructions.md`.

Copilot also reads `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, and `REVIEW.md` if present. It uses the versions from the head branch of the pull request.

You can add agent skills in `.github/skills` and configure MCP servers in repository Copilot settings. Copilot is more likely to use them when the skill names or instructions explicitly mention code review.

![Laptop screen showing code with glasses](https://images.unsplash.com/photo-1763568258338-94886e7533ab?auto=format&fit=crop&w=800&q=80)

## Work with review comments

Comments from Copilot behave like human review comments. Add reactions, reply, resolve them, or hide them.

Replies you post are visible to teammates but not processed by Copilot.

On eligible comments, click Fix with Copilot to hand the change to the Copilot cloud agent. The agent can open a new pull request or commit directly to the branch.

Rate comments with thumbs up or thumbs down. Downvotes can include a reason to improve future reviews.

## Tips for better results

Request reviews on draft pull requests so you fix high-confidence issues before teammates spend time.

Re-request a review after large changes. Copilot does not re-review automatically unless you enabled Review new pushes.

Combine Lite for routine changes and Balanced for security or cross-service work.

Keep custom instructions short and specific. Copilot applies them from the head branch, so you can test updates in the same pull request.

Monitor usage. Reviews consume AI credits and, on private repositories, Actions minutes.

## Limitations to know

Copilot may repeat comments on re-review even if you resolved them earlier.

Approvals from Copilot are in public preview and off by default. Enable them at the enterprise, organization, or repository level if you want them to satisfy required reviews.

The feature requires a paid Copilot plan or an organization policy that allows unlicensed members to use it.

## Conclusion

GitHub Copilot code review shortens the feedback loop on pull requests. Start with a manual request on your next PR, then enable automatic reviews and add a short `.github/copilot-instructions.md` file. The combination of severity labels, suggested fixes, and custom rules keeps quality consistent without slowing the team.

For more on integrating AI into development workflows, see the related guide on [Android skills for AI agents](/blog/android-skills-ai-agents/).

## Sources

- GitHub Docs: Using GitHub Copilot code review
- GitHub Docs: Configuring code review by GitHub Copilot
- GitHub Changelog: More ways to request and configure Copilot code reviews
- Official GitHub YouTube: Using GitHub Copilot for code reviews

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/xf65vxjNWdk"
    title="Using GitHub Copilot for code reviews: from VS Code to github.com"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
