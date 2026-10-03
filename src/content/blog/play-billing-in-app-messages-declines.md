---
title: "Show In-App Messages for Declined Play Subscriptions"
description: "Call BillingClient.showInAppMessages so Google Play can prompt users to fix a declined subscription during grace period or account hold."
pubDate: 2026-10-03T10:30:00
heroImage: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "developer", "how-to"]
noindex: false
---

A declined card should not be the last thing a subscriber sees of your app. Google Play already retries failed renewals, and it can also show a payment-fix snackbar inside your activity if you call the Play Billing in-app messaging API.

On 29 September 2026, Google Play product manager Sheenam Mittal said the In-App Messaging API is available to all developers. The same post lists it as the way to prompt users to fix a payment decline, and to notify them of an upcoming price change, without sending them out of the app first.

This guide covers the transactional message path documented on Android Developers: when Play shows it, how to call `BillingClient.showInAppMessages()`, and what to do with the purchase token that comes back.

## What the transactional message covers

In-app messaging is not a custom banner you design. You ask Play Billing to check for a pending transactional message. If the user has a payment issue, or an outstanding opt-in price increase, Google Play draws the snackbar on top of your window.

Android Developers documents two states where a payment-issue message appears: grace period and account hold. With in-app messaging enabled, that payment message is shown once per day. The snackbar includes a path for the user to fix the payment method on Google Play without leaving the app session.

Price-increase confirmation uses the same category, `InAppMessageCategoryId.TRANSACTIONAL`. One call covers both cases. You do not pass a product ID into the message request. Play decides whether a message is due for the signed-in account.

If you sell usage-based or team plans, keep this recovery path next to the checkout work described in [usage-based Play Billing for AI apps](/blog/google-play-usage-based-billing-ai-apps/). A top-up model still fails when the backup card declines.

![Android phone on a desk beside a notebook, the kind of session where a billing snackbar should appear](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## When to call the API

Google recommends calling the API whenever the user opens the app, so Play can decide whether a message should appear. A practical place is the first resumed activity after `BillingClient` is connected, not inside a tight loop.

The call needs an `Activity` whose window is created and attached to the window manager. Play uses that window token to draw the overlay. A service, a fragment without a resumed activity, or an activity that has already finished will not work.

New apps and app updates must use Play Billing Library 8 or later by 31 August 2026. Developers who need more time can request an extension until 1 November 2026. `showInAppMessages()` is part of that library surface, so ship the library upgrade before you rely on the snackbar.

## Connect the client, then show the message

Start a `BillingClient` the same way you do for purchases. Wait for `onBillingSetupFinished` with `BillingResponseCode.OK` before you ask for a message. Then build params that include only the transactional category and pass the current activity.

```kotlin
val params = InAppMessageParams.newBuilder()
    .addInAppMessageCategoryToShow(
        InAppMessageParams.InAppMessageCategoryId.TRANSACTIONAL
    )
    .build()

billingClient.showInAppMessages(
    activity,
    params
) { result ->
    when (result.responseCode) {
        InAppMessageResult.InAppMessageResponseCode.NO_ACTION_NEEDED -> {
            // No pending payment issue or price confirmation.
        }
        InAppMessageResult.InAppMessageResponseCode.SUBSCRIPTION_STATUS_UPDATED -> {
            val token = result.purchaseToken
            // Refresh this subscription on your server.
        }
    }
}
```

The sample on the subscriptions page uses the same builder and listener shape. Keep the call on the main thread that owns the activity. Do not cache a stale activity across configuration changes. If the user rotates the screen, call again from the new activity after billing is ready.

## Handle both response codes

`NO_ACTION_NEEDED` means the flow finished and you have nothing to update. That is the common case. Most launches will not have a declined renewal or a pending price confirmation.

`SUBSCRIPTION_STATUS_UPDATED` means the subscription status changed while the message was open. Android Developers gives two examples: the subscription recovered from a suspended state, or the user confirmed a price increase. The result includes a purchase token. Send that token to your backend and call the Google Play Developer API to read the current subscription, then refresh entitlement in the app.

Do not grant or revoke access from the snackbar callback alone. Treat the token as a hint to re-query. Real-time developer notifications still matter. Listen for `SUBSCRIPTION_IN_GRACE_PERIOD` so your server knows a decline started even if the user has not opened the app yet.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/MlaQdWoSRcQ"
    title="Understanding subscriptions"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Grace period, account hold, and the daily cap

During a grace period, `autoRenewEnabled` stays true and the user should keep access. Play extends `expiryTime` while the grace window is open. The lifecycle guide says Play already tells users in the Play Store that payment was declined. The in-app snackbar is the extra prompt inside your UI, in case the failure was involuntary.

If the user fixes the payment method, the subscription renews with its original renewal date. Handle that renewal the same way you handle a normal renewal: verify on the server, then restore any feature flags you paused.

If the grace period ends without a successful charge, the subscription enters account hold and the user loses entitlement. The same messaging API can surface a decline snackbar in that state, still limited to once per day. Your app should already have removed access when the hold RTDN arrived. The snackbar is for recovery, not for keeping paid features on during hold.

Google Play can also tailor grace length with Dynamic Grace Period, described in the 29 September 2026 subscriptions post. That feature uses models to set the recovery window per subscriber and then adjusts account hold so your total configured recovery window stays intact. It does not replace the messaging call. You still need the client API if you want the snackbar.

![Developer reviewing subscription code on a laptop](https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=800&q=80)

## Tips before you ship

Call the API after setup, not before. A disconnected client cannot show the overlay, and a failed call is easy to miss if you only log debug builds.

Test a decline with a license tester account and a base plan that renews quickly. Confirm the snackbar appears in grace period, that a successful fix returns `SUBSCRIPTION_STATUS_UPDATED`, and that your server refresh matches Play's subscription resource.

Keep a settings link to the specific subscription management page as well: `https://play.google.com/store/account/subscriptions?sku=your-sub-product-id&package=your-app-package`. The snackbar is for declines and price opt-ins. The deep link is for cancel, pause, and payment-method edits the user starts on purpose.

Do not build a second payment form inside the app for Play-billed plans. The documented fix path is Play's own sheet, reached from the message.

## Conclusion

Declined renewals are a billing-lifecycle problem, not only a growth problem. Play already retries charges and can show a once-a-day transactional snackbar if your app asks. Connect Billing Library 8 or later, call `showInAppMessages()` with `TRANSACTIONAL` from a live activity, and refresh the subscription from the purchase token when the status changes.

That path is available to all developers now. Pair it with RTDNs for grace period and account hold so access stays correct even when the user never sees the snackbar.

## Sources

- Android Developers, About subscriptions (in-app messaging): https://developer.android.com/google/play/billing/subscriptions
- Android Developers, Subscription lifecycle: https://developer.android.com/google/play/billing/lifecycle/subscriptions
- Android Developers Blog, Driving growth on Google Play: The next era of subscriptions (29 September 2026): https://developer.android.com/blog/posts/driving-growth-on-google-play-the-next-era-of-subscriptions
- Android Developers, Understanding subscriptions: https://www.youtube.com/watch?v=MlaQdWoSRcQ
