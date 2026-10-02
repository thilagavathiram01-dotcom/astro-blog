---
title: "How Teams Apply for Gemini 4 Argon Fairwind Access"
description: "See who can request Gemini 4 Argon through Fairwind, what Google requires, and what defenders can run while access stays limited."
pubDate: 2026-10-02T09:00:00
heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "security", "ai", "developer", "how-to"]
noindex: false
---

Gemini 4 Argon is not in the public Gemini app or the open API catalog. Google announced it on 30 September 2026 and is sending the first copies to trusted cyber defenders through the Fairwind Program. Paid API customers and Google AI Ultra subscribers come later, with no public date.

If you run a security, incident-response, or penetration-testing team, the useful question is not “when does the chatbot get Argon?” It is whether your organization matches the partner list, and what you can ship today if it does not.

This walkthrough uses Google’s launch post and the Fairwind page. It is an access guide, not a vulnerability research tutorial.

## What Argon is, and who gets it first

Google describes Argon as a frontier model for long-horizon work in software engineering, legal and finance knowledge work, and cybersecurity defense. Koray Kavukcuoglu, SVP of Google DeepMind, posted the announcement. Early access is a phased release while Google stays in the U.S. government’s voluntary pre-release review process.

The first cohort is Fairwind partners. DeepMind says the program already works with more than 650 partners worldwide and prioritizes:

- Governments and national cyber authorities defending public networks and citizen services
- Critical infrastructure operators in healthcare, telecommunications, energy, and finance
- Core technology platforms whose software sits under many downstream products

Academic labs that focus on defensive benchmarking can apply. Google points students to CodeMender on Google Cloud instead of Argon keys.

For the public pricing and rollout sequence, see our [Gemini 4 Argon access and pricing guide](/blog/gemini-4-argon-access-pricing/).

## What Google published about the model

Cite these as Google’s launch figures, not as your own benchmark run.

- Output limit: 1 million tokens, up from 64,000 on earlier Gemini models
- Introductory API price: $2 per million input tokens and $10 per million output tokens
- Cached input tokens: 95 percent off the input price
- After the intro period: $4 per million input tokens and $20 per million output tokens
- DeepSWE v1.1: 77.9 percent, listed as state of the art on that long-horizon software engineering eval
- AutomationBench: 51.3 percent, ranked first by Google on Zapier’s end-to-end business-task bench
- LVBench: 91.7 percent on long video understanding
- CWE-bench v1: 68 percent, tied for first on vulnerability remediation

Google also says Argon leads the Vals Index, which weights finance, coding, legal, and tax work by U.S. GDP share, and that it leads on Vals Finance Agent v2 and Harvey’s Legal Agent Benchmark. The post does not publish those two scores in the body text.

For trusted defenders, Google says it will release Argon without cyber guardrails so those teams can use the full defensive capability. That is a reason the model is gated. It is not a reason to treat a consumer account as a test bed.



![Security operations desk with multiple monitors in a dim room](https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80)



## How Fairwind access differs from a normal Gemini key

Standard Gemini access does not include Argon. Fairwind gives approved partners Gemini 4 Argon with cybersecurity defense capabilities. Partners can use the model on its own or with CodeMender, Google’s code-security agent for finding and fixing vulnerabilities without building a custom harness.

Rules Google publishes on the Fairwind page:

- Dual-use work is limited to authorized threat simulation, reverse engineering, and malware analysis for defense or academic research
- Creating malware is not permitted
- Organizations must use user-level authentication, phishing-resistant multi-factor authentication, and access controls
- Only internal cybersecurity, incident response, or penetration-testing staff may receive Argon access
- Partners must track who uses the model
- Sharing, reselling, or redistributing access is not allowed
- Google runs background checks on applicants

When Argon is used as a managed model on Gemini Enterprise, Google says zero data retention is supported. Confirm that setting in the Cloud docs before you send production code.

The older defender model, Gemini 3.8 Flash Cyber, stays on its own allowlist. Steps for that model are in our [Fairwind guide for 3.8 Flash Cyber](/blog/gemini-3-8-flash-cyber-fairwind/). Do not assume a 3.8 approval covers Argon.

## How to request access

### 1. Confirm you match the partner list

