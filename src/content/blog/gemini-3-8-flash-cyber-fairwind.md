---
title: "How to Apply for Fairwind and Use Gemini 3.8 Flash Cyber"
description: "Apply for Google's Fairwind Program, compare Gemini 3.8 Flash and Flash Cyber, and request the allowlisted model in Gemini Enterprise."
pubDate: 2026-09-22T10:00:00
heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "security", "developer"]
noindex: false
---

Gemini 3.8 Flash is the public workhorse Google shipped on 2 September 2026. **Gemini 3.8 Flash Cyber** is the sibling that is not for everyone. It is a post-trained model for vulnerability discovery and patch generation, and Google only issues it to trusted defenders through the **Fairwind Program**.

This guide stays on the official path: who can apply, what Google says the model is for, how Cloud customers request the allowlist, and what everyone else should use instead. It does not cover offensive techniques.

## What Google actually shipped

Google announced two 3.8 Flash variants the same day.

**Gemini 3.8 Flash** (`gemini-3.8-flash`) is the general model. Google lists an introductory price of **$0.75 per million input tokens** and **$3.75 per million output tokens** through 31 December 2026, then **$1.50 / $7.50** from 1 January 2027. It is available to developers in the Gemini API and AI Studio, to enterprises in Gemini Enterprise, and to Google AI Pro and Ultra users in the Gemini app, AI Mode in Search, and Gemini in Sheets.

**Gemini 3.8 Flash Cyber** (`gemini-3.8-flash-cyber`) is a post-training variant of that same Flash line. Google Cloud documents it as tailored for cybersecurity use cases. Modalities: text in and out, plus image, audio, and video as input only. Context window: **1,048,576** tokens. Maximum output: **65,536** tokens. Live API is not supported. Access is **GA behind an allowlist**.

Google is explicit about why the rails differ. Standard 3.8 Flash ships with safeguards against misuse in CBRN and cyber offense, following the Frontier Safety Framework. Flash Cyber ships with a more permissive set of mitigations for cybersecurity, so it is limited to trusted defenders.



![Close-up of a laptop showing code on a desk](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80)



## Who Fairwind is for

Fairwind is not a public API key upgrade. Google describes it as a limited program for governments and trusted partners that need advanced cyber defense tools.

Eligible groups in the official posts:

- Trusted government authorities
- Critical infrastructure operators
- Software maintainers
- A set of Google Cloud customers and cybersecurity partners

DeepMind’s Fairwind page says the program currently works with **over 650 partners** globally. Partners get prioritized access to Gemini 3.8 Flash Cyber and can use the model with **CodeMender**, Google’s harness for finding, verifying, and generating patches inside an organization’s secure cloud environment.

If you are an independent researcher, a student, or a product team that only needs stronger coding agents, you do not apply for Cyber. Use 3.8 Flash and the thinking-level controls covered in [our Gemini 3.8 Flash thinking levels guide](/blog/gemini-3-8-flash-thinking-levels/).

## How to apply for Fairwind

