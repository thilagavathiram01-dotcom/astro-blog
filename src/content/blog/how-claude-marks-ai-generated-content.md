---
title: "How Claude Marks AI-Generated Content"
description: "Claude embeds invisible text watermarks and C2PA Content Credentials. Learn how detection works, which models support it, and practical limits."
pubDate: 2026-11-06T18:00:00
heroImage: "https://images.unsplash.com/photo-1763568258235-f40425a94af9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "ai", "security"]
noindex: false
---

Claude now marks most AI-generated text and files it produces. The marks are machine-readable, invisible to readers, and applied worldwide. They help platforms and researchers identify content that Claude processed without changing how the text reads or who owns the output.

This guide explains the two marking methods Anthropic uses, which models carry them, how to check files yourself, and the real limits of detection.

## Two ways Claude marks content

Claude uses complementary techniques. Text gets an embedded statistical watermark. Files get signed C2PA Content Credentials in their metadata.

The text watermark lives inside the words Claude chooses. Nothing is added, no hidden characters appear, and quality stays the same. Because the pattern is part of the text, it travels when you copy and paste and can survive light editing.

Content Credentials are different. When Claude creates a supported file such as a PNG, JPEG, or SVG, it attaches a cryptographically signed note that says the file was processed by Claude. Any C2PA-aware tool can read it. The file itself does not change.

Both methods apply at the model level. That means the marks appear whether you use Claude on the web, the API, Claude Code, or through cloud partners such as AWS, Google Cloud, or Microsoft Foundry.

![Laptop and monitors showing code in a developer workspace](https://images.unsplash.com/photo-1759661990336-51bd4b951fea?auto=format&fit=crop&w=800&q=80)

## How the text watermark works

Large language models pick the next word from several likely options. When two words work equally well, the model normally uses a random number to decide. Claude’s watermark replaces that random source with a secret key plus the previous few words.

The individual choices still look normal. Across hundreds of decisions the pattern becomes detectable to anyone who holds the key. Anthropic describes the method as a version of Google DeepMind’s SynthID-Text approach, which itself builds on earlier work by Scott Aaronson.

The watermark does not force unusual words. It only influences low-stakes choices where either option would be fine. On factual passages or exact code where only one correct token exists, the watermark has little or nothing to act on. Proofreading that changes only a few words also produces a weak signal.

Internal testing and the original SynthID-Text research found no measurable drop in quality, creativity, or user preference ratings. The watermark adds no extra tokens and does not raise cost or latency.

It carries no identifying information. The key does not encode the user, the organization, or the conversation.

## Which models currently support marking

New Claude models launched on or after 2 August 2026 include marking from day one. Older models are being retrofitted. As of early November 2026 the support list includes:

- Claude Fable 5.1, Fable 5, Mythos 5.1, Mythos 5
- Claude Opus 5.5, Opus 5, Opus 4.8, Opus 4.7 (text watermark on some partners still rolling out)
- Claude Sonnet 5.5, Sonnet 5, Sonnet 4.6 (with caveats on non-default sampling parameters)
- Claude Haiku 5.5

Several earlier models such as Opus 4.6, Opus 4.5, Sonnet 4.5 and Haiku 4.5 already attach C2PA credentials to files even if full text watermarking is not yet active. Amazon Bedrock rollout for certain models is scheduled to finish by 10 November 2026.

Marking applies globally, not only inside the EU. Anthropic signed the EU AI Act Article 50 Code of Practice on Transparency of AI-Generated Content and chose to implement the same approach everywhere because it does not yet have a durable regional switch.

## Checking files with the free Claude Content Checker

For images and other supported files you can use the free browser tool at claude.com/check-content (sometimes listed as check-files). The checker runs entirely in your browser. Your file never leaves the device. It only reads the attached Content Credential metadata.

If a Claude-issued credential is present, the tool reports that Claude may have processed the file. It does not identify the user and does not inspect the pixel or content data itself. Supported formats include PNG, JPEG and SVG up to reasonable size limits.

Text watermark detection is not public. It is available through a private-preview detection API for eligible organizations: regulators, law enforcement, media, fact-checkers, independent researchers, educational institutions, EU civil society groups, and enterprises that must verify their own outputs for compliance. Anthropic plans to widen access over time. Organizations can register interest via the form linked from the official support article.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/jb-QNq3ERR0"
    title="AI Watermarks Explained: Images, Audio, Video, Text—and Code"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Limitations you should know

A detected mark is a useful signal, not a complete proof. Finding a Claude watermark or Content Credential means the content may have been generated or processed by Claude. It does not confirm the full provenance, the original author of the ideas, or that no human editing occurred afterward.

Heavy rewriting, translation into another language followed by back-translation, or complete paraphrasing can weaken or remove the text watermark. Light edits usually leave enough of the statistical pattern intact. Code has fewer opportunities for the watermark because many tokens must be exact.

Absence of a mark does not prove human authorship. Older models may not yet carry the text watermark, sampling parameters can reduce reliability on some models, and the content may have come from a different AI system that uses its own method.

The watermark never identifies the person who prompted Claude. Ownership and usage rights under Anthropic’s terms remain unchanged.

![Abstract digital glitch art with code fragments](https://images.unsplash.com/photo-1765445665883-085301570c87?auto=format&fit=crop&w=800&q=80)

## Practical steps for users and teams

1. If you need to confirm whether a downloaded chart, diagram or image came from Claude, drop the file into the free Claude Content Checker. The check is local and private.
2. For text, assume that substantial original writing from supported models carries the watermark. If your organization must verify outputs for regulatory reasons, request access to the detection API.
3. When you heavily edit or rewrite Claude drafts, expect the watermark signal to weaken. Document your own contribution if provenance matters for your workflow.
4. Do not rely on the mark for security or identity purposes. It is a transparency signal, not a tracking mechanism.
5. If you use Claude through a cloud partner, confirm that the specific model and platform combination currently supports the mark you need. The official model table is updated as rollouts complete.

For more on working with recent Claude models, see our guide to [accessing Claude Opus 5.5](/blog/access-claude-opus-5-5-google-antigravity/).

## Conclusion

Claude’s marking system pairs an invisible statistical watermark in text with industry-standard C2PA Content Credentials on files. Both are designed to be transparent to machines while remaining invisible to readers. Detection for text is still limited to approved organizations, while anyone can check files for free in the browser.

The approach meets Anthropic’s EU AI Act commitments and applies worldwide. It gives platforms and researchers a practical signal without changing the quality of Claude’s output or the rights of users. As older models finish their retrofits and detection access expands, the marks will become more consistent across the Claude ecosystem.

## Sources

- [How Claude marks AI-generated content](https://support.claude.com/en/articles/16266773-how-claude-marks-ai-generated-content) — Anthropic Help Center
- [How Claude’s text watermarking works](https://www.anthropic.com/news/claude-text-watermark) — Anthropic
- [Check if files were made with Claude](https://claude.com/check-content) — Claude