Write down the defensive system you protect and the named team that will hold the keys. A general IT help desk or a product chatbot owner is not the audience Google describes.

### 2. Open the official form

Go to [deepmind.google/fairwind-program](https://deepmind.google/fairwind-program/) and use Apply for access. Google says it reviews eligible partners and responds as soon as it can. There is no published SLA.

### 3. Ask your Google Cloud team in parallel

If you already buy Gemini Enterprise, ask your account team about Argon on that platform and about CodeMender. The public Fairwind form and the Cloud relationship are different doors. Use both only if both apply to your org.

### 4. State a defensive workload

Useful applications match published use cases: find, validate, and patch vulnerabilities in software you are authorized to test. Wiz is already using Argon through its Scan for Good program, which looks for high-risk exposures in critical public infrastructure. Google says an early run found a critical vulnerability in healthcare software used by hospitals worldwide that earlier frontier models missed. That is a partner result, not a promise for your stack.

### 5. Lock the controls before the key arrives

Keep Argon off shared developer API keys. Store credentials in the security team’s secret manager. Log prompts and tool calls. Require a human to merge any generated patch. Google’s own internal story for large rewrites is automated plus manual audit, emulation testing, and review before production.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/TYD71CSxWzQ"
    title="BREAKING: Gemini 4 Argon Beats GPT-6 and Claude on 12 Tests"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What to run if you are not eligible

Google’s FAQ is direct. Fairwind is only for approved partners. If you are not eligible, protect code with CodeMender on publicly available models and with other products in Google AI Threat Defense.

A practical order:

1. Use a public Gemini model for ordinary code review and agent tasks.
2. Turn on CodeMender with that public model if you are a Google Cloud customer. Docs describe `cm fix` as generating a patch, applying it in a local sandbox, running your build and tests, and re-checking a verified proof of concept. Writes need confirmation unless you disable that prompt.
3. Keep generated diffs in the same review queue as human patches.
4. Revisit Fairwind only when a named defender team owns the workload.

Independent researchers and students should expect a no on Argon. That is the program design, not a form error.



![Developer reviewing source code on a laptop during a security check](https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80)



## Cost notes for teams that do get a key

The intro rate is $2 / $10 per million tokens. A long defensive run can burn the 1 million output ceiling. At the intro output price, one full 1 million output-token trajectory is $10 before input. After the intro period, that same output is $20. Google has not published the end date of the intro price.

Cache repeated repository context. Cached input is priced at 95 percent off the input rate, so a second pass over the same files should not be billed like a fresh upload. Confirm cache behavior in the API docs when your project is allowlisted. Do not budget from chat-app estimates.

## Tips before you submit

- Apply as an organization, not as a personal Gmail account.
- Name the security owner and the systems in scope.
- Say whether you need zero data retention on Gemini Enterprise.
- Do not ask for offensive use. Google’s permitted list is defensive and academic research.
- Keep 3.8 Flash Cyber and Argon as separate requests.
- If you only need coding help, wait for the paid API and Ultra rollout instead of forcing a Fairwind application.

## Conclusion

Gemini 4 Argon starts with Fairwind, not with the Gemini app. Governments, infrastructure operators, platform security teams, and defensive academic labs are the groups Google says it will review. Everyone else should use public models and CodeMender, then apply only when a defender team owns the keys.

Treat the published scores as Google’s launch evidence. Reproduce them inside your own allowlisted environment before you change a production default.

## Sources

- [Gemini 4 Argon: our next era of frontier intelligence](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/) — Google
- [Fairwind Program](https://deepmind.google/fairwind-program/) — Google DeepMind
- [Find and fix software vulnerabilities with CodeMender](https://cloud.google.com/blog/products/identity-security/find-and-fix-software-vulnerabilities-with-codemender) — Google Cloud
- [Fix code vulnerabilities and manage diffs](https://docs.cloud.google.com/gemini-enterprise-agent-platform/codemender/fix-and-patch) — Google Cloud
- [Zero data retention](https://docs.cloud.google.com/gemini-enterprise-agent-platform/resources/zero-data-retention) — Google Cloud
- [Frontier Safety Framework](https://deepmind.google/blog/strengthening-our-frontier-safety-framework/) — Google DeepMind
