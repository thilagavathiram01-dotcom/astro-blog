---
title: "How to Use AI Change Review in Android Studio Rabbit 2"
description: "Step-by-step guide to review agent-generated code changes with AI Change Review in Android Studio Rabbit 2."
pubDate: 2026-10-29T14:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "developer", "ai-tools"]
noindex: false
---

Agents write and refactor code faster than most teams can review it. Android Studio Rabbit 2, now stable, adds AI Change Review to close that gap. The tool reviews agent changes, pending commits, or committed code, then builds a guided walkthrough that groups related diffs by theme instead of alphabetical file order.<grok type="render_inline_citation" citation_id="115" />

You launch the review from the Agent chat window or from visual entry points in the IDE. It first surfaces recommended fixes. After you address those, Create Walkthrough organizes the remaining changes so you can verify intent and risk without scrolling through every file.<grok type="render_inline_citation" citation_id="115" />

This guide shows how to start a review, work through recommended fixes, and run the walkthrough on real Android projects. Pair it with Bring Your Own Agent if you already connect Claude, Codex, or Antigravity inside the IDE. See our guide to [Bring Your Own Agent in Android Studio Rabbit 2](/blog/android-studio-rabbit-2-bring-your-own-agent-guide/).

## What AI Change Review covers

Change Review works on three kinds of changes:

- Agent Changes: edits the built-in agent or an ACP agent just made in the current session.
- Pending Commits: staged or unstaged files waiting for a commit.
- Git Log / committed changes under review: existing commits you select from the log.

The agent scans the diffs and lists recommended fixes first. These are concrete issues it found—missing null checks, lifecycle problems, or Compose recomposition risks. Once you apply or dismiss the fixes, the walkthrough groups the remaining chunks into logical themes such as “UI state updates” or “network error handling.”<grok type="render_inline_citation" citation_id="115" />

![Laptop showing code in an IDE](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Update to Android Studio Rabbit 2

AI Change Review ships in the stable Rabbit 2 release. Open Android Studio, go to Help > Check for Updates (or Android Studio > Check for Updates on macOS), and install the latest stable build. The release also includes Bring Your Own Agent, stable XR emulators, LeakCanary agent integration, and a skills manager.<grok type="render_inline_citation" citation_id="115" />

After the update, open any Android project. Make sure the AI features are enabled under Settings > Tools > AI. The built-in agent works without extra setup. If you use an external agent, connect it first through Settings > Tools > AI > Agents.

## Start a review from Agent changes

1. Open the Agent panel and ask the agent to implement a feature or fix a bug. Let it finish its edits.
2. In the Agent chat window, click the review control or choose the Change Review entry point for agent changes.
3. The tool runs an independent review and lists Recommended Fixes. Read each item. Apply the suggested code change or mark it as not applicable.
4. When the list is clear, click Create Walkthrough.

The walkthrough opens with themes ranked by priority. Expand a theme to see the related diff chunks side by side. Accept or reject each chunk, then move to the next theme. This replaces the old habit of opening files in alphabetical order.<grok type="render_inline_citation" citation_id="115" />

## Review pending commits or Git history

For work that is not in the current agent session:

1. Stage your files or select a commit in the Git log.
2. Launch Change Review from the visual entry point next to the pending changes or from the commit context menu.
3. The same Recommended Fixes step runs first. Address them before creating the walkthrough.
4. Use the walkthrough to verify the full set of changes across modules.

This is useful after a long agent session that produced dozens of files, or when you cherry-pick a teammate’s commit and want an AI-assisted second pass before merging.<grok type="render_inline_citation" citation_id="115" />

![Developer workspace with laptop and phone](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## Tips for better reviews

Keep the scope small. Large agent runs that touch more than a few modules produce longer fix lists. Break the task into smaller prompts so the review stays focused.

Cross-check high-risk areas yourself. Change Review is strong on common Android pitfalls such as lifecycle leaks and Compose state, but it does not replace reading security-sensitive or billing code. Treat the recommended fixes as a first filter.

Combine it with LeakCanary. After the walkthrough, run the LeakCanary task in the Profiler. The built-in agent can explain retention paths and suggest fixes without leaving the IDE. See our related guide on fixing memory leaks with LeakCanary in Android Studio.

Use skills for specialized checks. Android Studio loads official Android skills. Invoke one with @ in the agent chat before you start the review so the agent already knows project conventions.

## Watch the official walkthrough

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/fzzja0uYeeI"
    title="How to make code review easier with AI"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

AI Change Review turns the volume of agent-generated code into a structured review instead of a scroll. Start with Recommended Fixes, then use the themed walkthrough to verify intent across files. Update to Android Studio Rabbit 2, try it on the next agent session, and keep the human review focused on risk and design decisions.

Sources:

- Android Developers Blog: Your favorite agents are now integrated in Android Studio (28 Oct 2026)
- Android Studio release notes for Rabbit 2
