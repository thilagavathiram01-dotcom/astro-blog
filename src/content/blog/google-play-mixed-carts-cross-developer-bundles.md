---
title: "Prepare Google Play Mixed Carts and Bundle Offers"
description: "How Google Play mixed carts and cross-developer bundles work, what Early Access means, and how to prepare AI app subscriptions now."
pubDate: 2026-10-06T09:30:00
heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "google", "developer"]
noindex: false
---

Google Play is opening more ways to sell a subscription and a one-time product in one checkout, and to package two subscriptions as a single offer. The September 29, 2026 Android Developers post from Sheenam Mittal, senior product manager for Google Play, groups these tools with team seats and usage-based billing for AI apps.

Most of the new packaging options are in testing or rolling out through an Early Access Program. You cannot assume every Play Console account already has a Mixed Carts or Cross-Developer Bundling switch. You can still map the product catalog, billing library, and decline messaging so a partner rollout does not stall on account setup.

If you already sell seats, start with the [multi-quantity subscription setup](/blog/play-multi-quantity-subscriptions-setup/). This guide covers the checkout and partnership side.

## What Google actually announced

On September 29, 2026, Google described four flexible monetization models for the next generation of Play subscriptions:

- Multi-Quantity Subscription Purchase lets a buyer purchase several subscriptions in one transaction and assign them as seats to teammates or students.
- Usage-Based Billing supports prepaid metered billing, with an automatic top-up when a balance falls below a threshold. Google points to AI generation tools and other variable-cost services.
- Mixed Carts let you sell an auto-renewing base subscription and one-time products in a single API call and one checkout sheet.
- Cross-Developer Bundling lets you sell a hard bundle of two or more complementary subscriptions from your catalog, including a partner app or another app you own.

Google also described retention tools that are separate from packaging: the In-App Messaging API, Dynamic Grace Period, Retention Offers, Plan Change, and Subscription Winback Offers. Many of these are available now or still limited to Early Access partners. Developers who work with a Play partner manager can ask about programs as they open. The subscriptions documentation remains the place to confirm what your account can configure today.

![Checkout counter and payment terminal representing a single Play purchase](https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80)

## Mixed carts: one sheet for a plan and a pack

Until this change, a monthly membership and a starter pack of credits required two checkout flows. Mixed Carts close that gap. Google says you can process an auto-renewing base subscription alongside one-time products in one API call and a unified checkout sheet.

That matters for AI apps that sell a base plan plus a credit pack. A user who wants the plan and a first batch of generation credits no longer has to finish one purchase, return to the app, and start another. Google also says the unified sheet can support targeted discounts when the user buys the subscription and the complementary items together.

Prepare the catalog before the API flag reaches your account:

1. Split benefits into an auto-renewing base plan and one-time products. Do not hide credits inside a subscription if you want to sell them on the same sheet.
2. Give each one-time product a clear Play Console product ID, price, and entitlement on your server.
3. Decide the discount rule in advance. Google describes the discount as something you can offer when the bundle is purchased together. Treat the rule as a product decision, not as a client-side price override.
4. Keep Play Billing Library purchase handling on the server. Acknowledge the subscription token and each one-time purchase token. Grant access only after your backend verifies both.
5. Test the failure case. If the one-time product fails and the subscription succeeds, your entitlement logic must not assume the pack was paid.

Usage-based top-ups are a different model. See the [usage-based billing guide for AI apps](/blog/google-play-usage-based-billing-ai-apps/) if variable compute, not a starter pack, is the real cost.

## Cross-developer bundles: one SKU, two subscriptions

Cross-Developer Bundling is a hard bundle of two or more complementary subscriptions sold from your own catalog. Google’s example is a language-learning monthly membership paired with a partner’s premium travel-guide subscription, offered at a discounted combined rate. You can also bundle apps you already own.

The point is shared acquisition. The buyer completes one purchase. Both products gain a subscriber. Google says the partners share the acquisition benefit and can reach audiences they would not get alone.

What the announcement does not publish is a public Console wizard, revenue-split field, or client code sample. Do not invent those steps in your app. Treat the feature as Early Access until Play documents the SKU type.

A practical partner checklist still holds:

