---
title: "Use Composer Predictions in Codex for Faster Coding"
description: "Learn how to enable and use Composer predictions in the Codex desktop app on ChatGPT Pro to get suggested follow-up messages and speed up your coding workflow."
pubDate: 2026-10-10T11:00:00
heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "chatgpt", "tutorials", "how-to", "developer"]
noindex: false
---

OpenAI added Composer predictions to the Codex desktop app in beta. Eligible ChatGPT Pro users now see suggested next messages after Codex finishes a response. The feature aims to reduce the time spent typing follow-ups during long coding sessions.

Predictions appear only in local and SSH threads that use GPT-6 Astra or GPT-6.1 Sol. They do not send messages automatically. You review, edit, or ignore each one before you send it.

## What Composer predictions do

Composer predictions read the current thread and propose a complete next message. They draw on the conversation history already present in that thread. If earlier context from memory or connected tools sits in the thread, it can shape the suggestion. Predictions do not fetch new information from memory or external apps on their own.

OpenAI describes the beta as one of the features most liked in internal testing. The suggestion shows up in the message box several seconds after Codex replies. In longer threads the delay can grow. You can keep typing your own message without waiting.

The feature stays optional. Accepting a prediction only inserts text into the composer. You still decide whether to send it.

![Developer working on a laptop with code visible on screen](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## Requirements for the beta

You need a personal ChatGPT Pro plan. The beta covers users aged 18 and older in all regions where Codex is available. Business, Enterprise, or other plans do not include it during this stage.

Use the latest Codex desktop app on macOS or Windows. Sign in with the Pro account. Open a local thread or an SSH thread and select either GPT-6 Astra or GPT-6.1 Sol. Predictions do not appear in Chat on the web or in the regular desktop Chat view. Local Work threads may show them in some cases.

During the beta, generating a prediction does not count against your Codex usage limits or consume credits. Sending the message, including an accepted prediction, follows normal limits and billing.

## Enable and use predictions step by step

1. Update the Codex desktop app to the newest version and sign in with your personal ChatGPT Pro account.
2. Create or open a local or SSH thread. Choose GPT-6 Astra or GPT-6.1 Sol from the model selector.
3. Send your first message and wait for Codex to finish its response.
4. Look in the message box. A suggested follow-up may appear. Predictions do not show after every reply.
5. Press Tab to accept the suggestion. The text lands in the composer. Review it, edit if needed, then send when ready.
6. To ignore the prediction, start typing your own message. The suggestion disappears as you type.

You can accept a prediction and then copy the text for later use. Replacing the text in the box lets you send a different message instead.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/HFM3se4lNiw"
    title="Introducing the Codex app"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Turn predictions on or off

Predictions start enabled for eligible accounts. To disable them:

1. Open Settings in the Codex desktop app.
2. Select General, then Composer.
3. Toggle off Show predictions.

The same switch turns the feature back on. The control affects only composer predictions. Suggestions that appear on a new conversation page remain separate.

## Practical tips for daily use

Treat every prediction as a draft. Review the suggested scope before you send it. A follow-up can expand a task or request more work than you intended.

Use predictions in focused coding threads where the context stays consistent. They tend to match better when the thread already contains clear instructions, file paths, or prior decisions.

Pair the feature with your existing workflow. For example, accept a prediction that asks Codex to run tests, then edit the message to add specific test names or a timeout. You save keystrokes while keeping control.

If you use Codex memories, context already loaded into the thread can personalize later predictions. Memories stay off by default; enable them under Settings → Personalization if you want that behavior.

Predictions can take longer in lengthy conversations. Continue typing your own message instead of waiting. The composer accepts input while the prediction generates.

![Close-up of hands typing on a laptop keyboard during coding](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Troubleshooting common issues

If no prediction appears, confirm three points. The app is updated. Show predictions is enabled. The thread uses a supported model and is local or SSH.

A missing prediction after a single response does not indicate a problem. The system skips some replies. Type your next message and continue.

When a suggestion misses the mark, ignore it and write your own. You can also disable the feature for that session or permanently.

On macOS, predictions do not request extra keyboard permissions. If a permission prompt appears, check which other feature triggered it.

To report a bad prediction, contact OpenAI Support. Include the suggested text (with personal details removed), the model you used, and your app version.

## How predictions fit with other Codex features

Composer predictions sit alongside existing tools such as skills, automations, and worktrees. They help you steer an already-running thread more quickly. They do not replace planning modes or multi-agent setups.

If you also use the ChatGPT iOS app for Codex tasks, the desktop predictions remain separate. Mobile workflows still rely on manual prompts. For details on mobile Codex usage, see our guide on [ChatGPT iOS Codex usage and task widgets](/blog/chatgpt-ios-codex-usage-task-widgets/).

## Conclusion

Composer predictions give Pro users a faster way to continue coding conversations in the Codex desktop app. The beta keeps the feature optional, free of extra cost for generation, and under your review at every step. Update the app, pick a supported model in a local or SSH thread, and press Tab when a useful suggestion appears.

Check the official help article for the latest eligibility and behavior notes, since the beta can change before wider release.

## Sources

- [Composer predictions in Codex](https://help.openai.com/en/articles/20001601-composer-predictions-in-codex) — OpenAI Help Center
- [OpenAI Developers announcement](https://x.com/OpenAIDevs/status/2108624138369929725) — X post confirming the beta
