---
title: "How to Use Antigravity Dynamic Workflows"
description: "Step-by-step guide to /run-workflow in Google Antigravity. Orchestrate parallel and sequential agents with reviewable Python scripts."
pubDate: 2026-11-16T12:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "developer", "google"]
noindex: false
---

Long conversations in coding agents drift. Constraints fade. File paths get invented. Dynamic Workflows in Google Antigravity fix that by turning the plan into a short, reviewable Python script that coordinates many agents.

The feature shipped in Antigravity App 2.32.0 on 13 November 2026. It is available to Google AI Pro and Google AI Ultra subscribers in both the desktop app and the CLI. You start it with `/run-workflow` or by describing the workflow in plain language.

## Why Dynamic Workflows exist

A single agent works well for one focused task. It struggles when the job splits into dozens of independent pieces or staged steps. Context fills with file reads and test logs. The agent loses earlier instructions.

Dynamic Workflows keep the main conversation clean. Each worker agent runs in its own isolated conversation. It returns a structured result that matches a JSON Schema. File reads, searches, and logs stay out of your main context. The script controls order and parallelism, so the flow stays predictable.

You review the script before it runs. If something looks wrong, you deny it and tell the agent what to change. Once a script works, you can save it and re-run the same flow later.

![Laptop displaying code on a desk](https://images.unsplash.com/photo-1756946565798-382eb6bfeda2?auto=format&fit=crop&w=800&q=80)

## How Dynamic Workflows work

Type `/run-workflow` followed by your task, or ask in your own words. The agent reads the built-in run-workflow skill and writes a Python script. Antigravity shows the script and asks you to approve it, unless your permission preset (such as Turbo) already allows it.

The workflow runs in the background. You can keep working in the same conversation. The workflow step shows each named phase, log lines, and agent cards as progress updates. When the script finishes, the main agent receives the logs and structured results and summarizes them for you.

Agents started by the workflow do not see the script or each other. The script must give each agent everything it needs in its prompt and ask for a short, well-defined result.

### Launch in the Antigravity App or CLI

1. Open a project in the Antigravity App or start the CLI inside a Git repository.
2. Type `/run-work` and press Tab to insert the command, then add your task. Example: `/run-workflow Find every TypeScript file changed on this branch, review each one in parallel for missing error handling, and give me a one-line verdict per file.`
3. Review the generated script in the approval prompt. Choose **Yes, allow this time** to run it, or **No** and describe the change you want.
4. Expand the workflow step to follow phases. Click an agent card to open that agent’s conversation, read its prompt, watch tool calls, or approve pending requests.
5. When it finishes, read the main agent’s summary. To stop early, stop the parent conversation. That also stops every running workflow agent.

The same steps work in the CLI. Progress appears in the status bar; use Alt+J to jump to agents waiting for approval.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/B4do6xuIgD4"
    title="The Liftoff Series - Developing with parallel agents"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Example prompts and what the script looks like

Dynamic Workflows work best for independent items, staged phases, or review-and-fix loops. Describe the outcome; the agent writes the script.

**Parallel review of changed files:**
```
/run-workflow List the Python files changed since main, then review each file in parallel for unhandled exceptions using the flash model, and log a one-line verdict per file.
```

**Persistent reviewer plus parallel fixers:**
```
/run-workflow Have a persistent Reviewer agent list the bugs in src/billing, fan out one Fixer agent per bug in parallel, and then ask the same Reviewer to confirm that every bug it found is fixed.
```

**Isolated workspaces for parallel edits:**
```
/run-workflow For each package under packages/, start one agent in an isolated branch workspace to replace the deprecated request() helper with fetchJson(), run npm test in that package, and log a diff summary and the test result.
```

An example script the agent might generate for the first prompt looks like this:

```python
phase("Discover")
files = await agent(
    "List the Python files changed since main. Paths only.",
    schema={"type": "array", "items": {"type": "string"}},
)

phase("Review")
reviews = await parallel(
    files,
    lambda f: agent(
        f"Review {f} for unhandled exceptions. Reply with a one-line verdict.",
        schema={"type": "string"},
        role=f"Review {f}",
        model="flash",
    ),
)
for r in reviews:
    log(r)
```

### Script building blocks

- `phase(name)` starts a named phase that groups later logs and agent cards.
- `log(*args)` adds a line to the current phase and to the result the main agent sees.
- `agent(prompt, schema, role, type_name, workspace, model)` defines an agent. `await agent(...)` runs it once. Keeping the handle lets you call it again for multi-turn work.
- `parallel(items, fn)` runs the function for every item at the same time and preserves order. If one item fails, the others are canceled.
- `pipeline(items, fn)` runs items one at a time.
- `await trajectory(...)` returns earlier steps of the current conversation, optionally filtered.

You can ask for a lighter model such as flash or flash_lite for high-volume checks, the research agent type for read-only work, or `workspace="branch"` so each parallel editor gets its own Git worktree.

![Programmer coding at a desk with several monitors](https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=800&q=80)

## Save and re-run a script

Ask the agent to save a working script to a `.py` file in your workspace. Later run `/run-workflow Run scripts/review-changes.py`. Antigravity still asks you to approve the script each time unless you have chosen to always allow that exact script.

## Permissions and failure behavior

Approving the script covers that exact script. A command-prefix rule cannot cover a Python script. Each workflow agent follows your permission preset and asks for approval in its own conversation. It waits until you answer.

If one item inside `parallel()` fails, Antigravity cancels the remaining items. Stopping the parent conversation stops every running workflow agent.

## When to choose Dynamic Workflows versus other options

Antigravity offers several ways to split work:

| Tool | Best for |
|------|----------|
| Orchestrator | A single conversation where a frontier model plans and a faster model executes |
| Subagents | Delegating one discrete task while you keep working |
| `/swarm` | Agents that must negotiate or review one another’s work on a shared message board |
| Dynamic Workflows | Predictable sequences or independent pieces where you want a reviewable script and structured handoffs |

Use Dynamic Workflows when the flow is known in advance and agents do not need to talk to each other. Use `/swarm` when they must coordinate. See our guide on [using the Orchestrator with Gemini 4 Hydrogen](/blog/how-to-use-orchestrator-google-antigravity-gemini-4-hydrogen/) for the multi-model planning approach, and [teamwork multi-agent research](/blog/how-to-use-antigravity-teamwork-multi-agent-research/) for the shared-board style.

## Tips for better results

- Keep agent prompts short and specific. Give every fact the agent needs; it cannot see the script or other agents.
- Use a JSON Schema that matches the result you actually want (array of strings, one-line verdict, structured object).
- Prefer flash or flash_lite for high-volume parallel checks to save quota.
- Give parallel editors isolated branch workspaces so they do not collide.
- Review the script the first few times. Once you trust the pattern, save it.
- Monitor the Background Tasks panel and agent cards. Expand them to approve requests quickly.

Dynamic Workflows turn multi-step agent work into something you can read, approve, and repeat. Start with a simple parallel review of changed files. Save the script once it behaves the way you want. Then reuse it on the next branch.

## Sources

- [Dynamic Workflows (/run-workflow) | Google Antigravity Docs](https://antigravity.google/docs/dynamic-workflows/)
- [Changelog | Google Antigravity Docs](https://antigravity.google/docs/changelog/) (v2.32.0, 13 November 2026)
- Official announcement post on X by @antigravity, 13 November 2026
