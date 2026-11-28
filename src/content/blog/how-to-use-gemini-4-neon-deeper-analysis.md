---
title: "How to Use Gemini 4 Neon for Deeper Analysis"
description: "Step-by-step guide to accessing Gemini 4 Neon in the Gemini app, setting thinking levels, and using it for complex tasks."
pubDate: 2026-11-28T10:00:00
heroImage: "https://images.unsplash.com/photo-1746608943132-065d1d4b3c5d?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials"]
noindex: false
---

Google released Gemini 4 Neon on November 18, 2026. It targets complex software engineering, knowledge work, and science tasks with a 1 million-token context window. Pro and Ultra subscribers can select it in the Gemini app for deeper analysis.

This guide shows how to access Neon, choose thinking levels, and apply it to real work. It draws only from Google's official announcement and related documentation.

## What Gemini 4 Neon Delivers

Neon ranks high on independent benchmarks. It scores 61 on the Artificial Analysis Intelligence Index at its xhigh thinking level. It places second on the Vals Index and on the Agent Arena Index for steerability.

The model costs $3 per million input tokens and $15 per million output tokens. Cached input tokens drop to $0.15 per million. Google positions it as a faster, lower-cost option relative to larger models while maintaining frontier-level reasoning.

In the Gemini app it appears under the label Deeper analysis. It handles multi-step instruction following and produces structured outputs from mixed inputs such as PDFs, spreadsheets, charts, and code.

![Person holding a smartphone showing an AI assistant interface](https://images.unsplash.com/photo-1746608943132-065d1d4b3c5d?auto=format&fit=crop&w=800&q=80)

## How to Access Gemini 4 Neon in the Gemini App

You need a Google AI Pro or Ultra subscription. Free users do not see Neon in the model picker.

1. Open the Gemini app on Android or iOS, or go to gemini.google.com on the web.
2. Sign in with the Google account that holds your Pro or Ultra plan.
3. Look below or beside the prompt box for the current model name. It often shows Auto or Everyday help.
4. Tap or click the model name to open the picker.
5. Select Deeper analysis (4 Neon). A lock icon means your plan does not include it.
6. Choose a thinking level if the option appears: Low, Medium, High, or Extra high. High is the default.

Neon stays selected for the rest of the conversation. You can switch models mid-thread if needed.

The same model is available in Google AI Studio on the paid API tier, in Google Antigravity for Pro and Ultra subscribers, and via the Gemini API with the model ID gemini-4-neon.

## Set Thinking Levels for Speed and Depth

Neon offers four thinking levels that scale reasoning effort and token use.

- Low produces fast, concise answers for straightforward questions.
- Medium balances speed and reasoning for everyday multi-step tasks.
- High is the default. It handles most complex coding, analysis, and research jobs.
- Extra high (xhigh) adds deeper multi-step reasoning for the hardest engineering and scientific workloads.

Google notes that higher levels consume more thinking tokens, which are billed at the output rate. Start at High for most work. Drop to Medium for interactive sessions. Reserve Extra high for cases where High falls short.

At the default High level, Neon delivers a strong Intelligence Index score while costing roughly 32 percent less per task than Gemini 4 Carbon on third-party benchmarks.

## Practical Steps for Complex Tasks

Write clear, complete instructions. Neon performs best when you specify the goal, constraints, and desired output format.

Example for document analysis: attach a PDF and ask Neon to extract every deadline, list the responsible parties, and place the results in a table with page numbers.

Example for code review: paste a function or attach a file and request a bug review plus suggested fixes, with explanations for each change.

Example for research synthesis: provide several sources and ask Neon to compare claims, note supporting evidence, and flag contradictions.

You can attach files, images, and screenshots. Neon reads them within its 1 million-token window. In the Gemini app it can also draw on connected Google services when you grant permission.

Monitor the response. Neon is trained to pause for clarification on ambiguous steps and to avoid fabricating results. Provide feedback with a thumbs-down if a task misses the mark.

![Close-up of a smartphone screen displaying multiple AI app icons including Gemini](https://images.unsplash.com/photo-1757310998309-87a97e562ee5?auto=format&fit=crop&w=800&q=80)

## Tips for Better Results

Keep the task description specific. Include the audience, the required format, and any limits on length or sources.

Use High thinking for multi-file code work or dense chart analysis. Switch to Extra high only after High produces incomplete reasoning.

Combine Neon with Gemini Canvas for side-by-side editing of generated text or code. Canvas lets you highlight sections and request targeted revisions.

For developers building agents, Neon works as an orchestrator in Google Antigravity. It can direct cheaper Hydrogen subagents on parallel subtasks while retaining high-judgment control.

Check usage limits on your Pro or Ultra plan. Higher thinking levels consume the shared allowance faster.

If you also use coding workflows, see our guide to [using Gemini 4 Neon for coding and analysis](/blog/how-to-use-gemini-4-neon-for-coding-and-analysis/).

## Watch a Short Setup Walkthrough

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/JvIcxJIzonA"
    title="How to Use Gemini 4 Neon in Gemini"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Gemini 4 Neon gives Pro and Ultra subscribers a practical way to handle complex analysis and multi-step work inside the Gemini app. Select Deeper analysis, set an appropriate thinking level, and describe the full outcome you need.

The model’s 1 million-token window, structured output strength, and controllable reasoning depth make it suitable for document review, code exploration, and research synthesis. Official benchmarks place it near the top of its class while keeping costs lower than larger alternatives.

Start with a single high-value task today and adjust the thinking level based on the quality of the first result.

## Sources

- Google blog: Introducing Gemini 4 Neon (November 18, 2026, updated November 23)
- Google AI Studio and Gemini app model documentation
- Artificial Analysis and Vals Index public leaderboards referenced in the announcement
