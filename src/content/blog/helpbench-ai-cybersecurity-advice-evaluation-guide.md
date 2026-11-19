---
title: "HelpBench: Test AI Cybersecurity Advice Quality"
description: "Use HelpBench insights to evaluate AI cybersecurity advice. Learn scores, failures, and steps for safer Gemini and LLM queries."
pubDate: 2026-11-19T14:00:00
heroImage: "https://images.unsplash.com/photo-1768839721176-2fa91fdce725?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "security", "gemini", "tutorials", "how-to"]
noindex: false
---

People ask AI models everyday questions about scams, compromised accounts, and privacy settings. Google and University College London built HelpBench to measure how well those answers hold up. Models average 82 percent against expert rubrics, yet one in ten responses fall below 65 percent and can include harmful advice.

This guide shows what HelpBench tests, where models fail, and practical steps you can take when you ask Gemini or other models for cybersecurity help. Pair it with device-level controls such as those in our [Android 17 Advanced Protection guide](/blog/android-17-advanced-protection-six-features/).

![Unlocked padlock resting on a computer keyboard](https://images.unsplash.com/photo-1768839721176-2fa91fdce725?auto=format&fit=crop&w=800&q=80)

## What HelpBench measures

Researchers curated 450 questions drawn from real online support communities. They rephrased the posts to protect privacy while keeping natural wording. Topics cover nine areas: accounts, moderation tools, security tools, privacy tools, compromise, platform actions, scams, harassment, and data concerns.

Experts wrote rubrics for each question. Criteria include positive factual guidance that keeps a person safer, negative guidance that could cause harm, and delivery factors such as tone and prioritization. An auto-rater then scores model responses against those rubrics. Google integrated the benchmark into the Gemini 4 Carbon Safety & Security Report. Carbon improves on earlier Gemini models for this type of advice.

Evaluation of 18 models from seven companies showed an overall average of 82 percent. Scams and account compromise scored highest. Moderation tools and certain safety edge cases scored lower. Scores can vary by up to a 12 percent standard deviation when the same question is asked five times, so consistency is not guaranteed.

## Common failure patterns

One in ten responses scored under 65 percent. Examples from the research include advice to discard a device for malware when simpler steps exist, or recommending a new bank account solely for privacy settings. In abuse and stalking scenarios, models sometimes listed technical removal steps without noting that sudden changes can alert an abuser and increase physical risk.

Models also tend to give overly burdensome instructions when experts recommend straightforward alternatives. Tone matters: overly alarming or vague answers reduce usefulness even when facts are mostly correct. The paper notes that PSS advice needs consistently high performance because small errors can lead to account loss, financial damage, or safety issues.

![Person typing on a keyboard in front of code screens](https://images.unsplash.com/photo-1759662011366-8a743eae9649?auto=format&fit=crop&w=800&q=80)

## How to evaluate AI cybersecurity answers yourself

Follow these steps when you ask an AI model for help with a security or privacy question.

1. State the exact situation and any steps you already took. Mention whether two-factor authentication is on, which apps are involved, and the platform. Clear context reduces generic or contradictory replies.

2. Ask for the single most effective next action first. Then request alternatives only if needed. This matches the prioritization experts use in HelpBench rubrics.

3. Request sources or official documentation for any critical claim. Cross-check recovery steps against the service’s own help pages or Google Account recovery tools.

4. Generate the answer twice or three times. Compare them. Large differences signal that the model is not stable on that topic. Prefer the version that aligns with known official guidance.

5. For high-stakes cases such as suspected stalking, financial scams, or account compromise, treat the AI reply as a starting point only. Contact the platform’s official support or a trusted human expert before acting.

These practices address the variability and long-tail failures documented in the benchmark.

## Tips for safer queries with Gemini

Gemini 4 Carbon shows improved performance on HelpBench compared with Gemini 4 Argon and Gemini 3.1 Pro. Still apply the same checks. Ask Gemini to list risks of the recommended steps, especially when the scenario involves an abusive person or shared device. Request a short summary of what not to do.

Enable relevant device protections. Android’s Advanced Protection mode, covered in detail in our earlier post, limits certain attack surfaces and logs activity. Combine model advice with those controls rather than relying on either alone.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/ftkic7Tdpcg"
    title="Using Gemini 4 Argon to protect against Cyber attackers"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

HelpBench gives a concrete measure of how well AI models answer everyday cybersecurity questions. The 82 percent average shows useful guidance is common, but the 1-in-10 low scores and score swings mean you should verify before you act. Use the steps above to structure your questions, compare responses, and fall back to official sources or human help for sensitive cases. Google released the benchmark publicly so other models can improve the same way.

## Sources

- [How Google is Making Cybersecurity Advice from AI More Helpful](https://blog.google/security/how-google-is-making-cybersecurity-advice-from-ai-more-helpful/) — Google, November 17, 2026
- [HelpBench: Assessing the Ability of LLMs to Provide Privacy, Safety, and Security Advice](https://arxiv.org/abs/2606.24819) — arXiv, June 2026
- [Using Gemini 4 Argon to protect against Cyber attackers](https://www.youtube.com/watch?v=ftkic7Tdpcg) — Google DeepMind on YouTube
