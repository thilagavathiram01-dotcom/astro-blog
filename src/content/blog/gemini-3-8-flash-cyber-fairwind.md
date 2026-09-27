---
title: "How to Apply for Gemini 3.8 Flash Cyber via Fairwind"
description: "Apply to Google’s Fairwind Program, request Gemini 3.8 Flash Cyber, and use CodeMender with public models while you wait."
pubDate: 2026-09-20T14:00:00
heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai", "gemini", "security", "developer"]
noindex: false
---

Google split Gemini 3.8 Flash into two products on 2 September 2026. The public model is a general coding and agent workhorse. The second model, **Gemini 3.8 Flash Cyber**, is a defender-only variant for vulnerability discovery and automated patching.

You cannot pick Cyber from the open Gemini API catalog. Access sits behind the **Fairwind Program**, a limited track for governments, critical-infrastructure operators, and trusted security partners. This guide covers who qualifies, how to apply, what Google published about the model, and what you can ship today without an allowlist.

This is a product and access walkthrough from official Google posts. It is not a vulnerability research tutorial.



![Server racks in a data center used for enterprise security work](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80)



## What Gemini 3.8 Flash Cyber is

Google describes Gemini 3.8 Flash Cyber as a post-training version of Gemini 3.8 Flash tailored for cybersecurity. The model ID on Gemini Enterprise Agent Platform is `gemini-3.8-flash-cyber`.

Official specs published for the enterprise surface include:

- Text in and out; image, audio, and video as input only
- 1,048,576-token context window
- 65,536 maximum output tokens
- Thinking, system instructions, structured output, and context caching supported
- Gemini Live API not supported

