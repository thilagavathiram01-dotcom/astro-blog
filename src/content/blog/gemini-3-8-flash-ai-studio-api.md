---
title: "How to Use Gemini 3.8 Flash in AI Studio and the API"
description: "Set up Gemini 3.8 Flash in Google AI Studio and the Gemini API with thinking levels, tools, and pricing notes."
pubDate: 2026-09-27T08:00:00
heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "developer", "ai"]
noindex: false
---

Gemini 3.8 Flash is Google’s current workhorse model for coding agents and long multi-step tasks. It shipped on 2 September 2026 as a drop-in successor to Gemini 3.7 Flash, at the same introductory price, with a 1 million token context window.

This guide shows how to pick the model in Google AI Studio, call `gemini-3.8-flash` from the Gemini API, and choose thinking levels without wasting tokens. Facts below come from Google’s model announcement and the official Gemini API model page.

## What Gemini 3.8 Flash is for

Google describes 3.8 Flash as its most intelligent Flash model for long-horizon software engineering, autonomous agents, and complex enterprise workflows. Inputs include text, images, video, audio, and PDF. Output is text only.

Limits on the public API:

- Input: 1,048,576 tokens
- Output: 65,536 tokens
- Thinking levels: `low`, `medium` (default), `high`
- `minimal` thinking is not supported and returns an error

Supported tools include function calling, code execution, search grounding, Maps grounding, URL context, file search, structured outputs, and computer use (preview). Live API is not supported on this model ID. Use Gemini 3.8 Live if you need real-time voice.

Google also released **Gemini 3.8 Flash Cyber** the same day. That variant is limited to vetted defenders through the Fairwind Program. Do not expect Cyber in a normal AI Studio dropdown.



![Developer working at a laptop with code on the screen](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80)



## Price and when it changes

Introductory pricing through 31 December 2026:

- $0.75 per 1 million input tokens
- $3.75 per 1 million output tokens

From 1 January 2027 Google lists standard rates of $1.50 / $7.50 per million input / output tokens. Batch, Flex, and Priority inference are supported. Context caching is supported.

Google notes that 3.8 Flash can spend more tokens on hard jobs, especially at high thinking. If cost is the constraint, drop thinking to `low` or stay on 3.7 Flash, which remains supported.

## Step 1: Try the model in Google AI Studio

1. Open [Google AI Studio](https://aistudio.google.com/prompts/new_chat?model=gemini-3.8-flash) and sign in with a Google account.
2. Start a new chat and select **gemini-3.8-flash** in the model picker.
3. Set thinking to Medium for general coding, High for multi-file refactors, Low for short classification or extraction.
4. Attach a repo snippet, PDF, or screenshot if the task needs context. The model accepts those input types natively.
5. Enable tools you actually need. Search grounding helps current facts. Code execution helps when you want the model to run Python instead of only proposing it.
6. Save the prompt as a Studio prompt if you will reuse the system instruction.

For Android prototypes from the same Studio account, see our earlier walkthrough on [building Android apps in Google AI Studio](/blog/build-android-apps-google-ai-studio/).

## Step 2: Call gemini-3.8-flash from the API

Create an API key in AI Studio, then pin the stable ID `gemini-3.8-flash`. Do not use a floating alias if you need reproducible agent runs.

Python example using the official SDK pattern:

```python
from google import genai

client = genai.Client(api_key="YOUR_API_KEY")

response = client.models.generate_content(
    model="gemini-3.8-flash",
    contents="Review this stack trace and propose a minimal patch.",
    config={
        "thinking_config": {"thinking_level": "medium"},
        "system_instruction": "Return a short diagnosis, then a patch diff.",
    },
)
print(response.text)
```

REST callers should POST to the `generateContent` endpoint with the same model code. Structured outputs work when you pass a JSON schema. Function calling works with the standard tool declaration format used by other Gemini 3 models.

Keep system instructions short. 3.8 Flash follows instructions more tightly than 3.6/3.7 Flash on Google’s published coding benches, so vague “be helpful” preambles waste output tokens.



![Close-up of programming code on a monitor](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)



## Step 3: Pick a thinking level

Thinking is the main lever after the model ID.

- **Low** — classification, extraction, single-file edits, cheap batch jobs.
- **Medium** — default. Use for most agent loops and code review.
- **High** — long refactors, multi-tool plans, finance or legal-style multi-step analysis.

Google’s Cloud developer guide lists the same three levels, with Medium as default. If a run balloons in cost, log thinking tokens separately and drop the level before you change models.

Computer use is preview. Treat it as experimental in production agents. Search and Maps grounding are generally available on this ID.

## Step 4: Wire tools without over-calling

Give the model only the tools the task needs.

1. Declare two or three functions, not a kitchen-sink catalog.
2. Put retry and approval logic in your orchestrator. 3.8 Flash is built to call tools iteratively; unbounded loops are a product bug, not a model bug.
3. Use URL context when the source of truth is a live doc. Do not paste a whole handbook if a URL fetch will do.
4. Turn on code execution when you need a calculated result, not when you only want a code sample.

Google’s launch post shows 3.8 Flash used inside Google Antigravity for longer coding sessions (a 3D level, a playable DOS-style Maps prototype, a USGS topographic viewer). Those demos are product illustrations, not SLAs. Measure your own eval set before you replace a Pro model.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/3CyW24Pkz4o"
    title="What's new in the Gemini Live API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

The clip above covers Gemini 3.8 Live features (async function calling, proactive audio, context injection). Use Live when you need a voice session. Stay on `gemini-3.8-flash` for batch coding and agent text loops.

## Consumer and enterprise surfaces

You do not have to use the API.

- Google AI Pro and Ultra subscribers can use 3.8 Flash in the Gemini app, AI Mode in Search, and Gemini in Google Sheets.
- Enterprises can select the model in Gemini Enterprise / Vertex agent studio with model ID `gemini-3.8-flash`.
- Fairwind applicants are the only path to 3.8 Flash Cyber.

If your team already runs Gemini-connected Android or Workspace flows, treat 3.8 Flash as a model swap first, then retune thinking. Related setup notes live in [Connect apps to Gemini](/blog/connect-apps-to-gemini/).

## Practical tips

- Pin `gemini-3.8-flash`. Preview IDs change.
- Log input, output, and thinking tokens per job.
- Prefer Medium thinking until an eval proves High is worth the extra tokens.
- Keep 3.7 Flash in the fallback list for high-QPS cheap paths.
- Do not send secrets in prompts. Studio chats can be retained under your account settings.
- Skip Live API calls against this model ID. They are not supported.
- For security research, apply to Fairwind instead of jailbreaking the public Flash checkpoint.

## Conclusion

Gemini 3.8 Flash is the model to default to in late 2026 if you want Flash pricing with stronger agent and coding behavior than 3.7. Open AI Studio, select `gemini-3.8-flash`, set thinking to Medium, and pin that ID in production. Raise thinking only when a measured eval says the extra tokens pay off. Move to 3.8 Live or 3.8 Flash Cyber only when you need those separate products.

## Sources

- [Introducing Gemini 3.8 Flash and 3.8 Flash Cyber](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/) — Google, 2 September 2026
- [Gemini 3.8 Flash model page](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash) — Google AI for Developers
- [What's new in Gemini 3.8 Flash](https://ai.google.dev/gemini-api/docs/generate-content/latest-model) — Gemini API docs
- [Developer's guide to Gemini 3.8 Flash](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/guides/gemini-3-8-flash) — Google Cloud
- [Gemini 3.8 Flash — DeepMind model hub](https://deepmind.google/models/gemini/flash/)
