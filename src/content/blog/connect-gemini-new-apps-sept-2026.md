---
title: "How to Connect Gemini’s New Apps After Sept 2026"
description: "Connect Gemini’s new Sept 2026 apps: Airtable, Linear, Adobe, Zoho, and more. Step-by-step setup, @ mentions, and privacy tips."
pubDate: 2026-09-29T10:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "productivity", "google"]
noindex: false
---

Google added a new wave of Connected Apps to Gemini on 23 September 2026. You can now pull project tools, design apps, and lifestyle services into one chat instead of hopping between tabs.

This guide shows how to turn those apps on, call them with `@`, and keep control of what Gemini can see. Steps follow Google’s official Gemini Apps Help pages and the product post from Group Product Manager Mai Lowe.

## What rolled out in September 2026

Google grouped the new connectors into three buckets:

- **Productivity:** Airtable, Linear, monday.com, PandaDoc, Wispr AI, and Zoho.
- **Creativity:** Adobe, Picsart, Squarespace, and Webflow.
- **Lifestyle:** apartments.com, Experian, Peloton, and SeatGeek.

Availability still depends on country, language, device, and account type. The list on gemini.google.com will not always match the list inside the Android or iOS Gemini app. Work and school accounts only see apps your Workspace admin allows.

Gemini already uses public data from Search, Maps, Flights, Hotels, and YouTube. Connected Apps are different: they need your permission before Gemini reads or writes your private content.



![Person using a laptop to manage connected work tools](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80)



## What you need before you connect anything

Sign in to Gemini with the Google Account you actually use for mail, files, and work tools. Connected Apps do not appear if you are signed out.

Turn **Keep Activity** on. Google states that when Keep Activity is off, Connected Apps are unavailable on gemini.google.com, iOS, and smart watches. On Android, only Device assistance, Phone, Messages, and WhatsApp stay usable.

Check the activity window (3, 18, or 36 months) under Gemini Apps Activity. Pick the shortest window that still lets the tools you need run.

Workspace users should confirm that an admin enabled Gemini App integrations. If an expected app is missing, the block is usually policy, not a bug.

## How to connect apps on the web

