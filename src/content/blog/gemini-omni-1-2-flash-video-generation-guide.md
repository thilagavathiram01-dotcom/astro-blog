---
title: "How to Generate Videos with Gemini Omni 1.2 Flash"
description: "Step-by-step guide to using Gemini Omni 1.2 Flash for 15-second AI video generation, editing, and lower-cost production on the Gemini API."
pubDate: 2026-11-09T14:00:00
heroImage: "https://images.unsplash.com/photo-1614963326505-843868e1d83a?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "tutorials", "how-to", "ai", "google"]
noindex: false
---

Google released Gemini Omni 1.2 Flash on November 5, 2026. The model generates and edits video clips up to 15 seconds long with native audio. Pricing dropped about 30 percent from Omni 1.1 Flash. Developers can now call it on the Gemini API and Google AI Studio.

This guide shows how to access the model, build prompts, generate clips, and refine them through conversation. All details come from Google Cloud and DeepMind announcements.

## What Changed in Omni 1.2 Flash

Omni 1.2 Flash runs under the model ID `gemini-omni-1.2-flash`. It supports durations from 3 to 15 seconds in one-second steps. The default is 10 seconds. Native resolutions are 360p and 720p. You can upscale to 1080p or 4K.

The 720p rate is $0.07 per second. That makes a full 15-second clip roughly $1.05 before input tokens. Audio is included. Outputs carry a SynthID watermark. Audio reference inputs remain behind an allowlist.

Google notes stronger adherence to image and video references, more natural multi-speaker speech, and fewer unwanted jump cuts. You can edit through multi-turn conversation instead of regenerating from scratch.

![Laptop showing video editing software on a desk](https://images.unsplash.com/photo-1742829705753-f07509bc88ac?auto=format&fit=crop&w=800&q=80)

## Access the Model

Gemini Omni 1.2 Flash is generally available on the paid Gemini API tier, Google AI Studio, Gemini for business, and Google Cloud. The Gemini app rollout targets Google AI Ultra subscribers first for 15-second clips.

Sign in to [Google AI Studio](https://aistudio.google.com). Select the model from the dropdown. Or use the Gemini API with your API key. No free tier is listed for this model.

If you already call `gemini-omni-1.1-flash`, Google will route those requests to 1.2 starting December 3, 2026. Test your prompts before that date.

## Generate a First Clip

Start with a clear text prompt. Include scene, action, camera movement, lighting, and audio cues.

Example prompt:

```
A red bicycle rides slowly along a sunny coastal path. Camera tracks from the side. Soft ocean waves and distant seagulls in the audio. 8 seconds, 720p.
```

In AI Studio, paste the prompt, set duration and resolution, then generate. Via the Interactions API the call looks like this in Python:

```python
from google import genai
import base64

client = genai.Client()

interaction = client.interactions.create(
    model="gemini-omni-1.2-flash",
    input="A red bicycle rides slowly along a sunny coastal path. Camera tracks from the side. Soft ocean waves. 8s, 720p."
)

with open("clip.mp4", "wb") as f:
    f.write(base64.b64decode(interaction.output_video.data))
```

The response returns an MP4 with native audio. Review it. Note any details that need adjustment.

## Edit Through Conversation

Omni 1.2 Flash supports multi-turn editing. After the first generation, send a follow-up message that describes only the change.

Follow-up example:

```
Change the sky to overcast and add light rain on the path. Keep the bicycle and camera movement the same.
```

The model applies the edit while preserving the rest of the scene. You can chain several turns. This reduces cost compared with full regenerations.

Reference images help consistency. You can supply up to six images, including character references. For longer clips (11–15 seconds) the reference video limit is one short clip of up to three seconds.

![Professional video camera on a tripod in a studio](https://images.unsplash.com/photo-1764068866740-506ba4cf64e4?auto=format&fit=crop&w=800&q=80)

## Draft, Then Upscale

Google recommends drafting at 360p or 720p, then upscaling the best results. The lower resolutions cost less and return faster. Once you confirm the motion and content, request 1080p or 4K upscaling.

This workflow keeps experimentation cheap. A 15-second 360p draft costs roughly one-third of a 720p version.

## Practical Tips

- Specify exact duration in the prompt or API parameters when you need a precise length.
- Describe camera moves continuously (“slow pan left, then hold”) to reduce jump cuts.
- For product shots, include a reference image of the item so packaging and colors stay consistent.
- Test speech prompts early. Multi-speaker dialogue improved, but lip-sync still benefits from clear, short lines.
- Monitor token usage. Input images and video add to the bill.
- Check SynthID status in Google tools if you need to verify the output origin later.

If you are building agentic workflows, Omni clips can feed into larger systems. See our guide on [accessing Genie 4 interactive worlds](/blog/access-google-genie-4-interactive-worlds/) for related simulation use cases.

## Limitations to Expect

Audio references require allowlisting. Very complex multi-character scenes or long continuous takes beyond 15 seconds still need stitching. Physics and text rendering improved but are not perfect on every generation. Always review outputs before publishing.

Google continues to refine safety filters. Some prompts may be refused. The model is intended for commercial production of product videos, ads, explainers, and social clips.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/6SdsDI-mois"
    title="Gemini Omni 1.2 Flash: Everything NEW in 8 Minutes"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- Google Cloud Blog, “Gemini Omni 1.2 Flash now GA,” November 5, 2026
- Google DeepMind model card for Gemini Omni 1.2 Flash
- Gemini API documentation and pricing pages
- Official Google announcements on availability and December 3 reroute

Start with a short draft in AI Studio. Iterate on the conversation edits. Once the motion matches your brief, upscale and export. The lower price and longer clips make volume production more practical than the previous version.
