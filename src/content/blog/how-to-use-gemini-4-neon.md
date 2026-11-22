---
title: "How to Use Gemini 4 Neon for Coding and Tasks"
description: "Access Gemini 4 Neon in the Gemini app, AI Studio and Antigravity. Setup steps, thinking levels, pricing and practical tips for faster coding and analysis."
pubDate: 2026-11-22T15:00:00
heroImage: "https://images.unsplash.com/photo-1759661990336-51bd4b951fea?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "how-to", "ai-tools", "developer"]
noindex: false
---

Google released Gemini 4 Neon on 18 November 2026. It sits between Gemini 4 Hydrogen for everyday speed and Gemini 4 Carbon for the longest, hardest projects. Neon brings frontier-level reasoning to complex coding, knowledge work and science tasks while finishing them faster and at lower cost per task.

Pro and Ultra subscribers can select it in the Gemini app and Google Antigravity. Developers access it through the paid Gemini API in Google AI Studio. This guide covers official availability, setup steps, thinking levels and practical use.

## What Gemini 4 Neon Offers

Neon ranks #3 overall on the Artificial Analysis Intelligence Index at its highest thinking level (score of 61). It places #2 on the Vals Index and lands on the Pareto frontier for quality versus cost. Independent tests also place it first on several finance, accounting and legal research benchmarks.

The model uses a 1-million-token context window. Pricing is $3 per million input tokens ($0.15 for cached input) and $15 per million output tokens. Four thinking levels (low, medium, high as default, and xhigh) let you balance depth against speed and cost.

It handles multi-file debugging, long agent workflows, spreadsheet and PDF analysis, and scientific reasoning. Google notes it records the lowest fabrication rate yet in internal Antigravity testing.

![Multiple computer screens showing code under neon lighting](https://images.unsplash.com/photo-1754039984985-ef607d80113a?auto=format&fit=crop&w=800&q=80)

## Where You Can Use It

Access depends on your account type:

- **Gemini app:** Google AI Pro and Ultra subscribers select Neon from the model dropdown.
- **Google AI Studio:** Available on the paid API tier. Open a new prompt and choose gemini-4-neon.
- **Google Antigravity:** Paid Pro and Ultra subscribers can use it, including as an orchestrator that directs parallel Hydrogen subagents.
- **Gemini for business:** Via the API or model dropdown for enterprise customers.
- **Android Studio:** Developers on the paid tier can call it from the IDE.

Free accounts and Google AI Plus do not include Neon. Work, school and supervised accounts follow their organisation’s policies. Rollout started on 18 November 2026 and continues by region and plan.

## How to Select Neon in the Gemini App

1. Open the Gemini app or go to gemini.google.com and sign in with a Pro or Ultra account.
2. Start a new chat or open an existing one.
3. Tap or click the model name near the input box.
4. Choose Gemini 4 Neon from the list.
5. Optionally open settings to pick a thinking level (high is the default).
6. Type your prompt and send. Neon processes longer or more complex requests with the selected depth.

You can switch models mid-conversation. For multi-step work that runs in the background, combine Neon with Tasks mode. See our guide on [how to use Tasks in Gemini](/blog/how-to-use-tasks-in-gemini/) for the toggle and confirmation flow.

## Using Neon in Google AI Studio

1. Go to aistudio.google.com and sign in.
2. Create a new prompt or open an existing one.
3. In the model selector, choose Gemini 4 Neon (or gemini-4-neon).
4. Set the thinking level if the control is visible.
5. Paste or type your code, document or question.
6. Run the prompt. Results appear in the response pane. You can iterate by adding follow-up instructions.

AI Studio also shows token usage and lets you export the conversation. For production calls, use the Gemini API with the same model name.

## Thinking Levels and Cost Control

Neon offers four thinking levels:

- Low: Fastest responses for simpler steps.
- Medium: Balanced for most everyday coding.
- High (default): Strong reasoning for multi-file or multi-step work.
- xhigh: Deepest exploration for the hardest problems; uses more tokens.

Higher levels increase quality on complex tasks but raise cost and latency. Start on high, then drop to medium if the result is already solid. Cached input tokens receive a 95% discount, so reusing context across turns saves money.

In Antigravity, Neon can act as orchestrator while faster Hydrogen models handle parallel subtasks. This keeps overall cost lower than running a single large model on every step.

## Practical Tips for Coding and Analysis

Give Neon clear constraints and the files or context it needs. For a bug, paste the relevant functions and the error message rather than the entire repository. Ask it to propose a surgical edit first, then apply the change.

For documents, upload the PDF or spreadsheet and request a structured summary with specific sections. Neon reads charts and tables more accurately than earlier models.

When using agent features, review the plan before it runs long steps. Confirm any file writes or external actions. Switch to xhigh only for problems that failed on high.

If you are migrating preferences from another assistant, import memory first so Neon already knows your style. Our [transfer chat history and memory guide](/blog/how-to-transfer-chat-history-gemini/) shows the exact steps.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Q0ShBenKyqo"
    title="Gemini 4 Neon Is Here, And It’s a Beast!"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

![Close-up of a mechanical keyboard with blue backlighting](https://images.unsplash.com/photo-1754548930550-be9fa88874f4?auto=format&fit=crop&w=800&q=80)

## Limits and What to Check

Neon requires a paid plan for consumer use in the app and Antigravity. API access needs the paid tier. Context is capped at 1 million tokens combined. Output can reach 64K tokens synchronously or more with long-decode modes.

Availability can vary while the rollout continues. If Neon does not appear in the model list, confirm your subscription status and refresh the page or app. Usage still counts against your overall Gemini quota; complex sessions consume more.

Safety filters remain active. Neon declines certain high-risk requests at rates comparable to Carbon while allowing more legitimate work. Always verify generated code and analysis before you rely on it in production.

## Conclusion

Gemini 4 Neon gives Pro and Ultra users a fast, high-quality option for coding, document analysis and multi-step tasks. Select it in the Gemini app model dropdown or in AI Studio, choose a thinking level that matches the job, and start with clear prompts. Combine it with Tasks for background work or with Antigravity for agent orchestration.

Check your plan, open a test chat, and run a real coding or analysis request. Adjust the thinking level based on the result. As the rollout expands, the same selection steps apply across supported surfaces.

## Sources

- Google Blog: Introducing Gemini 4 Neon (18 November 2026)
- Google AI Studio: model selector and pricing documentation
- Gemini Apps Help: model availability by plan
- Artificial Analysis and Vals Index public leaderboards (as cited in the official announcement)
