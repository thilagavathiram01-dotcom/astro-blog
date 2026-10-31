---
title: "How to Fix Android and Google Calendar After Canadian Permanent DST"
description: "Step-by-step fixes for Android clocks and Google Calendar events after Canada's permanent daylight saving time starts Nov 1, 2026."
pubDate: 2026-10-31T16:00:00
heroImage: "https://images.unsplash.com/photo-1525562929550-63ef340cfe1d?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "how-to", "google", "tutorials"]
noindex: false
---

Several Canadian provinces and territories end the twice-yearly clock change on November 1, 2026. They stay on permanent daylight saving time instead. Google warns that some Android phones and Google Calendar events may show the wrong time if they have not received the latest time-zone updates.

This guide walks through the exact steps Google published for Android devices and Calendar. It covers British Columbia, Alberta, Manitoba, the Northwest Territories, and parts of northwestern Ontario.

## Affected regions and new offsets

Google lists these permanent offsets after the change:

| Province / Territory | New permanent offset | Example time zone IDs |
|----------------------|----------------------|-----------------------|
| British Columbia | UTC-07:00 | America/Vancouver |
| Alberta & NWT (Yellowknife) | UTC-06:00 | America/Edmonton |
| Northwest Territories (Inuvik) | UTC-06:00 | America/Inuvik |
| Manitoba & parts of NW Ontario | UTC-05:00 | America/Winnipeg |

Saskatchewan and Yukon already stayed on permanent time. Other provinces still fall back one hour on November 1.

![Wall clocks showing different time zones](https://images.unsplash.com/photo-1525562929550-63ef340cfe1d?auto=format&fit=crop&w=800&q=80)

## Fix the Android system clock

Outdated phones may still turn the clock back an hour. Google’s first recommendation is simple.

1. Install any pending system updates from your phone maker and Google.
2. Restart the device.

If the time is still wrong after the restart:

1. Open Settings.
2. Search for Date and Time.
3. Turn on Automatic time zone.
4. Turn on Use location for time zone.

If location detection still fails, set the zone manually:

1. Open Settings and search for Date and Time.
2. Turn off Automatic time zone.
3. Tap Time Zone.
4. Choose Region, then Canada.
5. Select the entry that matches your new permanent offset (UTC-7 for most of BC, UTC-6 for Alberta and most of NWT, UTC-5 for Manitoba).

Older phones that no longer receive updates may need the manual method permanently. After you set the correct offset, alarms and notifications use the new local time.

## Fix Google Calendar events

Some events created before Google updated the time-zone database appear one hour later than intended starting November 1. Google automatically shifts most single events and simple recurring events back to the original local time during October. Guests must RSVP again after the shift.

The one-click fix only appears on the web version of Calendar, not in the Android or iOS apps.

### Fix a single event on the web

1. Open [Google Calendar](https://calendar.google.com) on a computer.
2. Open an affected event (it may show a warning badge).
3. Click **Move one hour earlier**.
4. Or click **Keep current time** if the displayed time is already correct.

You need organizer rights or “Make changes” access.

### Fix a recurring series

Custom exceptions (different guests, rooms, or descriptions) can be lost if you apply the change to the whole series. Google’s recommended sequence:

1. Open the next occurrence after November 1.
2. Click **Move one hour earlier**.
3. Choose **This and following events**.
4. Recreate any custom changes on future instances one by one.

After any shift, verify that conference rooms are still available. A room booked under the old offset may decline the corrected time.

Invitations from Outlook organizers are not auto-corrected. Contact the organizer and ask them to resend the invitation with the updated time. Do not forward the existing event.

![Smartphone next to an analog clock](https://images.unsplash.com/photo-1718907008657-df02de7253c9?auto=format&fit=crop&w=800&q=80)

## Extra checks for Workspace admins and travelers

Workspace admins should tell users to use the web Calendar for the one-click banner. Do not run bulk scripts; they can corrupt data. Room conflicts are common when meetings move. Organizers receive an email if a room declines; always recheck availability.

Travelers into or out of the affected regions should confirm the device clock on November 1. The same location and manual steps work while visiting. For general Android settings help, see our guide to [Android 17 Advanced Protection features](/blog/android-17-advanced-protection-six-features/).

## Video: set date and time on Android

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/0n91gETET2Q"
    title="How to Change Date & Time on Android"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips to avoid missed meetings

- Update and restart every Android and ChromeOS device before November 1.
- Check Calendar on the web for warning badges after the automatic shift.
- Confirm room bookings after any manual move.
- Keep the Calendar mobile app updated so it receives the latest time-zone data.
- If discrepancies remain between web and app, temporarily set the phone to a matching GMT offset and recheck.

## Conclusion

Permanent daylight saving time removes the autumn clock change for millions of Canadians, but the short notice means some devices and older Calendar events need a manual check. Update, restart, enable location-based time zone detection, or pick the correct Canada offset. On Calendar, use the web banner to move affected events one hour earlier. A few minutes of verification on November 1 keeps alarms and meetings on the correct local time.

## Sources

- Google Canada: What the Canadian Time Zone Changes Mean for Your Google Products
- Google Workspace Help: Manage Canadian daylight saving time changes for Calendar
- Google Calendar Help: Fix Calendar events for Canadian daylight saving time
- Android community guidance reported by The Verge and 9to5Google
