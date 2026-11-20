---
title: "How to Use Tool Retrieval in the Gemini API"
description: "Step-by-step guide to Tool Retrieval in the Gemini Interactions API. Load tool schemas on demand to cut tokens and scale agents."
pubDate: 2026-11-20T14:00:00
heroImage: "https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini", "developer"]
noindex: false
---

Agents that call dozens of tools hit a hard limit. Sending every full parameter schema with each request inflates input tokens, slows responses, and confuses tool selection. Google solved this on November 19, 2026, with Tool Retrieval in the Gemini Interactions API.

Tool Retrieval keeps your full tool library on standby. The model sees only names and descriptions until it needs a specific schema. The API loads that schema on demand inside the same request. This keeps token counts low while agents scale.

## Why Tool Retrieval matters for agent builders

Large tool libraries are common in production agents. Customer support bots, coding assistants, and enterprise workflows often expose 50 or more functions. Prefixing every call with full schemas wastes money and context window space.

Tool Retrieval removes that waste. Deferred tools stay out of the initial prompt. Loaded schemas appear only when used and can still benefit from prefix caching on later turns. The feature works with Gemini 3.6 and later models, including all Gemini 4 models, and carries no separate charge.

## How Tool Retrieval works

Add a `tool_search` tool to your request. Set `defer_loading: true` on the functions you want to hold back. The model still knows every deferred tool exists. When it needs one, it issues a search, the API injects the schema, and the model emits the function call. All of this happens in a single Interactions API call.

You can leave frequently used tools undeferred so they stay in context. The long tail of rare tools stays deferred. There is no index to build or host. Gemini runs the search on the server.


![Developer workspace with multiple monitors showing code](https://images.unsplash.com/photo-1754548930550-be9fa88874f4?auto=format&fit=crop&w=800&q=80)


## Step-by-step: enable Tool Retrieval

1. Install or upgrade the Google GenAI SDK: `pip install -U google-genai`.

2. Create a client with your API key.

3. Define tools. Include one `tool_search` entry and mark the rest with `defer_loading: true`.

4. Call `client.interactions.create` with the model, input, and tools list.

5. Inspect `interaction.steps` to see the search, the loaded schema, and the final function call.

Here is the minimal Python pattern from the official announcement:

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
]

interaction = client.interactions.create(
    model="gemini-4-hydrogen",
    input="Order A-1042 arrived damaged. Please refund 40 dollars.",
    tools=tools,
)
```

The response steps show the search, the result with the full schema, and the function call with arguments. Your code then executes the function and returns a `function_result` on the next turn.

## Client-side retrieval option

If you maintain your own registry, permission filter, or embedding index, set the `tool_search` tool to `"execution": "client"`. Define your own search parameters. When the model calls your search tool, your application returns matching function schemas in the function result. This adds one round trip but gives you full control over which tools appear for each user.

You can also expose new tools mid-conversation when a user connects an integration. Tools do not need to be declared upfront in the client-side path.


![Abstract digital code and glitch texture representing API schemas](https://images.unsplash.com/photo-1765445665883-085301570c87?auto=format&fit=crop&w=800&q=80)


## MCP servers and remote tools

Tool Retrieval works with remote MCP servers connected through the Gemini API. Set `defer_loading: true` on an `mcp_server` tool. Every tool that server exposes loads on demand. You connect a large MCP server without listing every function individually in your request.

This is useful when agents need access to external systems that change frequently. The model discovers and loads only the tools required for the current task.

## Pricing and practical tips

Tool Retrieval adds a small fixed block of input tokens for the search tool. Each schema the model loads is billed as normal input for the rest of the conversation. You save tokens whenever the schemas you never load outweigh the ones you do. Measure against your own traffic before and after.

Keep high-frequency tools undeferred. Write clear, distinct descriptions for deferred tools so the model selects the right one. Check `interaction.steps` when debugging. The steps list shows exactly which tools the model considered.

Prefix caching still works. Deferred schemas stay out of the cached prefix. Loaded schemas appear later, so the prefix remains stable across turns.

For related setup on Android with Firebase AI Logic, see our guide to [adding Gemini 4 Hydrogen to Android apps](/blog/add-gemini-4-hydrogen-android-firebase-ai-logic/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/8aVbXXvJUY4"
    title="An Interaction Is All You Need — Ivan Leo, Google DeepMind"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Tool Retrieval removes the token tax of large tool libraries. Agents stay accurate, responses stay fast, and costs stay predictable as the number of available tools grows. Start with the Interactions API, mark the long tail of tools as deferred, and measure the difference on your next agent run.

## Sources

- [Introducing Tool Retrieval in the Gemini API](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-api-tool-retrieval/) — Google, November 19, 2026
- [Tool Retrieval documentation](https://aistudio.google.com/docs/tool-retrieval) — Google AI for Developers
- [Function calling with the Gemini API](https://ai.google.dev/gemini-api/docs/function-calling) — Google AI for Developers
