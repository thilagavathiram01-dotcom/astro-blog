---
title: "How to Create and Use ChatGPT Skills for Repeatable Work"
description: "A practical guide to ChatGPT Skills: find them under Plugins, create a SKILL.md workflow with chat or the editor, invoke skills with @, and share them in a Business, Enterprise, Healthcare, or Edu workspace."
pubDate: 2026-09-19T14:00:00
tags: ["ai-tools", "chatgpt", "tutorials"]
heroImage: "https://images.unsplash.com/photo-1517694710532-17450c7d769e?auto=format&fit=crop&w=1200&h=630&q=80"
---

If you keep pasting the same briefing template into ChatGPT, you already have the problem Skills were built to solve. A **skill** is a reusable workflow — usually a `SKILL.md` file plus optional templates or scripts — that tells ChatGPT how to run one job the same way every time.

OpenAI documents Skills as generally available for eligible **ChatGPT Business, Enterprise, Healthcare, and Edu** users, subject to workspace settings. They also work in **Codex**. This guide covers how to find them, how to create one without writing code, and how to invoke it in Chat or Work.

## What a ChatGPT skill actually is

A skill is not a new model and it is not a connector. Plugins can package **skills** (instructions) and **apps** (connections to Gmail, Calendar, and other services). The skill is the playbook; the app is the data source.

A typical skill includes:

- **Name and description** so ChatGPT knows when to use it
- **Workflow instructions** in `SKILL.md`
- **Resources** such as templates, examples, brand rules, or schemas
- Optional **scripts** when a step must be deterministic

