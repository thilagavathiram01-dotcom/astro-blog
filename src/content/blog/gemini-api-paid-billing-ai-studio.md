---
title: "How to Enable Gemini API Paid Billing in AI Studio"
description: "Link a billing account in Google AI Studio, prepay the $5 minimum, set auto-reload, and keep Gemini API keys serving paid-tier requests."
pubDate: 2026-09-26T09:00:00
heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["developer", "gemini", "tutorials", "ai-tools"]
noindex: false
---

Free-tier Gemini API keys are fine for a first prototype. They hit rate limits, block some models, and can use prompts to improve Google products. When you need higher limits or paid-tier privacy terms, Google’s official path is to link Cloud Billing in [Google AI Studio](https://aistudio.google.com/) and load a **minimum of $5** in prepay credits.

This walkthrough follows the [Gemini API billing docs](https://ai.google.dev/gemini-api/docs/billing) last updated 20 September 2026. It covers setup, how to confirm the project is paid, auto-reload, spend caps, and the errors you see when the balance hits zero.

## What paid billing actually changes

New AI Studio accounts start on the **Free Tier**. That tier can call certain models up to the published free [rate limits](https://aistudio.google.com/rate-limit).

Linking a billing account and completing prepay moves the project to a **Paid Tier**. Official reasons to do that:

- Higher rate limits
- Access to advanced models that are not on the free list
- Prompts and responses on paid services are **not** used to improve Google products, per the billing page’s note on enterprise-grade data privacy and the Terms of Service

Tiers then rise automatically from cumulative spend and account age. Limits and spend caps sit on the **Cloud Billing account**, not on a single API key.

AI Studio’s playground can stay free. Billing applies when you use a **paid API key** against the Gemini API.

## Before you click Set up billing

You need:

- A Google account that can open [AI Studio](https://aistudio.google.com/)
- A payment method Google Cloud accepts in your country
- At least **$5** (or the local equivalent) ready to prepay

New users get a default project and API key when they sign in. You can also import an existing Google Cloud project from the [Projects](https://aistudio.google.com/projects) page.

Do not paste API keys into public repos. Create a key you will store in an environment variable after billing is live.

## Step-by-step: attach billing and prepay $5

Google’s documented flow stays inside AI Studio. You do not need the old Cloud Console wizard for the first link.

1. Open the [API keys](https://aistudio.google.com/api-keys) page, the [Projects](https://aistudio.google.com/projects) page, or any **Set up billing** button in AI Studio.
2. If you need a key, click **Create API key** and finish the dialog so a key-project pair appears in the table.
3. Find the Free Tier project you want to upgrade. Under **Billing Tier**, click **Set up billing**.
4. First-time Cloud Billing users pick a country, accept the Terms of Service, then enter contact details and a payment method.
5. Users who already have Cloud Billing choose an existing account or click **Add new billing account**.
6. Finish the payment step. New accounts are usually asked to **prepay a minimum of $5** and land on the Prepay plan. Some accounts still see a Prepay vs Postpay choice, or a temporary Postpay assignment while the Prepay system finishes rolling out (docs date that transition from 23 March 2026).

When the dialog closes, setup is complete. Paid-tier status is not instant on every account. Check the project row again before you point production traffic at the key.



![Developer reviewing usage charts on a laptop](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80)



<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/mphShv2MJcY"
    title="Google AI Studio: Account setup, rate limits and usage tracking"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Confirm the project is actually paid

Open the [AI Studio Billing](https://aistudio.google.com/billing) page. Paid-tier serving requires a **positive Prepay credit balance** when the account is on Prepay. History can put you in a higher usage tier and still reject requests if the balance is $0.

On [Projects](https://aistudio.google.com/projects), read the **Billing Tier** and **Status** columns:

- **Set up billing** — no billing account on the project
- **Set up Prepay** — billing is linked, but Prepay still needs credits
- **No credits** — Prepay is required and the balance is empty or the payments account is missing

Click the message to finish the missing step. Then open **Dashboard → Usage** at [aistudio.google.com/usage](https://aistudio.google.com/usage) and send one cheap request so you can see traffic land on the paid project.

Consumer **Google AI Pro** or **Ultra** plans for the Gemini app are a different product. They raise AI Studio prototyping quotas in some cases, but they do not replace Cloud Billing for Gemini API keys. See Google’s [Google AI plans](https://ai.google.dev/gemini-api/docs/google-ai-plans) page for that split.

## Prepay vs Postpay

**Prepay** is the default for new Gemini API accounts. You buy credits first. Usage is deducted in near real time. Unused credits expire after **12 months** and are non-refundable, except when you switch the account to Postpay. Credits pay Gemini API usage only. They do not cover other Google Cloud products.

When the Prepay balance hits **$0**, every API key on every project tied to that billing account stops at once. Calls return **HTTP 402 Payment Required** until you add credits.

**Postpay** accrues cost and charges the card at month end, or when you hit the tier’s automatic spend cap. Eligible accounts can pick Postpay during first-time setup. Switching a billing account to Postpay moves every linked project to that cycle.

If you add Prepay onto an existing Postpay Cloud Billing account, read the confirmation screen. Google warns that canceling after the account state changes, but before you finish the first prepayment, can interrupt other projects on that account.

## Buy credits and turn on auto-reload

1. Go to [AI Studio Billing](https://aistudio.google.com/billing).
2. Click **Buy credits**.
3. Pay at least **$5**. The documented maximum single prepay load is **$5,000**.

Auto-reload is optional and is the control that stops 402 errors at 2 a.m.

On the **Available credits** card, click **Setup auto-reload** or **Manage auto-reload**. Set the payment method, reload amount, and the balance that triggers a top-up.

Then set a **monthly auto-charge limit**:

1. Open **Manage auto-reload**.
2. Expand **Monthly Limit**.
3. Enter the maximum automatic reload total for one billing cycle.
4. Save.

When automatic reloads hit that cap, auto-reload turns off until the next month. Manual **Buy credits** purchases do not count against the cap.



![Close-up of a credit card next to a notebook used for project notes](https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80)



## Cap spend per project

The API supports monthly spend caps at the billing-account tier and per project. Invoiced (offline) accounts do not get these controls.

Project editors, owners, or admins can set a project cap in AI Studio on the [Spend](https://aistudio.google.com/spend) page: **Monthly spend cap → Edit spend cap**. Use this when several apps share one billing account and you do not want a single key to drain the shared limit.

## Switch an old Postpay account to Prepay

Google is moving Gemini API developer accounts from Postpay to Prepay. Other Cloud services on the same billing account stay on Postpay. Free-tier-only accounts can ignore the notice.

1. Open [AI Studio Billing](https://aistudio.google.com/billing).
2. Choose **Switch to Prepay**.
3. Buy at least $5 in credits.
4. Turn on auto-reload before you ship traffic.

If you later switch back to Postpay and you are eligible, remaining prepay credit is refunded to the original payment method. Closing the Cloud Billing account for any other reason **forfeits** leftover credits.

## Tips that keep keys alive

- Treat **No credits** as an outage, not a warning. Add funds before the next deploy.
- Keep a second project on Free Tier for experiments so a runaway loop cannot empty production credits.
- Watch Usage by project and model after you enable a new feature such as image or video generation. Those calls cost more than short Flash completions.
- If you also connect custom MCP servers to the Gemini app, keep that consumer setup separate from API billing. The app path is documented in [Connect custom MCP apps to Gemini](/blog/gemini-custom-mcp-apps-setup/).
- Rotate keys if a key ever lands in a screenshot or chat log. Billing stays on the project; the leaked key should not.

## Conclusion

Paid Gemini API access is a billing-account problem, not a new SDK. Link Cloud Billing in AI Studio, load the $5 prepay floor, confirm a positive balance, then add auto-reload and a project spend cap. After that, monitor Usage and treat HTTP 402 as an empty wallet, not a model outage.

## Sources

- [Billing — Gemini API](https://ai.google.dev/gemini-api/docs/billing)
- [Google AI plans — Gemini API](https://ai.google.dev/gemini-api/docs/google-ai-plans)
- [AI Studio Projects](https://aistudio.google.com/projects)
- [AI Studio Billing](https://aistudio.google.com/billing)
- [AI Studio Usage dashboard](https://aistudio.google.com/usage)
- [Google AI Studio: Account setup, rate limits & usage tracking (YouTube)](https://www.youtube.com/watch?v=mphShv2MJcY)
