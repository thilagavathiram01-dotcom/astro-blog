---
title: "How to Use Android Skills with AI Agents"
description: "Install and activate official Android Skills so AI agents follow current platform patterns in Studio or CLI."
pubDate: 2026-11-09T11:00:00
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "android", "tutorials", "how-to", "developer"]
noindex: false
---

Google released more than 30 official Android Skills at Android Dev Summit 2026. These skills ground AI coding agents with current platform guidance so they follow modern Android patterns instead of outdated defaults.

Agents often produce legacy code or miss security and performance rules. Skills package official instructions, scripts, and references that load only when relevant. This keeps context windows smaller and results more consistent.

This guide shows how to install, activate, and create skills for any agent in Android Studio Rabbit 2 or via Android CLI. For related on-device AI work, see our [Android AISeal on-device vault guide](/blog/android-aiseal-on-device-ai-vault/).

## What Android Skills Provide

Skills follow the open Agent Skills standard. Each skill lives in its own directory with a `SKILL.md` file. The file starts with YAML metadata (name, description) followed by Markdown instructions.

Key benefits include:

- Expert grounding on topics models often miss, such as Compose performance, CameraX, or Play policy compliance.
- Repeatable multi-step workflows.
- Bundled resources (scripts, templates, references) so you do not attach files manually.
- Team sharing through project directories.

Google continually evaluates skills against frontier models and updates or retires them as needed.

![Developer working on multiple code screens](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Install Skills with Android CLI

Android CLI is the recommended way to manage skills for any agent. It works in the terminal, CI, or inside Android Studio.

1. Install or update Android CLI if you have not already.
2. List available skills:
   ```
   android skills list
   ```
3. Install a specific skill (it updates if already present):
   ```
   android skills add skill-name
   ```
   Examples include `edge-to-edge`, `agp-9-upgrade`, `compose-performance`, `play-policy-audit`, and `mlkit-agent-api`.
4. Install everything at once when starting a project:
   ```
   android skills add all
   ```

Skills appear under `.skills/` or `.agent/skills/` at the project root. Agents discover them automatically.

In Android Studio Rabbit 2, open the Skills Manager from the Agent panel three-dot menu, type `@` in chat and select Manage skills, or go to Settings > Tools > AI > Skills Manager. Browse, install, or remove skills there.

## Activate and Use a Skill

Agents activate skills on demand based on the description in `SKILL.md`. Prompt for a matching task:

- “Make my app UI edge-to-edge.”
- “Upgrade this project to AGP 9.”
- “Audit Play policy compliance before submission.”

The agent loads the full instructions only when needed. You can also invoke one manually by typing `@skill-name` in the Android Studio chat window.

Example workflow for Compose migration:

1. Install the XML-to-Compose skill.
2. Prompt: “Migrate the settings screen from XML Views to Jetpack Compose using the official skill.”
3. Review the changes. Use AI Change Review (`/review` or from the Git changes window) to flag issues.

Skills reduce token use because agents skip guessing basic Android patterns. Internal testing showed agents completing UI tasks faster and with fewer tokens when given preview and skills tools.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/JMPd2jbQEqo"
    title="Android CLI and skills to improve your development"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

![Laptop displaying code with coffee](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Create a Custom Skill

Package your team’s patterns the same way.

1. Create a directory at the project root: `.skills/my-team-pattern/`.
2. Add `SKILL.md`:

```yaml
---
name: my-team-pattern
description: Apply our standard error-handling and logging pattern for new features.
metadata:
  author: your-team
  version: "1.0"
---

# Instructions

- Always wrap network calls in the TeamResult sealed class.
- Log with the structured logger using the feature tag.
- Add a unit test that covers the error path.

See references/error-handling.md for full examples.
```

Optional subdirectories:

- `scripts/` for runnable helpers.
- `references/` for longer docs.
- `assets/` for templates.

Keep the main body under roughly 10k–20k characters. Point to references for details. Name must be lowercase with hyphens, max 64 characters. Description max 1024 characters.

Commit the skill folder so the whole team gets it. Agents pick it up on the next relevant prompt.

## Practical Tips

- Start with the Android CLI base skill, then add only what you need. Loading dozens of unused skills wastes context.
- Combine skills with Android CLI tools such as `android preview` for Compose screenshots and device streaming for real-device verification.
- Review agent output. Skills improve quality but do not replace human checks, especially for security and Play policy.
- Update skills regularly. Run `android skills add skill-name` again to pull the latest official versions.
- For production apps stay on Gradle/AGP. Skills and Lightbuild are useful for new experiments and agent loops.

## Sources

- [Overview of Android skills](https://developer.android.com/tools/agents/android-skills) — Android Developers
- [What’s new in Android developer tools and performance at Android Dev Summit](https://developer.android.com/blog/posts/android-dev-summit-26-developer-tools-performance) — Android Developers Blog
- [Android CLI and skills to improve your development](https://www.youtube.com/watch?v=JMPd2jbQEqo) — Android Developers YouTube

Agents produce better Android code when they have the current rules instead of guessing. Install a few official skills today and prompt for the next task that usually needs extra guidance.
