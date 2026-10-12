---
title: "Get Started with Google Antigravity and Gemini 3.8 Flash"
description: "Step-by-step guide to install Google Antigravity and use Gemini 3.8 Flash for agentic coding, planning, and multi-step tasks."
pubDate: 2026-10-12T11:30:00
heroImage: "https://images.unsplash.com/photo-nPJFU_zTVhA?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini", "developer"]
noindex: false
---

Google Antigravity puts agents at the center of software development. Instead of typing every line yourself, you describe a task and the agent plans, writes, tests, and iterates. Gemini 3.8 Flash powers the default experience as a fast, capable workhorse model for long-horizon coding work.

This guide shows how to download Antigravity, create a project, select Gemini 3.8 Flash, and run your first agentic task. You need a Google account. The desktop app runs on macOS, Windows, and Linux.

## What is Google Antigravity?

Antigravity is Google’s agent-first development platform. The 2.0 desktop app acts as a home for agent conversations, artifacts, and multi-agent work. Agents can use the editor, terminal, and browser. They plan complex tasks, execute them, and verify results.

Gemini 3.8 Flash is the default model in many Antigravity workflows. It delivers strong reasoning and coding performance at Flash-level speed and cost. You can adjust thinking levels for different tasks. The same harness appears in the managed Antigravity agent available through the Gemini API and Google AI Studio.

For more on the model itself, see our guide to the [Gemini 3.8 Flash API](/blog/gemini-3-8-flash-api-guide/).

![Developer working on multiple screens with code](https://images.unsplash.com/photo-bWVBCDtTRJI?auto=format&fit=crop&w=800&q=80)

## Download and install Antigravity

1. Visit the official Antigravity site at antigravity.google.
2. Choose the download for your operating system.
3. Install the application and launch it.
4. Sign in with your Google account on first launch.

The app opens to a project-centric view. Projects define the folders and repositories an agent can access. You can add multiple folders so one agent sees a full frontend and backend setup.

## Create a project and select the model

Click New Project. Name it and choose or create a folder on your machine. The agent will operate inside this workspace.

Open the agent panel (usually Cmd/Ctrl + Shift + A or a dedicated sidebar). In the model selector, choose Gemini 3.8 Flash. You can set a thinking level if the interface offers low, medium, or high options. Medium works well for most coding tasks and balances speed with depth.

Start with a small, verifiable task so you can check the output easily. Example prompt:

“Add a /health endpoint to this simple Flask or Express app that returns HTTP 200 and the JSON body {\"status\": \"ok\"}. Write a basic test if none exists.”

The agent produces a plan, then executes it. Review the plan before it runs commands if review mode is available.

![Laptop showing code on a clean desk](https://images.unsplash.com/photo-oYzjGQ7LCVE?auto=format&fit=crop&w=800&q=80)

## Run an agentic coding task

Once the agent starts, it typically:

- Reads relevant files and the project structure.
- Outlines steps in an implementation plan.
- Writes or edits code.
- Runs terminal commands to install packages, start a server, or execute tests.
- Checks results and iterates if something fails.

You stay in control. Approve or reject proposed commands. Use @ mentions to point the agent at specific files. Attach screenshots if you want visual feedback on UI changes.

For harder problems, some versions support multi-agent workflows or a boost-style command that splits work across sub-agents for planning, implementation, and verification. Check the current interface for slash commands or Teamwork options.

After the task finishes, review the diff, run the app yourself, and commit the changes if they look correct.

## Tips for better results

Keep tasks scoped. “Build a full SaaS dashboard” works better as a series of smaller prompts than one giant request.

Provide context. Mention the tech stack, constraints, and existing patterns in the codebase.

Verify early. Ask the agent to write a test or open the result in the built-in browser view so you see proof it works.

Watch token usage. Gemini 3.8 Flash is efficient, but long sessions with high thinking levels consume more of your quota or credits.

Use the official Antigravity agent in the Gemini API for automated pipelines. The managed agent runs in a remote Linux sandbox, executes code, manages files, searches the web, and returns results. See the Interactions API docs for the agent string antigravity-preview-09-2026 and how to set agent_config.

## Watch a beginner walkthrough

The Google Antigravity channel published a clear introduction to the 2.0 experience.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/6C0FjHoN3qE"
    title="Google Antigravity 2.0 Beginner's Guide"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Google Antigravity with Gemini 3.8 Flash lets you hand routine and moderately complex coding work to an agent while you focus on architecture and review. Start with the desktop app, create a small project, and run a single verifiable task. Once comfortable, explore multi-agent features or call the same agent through the Gemini API.

Official sources for the latest details remain antigravity.google and the Gemini API documentation on ai.google.dev.

## Sources

- Google AI for Developers: Antigravity agent documentation (ai.google.dev)
- Google Antigravity official site (antigravity.google)
- Google I/O 2026 announcements on agentic tools
