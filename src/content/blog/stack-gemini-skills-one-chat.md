---
title: "How to Stack Gemini Skills in a Single Chat Prompt"
description: "Stack Gemini skills in one chat: create reusable instructions, call them with /, combine several skills, and let Gemini apply them automatically."
pubDate: 2026-10-01T15:40:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "productivity"]
noindex: false
---

You keep pasting the same writing rules, brand notes, and report format into Gemini. Skills fix that. Google rolled skills into Gemini chat on 30 September 2026 so you can save those instructions once, call them with a slash, and stack more than one skill in a single prompt.

A skill is a reusable set of instructions. It is not a separate chat. You stay in the thread you already have, add the skills you need, and ask for the actual work. Google says skills will replace Gems, with an automatic migration when Gems go away.

## What you need before you start

Skills are rolling out gradually. Google says they might not appear in every account yet.

You need all of the following:

- Age 18 or over.
- A personal Google Account signed in to Gemini. Work and school accounts do not get chat skills yet. Google plans to bring skills to Workspace business, enterprise, nonprofit, and education customers in the coming weeks.
- Gemini Activity turned on (Keep Activity).
- The Gemini mobile app, the Gemini app on Mac, or the web app at [gemini.google.com](https://gemini.google.com).

Google also notes two current limits. Manually created skills may not save in the Gemini mobile app. Create them in chat, or build them on the web. Skills that include uploaded files cannot be edited in the mobile app or the Mac app. Edit those on the web.

If you already built custom bots, read the related guide on [moving Gems to skills](/blog/gemini-gems-to-skills/) before you recreate the same instructions by hand.

![Person typing on a laptop at a shared desk](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## Create two small skills you can stack

Stacking only helps if each skill does one job. Google’s own example pairs a writing-style skill with a brand-guidelines skill. Keep that split.

### Build the first skill from chat

1. Open [gemini.google.com](https://gemini.google.com).
2. In the prompt box, ask Gemini to create a skill and paste the rules. Example: `Create a skill based on these instructions: Write status updates in short paragraphs. Lead with the decision. Use plain English. Do not add a greeting or a sign-off.`
3. Submit. Gemini creates the skill and saves it to your Skills page.
4. Describe edits in the same chat if the wording is off.

You cannot turn a skill on or off, or delete it, from a chat. Those controls live under Settings, then Skills.

### Build the second skill on the Skills page

1. On the sidebar, open Settings, then Skills.
2. Create a skill with Gemini, start from a template, or upload a file or folder that includes a `SKILL.md` file.
3. Name it for one job, such as brand guidelines or meeting prep.
4. Save it and leave it activated if you want Gemini to offer it automatically.

From 30 September 2026, a skill can also include reference files: plain text, PDFs, or images. If you update those files later, upload the whole skill and its reference files again. You can also ask Gemini to update a skill and its files.

Check uploads for hidden files such as `.DS_Store` before you send a folder. Google says those files can make the upload fail.

## Call one skill, then stack a second

Google’s help center says you call a skill by typing `/` in the chat or task thread, then selecting the skill. The same help page notes that the trigger will soon be `@`. Use whichever symbol your prompt bar shows.

1. Open a normal chat. Do not start a new Gem.
2. Type `/` and pick the first skill, for example your status-update skill.
3. Type `/` again and pick the second skill, for example brand guidelines.
4. Write the task after the skill names. Example: `/status-update /brand-guidelines Draft this week’s project update from these notes: shipped the login fix, blocked on the billing API, next step is a Thursday review.`
5. Send the prompt.

Google’s skills overview uses the same pattern: layer something like `/match-my-writing-style` with `/prep-for-meetings` in one prompt. Workspace’s announcement says the same thing in product language. An educator can pair a weekly newsletter skill with institutional brand guidelines. A business user can pair a vendor evaluator with an executive email drafter and finish both steps in one request.

You can also mention another skill inside a skill’s own instructions. That is useful when one workflow always needs a second rule set. For a one-off job, stacking in the prompt is enough.

![Team reviewing notes around a laptop](https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80)

## Let Gemini apply skills on its own

You do not have to type every skill name. If a skill is turned on, Gemini can apply it when the prompt matches that skill’s job. If the skill is off and you ask for it, Gemini asks whether you want it turned back on.

To control that:

1. Open Settings, then Skills.
2. Turn off any skill you do not want applied in the background.
3. Turn it back on from the same page when you want automatic use again.

Leave narrow skills on. Turn off broad ones if they start rewriting prompts you did not mean to style.

## A worked stack you can copy

Use three skills only if each one is specific.

- **Voice:** short sentences, no jargon, no emoji.
- **Format:** a decision line, three bullets, one open question.
- **Source rule:** use only the notes in the prompt. Do not invent dates or owners.

Prompt:

`/voice /status-format /source-rule Turn these notes into a Friday update: API retry shipped Tuesday. Invoice export still fails on accounts over 500 rows. Priya owns the fix. Review is Monday 10:00.`

Read the draft before you send it. Skills shape the output. They do not check facts you did not provide.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/KBOA_tQ3vX8"
    title="How to Create Reusable Skills in Gemini for Chrome"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips that keep stacks reliable

Name skills after the job, not the team. `weekly-status` is easier to find in the slash menu than `ops-v3`.

Do not put the whole company handbook in one skill. Google’s help examples stay narrow: writing help, brainstorming, converting bank statements into spreadsheets, or career notes based on a resume.

If a stacked answer ignores one skill, repeat that skill’s name in the prompt and state the order. Example: `Apply /brand-guidelines first, then /status-update.`

Download a skill from the Skills page if you want a local copy. Skills use a Markdown `SKILL.md` file, so you can also upload a skill you wrote elsewhere. Deleting a skill cannot be undone.

Personal-account Gems are scheduled to go away starting in November 2026. Google says it will migrate them to skills. Workspace business and enterprise Gems are set to stop later, no sooner than 1 March 2027, with education accounts later still. Until then you can keep using Gems, but new work belongs in skills if chat stacking is what you need.

## Conclusion

Stacking Gemini skills is a prompt habit, not a new app. Create one instruction set per job, type `/` and select each skill, then ask for the task in the same message. Turn automatic use on only for skills you want in the background. If the Skills page is missing, the rollout has not reached that account yet.

## Sources

- Google blog, 30 September 2026: [Let skills in Gemini tackle your most repetitive tasks](https://blog.google/products-and-platforms/products/gemini/automate-tasks-with-skills/)
- Gemini Apps Help: [Create and manage skills for Gemini Apps](https://support.google.com/gemini/answer/17094296?hl=en)
- Gemini Apps Help: [About the transition from Gems to skills](https://support.google.com/gemini/answer/18560919?hl=en)
- Google Workspace Updates, 30 September 2026: [Introducing skills in the Gemini app and Workspace](https://workspaceupdates.googleblog.com/2026/09/skills-gemini-app-workspace.html)
- Gemini release notes, 30 September 2026: [gemini.google/release-notes](https://gemini.google/release-notes/)
