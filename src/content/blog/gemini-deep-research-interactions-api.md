---
title: "Call Gemini Deep Research from the Interactions API"
description: "How to run Gemini Deep Research and Deep Research Max with the Interactions API, poll jobs, plan collaboratively, and add charts."
pubDate: 2026-09-27T10:00:00
heroImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "developer", "ai-tools", "google", "how-to"]
noindex: false
---

A normal Gemini `generateContent` call answers in seconds. Deep Research does not. It plans, searches, reads, and writes a cited report that can take several minutes. Google exposes that agent only through the **Interactions API**, not through `generate_content`.

This guide follows the official AI Studio developer walkthrough and Google’s April 2026 Deep Research / Deep Research Max announcement. Use it when you need a background research job you can poll, stream, or schedule.

If you only want a report inside the Gemini app, stay on the consumer flow in [Gemini Deep Research cited reports](/blog/gemini-deep-research-cited-reports/). This article is for developers who need the same agent behind an API key.

## What the agent is

Deep Research is an **agent**, not a chat model. Google’s docs contrast it with standard Gemini models: latency is minutes and asynchronous, the process is plan → search → read → iterate → output, and the result is a long report with citations rather than a short reply.

Two preview agent IDs exist today:

- `deep-research-preview-04-2026` — faster and cheaper. Google positions it for interactive UIs you stream back to a client.
- `deep-research-max-preview-04-2026` — more sources and longer test-time compute. Google positions it for overnight jobs such as due diligence packs.

Both sit on paid Gemini API tiers in public preview. Google says the same research stack also powers parts of the Gemini app, NotebookLM, Search, and Google Finance.



![Developer workstation with code and research notes on dual screens](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80)



## What you need

1. A Gemini API key from [Google AI Studio](https://aistudio.google.com/apikey).
2. Python 3 and the official SDK: `pip install google-genai`.
3. An environment variable: `export GEMINI_API_KEY="your-api-key"`.
4. Time. Official help for the consumer app says a typical report takes about 5–10 minutes. Complex jobs run longer. Always set `background=True`.

Do not call this agent with `generate_content`. The Interactions API is the only documented path.

## Step 1: Start a background job and poll it

The smallest useful script creates an interaction, then polls until status is `completed` or `failed`.

```python
import time
from google import genai

client = genai.Client()

interaction = client.interactions.create(
    input="Research the history of Google TPUs.",
    agent="deep-research-preview-04-2026",
    background=True,
)

while True:
    interaction = client.interactions.get(interaction.id)
    if interaction.status == "completed":
        print(interaction.outputs[-1].text)
        break
    elif interaction.status == "failed":
        print(f"Research failed: {interaction.error}")
        break
    time.sleep(10)
```

Google’s sample prompt is that TPU history line. Swap it for a task that actually needs many sources: a competitor brief, a literature review, or a product landscape. Keep the first prompt short. You can refine the plan next.

## Step 2: Review the plan before the agent spends tokens

Set `collaborative_planning=True` to receive a plan instead of starting the long search immediately.

```python
plan = client.interactions.create(
    agent="deep-research-preview-04-2026",
    input="Research Google TPUs vs competitor hardware.",
    agent_config={"type": "deep-research", "collaborative_planning": True},
    background=True,
)
```

Poll until that interaction completes, read the plan text, then send follow-ups with `previous_interaction_id` while planning stays on. Example: “Add a section comparing power efficiency.”

When the plan is right, start the report with `collaborative_planning=False`. The docs are explicit: writing “go ahead” without flipping that flag does **not** start report generation.

```python
report = client.interactions.create(
    agent="deep-research-preview-04-2026",
    input="Plan looks good!",
    agent_config={"type": "deep-research", "collaborative_planning": False},
    previous_interaction_id=refined.id,
    background=True,
)
```

Use this path in any product where a human should approve scope. Finance and life-sciences teams are the examples Google cites for high-stakes review.



![Printed report and laptop used for reviewing citations](https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80)



## Step 3: Add charts, files, or private tools

**Charts.** Set `visualization="auto"` and ask for the chart in the prompt. Outputs can include base64 images plus text. Google also describes HTML or Nano Banana visuals in the product announcement.

**Your files.** Pass text plus a document object. The official sample grounds a question on a public PDF URI (`application/pdf`). You can also attach other multimodal inputs; the blog post lists PDFs, CSVs, images, audio, and video as grounding sources.

**Tools.** With no tool list, the agent defaults to Google Search, URL Context, and Code Execution. Pass a narrower list when you want only the web:

```python
tools=[{"type": "google_search"}]
```

To stay off the open web, omit Search and attach File Search or remote MCP servers instead. MCP entries take a name, URL, and optional auth headers (none, bearer, or OAuth). Google has said it works with providers such as FactSet, S&P Global, and PitchBook on MCP designs for financial data.

Restrict MCP with `allowed_tools` when the server exposes more than the agent should touch.

## Step 4: Stream progress for a live UI

Polling is enough for a cron job. A product UI should stream. Create the interaction with `background=True` and `stream=True`, enable `thinking_summaries="auto"`, and handle `content.delta` events for text, thought summaries, and images.

If the socket drops, the official sample reconnects with `last_event_id` while status is still `in_progress`. Treat that reconnect loop as required, not optional. Research jobs last long enough for idle proxies to close the first stream.

## When to pick Max instead of the fast agent

Use `deep-research-preview-04-2026` when a user is waiting on a page and you will stream thought summaries.

Use `deep-research-max-preview-04-2026` when completeness matters more than wait time: a nightly brief, a diligence memo, or a literature review you will read in the morning. Google describes Max as consulting more sources and weighing conflicting evidence, including material such as SEC filings and open-access journals.

Neither agent replaces a reviewer. Citations still need a human pass before you ship the text to a client or a regulator.

## Watch a consumer-side walkthrough

The Interactions API is the developer surface. The Gemini app uses the same research idea. This official Grow with Google lesson shows how a person starts Deep Research, waits on the plan, and turns findings into a shareable visual.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/hbeBoAgX_DI"
    title="Do research faster with Gemini Deep Research | AI Professional Certificate"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips that keep jobs cheap and correct

- Write the end goal, not a 400-word prompt. Edit the plan instead.
- Name the audience and the forbidden moves (“do not invent market share numbers”).
- Turn web search off when the corpus is private.
- Store `interaction.id` so you can resume after a process restart.
- Decode image outputs only after you check `output.type`.
- Put Max jobs on a queue. Do not block an HTTP request for ten minutes.

## Conclusion

Deep Research on the Interactions API is a background worker: pick a preview agent, always run with `background=True`, approve the plan when the stakes are high, then poll or stream until the report lands. Use the fast agent in a UI. Use Max when you can wait.

Start with the TPU sample, then point the same loop at one real brief you already research by hand. Keep the citations. Cut anything the sources do not support.

## Sources

- [How to use Deep Research with the Gemini API — Google AI Studio](https://aistudio.google.com/learn/deep-research-developer-guide)
- [Gemini Deep Research agent docs — Google AI Studio](https://aistudio.google.com/docs/deep-research)
- [Introducing Deep Research and Deep Research Max — Google Blog](https://blog.google/innovation-and-ai/models-and-research/gemini-models/next-generation-gemini-deep-research/)
- [Use Deep Research in Gemini Apps — Gemini Apps Help](https://support.google.com/gemini/answer/15719111)
- [Do research faster with Gemini Deep Research — Grow with Google](https://www.youtube.com/watch?v=hbeBoAgX_DI)
