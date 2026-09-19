---
title: "How to Set Up Gemini Daily Brief for a Morning Priority List"
description: "Turn on Gemini Daily Brief with Personal Intelligence and Memory, then use Top of mind, Looking ahead, Gemini Live, and item feedback from official Google steps."
pubDate: 2026-09-19T17:30:00
tags: ["ai-tools", "gemini", "tutorials"]
heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&h=735&q=80"
---

Most people already have the raw material for a morning briefing: unread mail, calendar blocks, and half-finished Gemini chats. **Daily Brief** is Google’s agent that reads those sources overnight and puts a short, skimmable list in the Gemini app so you can answer “what should I care about today?” before you open Gmail.

Google introduced Daily Brief at I/O 2026 as an out-of-the-box agent. Official help still treats it as a staged rollout: English only, personal Google accounts, and the United States first. This guide follows Google’s product page and Gemini Apps Help so you can turn it on, read the two sections, act on items, and shut it off if the digest is not useful.

![Laptop, notebook, and coffee on a desk at the start of a workday](https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1400&q=80)

## What Daily Brief actually uses

Google’s Daily Brief page is explicit about sources. The digest curates:

- **Gmail**
- **Google Calendar**
- **Your Gemini chats**

It does not scrape every Google product by default. Personal Intelligence can also use other connected apps for broader Gemini personalization, but Daily Brief’s published source list is those three. Inside a brief you can tap **More** on an item and see which source produced it.

Google describes two sections in Gemini Apps Help:

- **Top of mind** — timely, actionable items, mostly from mail, calendar, and recent chats (deadlines, meetings, messages that need a reply).
- **Looking ahead** — longer-term goals with suggested next steps generated from Personal Intelligence.

Some coverage of the mid-2026 app also mentions an **FYI** group for dated items that are not urgent. Treat the two official section names as the ones you should look for first; extra groupings can appear as Google iterates the layout.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/q8B7z84NZUQ" title="Meet Daily Brief: Your new morning AI agent — Google" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Check eligibility before you hunt settings

Official Gemini Apps Help lists these requirements:

- You are **18 or over** and in the **United States**.
- You sign in with a **personal Google Account**. Work, school, and supervised accounts are excluded.
- You can use **Personal Intelligence**: connect Google Workspace (Gmail and Calendar) and turn **Memory** on.
- The feature is **English only** for now.
- Surfaces: Gemini **mobile app**, **gemini.google.com**, and **Gemini Live**.

Google also says it is releasing Daily Brief gradually, so the control can be missing even when the account looks eligible. The product page notes availability varies and remains US-only and English-only at the time of writing.

If you are outside the US, on a Workspace-managed login, or under 18, stop here. There is no supported workaround in the help docs.

## Turn on Personal Intelligence and Memory

Daily Brief is not a standalone toggle that works on an empty Gemini account. Google requires Personal Intelligence first.

### On the web

