---
title: "How to Use Claude Meetings on Google Meet"
description: "Step-by-step guide to add Claude Meetings to Google Meet calls on Team and Enterprise plans for live notes and docs."
pubDate: 2026-11-13T20:00:00
heroImage: "https://images.unsplash.com/photo-1781246081182-b8e658662ebd?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "productivity"]
noindex: false
---

Claude Meetings, now in beta, lets Claude join a Google Meet call as a visible participant. It takes notes, answers questions, and builds documents or whiteboards while the conversation continues.

This feature rolls out to Claude Team and Enterprise plans. Support starts with Google Meet; other platforms come later. You need an owner to enable Google Calendar for the organization first.

## What Claude Meetings Does

Claude appears in the participant list and posts a notice in the Meet chat when it joins. It follows the talk, responds in writing by default, and creates artifacts such as docs and whiteboards that teammates can edit live.

It saves a transcript, summary, and screen descriptions. It does not save audio. After the call, notes, action items, and the work Claude started appear on a dedicated meeting page in claude.ai.

Anyone on the organization invite can view and edit that page. A recap email goes to people from your organization on the invite.

![Team collaborating around a conference table in a modern office](https://images.unsplash.com/photo-1781246081182-b8e658662ebd?auto=format&fit=crop&w=800&q=80)

## Requirements Before You Start

You need a Team or Enterprise plan. On Team plans Claude Meetings is on by default. On Enterprise plans an owner turns it on for everyone or for specific custom roles.

An owner must enable Google Calendar for the organization. Some setups cannot use the feature during beta: zero data retention, HIPAA-ready configurations, or customer-managed encryption keys.

Confirm with everyone on the call that they agree to being transcribed before you add Claude or turn on auto-join.

## How to Add Claude to a Google Meet Call

1. Open Claude or Claude Desktop and go to Meetings.
2. Connect your Google Calendar. This step fails if the owner has not enabled Calendar for the organization.
3. Select the meeting from the calendar view.
4. Click Add Claude.

Claude joins when the call starts if someone has added it or if auto-join is on. Set auto-join under Settings > Capabilities > Meetings > Auto-join. You can choose all meetings or all meetings except one-on-ones. Owners cannot set auto-join for individual users.

Claude usually joins without asking. If the host must approve, they can let it in. A declined request means Claude will not try that call again unless someone adds it manually.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/aASBP7ju9Xg"
    title="Introducing Claude Suite"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## During the Call

Address Claude by saying its name followed by the request, or type the request in the Meet chat. Answers appear in the Meet chat by default and are visible to everyone on the call.

Ask Claude to make a doc or a whiteboard. It attaches the artifact to the meeting page. Teammates on the invite can edit it while the discussion continues. All artifact types are supported.

Claude can use a person's connected tools (for example, to send a Slack message) only with that person's permission. It asks the first time; a yes applies to later uses. When someone speaks a request, Claude currently asks each time to confirm who is speaking.

Look at Claude's tile in the call to see its current state. Pause it by asking it to stop listening or from the meeting page. Resume from the meeting page. Ask it to leave, or select Remove Claude on the meeting page. It can stay up to eight hours and warns before leaving.

The meeting page link appears in the Meet chat when Claude joins. That page shows the live transcript, chat, and everything Claude has made so far. The page chat is internal to the organization; outside guests cannot see it.

![People in a meeting room watching a video call on a large monitor](https://images.unsplash.com/photo-1787647562201-113361490c83?auto=format&fit=crop&w=800&q=80)

## After the Call

The meeting page holds the notes (summary and action items), the transcript, and every artifact created. People from your organization on the invite receive a recap email with a link.

The Meetings calendar shows past and upcoming meetings, so you can return to any call Claude joined or add it to the next one. In a regular Claude chat you can ask about past meetings you have access to.

## Calls with Outside Guests

By default Claude stays out of calls that include someone from outside your organization and leaves if an outside person (including another company's notetaker) joins later.

On Team plans Claude can join calls with outside guests by default; an owner can turn this off. On Enterprise plans an owner must allow it first. Each person also has a personal Meetings with external guests setting.

When outside guests are allowed, Claude takes notes and includes what they say, but it does not reply in the call chat. Guests do not receive the meeting page or the recap email.

## Pricing and Limits

Notes, transcripts, and answers that do not use connected tools are included on Team and Enterprise plans. Docs and whiteboards created in a meeting are free through 10 February 2027. Using connected tools counts toward usage and can create charges for the organization.

The feature is not available to organizations with zero data retention, HIPAA-ready setup, or customer-managed encryption keys during the beta.

## Tips for Productive Calls

Start with a clear ask. Say "Claude, start a doc for this plan" early so the team can edit it while talking.

Keep external guests in mind. If your organization blocks them, Claude will leave when an outside participant or notetaker joins.

Review the meeting page right after the call. Action items and the transcript are already there, so the group can confirm ownership before anyone leaves.

For related Claude work on Team and Enterprise plans, see the guide on [Claude for Manufacturing](/blog/how-to-use-claude-for-manufacturing/).

## Conclusion

Claude Meetings turns a Google Meet call into a working session. Claude takes the notes, answers questions, and starts the documents or whiteboards the team needs, then leaves everything on a shared page.

The setup takes four steps once Calendar is enabled. Test it on an internal meeting first, confirm consent, and use the live artifacts to keep the discussion moving forward.

## Sources

- [Introducing Claude Meetings, now in beta](https://claude.com/resources/articles/claude-meetings) — Anthropic, 12 November 2026
- [Use Claude Meetings](https://support.claude.com/en/articles/18325154-use-claude-meetings) — Claude Help Center
- Anthropic product updates on Team and Enterprise plan availability and privacy controls
