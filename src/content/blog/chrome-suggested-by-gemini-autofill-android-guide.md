---
title: "How to Use Chrome Suggested by Gemini Autofill on Android"
description: "Enable Chrome enhanced autofill with Gemini Personal Intelligence to pull order, tracking, and flight details from Gmail on Android."
pubDate: 2026-10-29T14:00:00
heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "gemini", "tutorials", "how-to", "google", "productivity"]
noindex: false
---

Chrome autofill used to stop at the details you typed yourself. Starting 28 October 2026 Google began rolling out an enhanced version that can surface order numbers, package tracking codes, and flight booking references pulled from Gmail. The suggestions appear under a “Suggested by Gemini” label and rely on Personal Intelligence.

The rollout is limited to the United States, requires Gemini in Chrome, and only works when Personal Intelligence is turned on. Sensitive values stay encrypted. You can remove individual suggestions or switch the whole feature off in Chrome settings. This guide shows the practical steps on Android.

## What the feature actually does

Enhanced autofill looks beyond the name, address, and card data already stored in Chrome. When you tap a form field that matches something in a recent Gmail message, Gemini can propose the matching string. Examples Google published include a flight booking code, a shipment tracking number, and an online order reference.

The suggestion is labelled “Suggested by Gemini” or “Suggested by Gemini · Gmail”. On Android you can long-press the chip to view the source email or dismiss the suggestion. Removing the chip does not delete the original message. The feature currently draws only from Gmail; earlier Canary tests that also read Photos have not reached the public release.

![Person filling a form on a smartphone](https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80)

## Requirements before you start

- Chrome for Android that already shows Gemini in Chrome (the side panel or Ask Gemini entry)
- A personal Google account signed into Chrome
- Personal Intelligence enabled, with Gmail connected
- Age 18 or older (Google’s stated eligibility)
- Location in the United States (the initial rollout region)

If you only have a Workspace account, Personal Intelligence connectors remain limited. Update Chrome from the Play Store and restart the browser after any account change.

## Step 1: Turn on Personal Intelligence and connect Gmail

1. Open the Gemini app.
2. Tap your profile picture, then Settings.
3. Select Personal Intelligence.
4. Open Connected Apps.
5. Enable Gmail. Leave other apps off unless you need them for a different Gemini feature.

Personal Intelligence is opt-in. You can disable any connected app later. The same setting also powers other Gemini experiences; the Chrome autofill path simply reuses the Gmail connection once it is active.

## Step 2: Enable enhanced autofill inside Chrome

Google’s help documentation points to Settings → Autofill and passwords → Enhanced autofill. On Android the exact menu wording can vary slightly by Chrome version:

1. Open Chrome.
2. Tap the three-dot menu → Settings.
3. Look for Autofill and passwords (or Autofill).
4. Open Enhanced autofill.
5. Turn the feature on if the toggle is present.

If the menu item is missing, the rollout has not reached your account yet. Check again after a day or two. You can also search Chrome settings for “autofill” or “Gemini”.

## Step 3: Use a suggestion on a real form

Start with a low-stakes page such as an airline check-in or a retailer order-status form. Do not begin with tax, banking, or government portals.

1. Open the form in Chrome on Android.
2. Tap the empty field that asks for a booking code, tracking number, or order ID.
3. Watch for the “Suggested by Gemini” section in the autofill dropdown or above the keyboard.
4. Tap the suggestion that matches the email you expect.
5. Confirm the value against the original message if the field is sensitive. On Android, long-press the suggestion and choose View sources to open the Gmail message in a new tab.
6. Submit only after you review the whole page.

Google states that the data shown in the suggestion remains encrypted. Treat every filled field as a draft until you have verified it.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/56b9uHAcHYc"
    title="Gemini in Chrome: Help right where you need it"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Privacy controls and when to turn it off

You stay in control. From the same Enhanced autofill settings page you can disable the feature entirely. Individual suggestions can be removed without deleting the source email. If you only need the feature for a single trip, turn it off afterward.

Also review:

- Gemini → Settings → Personal Intelligence → Connected Apps (disconnect Gmail if you no longer want it read)
- Chrome autofill entries you no longer use
- Work profiles. Keep personal Gemini off a managed profile unless your organisation has documented the feature

The earlier Android Autofill + Personal Intelligence experience (which can also draw from Photos and Wallet) is a separate system. See the guide on [Gemini Autofill with Personal Intelligence](/blog/gemini-autofill-personal-intelligence/) for the phone-wide Autofill service. Chrome’s enhanced autofill is browser-specific and currently limited to Gmail.

![Laptop and phone on a desk](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80)

## Troubleshooting

**No “Suggested by Gemini” chip appears.** Confirm Personal Intelligence is on, Gmail is connected, Chrome is up to date, and you are in the US rollout. Restart Chrome. The feature is still expanding.

**Wrong booking code or old tracking number.** Gmail may contain several similar messages. Long-press the suggestion, view the source, and dismiss the incorrect one. Archive or delete stale emails if they keep resurfacing.

**Feature missing on Android but present on desktop.** Rollouts can be staggered by platform. Wait or check the desktop Chrome settings path for comparison.

**Sensitive government or financial forms.** Fill them manually. Autofill mistakes on those pages are costly.

## Tips for cleaner results

- Keep booking and order confirmation emails in the inbox (or a clearly labelled label) rather than burying them in spam or promotions.
- Use a personal Gmail account. Workspace accounts do not receive the same Personal Intelligence connectors.
- Pair the feature with Gemini in Chrome’s side panel when you need to ask follow-up questions about the same trip or order.
- After a trip ends, disconnect Gmail from Personal Intelligence or turn enhanced autofill off if you prefer the narrower traditional autofill behaviour.

## Conclusion

Chrome’s Suggested by Gemini autofill removes one common reason to switch tabs while checking in for a flight or tracking a package. The feature is opt-in, limited to Gmail for now, and fully reversible in settings. Enable Personal Intelligence, turn on enhanced autofill, and always confirm the suggested value before you submit.

The rollout is US-only at launch and requires Gemini in Chrome. Once it reaches your account the practical steps above are enough to start using it on Android.

## Sources

- [Chrome enhanced autofill now pulls data from Gmail](https://blog.google/products-and-platforms/products/chrome/enhanced-autofill-gmail/) — Google, 28 October 2026
- [Chrome’s enhanced autofill can now pull info from Gmail](https://www.theverge.com/tech/1020626/chrome-enhanced-autofill-gmail-forms-gemini-personal-intelligence) — The Verge
- [Gemini in Chrome: Help right where you need it](https://www.youtube.com/watch?v=56b9uHAcHYc) — Google Chrome on YouTube
- [How to Use Gemini Autofill with Personal Intelligence](/blog/gemini-autofill-personal-intelligence/) — Yum News
