---
title: "Firebase Spend Caps: Pause Gemini Before Bills Spike"
description: "Set Firebase spend caps on AI Logic, Cloud Functions, and App Hosting so Gemini usage pauses at your budget instead of sending only an email."
pubDate: 2026-09-20T14:00:00
heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["firebase", "ai-tools", "tutorials", "developer"]
noindex: false
---

A leaked API key or a tight loop in Cloud Functions can turn a Blaze project into a large invoice. Firebase now ships spend caps that pause a named service when its monthly budget hits 100%, instead of only sending an alert email.

The feature landed on 14 September 2026. It covers Firebase AI Logic (Gemini Developer API and Vertex AI Gemini API), Cloud Functions for Firebase, Firebase App Hosting, and Firebase Extensions. This guide shows how to set a cap, what the emails mean, and where the limit is not a hard wall.

## What a spend cap actually does

A spend cap is a Cloud Billing budget tied to one Firebase service. At 50% and 80% of the amount you set, billing administrators and project owners get warning emails. At 100%, Cloud Billing pauses *new usage* of that service for the rest of the calendar month unless you lift the cap.

That is the difference from an alerts-only budget. Alerts-only budgets notify you. Spend caps notify you *and* stop further calls. Your other Firebase products keep running. You can cap Gemini without taking Firestore offline.

Caps apply to gross list price. Credits, free-tier allowances, and committed-use discounts do not shrink the meter that the cap watches. Set the number against the price sheet you actually care about, not the discounted line you hope to see on the invoice.

## Which services you can cap today

Official docs list four starting points:

- **Firebase AI Logic.** Caps access to the Gemini Developer API or the Vertex AI Gemini API (formerly Vertex AI) that your app reaches through the Firebase AI Logic SDKs.
- **Cloud Functions for Firebase.** Caps the underlying Cloud Run functions service.
- **Firebase App Hosting.** Caps the Cloud Run service that serves the hosted backend.
- **Firebase Extensions.** Caps billed extension usage for the month.

If you already call Gemini from the client with Firebase AI Logic, this is the control that belongs next to App Check. Pair it with the hybrid inference path in [Firebase AI Logic hybrid inference](/blog/firebase-ai-logic-hybrid-inference/) when you want on-device fallback after a pause.



![Laptop showing billing charts and a calculator on a desk](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80)



## Set a spend cap in the Firebase console

You need a project on the Blaze plan. Spark projects do not expose spend caps because they already block paid usage.

1. Open the [Firebase console](https://console.firebase.google.com/) and select the project.
2. Go to **Project settings**, then **Usage and billing**, then the **Details & settings** / **Account & budgets** view.
3. Find the **Service-level spend caps** card.
4. Choose the service, enter a monthly budget in the billing currency, and click **Configure**.
5. Confirm the recipients. Cloud Billing emails billing administrators, project owners, and any essential contacts you configured.

The same budgets appear in Google Cloud Billing if you want extra thresholds, filters, or Pub/Sub notifications. Firebase’s card is the faster path for the four supported products.

After you save, the card shows the live cap amount per service. You can edit the number, clear the cap, or follow the link into Cloud Console when you need to lift an enforced pause.

## What happens at 50%, 80%, and 100%

Treat the three emails as a runbook, not noise.

**50%.** Check traffic, not just dollars. A spike in `generateContent` calls, a new model name, or a retry storm after a timeout is easier to fix here than at 99%.

**80%.** Decide whether the remaining 20% is enough for the rest of the month. If it is not, raise the cap now. Lifting an already-enforced pause later can take up to an hour for the service to resume.

**100%.** New usage of that service stops for the rest of the month. Existing warm instances may finish in-flight work. Clients that keep calling Gemini will see errors until you lift the cap or the next month starts.



![Developer reviewing a cloud dashboard on a monitor](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80)



## Limits you must plan around

Spend caps are **not hard caps**. Usage reporting lags. Firebase and Cloud Billing both state that enforcement can trail real traffic by several minutes. Cost that lands in that window is billed as normal. Set the number a little under the amount you refuse to exceed.

Other rules from the official limitations page:

- Caps reset with the billing month. They do not roll unused budget forward.
- Gross cost is the metric. A free-tier Gemini call still counts toward the cap once you leave the free allowance on the price sheet the budget uses.
- Lifting a cap happens in Cloud Console, not only in the Firebase card. After you lift it, wait up to one hour before you assume production traffic is healthy again.
- Pausing AI Logic does not pause Analytics, Auth, or Firestore. Design the client to degrade when Gemini returns errors.

If you need a second layer, keep a project-level alerts-only budget in Cloud Billing. That email covers products spend caps cannot pause yet.

## Pair the cap with safer Gemini calls

A budget pause is the last line. Reduce the chance you hit it.

- Turn on **App Check** for Firebase AI Logic so unsigned clients cannot burn the quota.
- Prefer **server prompt templates** so model name, temperature, and max tokens live on the server. A client cannot raise `maxOutputTokens` on its own.
- Cache deterministic answers. Do not send the same system prompt on every keystroke.
- Log token counts per request in Crashlytics or Cloud Logging. Caps tell you *that* you spent money. Logs tell you *which screen* spent it.
- Test failure paths. When the service is paused, show a stored answer or an on-device model instead of a spinner that never ends.

Firebase’s own overview of the product is a short watch if you are still wiring the SDK:

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/EpRSIFVtMng"
    title="What is Firebase AI Logic?"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## How to lift a cap after a false alarm

A load test or a launch-day spike can trip the 100% line on purpose. To restore the service:

1. Open [Cloud Billing budgets and spend caps](https://docs.cloud.google.com/billing/docs/how-to/budgets-spend-caps#lift-spend-cap).
2. Find the spend-cap budget for that service.
3. Lift or raise the cap for the current month.
4. Watch the Firebase Usage page until new requests succeed. Budget for up to an hour of residual pause.

If the extra usage was a bug, fix the client first. Raising the cap without a patch just buys another spike.

## Practical amounts for small teams

Pick a number you can explain in Slack. Examples that match common Blaze side projects:

- **Prototype AI Logic:** $20–$50. Enough for QA traffic, low enough that a leaked key stops quickly.
- **Production chatbot:** size the cap to 1.2× last month’s Gemini line item, then watch the 80% mail for two cycles before you raise it.
- **Functions + App Hosting:** cap each service separately. A runaway function should not freeze your hosted frontend, and the reverse is also true.

Write the chosen amounts in the project README. The next person who ships a model change should know the ceiling before they change temperature.

## Conclusion

Spend caps give Firebase the circuit breaker developers asked for: pause Gemini, Functions, App Hosting, or Extensions at a number you set, after emails at 50% and 80%. They are monthly, service-scoped, and based on gross cost. They are also delayed by usage reporting, so they are a safety net, not a guarantee.

Open **Usage and billing** in the Firebase console, set a cap on every AI or compute service you ship this week, and add a client fallback for the hour after a pause. That is the cheapest hour you will spend on billing this quarter.

## Sources

- [Introducing Firebase spend caps](https://firebase.blog/posts/2026/09/firebase-spend-caps/) — Firebase Blog, 14 September 2026
- [Set up spend caps for Firebase services](https://firebase.google.com/docs/projects/billing/spend-caps) — Firebase documentation
- [Avoid surprise bills](https://firebase.google.com/docs/projects/billing/avoid-surprise-bills) — Firebase documentation
- [Budgets and spend caps](https://docs.cloud.google.com/billing/docs/how-to/budgets-spend-caps) — Google Cloud documentation