Skills follow the open [Agent Skills](https://agentskills.io) specification. ChatGPT and Codex only load the name and description at first. They pull the full `SKILL.md` when they decide the skill applies. That progressive disclosure keeps long instruction files from crowding every prompt.

Eligible accounts include one built-in skill: **skill-creator**. When you ask ChatGPT to create or fix a skill, it uses that helper automatically.

![Person working at a desk with a laptop and notebook, planning a repeatable workflow](https://images.unsplash.com/photo-1434030216411-0b7c2763d0c5?auto=format&fit=crop&w=1200&h=630&q=80)

## Who can use Skills today

According to OpenAI's Help Center article *Skills in ChatGPT*:

- **Business, Enterprise, Healthcare, and Edu** users can use Skills when the workspace allows it
- Availability, install paths, and sync can differ between ChatGPT and Codex
- Enterprise and Edu admins control which roles may create, use, share, or install skills

If you are on Free, Go, Plus, or Pro and do not see a Skills tab, that matches the dedicated Skills article. Do not invent a toggle that is not there. Check the Plugins directory after your workspace admin enables Skills.

## Watch OpenAI walk through plugins and a Meeting Prep skill

Official OpenAI clip from the Plugins & Skills lesson: connect Gmail and Calendar, prepare a kickoff brief, then save the process as a reusable skill.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/5QPBVrAAdBk" title="OpenAI: Plugins and Skills in ChatGPT Work" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Find Skills in ChatGPT

1. Open [ChatGPT](https://chatgpt.com) on the web or the desktop app.
2. In the sidebar, select **Plugins**.
3. Open the **Plugin Directory** and choose the **Skills** tab.

You should see lists similar to:

- **Installed**
- **Created by me**
- **Shared with me**
- **Shared by {workspace name}**

On the ChatGPT desktop app, OpenAI also documents a **Skills** sidebar entry for skills created across projects. Standalone local skills show up there and in Codex; skills bundled in plugins also appear in Chat and Work on web, desktop, and mobile.

If the tab is missing on an eligible workspace, an admin setting is the usual cause — not a broken account.

## Create your first skill three ways

OpenAI lists four creation paths. Start with chat unless you already have a `SKILL.md` folder.

### 1. Create with chat

1. Go to **Skills → Create → Create with chat**.
2. Or type the request in a normal conversation. ChatGPT will use **skill-creator**.
3. Answer what the skill does, when it should fire, and whether it needs scripts. Instruction-only is the default.
4. Install the skill when ChatGPT offers it.

A first prompt that matches OpenAI Academy's advice:

> Create a skill named weekly-status that turns my notes into a one-page status update. Use this structure: shipped, in progress, blocked, next week. Ask me for the notes if I forget them. Do not invent metrics.

Keep the scope narrow. One job beats a skill that tries to run the whole team.

### 2. Create with the editor

Choose **Skills → Create → Create with editor** when you want to edit the `SKILL.md` file directly. Use this after chat drafts a first version you want to tighten.

### 3. Upload a folder

Choose **Upload from your computer** if you already have a skill directory:

- `SKILL.md` (required: YAML `name` and `description`, then the steps)
- optional `scripts/`, `references/`, `assets/`
- optional `agents/openai.yaml` for desktop display name, icons, and whether implicit invocation is allowed

ChatGPT scans uploaded skills. Most become available after the scan. Some are marked **Needs Review** until you read the extra details.

Minimal `SKILL.md` shape from OpenAI's build-skills docs:

```markdown
---
name: weekly-status
description: Draft a one-page weekly status from notes. Use when the user asks for a status update, weekly report, or shipped / blocked summary. Do not use for financial forecasts.
---

Ask for notes if none are attached.
Write four sections: Shipped, In progress, Blocked, Next week.
Do not invent numbers or owners.
End with three questions the reader still needs to answer.
```

![Close-up of a laptop screen during focused writing work](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=630&q=80)

## How ChatGPT decides to run a skill

There are two triggers:

1. **Explicit.** In ChatGPT, type `@` and pick the skill. In Codex CLI or the IDE extension, run `/skills` or type `$` and the skill name. In Work you can also invoke `@skill-creator`.
2. **Implicit.** ChatGPT or Codex matches your request to the skill **description**.

Write the description as a trigger list, not marketing copy. Front-load the use case and the words people actually type. Say when *not* to use the skill so a status writer does not steal a legal-review prompt.

If implicit matching feels noisy, OpenAI's optional `agents/openai.yaml` can set `allow_implicit_invocation: false`. Explicit `@skill` still works.

## A reusable workflow: meeting prep

This is the pattern from OpenAI's official Plugins & Skills lesson, written as steps you can copy.

1. Connect the apps the skill needs (Gmail, Google Calendar, or other workspace apps your admin allows).
2. Run the task once in **Work**: find the last client thread, pick a kickoff slot, draft a brief with links back to the sources.
3. When the output looks right, ask ChatGPT to save the process as a skill — for example **meeting-prep**.
4. Next time, type `@meeting-prep` and the client name. Review the brief before you send it.

Plugins supply the inbox and calendar. The skill supplies the checklist and the brief format. Separating those two pieces is why the same skill still works after someone swaps a connector.

## Share a skill with the workspace

On the Skills page, open the skill's more-options menu and share it with people or the whole workspace, using the permissions your admin allows.

To install something shared with you:

1. Open **Shared with me** or **Shared by {workspace name}**.
2. Open the ••• menu on that skill.
3. Choose **Install**.

Packaging several skills — or a skill plus a connector — is what **plugins** are for. Use a local folder while you draft. Use a plugin when other teams should install the same bundle.

## Codex and local skill folders

Developers can keep skills next to code. Codex looks in:

- `.agents/skills` from the current folder up to the repo root
- `$HOME/.agents/skills` for personal skills
- `/etc/codex/skills` for machine-wide admin skills
- system skills bundled with Codex, including skill-creator

Install extra curated skills in Codex with `$skill-installer`, for example `$skill-installer linear`. Restart Codex if a new skill does not appear. Disable a local skill in `~/.codex/config.toml` with `enabled = false` instead of deleting the folder.

## Practical limits

- **Plan and admin gates.** Skills are not documented as a Free or Plus feature on the dedicated Help Center page.
- **Staged UI.** Some users still see Skills under a profile menu from older beta copy. Prefer **Plugins → Skills**.
- **Review uploaded skills.** Treat third-party `SKILL.md` files like code. Read the steps and any scripts before you install them.
- **Connectors need approval.** A meeting-prep skill is only as safe as the Gmail and Calendar access behind it.
- **One job per skill.** OpenAI's build-skills guidance: keep each skill focused; prefer instructions over scripts unless you need a deterministic tool.

## A longer walkthrough if you want file-level detail

This independent tutorial walks through `SKILL.md` structure, implicit matching, and turning a good chat into a skill. Pair it with OpenAI's own docs rather than treating it as a product spec.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/w49OfWDTTDo" title="AI Skills 101: How to Build and Use Skills in ChatGPT" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Skills pay off when the format is the product: the same status page, the same meeting brief, the same intake form. Create one narrow skill with chat, give it a description that states when it should and should not run, invoke it with `@` until you trust implicit matching, then share it through the workspace Skills tab.

Official detail lives in [Skills in ChatGPT](https://help.openai.com/articles/20001066-skills-in-chatgpt), [Build skills](https://developers.openai.com/codex/skills), and the [Using skills](https://openai.com/academy/skills/) Academy lesson.

## Sources

- [Skills in ChatGPT](https://help.openai.com/articles/20001066-skills-in-chatgpt) — OpenAI Help Center
- [Build skills](https://developers.openai.com/codex/skills) — OpenAI / ChatGPT Learn
- [Using skills](https://openai.com/academy/skills/) — OpenAI Academy
- [ChatGPT Business release notes](https://help.openai.com/articles/11391654-chatgpt-business-release-notes) — Skills generally available; Plugins directory
- [ChatGPT release notes](https://help.openai.com/articles/6825453-chatgpt-release-notes) — Skills under Plugins for Enterprise and Edu
- [Agent Skills specification](https://agentskills.io) — open standard
- [Plugins & Skills](https://www.youtube.com/watch?v=5QPBVrAAdBk) — official OpenAI video
