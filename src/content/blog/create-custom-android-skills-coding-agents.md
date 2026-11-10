---
title: "How to Create Custom Android Skills for Agents"
description: "Step-by-step guide to building custom Android skills that ground coding agents with your team's workflows and best practices."
pubDate: 2026-11-10T23:00:00
heroImage: "https://images.unsplash.com/photo-1730130054404-c2bd8e7038c2?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "how-to", "ai-tools", "ai"]
noindex: false
---

Android skills give coding agents precise instructions for complex tasks. Official skills cover migrations and performance audits. Custom skills let you encode your team's specific patterns so agents follow them consistently.

This guide shows how to create a custom skill, place it where agents can find it, and activate it in Android Studio or with Android CLI. The approach follows the open Agent Skills standard used by Android Studio Rabbit 2 and Android CLI.

![Developer working at a multi-monitor coding setup](https://images.unsplash.com/photo-1759661990336-51bd4b951fea?auto=format&fit=crop&w=800&q=80)

## Why Custom Skills Matter

Agents already know general Android patterns. They still miss project-specific conventions: naming rules, preferred architectures, or how your team handles feature modules. A custom skill packages those rules once. The agent loads them only when a prompt matches the skill description, keeping the context window clean.

Official Android skills live in a public GitHub repository. You can install them with Android CLI or import them into Android Studio. Custom skills work the same way but stay inside your project or home directory so every teammate gets the same guidance.

## Create the Skill Directory

Agents look for skills in specific folders. At the project root, create either `.agents/skills/` or `.android-studio/skills/`. Older Android Studio versions used `.skills/` or `.agent/skills/`. If you still have skills in those locations, move them when you upgrade to Quail or later.

Inside the skills folder, make a new directory for your skill. The directory name becomes the skill identifier. Use lowercase letters, numbers, and hyphens only. Keep it under 64 characters. Example: `feature-module-setup`.

## Write the SKILL.md File

Every skill needs a `SKILL.md` file (case-sensitive) inside its directory. The file starts with a YAML frontmatter block followed by Markdown instructions.

```markdown
---
name: feature-module-setup
description: Creates a new feature module following team conventions for package structure, Hilt modules, and Navigation 3 routes. Use when the user asks to add a new feature or module.
metadata:
  author: your-team
  version: "1.0"
---

# Feature Module Setup

When creating a new feature module:

1. Place the module under `features/`.
2. Use the package `com.example.app.feature.<name>`.
3. Add a Hilt `@Module` that provides the feature's repository.
4. Register the feature's navigation graph with Navigation 3.
5. Include a basic Compose screen and a ViewModel that uses the team's standard state class.

After scaffolding, run the existing unit tests and confirm the module builds.
```

The `name` field must match the directory name. The `description` field tells the agent when to activate the skill. Write it clearly so the model can match user requests. Aim for the body to stay between 10k and 20k characters. Move long reference material into optional subfolders.

Optional folders inside the skill directory:

- `scripts/` for executable helpers the agent can run.
- `references/` for detailed docs or API notes.
- `assets/` for templates or sample files.

Reference these files with relative paths in the SKILL.md body.

![Laptop showing code on a clean desk](https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=800&q=80)

## Install and Activate the Skill

In Android Studio, the agent discovers skills automatically from the project directories. You can also invoke one manually by typing `@feature-module-setup` in the chat window. Open the Skills Manager from the agent panel menu, by typing `@` and choosing Manage skills, or from Settings > Tools > AI > Skills Manager. Install only the skills you need for the current task.

With Android CLI, list available skills with `android skills list`. Add an official skill with `android skills add skill-name`. Custom project skills are picked up automatically when the CLI runs inside the project root.

To test activation, open the agent window and ask: "Add a new settings feature module." The agent should load your skill and follow the steps you wrote.

## Tips for Effective Skills

- Keep the description specific. Vague descriptions cause the agent to load the skill too often or never.
- Test the skill with both the built-in agent and any Bring Your Own Agent you use. See the [Bring Your Own Agent guide](/blog/android-studio-rabbit-2-bring-your-own-agent-guide/) for setup details.
- Version your skills. Update the metadata version when you change instructions so teammates know what changed.
- Review agent output the same way you review a pull request. Skills improve consistency but do not remove the need for human checks.
- Share skills by committing the `.agents/skills` folder to your repository. Every clone then receives the same guidance.

## Video: Android Skills Overview

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/qZLQVlLgTDU"
    title="What are Android skills and how to use them with AI tools?"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Custom Android skills turn one-off prompting into reusable team knowledge. Create a directory, write a clear SKILL.md, and place it where agents can find it. Agents then apply your conventions only when the task matches, keeping responses focused and consistent.

Start with one high-value workflow—feature scaffolding, permission checks, or release checklists—and expand from there. Official skills handle the platform basics. Your skills handle the rest.

## Sources

- [Overview of Android skills](https://developer.android.com/tools/agents/android-skills) — Android Developers
- [Extend the agent with skills](https://developer.android.com/studio/gemini/skills) — Android Developers
- [Your favorite agents are now integrated in Android Studio](https://developer.android.com/blog/posts/ai-agents-android-studio-integration) — Android Developers Blog
- [What are Android skills and how to use them with AI tools?](https://www.youtube.com/watch?v=qZLQVlLgTDU) — Android Developers
