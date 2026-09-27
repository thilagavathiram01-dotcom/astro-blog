---
title: "How to Turn On Gemini Personal Intelligence Settings"
description: "Enable Personal Intelligence in Gemini, connect Gmail, Photos, Search, and YouTube, and control Memory without oversharing."
pubDate: 2026-09-27T12:00:00
heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "productivity", "google"]
noindex: false
---

Personal Intelligence is the Gemini setting that lets the assistant use selected Google apps and past chats when it answers you. It stays off until you flip the switches. This guide follows Google’s official product post and Gemini Apps Help so you can turn it on, pick sources, and shut it down again.

Do not treat it as a blanket dump of your Google Account. You choose each app. Work and school accounts stay out of this path.

## What Personal Intelligence actually does

Google describes two jobs. Gemini can reason across several of your sources at once. It can also pull one specific fact, such as a license plate in Photos or a reservation in Gmail, when you ask for it.

Josh Woodward, who leads the Gemini app, used a minivan tire-shop example in the January 2026 launch post. Gemini suggested tire options after seeing family road-trip photos, then pulled a plate number from Photos and trim details from Gmail. That is the intended pattern: one question, several of *your* sources, a cited answer.

Help also lists what the connection can do in general terms: personalize replies with insights about you and people in your world, make recommendations, and build itineraries from preferences stored in the apps you allowed.



![Person reviewing email and calendar on a laptop](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80)



## Who can turn it on

Google’s original launch limited the beta to Google AI Pro and AI Ultra subscribers in the United States on a personal account. The company said it would expand to more countries and the free tier over time. Product pages still require you to be 18 or over and signed in with a **personal** Google Account.

Workspace business, enterprise, education, and supervised accounts are not eligible. If you only see a work profile in Gemini, switch to the personal Gmail first.

Availability still rolls out. Missing the Personal Intelligence row in Settings usually means your account, country, or language is not in the current wave. Wait rather than hunting for a hidden flag.

## Step 1: Open the setting

On Android or iOS:

1. Open the Gemini app.
2. Open the menu, then Settings (or tap your profile photo).
3. Tap **Personal Intelligence**.
4. Open **Connected Apps**.

