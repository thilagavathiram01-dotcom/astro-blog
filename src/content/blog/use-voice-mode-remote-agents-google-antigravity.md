---
title: "How to Use Voice Mode and Remote Agents in Google Antigravity"
description: "Step-by-step guide to enable Voice Mode with Gemini Live and start Remote Agents in Google Antigravity 2.29 for hands-free coding."
pubDate: 2026-11-09T14:00:00
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini", "developer"]
noindex: false
---

Google Antigravity 2.29 adds Voice Mode powered by Gemini Live and Remote Agents that keep working after you close your laptop. These features turn the agentic coding tool into a more continuous assistant for developers on Google AI Pro or Ultra personal accounts.

Voice Mode lets you speak tasks, steer changes, and approve permissions out loud. Remote Agents run in isolated cloud environments so long-running tests and pull requests continue independently. Both features are rolling out gradually as of early November 2026.<grok type="render_inline_citation" citation_id="74" />

## Check eligibility and update

Remote Agents require a Google AI Pro or Ultra subscription on a personal Google Account. Free plans, Google AI Plus, and Workspace or Google Cloud business accounts do not support them yet. Voice Mode works in the Antigravity App and CLI for eligible users and is also rolling out gradually.

Update the Antigravity App to version 2.29.0 or later. For the CLI, use 1.4.12 or newer for Remote Agents and 1.5.0 or newer for Voice Mode. Check the official changelog for the latest version details.<grok type="render_inline_citation" citation_id="77" />

If the new options do not appear immediately, wait for the staged rollout or restart the app after updating.

![Developer coding on a laptop with code on screen](https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=800&q=80)

## Start a Remote Agent

Remote Agents execute conversations and tools in Google’s cloud virtual machines. You can close your laptop and still monitor progress from antigravity.google.com/remote on your phone.

In the Antigravity App:

1. Click the + button next to Projects in the sidebar.
2. Choose New Remote Project.
3. Attach a GitHub repository, Google Drive files, or uploaded files (limits apply: 8 MiB per file, 50 files and 100 MiB per project).
4. Name the project and send your first prompt.

You can also select Remote from the project selector in the message box and pick GitHub Repositories. On the web, sign in at antigravity.google.com and create or open a remote conversation.

In the CLI, use the --remote-agent flag with version 1.4.12 or later. The agent continues running even when your computer is offline or asleep.<grok type="render_inline_citation" citation_id="102" />

## Enable and use Voice Mode

Voice Mode turns an existing conversation into a spoken exchange powered by the Gemini Live model. It hears your voice directly, responds in real time, and lets you interrupt at any time. The agent still performs the actual work—reading code, editing files, and running commands—while you listen or read along.

In the App:

1. Clear the message box so it is empty.
2. Click Start Voice mode.
3. Choose a voice on first use.
4. Speak your request. Adjust playback speed from 0.75x to 2x if needed.

In the CLI (1.5.0+), run /voice live or press F6. Typed messages continue to work alongside voice. End the session by saying “bye” or tapping End.

Voice Mode currently works only on local conversations, not Remote Control sessions or cloud remote agent conversations. It supports one conversation at a time and is not available in subagent threads or side questions.<grok type="render_inline_citation" citation_id="105" />

![Silhouette of a person in front of multiple monitors showing code](https://images.unsplash.com/photo-1549605659-32d82da3a059?auto=format&fit=crop&w=800&q=80)

## Practical tips for better results

Describe tasks the way you would to a teammate. For example, ask the agent to locate a failing test and fix it, then request spoken progress updates every 30 seconds if you want more frequent feedback.

Approve routine permissions by voice. Destructive actions still require explicit confirmation. Keep the conversation context by starting Voice Mode inside an existing thread rather than a fresh one.

For long-running work, start a Remote Agent with a clear GitHub repo attachment so the cloud environment has the full project context. Check progress from your phone while the agent runs tests or opens a pull request.

Pair these features with Gemini 4 Argon workflows in Antigravity for complex coding tasks. See our earlier guide on setting up Gemini 4 Argon in Antigravity for model selection and thinking levels.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/_YIAcXZg9Yk"
    title="Remote Agents in Google Antigravity"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Limitations and what to expect

Remote Agents are limited to personal Pro and Ultra accounts and are still rolling out. Voice Mode does not yet work on cloud remote conversations. Upload size limits and the need for a stable internet connection for remote sessions remain in place.

Google continues to iterate on guardrails and availability. Check the Antigravity changelog and official docs regularly for updates as the features reach more users.

## Sources

- Google Antigravity blog: Voice mode in Antigravity
- Google Antigravity changelog and docs for version 2.29
- Official announcements on remote agents and Gemini Live integration
