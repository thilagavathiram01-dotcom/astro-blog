---
title: "How to Use Docs Live With Gemini 3.8 Extended Thinking"
description: "Start Docs Live on Android or iPhone, talk a draft into Google Docs, pull Drive context, and edit by voice with Gemini 3.8 Live Extended Thinking."
pubDate: 2026-09-23T18:30:00
heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "productivity", "google", "how-to"]
noindex: false
---

Docs Live is the voice session inside Google Docs. You talk. Gemini structures a document, pulls files you already own, and keeps a spoken back-and-forth while the page updates.

Google launched the Workspace Live surfaces on 3 September 2026. On 15 September it said **Gemini 3.8 Live Extended Thinking** now powers Docs Live for eligible **Google AI Pro and Ultra** subscribers. This guide covers how to start a session on a phone and what to expect from that model.

It is not the old **Tools → Voice typing** dictation box. Voice typing writes raw words. Docs Live plans, drafts, and edits.

## Who can open Docs Live

Google’s 15 September model post lists Docs Live under 3.8 Live Extended Thinking for **Google AI Pro and Ultra** subscribers. Gmail Live and Keep Live are listed for all Google AI subscribers. Docs Live is available on **Android and iOS**.

English is the language reported at the 3 September consumer rollout. If the Live control is missing, update the Docs app from Play Store or the App Store, confirm the account has Pro or Ultra, and wait. Rollouts are account- and region-gated.

Workspace business customers are listed as **coming soon** on the same model announcement. Do not assume a work Google Workspace login has Docs Live the same week as a personal Pro plan.

## What Gemini 3.8 Live Extended Thinking changes

Google positions two Live models:

- **gemini-3.8-live** — lower-latency dialogue, visual grounding, mid-conversation switches across 97 languages, tools that run in the background.
- **gemini-3.8-live-extended-thinking** — the variant for multi-step work. It reasons while it speaks. Google describes early spoken cues such as “Let me check that…” and progress narration while background work continues.

Docs Live uses the second path. A request like “turn last quarter’s notes into a one-page proposal and pull the budget numbers from Drive” is a multi-step job. The model can keep talking while it looks up sources.

Official Extended Thinking numbers from Google: #1 on Artificial Analysis’ Speech to Speech Quality Index at **82.6**, **68.6%** on τ-Voice, **35.1%** on Sierra’s τ-Voice-banking benchmark, and **97.7%** on Big Bench Audio. Treat those as lab scores, not a guarantee that your draft is correct.



![Person drafting a document on a laptop during a focused work session](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80)



## How to start a Docs Live session on your phone

1. Open the **Google Docs** app while signed into the same Google account that holds Pro or Ultra.
2. Open an existing file or create a blank document.
3. Look for the **Live** control (waveform or Live label) near compose or the Gemini entry point. It is separate from the side-panel Ask Gemini button used for typed prompts.
4. Grant microphone permission if the app asks.
5. Start with a job, not a greeting. Example: “Draft a one-page project brief from the Q3 notes in Drive. Use headings for goal, risks, and next steps.”
6. Watch the on-screen transcript. Interrupt if the outline is wrong. Say what to keep and what to cut.
7. Mute the mic when you need silence. Exit Live to return to normal editing.

If you only see classic voice typing, you are not in Docs Live. Update the app and check the plan on the account that owns the file.

## Prompts that work

Give Docs Live a target format and a source. Vague monologues produce vague pages.

**Good starts**

- “Turn this outline into a two-page client proposal. Keep my headings. Shorten the risk section.”
- “Pull my resume from Drive and add the contractor role I just described. Do not invent dates.”
- “Summarize this doc in five bullets, then draft an email version I can paste into Gmail.”
- “Match the tone of the last status report in this Drive folder and rewrite the intro.”

**Weak starts**

- “Write something professional.”
- A five-minute brain dump with no ask.
- “Book the flight and put the itinerary here.” Booking belongs in a travel app or [Gemini in Chrome on Android](/blog/gemini-in-chrome-android/), not Docs Live.

