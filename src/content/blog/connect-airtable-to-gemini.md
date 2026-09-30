---
title: "How to Connect Airtable to Gemini After Sept 2026"
description: "Connect Airtable in Gemini Connected Apps, pick bases during OAuth, then use @Airtable prompts. Official web and mobile steps."
pubDate: 2026-09-30T09:00:00
heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "productivity", "google"]
noindex: false
---

Airtable is now a Connected App inside Gemini. Google added it on 23 September 2026 with Linear, monday.com, and other productivity tools. Airtable’s own developer docs confirm Gemini can read and update bases you authorize.

You still have to turn the connector on. Gemini does not see every Airtable workspace by default. This guide follows Gemini Apps Help and Airtable’s Gemini page so you can connect the right bases, call them with `@`, and disconnect them later.

For the rest of that September list, start with [How to Connect Apps in Gemini After Google’s New Wave](/blog/gemini-connected-apps-september-2026/).

## What the Airtable connector can do

Airtable describes the integration as a consumer Connected App. After you authorize it, Gemini can work with the bases, apps, and workspaces you selected.

It respects Airtable permissions. If your own Airtable role is read-only on a base, Gemini cannot write to that base.

Google’s Help article is broader. Connected Apps can search productivity tools and, with permission, edit or manage content in those apps. Airtable’s page is the source for what this specific partner allows.

Do not assume Gemini can run every Airtable automation or rebuild a complex interface. Open **Learn more** under Airtable in Connected Apps for the current supported and unsupported actions.



![Laptop showing spreadsheet-style data tables](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80)



## Before you connect

Sign in to Gemini with the Google Account you want to use. Connected Apps follow the account, not a single device.

Turn **Keep Activity** on if you plan to use Airtable on the web, iOS, or a watch. Gemini Apps Help states that when Keep Activity is off, Connected Apps are unavailable on those surfaces. Android still keeps Device assistance, Phone, Messages, and WhatsApp.

Use a personal Google Account unless your Workspace admin has enabled third-party apps. Work and school accounts follow a separate Help article.

Gemini in Google Messages cannot use Connected Apps yet. Stay in the Gemini app or [gemini.google.com](https://gemini.google.com).

## Connect Airtable on the web

Airtable documents this path first.

1. Open [gemini.google.com/apps](https://gemini.google.com/apps).
2. Find **Airtable** and turn it on.
3. Complete the OAuth screen. Choose only the bases, apps, and workspaces Gemini should reach.
4. Confirm Airtable shows as connected on the Apps page.

If the menu does not list Connected Apps, Gemini Apps Help says to open **Settings** then **Personal Intelligence**, then **Connected Apps**.

Click **Learn more** under Airtable before you write to a production base. That details page lists supported actions and sample prompts for your account.

## Connect Airtable on the Gemini mobile app

1. Open the Gemini app and sign in.
2. Tap the menu, then your profile photo, then **Connected Apps**. If that label is missing, open **Personal Intelligence** first.
3. Find **Airtable** and turn it on.
4. Finish authorization and pick bases the same way you would on the web.

You can also type `@` and select Airtable in a chat. If the app is not connected, Gemini will start the permission flow.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/1_RjYaxIDR0"
    title="How to connect Gemini app on your Android phone to other apps."
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## How to call Airtable in a chat

Ask a normal question. Gemini may pick Airtable when the prompt matches a connected base.

Force the tool when you need it. Type `@` and select **Airtable**, then submit the prompt. Google documents this `@` pattern for every Connected App.

Keep the request narrow. Name the base and the table when you can. “Show overdue tasks in the Launch tracker base” is easier to verify than “what’s late.”

Check the sources or confirmation chips after a write. Gemini can hallucinate or use an older record. Google’s Workspace Connected Apps help says to review listed sources before you treat an answer as current.



![Team planning tasks around a table with notebooks](https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80)



## Practical prompts that stay inside the docs

Use these as starting points. Adjust names to bases you actually authorized.

- `@Airtable List records added this week in the Content calendar base.`
- `@Airtable Summarize open items assigned to me in the Launch tracker.`
- `@Airtable Add a record for a blog draft titled Connect Airtable to Gemini, status Draft.`
- `@Airtable Which fields in the Inventory table are empty?`

If a write fails, your Airtable role is the first check. A viewer cannot create records through Gemini.

If Gemini answers from Gmail or Drive instead, you forgot `@Airtable` or the base is outside the OAuth grant.

## Limit what Gemini can see

Authorize the smallest set of bases that still makes the chat useful. Airtable lets you pick bases during OAuth.

You can change that grant later without rebuilding the Gemini toggle. Airtable points to [third-party integration settings](https://airtable.com/?integrations=thirdParty) for base access.

Do not connect a base that holds payroll, health, or legal files if you only need a public editorial calendar.

Review Gemini Apps Activity if a chat stored record text you no longer want in Google’s history. Disconnecting Airtable stops new access. It does not wipe old threads.

## Disconnect Airtable

On the web, open Connected Apps and turn **Airtable** off.

On mobile, use the same Connected Apps list.

Revoke the integration in Airtable if you want the OAuth grant gone on that side too.

Google’s Privacy Hub articles cover what happens when you disconnect an app and how data moves during a session. Read those if you share a workspace with clients.

## Troubleshooting

**Airtable is missing from the list.** Availability varies by location, language, device, and Gemini surface. The September wave is still rolling out.

**Keep Activity is off.** Turn it on for web and iOS, or stay on Android with the limited built-in apps.

**Workspace account sees nothing.** Ask the admin to allow third-party Connected Apps. Personal-account steps do not apply.

**Writes fail on one base.** Your Airtable permission on that base is read-only, or that base was not selected in OAuth.

**Gemini in Messages ignores `@Airtable`.** Use the standalone Gemini app. Help states Messages cannot use Connected Apps for now.

## Conclusion

Airtable in Gemini is a scoped connector, not a full Airtable client. Pick bases on purpose, call `@Airtable` when the source matters, and turn the toggle off when the project ends.

Use it for status checks, record lookups, and small updates you can verify in Airtable after the reply. Leave schema redesign and bulk imports in the Airtable UI.

When you add more September partners, keep the same habit: one app, one grant, one `@` mention.

## Sources

- [New connected apps roll out to Gemini](https://blog.google/innovation-and-ai/products/gemini-app/new-connected-apps-gemini/) — Google Blog, 23 September 2026
- [Use and manage Connected Apps in Gemini](https://support.google.com/gemini/answer/13695044) — Gemini Apps Help
- [Google Gemini connector](https://www.airtable.com/developers/agents/mcp/gemini) — Airtable Developers
- [Use Connected Apps with a work or school Google Account](https://support.google.com/gemini/answer/14959807) — Gemini Apps Help
- [Browse Connected Apps](https://gemini.google.com/apps) — Gemini
- [How to connect Gemini app on your Android phone to other apps](https://www.youtube.com/watch?v=1_RjYaxIDR0) — YouTube
