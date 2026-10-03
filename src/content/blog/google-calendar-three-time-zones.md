---
title: "How to Display Three Time Zones in Google Calendar"
description: "Show a primary, secondary, and tertiary time zone on the Google Calendar web grid, add labels, and schedule across regions."
pubDate: 2026-10-03T09:30:00
heroImage: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["google", "productivity", "tutorials", "how-to"]
noindex: false
---

Scheduling a call with teammates in San Francisco, New York, and Zurich used to mean a second clock and a calculator. Google Calendar on the web now shows a primary, secondary, and tertiary time zone on the same grid.

The change started rolling out on September 25, 2026. Before that, the grid only showed a primary and a secondary zone. The extra column is available to Google Workspace customers, Workspace Individual subscribers, and personal Google accounts. There is no admin switch.

## What the third time zone actually shows

Google Calendar still stores events in Coordinated Universal Time and displays them in each person's local zone. Guests see the event in their own local time, even if you created it in another zone.

The new display is a reading aid, not a third calendar. On Day, Week, and custom multi-day views, up to three labeled columns sit on the left of the grid. Find a time, used while you create or edit an event, can show the same three zones. Month view does not add those columns.

Google also lets you label each display zone in Settings, with examples such as SFO, NYC, or ZRH. Labels are for you. They do not change the time stored on the event.

![Desk calendar and planner used to compare dates across a week](https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80)

## Check whether the tertiary zone has reached your account

Rollout is staggered. An October 1, 2026 update on the Workspace blog set these windows:

- Rapid Release domains: extended rollout from September 25, expected to finish by October 13.
- Scheduled Release domains: full rollout starting October 18 and expected to finish by October 22. An earlier line in the same post still said October 19, so treat mid-to-late October as the window rather than a single day.

If Settings only offers a secondary zone, wait for the rollout. Refreshing the page will not force it.

## Turn on secondary and tertiary time zones

Use Calendar on a computer at [calendar.google.com](https://calendar.google.com/). The help page does not list a matching mobile control for the extra grid columns.

1. Open Google Calendar.
2. At the top right, open the Settings menu and choose Settings.
3. On the left, under General, select Time zone.
4. Check Show additional time zones.
5. Under Secondary time zone, search for a city or country and select the zone.
6. Under Tertiary time zone, select the third zone. Google marks this step as optional.
7. Add a short label if the label field is present, then leave Settings. The columns appear on the left of Day, Week, and custom multi-day views.

Search by city is the picker Google shipped in March 2026, so you do not have to scroll a long offset list.

Your primary zone is separate. Change it in the same Time zone section if the account still shows your old home city. You can also turn on Ask to update my primary time zone to current location so Calendar prompts you when you travel.

## Read the grid without mixing up the columns

The left column is your primary zone. The next columns are secondary and tertiary, in the order you set them. Hover or read the label before you lock a time. A 9:00 slot in the Zurich column is not 9:00 in the San Francisco column.

Working-hour overlap is the useful part. Scan the three columns for a block that sits inside everyone's daytime, then create the event in your primary zone. Invitees still receive it in their local time.

If you only need a clock and not a full column, the World clock setting is different. In Settings, open World clock, turn on Show world clock, and add zones. That widget does not replace the grid columns, and it is not limited to the same three-zone layout.

## Create an event in a specific zone

Display zones do not lock the event to one city. Set the event zone when the meeting should stay fixed to another place, such as a launch that must start at 10:00 in New York.

1. Click Create, then Create event, then More options.
2. Next to the time, click Time zone.
3. Search for a city or country and select the zone.
4. If the start and end should use different zones, click Use separate start and end time zones.
5. Click OK, fill in the rest of the event, and save.

To change an existing event, open it, choose Edit, click Time zone next to the time, pick the city, and confirm.

Only the calendar owner can change that calendar's time zone. If you manage someone else's calendar and the Time zone control is missing, you do not own it.

![Team collaborating around a laptop while planning a shared schedule](https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80)

## Daylight saving and travel gotchas

Calendar converts new events to UTC and shows them in local time. That handles most daylight-saving shifts. Google warns that events in past years, or far in the future, can display the wrong offset until the date moves closer and the display adjusts.

Tasks follow the calendar zone. A task set for 9:00 Mountain Time can show as 11:00 Eastern Time after the calendar zone changes from Denver to New York. Check task times after a trip or a primary-zone change.

If a region changes its official offset and Calendar has not picked up the rule yet, older events can land on the wrong hour. Recheck anything near a government time-zone change instead of trusting a year-old invite.

## Tips for global teams

- Label zones with airport or city codes so a guest does not have to decode GMT offsets.
- Keep the primary zone as the place you are working today. Use secondary and tertiary for the teams you schedule with most often.
- Use Find a time after the three zones are on. Google says that view displays up to three zones while you create or edit an event.
- Do not rely on the columns in Month view. Switch to Week when you are comparing hours.
- For a one-off city, set the event time zone instead of rewriting your display settings.
- If you also plan from Gemini, the three columns are still the source of truth for the clock. A related walkthrough is [how Gemini handles Google Calendar events](/blog/gemini-google-calendar-events/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/H9nSLrBlW0s"
    title="Add a secondary time zone in Google Calendar"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

The Google Workspace clip above covers the older secondary-zone flow. The path is the same: Settings, Time zone, show additional zones. The tertiary picker is the extra step in current help documentation.

## Conclusion

Three time zones on the Google Calendar web grid remove the side calculation for Day and Week planning. Turn on Show additional time zones, set secondary and tertiary cities, and label them if the field is there. Use an event-level time zone when one meeting must stay pinned to another city. If the tertiary option is missing, the Scheduled Release window runs through October 22, 2026.

## Sources

- [View up to three time zones in Google Calendar on the web](https://workspaceupdates.googleblog.com/2026/09/view-up-to-three-time-zones-in-google-Calendar-on-the-web.html) — Google Workspace Updates, September 25, 2026, updated October 1, 2026
- [Use Google Calendar in different time zones](https://support.google.com/calendar/answer/37064) — Google Calendar Help
- [Easily find and set time zones in Google Calendar by searching for city or country](https://workspaceupdates.googleblog.com/2026/03/easily-find-and-set-time-zones-in-Google-Calendar-by-searching-for-city-or-country.html) — Google Workspace Updates, March 16, 2026
- [Add a secondary time zone in Google Calendar](https://www.youtube.com/watch?v=H9nSLrBlW0s) — Google Workspace on YouTube
