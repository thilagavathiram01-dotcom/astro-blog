---
title: "How to Use Gemini Autofill with Personal Intelligence"
description: "Turn on Gemini Intelligent Autofill on Android: connect Personal Intelligence, fill complex forms from Gmail and Photos, and keep the link opt-in."
pubDate: 2026-09-26T14:00:00
heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "gemini", "productivity", "tutorials", "how-to", "google"]
noindex: false
---

Android Autofill used to stop at names, addresses, and saved cards. Gemini Intelligence changes that. Google says Autofill with Google can pull details from apps you connect through Personal Intelligence and drop them into the small fields on a phone form.

The connection is opt-in. You choose which apps Gemini may read. You can turn the link off later. This guide covers setup, a first form, and the cases where you should fill the page yourself.

## What Google actually shipped

On 12 May 2026, Google introduced Gemini Intelligence on Android. One section is form fill. Autofill with Google can use Personal Intelligence so the phone fills more fields across apps, including Chrome.

Google's example in The Android Show: I/O Edition is a flight booking. You know your legal name. You do not remember passport numbers. If a photo of the passport already sits in Google Photos, the phone can place that data into the airline form after you confirm.

Google names Wallet, Gmail, and Photos as sources that can feed the same flow. Treat that list as the official set until Settings on your phone shows more connectors.

![Person filling a form on a smartphone at a desk](https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80)

## Who can use it

Gemini Intelligence started on recent Samsung Galaxy and Google Pixel phones and is expanding to watches, cars, glasses, and laptops. Autofill that talks to Gemini still needs:

- An Android phone that already received the Gemini Intelligence wave for your model
- Gemini set as a usable assistant on the device
- Personal Intelligence enabled with the apps you trust
- Autofill with Google selected as the Autofill service

Personal Intelligence itself launched earlier as a U.S. beta for personal Google accounts. Google's January 2026 post said Workspace business, enterprise, and education accounts were out of that beta. If you only have a work profile, do not expect the same connectors.

## Step 1: Set Autofill with Google

1. Open **Settings → Passwords, passkeys and accounts** (wording varies; some phones use **Passwords & accounts**).
2. Tap **Autofill service** or **Autofill with Google**.
3. Choose **Google** if another manager is selected.
4. Confirm saved addresses and payment methods look correct. Gemini does not invent a card you never stored.

Keep a screen lock on. Autofill will still ask you to confirm sensitive values on many sites.

## Step 2: Turn on Personal Intelligence

Google's Personal Intelligence help path is inside the Gemini app:

1. Open **Gemini**.
2. Open **Settings**.
3. Tap **Personal Intelligence**.
4. Open **Connected Apps**.
5. Enable only the sources you want Autofill to read. Start with **Gmail** and **Photos** if you plan to fill travel or return forms.

Connect the smallest set that matches the form you actually fill. A receipts folder in Gmail is useful for an order-number field. A full Photos library is useful for an ID scan. A YouTube history is not.

If you already use Daily Brief, you may have Memory and Personal Intelligence on. That does not mean Autofill is linked. Check the Autofill settings page for a Gemini or Personal Intelligence toggle after the Gemini Intelligence update lands.

## Step 3: Fill a real form

Use a low-risk page first: a store account, a conference registration, or a dummy airline search. Do not start with tax, banking, or a government portal.

1. Open the form in Chrome or the merchant app.
2. Tap the first empty field so Autofill can offer a suggestion chip.
3. Review every value before you accept. Passport numbers, dates of birth, and order IDs must match the document, not a similar photo.
4. Submit only after you scan the page. Gemini can miss a middle name or pick an old address from Gmail.

Google's own Intelligence post is explicit: you stay in control, and you confirm. Treat a filled field as a draft.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/3TSdIYMX8pw"
    title="The Android Show: I/O Edition | Gemini Intelligence"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What belongs in Photos vs Gmail

**Photos.** Clear shots of a passport data page, a driver's license, or a vehicle registration. Crop extra people out. Google's demo assumes the document is already in Photos, not that Gemini hunts your camera roll without a match.

**Gmail.** Order confirmations, membership IDs, and booking codes. Subject lines that include the merchant name help retrieval.

**Wallet.** Payment instruments and IDs you already added there. Wallet is still the right place for cards you swipe in stores.

Do not photograph passwords or one-time codes for Autofill. Use a password manager and [the Android passkey transfer tools](/blog/android-passkey-password-manager-transfer/) when a site supports passkeys.

![Laptop and phone next to printed travel documents](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80)

## Pair it with Gemini in Chrome, not instead of it

Intelligent Autofill fills fields. It does not tap through a multi-page checkout or pick a delivery slot. For those jobs, use [Gemini in Chrome on Android](/blog/gemini-in-chrome-android/) and Auto Browse where your plan and region allow it.

A clean split:

- **Autofill:** static facts that already live in Gmail, Photos, or Wallet
- **Auto Browse:** clicks, searches, and appointments on the open web
- **Multi-step Gemini tasks:** food and rideshare flows Google fine-tuned on Galaxy S26 and Pixel 10

Do not paste a passport number into a Gemini chat so Autofill can "learn" it. Store the scan in Photos or type it once into a password manager note you control.

## Privacy settings worth checking

Connecting Gemini to Autofill is opt-in. Google's Intelligence post says you can turn the connection off in settings. Do that after a one-off travel week if you do not want Photos in the Autofill path.

Also review:

- **Personal Intelligence → Connected Apps** for each source
- Chrome Autofill entries you no longer use
- Work profiles. Keep personal Gemini off a managed profile unless IT documented the feature

Google published a separate security and privacy explainer for Gemini Intelligence. Read that page before you connect Photos if the library includes documents you would not show a colleague.

## Troubleshooting

**No Gemini chip on the form.** The phone may lack the Intelligence drop, Autofill may still point at another manager, or Personal Intelligence may be off. Update Gemini, Gboard, and Chrome from Play Store, then reboot.

**Wrong passport or old address.** Photos and Gmail hold more than one copy. Delete or archive the stale scan. Confirm the Autofill suggestion instead of tapping the first chip.

**Workspace account only.** Personal Intelligence's original beta excluded work and school accounts. Use a personal Gmail on the same device only if policy allows it.

**Sensitive government forms.** Fill them by hand or on a computer. Autofill mistakes on those pages are expensive.

## Conclusion

Gemini Autofill is useful when the fact already exists in a connected app and the form is ordinary. Connect Personal Intelligence, keep Autofill pointed at Google, and confirm every sensitive field. Use Chrome Auto Browse for the clicks Autofill cannot take.

Turn the Gemini link off when you do not need it. The value is a shorter form, not a new place to store identity documents.

## Sources

- [A smarter, more proactive Android with Gemini Intelligence](https://blog.google/products-and-platforms/platforms/android/gemini-intelligence/) — Google, 12 May 2026
- [Personal Intelligence: Connecting Gemini to Google apps](https://blog.google/innovation-and-ai/products/gemini-app/personal-intelligence/) — Google
- [The Android Show: I/O Edition | Gemini Intelligence](https://www.youtube.com/watch?v=3TSdIYMX8pw) — Android on YouTube
- [Gemini Intelligence security and privacy](https://blog.google/security/android-gemini-intelligence-security-privacy) — Google
