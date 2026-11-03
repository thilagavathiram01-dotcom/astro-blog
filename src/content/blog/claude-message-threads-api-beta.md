---
title: "Claude Message Threads Beta: Cut Agent Latency 35%"
description: "Anthropic's Claude message threads beta lets agents send only new messages, cutting median TTFT by 35% on long sessions. Practical code examples."
pubDate: 2026-11-03T09:00:00
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "ai", "developer"]
noindex: false
---

Long-running coding agents often resend hundreds of thousands of tokens of history on every turn. That upload and re-tokenization adds measurable delay before Claude starts replying. Anthropic’s message threads beta, released November 2, 2026, keeps the conversation on the server so you send only the new messages plus the previous response ID.

With message threads enabled by default for most Claude Code users, requests containing 500,000 to 1 million tokens saw median time-to-first-token (TTFT) drop by about 35%. Request size in long conversations shrank from a median of roughly 800 KB to 1.8 KB. Token usage and pricing stay the same because Claude still processes the full conversation; the gain is lower and steadier latency.

![Developer coding on a laptop with code on screen](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## How message threads work

A thread is a short-lived, encrypted, in-memory store on Anthropic’s side. You create it once with the full conversation, system prompt, and tools. Subsequent turns carry only the new user message (or tool results) and the ID of the previous response. The API rebuilds the context before calling the model.

Key rules from the official docs:

- Threads expire 5 minutes after the last request and are deleted no more than 1 hour after last use.
- You must keep your own copy of the conversation. The API does not provide a list or retrieve endpoint.
- On a 404 with `thread_not_found`, replay the full history in a new create request.
- Fixed fields (model, thinking settings, top-level cache_control, beta headers) must stay identical across turns or you get `thread_fingerprint_mismatch`.
- System prompt and tools are create-only; sending them on a continue request returns a 400.

Threads work on the native Claude Platform, Claude Platform on AWS, Claude in Microsoft Foundry, and Anthropic-managed Claude Models on Google Cloud. They are incompatible with zero data retention and HIPAA configurations.

## Step-by-step: create and continue a thread

Add the beta header `message-threads-2026-08-12` on every request. Use the Python SDK’s `beta.messages.create` or the higher-level thread helper.

### Manual create + continue

```python
import anthropic

client = anthropic.Anthropic()

# Turn 1: full conversation, create thread
first = client.beta.messages.create(
    model="claude-opus-5-5",
    max_tokens=1024,
    system="You are a helpful coding assistant.",
    messages=[{"role": "user", "content": "Explain message threads briefly."}],
    thread={"type": "create"},
    betas=["message-threads-2026-08-12"],
)

# Turn 2: only the new message + previous ID
second = client.beta.messages.create(
    model="claude-opus-5-5",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Show a Python example."}],
    thread={"type": "continue", "previous_message_id": first.id},
    betas=["message-threads-2026-08-12"],
)
```

### SDK thread helper (recommended)

The helper adds the beta header, manages create/continue, keeps the conversation in memory, and automatically replays once on recoverable errors.

```python
thread = client.beta.messages.thread(
    model="claude-opus-5-5",
    max_tokens=1024,
    system="You are a helpful coding assistant.",
)

# First send creates the thread
reply1 = thread.send({"role": "user", "content": "Explain message threads."})

# Later sends continue it
reply2 = thread.send({"role": "user", "content": "Give a code snippet."})
```

Always continue from the latest response ID. The thread is append-only; to branch or edit earlier turns, start a new create request.

![Abstract digital network representing AI agents and data flow](https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80)

## Performance and practical limits

Anthropic measured the 35% TTFT reduction on Claude Code sessions of 500k–1M tokens. In long conversations the median payload fell by about 99%. The benefit grows with conversation length because the per-turn upload and validation work shrinks to the new turn only.

Prompt caching still works and is independent. You can (and should) send a top-level `cache_control` on every request so each turn reads prior context from cache and writes the new turn. A request may carry at most four cache breakpoints.

Threads do not reduce token counts or cost. They also do not support Message Batches, on-demand compaction, or most context-editing features. Organizations with Inference hooks enabled cannot use them.

## Recovery and edge cases

If a continue request returns 404 / `thread_not_found`:

1. Rebuild the full message list from your local store.
2. Send a new create request with the same fixed fields.
3. Continue from the new response ID.

Streaming works, but continue only after you receive `message_stop`. A dropped stream on a continue request should be retried once; if you see `thread_already_continued` or `thread_continue_in_flight`, fall back to a full replay.

Fallback models that write a turn are not stored, so the next request must be a full create. The SDK helper handles most of these cases automatically while the helper object lives.

## Integration notes for agents

Message threads pair especially well with long-running coding agents and computer-use agents (screenshots stay with the thread instead of being re-uploaded). They are already on by default for most Claude Code users. For custom agents built on the Messages API, adopt the thread helper or the manual pattern above and keep a durable local history.

If you are already using Claude on Google Cloud or AWS, the same beta header and parameters apply with no extra setup beyond the standard Anthropic credentials.

For related Claude platform features, see our guide on [accessing Claude Opus 5.5 via Google Antigravity](/blog/access-claude-opus-5-5-google-antigravity/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/6eBSHbLKuN0"
    title="Mastering Claude Code in 30 minutes"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Message threads remove the repeated upload tax that grows with every agent turn. On long sessions the measured latency improvement is substantial while cost remains unchanged. Implement the create/continue pattern (or the SDK helper), keep your own conversation log, and handle the five-minute expiry with a replay path. The feature is available now in public beta across Anthropic’s supported platforms.

## Sources

- Anthropic announcement: Make long-running agents faster with message threads (November 2, 2026)
- Official docs: Message threads – Claude Platform
- ClaudeDevs announcement on X