1. Open [gemini.google.com](https://gemini.google.com) and sign in with your personal account.
2. At the bottom of the sidebar, open **Settings & help**.
3. Choose **Personal Intelligence**.
4. Connect **Google Workspace** so Gemini can read Gmail and Calendar. Accept the permission prompt.
5. Turn **Memory** on so past Gemini chats can inform later briefs.
6. If you see **Daily brief**, switch it on. Help says the feature is designed to run automatically once you are eligible; the same screen is where you turn it off later.

### On the Gemini mobile app

1. Update Gemini from Google Play or the App Store.
2. Tap your profile photo.
3. Open **Personal Intelligence**.
4. Connect Workspace apps and enable Memory, same as on the web.
5. Wait for **Daily brief** to appear in the side navigation. A small unread marker can show when a new brief is ready.

There is no official “generate now” button for the first run. Google generates the digest in the background. Plan on seeing the first full brief the next morning.

![Person reviewing a calendar and inbox on a laptop](https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80)

## Find and use the brief

On a computer:

1. Go to gemini.google.com.
2. In the sidebar, click **Daily brief**.

On a phone, open the same item from the Gemini menu. Google can also send a morning notification; disable it from the account menu under **Notifications** if you only want the in-app list.

On each item you can:

- Tap **More** then **Chat** to ask Gemini about that row. That chat is saved to Gemini Apps Activity.
- Choose **Mark complete** or dismiss the item so later briefs learn what you finished.
- Mark an item incomplete again if you closed it by mistake.
- Open the source popup to confirm whether the line came from mail, calendar, or a prior chat.
- Tap **Helpful** or **Not helpful**. Google says that feedback changes later briefs.

Use Chat when the line is real but incomplete: “Draft a reply to this recruiter” or “Add 30 minutes of travel before the 2 p.m. event.” Use Mark complete when the work is done. Use Not helpful when the model promoted a newsletter you never act on.

## Hear it in Gemini Live

On 26 August 2026 Google documented Daily Brief inside **Gemini Live**. If Live and Daily Brief are both on your account:

1. Start Gemini Live from the app.
2. Say **“What’s my daily brief?”**
3. Listen to the spoken digest of mail and calendar items.
4. Follow up in the same conversation: ask which school emails arrived, or whether anything on the calendar needs a reply.

Google’s Live productivity post also covers hands-free Gmail commands such as “Any new emails?” and starring or archiving messages by voice. Those inbox actions are separate from Daily Brief but sit in the same Live session, so you can hear the brief and then clear two messages without unlocking the phone.

Spark, Google’s longer-running agent for Docs, Sheets, and Drive, is a different product. Google’s August footnote still listed Spark on Google AI Pro or higher. Do not expect Daily Brief to create a multi-day Spark job by itself.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/TZNu9u9TfN4" title="Top 3 AI on Android updates — Google I/O 2026" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Make the list better without extra apps

Daily Brief quality tracks how tidy the source data is.

- Put deadlines on **Calendar** instead of burying them in a thread. Top of mind prefers dated items.
- Star or label mail you actually act on. A quiet inbox with one starred client thread beats 400 promotions.
- Tell Gemini goals in ordinary chats if you want Looking ahead to mention them. The model cannot invent a certification plan you never discussed.
- Check **More** on bad rows and turn off a noisy connected source in Personal Intelligence if one app dominates the list.
- Review Gemini Apps Activity if a Chat from a brief stored more context than you wanted.

Google’s examples on the help page are practical: students tracking applications, parents watching school mail, job seekers watching recruiter threads, and small-business owners surfacing client mail. Those are the jobs the agent is tuned for—not a replacement for a project-management suite.

## Turn it off or wait out a missing control

To disable Daily Brief on the web:

1. Open gemini.google.com.
2. Go to **Settings & help → Personal Intelligence**.
3. Turn off **Daily brief**.

You can leave Memory and Workspace connected if you still want personalized chats. Disconnecting Workspace stops future briefs from reading Gmail and Calendar.

If the sidebar item never appears:

- Confirm the account is personal, not a company Workspace login.
- Confirm the Gemini language is English and the account region is the US.
- Update the mobile app and retry on the web.
- Wait. Google’s help page states the rollout is gradual.

## Conclusion

Daily Brief is useful when your morning problem is triage, not drafting. Connect Gmail and Calendar, turn Memory on, and let Gemini build **Top of mind** and **Looking ahead** overnight. Open the sidebar list, mark finished items, and use Chat only on rows that need a next step. On the go, ask Gemini Live for the spoken version.

Keep the official limits in view: personal US accounts, English, and a staged rollout. If those boxes are checked and the first brief highlights real deadlines instead of newsletters, leave it on. If it does not, the Personal Intelligence screen is also the off switch.

## Sources

- [Gemini Daily Brief](https://gemini.google/overview/daily-brief/) — Google
- [Get started with your daily brief in Gemini Apps](https://support.google.com/gemini/answer/17077455) — Gemini Apps Help
- [Turn your voice into action with new productivity features in Gemini Live](https://blog.google/innovation-and-ai/products/gemini-app/productivity-features-gemini-live/) — Google
- [Connect your Google apps to personalize Gemini](https://support.google.com/gemini/answer/16598406) — Gemini Apps Help
- [Memory in Gemini Apps](https://support.google.com/gemini/answer/16598469) — Gemini Apps Help
- [Meet Daily Brief: Your new morning AI agent](https://www.youtube.com/watch?v=q8B7z84NZUQ) — Google
