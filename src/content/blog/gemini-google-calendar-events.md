---
title: "How to Create and Manage Google Calendar Events with Gemini"
description: "Connect Google Workspace to Gemini Apps, create and reschedule events with @Google Calendar, use secondary calendars, and let Gemini suggest meeting times in Calendar and Gmail."
pubDate: 2026-09-19T20:15:00
tags: ["ai-tools", "gemini", "tutorials"]
heroImage: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1400&h=735&q=80"
---

Google Calendar already holds the meetings that fill a week. **Gemini Apps** can create, find, move, and cancel those events from a chat, a photo of a flyer, or a pasted email — if you connect Workspace and write prompts that name a calendar.

This guide follows Gemini Apps Help and Google Calendar Help. Features vary by account type: consumer Gemini Apps work against connected calendars; **Suggested times** inside Calendar and **Help me schedule** in Gmail need an eligible Workspace or Google AI plan.

![Planner, calendar pages, and a laptop on a desk](https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1400&q=80)

## What you need before you start

Gemini Apps Help lists two prerequisites:

- You are **signed in** to the Gemini app or [gemini.google.com](https://gemini.google.com) with the same Google account you use for Calendar.
- **Keep Activity** is on. Gemini cannot connect calendar apps when this setting is off.

Supported calendars in Gemini Apps include **Google Calendar** plus several OEM apps: HONOR, OPPO, Samsung, TECNO, and Xiaomi Calendar. Calendar tools are **not** available in Gemini inside Google Messages.

Google also warns that Gemini can invent or stale details. After a response, open the listed sources or tap the event link and confirm the time in Calendar itself.

## Connect Google Workspace to Gemini Apps

Calendar writes go through the Workspace connection, not a hidden Calendar-only toggle.

1. Open [gemini.google.com](https://gemini.google.com) on a computer (or the Gemini mobile app).
2. Sign in with the account that owns the calendar you care about.
3. Ask Gemini to create or show an event, for example: `What's on my calendar tomorrow?`
4. If Workspace is not connected, accept the on-screen prompt and finish the permission flow.
5. To force the Calendar tool, add `@Google Calendar` to the prompt.

You can later disconnect Workspace from [Connected Apps](https://gemini.google.com/apps). Official help also documents how Gemini exchanges data with connected apps — read that page if you share a family or work calendar.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/lHY1i913lcM" title="Use Gemini in Gmail to check your calendar and add events — Google Workspace" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Create events from a prompt

Gemini Apps Help groups creation into two patterns: a fully specified event, and an event inferred from other content.

**Give the time, day, and title**

- `Create an event for 3 PM on Thursday to call the landlord.`
- `Add Dentist appointment to my primary calendar for next Tuesday at 10 AM and add a description saying bring insurance card.`
- `@Google Calendar add team standup Friday 9:30 AM.`

**Use the conversation as the source**

- After Gemini summarizes a mail: `Add the event to my calendar.`
- Paste itinerary or ticket text, then: `Add these to my calendar.`
- Attach or photograph a flyer: `Check my calendar and see if I’m free for the concert in Austin this year.`
- `Create an itinerary for a 1-day trip in San Francisco with times. Add them to my calendar.`

Useful phrases from the official tips: include **“Add this to my calendar”** or **“@Google Calendar add this event.”** After Gemini writes the event, a confirmation appears. Use **Undo** there if the slot is wrong. Some actions cannot be undone — notably an email already sent to guests after a modification. Events created while **Gemini Live** ran in the background also cannot be undone from chat.

Gemini creates events on your **default calendar** unless you name another calendar you can edit.

![Person checking a weekly schedule on a tablet](https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1400&q=80)

## Secondary and shared calendars

Google’s Gemini Apps community and current help both state that Gemini can search, create, and manage events on **secondary and shared calendars**, not only the primary calendar. That matters for a family calendar, a side-project calendar, or a shared household list.

Try prompts like:

- `What do I have scheduled on my Family calendar this weekend?`
- `Find my workout schedule for this week.`
- `Move my Grocery Trip on my shared calendar to Friday at 5 PM.`

You still need **edit access** on that calendar. If Gemini puts an event on the wrong calendar, say the calendar name in the next turn or open Calendar and drag the event.

## Find events without opening Calendar

Ask for a day, a range, or a person:

- `What’s on my calendar today?`
- `When’s my first meeting tomorrow?`
- `How many meetings do I have today?`
- `What am I doing this weekend?`
- `When is my next meeting with Priya?`
- `When is my meeting about the Q3 budget?`
- `Where is the concert tonight?`

Tap the event in the chat to open it in Google Calendar when you need the map pin, Meet link, or guest list.

## Edit or cancel events

Gemini can change the **name**, **day**, and **time** of an event. Official help is explicit about what it still cannot do:

- Add or invite people
- Add or update the **location** or **description** of an **existing** event

Finish those fields in [Google Calendar](https://calendar.google.com/).

Example edit prompts:

- `The event is actually on Wednesday. Can you change that?`
- `Reschedule design review on Thursday to Friday 2 PM.`
- `On my calendar, change the name of Sync with Alex to Project kickoff.`
- `When’s my last meeting today with Sam? Change it to 4 PM.`

Include the words **event** or **calendar** so Gemini treats the request as an update, not a new booking.

Cancel with:

- `Cancel my next meeting with Sam.`
- `Thursday office hours was canceled. Remove it from my calendar.`

## Suggested times inside Google Calendar

Separate from Gemini Apps chat, **Gemini in Google Calendar** can propose slots when you create or move a meeting. Calendar Help requires an **eligible Workspace plan**.

**When you create an event**

1. Open Google Calendar on a computer.
2. Click **Create**, then **Event**.
3. Add guests.
4. Click **Suggested times**.
5. Pick a slot, or open **More suggestions**. You can also edit on the grid and use **Filter and view** to toggle rooms and required versus optional guests.

**When you reschedule**

1. Open the event and click **Edit event**.
2. Click **Suggested times**.

If you organized the meeting and several guests decline, Calendar may show a banner with a time when everyone is free. Accept it with **Reschedule to [date and time]**.

Workspace Updates (January 2026) notes that suggestions consider time zones, working hours, and conflicts when you can see colleagues’ calendars. Availability listed then included Business Standard and Plus, Enterprise Standard and Plus, and Google AI Pro for Education. Confirm current plan coverage in admin settings if the button is missing.

![Conference table with laptops during a scheduling discussion](https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=80)

## Help me schedule from Gmail

On an eligible Workspace or Google AI plan, Gmail can propose times without leaving the draft.

1. Open Gmail on a computer.
2. Start or reply to a message that includes recipients.
3. At the bottom of the draft, click **Help me schedule** (under **More options** if the button is hidden).
4. Review the suggested slots. Gemini in Gmail proposes **four** times by default.
5. Hover **Edit in Calendar** to change duration, time range, time zone, or guests. Green slots mean all guests look free; amber means at least one conflict.
6. Click **Propose times**.

Google Workspace also documented Calendar actions from **Gemini in Gmail on Android and iOS**: ask the side panel to create, edit, or delete an event, or to summarize the day. Tapping the pencil on a created event opens a quick editor; tapping the event opens Calendar.

## Practical workflow for a busy week

1. Connect Workspace once and leave Keep Activity on.
2. Dump raw text — emails, flyers, itineraries — into Gemini with `@Google Calendar` and a clear calendar name.
3. Confirm the first few writes in Calendar until you trust the default calendar choice.
4. Use Gemini Apps for find / move / cancel. Use Calendar’s **Suggested times** when guests and rooms matter.
5. Use Gmail **Help me schedule** when the negotiation already lives in a thread.
6. Always add guests, location, and a Meet link in Calendar. Gemini Apps will not invite people for you.

If a prompt fails, name the calendar, include the word **event**, and avoid stacking invite-plus-location-plus-description in one sentence. Split the job: Gemini writes the time block; you finish the details in the calendar UI.

## Conclusion

Gemini does not replace Google Calendar. It shortens the path from “this email has a time in it” to a block on the right calendar. Connect Workspace, keep Activity on, use `@Google Calendar`, name secondary calendars when you have them, and finish guests and locations in Calendar. For team meetings on a Workspace plan, let **Suggested times** and **Help me schedule** do the conflict search instead of scrolling three grids yourself.

## Sources

- [Create & manage your calendar events with Gemini Apps](https://support.google.com/gemini/answer/15305236) — Gemini Apps Help
- [Use & manage Connected Apps in Gemini](https://support.google.com/gemini/answer/13695044) — Gemini Apps Help
- [Connect Google Workspace apps & services to Gemini Apps](https://support.google.com/gemini/answer/15229592) — Gemini Apps Help
- [Let Gemini in Google Calendar find times to meet](https://support.google.com/calendar/answer/16690875) — Google Calendar Help
- [Suggest times to meet with Gemini in Gmail](https://support.google.com/calendar/answer/16865189) — Google Calendar Help
- [Better time suggestions for meeting with your colleagues using Gemini in Google Calendar](https://workspaceupdates.googleblog.com/2026/01/improved-meeting-suggestions-gemini-calendar.html) — Google Workspace Updates
- [Ask Gemini in Gmail on mobile to perform Google Calendar related actions](https://workspaceupdates.googleblog.com/2025/05/reference-google-calendar-using-gemini-in-gmail-on-mobile.html) — Google Workspace Updates
- [New: Manage Your Secondary and Shared Google Calendars with Gemini](https://support.google.com/gemini/thread/405845474) — Gemini Apps Community
- [Use Gemini in Gmail to check your calendar and add events](https://www.youtube.com/watch?v=lHY1i913lcM) — Google Workspace
