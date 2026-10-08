---
title: "How to Call the Mistral Large 4 Preview API Today"
description: "Call the Mistral Large 4 preview API with model ID mistral-large-4. Check sale pricing, send a chat request, and know what is not open yet."
pubDate: 2026-10-08T09:30:00
heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "developer", "ai"]
noindex: false
---

Mistral opened a public preview of Mistral Large 4 on 6 October 2026. The company also calls it Le Chonk. You can hit the preview API from Mistral Studio today. The weights are not public yet. Mistral says those drop at the end of the month.

This guide covers what the preview actually is, how to send a first chat call, and which numbers on the model card are worth checking before you spend tokens.

## What Mistral Large 4 is

Mistral Large 4 is a mixture-of-experts model. The docs list 1.05 trillion total parameters and 52 billion active parameters, plus a 1.6 billion-parameter vision encoder. The context window on the model page is 1 million tokens. Inputs can include text and images. Output is text.

Mistral trained it from scratch on 3,800 NVIDIA Grace Blackwell GPUs in its own European data centers. The public preview is served on that same infrastructure. A large share of the training data was multilingual, covering more than 160 languages, including every official language of the European Union.

The model ID on the docs is `mistral-large-4`. Supported surfaces include chat completions, function calling, structured outputs, document Q&A, batch jobs, and the agents and conversations APIs.

Weights stay closed during the preview. Mistral is red-teaming the model with cybersecurity partners and state authorities before the open-weight release. Do not plan a local download until that drop lands.

![Developer workstation with code on a monitor](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Preview pricing to budget against

The model page lists a sale price and an original price, both in US dollars per million tokens:

- Input: $0.68 sale, $1.36 original
- Cached input: $0.07 sale, $0.14 original
- Output: $2.09 sale, $4.18 original

Treat the sale figures as the current preview rate and recheck the pricing page before a production rollout. Output is the expensive side. A long agent trace will cost more than a short classification call.

If you already route some browser work through Mistral, the Firefox Smart Window option is a different model. That integration uses [Mistral Small 4 in Firefox Smart Window](/blog/firefox-smart-window-mistral/), not Large 4.

## Step 1: Open Studio and create a key

1. Sign in at [console.mistral.ai](https://console.mistral.ai/).
2. Open API keys and create a key for this preview. Store it in an environment variable named `MISTRAL_API_KEY`. Do not paste it into a client-side app.
3. Open the model card for Mistral Large 4 and confirm `mistral-large-4` is listed for your workspace. The docs also point at a compare view under `mistral-large-4-0`.
4. Start with a short prompt in Studio before you write code. That confirms billing and model access without a bad request loop.

If the model is missing from the picker, stop. The preview can be account-gated. Do not fall back to `mistral-large-latest`, which points at an older Large alias.

## Step 2: Send a chat completion

The chat endpoint is `POST https://api.mistral.ai/v1/chat/completions`. Set the model field to `mistral-large-4`.

```bash
curl https://api.mistral.ai/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $MISTRAL_API_KEY" \
  -d '{
    "model": "mistral-large-4",
    "messages": [
      {
        "role": "user",
        "content": "Summarize this change in three bullets: a 1M-token context window, image input, and text output."
      }
    ]
  }'
```

Read `choices[0].message.content` for the text. Read `usage` for prompt and completion tokens so you can map the sale rates to a real call.

The official JavaScript client uses the same shape. Swap the model string:

```javascript
import { Mistral } from "@mistralai/mistralai";

const client = new Mistral({ apiKey: process.env.MISTRAL_API_KEY });

const response = await client.chat.complete({
  model: "mistral-large-4",
  messages: [
    {
      role: "user",
      content: "List three checks before calling an open-weight model that is still in preview.",
    },
  ],
});

console.log(response.choices[0].message.content);
```

Keep the first calls short. A 1 million-token window does not mean you should fill it. Cache repeated prefixes when the API returns cached-token usage, because cached input is listed at $0.07 per million on the sale rate.

## Step 3: Add an image only if the task needs it

The model is natively multimodal. Document Q&A is listed on the model card. Use an image when the source is a chart, a drawing, or a scanned page. Skip it for plain text. Image tokens add cost and latency.

Mistral reports a Dense 200 visual-grounding score of 42 percent for Large 4, against 41 percent for GPT-6 Astra on the same test. That is a narrow edge on one benchmark, not a reason to send every screenshot.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Hu1JOK6aXsI"
    title="Mistral is BACK! (Le Chonk)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Benchmarks worth reading before you switch

Mistral published these coding numbers for the preview:

- DeepSWE v1.1: 61.7 percent
- SWE-Atlas-QnA: 59.4 percent
- Terminal-Bench 4: 28.3 percent
- Combined Coding Agent Index: 49.8 percent, ahead of DeepSeek V4 Pro 0813 and Qwen 3.8 Max on that index

A blind Surge AI coding review placed the preview second of five models at 3.74 out of 5. Claude Opus 5 scored 4.22. Kimi K3 scored 3.59.

On agent workflows, Mistral reports 59.9 percent on AutomationBench, a set of 657 business workflows across apps such as Gmail, Sheets, Slack, and Salesforce.

Cyber scores are the sharpest claim. On one Artificial Analysis Cyber Index test that asks a model to reproduce a real open-source vulnerability and then patch it, Mistral says Large 4 scored 82 percent, the highest of any model in that comparison. It also solved 93 percent of Cybench, a set of 40 exercises from security competitions. Mistral notes that some closed models, including Claude Opus 5.5 and GPT-6 Astra, score near zero on the reproduce-and-patch test because they refuse the task.

Those refusal gaps matter for defenders. They are not a license to run offensive tests on systems you do not own. Keep cyber prompts inside a lab, a bug-bounty scope, or an authorized incident.

![Close view of a circuit board](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80)

## Where it fits, and where it does not

Use the preview when you want a European-hosted API, image-aware document work, or a second opinion next to a closed model. Function calling and structured outputs are on the card, so a tool-using agent can call it without a custom parser.

Do not treat the preview as a drop-in local model. Weights arrive later, and Mistral has not published the architecture write-up yet. Do not assume the sale price lasts. The model page still shows the original rates beside the sale rates.

For a closed-model comparison on access and price, see the [Gemini 4 Argon access and pricing guide](/blog/gemini-4-argon-access-pricing/). Argon is a different product: a Google frontier model with a 1 million-token output limit, not an open-weight preview.

## Tips before you leave Studio

- Pin `mistral-large-4` in code. Avoid the `latest` alias until Mistral says the preview has replaced it.
- Log `usage` on every call so you can spot a prompt that is mostly output.
- Prefer text prompts. Add images only for charts, drawings, or scans.
- Cap agent loops. Terminal-Bench 4 at 28.3 percent means long shell tasks still fail often.
- Wait for the weight release if you need on-prem or a private cloud you control. Mistral says that path is part of the plan for security work.

## Conclusion

Mistral Large 4 is available as a public preview API, not as downloadable weights. The model ID is `mistral-large-4`, the context window is 1 million tokens, and the sale rates on the model page are $0.68 input, $0.07 cached input, and $2.09 output per million tokens. Start in Studio, send one short chat completion, then decide whether the cyber and coding scores justify a larger workload.

## Sources

- Mistral, Introducing Mistral Large 4 (6 October 2026): https://mistral.ai/news/mistral-large-4/
- Mistral docs, Mistral Large 4 model card: https://docs.mistral.ai/models/mistral-large-4
- Mistral API, chat completions: https://docs.mistral.ai/api/
