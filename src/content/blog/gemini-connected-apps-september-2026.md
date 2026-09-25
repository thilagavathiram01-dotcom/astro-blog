---
title: "How to Connect New Apps to Gemini (Sept 2026)"
description: "Connect Airtable, Linear, Adobe, Peloton and more to Gemini. Official steps, @mentions, privacy notes, and the September 2026 app wave."
pubDate: 2026-09-25T08:00:00
heroImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "tutorials", "productivity", "google"]
noindex: false
---

Google added another wave of Connected Apps to Gemini on 23 September 2026. You can now keep project boards, design files, credit reports, and workout plans inside one chat instead of hopping between tabs.

This guide uses Google's own setup steps. You will turn apps on, mention them with `@`, and disconnect anything you no longer want Gemini to see.

## What rolled out in September 2026

Mai Lowe, Group Product Manager for the Gemini app, listed three buckets in the official blog post:

- **Productivity:** Airtable, Linear, monday.com, PandaDoc, Wispr AI, Zoho
- **Creativity:** Adobe, Picsart, Squarespace, Webflow
- **Lifestyle:** apartments.com, Experian, Peloton, SeatGeek

Availability still depends on country, language, device, and whether you are in the web app or the mobile Gemini app. The list on your account may not match a screenshot from another region.

Earlier 2026 waves already added Canva, Dropbox, Instacart, OpenTable, Zillow Rentals, Granola, Otter.ai, Wix, Ticketmaster, and others. Treat Connected Apps as a growing catalog, not a one-time toggle.



![Laptop and notebook on a desk used for connecting work apps](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)



## Before you connect anything

Sign in to Gemini with the Google Account you actually use for those services. Connected Apps do not work if you are signed out.

Turn **Keep Activity** on if you want apps on gemini.google.com, iOS, or a watch. Google's help page is explicit: when Keep Activity is off, those surfaces lose Connected Apps. On Android, only Device assistance, Phone, Messages, and WhatsApp stay available in that state.

Work and school accounts follow a different admin policy. Your Workspace admin can allow or block Workspace apps and other Google apps inside Gemini. If a toggle never appears, check with IT before you assume the feature is missing.

Gemini still cannot use Connected Apps inside Google Messages.

## How to connect an app on the web

1. Open [gemini.google.com](https://gemini.google.com) and sign in.
2. Open **Settings** (sometimes labeled Settings & help).
3. Open **Connected Apps**. If you only see **Personal Intelligence**, open that first, then Connected Apps.
4. Find the app and turn it on.
5. Complete any permission screen from Gemini and from the third-party service.

To inspect what an app can and cannot do, tap **Learn more** under its name. Google documents supported actions, unsupported actions, and example prompts on that details page.

You can browse the same catalog at [gemini.google.com/apps](https://gemini.google.com/apps).

## How to connect an app on Android

1. Open the Gemini app and sign in.
2. Open your account menu.
3. Open **Connected apps** (wording can sit under Personal Intelligence on some builds).
4. Confirm **Keep activity** is on if you want the full catalog.
5. Toggle the app and accept the permission flow.

Some Android-only helpers never show on iOS or on the web list. That is expected. Google says the catalog is filtered by Gemini app, device, and country.

If you also use Gemini inside Gmail, see [How to Use Gemini in Gmail](/blog/gemini-in-gmail/) for inbox-specific actions that sit outside this settings page.

## How to use a connected app in a chat

Type your request as usual. Gemini can pick a connected app on its own when the prompt matches a supported action.

To force a specific app, type `@` in the composer and choose it from the list. If that app is off, Gemini either connects it or asks for permission first.

Examples that match Google's own categories:

- `@Linear show open issues assigned to me this week`
- `@Airtable list records in the content calendar that have no owner`
- `@Adobe create a square social crop from this brief`
- `@Peloton what strength classes fit a 30-minute lunch break`
- `@SeatGeek find tickets for the next home game under $80`

Follow any confirmation card before Gemini writes, books, or sends. High-stakes actions should stay behind an explicit confirm step.



![Team planning a project on a whiteboard after linking productivity tools](https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80)



## Custom apps with MCP

If a tool is not in the partner list, Gemini Apps can still talk to a personal or third-party **Model Context Protocol (MCP)** server. Linking that server adds a custom app on your Connected Apps page. You can then call it in chats or longer task threads.

Google documents the MCP flow separately. Only add servers you trust. An MCP connector can expose data you never intended to put in a chat.

## What Gemini already uses without a toggle

Connected Apps settings do not control public data from some Google services. Gemini can use public information from Google Search at all times. With Keep Activity on, it can also use public information from Google Flights, Hotels, Maps, and YouTube.

It does not read your private content in those products unless you grant that access. Do not confuse a Maps search with a Gmail or Photos connection.

## Privacy, disconnect, and data handling

You can turn any app off on the same Connected Apps page. Disconnecting stops new use of that connection. Review Google's Gemini Apps Privacy Hub for what happens to data after you disconnect and how third-party exchanges work.

Practical habits:

- Connect only the apps you will query this month.
- Read **Learn more** before you enable finance or identity tools such as Experian.
- Disconnect unused partners after a project ends.
- Recheck Workspace admin policy if you switch from a personal account to a work account.

Do not paste secrets into a chat and then enable a new partner in the same session. Treat each new toggle as a fresh permission grant.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/NpCNG2-5qAU"
    title="Save time (and tabs) with apps in Gemini. Access Google Maps, YouTube Music and more in one place"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips that save time

Start with one productivity app and one lifestyle app. Confirm `@` mentions work before you enable a long list.

Write the destination in the prompt. “Add a row in Airtable for this brief” beats “remember this.”

Check Live chat support per app. Some Connected Apps work in Gemini Live; many do not. Google keeps a separate help article for Live.

If a brand-new September partner is missing, wait out the staged rollout, then refresh Connected Apps. Google described this wave as “beginning to roll out,” not as a global instant switch.

Windows and macOS Gemini apps inherit the same account connections once you sign in. Install steps for the desktop client are in [How to Use the Gemini App for Windows](/blog/gemini-app-windows/).

## Conclusion

The September 2026 wave is useful if you already live in Linear, Airtable, Adobe, or Peloton. Connect the few tools you will mention by name, keep Keep Activity on where you need the full catalog, and disconnect the rest.

Use `@` when Gemini picks the wrong partner. Confirm writes. Revisit the Connected Apps page whenever Google announces another partner list.

## Sources

- [New connected apps roll out to Gemini](https://blog.google/innovation-and-ai/products/gemini-app/new-connected-apps-gemini/) — Google, 23 September 2026
- [Use & manage Connected Apps in Gemini](https://support.google.com/gemini/answer/13695044) — Gemini Apps Help
- [New connected apps are coming to Gemini](https://blog.google/innovation-and-ai/products/gemini-app/new-connected-apps-services-gemini-august-2026/) — Google, 12 August 2026
- [Gemini Spark updates: macOS launch, connected apps and more](https://blog.google/innovation-and-ai/products/gemini-app/gemini-spark-updates-june-2026/) — Google, 30 June 2026
- [Personal Intelligence: Connecting Gemini to Google apps](https://blog.google/innovation-and-ai/products/gemini-app/personal-intelligence/) — Google