1. Open [gemini.google.com](https://gemini.google.com) and confirm the correct account in the top-right avatar.
2. Open **Settings** (or **Settings & help**) at the bottom of the sidebar.
3. Choose **Connected Apps**. If that label is missing, open **Personal Intelligence**, then **Connected Apps**.
4. Scan the list. Grey means off. Colour means connected.
5. Toggle an app on. Google Workspace tools usually activate immediately. Third-party apps open an OAuth screen so you can grant scoped access.
6. Open **Learn more** under the app name. Google lists supported actions, unsupported actions, and sample prompts there.

You can also start from [gemini.google.com/apps](https://gemini.google.com/apps).

To disconnect later, return to the same page and turn the toggle off. Google documents what happens to cached data in the Gemini Apps Privacy Hub.

## How to connect apps on Android and iOS

1. Open the Gemini app and tap your profile photo.
2. Open **Settings**, then **Connected Apps** (or **Personal Intelligence** → **Connected Apps**).
3. Toggle the app you want.
4. Approve permissions when the partner app asks.

On Android, Phone, Messages, WhatsApp, Google Home, and Device assistance appear in this list. Those device apps are not on iOS or the web settings page.

Gemini in Google Messages cannot use Connected Apps yet. Use the standalone Gemini app or the web client when you need a connector.

If you also use Gemini on Windows, connect the same account. The connector list follows the account, not a single device.



![Smartphone and notebook on a desk for mobile Gemini setup](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)



## How to call a connected app in chat

Gemini often picks an app on its own when the prompt is clear. You can force a source with `@`.

1. Place the cursor in the prompt box.
2. Type `@` and pick the app from the menu.
3. Write the task after the mention.
4. Submit and follow any on-screen confirmations.

Useful starters:

- `@Gmail summarize unread mail from my project lead this week`
- `@Drive find the latest product roadmap and list open questions`
- `@Linear show my issues due this week and draft standup notes`
- `@Airtable add a row for today’s catering order with guest count 48`
- `@Adobe create three square social crops from this brand brief`
- `@Peloton suggest a 30-minute ride that matches yesterday’s load`

If the app is not connected, Gemini either connects it or asks for permission first.

Read each app’s **Learn more** page before you rely on write actions. Create-event and edit-document support is not universal. Some connectors only search or summarize.

Developers building on-device flows can pair this consumer setup with agent work covered in our [Android App Functions agents guide](/blog/android-appfunctions-agents/).

## Watch the setup flow

The walkthrough below covers Settings, Connected Apps, toggles, and permissions on the Gemini site.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/6tD8O2spiMA"
    title="How to Connect Gemini AI with Google Apps Workspace, YouTube, Maps & More! (FULL GUIDE 2025)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical workflows after the September wave

**Project status without tab switching.** Connect Linear or monday.com plus Gmail. Ask Gemini to pull open issues, match them to unread threads, and draft a status paragraph you can paste into Docs.

**Creative brief to first asset.** Connect Adobe or Picsart. Paste the brief, request three sizes, then ask Gemini to file the chosen file in Drive.

**Event week planning.** Connect SeatGeek, Calendar, and Maps. Ask for tickets that fit an evening window, then create the calendar block only after you confirm the listing.

**Small-business paperwork.** Zoho and PandaDoc sit in the new productivity set. Ask Gemini to outline a proposal, then generate the document in the connected app instead of copying from chat.

**Home and phone tasks on Android.** Keep Device assistance, Phone, and Messages on even if you leave other connectors off. Google allows those four Android apps when Keep Activity is disabled.

Treat every write action as a draft until you check the destination app. Gemini can mis-file a task or pick the wrong base in Airtable if your prompt is vague.

## Privacy and admin checks

Only connect apps you will use this month. Each extra OAuth grant is another place Gemini can send prompt context.

Review scopes on the partner consent screen. Decline extras such as contact write access if you only need search.

Workspace admins control the catalog under Gemini App settings. Personal MCP custom apps are a separate path: Google currently limits custom MCP connections to personal accounts, age 18+, in the United States, with Keep Activity on. You add those only from the web app.

Gemini does not use Connected Apps inside Gemini in Messages. Do not assume a chat from Messages has the same connectors as the Gemini app.

When you disconnect an app, stop new access from Gemini. Follow Google’s Privacy Hub article if you also need to clear prior exchanges.

For a tighter phone posture after you enable Gemini tools, see [Android Advanced Protection setup](/blog/android-advanced-protection-setup/).

## Tips that save time

- Connect Workspace first (Gmail, Drive, Calendar, Docs, Keep, Tasks). Those grants cover most daily prompts.
- Add one third-party app, test `@` prompts, then add the next.
- Save three prompts you reuse. Vague verbs such as “fix my week” produce weak tool picks.
- Re-open **Learn more** after a Gemini app update. Supported actions change without a banner.
- If an app vanishes on iOS, check the web list. Some connectors are Android-only.
- Keep Activity off will look like a broken feature on desktop. Turn it on before you file a bug.

## Conclusion

The September 2026 Connected Apps wave is useful when you treat Gemini as a router, not a second inbox. Turn Keep Activity on, connect only the tools you will query this week, and call them with `@` so Gemini does not guess.

Start with Workspace plus one new partner from the productivity list. Confirm a read prompt, then a write prompt, then disconnect anything you did not use.

## Sources

- [New connected apps roll out to Gemini](https://blog.google/innovation-and-ai/products/gemini-app/new-connected-apps-gemini/) — Google Blog, 23 September 2026
- [Use & manage Connected Apps in Gemini](https://support.google.com/gemini/answer/13695044) — Gemini Apps Help
- [Connect & manage custom apps for Gemini Apps](https://support.google.com/gemini/answer/17209137) — Gemini Apps Help
- [Browse Connected Apps](https://gemini.google.com/apps)
