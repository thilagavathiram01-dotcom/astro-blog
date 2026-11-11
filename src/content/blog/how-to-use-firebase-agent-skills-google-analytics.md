---
title: "How to Use Firebase Agent Skills for Google Analytics"
description: "Install Firebase agent skills and set up Google Analytics for Firebase with AI coding agents in one prompt. Covers screenviews too."
pubDate: 2026-11-11T14:00:00
heroImage: "https://images.unsplash.com/photo-1707157284454-553ef0a4ed0d?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["firebase", "ai-tools", "tutorials", "how-to", "developer"]
noindex: false
---

Google added agent skills for Google Analytics for Firebase on November 10, 2026. These skills let AI coding agents set up Analytics and instrument screenviews with a single prompt. They handle platform-specific details that often trip up manual setup.

This guide shows how to install the skills, prompt your agent for Analytics setup, and instrument screenviews in modern UI frameworks. The steps come from Firebase’s official blog and documentation.

## Why agent skills help with Analytics

Manual Google Analytics for Firebase setup involves adding SDKs, placing config files, initializing the library, and handling platform quirks. On iOS you may need the -ObjC linker flag. On Android you must declare the dependency correctly in Gradle. Declarative UIs like Jetpack Compose or SwiftUI often need manual screenview events because automatic logging does not always capture navigation.

Agent skills package the correct steps, best practices, and platform notes. The agent loads only the relevant skill when your prompt matches, which keeps token use lower. Firebase lists the firebase-analytics skill as covering setup and screenview measurement for iOS and Android apps.

You can pair the skills with the Firebase MCP server for project-level actions. The skills teach the agent how to use the CLI and MCP tools effectively.

![Office desk with smartphone and financial charts](https://images.unsplash.com/photo-1707157284454-553ef0a4ed0d?auto=format&fit=crop&w=800&q=80)

## Install the Firebase agent skills

The skills now include the Google Analytics ones. Install them once for your preferred agent. If you already have older Firebase skills, update them so the new Analytics skill appears.

For any agent that supports the skills CLI, run this in your project directory:

```bash
npx skills add firebase/agent-skills
```

You will be prompted to select skills and target agents. Include firebase-analytics.

Agent-specific options:

- **Antigravity**: Available in the Antigravity Marketplace, or run `npx skills add firebase/agent-skills --agent=antigravity`.
- **Claude Code**: `claude plugin marketplace add firebase/agent-skills` then `claude plugin install firebase@firebase`.
- **Codex**: Available in the Codex Plugin Directory.
- **Cursor**: Available in the Cursor Marketplace, or use the npx command with `--agent=cursor`.

To update existing skills, use `npx skills update --all` (or the agent-specific update command). Official docs confirm the firebase-analytics skill is available after the November 10 update.

Related agent skill workflows appear in our guide on [installing Android skills with CLI and Studio](/blog/install-android-skills-cli-studio-rabbit/).

## Set up Google Analytics with one prompt

After installation, open your AI coding agent (Claude Code, Cursor, Antigravity, Codex, or similar). Use a clear prompt:

“Help me set up my app to use Google Analytics for Firebase.”

The agent connects the app to Firebase if needed, creates or links the Analytics property, adds the correct SDK dependencies, places the configuration file, and adds initialization code. It checks for the platform-specific requirements mentioned above and adapts to your project structure, including multi-variant builds.

If your Firebase project is not yet linked to a Google Analytics property, the agent walks you through the remaining console steps. Test the result by running the app and checking DebugView in the Firebase console for the first events.

Firebase’s get-started page even includes a ready-to-copy AI prompt that asks the agent to install skills and set up Analytics plus screenviews.

## Instrument screenviews for declarative UIs

Automatic screenview logging works for many traditional navigation patterns. With Jetpack Compose, SwiftUI, Flutter, or React Native, you usually need to log screenviews yourself when the user navigates.

Prompt the agent:

“Help me instrument my app to log screenviews using Google Analytics for Firebase.”

The skill guides the agent to add the correct calls at the right points in your navigation or composition hierarchy. It follows current best practices so events appear as expected in reports and DebugView.

Verify by navigating through screens and confirming the events in the Firebase console. Adjust any custom screen names the agent proposes if your product language differs.

![Smartphone and smartwatch displaying apps on-screen data](https://images.unsplash.com/photo-1762768767074-e491f1eebdfc?auto=format&fit=crop&w=800&q=80)

## Tips for reliable results

- Update skills regularly. New skills and refinements appear often.
- Give the agent your target platforms and UI framework in the prompt so it picks the right patterns.
- After setup, enable DebugView and force a few events before shipping.
- Combine with the Firebase MCP server if you want the agent to create properties or check project state programmatically.
- Review the generated code. Skills reduce mistakes but do not replace a final human check on privacy and data collection choices.

## Conclusion

Firebase agent skills for Google Analytics remove the most common friction in Analytics setup and screenview instrumentation. A single prompt now handles SDK wiring, platform flags, and declarative UI events. Install or update the skills, then ask your preferred coding agent to finish the work.

The same approach applies to other Firebase products that already have skills, such as Authentication, Firestore, and Crashlytics.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/8V_I4jsXXyo"
    title="Agent Skills for Firebase (using Gemini CLI)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- Firebase Blog: Introducing Firebase agent skills for Google Analytics (November 10, 2026)
- Firebase docs: Firebase agent skills
- Firebase docs: Get started with Google Analytics
- YouTube: Agent Skills for Firebase (using Gemini CLI)