Google says the model is generally available **behind an allowlist**. Request access through your Google team or apply on the [Fairwind Program](https://deepmind.google/fairwind-program/) site.

The public sibling, Gemini 3.8 Flash, stays on the open developer path at the introductory price of $0.75 per million input tokens and $3.75 per million output tokens through 31 December 2026. That model is the right default for coding agents. Cyber is the extra, gated stack.

## Why Google gates the cyber variant

Google is explicit about the safety split. Standard 3.8 Flash ships with safeguards against misuse in CBRN domains and cyber offense, under the Frontier Safety Framework. Flash Cyber ships with a **more permissive set of mitigations for cybersecurity**, so it is limited to trusted defenders who need a broader set of cyber capabilities.

Google also states that it invested in vulnerability **fixing** from the start and prioritized that work over offensive capabilities such as exploitation. Treat that as the product intent: discovery plus patching inside a vetted org, not a public red-team toy.

Fairwind partners must agree to operational standards. Google lists limits such as restricting use to employees on internal cybersecurity, incident response, or penetration testing teams, plus multi-factor authentication.

## Who Fairwind is for

Google is staging first access to groups it calls most critical to resilience:

- Governments and national cyber authorities
- Critical infrastructure operators in healthcare, telecommunications, energy, and finance
- Core technology platforms that underpin many downstream products

DeepMind says the program already works with **over 650 partners** globally. Featured quotes on the Fairwind site include security teams such as Wiz. Membership is not a consumer Google AI Pro perk.

If you are an independent researcher, a student, or a product engineer without a defender mandate, expect a no. Use 3.8 Flash, CodeMender with public models, and your existing review process instead.

## How to apply

Google points applicants to one public form and one enterprise path.

### 1. Open the official Fairwind page

Go to [deepmind.google/fairwind-program](https://deepmind.google/fairwind-program/). Read the partner description and the Gemini 3.8 Flash Cyber summary before you submit anything. The same apply link is repeated on the [3.8 Flash launch post](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/).

### 2. Use your Google Cloud relationship if you have one

Enterprise docs say Flash Cyber is GA behind an allowlist. Contact your Google account team and ask for `gemini-3.8-flash-cyber` on Gemini Enterprise Agent Platform. Cloud customers who are not in Fairwind can still run **CodeMender with publicly available models** on that platform, plus tools in [AI Threat Defense](https://cloud.google.com/security/ai-threat-defense).

### 3. Describe a defensive workload

Applications that match Google’s published audience look like this:

- You operate or maintain software that other organizations depend on
- A named security, IR, or product-security team will own the keys
- Patches will land in a reviewable pipeline inside your cloud environment
- Access will not sit on a general company chatbot identity

Do not invent a threat story. Google already published the use cases it wants: find, verify, and fix vulnerabilities at agentic scale inside a secure environment.

### 4. Plan controls before the model arrives

Fairwind access does not replace change control. Keep Cyber off shared developer API keys. Scope repositories. Log prompts and tool calls. Require a human to merge any generated patch. Google’s own language is “verified, deployment-ready patches” generated **within an organization’s secure cloud environment**, not dropped straight to production.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/2uVH2WUYb5E"
    title="GOOGLE IS BACK! (Gemini 3.8 Flash)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What Google published about performance

Cite only the figures Google put on the launch post.

- **CyberGym:** Google says Flash Cyber shows frontier-level performance on this industry benchmark for finding vulnerabilities, ahead of 3.5 Flash Cyber and larger frontier models. CyberGym is C/C++ heavy, which is why Google added a second test.
- **Internal multi-language discovery:** Google ran an internal benchmark across complex codebases in **20 programming languages** and reports a success rate **exceeding 70%**.
- **CWE-Bench (Collinear):** Flash Cyber records **47.2% pass@1** versus **47.8%** for a leading frontier model Google places next to it, at lower cost per rollout.
- **Chrome Security:** Google says 3.8 Flash Cyber produced **2.6 times** more correct patches to Chrome vulnerabilities than the best commercial models that are much larger.
- **Wiz:** Google reports **+7.5–9.7%** higher recall on Wiz’s internal penetration-testing benchmark at **2.3–5.2x** lower cost than other leading frontier models.
- **Google Cloud Vulnerability Research:** the team used the model to find a critical foundational vulnerability in **less than two hours**, work Google says usually takes months.

Those numbers are Google’s and partners’ claims. Reproduce them only inside your own allowlisted environment.



![Close-up of code on a monitor during a security review](https://images.unsplash.com/photo-1510511459019-5dda7724bfd9?auto=format&fit=crop&w=800&q=80)



## What to do while you wait

You do not need Cyber to start a defensive loop.

1. Put **Gemini 3.8 Flash** on Gemini Enterprise or the Gemini API for general code review and long-horizon engineering tasks.
2. Turn on **CodeMender** with a public model if you are already a Google Cloud customer. Google positions that pairing as available without Fairwind.
3. Keep patch review in the same place you review human changes: tests, owners, and rollback.
4. If your team builds browser or desktop agents, stay on the public computer-use path documented in our [Gemini Computer Use API guide](/blog/gemini-computer-use-api/). That tool is separate from Flash Cyber.

CodeMender plus Flash Cyber is the Fairwind bundle. CodeMender plus a public Gemini model is the path Google already opened to any Cloud customer.

## Practical tips

- Treat Cyber as a **second identity**, not a new system prompt on the company chatbot.
- Store allowlisted keys in the security team’s secret manager, not in a shared `.env`.
- Ask Google whether your region and data-residency controls apply. Enterprise docs list CMEK, VPC-SC, and related controls for online prediction and context caching.
- Budget tokens like an agent, not a chat. Flash models can spend extra tokens on harder tasks at higher effort levels.
- Pair every generated patch with a test that fails before the fix and passes after it. Google’s published story is verified patches, not raw diffs.

## Conclusion

Gemini 3.8 Flash Cyber is a defender product with a public application form and an enterprise allowlist. Apply on the Fairwind site if you run government, infrastructure, or platform security. Everyone else should ship on 3.8 Flash and CodeMender with public models, then revisit Fairwind when the org actually owns a defensive mandate.

The useful split is access, not marketing names. Public Flash is the coding model. Cyber is the gated twin for find-and-fix work inside a reviewed cloud environment.

## Sources

- [Introducing Gemini 3.8 Flash and 3.8 Flash Cyber](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/) — Google
- [Proactive cyber defense for governments and enterprises](https://blog.google/innovation-and-ai/technology/safety-security/fairwind-program/) — Google
- [Fairwind Program](https://deepmind.google/fairwind-program/) — Google DeepMind
- [Gemini 3.8 Flash Cyber](https://deepmind.google/models/gemini/cyber/) — Google DeepMind
- [Gemini 3.8 Flash Cyber model page](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/3-8-flash-cyber) — Google Cloud
- [GOOGLE IS BACK! (Gemini 3.8 Flash)](https://www.youtube.com/watch?v=2uVH2WUYb5E) — YouTube
