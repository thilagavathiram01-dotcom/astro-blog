---
title: "How to Move Gemini Gems to Skills This November"
description: "Official steps to recreate Gemini Gems as skills before the November 2026 cutoff, plus naming tips and / invocation."
pubDate: 2026-09-29T12:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504f3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "how-to", "productivity", "google"]
noindex: false
---

Google is retiring Gems in Gemini Apps and replacing them with skills. The official help page says the switch starts in November 2026 for personal Google accounts. Workspace business and education accounts follow in 2027.

Skills are reusable custom instructions. You type `/` plus the skill name in any Gemini chat, or let Gemini apply a matching skill on its own. You can stack more than one skill in a single thread.

This guide follows Google’s published recreation steps so you keep your Gem instructions and files instead of waiting for the automatic copy.

## What changes and when

Google’s [transition article](https://support.google.com/gemini/answer/18560919) lists three removal windows:

- **November 2026:** personal Google accounts.
- **March 2027:** Workspace business, enterprise, and non-profit accounts.
- **June 2027:** Workspace education accounts.

Opal and Gems by Google Labs go away with personal Gems in November. Google says it will automatically recreate your Gems as skills when Gems disappear. You can also rebuild them now if you want the `/` picker and stacking today.

The Gemini app has also shown an in-app banner that names **17 November 2026** as the start of automatic migration, with create and edit for Gems stopping earlier. Treat that banner as the product schedule on your account. Use the Help Center dates above if the banner is missing.

Skills today require you to be 18 or over, signed in with a **personal** Google Account, and to have **Keep Activity** on. Work and school accounts are not in the first wave. Skills run in the Gemini mobile app, the Gemini app on Mac, and [gemini.google.com](https://gemini.google.com).



![Person writing structured notes next to a laptop for reusable AI instructions](https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80)



## Gem vs skill in practice

A Gem lived in the sidebar. You opened it, then started a chat inside that persona. A skill lives in Settings → Skills and can fire from any chat.

Google lists three skill benefits:

- **Easy access:** type `/` (soon `@`) and the skill name.
- **Automatic use:** Gemini applies a relevant skill without you picking it.
- **Stackable:** combine several skills in one chat.

That last point is the real upgrade. You can pair a writing skill with a research skill in one prompt instead of hopping between two Gems.

If you already connect third-party tools in the same chat, keep that setup separate. Skills teach *how* Gemini should work. Connected Apps decide *which* service it may call. See [How to Use Gemini Connected Apps After the Sept 2026 Wave](/blog/gemini-connected-apps-sept-2026/) for the Apps list and `@` syntax.

## Step 1: Export the Gem you care about

Do this on a computer. Google’s recreation flow is documented for the web app.

1. Go to [gemini.google.com](https://gemini.google.com) and sign in.
2. Open the sidebar and choose **Gems**.
3. Next to the Gem, tap **Edit**.
4. Copy the name, description, and full instructions into a scratch document.
5. If the Gem has files under **Knowledge**, open each file and download it.

Do not skip the files. The automatic migration should carry them later, but a local copy is the only backup you control.

If you maintain many Gems, start with the ones you open every week. A writing editor, a meeting-notes formatter, and a research brief cover most daily use.

## Step 2: Create the skill by hand

1. Open a new tab at [gemini.google.com](https://gemini.google.com).
2. In the sidebar, open **Settings**, then **Skills**.
3. Click **Create manually**.
4. Paste the name, description, and instructions from the Gem.
5. Click **Create** at the top.

Google reformats the name. Skills use lowercase words separated by hyphens, such as `plan-meal-from-recipe`. Vague names like `helper` or `tools` make automatic matching worse.

If you have no Knowledge files, stop here and test the skill with `/` in a new chat.

## Step 3: Attach the old Knowledge files

Google does not let you drop files onto a live skill the way Gems did. You download the skill, add files next to `SKILL.md`, and upload the bundle.

1. On the Skills page, hover the new skill and choose **Skill actions → Download**. That saves a `.zip` with `SKILL.md`.
2. Unzip it. Move `SKILL.md` into the folder that already holds your Gem files.
3. Upload that folder (or a zip of it) from the Skills page using **Upload**.
4. Review the preview and save.

Upload rules matter. The folder must contain `SKILL.md` in its main directory. Google warns that hidden binary files such as `.DS_Store` or `.pyc` can fail the upload. Strip those first on a Mac.

To change files later, upload the entire skill plus its reference files again. You can also ask Gemini to update a skill and its files from the Skills page.



![Developer reviewing a markdown file and reference documents on a desktop](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)



## Step 4: Write the description so Gemini actually fires it

Google’s writing guide is blunt: the name and a one- or two-sentence description decide whether Gemini picks the skill. A generic blurb means the skill sits unused.

Name rules from [Write effective skills](https://support.google.com/gemini/answer/17102773):

- Start with a verb or action.
- Avoid filler words such as helper, tools, or data.
- Stay lowercase with hyphens.

Description rules:

- Start with a third-person capability line. Do not write “I can help you.”
- Add “Use when…” plus concrete situations.
- Stay inside 1,024 characters.

Google’s own example: “Categorizes recipes, scales ingredient portions, and generates grocery lists from selected meals. Use when saving a new recipe, adjusting the serving size for a meal, or creating a shopping list from a meal plan.”

Put a **common mistakes** section in the instructions. Tell Gemini what not to invent. Also say what to do when a required field is missing, so it asks instead of guessing.

## Step 5: Use, stack, and manage

In any chat or Spark task thread, type `/` and select the skill. You can name more than one. Gemini can also apply an **activated** skill on its own when the prompt matches the description.

Turn a skill off from Settings → Skills if you do not want background use. If a skill is off and you still call it with `/`, Gemini asks whether to turn it back on. Deleting a skill cannot be undone.

You can also:

- Create with Gemini from the Skills page.
- Start from a recommended template.
- Ask Gemini in a chat to draft a skill, then finish it on the Skills page.
- Reference one skill from another skill’s instructions.

You cannot activate, deactivate, or delete a skill from inside a chat. Those controls stay on the Skills page.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/amnhF6BwzZQ"
    title="Gemini Spark | I/O 2026 Keynote"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

Google’s I/O 2026 Gemini segment shows Spark calling a personal skill with `/ghostwriter` while it pulls context from Docs and Gmail. That slash pattern is the same one skills use in chat today.

## What to expect if you stay on the free plan

Gems were available without a paid Google AI plan. Skills first appeared for personal accounts in Gemini chat, with Spark-oriented creation still tied to paid tiers in some surfaces. Google has not published a final matrix that maps every migrated Gem to every free account.

Practical approach: recreate the Gems you rely on now, keep the downloaded `SKILL.md` files, and watch the Skills page after the November copy runs. If a migrated skill is missing or locked, you still have the text and Knowledge files.

If you cancel or change a Google AI subscription, check the Skills help FAQ on your account. Google documents that question on the create-and-manage page; the answer can change with plan rules.

## Tips before 17 November

Export every Knowledge file this week. Do not wait for the automatic job.

Rewrite Gem titles that will become illegal skill names. “My Helper v2” should become `draft-status-update` or similar.

Test `/` in a throwaway chat before you delete the Gem. Confirm tone, format, and file use.

Keep Activity on while you build and test. Google requires it for skills.

Leave Workspace Gems alone until your admin window in 2027 unless you also have a personal account you can copy into.

## Conclusion

Gems are leaving personal Gemini accounts in November 2026. Skills replace them with slash invocation, automatic matching, and stacking. Google will copy Gems for you, but the official manual path is short: export the Gem, create a skill, and reattach files through `SKILL.md`.

Do the three Gems you open every week first. Name them with a verb. Write a “Use when…” description. Then let the rest ride the automatic migration.

## Sources

- [About the transition from Gems to skills](https://support.google.com/gemini/answer/18560919) — Gemini Apps Help
- [Create & manage skills for Gemini Apps](https://support.google.com/gemini/answer/17094296) — Gemini Apps Help
- [Write effective skills for Gemini Apps](https://support.google.com/gemini/answer/17102773) — Gemini Apps Help
- [Use Gemini Spark to manage your tasks & workflows](https://support.google.com/gemini/answer/17094507) — Gemini Apps Help
- [Gemini app replacing Gems with skills in November](https://9to5google.com/2026/09/27/gemini-gems-skills/) — 9to5Google
