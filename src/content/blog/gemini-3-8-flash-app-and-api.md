---
title: "How to Call Gemini 3.8 Flash in the Gemini API"
description: "Switch your Gemini app and API stack to gemini-3.8-flash: model ID, thinking levels, tools, pricing dates, and when to keep 3.7 Flash."
pubDate: 2026-09-26T09:00:00
heroImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "developer", "tutorials", "ai"]
noindex: false
---

Google shipped **Gemini 3.8 Flash** on 2 September 2026 as the third Flash release in six weeks. The public model ID is `gemini-3.8-flash`. It is generally available in the Gemini API, Google AI Studio, Gemini Enterprise, and the Gemini app for Google AI Pro and Ultra subscribers.

This guide shows how to turn it on in the consumer app, how to call it from code, and which settings actually change cost. Facts below come from Google’s launch post and the official model page.

## What 3.8 Flash is for

Google positions 3.8 Flash as a workhorse for long-horizon software engineering, autonomous agents, and multi-step work in specialized domains. Official docs list a **1,048,576**-token input window and **65,536**-token output window.

Inputs are text, image, video, audio, and PDF. Output is text. Live voice belongs on Gemini 3.8 Live, not this ID. Image generation belongs on Nano Banana models, not Flash text output.

Thinking is supported at **low**, **medium**, and **high**. The docs state that **minimal** is not supported and returns an error. Default thinking level is **medium**.

Built-in tools that the model page marks as supported include code execution, function calling, file search, URL context, search grounding, Maps grounding, structured outputs, caching, computer use (preview), batch, flex inference, and priority inference.

If you already tune thinking levels on 3.7, start with the same level on 3.8 and measure tokens. Google notes that on hard tasks the model may take extra reasoning steps and call tools more often.

![Developer laptop showing code and a terminal during an API integration](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80)

## Turn it on in the Gemini app

Consumer access is not the free Gemini tier. Google’s launch post says 3.8 Flash is available to **Google AI Pro and Ultra** subscribers in the Gemini app, AI Mode in Search, and Gemini in Google Sheets.

1. Open the Gemini app and confirm the account is on Pro or Ultra.
2. Open the model picker and select **3.8 Flash** when it appears for your account.
3. Run one bounded job you already know: a multi-file code review, a long spreadsheet plan, or a tool-heavy research prompt.
4. Compare the answer and the time against 3.7 Flash on the same prompt.

If the picker still lists only 3.7, wait for the account rollout. Do not assume every region or workspace tenant flipped on the same day.

Enterprise teams can select the model in Gemini Enterprise. Google links the studio entry at the Cloud console multimodal studio with `model=gemini-3.8-flash`.

For thinking-level details after you pick the model, use our earlier guide on [Gemini 3.8 Flash thinking levels](/blog/gemini-3-8-flash-thinking-levels/).

## Call it from the Gemini API

Stable model string:

`gemini-3.8-flash`

Google’s generateContent quickstart uses the GenAI SDK:

```python
from google import genai

client = genai.Client()

response = client.models.generate_content(
    model="gemini-3.8-flash",
    contents="Write a three.js script that renders a realistic 3D black hole."
)
print(response.text)
```

Migration notes from the official “What’s new” page:

- Change the model string to `gemini-3.8-flash`.
- Strip `temperature`, `top_p`, and `top_k` from generation configs. Those sampling knobs are deprecated for this model family.
- Keep thinking at `low`, `medium`, or `high`. Do not send `minimal`.

Antigravity and managed agents accept the same model string in `agent_config`. Google’s managed-agent quickstart uses `"model": "gemini-3.8-flash"` with `base_agent: "antigravity-preview-09-2026"`.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/y52bv4iNfzU"
    title="Gemini 3.8 Flash explained: benchmarks, cost, first impressions"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Price and when it changes

Introductory API price matches 3.7 Flash: **$0.75 per million input tokens** and **$3.75 per million output tokens**.

Google’s footnote is the part most teams miss. Introductory pricing expires on **31 December 2026**. From **1 January 2027** the listed rates become **$1.50 / 1M input** and **$7.50 / 1M output**.

That is a doubling on the list price, not a surprise surcharge on thinking. Thinking still consumes output tokens. If 3.8 takes more steps than 3.7 on the same prompt, your bill can rise even while the per-token rate is unchanged.

Keep 3.7 Flash for efficiency-first traffic. Google states 3.7 remains fully supported for those workloads.

![Close-up of source code on a monitor during a software review](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Flash versus Flash Cyber

The same day Google launched **Gemini 3.8 Flash Cyber**. That variant targets vulnerability discovery and automated patching. It is not a public model ID in AI Studio.

Access runs through the **Fairwind Program** for trusted government teams, critical infrastructure operators, and software maintainers. Public 3.8 Flash ships with safeguards against CBRN misuse and cyber offense. Cyber uses a more permissive cyber mitigation set, which is why it is gated.

Do not point a public `gemini-3.8-flash` agent at offensive scanning and expect Cyber-class results. Apply for Fairwind if your role matches the program.

## A short test plan

Run the same three tasks on 3.7 and 3.8 before you flip production traffic.

1. A coding task that needs tools and a repo context under 100k tokens.
2. A long document question that stresses the 1M window without filling it.
3. A structured-output call with function calling so you can count retries.

Record tokens in, tokens out, tool-call count, and whether the answer passed your tests. Google reports gains on suites such as DeepSWE v1.1, finance and legal agent benches, and 54.9% on HLE-Verified. Treat those as lab numbers. Your loop is the only score that pays the invoice.

## Tips

- Start thinking at **medium**. Raise to **high** only after you see a failed multi-step job, not as a default.
- Leave Live sessions on `gemini-3.8-live`. Flash will not open a Live API socket.
- Use computer use in preview only on systems you control. Confirm clicks on anything that posts or pays.
- Budget January 2027 prices now if your traffic will still sit on 3.8 Flash after the intro window.
- Keep a 3.7 fallback route for high-QPS, low-reasoning endpoints.

## Conclusion

Gemini 3.8 Flash is the current public Flash workhorse: one stable ID, three thinking levels, a 1M context window, and the same intro token price as 3.7 until the end of 2026. Switch the string, drop deprecated sampling knobs, and measure tokens on real jobs before you retire the previous default.

Cyber stays behind Fairwind. Voice stays on Live. Generation of images and video stays on other model IDs. Pick 3.8 Flash when the work is coding, tools, and long agent loops.

## Sources

- [Introducing Gemini 3.8 Flash and 3.8 Flash Cyber](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/) — Google
- [Gemini 3.8 Flash model page](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash) — Google AI for Developers
- [What’s new in Gemini 3.8 Flash](https://ai.google.dev/gemini-api/docs/generate-content/latest-model) — Google AI for Developers
- [Gemini API models list](https://ai.google.dev/gemini-api/docs/models) — Google AI for Developers
- [Fairwind Program](https://deepmind.google/fairwind-program/) — Google DeepMind
