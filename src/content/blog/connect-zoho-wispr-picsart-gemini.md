---
title: "How to Connect Zoho, Wispr AI, and Picsart to Gemini"
description: "Connect Zoho, Wispr AI, and Picsart to Gemini. Turn on Connected Apps, use @ mentions, and keep activity on for web and Android."
pubDate: 2026-10-08T10:00:00
heroImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "google", "how-to", "productivity", "ai-tools"]
noindex: false
---

Google added Zoho, Wispr AI, and Picsart to Gemini Connected Apps on 23 September 2026. You can ask Gemini to pull CRM records, dictate a note, or start a design without leaving the chat. The same wave also added Airtable, Linear, monday.com, PandaDoc, Adobe, Squarespace, Webflow, apartments.com, Experian, Peloton, and SeatGeek.

This guide covers the three apps that are easy to miss: Zoho for work records, Wispr AI for dictated notes, and Picsart for visual assets. Availability still depends on country, language, device, and account type. If a toggle is missing, the rollout has not reached that account yet.

## What Google shipped in this wave

Mai Lowe, Group Product Manager for the Gemini app, announced the rollout on the Google blog. Productivity connectors include Airtable, Linear, monday.com, PandaDoc, Wispr AI, and Zoho. Creativity connectors include Adobe, Picsart, Squarespace, and Webflow. Lifestyle connectors include apartments.com, Experian, Peloton, and SeatGeek.

Google's pitch is practical: manage projects, design assets, and plan workouts from one prompt instead of hopping between tabs. Third-party apps still need your sign-in. Gemini does not get Zoho, Wispr, or Picsart data until you turn the app on and finish the permission screen.

If you already linked older services, the steps are the same as in our [Connected Apps setup guide](/blog/connect-apps-to-gemini/). The new names simply appear in the same list when your account is eligible.

