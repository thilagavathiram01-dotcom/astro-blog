---
title: "How to Connect Apps to Gemini on Web and Android"
description: "Connect Airtable, Linear, Adobe, and more to Gemini. Step-by-step setup for web and Android, @ mentions, Keep Activity, and how to disconnect."
pubDate: 2026-09-30T10:00:00
heroImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "google", "tutorials", "productivity", "ai-tools"]
noindex: false
---

Google is adding a new wave of Connected Apps to Gemini. On 23 September 2026 the Gemini app team listed Airtable, Linear, monday.com, Adobe, Peloton, SeatGeek, and more as partners that can sit inside a single chat instead of a stack of tabs.

You still have to opt in. Each connection is a toggle plus, for third-party tools, an OAuth grant. Availability depends on country, language, account type, and whether Keep Activity is on.

This guide walks through official setup on the web app and the Android app, how @ mentions work, what the September 2026 partners cover, and how to cut access when you no longer need it.

## What Connected Apps actually do

Gemini Apps Help states that Gemini can connect to other apps so it can complete a request with your permission. Typical jobs include summarizing Gmail, creating Calendar events, pulling GitHub code, playing YouTube Music or Spotify, and searching Google Photos.

The September 2026 blog post from Mai Lowe, Group Product Manager for the Gemini app, groups the new partners into three buckets:

- **Productivity:** Airtable, Linear, monday.com, PandaDoc, Wispr AI, Zoho
- **Creativity:** Adobe, Picsart, Squarespace, Webflow
- **Lifestyle:** apartments.com, Experian, Peloton, SeatGeek

Google Help also notes that the list you see is not global. An app can appear on the mobile Gemini app and not on gemini.google.com, or the reverse. Personal Google Accounts and work or school accounts see different catalogs. Workspace admins control what employees can attach.

Google’s short product film shows the older Maps / Music / Hotels pattern that the new partners extend:

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/NpCNG2-5qAU"
    title="Save time (and tabs) with apps in Gemini. Access Google Maps, YouTube Music and more in one place"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What you need before you connect

Confirm these points from Gemini Apps Help before you hunt for a missing toggle:

- You are signed in. Connected Apps do not work signed out.
- **Keep Activity** is on. Custom apps and many third-party connectors are unavailable when this setting is off.
- You meet the age, country, and language rules for that specific app. Google publishes a requirements table; many consumer connectors are US-only, 18+, English.
- On a work or school account, your admin has allowed Gemini Apps and the relevant connectors.
- For custom MCP apps, Help currently requires you to be 18 or over, in the US, on a personal Google Account, with an MCP server URL that follows the standard spec.

If Keep Activity is off, open Gemini settings → Activity and turn it on. Choose a retention window (Google’s product UI offers multi-month options) before you grant a third-party token.

![Open laptop and notes on a desk during a work session](https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80)

## Connect apps on the Gemini web app

Google documents this path for computers:

