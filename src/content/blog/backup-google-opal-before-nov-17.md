---
title: "How to Back Up Google Opal Mini-Apps Before Nov 17"
description: "Google turns off Opal on November 17, 2026. Copy prompts, keep Drive files, and rebuild mini-apps as Gemini skills."
pubDate: 2026-10-05T18:00:00
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "google", "gemini"]
noindex: false
---

Google Labs will turn off Opal on **November 17, 2026**. After that date, mini-apps at [opal.google.com](https://opal.google.com) stop running. Google will not delete your workflow files, and it will not move them into Gemini skills for you.

That split matters. Regular Gems in the Gemini app are scheduled to migrate into skills. Opal workflows, and Gems made by Labs, are not. If a multi-step mini-app is part of your weekly work, copy the prompts before the host shuts down.

## What actually ends on November 17

Google's [Opal FAQ](https://developers.google.com/opal/faq), last updated September 30, 2026, states three facts:

- The experimental Opal service and "Gems made by Labs" in Gemini turn off on November 17, 2026.
- Existing Opal workflows do not migrate automatically. You set up new skills or prompts yourself.
- Workflow files stay in Google Drive under **My Drive > Opal**. Google says it will not delete or touch those files.

Interactive runs stop. The graph is still recoverable as a file. After November 17 you can download those files and open them in a plain-text editor such as Notepad or TextEdit to read the prompt text.

The same FAQ says the Breadboard repository (`github.com/breadboard-ai/breadboard`) and the Opal ADK repository (`github.com/breadboard-ai/opal-adk`) move to read-only archived mode after that date. The code stays public under its open-source license. Hosted web endpoints such as breadboard-ai.web.app turn off with opal.google.com.

Google's [skills announcement](https://blog.google/products-and-platforms/products/gemini/automate-tasks-with-skills/) adds a footnote: Gems by Google Labs turn down and will not migrate into skills. Personal-account Gems lose support starting in November. Workspace business, enterprise, and nonprofit customers keep Gems until no sooner than March 2027. Education customers keep them until no sooner than June 2027.

![Person working on a laptop beside notes and a phone](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Copy every prompt while the editor still opens

Do this on a desktop browser. Google says the Opal editor view is optimized for a computer. A phone can open an already created app, not the graph you need to archive.

1. Sign in at [opal.google.com](https://opal.google.com) with the Google account that owns the mini-apps.
2. Open each Opal you still use. Start with shared ones, because a link will die with the host even if the Drive file remains.
3. Switch to the visual editor. For every **Generate** step, copy the model name and the full prompt into a document you control. Note which earlier step each prompt references.
4. Copy every **User Input** label, including whether the step expects text or an image.
5. List static assets: uploaded images and any YouTube links used as context. Download the images. A link inside a dead workflow is not a backup.
6. If you used the natural-language editor to build the graph, paste that original instruction into the same document. It is often shorter than the expanded steps and easier to rebuild.
7. Repeat for Gallery remixes you customized. A remix is your copy. The Gallery original is not your archive.

Google also recommends opening workflows on opal.google.com and copying prompts before November 17, rather than waiting to parse Drive files later. The editor shows the graph. A downloaded workflow file is a fallback.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/E0hrcDO3Noc"
    title="Introducing Opal"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

The Google for Developers clip above shows the two start paths: remix a Gallery app, or click Create New and describe a chain. Use it as a map of what to screenshot now: input fields, generate steps, and the share dialog.

## Download the Drive copies anyway

Opal stores workflow files in your personal Drive, in a folder named **Opal**. That folder is the safety net if you miss a prompt in the editor.

1. Open Google Drive and go to **My Drive > Opal**.
2. Download the folder, or at least the files for apps you care about.
3. Keep a second copy outside Drive if the prompts include client names, internal URLs, or unpublished product language.
4. After November 17, open a downloaded file in a text editor if you still need a prompt you skipped.

Sharing an Opal also shares the Drive file. Google warns that people with editor access can remix a copy, and that sharing the Drive file can give others a way to see prompt details. If a workflow should stay private, stop sharing it before you archive, and do not rely on the app view alone.

Google says it does not use Opal prompts or outputs to train generative models. A small subset of prompts may still be reviewed by people for troubleshooting. Treat anything you paste into a new skill the same way you treat other Gemini chats.

## Rebuild the useful parts as skills or in AI Studio

Google points people to two replacements, depending on the job:

- **Skills in Gemini** for everyday tasks and customized chat instructions.
- **Google AI Studio** for deeper prototyping and custom prompt experiments.

A skill is not a visual mini-app. You save instructions once, then call them by typing `/` and the skill name in the prompt bar. Google says you can stack skills in one conversation, attach reference files such as plain text, PDFs, or images, and ask Gemini to build a skill from an existing chat. Skills are rolling out in Gemini chat for Google AI subscribers 18 and older, with under-18 access planned later. Workspace business, enterprise, nonprofit, and education customers get skills in the weeks after the September 30 announcement.

For a single-purpose Opal, this mapping works:

1. Open Gemini and create a skill whose instructions are the Generate prompt you copied.
2. Put input rules in the skill text: "Ask for a topic before you draft. Wait for my answer."
3. Attach the reference PDF or image you used as a static asset.
4. Invoke it with `/` plus the name, then run the same sample input you used in Opal.
5. Compare the output to a saved Opal result. Adjust the skill text until the structure matches.

Multi-step apps that chained search, an image model, and a doc export will not reappear as one clickable page. Split them. Put the writing rules in a skill. Put image or longer experiments in AI Studio. If you already built Opals, the earlier walkthrough on [Google Labs Opal mini-apps](/blog/google-labs-opal-mini-apps/) is still useful as a map of User Input and Generate steps while the editor is up.

Gems that are not Labs experiments follow a different path. Google says it will migrate those Gems into skills when Gems go away. The steps in [converting Gems before November 17](/blog/gemini-gems-to-skills-november-2026/) cover that case. Do not assume an Opal graph is in that migration.

![Printed documents and a pen on a desk for copying workflow notes](https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80)

## Tips before the cutoff

- Prioritize apps other people open through a link. Those links stop working even if your Drive file remains.
- Screenshot the graph as well as copying text. Node order is easy to lose in a flat file.
- Record which model each Generate step used. A skill does not expose that picker the same way.
- Export shared apps you do not own only if the owner has given you editor or remix access. Otherwise ask them to send the prompt text.
- Do not wait for an automatic import. The FAQ states there is none for Opal.
- If you forked Breadboard or Opal ADK, clone the repos before they go read-only if you want a local snapshot. The public archives remain viewable after November 17.
- Country access does not change the shutdown date. Opal is limited to a published country list, and the editor is desktop-first either way.

## What to do this week

Open Opal, copy prompts from the visual editor, download the Drive folder, and recreate the one or two flows you actually run. Skills cover repeated instructions. AI Studio covers experiments that need more than a slash command. Neither product will rebuild the mini-app for you on November 17.

## Sources

- [Opal FAQ, Google for Developers](https://developers.google.com/opal/faq) (updated September 30, 2026)
- [Let skills in Gemini tackle your most repetitive tasks, Google Blog](https://blog.google/products-and-platforms/products/gemini/automate-tasks-with-skills/) (September 30, 2026)
- [Introducing Opal, Google for Developers on YouTube](https://www.youtube.com/watch?v=E0hrcDO3Noc)
