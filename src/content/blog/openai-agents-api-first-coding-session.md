---
title: "How to Run a First OpenAI Agents API Coding Session"
description: "Start an OpenAI Agents API session in public beta. Create a hosted sandbox task, stream events, continue the session, and delete it."
pubDate: 2026-10-02T18:00:00
heroImage: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["chatgpt", "ai-tools", "tutorials", "developer", "how-to"]
noindex: false
---

OpenAI's Agents API is in public beta for every developer. It wraps the same harness that runs Codex: sessions, tool use, context compaction, and an optional sandbox where the agent can write files and run commands. You pay for tokens and tools. There is no separate Agents API fee.

A first session does not need MCP servers or subagents. The official quickstart is a single coding task: create `tree.py`, run it, and report the output. This guide follows that path and the limits OpenAI documents around it.

If you already call models directly, the model choice here is separate from a plain Responses request. For `gpt-6.1-sol` pricing and tool rules, see [How to Use GPT-6.1 Sol on the OpenAI Responses API](/blog/gpt-6-1-sol-responses-api/).



![Developer working on a laptop in a dim room](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)



## What the API actually hosts

OpenAI hosts the harness. You choose where the agent works.

- `openai_hosted` gives the agent an OpenAI-managed sandbox for code, files, and artifacts.
- `none` skips the sandbox. Use it when the agent only answers questions or calls external tools.
- Self-hosted and partner sandboxes cover your own infrastructure. OpenAI lists Blaxel, Cloudflare, Daytona, DigitalOcean, E2B, Modal, Oracle, Runloop, and Vercel as integration partners.

The quickstart uses `gpt-6-astra` and `environment.type` of `openai_hosted`. Requests need the header `OpenAI-Beta: agents=v1`. Official SDKs add that header. Include it yourself if you call the API with cURL.

Long sessions get automatic context compaction as they near the context limit. Multi-agent mode can split work across subagents, each with its own context, but you do not need it for a first run. Set `multi_agent.enabled` to true only after the single-agent path works.

## Prerequisites

1. Open the [OpenAI Platform API keys page](https://platform.openai.com/api-keys) and create an application key in your project.
2. Grant `api.agents.read` and `api.agents.write` for session operations.
3. Grant `api.responses.write` for model inference.
4. Export the key in your shell: `export OPENAI_API_KEY="your-api-key"`.
5. Keep the key outside the sandbox. Do not paste it into a file the agent can read.

Install or upgrade the Python SDK:

```bash
pip install --upgrade openai
```

## Step 1: Create a session and stream the task

Save this as `quickstart.py`. It matches the official quickstart: one session, one input, streamed events.

```python
from openai import OpenAI

with OpenAI() as client:
    with client.beta.agents.sessions.create(
        agent={
            "model": "gpt-6-astra",
            "instructions": "Write clean code, run it, and report the actual output.",
        },
        environment={"type": "openai_hosted"},
        input=(
            "Create tree.py, a Python script that prints a readable tree "
            "of the files in the current directory. Run it and show me the output."
        ),
        stream=True,
    ) as events:
        for event in events:
            print(event.to_json(indent=None), flush=True)
```

Run it:

```bash
python quickstart.py
```

The call creates a session, submits the task, and prints JSON events as they arrive. On a successful run, the agent writes `tree.py`, executes it, and reports a directory tree that includes that file. Other files in the output depend on the sandbox.

Skip the sandbox when you do not need files or shell access. Set `environment` to `{"type": "none"}` for question answering or external tool calls.

## Step 2: Read the stream before you retry

Look for `agent.session.turn.completed`, then check the reported execution result. A completed turn does not mean every tool succeeded.

Treat these as failure or cancellation:

- events ending in `turn.failed`
- events ending in `turn.cancelled`
- `session.failed`

`agent.session.idle` alone is not success. If the stream drops early, retrieve the session and its saved items before you send the same task again. OpenAI's session guide covers that recovery path so you do not double-run a job that already finished.

Save the `session_id` from the events. You need it for follow-ups and cleanup.



![Code on a monitor during a development session](https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80)



## Step 3: Continue the same session

Open the event stream before you send follow-up input. That order keeps early events from being missed.

A useful second turn, taken from the quickstart notes, is: add a maximum-depth option to `tree.py`, run it, and show the output. Send that as new input on the saved session ID rather than creating a second agent.

Continuing one session keeps the files the agent already wrote. A new session starts with a fresh sandbox unless you upload files yourself.

## Step 4: Save artifacts, then delete the session

Download anything you need before you delete. OpenAI's files guide covers pulling artifacts out of the hosted environment. After that, delete the session when the task is done.

```python
from openai import OpenAI

def delete_session(client: OpenAI, session_id: str):
    return client.beta.agents.sessions.delete(session_id)

if __name__ == "__main__":
    result = delete_session(OpenAI(), "sess_123")
    print(result.to_json())
```

Replace `sess_123` with the ID you saved. Leaving sessions open keeps state you may not want, and it does not stop token billing for work the agent already did.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/2YHa1vhnmK0"
    title="Introducing the Agents API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## When to add tools or subagents

The announcement example attaches an MCP server and turns on multi-agent with `max_concurrent_subagents` set to 3. That pattern fits incident review or a split research job. It is extra surface area for a first coding session.

Add tools after the quickstart succeeds:

1. Confirm a hosted sandbox run completes and the stream shows `turn.completed`.
2. Attach one MCP server with a `server_label`, `type: "mcp"`, and an HTTP `server_url`.
3. Enable `multi_agent` only if the task splits cleanly into parallel pieces.
4. Point `capability_directories` at skills only when those files are already in the environment.

Tool search loads tool definitions as needed, which keeps unused schemas out of the prompt. Programmatic tool calling can run calls in parallel and filter results in code. Both are harness features. You do not implement compaction or tool search yourself to use them.

Computer use on the Agents API is also in public beta, and OpenAI's computer-use guide requires an `openai_hosted` environment with desktop access enabled. The hosted browser asks the user to approve each new website origin. That approval grants origin access. It does not add a separate confirm step before purchases or destructive changes. Restrict the browser if your app needs that guarantee.

## Practical tips

- Start with `gpt-6-astra` as in the quickstart, then swap models only after you compare quality on your task. Model IDs and prices change; check the pricing page before a production rollout.
- Do not put `OPENAI_API_KEY` in the sandbox. The docs call this out because the agent can read files there.
- Treat customer quotes on the launch post as vendor-reported results, not as your benchmark. Ciridae, SafetyKit, and others described their own scores and cost changes. Reproduce them on your workload.
- Recover a dropped stream by reading the session before you retry. A second create call starts a new session.
- Delete sessions after you download artifacts. The quickstart's delete example uses a placeholder ID on purpose.
- Beta means the harness will change before general availability. Pin SDK versions in apps you ship.

## Conclusion

A first Agents API coding session is four steps: a scoped key, `sessions.create` with `openai_hosted` and streaming, a check for `agent.session.turn.completed`, then a follow-up or a delete. OpenAI runs the Codex harness. You supply the task, the model, and the environment. Add MCP, subagents, or computer use only after that loop is reliable.

## Sources

- [Introducing the Agents API](https://openai.com/index/introducing-the-agents-api/) — OpenAI, 10 September 2026
- [Agents API quickstart](https://developers.openai.com/api/docs/guides/agents-api/quickstart) — OpenAI API docs
- [DevDay 2026 Recap](https://openai.com/index/devday-2026-recap/) — OpenAI, 29 September 2026
- [Introducing the Agents API](https://www.youtube.com/watch?v=2YHa1vhnmK0) — OpenAI on YouTube, 10 September 2026
