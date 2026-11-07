---
title: "How to Access and Use Google Genie 4 Worlds"
description: "Step-by-step guide to Genie 4: Google DeepMind's real-time interactive world model with native audio, live steering, and Project Genie waitlist."
pubDate: 2026-11-07T14:00:00
heroImage: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai", "gemini", "tutorials", "how-to"]
noindex: false
---

Google DeepMind announced Genie 4 on October 27, 2026. It generates interactive worlds in real time that respond to keyboard movement and text prompts. Scenes include native audio such as ambient sound, music, and dialogue. Gemini models help keep the simulation coherent.

This guide explains what Genie 4 does, who can use it now, and how to join the waitlist. It draws only from official DeepMind pages and the announcement.

## What Genie 4 is

Genie 4 is a world model. You describe a starting scene or supply a reference image. The model then renders the environment continuously as you explore. Keyboard controls handle movement and camera. Text prompts change the scene while it runs.

Gemini Omni anchors the look and physical behavior. Other Gemini models plan multi-step events and monitor the world state so changes stay consistent. The result is not a finished video. It is a live simulation you steer.

DeepMind positions it as a step toward safer training environments for robots and agents, plus creative tools for film, games, and education.

![Earth from space showing continents and clouds](https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=800&q=80)

## Key capabilities

Genie 4 advances four areas from earlier versions.

- **Live steering.** Type a prompt mid-simulation to change weather, move the camera, or add a person or object. Gemini adapts the request to the current scene.
- **Native audio.** Ambient sounds, music, and interactive dialogue generate with the visuals. Characters can speak and react.
- **Improved realism.** Better physics (collisions, aerodynamics), more natural human movement, and stronger visual detail. Scenes stay consistent longer than in Genie 3.
- **Gemini reasoning.** The model interprets prompts, tracks what just happened, and plans sequences so the world progresses without constant user input.

Official demos show a saxophone player on a floating platform over a lake. A later prompt adds a whale’s tail and snow while the camera keeps moving. Another demo compares the same backstage theater scene between Genie 3 and Genie 4, with clearer lighting and more responsive people.

All recordings on the DeepMind site are real-time interactions. Users navigate with standard keyboard and mouse controls and type prompts to steer.

## Current access and waitlist

Genie 4 is in research preview for trusted testers. DeepMind is gathering feedback before wider release.

The staged plan is:

1. Trusted testers (rolling out now).
2. Google AI Ultra subscribers in Project Genie (coming soon).
3. Early access partners of the Gemini API and Google AI Studio (coming soon).

No public release date, pricing, or model identifier has been published. Project Genie currently uses Genie 3 for Ultra subscribers.

To join the waitlist:

1. Open the official announcement or model page: [deepmind.google/blog/genie-4-a-new-generation-of-world-simulation](https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/) or [deepmind.google/models/genie](https://deepmind.google/models/genie/).
2. Click “Join the Genie 4 waitlist” or the equivalent link. It opens a Google Form titled “Apply for Genie 4 access in Project Genie.”
3. Sign in with a Google account and submit the form.

Joining the waitlist does not guarantee access. Google has not published selection criteria or timelines. Ultra subscribers are next in line for Project Genie once the rollout begins.

![Close-up of a circuit board with electronic components](https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80)

## How interaction works (from official demos)

You start with a text description or a reference image that becomes the first frame. The model generates the continuing scene. Keyboard keys move the viewpoint. You type additional prompts to alter the world.

Example flow from the announcement materials:

- Start with a detailed prompt that sets style, lighting, and constraints (documentary look, no text, specific objects).
- Explore with movement controls.
- Enter a short steering prompt such as “a whale’s tail rises behind him” or “it starts to snow.”
- Gemini adjusts the request so it fits the existing scene and continues the simulation.

Prompts can specify camera behavior, audio (lake ambience, saxophone sound), and physical rules. The system maintains continuity across the session. DeepMind notes that visual details and objects can still drift during longer sessions or complex edits. Those remain areas of ongoing research.

For developers interested in related video generation today, see the guide on [Gemini Omni 1.2 Flash for 15-second videos](/blog/how-to-use-gemini-omni-1-2-flash/).

## Tips for preparing prompts

Even before you have access, you can study the official demo prompts:

- Describe the environment and characters separately.
- Specify photographic or cinematic style, lighting, and constraints (“no CGI look,” “exactly two subjects”).
- Include audio expectations when relevant.
- Keep steering prompts short and concrete once the scene is running.
- Preserve key elements from a reference image when you want continuity.

These patterns appear in the DeepMind blog examples. They help the model keep style and physics consistent.

## Limitations to know

Genie 4 is early technology. DeepMind lists ongoing research on long-term consistency, complex physics, real-time audio accuracy, and legible text. Sessions support a few minutes of continuous interaction rather than extended play. Results in published recordings are illustrative and sometimes shortened.

It is not a general-purpose 3D engine. Movement feels navigable, but the underlying generation is frame-by-frame.

## Watch the official introduction

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/sFfPkUJd_Jk"
    title="Genie 4: A new generation of world simulation"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Genie 4 brings native audio and live text steering to Google’s real-time world models. Trusted testers have it now. Google AI Ultra subscribers in Project Genie and selected API partners are next. Join the official waitlist if you want updates. Study the published demos and prompts while you wait. The same Gemini family that powers Omni video generation helps keep these interactive worlds coherent.

## Sources

- [Genie 4: A new generation of world simulation](https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/) — Google DeepMind, October 27, 2026
- [Genie 4 model page](https://deepmind.google/models/genie/) — Google DeepMind
- [We’re announcing Genie 4](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/introducing-genie-4/) — Google Blog, October 27, 2026
- Official demo video: Genie 4: A new generation of world simulation — Google DeepMind YouTube
