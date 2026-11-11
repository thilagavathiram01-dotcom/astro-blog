---
title: "How to Set Up Firebase Agent Skills for Google Analytics"
description: "Install Firebase agent skills and use AI coding agents to set up Google Analytics for Firebase plus accurate screenview logging."
pubDate: 2026-11-11T15:00:00
heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["firebase", "ai-tools", "tutorials"]
noindex: false
---

Google added agent skills for Google Analytics for Firebase on November 10, 2026. These skills let AI coding agents handle the setup steps that often slow developers down. You can now ask an agent to connect Analytics and instrument screenviews with a single prompt.

This guide shows how to install the skills and use them with common agents. It draws from the official Firebase blog post and documentation.

## Why agent skills matter for Analytics

Agent skills give AI coding agents focused instructions and workflows for Firebase tasks. They reduce token use through progressive disclosure. The agent loads only the details it needs for your request.

For Analytics, the skills address two common pain points. First, getting started: adding the SDK, placing config files, and initializing the service. Second, logging screenviews accurately. Automatic screenview tracking works in many cases. Declarative UIs in Jetpack Compose, SwiftUI, Flutter, or React Native often require manual logging. The skills help the agent add that instrumentation correctly.

You can pair the skills with the Firebase MCP server for project-level actions. The skills teach the agent how to use the CLI and MCP tools effectively.

![Analytics dashboard on a laptop screen](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80)

## Install the Firebase agent skills

The new Google Analytics skills ship inside the broader Firebase agent skills package. Install or update the package in your preferred AI coding agent. Official options cover Antigravity, Claude Code, Codex, Cursor, and any agent that supports the skills standard.

For most agents, run this in your project directory:

```
npx skills add firebase/agent-skills
```

Specific agents have extra paths:

- **Antigravity**: Available in the Antigravity Marketplace. Or run `npx skills add firebase/agent-skills --agent=antigravity`.
- **Claude Code**: Run `claude plugin marketplace add firebase/agent-skills` then `claude plugin install firebase@firebase`.
- **Codex**: Available in the Codex Plugin Directory. Or use the plugin marketplace commands.
- **Cursor**: Available in the Cursor Marketplace. Or run `npx skills add firebase/agent-skills --agent=cursor`.

If you already have the skills installed, update them so the Analytics skills appear:

```
npx skills update --all
```

Agent-specific update commands exist for Claude Code and Codex. Check the Firebase agent skills documentation for the full list.

The skills package includes `firebase-analytics`. It covers getting started and measuring screenviews for Google Analytics in iOS and Android apps. It also references the `firebase-basics` skill for project setup, CLI login, and downloading `google-services.json` or `GoogleService-Info.plist`.

## Prompt the agent to set up Analytics

Once the skills are installed, open your AI coding agent and use a clear prompt. The official recommendation is:

> Help me set up my app to use Google Analytics for Firebase.

The agent connects your app to Firebase if needed. It enables Google Analytics in the Firebase project. It adds the required dependencies and initialization code. It handles platform-specific details. On iOS this includes the `-ObjC` linker flag. On Android it ensures the SDK is declared correctly in the Gradle file. The agent also accounts for your project structure and build variants.

For screenview instrumentation, especially with declarative UIs, use:

> Help me instrument my app to log screenviews using Google Analytics for Firebase.

The agent adds the manual logging calls where automatic tracking falls short. It follows the current SDK patterns for screenview events.

You can also use the longer prompt from the Analytics get-started page. It first confirms the skills are installed, then asks for Analytics setup and screenview logging.

Test the result in Firebase DebugView. Enable debug mode on your device or simulator. Trigger screen transitions and confirm events appear in real time. The skills include guidance for this verification step.

![Developer coding on a laptop with code on screen](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Tips for reliable results

Start with a clean Firebase project or confirm Analytics is enabled in the console. The agent can walk you through creating a Google Analytics account if one is missing.

Review the generated code before you commit it. Skills improve accuracy, but you should still check dependency versions and initialization order. On Android, confirm the Google Services plugin is applied. On iOS, verify the linker flag in the build settings.

For apps with multiple flavors or schemes, mention that detail in your prompt. The agent uses project context to avoid build failures.

If you also use Firebase AI Logic, the same skills package covers those workflows. You can ask the agent to set up both Analytics and AI Logic in one session. See our guide on [setting system instructions in Firebase AI Logic](/blog/how-to-set-system-instructions-in-firebase-ai-logic/) for related setup steps.

Update the skills regularly. Firebase adds new skills and refines existing ones. The update command pulls the latest versions without removing your local customizations.

## Verify events and next steps

After the agent finishes, build and run the app. Open the Firebase console and check the Analytics dashboard. Events can take a few hours to appear in standard reports. DebugView shows them immediately.

Log additional custom events once the base setup works. The agent can help add those too if you describe the user actions you want to track.

The official quickstart apps for Android, iOS, Flutter, and other platforms show complete working examples. Compare your agent-generated code against those samples if you need a reference.

Agent skills do not replace your review process. They remove the repetitive setup work so you can focus on the product logic. Google invites feedback on the Firebase agent skills GitHub repository and UserVoice.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Z_2AH6WQBoc"
    title="Getting started with Google Analytics for Firebase"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- Firebase Blog: Introducing Firebase agent skills for Google Analytics (November 10, 2026)
- Firebase documentation: Agent skills and Google Analytics for Firebase get-started page
- firebase/agent-skills GitHub repository
