---
title: "How to Connect Apps to Gemini in 2026"
description: "Connect Gmail, Drive, and new third-party apps to Gemini. Keep Activity, @mentions, and official privacy steps."
pubDate: 2026-09-27T14:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "productivity", "google"]
noindex: false
---

Gemini can pull from Gmail, Calendar, Drive, and a growing list of third-party tools when you connect them. Google’s Help Center calls these **Connected Apps**. On 23 September 2026, the Gemini team added another wave: Airtable, Linear, monday.com, Adobe, Squarespace, Peloton, SeatGeek, and more.

You do not get that access by default. You sign in, turn **Keep Activity** on (for most surfaces), then toggle each app. This guide follows Gemini Apps Help, Google Account settings, and the official Connected Apps blog post.



![Person using a laptop to chat with an AI assistant](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80)



## What Connected Apps actually do

Gemini Apps Help says Connected Apps let Gemini complete requests and, with permission, take actions such as editing content in another product.

Official examples include:

- Summarize mail, create calendar events, or search productivity tools.
- Play music from YouTube Music or Spotify, or search photos in supported galleries.
- Make calls or send messages with Phone, Messages, or WhatsApp on Android.
- Control smart-home devices through Google Home.

Google also uses public information from some of its own services (Maps, Flights, Hotels, YouTube, Search) without a separate toggle in many cases. Private content in Gmail or Drive still needs you to connect those apps.

Availability depends on country, language, device, and whether you use the web app, Android, iOS, or Gemini Live. Gemini cannot use Connected Apps inside Google Messages.

## Check two settings first

**1. Sign in.** Connected Apps require a signed-in Gemini session. Confirm the account avatar matches the Google Account that owns Gmail, Drive, or the third-party login you plan to use.

**2. Keep Activity.** Help is explicit:

- If Keep Activity is **off**, Connected Apps are unavailable on gemini.google.com, iOS, and watches.
- On Android, only Device assistance, Phone, Messages, and WhatsApp stay available when the setting is off.

Turn it on at [myactivity.google.com/product/gemini](https://myactivity.google.com/product/gemini) or in Gemini: **Settings → Activity**. Pick a retention window (3, 18, or 36 months, depending on what Google shows for your account).

Work or school accounts need a qualifying Workspace edition and an admin who allows app connections. Personal-account steps below do not apply to those tenants.

## Connect apps on the web

1. Open [gemini.google.com](https://gemini.google.com) and sign in.
2. Click **Settings & help** (bottom of the left rail on desktop).
3. Open **Connected Apps**. If that label is missing, open **Personal Intelligence**, then **Connected Apps**.
4. Find the app. Turn the toggle **on**.
5. For Google products such as Gmail or Drive, the connection often applies immediately because you already signed in with Google.
6. For third-party apps, complete the partner login and permission screen.
7. Open **Learn more** under an app name to read supported actions and sample prompts.

You can also start from [gemini.google.com/apps](https://gemini.google.com/apps).

Google documents a second path: type `@` in the composer, pick an app, and allow the connect prompt if it is still off.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/1_RjYaxIDR0"
    title="How to connect Gemini app on your Android phone to other apps"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Connect apps on Android

1. Open the **Gemini** app and confirm you are signed in.
2. Tap your profile photo.
3. Open **Connected apps** (some builds nest this under Personal Intelligence).
4. Confirm **Keep Activity** is on if you want Gmail, Drive, Calendar, and most third-party tools.
5. Toggle the apps you want. Workspace-style bundles can enable Gmail, Calendar, Docs, and Drive together.
6. Approve any extra permission sheet.

On Android you can still use Phone, Messages, and WhatsApp with Keep Activity off. Everything else in the list waits for that setting.

If you already use Gemini inside Chrome on the phone, pair this setup with [How to Use Gemini in Chrome on Android](/blog/gemini-in-chrome-android/) so page summaries and Auto Browse use the same account.



![Dashboard charts on a laptop used for project tracking](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80)



## What rolled out in September 2026

Mai Lowe, Group Product Manager for the Gemini app, listed three buckets in Google’s 23 September 2026 post:

**Productivity:** Airtable, Linear, monday.com, PandaDoc, Wispr AI, Zoho.

**Creativity:** Adobe, Picsart, Squarespace, Webflow.

**Lifestyle:** apartments.com, Experian, Peloton, SeatGeek.

Your Connected Apps page is the source of truth. Region, age, plan, and account type can hide a partner even after the blog post names it.

Use `@AppName` when you want a specific tool. Example: `@Gmail summarize unread mail from the last day that needs a reply.` Then check the sources Gemini cites. Help warns that Gemini can invent or stale-date an email; open the linked message before you act.

For inbox-only work inside Gmail itself, see [How to Use Gemini in Gmail](/blog/gemini-in-gmail/).

## Custom MCP apps

Help now documents custom connections: you can link a personal or third-party **Model Context Protocol (MCP)** server. That adds a custom entry on the Connected Apps page. Use it for internal tools once you trust the server URL and the scopes it requests. Official setup lives in Gemini Help: “Connect custom apps to Gemini Apps.”

Treat MCP like any OAuth grant. Use a dedicated test account first. Disconnect the custom app if the server owner changes or you stop using it.

## Privacy and disconnect steps

Google’s Gemini Apps Privacy Hub explains data exchange when an app is connected and what happens when you turn it off.

Practical rules:

- Connect only apps you would already open in a browser while signed in.
- Review **Learn more** for each partner so you know whether Gemini can read, write, or only search.
- Disconnect from the same Connected Apps page: toggle **off** and finish any partner revoke screen.
- Turning Keep Activity off later hides most connectors on web and iOS; it does not magically erase partner tokens until you disconnect.

Work accounts should follow the separate Help article for Workspace. Admins can block connectors even if Keep Activity is on.

## Prompts that actually use the connection

After a toggle is on:

- `@Gmail what did Priya send about the Friday launch?`
- `@Google Calendar create a 30-minute focus block tomorrow at 10.`
- `@YouTube Music play the focus playlist I used last week.`
- `@monday.com list my overdue items in the launch board.`

If Gemini ignores the app, type `@` again and pick it from the chip list. If the chip is missing, the toggle is off, Keep Activity is off, or the partner is not offered on that surface.

Some connectors also work in Gemini Live. Help has a dedicated Live-apps section if you talk instead of type.

## A short checklist

- Signed into the correct Google Account
- Keep Activity on (unless you only need Android Phone, Messages, or WhatsApp)
- Connected Apps page reviewed, not just the blog list
- `@` used when you need a specific tool
- Sources opened before you send mail, book, or pay
- Unused partners disconnected

Connected Apps turn Gemini from a chat box into a router across tools you already pay for. Start with Gmail and Calendar, add one third-party app you use every day, and keep the rest off until you have a prompt that needs them.

## Sources

- [Use & manage Connected Apps in Gemini](https://support.google.com/gemini/answer/13695044) — Gemini Apps Help
- [Use Connected Apps with a work or school Google Account](https://support.google.com/gemini/answer/14959807) — Gemini Apps Help
- [New connected apps roll out to Gemini](https://blog.google/innovation-and-ai/products/gemini-app/new-connected-apps-gemini/) — Google Blog, 23 Sep 2026
- [Browse Connected Apps](https://gemini.google.com/apps) — Gemini
- [Gemini Apps Activity](https://myactivity.google.com/product/gemini) — Google Account
- [How to connect Gemini app on your Android phone to other apps](https://www.youtube.com/watch?v=1_RjYaxIDR0) — YouTube
