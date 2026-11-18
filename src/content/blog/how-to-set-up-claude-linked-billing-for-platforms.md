---
title: "How to Set Up Claude Linked Billing for Platforms"
description: "Step-by-step guide to offer Claude Linked Billing in your app so customers pay Anthropic directly without sharing API keys."
pubDate: 2026-11-18T15:00:00
heroImage: "https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials"]
noindex: false
---

Third-party platforms that integrate Claude no longer need to store customer API keys. Anthropic launched Linked Billing in beta on November 17, 2026. Customers link their own Claude Console organization, and Anthropic bills them directly. Platforms hold only a connection ID.

This removes the security burden of managing keys while letting platforms offer Claude features faster. Customers keep control of spend limits and can unlink at any time. The feature covers the Messages API and chat completions endpoints.

Linked Billing works for organizations billed directly by Anthropic. Cloud marketplace customers, subscription plan users, and certain compliance setups cannot link during the beta. Requests still run in the platform's organization.

![Developer coding on multiple monitors with blue lighting](https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=800&q=80)

## Why Linked Billing Matters for Platforms

Sharing an API key is like sharing a password. Anyone with the key can generate usage billed to the customer. Platforms must encrypt, rotate, and protect those keys. Linked Billing eliminates that step.

Anthropic hosts the approval flow and the billing. Platforms do not build metering or invoicing systems. They see usage per customer in the Console or through the Usage and Cost Analytics API. On each request, the platform chooses whether the customer or the platform pays.

Customers set monthly spend limits per platform. They see spend broken out by linked app in Console. Only an Admin or Billing member can approve a link. The approval covers the whole organization.

Platforms already supporting Linked Billing include Asana, Linear, Railway, Ramp, and Warp. The list continues to grow.

## Prerequisites Before You Start

Your Claude Console organization must be billed directly by Anthropic. You need permission to create OAuth apps. Customers must also have a directly billed organization. Subscription plans and marketplace purchases do not qualify.

Prepare a button or link labeled something like “Link your Claude organization.” Follow Anthropic’s branding samples. Decide which features will be customer-paid versus platform-paid. Document this clearly for users.

If you currently collect API keys, plan a migration path. Keep the key until you store the connection ID, then switch requests to customer-paid and delete the key.

## Step-by-Step Setup in Claude Console

Open the Claude Console and create an OAuth app. Under “What the app can do,” select “Bill and link to organizations.” Accept the Linked Billing Terms.

On the Client authentication tab, configure client authentication, an operator service account, and a default workspace. Add a button in your product that starts the linking flow.

Create one user profile per customer organization that will pay. Each app allows one profile per customer organization. On requests the customer should pay for, include the profile ID, the billing beta header, and billing_policy with bill_to set to user_profile.

Publish the app when ready. New apps start in testing mode. Only up to ten test users can link, each with a monthly limit of $50 or less. Domain verification and Anthropic review are required before the app goes live for invoiced organizations.

![Laptop with code and plant on a wooden desk](https://images.unsplash.com/photo-1763568258289-47ada8efe7ea?auto=format&fit=crop&w=800&q=80)

## What Customers Experience When Linking

Customers click the button in your app. They sign in to Claude. If their email belongs to multiple organizations, they choose one. New users can create an account and add credits during the flow.

They review how billing works and set a monthly spend limit or continue without one. Testing apps require a limit of $50 or less. They see an approval page with your app name and the permissions requested. Usage is billed under their existing terms.

Only Admin or Billing roles can approve. After approval, they return to your app. Admin and Billing members usually receive a confirmation email. They manage all links on the Linked platforms page in Console. They can adjust limits or unlink at any time.

## Handling Requests and Billing Errors

On each customer-paid request, send the profile ID. A request for an unlinked profile returns a 403 error even if Console shows the platform as Linked. Requests that cannot be billed return 402 or 403. A 503 may appear temporarily; retry with backoff.

A 402 means the customer must act—check credits or raise the spend limit. You decide whether to pause the feature or cover the usage yourself by sending the request as platform-paid. Tell the customer if you cover costs temporarily.

Unlinking stops new calls within about ten seconds. In-flight calls complete and are billed. Show a clear message and a way to re-link. Anthropic does not notify your app when a customer unlinks. Detect it from the 403 or from the Link status in Console.

## Monitoring Usage Without Seeing Customer Prices

You see token usage and your own costs for each customer. You never see what the customer actually pays. In Console, open User profiles and select a customer. Your spend column shows only what you paid on their behalf.

Use the Usage and Cost Analytics API (beta) and group by user_profile_id. The cost endpoint returns zero for customer-paid requests. Data typically refreshes within four hours and can take up to 24 hours. Keep your own record of which requests were customer-paid.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/p2xvJAbF-i4"
    title="Building the Claude API for the Frontier"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for a Smooth Rollout

Start with a small set of test users. Verify the full flow, including spend limits and unlinking, before opening to more customers. Clearly label which features are billed to the customer.

Provide a direct link to the Linked platforms page so customers can manage limits themselves. When migrating from API keys, communicate the change and confirm deletion of the stored key.

Watch for 402 and 403 errors and surface helpful messages. For customers who need HIPAA, FERPA, or CMEK, Linked Billing is not available in the beta because requests run in your organization. Their settings do not apply.

## Conclusion

Linked Billing lets platforms offer Claude without holding customer API keys. Setup takes place in the Claude Console through an OAuth app. Customers approve once, set limits, and pay Anthropic directly. Platforms gain usage visibility and can choose who pays on each request.

The feature is in beta and excludes certain account types and compliance scenarios. Follow the official docs for header values and edge cases. Platforms that implement it early can reduce security overhead and ship Claude features faster.

For related developer guidance on Claude models, see our [Claude Fable 5.2 guide for developers](/blog/claude-fable-5-2-guide-for-developers/).

## Sources

- Anthropic, “Linked billing on the Claude Platform,” November 17, 2026. https://claude.com/resources/articles/linked-billing-on-claude-platform
- Claude Help Center, “Offer linked billing in your platform,” updated November 2026. https://support.claude.com/en/articles/18467110-offer-linked-billing-in-your-platform
- Claude Help Center, “Use your Claude Platform account in a third-party app.” https://support.claude.com/en/articles/18467148-use-your-claude-platform-account-in-a-third-party-app
