---
title: "How to Use Claude Code Projects for Parallel Cloud Threads"
description: "A practical guide to the redesigned Claude Code Projects beta: create a project, connect GitHub, let the coordinator spawn cloud threads, review PRs in Overview, and stay inside plan limits."
pubDate: 2026-09-19
tags: ["ai-tools", "claude", "tutorials"]
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=630&q=80"
---

Claude Code used to treat a project as a folder with chats and files. On September 17, 2026, Anthropic shipped a redesigned version in beta: **one conversation that coordinates parallel cloud threads**. You describe a goal. Claude splits the work, each thread clones the repo onto its own branch, and the Overview pane shows which pull requests need you.

This guide follows Anthropic's official Claude Code docs and product post. It covers who has access, when a project is the right tool, how to create one, how GitHub access works, and how to keep usage from burning through a Pro or Max plan.

## Who can use the new Projects beta

The new Projects experience is in **public beta on Pro and Max**. The first wave is accounts that already use [cloud sessions](https://code.claude.com/docs/en/claude-code-on-the-web) and do **not** have existing projects in claude.ai chat or Cowork.

If **Projects** appears in the sidebar at [claude.ai/code](https://claude.ai/code) or in the Code tab of the desktop app, you have it. If it does not, join the [waitlist](https://claude.com/form/projects). Team and Enterprise plans are not in this wave. Classic projects on Pro and Max keep working until Anthropic upgrades them as chat and Cowork join the rollout.

You can also steer a running project from the Claude apps on [iOS](https://apps.apple.com/us/app/claude-by-anthropic/id6473753684) and [Android](https://play.google.com/store/apps/details?id=com.anthropic.claude).

![Developer workstation with code on a large monitor](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&h=630&q=80)

## What a project is now

A project is one long-running **coordinator conversation** plus the **threads** it starts.

- The coordinator reads your messages, decides what becomes a thread, and tracks results. It sees reports, not every keystroke inside a thread.
- Each thread is a **cloud session**: Claude Code in the cloud, not on your laptop. It works on its own branch and copy of the repo, can open a pull request, and reports back when it finishes.
- Threads keep running after you close the laptop. You can check them from a phone.
- Context is set once: repositories, project instructions, project memory, `CLAUDE.md`, skills, plugins, account connectors, and the project's cloud environment.

Threads do **not** inherit your local Claude Code install, local env files, or VPN-only services. If the work only exists on your machine, upload the files or stay on a local session.

## When to use a project (and when not to)

Use a project when the work outlasts one session and keeps producing tasks:

- One goal across many repositories, such as applying a new lint config in every service
- A service inbox you keep feeding with bugs, stack traces, and review notes
- A build or migration larger than one session, such as leaving a deprecated ORM
- Non-code work on uploaded contracts or ticket exports, with write-ups landing on the **Library** tab

Use something else when:

- One task fits in a single session — start a cloud session yourself
- The work needs a local database, emulator, or VPN-only API — use a local session or agent view
- A job repeats on a schedule with no conversation — create a [routine](https://code.claude.com/docs/en/routines) instead
- Several people steer Claude together in Slack — that is Claude Tag, not a personal project

## Watch how Claude Code works before you spawn threads

Projects sit on top of Claude Code cloud sessions. Anthropic's short official explainer is the fastest way to see what a session can already do before you let a coordinator start several at once:

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/fl1DSmwQKKY" title="What is Claude Code?" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Prerequisites

Check these before you click **New project**:

- You are on **Pro or Max** and **Projects** is in the sidebar
- Code lives on **github.com** (not GitHub Enterprise Server, GitLab, or Bitbucket)
- Your connected GitHub account has **push access**
- The **Claude GitHub App** is installed on the repos the project will touch
- Any extra domains, secrets, or tools live in the project's **cloud environment**
- MCP servers you need appear as connected under [claude.ai connectors](https://claude.ai/customize/connectors)

A token from `/web-setup` is enough for ordinary cloud sessions. Project threads need the GitHub App.

## Step 1 — Create a project from scratch

1. Open [claude.ai/code](https://claude.ai/code) or the Code tab in the desktop app.
2. Select **Projects**, then **New project**. In a browser you can go to [claude.ai/code/projects/browse](https://claude.ai/code/projects/browse).
3. Fill in the dialog:
   - **Name** (required): how it appears in the list
   - **Goal** (optional): one line such as "Hold p95 API latency under 200 ms"
   - **Context** (optional): GitHub repos plus files, folders, or Google Drive folders threads should read
4. Click **Create project**.

Only the name is required. You can add a goal later under **Project settings > General** and more repos under **Project settings > Environment**.

On your first project, Claude often takes a turn immediately. That turn uses plan usage. It may start a read-only exploration thread and post **Setup recommendations** (repos, routines, first threads). Switch off anything you do not want, then click **Update setup**, or ignore the list and type the work yourself.

## Step 2 — Start from an existing cloud session

If a cloud session is already doing the work:

- **Continue as a project** creates a new project named after the session. Claude posts setup recommendations. The original session stays in the list and keeps running if it was mid-turn — stop it if you do not want both burning usage.
- **Move to project** posts a handoff message into an existing project conversation so new work continues in project threads. The original session is left unchanged.

A **Set up project** banner above a session's composer does the same as Continue, except the running turn stops when the project opens.

![Laptop open to a GitHub pull request review](https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1200&h=630&q=80)

## Step 3 — Connect GitHub the way threads require

Most of this is once per account, not once per project:

1. Connect GitHub the first time you open claude.ai/code.
2. Install the Claude GitHub App on each repo — or on the whole GitHub organization if you grant all repositories.
3. Repeat the App install when you add a repo it does not cover, or when the org enforces SSO.

Without the App, the coordinator can talk. Threads cannot push branches or open PRs.

## Step 4 — Brief the coordinator, then leave

Treat the project chat like a chief of staff, not like a single coding session.

A useful first batch:

> Goal: retire the deprecated v1 checkout endpoint. Repos: api, web, mobile. For each repo, open a thread that finds callers, migrates them to v2, runs the existing test suite, and opens a PR. Do not merge. Tell me which PR should land first. Remember that billing changes need a review from the payments owner before a PR is opened.

What happens next, per Anthropic's docs:

- Claude starts a thread per chunk of work, or routes a new note into an existing thread
- Each thread works on its own branch and copy
- Overlap on the same files becomes a normal merge conflict on the PR
- A thread can split further with subagents when the assignment is large
- Decisions you ask it to remember land in **project memory** for later threads

You can walk away. Come back to **Overview**: finished threads, PRs ready for review, and items **Waiting on you**.

Other Overview tabs:

- **Library** — files you uploaded and files threads produced
- **Pull requests** — PRs threads opened
- **Routines** — scheduled work inside the project

## A second workflow: keep feeding one area

You do not have to dump the whole roadmap on day one. Paste work as it arrives:

> New Sentry issue: timeout in `POST /checkout/confirm` after the tax service retry. Add it to the latency project. Prefer fixing retry backoff over raising timeouts. Target the existing `perf/checkout` branch family if one is already open.

The coordinator either starts a new thread or hands the stack trace to the thread already in that area. A pitfall you correct after one fix stays in project memory for the next paste.

## Usage and cost habits

Projects use the **same plan limits** as your other Claude Code sessions, and they use them faster because several full sessions can run at once. Anthropic has not published a separate Projects fee or a fixed thread cap.

Keep the bill predictable:

- Check project-specific usage in the product
- Set model and effort for the coordinator and for worker threads separately if the UI offers it
- Do not let an old cloud session keep running after you convert it to a project
- Start with one or two threads on a small repo before you attach five services
- Skip a project entirely for a one-line fix

Local threads that use your machine and VPN are documented as coming later. Today, threads run in the cloud.

## Explore, plan, then let threads code

The same Explore → Plan → Code → Commit loop still applies inside each thread. Anthropic's official walkthrough is useful if you have only used chat, not Claude Code:

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/xJQuF02NAK8" title="The Explore, Plan, Code, Commit workflow in Claude Code" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

Ask the coordinator to explore and propose threads before it writes code if the repo is unfamiliar. That first read-only pass is cheaper than five wrong PRs.

## Limits that are product facts, not rumors

- Threads work on GitHub.com repos and on files you upload. They do not see tools that exist only on your laptop.
- The coordinator does not watch every step inside a thread. Open a thread when you need to steer details.
- Merge conflicts are your problem the same way they are with human PRs.
- Existing folder-style projects are unchanged until the later chat and Cowork rollout.
- If Projects is missing from the sidebar, you are not in the beta yet. Use [parallel agents](https://code.claude.com/docs/en/agents) in the meantime.

## Conclusion

The redesigned Claude Code project is a coordinator conversation that farms work to cloud sessions. Create it at [claude.ai/code](https://claude.ai/code) when you have a goal that will keep producing tasks, connect GitHub with the Claude GitHub App, write a tight first brief, and review PRs from Overview instead of babysitting five terminals.

Leave one-off fixes in a single session. Leave VPN-only work on your machine. Use a project when you want to paste the next bug into the same conversation tomorrow and have Claude already know the branch rules.

## Sources

- [Let Claude coordinate ongoing work with Projects](https://code.claude.com/docs/en/claude-projects) — Claude Code Docs
- [Projects redesigned: from folder to conversation](https://claude.com/blog/projects-redesigned) — Anthropic, September 17, 2026
- [What are projects?](https://support.claude.com/en/articles/9517075-what-are-projects) — Claude Help Center
- [Claude Code product page](https://www.anthropic.com/product/claude-code) — Anthropic
