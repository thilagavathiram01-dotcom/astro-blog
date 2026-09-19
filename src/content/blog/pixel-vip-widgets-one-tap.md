---
title: "How to Use Pixel VIP Widgets for One-Tap Calls and Texts"
description: "Set up Pixel VIPs on Pixel 6 and newer: add contacts in Google Contacts, place the home screen widget, use one-tap call and text, notification badges, and the floating switcher from the September 2026 Pixel Drop."
pubDate: 2026-09-19T10:00:00
tags: ["android", "pixel", "tutorials"]
heroImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=80"
---

Pixel VIPs is Google's home-screen lane for a short list of people you contact often. The original widget (June 2025 Pixel Drop) showed last calls, messages, shared location, and dates. You still had to open a sheet, then tap again to call or text.

The [September 2026 Pixel Drop](https://blog.google/products-and-platforms/devices/pixel/september-2026-pixel-drop/) changes that path. Google's announcement says the updated widgets let you call or text with a single tap, switch VIPs from a floating overlay at the bottom of the sheet, and see notification badges so unread Messages or WhatsApp threads are visible on the tile.

This guide follows Google's official Pixel Phone help article and the September drop post. Availability is Pixel 6 and later, including Fold models, and it depends on current Google Contacts and Pixel VIPs app versions plus a staged server rollout.

![Person holding a smartphone with a home screen full of widgets](https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=1200&q=80)

## What you need

Google's help page is explicit:

- A **Pixel 6 or later** (including Pixel Fold)
- Updated **Google Contacts**, **Pixel Weather**, and **WhatsApp** if you want WhatsApp last-message and last-call cards
- VIPs can use **any iOS or Android phone**; they do not need a Pixel
- Official cap in current help: **up to 16 people** as Pixel VIPs

September coverage from 9to5Google and Android Authority adds rollout detail that Google's blog does not spell out in the short drop post: the redesign is tied to **Pixel VIPs service 2.0** and **Google Contacts 4.77 or later**, and quick-action buttons are easiest to see on a **full-width** widget. If you add a large VIP list, the tile can fall back to a denser layout without the extra buttons. Treat that as reporting, not a second official spec sheet.

Update apps from Play Store, then wait if the new tile is missing. A staged flag is normal for Pixel Drops.

Official product clip from when VIPs first shipped (Made by Google). The September drop keeps this model and adds one-tap actions and badges:

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/gMpiZitWNes" title="Give the VIP Treatment | June 2025 Pixel Drop — Made by Google" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Step 1. Add Pixel VIPs in Contacts

Do this before you hunt for the widget. The widget is empty until the list exists.

1. Open the **Google Contacts** app.
2. At the bottom right, tap **Organize**, then **Pixel VIPs**.
3. When prompted, tap suggested people, or tap **Add** to search the full book.
4. Grant the permissions the onboarding flow asks for (messages, WhatsApp, location suggestions). Skip any permission you do not want; those cards will stay blank.

Google's help notes two side effects you should know before you tap Add:

- VIPs are added to **Favorite contacts**, so they can **bypass Do Not Disturb**.
- Location cards only work if that person already shares location with you in **Google Maps**, and the email used for sharing is saved on the contact card.

Keep the list short. A widget that tries to represent a dozen people becomes a second Contacts tab. Four or five people you actually call is enough.

## Step 2. Put the widget on the home screen

Google documents this path:

1. Touch and hold an empty spot on the Home screen.
2. Tap **Widgets**.
3. Open **Contacts**.
4. Choose the Pixel VIPs widget and drop it on the grid.

You can also add it from the Pixel VIPs onboarding screen when Contacts offers **Add to Home screen**.

Resize the tile after you place it. Call and text shortcuts from the September redesign are meant for the wide layout. A 2-column sliver will still open the VIP sheet; it just will not give you the one-tap row.

![Close-up of a smartphone on a desk, ready for home-screen customization](https://images.unsplash.com/photo-1523206484186-19960e2f1f3f?auto=format&fit=crop&w=1200&q=80)

## Step 3. Call or text from the widget

On a current September-drop build:

1. Find the VIP face or name on the widget.
2. Tap the **call** or **text** control on the tile if it is visible.
3. If you only see the face, tap it to open the VIP sheet, then use call, message, or video from there.
4. Use the **floating toolbar** at the bottom of the sheet to swipe to the next VIP, or touch and hold the toolbar as Google's help describes.

Google's drop post is the source for one-tap call/text, the overlay switcher, and badges. Android Authority's later look at Pixel VIPs **2.0.97** describes the same overlay as a strip of profile photos you can tap to jump, plus a pencil control that opens that person's contact editor. Use the official help for the supported gestures; treat third-party UI notes as a preview of one build.

Do not expect RCS, WhatsApp, and carrier SMS to share one button. The text action follows the default messaging app for that number. WhatsApp history on the card is separate and needs the WhatsApp permission.

## Step 4. Use badges, last connection, and dates

Once the widget is live, Google documents these cards inside the VIP experience:

- **Last connection** — last call or message in Google Messages or WhatsApp. Tap the snippet or the icons at the top to reopen that thread.
- **Notifications** — Messages and WhatsApp alerts for that VIP, now also as glanceable badges on the widget after the September drop.
- **Significant dates** — birthdays, anniversaries, and other dates saved on the contact.
- **Memo** — a short private note on that VIP (gift ideas, a school pickup time).
- **Local updates** — local time and weather where that person is, when location data is available.
- **Crisis alerts** — emergency or disaster alerts on the widget when Google can attach them to that location.
- **Location sharing** — live Maps location only if they shared it with the email stored on the contact.

Adding an email to the contact does **not** turn on location sharing. They must share from Google Maps while signed into that address.

Preference chips you type in the VIP sheet (food, books, music) stay **on the device**, according to Google. They are used to suggest activities, not to publish a public profile.

## Step 5. Remove or edit a VIP

Google lists three official exits:

- From the **widget**: open widget settings → **Manage your VIPs**.
- From the **VIP overlay**: menu → **Manage your VIPs**.
- From the **contact** in Google Contacts: VIP tag → **Manage your VIPs**.

Removing someone from VIPs does not delete the contact. It does stop DND bypass that came from the Favorite promotion, and it clears their tile from the widget.

## Permissions and data, in plain language

Google publishes what the feature reads from other apps:

| Source | What Pixel VIPs can show |
| --- | --- |
| Contacts | Numbers, dates, address, saved details |
| Phone | Last call with that person |
| Google Messages | Last SMS/RCS thread |
| WhatsApp | Last message and last call |
| Google Maps | Shared live location; weather and local time |

WhatsApp badges can fail in **Companion Mode** (tablet, second phone, or desktop linked session). Google's help says the priority path is built for the **main** phone. If contacts are double-synced, it also documents turning off **WhatsApp contacts** under WhatsApp → Settings → Privacy → Contacts, or turning off **Sync contact to phone** on that chat, then restarting.

Do not grant location just to get a prettier widget. Local time and crisis alerts are the only reason that permission matters.

## If the new widget is missing

Work the list in order:

1. Confirm the phone is Pixel 6 or newer.
2. Update Google Contacts, Pixel VIPs / relationships package if it appears in Play Store updates, WhatsApp, and Pixel Weather.
3. Open Contacts → Organize → Pixel VIPs and finish onboarding.
4. Add the Contacts → VIPs widget again; delete the old tile first if it is stuck on the pre-September layout.
5. Stretch the widget to full width and keep the VIP count small if you want the call/text row.
6. If the controls are still the old sheet-only flow, wait for the server-side flag. That is how this drop has been landing, not a hidden developer option.

Pixel VIP is not on non-Pixel Android as a first-party Contacts feature. Third-party “VIP widget” clones are a different product.

## A compact setup that actually gets used

1. Add three people you call every week.
2. Place one full-width widget on the primary home screen, not a secondary page.
3. Confirm each person has the phone number you actually dial, and WhatsApp only if that is how you write to them.
4. Turn on Maps sharing only for family members who already share location with you.
5. Write one memo (medication time, gate code, school pickup) instead of treating the sheet as a social feed.

That is the job the September drop is built for: fewer taps to reach the same small set of people, plus a badge when they wrote back.

## Conclusion

Pixel VIPs is still a Contacts feature with a home-screen face, not a new messaging app. The September 2026 Pixel Drop is worth the update if you already keep a short favorite list: one-tap call and text, badges, and a bottom overlay to move between people without backing out to the grid.

Start in **Contacts → Organize → Pixel VIPs**, add the widget from the picker, and keep the list short enough that the wide tile stays useful. For limits, permissions, and the official remove paths, use [Google's Pixel VIPs help article](https://support.google.com/pixelphone/answer/16302790) rather than a screenshot from a single beta build.

## Sources

- [September Pixel Drop: New Pixel VIP updates, Pixel Watch features, and more](https://blog.google/products-and-platforms/devices/pixel/september-2026-pixel-drop/) — Google Blog, 15 September 2026
- [Quickly access your favorite contacts with Pixel VIPs](https://support.google.com/pixelphone/answer/16302790) — Pixel Phone Help
- [September 2026 Pixel Drop](https://support.google.com/pixelphone/thread/466181739) — Google Pixel Community
- [Give the VIP Treatment | June ’25 Pixel Drop](https://www.youtube.com/watch?v=gMpiZitWNes) — Made by Google
