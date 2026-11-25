---
title: "How to Use Tool Retrieval in Gemini Interactions API"
description: "Step-by-step guide to Tool Retrieval in the Gemini API. Defer tool schemas, cut input tokens, and scale agents with the Interactions API."
pubDate: 2026-11-25T14:00:00
heroImage: "https://images.unsplash.com/photo-1553438101-08e2993f89c1?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "tutorials"]
noindex: false
---

Google added Tool Retrieval to the Gemini Interactions API in preview on November 19, 2026. The feature lets agents keep large tool libraries on standby and load full parameter schemas only when a task needs them. This cuts input token counts and helps tool selection stay accurate as the number of tools grows.

You no longer send every function’s full schema on every request. The model sees names and descriptions for deferred tools. When it needs one, the API loads the schema inside the same call. Standard model pricing applies. No extra fee exists for the feature.

## Why Tool Retrieval matters for agents

Agents that call dozens or hundreds of tools face a clear problem. Full parameter schemas consume tens of thousands of tokens on every request. Latency rises. Tool-selection accuracy falls as the candidate list grows. Tool Retrieval solves this by holding schemas back until the model requests them by name.

The feature works with Gemini 3.6 and later models, including all Gemini 4 models (Hydrogen, Neon, Argon, and Carbon). It requires the Interactions API on the v1beta version. The older generateContent method does not support it. The interface may change before general availability.

![Laptop and smartphone on a desk with coding software](https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=800&q=80)

## How Tool Retrieval works

Add a tool of type `tool_search` to your request. Set `defer_loading: true` on the functions you want to hold back. The model still sees the name and description of every deferred tool, so it knows what is available. Parameter schemas stay out of the initial context.

When the model needs a tool, the response contains three steps inside one API call:

1. A `tool_search_call` where the model requests the tool by name.
2. A `tool_search_result` where the API returns the full schema.
3. A `function_call` where the model emits the call your code executes.

The API resolves the search and schema load itself. You only handle the final function call. You can leave frequently used tools undeferred so their schemas load immediately. Test your traffic to find the right balance.

## Step-by-step setup

1. Use the Interactions API with a supported model such as Gemini 4 Hydrogen or Neon.
2. Create your client and prepare your tool list.
3. Add `{"type": "tool_search"}` to the tools array.
4. Mark tools you want deferred with `"defer_loading": true`.
5. Send the request. Handle the returned steps in order.

Here is a Python example based on the official documentation:

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
    # Add more deferred functions as needed
]

interaction = client.interactions.create(
    model="gemini-4-hydrogen",
    input="Refund order 12345 for $49.99.",
    tools=tools,
)

# Process steps: tool_search_call, tool_search_result, function_call
for step in interaction.steps:
    if step.type == "function_call":
        # Execute the function with step.arguments
        pass
```

The same pattern works in other languages that support the Interactions API. Keep frequent tools loaded and defer the rest.

![Person typing code on a laptop](https://images.unsplash.com/photo-1763568258239-d3b5c95019af?auto=format&fit=crop&w=800&q=80)

## Server-side versus client-side retrieval

The Gemini API supports two modes. Server-side retrieval is the default. The API searches and loads schemas for you. Client-side retrieval lets you host your own tool registry and handle the search yourself. You cannot mix the two modes in one request. Choose based on where your tools live and your latency needs. Server-side needs no extra index to host.

## Tips for production use

- Defer tools whose schemas are large or rarely used.
- Keep core tools loaded so common paths stay fast.
- Monitor token counts before and after. Savings appear when unused schemas outweigh loaded ones.
- Handle all three step types in your response parser.
- Remember the feature is in preview. Test thoroughly and watch for API changes.
- Pair it with other Interactions API features such as built-in tools when needed.

If you already use Firebase AI Logic for Android apps, the same Gemini models work there. See our guide on [adding Firebase to Android apps in Google AI Studio](/blog/add-firebase-to-android-apps-google-ai-studio/) for related setup.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/KwJwYIqDMLY"
    title="Building an Android app in AI Studio"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Tool Retrieval gives agents a practical way to scale tool libraries without ballooning every request. You declare tools once, defer the heavy schemas, and let the model request only what it needs. The result is lower token use and more reliable tool selection on Gemini 3.6 and later models inside the Interactions API.

Start with a small set of deferred tools, measure the token savings, and expand from there. Official details live on the [Google AI blog](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-api-tool-retrieval/) and the [Gemini API documentation](https://aistudio.google.com/docs/tool-retrieval).

## Sources

- [Introducing Tool Retrieval in the Gemini API](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-api-tool-retrieval/) — Google, November 19, 2026
- [Tool retrieval documentation](https://aistudio.google.com/docs/tool-retrieval) — Google AI for Developers
- [Interactions API overview](https://ai.google.dev/gemini-api/docs/interactions) — Google AI for Developers
