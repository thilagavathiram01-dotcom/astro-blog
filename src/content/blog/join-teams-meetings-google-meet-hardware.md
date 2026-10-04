---
title: "Join Microsoft Teams Meetings on Google Meet Hardware"
description: "Join Microsoft Teams meetings from Google Meet hardware rooms. Admin setup, meeting codes, and limits after the October 2026 GA."
pubDate: 2026-10-04T10:00:00
heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["google", "how-to", "productivity", "android"]
noindex: false
---

Mixed-vendor conference rooms no longer need a second dialing service just to reach a Microsoft Teams call. On October 1, 2026, Google made built-in interoperability between Google Meet and Microsoft Teams generally available on Android (AOSP) Meet hardware and Android-based Teams Rooms. The feature was in early preview in September. Rapid Release and Scheduled Release domains get a full rollout over one to three days.

This guide covers who can use it, how admins confirm the setting, and how people in the room join a Teams meeting from a Meet hardware device.

## What general availability actually covers

The October 1 launch adds two directions on Android-based room systems:

- Join Microsoft Teams meetings from Android (AOSP) Google Meet hardware devices.
- Join Google Meet meetings from Android (AOSP) Microsoft Teams Rooms devices.

ChromeOS Meet hardware could already join Teams meetings. Google announced that path on February 3, 2026, with the Admin console setting on by default. The October update extends the same built-in path to Android room devices and adds the reverse path from Teams Rooms into Meet.

Built-in Teams, Zoom, and Webex join from Meet hardware is included with paid Google Workspace licenses. Google says there is no extra cost. It is separate from Pexip Connect for Google Rooms, which is a paid subscription used for SIP calls and for Teams features the built-in path does not include.

You cannot join a Teams meeting from the Meet web app or the Meet mobile apps. Interoperability is a room-device feature.

![Conference table prepared for a video meeting](https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80)

## Confirm the admin setting before the first call

Microsoft Teams Direct Guest Join is on by default for the organization, including every organizational unit. Admins can still turn it off for a department.

To check or change the setting:

1. Open the Google Admin console.
2. Go to Menu, then Devices, then Google Meet hardware, then Settings.
3. If the change should apply only to one team, select that organizational unit. The account needs the Meet hardware privilege to manage organizational unit settings.
4. Open the Device Settings tab.
5. Under Built-in Interoperability, find Microsoft Teams and select Enabled.
6. Click Save. On an organizational unit, you may need to click Override. Use Inherit later if you want the parent setting back.

Meet hardware still needs a working path to Microsoft services. Google notes that firewall rules may need updates before devices can reach Teams. If a room dials and fails while the setting is enabled, check network allowlists with your Meet hardware reseller before changing the Admin console again.

Availability is for Google Workspace customers that have Meet hardware running Android/AOSP. Personal Google accounts and Meet on a laptop are outside this launch.

## Put a Teams meeting on the room calendar

A scheduled Teams call shows on the room display when Calendar can read the join details.

If you create the Google Calendar event and it already includes Teams meeting details, add the Meet hardware room as a room resource. The event should appear on that room's schedule with a Microsoft Teams label.

If the Teams meeting was created outside your organization, or in another scheduling tool, you may not be able to add the room to the original event. Google's help article gives two workarounds:

1. Open Google Calendar and find the event.
2. Click More, then Duplicate.
3. Under Rooms, select the room with the Meet hardware device.
4. Remove extra participants from the duplicate so people are not invited twice.

Or create your own Calendar event for the room and paste the Teams join details into the description instead of adding a Google Meet link. Meet hardware reads those details and lists the meeting on the schedule.

The same Calendar habits help with time zones and room booking. If your team already shares rooms across regions, the steps in [how to show three time zones in Google Calendar](/blog/google-calendar-three-time-zones/) keep the invite time aligned with the room display.

## Join a scheduled Teams meeting from the room

When the invite is on the room calendar:

1. On the Meet hardware device, open the room that has the Teams interoperability call scheduled.
2. Tap the meeting name. The subtitle should read Via Microsoft Teams.
3. Select the meeting with the touch controller or remote.

The call starts when the Teams host joins. If the host is late, the room stays in the waiting state rather than opening an empty Meet conference.

## Join with a meeting ID and passcode

Ad-hoc Teams calls use the same controller flow as a Webex or Zoom guest join:

1. On an available Meet hardware room, tap Enter a code or nickname.
2. Open the Join a meeting menu at the top and select Teams.
3. Enter the number from the Teams invitation.
4. Tap Join.
5. If the invite includes a password, enter it, then tap Join again.

The meeting begins when the Teams host joins. Keep the numeric meeting ID and passcode in the Calendar description so the next person in the room does not have to hunt through email.

![People in a meeting room looking at a shared screen](https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80)

## Know the feature limits before you present

Built-in Teams join covers core video and audio. Google's admin help lists several features that are not available when Meet hardware joins Teams directly:

- Presenting over HDMI is not supported on the built-in Teams path. HDMI present is supported if the same room joins Teams through Pexip Connect.
- Dual-screen layouts are not supported.
- You cannot change the participant layout.
- Closed captions are not supported.
- In-meeting chat is not supported.

Plan content share on a laptop that is already in the Teams meeting, or use a licensed Pexip path if the room must present from HDMI. For a short walkthrough of how a Teams-like layout looks when a Meet device joins through Pexip, the clip below is from Pexip, not from the built-in October 1 feature.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/rGTm1OTFAsE"
    title="Join Teams meetings from Google Meet hardware - Pexip Connect for Google Rooms"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for the first week of rollout

Test one Android room and one ChromeOS room on October 2 or 3. Full rollout can take up to three days, so a device that still shows only a Meet join button may simply be waiting on the release track.

Label rooms in Calendar with the hardware type. Android AOSP devices are the ones covered by the October 1 general availability note. ChromeOS rooms already had the February path.

Do not disable Pexip on an organizational unit that uses it for SIP or HDMI present. Google said in February that the built-in setting does not replace existing Pexip settings.

If join fails, confirm Teams is Enabled for that organizational unit, then ask the reseller to check firewall requirements. Google points device troubleshooting to the Meet hardware reseller and the Troubleshoot Meet hardware devices help page.

Teams Rooms joining Meet is the other half of this launch. Follow Microsoft's admin docs for the Teams Rooms side. Google does not publish the Teams Rooms click-path in the Meet help article.

## What to do next

Pick one shared room, confirm Teams interoperability is enabled, and place a short Teams invite on that room's calendar. Join from the touch controller using the Via Microsoft Teams entry, then try a meeting ID join from a second invite. Note any missing feature, especially HDMI share, before you tell the whole office the room can host external Teams calls.

If the room only needs audio and video with an external team, the built-in path is enough and does not add a license. If presenters must share from the room HDMI cable, keep Pexip Connect in the plan.

## Sources

- Google Workspace Updates, October 1, 2026: Built-in interoperability between Google Meet and Microsoft Teams on Android (AOSP) devices, now generally available
- Google Workspace Updates, February 3, 2026: New built-in interoperability between Google Meet and Microsoft Teams
- Google Meet hardware Help: Join Microsoft Teams meetings with Google Meet hardware
- Google Workspace Admin Help: Allow Meet hardware to join third-party video conferencing services
- Google Workspace Help: Meet interoperability FAQ
