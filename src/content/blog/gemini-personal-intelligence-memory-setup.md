---
title: "How to Set Up Gemini Memory and Personal Intelligence"
description: "Turn on Gemini Memory and Personal Intelligence, connect Gmail and Photos, correct saved facts, and disable personalization per chat."
pubDate: 2026-09-27T08:00:00
heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "how-to", "productivity", "google", "ai"]
noindex: false
---

Gemini answers generic questions well. It answers *your* questions when Memory and Personal Intelligence are on and the right apps are connected.

Google stores those controls in one place: **Personal Intelligence**. Memory uses past Gemini chats. Connected Apps add Gmail, Photos, Search, YouTube, and Workspace sources you approve. Daily Brief, Autofill, and many Live prompts depend on this stack. This guide follows Gemini Apps Help and Google’s product pages so you can turn it on, check what Gemini used, and shut pieces off.

## What the two switches actually do

**Memory** lets Gemini learn from past chats so a new thread can still know your project name, travel dates, or writing style. Official help says Gemini may then suggest next steps for a project you already discussed, offer to plan a trip you mentioned, or ask if you want a product comparison you started earlier.

**Personal Intelligence / Connected Apps** lets Gemini pull facts from Google products you link. Google’s product page lists Gmail, Photos, Search, and YouTube as the core set. Workspace (Gmail and Calendar) is required if you want features such as [Daily Brief](/blog/gemini-daily-brief-setup/).

These are not the same as custom **Instructions for Gemini**. Instructions are rules you type once (“start with a short summary”). Memory is inferred from chats. Connected Apps are live lookups in products you enable.

Google’s help page is also clear about where Memory does *not* apply yet: some surfaces such as Gems, and Live chats, may not use Memory the same way. In a text chat you can still ask Gemini to reference a past Live conversation.

