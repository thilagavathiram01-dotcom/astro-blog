---
title: "How to Use Gemini 3.7 Flash for Coding and Agents"
description: "Set gemini-3.7-flash in AI Studio and Antigravity, pick a thinking level, and run coding agents before intro pricing ends."
pubDate: 2026-09-23T14:00:00
heroImage: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "tutorials", "developer", "ai"]
noindex: false
---

Google released Gemini 3.7 Flash as a coding and agent workhorse three weeks after 3.6 Flash. The model ID is `gemini-3.7-flash`. It is generally available in Google AI Studio, the Gemini API, Google Antigravity, Android Studio, and Gemini Enterprise Agent Platform.

Use it when you want multi-step coding and tool use at Flash speed, not when you need the Live API. Live is not supported on this ID. Pair it with a later Flash model only if your stack already requires 3.8 thinking levels or Live audio.

This guide covers official limits, how to call the model, how to set thinking, and how to keep token cost predictable before introductory pricing ends on 31 December 2026.

## What Google actually shipped

Google calls 3.7 Flash its most intelligent Flash workhorse for software engineering and agents. Official coding numbers versus 3.6 Flash:

- FrontierCode 1.1 Main: 43.6% versus 34.4%
- DeepSWE v1.1: 65.3% versus 49.0%

Those figures come from Google’s launch post. They measure merge-ready code and long-horizon software tasks. They are not a promise that your repo will match the board.

The same post lists introductory API pricing of **$0.75 per 1 million input tokens** and **$3.75 per 1 million output tokens**. That rate also applies to 3.6 Flash. After 31 December 2026 the listed standard rate is **$1.50 / $7.50** per million tokens.

Official model limits from Gemini API and Cloud docs:

- Context window: 1,048,576 tokens
- Max output: 65,536 tokens
- Input: text, image, audio, video, PDF
- Output: text only
- Thinking: supported at **low**, **medium**, **high**. `minimal` is invalid and returns an error
- Default thinking level: medium
- Tools: Google Search and Maps grounding, code execution, function calling, URL context, computer use (preview), agentic video understanding (preview)
- Not supported: Gemini Live API, image generation, tuning

If you need real-time voice, use a Live model instead of forcing 3.7 Flash into a voice loop.



![Developer laptop with code editor open for an agent workflow](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)



## Try it in Google AI Studio first

Do not jump to production until a short Studio session proves the model follows your repo’s style.

