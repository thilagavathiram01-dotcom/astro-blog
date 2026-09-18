---
title: "How to Use Notion 3.7 Agent Skills Across Your Team and Local Agents"
description: "Create reusable Notion Agent skills, run them from chat, keep them in a shared library, and download SKILL.md files for Claude Code, Codex, Cursor, Gemini, or Grok."
pubDate: 2026-09-18T09:15:00
tags: ["ai-tools", "notion", "tutorials"]
heroImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1600&q=80"
---

Notion 3.7, released on 15 September 2026, turns one-off prompts into reusable **skills**. A skill is a Notion page of instructions that Notion Agent can run on demand. The same page can live in a team library and export as a `SKILL.md` file for Claude Code, Codex, Cursor, Gemini, or Grok.

This guide walks through creating a skill, running it, sharing it, and downloading it to a local agent. It follows Notion’s official release notes and Help Center. Plan names and API access differ by workspace; check your plan before you assume Custom Agents or the Agent Skills API are on.

## What a skill is (and is not)

A skill is **not** a Custom Agent. Notion’s Help Center describes skills as reusable instructions for a specific type of work. You write them as pages, mark those pages as skills, then invoke them when you need the same process again.

Typical uses Notion documents:

- Proofread, explain, or reformat selected text
- Turn meeting notes into a follow-up email
- Rewrite a paragraph for a different audience
- Convert a brainstorm into a project plan
- Generate a monthly business review in your team’s format
- Critique a doc the way your review process already works

A Custom Agent is a longer-lived worker with its own instructions, triggers, and (on Business and Enterprise) connections. Skills are the playbooks that agents and people reuse. You can keep both.

![Laptop and notes on a desk while planning reusable AI workflows](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1400&q=80)

## Before you start

- You need access to **Notion Agent** in the workspace.
- Skills are pages. Anyone who can edit the page can change the skill. Share accordingly.
- Downloading to local agents writes a `SKILL.md` plus approved attachments. Only attach files you are willing to leave the workspace.
- Custom MCP connections, sub-agents, post-meeting triggers, and the Agent Skills API are documented as **Business and Enterprise** (some items still in beta). Do not treat them as free-plan features.

Notion’s official skills walkthrough is short and useful before you write your first page:

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/tcgNauq4joo" title="How to build Instructions and Skills that supercharge your Notion Agent" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## 1. Write a skill as a reusable page

Notion’s recommended pattern is: create a page, write the request so it can run on new input, then mark the page as a skill.

1. Create a new page. Give it a name people can type, such as `Exec-ready brief` or `PRD from raw notes`.
2. Write the instructions as a reusable request. Include the output shape, tone, and what to refuse.
3. Open the page menu (`•••`) and use the control to mark the page as a skill (Help Center: **Use with AI → Use as AI skill**).
4. Optionally attach reference files through the skill’s **Files** property. Those files travel with a download when they are approved to share.

A first skill that stays useful:

```text
You turn a draft page into an executive brief.

Output exactly four headings:
- Takeaway (3 sentences max)
- Decisions already made
- Risks and open questions
- Asks (owners + dates if present)

Rules:
- Use only facts on the current page or files I attach.
- If a date or owner is missing, write “not specified.”
- Do not invent metrics.
- Keep the whole brief under 400 words.
```

Notion also lets you chat with Agent to draft a skill from scratch, or ask it what skills you likely need based on work already in the workspace. Review that draft the same way you would review a process doc. Vague skills produce vague output.

Official examples on the 3.7 page include reviewing a feature proposal against product, design, and engineering standards; building a new-hire setup checklist from device and app policies; and drafting a job description against a leveling framework.

## 2. Run a skill when you need it

Notion documents several entry points. Use the one that matches the work.

**In Agent chat**

- Type `/` and choose the skill, then add extra context and press Enter.
- Or type `@` plus the skill page name.

**On selected text**

- Highlight a block.
- Open the selection menu and pick a built-in skill such as Improve writing, Proofread, Explain, or Reformat, or a custom skill you attached.

**Automatic runs**

- Notion 3.7 can set skills to run automatically. Use this only after the skill is stable and the trigger is narrow. Help: “How to run a skill automatically.”

Ready-made starting points on Notion’s site include an **Exec-ready** skill and **PRD from raw notes**. Treat templates as drafts. Replace their sample standards with yours.

![Team workspace with laptop and documents ready for a shared skills library](https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80)

## 3. Keep one library so the team stays on one version

Great prompts used to live in one person’s chat history. 3.7 adds a **skills library** so the workspace has a single hub.

Practical setup:

1. Create a Notion database for skills (name, owner, team, status, last reviewed).
2. Put related skills in that database.
3. Share the database, not a pile of private pages.
4. When someone improves a skill, they edit the page. Everyone else runs the latest version.

