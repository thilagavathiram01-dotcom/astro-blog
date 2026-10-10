---
title: "Set Up Claude Managed Agents Dynamic Workflows"
description: "Enable Claude Managed Agents dynamic workflows with multiagent_20261001. Run up to 1,000 agents for audits and research in beta."
pubDate: 2026-10-10T22:00:00
heroImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "ai"]
noindex: false
---

Anthropic added dynamic workflows to Claude Managed Agents on October 9, 2026, as a public beta. A lead agent now writes a program that runs many agents in phases on Anthropic’s servers and combines their results.

This fits large jobs such as codebase audits, document reviews, migrations, and deep research. A single workflow run can start up to 1,000 agents over its lifetime, with up to 64 working at once.

![Developers coordinating AI agent workflows on multiple screens](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## What Dynamic Workflows Do

Managed Agents already support subagents that the lead agent calls and follows up with. Dynamic workflows differ: the lead agent writes a workflow program. The server executes it in the background as one run. Results pass programmatically between agents, so the main session stays free for user chat and progress checks.

You enable this by setting the agent’s multiagent field to type multiagent_20261001. Workflows are on by default with this type. Subagents and an optional advisor model can run alongside them.

Anthropic tested the feature by hiding 70 bugs in a 116,000-line codebase. A single agent found 14 to 27 bugs per run. The dynamic workflow found 66 in each of three runs.

## Requirements Before You Start

You need a Claude API key with access to Managed Agents. All requests use the beta header managed-agents-2026-04-01. The SDK sets this automatically.

Create an agent and an environment first. Sessions run against both. Set a session budget so token spend from many agents stays capped.

For high-volume sub-tasks inside a workflow, consider routing to Claude Haiku 5.5. See the existing guide on [Claude Haiku 5.5 API setup](/blog/claude-haiku-5-5-api-setup-guide/).

## Enable Dynamic Workflows on an Agent

Define or update the agent with the multiagent block. The minimal form turns on workflows (and subagents by default):

```json
{
  "multiagent": { "type": "multiagent_20261001" }
}
```

To restrict which agents a workflow can use, list predefined agents and disable inline ones:

```json
{
  "multiagent": {
    "type": "multiagent_20261001",
    "workflows": {
      "type": "enabled",
      "inline_agents": { "type": "disabled" },
      "predefined_agents": [
        { "type": "agent", "id": "agent_01Lm4cV8yQ2tNs7XbKdR5h", "version": 2 }
      ]
    }
  }
}
```

Predefined agents keep their own model, system prompt, tools, and skills. Inline agents inherit from the parent or receive a system prompt written by the workflow. Lists are separate for subagents and workflows. Pin versions so later updates to a referenced agent do not change behavior mid-run.

Tell the agent in its system prompt when to start a workflow. Examples include work with many independent pieces, parallel audits, or long tasks that should finish sooner. The agent decides; no separate API call starts a run.

![Abstract network representing coordinated AI agents processing code](https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80)

## Run a Workflow and Follow Progress

Start a session as usual and send a user message that describes the large task. The agent may write and launch a workflow. The server runs it in the background. You can list phases, stream events, and read individual threads.

Limits as of the October 9 beta:

- Up to 1,000 agents started over a run’s life
- Up to 64 concurrent threads (not guaranteed)
- Default lifetime of 24 hours (the agent can set shorter)
- Up to 10 open runs per session by default
- Up to 20 predefined agents listed for a workflow

A run has no separate price. Tokens used by its agents bill at each model’s rates. Managed Agents also charges session runtime. Set the session budget before large runs.

Workflow threads are archived at the end of the run. You cannot send follow-up messages into them the way you can with persistent subagent threads.

## Tips for Reliable Results

Start small. Anthropic notes that workflows can use many tokens. Test with a narrow scope before scaling to hundreds of documents or files.

Use predefined specialist agents for consistent behavior. Give each a focused system prompt and only the tools it needs.

Monitor in the Claude Console. Every step is recorded so you can see which agent did what and in what order.

Combine with Haiku 5.5 for the high-volume parallel steps and keep Sonnet or Opus for the lead agent’s planning and final synthesis.

## Conclusion

Dynamic workflows move multi-agent orchestration onto Anthropic’s servers. The lead agent writes the program, the platform runs the phases, and you receive a combined result. The beta requires the managed-agents-2026-04-01 header and the multiagent_20261001 type.

For the latest limits and code samples, check the official multiagent orchestration docs on the Claude Platform.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/jWWsLe4Gh5Y"
    title="Build a production-ready agent with Claude Managed Agents"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- Claude Platform Docs: Multiagent orchestration
- Anthropic announcement of dynamic workflows in Managed Agents (October 9, 2026)
- Internal test results reported by The Decoder (70 bugs, 116k-line codebase)
