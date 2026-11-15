---
title: "How to Use Gemini 4 Hydrogen in GitHub Copilot"
description: "Select Gemini 4 Hydrogen in GitHub Copilot for fast agentic coding, tool use, and multi-step workflows on Pro plans."
pubDate: 2026-11-15T12:05:00
heroImage: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini", "developer"]
noindex: false
---

Google released Gemini 4 Hydrogen on November 12, 2026 as its fast execution model for everyday coding and agentic work. One day later, GitHub made the model generally available in Copilot.<grok type="render_inline_citation" citation_id="124" />

Hydrogen is designed for rapid iteration, tool use, and multi-step workflows. It follows instructions better than Gemini 3.8 Flash and finishes many coding tasks faster. Copilot users on paid plans can now select it in the model picker across most surfaces.<grok type="render_inline_citation" citation_id="125" />

This guide shows how to access it, choose the right thinking level, and use it for practical coding tasks.

![Developer workspace with multiple monitors showing code](https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=800&q=80)

## Who can use Gemini 4 Hydrogen in Copilot

Gemini 4 Hydrogen is available to Copilot Pro, Pro+, Max, Business, and Enterprise subscribers. It is not listed for the free tier, which continues to use automatic model selection.

The rollout is gradual. If you do not see the model yet, check again later. Business and Enterprise administrators control access through the model policy in Copilot settings. New models are enabled by default unless an admin has turned off the global default or specifically disabled Hydrogen.<grok type="render_inline_citation" citation_id="124" />

Billing follows provider list pricing under Copilot’s usage-based system. Google lists Hydrogen at $1.50 per million input tokens and $7.50 per million output tokens across its full 1 million-token context window.<grok type="render_inline_citation" citation_id="125" />

## Where you can select the model

You can choose Gemini 4 Hydrogen in the model picker on these surfaces:

- Visual Studio Code
- Visual Studio
- JetBrains IDEs
- Xcode
- Eclipse
- Copilot CLI
- GitHub Copilot coding agent
- GitHub Copilot app
- github.com
- GitHub Mobile (iOS and Android)
- Copilot SDK

The same model is available across these tools from day one, though individual accounts may see it at different times during the gradual rollout.<grok type="render_inline_citation" citation_id="124" />

## How to select Gemini 4 Hydrogen

Open your preferred editor or Copilot interface. Click the model picker (usually near the chat input or in the Copilot panel). Look for Gemini 4 Hydrogen in the list.

If your organization uses Copilot Business or Enterprise, confirm that an administrator has not disabled the model in the policy settings. Once selected, the model stays active for your session until you change it.

Hydrogen supports four thinking levels: low, medium, high (default), and xhigh. Higher levels give deeper reasoning at the cost of more latency and tokens. For routine code edits, the default high setting is usually enough. Switch to xhigh only when you need extra verification on complex changes.<grok type="render_inline_citation" citation_id="125" />

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/V-NiDeMY-8E"
    title="I Tested NEW Gemini 4 Hydrogen on Coding"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical ways to use it

Hydrogen excels at iterative repository coding and debugging. It makes focused edits instead of rewriting large sections of unrelated code. Ask it to fix a failing test, update a function to handle a new edge case, or explain a section of a large codebase.

It batches file reads and searches in parallel, which helps when you explore big repositories. Early partner testing showed it running 2x to 2.8x faster than Gemini 3.8 Flash on graph, SQL, and data-heavy workflows while using fewer tokens.<grok type="render_inline_citation" citation_id="125" />

For multi-step agentic work, describe the goal clearly. Hydrogen breaks the task into steps, calls tools, and adapts if a tool call fails or a search returns empty. You can pair it with stronger models like Gemini 4 Carbon for architectural decisions while using Hydrogen for the execution steps.

![Close-up of a mechanical keyboard in a coding setup](https://images.unsplash.com/photo-1754548930550-be9fa88874f4?auto=format&fit=crop&w=800&q=80)

## Tips for better results

Give specific instructions about format, style, and constraints. Hydrogen follows guidance more closely than previous Flash models and produces fewer fabricated claims.

Start with a small, clear task so you can see the speed difference. Then expand to multi-file changes or tool-using workflows. Monitor token usage if you are on a plan with usage-based billing.

If you also use Google Antigravity or Android Studio, the same Hydrogen model is available there. Our earlier guide covers [how to use Gemini 4 Hydrogen for fast coding tasks](/blog/how-to-use-gemini-4-hydrogen-for-fast-coding-tasks/) outside of Copilot.

For teams that previously relied on Gemini 3.8 Flash in Copilot, Hydrogen is the direct upgrade. GitHub has scheduled several older models for deprecation in December 2026, so testing Hydrogen now avoids a last-minute switch.

## Conclusion

Gemini 4 Hydrogen brings fast, reliable agentic coding to GitHub Copilot for paid subscribers. Select it in the model picker, choose an appropriate thinking level, and use it for iterative edits, debugging, and multi-step tasks.

The gradual rollout means some accounts will see it sooner than others. Once it appears, it works across the same surfaces as other Copilot models and is billed at Google’s published rates.

Start with a routine coding task today and compare the speed and instruction following against the model you used before.

## Sources

- GitHub Changelog: Gemini 4 Hydrogen in GitHub Copilot (November 13, 2026)
- Google Blog: Introducing Gemini 4 Hydrogen (November 12, 2026)
