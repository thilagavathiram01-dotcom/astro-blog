---
title: "How to Use Tool Retrieval in the Gemini API"
description: "Step-by-step guide to Tool Retrieval in the Gemini Interactions API: defer tool schemas, reduce input tokens, and scale agents with Gemini 4 models."
pubDate: 2026-11-26T17:00:00
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "tutorials", "developer", "ai"]
noindex: false
---

Agents that connect to dozens or hundreds of tools face a practical problem. Sending every full parameter schema with every request inflates input token counts, adds latency, and makes tool selection less accurate as the list grows.

Google launched Tool Retrieval in preview on 19 November 2026 for the Gemini Interactions API. It lets the model see tool names and descriptions while loading full parameter schemas only when a task needs them. This keeps context focused and token use lower for large libraries.

The feature works with Gemini 3.6 and later models, including all Gemini 4 models, and has no separate charge. You pay standard input and output rates. Schemas that stay unloaded never count as input tokens.

## How Tool Retrieval works

Add a tool of type `tool_search` to your tools list. Set `defer_loading: true` on the functions you want to hold back. The model still sees the name and description of each deferred tool. When it needs one, it requests the tool by name. The API loads the full schema and the model emits the function call, all inside the same request for server-side mode.

You keep frequent tools loaded and defer the long tail. There is no index to build or host. Gemini runs the search on the server. Loaded schemas are added later in the conversation, so prefix caching stays stable across turns.

The response includes `tool_search_call`, `tool_search_result`, and `function_call` steps. Your code executes only the final function call, the same way as regular function calling. For remote MCP servers, set `defer_loading: true` on an `mcp_server` tool and every tool it exposes loads on demand.

![Lines of programming code on a dark screen](https://images.unsplash.com/photo-1543285198-3af15c4592ce?auto=format&fit=crop&w=800&q=80)

## Prerequisites and setup

Tool Retrieval is in preview and requires the `v1beta` API version. It is available only on the Interactions API. The older `generateContent` method does not support it. Use Gemini 3.6 Flash, Gemini 3.8 Flash, or any Gemini 4 model (Hydrogen, Neon, Argon, Carbon).

Install or update the Google GenAI Python SDK to version 3.6.0 or later:

```bash
pip install -U "google-genai>=3.6.0"
export GEMINI_API_KEY="your-key"
```

Create the client with the beta version:

```python
from google import genai

client = genai.Client(http_options={"api_version": "v1beta"})
```

## Server-side Tool Retrieval step by step

Server-side is the default. It keeps latency low because search, schema load, and the function call resolve in one API request. Declare tools up front and mark the ones to defer.

Here is a minimal example based on the official documentation. It uses a currency conversion tool:

```python
tools = [
    {"type": "tool_search"},
    {
        "type": "function",
        "name": "convert_currency",
        "description": "Convert an amount from one currency to another.",
        "defer_loading": True,
        "parameters": {
            "type": "object",
            "properties": {
                "amount": {"type": "number"},
                "from_currency": {"type": "string"},
                "to_currency": {"type": "string"},
            },
            "required": ["amount", "from_currency", "to_currency"],
        },
    },
]

interaction = client.interactions.create(
    model="gemini-4-hydrogen",
    input="Convert 100 USD to EUR.",
    tools=tools,
)

for step in interaction.steps:
    print(step.type, getattr(step, "name", ""))
```

The steps will show the search call, the loaded schema result, and the function call. Execute the function in your application and return a `function_result` on the next turn if needed. Leave your three to five most common tools without `defer_loading` so they stay available without a search step.

Measure token use on your own traffic. You save when the schemas you never load outweigh the ones the model requests.

## Client-side retrieval for custom registries

If you maintain your own tool registry, embedding index, or per-user permission filter, declare `tool_search` with `"execution": "client"`. Your application runs the lookup. This adds one round trip per search, but tools do not need to be declared up front. You can expose new tools mid-conversation when a user connects an integration.

Define the search tool with your own parameters:

```python
tools = [{
    "type": "tool_search",
    "execution": "client",
    "name": "search_tools",
    "description": "Search the internal tool registry for functions.",
    "parameters": {
        "type": "object",
        "properties": {"query": {"type": "string"}},
        "required": ["query"],
    },
}]
```

When the model calls it, run your search logic and return matching function schemas in the `function_result`. Continue the conversation with `previous_interaction_id`. Server-side and client-side cannot be combined in the same request.

![Developer working on a laptop with code visible](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Tips for production use

Start by logging input tokens with and without the feature on a sample of real traffic. Keep the most frequent tools eager. Rewrite tool names and descriptions so the first sentence states what the tool does. Use the optional `short_description` field for longer text.

Tool Retrieval works with prefix caching. Deferred schemas stay out of the start of the prompt. The feature also works with remote MCP servers. Set `store=false` if you need to avoid default retention of interactions (55 days on paid projects, one day on free tier).

Because it is preview, the API surface may change before general availability. Pin your integration to the current documentation. For agents that already use function calling or computer use patterns, the execution model remains the same once the schema loads. See our guide on [running browser tasks with Agents API computer use](/blog/agents-api-computer-use-browser-tasks/) for a related approval and session pattern.

## Watch the Interactions API overview

The Interactions API is the recommended interface for new Gemini work. This short video from Google for Developers covers the basics of the unified endpoint for models and agents.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/iOK1-b_9Dlg"
    title="Get started with the Interactions API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Tool Retrieval solves a scaling problem that appears once an agent has more than a handful of tools. Add `tool_search`, mark the long tail with `defer_loading: true`, and let the model request schemas only when needed. Server-side mode keeps everything in one request. Client-side mode lets you plug in your own registry or filters.

Measure the token difference on your traffic, keep frequent tools loaded, and treat the preview status as a signal to test before you rely on it in production. The same pattern already exists in other major APIs. Gemini now offers it natively for agents built on Gemini 3.6 and later models.

## Sources

- [Introducing Tool Retrieval in the Gemini API](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-api-tool-retrieval/) — Google, 19 November 2026
- [Tool retrieval documentation](https://aistudio.google.com/docs/tool-retrieval) — Google AI Studio
- [Interactions API overview](https://aistudio.google.com/docs/interactions-overview) — Google AI for Developers
- [Get started with the Interactions API](https://www.youtube.com/watch?v=iOK1-b_9Dlg) — Google for Developers
