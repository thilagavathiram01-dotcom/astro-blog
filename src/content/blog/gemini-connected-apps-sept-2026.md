---
title: "How to Use Gemini Connected Apps After the Sept 2026 Wave"
description: "Connect Adobe, Airtable, Linear, Peloton and more in Gemini. Official steps, @ mentions, privacy limits, and practical prompts."
pubDate: 2026-09-24T11:30:00
heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "productivity", "google"]
noindex: false
---

Google started rolling out a new wave of Connected Apps in Gemini on 23 September 2026. You can now manage projects, design assets, and handle lifestyle tasks from one chat instead of jumping between tabs.

Mai Lowe, Group Product Manager for the Gemini app, listed three buckets: productivity, creativity, and lifestyle. This guide walks through official setup steps, how `@` mentions work, and what to try first.

## What Google added on 23 September 2026

Google’s blog post names these new connections:

- **Productivity:** Airtable, Linear, monday.com, PandaDoc, Wispr AI, Zoho
- **Creativity:** Adobe, Picsart, Squarespace, Webflow
- **Lifestyle:** apartments.com, Experian, Peloton, SeatGeek

The idea is simple. You stay in Gemini, name the tool, and describe the task in plain language. Gemini asks for permission if the app is not already linked, then works inside that service.

Availability still varies by country, language, device, and account type. Work and school accounts follow a separate help path. Gemini cannot use Connected Apps inside Gemini in Google Messages.



![Laptop open on a desk with notes for a connected-app workflow](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80)



## How Connected Apps work

You must be signed in to Gemini. Connecting an app is off until you turn it on. You pick each service yourself and can disconnect it later from the same settings page.

On the web, iOS, and watches, Connected Apps need Keep Activity turned on. If you turn Keep Activity off, those platforms drop third-party connections. On Android, Device assistance, Phone, Messages, and WhatsApp can still appear when Keep Activity is off.

Some apps work automatically once enabled. Others wait until you mention them with `@`. If you `@` an app that is not connected, Gemini either connects it or asks for permission first.

This is different from Gemini sitting *inside* Gmail or Docs. For that in-product assistant, see [How to Use Gemini in Gmail](/blog/gemini-in-gmail/). Connected Apps pull third-party tools *into* the Gemini chat.

## Step 1: Open the Apps page

**On the web**

1. Go to [gemini.google.com](https://gemini.google.com) and sign in.
2. Open **Settings & help**.
3. Choose **Apps** (sometimes labeled Connected Apps).
4. Find the service and turn it on.
5. Complete the sign-in and permission screens for that vendor.

**On Android or iOS**

1. Open the Gemini app and tap your account picture.
2. Open **Connected apps** (or **Apps** under settings).
3. Toggle the service on and finish the vendor login.

If Keep Activity is off on web or iOS, turn it on first. Google documents this as a hard requirement for most third-party connections on those surfaces.

## Step 2: Call an app with @

In the prompt box, type `@` and pick the app from the list. Then write the task.

Examples that match the new catalog:

- `@Airtable list open records in the content calendar that lack a publish date`
- `@Linear show my issues assigned this week and draft a status update`
- `@monday.com add a task for the Friday demo with a high priority`
- `@Adobe create a square social graphic from this headline and brand colors`
- `@Picsart remove the background on this product photo`
- `@Squarespace draft homepage copy for a freelance photography site`
- `@Webflow outline a landing page structure for a waitlist campaign`
- `@Peloton suggest a 30-minute ride based on my recent classes`
- `@SeatGeek find tickets under $80 for this weekend in my city`
- `@apartments.com search two-bedroom listings near a train stop under my budget`
- `@Experian summarize what I can check in my credit monitoring dashboard`

Be specific. Name the base, board, site, or date range. Vague prompts force Gemini to guess, and you will spend the next turn correcting it.



![Person reviewing project boards and notes on a computer](https://images.unsplash.com/photo-1531403009283-330980b72bd2?auto=format&fit=crop&w=800&q=80)



## Step 3: Confirm actions before they write data

Read the permission and confirmation screens. Creating a Linear issue, editing an Airtable row, or publishing a Squarespace draft is a write. Treat those prompts like sending email: check the target, then approve.

If Gemini proposes an action you did not want, cancel it and narrow the prompt. Disconnect the app immediately if you no longer need it.

Google’s help page states you can connect or disconnect apps on the Apps page at any time. Do that after a one-off task if the service holds financial or identity data, such as Experian.

## Practical workflows for the new list

**Project standup without leaving chat.** Ask `@Linear` for assigned issues, then `@Wispr AI` for notes from the last meeting, then paste a short update you can send to the team.

**Creative pass.** Give `@Adobe` or `@Picsart` a headline, aspect ratio, and reference image. Ask for two variants. Export the winner in the vendor app if Gemini only returns a preview.

**Site outline.** Use `@Webflow` or `@Squarespace` to generate page structure and first-draft copy. Keep brand voice in the prompt. Do not publish from chat until you review in the builder.

**Lifestyle errands.** `@Peloton` for a workout plan, `@SeatGeek` for tickets, `@apartments.com` for a short list of units. These connectors save tab-switching; they do not replace the checkout or application flow on the vendor site.

**Docs and databases.** `@PandaDoc` for a contract outline and `@Airtable` or `@Zoho` for the related record. Confirm which workspace Gemini can see before you mention client names.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/PDMcpthR88U"
    title="How to Use Google Gemini AI (Full Tutorial)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

Kevin Stratvert’s Gemini walkthrough includes a Connected Apps segment and the `@` picker. The UI may differ slightly from the September 2026 wave, but the settings path and mention syntax still match Google’s help docs.

## Limits you should expect

The Apps list is not the same on every device. Android-only connectors do not appear on iOS or the web app. Some connectors work in Gemini Live; many do not.

Rollout is staged. If Adobe or Linear is missing today, check again in a few days and refresh the Apps page. Google did not publish a country-by-country matrix in the 23 September post.

Gemini will not invent credentials. You must already have an account with Airtable, Adobe, Peloton, or the other vendor. Linking grants Gemini access under that login.

Do not paste secrets into chat “so Gemini can log in.” Use the official OAuth or connect screen only.

Work and school admins can restrict connectors. If a toggle is missing on a company account, that is often policy, not a bug.

## Tips that keep the feature useful

Connect two or three apps you use every week. A long list of unused toggles is harder to audit.

Start with read-only prompts: list, summarize, search. Move to create or edit after you trust the mapping.

Name objects the way the vendor names them. “Board ENG-42” beats “the sprint thing.”

Review vendor activity logs when they exist. Linear, Airtable, and Zoho all show who created a record.

Turn Keep Activity back off only after you accept that most third-party connectors will stop on web and iOS.

## Conclusion

The September 2026 wave puts Airtable, Linear, Adobe, Peloton, and ten other services inside Gemini chat. Setup is a settings toggle plus a vendor login. Daily use is an `@` mention and a precise prompt.

Connect only what you will actually call. Confirm writes. Disconnect when the job is done. That keeps the new catalog useful without handing every app a standing invitation.

## Sources

- [New connected apps roll out to Gemini](https://blog.google/innovation-and-ai/products/gemini-app/new-connected-apps-gemini/) — Google Blog, 23 September 2026
- [Use & manage connected apps in Gemini](https://support.google.com/gemini/answer/13695044) — Gemini Apps Help
- [Personal Intelligence: Connecting Gemini to Google apps](https://blog.google/innovation-and-ai/products/gemini-app/personal-intelligence/) — Google Blog
