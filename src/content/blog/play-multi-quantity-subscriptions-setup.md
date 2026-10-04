---
title: "Play Console Multi-Quantity Subscription Setup Guide"
description: "Set up Google Play multi-quantity subscriptions, mixed carts, and in-app payment messages for team seats and AI apps."
pubDate: 2026-10-04T12:00:00
heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "how-to", "google"]
noindex: false
---

A single Google account buying one plan no longer covers every subscription business. On 29 September 2026, Google Play said it is introducing multi-quantity subscription purchase so a buyer can pay for several seats in one transaction and assign them to teammates or students. The same post also covers mixed carts, cross-developer bundles, and payment-recovery tools that are already open to all developers.

This guide shows what you can configure now, what is still in early access, and how to keep entitlements correct when one checkout covers more than one person.

## What Google announced

Sheenam Mittal, senior product manager for Google Play, described the update on the Android Developers Blog. The goal is flexible packaging for GenAI tools, education, entertainment, and business apps that sell beyond a single user.

Four product ideas sit in that post:

- **Multi-quantity subscriptions.** One transaction can include several copies of a subscription, then those copies can be assigned as seats.
- **Usage-based billing.** Prepaid metered billing can top up a balance when it drops below a threshold. That path is covered in our [usage-based billing guide](/blog/google-play-usage-based-billing-ai-apps/).
- **Mixed carts.** An auto-renewing subscription and one-time products can go through one checkout instead of two separate flows.
- **Cross-developer bundling.** You can sell a hard bundle of two or more complementary subscriptions, including a partner app, as one SKU.

Google says many of these capabilities are available or rolling out through an Early Access Program with selected partners. If you have a Play partner manager, ask to be considered as programs open. Do not ship UI that promises team checkout until the product appears in your Play Console.

## Confirm the billing baseline first

Android's subscription docs still carry a hard library deadline. By 31 August 2026, new apps and updates must use Play Billing Library 8 or later. Developers who need more time can request an extension until 1 November 2026.

Before you design seats, check three things in an existing app:

1. The Gradle dependency is Billing Library 8 or newer.
2. Purchases are acknowledged on your server, not only in the client.
3. Real-time developer notifications (RTDN) land in Cloud Pub/Sub so renewals, cancellations, and holds do not depend on the app being open.

A multi-seat sale still produces purchase tokens and subscription state. If your current app only stores one token per Google account, team billing will break entitlement checks even after Console access arrives.

![Developer reviewing subscription analytics on a laptop](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80)

## Model the product before you code

Play already separates a subscription product, its base plans, and its offers. Multi-quantity sits on top of that model. Treat the product as the benefit, the base plan as the price and period, and quantity as how many entitlements one buyer pays for.

A practical catalog for a coding assistant or classroom app looks like this:

1. Create one subscription product, such as `team_pro`.
2. Add a monthly base plan and an annual base plan with clear benefit text.
3. Keep a separate individual product, such as `solo_pro`, so personal buyers are not forced through seat assignment.
4. Write the benefit copy around seats, not vague "team access." Buyers need to know what they can assign.
5. Decide the maximum quantity you will allow. Play has not published a public cap in the September post, so cap it in your own checkout until Console documents a limit.

For mixed carts, plan the one-time product at the same time. A starter credit pack sold next to the first month of a subscription is the example Google gives. The subscription renews later. The one-time product does not.

Cross-developer bundling is a catalog decision, not a client trick. Google's example is a language app bundling its membership with a partner travel-guide subscription at a combined price. You still own the SKU in your catalog. The partner does not appear as a second Play checkout.

## Prepare the client purchase flow

Until multi-quantity APIs are in your build, keep the current BillingClient path correct. The official integrate guide is still the contract: connect the client, query product details, launch the billing flow, then acknowledge the purchase.

When seat purchase opens for your app, extend that flow rather than replacing it:

1. Query `team_pro` and show monthly and annual base plans with a quantity stepper.
2. Send the selected base plan and quantity into the billing flow once Play exposes the parameter for your library version.
3. On success, read the purchase token and order id. Send both to your backend before you grant access.
4. Acknowledge the purchase within the required window. Unacknowledged purchases are refunded.
5. Open an assignment screen only after the backend confirms the token with the Play Developer API.

