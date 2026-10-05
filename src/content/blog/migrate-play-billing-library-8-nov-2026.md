---
title: "How to Migrate to Play Billing Library 8 by Nov 1"
description: "New Android apps and updates must use Play Billing Library 8. Follow the official migration steps and request an extension before Nov 1, 2026."
pubDate: 2026-10-05T15:11:00
heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "how-to", "google"]
noindex: false
---

Google stopped accepting new apps and app updates that still ship Play Billing Library 7 on August 31, 2026. If your last release missed that date, Play Console can still grant a short extension through November 1, 2026. After that date, version 7 is unsupported for new uploads.

This guide follows the official migration page and the deprecation FAQ. It is the checklist to run before you ship the next production APK or AAB. If you also sell subscriptions, pair it with the [in-app decline message setup](/blog/play-billing-in-app-messages-declines/) so recovered payments do not depend on an old client.

## What the deadline actually covers

The rule applies to new apps and to updates of existing apps. Unmaintained APKs that already live on Play do not have to be rebuilt. Users who already installed those builds can keep buying, as long as the binary itself still talks to Play.

Play uses a two-year deprecation cycle, announced at Google I/O 2019. The current table on the deprecation FAQ lists version 7 with an update deadline of August 31, 2026 and an extension deadline of November 1, 2026. Version 8 stays supported for new uploads until August 31, 2027, with an extension window to November 1, 2027.

Only APKs that request the `com.android.vending.BILLING` permission are checked for the library version. A free app with no billing dependency is outside this rule.

