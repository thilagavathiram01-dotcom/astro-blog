---
title: "How to Switch ChatGPT Work to GPT-6 Sol and Luna"
description: "Turn on GPT-6 Sol and Luna in ChatGPT Work and Codex, pick the right effort level, and cut API cost after the 22 September 2026 launch."
pubDate: 2026-09-20T14:00:00
heroImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["chatgpt", "ai-tools", "tutorials", "productivity"]
noindex: false
---

OpenAI added **GPT-6 Sol** and **GPT-6 Luna** to ChatGPT Work, Codex, and the API on 22 September 2026. Both sit under flagship **GPT-6 Astra**. They reuse Astra-style training for professional work, coding, computer use, and alignment, at lower price and with higher usage headroom.

The models are not in consumer Chat yet. You pick them in Work or Codex, or you call `gpt-6-sol` and `gpt-6-luna` in the API. Free and Go users can try Luna in the desktop app only.

This guide uses OpenAI’s launch post, developer community note, and ChatGPT Learn model table. Plan gates and rollout timing can change during the first day of availability.

## What Sol and Luna are for

OpenAI positions the pair as cost-efficient members of the GPT-6 family, not as replacements for Astra on the hardest jobs.

**GPT-6 Sol** is the daily model for complex coding and agent workflows. On OpenAI’s internal factuality set built from conversations where users flagged errors, Sol makes about half as many mistakes as GPT-5.6 Sol. Official copy says that reliability approaches Astra at much lower cost.

**GPT-6 Luna** is the high-volume model for summarization, extraction, classification, routing, and focused coding. AWS’s Bedrock note, published the same day, describes Luna the same way and lists a 1 million token context window for both models on that platform.

API list prices, per 1 million tokens:

- GPT-6 Sol: $2 input, $10 output (50% below GPT-5.6 Sol promotional pricing).
- GPT-6 Luna: $0.10 input, $0.50 output (50% below GPT-5.6 Luna promotional pricing).

OpenAI attributes the cut to better caching and inference. Cached input-token reads can discount 90% when prefixes hit.

Keep Astra for work that must not miss a step. Use Sol when you iterate all day. Use Luna when the same narrow job runs hundreds of times.

![Laptop with code on a wooden desk during focused work](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80)

## Confirm you are in Work or Codex

OpenAI’s availability line is specific:

- Plus, Pro, Business, Enterprise, and Edu: Sol and Luna in **ChatGPT Work** and **Codex**.
- Free and Go: Luna in the **desktop app** only.
- Consumer Chat: not yet.
- API IDs: `gpt-6-sol` and `gpt-6-luna`.

Enterprise and Edu workspaces may hide models until an admin turns them on. The official post also says the ChatGPT rollout is gradual through the launch day. If the picker is empty, wait and refresh.

1. Update the ChatGPT desktop or web app.
2. Open **Work** or **Codex**, not a default consumer thread.
3. Look under the composer for the model control.
4. Select **GPT-6 Sol** or **GPT-6 Luna**.
5. Set reasoning effort. ChatGPT Learn lists none, low, medium (default), high, xhigh, and max.

Codex CLI users can pin the model with `codex -m gpt-6-sol` or `codex -m gpt-6-luna`. Replace any saved `gpt-5.5` or `gpt-5.6-sol` defaults in custom agents and scheduled tasks.

If you already use Voice with GPT-5.6 or Astra, keep that picker in sync with Work. The earlier guide on [ChatGPT Voice with GPT-5.6 and Astra](/blog/chatgpt-voice-gpt-5-6-astra/) covers spoken sessions; Sol and Luna follow the same Work and Codex surfaces.

## Watch the GPT-6 family in action

OpenAI’s developer video for GPT-6 Astra shows computer use, coding, and Responses API steering. Sol and Luna inherit those habits at lower cost. Use the clip to see how effort and tools behave before you change production agents.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/bOC3DisEOfg"
    title="Introducing GPT-6 Astra for developers"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Pick effort without burning budget

Official benches report scores at named effort levels. Treat those as research numbers, not a promise that your ticket will match them.

On Zapier’s AutomationBench 1.0.6, GPT-6 Sol at xhigh effort scored 33.2% at $0.27 per task. OpenAI contrasts that with Claude Opus 5 at max effort (26.9% at about 11 times Sol’s cost per task) and low-effort GPT-6 Astra (30.3% at 3.9 times Sol’s cost).

On Agents’ Last Exam V1, Sol at max effort scored 56.4%, above Claude Opus 5’s highest score in that write-up, at 60% lower cost per task.

On FrontierCode 1.1, Sol improved on GPT-5.6 Sol and matched Claude Fable 5.1 xhigh at lower cost. On DeepSWE v1.1, Sol at max effort scored 68.8%; Luna at max effort scored 66.6%.

