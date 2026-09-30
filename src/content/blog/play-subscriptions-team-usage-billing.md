---
title: "How to Prepare Play Subscriptions for Team and Usage Billing"
description: "Prepare Google Play subscriptions for multi-quantity seats, usage-based top-ups, mixed carts, and in-app payment recovery."
pubDate: 2026-09-30T16:30:00
heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "how-to", "google"]
noindex: false
---

Google Play is changing how subscriptions sell seats, credits, and add-ons. The 29 September 2026 Android Developers post names four packaging models and a set of retention tools that already live in Play Billing.

Some of the new models are in Early Access. Others, such as the In-App Messaging API, are available to every developer today. This guide separates what you can ship now from what you should design for before Console toggles appear.

Treat the post as a product map, not a finished SDK changelog. Do not invent purchase parameters for Multi-Quantity Subscription Purchase until Play publishes Billing Library fields for it.

## What Google announced on 29 September

Sheenam Mittal’s post, *Driving growth on Google Play: The next era of subscriptions*, groups the work into sell-side models and keep-side tools.

**Sell-side models Google is testing or rolling out:**

- **Multi-Quantity Subscription Purchase** — one checkout buys several seats for a team, class, or family.
- **Usage-Based Billing** — prepaid metered balance that can auto top up when it drops below a threshold.
- **Mixed Carts** — one checkout for an auto-renewing subscription plus one-time products.
- **Cross-Developer Bundling** — a hard bundle of two or more complementary subscriptions in one SKU.

**Keep-side tools already documented or live:**

- **In-App Messaging API** — payment decline and price-change prompts inside the app.
- **Dynamic Grace Period** — Play picks a recovery window after a failed charge, then adjusts account hold so the total window stays the same.
- **Retention Offers and Plan Change** — discount or cheaper tier in the Play Store cancel flow.
- **Native Winback Offers** — lapsed-user offers on the Play Store listing, not only in email.

Google says many of the new models sit in Early Access with partner managers. If you lack a partner manager, build on public Play Billing APIs and keep product IDs ready for seat packs and credit packs.



![Laptop and notebook on a desk during a billing planning session](https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80)



## What you can ship today

Start with the public subscription model. Play still sells a **subscription product** with **base plans** and **offers**. One purchase can also carry **subscription add-ons** if every item shares the same billing period.

Official docs for subscription with add-ons list these limits:

- Auto-renewing base plans only.
- Same recurring period on every item.
- Maximum of 50 items in one add-on purchase.
- Not available in South Korea.

That is the closest public cousin to Mixed Carts and Cross-Developer Bundling. Mixed Carts, as described on 29 September, also lets you attach **one-time products** to the same sheet. Add-ons today only combine subscriptions. Design your catalog so a monthly Pro plan, a monthly seat add-on, and a credit pack are separate products you can compose later.

If your app already exposes actions to Gemini or other agents, keep billing out of those tools. Entitlement checks belong on your backend. For agent-facing surfaces, follow [How to Prepare Your Android App for AppFunctions Agents](/blog/android-appfunctions-agents/) and never let an agent call `launchBillingFlow`.

## Step 1: Split the catalog into plan, seat, and meter

Do this in Play Console before you write new Kotlin.

1. Keep one **base subscription** that grants the product itself (Pro, Classroom, Studio).
2. Add a **seat or child entitlement** as a second subscription product if you already sell teams. Until Multi-Quantity ships, a second product plus add-ons is the documented path.
3. Add a **consumable one-time product** for credits, tokens, or generation packs. This is the piece Usage-Based Billing will later top up automatically.
4. Name SKUs so a future mixed cart is obvious: `sub_pro_monthly`, `sub_seat_monthly`, `otp_credits_100`.

Do not hide team seats inside a single “family” SKU with no quantity field. When Multi-Quantity Subscription Purchase reaches your account, you will want a product that already means “one seat.”

For consumables, enable multi-quantity on the Play Console product if users already buy stacks of credits. That flag is the older consumable feature. It is not the new subscription seat purchase. Grant `purchase.quantity` on the backend or users who buy five packs will receive one.

## Step 2: Wire In-App Messaging for failed payments

Google’s September post tells every developer to adopt the In-App Messaging API. The subscription guide documents it under in-app messaging.

Use it for two events:

- The user must fix a declined card.
- A price change needs an in-app notice.

Typical flow:

1. Connect `BillingClient` as you already do for purchases.
2. Call the in-app messages API when the activity resumes and the user is in a recoverable state.
3. Show Play’s sheet. Do not draw your own “update card” webview.
4. Refresh entitlements after the sheet closes. A successful fix should move the subscription out of grace or account hold.

