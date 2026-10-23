---
title: "OpenAI Decisions API Guide: Fast Classification & Routing"
description: "Learn how to use the OpenAI Decisions API with GPT-6 Luna for fast predicate, choice, and score answers. Includes setup, examples, and tips for low-latency apps."
pubDate: 2026-10-23T14:00:00
heroImage: "https://images.unsplash.com/photo-1764452008254-eed469a4fad3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "chatgpt", "ai", "developer"]
noindex: false
---

Applications and agents constantly classify inputs, route requests, or pick the next action. Those small decisions add latency and cost when you send every one through a full Responses API call. OpenAI made the Decisions API generally available on 22 October 2026 so developers can get typed answers up to 10 times faster.

Powered only by GPT-6 Luna, the endpoint returns a probability, a choice from your list, or a score against a rubric. You pay solely for input tokens at $0.10 per million, with cached inputs at $0.01. There are no output-token charges. This guide shows how to call it, choose the right question type, and put the result to work in real apps.

## What the Decisions API returns

A request has three pieces: the model (always gpt-6-luna), shared input evidence, and one or more named questions. The response is an answers array in the same order. Each answer is one of three types.

Predicate questions return a probability between 0 and 1 that a condition is true. Use them for yes/no checks such as “does this product photo show a crack?” or “is this message spam?”

Choice questions pick one value from the list you supply and also return probabilities and a confidence score. They suit routing: send a support ticket to billing, technical, or other.

Score questions rate an input against ordered levels you define. The score is the probability-weighted average of the level indices, so results can fall between whole numbers. Severity ratings and lead quality scores fit here.

You can ask up to 400 questions in one request. The API also accepts images, native JSON, and conversation history that includes tool calls. Prompt caching is available for repeated prefixes.

![Developer coding on a laptop at night with city lights outside](https://images.unsplash.com/photo-1764452008254-eed469a4fad3?auto=format&fit=crop&w=800&q=80)

## Step 1: Make your first request

You need an OpenAI API key with access to the Decisions endpoint. Send a POST to https://api.openai.com/v1/decisions.

Here is a minimal Python example that routes a support ticket:

```python
from openai import OpenAI
client = OpenAI()

response = client.decisions.create(
    model="gpt-6-luna",
    input="I was charged twice for order R-208. Please refund the extra payment.",
    questions=[
        {
            "type": "choice",
            "name": "route",
            "instructions": "Select the team that should handle this ticket.",
            "choices": [
                {"value": "billing"},
                {"value": "technical"},
                {"value": "other"}
            ]
        }
    ]
)
print(response.answers[0].choice)
```

The call returns in a fraction of a second on typical inputs. Test edge cases in the Decisions Playground before you hard-code thresholds.

## Step 2: Add images and JSON

For visual checks, include an image as a content part. The API accepts public HTTPS URLs or base64 data URLs.

```python
response = client.decisions.create(
    model="gpt-6-luna",
    input=[
        {
            "role": "user",
            "content": [
                {"type": "input_text", "text": "Check the product for damage."},
                {"type": "input_image", "image_url": "https://example.com/product.jpg"}
            ]
        }
    ],
    questions=[
        {
            "type": "predicate",
            "name": "damaged",
            "instructions": "Does the product have a visible crack, tear, or dent? Ignore packaging."
        }
    ]
)
print(response.answers[0].probability)
```

Native JSON works the same way. Place an input_json content part inside a user message. Keys inside the JSON are ordinary data; they do not create extra messages.

## Step 3: Use scores and multiple questions

Define ordered levels for a score question. The model returns a floating-point score plus the probability of each level.

You can combine types in one call. Ask a predicate, a choice, and a score against the same evidence. Name each question so your code can match the answer.

![Team collaborating around a table reviewing project work](https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80)

## Connect Decisions to GPT-Live

The API integrates natively with GPT-Live. Live can call Decisions directly during a voice session so the model decides the next action while the user is still speaking. Set the delegation type when you create the session and supply the questions Live should ask.

This pattern keeps voice agents responsive. A customer-support avatar can choose whether to escalate, ask a clarifying question, or continue without an extra round trip through your application.

If you are already building always-on agents, the same low-latency classification helps Dots decide when to surface a result or stay quiet. See the [ChatGPT Dots setup guide](/blog/chatgpt-dots-setup-apps-tasks-controls/) for how those agents handle ongoing tasks.

## Tips for production use

Start with one recurring decision and measure latency and accuracy on real examples. Set confidence thresholds in your application, not inside the prompt. Low-confidence answers should route to a human or fall back to a full Responses call.

Use prompt caching for any shared instructions or long context that repeats across requests. Cached input is ten times cheaper.

Regional processing is available in the US and EU. Zero Data Retention is offered to eligible customers. Monitor usage through the organization usage endpoint so you can track token counts and request volume by project.

Do not treat a probability of 0.51 as a hard yes. Calibrate thresholds on your own data. The model can also refuse a question; your code should handle a refusal answer type gracefully.

## Watch the official introduction

OpenAI’s short video walks through classifying text, reading images, and driving a robot with Decisions responses.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/FB6oCmrIj-Y"
    title="Introducing the Decisions API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

The Decisions API removes the overhead of free-form generation when your app only needs a probability, a label, or a score. Call it with GPT-6 Luna, define clear questions and allowed answers, then act on the typed result. Pair it with prompt caching and GPT-Live for the lowest latency. Test in the Playground, measure on real traffic, and keep a fallback path for cases that need richer reasoning.

## Sources

- OpenAI, “Build more responsive apps with the Decisions API,” 22 October 2026: https://openai.com/index/decisions-api/
- OpenAI API Documentation, “Decisions”: https://developers.openai.com/api/docs/guides/decisions
- OpenAI, “Introducing the Decisions API,” YouTube, 6 October 2026: https://www.youtube.com/watch?v=FB6oCmrIj-Y
