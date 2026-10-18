---
title: "Build Your First Claude Managed Agent: Step-by-Step Guide"
description: "Step-by-step tutorial to create and run your first autonomous AI agent with Claude Managed Agents using the Anthropic API and CLI."
pubDate: 2026-10-18T12:00:00
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "ai", "productivity"]
noindex: false
---

Claude Managed Agents lets you run autonomous agents without managing the loop, sandbox, or event stream yourself. Anthropic handles the infrastructure so you focus on the agent definition and the task.

This guide walks through creating your first agent, setting up a sandbox environment, starting a session, and streaming results. You need an Anthropic Console account and an API key. If you already use the Claude API, the setup feels familiar. For API basics, see our [Claude Haiku 5.5 API setup guide](/blog/claude-haiku-5-5-api-setup-guide/).

## What Claude Managed Agents Provides

An agent combines a model, system prompt, and tools. An environment defines the sandbox where the agent runs. A session is one execution of that agent on a specific task. Events stream updates as the agent works.

You define the agent once. Anthropic provisions the container, runs the tool-calling loop, and returns results. This removes the need to write your own while loop or manage stop reasons.


![Developer writing code on a laptop](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)


## Prerequisites

Create an account at platform.claude.com if you do not have one. Generate an API key under Settings. Install the Anthropic CLI and Python SDK.

On macOS, install the CLI with:

```bash
brew install anthropics/tap/ant
xattr -d com.apple.quarantine "$(brew --prefix)/bin/ant"
ant --version
```

Install the SDK:

```bash
pip install anthropic
export ANTHROPIC_API_KEY="your-api-key-here"
```

The SDK reads the key from the environment. All Managed Agents requests require the managed-agents-2026-04-01 beta header. The SDK sets it automatically.

## Step 1: Create the Agent

An agent is defined in a Markdown file with frontmatter for configuration and a body for the system prompt. Create coding-assistant.md:

```markdown
---
name: Coding Assistant
model: claude-opus-5-5
tools:
  - type: agent_toolset_20260401
---

You are a helpful coding assistant. Write clean, well-documented code.
```

The agent_toolset_20260401 type enables pre-built tools including bash, file operations, and web search. Apply it with the CLI:

```bash
ant apply coding-assistant.md
```

The command prints the agent ID and records it in claude-lock.json. You reference this ID when creating sessions.

You can also create agents through the Console visual interface. It shows the equivalent API request so you can copy the configuration into code later.

## Step 2: Create an Environment

The environment specifies the sandbox. Create environment.yaml:

```yaml
name: quickstart-env
config:
  type: cloud
  networking:
    type: limited
    allow_package_managers: true
```

Limited networking restricts outbound access while allowing package managers. Apply it:

```bash
ant apply environment.yaml
```

You can apply both files in one command: ant apply coding-assistant.md environment.yaml. The environment ID is stored in the lock file.

Cloud environments run on Anthropic infrastructure. Self-hosted options exist if you need more control.


![Team collaborating on a coding project](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)


## Step 3: Start a Session and Send a Task

Use the Python SDK to create a session and stream events. Save this as run_agent.py:

```python
import anthropic

client = anthropic.Anthropic()

# Replace with your agent and environment IDs from the lock file
session = client.beta.sessions.create(
    agent="agent_id_here",
    environment_id="env_id_here",
    title="Quickstart session",
)

print(f"Session ID: {session.id}")

with client.beta.sessions.events.stream(session.id) as stream:
    client.beta.sessions.events.send(
        session.id,
        events=[
            {
                "type": "user.message",
                "content": [
                    {
                        "type": "text",
                        "text": "Create a Python script that generates the first 20 Fibonacci numbers and saves them to fibonacci.txt",
                    },
                ],
            },
        ],
    )

    for event in stream:
        if event.type == "agent.message":
            for block in event.content:
                if block.type == "text":
                    print(block.text, end="")
        elif event.type == "agent.tool_use":
            print(f"\n[Using tool: {event.name}]")
        elif event.type == "session.status_idle":
            print("\n\nAgent finished.")
            break
```

Run it with python run_agent.py. The agent writes the script, executes it in the sandbox, verifies the output, and reports completion.

The stream shows tool calls as they happen. When the agent finishes, it emits a status_idle event.

## Understanding the Event Stream

Events include agent messages, tool uses, and status updates. Your application processes them in real time. This lets you build chat interfaces, progress indicators, or approval gates for sensitive tools.

For production, add error handling and timeouts. Monitor token usage and set budgets on sessions to control costs.

## Tips for Better Agents

Start with a clear system prompt that describes the agent's role and constraints. Test small tasks first before scaling to multi-step workflows.

Use the Console to iterate on prompts and tool selections without writing code. Once the behavior matches your needs, export the configuration.

Add skills or MCP servers for domain-specific capabilities. The agent_toolset covers common needs, but custom tools expand what the agent can do.

Keep prompts under the model's context limits. Claude Opus 5.5 handles long contexts well, but efficient prompts reduce cost and latency.

Review tool outputs carefully. The sandbox isolates execution, yet you should validate results before acting on them.

## Next Steps

Extend the agent with more tools or connect it to external systems via MCP. Schedule recurring sessions for monitoring or reporting tasks.

Explore the official cookbooks for examples like data analysis agents and issue-to-PR workflows. Anthropic also offers a free crash course on building agents with Opus 5.5.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/1Rl3gZrlQJo"
    title="Building your first Claude managed agent"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- Anthropic Claude Platform Docs: Get started with Claude Managed Agents
- Anthropic CLI and SDK documentation
- Official Managed Agents quickstart and cookbooks