Notion documents that you can share one skill or the whole database. That is the difference between a personal shortcut and a team process.

Do not dump every prompt into the library. A skill should encode a repeatable outcome. One-off “rewrite this Slack message for Sam” stays in chat.

## 4. Download the skill to Claude Code, Codex, Cursor, Gemini, or Grok

This is the piece that connects Notion to the rest of the agent stack.

1. Open the skill page.
2. Select `•••` at the top.
3. Choose **Download to local agents**.
4. Pick the destination agent.

Notion writes a `SKILL.md` file plus approved supporting files. Local agents read that file the same way they read their own skill folders. When the Notion page changes, the downloaded copy is **badged** so you know to pull again.

That badge matters. If you edit only the local file, the next teammate who downloads from Notion will not see your change. Edit in Notion, then re-download.

Developers can skip the menu and use the **Agent Skills API**. Each skill’s main `SKILL.md` is a Notion page. Supporting files attach through the Files property. The API can list plugins, download a plugin group, or download one skill as a gzipped tar archive with a signed URL. Requests use `Notion-Version: 2026-03-11` and need a token with **Read content** plus access to the skill databases.

Notion publishes a `notion-skills-github-sync` sample that copies skills into a GitHub plugin marketplace, which can then feed Claude, ChatGPT, or other agents. The Vercel skills CLI can install those packages locally.

A local `SKILL.md` still looks like the Agent Skills standard:

```markdown
---
name: exec-ready-brief
description: Turn a draft page into a short executive brief with takeaway, decisions, risks, and asks.
---

# Exec-ready brief

Follow the four-heading format. Do not invent metrics.
```

Keep names lowercase with hyphens. Put the “when to use this” sentence in `description` so other agents can decide whether to load the skill.

## 5. Connect tools and keep a human on the last action

3.7 also lets Notion Agent connect GitHub, Amplitude, and other tools through a **Custom MCP** connection. You ask Agent to connect a tool; it walks through setup. Confirmations are supposed to block changes in the connected tool until you approve them. Notion lists this as beta on Business and Enterprise.

Use that path for read-first work: pull a PR title, check a dashboard number, draft a status update. Do not start with a skill that closes tickets or merges PRs.

Related 3.7 agent features, if your plan includes them:

- Custom Agents can call other Custom Agents as **sub-agents**, each with its own instructions, context, access, and model.
- Custom Agents can pick up **post-meeting** work when a transcript and summary are ready.
- You can embed a Custom Agent in a doc.
- The model picker now surfaces frontier models available in Notion, including Opus 5, GPT-5.6 Sol, and Kimi K3, with speed, intelligence, and cost indicators.

Notion’s customer story for Remote’s IT help desk is on the release page. Treat dollar figures there as Notion’s published customer claim, not an independent audit.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/ndTwYKuWjlE" title="Using sub-agents to capture and prioritize customer feedback — Notion" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## A one-hour rollout that actually sticks

1. Pick **one** workflow the team already repeats (exec brief, PRD from notes, job-description draft).
2. Write the skill with an output contract and a ban on invented numbers.
3. Run it three times on real pages. Fix the page, not the prompt-of-the-day.
4. Move it into a shared skills database with an owner and a review date.
5. Download `SKILL.md` to the coding agent your team already uses.
6. Add MCP or auto-run only after those five steps are boring.

If the skill fails, the failure is usually missing context (the leveling framework lives on another page) or a skill that tries to do three jobs. Split it.

## Conclusion

Notion 3.7 is useful when you treat skills as versioned process docs, not magic buttons. Write the outcome, keep one copy in a library, run it from `/` or `@`, and export `SKILL.md` so Claude Code, Cursor, Gemini, or Grok follow the same rules.

Leave Custom Agents, MCP writes, and automatic triggers for after the skill is stable. The value is a team that stops retyping the same instructions in five different chats.

## Sources

- [Notion 3.7: Agent skills for your whole team](https://www.notion.com/releases/2026-09-15) — Notion Releases, 15 September 2026
- [Create and manage skills](https://www.notion.com/help/create-and-manage-skills) — Notion Help Center
- [Customize your Notion Agent with instructions and skills](https://www.notion.com/help/customize-your-notion-agent-with-instructions-and-skills) — Notion Help Center
- [Agent Skills API](https://developers.notion.com/guides/agent-skills/overview) — Notion Developers
- [Use Notion Skills with MCP](https://developers.notion.com/guides/mcp/notion-skills) — Notion Developers
- [How to build Instructions and Skills](https://www.youtube.com/watch?v=tcgNauq4joo) — Notion on YouTube
- [Sub-agents for customer feedback](https://www.youtube.com/watch?v=ndTwYKuWjlE) — Notion on YouTube
