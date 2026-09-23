---
title: "How to Connect Gemini’s New Apps (Sept 2026 Guide)"
description: "Connect Gemini to Airtable, Linear, Adobe, Zoho, Peloton and more. Official setup, @ prompts, Keep Activity, and privacy steps."
pubDate: 2026-09-23T16:00:00
heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "productivity", "google"]
noindex: false
---

Google started rolling out a new wave of Connected Apps in the Gemini app on 23 September 2026. The official Gemini App post lists tools for projects, design, housing, credit, workouts, and tickets. You can ask Gemini to work in those apps instead of hopping between tabs.

This guide uses Google’s own Connected Apps help pages and that September announcement. Availability still depends on country, language, device, and account type. If a partner is missing, treat it as a staged rollout, not a broken install.

## What Google added on 23 September 2026

Mai Lowe, Group Product Manager for the Gemini App, listed three groups:

- **Productivity:** Airtable, Linear, monday.com, PandaDoc, Wispr AI, Zoho
- **Creativity:** Adobe, Picsart, Squarespace, Webflow
- **Lifestyle:** apartments.com, Experian, Peloton, SeatGeek

These sit on top of apps Gemini already supports, such as Google Workspace, YouTube Music, Maps, Photos, and (on Android) Phone, Messages, and WhatsApp. Gemini Apps Help also notes that you can attach a custom app through a Model Context Protocol (MCP) server.

Do not assume every partner appears on every surface. Google states that the Connected Apps list varies by Gemini app, device, country, and account. Android-only apps will not show on gemini.google.com or iOS.



![Laptop and code editor on a desk used for productivity work](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)



## Before you connect anything

Use a **personal Google Account** for the steps below. Work and school accounts follow a separate admin-controlled help article.

1. Sign in to the Gemini app or [gemini.google.com](https://gemini.google.com).
2. Turn **Keep Activity** on. Google is explicit: when Keep Activity is off, Connected Apps are unavailable on the web, iOS, and watches. On Android, only Device assistance, Phone, Messages, and WhatsApp stay available.
3. Confirm you are not trying this inside Gemini in Google Messages. Google currently says Connected Apps do not work there.

Keep Activity stores Gemini chat history. If you need a private scratch session, use Temporary Chat instead of disabling Keep Activity for the whole account.

Related setup that pairs well with these connectors is covered in our [Gemini Spark personal agent guide](/blog/gemini-spark-personal-agent/).

## How to open Connected Apps settings

### On the web

1. Go to gemini.google.com.
2. Open **Settings & help** (bottom of the sidebar).
3. Choose **Connected Apps**. If that item is hidden, open **Personal Intelligence**, then **Connected Apps**.
4. The page lists only apps available for *this* account and surface.

Google also hosts a directory at [gemini.google.com/apps](https://gemini.google.com/apps).

### On Android or iOS

1. Open the Gemini app and tap your profile or account menu.
2. Open **Connected Apps** (sometimes nested under Personal Intelligence).
3. Toggle an app on and complete any OAuth or permission screen.

Third-party tools need their own login. Google Workspace tools usually activate with the Google Account you already use.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/NpCNG2-5qAU"
    title="Save time (and tabs) with apps in Gemini. Access Google Maps, YouTube Music and more in one place"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## How to call an app in a chat

Google documents two routes.

**Automatic.** If an app is connected and the request matches it, Gemini can pick the app on its own. Ask for a Linear issue, an Airtable base, or a Peloton class in plain language.

**Explicit.** Type `@` in the prompt box and pick the app. If it is not connected yet, Gemini connects it or asks for permission.

Example prompts to try after the new partners appear:

- `@Linear list my open issues assigned this week`
- `@Airtable show the product roadmap base and summarize overdue rows`
- `@monday.com create a task for Friday’s launch checklist`
- `@Adobe draft three square social crops from this brief`
- `@Peloton find a 30-minute cycling class I have not taken`
- `@SeatGeek cheapest tickets for this Saturday near me`
- `@Experian what changed on my credit monitoring alerts this month`

Always read the **Learn more** panel for that app. Google puts supported actions, unsupported actions, and sample prompts on the details page. Do not invent capabilities the partner has not listed.



![Notebook, laptop, and coffee on a desk during a work session](https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80)



## What Gemini already uses without a toggle

Some Google services feed **public** information even when you never open Connected Apps. Help lists:

- Google Search (always available, even signed out)
- Google Flights, Hotels, Maps, and YouTube (need Keep Activity on)

Gemini will not read *your* private content in those products unless you grant permission. Connecting Workspace, Photos, or a third-party tool is a separate choice.

## Privacy and disconnect steps

Connect only the tools you will actually prompt. Each extra OAuth grant expands what Gemini can request during a chat.

To disconnect:

1. Return to Connected Apps settings.
2. Turn the app off.
3. Follow any partner screen that revokes access.

Google’s Privacy Hub explains what happens to data after a disconnect and how exchanges work while an app is on. Review those two help sections before you connect credit, housing, or document tools.

Practical limits:

- Work or school accounts may hide partners until an admin allows them.
- A partner can appear in settings before the backend accepts `@` mentions. Wait for a later app or server wave.
- Gemini Live supports only a subset of Connected Apps. Check the Live help article if a tool works in typed chat but not in voice.
- Custom MCP apps are for people who operate their own server. They are not a shortcut around the official partner list.

## A 15-minute setup plan

1. Enable Keep Activity.
2. Connect Google Workspace if you want mail, Drive, Calendar, and Docs in the same thread.
3. Add **one** productivity partner you already pay for (Linear, Airtable, monday.com, or Zoho).
4. Add **one** lifestyle or creative partner you will use this week.
5. Run three `@` prompts and confirm the app name appears in the response trail.
6. Disconnect anything you do not use after seven days.

That keeps the permission surface small while you learn which connectors save time.

## Conclusion

The September 2026 wave is useful when you already live in those products. Connect Linear or Airtable if that is your source of truth. Connect Adobe or Webflow if design work starts in Gemini. Leave Experian and apartments.com off until you have a real question that needs them.

Use `@` when you want a specific tool. Keep Activity on when you want the catalog at all. Disconnect as soon as a workflow is done. Those three habits matter more than collecting every new logo in settings.

## Sources

- [New connected apps roll out to Gemini](https://blog.google/innovation-and-ai/products/gemini-app/new-connected-apps-gemini/) — Google Blog, 23 September 2026
- [Use & manage Connected Apps in Gemini](https://support.google.com/gemini/answer/13695044) — Gemini Apps Help
- [Browse Connected Apps](https://gemini.google.com/apps)
- [Connect custom apps to Gemini Apps](https://support.google.com/gemini/answer/17209137)
- [How your data is handled with Connected Apps](https://support.google.com/gemini/answer/13594961)