1. Open [Google AI Studio](https://aistudio.google.com/) and sign in with the same Google account that holds your Gemini API key.
2. Start a new chat or Build session and select **gemini-3.7-flash** in the model picker. New Antigravity and AI Studio Build users may already see it as the default.
3. Paste one real task: a failing unit test, a screenshot of a UI mock, or a short issue description plus the relevant file.
4. Set thinking to **medium** for the first pass. Raise it to **high** only if the first answer skips a constraint.
5. Attach tools you will actually ship: code execution for snippets, Search grounding for current docs, function calling for your own APIs.

Keep the first prompt boring. Name the language, the file, the failing assertion, and the change you will accept. Vague “fix my app” prompts waste the 1M context window.

Google positions 3.7 Flash as stronger at turning design mocks into desktop and web UI, then auditing the result against the mock. If that is your job, attach the mock as an image and ask for a discrepancy list before you ask for a rewrite.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/9_PtOVH2FPE"
    title="Introducing Gemini 3.7 Flash"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Call the API with the stable ID

Use the stable ID `gemini-3.7-flash`. Do not invent preview suffixes unless a current model page lists them.

A minimal Python call with the official client:

```python
from google import genai

client = genai.Client()

response = client.models.generate_content(
    model="gemini-3.7-flash",
    contents="List the failing assertion in tests/test_cart.py and propose a one-file fix.",
)
print(response.text)
```

For agent loops, enable function calling and code execution the same way you do on other Gemini 3 Flash models. Computer use is preview. Treat preview tools as optional, not as a contract.

If you already run browser agents, compare this ID with the setup in our [Gemini Computer Use API guide](/blog/gemini-computer-use-api/). Computer use on 3.7 Flash is the preview path on the same family, not a replacement for a dedicated computer-use model card.

Thinking mid-conversation follows the Gemini 3 pattern: you can raise or lower `thinking_level` without throwing away the cached prefix. Official caching docs say effort and tool toggles can stay cache-friendly when you keep the prefix stable.

## Run it as the Antigravity workhorse

Google Antigravity is the agent-first IDE path. Official getting-started notes say to set `gemini-3.7-flash` as the active model, or set Flash for custom subagents.

A practical Antigravity loop:

1. Open the project that already builds locally.
2. Set the parent agent to `gemini-3.7-flash`.
3. Give subagents the same ID unless a subagent only classifies files. Cheap classifiers do not need high thinking.
4. Start with one ticket: reproduce, patch, test, stop.
5. Ask the agent to show the test command it ran. Reject a “done” message that never prints a test result.

Google’s own DevByte walks through a single-prompt game build in Antigravity, including assets from Nano Banana Pro. That demo is a capability sample. Your production loop should still require a test command and a diff you can read.



![Close-up of hands typing on a keyboard during a coding session](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)



## Use agentic video only when the clip is the source of truth

In September 2026 Google turned on agentic video understanding for 3.7 Flash, 3.6 Flash, and 3.5 Flash-Lite. The model searches, scans, and inspects segments instead of ingesting every frame at a fixed FPS.

Google reports up to 88% lower token use, up to 66% lower cost, and up to 7% higher quality versus static processing, with 3.7 Flash at the quality-to-cost front of that test set. Those numbers are Google’s own comparison. Measure your clips.

Use agentic processing when the question is “what changed at 12:40” or “list the three product claims in this keynote.” Do not use it to dump an hour of standup video into a coding agent that only needed the ticket text.

The Interactions API example from the agentic video post looks like this shape: model `gemini-3.7-flash`, a video URI, `processing: "agentic"`, then a short question. Confirm the current Interactions schema in AI Studio docs before you copy a snippet into production.

## Price and thinking habits that stay honest

Introductory pricing ends on a fixed date. Budget for the January 2027 list price if the agent will still run then.

Practical habits that match the docs:

- Leave thinking on **medium** for routine patches. **High** is for multi-file refactors and mock audits.
- Never send `minimal`. The 3.7 Flash model page says that value errors.
- Cache a stable system prefix. Change tools and thinking after the prefix so cache hits survive.
- Ground with Search when the task cites current library docs. Do not trust training cutoff for a package that shipped last week.
- Keep computer use and agentic video behind a flag. Both are preview.

If a later Flash model already sits in your default picker, pin 3.7 Flash only on jobs that need this ID’s coding board and price. Mixing IDs in one agent session makes logs hard to read.

## Tips

Start every coding turn with the test command and the file path. The model follows constraints better when the first sentence is an executable check.

Attach the mock before you attach the CSS. Design-parity work is one of the stated 3.7 Flash gains. Give it the picture first.

Stop the loop when tests pass. Extra “improve the comments” turns burn output tokens at the higher rate.

Read the [Gemini 3.7 Flash model page](https://ai.google.dev/gemini-api/docs/models/gemini-3.7-flash) when a tool flag is missing. Preview tools move. The model ID stays `gemini-3.7-flash`.

## Conclusion

Gemini 3.7 Flash is the Flash-tier coding agent you pin when you want 3.6-class speed, stronger merge-ready scores, and a published intro price through the end of 2026. Select `gemini-3.7-flash`, keep thinking on medium unless the first pass fails, and treat Live, image generation, and preview computer use as out of scope.

Run one real ticket in AI Studio today. If the test command and the diff look right, move the same ID into Antigravity or your API client. Recheck price and preview flags before you lock the agent into a 2027 budget.

## Sources

- [Introducing Gemini 3.7 Flash](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/) — Google
- [Google AI announcements from August 2026](https://blog.google/innovation-and-ai/technology/google-ai-updates-august-2026/) — Google
- [Gemini 3.7 Flash model page](https://ai.google.dev/gemini-api/docs/models/gemini-3.7-flash) — Gemini API
- [Gemini 3.7 Flash on Gemini Enterprise Agent Platform](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/3-7-flash) — Google Cloud
- [Introducing agentic video understanding with Gemini](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-agentic-video-in-gemini/) — Google
- [Gemini 3.7 Flash developer notes](https://aistudio.google.com/learn/gemini-3-7-flash-developer-guide) — Google AI Studio
