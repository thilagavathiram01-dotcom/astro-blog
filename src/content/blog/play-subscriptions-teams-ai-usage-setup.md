---
title: "Set Up Play Subscriptions for Teams and AI Usage"
description: "Prepare Google Play subscriptions for multi-seat purchases, prepaid AI usage billing, mixed carts, and in-app payment recovery."
pubDate: 2026-10-01T18:00:00
heroImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "how-to"]
noindex: false
---

Google Play is expanding how Android apps sell recurring access. On 29 September 2026, Sheenam Mittal, senior product manager for Google Play, outlined models aimed at team seats, prepaid AI usage, and single-checkout bundles. Several of the new packaging options are in an Early Access Program. Others, including the In-App Messaging API, are available to all developers now.

If you ship a productivity, education, or generative AI app, the practical work starts in Play Console and the Play Billing Library, not in a redesign of your paywall. This guide walks through what each model does, what you can configure today, and how to keep failed payments from becoming lost subscribers.

## What Google announced

The 29 September post on the Android Developers Blog groups the changes into flexible packaging and retention tools.

Flexible packaging includes Multi-Quantity Subscription Purchase, Usage-Based Billing, Mixed Carts, and Cross-Developer Bundling. Retention tools include the In-App Messaging API, Dynamic Grace Period, Retention Offers with Plan Change, and Subscription Winback Offers on the Play Store.

Google says many of these capabilities are in active testing with select partners before a wider Play Console rollout. If you have a Play partner manager, that is the route to express interest. Public documentation for current subscription behaviour remains the Play Billing subscriptions guide.

For the seat-and-metered side of the same announcement, see our earlier notes in [Play team usage billing](/blog/play-subscriptions-team-usage-billing/).

![Developer reviewing subscription metrics on a laptop](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80)

## Multi-quantity purchases for teams

Multi-Quantity Subscription Purchase lets a buyer purchase more than one subscription in a single transaction, then assign those seats to team members or students. Google calls out productivity, EdTech, and GenAI apps as the intended users.

Treat this as a catalog and entitlement problem, not only a checkout problem.

1. Model one base plan per person, not one shared login. Play still bills the purchasing account. Your backend must map extra quantity to named seats.
2. Store the purchase token, product ID, base plan ID, and quantity from the Billing Library purchase. Do not infer seat count from a local counter alone.
3. Build an assignment screen that only an admin on the purchasing account can use. Revoke a seat when the subscription state moves to expired, canceled and past the end date, or account hold beyond your grace rules.
4. Confirm the feature is enabled for your package before you ship UI that promises team checkout. The announcement describes the capability as being introduced and tested, not as a switch every developer can flip today.

Until Early Access includes your app, keep a single-seat SKU live. Add the multi-seat path behind a server flag so you do not advertise a checkout Play will reject.

## Usage-based billing for variable AI cost

Rigid monthly plans fit a chat app poorly when one user burns a large image or video budget and another barely opens the app. Usage-Based Billing is prepaid metered billing. Users can top up automatically when the balance falls below a threshold you set. Google frames this as a way to keep service running while protecting margins on variable compute.

A workable setup looks like this:

1. Define the unit you meter. Examples include generated images, transcribed minutes, or output tokens from your own backend. Do not expose raw model cost to users unless that is the product.
2. Keep a prepaid balance on your server. Play records the top-up purchase. Your server records consumption.
3. Set the threshold and top-up amount in the product configuration once the program is available to you. The blog describes automatic top-up below a set threshold. It does not publish the Console field names in the announcement, so follow the partner docs you receive in Early Access.
4. Pause generation when the balance hits zero and the top-up fails. Show the In-App Messaging flow if the failure is a payment decline, covered below.
5. Reconcile Real-time developer notifications with your ledger so a refund or revocation reduces balance the same day.

If you also call Gemini from Firebase or the Gemini API, price the top-up against your worst-case token cost, not the average session. A related walkthrough of model access is in [Gemini 3.8 Flash API guide](/blog/gemini-3-8-flash-api-guide/).

## Mixed carts and partner bundles

