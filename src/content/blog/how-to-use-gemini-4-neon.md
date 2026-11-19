---
title: "How to Use Gemini 4 Neon: Setup and Tips"
description: "Step-by-step guide to accessing Gemini 4 Neon in the Gemini app, AI Studio and Antigravity. Pricing, thinking levels and practical tips."
pubDate: 2026-11-19T16:00:00
heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials"]
noindex: false
---

Google released Gemini 4 Neon on 18 November 2026. The model sits between Gemini 4 Hydrogen for everyday speed and Gemini 4 Carbon for the hardest long-horizon work. Neon brings near-frontier reasoning with faster responses and lower cost than Carbon.

This guide shows how to access Neon, switch models, set thinking levels, and apply it to coding and knowledge work. All details come from Google’s official announcement and product pages.

## What Gemini 4 Neon offers

Neon scores 61 on the Artificial Analysis Intelligence Index at its xhigh thinking level, ranking third overall. It ranks second on the Vals Index and first on several specialised benchmarks including Legal Research and Tax Agent. Google positions it for complex software engineering, knowledge work and science workflows that need both quality and speed.

The model uses a 1 million token context window. Input price is $3 per million tokens (cached input at $0.15). Output is $15 per million tokens. Batch and Flex requests cost half. It supports four thinking levels: low, medium, high (default) and xhigh.

Neon reads PDFs, spreadsheets and images more precisely than earlier models and produces clearer structured writing. In Google Antigravity it pairs with Hydrogen via Orchestrator for planning-plus-execution workflows.

## Who can use Gemini 4 Neon

Access requires a paid Google AI Pro or Ultra subscription. Free users and Google AI Plus subscribers do not receive Neon. Pro and Ultra subscribers can select it in the Gemini app, Google AI Studio, Google Antigravity and Gemini for business.

Rollout started on 18 November 2026 and continues gradually. Update the Gemini app or refresh the web interface if Neon does not appear immediately. Argon is replaced by Neon in the Pro plan model list.

For comparison with the faster everyday model, see our guide to [Gemini 4 Hydrogen in AI Studio](/blog/gemini-4-hydrogen-ai-studio-guide/).

![Laptop showing code on a wooden desk](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## How to select Gemini 4 Neon in the Gemini app

1. Sign in to the Gemini app or gemini.google.com with a Google AI Pro or Ultra account.
2. Open a new chat or task.
3. Tap or click the model dropdown near the prompt box.
4. Choose Gemini 4 Neon (labelled “Deeper analysis” in some interfaces).
5. Optionally set the thinking level if the control is visible. Higher levels use more of your quota but improve complex reasoning.
6. Upload files or type your prompt. Neon keeps the selected model for the whole conversation.

On mobile the toggle sits above the input. On the web it appears below. Auto mode may still route some requests to other models, so select Neon manually for important work.

Tasks mode also runs on Neon for Pro and Ultra users. Switch from Chat to Task and describe a multi-step job. Neon completes these faster than previous models while staying within usage limits.

## Using Neon in Google AI Studio

1. Go to aistudio.google.com and sign in with a Pro or Ultra account.
2. Create a new prompt.
3. Select gemini-4-neon from the model list.
4. Adjust thinking level, temperature and tools as needed.
5. Enable grounding with Google Search or Maps if the task requires current information.
6. Run the prompt or stream the response.

Developers can call the model through the Gemini API on the paid tier. The model ID is gemini-4-neon. The same pricing and context window apply. Android Studio users with Pro or Ultra access can also select Neon.

## Neon in Google Antigravity

Google Antigravity subscribers on Pro or Ultra plans can use Neon as the planner model. Orchestrator lets you pair Neon for architecture and complex reasoning with Hydrogen for routine edits and tests. This combination reduces token use while keeping high-quality planning.

Select Neon in the Antigravity desktop app, CLI or IDE extensions. The model appears alongside Hydrogen and Carbon.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Q0ShBenKyqo"
    title="Gemini 4 Neon Is Here, And It’s a Beast!"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical tips for better results

- Upload full documents or spreadsheets rather than pasting excerpts. Neon’s improved file reading produces more accurate summaries and reports.
- Use xhigh thinking only for the hardest problems. Medium or high is usually sufficient and conserves quota.
- For multi-step coding, start with a clear plan prompt then ask Neon to implement specific files. In Antigravity, let Orchestrator handle the hand-off.
- Ground responses with Search when the task involves recent events or external data.
- Review outputs before acting on them. Neon has a low fabrication rate in Google’s internal tests, but verification remains good practice.
- Set spending caps if you use Tasks for purchases. Confirm large actions manually.

## Pricing and limits

| Model | Input / 1M | Output / 1M | Context |
|-------|------------|-------------|---------|
| Hydrogen | $1.50 | $7.50 | 1M |
| Neon | $3 | $15 | 1M |
| Carbon | $4 / $20 (after intro) | 1M |

Neon is available only on paid tiers. Free Tasks in supported countries continue to run on Hydrogen. Usage limits scale with your plan. Pro users receive higher quotas than free accounts; Ultra users receive the highest.

## When to choose Neon versus other models

Choose Neon when you need strong reasoning on coding, analysis or long documents and want faster responses than Carbon. Use Hydrogen for high-volume everyday prompts and simple agents. Reserve Carbon for the most difficult multi-hour scientific or architectural work.

If your workflow mixes planning and execution, Antigravity’s Orchestrator with Neon plus Hydrogen is the most efficient option.

## Conclusion

Gemini 4 Neon gives Pro and Ultra subscribers a practical middle ground: frontier-level quality for complex work at lower cost and higher speed than Carbon. Select it from the model dropdown, upload your files, and set an appropriate thinking level. Start with a real document or coding task today and compare the output with Hydrogen to see the difference.

## Sources

- Google Blog: Introducing Gemini 4 Neon (18 November 2026)
- Google AI Studio model documentation
- Google Antigravity announcement on Neon
- Artificial Analysis Intelligence Index rankings (as of 18 November 2026)