On OSWorld 2.0 offline (v2026.08.08 partial reward), Sol at xhigh effort scored 60.5%, close to Claude Opus 5 at medium effort (60.3%) at about 80% lower cost per task. Luna at max effort beat GPT-5.6 Sol at medium effort at about one tenth the cost.

Practical rule: leave effort at medium for drafts and reviews. Raise it only when the agent skips a tool, invents a file, or stops mid-workflow. Lower it for follow-ups so you keep the prompt cache warm.

## Switch an API or Codex agent

Developers should change the model string and then check cache behavior. OpenAI improved default cache hit rates for GPT-6 and added diagnostics.

1. Replace `gpt-5.6-sol` with `gpt-6-sol`, or `gpt-5.6-luna` with `gpt-6-luna`.
2. Keep a stable prompt prefix. Cached reads are billed at a 90% discount.
3. Open the [Prompt Caching Dashboard](https://platform.openai.com/usage?usage_section=prompt-caching) after a day of traffic.
4. Use the prompt-caching diagnostics guide if hit rate stays low.
5. Change reasoning effort or tool lists mid-thread without expecting the cache to break. Official docs now say those controls preserve earlier context.
6. Add explicit cache breakpoints if the reusable prefix is shorter than the full system prompt.

GitHub told OpenAI that related cache work cut the share of prompt tokens that needed fresh processing by more than 50% across billions of Copilot requests. Your app will only see that if prefixes stay stable.

![Developer reviewing an API dashboard on a monitor](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80)

## Everyday tasks that fit each model

**Give Sol** multi-step Work jobs: implement a feature, review a pull request, walk a spreadsheet, or run a Codex cloud task that touches several files. OpenAI also says Sol’s replies are shorter and less jargon-heavy than GPT-5.6 Sol in technical chats.

**Give Luna** batch work: summarize a folder of notes, extract fields from invoices, classify support tickets, or route a queue. Free and Go desktop users should start here.

**Keep Astra** for the session you cannot cheaply rerun: a regulated review, a long computer-use path, or a research pass where missing a source costs more than the token bill.

Do not send payments, password resets, or production deploys without a human confirm step. Alignment evals improved over GPT-5.6, including fewer misleading claims about coding work, but OpenAI still points readers to the GPT-6 Astra system card for the full numbers. Those tests are hard cases, not typical chat error rates.

## Troubleshooting

**The model names are missing.** Confirm you are in Work or Codex. Wait out the staged rollout. Ask a workspace admin on Enterprise or Edu.

**Luna is the only option.** You are on Free or Go, or you opened the desktop consumer surface. Sol needs a paid Work or Codex seat.

**Cost did not drop.** Token price is half of the GPT-5.6 promotional sheet only if you actually call `gpt-6-sol` or `gpt-6-luna`. Agents that still pin 5.6 strings keep the old bill. Measure cost per completed task, not only list price.

**Answers feel thin.** Raise effort one step. If quality still lags Astra on the same prompt, the job belongs on Astra, not on a cheaper sibling.

**Cache hit rate is low.** Freeze the system prompt, put variable user data after the cached prefix, and use the diagnostics tool.

## Conclusion

GPT-6 Sol and Luna extend Astra’s training into the models most teams will run all day. Switch Work and Codex pickers first. Point API agents at `gpt-6-sol` or `gpt-6-luna`. Leave Astra on the work that must be right the first time.

Recheck [Introducing GPT-6 Sol and Luna](https://openai.com/index/introducing-gpt-6-sol-and-luna/) if your picker still shows GPT-5.6 names after the rollout window.

## Sources

- [Introducing GPT-6 Sol and Luna](https://openai.com/index/introducing-gpt-6-sol-and-luna/) — OpenAI, 22 September 2026
- [GPT-6 Astra](https://openai.com/index/gpt-6-astra/) — flagship model announcement
- [Announcing GPT-6 Sol and GPT-6 Luna](https://community.openai.com/t/announcing-gpt-6-sol-and-gpt-6-luna-in-the-api-codex-and-chatgpt/1399925) — OpenAI Developer Community
- [ChatGPT Learn: Models](https://learn.chatgpt.com/docs/models) — Work, Codex, and CLI model IDs
- [GPT-6 Sol and Luna on Amazon Bedrock](https://aws.amazon.com/about-aws/whats-new/2026/09/openai-gpt-6-sol-luna-on-amazon-bedrock/) — AWS, 22 September 2026
- [Introducing GPT-6 Astra for developers](https://www.youtube.com/watch?v=bOC3DisEOfg) — official OpenAI video
