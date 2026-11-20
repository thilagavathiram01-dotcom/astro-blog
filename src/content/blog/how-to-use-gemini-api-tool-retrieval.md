---
title: "How to Use Gemini API Tool Retrieval for Efficient Agent Scaling"
description: "Step-by-step guide to Gemini API Tool Retrieval: load tool schemas on demand, reduce input tokens, and scale agents with hundreds of tools."
pubDate: 2026-11-20T14:00:00
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini", "developer", "how-to"]
noindex: false
---

Agents that connect to dozens or hundreds of tools face a hidden cost. Every full parameter schema travels with every request. Token counts climb, latency rises, and tool-selection accuracy drops as the candidate list grows. Google launched Tool Retrieval in the Gemini API on November 19, 2026, to solve this. The feature is available in preview inside the Interactions API.

Tool Retrieval keeps the full tool library on standby. The model sees only the name and description of deferred tools. Parameter schemas load only when the current task needs them. This keeps context windows smaller and selection more precise. It works with Gemini 3.6 and later models, including all Gemini 4 models.

This guide shows how to enable server-side and client-side Tool Retrieval, handle the resulting steps, and measure token savings. For model selection details, see our earlier post on [adding Gemini 4 Hydrogen to Android with Firebase AI Logic](/blog/add-gemini-4-hydrogen-android-firebase-ai-logic/).

![Developer coding on a laptop with code visible on screen](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Enable server-side Tool Retrieval

Server-side retrieval requires no extra index. Gemini runs the search. Add a `tool_search` tool to the tools array and set `defer_loading: true` on the functions whose schemas you want held back. The model still knows every deferred tool exists because the name and description remain in context.

```python
from google import genai

client = genai.Client()

tools = [
    {"type": "tool_search"},
    {
        "type": "function",
        "name": "issue_refund",
        "description": "Refund an order to the original payment method.",
        "defer_loading": True,
        "parameters": {
            "type": "object",
            "properties": {
                "order_id": {"type": "string"},
                "amount": {"type": "number"},
            },
            "required": ["order_id", "amount"],
        },
    },
    # Add 50+ other deferred functions; leave frequent tools undeferred
]

interaction = client.interactions.create(
    model="gemini-4-hydrogen",
    input="Order A-1042 arrived damaged. Please refund 40 dollars.",
    tools=tools,
)
```

Inside a single request the model issues a tool search, the API injects the matching schema, and the model emits the function call. All three appear in `interaction.steps` for debugging.

```python
# Example steps structure
"steps": [
  {
    "type": "tool_search_call",
    "id": "tsc_7f2a",
    "arguments": {"function_names": ["issue_refund"]}
  },
  {
    "type": "tool_search_result",
    "call_id": "tsc_7f2a",
    "result": [{"type": "function", "name": "issue_refund", "parameters": {...}}]
  },
  {
    "type": "function_call",
    "id": "fc_91c3",
    "name": "issue_refund",
    "arguments": {"order_id": "A-1042", "amount": 40}
  }
]
```

From there the flow is standard function calling. Your code executes the tool and returns a `function_result` on the next turn. Keep high-frequency tools undeferred so the model can call them without a search step.

## Work with MCP servers and prefix caching

Remote MCP servers integrate cleanly. Set `defer_loading: true` on an `mcp_server` tool. Every tool that server exposes loads on demand. You avoid listing each tool individually.

Deferred schemas stay out of the prompt prefix. Loaded schemas appear later in the conversation. Prefix caches therefore remain valid across turns. This preserves the cost and latency benefits of caching even as the tool library grows.

![Close-up of code on a computer monitor](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Use client-side retrieval

If you maintain your own registry, embedding index, or permission filters, declare the tool search with client execution:

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

When the model emits a function call for `search_tools`, your application runs the lookup and returns matching function schemas inside a `function_result`. Client-side retrieval adds one round trip per search. Tools do not need to be declared upfront, so you can introduce new tools mid-conversation when a user connects an integration.

## Pricing, models, and token savings

Tool Retrieval carries no separate charge. Input and output tokens bill at the standard rates for the model you call. Enabling `tool_search` adds a small fixed block of input tokens. Each schema the model loads is billed as input for the remainder of the conversation, exactly as if the tool had been declared at the start.

Savings appear when the schemas you never load outweigh the ones you do. That is the usual case for large libraries. Measure against your own traffic. Idle deferred tools contribute roughly 26 tokens each according to independent analysis of the announcement.

Supported models are Gemini 3.6 and later, including all Gemini 4 models, and only through the Interactions API. The older `generateContent` endpoint does not support Tool Retrieval. The feature requires the v1beta API version and is still in preview.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/aZgH_wnmedQ"
    title="The Gemini Interactions API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for production use

Leave frequently called tools undeferred. Defer the long tail. This minimizes search steps while still capping context growth.

Inspect `interaction.steps` during development. The tool_search_call, tool_search_result, and function_call sequence makes it easy to debug which tools the model considered.

Test with your actual tool library size. Small libraries may see little or no savings because the fixed overhead of tool_search can outweigh deferred schema costs. Large libraries usually benefit.

Because the feature is in preview, pin the API version and watch for interface changes. Server-side retrieval is the simplest path for most teams; use client-side only when you need custom filtering or mid-conversation tool registration.

## Conclusion

Tool Retrieval in the Gemini Interactions API lets agents scale to hundreds of tools without inflating every request. Add the `tool_search` tool, mark deferred functions with `defer_loading: true`, and the API loads schemas on demand. Token billing stays at standard model rates, prefix caches remain intact, and MCP servers work without extra indexing.

Start with server-side retrieval on Gemini 4 Hydrogen or later models. Measure token counts before and after, then defer the long tail. Official documentation and the November 19 announcement contain the full reference examples.

**Sources**

- Blog.google: Introducing Tool Retrieval in the Gemini API (November 19, 2026)
- Google AI Studio documentation: Tool Retrieval
- Interactions API overview (ai.google.dev)
- Google for Developers announcement posts
