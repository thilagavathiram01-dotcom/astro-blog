---
title: "How to Use Gemini's @ Menu for Skills and Connectors"
description: "Call Gemini skills and connectors from the @ menu on Android and the web, and see what the slash-command change means in October 2026."
pubDate: 2026-10-03T09:30:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "how-to", "android", "ai-tools"]
noindex: false
---

Google is folding custom instructions and connected apps into one prompt menu. In the Gemini app, you still type `/` to pick a skill. Workspace help already says that slash is on the way out, and the replacement is `@`.

That matters if you reuse the same writing rules, meeting format, or app connection every day. A skill is a saved instruction set. A connector is an app Gemini can read from, such as Calendar or Drive. The new menu is meant to surface both from the chat box instead of sending you into a separate Gem.

This guide covers the official steps on Android and the web, the October 2026 timeline, and what to do if `@` has not landed on your account yet.

## What the @ change actually is

Google's Workspace help page, updated September 30, 2026, tells admins that people can use a skill by typing `/` (soon to be `@`) and the skill name in any chat. The same page says skills work in the Gemini app and in Workspace apps. Gems cannot be used inside Workspace apps.

On October 2, 2026, 9to5Google reported that Google app beta 17.63 shows this note when you type a slash: "/ is now @. Access your skills, connectors and more from a single place." Connected Apps is the current product name. The beta message uses "connectors" for that same list.

Treat `@` as a rollout, not a switch that flipped for every account on the same morning. Google's consumer help still documents `/` as the way to ask for a skill. If slash works and `@` does not, follow the help-center path until the menu updates.

Skills also do not sync between the Gemini app and Workspace. Recreate a skill in Workspace Studio if you need it in Docs, Gmail, or other Workspace apps.

![Person typing on a smartphone while reviewing a chat thread](https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80)

## Check that your account can use skills

Google's Gemini Apps Help lists three requirements for personal accounts:

1. You are 18 or older.
2. You are signed in with a personal Google Account. Work and school accounts do not get this consumer skills flow yet.
3. Gemini Apps Activity (Keep Activity) is on.