Pair this with Real-time developer notifications. Handle `SUBSCRIPTION_IN_GRACE_PERIOD`, `SUBSCRIPTION_ON_HOLD`, and `SUBSCRIPTION_RECOVERED` on the server. Dynamic Grace Period will change how long grace lasts per user. Your client should not hard-code “seven days then lock.”

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/fwLiTPtPHjw"
    title="What’s new in Google Play"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step 3: Design Usage-Based Billing without a fake meter

Usage-Based Billing is prepaid metered billing with auto top-up. Google names AI generation tools as the example. Until the Console form exists in your account, implement the same economics with products you already have.

A safe interim model:

- The subscription grants a monthly allowance or a lower unit price.
- A consumable pack adds prepaid units.
- Your server decrements units and emails the user when the balance crosses a threshold you choose.
- When Play ships auto top-up, replace the email with Play’s threshold purchase.

Do not debit a card from your own backend for Play users in markets where Play Billing is required. Keep the charge on Play products.

Record usage on the server with idempotent keys. A retry of “generate image #4821” must not bill twice when the client reconnects.



![Person reviewing charts and receipts on a tablet](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80)



## Step 4: Prepare Mixed Carts and partner bundles

Mixed Carts need two product types in one `BillingFlowParams` list: an auto-renewing subscription and one or more one-time products. Cross-Developer Bundling needs a catalog SKU that points at another developer’s subscription as well as yours.

Until those APIs are public in your Play Billing Library version:

- Keep subscription and OTP product IDs stable.
- Price the bundle in a spreadsheet so the later Console bundle matches what support already quotes.
- If you sell two of your own apps, put both subscriptions in the same developer account first. Cross-account bundles will need Play’s partner flow.

The language-learning plus travel-guide example in the official post is a hard bundle: one purchase, two entitlements, one discounted price. Soft “also try this app” deep links are not the same feature.

## Step 5: Put cancel and winback work in Play, not only in email

Retention Offers and Plan Change appear in the Play Store cancellation flow. Native Winback Offers appear on the Store for lapsed subscribers, including people who uninstalled the app.

Configure offers in Play Console against existing base plans. Fund the discount yourself. Play will not invent a 50 percent coupon.

On the client:

- Deep link to Play subscription management when the user taps Cancel inside your app.
- Do not block the system cancel page with a custom wall that hides Play’s offer.
- After a plan change, read the new product ID from the purchase token. Entitlement must follow the cheaper tier immediately.

Winback copy belongs on the Store listing and in the offer. Push notifications still help, but they miss users who deleted the app. That is the gap the September post calls out.

## Tips before you join Early Access

**Ask for EAP only when the catalog is clean.** Partner managers will not fix duplicate SKUs for you.

**Keep recovery windows in Console, not in code.** Dynamic Grace Period changes the unpaid window per user and then shortens or lengthens account hold so the total stays what you configured.

**Test quantity on consumables now.** If `Purchase.getQuantity()` is ignored, seat and credit packs will fail the first week Multi-Quantity or mixed carts go live.

**Do not promise team admin in the Play sheet.** Play will sell seats. Your app still has to invite members, revoke access, and handle leftover seats after a refund.

**Watch South Korea and period mismatch.** Add-ons already exclude KR and mixed periods. Assume new bundle types will keep similar constraints until docs say otherwise.

## Conclusion

Play is moving subscriptions from one user, one price, one checkout toward seats, meters, and mixed baskets. The 29 September announcement is the map. The public Billing Library is still the road.

Ship In-App Messaging and a three-SKU catalog this week. Grant consumable quantity correctly. Hold team admin on your server. When Multi-Quantity Subscription Purchase, Usage-Based Billing, Mixed Carts, or Cross-Developer Bundling appear in your Console, you will attach them to products that already mean something.

## Sources

- [Driving growth on Google Play: The next era of subscriptions](https://android-developers.googleblog.com/2026/09/unlocking-Google-play-subscription-growth.html) — Android Developers Blog, 29 September 2026
- [About subscriptions](https://developer.android.com/google/play/billing/subscriptions) — Android Developers
- [Subscription with add-ons](https://developer.android.com/google/play/billing/subscription-with-addons) — Android Developers
- [Google Play adding Usage-Based Billing subscriptions](https://9to5google.com/2026/09/29/google-play-usage-subscriptions/) — 9to5Google
- [What’s new in Google Play](https://www.youtube.com/watch?v=fwLiTPtPHjw) — Android Developers, Google I/O 2026
