---
title: "Create Custom Android Skills for AI Agents"
description: "Step-by-step guide to writing custom SKILL.md files so AI agents follow your team's Android patterns using official Android skills format."
pubDate: 2026-11-09T14:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "ai-tools", "tutorials", "how-to", "developer"]
noindex: false
---

Android Dev Summit 2026 introduced more than 30 official Android skills that give AI agents precise instructions for complex tasks. You can extend the same system with custom skills that encode your team's architecture rules, library choices, and review checklists.

This guide shows how to create a custom SKILL.md that agents in Android Studio, Claude Code, Codex, or Antigravity will automatically load when the task matches.

## Why Custom Skills Matter

Official skills cover common gaps such as edge-to-edge layouts, R8 configuration, and Navigation 3 setup. They do not know your internal module structure, naming conventions, or security requirements.

A custom skill packages those rules once. The agent reads the short description to decide when to activate it, then loads the full instructions only for relevant tasks. This keeps the context window clean while ensuring consistent output across the team.

![Developer workspace with laptop and code on screen](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Skill File Structure

Skills live in a project-level directory. Create `.skills/` or `.agent/skills/` at the root of your Android project. Each skill gets its own folder.

Required structure:

```
.skills/
  team-module-template/
    SKILL.md
    references/
      architecture.md
    scripts/
      create_module.sh
```

The SKILL.md file starts with YAML frontmatter followed by Markdown instructions. Official documentation on [developer.android.com/tools/agents/android-skills](https://developer.android.com/tools/agents/android-skills) specifies the format.

```yaml
---
name: team-module-template
description: Use when creating a new feature module. Enforces package structure, Hilt modules, and Navigation graph registration.
metadata:
  author: your-team
  version: "1.0"
---

# Team Module Template

## Goal
Create a feature module that matches the monorepo conventions.

## Steps
1. Place the module under feature/.
2. Add a Hilt module in di/.
3. Register the NavGraph in the root navigation.
4. Include the module in settings.gradle.kts.

## Verification
- Module builds without errors.
- Navigation graph lists the new destination.
```

Name must be lowercase with hyphens, max 64 characters. Description should clearly state when the agent should activate the skill (max 1024 characters). Keep the body under roughly 20k characters so it fits comfortably in context.

## Step-by-Step: Create Your First Skill

1. In your project root, create the folder `.skills/my-first-skill/`.
2. Add `SKILL.md` with the YAML block and clear instructions.
3. Optionally add a `references/` folder with longer docs or a `scripts/` folder with helper scripts the agent can execute.
4. Commit the skill folder so every developer and CI agent sees the same rules.

Agents discover skills automatically. In Android Studio you can also type `@my-first-skill` to force activation. The Android CLI `android skills add` command installs official skills; custom ones are simply present in the project tree.

## Example: Custom Edge-to-Edge Checklist

Many teams already use the official edge-to-edge skill. You can add a project-specific overlay:

```markdown
---
name: project-edge-to-edge
description: Apply edge-to-edge after the official skill, then verify WindowInsets and status bar contrast for our brand colors.
---

After running the official edge-to-edge skill:
1. Set statusBarStyle to the brand dark color.
2. Confirm no content is hidden under the navigation bar on Pixel and Samsung devices.
3. Add the screenshot test from scripts/capture_insets.sh.
```

This keeps the official guidance intact while layering your constraints.

![Multiple monitors showing code in a developer office](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Tips for Effective Skills

- Write the description so the agent knows exactly when to trigger it. Vague descriptions reduce activation reliability.
- Prefer short, numbered steps over long prose.
- Move lengthy API references into the `references/` folder and link them from SKILL.md.
- Test the skill by prompting the agent with a task that should activate it, then review the output.
- Keep skills under version control. Update the version field when you change instructions.

## Related Resources

If you are new to Android skills, start with the official overview and the guide to [setting up Android skills with the CLI for AI agents](/blog/setup-android-skills-with-cli-for-ai-agents/). Official skills and custom skills use the same activation mechanism.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/8Lmv7LGgL4E"
    title="Android Dev Summit 2026 keynote"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Custom Android skills turn one-off team knowledge into reusable agent instructions. Place a SKILL.md in the project, write a clear description, and agents will load the rules when they are relevant. Combine them with the official skills released at Android Dev Summit 2026 for consistent, high-quality results across your codebase.

## Sources

- [Overview of Android skills](https://developer.android.com/tools/agents/android-skills)
- [Android Dev Summit 2026 keynote](https://www.youtube.com/watch?v=8Lmv7LGgL4E)
- [Android skills GitHub repository](https://github.com/android/skills)
