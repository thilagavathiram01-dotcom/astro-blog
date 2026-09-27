---
title: "How to Use Gemini Call for Me on Pixel 11 Phones"
description: "Set up Gemini Call for Me on Pixel 11 so the assistant can book, check stock, and wait on hold for you."
pubDate: 2026-09-27T14:00:00
heroImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "pixel", "android", "how-to", "ai"]
noindex: false
---

Google opened an early preview of **Call for Me** on 24 September 2026. On a Pixel 11 in the United States, Gemini can now place a call from your own number, introduce itself as an AI assistant, talk to a business, and hand the line back to you if you tap Take over.

The feature lives in the Gemini mobile app and the Phone by Google public beta. Google documents the requirements, prompt format, limits, and data rules in [Gemini Apps Help](https://support.google.com/gemini/answer/18336420). This guide walks through those official steps and the cases Google says the assistant will refuse.

## What Call for Me actually does

Call for Me is not Hold for Me and it is not Call Screen. Those older Call Assist tools still wait on hold or screen inbound unknown callers. Call for Me starts an **outbound** call after you approve the plan.

Google’s help page lists three jobs Gemini can take:

- Get business hours, product availability, service quotes, and other information.
- Book, confirm, and manage appointments and reservations.
- Navigate phone menus and wait on hold.

Gemini uses your device mobile network and your phone number. Standard carrier rates apply. Every call begins with a disclosure: Gemini says it is an AI assistant from Google calling on a recorded line on your behalf and states your name.

If you already lock banking and messaging apps on the same phone, pair this guide with our [Pixel App Lock walkthrough](/blog/android-17-app-lock-pixel/). Call for Me shares the name and contact details you approve for that task. It should not share a password or a card number.

![Person holding a smartphone during a conversation](https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800&q=80)

## Eligibility checklist

Google is rolling the preview out gradually. You may meet every rule and still wait a day or two.

You must:

- Be 18 or over and physically in the United States.
- Use a Pixel 11, Pixel 11 Pro, Pixel 11 Pro XL, or Pixel 11 Pro Fold with a US SIM.
- Sign in to the Gemini mobile app.
- Hold a paid Google AI subscription.
- Install the [Phone by Google public beta](https://play.google.com/apps/testing/com.google.android.dialer).
- Update the [Gemini app](https://play.google.com/store/apps/details?id=com.google.android.apps.bard) from Play Store.
- Set the device language to English.

For now, Gemini can only call US phone numbers. Google states there are daily limits. If you hit the cap, wait until the next calendar day.

## How to start a Call for Me task

1. Open the Gemini app on the Pixel 11.
2. Ask it to call on your behalf. You can add `@Call for me` in the prompt so the right tool is selected.
3. Be specific. Include the business name, the goal, dates, times, and a fallback if the first slot is taken.
4. Read Gemini’s summary. Confirm the number it will dial and the personal details it will share, such as your name and callback number.
5. Edit the plan in chat if a detail is wrong.
6. Tap **Call for me** to place the call.

Google’s own examples:

- Reservation: “Call [Restaurant Name] and book a table for two at 7 PM tomorrow.”
- Quote: “Ask the dry cleaner on Main Street how much they charge to hem pants.”

Press coverage from 24 September added similar local-shop cases: check a hardware part, move a haircut to next Thursday, reserve patio seating. Treat those as illustrations. The help page is the source of truth for what the product claims to support.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Bh6WU4PnQE0"
    title="Google Pixel 11 series hands-on: HiLights, cameras, Gemini actions"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Monitor, take over, or cancel

Before the call connects, tap **Cancel** to stop it.

Once the line is up:

- Follow the live transcript in the Gemini app, or listen to live audio.
- Your microphone stays muted by default.
- Tap **Audio** to toggle the live audio stream.
- Tap **Take over** when you want to speak. Gemini announces that you are taking over, unmutes your microphone, and leaves the call.

After the call ends you get a notification. Tap **View results** for Gemini’s summary in the chat. The Phone app keeps the full transcript and the recording in call history.

Give a thumbs up or thumbs down on that summary. The Phone beta also shows occasional surveys. Those ratings are how Google tunes an early experiment.

![Smartphone on a desk next to a notebook](https://images.unsplash.com/photo-1516321318423-f06f85e504f3?auto=format&fit=crop&w=800&q=80)

## Calls Gemini will not make

Google lists hard blocks in the same help article:

- Emergency numbers such as 911.
- Payments, financial transactions, or sharing card numbers over the phone.
- Sensitive personal data: Social Security numbers, passwords, or health information.
- Telemarketing or sales calls on your behalf.

Do not try to work around those limits. The [Gemini Apps Agentic Calling Additional Terms](https://policies.google.com/terms/generative-ai/gemini-agentic-calling) apply when you tap Call for me, on top of the standard Google Terms and the Generative AI Prohibited Use Policy.

Businesses that do not want inbound Gemini calls can opt out at [g.co/gemini/opt-out](https://g.co/gemini/opt-out). The same page lets them opt back in.

## Privacy and trust notes

Asking an assistant to speak as you is a bigger step than summarizing a webpage. Google built three controls into the preview:

- You approve the number and the facts before the call starts.
- You can listen and take over at any moment.
- The assistant discloses that it is AI and that the line is recorded.

Calls still use your real number. Recipients see a normal mobile caller ID, not a Google-owned pool. That is useful for a shop that calls you back, and it is also why carrier minutes and spam filters still apply.

Review how Google stores transcripts in the [Gemini Apps Privacy Hub](https://support.google.com/gemini/answer/13594961). If you keep Advanced Protection on the same Pixel, check that enrollment path in our [Android Advanced Protection setup guide](/blog/android-advanced-protection-setup/) before you add another agentic surface.

## Prompt patterns that work better

Vague requests stall. Give Gemini a complete brief in one message:

- Name the business and the city or street if two locations exist.
- State the outcome you want, not just “call them.”
- Add constraints: party size, time window, pickup versus delivery, part number, fabric type.
- List a fallback: “If 7 PM is taken, try 7:30 or Friday.”
- Say what it must not share beyond the approved summary.

If the first plan looks wrong, correct it in chat before you tap Call for me. Editing after the line is live means taking over.

## When the preview is the wrong tool

Use the Phone app yourself when:

- You need to give a card number or insurance ID.
- The other party is a person you know, not a business line.
- You expect a negotiation that depends on tone more than facts.
- You already hit the daily call cap.

Hold for Me and Direct My Call remain the right tools for calls **you** place and then wait through a menu. Call Screen still handles inbound unknowns. Call for Me is only the outbound agent path.

## Conclusion

Call for Me is an early Pixel 11 experiment, not a general Android feature. Eligibility is narrow: US adults, English, a Pixel 11 family device, a paid Gemini plan, and the Phone by Google beta.

If you qualify, treat the first week as supervised. Write a tight prompt, read the pre-call summary, watch the transcript, and take over the moment the conversation leaves the script. Keep emergency, payment, and medical calls on your own voice.

Google can change availability without a major OS update. Recheck [Ask Gemini to handle your everyday phone calls](https://support.google.com/gemini/answer/18336420) before you assume a new country or device is live.

## Sources

- [Ask Gemini to handle your everyday phone calls](https://support.google.com/gemini/answer/18336420) — Gemini Apps Help
- [Gemini Apps Privacy Hub](https://support.google.com/gemini/answer/13594961) — Google
- [Gemini Apps Agentic Calling Additional Terms](https://policies.google.com/terms/generative-ai/gemini-agentic-calling) — Google
- [Pixel 11 testing Call for Me](https://9to5google.com/2026/09/24/pixel-11-call-for-me/) — 9to5Google, 24 September 2026
- [Google tests letting Gemini call businesses for you](https://techcrunch.com/2026/09/24/google-tests-letting-gemini-make-phone-calls-initially-for-us-pixel-owners/) — TechCrunch, 24 September 2026
- [Google’s Gemini Can Now Make Calls for You on Pixel Phones](https://www.wired.com/story/googles-gemini-can-now-make-calls-for-you-on-pixel-phones/) — WIRED, 24 September 2026
