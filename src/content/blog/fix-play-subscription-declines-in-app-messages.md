---
title: "Fix Play Subscription Declines With In-App Messages"
description: "Use Google Play's In-App Messaging API to recover declined subscriptions, confirm price changes, and prepare for new billing models."
pubDate: 2026-10-06T09:00:00
heroImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "how-to", "tutorials", "google"]
noindex: false
---

A failed card renewal is one of the quietest ways a paid Android app loses revenue. The user still opens the app. Google Play retries the charge. If nobody tells them inside the product, the subscription can slide from grace period into account hold, then expire.

On 29 September 2026, Google Play product manager Sheenam Mittal published a subscriptions update that treats payment recovery as a first-class product task. The In-App Messaging API is already available to every developer. Several newer packaging models are still in early access. This guide covers what you can ship now, and what to prepare for next.

## What a decline actually does

When a renewal payment fails, Google Play retries for a recovery window before it cancels the subscription. That window can include a grace period, then an account hold. During both stages, Play emails the user and sends notifications asking them to update the payment method.

You set the length of the grace period and account hold for each auto-renewing base plan in Play Console. Shorter than the default can reduce how many subscriptions you recover. Android Developers has also said that developers who used the longer recovery window saw an average 10% drop in involuntary churn.

Entitlement rules stay strict:

- During grace period, keep access on.
- During account hold, turn access off.
- Do not grant access for a purchase that is still pending.

Pending purchases start in `SUBSCRIPTION_STATE_PENDING` and only become `SUBSCRIPTION_STATE_ACTIVE` after the transaction completes. If the user abandons it, the state becomes `SUBSCRIPTION_STATE_PENDING_PURCHASE_EXPIRED`.

![Person paying with a card on a smartphone](https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80)

## Call In-App Messaging when the app opens

You can build your own decline screen, or let Play show one. The official path is `BillingClient.showInAppMessages()` with `InAppMessageCategoryId.TRANSACTIONAL`.

Google Play then shows a message when there is a payment issue or an outstanding opt-in price increase. Payment messages appear during grace period and account hold, once per day. Call the API when the user opens the app so Play can decide whether a message is due.

The Activity you pass must already have a window attached to the window manager. Play uses that window token to draw the overlay. Calling this from a background service will fail.

```kotlin
val params = InAppMessageParams.newBuilder()
    .addInAppMessageCategoryToShow(InAppMessageCategoryId.TRANSACTIONAL)
    .build()

billingClient.showInAppMessages(activity, params) { result ->
    when (result.responseCode) {
        InAppMessageResponseCode.NO_ACTION_NEEDED -> {
            // No recovery or price confirmation happened.
        }
        InAppMessageResponseCode.SUBSCRIPTION_STATUS_UPDATED -> {
            val token = result.purchaseToken
            // Refresh this token with the Play Developer API.
        }
    }
}
```

That snippet follows the sample in the Play Billing subscriptions guide. `SUBSCRIPTION_STATUS_UPDATED` means the user fixed the payment or confirmed a price increase. The response includes a purchase token. Use that token with the Google Play Developer API and refresh entitlements on your server. Do not treat the client callback alone as proof of payment.

Also keep a settings link to the subscription management page:

`https://play.google.com/store/account/subscriptions?sku=YOUR_PRODUCT_ID&package=YOUR_PACKAGE`

That page is for non-expired subscriptions. Users can update a card, pause, cancel, or resubscribe there.

## Meet the Billing Library deadline

New apps and app updates must use Play Billing Library 8 or later. The deadline was 31 August 2026. Developers who need more time can request an extension until 1 November 2026. If your in-app messaging call is still on an older client, ship the library upgrade before you rely on the overlay in production.

Real-time developer notifications still matter. Listen for subscription state changes, then pull the latest subscription resource from the Play Developer API. The in-app message is a user prompt. RTDN is the source of truth for your backend.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Cny82VuONU4"
    title="Top 3 Google Play Google I/O 2025 announcements"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What Play is testing next

