---
title: "Request Copilot Code Reviews Through the GitHub API"
description: "Request GitHub Copilot code reviews from the REST API, choose Lite or Balanced effort, and set the new default before your next pull request."
pubDate: 2026-10-04T16:30:00
heroImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["developer", "tutorials", "how-to", "ai-tools", "productivity"]
noindex: false
---

GitHub opened Copilot code review to scripts on October 2, 2026. You can request a review through the REST and GraphQL APIs, and you can set the review effort on that request. The same update made **Balanced** the built-in default for repositories and organizations that had not already picked **Lite**.

That matters if your team opens pull requests from a bot, a release script, or an internal tool. You no longer have to click **Request** next to Copilot on github.com for every change. You still need a plan that includes the feature: Copilot Pro, Pro+, Max, Business, or Enterprise.

## What changed on October 2

GitHub’s changelog lists two changes, both generally available:

- Request a Copilot code review from the supported REST and GraphQL APIs.
- Optionally set the review effort level on that request.

The default shift was announced on August 28, 2026, and took effect on September 28, 2026. **Default** now means **Balanced** for new and existing repositories and organizations that use Copilot code review. If someone had already selected **Lite**, GitHub kept that choice.

On the pull request page, a review still usually finishes in under 30 seconds, according to GitHub Docs. Comments are labeled High, Medium, or Low. By default Copilot leaves a Comment review, not Approve or Request changes, so those comments do not count toward required approvals unless an admin turns approvals on.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/jYW9MorrE_w"
    title="How to use GitHub Copilot for code reviews in pull requests"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Pick an effort level before you automate

Effort controls how deep the review goes. GitHub Docs describe two levels you can use today:

- **Lite** is the cheaper pass. It looks for clear bugs, security issues, and style problems.
- **Balanced** goes further into complex logic, security-sensitive code, and changes that cross services. It uses a higher-reasoning model.

**Max** appears in personal settings with a Coming soon label and is not available yet. Until you pick a level, the control shows **Default (Balanced)**.

Your personal default applies to reviews you request, including automatic reviews of your pull requests. On the pull request page you can still choose a different effort under Reviewers before you click request. An API call can do the same for one review, which is the point of the October 2 change: a hotfix can stay on Lite while a payments pull request asks for Balanced.

![Developer reviewing source code on a laptop](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80)

## Set the default at the right level

Each level can override the one above it. GitHub’s changelog lists the paths:

1. **Enterprise:** enterprise settings, then AI controls, Agents, Copilot code review.
2. **Organization:** organization settings, then Copilot, Code review.
3. **Repository:** repository settings, then Copilot, Code review.
4. **Personal:** profile picture, Copilot settings, Copilot, Code review.

Enterprise admins can set Lite, Balanced, or the GitHub default for organization-owned repositories. That default is inherited. A repository admin can override it for automatic reviews in that repo.

If you only want a one-off deeper review, leave the org default alone and set effort on the request. If every pull request in a payments service should get Balanced, set it on the repository so scripts do not have to remember.

Organization owners can also enable Copilot code review for members who do not have a Copilot license. That setting is separate from the API request itself. Confirm it before you wire a bot that opens pull requests for people without a seat.

## Request the review from the REST API

GitHub Docs say you request Copilot by asking for the reviewer `copilot-pull-request-reviewer[bot]`. The endpoint is the same one you already use for human reviewers:

`POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`

The call needs a token with write access to pull requests. Fine-grained tokens need the Pull requests repository permission set to write. Send the current API version header. The docs sample uses `X-GitHub-Api-Version: 2026-03-10`.

```bash
curl -L \
  -X POST \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer $GITHUB_TOKEN" \
  -H "X-GitHub-Api-Version: 2026-03-10" \
  https://api.github.com/repos/OWNER/REPO/pulls/PULL_NUMBER/requested_reviewers \
  -d '{"reviewers":["copilot-pull-request-reviewer[bot]"]}'
```

A successful request returns `201` and the pull request payload, including `requested_reviewers`. `422` means the login is not a valid collaborator for that request. `403` usually means the token cannot write pull requests, or Copilot code review is not enabled for the account or organization.

