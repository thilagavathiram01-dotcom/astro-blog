---
title: "How to Access and Prompt Genie 4 Interactive Worlds"
description: "Step-by-step guide to join the Genie 4 waitlist, prepare prompts, and explore Google's real-time interactive world model once access opens."
pubDate: 2026-11-05T14:00:00
heroImage: "https://images.unsplash.com/photo-1759661990336-51bd4b951fea?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini", "google"]
noindex: false
---

Google DeepMind released Genie 4 as a research preview on 27 October 2026. The model generates interactive worlds with native audio, real-time steering, and physics that respond to both keyboard controls and text prompts.

Access remains limited. Trusted testers have it now. Google AI Ultra subscribers will see it next inside Project Genie. Early access partners of the Gemini API and Google AI Studio follow after that. This guide covers the official path to request access and the prompting approach DeepMind demonstrated.

## Check current access status

Genie 4 is not open to the public. Google states it is rolling out first to a limited group of trusted testers across education, gaming, creative industries, journalism, and engineering.

Three paths exist:

- Research preview for trusted testers (already underway).
- Project Genie for Google AI Ultra subscribers (coming soon).
- Gemini API and Google AI Studio for early-access partners (planned).

An existing Gemini API key or AI Ultra subscription does not automatically grant Genie 4. Confirm status on the official DeepMind Genie page or the Google blog announcement before building workflows around it.

![Laptop and smartphone on a desk with coding tools](https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=800&q=80)

## Join the Project Genie waitlist

Google linked a public waitlist from the Genie 4 announcement. Use the official form rather than third-party sign-up pages.

1. Open the DeepMind Genie 4 page at deepmind.google/models/genie/.
2. Locate the “Join Project Genie waitlist” link.
3. Sign in with a personal Google Account (business accounts are excluded from the current Project Genie prototype).
4. Complete the form. Joining does not guarantee a date or immediate access.
5. Monitor the email associated with that account for any invitation.

While you wait, you can still use the current Project Genie experience, which runs on Genie 3. It is available to Google AI Ultra subscribers aged 18+ in the United States at labs.google/projectgenie. Worlds there are limited to about 60 seconds of exploration.

## Prepare prompts that match Genie 4’s structure

DeepMind demos separate the initial scene description from later steering instructions. The model uses Gemini Omni for visual and behavioral realism and other Gemini models for multi-step planning.

A practical starting prompt has three parts:

- Environment: fixed setting, lighting, and atmosphere.
- Character or subject: who or what is present and the camera relationship.
- Negative constraints: what to avoid.

Example for a first test once access arrives:

```
Environment: A wooden harbor at dusk with calm water, warm lanterns, and light fog. Camera starts at eye level on the dock.
Character: A single person in a red jacket walking slowly along the waterfront.
Negative: No drone view, no third-person cutaway, no 3D-render look, no text overlays.
```

After the world starts, steer with short natural-language commands such as “change the weather to light rain,” “add a small boat approaching,” or “move the camera closer to the water.”

Keep the first session short. Official recordings show real-time interaction, but the model is still an early research system. Expect occasional inconsistencies in long sequences.

![Android smartphone displaying a custom home screen](https://images.unsplash.com/photo-1760900051041-90417b9c110e?auto=format&fit=crop&w=800&q=80)

## What changes when you gain access

Once invited, the interface (Project Genie or the partner API) lets you:

- Generate a world from text or, in some flows, an image.
- Navigate with standard keyboard controls (WASD, arrows, space).
- Issue text prompts while the simulation runs to alter weather, add objects, or adjust camera.
- Hear native audio that includes ambient sound, music, and character dialogue.

All outputs carry SynthID watermarking. Google has not published a Genie 4-specific price or API model ID as of 5 November 2026. Treat any third-party claims about rates as unverified.

For developers planning ahead, continue using Gemini 4 Argon or Gemini 3.8 Flash through the standard API for related reasoning tasks. Our earlier guide on [using Gemini 4 Argon in Google AI Studio](/blog/how-to-use-gemini-4-argon-in-ai-studio/) covers the current production path.

## Tips for better results

- Start with a simple, single-subject scene before adding multiple characters or complex events.
- Specify camera behavior explicitly (“eye-level tracking shot,” “static wide view”).
- List negative constraints at the end of the initial prompt.
- After generation begins, issue one change at a time so you can observe how the model maintains coherence.
- Save short clips of successful steering sequences for your own reference.

Genie 4 is intended to support safer training environments for agents and robots as well as creative tools. Early feedback from trusted testers is already shaping the next iterations.

## Conclusion

Genie 4 advances interactive world simulation with native audio and real-time steering. Access is still gated, but the official waitlist and Project Genie path are the only verified routes. Prepare prompts that separate environment, subject, and constraints so you can test efficiently when your account is enabled.

Monitor the Google DeepMind blog and the Genie model page for updates on broader availability.

**Sources**

- Google DeepMind: Genie 4 model page and announcement (27 October 2026)
- Google blog: Genie 4 introduction and access notes
- Official Project Genie waitlist form linked from DeepMind

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/sFfPkUJd_Jk"
    title="Genie 4: A new generation of world simulation"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
