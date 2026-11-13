---
title: "How to Secure AI Agents with Google Agent Anomaly Detection"
description: "Step-by-step guide to monitoring AI agents with Google Agent Anomaly Detection against goal hijack and tool misuse. Private Preview on Gemini Enterprise Agent Platform."
pubDate: 2026-11-13T12:30:00
heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "security", "tutorials"]
noindex: false
---

AI agents now read email, book travel, and move money. Every tool call can pull in text written by someone else. That text can try to steer the agent. OWASP ranks agent goal hijack first in its Top 10 for Agentic Applications (2026). Google’s Agent Anomaly Detection catches many of those cases after they run, without slowing the agent down.

This guide shows what the feature does, how Google tested it, and how to add it to your defense-in-depth setup. Facts come from the November 12, 2026 Google Developers Blog post and the Gemini Enterprise Agent Platform docs.

## What Agent Anomaly Detection does

Agent Anomaly Detection sits on the Gemini Enterprise Agent Platform. It reads traces and logs from agents built with the Agent Development Kit (ADK). Analysis runs asynchronously, so it adds no latency to live responses.

It flags sessions where an agent acts outside its intended boundaries. Findings include severity, a plain-language explanation, and recommended actions. They also appear in Security Command Center.

Google announced it in Private Preview in September 2026. The November 12 post details how it scored on five public benchmarks that Google did not write.

![Abstract digital network representing agent monitoring](https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=800&q=80)

## How Google tested it

Google ran the feature against AgentDojo, InjecAgent, Agent Security Bench, AgentDyn, and AgentHarm. In four benchmarks the harmful instruction hides in data a tool returns. In AgentHarm the user asks for harm directly.

They used an agent built with ADK and gemini-2.5-flash on the benchmarks’ simulated apps. Each agent first completed at least 300 benign sessions so the system could learn normal behavior. In total it scored 1,774 sessions.

The model itself refused about half the harmful instructions it saw. Of the ones it actually carried out, Agent Anomaly Detection flagged 87 percent for review. False-alarm rates on ordinary office tasks stayed between 2 percent and 4 percent. On AgentHarm, where benign tasks look more like the harmful ones, the rate reached 16 percent.

It performed strongest on goal hijack and tool misuse. Poisoned long-term memory was the weak spot: it caught only 4 of 18 such cases.

## Results by benchmark

On carried-out harmful instructions the detection rates were:

- AgentDojo: 85 percent
- InjecAgent: 87 percent
- AgentDyn: 99 percent
- AgentHarm: 81 percent

Across eight of eleven simulated apps it flagged at least 95 percent of carried-out cases. The lowest was AgentDojo’s Slack app at 63 percent, often because the actions looked like normal browsing.

It also flagged many requests the agent refused, especially when the harmful text sat in the user’s own message.

![Security monitoring concept with abstract digital elements](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Build defense in depth

Agent Anomaly Detection does not block actions. It reports what gets through so your team can review it. Google recommends pairing it with other controls:

1. Send complete telemetry. Enable ADK tracing and logging, including prompt and response content.
2. Screen untrusted content. Use a filter such as Model Armor on prompts and tool results.
3. Block risky tool calls before they run. Semantic Governance Policy (in Preview) checks each proposed call against the user’s request and your rules.
4. Require approval for high-impact actions such as payments or outbound email.
5. Limit each agent’s tools and permissions to only what its task needs.
6. Review findings. Route Critical and High severity items to your incident team.

For related secure runtime options, see our guide to the Agent Compute Engine for secure microVMs at `/blog/agent-compute-engine-secure-microvms-guide/`.

## How to request access

Agent Anomaly Detection remains in Private Preview. Prerequisites include ADK Python 1.2 or later (2.1.0 preferred), OpenTelemetry tracing and logging enabled, and logging buckets in the same US multi-region.

To request access, visit the Agent Anomaly Detection overview in the Gemini Enterprise Agent Platform documentation. Once enabled, findings appear under the Security tab and in Security Command Center.

Google is still improving coverage for new agents (which need a few hundred sessions of history), small actions that look normal, and poisoned memory.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/S3e5lB3gRLA"
    title="Securing agents on Gemini Enterprise Agent Platform"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical tips for your agents

Start with agents that already emit full ADK traces. Run a baseline of several hundred normal sessions so the detectors learn expected behavior. Expect more findings at first on agents that use high-impact tools such as terminal commands or file downloads.

Triage by severity and threat category rather than treating every flag as an incident. Combine the reports with pre-execution controls so the system both prevents and detects.

The study used simulated apps and one model. Your false-alarm rate can differ with production traffic. About 6 percent of sessions returned no result; counting those as misses lowers overall rates by 1–2 points.

## Conclusion

Agent Anomaly Detection gives teams an asynchronous audit layer that caught 87 percent of harmful instructions that agents actually executed on public benchmarks. It does not replace least-privilege tools, content filters, or human approval for sensitive actions. Used together, these controls reduce the chance that a goal-hijack or tool-misuse attempt succeeds unnoticed.

Request Private Preview access through the official Gemini Enterprise Agent Platform docs, enable full telemetry, and review findings in Security Command Center. Pair the reports with the other controls listed above for stronger agent security.

## Sources

- Google Developers Blog: How Agent Anomaly Detection scores on benchmarks we didn't write (November 12, 2026)
- Gemini Enterprise Agent Platform documentation: Agent Anomaly Detection overview
- OWASP Top 10 for Agentic Applications (2026)