The 29 September post lists models that are available now or rolling out through an Early Access Program. Reach out to your Play partner manager if you have one. Do not assume these APIs are in every console yet.

**Multi-quantity subscriptions.** A buyer can purchase several seats in one transaction and assign them to teammates or students. That fits team GenAI tools and education apps.

**Usage-based billing.** Prepaid metered billing can top up a balance when it falls under a threshold. Use this when generation cost varies by user, instead of forcing a flat monthly plan.

**Mixed carts.** One checkout can include an auto-renewing base plan and one-time products. A membership plus a credit pack no longer needs two sheets.

**Cross-developer bundling.** You can sell a hard bundle of two or more complementary subscriptions, including a partner app, as one SKU.

**Dynamic grace period.** Play uses machine learning and heuristics to set the grace window per subscriber after a decline, then adjusts account hold so your total recovery window stays the same. No client code change is required.

**Retention and win-back.** Retention offers can show a developer-funded discount in the Play cancellation flow, or a cheaper plan change. Win-back offers reach lapsed subscribers on the Play Store even if they uninstalled your app.

Play also retries failed charges, cycles backup payment methods for opted-in users, and blocks abuse of promotional offers. Those controls do not replace your own entitlement checks.

![Team reviewing app metrics on a laptop](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80)

## A practical rollout order

1. Confirm every auto-renewing base plan has a grace period and account hold you are willing to support. Keep access only during grace.
2. Upgrade to Billing Library 8 or later, or file the extension before 1 November 2026 if you are not ready.
3. Call `showInAppMessages()` from a resumed Activity on app open, with the transactional category.
4. On `SUBSCRIPTION_STATUS_UPDATED`, send the purchase token to your server and refresh the subscription with the Play Developer API.
5. Add a deep link to the specific subscription management page from settings.
6. Map RTDN types for grace, hold, cancel, expire, and pending-purchase cancellation so the client and server agree.
7. If you sell AI credits, sketch a usage-based or mixed-cart offer, then ask about early access instead of inventing a second billing system.

If your app also calls paid model APIs, pair this with spend controls on the backend. The Firebase guide on [spend caps for Gemini and Cloud Functions](/blog/firebase-spend-caps-gemini-functions/) covers how to stop a usage spike from becoming an unbounded bill while you wait on Play's metered billing rollout.

## Tips that prevent false recoveries

Call the messaging API once per session, not on every recomposition. Play already limits payment messages to once a day. Extra calls add noise and can race with your own paywall.

Acknowledge prepaid top-ups quickly. Plans of a week or longer must be acknowledged within three days. Shorter plans must be acknowledged within half the plan duration.

Cancel and revoke are not the same. Cancel stops renewal and leaves access until the period ends. Revoke removes access immediately. Use revoke for a broken entitlement, not for a routine cancellation.

Price-increase confirmations use the same messaging callback. If you ignore `SUBSCRIPTION_STATUS_UPDATED`, a user can accept a new price in the overlay while your app still shows the old plan.

## Close the gap before the next renewal

Involuntary churn is a product bug you can see in Play Console. The fix that ships today is small: Billing Library 8, a grace period you actually honor, and `showInAppMessages()` on launch. The September 2026 packaging features — seats, mixed carts, usage top-ups, dynamic grace — will matter for GenAI apps, but they are not a substitute for the recovery prompt that is already documented.

Start with one subscription SKU in an internal test track. Decline a test card, confirm the snackbar appears, then verify your server entitlement flips only after the Developer API says the subscription is active again.

## Sources

- Sheenam Mittal, "Driving growth on Google Play: The next era of subscriptions," Android Developers Blog, 29 September 2026. https://developer.android.com/blog/posts/driving-growth-on-google-play-the-next-era-of-subscriptions
- "About subscriptions," Play Billing, Android Developers, updated 8 September 2026. https://developer.android.com/google/play/billing/subscriptions
- Android Developers, "Top 3 Google Play Google I/O 2025 announcements," YouTube. https://www.youtube.com/watch?v=Cny82VuONU4
