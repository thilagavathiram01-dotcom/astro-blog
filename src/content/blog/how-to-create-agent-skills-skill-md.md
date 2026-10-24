---
title: "How to Create Agent Skills with the SKILL.md Format"
description: "Step-by-step guide to writing your first Agent Skill using the open SKILL.md standard now hosted by the Agentic AI Foundation."
pubDate: 2026-10-24T12:00:00
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "developer"]
noindex: false
---

Anthropic donated the Agent Skills open standard to the Agentic AI Foundation on October 22, 2026. A skill is a simple folder with a SKILL.md file that teaches any compatible agent a specific task. More than 70 platforms already support it, including ChatGPT, Cursor, GitHub Copilot, and VS Code. You can write one in minutes and use it across tools.

This guide walks through creating your first skill from scratch. The format stays the same after the donation. Engineers from Anthropic, Google, OpenAI, and others maintain it as individuals under the Linux Foundation group that also hosts the Model Context Protocol.

![Developer writing code on a laptop at a desk](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## What a skill contains

A skill is a folder. Inside it sits a required SKILL.md file. The file starts with YAML frontmatter that lists a name and a description. The rest of the file holds Markdown instructions the agent follows when the task matches.

Optional folders can hold scripts, reference documents, or templates. Agents load only the name and description at startup. They pull the full instructions and any extra files only when needed. This keeps context windows small even when many skills are installed.

Anthropic developed the format while building Claude Code. General agents handled broad work but missed the step-by-step knowledge that real business tasks require. Developers published thousands of skills within weeks of the October 2025 launch. By the time of the donation, one million skills existed and nearly 280 million had been installed.

## Why the foundation move helps

The donation transfers the Agent Skills name, logo, GitHub organization, and agentskills.io domain to the Agentic AI Foundation. You can still use or contribute without joining. The change keeps the standard open and free of single-vendor control.

David Soria Parra and Mahesh Murag serve as lead maintainers. The project has proposed versioned releases, a formal proposal process, and security guidance for people who write or install skills. You can follow updates on the GitHub repository or the project Discord.

If you already use skills with Android tools, the same folder format works with the workflows covered in our [Android CLI agent skills](/blog/android-cli-agent-skills/) guide.

## Step 1: Create the folder

Pick a short name in lowercase letters and hyphens. The folder name must match the name field you will write in the frontmatter. Create the folder and the SKILL.md file inside it.

```bash
mkdir weekly-status
cd weekly-status
touch SKILL.md
```

You can place the folder in a project directory that your agent scans, or in a global skills directory for the tool you use. Check the documentation for Claude Code, Cursor, or your chosen agent for the exact path.

## Step 2: Write the frontmatter

Open SKILL.md and add the required YAML block. The name must match the folder. The description should say what the skill does and when the agent should use it. Agents read the description to decide whether to load the skill.

```markdown
---
name: weekly-status
description: Compiles a weekly status report in the team format. Use when the user asks for a status update, weekly recap, or progress summary.
---
```

Keep the description under 1024 characters. Make the trigger phrases specific so the agent activates the skill on the right requests and ignores it on unrelated ones.

## Step 3: Add the instructions

Below the frontmatter, write clear steps in Markdown. Tell the agent what to check, what format to use, and what to avoid. Short imperative sentences work best.

```markdown
# Weekly Status Report

1. List completed items from the past seven days.
2. Note any blockers or items still in progress.
3. Outline the three highest-priority tasks for the coming week.
4. Use the team heading style: bold section titles and bullet points.
5. Keep the full report under 300 words.
```

You can reference other files in the folder if you add them later. For example, a template.md file could hold the exact heading structure. The agent loads those files only when the instructions call for them.

## Step 4: Test the skill

Install or place the folder where your agent can find it. Then ask for the task in ordinary language. For the example above, type "Write this week’s status report."

Watch whether the agent loads the skill and follows the steps. If it does not trigger, edit the description to include clearer phrases that match how you actually ask. Run the same request again. Adjust the instructions if the output format is wrong.

Test with a second agent that supports the standard. A skill written for Claude Code should also work in Cursor or GitHub Copilot when those tools read the same folder format.

![Person working at a computer with multiple screens](https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80)

## Tips that improve results

Start with a task you already repeat and re-explain. The first version can be short. Add detail only after you see where the agent goes off track.

Write the description for the agent, not for a human reader. Include the exact phrases you use when you request the work. Avoid vague words that could match many different tasks.

Keep instructions focused on the outcome and the order of steps. Do not paste large reference documents into the main file. Put them in a references folder so they load only when needed.

If the skill needs a script, place the script in a scripts folder and tell the agent when to run it. Most simple skills need no code at all.

## Where skills live and how to share them

Different tools look in different directories. Claude Code often uses ~/.claude/skills/ for global skills or a project .claude/skills/ folder. Other agents document their own paths. Once the folder is in the right place, the agent discovers the name and description automatically.

You can share a skill by putting the folder in a Git repository. Others clone it and copy the folder into their skills directory. Public registries also list skills that follow the standard. Because the format is open, the same folder works across the platforms that have adopted it.

The foundation will publish versioned releases and security guidance. Until then, review any skill you install the same way you review other code. Check the scripts it contains and the sources it references.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/fOxC44g8vig"
    title="Claude Agent Skills Explained"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

You can create a working Agent Skill in under ten minutes. Create a folder, write a short SKILL.md with a clear description and ordered steps, and test it with a real request. The open standard now has a neutral home at the Agentic AI Foundation, so the skills you write stay portable as more tools adopt the format.

Start with one repeated task on your team. Once it runs reliably, add a second skill. The same folder structure works whether you use Claude, Cursor, Copilot, or another supported agent.

## Sources

- Anthropic, Donating Agent Skills to the Agentic AI Foundation, October 22, 2026: https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation
- Agentic AI Foundation, Agent Skills: Sharing Team Expertise Across AI Agents, October 22, 2026: https://aaif.io/blog/agent-skills-sharing-team-expertise-across-ai-agents
- Agent Skills specification: https://agentskills.io
- Official Anthropic video, Claude Agent Skills Explained: https://www.youtube.com/watch?v=fOxC44g8vig
