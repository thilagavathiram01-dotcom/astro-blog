---
title: "How to Enable Gemini API Paid Billing in AI Studio"
description: "Link Cloud Billing, prepay $5, and move a Gemini API project off the Free Tier in Google AI Studio."
pubDate: 2026-09-26T14:30:00
heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "developer", "tutorials", "how-to"]
noindex: false
---

The Gemini API starts you on a Free Tier. That is enough for a first key and a few playground prompts. It is not enough if you need paid models, higher rate limits, or a guarantee that prompts are not used to improve Google products.

Google’s billing docs say you leave the Free Tier by linking a Cloud Billing account and prepaying a minimum of **$5** (or the local equivalent). This guide follows those official steps only. Pair it with the model walkthrough in [How to Call Gemini 3.8 Flash in Google AI Studio](/blog/gemini-3-8-flash-api-guide/) once the project is on a paid plan.

## What the Paid Tier actually changes

New accounts begin on the Free Tier. They can call certain models in the Gemini API and AI Studio up to each model’s free rate limits.

Paid Tiers unlock three things Google documents explicitly:

- Higher rate limits and access to advanced models.
- Prompts and responses that are **not** used to improve Google products (see the paid-service terms).
- A path through higher usage tiers based on cumulative spend and account age.

Tiers, rate limits, and billing caps sit on the **billing account**, not on a single API key. Every key on projects linked to that account shares the same credit pool.

You can still publish up to two full-stack apps from Build mode on the **Google Cloud Starter Tier** without attaching billing. That path is separate from Gemini API Paid Tier usage.



![Laptop, notebook, and card on a desk during a billing setup](https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80)



## Set up billing in Google AI Studio

1. Open the [API keys](https://aistudio.google.com/api-keys) page, the [Projects](https://aistudio.google.com/projects) page, or any **Set up billing** button in AI Studio.
2. New users get a project and API key created by default. If you need another key, choose **Create API key** and attach it to a project.
3. Find the Free Tier project and click **Set up billing** under the Billing Tier column.
4. If you have never created a Google billing account, pick your country, accept the Terms of Service, then enter contact details and a payment method.
5. If you already have billing accounts, pick one or choose **Add new billing account**.
6. Complete the next screen. Google will either require a **$5 minimum prepay**, let you choose Prepay or Postpay, or place you on Postpay until Prepay finishes rolling out (that transition started March 23, 2026).

Setup is done after the prepay or the Postpay choice succeeds.

## Confirm the project is actually paid

Open the [AI Studio Billing](https://aistudio.google.com/billing) page. Paid status is dynamic. The API serves traffic only while the Prepay balance is positive.

On **Projects**, the Billing Tier column shows the current plan. Watch for these labels:

- **Set up billing** — no billing account is attached.
- **Set up Prepay** — a billing account exists but Prepay still needs credits.
- **No credits** — Prepay is required and the balance is empty or the payments account is incomplete.

Click the label and finish the action. Do not assume a green check from yesterday still applies after a long agent run.

Monitor spend under **Dashboard → Usage** at [aistudio.google.com/usage](https://aistudio.google.com/usage).



![Developer reviewing usage charts on a monitor](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80)



## Prepay versus Postpay

**Prepay** is the default for new users. You buy credits first. Usage deducts from that balance in near real time. Unused credits expire after **12 months** and are not refundable, except when you switch the same account to Postpay.

When the Prepay balance hits **$0**, every API key on every project linked to that billing account stops at once. Requests fail with **HTTP 402 Payment Required** until you add credits. Prepay credits pay Gemini API costs only. They do not cover other Google Cloud products.

Buy credits from the Billing page with **Buy credits**. The minimum purchase is **$5**. The maximum prepaid load is **$5,000**.

**Auto-reload** tops the balance when it runs low. Set the payment method, reload amount, and trigger threshold on the Available credits card. Add a **monthly auto-charge limit** so automatic reloads cannot keep firing all month. Manual one-time purchases do not count against that limit.

**Postpay** accrues cost and charges the card at month end, or when you hit the automatic spend cap for your tier. Eligible accounts can choose Postpay during setup. Switching a billing account to Postpay moves every linked project to that cycle.

If you add Prepay onto an existing Postpay Cloud Billing account, finish the confirmation screen and the first credit purchase in one sitting. Canceling after the account is modified but before credits land can interrupt other projects on that account.

## Spend caps and 402 errors

Set a project-level monthly cap on the [Spend](https://aistudio.google.com/spend) page: **Monthly spend cap → Edit spend cap**. You need project editor, owner, or admin on the Cloud project.

Use a cap when several Studio projects share one billing account and you do not want one agent loop to empty the pool. Invoiced (offline) accounts do not get spend caps or Prepay.

A 402 after a working day usually means the Prepay balance hit zero, not that the model ID is wrong. Add credits, then retry. Keep keys in environment variables. Rotate a key if it leaked in a log or a public gist.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/zlDziSQ4JTk"
    title="New and Improved API Key and Project Management in Google AI Studio"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips before you leave Free Tier

- Create the key first, store it, then attach billing. Do not paste the key into a notebook you will publish.
- Use one billing account per team environment (dev versus prod) if you want isolated 402 blast radius.
- Turn on auto-reload only after you set a monthly auto-charge limit.
- Watch thinking tokens on Gemini 3.8 Flash. They bill as output.
- Stay on Free Tier if you only need playground experiments and accept training-use terms.
- Read the refund section: leftover Prepay credits refund only when you switch that account to Postpay. Closing the Cloud Billing account forfeits the rest.

## Conclusion

Paid Gemini API access is a billing-account change, not a new model string. Link Cloud Billing in AI Studio, prepay at least $5 if the wizard requires it, then confirm the Projects column no longer says Free Tier.

Keep a positive Prepay balance or accept Postpay charges. When the balance hits zero, every linked key fails together. Set a project cap and auto-reload limit before you point production traffic at `gemini-3.8-flash`.

## Sources

- [Billing](https://ai.google.dev/gemini-api/docs/billing) — Gemini API / Google AI for Developers
- [Google AI plans](https://ai.google.dev/gemini-api/docs/google-ai-plans) — Gemini API
- [API keys](https://aistudio.google.com/api-keys) — Google AI Studio
- [Projects](https://aistudio.google.com/projects) — Google AI Studio
- [New and Improved API Key and Project Management in Google AI Studio](https://www.youtube.com/watch?v=zlDziSQ4JTk) — Google for Developers
