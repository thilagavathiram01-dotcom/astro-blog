---
title: "How to Use Voice Mode and Remote Agents in Antigravity"
description: "Step-by-step guide to start Voice Mode with Gemini Live and set up Remote Agents in Google Antigravity for hands-free coding."
pubDate: 2026-11-09T14:00:00
heroImage: "https://images.unsplash.com/photo-1763568258498-768e67bf818e?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials"]
noindex: false
---

Google Antigravity just added two features that change how you work with coding agents. Voice Mode lets you talk to the agent like a teammate on a call. Remote Agents keep working in the cloud after you close your laptop.

Both features rolled out in version 2.29 starting November 3, 2026. Voice Mode works in the Antigravity App and CLI. Remote Agents are available to Google AI Pro and Ultra subscribers on personal accounts.

This guide shows exactly how to start each one, what you can do, and the limits Google set.

## What is Voice Mode in Antigravity

Voice Mode turns a normal conversation into a spoken back-and-forth. You give tasks out loud, steer while the agent works, and answer permission prompts without clicking.

It runs on the Gemini Live model. The model hears your audio directly instead of a transcript. You can interrupt the agent at any time by talking, the same way you would on a call.

The agent still does the real work in the conversation. It reads code, edits files, and runs commands. Everything appears on screen so you can listen while you look at the results.

Voice Mode continues the conversation you already have open. Earlier typed messages stay in context. You can also type or attach files while you talk.

![Person coding on laptop at night](https://images.unsplash.com/photo-1764452008254-eed469a4fad3?auto=format&fit=crop&w=800&q=80)

## How to start Voice Mode in the App

Voice Mode is rolling out gradually. Update the Antigravity App first. You may not see the button on day one.

1. Start a new conversation or open an existing one.
2. Make sure the message box is empty.
3. Click **Start Voice mode**. Allow microphone access if the app asks.
4. Choose a voice the first time. You can change it later in Settings.
5. Start talking.

A panel above the message box shows what you say. The agent’s reply lights up word by word as it speaks.

To end the session, say “Bye” or click **End**. Tasks that are still running continue after you hang up. A transcript of the spoken parts stays in the conversation.

You can mute your microphone with Option+M on macOS or Alt+M on Windows and Linux. Mute the agent’s voice with Shift+Option+M or Alt+Shift+M.

## Voice Mode in the Antigravity CLI

The CLI version needs 1.5.0 or later.

1. Start the Antigravity CLI in your project.
2. In a conversation, run `/voice live` or press F6.
3. Start talking.

A status row shows how long Voice Mode has been on and whether the agent is listening, thinking, or speaking. Press F6 again to mute your microphone. Press Esc on an empty prompt to hang up when the agent is idle.

Useful commands:

- `/voice speaker` changes the voice.
- `/voice speed` sets playback speed from 0.75x to 2x.
- `/voice duplex on` lets you interrupt by talking.

If you work over SSH, run `agy mic-serve` on your own computer and start the CLI with the ANTIGRAVITY_MIC variable set.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/_YIAcXZg9Yk"
    title="Remote Agents in Google Antigravity"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What you can do with Voice Mode

Describe tasks the way you would to a teammate. Ask the agent to find a failing test and fix it. It confirms the plan and starts work.

You do not have to wait for a task to finish. Add a detail, say “just check it, don’t change anything yet,” or ask “What are you doing?” for a status update. Say “stop” to end the current task. Say “hold on” when you need a moment to read.

When the agent needs approval, it reads the request out loud with its recommendation. You can say “allow it just this once,” “allow it for this conversation,” or “no, run the tests first.” The agent confirms with a short reply.

Destructive actions cannot be approved by voice. Deleting files, running commands with elevated privileges, or force-pushing to a Git remote still need a click on the Allow button. You can still deny those actions by voice.

By default the agent works quietly. It speaks only when it has an answer or needs input. Say “keep me posted” and you hear a short update about every 30 seconds. Voice Mode starts quiet again every time you turn it on.

You can choose from nine voices and set speed from 0.75x to 2x from the call controls.

## Set up Remote Agents

Remote Agents run conversations in Google’s cloud instead of on your computer. Tasks continue after you close your laptop. You can open them at antigravity.google.com/remote.

They are rolling out to Google AI Pro and Ultra subscribers who sign in with a personal Google account. They are not available on the free plan, Google AI Plus, or business accounts (Workspace or Google Cloud).

In the Antigravity App, create a New Remote Project. Attach a GitHub repository, Google Drive files, or uploaded files. The isolated cloud environment keeps working even when your computer is off.

On the web, sign in at antigravity.google.com and start a remote conversation or create a project. For the CLI, you need version 1.4.12 or later and the `--remote-agent` flag.

File limits are 8 MiB per file, 50 files and 100 MiB per project, and 2 GiB across your account.

Voice Mode is not available in Remote Control sessions or in conversations that run in the cloud. Use Voice Mode for local work and Remote Agents for long-running tasks that should continue without your machine.

![Laptop with code on screen and coffee](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Tips for better results

Speak in complete sentences the first time you give a task. The agent uses the same loop as typed prompts, so clear requests produce better code.

Ask for spoken progress updates only when you need them. Constant narration becomes distracting on longer tasks.

Use Voice Mode for steering and quick approvals. Switch to typing when you need to paste a stack trace or a long log.

Check the permissions page in the docs before you rely on voice approvals for sensitive commands. The usual rules still apply.

If Voice Mode does not appear, update the app or CLI and wait for the staged rollout. The changelog notes that features reach users gradually.

Pair this with other Antigravity tools. See our guide to the [Antigravity plugin marketplace](/blog/how-to-use-the-antigravity-plugin-marketplace/) for adding extra capabilities.

## Conclusion

Voice Mode and Remote Agents make Antigravity feel more like a teammate that can keep working when you step away. Voice Mode removes the keyboard for everyday steering and approvals. Remote Agents handle the long tasks that used to stop when you closed the lid.

Start with Voice Mode in a normal conversation. Give it a small, clear task and practice steering out loud. Once you have a Google AI Pro or Ultra plan, try a Remote Project on a repository that already has tests.

Both features are still rolling out. Check the official docs for the latest status and any changes to eligibility.

## Sources

- Google Antigravity blog: Voice mode in Antigravity (https://antigravity.google/blog/antigravity-voice-mode/)
- Google Antigravity docs: Voice mode (https://antigravity.google/docs/voice-mode/)
- Google Antigravity changelog (https://antigravity.google/docs/changelog/)
- Official YouTube: Remote Agents in Google Antigravity (https://www.youtube.com/watch?v=_YIAcXZg9Yk)