Skills are available in the Gemini mobile app, the Gemini app on Mac, and [gemini.google.com](https://gemini.google.com). Google says it is rolling them out gradually, starting with personal accounts, so an empty Skills page can be a rollout delay rather than a broken install.

Two known limits are worth reading before you build anything long:

- Manually created skills may fail to save in the mobile app. Create the skill in a chat, or build it on the web.
- Skills that include uploaded files cannot be edited in the mobile app or the Mac app. Edit those on the web.

Workspace customers follow a different calendar. Skills started rolling out in Workspace on October 5, 2026, with Rapid Release domains expected to finish by October 12 and Scheduled Release domains starting October 19 and finishing by mid-November. Skills in the Gemini app start October 13 and should finish by mid-November.

## Create a skill before you call it

You need at least one skill before the menu is useful.

On Android or the web:

1. Open the Gemini app, or go to gemini.google.com.
2. Open the menu, then Settings, then Skills.
3. Choose how to build it. Google lists four paths: create with Gemini, start from a recommended template, use a blank template, or upload a file or folder that contains a `SKILL.md` file plus optional reference files.

Supported reference files include plain text, PDFs, and images, according to Google's September 30 product post. On mobile, the upload option is not available yet. Build file-backed skills on the web.

A short skill beats a vague one. Name it for the job, not the model. "Weekly status" is easier to find in a menu than "Helpful writer." Put the output shape in the instructions: length, headings, what to skip, and when to ask a follow-up. Google says you can reference other skills inside the instructions if a workflow needs more than one step.

You can also ask Gemini to create a skill from an existing chat. Activation, deactivation, and deletion still happen on the Skills page, not inside the thread.

If you already have Gems, do not wait for the automatic move if the wording matters. Google says remaining Gems in the Gemini app become draft skills when Gems are removed. For personal accounts, support for Gems ends starting in November 2026. Business, enterprise, and nonprofit Workspace customers lose Gems no sooner than March 1, 2027. Education customers lose them no sooner than June 1, 2027. On November 17, 2026, Gems move into Settings, but you can still create and edit them until the later cutoff. The earlier walkthrough on [converting Gems before November](/blog/gemini-gems-to-skills-november-2026/) covers that migration in more detail.

## Call a skill with / or @

In a chat or task thread, Google's current help says to enter `/`, then select the skill. Workspace help says the same shortcut will become `@`, followed by the skill name.

On an account that already shows the beta note:

1. Open a new Gemini chat.
2. Tap the prompt box.
3. Type `@`.
4. Pick the skill from the menu. If the menu also lists connectors, choose the skill first so the instruction is explicit.
5. Add the actual request after the mention. Example: `@Weekly status Draft this from the notes below,` then paste the notes.

If `@` does nothing, type `/` instead. Google has not removed that path in the published help article. You can also name the skill in plain language. Gemini can apply a turned-on skill when the request matches its description. If the skill is off and you ask for it, Gemini asks whether to turn it back on.

You can mention more than one skill in a single task. That is the practical difference from a Gem, which lived in its own chat. Keep both skills narrow. A tone skill plus a format skill is easier to debug than one skill that tries to do research, writing, and file cleanup.

The older slash-only steps are still useful while the menu moves. See [Gemini slash commands for skills](/blog/gemini-app-skills-slash-commands/) if `/` is the only trigger on your phone.

![Laptop and phone on a desk used for app setup](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/XQtvloPXap4"
    title="Google Gemini Skills Are Finally Here"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Add a connector from the same menu

Connectors are the apps Gemini can use with your permission. The beta prompt groups them with skills under `@`. Setup still happens in Gemini settings, not only in the chat box.

On Android or the web:

1. Open Gemini settings and find Connected apps, or Connectors if your build already uses that label.
2. Turn on the app you want. Confirm the Google account is the one that owns that data.
3. Return to chat and type `@` or `/`, depending on your build.
4. Select the connector, then state the job. Example: ask for tomorrow's first meeting, or for a file title you know is in Drive.

A connector does not replace a skill. The connector supplies data. The skill supplies the format. Mention both when you need a fixed report from live data.

If a connector is missing, check the account type. Some connections are limited by region, Workspace admin policy, or the gradual skills rollout. The setup notes in [connecting apps to Gemini on web and Android](/blog/connect-apps-gemini-web-android/) still match the settings path Google uses today.

The Map tool that appeared in the mobile carousel on October 2 is separate. It attaches a map area to a prompt. It is not the `@` menu, and 9to5Google says it is not on the web.

## Tips that keep the menu reliable

- Turn off skills you do not want applied automatically. Gemini only auto-applies skills that are on.
- Edit file-backed skills on gemini.google.com. Mobile cannot update those uploads yet, and replacing files means uploading the skill again.
- Download a copy of important skills from the Skills page before you delete anything. Deletion cannot be undone.
- Do not assume a personal-account skill appears in Workspace. Create it again there if Docs or Gmail needs it.
- Keep Activity must stay on. Turning it off removes the ability to create and use skills under the current help rules.
- If the menu still shows only `/`, update the Google app and reopen Gemini. Beta 17.63 is where the "/ is now @" note was reported, so stable builds can lag.

## What to do this week

Build one skill on the web, confirm it appears under Settings, then call it with `/`. When `@` shows up, use the same skill name from that menu and add a connector only if the answer needs live account data.

Check the Skills page again after October 13 if you are on a personal account and the feature is still missing. Workspace admins should watch October 5 for Rapid Release and October 19 for Scheduled Release. Gems remain usable after they move to Settings on November 17, but new work belongs in skills.

## Sources

- [Create and manage skills for Gemini Apps](https://support.google.com/gemini/answer/17094296) — Google Gemini Apps Help
- [About the transition from Gems to skills](https://knowledge.workspace.google.com/admin/generative-ai/gemini-app/about-the-transition-to-skills) — Google Workspace Help, updated September 30, 2026
- [Let skills in Gemini tackle your most repetitive tasks](https://blog.google/products-and-platforms/products/gemini/automate-tasks-with-skills/) — Google blog, September 30, 2026
- [Introducing skills in the Gemini app and Workspace](https://workspaceupdates.googleblog.com/2026/09/skills-gemini-app-workspace.html) — Google Workspace Updates, September 30, 2026
- [Gemini app gains new Map tool, replacing / with @](https://9to5google.com/2026/10/02/gemini-app-map-tool/) — 9to5Google, October 2, 2026
