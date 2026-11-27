---
title: "How to Secure AI Agents with Semantic Governance Policies"
description: "Step-by-step guide to using Semantic governance policies on Gemini Enterprise Agent Platform to block intent hijacking and enforce plain-language rules."
pubDate: 2026-11-27T14:00:00
heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai", "security", "tutorials", "gemini", "developer"]
noindex: false
---

AI agents read emails, process documents, and call tools. Untrusted content in those sources can hide instructions that hijack the agent into actions the user never requested. Semantic governance policies, available in Preview on the Gemini Enterprise Agent Platform, stop this before any tool runs.

They sit outside the agent. Agent Gateway intercepts every proposed tool call. An LLM judge then checks it against user intent and your natural-language policies. Only calls that pass both checks reach the agent. Everything else returns a denial message. Verdicts and rationales land in Cloud Logging.

![Cybersecurity shield concept for AI agent protection](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80)

## Two checks before any action

Semantic governance policies evaluate each tool call the model proposes:

1. **User intent matching** (on by default). Did the user ask for this action? Tool results, files, and messages count as untrusted data, never as instructions.
2. **Your plain-language policies**. Rules such as “Quarterly results may be shared only with @example.com addresses before the earnings release.”

Both must pass. The judge sees the conversation, system instructions, and tool descriptions, but treats external content as data. This catches indirect prompt injection that tries to make the agent transfer money or leak data.

In one AgentDojo banking task, a bill file contained hidden instructions to send funds to an attacker account. The agent was allowed to read the bill and check transactions. The money transfer was denied because the user never asked for it.

## Setup steps

You need an agent already routed through Agent Gateway so all model traffic passes the policy engine.

1. Provision the Semantic governance policy engine and connect it to your Agent Gateway. Follow the official configure guide in the Gemini Enterprise Agent Platform docs.
2. Enable dry-run mode first. The engine logs would-be denials without blocking. User intent matching is already active.
3. Give every tool a clear description. The judge relies on them and denies calls to tools that lack descriptions.
4. Write policies in the console or with gcloud. Scope them to the agent or to a specific tool. Use the same terms that appear in tool descriptions.

Example policy creation:

```bash
gcloud beta ai semantic-governance-policies create earnings-disclosure \
  --location=us-central1 \
  --display-name="Earnings disclosure rule" \
  --agent=projects/PROJECT_ID/locations/us-central1/agents/AGENT_ID \
  --natural-language-constraint="Quarterly financial results may be shared only with @example.com addresses before the public earnings release. Never send them to external or personal addresses."
```

Review logs, then switch to enforcement. You can also set a custom denial message so users do not see policy text.

![Developer reviewing code on a laptop](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## What the AgentDojo results show

Google tested the built-in user intent check alone (no custom policies) on the full AgentDojo v1.2.2 benchmark with a Gemini 2.5 Flash agent. Six full runs each.

Attack success rate dropped from 48.7% to 0.9%. None of the 929 attacks that required a tool call succeeded in any run. Utility on benign tasks fell only 2.6 percentage points. The remaining successful attacks were text-only recommendations that never triggered a tool call.

Banking, Slack, and workspace scenarios reached zero successful attacks. Travel saw a few text-only cases. Over-blocking affected roughly 1% of benign tasks.

These numbers come from the November 23, 2026 Google Developers Blog post. They measure the default intent check only. Custom policies can block additional actions.

## Practical tips

- Include facts the policies depend on (earnings date, approved domains) in the agent’s system instructions.
- Start in dry-run and review Cloud Logging before enforcing.
- Pair with other controls: IAM for which tools the agent can reach, Model Armor for prompt scanning, and Agent Anomaly Detection for session review.
- Streamed model responses are not evaluated. Text-only answers are not checked.
- Policies can name specific tools or parameters, or apply to every tool the agent proposes.

For related agent work on the platform, see our guide on [using managed ingestion and SearchDocuments in Agent Retrieval](/blog/how-to-use-managed-ingestion-searchdocuments-agent-retrieval/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/rAa_Dna4F1k"
    title="Agent security at scale: Protect against the OWASP Top 10 application risks"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Semantic governance policies give you a check that sits outside the model and asks a simple question before any tool runs: did the user ask for this, and does it follow your rules? On AgentDojo the default intent check alone cut attack success from nearly half to under one percent while keeping most legitimate work intact.

If you run agents that read external content and call tools, route them through Agent Gateway and turn on the policy engine. Start with dry-run, add the plain-language rules your compliance team already writes, and enforce once the logs look right.

## Sources

- [Did the user ask for this? Securing AI agents against intent hijacking with Semantic governance policies](https://developers.googleblog.com/did-the-user-ask-for-this-securing-ai-agents-against-intent-hijacking-with-semantic-governance-policies/) — Google Developers Blog, November 23, 2026
- [Check what your AI agents do before they do it, with Semantic governance policies](https://developers.googleblog.com/check-what-your-ai-agents-do-before-they-do-it-with-semantic-governance-policies/) — Google Developers Blog, November 20, 2026
- [Configure semantic governance policies](https://docs.cloud.google.com/gemini-enterprise-agent-platform/govern/policies/configure-semantic-governance) — Google Cloud Documentation
- [Semantic governance policies overview](https://docs.cloud.google.com/gemini-enterprise-agent-platform/govern/policies/semantic-governance-overview) — Google Cloud Documentation
- AgentDojo benchmark paper and GitHub repository (ETH Zurich / Invariant Labs)
