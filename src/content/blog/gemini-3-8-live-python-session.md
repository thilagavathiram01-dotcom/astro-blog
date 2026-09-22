---
title: "How to Start a Gemini 3.8 Live Session in Python"
description: "Connect to Gemini 3.8 Live with the GenAI SDK: open a session, stream PCM audio, handle tool calls, and read transcriptions."
pubDate: 2026-09-20T14:00:00
heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "developer", "ai-tools"]
noindex: false
---

Gemini 3.8 Live is Google’s current default model for low-latency voice agents. You talk (or send text and frames). The model streams audio back over a WebSocket session instead of a single `generateContent` call.

This guide follows Google’s official [Get started with Gemini Live API](https://ai.google.dev/gemini-api/docs/live-api/get-started-sdk) page and the [Gemini 3.8 Live model card](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-live). It is the server-side Python path. For a product-level overview of both Live models, see [How to Try Gemini 3.8 Live in AI Studio and the API](/blog/gemini-3-8-live-api-guide/).

## What you need first

- A Gemini API key from [Google AI Studio](https://aistudio.google.com/).
- Python 3.10+ and the current `google-genai` package.
- A place to run async code. A local script is enough for the first session.

Install the SDK:

```bash
pip install -U google-genai
```

Set the key in the environment so it never lands in source control:

```bash
export GEMINI_API_KEY="your-key"
```

The Live API uses WebSockets. Keep this work on a server or a trusted machine. Do not ship a long-lived API key in a browser page. Google documents [ephemeral tokens](https://ai.google.dev/gemini-api/docs/ephemeral-tokens) for client-to-server setups.



![Circuit board close-up used as a stand-in for live audio pipelines](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80)



## Open a session

Use model id `gemini-3.8-live`. That is the stable string on the official model page. Do not pass `thinking_level`. Google’s migration notes say that field is not supported on 3.8 Live. Drop it if you are moving from `gemini-3.1-flash-live-preview`.

```python
import asyncio
import os
from google import genai

client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])
model = "gemini-3.8-live"
config = {"response_modalities": ["AUDIO"]}

async def main():
    async with client.aio.live.connect(model=model, config=config) as session:
        print("Session started")
        await session.send_realtime_input(text="Hello, how are you?")
        async for response in session.receive():
            content = response.server_content
            if content and content.output_transcription:
                print("Gemini:", content.output_transcription.text)

if __name__ == "__main__":
    asyncio.run(main())
```

`response_modalities: ["AUDIO"]` asks the model to speak. You still get text transcriptions on the same stream when the server includes them.

For harder voice-agent work, switch the model string to `gemini-3.8-live-extended-thinking`. Google positions that variant for multi-step reasoning while speech continues. Price and latency are higher. Start on `gemini-3.8-live` unless you already measured a task that needs the extra reasoning pass.

## Stream microphone audio

Audio in must be raw 16-bit PCM, 16 kHz, little-endian. That constraint is in the official get-started guide. Compressed formats such as MP3 are the wrong payload for `send_realtime_input`.

```python
from google.genai import types

async def send_pcm_chunk(session, chunk: bytes):
    await session.send_realtime_input(
        audio=types.Blob(
            data=chunk,
            mime_type="audio/pcm;rate=16000",
        )
    )
```

Capture chunks from your audio stack (PyAudio, sounddevice, or a browser that posts PCM to your server). Send each buffer as it arrives. Do not wait for a full utterance unless you are building a push-to-talk UI on purpose.

Outbound audio arrives as `inline_data` parts on `model_turn`. Play those bytes or forward them to the client. Google’s cookbook notebook and the GitHub Live API examples show a browser playback path if you need a reference implementation.

## Send a camera frame

Video is not a container stream. You send JPEG or PNG frames at up to one frame per second.

```python
async def send_frame(session, jpeg_bytes: bytes):
    await session.send_realtime_input(
        video=types.Blob(
            data=jpeg_bytes,
            mime_type="image/jpeg",
        )
    )
```

That is enough for “what is on the desk” style questions. It is not a 30 fps video codec. Budget one frame a second and keep the JPEG small.



![Developer workstation with dual monitors and a microphone](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)



## Handle a tool call

3.8 Live supports function calling and Search grounding. Caching, code execution, file search, Maps grounding, image generation, structured outputs, URL context, and the Batch API are listed as not supported on the model page. Design tools around that list.

When the model wants a tool, the receive loop yields `response.tool_call`. You run the function locally and send results back with the same call id.

```python
from google.genai import types

async def handle_tools(session, response):
    if not response.tool_call:
        return
    replies = []
    for fc in response.tool_call.function_calls:
        result = my_tool_function(**fc.args)
        replies.append(
            types.FunctionResponse(
                name=fc.name,
                id=fc.id,
                response={"result": result},
            )
        )
    await session.send_tool_response(function_responses=replies)
```

Register tool schemas in the session `config` the same way you do for other Gemini APIs. Google’s separate Live API tool-use guide covers the schema shape. Async function calling is the feature that lets speech continue while a slow tool runs. If you block the event loop inside `my_tool_function`, you throw that benefit away.

## Read both sides of the transcript

```python
async for response in session.receive():
    content = response.server_content
    if not content:
        continue
    if content.input_transcription:
        print("User:", content.input_transcription.text)
    if content.output_transcription:
        print("Gemini:", content.output_transcription.text)
    await handle_tools(session, response)
```

Use those strings for logs and captions. Do not treat them as a second source of truth for billing. Audio minutes are billed as audio, not as transcript tokens.

Google lists audio pricing for the 3.8 Live family at **$0.005 per minute of audio input** and **$0.018 per minute of audio output** in the September 2026 developer announcement. Confirm the live table in AI Studio before you quote a customer.

## Limits that change the design

Official model limits for `gemini-3.8-live`:

- Input cap: 131,072 tokens
- Output cap: 65,536 tokens
- Inputs: text, images, audio, video
- Outputs: text and audio

Omit `thinking_config` / `thinking_level` on session setup. Interleaved reasoning is supported; the old thinking-level knob is not.

If you still have `gemini-3.1-flash-live-preview` in production, change the model string first, then delete thinking-level from config, then re-test barge-in and tool latency. That is the migration order on the model page.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/3CyW24Pkz4o"
    title="What's new in the Gemini Live API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical checklist

1. Create a key in AI Studio and store it as `GEMINI_API_KEY`.
2. Install `google-genai` and open a session with `gemini-3.8-live`.
3. Send a text ping before you wire the microphone.
4. Switch input to 16 kHz PCM once text replies look healthy.
5. Add one tool with a short timeout. Log the function-call id.
6. Only then add camera frames at 1 fps.

If the first audio reply is silent, check `response_modalities` and confirm you are playing `inline_data`, not only printing transcriptions.

## Conclusion

A Live session is a long-lived socket plus a strict audio contract. Open `gemini-3.8-live`, send PCM at 16 kHz, return tool results with the original id, and keep the API key off the client. Use Extended Thinking when a spoken task needs extra reasoning, not as the default for every greeting.

When you outgrow a single Python script, read Google’s Live API capabilities, session management, and ephemeral-token guides next. The SDK calls above stay the same.

## Sources

- [Get started with Gemini Live API using the Google GenAI SDK](https://ai.google.dev/gemini-api/docs/live-api/get-started-sdk) — Google AI for Developers
- [Gemini 3.8 Live model docs](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-live) — Google AI for Developers
- [Live API capabilities guide](https://ai.google.dev/gemini-api/docs/live-api/capabilities) — Google AI for Developers
- [Introducing Gemini 3.8 Live and 3.8 Live Extended Thinking](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/) — Google Blog
- [What's new in the Gemini Live API](https://www.youtube.com/watch?v=3CyW24Pkz4o) — Google for Developers
