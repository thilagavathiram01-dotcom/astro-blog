---
title: "Connect Claude or Codex in Android Studio Rabbit 2"
description: "How to connect Claude Agent, Codex, or Antigravity in Android Studio Rabbit 2 Canary using Bring Your Own Agent and ACP."
pubDate: 2026-10-03T17:15:00
heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "ai-tools"]
noindex: false
---

Android Studio Rabbit 2 Canary lets you keep the built-in Gemini agent or plug in another coding agent. Google calls the option Bring Your Own Agent (BYOA). It is in preview on the canary channel, and it already lists Claude Agent, OpenAI Codex, and Google Antigravity.

That matters if your team already pays for Claude or Codex, or if you want Gemini Flash 3.8 through Antigravity instead of the older built-in agent path. The IDE still supplies Android context. You choose who reasons over it.

This guide covers the official setup path, what each agent gets from the IDE, and when to stay on the built-in Gemini agent.

## What BYOA actually changes

Last year Android Studio opened model choice with Bring Your Own Model. BYOA is the next step: the agent itself runs inside the IDE, not only the model behind a chat panel.

Google connects those agents with the Agent Client Protocol (ACP). Android Studio sends the project graph, build setup, and platform details into the agent. The agent can then narrow that context to the files it needs. The stated goals are lower token use, lower latency, and answers that stay tied to the open project.

The agent window can also hand over Android tools. Build diagnostics, Jetpack Compose Previews, Android SDK tools, and emulator control are wired in so the agent can test and diagnose inside Studio. Agents also pick up Android skills and the Android Knowledge Base, so prompts are not limited to generic coding advice.

If you already use the Quail-era agent tools, the [Android Studio Quail 4 agent mode guide](/blog/android-studio-quail-4-agent-mode/) still applies to the built-in path. Rabbit 2 is where third-party agents join that same window.

## Pick the canary build first

BYOA is not in the current stable channel. It rolls out in preview with Android Studio Rabbit 2 on the canary release channel. Canary builds can change between drops, so treat this as a workstation install, not the IDE you use for a release freeze.

1. Open the [Android Studio preview downloads](https://developer.android.com/studio/preview) page and install the latest Rabbit 2 canary.
2. Open an existing project, or start a new one, so the agent has a real Gradle graph to read.
3. Open the agent tool window. You can also use **View > Tool Windows > Agent**.
4. Confirm the window offers Claude Agent, Codex, and Antigravity alongside the built-in agent.

If those names are missing, you are not on a Rabbit 2 canary that includes the preview. Update from the canary channel before you spend time on API keys.

![Developer workstation with a laptop open on code](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## Connect Claude Agent, Codex, or Antigravity

Google’s setup is short, and the sign-in step differs by provider.

1. In the agent window, select Claude Agent, Codex, or Antigravity.
2. Sign in with that provider, or paste an API key when the panel asks for one.
3. For agents that are not in the default list, open the registry. On Windows and Linux that is **File > Settings > Tools > AI > Agents**. On macOS it is **Android Studio > Settings > Tools > AI > Agents**.
4. Repeat for a second agent if you want a fallback when one plan hits its quota.

Both consumer and enterprise plans are supported, subject to the agent provider. You are not limited to one login. Google’s note on flexibility is practical: if one agent runs out of quota or is a poor fit for a task, another agent can take over in the same IDE.

Antigravity is the path Google recommends when you want newer Gemini models such as Gemini Flash 3.8, plus a higher AI usage quota than the built-in agent. You can sign in with a Google AI Pro or Ultra plan, a Gemini Enterprise license, an Enterprise Agent platform login, or a Gemini API key and pay per token.

Gemini Enterprise customers can stay on the built-in agent or switch to Antigravity. In either case, Google says the organization keeps the security and privacy controls of Google Cloud.

The built-in Gemini agent stays available. You do not have to remove it to try Claude or Codex.

## What the agent is allowed to do

Once connected, an ACP agent in Android Studio can plan a workflow and run it in the project. Official capabilities include:

- Read, write, and edit files.
- Run shell commands, run tests, and search the web.
- Spawn subagents for narrower jobs such as review or testing.
- Keep long-running sessions, and load project skills, slash commands, and memory.
- Pause for approval on riskier actions while handling routine steps on its own.

That last point is the control you should set before the first large edit. Granular permissions are part of the preview. Use them so a shell command or a wide file rewrite waits for you.

Android Bench 2 is Google’s separate look at long-horizon Android tasks. It is not required to connect an agent. The [Android Bench 2 long-horizon tasks](/blog/android-bench-2-long-horizon-tasks/) write-up covers that benchmark on its own.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/zGWbTIArNyk"
    title="Android Studio has entered the agentic era"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## A first session that stays small

Start with a task the IDE can verify. A good first prompt asks the agent to explain one failing test, propose a fix, and stop before it edits files. Approve the edit only after you have read the diff.

Then try a tool the agent only has inside Studio. Ask it to open a Compose preview for a screen you name, or to run an emulator check and report the failure from build diagnostics. Those requests show whether the native tool injection is working, not only whether the model can write Kotlin.

If answers ignore your modules, check that the project finished syncing. ACP context depends on the project graph. A half-synced Gradle project gives the agent a thin view of the app.

![Close view of code on a laptop screen](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Tips before you rely on it

Canary only. Do not point a release branch at Rabbit 2 if your team still standardizes on stable Android Studio.

Match the agent to the bill. Codex and Claude Agent use those providers’ plans or keys. Antigravity can use Google AI Pro, Ultra, Gemini Enterprise, or a Gemini API key. The built-in agent remains the no-extra-charge option Google documents for Studio.

Keep a second agent signed in. Quota switches are an explicit reason Google gives for supporting more than one ACP agent.

File bugs in Android Studio’s issue tracker while BYOA is in preview. The release notes for Rabbit 2 Canary 2 are the reference for the current ACP behavior, including IDE access to build diagnostics, SDK tools, terminal and shell, and emulator management.

For a shorter overview of the same preview, see [Bring Your Own Agent in Android Studio Rabbit 2](/blog/android-studio-byoa-agents-rabbit-2/).

## What to do next

Install the Rabbit 2 canary, open the agent window, and sign in to one external agent. Run a read-only prompt against a real module before you allow file edits. If you want Gemini Flash 3.8 inside Studio, add Antigravity rather than waiting for the built-in agent to catch up.

The preview is the point of this channel. Your plan, your agent, and Studio’s Android tools can sit in one window — as long as you stay on a build that actually ships BYOA.

## Sources

- Android Developers Blog, “Build your way: Use any AI agent of your choice in Android Studio” (24 September 2026): https://android-developers.googleblog.com/2026/09/build-your-way-use-any-ai-agent-in-android-studio.html
- Android Studio preview release notes, Bring Your Own Agent: https://developer.android.com/studio/preview/features
- Agent Client Protocol introduction: https://agentclientprotocol.com/get-started/introduction
- Android Developers, “Android Studio has entered the agentic era”: https://www.youtube.com/watch?v=zGWbTIArNyk
