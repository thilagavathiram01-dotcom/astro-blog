---
title: "Migrate Gemini Gems to Skills Before November 17"
description: "Gemini Gems migrate to skills on Nov 17, 2026. Export instructions, lock dates, and set up slash-command skills."
pubDate: 2026-09-28T11:00:00
heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "productivity", "google"]
noindex: false
---

The Gemini app is retiring Gems. An in-app banner in Gem Manager now states that Gems become skills starting **17 November 2026**. Creation and editing of Gems stop earlier, on **13 October 2026**. Existing Gems keep running until the automatic migration.

Gems have been free custom versions of Gemini since Google opened them to all users in March 2025. Skills arrived later with Gemini Spark. They cover the same idea — saved instructions — but you invoke them with a slash in the prompt box and you can stack more than one in a single turn.

This guide explains the two dates, what changes for free versus paid accounts, and how to copy a Gem so you do not lose tone, files, or default tools.

## What Google is changing

Gems live in a side-panel list. Each Gem can hold custom instructions, a default tool such as Create image or Canvas, attached files, and a share link.

Skills sit closer to the composer. You type `/` and pick a skill. Multiple skills can apply to one request. Google introduced that pattern with Gemini Spark for Google AI Pro and AI Ultra subscribers.

The notice that 9to5Google captured in Gem Manager reads: starting 17 November 2026, Google will automatically begin migrating Gems to skills. You can keep using Gems until they migrate.

Android Authority earlier found matching strings in Google app builds. The latest wording also freezes new Gem creation and edits on 13 October 2026.

![Person using an AI assistant on a smartphone](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## Who can create skills today

As of late September 2026:

- **Every Gemini user** can still open, run, and (until 13 October) edit Gems.
- **Google AI Pro and AI Ultra** subscribers can create skills from the Gemini Spark tab.
- The in-app “Create skills” control and the “Learn more” help article were not live when the banner first appeared. Treat those buttons as incomplete until Google turns them on.

Google has not published a final statement on whether free-tier users will keep a skill editor after migration. Plan as if you need a paid plan to author new skills, and keep a local copy of every Gem’s instructions.

## Step 1 — Inventory every Gem

Open the Gemini app or [gemini.google.com](https://gemini.google.com).

1. Open the side panel and choose **Gems** (or Gem Manager).
2. List personal Gems and any shared Gems you rely on.
3. For each Gem, open it and copy the name, instructions, default tool, and attached file names into a notes doc.
4. Download copies of attached files from Drive or your device. Migration should carry context, but local backups are cheap insurance.

Do this before **13 October 2026**. After that date you cannot edit a Gem to fix a missing instruction.

## Step 2 — Rewrite instructions for slash use

Skills fire from `/skill-name` inside a chat that may already have other context. Instructions that assumed “this whole conversation is the Gem” need a tighter first line.

Use a structure like this:

```text
Role: You are the brand editor for [project].
When this skill is active:
- Follow the voice rules below even if the user is brief.
- Prefer the attached style guide over generic marketing copy.
- If a required file is missing, ask for it before drafting.
Output: headings, then body, then a short checklist of claims to verify.
```

Keep tool hints explicit (“use Canvas for the outline”) because a stacked skill may not inherit a Gem’s default tool the same way.

## Step 3 — Recreate the workflow as a skill (Pro / Ultra)

If you subscribe to Google AI Pro or AI Ultra:

1. Switch to the **Gemini Spark** tab.
2. Create a skill with the same name as the Gem when possible.
3. Paste the rewritten instructions.
4. Attach the same reference files.
5. Test with `/your-skill` plus a short prompt you used on the old Gem.
6. Repeat for Gems you stack together (for example a voice skill plus a research skill).

If the Create skills button still fails, keep the notes doc current and retry after Google finishes the help article. Automatic migration on 17 November is the fallback.

![Laptop open to a chat-style AI workspace](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80)

## Step 4 — Practice slash commands now

Skills are faster than hunting My Gems in the side panel. Practice the habit before the cutover:

- Start a prompt with `/` and pick one skill.
- Add a second skill when a task needs two roles (editor plus researcher).
- Keep the user message short. The skill should already hold the long instructions.

That is the main product reason Google gives for the switch: skills are easier to invoke and can run together.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/bj33rMHj-h4"
    title="How to Create Marketing Materials with Gemini Gems | Make AI Work for You | Google"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

Google’s older Gems tutorial still shows how to write a reusable persona, attach knowledge, and test before you save. Use the same checklist when you author a skill.

## Step 5 — Shared Gems and team links

Gems could be shared with a link. Skills may not copy that sharing model one-for-one on day one.

Before 13 October:

- Export the shared Gem’s instructions into a team doc.
- Note who holds the paid Spark seat that can recreate the skill.
- If a classroom or newsroom depends on a public Gem link, appoint one owner to rebuild it after skills creation is stable.

Do not assume every old share URL will keep working after 17 November until Google documents the new sharing path.

## Dates to put on the calendar

| Date | What happens |
| --- | --- |
| **Now** | Banner in Gem Manager; Gems still editable |
| **13 October 2026** | Create and edit Gems turn off |
| **17 November 2026** | Automatic Gem → skill migration starts |

Use Gems as normal between those dates. Just stop treating the Gem editor as a place you can fix things after mid-October.

## Tips that reduce surprise on migration day

- Copy instructions out of the app. Do not rely on memory of a 400-word system prompt.
- Name skills to match the slash you want (`/brand-voice`, not a long sentence).
- Test stacked skills on a throwaway chat before you use them on client work.
- If you also build Android agent workflows, pair Gemini skills with the CLI skill packs in our [Android CLI and agent skills guide](/blog/android-cli-agent-skills/). App-level Gemini skills and repo-level Android skills solve different layers.
- Watch the official Gemini app and Spark surfaces for the delayed help article. Early banners shipped before the docs.

## What this is not

This is not a shutdown of Gemini itself. The Gemini app passed **one billion monthly active users** in August 2026, per Google’s product blog. The change is only the custom-assistant format inside that app.

It is also not the same as Android CLI “skills” (`SKILL.md` files for coding agents). Those live in developer tooling. Gemini app skills live in the consumer and Spark chat UI.

## Conclusion

Treat 13 October as the last day you can edit a Gem, and 17 November as the day Google starts turning those Gems into skills. Copy every instruction block and file now. If you have AI Pro or Ultra, rebuild the important ones as Spark skills and learn the `/` shortcut. If you are on the free tier, keep the export and watch whether Google opens skill authoring after the migration.

The work is small if you do it this week. It is messy if you discover a broken brand voice the morning a Gem stops accepting edits.

## Sources

- [Gemini app replacing Gems with skills in November (9to5Google)](https://9to5google.com/2026/09/27/gemini-gems-skills/)
- [Google could auto-migrate Gemini Gems to Spark Skills (Android Authority)](https://www.androidauthority.com/google-gemini-gems-spark-skills-apk-teardown-3709228/)
- [Gemini Gems retiring; skills Pro-only for now (AndroidPure)](https://www.androidpure.com/gemini-gems-retiring-skills/)
- [Google’s Gemini app hits 1 billion monthly active users](https://blog.google/innovation-and-ai/products/gemini-app/one-billion-monthly-users/)
- [How to Create Marketing Materials with Gemini Gems (YouTube)](https://www.youtube.com/watch?v=bj33rMHj-h4)