1. Pick one primary catalog. Google says you create and sell the hard bundle in your own catalog.
2. Write the entitlement contract. Each app must know which purchase token unlocks its benefits, and for how long.
3. Agree the discount before you create the SKU. The language-learning example is a combined subscription at a discounted rate, not two full prices added in the client.
4. Plan cancellation. A hard bundle is one offer. Decide what each app does if the buyer cancels the bundle or if one partner sunsets a plan.
5. Keep fraud checks on Play’s side and on yours. Google says Play blocks abuse of promotional offers and billing-cycle manipulation. Your servers should still reject duplicate grants.

![Two people reviewing a shared product plan on a laptop](https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80)

## Retention tools you can use while bundles roll out

Packaging does not fix a failed renewal. Google’s September 29 post pushes several recovery tools that are independent of mixed carts.

The In-App Messaging API is available to all developers. Use it to prompt a user to fix a payment decline inside the app, and to notify them of an upcoming price change. The billing subscriptions guide covers the API. A separate walkthrough of decline prompts is in [in-app messages for Play subscription declines](/blog/play-billing-in-app-messages-declines/).

Dynamic Grace Period uses machine learning and heuristic models to set the grace window after a decline, instead of one fixed length for every user. Play then adjusts the following account-hold period so your total configured recovery window stays intact. Google says this does not require client-side code changes.

Retention Offers let you show a developer-funded incentive, such as a discount, in the Play Store cancellation flow. If a user is not eligible for that offer, you can suggest a Plan Change to a lower-priced tier. Subscription Winback Offers reach lapsed subscribers on the Play Store, including people who uninstalled the app and will not see email or push.

Behind those controls, Play retries failed charges, cycles backup payment methods for opted-in users, and sends reminders during grace and account hold. You do not write that retry engine.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/hcvvo6Sag0Q"
    title="How to understand Play’s expanded billing options and lower fees"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## A prep sequence that does not depend on Early Access

Use this order even if Mixed Carts and Cross-Developer Bundling are not in your Console yet.

1. List every paid benefit: base subscription, seat pack, credit top-up, and partner subscription.
2. Mark which items are auto-renewing and which are one-time. Mixed carts need both types. A hard bundle needs two or more subscriptions.
3. Confirm Play Billing Library and server verification already handle linked purchase tokens on plan changes.
4. Ship In-App Messaging for declines and price changes. That API is called out as available now.
5. Leave grace and account-hold totals as business rules. Dynamic Grace Period is designed to preserve that total without an app update.
6. If you have a Play partner manager, ask about Early Access for mixed carts, usage-based billing, and cross-developer bundles. The blog says interest goes through that channel as programs open.
7. Do not promise a public bundle SKU in store listings until the product exists in your catalog.

## Tips before you price a bundle

Keep the discount on the Play product, not in a client coupon that Play Billing cannot see. Receipt validation should be the source of truth.

For AI apps, separate the base plan from metered usage. A mixed cart fits a membership plus a starter credit pack. Usage-Based Billing fits automatic top-up when the balance drops. Using both without a clear user-facing label will cause support tickets.

Name the partner app in the bundle description. Google’s example only works if the buyer understands they are paying for two subscriptions.

Track involuntary churn separately from voluntary cancels. Grace-period tuning and winback offers solve different losses.

## Conclusion

Mixed carts and cross-developer bundles are Play’s answer to AI apps and partnerships that outgrew a single monthly SKU. Mixed carts put an auto-renewing plan and one-time products on one sheet. Cross-developer bundling puts two or more subscriptions on one offer in your catalog, including a partner product such as a travel guide next to a language app.

Neither feature is a fully documented public Console flow in the September 29 announcement. Early Access is the stated path. What you can ship now is a clean product split, server-side entitlement checks, and In-App Messaging for declines. That work is what makes the new checkout useful on the day your account is included.

## Sources

- Sheenam Mittal, “Driving growth on Google Play: The next era of subscriptions,” Android Developers Blog, September 29, 2026: https://developer.android.com/blog/posts/driving-growth-on-google-play-the-next-era-of-subscriptions
- Google Play Billing subscriptions documentation: https://developer.android.com/google/play/billing/subscriptions
- Android Developers, “How to understand Play’s expanded billing options and lower fees”: https://www.youtube.com/watch?v=hcvvo6Sag0Q
