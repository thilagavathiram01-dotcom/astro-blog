---
title: "How to Recreate Gemini Gems as Skills Before Nov"
description: "Google will migrate Gemini Gems to skills in November 2026. Recreate Gems now, keep files, and invoke skills with a slash."
pubDate: 2026-09-29T14:00:00
heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "google", "productivity"]
noindex: false
---

Google is retiring Gemini Gems. Starting in November 2026, personal Google accounts will see Gems converted into **skills** — reusable custom instructions you can call from any Gemini chat.

You do not have to wait for the automatic move. Google published a manual path: copy each Gem’s name, description, instructions, and knowledge files into a new skill. This guide walks through that process using official Gemini Apps Help steps.

## What changes when Gems become skills

Gems, launched in 2024, were custom versions of Gemini you opened from the sidebar. Skills keep the same idea — saved instructions you reuse — and add three differences Google highlights:

- **Easy access:** type `/` (soon `@`) plus the skill name in any chat.
- **Automatic use:** Gemini can apply a turned-on skill when the prompt matches.
- **Stackable:** you can combine more than one skill in a single thread.

Google says it will automatically recreate your Gems as skills when Gems go away. Personal accounts move first, in November 2026. Workspace business, enterprise, and non-profit accounts follow in March 2027. Education accounts follow in June 2027. Opal and Gems by Google Labs end on the same November timeline as personal Gems.

In-app banners reported in late September 2026 point to **17 November 2026** as the start of automatic migration. Treat that date as the latest safe window, not the first day you should act.



![Laptop on a desk with notes for an AI workflow](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80)



## Who can use skills today

Google’s create-and-manage help page lists three requirements:

1. You are 18 or over.
2. You sign in with a **personal** Google Account. Work and school accounts are not supported yet.
3. **Keep Activity** is on.

Skills currently live in the Gemini mobile app, the Gemini app on Mac, and [gemini.google.com](https://gemini.google.com). They are not yet everywhere Gemini appears.

If the Skills page is missing, update the Gemini app and confirm Keep Activity. Some users also see skills first in Gemini Spark on Google AI Pro or AI Ultra. Check the product itself rather than assuming a plan will keep every old Gem after November.

## Recreate a Gem as a skill on the web

Google’s official recreation flow uses two tabs on gemini.google.com so you can copy fields without losing the Gem.

### Step 1: Export the Gem and its files

1. Open [gemini.google.com](https://gemini.google.com) on a computer.
2. Open the sidebar and go to **Gems**.
3. Next to the Gem you want to keep, click **Edit**.
4. Copy the name, description, and instructions into a notes file.
5. If the Gem has files under **Knowledge**, open each file and download it.

Do this for every Gem you still use. Automatic migration should carry supported files, but a local copy is the only backup you control.

### Step 2: Create the skill and paste the details

1. Open a new tab and go to gemini.google.com.
2. In the sidebar, open **Settings**, then **Skills**.
3. Choose **Create manually** (wording can appear as a blank template).
4. Paste the Gem name, description, and instructions.
5. Click **Create**.

The skill name may reformat automatically. That is expected.

If you have no knowledge files, stop here. If you do, continue.

### Step 3: Reattach knowledge files

Google’s help article says you download the new skill, then upload it again with the files attached. File upload for skills is limited to the Gemini web app and the Gemini app on Mac for now.

Before you zip anything, remove hidden junk such as `.DS_Store`. Google notes those files can make an upload fail.



![Person reviewing documents and a laptop screen](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)



## Create a skill on Android instead

You can also build from the Gemini mobile app without waiting for the web editor.

1. Open the Gemini app.
2. Tap **Menu**, then **Settings**, then **Skills**.
3. Tap **Add skill** and pick **Create with Gemini**, a recommended template, or a blank template.
4. Follow the chat prompts or paste the instructions you saved from the Gem.

You can also ask Gemini in a chat to create a skill. Activation, deactivation, and deletion still happen on the Skills page, not inside a single thread.

If you already use Android agent workflows, treat Gemini app skills as the consumer counterpart to developer-facing instruction packs. Our [guide to Android skills and Android CLI](/blog/android-skills-ai-agents/) covers the coding-agent format, which also uses a `SKILL.md` file.

## How to run a skill after you save it

Skills are meant to sit in the background. You still have two explicit controls:

- Type `/` in the chat box and pick the skill.
- Leave the skill **on** so Gemini can attach it when the prompt matches.

You can stack several skills in one task. If a skill is off and you ask for it by name, Gemini should ask whether to turn it back on.

To edit files inside a skill later, upload the whole skill package again. Deleting a skill cannot be undone.

## Write the skill so Gemini actually picks it

A pasted Gem can underperform if the description is vague. Google’s writing guide says the name and a one- or two-sentence description decide when the model applies the skill.

Use these official habits:

- Start the name with a verb, such as **Draft customer replies** rather than **Support bot**.
- Write the description in the third person and begin with what the skill does.
- Add **Use when…** examples so Gemini knows the trigger.
- Describe a type of task, not one document you happened to have open.
- Add an output template if you need a fixed format.
- Include a **common mistakes** section.
- Tell Gemini what to do when a fact is missing, so it does not invent one.

Example description: “Drafts short, polite replies to customer email. Use when the user pastes an inbound message or asks for a support response.”

## Watch this Gems workflow, then rebuild it as a skill

Gems and skills share the same writing job: name the role, state the task, add context, lock the format. This official Grow with Google walkthrough still shows that structure, even though the UI is the older Gem manager.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/bj33rMHj-h4"
    title="How to Create Marketing Materials with Gemini Gems | Make AI Work for You | Google"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

After you watch it, recreate the same brand-and-voice instructions as a skill and invoke it with `/` instead of opening a Gem from the sidebar.

## Practical tips before November

- **Inventory first.** List every Gem you still open each week. Skip the ones you never use.
- **Save instructions outside Gemini.** A notes file or Drive doc survives a failed upload.
- **Download knowledge files now.** Do not wait for the automatic job to decide what “supported” means.
- **Turn Keep Activity on** if you want skills at all.
- **Test slash invocation** on one rebuilt skill before you migrate the rest.
- **Leave unused skills off** so Gemini does not attach the wrong pack.

Workspace users have more time. Still copy high-value Gems now if you also use a personal account for the same workflows.

## Conclusion

Gems are not disappearing without a replacement. Skills are the replacement, with slash access, optional auto-apply, and the ability to stack instructions. Google will migrate personal Gems in November 2026. The safer path is the official one: copy each Gem, recreate it on the Skills page, reattach files on web or Mac, then confirm `/` works.

Do that for the handful of Gems you actually rely on. The rest can ride the automatic conversion.

## Sources

- [About the transition from Gems to skills](https://support.google.com/gemini/answer/18560919) — Gemini Apps Help
- [Create & manage skills for Gemini Apps](https://support.google.com/gemini/answer/17094296) — Gemini Apps Help
- [Write effective skills for Gemini Apps](https://support.google.com/gemini/answer/17102773) — Gemini Apps Help
- [How to use Gems, Google’s custom AI tools](https://blog.google/products-and-platforms/products/gemini/google-gems-tips/) — The Keyword (5 Sep 2024)
