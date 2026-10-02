---
title: "Google Play Usage-Based Billing for AI Developers"
description: "Google Play is testing usage-based billing, team seats, mixed carts, and winback offers. Here is what Android developers should prepare now."
pubDate: 2026-10-02T06:30:00
heroImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "how-to"]
noindex: false
---

AI apps do not burn the same amount of compute every month. A user who generates a few images is cheap. A user who runs long agent jobs is not. On 29 September 2026, Google Play described a set of subscription tools aimed at that gap, including prepaid usage-based billing that can top up a balance when it falls below a threshold.

Most of these options are in testing or rolling out through an Early Access Program with select partners. They are not a switch you can flip in Play Console today for every app. You can still design products, checkout flows, and recovery paths so you are ready when access opens.

![Person paying with a card at a checkout terminal](https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80)

## What Google announced on 29 September

Sheenam Mittal, senior product manager for Google Play, posted the plan on the Android Developers Blog. Play is expanding subscriptions so developers can sell beyond a single recurring plan and protect lifetime value after the first charge.

Four packaging models sit at the center of the post:

- **Usage-Based Billing** for variable costs, such as AI generation. Users keep a prepaid balance. Play can top that balance up automatically when it drops below a threshold you set.
- **Multi-Quantity Subscription Purchase** so a buyer can purchase several subscriptions in one transaction and assign them as seats to teammates or students.
- **Mixed Carts** so an auto-renewing subscription and one-time products can go through one API call and one checkout sheet.
- **Cross-Developer Bundling** so you can sell a hard bundle of two or more complementary subscriptions from your own catalog, including a partner app.

Google also described retention tools that do not depend on a new price model: in-app messages for failed payments and price changes, a dynamic grace period, cancellation offers, plan changes, and Play Store winback offers.

## How usage-based billing differs from a flat plan

A classic Play subscription charges the same amount each period. That works for a music app or a fixed feature unlock. It fits poorly when your cost follows token use, image generations, or minutes of model time.

Usage-Based Billing, as Google describes it, is prepaid metered billing. The user holds a balance. When that balance falls below a threshold, Play can top it up so the service does not stop mid-task. Google frames this as a way to keep service running while protecting margins on variable compute.

This is separate from the June 2026 fee split. Recurring Play transactions still carry a 10% service fee globally, and a billing fee applies only if you use Google Play's billing system. Usage-based top-ups are a product model on top of that platform, not a new published service-fee rate.

If you already meter API spend in your own backend, keep that ledger. Play's top-up is the payment rail. Your server still has to decide what a unit costs and when to block a request.

## Step 1: Map costs before you pick a SKU

Write down the actions that change your bill. Typical AI units are text tokens, image generations, video seconds, and tool calls to a paid API. Group them into a credit, not into a raw vendor invoice line.

Pick a credit that a user can understand. "100 image credits" is clearer than "0.4 million output tokens." Set the auto top-up threshold above the cost of one typical job so a long request does not fail because the balance hit zero mid-call.

Keep a hard cap in your own backend. Automatic top-up protects continuity. It can also surprise a user who left a job running. Show the threshold, the top-up amount, and a way to turn auto top-up off before you ship the flow.

## Step 2: Design the catalog around seats and carts

Multi-quantity purchases target team and classroom sales. One buyer checks out for several seats, then assigns those seats. If your app is single-user today, add an account model that can hold unused seats. Do not assume the Play purchase token alone is the team roster.

Mixed Carts close an old split. A monthly membership and a starter pack of credits used to need two checkouts. Google says you will be able to sell the auto-renewing base plan and one-time products together, including a discount when the user buys the bundle. Model that starter pack as a one-time product, not as a second subscription.

Cross-developer bundling lets you put two or more subscriptions into one SKU in your catalog. Google's example is a language-learning membership bundled with a partner travel-guide subscription at a combined discount. You still own the SKU. Agree in writing how you split revenue before you create it.

