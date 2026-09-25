---
title: "How to Connect New Apps to Gemini in September 2026"
description: "Connect Airtable, Adobe, Peloton and more to Gemini. Step-by-step setup, @ mentions, privacy tips, and what rolled out this week."
pubDate: 2026-09-25T09:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "productivity", "google"]
noindex: false
---

Google added another wave of Connected Apps to Gemini on September 23, 2026. You can now manage Linear issues, pull Adobe assets, plan Peloton workouts, and search SeatGeek tickets without leaving the chat.

This guide shows how to turn those connections on, how to force Gemini to use a specific app with `@`, and how to disconnect anything you no longer want linked.

## What rolled out this week

Mai Lowe, Group Product Manager for the Gemini app, listed the new partners on the Google blog. The rollout started the same day and lands by category:

- **Productivity:** Airtable, Linear, monday.com, PandaDoc, Wispr AI, Zoho
- **Creativity:** Adobe, Picsart, Squarespace, Webflow
- **Lifestyle:** apartments.com, Experian, Peloton, SeatGeek

These sit on top of earlier waves. August added Granola, Otter.ai, Wix, Fever, GetYourGuide, Ticketmaster, iHeartRadio, Pandora, Angi, Thumbtack, and Zocdoc. Spark already talks to Google Tasks and Keep, plus Canva, Dropbox, Instacart, OpenTable, and Zillow Rentals.

Not every account sees every tile on day one. Availability still depends on country, account type, and whether Gemini activity is on.



![Person working at a laptop in a home office](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80)



## What you need before you connect anything