GitHub’s October 2 changelog says you can optionally set the review effort on this request, over REST or GraphQL. The public reviewer-request example still shows only `reviewers` and `team_reviewers`. Check the current REST and GraphQL docs for the effort field name before you hard-code it. If the field is missing from your API version, the review uses the default that applies to that repository and user, which is Balanced unless Lite was saved.

Do not fire this endpoint in a tight loop. GitHub warns that creating review requests too quickly can hit secondary rate limits.

![Code on a monitor in a developer workspace](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Read the result, then decide what to do with it

The API request only starts the review. Comments arrive on the pull request after Copilot finishes. List review comments with the pull request review comments API, or open the pull request in the browser.

Treat the output as a first pass, not a merge gate, unless approvals are enabled. GitHub Docs note that approvals are in public preview, off by default, and configurable at enterprise, organization, and repository level. When they are on, a later push dismisses Copilot’s approval, and you can request another review.

Suggested edits can be committed from the pull request page. On a review comment you can also choose **Fix with Copilot** if Copilot code review and Copilot cloud agent are both enabled. That opens a draft comment where you tell Copilot which feedback to apply, then choose a new pull request or a commit on the same branch.

Re-reviews do not happen on every push unless you turned on automatic review and selected **Review new pushes** in the ruleset. A manual re-request is the button next to Copilot in Reviewers, or another call to the same API. Copilot may repeat a comment you already resolved or downvoted.

## Give the reviewer project context

Copilot reads instructions from the head branch, not the base branch. You can test a new review rule in the same pull request that changes the instructions file.

Useful files, from GitHub Docs:

- `.github/copilot-instructions.md` for rules that apply to the whole repository, such as “focus on readability and avoid nested ternary operators.”
- `AGENTS.md` at the repository root for architecture and testing notes.
- `.github/instructions/**/*.instructions.md` for path-specific rules.
- `CLAUDE.md`, `GEMINI.md`, and `REVIEW.md` if those files already exist.

Agent skills in `.github/skills` and MCP servers configured for the repository can also feed a review. The GitHub MCP server and Playwright MCP server are on by default. **Allow Copilot to use MCP tools when reviewing pull requests** is enabled by default. Turn it off if MCP should stay limited to the cloud agent.

If you already write agent skills for local tools, the same idea applies here. A short review skill with a name like `code-review` is more likely to be used than a generic prompt buried in a chat. For a related walkthrough of agent skills outside GitHub, see [Android CLI agent skills](/blog/android-cli-agent-skills/).

## Practical setup for a team script

Use this order so the first automated review is predictable.

1. Confirm the account or organization has Copilot code review on a supported plan.
2. Set the repository effort to Lite or Balanced in Copilot, Code review. Leave Max alone until GitHub removes the Coming soon label.
3. Add a short `.github/copilot-instructions.md` on the branch you will review. Keep it to checks a human would also apply.
4. Open a pull request and call the requested reviewers endpoint with `copilot-pull-request-reviewer[bot]`.
5. Wait for comments, then list them from the API if your tool needs to post a summary in chat.
6. Request a second review only after the follow-up commits land. Expect some repeated notes.

Automatic review is still the better default for busy repositories. The API is the escape hatch for pull requests your own system creates, and for the cases where one change needs a different effort than the repository default.

## Conclusion

The October 2 API support does not change what Copilot looks for. It changes where you can start the review. Request `copilot-pull-request-reviewer[bot]` on the pull request reviewers endpoint, keep Balanced as the default unless a repo has a reason to stay on Lite, and put review rules in the head branch so the next run uses them.

## Sources

- GitHub Changelog, October 2, 2026: [Copilot code review: API support and new default effort level](https://github.blog/changelog/2026-10-02-copilot-code-review-api-support-and-new-default-effort-level/)
- GitHub Changelog, September 23, 2026: [More ways to request and configure Copilot code reviews](https://github.blog/changelog/2026-09-23-copilot-code-review-more-ways-to-request-and-configure-reviews/)
- GitHub Docs: [Using GitHub Copilot code review](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-code-review)
- GitHub Docs: [REST API endpoints for review requests](https://docs.github.com/en/rest/pulls/review-requests)
- GitHub Docs: [Configuring code review by GitHub Copilot](https://docs.github.com/copilot/how-tos/copilot-on-github/set-up-copilot/configure-code-review)
