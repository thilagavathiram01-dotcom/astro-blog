---
title: "How to Use AI Overviews in Gmail Search"
description: "Ask natural-language questions in the Gmail search bar and get AI Overviews from your mail. Setup, prompts, limits, and how to turn it off."
pubDate: 2026-09-26T08:00:00
heroImage: "https://images.unsplash.com/photo-1586281380349-632531bb7ed4?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["tutorials", "google", "productivity", "ai-tools", "gemini"]
noindex: false
---

Gmail search used to reward people who remembered operators. **AI Overviews in Gmail search** flip that: you type a question in the search bar, press Enter, and Gmail can place a short answer above the matching messages.

On 15 September 2026, Google expanded the feature beyond the United States. Paid plans with Gmail set to English can now see Overviews in more countries. This guide follows Gmail Help and the Workspace Updates post so you know what to type, what blocks the card, and how to switch it off.

The search-bar Overview is not the same as the **Ask Gemini** side panel. If you want drafts, confirmed archive actions, or calendar creates, use the panel instead. Start with [How to Use Gemini in Gmail](/blog/gemini-in-gmail/) for that path.



![Person reviewing email on a laptop at a desk](https://images.unsplash.com/photo-1486312338219-ce68d2ad6e4c?auto=format&fit=crop&w=800&q=80)



## What an Overview actually does

Gmail Help describes three jobs for the card that appears above results:

- State a key fact or a short summary drawn from mail that matches the query.
- Combine details that sit in more than one thread.
- Reduce the need to open each message just to piece the answer together.

Google says the model uses your email content for that card. It is not a web search overlay. Blake Barnes, VP of Product for Gmail, put it this way at the January 2026 consumer launch: the model relies on your mail, not the public web, to generate the response.

If the question is vague, the card may not appear. Help says Overviews are optimized for natural language. Switch from a one-word query to a full question when nothing shows up.

## Who can use it in September 2026

The 15 September 2026 Workspace Updates post is the current availability list. Treat older Help pages that still say “US only” as stale for geography; the language rule is still English.

**Personal Google Accounts**

- Google AI Plus, Pro, or Ultra
- Gmail language set to English
- Not available on personal accounts in the EEA (and listed overseas territories), the United Kingdom, Switzerland, or Japan

**Work or school**

- Business Starter, Standard, and Plus
- Enterprise Starter, Standard, and Plus
- Frontline Plus
- Google AI Pro for Education
- AI Expanded Access

Admins get the feature on by default when **Gemini for Workspace in Gmail** is enabled and **Workspace Intelligence access to Gmail** is enabled.

End users still need both smart-feature switches on:

1. Smart features in Gmail, Chat, and Meet
2. Google Workspace smart features

Rollout windows Google published:

- Rapid Release domains: gradual rollout started 3 September 2026 (up to 15 days)
- Scheduled Release domains: full rollout starting 21 September 2026 (1–3 days)
- Personal accounts: gradual rollout started 3 September 2026

The feature can still be missing during that window. Help marks it as a gradual rollout.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/ZK2DjlvBDuo"
    title="Ask your inbox anything with AI Overviews"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Turn the required settings on

Do this on the web. Help documents the Overview flow for a computer browser.

1. Open [mail.google.com](https://mail.google.com/) on the account that holds the mail you want searched.
2. Confirm Gmail’s display language is English.
3. Open **Settings → See all settings → General**.
4. Find **Google Workspace smart features** and open **Manage Workspace smart feature settings**.
5. Leave **Smart features in Google Workspace** on.
6. Confirm the separate **Smart features in Gmail, Chat, and Meet** setting is also on.

Workspace users who still see nothing should ask an admin to check Gemini for Gmail and Workspace Intelligence. Those two admin controls are the gates listed in the September update.

Personal users on a free plan will not get search Overviews. Conversation summaries inside a thread are a different product and can appear without a paid plan; the *question in the search bar* path is the paid one Google described in January and expanded in September.

## Run a search that produces a card

1. Open Gmail on the web.
2. Click the search box at the top.
3. Type a natural-language question or a specific phrase. Do not add operators.
4. Press **Enter**.

The Overview, when it appears, sits above the result list. Open the cited messages before you act on a date, amount, or name.

Help’s example table is the best prompt list because it matches what the product was tuned for.

**Get answers**

- “When is the next meeting with my manager?”
- “Did the customer reply about the commercial sale?”
- “When is my next appointment?”
- “What's the check-in code for my rental?”
- “When is my flight to Hawaii?”

**Summarize information**

- “Summarize my upcoming trip.”
- “Summarize updates for the upcoming launch.”
- “Get outstanding invoices from emails with vendors.”
- “Find the latest Cymbal Team Meeting notes.”

**Extract specific details**

- “Show me my concert tickets.”
- “Track my latest return.”
- “Confirmation number for my flight tomorrow.”
- “Tracking number for the laptop shipment.”

The January consumer examples still work as well: “Who was the plumber that gave me a quote for the bathroom renovation last year?”



![Notebook and printed notes beside a computer](https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80)



## What stops the Overview

**Search operators.** `is:unread`, `from:`, `has:attachment`, and similar tokens disable the card. Help is explicit: if you use operators, you do not get an AI Overview. Run the plain-language question first. Then open the result list and add operators only if you need to filter by hand.

**Wrong surface.** The search box is not Gmail Live and it is not the Gemini side panel. Voice questions belong in Live on mobile. Drafts and inbox actions belong in Ask Gemini.

**Language and region.** English only. Personal accounts in the EEA, UK, Switzerland, and Japan stay excluded per the September list and current Help.

**Smart features off.** Turning off Workspace smart features also turns off other Gemini-in-Gmail tools, including the side panel. That is the documented tradeoff.

**Stale Help vs. the September post.** Some Help mirrors still say “US only.” Follow the 15 September Workspace Updates post for the global English expansion, and follow Help for the operator rule, the example prompts, and the off switch.

## How the answer is built

Help’s explanation is short. Gmail first finds the most relevant emails for the query. The Overview is then written from those messages.

Use the **Good suggestion** or **Bad suggestion** control next to the card when the summary is wrong or incomplete. That feedback is the path Google documents. Do not treat a missing citation as a bug by itself; open the threads under the card and compare.

Your mail stays under the same Gmail security and privacy commitments Help lists for other inbox features. Data-use for training and improvement is controlled from Workspace smart feature settings, not from a separate Overview toggle.

## Turn Overviews off

There is no dedicated “AI Overviews only” switch in the Help article. You turn the parent smart-feature group off.

1. Open Gmail on the web.
2. Click **Settings → See all settings**.
3. On the **General** tab, scroll to **Google Workspace smart features**.
4. Click **Manage Workspace smart feature settings**.
5. Turn off **Smart features in Google Workspace**.
6. Click **Save**.

Expect the Gemini side panel and related Workspace AI controls to disappear with it. If you only wanted to stop search cards, this is a blunt tool. Leave the setting on and ignore the card when you prefer classic results.

## Tips that keep the card honest

- Ask for one fact. “Confirmation number for my flight tomorrow” beats “tell me about travel.”
- Name the person, vendor, or event when you remember it. Overviews synthesize mail; they do not invent a thread that never arrived.
- Skip operators on the first pass.
- Verify money, medical, and legal details in the original message.
- Use Ask Gemini when you need a reply drafted or mail archived. Overviews answer. They do not act.
- If Live voice search is what you want on a phone, that is a different feature with its own plan rules. See the Gmail Live notes in the Gemini-in-Gmail guide linked above.

## Conclusion

Type a full question in the Gmail search box, keep operators out of that first query, and read the messages under the card before you trust a date or a code. The September 2026 expansion made that flow available to more English paid accounts outside the United States. Plan, language, smart features, and admin policy still decide whether the card appears on your account.

Use Overviews to recover a fact. Use the Gemini panel when the next step is a draft or a confirmed inbox change.

## Sources

- [Get an AI Overview in Gmail search](https://support.google.com/mail/answer/16789526) — Gmail Help
- [Gmail Search’s AI Overviews now available globally](https://workspaceupdates.googleblog.com/2026/09/gmail-searchs-ai-overviews-now-available-globally.html) — Google Workspace Updates, 15 September 2026
- [Search faster and smarter with AI Overviews in Gmail search](https://workspaceupdates.googleblog.com/2026/04/search-faster-and-smarter-with-ai-overviews-in-Gmail-search.html) — Google Workspace Updates, 22 April 2026
- [Gmail is entering the Gemini era](https://blog.google/products-and-platforms/products/gmail/gmail-is-entering-the-gemini-era/) — Google Blog, 8 January 2026
- [Ask your inbox anything with AI Overviews](https://www.youtube.com/watch?v=ZK2DjlvBDuo) — Google Workspace on YouTube
