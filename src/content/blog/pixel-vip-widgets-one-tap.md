---
title: "How to Use Pixel VIP Widgets for One-Tap Calls and Texts"
description: "Set up Pixel VIPs on Pixel 6 and newer: add contacts in Google Contacts, place the home screen widget, use one-tap call and text, notification badges, and the floating switcher from the September 2026 Pixel Drop."
pubDate: 2026-09-19T21:00:00
tags: ["android", "pixel", "tutorials"]
heroImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1600&q=80"
---

Pixel VIPs is a Google Contacts feature for Pixel 6 and later phones. You mark a small set of people as VIPs, drop a widget on the home screen, and keep last messages, birthdays, shared location, and quick actions in one place.

The [September 2026 Pixel Drop](https://blog.google.com/products-and-platforms/devices/pixel/september-2026-pixel-drop/) updated those widgets. You can call or text a VIP with one tap, switch people with a floating bar at the bottom of the overlay, and see notification badges for unread Messages and WhatsApp chats. This guide follows Pixel Phone Help and that official drop post.

![Person holding a smartphone with contacts and messaging on screen](https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=1400&q=80)

## What you need

Pixel Help lists these requirements:

- A **Pixel 6 or later**, including Pixel Fold models
- Current **Google Contacts** (and, for the 2026 widget refresh, Contacts 4.77 or newer plus Pixel VIPs service 2.0 when Google has enabled it on your account)
- Updated **Pixel Weather** if you want local time and weather for a VIP
- Updated **WhatsApp** if you want last WhatsApp messages and calls on the card

Your VIPs can use iPhone or Android. They do not need a Pixel. Location on the widget only appears if they already share location with you in Google Maps (or a supported Find Hub flow) using the same email you stored on the contact.

Google’s original product clip still shows the idea: a home-screen strip for the people you actually call.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/gMpiZitWNes" title="Give the VIP Treatment | June 2025 Pixel Drop — Made by Google" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Add people as Pixel VIPs

Pixel Help currently lets you mark **up to 16** people. Earlier write-ups mentioned eight; use the in-app limit you see after Contacts is updated.

1. Open the **Google Contacts** app.
2. Tap **Organize** at the bottom right, then **Pixel VIPs**.
3. Tap suggested people, or tap **Add** and search your address book.
4. Grant the permissions the setup flow asks for (SMS / Messages, WhatsApp, and location are separate).
5. Finish onboarding.

VIPs are added to **Favorite contacts**. Favorites can bypass Do Not Disturb unless you turn that off in Contacts or Sound settings. That is useful for a partner or a parent. It is a problem if you VIP someone you do not want ringing through Focus modes.

You can also manage the list later:

- From the widget: **Settings** → **Manage your VIPs**
- From the VIP overlay: menu → **Manage your VIPs**
- From a contact card: tap the VIP tag → **Manage your VIPs**

## Put the widget on the home screen

1. Touch and hold empty space on the home screen.
2. Tap **Widgets**.
3. Open **Contacts**.
4. Choose a **VIPs** widget size and drop it on the grid.

If setup offered **Add to Home screen**, that places the same widget. After the September drop, the useful sizes are the ones that show faces plus a call and a message action. Reporting on the 2.0 layout notes that packing too many faces onto one row can fall back to a denser, older-looking strip. Prefer four or fewer faces on a single widget if you want the new one-tap buttons to stay visible.

You can add more than one widget (for example one for family, one for a single person). Adding a single-person widget still uses the same VIP list in Contacts.

![Home screen widgets on an Android phone](https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=1400&q=80)

## Use one-tap call, text, and the floating switcher

This is what the September Pixel Drop changed.

**Call or text from the widget.** On the updated layout, tap the call or message control next to a VIP instead of opening the sheet first. The action uses the default phone or messaging app for that number. WhatsApp shortcuts still depend on the WhatsApp permission you granted during setup.

**Open the VIP card.** Tap the photo or name to open the overlay. Pixel Help says you will see:

- Last connection (last Google Messages or WhatsApp thread, and last call)
- Significant dates (birthday, anniversary) if those fields exist on the contact
- A **Memo** field for gift ideas or notes stored on device
- Notification badges for unread Messages and WhatsApp items from that person
- Location and safety extras when sharing is on (real-time Maps share, local time and weather, crisis alerts)

**Switch VIPs without backing out.** Help now documents a **floating toolbar** at the bottom of the overlay. Swipe it, or touch and hold it, to move to the next VIP. Reporting on version 2.0.97 also describes tapping a face in that strip to jump. You stay in the overlay instead of returning to the home screen between people.

If the new toolbar is missing, update Contacts from Play Store, force-stop Contacts once, and confirm the September Pixel Drop / Android 17 QPR1 package is installed under Settings → System → Software update. Google rolled the visual refresh after the 15 September announcement; some phones received QPR1 first and VIPs 2.0 a few days later.

## Make the card useful

The widget is only as good as the contact record.

- Put the **email they use in Google Maps** on the contact if you want shared location. Saving an email does not start sharing; they still have to share in Maps.
- Fill **birthday** and anniversary fields so the card can remind you.
- Use the **Memo** tab for details you do not want in a group chat: a clothing size, a school pickup time, a preferred calling window.
- Keep WhatsApp and the phone number on the same contact. Split numbers produce empty “last connection” rows.

Pixel Help is explicit about data sources: Contacts fields, Phone call history, Android Messages, WhatsApp last message and last call, and Maps location when the other person opted in. Preference prompts (food, books, music) stay on device and may feed local suggestions. They are not a second social network.

## Do Not Disturb, badges, and WhatsApp quirks

Because VIPs become Favorites, their calls and messages can cut through DND. After you add someone, open that contact and confirm the star / favorite state matches what you want.

Notification **badges on the widget** are the September addition. They are glanceable unread markers for Messages and WhatsApp, not a replacement for the notification shade.

If WhatsApp priority or last-message rows look wrong, Help points at two common causes:

- **Companion Mode** (WhatsApp Web, a tablet, or a second phone linked to the same account) can skip notification priority on that companion.
- Contact sync inside WhatsApp. Help’s first fix is WhatsApp → Settings → Privacy → Contacts → turn **WhatsApp contacts** off, then restart the phone. For one person, open their WhatsApp chat → name → Edit → turn off **Sync contact to phone**, then restart.

## What this is not

Pixel VIPs is not a family-locator product by itself. Without Maps sharing, you only get last chats and dates. It is not available on non-Pixel Android as a first-party widget. Samsung and other skins have their own favorite-contact widgets; those are separate apps.

Activity carousels such as “things to do together” appeared in the 2025 launch. Do not depend on that row after the 2026 redesign if it is gone on your build. One-tap actions, badges, and the floating switcher are the features Google called out in the September drop.

## Troubleshooting

- **No Pixel VIPs item in Organize.** Confirm Pixel 6 or newer, update Contacts, and wait for Play Store / server flags. Force-stop Contacts after the update.
- **Widget still looks like Favorites.** You placed the old Favorites widget. Delete it and add **VIPs** under Contacts widgets.
- **No call or text buttons on the strip.** You likely have the pre-drop layout or too many faces on one row. Update to VIPs 2.0 / Contacts 4.77+ and try a wider widget with fewer people.
- **No location.** The VIP must share Maps location to the email on the contact. Check Maps → Location sharing, not only the Contacts email field.
- **WhatsApp last message empty.** Grant WhatsApp permission again from Pixel VIPs settings and check Companion Mode.

## Conclusion

Treat Pixel VIPs as a short list, not a second address book. Add the people you already text every week, put a compact widget on the first home screen, and use the September drop’s one-tap call and text controls instead of opening the phone app. Fill birthdays and the Maps email so the overlay is more than a pretty Favorites row. Then leave everyone else out of the VIP list so Do Not Disturb still means something.

## Sources

- [Quickly access your favorite contacts with Pixel VIPs — Pixel Phone Help](https://support.google.com/pixelphone/answer/16302790)
- [September Pixel Drop: New Pixel VIP updates, Pixel Watch features, and more — Google](https://blog.google.com/products-and-platforms/devices/pixel/september-2026-pixel-drop/)
- [Here’s how to get the most out of Pixel VIPs — Google](https://blog.google.com/products/pixel/use-pixel-vips/)
- [Give the VIP Treatment | June ’25 Pixel Drop — Made by Google (YouTube)](https://www.youtube.com/watch?v=gMpiZitWNes)
- [Add apps, shortcuts, and widgets to your home screens — Pixel Help](https://support.google.com/pixelphone/answer/2781850)