1. Read Google’s program post: [Proactive cyber defense for governments and enterprises](https://blog.google/innovation-and-ai/technology/safety-security/fairwind-program/).
2. Open the application surface at [deepmind.google/fairwind-program](https://deepmind.google/fairwind-program/).
3. Apply as an organization, not a personal Gmail hobby account. Expect to describe your defensive role (SOC, product security, national CERT, maintainer of widely used software).
4. If you already have a Google Cloud or Gemini Enterprise relationship, also contact your Google account team. Cloud docs say access is allowlisted; you can request it through your team **or** Fairwind.
5. Wait for approval before you treat `gemini-3.8-flash-cyber` as a model string you can call. Unapproved projects will not see it.

Google does not publish a public SLA for review time. Plan as if this is a vendor security review, not an instant toggle.

## How approved teams use Flash Cyber

Once the project is allowlisted, Cloud documents the model ID as **`gemini-3.8-flash-cyber`** on the Gemini Enterprise Agent Platform. Typical official surfaces:

- Gemini Enterprise / Agent Platform studio, with the Cyber model selected
- CodeMender, where Fairwind partners combine the model with Google’s patch harness
- Organization-controlled cloud projects with the security controls listed in Cloud docs (data residency, CMEK, VPC-SC, AXT on online prediction and context caching)

Keep work inside that project. Do not copy production source into an unapproved consumer Gemini chat.

Google’s published defender outcomes (from the 2 September launch post):

- **CyberGym:** frontier-level Pass@1 for autonomous vulnerability discovery, ahead of 3.5 Flash Cyber and larger frontier models in Google’s comparison.
- **Internal multi-language discovery set:** success rate **exceeding 70%** across complex codebases in **20** languages.
- **CWE-Bench (Collinear) patching:** Pass@1 of **47.2%**, close to a leading frontier model at 47.8%, at lower cost.
- **Chrome Security:** 3.8 Flash Cyber produced **2.6 times** more correct patches than the best much larger commercial models they compared.
- **Wiz:** **+7.5–9.7%** higher recall on an internal pen-test benchmark at **2.3–5.2x** lower cost than other leading frontier models.
- **Google Cloud Vulnerability Research:** used the model to find a critical foundational vulnerability in **less than two hours**, work the team says usually takes months.

Those figures come from Google and named partners. Treat them as vendor-reported, not as a promise for your repo.



![Security operations workspace with multiple monitors](https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80)



## What to do if you are not on Fairwind

Most developers should stay on **Gemini 3.8 Flash**.

Google positioned 3.8 Flash for long-horizon coding and autonomous agents. It remains fully supported alongside 3.7 Flash for efficiency-first workloads. On hard tasks the model can spend more tokens and extra tool calls; drop the thinking effort when you need cheaper, shorter answers.

Practical split:

| Need | Model |
| --- | --- |
| Agents, coding, Sheets, Gemini app | `gemini-3.8-flash` |
| Voice / live dialogue | Gemini 3.8 Live family, not Cyber |
| Allowlisted vuln research and patch loops | `gemini-3.8-flash-cyber` via Fairwind |

Do not try to jailbreak the public Flash model into a substitute for Cyber. Google calls out prompt-injection robustness gains on the 3.8 line and still restricts the cyber-permissive variant.

## Safety rules that stay in force

Google says it prioritized **fixing** over **exploitation** when training Flash Cyber. Fairwind exists because the remaining capability is dual-use.

Use the model only on code and systems you are authorized to test. Run generated patches through your normal review, tests, and release gates. CodeMender is a research-and-patch assistant, not an auto-merge bot.

If your job is consumer security on a phone rather than a code agent, start with platform controls such as [Android theft protection](/blog/android-theft-protection-setup/) instead of a restricted cyber model.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/FH8WuuKt5Xc"
    title="Gemini 3.8 Flash and Flash Cyber: Agentic AI, Coding and Cybersecurity Upgrades"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips

- Apply as a named security or infrastructure org. Personal accounts stall.
- Pair Cyber with CodeMender when Google grants both. The launch post treats them as one offering.
- Keep 3.8 Flash for product agents so you do not burn Fairwind quota on chat.
- Watch the Flash price change on **1 January 2027** if you budget API spend.
- Confirm the model string in Cloud docs before you hard-code it. Allowlists move by project.

## Conclusion

Gemini 3.8 Flash is the model you can use today for coding and agents. Gemini 3.8 Flash Cyber is the allowlisted defender variant behind Fairwind and Gemini Enterprise. Apply only if you are a government, critical-infrastructure, maintainer, or trusted Cloud security team. Everyone else should ship on public 3.8 Flash and leave vulnerability research to authorized programs.

## Sources

- [Introducing Gemini 3.8 Flash and 3.8 Flash Cyber](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/) — Google
- [Proactive cyber defense for governments and enterprises](https://blog.google/innovation-and-ai/technology/safety-security/fairwind-program/) — Google
- [Fairwind Program](https://deepmind.google/fairwind-program/) — Google DeepMind
- [Gemini 3.8 Flash Cyber](https://deepmind.google/models/gemini/cyber/) — Google DeepMind
- [Gemini 3.8 Flash Cyber model docs](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/3-8-flash-cyber) — Google Cloud