![Person reviewing a phone and laptop while managing connected work apps](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Turn on Connected Apps before you search for Zoho

Google's help center lists three requirements before third-party apps appear.

1. Sign in to the Gemini app. Connected Apps are unavailable when you are signed out.
2. Turn on Gemini Apps Activity (Keep Activity). If it is off, Connected Apps are unavailable on gemini.google.com, iOS, and watches. On Android, only Device assistance, Phone, Messages, and WhatsApp stay available.
3. Open Connected Apps and turn on the service you want.

On the web:

1. Open [gemini.google.com](https://gemini.google.com) and sign in with the Google Account you use for Zoho, Wispr, or Picsart.
2. Click Settings at the bottom of the sidebar, then Connected Apps.
3. If you do not see Connected Apps, open Personal Intelligence first, then Connected Apps.
4. Search for Zoho, Wispr AI, or Picsart.
5. Open Learn more under the app name. Read supported and unsupported actions before you connect.
6. Turn the app on and finish the sign-in window. Grant only the scopes the task needs.

On Android, tap your account icon, open Connected Apps, and flip the same toggles. The list on a phone can differ from the web list. Google says apps that exist only in the Android Gemini app will not show on iOS or on the web.

Work and school accounts follow a different path. Admins control Gemini access to Workspace apps in the Admin console under Generative AI, then Gemini app. Third-party connectors can also be restricted. If Zoho is missing on a Workspace login, check with the admin before retrying on a personal account.

## Ask Gemini to use Zoho

Zoho sits in the productivity group with project and database tools. After the toggle is on, type `@` in the prompt box and pick Zoho. If it is not connected yet, Gemini either connects it or asks for permission.

Useful prompts stay specific:

- `@Zoho` list open deals assigned to me that have not been updated in 14 days.
- `@Zoho` summarize the notes on the Acme account and draft a follow-up email. Do not send it.
- `@Zoho` find contacts tagged as renewals this quarter and group them by owner.

Gemini can also pick an app without an `@` mention when the request is obvious. Mentions are safer when you have several work tools connected and do not want Gemini to guess.

Review the result against Zoho before you act on it. Connected Apps can read and, where the connector allows, change content in the other app. Unsupported actions are listed on that app's Learn more page. If a write action is missing there, do not expect the chat to create or delete the record.

## Dictate notes with Wispr AI

Wispr AI is listed with the productivity connectors for dictated notes. Connect it the same way: Connected Apps, Learn more, then the toggle and sign-in.

Once it is on, call it directly:

- `@Wispr AI` turn this voice memo into a clean meeting note with decisions and owners.
- `@Wispr AI` clean up the transcript and keep the original wording of action items.

Pair it with a Google app only after both are connected. A prompt such as "file this dictated note in Drive" needs Drive access as well as Wispr. If Keep Activity is off, that chain fails on the web even if the phone still shows a few system apps.

Short dictation works better than a long mixed request. Ask for the note first. Then ask Gemini to file or share it. You can see what happened in the chat and stop before a second app writes anything.

![Designer editing visual assets on a desktop workspace](https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80)

## Start a Picsart asset from chat

Picsart is in the creativity group with Adobe, Squarespace, and Webflow. Google described these connectors as a way to design visual assets and build site ideas from Gemini.

Connect Picsart, then try a narrow brief:

- `@Picsart` create a square social graphic for a weekend sale, navy background, white headline "Doors open at 10".
- `@Picsart` resize this concept for a story and a feed post. Keep the same headline.

Check supported actions on the Learn more card. Image tools often export or edit rather than publish to every social network. If posting is unsupported, download the asset and publish it yourself.

Adobe is in the same creativity list if your account shows it. Use one design app per prompt so Gemini does not split the brief across two editors.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/NpCNG2-5qAU"
    title="Save time (and tabs) with apps in Gemini"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Prompts that stay inside one app

A single `@` mention is the most reliable pattern while these connectors are still rolling out.

| Goal | Prompt pattern |
| --- | --- |
| CRM follow-up | `@Zoho` plus account name, date range, and "do not send" |
| Clean dictation | `@Wispr AI` plus the raw note and the format you want |
| Social graphic | `@Picsart` plus size, colors, and exact headline text |
| Apartment search | `@apartments.com` plus city, budget, and move-in month |

apartments.com shipped in the same 23 September wave. The pattern matches Zoho: connect, mention, then constrain the search. Peloton workout planning is covered in our [Peloton and Gemini guide](/blog/plan-peloton-workouts-gemini/) if that toggle is already on your account.

## Disconnect an app and check what remains

You can turn any connector off from the same Connected Apps page. Google documents what happens to data exchanged with an extension in the Gemini Apps Privacy Hub. Disconnecting stops new requests. It does not automatically delete records that Zoho, Wispr, or Picsart already stored in their own products.

Also remember:

- Gemini cannot use Connected Apps inside Gemini in Google Messages, for now.
- Some connectors work in Gemini Live. Others are chat-only. The app details page is the source of truth.
- Public info from Search, Maps, Flights, Hotels, and YouTube is separate. Turning off Zoho does not stop Maps answers.
- Custom MCP apps are a different setting. Linking a private server does not replace the Zoho or Picsart toggle.

## Fixes when the app is missing

Wait and refresh if the name is absent. Google said the wave was beginning to roll out on 23 September 2026, not that every account received every app that day.

Then check:

1. Gemini Apps Activity is on at [myactivity.google.com](https://myactivity.google.com/product/gemini).
2. You are in the right Google Account. A personal login and a Workspace login show different lists.
3. Language and country match a supported region for that connector.
4. You opened Learn more, not only the main settings screen. Some apps appear after you search the Connected Apps page at gemini.google.com/apps.
5. The Android app is updated. An old build can hide new toggles.

If Learn more lists an action you need and the chat still refuses it, file the request again with the `@` mention. Automatic app selection can skip a third-party tool when a Google app looks like a match.

## What to do next

Connect one app, run one read-only prompt, and compare the answer with the source product. Zoho is the right first test if you live in a CRM. Wispr AI is the right first test if you already dictate notes. Picsart is the right first test if you need a graphic before a meeting.

After that, add a second connector only if the first one returns the fields you expect. Stacking Zoho, Wispr, and Picsart in a single prompt is possible later. It is a poor way to learn what each permission screen allows.

## Sources

- Google blog, 23 September 2026: [A new wave of Connected Apps is rolling out to Gemini](https://blog.google/innovation-and-ai/products/gemini-app/new-connected-apps-gemini/)
- Gemini Apps Help: [Use and manage Connected Apps in Gemini](https://support.google.com/gemini/answer/13695044)
- Google Workspace Help: [Control Gemini app access to Workspace services](https://knowledge.workspace.google.com/admin/generative-ai/gemini-app/turn-google-apps-in-gemini-on-or-off)
- Google YouTube: [Save time (and tabs) with apps in Gemini](https://www.youtube.com/watch?v=NpCNG2-5qAU)
