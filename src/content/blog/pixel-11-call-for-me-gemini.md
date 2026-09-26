---
title: "How to Use Pixel 11 Call for Me With Gemini"
description: "Set up Pixel 11 Call for Me so Gemini can dial US businesses, wait on hold, and hand the call back to you."
pubDate: 2026-09-26T14:00:00
heroImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "pixel", "how-to", "android"]
noindex: false
---

Google opened an early preview of **Call for Me** on 24 September 2026. On a Pixel 11 in the United States, Gemini can place a call from your own number, introduce itself as an AI assistant, work through phone menus, wait on hold, and finish a routine task while you watch a live transcript.

This is not Call Screen and it is not Hold for Me. Those features still help after *you* start the call. Call for Me starts the call for you from the Gemini app, then lets you take over if the conversation needs a human.

The steps below follow Google’s Gemini Apps Help article. Treat the feature as an experiment with eligibility gates, daily limits, and a short list of actions Gemini will refuse.

## Who can use Call for Me today

Google is rolling the preview out slowly. You need every item on this list:

- Age 18 or over, located in the United States.
- A **Pixel 11**, **11 Pro**, **11 Pro XL**, or **11 Pro Fold** with a **US SIM**.
- A **paid Google AI** plan (Plus, Pro, or Ultra).
- The **latest Gemini** app from Play Store.
- The **Public Beta** of **Phone by Google**.
- Device language set to **English**.

Gemini can only dial **US numbers** for now. Carrier rates apply because the call uses your mobile number and radio, not a hidden Google trunk.

If any of those boxes is missing, the `@Call for me` chip will not appear or the Call for me button will stay disabled.



![Person holding a smartphone during a conversation](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)



## What Gemini does on the line

Google’s help page lists three job types:

- Collect facts: hours, stock, quotes, wait times.
- Book or change appointments and reservations.
- Walk phone trees and sit on hold.

Before audio starts, Gemini shows a task card: the number it will call and the details it plans to share, such as your name and contact info. You can edit that plan. Gemini then starts every call by saying it is an AI assistant from Google calling on a **recorded** line on your behalf, and it states your name.

Your microphone stays muted unless you tap **Take over**. You can read the live transcript in Gemini or tap **Audio** to listen. After the call, Gemini posts a summary. The Phone app keeps the full transcript and recording in call history.

Google also publishes an opt-out page at [g.co/gemini/opt-out](https://g.co/gemini/opt-out) if you do not want other Gemini users to reach *you* with agentic calls.

## Set up the Phone beta and Gemini

1. Open Play Store on the Pixel 11 and search **Phone by Google**.
2. Join the **Public Beta** program (the testing link in Google’s help article is `com.google.android.dialer`).
3. Update **Gemini** (`com.google.android.apps.bard`) to the latest build.
4. Confirm **Settings → System → Languages** is English.
5. Sign in to Gemini with the same personal Google account that holds your AI subscription.
6. Open Gemini and type a test prompt that includes `@Call for me`. If the tool is live on your account, Gemini will draft a calling plan instead of offering a normal web answer.

Force-stop Gemini and Phone if the beta just installed and the tool is still missing. Previews often arrive server-side after the APK update.

If you already use Android 17 App Bubbles to keep Phone or Gemini at the edge of the screen, that setup still works while you watch a Call for Me transcript. See our [Android 17 App Bubbles guide](/blog/android-17-app-bubbles/) for the long-press steps.

## Place a call with a precise prompt

Open the **Gemini app** (not only the overlay). Ask for the call, or add `@Call for me` so Gemini routes the request to the calling tool.

Write the outcome, not a vague “handle this.” Google’s own examples:

- Call [Restaurant Name] and book a table for two at 7 PM tomorrow.
- Ask the dry cleaner on Main Street how much they charge to hem pants.

Add fallbacks in the same prompt: a second time slot, a patio-or-indoor preference, or a substitute part number. Review the summary card. Change the number or the facts Gemini will share, then tap **Call for me**.

Tap **Cancel** if the call has not connected yet. After it connects, use **Take over** when a clerk asks a question Gemini should not answer. Gemini announces the handoff and leaves the call.

When the call ends, open the notification and tap **View results**. Cross-check the summary against the Phone app recording if the booking matters.



![Notebook and phone on a desk for appointment planning](https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=800&q=80)



<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/mvDN34t5WVY"
    title="MadeByGoogle 24: Everyday AI Help"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tasks Gemini will refuse

Google documents hard blocks. Do not expect Call for Me to:

- Dial emergency services such as 911.
- Complete payments or share card numbers and other financial data.
- Relay Social Security numbers, passwords, or health details.
- Run telemarketing or sales pitches.

There is also a **daily cap** on how many agentic calls you can start. When you hit it, wait until the next calendar day.

Use Hold for Me or Direct My Call in the Phone app for calls you still want to place yourself. Call for Me is for short, well-specified business tasks, not medical, legal, or money conversations.

## Tips that keep the preview useful

**Name the business the way Maps lists it.** A nickname or a mall-store shorthand often sends Gemini to the wrong listing.

**Put times in local terms.** “Thursday at 4 PM” beats “sometime this week.”

**Watch the first minute.** That is when menus and hold music appear. Confirm Gemini picked the right department before you walk away.

**Take over for identity checks.** If a shop asks for a loyalty PIN or a date of birth, tap Take over rather than hoping the model improvises.

**Leave feedback.** Thumbs in the Gemini summary and the occasional Phone app survey are how Google tunes the preview.

**Do not stack five calls at once.** The daily limit and the live-transcript UI both assume one active agent call.

## How this differs from older Pixel call tools

**Call Screen** answers unknown inbound calls and shows a transcript so you can pick up or decline.

**Hold for Me** stays on an outbound call you already placed and pings you when a person returns.

**Direct My Call** turns an IVR tree into tappable text.

**Call Notes** summarizes a call you took part in, with on-device processing on recent Pixels.

**Call for Me** is the first of these that originates the outbound business call from Gemini, speaks for you after a disclosure, and keeps a recording because the line is declared recorded. Duplex-style restaurant booking from the old Assistant era is the closest ancestor, but the control surface is now the Gemini app plus a Take over button.

## Conclusion

Call for Me is a narrow preview: Pixel 11 family, US SIM, English, paid Gemini, Phone by Google beta, US numbers only. Used that way, it can book a table, check stock, or move a haircut without you sitting through hold music.

Write a specific prompt, read the plan card, start the call, and stay close enough to take over. Review the summary and the Phone app recording before you treat the result as confirmed. If the tool is not on your account yet, keep Gemini and the Phone beta updated and wait for the server-side enablement.

## Sources

- [Ask Gemini to handle your everyday phone calls](https://support.google.com/gemini/answer/18336420) — Gemini Apps Help
- [Gemini Apps Privacy Hub](https://support.google.com/gemini/answer/13594961) — Gemini Apps Help
- [Gemini agentic calling additional terms](https://policies.google.com/terms/generative-ai/gemini-agentic-calling) — Google
- [Opt out of Gemini user calls](https://g.co/gemini/opt-out) — Google
- [Pixel 11 starts testing Call for Me](https://9to5google.com/2026/09/24/pixel-11-call-for-me/) — 9to5Google