Google’s own Docs Gemini examples (typed side panel) already show the same pattern: name the files, name the format, then edit. Docs Live is that loop with speech.

## Edit without leaving the session

You can interrupt mid-sentence. That is the point of a Live model.

Useful follow-ups:

- “Delete the second paragraph. Keep the table.”
- “Make the tone more direct. Do not add adjectives.”
- “Add a next-steps list with owners left blank.”
- “Cite the source file names you used.”

Then stop talking and read the page. Live audio can skip a number or merge two sources. Fix those in the editor before you share.

Typed Gemini in Docs still exists. Use the bottom bar or side panel when you need to highlight one paragraph and apply a precise rewrite. Live is better for first structure. The keyboard is better for legal wording and tables.



![Team reviewing notes and a shared document on a table](https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80)



## How Docs Live differs from Gmail Live and Keep Live

| Surface | Job | Who Google lists |
| --- | --- | --- |
| Docs Live | Draft, restructure, pull Drive context into a document | AI Pro and Ultra |
| Gmail Live | Spoken inbox search and follow-ups | All Google AI subscribers |
| Keep Live | Spoken notes and lists (Android-first at launch) | All Google AI subscribers |

Keep Live is the right tool when the output should be a checklist, not a page. That flow is covered in [How to Use Keep Live on Android With Gemini 3.8](/blog/keep-live-gemini-android/). Gmail Live is the right tool when the answer lives in mail threads, not a file you are writing.

Search Live is a different product again. It uses base **Gemini 3.8 Live** and the open web. Do not expect it to edit a Docs file.

## Limits and safety

- **Plans.** Docs Live is not on the free Gemini tier in Google’s published 15 September list.
- **Sources can be wrong.** Always open the cited Drive file or Gmail thread before you send the doc to a client.
- **Do not dictate secrets.** One-time codes, passwords, and unpublished financials do not belong in a spoken session.
- **SynthID.** Google watermarks audio generated by its AI products with SynthID. That marks the voice output. It does not prove the document text is accurate.
- **Not voice typing.** Punctuation commands from the old dictation tool are the wrong habit here. Speak the edit you want.
- **Sharing.** Suggested AI edits in classic Gemini-in-Docs are private until you accept them. After Docs Live writes into the file, collaborators see the text. Review before you hand the link out.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/3CyW24Pkz4o"
    title="What's new in the Gemini Live API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

The Google for Developers walkthrough above covers the Live API that sits under these consumer surfaces: async tool calls, proactive audio, and Extended Thinking. You do not need the API to use Docs Live. You do need the same mental model: the agent keeps speaking while background work runs.

## A 10-minute first session

1. Create a blank Doc titled “Live draft test” so you do not overwrite a real file.
2. Start Docs Live and give one source plus one format.
3. Interrupt once on purpose to confirm the session accepts barge-in.
4. Ask it to list the files it used.
5. Exit Live and fix names, dates, and numbers by hand.
6. If the session was useful, repeat on a real brief. If it invented sources, stay on typed Gemini in Docs until the account finishes rolling out.

## Conclusion

Docs Live is useful when your hands are busy and the page does not exist yet. Name the file you trust, name the structure you want, and stay in the session long enough to reject the first bad outline.

Gemini 3.8 Live Extended Thinking is built for that multi-step loop. It is still a draft engine. You own the send button.

## Sources

- [Introducing Gemini 3.8 Live and 3.8 Live Extended Thinking](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/) — Google
- [Gemini 3.8 Audio model card](https://deepmind.google/models/model-cards/gemini-3-8-audio/) — Google DeepMind
- [Gemini 3.8 Live model docs](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-live) — Google AI for Developers
- [Google now lets you chat with Gmail, Docs, and Keep](https://www.theverge.com/tech/989508/google-gmail-docs-keep-live-voice-modes-gemini) — The Verge, 3 September 2026
- [What's new in the Gemini Live API](https://www.youtube.com/watch?v=3CyW24Pkz4o) — Google for Developers
