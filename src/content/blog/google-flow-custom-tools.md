---
title: "How to Create Custom Tools in Google Flow"
description: "Build reusable Google Flow tools with natural language: open the Tools Gallery, remix a partner tool or start from scratch, then save, share, and run it on your project assets."
pubDate: 2026-09-18T20:20:00
tags: ["ai-tools", "google-flow", "tutorials"]
heroImage: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1400&q=80"
---

Google Flow is Google’s AI creative studio for images and video. The part that is easy to miss is **Tools**: reusable workflows you describe in plain language, then run on clips and stills inside a project.

On September 18, 2026, Google showed how two fashion designers used custom Flow tools for New York Fashion Week prep — one for head-to-toe look planning, one for runway staging. You do not need a co-development team to use the same idea. Official product videos walk through remixing a gallery tool or creating one from scratch.

This guide covers the consumer workflow: open Flow, use the Tools Gallery, remix or create a tool, then apply it to your own assets.

## What a Flow tool is

A tool is a saved workflow inside Flow. You describe the job in natural language — a fisheye look, a text overlay, a vortex morph, a lookbook grid — and Flow turns that description into something you can run again.

Google’s own examples include:

- Image editing presets
- Script or shot brainstorming
- Text overlays
- Video effects and transitions
- Partner tools you can remix instead of starting from zero

Tools live next to the rest of the project. Outputs land in the project gallery so you can name them, reuse them as ingredients, or feed them into video generation.

![Video editor reviewing clips on a desktop workstation](https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80)

## What you need first

1. Open [flow.google.com](https://flow.google.com/) and sign in with a Google account that can use Flow.
2. Confirm your [Google AI subscription](https://blog.google/products-and-platforms/products/google-one/google-ai-subscriptions/) tier if you plan to generate video. Image generation in Flow has been free for users; video models and Gemini Omni consume Flow credits.
3. Create a project (or open an existing one) so tools have assets to work on.

Availability and model names change with your plan and country. Check the in-product model picker rather than assuming every model is on every account.

## Open the Tools Gallery

Official “Find Your Flow” tutorials use this path:

1. Open a project.
2. Select **Tools** in the left navigation.
3. Browse the **Tools Gallery** — tools built by Google and creative partners.

Use a gallery tool first when it is close to your job. Remixing is faster than writing a tool from a blank prompt.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/ECquAokER_8" title="How to use Tools in Google Flow" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Remix an existing tool

Remix when you like 80% of a gallery tool and need one extra behavior.

1. Open the tool from the gallery.
2. Select **Remix**.
3. Add a short instruction. The official demo adds a fisheye preset on top of an existing look.
4. Run the remixed tool on a clip or still.
5. Save the result so it appears in the project gallery.

Keep the remix prompt narrow. “Add a mild fisheye and keep skin tones unchanged” is easier to iterate than a paragraph that also changes lighting, wardrobe, and framing.

## Create a tool from scratch

When nothing in the gallery matches:

1. Go to the Tools Gallery home.
2. Select **Create Tool**.
3. Describe the tool you want. The official example is a vortex tool that morphs video assets into swirling tunnels.
4. Let Flow refine the tool definition.
5. Test it on one asset before you run a batch.

Write the prompt as a job description, not as a single render request:

- What goes in (clip, still, text)
- What should stay locked (character, product logo, aspect ratio)
- What should change (lens, motion, overlay, color)
- What a good output looks like

![Close-up of hands adjusting camera equipment on a studio set](https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80)

## Use the agent alongside tools

Flow also has an **agent** that can plan and run multi-step work. Official guidance from Google Flow:

- Agent chat does **not** spend Flow credits, so use it to brainstorm locations, dialogue, or shot lists.
- Leave **Confirm before generating** on when the agent would render. It should estimate credit cost first.
- Drop an asset into the agent box and ask for variations that keep wardrobe identical and only change lighting.

Tools are for repeatable looks. The agent is for planning and one-off reasoning. Use both in the same project instead of stuffing every request into a tool.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/JJTdXTf12oQ" title="How to use Agent in Google Flow" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## A practical first project

A useful first tool is a **product still-to-clip** workflow:

1. Generate or upload a product still (Nano Banana in Flow is the default image path in current help docs).
2. Create a tool: “Turn a product still into a 5-second tabletop orbit. Keep the product shape and label readable. Soft studio light. No extra props.”
3. Run it on two or three stills.
4. Pick the best clip and, if you use Gemini Omni, refine with a conversational edit (“slow the last second, hold the label facing camera”).
5. Draft at a lower resolution when the product offers it, then upscale only the keeper. Google’s August 2026 Flow update added 360p drafts and 1080p / 4K export on supported Omni paths.

Fashion Week’s public examples map to the same pattern: Jane Wade’s Styling Suite mapped looks before samples were cut; Sergio Hudson’s Runway Visualization tested staging without a new 3D render for every lighting change. Your version can be smaller — a lookbook grid, a title-card tool, a consistent color grade.

## Share and manage tools

The official tools tutorial covers sharing and managing after you save:

- Keep tools inside the project until they are stable.
- Share only when a collaborator needs the same preset.
- Remix again instead of overwriting a tool that already works on a client job.

Name tools by outcome (`label-safe-orbit`, `soft-key-portrait`), not by the first prompt you typed.

## Credits, models, and limits

Flow is not a single model. Help pages currently walk through:

- **Text / prompt to video**
- **Frames to video** (start and optional end frame)
- **Ingredients** (`@` a named asset so a character or object stays consistent)

Default image model in recent help text is **Nano Banana Pro**. Video models include Gemini Omni on eligible Google AI plans. Omni 1.1 Flash added start/end frames, 360p drafts, and higher-resolution export.

Do not treat third-party “unlimited Flow” claims as official. Credit use depends on resolution, model, and whether you confirm agent-triggered renders.

## Common mistakes

- **Writing a movie in the tool prompt.** Tools should encode a repeatable look, not a full plot.
- **Skipping the gallery.** Partner tools exist so you remix instead of reinventing overlays.
- **Leaving confirm-off on the agent.** That is how surprise credit spend happens.
- **Generating final resolution on the first try.** Draft cheap, upscale the clip you will keep.

## Conclusion

Custom tools are the part of Google Flow that turns a lucky generate into a reusable studio preset. Open a project, use Tools on the left, remix a gallery item or create one from a short job description, then save outputs into the project gallery.

Start with one tool you will run more than twice this week. That is the test that matters more than a clever first prompt.

## Sources

- [Google Flow](https://flow.google.com/)
- [Reimagining New York Fashion Week prep with Google Flow](https://blog.google/innovation-and-ai/technology/ai/google-flow-fashion-week/)
- [Introducing Gemini Omni for Google Flow and Flow Music](https://blog.google/innovation-and-ai/models-and-research/google-labs/flow-updates/)
- [Google Flow creative control update (August 2026)](https://blog.google/innovation-and-ai/models-and-research/google-labs/new-creative-controls-google-flow/)
- [Create videos in Flow — Google Flow Help](https://support.google.com/flow/answer/16353334?hl=en)
- [How to use Tools in Google Flow (YouTube)](https://www.youtube.com/watch?v=ECquAokER_8)
- [How to use Agent in Google Flow (YouTube)](https://www.youtube.com/watch?v=JJTdXTf12oQ)
- [Google AI subscription updates](https://blog.google/products-and-platforms/products/google-one/google-ai-subscriptions/)
