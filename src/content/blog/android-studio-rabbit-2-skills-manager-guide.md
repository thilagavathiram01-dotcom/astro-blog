---
title: "Install and Use Android Skills in Android Studio Rabbit 2"
description: "Step-by-step guide to discover, install, and invoke Android skills in Android Studio Rabbit 2 for better agent workflows and official best practices."
pubDate: 2026-10-29T06:35:00
heroImage: "https://images.unsplash.com/photo-1780253256194-34e5867ccb8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "ai-tools", "developer"]
noindex: false
---

Android Studio Rabbit 2 is stable. One useful addition is the built-in skills manager. It lets you discover, install, and control Android skills that give your coding agent official guidance on common workflows.

Skills are modular Markdown files. They supply up-to-date instructions for tasks where models often lag, such as XML-to-Compose migrations or AGP upgrades. Android Studio loads Android skills and Firebase skills by default. You decide which ones the agent can use.


![Developer working on code in a dark workspace](https://images.unsplash.com/photo-1730130054404-c2bd8e7038c2?auto=format&fit=crop&w=800&q=80)


## Why skills matter for agents

Agents work better when they receive precise, current instructions instead of relying only on training data. Android skills follow the open Agent Skills standard. They activate automatically when your prompt matches the skill description, or you can call them with @skill-name.

This keeps the context window clean. The model pulls in full instructions only when needed. You get fewer generic answers and more code that follows current Android practices.

If you already connect external agents through Bring Your Own Agent, skills work with them too. See the earlier guide on [Bring Your Own Agent in Android Studio Rabbit 2](/blog/android-studio-byoa-agents-rabbit-2/).

## Open the skills manager

You can reach the skills manager in three ways inside Android Studio Rabbit 2:

1. Open the Agent panel. Click the three-dot menu and choose Manage Agent Skills.
2. Type @ in the agent chat box, then click Manage skills.
3. Go to Settings > Tools > AI > Skills Manager.

The manager shows available skills. Android Studio ships with a set of Android skills and Firebase agent skills already loaded. Examples include migrating legacy XML Views to Jetpack Compose, upgrading to AGP 9, implementing adaptive layouts, and integrating CameraX or Firebase services.


![Laptop showing code next to a phone on a desk](https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=800&q=80)


## Install and manage skills

From the skills manager you can enable or disable individual skills. This gives granular control over what guidance the agent receives.

You can also install additional skills. Download them from the official Android skills GitHub repository. Place the skill folder in `.agents/skills` or `.android-studio/skills` at your project root or in your home directory. Android Studio picks them up on the next agent session.

For command-line use with any agent, the Android CLI provides a simpler path:

- Run `android skills list` to see available skills.
- Run `android skills add skill-name` to install one.
- Run `android skills add --all` to install every official skill.

The CLI installs skills into the directories expected by supported agents. Update with `android skills update`.

## Invoke a skill

The agent activates relevant skills automatically. Prompt it with a task that matches the skill, for example “Make my app UI edge-to-edge” or “Upgrade this project to AGP 9.”

To force a specific skill, type `@` followed by the skill name in the chat input. The agent loads the full instructions and resources for that skill before responding.

You can create your own skills. Add a directory under `.agents/skills` or `.android-studio/skills` and put a `SKILL.md` file inside. Include a name and description. The agent will discover it the same way as official skills. For the full format, follow the Agent Skills open standard.

## Tips for better results

Keep only the skills you need enabled. Too many active skills can dilute focus. Test a new skill on a small, isolated change first. Check the agent’s output against the skill’s expected behavior.

Combine skills with the built-in agent tools. The agent can still use the emulator, Compose previews, build diagnostics, and Logcat while following skill instructions.

If you use an external agent through Bring Your Own Agent, install skills via the CLI so they are available to that agent as well.

## Watch the official explanation

Android Developers published a clear overview of skills and how they work with AI tools:

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/qZLQVlLgTDU"
    title="What are Android skills and how to use them with AI tools?"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

The skills manager in Android Studio Rabbit 2 makes official Android guidance easy to apply. Discover the built-in skills, install extras from the GitHub repository or CLI, and invoke them by prompt or @ mention. Your agent produces more reliable code on migrations, upgrades, and other specialized tasks.

Start with one skill that matches a change you need to make today. Enable it, run the task, and review the result. You will see the difference in the first session.

## Sources

- Android Developers Blog: Your favorite agents are now integrated in Android Studio, 28 October 2026, https://developer.android.com/blog/posts/ai-agents-android-studio-integration
- Android skills overview, https://developer.android.com/tools/agents/android-skills
- Extend Agent Mode with skills, https://developer.android.com/studio/gemini/skills
- Android skills GitHub repository, https://github.com/android/skills
- Android Developers YouTube: What are Android skills and how to use them with AI tools?, https://www.youtube.com/watch?v=qZLQVlLgTDU