On the web, go to [gemini.google.com](https://gemini.google.com), open Settings, then Personal Intelligence.

Google’s launch post lists the same three taps if you never saw a home-screen invitation: Settings → Personal Intelligence → Connected Apps.

If you already connected apps under the older Connected Apps list, starting Personal Intelligence can turn those old links off. You then pick which apps join the new personalization path. That behavior is documented in a footnote on the official blog post.

## Step 2: Connect only the apps you need

Gemini Apps Help lists the Google sources that Personal Intelligence can use. The set has grown since launch. Treat the Help page as the live list.

Common groups:

- **Google Workspace** — Gmail, Calendar, Drive, Docs, Sheets, Slides, Keep, Tasks, Chat, Meet
- **Google Search services** — Search (including AI Mode and Discover), Maps, Shopping, Flights, Hotels, Translate, News
- **YouTube**
- **Google Photos** (eligibility still varies by country)
- **Google Wallet** (Help marks this as US only)
- **Contacts** (Help marks US, English, and an AI Ultra plan for device plus Google Contacts)

Turn on one app, test a prompt, then add the next. Connecting everything on day one makes it harder to see which source produced a bad answer.

Third-party Connected Apps from the September 2026 wave (Airtable, Adobe, Peloton, and the rest) live on a separate list. Set those up with the [September Connected Apps guide](/blog/gemini-connected-apps-september-2026/) after Personal Intelligence is stable.

## Step 3: Decide what Memory does

Personal Intelligence settings also include **Memory** of past Gemini chats. Help documents the Live path as Menu → Settings & help → Personal Intelligence → Connected Apps, then toggle Memory.

Leave Memory off if you share the phone or use Gemini for one-off research you do not want reused. Leave it on if you want follow-up chats to recall a preference you already stated, such as aisle seats or a child’s school calendar.

Temporary chats still skip personalization for that thread. Use them when you need a generic answer with no inbox or photo context.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/va91wTJHFAg"
    title="VP of Gemini Josh Woodward breaks down Personal Intelligence in the Gemini App"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step 4: Ask a question you can verify

Start with a prompt that has a ground-truth answer in one connected app.

Examples that match Google’s own framing:

- “What size tires are on the vehicle in my recent garage photos?”
- “When is the reservation in Gmail for this Saturday?”
- “Which YouTube videos did I save about that hiking trail?”

Gemini is supposed to cite or explain the source. If it does not, ask “Which app did you use for that?” If the citation is wrong, give a thumbs down and correct it in the next message (“Remember, I prefer window seats”).

Do not use the first session for medical, legal, or financial decisions. Google says Gemini aims to avoid proactive assumptions about sensitive topics such as health, and will discuss that data only if you ask.



![Smartphone home screen with productivity apps](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)



## What Google says about training and privacy

Connecting apps is off by default. You can disconnect any app later. Google’s launch post states Gemini does not train directly on your Gmail inbox or Photos library. Training uses limited conversation data after steps that filter or hide personal details.

Help is blunter about the other direction: data from connected apps and your account can be used to personalize Gemini, to act on requests, and to improve Google services, including training generative models. Read that page before you connect Wallet, Contacts, or Photos.

Disconnecting an app stops new lookups. It does not rewind answers already stored in chat history. Delete those chats in Gemini activity if you need them gone.

## Limits you should expect

Google published a paper on methodology and failure modes. The product post already names two that show up in daily use.

**Over-personalization.** The model links unrelated facts. Hundreds of golf photos can look like a hobby when they are only photos of a child’s lesson.

**Timing and relationships.** Breakups, job changes, and old trips linger in mail and photos. Tell Gemini the current fact. Do not assume it dropped the old context the day you did.

Personal Intelligence is also missing from some Gemini surfaces. Help notes gaps such as Gems. A Gem that cannot see Gmail will not suddenly inherit your inbox because you enabled the setting in the main app.

Daily Brief and Spark can use Personal Intelligence after you turn it on, but each feature has its own eligibility. Brief still wants Memory plus Workspace sources in the US on a personal account. Spark can read the same connections and, on some plans, act on them. Confirm those extra gates in Help before you expect a morning digest or an overnight agent run.

## Troubleshooting

**No Personal Intelligence row.** Confirm age 18+, personal account, supported country, and an updated Gemini app. Try the web client. If both lack the row, you are not in the wave.

**Toggle is on but answers ignore Gmail.** Connect Workspace specifically. “Search” alone does not open the inbox.

**Photos answers fail.** Photos support is country-gated. Help still says “if eligible.”

**Contacts never appears.** Help limits that connector to the US, English, and AI Ultra for the device-plus-Contacts bundle.

**Old Connected Apps vanished.** Starting Personal Intelligence can reset prior links. Re-enable the ones you still want.

**Work mail leaked into a personal chat.** Sign out of the work profile in Gemini. Personal Intelligence is not an enterprise connector.

## Tips

Connect Photos only if you are ready for plate numbers, documents on a desk, and family faces to be fair game for a spoken question in public.

Keep Wallet off unless you have a concrete task. Help says the connector can include payment methods, receipts, and linked financial accounts.

Correct errors in the same thread. A thumbs down plus one sentence trains the session faster than starting over.

Use temporary chat when you are drafting something you do not want filed against your identity.

Pair this setting with Daily Brief only after Memory and Workspace both work. Brief is a consumer of Personal Intelligence, not a substitute for it.

## Conclusion

Personal Intelligence is an opt-in map from Gemini to the Google apps you already use. Turn it on from Settings, connect the smallest useful set, test a question you can check, and disconnect anything that feels too close. The official sources below are the eligibility and data lists to re-read when Google adds another app.

## Sources

- [Personal Intelligence: Connecting Gemini to Google apps](https://blog.google/innovation-and-ai/products/gemini-app/personal-intelligence/) — Google, 14 January 2026
- [Personal Intelligence overview](https://gemini.google/overview/personal-intelligence/) — Gemini product page
- [About personalization with Connected Apps](https://support.google.com/gemini/answer/16836988) — Gemini Apps Help
- [Connect your Google apps to personalise your Gemini experience](https://support.google.com/gemini/answer/16598406) — Gemini Apps Help
- [Talk naturally with Gemini Live](https://support.google.com/gemini/answer/15274899) — Gemini Apps Help (Memory and Connected Apps steps)
