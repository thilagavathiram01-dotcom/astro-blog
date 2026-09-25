---
title: "How to Use BYOA Agents in Android Studio Rabbit 2"
description: "Connect Claude Agent, OpenAI Codex, or Google Antigravity in Android Studio Rabbit 2 Canary with official BYOA and ACP steps."
pubDate: 2026-09-25T10:00:00
heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "ai-tools", "tutorials", "developer", "gemini"]
noindex: false
---

Android Studio no longer forces a single coding agent. In **Rabbit 2 Canary 2**, Google added **Bring Your Own Agent (BYOA)** so you can run Claude Agent, OpenAI Codex, Google Antigravity, or any **Agent Client Protocol (ACP)** agent inside the same IDE that already holds your project graph, build errors, and emulator.

This is not the older “paste an API key for chat” path. BYOA wires an external agent into Studio tools. The built-in Gemini agent stays free. You pick the extra agent only when you want it.

If you still live on stable Quail 4, stay there for production work and use our [Quail 4 Agent Mode guide](/blog/android-studio-quail-4-agent-mode/). BYOA is documented on the [preview features](https://developer.android.com/studio/preview/features) page for Rabbit 2.

## What you need

- Android Studio **Rabbit 2** Canary (Canary 2 or later). Download from the [preview page](https://developer.android.com/studio/preview).
- A project that already syncs. Do not first-test agents on a broken Gradle tree.
- An account or API key for the agent you plan to add: Claude, Codex, Antigravity, or another ACP-compliant tool.
- Time to review every file write. Agents can edit many files in one pass.

Google lists three default connectors in the agent window: **Claude Agent**, **Codex**, and **Antigravity**. Extra agents live under **Settings → Tools → AI → Agents**.

![Laptop with code editor and terminal during an Android build](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## How BYOA differs from a remote model

Studio already lets you add a [third-party remote model](https://developer.android.com/studio/gemini/use-a-remote-model) for Chat and Agent Mode. That path talks to an HTTP endpoint such as `https://api.openai.com/v1` or `https://api.anthropic.com`.

BYOA is a different layer:

- It uses **ACP**, not only a chat completions URL.
- The agent receives IDE context: project graph, build diagnostics, SDK tools, terminal, and emulator controls.
- Google says that extra context should cut token waste versus pasting files by hand.
- You can still sign in with a personal key or a consumer subscription.

Keep both if you need them. A remote model is enough for “explain this file.” Use BYOA when you want the outside agent to run tools, not only answer questions.

## Install Rabbit 2 and open the agent window

1. Install Rabbit 2 Canary next to your stable copy. Do not overwrite Quail 4 until you finish a test project.
2. Open the app module you care about and wait for Gradle sync.
3. Open **View → Tool Windows → Agent**, or click **Agent** in the tool window bar.
4. Confirm the built-in Gemini agent still loads. That path remains available at no extra charge, per the preview notes.
5. In the agent window, open the agent picker. You should see the default third-party entries plus Gemini.

If the picker is missing, you are on an older canary. Check **Help → About** and update.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/lKqh34XT7Q8"
    title="What’s new: Android Studio Quail releases — Android Developers"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Connect Claude, Codex, or Antigravity

Google’s official steps are short. Follow them in this order.

1. Update to the latest Rabbit 2 canary.
2. In the agent window, select **Claude Agent**, **Codex**, or **Antigravity**.
3. Sign in or paste the API key the connector asks for.
4. For agents that are not in that default list, open **File → Settings → Tools → AI → Agents** (Android Studio → Settings on macOS) and add the ACP agent from the registry.
5. Start one narrow task on a feature branch. Do not point a new agent at `main`.

Approve tool use when Studio prompts. Agent Mode on Gemini already asks before some tools run. Treat a BYOA agent the same way.

### A first prompt that stays small

Use a task the IDE can verify:

- “Fix the current assembleDebug error in the `:app` module. Do not change product flavors.”
- “Add unit tests for `SessionRepository` only. Leave UI files untouched.”
- “Explain the failing emulator screenshot test and propose a single Compose fix.”

Avoid “rewrite the app.” BYOA gives the agent more tools. A wide goal produces a wide diff.

![Close-up of source code on a dark editor theme](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Assign models by task type

Rabbit 2 also adds **Model Assignment**. That feature is separate from BYOA but you will hit it in the same settings cluster.

Official path: **Settings → Tools → AI → Model Providers → Model Assignment**. Pick a heavier model for Agent Mode reasoning and a cheaper, faster model for commit messages or next-edit prediction.

You can also change the thinking model from the dropdown in the Agent panel. Studio writes that choice back to Model Assignment.

Use this when one billed agent is too expensive for trivia. Keep the paid ACP agent for multi-file work. Leave Gemini or a small remote model on the short tasks.

## Privacy and key rules you should not skip

Google is explicit on third-party models, and the same caution applies when an ACP agent leaves the machine:

- You send code and prompts to that provider. Read its terms first.
- Google says it cannot see files, prompts, or replies exchanged with a third-party provider.
- Chat and AI Agent are the features Google lists as supported for external models. Other Studio AI tools may not work the same way.
- Never put an API key in source. Settings is the store.
- Skip unknown ACP servers. An unverified agent can touch your tree and your shell.

If the repo is under a client NDA, stay on Gemini inside Studio or on [Gemini Enterprise](https://developer.android.com/studio/preview/features) so data residency stays on the Cloud project your admin already approved.

## A one-hour lab

1. Install Rabbit 2 Canary beside Quail 4.
2. Clone a side branch of an app you already ship.
3. Connect one default agent. Confirm sign-in works before you type a prompt.
4. Ask it to fix one compile error and stop.
5. Read the diff in the IDE, not in chat. Reject extra files.
6. Run the app on an emulator. The preview notes say BYOA agents can use emulator controls; watch that the agent does not start a second device you did not ask for.
7. Disconnect the agent in Settings if you will go back to client code the same day.

Compare the same prompt on the built-in Gemini agent. Keep the one that produced the smaller, correct patch.

## What can still go wrong

Canary builds change. ACP support can break after a Studio update. A third-party agent may ignore Android skills that Quail 4 already bundles for Gemini. Feature compatibility is not guaranteed.

Rabbit 2 also previews Play test-track uploads, Compose preview screenshot reports, and an assistant that migrates iOS, Flutter, or React Native projects to Kotlin and Compose. Those flows are unrelated to BYOA. Do not mix a migration job and a new ACP agent in the same session.

## Conclusion

BYOA is useful when you already pay for Claude, Codex, or Antigravity and you want those agents to see Studio diagnostics instead of a pasted zip. Install Rabbit 2 Canary, connect one agent, and give it a single verifiable task. Keep Gemini as the free fallback. Review every write.

When the canary lands in stable, move the same Settings path to your daily install. Until then, treat BYOA as a lab feature with real keys and real diffs.

## Sources

- [Release notes for Android Studio preview](https://developer.android.com/studio/preview/features) — Android Developers, updated 24 September 2026 (Bring Your Own Agent in Rabbit 2)
- [Agent Mode](https://developer.android.com/studio/gemini/agent-mode) — Android Developers
- [Use a remote model](https://developer.android.com/studio/gemini/use-a-remote-model) — Android Developers
- [Download Android Studio preview](https://developer.android.com/studio/preview)
- [What’s new: Android Studio Quail releases](https://www.youtube.com/watch?v=lKqh34XT7Q8) — Android Developers
