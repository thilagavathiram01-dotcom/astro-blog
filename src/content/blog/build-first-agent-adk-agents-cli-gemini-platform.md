---
title: "How to Build Your First AI Agent with ADK and Agents CLI"
description: "Step-by-step guide to scaffold, evaluate, and deploy a simple agent using ADK and Agents CLI on Gemini Enterprise Agent Platform."
pubDate: 2026-10-19T14:30:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "developer", "google", "how-to"]
noindex: false
---

Building production-ready AI agents used to require heavy custom scaffolding. Google now provides a shorter path through the Agent Development Kit (ADK) and Agents CLI on the Gemini Enterprise Agent Platform.

You describe the agent in plain language to an AI coding tool. The CLI skills handle project structure, evaluation, and Cloud Run deployment. This guide follows the official quickstart for a caveman-style text compressor agent.

For related Google agent access options, see the [Gemini agent getting-started guide](/blog/get-started-google-cloud-gemini-agent/).

## What you need before you start

You need a Google Cloud project with the Agent Platform API enabled. Complete one of the platform quickstarts if your project is not ready yet.

Install an AI-powered development tool that can call skills. Supported options include Antigravity, Gemini CLI, Claude Code, or Codex. You also need the uv Python package installer.

The only command you run yourself is the one-time Agents CLI setup. Everything else happens through natural-language prompts to your coding tool.

![Developer working on an AI coding setup](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Set up Agents CLI

Install uv from the official Astral guide if you do not already have it.

Run the setup once:

```bash
uvx google-agents-cli setup
```

Open your AI development tool. From this point, you only give it instructions. The tool activates the correct CLI skills for scaffolding, code generation, evaluation, and deployment.

## Scaffold the project

Tell your AI tool:

```
Use agents-cli to build an agent that compresses verbose text into concise, caveman-style summaries.
```

The tool asks clarifying questions about deployment target and safety constraints. It writes a DESIGN_SPEC.md file, then runs:

```bash
agents-cli create caveman-agent --prototype --yes
cd caveman-agent && agents-cli install
```

This creates the project structure with boilerplate agent code, tests, and evaluation sets.

## Build the agent logic

Your tool edits `app/agent.py` and replaces the default agent with the compressor. A typical definition looks like this:

```python
root_agent = Agent(
   name="caveman_agent",
   model=Gemini(model="gemini-3.5-flash"),
   instruction="""You are a text compressor. Convert verbose input text into short, simple summaries with a caveman-like tone. Rules:
   - Omit articles, filler words, and politeness.
   - Use short sentences and simple words.
   - Preserve technical terms.
   - The tone should be abrupt and funny, but the core meaning must be retained.

   Example input:  "I would like to deploy the application to production environment."
   Example output: "Me deploy. Production. Now."
   """,
)
```

It then runs a quick local test:

```bash
agents-cli run "Please help me understand the deployment options available for my project"
```

Expected style of output: short, direct phrases that keep the technical meaning.

## Evaluate the agent

Prompt your tool:

```
Write evaluations for the caveman agent and run them.
```

It creates an evalset covering compression quality, technical term preservation, and tone. It configures LLM-as-judge criteria and runs:

```bash
agents-cli eval run
```

If a case fails, give corrective feedback such as “The response to the greeting test is too polite. Make it more brusque.” The tool updates the instructions and re-runs the evaluation until the quality bar is met.

![Cloud servers supporting agent deployment](https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80)

## Deploy to Cloud Run

Instruct the tool:

```
Deploy this agent to Cloud Run.
```

It adds the deployment configuration and runs the deploy command. The output includes the service URL you use to call the agent.

Cloud Trace is enabled by default. Open the Cloud Trace explorer in the Google Cloud console and send requests to see spans for LLM calls and tool executions.

For deeper observability, prompt:

```
Set up observability infrastructure for my agent.
```

The tool provisions a service account, Cloud Storage bucket, and BigQuery dataset and wires them to the deployed service.

## Tips for better results

- Start with a narrow, well-defined task. The caveman compressor is simple enough to evaluate quickly yet shows the full lifecycle.
- Review the DESIGN_SPEC.md and the generated instructions before the first evaluation run.
- Keep safety constraints explicit when you scaffold. The CLI skills respect the constraints you state.
- After a successful deploy, add tools one at a time. Useful next prompts include integrating Google Search or building a multi-agent system with the adk_a2a template.
- Check Cloud Trace after every deployment change so you can see exactly where latency or failures occur.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/44C8u0CDtSo"
    title="Getting started with Agent Development Kit"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

ADK plus Agents CLI turns an idea into a tested, deployed agent without manual boilerplate. You stay in control of the requirements while the skills handle project structure, evaluation, and Cloud Run packaging.

Once the caveman compressor is running, extend it with tools or turn it into a multi-agent workflow using the same prompt-driven process.

## Sources

- [Build an agent with ADK and Agents CLI in Agent Platform](https://docs.cloud.google.com/gemini-enterprise-agent-platform/agents/quickstart-adk) (Google Cloud Documentation, updated 2026-10-16)
- [Agent Development Kit](https://adk.dev/)
- [Agents CLI](https://github.com/google/agents-cli)
- [Gemini Enterprise Agent Platform overview](https://docs.cloud.google.com/gemini-enterprise-agent-platform)