Historically, an auto-renewing subscription and a one-time product needed two checkouts. Mixed Carts lets you process an auto-renewing base subscription and one-time products in a single API call and one checkout sheet. Google also notes you can offer a discount when the user buys the subscription and complementary items together.

Cross-Developer Bundling is different. You create a hard bundle of two or more complementary subscriptions in your own catalog. The example in the post is a language-learning membership bundled with a partner travel-guide subscription at a combined, discounted rate. You can also bundle across apps you own.

Practical sequence:

1. List the one-time product and the subscription as separate SKUs first. Confirm each purchases alone.
2. Add the mixed-cart call only after your Billing Library version supports the combined flow documented for your early-access build.
3. For a partner bundle, agree the split, the cancellation rules, and who owns support before you create the SKU. A hard bundle is one purchase. Partial cancellation needs a written policy.
4. Show the bundle price and the standalone prices on the same screen so the discount is explicit.

![Person paying on a phone at a checkout counter](https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80)

## Fix declines inside the app

The In-App Messaging API is available to all developers now. Google recommends it for two jobs: prompt the user to fix a payment decline, and notify them of an upcoming price change. Official docs live under Play Billing subscriptions, in the in-app messaging section.

Add it in four steps:

1. Integrate a current Play Billing Library and connect to BillingClient on app start.
2. After the connection is ready, call the in-app messaging API. Google shows the message when the account is in a state that needs action. Do not build your own decline dialog that duplicates the Play sheet.
3. Handle the result. If the user fixes the payment method, refresh purchases and unlock content. If they dismiss it, leave access rules to subscription state: grace period, account hold, or expired.
4. Trigger the check on a natural screen, such as home or the feature gate, not on every fragment resume. Price-increase prompts are rate-limited by Play.

Dynamic Grace Period uses machine learning and heuristic models to set the recovery window per subscriber after a decline. Play then shortens or lengthens the following account-hold period so your total configured recovery window stays the same. Google says this does not require client-side code changes.

## Keep and win back subscribers

Retention Offers place a developer-funded incentive, such as a discount, in the Play Store cancellation flow. If the user is not eligible for that offer, you can suggest a Plan Change to a lower-priced tier.

Subscription Winback Offers target lapsed subscribers on the Play Store itself. That matters when the user has uninstalled the app and will not see your push or email.

Play also retries failed payments, cycles backup payment methods for opted-in users, and sends reminders during grace period and account hold. Fraud systems block abuse of promotional offers. You do not write that code. You do configure offers, base plans, and grace or hold lengths in Play Console.

## Tips before you ship

- Mark early-access features as partner-only in your roadmap. Shipping UI for Multi-Quantity or Usage-Based Billing before your package is enrolled creates failed checkouts.
- Use one purchase token as the source of truth. Seat assignment and prepaid balance are projections of that token plus Real-time developer notifications.
- Link to the Play subscriptions center from settings so users can cancel or change plans without emailing support. The subscriptions guide documents the deep link for non-expired subscriptions.
- Test price-change and decline messaging on a license-tester account before a live price edit.
- Read the fee split separately from these product models. Service fees and billing fees changed earlier in 2026 for the US, UK, and EEA. The Android Developers video below covers that structure.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/hcvvo6Sag0Q"
    title="How to understand Play’s expanded billing options and lower fees"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Play is moving subscriptions past a single auto-renewing plan. Team quantity, prepaid top-ups, mixed carts, and partner bundles are the packaging layer. In-app messaging, dynamic grace periods, cancellation offers, and Play Store winback are the retention layer.

Ship the retention pieces first. The In-App Messaging API is generally available, and Dynamic Grace Period is designed to need no client changes. Hold team checkout and metered top-up behind enrollment in the Early Access Program, then wire entitlements to purchase tokens so a seat or a balance cannot drift from what Play actually billed.

## Sources

- Android Developers Blog, “Driving growth on Google Play: The next era of subscriptions,” 29 September 2026: https://android-developers.googleblog.com/2026/09/unlocking-Google-play-subscription-growth.html
- Play Billing subscriptions, including in-app messaging: https://developer.android.com/google/play/billing/subscriptions
- Android Developers, “How to understand Play’s expanded billing options and lower fees”: https://www.youtube.com/watch?v=hcvvo6Sag0Q
