---
title: "How to Use Wait Until in Google Workspace Studio"
description: "Learn how to pause and schedule Google Workspace Studio flows with the new Wait until step for timed email sequences and reminders. Step-by-step guide."
pubDate: 2026-11-10T14:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["google", "productivity", "how-to"]
noindex: false
---

Google Workspace Studio just added a Wait until step that lets you pause any flow and resume it later. You no longer need separate scheduled agents for multi-day sequences.

This change arrived on November 9, 2026, with full rollout across Rapid and Scheduled Release domains. The step works inside conditional branches and loops. It supports waits up to 14 days.

## Why the Wait until step matters

Before this update, a three-day follow-up email required two separate flows. One sent the first message. A second, scheduled flow sent the follow-up. Managing timing across agents added friction.

The Wait until step keeps the entire sequence in one flow. You define the pause once. Studio handles the resume automatically. Activity logs show the exact resume timestamp and time zone.

## How to add a Wait until step

Open Workspace Studio at studio.workspace.google.com or from the Studio icon in Gmail or Chat. Create a new flow or edit an existing one.

Click + Add step. Search for or select Wait until. The configuration panel opens on the right.

Three modes appear:

- Specific day next week: Pick Monday through Sunday, a time of day, and time zone. Useful for weekly digests that should post at 8 AM.
- Specific day and time: Choose 0 to 13 days ahead, a time, and time zone. Ideal for follow-ups three days after a meeting at 5 PM.
- After a set duration: Enter a number and unit (hours, minutes, or seconds). Maximum total wait is 14 days.

Save the step. Place it anywhere after a starter or between other actions. You can nest it inside Check if branches or Repeat for each loops.


![Person working at a laptop in a modern office](https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80)


## Build a timed email follow-up sequence

Here is a practical example. Trigger on a new customer meeting. Send a thank-you email immediately. Wait three days. Send a check-in message in Chat.

1. Add a starter based on a meeting. Select the relevant calendar event or every meeting.
2. Add an Ask Gemini or Send email step for the immediate thank-you.
3. Insert Wait until. Choose Specific day and time. Set Days to wait to 3. Pick 5:00 PM and your time zone.
4. Add a Send a message step that posts to the team Chat space or a direct message.
5. Test the flow. Studio shows the scheduled resume time in the Activity tab.

While paused, the flow appears under Activity with the status “Waiting until {datetime}”. After resume it logs “Flow resumed on {datetime}”.

## Monitor and adjust waits

The Activity tab lists every paused run. You see the planned resume time and time zone. No admin controls exist for this feature. End users enable it by building the flow.

Variables capture wait details. Click + Variables on later steps to insert Wait start time, Wait end time, or Wait time in seconds. Use these in Gemini prompts or message bodies for dynamic content.

## Tips for reliable timing

Keep total wait under 14 days. Longer sequences still need multiple flows or external scheduling.

Test with short durations first. A 5-minute wait verifies the path before you commit to multi-day pauses.

Combine with existing skills and webhooks. Our guide on [automating Workspace Studio with webhooks](/blog/how-to-automate-google-workspace-studio-with-webhooks/) shows how to trigger external systems after a wait ends.

Place Wait until after actions that produce data you need later. Variables from earlier steps remain available after the pause.

## Availability and rollout

The feature is available on Business Starter, Standard, and Plus; Enterprise Standard and Plus; Education Fundamentals, Standard, and Plus; Google AI Pro for Education; Teaching and Learning; and AI Expanded Access.

Rollout began November 9, 2026. Most domains see it within 1–3 days.


![Team collaborating around a conference table with laptops](https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80)


## Get started video

Watch the official overview of Workspace Studio flows before you add waits:

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/ZOAszesMBGc"
    title="Get started with Google Workspace Studio"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

The Wait until step removes the need to split timed sequences across multiple agents. You build one flow, set the pause, and Studio resumes on schedule. Start with a simple three-day follow-up and expand from there.

## Sources

- Google Workspace Updates: Pause and schedule automated workflows with the new “Wait until” step in Workspace Studio (November 10, 2026)
- Workspace Studio Help: Wait until step details
- Google Workspace Developers: Get started with Google Workspace Studio (YouTube)
