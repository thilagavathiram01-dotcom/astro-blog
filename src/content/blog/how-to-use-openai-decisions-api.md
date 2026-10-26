---
title: "How to Use OpenAI Decisions API for Fast App Logic"
description: "Learn to classify, route, and score inputs with OpenAI's Decisions API using GPT-6 Luna for low-latency decisions in apps and agents."
pubDate: 2026-10-26T18:00:00
heroImage: "https://images.unsplash.com/photo-1764452008254-eed469a4fad3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "chatgpt"]
noindex: false
---

OpenAI released the Decisions API to general availability on October 22, 2026. It uses GPT-6 Luna to answer bounded questions about text, images, or JSON inputs. Responses return a probability, a chosen option, or a score. The endpoint runs up to 10 times faster than the same model through the Responses API and charges only for input tokens.

Applications make dozens of small classification and routing calls. Latency compounds. The Decisions API keeps those calls short and predictable. Teams at Box, Datadog, Ramp, Sierra, and Speak already use it for document routing, risk scoring, cost attribution, and interactive voice experiences.

![Developer coding on a laptop at night overlooking city lights](https://images.unsplash.com/photo-1764452008254-eed469a4fad3?auto=format&fit=crop&w=800&q=80)

## What the Decisions API returns

Three answer types cover most needs:

- **Predicate** returns a probability between 0 and 1 that a condition is true. Use it to flag damaged products or refund-eligible tickets.
- **Choice** selects one value from a list you supply. It also returns probabilities and a confidence score. Add an “other” option so unmatched inputs do not force a bad fit.
- **Score** rates an input against ordered levels. The response gives a probability-weighted average of the level indices plus confidence.

You can ask up to 400 questions in one request. Images can appear in the input or in question instructions. Native JSON inputs are supported. Prompt caching applies to reused context. Regional processing is available in the US and EU. Zero Data Retention is available to eligible customers.

Pricing starts at $0.10 per million input tokens. Cached input drops to $0.01 per million tokens. There is no charge for output tokens.

## Make your first request

You need an OpenAI API key with access to GPT-6 Luna. Install or upgrade the official Python SDK:

```bash
pip install --upgrade openai
```

Set the key in your environment:

```bash
export OPENAI_API_KEY="sk-..."
```

The following example routes a support ticket. It asks one choice question and one predicate question:

```python
from openai import OpenAI

client = OpenAI()

decision = client.decisions.create(
    model="gpt-6-luna",
    input="Order R-208 was charged twice. Please return the extra payment.",
    questions=[
        {
            "type": "choice",
            "name": "route",
            "instructions": "Select the team responsible for this ticket. Choose other when no team fits.",
            "choices": [
                {"value": "billing", "description": "Charges, invoices, and refunds"},
                {"value": "account", "description": "Login, profile, and settings issues"},
                {"value": "other", "description": "Issues outside these teams"}
            ]
        },
        {
            "type": "predicate",
            "name": "refund_needed",
            "instructions": "Does the customer appear to need a refund?"
        }
    ]
)

for answer in decision.answers:
    if answer.type == "choice":
        print(answer.name, answer.choice, answer.confidence)
    elif answer.type == "predicate":
        print(answer.name, answer.probability)
```

Run the script. The choice answer should select “billing” with high confidence. The predicate should return a high probability that a refund is needed. Check `decision.usage` for token counts.

You can test the same questions in the Decisions Playground on the OpenAI platform before writing code. Supply sample text or images and inspect the returned answers and probabilities.

![Laptop screen showing lines of source code in an IDE](https://images.unsplash.com/photo-1763568258330-039d2f3dfc76?auto=format&fit=crop&w=800&q=80)

## Classify images and structured data

Images arrive as base64 data URLs or public HTTPS URLs inside a user message. The following snippet checks a product photo for visible damage:

```python
decision = client.decisions.create(
    model="gpt-6-luna",
    input=[{
        "role": "user",
        "content": [
            {"type": "input_text", "text": "Inspect the product in this photo."},
            {"type": "input_image", "image_url": "data:image/jpeg;base64,/9j/4AAQ..."}
        ]
    }],
    questions=[{
        "type": "predicate",
        "name": "visible_damage",
        "instructions": "Does the product have visible damage such as a crack, tear, or dent? Ignore packaging damage and shadows."
    }]
)
print(decision.answers[0].probability)
```

Replace the placeholder base64 string with a real encoded image. For JSON inputs, pass a native object under the input field when the schema supports it. The model evaluates the structured fields against your question instructions.

## Connect Decisions to voice with GPT-Live

The Decisions API integrates natively with GPT-Live. Live can call Decisions on transcript deltas or through delegation without an extra round trip through your application. A common pattern selects an avatar expression while the user is still speaking.

Add a trigger to `session.triggers`:

```json
{
  "type": "decisions",
  "event_type": "session.input_transcript.delta",
  "decisions": {
    "questions": [{
      "type": "choice",
      "name": "reaction",
      "instructions": "Choose an appropriate reaction for the avatar based on the user's latest message.",
      "choices": [
        {"value": "neutral"},
        {"value": "happy"},
        {"value": "sad"},
        {"value": "concerned"}
      ]
    }]
  }
}
```

Live emits a `decision.event`. Your application reads the chosen reaction and updates the avatar. Delegation mode lets Live decide among actions you define, such as cabin temperature controls in a car assistant, then report results back. See the official GPT-Live documentation for the full session configuration.

Watch the official introduction for a short overview of classification, image decisions, and the voice integration:

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/FB6oCmrIj-Y"
    title="Introducing the Decisions API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical tips

Start with one high-volume decision. Measure latency and accuracy against your current method before expanding. Include clear descriptions on every choice so the model can distinguish close options. Always provide a fallback such as “other” or “none”.

Cache repeated context. The lower cached rate applies when the same prefix reappears. Split unrelated questions into separate requests only when their contexts differ. For voice, prefer native delegation or transcript triggers so the decision stays on the hot path.

Monitor refusals. Any question can return a refusal while others still receive answers. Log confidence scores and route low-confidence results to a human or a fuller model.

If you already use ChatGPT’s interactive features, the same principle of focused, structured outputs appears in Intelligent UI. See our guide on [GPT-6 Intelligent UI in ChatGPT](/blog/chatgpt-intelligent-ui-gpt-6/) for related patterns.

## Conclusion

The Decisions API turns frequent classification and routing steps into fast, low-cost calls. Define the question, the allowed answers, and the input. GPT-6 Luna returns a probability, choice, or score that your application can act on immediately. Voice integrations with GPT-Live extend the same approach to real-time conversations.

Test a single decision in the Playground, then move the request into code. Measure the improvement against your existing path and expand from there.

## Sources

- OpenAI, “Build more responsive apps with the Decisions API,” October 22, 2026. https://openai.com/index/decisions-api/
- OpenAI API docs, Decisions reference and GPT-Live integration. https://developers.openai.com/api/docs/guides/decisions
- Official video: Introducing the Decisions API. https://www.youtube.com/watch?v=FB6oCmrIj-Y
