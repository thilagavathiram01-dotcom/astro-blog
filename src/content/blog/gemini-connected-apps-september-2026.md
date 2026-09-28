---
title: "How to Connect Apps in Gemini After Google’s New Wave"
description: "Connect Airtable, Adobe, Linear, and more in Gemini. Step-by-step setup for web and Android after Google’s September 2026 app rollout."
pubDate: 2026-09-28T09:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "productivity", "google"]
noindex: false
---

Google added another wave of Connected Apps to Gemini on 23 September 2026. You can now manage projects, edit images, plan workouts, and check tickets from one chat instead of hopping between tabs.

The official Gemini App blog lists three buckets: productivity (Airtable, Linear, monday.com, PandaDoc, Wispr AI, Zoho), creativity (Adobe, Picsart, Squarespace, Webflow), and lifestyle (apartments.com, Experian, Peloton, SeatGeek). This guide shows how to turn those connectors on, call them with `@`, and keep activity and permissions under control.

## What Connected Apps actually do

A Connected App is a service Gemini can read from or write to after you grant access. Google apps such as Gmail, Drive, and Calendar usually switch on with one toggle. Third-party tools open an OAuth screen so you pick the exact workspace, base, or Creative Cloud account.

Gemini uses a connected app on its own when the prompt is a clear match. You can also force a tool by typing `@` in the prompt box and choosing the app. Airtable’s developer docs and Adobe’s connector help both document that `@` pattern.

You must be signed in. Gemini cannot use most Connected Apps from Google Messages. If Keep Activity is off, Google’s help pages say many third-party connectors will not run; only a small set of utilities stay available.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/PDMcpthR88U"
    title="How to Use Google Gemini AI (Full Tutorial)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step 1 — Confirm activity settings