![Person working at a laptop with notes and a phone](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Check eligibility first

Gemini Apps Help for Memory requires all of the following:

- You are **18 or over**.
- You use a **personal Google Account**. Work, school, and supervised accounts are excluded.
- **Keep Activity** (Gemini Apps Activity) is on. Memory cannot run if activity is paused.

Surfaces listed for Memory: the Gemini mobile app, [gemini.google.com](https://gemini.google.com), Gemini in Chrome where that product is available, and Gemini on a supported smartwatch.

Google’s Personal Intelligence overview currently describes a beta that rolls out to eligible users globally, with exclusions that include the European Economic Area, Switzerland, the United Kingdom, and Nigeria. Requirements on that page: age 18+, personal accounts only, Web / Android / iOS once enabled, and every model in the Gemini picker.

If the Personal Intelligence row is missing, you are usually on a managed Workspace login, under 18, in an excluded region, or still waiting on a staged rollout. There is no supported bypass in the help docs.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/va91wTJHFAg"
    title="VP of Gemini Josh Woodward breaks down Personal Intelligence in the Gemini App"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Turn Memory on

### On the web

1. Open [gemini.google.com](https://gemini.google.com) and sign in with your personal account.
2. Open **Settings & help**.
3. Choose **Personal Intelligence**.
4. Turn **Memory** on.

### On Android or iOS

1. Update the Gemini app from Play Store or the App Store.
2. Tap your profile photo.
3. Open **Personal Intelligence** (some builds nest this under Settings).
4. Turn **Memory** on.

Confirm Gemini Apps Activity is not paused at [myactivity.google.com/product/gemini](https://myactivity.google.com/product/gemini). If Activity is off, the Memory toggle can sit there and still have nothing to learn from.

## Connect only the apps you need

Google’s launch post and help article both treat connections as **off by default**. You pick each source.

On the web:

1. Go to **Settings & help → Personal Intelligence → Connected Apps**.
2. Turn on the sources you actually want Gemini to read. Official lists include Contacts, Google Photos (when available), Google Workspace, Search services, and YouTube.
3. Accept each permission prompt. Do not skip the scopes screen.

On the phone, the same page lives under **Personal Intelligence → Connected apps**.

Start small. Workspace is enough for mail and calendar questions. Photos is useful when you ask about objects, plates, or rooms that already exist in your library. YouTube and Search add watch and query context that many people do not want mixed into work drafts. You can add more later.

If you previously linked older “extensions,” Google’s Personal Intelligence footnote says starting the new flow can turn those old links off until you choose which apps join Personal Intelligence.

![Calendar, inbox, and photos on a desk](https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80)

## Confirm what Gemini used

Google tells you to ask, in the current chat: **“Did you use any info from past chats?”** Use that after any answer that feels oddly specific.

Personal Intelligence is also supposed to cite or explain connected sources when it pulls from mail or photos. If it does not, ask which source it used. Josh Woodward’s launch post uses the same rule: verify the citation, then correct the model in the same thread (“Remember, I prefer window seats”).

To test a fresh connection without polluting an old thread:

1. Start a **new chat**.
2. Ask one fact that exists only in the app you just linked (a recent flight confirmation in Gmail, a labeled album in Photos).
3. Read the source line. If it is wrong, give a thumbs down and correct it in text.

Temporary chats skip personalization for that session. On the web you can also open **Tools** in the composer and turn **Personal Intelligence** off for the current chat. Help says Gemini still uses earlier messages *inside that same chat*, and it remembers the off setting if you leave and come back. A brand-new chat turns Personal Intelligence back on by default.

## Fix or delete what Gemini stored

**Correct a fact.** Keep Memory on, then tell Gemini the correction in chat. Help does not promise instant global rewrites, but this is the documented path.

**Delete a remembered chat fact.** Remove the chats that contain it from Gemini Apps Activity. There can be a short delay before personalization stops using that thread.

**Delete a fact that came from a connected app.** Help requires both steps:

1. Delete the related chats from Activity or Recent.
2. Disconnect the app that still holds the fact.

One step is not enough. If you only disconnect Photos, Gemini can still quote a plate number that already appeared in a chat. If you only delete chats, Gemini can look the plate up in Photos again.

Edits inside Gmail or Photos can take **days** to show up in Gemini. Do not assume a deleted email vanishes from answers the same hour.

## Privacy limits Google actually published

Connecting apps is optional and reversible. Google states Gemini does not train directly on your Gmail inbox or Photos library. Training uses limited signals such as prompts and model replies, with steps to filter or hide personal data from those conversation traces.

The company also documents guardrails: Gemini aims not to make proactive guesses about sensitive topics such as health, but it will talk about that data if you ask. Over-personalization is a known beta failure mode. Woodward’s example: hundreds of golf-course photos can look like a hobby when the real reason is a child’s tournament. Correct it in chat and use thumbs down.

If you share a device, do not leave Memory plus Photos plus Gmail on an unlocked profile. Disconnect the sources you would not want a roommate to query.

## What this unlocks next

Once Memory and Workspace are on, Daily Brief can build a morning list from Gmail, Calendar, and chats. That flow is separate and still region-gated; use the [Daily Brief setup guide](/blog/gemini-daily-brief-setup/) after this page works.

The same Personal Intelligence page is where later Connected Apps (project tools, design apps, lifestyle partners) appear. Turn those on only when you will mention them with `@` or you want Gemini to reach them without a prompt.

If a feature such as Autofill or a Live brief still looks generic, come back here first. Missing Memory or paused Activity is the usual cause, not a broken model picker.

## Conclusion

Treat Personal Intelligence as a permission panel, not a personality pack. Turn Memory on only if Gemini Apps Activity can stay on. Connect the smallest set of apps that match the questions you actually ask. Cite-check answers, correct mistakes in chat, and use per-chat off or temporary chats when you do not want context.

When the citations match your mail and photos, leave the switches on. When they do not, the same Personal Intelligence screen is the off switch.

## Sources

- [Personal Intelligence](https://gemini.google/overview/personal-intelligence/) — Gemini
- [Personal Intelligence: Connecting Gemini to Google apps](https://blog.google/innovation-and-ai/products/gemini-app/personal-intelligence/) — Google
- [Get personalization with memory of your past Gemini chats](https://support.google.com/gemini/answer/16598469) — Gemini Apps Help
- [Connect your Google apps to personalize your Gemini experience](https://support.google.com/gemini/answer/16598406) — Gemini Apps Help
- [Get started with your daily brief in Gemini Apps](https://support.google.com/gemini/answer/17077455) — Gemini Apps Help
- [VP of Gemini Josh Woodward breaks down Personal Intelligence](https://www.youtube.com/watch?v=va91wTJHFAg) — Google
