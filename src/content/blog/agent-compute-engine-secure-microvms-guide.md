---
title: "Agent Compute Engine: Secure microVMs for AI Agents"
description: "Learn how Google Cloud Agent Compute Engine gives every AI agent its own hardware-isolated microVM with zero credentials inside."
pubDate: 2026-11-01T12:00:00
heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai", "google", "tutorials", "developer"]
noindex: false
---

Google Cloud announced Agent Compute Engine on 22 October 2026 at AGNTCon + MCPCon. The service already powers Gemini’s work agents inside Google and opens to customers in preview in the coming months.

It solves a core problem: traditional VMs are too slow to start and stop for agent loops, while containers share a kernel and lack strong isolation when agents run untrusted code. Agent Compute Engine delivers hardware-isolated microVMs that boot fast, pause when idle, and hold no long-lived credentials.

![Rows of servers in a modern data center](https://images.unsplash.com/photo-1680992046626-418f7e910589?auto=format&fit=crop&w=800&q=80)

## Why agents need a new compute form factor

Agents write and execute code, drive browsers, call tools, and iterate for minutes or days. They start, pause while waiting for a model response or human input, then resume. Provisioning a full VM for every pause wastes resources. Sharing a container kernel risks escape if the agent processes a malicious prompt or tool output.

Google’s Gemini team needed every user to get a personal agent with its own filesystem, runtimes, and browser. The business team needed agents that could reach private enterprise data safely. Both split the agent into a trusted harness (the brain that calls the model) and a sandbox (the hands that execute commands).

Agent Compute Engine supplies that sandbox as a persistent, hardware-isolated microVM.

## Core design of Agent Compute Engine

Each agent session gets its own microVM running on Cloud Hypervisor. The microVM has its own guest kernel and root access. Hosts use Google’s Titanium infrastructure processing unit so cryptographic keys for attestation stay outside the guest.

Key properties Google published:

- Rapid boot and sub-second checkpoint/restore so idle microVMs consume near-zero active resources.
- Copy-on-write memory sharing across a common OS template for density.
- Dedicated Hyperdisk for persistent workspaces and agent context across sessions.
- Zero secrets inside the guest: no OAuth tokens, API keys, or service-account credentials in memory or on disk. No access to the instance metadata server.
- All network traffic flows through a mediated proxy; the microVM has no standard network interface.

When an agent finishes a tool call and enters its thinking phase, the microVM signals idle. The host checkpoints it. On the next step the snapshot restores quickly.

## Security model: assume the sandbox is compromised

Google’s design starts from one rule: assume an attacker controls everything inside the sandbox. A malicious email or tool response might instruct the model to exfiltrate secrets. Because the sandbox holds none, the attacker finds nothing usable.

Credentials are injected outside the microVM by Agent Gateway after it validates the session’s mTLS identity and egress policy. Each microVM receives only a short-lived, session-scoped SPIFFE certificate via a dedicated local listener.

The harness (brain) runs completely outside the sandbox. Every tool call is an explicit dispatch with a deterministic audit trail. Hosts are stateless appliances with verified boot via Titan silicon.

## Agent Substrate: the open-source Kubernetes sibling

For teams that already run Kubernetes, Google released Agent Substrate on GKE. It is open source, runs on any Kubernetes cluster, and applies the same agent-first design: hardware or gVisor isolation, zero-trust networking, and snapshot/resume of idle agents.

Google reported benchmarks for Agent Substrate: up to 10x density versus traditional compute, and in a test of 200,000 agents it sustained 500 activations per second with under 500 ms suspend/resume latency.

Agent Compute Engine is the managed Google Cloud service. Agent Substrate is the portable runtime you can customize today.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/VzHRpBLYxFA"
    title="Google unveils Agent Compute Engine to sandbox AI agents"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## How to prepare for preview access

Preview availability is planned for the coming months. Google has not published pricing or a fixed date. You can register interest through the form linked from the official announcement.

While you wait:

1. Review the official introduction and deep-dive posts on the Google Cloud blog.
2. Experiment with Agent Substrate on a GKE cluster if you need the architecture now.
3. Design your agent so the harness stays outside the execution environment. Keep credentials in a gateway or identity broker, never inside the sandbox.
4. Map your tool-calling surface. Agents that run code or browse need isolation; agents that only call managed APIs may not.
5. Plan governance with Agent Gateway, Agent Registry, and Agent Identity if you already use Gemini for business.

## Practical tips for production agents

Treat the sandbox as untrusted by default. Log every harness-to-sandbox dispatch. Use short-lived identities and policy-driven egress.

Snapshot environments once and fork them for evaluations or reinforcement-learning sweeps. This is one of the workloads Agent Compute Engine was built to support.

If you are building Android agents, combine this cloud runtime with on-device patterns. Our guide to [Android CLI agent skills](/blog/android-cli-agent-skills/) shows how agents gain structured Android expertise.

Monitor idle time. The economic advantage appears when most agents spend the majority of their lifecycle paused.

## What is still unknown

Google has not released boot-time numbers, density figures, or pricing for Agent Compute Engine itself. Preview timing is described only as “coming months.” The open-source Agent Substrate numbers are the closest public performance data.

Broader governance features—token and cost controls, model routing, endpoint governance for local coding agents—are also arriving in preview.

## Conclusion

Agent Compute Engine is the infrastructure layer Google built after running Gemini agents at planet scale. It gives each agent a fast, persistent, hardware-isolated computer that holds no credentials. For developers shipping agents that execute code or browse, this form factor addresses the speed-versus-isolation trade-off that standard VMs and containers leave unresolved.

Register for the preview, prototype with Agent Substrate if you need something today, and design your harness and sandbox boundary now. The agents that ship cleanly on this runtime will be the ones whose security model was decided before the first prompt injection arrived.

## Sources

- Google Cloud Blog: Introducing Agent Compute Engine and expanding agent governance (22 October 2026)
- Google Cloud Blog: Inside Agent Compute Engine: Building the compute foundation for the agentic era (22 October 2026)
- Google Cloud documentation references for Agent Gateway, Agent Registry, Agent Identity, and Titanium architecture