![Developer reviewing a checkout flow on a laptop](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Confirm the version you ship

Open the module `build.gradle` or `build.gradle.kts` that creates `BillingClient`. Look for `com.android.billingclient:billing`. If the version is 6.x or 7.x, that artifact is what Play will flag on the next upload.

Also search the merged manifest for `com.google.android.play.billingclient.version`. Play reads that attribute. If a manifest merger strips it, Console can still warn you after you have already bumped the dependency. The deprecation FAQ says to restore the attribute if the warning remains after an upgrade.

If you already updated and still see a policy warning, open Policy status in Play Console and read the warning details before you request an extension. An extension is for apps that still need time. It is not a substitute for a bad merge.

## Request the November 1 extension

If the warning is present, open its details page on Policy status and use the extension form linked there. Google says that is the only place to request more time, and the form appears when the app is on an unsupported library.

Treat November 1 as a hard stop for uploads, not as a date to start the migration. Review, internal testing, and a staged rollout need days. An extension keeps the old binary eligible for update until that date. It does not change the API removals in library 8.

## Upgrade the dependency

The migration guide from versions 6 or 7 to 8 starts with the Gradle coordinate. Set the billing artifact to 8.0.0 or a later 8.x release:

```gradle
dependencies {
    def billingVersion = "8.0.0"
    implementation "com.android.billingclient:billing:$billingVersion"
}
```

Sync, then compile. Most failures come from removed methods, not from the dependency line itself. Android also publishes a skill that can apply the upgrade. From the Android CLI, the documented install command is `android skills add play-billing-library-version-upgrade`. The suggested prompt is “Help me upgrade my Play Billing Library implementation.” Review the diff. Do not ship the skill output without a purchase test.

## Replace APIs removed in library 8

Library 8 drops several methods that 6 and 7 still compiled. Match each call site before you delete the old import.

If you are coming from version 6, subscription updates need three renames. `setOldSkuPurchaseToken` becomes `setOldPurchaseToken`. Both `setReplaceProrationMode` and `setReplaceSkusProrationMode` become `setSubscriptionReplacementMode`.

These calls are gone for upgrades from 6 and from 7:

- `queryPurchaseHistoryAsync`. Follow the current purchase-history guide instead of calling the removed method.
- `querySkuDetailsAsync`. Use `queryProductDetailsAsync`.
- `enablePendingPurchases()` with no arguments. Pass `PendingPurchasesParams`. The no-arg method matches `enablePendingPurchases(PendingPurchasesParams.newBuilder().enableOneTimeProducts().build())`.
- `queryPurchasesAsync(String, PurchasesResponseListener)`. Use the overload that takes `QueryPurchasesParams`.
- From version 6 only: `enableAlternativeBilling` becomes `enableUserChoiceBilling`. `AlternativeBillingListener` becomes `UserChoiceBillingListener`. `AlternativeChoiceDetails` becomes `UserChoiceDetails`.

`queryProductDetailsAsync` also changed its listener shape. `onProductDetailsResponse` no longer hands you a bare list in the way older samples expect. Read the billing result and the product list from the response object documented under “Show products available to buy.” A single `ProductDetails` can carry several base plans and offers. Do not assume one product id maps to one price.

![Team planning an app release around a table](https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80)

## Turn on automatic reconnection

Library 8 can reconnect to Play Billing if you call an API while the service is disconnected. The migration guide marks this as recommended, not required. Enable it where the integrate guide describes automatic service reconnection, then delete hand-rolled retry timers that fight the library. Leave a user-visible error if reconnection fails. A silent retry loop hides a Play Store that is missing or out of date.

## Optional features you can add in the same release

Two library 8 options are easy to skip and then hard to retrofit.

Pending purchases for prepaid plans need the pending-purchase path used for subscriptions. Acknowledge both the first prepaid purchase and every top-up. Plans of one week or longer must be acknowledged within three days. Shorter plans must be acknowledged within half the plan length. A three-day plan gives you 1.5 days.

Installment subscriptions are limited. The docs list Brazil, France, Italy, and Spain, and they say to check Play Console for the latest country list. The Console price is the monthly installment, not the full commitment. Payouts follow each monthly charge. A same-product switch from an installment base plan to a non-installment base plan is not allowed.

## Test before you close the extension

Run a license-tester purchase, a pending one-time purchase, a subscription upgrade, and a restore on a second device. Confirm `queryPurchasesAsync` returns the new token and that your server acknowledges it. If you use real-time developer notifications, check that a renewal still maps to the same entitlement after the client change.

Ship to an internal track first. Play evaluates the library version on the artifact you upload, so an internal AAB is enough to see whether the policy warning clears.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/hcvvo6Sag0Q"
    title="How to understand Play’s expanded billing options and lower fees"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

The Android Developers clip above covers Play’s expanded billing choice and the split between service fees and billing fees. It is context for the same Play Billing stack. It is not a substitute for the library 8 migration page.

## Tips that prevent a rejected upload

- Bump every product flavor. A wear or automotive module that still depends on billing 7 can fail the check even if the phone module is clean.
- Keep the billing client version attribute in the merged manifest.
- Do not request an extension and then forget the form expiry. November 1, 2026 is the last day version 7 can ride an approved extension.
- Re-test alternative billing if you called `enableAlternativeBilling`. That builder method is removed on the path from version 6.
- After the client is on library 8, wire decline prompts with the In-App Messaging API so a failed renewal can be fixed inside the app.

## Conclusion

Library 8 is the supported client for any Android app update you upload after the August 31 cutoff. The November 1 extension is a Play Console form, not an automatic grace period. Change the dependency, replace the removed purchase and subscription methods, fix the product-details listener, and upload an internal build before you rely on the extension date.

## Sources

- [Migrate to Google Play Billing Library 8](https://developer.android.com/google/play/billing/migrate-gpblv8) — Android Developers, updated September 1, 2026
- [Play Billing Library version deprecation](https://developer.android.com/google/play/billing/deprecation-faq) — Android Developers, updated September 9, 2026
- [About subscriptions](https://developer.android.com/google/play/billing/subscriptions) — Android Developers
- [How to understand Play’s expanded billing options and lower fees](https://www.youtube.com/watch?v=hcvvo6Sag0Q) — Android Developers, June 24, 2026
