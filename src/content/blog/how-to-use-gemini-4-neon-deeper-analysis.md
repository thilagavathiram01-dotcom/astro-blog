---
title: "How to Use Gemini 4 Neon for Deeper Analysis in the Gemini App"
description: "Step-by-step guide to select and use Gemini 4 Neon for complex coding, research, and multi-step tasks in the Gemini app."
pubDate: 2026-11-19T15:30:00
heroImage: "https://images.unsplash.com/photo-1763568258177-4ea94966595a?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "how-to", "ai", "productivity", "google"]
noindex: false
---

Google AI Pro and Ultra subscribers can now select Gemini 4 Neon in the Gemini app for stronger reasoning on complex coding, research, and multi-step tasks. Neon launched on November 18, 2026, and sits between the fast everyday Hydrogen model and the heavier long-horizon Carbon model.

It brings frontier-level performance with faster end-to-end completion and a 1 million-token context window. In the app it appears as “Deeper analysis.” This guide shows exactly how to switch to it, when to use it, and how to get better results on real work.

## Who gets Gemini 4 Neon and where

Neon is available to Google AI Pro and Ultra subscribers in the Gemini app (mobile, desktop, and web). Developers can also use it through the paid Gemini API in Google AI Studio and Android Studio, and in Google Antigravity. Enterprises access it via Gemini for business.

Free users and Google AI Plus subscribers do not see Neon in the model picker. In the app, Pro users see Auto, Everyday help (Hydrogen), Deeper analysis (Neon), and (on Ultra) Code & complex work (Carbon). Neon replaces the previous Argon slot for many Pro accounts.

Pricing on the API is $3 per million input tokens, $0.15 per million cached input tokens, and $15 per million output tokens. The app uses the subscription limits rather than direct token billing.

![Laptop displaying code on a wooden desk with a mug nearby](https://images.unsplash.com/photo-1763568258177-4ea94966595a?auto=format&fit=crop&w=800&q=80)

## How to select Gemini 4 Neon in the Gemini app

1. Open the Gemini app or go to gemini.google.com and sign in with the account that has Google AI Pro or Ultra.
2. Update the app from the Play Store or App Store if the new option does not appear.
3. Tap the model selector at the bottom of the chat box (it shows the current model name).
4. Choose **Deeper analysis** (Gemini 4 Neon).
5. Optionally open the thinking level control in the same menu and set it higher than the default Low for harder work.
6. Start a new chat or continue an existing one. The selection stays for the whole conversation.

Google notes that Tasks in Gemini can also run on Neon, which helps with multi-step jobs while stretching usage limits further. You can switch models mid-session if needed, but the thinking level and model apply to the current conversation until you change them.

## When Neon is the right choice

Use Neon when Hydrogen feels too light and Carbon is slower or more expensive than you need. Google positions it for complex coding, analytical reasoning, production-grade enterprise workflows, knowledge work, and science tasks.

Concrete cases that fit well:
- Multi-file debugging and targeted refactoring across a codebase.
- Turning spreadsheets, PDFs, and photos into structured reports or summaries.
- Cross-checking receipts or billing statements to explain a charge spike.
- Research briefs that pull current web data plus connected Google apps (Gmail, Docs).
- Longer agentic or multi-step jobs where you want progress updates and reliable follow-through.

Neon ranks #3 overall (score 61) on the Artificial Analysis Intelligence Index at its xhigh thinking level and #2 on the Vals Index. It also ranks #1 on the Artificial Analysis Coding Agent Index (58.6) and shows strong results on legal research, tax, finance, and science benchmarks. It records a low fabrication rate in internal testing and ranks #2 on steerability (handling mid-task corrections).

![Close-up of code on a computer monitor](https://images.unsplash.com/photo-1753998943619-b9cd910887e5?auto=format&fit=crop&w=800&q=80)

## Thinking levels and practical settings

Neon offers four thinking levels: low, medium, high (default on the API), and xhigh. Higher levels give deeper multi-step reasoning but use more tokens and time.

In the Gemini app the picker defaults to Low when you select a model manually. Raise it to Medium or High for most analytical or coding work. Use xhigh only for the hardest engineering, math, or scientific problems. Google reports that at the default high level Neon already delivers a high intelligence score with roughly 32 % lower cost per task than Carbon on third-party benchmarks.

Start at High for most Pro users. Drop to Medium or Low only when speed matters more than depth and your tests still pass. The 1 million-token context window covers long documents, tables, charts, and multi-file codebases in one session.

## Tips for stronger results

Write clear prompts that state the goal, constraints, and desired output format. Upload the actual files (spreadsheets, PDFs, photos) rather than describing them. Ask Neon to show its plan or intermediate steps on long tasks so you can correct course early.

For coding, request surgical edits and ask it to verify edge cases. For research or finance work, tell it to cite sources or flag uncertainty. Because Neon handles mid-task corrections well, you can refine in the same chat instead of starting over.

Tasks mode is especially useful: hand it a multi-step job (analyze statements, compare vendors, prepare a brief) and let it run. Combine it with connected Google apps when you want live data from Gmail or Docs.

If you are building Android apps, you can also call Neon (or Hydrogen) through Firebase AI Logic. See our related guide on [adding Gemini 4 Hydrogen to Android with Firebase AI Logic](/blog/add-gemini-4-hydrogen-android-firebase-ai-logic/) for the client-side pattern.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Q0ShBenKyqo"
    title="Gemini 4 Neon Is Here, And It’s a Beast!"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Common questions

**Does Neon replace Argon?**  
Yes for most Pro users in the Gemini app. Argon no longer appears in the picker for those accounts.

**Can free users try it?**  
No. It requires Google AI Pro or Ultra.

**Is it available in Google Antigravity?**  
Yes for paid Pro and Ultra subscribers. Orchestrator can pair Neon as planner with Hydrogen as executor.

**What about cybersecurity?**  
A specialized Neon-for-cyber variant is rolling out to trusted defenders via the Fairwind Program, not the general consumer app.

## Conclusion

Gemini 4 Neon gives Pro and Ultra subscribers a practical middle ground: stronger reasoning and coding performance than Hydrogen, with better speed and cost efficiency than Carbon for many real workflows. Select “Deeper analysis” in the model menu, raise the thinking level for harder tasks, upload your files, and start with a clear multi-step prompt.

The rollout continues, so update the app if the option is missing. Official details and the model card are on the Google blog and AI Studio documentation.

**Sources**

- Blog.google: Introducing Gemini 4 Neon (November 18, 2026)
- Google Gemini (@GeminiApp) announcement on availability and Tasks
- Artificial Analysis Intelligence Index and related benchmark reports cited by Google
- Google AI Studio and Gemini app model documentation