Sign in to Gemini with a personal Google Account on [gemini.google.com](https://gemini.google.com), the Android Gemini app, or iOS. Work and school accounts follow a different admin path and often cannot add third-party tools.

Turn **Keep Activity** on. Google’s help docs are explicit: when activity is off, apps will not load on the web, iOS, or Wear OS. Android still exposes a short list (Utilities, Phone, Messages, WhatsApp) and nothing else.

Custom MCP servers have extra limits. You must be 18 or over, in the United States, and on a personal account. You add those servers only from the web app; they then appear on mobile.

Gemini still cannot use Connected Apps inside Google Messages.

## Connect apps on the web

1. Open [gemini.google.com](https://gemini.google.com) and confirm the correct account in the top-right corner.
2. Open **Settings & help**, then **Apps** (sometimes listed as **Connected Apps** under **Personal Intelligence**).
3. Find the service. A grey toggle means it is off.
4. Flip the toggle. Google apps such as Gmail, Drive, and Calendar usually activate immediately.
5. For third-party tools, complete the sign-in and permission screen from that vendor.
6. Return to chat and test with a real request, such as “Summarize my unread mail from yesterday.”

If the Apps page is missing, look under Personal Intelligence first. That is the same path Google documented when Personal Intelligence launched as a U.S. beta for AI Pro and Ultra subscribers.

## Connect apps on Android or iOS

1. Open the Gemini app and tap your profile or **Settings**.
2. Tap **Personal Intelligence**, then **Connected Apps**, or go straight to **Apps** if that row is visible.
3. Toggle the services you want. Approve each OAuth prompt.
4. Ask Gemini a task that needs that app. On Android you can keep using the rest of the phone while Gemini works through a multi-step flow on supported devices.

Pixel and Galaxy phones that already run Gemini Intelligence can chain some of these actions across apps. That is separate from the Connected Apps list, but the same privacy settings apply.

For related device privacy controls, see our guide to [Android Private Space](/blog/android-private-space/).



![Analytics dashboard on a laptop screen](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80)



## Force an app with @ mentions

Gemini often picks a tool on its own. When you want a specific one, type `@` in the prompt box and select the app.

Examples that match this week’s list:

- `@Linear create a bug from this error log and assign it to me`
- `@Airtable add these three rows to the content calendar`
- `@Adobe generate a square social crop from this brief`
- `@Peloton find a 30-minute ride that matches yesterday’s output`
- `@SeatGeek show weekend tickets under $80 in my city`

You can still mention the product in plain language. Google has been moving away from required `@` prefixes for first-party tools such as YouTube and Maps, but `@` remains the reliable way to pin a third-party connection.

## Use Connected Apps without leaving chat

Treat Gemini as a router, not a second inbox.

**Project work.** Ask Linear or monday.com for blocked issues, then tell Gemini to draft a PandaDoc outline from the same thread.

**Creative production.** Hand Adobe or Picsart a headline and a product shot. Follow up with Squarespace or Webflow if you need the result on a page.

**Life admin.** Combine apartments.com filters with your calendar, or ask Experian only for high-level account status you already expect to see in that product.

**Meetings and notes.** Wispr AI covers dictation. Pair it with Keep or Tasks if Spark is already connected on your account.

Keep prompts short and name the outcome. “Draft three homepage hero options in Picsart from this product photo” beats a vague “make this nicer.”

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/DFXOInBrq60"
    title="Welcome to the Gemini App"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Disconnect an app or tighten access

You can revoke any connection from the same Apps page.

1. Open Settings → Apps (or Personal Intelligence → Connected Apps).
2. Turn the toggle off.
3. If the vendor issued a separate OAuth grant, revoke it in that product’s security settings as well.

Google states that Workspace for Education data used with Classroom-style connections is not used to train models. Personal Intelligence still requires you to opt each Google app in. Older basic connections stay limited until you upgrade them or turn them off.

Review the list after every new partner drop. A tile you ignored in August may now sit next to Experian or Adobe with broader scopes.

## Tips that save time

- Enable Keep Activity before you hunt for missing tiles.
- Connect only the tools you will query this week. Extra tokens in the Apps list add noise.
- Use `@` when two creativity apps could both claim the job.
- Test one prompt per new connection so you know which vendor failed if Gemini returns a generic answer.
- On desktop, add custom MCP apps only from URLs you trust. Google’s help page warns about the risk of unvetted servers.
- Spark on macOS can reach local files. That is a different permission surface from web Connected Apps. Treat it as such.

## Limits to expect

Rollouts are staggered. A Linear toggle on web does not guarantee the same tile on iOS the same afternoon.

Some apps answer questions but will not take irreversible actions. YouTube connections, for example, can find and summarize public videos; they will not like a video or edit your playlists.

Gemini in Messages still ignores Connected Apps. Live chats have their own feature gaps.

Custom MCP apps stay U.S.-only and adult-only for now.

## Conclusion

The September 23 drop makes Gemini a practical switchboard for project tools, design suites, and a few lifestyle services. Turn Keep Activity on, connect only what you need, and pin the right tool with `@` when the model guesses wrong.

Check the Apps page again next month. Google has shipped partner waves in May, August, and September. The next list will likely land the same way: a short official post, then tiles appearing account by account.

## Sources

- [New connected apps roll out to Gemini](https://blog.google/innovation-and-ai/products/gemini-app/new-connected-apps-gemini/) — Google, 23 Sep 2026
- [New connected apps are coming to Gemini](https://blog.google/innovation-and-ai/products/gemini-app/new-connected-apps-services-gemini-august-2026/) — Google, 12 Aug 2026
- [Gemini Spark updates: macOS launch, connected apps and more](https://blog.google/innovation-and-ai/products/gemini-app/gemini-spark-updates-june-2026/) — Google, 30 Jun 2026
- [Personal Intelligence: Connecting Gemini to Google apps](https://blog.google/innovation-and-ai/products/gemini-app/personal-intelligence/) — Google, 14 Jan 2026
- [Use and manage connected apps in Gemini](https://support.google.com/gemini/answer/13695044) — Gemini Apps Help
- [Connect and manage custom apps for Gemini Apps](https://support.google.com/gemini/answer/17209137) — Gemini Apps Help