Do not grant seats from the client alone. A rooted device or a replayed purchase response should not create five accounts.

For mixed carts, Google says the auto-renewing base plan and one-time products can be processed in a single API call and one checkout sheet. Wait for the Billing Library release notes that name that call. Shipping a homemade double-purchase flow and labeling it a mixed cart will still show two Google payments to the user.

## Assign seats after the payment

Payment and membership are different records. Store them apart.

- **Purchase record:** package name, product id, base plan id, quantity, purchase token, expiry, and subscription state.
- **Seat record:** invited email or account id, role, status (`invited`, `active`, `revoked`), and the purchase token it draws from.
- **Audit record:** who assigned or removed a seat, and when.

A workable assignment sequence:

1. The buyer finishes checkout.
2. Your server verifies the token and reads the paid quantity.
3. The buyer invites people up to that quantity. The buyer can occupy one seat.
4. Each invitee signs in with their own Google account and accepts.
5. Your app checks seat status on launch. Play will not know your private invite list.

When a renewal fails, freeze new invites first. Google already retries failed payments and can use a backup payment method for opted-in users. Your app should not delete the team on the first decline.

![Team planning work together at a table](https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80)

## Turn on tools that are available now

You do not have to wait for early access to reduce failed renewals. The September post says the In-App Messaging API is available to all developers. It can prompt a user to fix a payment decline and can notify them of an upcoming price change inside the app. The subscription guide documents the integration under in-app messaging.

Add it next to your existing billing client:

1. After the BillingClient is ready, call the in-app messaging API on a screen the subscriber actually sees, such as home or settings.
2. Let Play show the decline or price-change sheet. Do not rebuild that sheet yourself.
3. Refresh purchases when the sheet closes so your UI matches the new state.
4. Deep link to the specific subscription management page for non-expired plans: `https://play.google.com/store/account/subscriptions?sku=your-sub-product-id&package=your-app-package`.

Dynamic grace period, retention offers, plan changes in the cancellation flow, and native winback offers are also described in the post. Dynamic grace period uses Play's models to set the recovery window per subscriber and adjusts account hold so your total configured recovery window stays intact. Google says this does not require client code changes. Retention offers and winback offers are configured around Play's cancellation and store surfaces, which matters if the user already uninstalled your app.

## Watch the video, then test with license accounts

Console setup is still the gate for any subscription, including a future seat plan. This short walkthrough shows how a subscription becomes available in Play Console, from a test track through base plans and pricing.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/tmawLlZpK3s"
    title="Monetize on Google Play: Subscription Setup Guide"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

Use license testers for the first purchases. Confirm that a renewal notification arrives, that a cancellation keeps access until expiry, and that a decline surfaces the in-app message. Only then add quantity to the test script.

## Tips before you request early access

- Name the buyer and the members separately in your privacy policy. Seat assignment collects emails Play does not need for a solo plan.
- Localize benefit text. A seat count that is clear in English is easy to mistranslate.
- Keep a downgrade path to a one-seat plan. Google's retention guidance already points at a lower-priced tier when a discount is not eligible.
- Log quantity on every RTDN you receive. A renewal that drops quantity is a billing event, not a UI glitch.
- If the SKU is missing in Console, it is not rolled out to you yet. Early access is partner-based, not a hidden toggle.

## Conclusion

Multi-quantity subscriptions give Play a direct answer for team and classroom sales: one payment, several assignable entitlements. Mixed carts and cross-developer bundles extend that same checkout idea. Most of the new packaging is still early access, so the useful work today is Billing Library 8, server-side tokens, RTDN, and the In-App Messaging API. When Console shows the seat product, the assignment table is the only new piece you should have to add.

## Sources

- Android Developers Blog, Sheenam Mittal, "Driving growth on Google Play: The next era of subscriptions," 29 September 2026: https://android-developers.googleblog.com/2026/09/unlocking-Google-play-subscription-growth.html
- Android Developers, "About subscriptions": https://developer.android.com/google/play/billing/subscriptions
- Android Developers, "Getting ready" for Play Billing: https://developer.android.com/google/play/billing/getting-ready
- Play Console Help, subscription products, base plans, and offers: https://support.google.com/googleplay/android-developer/answer/12154973
