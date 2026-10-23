---
title: "How to Use GitHub Copilot Code Review in PRs"
description: "Step-by-step guide to request, automate, and customize GitHub Copilot code review on pull requests using Lite and Balanced effort levels."
pubDate: 2026-10-23T12:00:00
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "developer", "ai"]
noindex: false
---

Pull requests move faster when the first pass catches common issues before a teammate opens the diff. GitHub Copilot code review does exactly that. It leaves inline comments with severity labels and ready-to-apply suggestions so you spend less time on routine checks.

The feature works on the GitHub website, in Visual Studio Code, and through the REST and GraphQL APIs. It is available on Copilot Pro, Pro+, Max, Business, and Enterprise plans. Reviews usually finish in under 30 seconds.

## Request a Copilot review on a pull request

Open any pull request on GitHub.com. In the right sidebar, locate the Reviewers section. Next to Copilot, click Request.

Copilot posts a comment review (not an approve or request-changes review). Scroll through the comments. Each one carries a High, Medium, or Low severity label so you can prioritize.

![Developer reviewing code on a laptop](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

You can apply a single suggestion with one click or batch several. The changes land as a commit on the same branch. Copilot does not count toward required human reviews and never blocks a merge.

For Visual Studio Code, use the Review changes with Copilot button in the Git Changes window (version 17.14 or later). The same comments appear in the editor.

## Choose Lite or Balanced effort

Not every change needs the same depth. Copilot code review offers two generally available effort levels.

Lite gives a fast, targeted pass on common bugs, security issues, and style problems. Use it for documentation updates, small fixes, and straightforward refactors.

Balanced routes the review to a higher-reasoning model for longer analysis of complex logic, security-sensitive code, and cross-service changes. It uses more AI credits and may consume slightly more GitHub Actions minutes.

As of late September 2026, Balanced is the default for repositories and organizations that leave the setting on Default. Explicit Lite selections are preserved. Max appears in settings with a Coming soon label and is not yet available.

You select the level when you request the review or set a default under Copilot settings > Code review (user, repository, organization, or enterprise scope). The level used for a given run appears in the pull request overview comment.

## Enable automatic reviews

Manual requests work well for occasional use. For teams, automatic reviews keep feedback current without extra clicks.

In your personal Copilot settings (profile picture > Copilot settings > Code review), enable Automatic Copilot code review. This covers pull requests you create. Options include reviewing new pushes and reviewing drafts. This setting is available on Pro, Pro+, Max, Business, and Enterprise plans (not for managed user accounts).

For repository-wide or organization-wide coverage, use rulesets. Go to repository Settings > Rules > Rulesets. Create a new branch ruleset, target the default branch (or all branches), and enable Automatically request Copilot code review. You can also turn on Review new pushes and Review draft pull requests.

Rulesets let you enforce the behavior for every contributor, not just your own pull requests.

## Customize reviews with instructions

Generic feedback improves when Copilot knows your standards. Add a `.github/copilot-instructions.md` file at the repository root for rules that apply to every review.

Keep the file short and imperative. Example lines:

```
When performing a code review, flag any use of hardcoded credentials.
When performing a code review, focus on readability and avoid nested ternary operators.
When performing a code review, check the security checklist in /security/security-checklist.md.
```

Path-specific files live under `.github/instructions/` and use an `applyTo` frontmatter glob (for example `**/*.py`). Copilot also reads `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, and `REVIEW.md` if present.

Instructions are read from the head branch of the pull request, so you can test changes in the same PR. Copilot weighs them against the diff; they guide rather than hard-constrain the model.

Agent skills in `.github/skills` and MCP servers configured for the repository are available when relevant to the review.

![Team collaborating on code](https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80)

## Practical tips

Start with one manual review on a real pull request before enabling automatic rules. Confirm the comments match your expectations and that the severity labels help prioritization.

Use Lite for low-risk, contained changes and Balanced for authentication, payments, migrations, or multi-service work. Monitor AI credit usage after switching defaults.

Write custom instructions as short, concrete rules with examples. Long files risk being partially ignored.

Combine Copilot review with your existing required human reviewers and status checks. The AI pass surfaces issues early; humans still make the final call.

For related developer workflows that involve AI agents on Android, see our guide on [Android CLI agent skills](/blog/android-cli-agent-skills/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/xf65vxjNWdk"
    title="Using GitHub Copilot for code reviews: from VS Code to github.com"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

GitHub Copilot code review turns the first pass on a pull request into a fast, consistent check. Request it manually, automate it with personal settings or rulesets, pick Lite or Balanced based on risk, and steer it with custom instructions.

Teams that adopt it report fewer routine comments reaching human reviewers and faster cycle times on straightforward changes. The feature continues to expand with API support and deeper customization options.

## Sources

- GitHub Docs: Using GitHub Copilot code review
- GitHub Docs: Configuring code review by GitHub Copilot
- GitHub Changelog: Copilot code review effort levels are generally available (August 2026)
- GitHub Changelog: Copilot code review API support and new default effort level (October 2026)
- GitHub Blog: Unlocking the full power of Copilot code review with instructions files
