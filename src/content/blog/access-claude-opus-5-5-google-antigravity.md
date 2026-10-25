---
title: "Access Claude Opus 5.5 in Google Antigravity"
description: "Enable Claude Opus 5.5 and Sonnet 5.5 in Google Antigravity for Pro and Ultra users. Step-by-step setup and model selection guide."
pubDate: 2026-10-25T14:00:00
heroImage: "https://images.unsplash.com/photo-1764452008254-eed469a4fad3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "ai", "google"]
noindex: false
---

Google added Claude Opus 5.5 and Claude Sonnet 5.5 to Antigravity for eligible Google AI Pro and Ultra subscribers. These models sit alongside Gemini options so you can pick the right one for planning, implementation, or verification work.

Opus 5.5 targets longer agentic coding and knowledge tasks. Sonnet 5.5 serves as a faster, lower-cost option for the same family. Both appear in the model picker once your plan and account qualify.

![Developer coding on a laptop at night](https://images.unsplash.com/photo-1764452008254-eed469a4fad3?auto=format&fit=crop&w=800&q=80)

## Check plan eligibility first

Official documentation lists Claude Opus 5.5 (thinking) and Claude Sonnet 5.5 (thinking) for Google AI Pro and Google AI Ultra. Free and Google AI Plus plans do not include them. Trial subscriptions on Pro typically do not unlock the 5.5 models either.

Enterprise access follows separate Google Cloud rules. Partner models are billed pay-as-you-go outside the pooled Gemini Enterprise monthly quota once an administrator enables overages and authorizes them.

Confirm your active plan at one.google.com before you look for the models in the app or CLI.

## Update and sign in

Download or update to the latest Antigravity 2.0 desktop app, CLI, or IDE extension. The models appear across the desktop app, the `agy` CLI, and the official extensions for VS Code, JetBrains, and Visual Studio.

Sign in with the Google account that holds the qualifying Pro or Ultra subscription. If you recently upgraded, a cached entitlement can delay visibility. In the desktop app, open the Command Palette (`Cmd+Shift+P` or `Ctrl+Shift+P`), run **Antigravity: Reset Onboarding**, and sign in again through the browser prompt.

For Google Cloud customers, an administrator must first enable partner models:

1. In the Google Cloud Console go to Gemini Enterprise > Settings > AI developer tools.
2. Turn on overage billing and set spend limits.
3. Authorize partner models for the organization.

Alternatively, on the Gemini platform enable Claude models in Model Garden and accept the Anthropic terms.

## Select the model

In the desktop app or IDE extension, open a conversation and click the model name under the prompt box. Choose **Claude Opus 5.5 (thinking)** or **Claude Sonnet 5.5 (thinking)**.

In the CLI, run `/model` and select the same entry. Your choice persists for the rest of the conversation thread. You can switch models between turns while keeping workspace state, open files, and terminal context.

A one-shot `/model` check lets you hand a diff to a different model family for review before you commit.

![Laptop and tools on a developer desk](https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=800&q=80)

## Practical multi-model patterns

Google’s Antigravity post highlights two useful patterns once both families are available.

**Cross-model verification.** Start planning or implementation on Opus 5.5 or Gemini 4 Argon. Before you advance the loop or commit, switch to the other family (or run a one-shot check) so a different model critiques the change against your tests and requirements. This reduces model-specific blind spots.

**Reasoning model plus Flash subagents.** Keep the primary session on a stronger model for architecture decisions. Assign high-volume mechanical work (test classification, log triage, lint checks) to subagents configured with `model: flash`. Define these in `.agents/agents/*.md` files. The parent model can still use `model: inherit` or `model: pro` for deeper review steps.

These patterns work whether you are building Android apps with the Android CLI plugin or working in a general codebase. For Android-specific agent workflows, see the existing guide on [Android CLI agent skills](/blog/android-cli-agent-skills/).

## Tips for better results

- Hand the whole task to Opus 5.5 in one message. State what “done” looks like and when the agent should stop and ask. This matches Anthropic’s guidance for the model in Claude Code and transfers cleanly to Antigravity sessions.
- Prefer Sonnet 5.5 for narrower edits and Opus 5.5 for multi-file changes or long-horizon debugging until you measure token use on your own projects.
- Keep an eye on usage. Partner models sit outside the pooled Gemini quota and bill pay-as-you-go once overages are enabled.
- Update regularly. Older Claude 4.6 models are scheduled for removal from Antigravity on November 2, 2026.

## Conclusion

Claude Opus 5.5 and Sonnet 5.5 give Pro and Ultra users a second strong model family inside the same Antigravity workspace. Update the client, confirm your plan, select the model from the picker or `/model`, and start with a clear finish line on the first task. Combine it with Gemini options for cross-checks when the work matters.

## Sources

- [Claude Opus 5.5 and Claude Sonnet 5.5 are now available in Google Antigravity](https://cloud.google.com/blog/products/ai-machine-learning/claude-opus-55-and-claude-sonnet-55-available-in-antigravity) — Google Cloud Blog, October 21, 2026
- [Choose a model](https://antigravity.google/docs/models) — Google Antigravity Docs
- [Introducing Claude Opus 5.5](https://www.anthropic.com/claude-opus-5-5) — Anthropic, September 22, 2026

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/AUNrqCj548E"
    title="Google Antigravity Full Tutorial (2026): Every Agent, Model and Setting"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
