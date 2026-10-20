---
title: "Build a Voice Agent That Never Goes Silent with ADK"
description: "Use ADK streaming tools and response scheduling so Gemini 3.8 Live voice agents stay conversational during slow backend calls."
pubDate: 2026-10-20T14:00:00
heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini", "developer"]
noindex: false
---

In text chat, a slow database query shows a spinner. In a live voice conversation, 13 seconds of silence makes users think the call dropped.

Google’s Agent Development Kit (ADK) with Gemini 3.8 Live solves this. Streaming tools and response scheduling keep the agent talking while background work runs. Official benchmarks show the switch from blocking to streaming tools cut time to first words from 14.4 seconds to 1.2 seconds.

This guide shows the patterns from Google’s October 19, 2026 Developers Blog post. Facts come from that guide and the ADK docs.

## Why standard tools create dead air

A normal tool is an async function that returns once. During a Gemini Live bidirectional session (`run_live`), the agent waits for the return before generating the next audio turn.

If the tool takes 13 seconds, the user hears 13 seconds of silence. Prompt instructions to “tell the user you are working on it” fail because the model turn is blocked.

Non-blocking patterns fix the conversational presence without speeding up the backend.

![Developer working on code for a real-time voice agent](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Pattern 1: Streaming tools when progress has a story

When the operation has stages (connect, aggregate, format), turn the tool into a streaming tool. Define it as an async generator that yields updates.

ADK marks async generators as NON_BLOCKING. It sends an immediate status event so the model can speak right away (“Looking into the EMEA figures for you now…”).

Each yield sends a partial response. The model paraphrases the update. Users can ask other questions while the tool continues in the background.

Production notes from the guide:

- Add a clear “Call this ONCE” directive in the docstring. Models may re-call if prompted repeatedly.
- Include a `stop_streaming(function_name: str)` tool so ADK can cancel the generator cleanly.
- User barge-in stops model audio but does not cancel running tools. Results still arrive.

## Pattern 2: Background execution when waiting is just waiting

Continuous progress updates feel intrusive if the user pivots to another topic. Run the task quietly.

**Single-yield generator:** An async generator that yields only on completion. ADK issues an immediate pending response. The agent acknowledges, stays quiet, then presents the result when ready or when the user finishes speaking.

**FunctionTool with response_scheduling:** Keep a normal async function that returns a dict. Wrap it in `FunctionTool` and set `response_scheduling`. The model receives no payload until completion, so it typically does not give an initial verbal acknowledgement unless the user continues talking. This works well when the result should land at the next natural pause.

## Controlling delivery with response_scheduling

`response_scheduling` decides when the model reacts to a tool result:

- **WHEN_IDLE**: Waits until the current turn ends. Result lands at the next natural pause.
- **INTERRUPT**: Cuts in mid-speech for critical alerts, then continues.
- **SILENT**: Adds the result to conversation history without an announcement.

In benchmark sessions on gemini-3.8-live, WHEN_IDLE waited through a 20-second separate question then delivered figures seamlessly. INTERRUPT cut speech mid-sentence. SILENT updated context quietly.

Execution shape (streaming vs single-return) and delivery timing are independent. You can combine them. In ADK 2.8 and newer, streaming tools can set scheduling per update by yielding a `types.FunctionResponse`.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/yQEKMsCtsmE"
    title="Build a real-time voice AI agent with Google ADK and Gemini Live API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Architecture summary and rule of thumb

If the wait has a story (progress the user wants to hear), stream it. If the wait is just a wait, run it in the background and let the result land when idle.

Non-blocking tools do not reduce backend execution time. A 13-second query still takes 13 seconds. What changes is that the agent stays present.

A web page that loads in ten seconds feels slow. A voice agent silent for ten seconds feels broken.

## Step-by-step implementation outline

1. Install google-adk >= 2.10.0 and use the gemini-3.8-live model on Gemini Enterprise or the Live API.
2. Define tools as async generators for streaming or wrap return-once functions in FunctionTool with response_scheduling.
3. Start a live session with `runner.run_live()` and a LiveRequestQueue.
4. Add stop_streaming if you offer long-running tools.
5. Test with the interactive demo linked in the official guide. It runs the same 13-second query through every pattern so you can hear the difference.

If you already built a basic Gemini 3.8 Live voice agent, layer these patterns on top. See our earlier guide [How to Build a Voice Agent with Gemini 3.8 Live](/blog/gemini-3-8-live-voice-agent/) for the session setup basics.

![Abstract visualization of AI processing and voice waveforms](https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80)

## Practical tips

Measure first-word latency separately from tool latency. The goal is conversational continuity, not zero backend time.

Use WHEN_IDLE for reports the user may not need immediately. Use INTERRUPT only for alerts that change the current task.

Keep tool docstrings precise. Streaming tools push updates across multiple turns, so clear instructions reduce duplicate calls.

Log interrupted events and tool completion separately. Barge-in stops playback but leaves background work running.

Confirm the model string is gemini-3.8-live and that the session uses bidirectional streaming. Streaming tools require `run_live`.

## Conclusion

Pair ADK streaming tools and response scheduling with Gemini 3.8 Live to keep voice agents attentive during slow operations. Users hear progress or silence only when appropriate, and results arrive without breaking the conversation.

Start with the official interactive demo, implement the pattern that matches your tool’s story, and measure the drop in dead air.

## Sources

- [Step by Step guide: Build a Voice Agent That Never Goes Silent using ADK](https://developers.googleblog.com/step-by-step-guide-build-a-voice-agent-that-never-goes-silent-using-adk/) — Google Developers Blog, October 19, 2026
- [Tools - Agent Development Kit (ADK)](https://adk.dev/live/tools/) — ADK docs
- [Live and voice agents](https://adk.dev/live/) — ADK docs
- [Build a real-time voice AI agent with Google ADK and Gemini Live API](https://www.youtube.com/watch?v=yQEKMsCtsmE) — Google Cloud Tech
