---
title: "How to Expand Buyer Reach with Google Play Merchandising Optimization"
description: "Configure Google Play's Merchandising and optimization page to reach buyers outside your app, drive additive revenue, and use featured products, cart reminders, and more."
pubDate: 2026-11-18T10:00:00
heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "how-to", "google"]
noindex: false
---

In-app purchases once lived only inside your app. Buyers now discover digital products across Play Store search results, web pages, and even Gemini conversations. Google Play lets you configure your catalog once in Play Console and surface the right product at the right moment outside your app.

The Merchandising and optimization page unifies product selection, eligibility rules, and performance tracking. Over 7,700 developers already use it to expand channel reach and drive additive revenue without cannibalizing existing in-app sales. One partner, MYBO Games, reported a 60% increase in user spend outside their game after adopting the flow.

![Contactless mobile payment illustrating out-of-app commerce](https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80)

## Why Merchandising and Optimization Matters

For apps, out-of-app surfaces lower customer acquisition costs by converting users before they hit an in-app paywall. Showcase introductory offers, seasonal passes, or trials on discovery surfaces. For games, the same tools re-engage lapsed high-LTV players with timed promotional bundles and sync web-store packs through Google Play Billing.

Previously, featured products, purchase recommendations, and cart abandonment reminders lived in separate opt-in pages. The new page consolidates them. Google Play’s machine learning selects the surfaces and timing; you choose which SKUs are eligible and set priority or exclusion rules.

## Expansion Surfaces Available Today

Google Play surfaces your selected products across high-intent channels without requiring per-surface management:

- **Featured products**: Display individual in-app items, starter packs, or seasonal passes on your store listing and in search results.
- **Cart abandonment reminders**: Automatically nudge users who added an item or subscription to their cart but did not complete checkout.
- **Google Play Web Store and Play Points**: Merchandise your catalog on desktop and mobile browsers, with Play Points rewards for repeat purchases.
- **Purchase flow recommendations**: Suggest complementary items during the native checkout flow to lift average revenue per paying user.
- **Agentic commerce in Gemini (early access)**: Surface relevant products inside Gemini conversations for one-tap Google Play checkout.

External web storefronts can also integrate Play Billing for familiar one-tap checkout while keeping reporting in Play Console.

![Person shopping online on laptop and phone](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Step-by-Step: Configure Merchandising in Play Console

1. Open your app in Play Console.
2. Navigate to **Monetize with Play > Merchandising and optimization**.
3. Review the Merchandised products section. Products appear alphabetically with SKU icon, name, ID, and type (one-time product or subscription). They are split into high-priority and default-priority groups.
4. If you previously used Featured Products, Purchase Recommendations, or Cart Abandonment Reminders, eligible SKUs are ported automatically. New users see suggested top-selling SKUs from the last 30 days.
5. Click **Edit all eligible products**. Use the pickers to select up to 1,000 SKUs (one-time products, subscription plans, and offers combined). Deselect any you want to exclude.
6. Flag up to 10 products as high priority. Play’s models take this signal into account but make the final serving decision.
7. Save and apply your changes. Active acknowledgment is required for new selections; otherwise SKUs stay out of out-of-app merchandising.

You can also opt in products via the Manage with AI agent on key monetization pages.

## Platform Controls That Protect Margins

Scaling reach must not erode margins or trust. Available controls include:

- Purchase quantity limits to prevent grey-market resale or stockpiling.
- Target audiences for one-time products and offers (for example, lapsed buyers versus never-purchasers).
- Exclusion groups that automatically hide entry-level discounts from active subscribers, recent purchasers, or high-tier spenders.
- Verified cross-platform account linking so web or external purchases connect back to the user’s in-app account via Play Billing identifiers and server-side verification.

Performance metrics on the page show total impressions, orders, and revenue (including subscription renewals). Filter by all SKUs, one-time products, or subscriptions. Channel-level sales appear in financial CSV reports.

## Test Journeys with Play Billing Lab

Download the free Play Billing Lab app from the Play Store. It lets you simulate out-of-app journeys in a sandbox:

- Preview how featured products and cart abandonment reminders render on different screen sizes.
- Test exclusion rules so eligible buyers see offers while protected cohorts do not.
- Validate entitlement delivery before public launch.
- Simulate granting a Play Games reward.

This removes production guesswork.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/T41OD37tI54"
    title="Maximizing ROI on Google Play"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Best Practices

Choose popular, relevant products such as in-game currency packs or starter packs. Write clear titles and descriptions that highlight value, localize text, set competitive prices, and consider limited-time offers. Integrate a currently supported version of the Play Billing Library. Only fiat-currency products are eligible for merchandising.

If you are migrating from older Play Billing versions, review our guide on [migrating to Play Billing Library 8](/blog/migrate-play-billing-library-8-nov-2026/).

Early Access Program features—multi-level exclusion groups, purchase quantity limits, one-time product target audiences, and agentic catalog management—are rolling out to select partners. Contact your Google Play partner manager if you want access.

## Conclusion

The Merchandising and optimization page turns catalog exposure into a single, ML-assisted workflow. Configure once, let Play handle placement across store listings, search, web, cart reminders, and emerging surfaces, and measure incremental revenue in Console. Start by selecting your highest-value SKUs, set priorities and exclusions, test in Play Billing Lab, and monitor the metrics. Additive out-of-app revenue becomes available without rebuilding your in-app purchase experience.

## Sources

- [Beyond the app: Expanding buyer reach across new surfaces with Google Play](https://developer.android.com/blog/posts/beyond-the-app-google-play-buyer-reach) — Android Developers Blog, 16 November 2026
- [Merchandising and optimization](https://support.google.com/googleplay/android-developer/answer/16973687) — Play Console Help
- [Play Billing Lab](https://play.google.com/store/apps/details?id=com.google.android.apps.play.billingtestcompanion)
