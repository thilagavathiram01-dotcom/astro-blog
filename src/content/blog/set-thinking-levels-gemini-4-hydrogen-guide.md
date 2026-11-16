---
title: "How to Set Thinking Levels on Gemini 4 Hydrogen"
description: "Step-by-step guide to choose low, medium, high or xhigh thinking levels for Gemini 4 Hydrogen in AI Studio for faster, more accurate coding."
pubDate: 2026-11-16T10:00:00
heroImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "how-to", "developer"]
noindex: false
---

Gemini 4 Hydrogen arrived on 12 November 2026 as Google’s fast model for everyday coding and agentic work. It offers four thinking levels so you can trade speed for deeper reasoning on demand. Setting the right level keeps responses quick for simple tasks and thorough for complex debugging.

This guide shows how to select and use those levels inside Google AI Studio. You will see the exact steps, what each level does, and when to switch. Official details come from the Gemini API What’s New guide and the model card.

## What Thinking Levels Control

Hydrogen runs at four configurable thinking levels: low, medium, high (the default), and xhigh. Higher levels give the model more time to reason before answering. Google states this produces tighter instruction following and fewer fabricated claims.

Low works for quick completions and simple refactors. Medium balances speed and quality for most coding loops. High is the default and suits multi-file changes. xhigh adds extra depth for hard debugging or long agentic chains. The context window stays unified at one million tokens across all levels.

![Person coding on a laptop at a wooden desk](https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=800&q=80)

## Open AI Studio and Select Hydrogen

1. Go to aistudio.google.com and sign in with any Google account.
2. Click New chat or open the Playground.
3. In the model selector at the top, choose Gemini 4 Hydrogen. You can also search for gemini-4-hydrogen.
4. Direct link: https://aistudio.google.com/prompts/new_chat?model=gemini-4-hydrogen

The Run settings panel appears on the right. Free-tier users can chat immediately; paid API keys raise the quota.

## Set the Thinking Level

1. Open the Run settings panel if it is collapsed.
2. Locate the Thinking level dropdown.
3. Select Low, Medium, High, or Extra high (xhigh).
4. Type your prompt and click Run.

The choice sticks for that chat until you change it. Google notes that switching levels does not reset your free-tier quota. Start at High for most coding work, then drop to Medium or Low once the pattern is clear.

## Practical Examples by Level

Low level finishes simple tasks fastest. Ask it to “Add a null check to this function” or “Rename the variable to camelCase.” Responses arrive quickly with minimal reasoning overhead.

Medium level handles everyday refactors. Prompt: “Convert this class to use dependency injection and keep the public API unchanged.” It follows instructions closely without the full depth of High.

High (default) fits multi-step coding. Example: “Debug why this Compose screen recomposes too often and suggest a fix that preserves state.” The extra thinking reduces made-up APIs.

xhigh is for hard problems. Use it when Hydrogen must plan a migration or audit a large file for race conditions. Expect longer latency and higher token use, but cleaner results.

![Close-up of a smartphone next to computer monitors showing code](https://images.unsplash.com/photo-1650234083227-74c0700b295a?auto=format&fit=crop&w=800&q=80)

## Tips for Better Results

- Pair the level with a clear success criterion. Write “The app builds and the new screen appears” rather than a vague request.
- Review the first output, then follow up in the same chat. Hydrogen keeps context across turns.
- Drop the level after the hard part is solved. Switch from xhigh back to Medium for the remaining edits.
- Check official pricing: $1.50 per million input tokens and $7.50 per million output tokens, flat across the full context window.
- For Android projects, combine with Firebase AI Logic. See our guide on [adding Gemini 4 Hydrogen to Android with Firebase AI Logic](/blog/add-gemini-4-hydrogen-android-firebase-ai-logic/).

Paid Google AI Pro and Ultra subscribers can also try Hydrogen inside Google Antigravity. The same thinking controls appear there.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/b6VPVxY3YCM"
    title="Gemini 4 Hydrogen: What’s New + I Tested Google’s Claims"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Thinking levels turn Gemini 4 Hydrogen into a flexible daily driver. Low keeps simple edits fast. High and xhigh give the depth needed for real debugging and agentic workflows. Open AI Studio, pick the level that matches the task, and iterate. Official sources confirm the four levels and the flat pricing.

Start with one coding prompt at High today. Note the speed and accuracy, then adjust. The model is available now in AI Studio, the Gemini API, and the Gemini app for all users.

## Sources

- [Gemini 4 Hydrogen: Fast agentic development for coders](https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-4-hydrogen/) — Google Blog, 12 November 2026
- [Introducing Gemini 4 Hydrogen for Agentic Workflows](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/) — Google Blog, 12 November 2026
- Gemini 4 Hydrogen model page — Google AI Studio documentation
- [Gemini 4 Hydrogen Tutorial: Setup, Prompts, and My Test Results](https://www.youtube.com/watch?v=b6VPVxY3YCM) — proflead, 13 November 2026