1. Go to [gemini.google.com](https://gemini.google.com) and sign in.
2. Open **Settings & help** (bottom of the sidebar on many layouts).
3. Open **Apps**, or **Connected Apps**. If you do not see that label, open **Personal Intelligence**, then **Connected Apps**.
4. Read **Learn more** under an app before you flip the switch. That page lists supported and unsupported actions.
5. Turn the app on. Google-owned services usually activate immediately. Third-party apps open an OAuth window so you can pick the account and scopes.
6. Finish the vendor’s consent screen. For Airtable, the vendor docs say you choose which bases, apps, and workspaces Gemini may reach.

After the switch is on, the app is available in chat and, where Google lists it, in Gemini Spark.

## Connect apps on the Gemini Android app

1. Open the Gemini app.
2. Tap the menu, then your profile photo.
3. Tap **Connected Apps**. If that row is missing, tap **Personal Intelligence**, then **Connected Apps**.
4. Find the service and turn it on.
5. Complete any sign-in or permission prompts.

Android can also expose device-level apps that the web client does not, such as the default Phone app, Messages, WhatsApp, and Google Home. Check the Help availability table rather than assuming parity with the desktop list.

If the September partners are missing, the rollout may not have reached your account yet. Google described the 23 September list as “beginning to roll out today,” not as a simultaneous global switch.

![Person using a smartphone next to a laptop](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Use an app inside a chat

You do not have to open settings every time. Gemini Apps Help gives two in-chat paths:

**Name the app in the prompt.** Ask Gemini to do the job in that product (“show this week’s Linear issues assigned to me”).

**Use an @ mention.** In the text box, type `@` and pick the app, then write the rest of the prompt. Airtable’s developer docs use the same pattern: type `@` and select Airtable before you submit.

If the app is eligible but not connected yet, Gemini can offer the connect flow from the thread. Grant only the scopes you need.

Useful prompt shapes once a connector is live:

- `@Airtable list records added this week in the CRM base`
- `@Linear create an issue for the login timeout on Android`
- `@monday.com which leads still need a follow-up?`
- `@Gmail summarize unread mail from the last 24 hours`
- `@Google Drive find the Q3 roadmap doc and list open questions`

Gemini only reaches the data you authorized, and it follows the source app’s own permissions. Airtable states that read-only access in Airtable stays read-only inside Gemini.

For a related workflow that keeps reusable prompts out of one-off chats, see [ChatGPT Skills reusable workflows](/blog/chatgpt-skills-reusable-workflows/).

## What the new partners are for

Treat each row as a category, not a promise that every button in the vendor product works from chat.

**Work trackers.** Airtable, Linear, and monday.com are the ones most teams will test first. Airtable documents read and update of authorized bases. monday.com’s own support article for the Workspace-side Gemini integration notes that Gemini can pull board data into Gmail, Docs, Sheets, and Slides, and that write behavior can differ by surface. Read the in-Gemini “Learn more” card for the exact actions on your account.

**Docs and dictation.** PandaDoc, Wispr AI, and Zoho sit in the productivity group on the official blog. Use them for drafts, notes, and CRM-style lookups only after you confirm the supported-action list.

**Creative tools.** Adobe, Picsart, Squarespace, and Webflow are listed for visual assets and sites. Do not assume Gemini can drive every Creative Cloud panel. Confirm capabilities on the app’s Gemini details page; they can differ by country.

**Lifestyle.** apartments.com, Experian, Peloton, and SeatGeek cover housing search, credit monitoring, workouts, and tickets. These are high-sensitivity connections. Review the data-sharing text on the consent screen before you approve.

## Privacy, Keep Activity, and Workspace accounts

Three official constraints matter more than the partner logos.

**Keep Activity.** Custom Connected Apps and several consumer connectors require this setting. Turning it off is the fastest way to make a connector disappear.

**Account type.** Help pages split personal accounts and work or school accounts. Workspace users need a qualifying edition, Keep Activity managed by the admin, and often a different app list. Admins set policy under Gemini App settings in the Admin console.

**Disconnect is explicit.** On the computer Help page: gemini.google.com → Settings & help → Apps → find the app → turn it off. Repeat on the phone if you connected there too. Revoke the vendor token in that product’s security settings if you want the grant gone at the source, not only hidden in Gemini.

Google will not share your Google Account password with a linked third-party app. It will share the scopes you accept. Treat banking, health, and credit connectors as you would any OAuth app: minimum scopes, separate review, and a plan to turn them off after the task.

## Troubleshooting

- **No Connected Apps item.** Open Personal Intelligence first. Confirm you are signed in on the account you expect.
- **App missing from the list.** Check Google’s availability table for country, language, age, account type, and which Gemini surface (web vs mobile, chat vs Spark).
- **Toggle does nothing.** Keep Activity may be off, or a Workspace admin blocked the connector.
- **@ mention does not appear.** The app is not connected, not eligible, or not supported in that Gemini mode.
- **Gemini cannot write.** The source app granted read-only access, or the Gemini action card marks writes as unsupported.
- **Stale data.** Re-auth the vendor account. Some tokens expire without a visible error in chat.

## Conclusion

Connected Apps turn Gemini from a chat box into a switchboard for tools you already pay for. Start with Settings → Connected Apps (or Personal Intelligence → Connected Apps), turn on only the services you will use this week, and call them with `@` so Gemini does not guess the wrong system. When the job is done, flip the same switch off.

The September 2026 partner list is a rollout, not a finished catalog. Recheck the in-app list and the official Help table when a tool you need is still absent.

## Sources

- [New connected apps roll out to Gemini — Google Blog](https://blog.google/innovation-and-ai/products/gemini-app/new-connected-apps-gemini/)
- [Use & manage connected apps in Gemini — Gemini Apps Help](https://support.google.com/gemini/answer/13695044)
- [Check the availability & requirements of Connected Apps — Gemini Apps Help](https://support.google.com/gemini/table/17434654)
- [Connect & manage custom apps for Gemini Apps — Gemini Apps Help](https://support.google.com/gemini/answer/17209137)
- [Use apps connected to Gemini with a work or school Google Account — Gemini Apps Help](https://support.google.com/gemini/answer/14959807)
- [Google Gemini — Airtable Developers](https://www.airtable.com/developers/agents/mcp/gemini)
- [Save time (and tabs) with apps in Gemini — Google (YouTube)](https://www.youtube.com/watch?v=NpCNG2-5qAU)
