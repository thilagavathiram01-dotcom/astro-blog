---
title: "How to Secure AI Agents with Google Agent Anomaly Detection"
description: "Step-by-step guide to Google Agent Anomaly Detection for monitoring AI agents against goal hijacks and tool misuse with benchmarks."
pubDate: 2026-11-13T12:00:00
heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "security", "tutorials", "ai"]
noindex: false
---

AI agents now read email, book travel, and move money. Every tool call can pull in text written by someone else. Whoever controls that text can try to steer the agent. OWASP ranks agent goal hijack first in its Top 10 for Agentic Applications (2026).

Google’s Agent Anomaly Detection addresses this. It is an asynchronous oversight layer that reads OpenTelemetry traces and logs from agents built with the Agent Development Kit (ADK). It flags sessions where an agent acts outside its intended boundaries. Analysis runs out of band, so it adds no runtime latency.

![Cybersecurity abstract with digital network lines](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80)

## What Agent Anomaly Detection Does

The service uses a multi-layered analysis framework. Lightweight ML detectors first identify outliers. A deeper anomaly analysis then reasons over flagged traces to produce threat verdicts and natural-language explanations. Invocation-level analysis can inspect individual tool calls when needed.

Detectors cover risks aligned with the OWASP agentic Top 10, including tool misuse (ASI02), identity and privilege abuse (ASI03), cascading failures (ASI08), and rogue agents (ASI10). Findings include severity, explanation, and recommended actions. They appear in Security Command Center for centralized triage.

Agent Anomaly Detection entered Private Preview in September 2026 on the Gemini Enterprise Agent Platform. On 12 November 2026, Google published results from five public, non-Google-written agent security benchmarks.

## Benchmark Results from Public Tests

Google ran the tests with agents built in ADK using gemini-2.5-flash on the benchmarks’ simulated apps. Each agent first completed at least 300 benign sessions so the system could learn normal behavior. The five benchmarks were AgentDojo, InjecAgent, Agent Security Bench (ASB), AgentDyn, and AgentHarm. In total the system scored 1,774 sessions.

The model itself resisted about half the harmful instructions it saw. Of the instructions the agent actually carried out, Agent Anomaly Detection flagged 87 percent for post-execution review. By benchmark the rates were 85 percent on AgentDojo, 87 percent on InjecAgent, 99 percent on AgentDyn, and 81 percent on AgentHarm.

False alarms stayed low on ordinary office tasks (2–4 percent) but rose to 16 percent when benign tasks used high-impact tools such as social-media posts or terminal commands. Poisoned long-term memory remains a gap: the system caught only 4 of 18 such cases.

These numbers measure detection of actions that already happened, not prevention. The service reports anomalous sessions; it does not block them.

## Defense-in-Depth Recommendations

Google advises combining preventive controls with Agent Anomaly Detection:

- Send complete telemetry. Enable ADK tracing and logging, including prompt and response content.
- Screen untrusted content. Use a filter such as Model Armor on prompts and tool results.
- Block risky tool calls before they run. Semantic Governance Policy (in Preview) checks each proposed call against the user request and your rules.
- Require human approval for high-impact actions such as payments or outbound email.
- Limit each agent’s tools and permissions to the minimum needed.
- Review findings. Route Critical and High severity items to your incident team.

For related secure runtime options, see the guide on [Agent Compute Engine secure microVMs](/blog/agent-compute-engine-secure-microvms-guide/).

![Developer working on code for AI systems](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Prerequisites and Setup

Agent Anomaly Detection is in Private Preview. Request access via the form linked from the official overview page. Eligible agents become monitored automatically. You then enable them for active analysis, either automatically (when auto-enrollment is on) or manually in the console or via API.

Requirements include:

- Compatible runtime: Agent Runtime (Reasoning Engine), Cloud Run, Google Kubernetes Engine, or other clouds (with additional configuration).
- ADK for Python 2.1.0 or later (2.12.0 or later outside Google Cloud).
- Logging and observability buckets in the same location as your Agent Anomaly Detection scope (US or EU multi-region; global is allowed for US).
- OpenTelemetry tracing and logging enabled through ADK, with prompt and response content captured.
- enable_tracing not set to false.
- Active telemetry data so the system can discover and verify the agent.
- Appropriate reader permissions for regional scanner service accounts, plus Log Analytics and Observability Analytics enabled.

Once opted in, follow the usage instructions in the Agent Anomaly Detection documentation to enable agents and review findings.

## Tips for Production Use

Give new agents a few hundred sessions of history before expecting full coverage. On AgentDyn the detection rate rose from 33 percent with ~220 benign sessions to 99 percent with 360. Expect more initial findings if your agents routinely use high-impact tools; triage by severity and category.

The study used one model and simulated apps. Production false-alarm rates may differ. About 6 percent of sessions returned no result; treating those as misses lowers overall rates by 1–2 points.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/jZXvqEqJT7o"
    title="How to secure your AI Agents: A Technical Deep-dive"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Agent Anomaly Detection gives teams an asynchronous way to catch goal hijacks and tool misuse after they occur. Combined with Model Armor, least-privilege tool design, human approval gates, and Semantic Governance Policy, it forms a practical defense-in-depth layer for production agents. Request Private Preview access, enable complete ADK telemetry, and start reviewing findings in Security Command Center.

## Sources

- How Agent Anomaly Detection scores on benchmarks we didn’t write — Google Developers Blog, 12 November 2026
- Agent Anomaly Detection overview — Google Cloud Documentation
- Agent Anomaly Detection, now in Private Preview — Google Developers Blog, 16 September 2026
- OWASP Top 10 for Agentic Applications (2026)
