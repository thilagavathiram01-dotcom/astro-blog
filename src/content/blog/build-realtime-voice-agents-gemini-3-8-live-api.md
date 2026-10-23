---
title: "How to Build Real-Time Voice Agents with Gemini 3.8 Live API"
description: "Step-by-step guide to Gemini 3.8 Live API for native audio voice agents. Connect, send audio, handle responses, and add tools."
pubDate: 2026-10-23T17:40:00
heroImage: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini"]
noindex: false
---

Real-time voice agents need low latency and natural speech. Gemini 3.8 Live API delivers both through native audio models that process spoken input and stream spoken replies without a separate speech-to-text pipeline.

This guide shows how to connect, send audio, receive responses, and add basic tool use. All steps follow the official Gemini API documentation.

## What Gemini 3.8 Live API Does

The Live API uses a stateful WebSocket session. You stream raw PCM audio at 16 kHz and receive audio at 24 kHz. Supported features include barge-in, tool calling, audio transcriptions, proactive audio, and affective dialogue.

Gemini 3.8 Live is generally available. It supports native audio output, live avatars, and asynchronous function calling that keeps the conversation flowing while tools run in the background.

![Person coding on a laptop](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Prerequisites

You need a Google AI Studio API key and the Google GenAI SDK. Install it with:

```bash
pip install -U google-genai
```

Set the key as an environment variable:

```bash
export GEMINI_API_KEY="your-key-here"
```

For production, prefer server-to-server connections. Client-to-server setups should use ephemeral tokens.

## Connect to a Live Session

Start a session with the model name `gemini-3.8-live` and set the response modality to AUDIO.

```python
import asyncio
from google import genai

client = genai.Client()

model = "gemini-3.8-live"
config = {
    "response_modalities": ["AUDIO"],
    "system_instruction": "You are a helpful assistant. Answer in a friendly tone."
}

async def main():
    async with client.aio.live.connect(model=model, config=config) as session:
        print("Session started")
        # Send and receive here

if __name__ == "__main__":
    asyncio.run(main())
```

The session stays open for the conversation. Close it when finished.

## Send Audio Input

Capture microphone audio as raw 16-bit PCM at 16 kHz little-endian. Send chunks with the SDK.

```python
from google.genai import types

# chunk is bytes of PCM audio
await session.send_realtime_input(
    audio=types.Blob(
        data=chunk,
        mime_type="audio/pcm;rate=16000"
    )
)
```

Use headphones during testing. Without echo cancellation the model can interrupt itself.

## Receive and Play Audio Responses

Listen for server content that contains inline audio data. Play the 24 kHz PCM stream on the client.

```python
async for response in session.receive():
    if response.server_content and response.server_content.model_turn:
        for part in response.server_content.model_turn.parts:
            if part.inline_data:
                audio_data = part.inline_data.data
                # Send audio_data to the player
```

You can also enable transcriptions so both user speech and model replies appear as text.

## Add Tool Calling

Define functions the model can call. When a tool call arrives, run the function and return the result.

```python
async for response in session.receive():
    if response.tool_call:
        function_responses = []
        for fc in response.tool_call.function_calls:
            result = my_tool(**fc.args)
            function_responses.append(types.FunctionResponse(
                name=fc.name,
                id=fc.id,
                response={"result": result}
            ))
        await session.send_tool_response(function_responses=function_responses)
```

Gemini 3.8 Live supports non-blocking asynchronous tool execution. The model can speak while a tool runs, reducing dead air.

![Woman wearing headphones](https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80)

## Configure Native Audio Features

Native audio models support affective dialogue and proactive audio by default on Gemini 3.8 Live. Affective dialogue adjusts tone based on the user's vocal cues. Proactive audio lets the model decide when to respond versus ignore background noise.

You can also set a specific voice name in the speech config if needed.

## Tips for Better Voice Agents

Keep system instructions short and clear. Test barge-in by interrupting the model mid-sentence. Monitor latency; native audio paths are usually under a second for the first response.

For long sessions, review the session management guide. Rate limits and usage follow your Gemini API plan.

If you already use Gemini on Android, see our guide on [How to Use Gemini 3.8 Live on Android and Search Live](/blog/how-to-use-gemini-3-8-live-on-android-and-search-live/).

## Watch a Live Demo

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/xfPVBzDYjH4"
    title="Building Live Voice Agents with Gemini"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Gemini 3.8 Live API lets you build natural real-time voice agents with a single model that handles speech in and speech out. Start with a simple session, add microphone streaming, then layer on tools and transcriptions.

Official documentation is the best source for the latest model names and config options. Test thoroughly before production use.

## Sources

- Gemini Live API overview: https://ai.google.dev/gemini-api/docs/live-api
- Get started with the GenAI SDK: https://ai.google.dev/gemini-api/docs/live-api/get-started-sdk
- Gemini 3.8 Live model guide: https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/guides/gemini-3-8-live