Open [gemini.google.com](https://gemini.google.com) and sign in with the account you want to connect.

On the web, open **Settings & help**, then **Activity**. Make sure Keep Activity is on if you plan to use third-party apps. Google’s Gemini Apps Help article on activity states that turning Keep Activity off limits available apps.

On Android, open the Gemini app, tap the menu, then your profile. Look for **Activity** or **Gemini Apps Activity**. Review stored prompts later at [myactivity.google.com](https://myactivity.google.com) under Gemini Apps Activity.

Work or school accounts may be blocked by an admin. Workspace admins control Gemini app access to Gmail, Drive, Calendar, and extra Google services from the Admin console under Generative AI → Gemini app.

## Step 2 — Open the Apps page

On a computer:

1. Go to [gemini.google.com](https://gemini.google.com).
2. Open **Settings & help**.
3. Choose **Apps**. If you do not see Apps, open **Personal Intelligence**, then **Connected Apps**.
4. You can also start from [gemini.google.com/apps](https://gemini.google.com/apps).

On the Gemini mobile app:

1. Open the menu and tap your profile picture.
2. Open **Connected Apps**. If the item is missing, open **Personal Intelligence** first.
3. Find the service and turn the toggle on.

Google apps often activate immediately. Adobe, Airtable, Linear, and similar tools ask you to sign in and approve scopes.

![Laptop on a desk with notes and a browser session open](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80)

## Step 3 — Connect a productivity app

Airtable is a clear example because the company published Gemini steps on its developer site.

1. Find **Airtable** on the Apps page and turn it on.
2. Sign in to Airtable and choose which bases, apps, and workspaces Gemini may use.
3. Confirm your Airtable role. Gemini cannot write to a base if your own permission is read-only.
4. In chat, type `@` and select **Airtable**, then ask for a list, a filter, or an update.

Useful prompts after you connect:

- `@Airtable list records in my CRM base where last contact is older than 60 days`
- `@Linear summarize issues closed in the last seven days by assignee`
- `@monday.com show this week’s tasks that are past due`

Linear, monday.com, PandaDoc, Wispr AI, and Zoho follow the same pattern: toggle, authorize, then `@` when you want that tool and no other.

## Step 4 — Connect a creative app

Adobe’s official connector page lists the same entry points. You need a Google account and an Adobe account (a free Adobe ID is enough to start).

1. In Gemini settings, open **Personal Intelligence** → **Connected Apps**.
2. Turn **Adobe** on and complete the Adobe sign-in.
3. In the prompt bar, type `@Adobe` and select it.
4. Describe the edit, attach a file if needed, and iterate.

Adobe documents these workflows inside Gemini: batch retouch, Firefly-style generation, Express templates, Lightroom-style adjustments, and Creative Cloud search. Ask `What can Adobe help me with?` if you want the connector to list current capabilities.

Picsart, Squarespace, and Webflow use the same toggle-plus-`@` flow for design assets and site drafts.

![Designer reviewing layouts on a computer and tablet](https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=800&q=80)

## Step 5 — Use lifestyle connectors with care

Peloton, SeatGeek, apartments.com, and Experian landed in the same September wave. Treat them like any other OAuth app.

Grant the smallest scope the consent screen allows. Disconnect the app from Gemini settings as soon as you finish a one-off task such as a ticket search or a credit-report summary. Credit and housing data is not a casual chat log.

Gemini will still ask for confirmation when an action writes data or spends money. Read that confirmation. Do not assume a lifestyle connector can complete a purchase without a second check from the source site.

## Step 6 — Call apps in a prompt

Official Gemini help says you can either let Gemini pick an app or name it with `@`.

1. Open a new chat on web or mobile.
2. Type `@` and pick the connected service.
3. Write the task in one or two sentences. Name the project, base, or file if you have several.
4. Submit and follow any extra permission cards.

Stack one request at a time when two tools must cooperate. Example: pull a Linear issue list first, then ask Adobe to design a status graphic from that summary. If you name two apps in one sentence, Gemini may ignore one of them.

Developers who already wire agents through Android CLI skills can keep coding agents and Gemini chat separate. The CLI path lives in our [Android CLI and agent skills guide](/blog/android-cli-agent-skills/). Connected Apps are for the consumer Gemini surface, not for `android skills add`.

## Privacy, disconnect, and work accounts

Disconnect any app from the same Apps page. Flip the toggle off. Revoke the OAuth grant inside Airtable, Adobe, or Linear as well if you want the token gone on both sides.

Review Gemini Apps Activity and delete chats that included private tables or customer names. Keep Activity off only if you accept that most third-party connectors will stop working.

Workspace users should ask IT whether **Workspace apps**, **Other Google apps**, and third-party connectors are allowed. Admins can disable Gemini access to Gmail, Drive, Calendar, Maps, and YouTube from the Admin console.

## Tips that save time

- Start from [gemini.google.com/apps](https://gemini.google.com/apps) when the settings menu is hard to find.
- Name the exact base, board, or brand kit in the first prompt.
- Prefer `@App` over hoping Gemini guesses the right connector.
- Do not connect Experian or similar financial tools on a shared family account.
- Recheck the Apps page after a Gemini app update. New connectors often appear there before they show in the `@` picker.

Gems are a separate feature. Google is migrating Gems to skills later in 2026. That change does not replace Connected Apps. Skills customize how Gemini writes; Connected Apps give it live data and actions in other products.

## Conclusion

The September 2026 wave makes Gemini a control panel for project tools and creative suites, not only a chat box. Turn Keep Activity on if you need third-party apps, connect only the services you will use this week, and call them with `@` so the model does not guess.

Start with one productivity app and one creative app. Disconnect anything you are not actively using. Official steps live on the Gemini Apps Help page and on each vendor’s connector doc.

## Sources

- [New connected apps roll out to Gemini (Google Blog, 23 Sep 2026)](https://blog.google/innovation-and-ai/products/gemini-app/new-connected-apps-gemini/)
- [Use and manage connected apps in Gemini (Gemini Apps Help)](https://support.google.com/gemini/answer/13695044)
- [Manage and delete your Gemini Apps activity](https://support.google.com/gemini/answer/13278892)
- [Google Gemini connector (Airtable Developers)](https://www.airtable.com/developers/agents/mcp/gemini)
- [Adobe for Google Gemini](https://www.adobe.com/adobe-connectors/adobe-for-gemini.html)
- [Adobe for Google Gemini overview (Adobe Help)](https://helpx.adobe.com/creative-cloud/apps/integration-with-other-apps/adobe-connectors/adobe-for-gemini.html)
- [Control Gemini App access to Workspace services](https://knowledge.workspace.google.com/admin/generative-ai/gemini-app/turn-google-apps-in-gemini-on-or-off)
- [How to Use Google Gemini AI (Kevin Stratvert, YouTube)](https://www.youtube.com/watch?v=PDMcpthR88U)
