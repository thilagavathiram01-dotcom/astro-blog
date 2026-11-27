---
title: "How to Use Gemini 4 Neon in the Gemini App"
description: "Step-by-step guide to accessing Gemini 4 Neon for deeper analysis in the Gemini app. Set thinking levels and handle complex tasks with Pro or Ultra."
pubDate: 2026-11-27T14:00:00
heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "how-to", "ai", "google"]
noindex: false
---

Google released Gemini 4 Neon on 18 November 2026 as a frontier-level model focused on fast end-to-end task completion. It sits between the everyday Hydrogen model and the deeper Carbon model. Pro and Ultra subscribers can select it in the Gemini app for work that needs stronger reasoning without the full cost or latency of larger models.

Neon carries a 1 million-token context window and supports four thinking levels. Google positions it for software engineering, knowledge work, and science workflows. Early evaluations place it near the top of several independent benchmarks while costing less per task than competing frontier models at comparable settings.

## Who Can Access Gemini 4 Neon

Access in the Gemini app requires a Google AI Pro or Ultra subscription. Free users do not see Neon in the model picker. The same restriction applies in Google Antigravity. Developers can call the model through the paid Gemini API in Google AI Studio with the model ID gemini-4-neon.

Pricing for the API is $3 per million input tokens and $15 per million output tokens. Cached input tokens drop to $0.15 per million. The model rolled out on the same day to Gemini for business and to eligible Pro and Ultra accounts in the consumer app.

Confirm your subscription status under your Google Account settings or on the Gemini plans page before you look for the model. A lock icon next to Neon means the account is not yet eligible.



![Person working on a laptop with code visible on screen](https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80)



## How to Select Gemini 4 Neon

Open gemini.google.com or the Gemini mobile app and sign in with the account that holds your Pro or Ultra plan. Look at the model name shown at the bottom of the prompt box. On most accounts it defaults to Auto or Hydrogen.

1. Click or tap the model name to open the picker.
2. Choose the option labeled for deeper analysis or Gemini 4 Neon. The exact label can vary slightly by platform, but Neon is the clear choice among the Gemini 4 family.
3. After selection, open the thinking level control. Available settings are Low, Medium, High (default), and Extra high (xhigh).
4. Type your request and send it. Gemini keeps the chosen model and thinking level for the rest of the conversation unless you change them.

Low favors speed and concise answers for straightforward questions. Medium balances speed and reasoning for everyday multi-step work. High is the default and suits most analytical or coding tasks. Extra high adds deeper multi-step reasoning for the hardest problems while still remaining faster and less expensive than Carbon at its top setting.

You can switch models mid-conversation if a different capability is needed, but Neon is intended to stay selected for longer, tool-heavy sessions.

## Practical Ways to Use Neon

Neon works well when the task spans multiple documents, code files, or data sources. Attach PDFs, spreadsheets, or images with the plus button. The 1 million-token window lets you include substantial source material in one request.

Example prompts that fit Neon:

- Review the attached quarterly report, list the three largest cost increases with page references, and suggest two concrete follow-up actions.
- Refactor the provided multi-file Python module to reduce redundant reads while preserving behavior. Show the diffs and explain the trade-offs.
- Compare the two scientific papers I uploaded and extract the key methodological differences in a table.

Because Neon ranks strongly on multi-step instruction following and agentic benchmarks, it handles longer chains of tool use better than earlier Gemini models at similar cost. In Google Antigravity it can act as an orchestrator that directs parallel Hydrogen subagents.

If you already hand off multi-step personal jobs, Neon can also run Tasks that need deeper analysis. See our guide on [Tasks in Gemini for personal assistance](/blog/how-to-use-gemini-tasks-personal-assistance/) for the basic toggle and confirmation flow; then select Neon when the job involves document review or multi-source synthesis.



![Abstract digital interface representing AI processing](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)



## Tips for Better Results

State the full job rather than a single question. Include the desired output format, any constraints, and the sources it should use. Neon responds well to clear mid-task corrections, which is one of the areas where Google reported strong steerability scores.

Start with High thinking for most work. Drop to Medium or Low only when you need faster replies and the task is well-defined. Reserve Extra high for cases where you have already seen incomplete reasoning at High.

Check factual claims and citations, especially on specialized topics. Google notes ongoing progress on reducing fabrication, and Neon recorded the lowest internal fabrication rate of the Gemini 4 family in Antigravity testing, but independent verification remains necessary.

For developers, the same model is available in Google AI Studio on the paid tier. Use the official Google Gen AI SDK (version 2.34.0 or later for Python) and set thinking_level in the generation config. The consumer app remains the fastest way to evaluate quality before you build an integration.

Monitor token usage in AI Studio or the API dashboard if you move beyond the app. Caching helps on repeated context, and Neon’s lower per-task cost versus Carbon makes it practical for higher-volume analytical workflows.

## Watch a Short Setup Walkthrough

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/JvIcxJIzonA"
    title="How to Use Gemini 4 Neon in Gemini | The AI Margin Ep 52"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Gemini 4 Neon gives Pro and Ultra subscribers a practical middle ground: frontier-level reasoning and strong multi-step performance at lower cost and higher speed than the largest models. Select it from the model picker, choose an appropriate thinking level, and give it complete jobs that benefit from the long context window. Start with one analytical or coding task today so you can see the difference in response quality and completion rate.

## Sources

- Google Blog: Introducing Gemini 4 Neon (18 November 2026, updated 23 November 2026)
- Google AI Studio and Gemini API documentation for model ID gemini-4-neon and thinking levels
- YouTube: How to Use Gemini 4 Neon in Gemini | The AI Margin Ep 52