![Analytics dashboard on a laptop screen](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80)

## Step 3: Use tools that are already open

You do not have to wait on Early Access to tighten billing. The In-App Messaging API is available to all developers. Google recommends it for two jobs: ask the user to fix a payment decline inside the app, and tell them about an upcoming price change.

Call it when your app starts and when a purchase state looks unhealthy. A decline message on the home screen beats an email the user never opens. The subscriptions guide covers the API: [Google Play Billing subscriptions](https://developer.android.com/google/play/billing/subscriptions#in-app-messaging).

Dynamic Grace Period is the other recovery change. A fixed grace period forces a trade-off: too short and you lose payers who needed another day, too long and you serve unpaid access. Play will use machine learning and heuristic models to set the grace window per subscriber after a decline. It then shortens or lengthens the following account hold so your total configured recovery window stays the same. Google says this does not need client-side code changes.

## Step 4: Plan the cancel and return paths

Retention Offers let you show a developer-funded incentive, such as a discount, in the Play Store cancellation flow. If a discount does not fit, you can offer a Plan Change to a cheaper tier instead of losing the subscriber.

Subscription Winback Offers target people who already left. Email and push fail when the app is uninstalled. Google says these offers reach lapsed subscribers on the Play Store itself.

Play also retries failed charges, cycles backup payment methods for users who opted in, and sends reminders during grace and account hold. Fraud systems block abuse of promotional offers and billing-cycle tricks. You do not build that layer. You do need clean offer eligibility so a promo does not apply twice.

## Step 5: Ask for Early Access the right way

Google says many of these features are available or rolling out through the Early Access Program. Partners in that program are giving feedback before a wider Play Console release. If you have a Play partner manager, ask them when a program opens. There is no public self-serve form in the 29 September post.

While you wait, read the current subscriptions docs and keep your Billing Library integration current. Realtime developer notifications for subscription state changes still matter. A top-up or seat assignment is useless if your server never hears that the purchase cleared.

If your AI features also call a paid model API, keep that bill separate from Play. A practical walkthrough of Gemini API billing setup is in our guide to [paid Gemini API billing in AI Studio](/blog/gemini-api-paid-billing-ai-studio/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/hcvvo6Sag0Q"
    title="How to understand Play’s expanded billing options and lower fees"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

The Android Developers video above covers the June 2026 split between service fees and billing fees. It is the fee context for any new subscription SKU, not a demo of usage-based top-ups.

## Tips before you change a price

- Tell existing subscribers about a price change in the app, not only in a store listing. The In-App Messaging API is built for that notice.
- Price credits in your own currency unit, then map that unit to a Play product. Do not expose vendor token rates in the paywall.
- Put a monthly spend ceiling next to auto top-up. Continuity is useful. An uncapped loop is not.
- Test decline, grace, hold, and cancel in license-test accounts before you rely on dynamic grace behavior.
- Treat Early Access dates as unpublished. The blog does not give a general-availability day.

## What to do this week

Usage-based billing, team seats, mixed carts, and cross-app bundles are Play's answer to AI and group subscriptions. They are real product plans from 29 September 2026, and most are still limited to early partners.

Ship the parts you control now: a credit ledger, a visible top-up cap, in-app decline messages, and a cancel path that can offer a cheaper plan. When Play opens the new purchase types in your console, the catalog and the server checks should already match.

## Sources

- Sheenam Mittal, "Driving growth on Google Play: The next era of subscriptions," Android Developers Blog, 29 September 2026: https://developer.android.com/blog/posts/driving-growth-on-google-play-the-next-era-of-subscriptions
- Google Play Billing subscriptions, including In-App Messaging: https://developer.android.com/google/play/billing/subscriptions
- Android Developers, "How to understand Play's expanded billing options and lower fees," YouTube, 24 June 2026: https://www.youtube.com/watch?v=hcvvo6Sag0Q
