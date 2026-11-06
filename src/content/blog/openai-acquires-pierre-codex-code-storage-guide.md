---
title: "OpenAI Acquires Pierre: Codex Code Storage Guide"
description: "OpenAI is acquiring Pierre Computer Company to bring Code Storage and review tools into Codex. Learn what changes for developers."
pubDate: 2026-11-06T21:00:00
heroImage: "https://images.unsplash.com/photo-1564457461758-8ff96e439e83?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "chatgpt"]
noindex: false
---

OpenAI announced on November 4, 2026 that it will acquire Pierre Computer Company, the team behind Code Storage and open-source tools already used inside the Codex app. The deal aims to expand how developers and agents build, navigate, review, and store code.<grok type="render_inline_citation" citation_id="281" />

If you use Codex today, Trees and Diffs already power file browsing and change review. After the acquisition closes, OpenAI plans to integrate Code Storage features into Codex while keeping Pierre’s open-source projects open.<grok type="render_inline_citation" citation_id="281" />

This guide explains the announcement, what Pierre builds, how it fits with OpenAI’s recent Pando work, and what Codex users can expect next.

## What OpenAI is buying

Pierre Computer Company produces low-level infrastructure for machine work. Its main product is Code Storage, a distributed Git storage system designed for high-scale, API-first use. The company also maintains open-source libraries: Trees for navigating project files, Diffs for reviewing changes, and DiffsHub.<grok type="render_inline_citation" citation_id="281" />

OpenAI’s announcement states that Codex users already interact with Trees and Diffs when browsing files or reviewing changes. Diffs includes an Edit mode that lets reviewers fix a line of code directly in the comparison view. Pierre recently released Highlights, a fast syntax highlighter that updates as developers type or agents stream code.<grok type="render_inline_citation" citation_id="281" />

The acquisition is subject to customary closing conditions, including regulatory approvals. Until then, OpenAI and Pierre remain separate companies.<grok type="render_inline_citation" citation_id="281" />

![Developers reviewing code changes on multiple screens](https://images.unsplash.com/photo-1743090661056-e51700546169?auto=format&fit=crop&w=800&q=80)

## Why Code Storage matters for agents

Code Storage is built as a headless, programmable Git layer optimized for machines. According to Pierre’s site, it supports repositories up to 32 TB, concurrent writes of 30 or more, Git LFS, and sync with GitHub, GitLab, and Bitbucket. It offers SDKs in TypeScript, Python, and Go, plus webhooks.<grok type="render_inline_citation" citation_id="282" />

The system uses a quorum-based architecture and warm/cold storage tiers. Hot storage (accessed in the last 7 days) and cold storage (untouched longer) allow cost control for large agent-generated codebases. Pierre describes it as suitable for AI coding platforms that create, read, and modify repositories at high volume.<grok type="render_inline_citation" citation_id="282" />

This complements OpenAI’s own infrastructure work. On November 2, 2026, OpenAI published details of Pando, its in-house Git backend. Pando cut median push latency by nearly 5x in OpenAI’s monorepo and now delivers nearly a petabyte of Git data per day. It was built to handle the parallel branches and pushes that Codex enables.<grok type="render_inline_citation" citation_id="302" />

Together, the pieces point toward Codex handling more of the full loop: agents create branches, store history, developers review with inline edits, and code ships.

## What Codex users should do now

No immediate action is required. Codex continues to work as before. Open-source tools stay open-source, and Code Storage customers can keep using the service after closing while OpenAI integrates features.<grok type="render_inline_citation" citation_id="281" />

Practical steps for developers:

1. Review current Codex workflows that rely on file navigation and diff review. These already use Pierre libraries and will likely improve.
2. If your team uses Code Storage directly (via Lovable, Bolt, or similar platforms that rely on it), monitor OpenAI announcements for integration timelines.
3. Experiment with parallel agent sessions in the Codex app. Higher storage and review capacity is designed for this scale.
4. Follow the Codex changelog and OpenAI developer docs for new source-control commands or storage options as they appear.

![Coder working at a laptop with code visible](https://images.unsplash.com/photo-1529465230221-a0d10e46fcbb?auto=format&fit=crop&w=800&q=80)

## How this fits agentic development

Agentic coding increases branch volume, concurrent writes, and the need for fast review. Traditional Git hosts optimize for human pull requests. Code Storage prioritizes API speed, concurrent writes, and ephemeral branches that agents can create and discard.

OpenAI’s stated goal is to make Codex “the place where developers and agents take on their most ambitious projects,” connecting shipped code with the decisions behind it.<grok type="render_inline_citation" citation_id="281" />

For Android and mobile developers already using Codex or ChatGPT coding features, this expands options alongside tools like Android CLI skills. See our guide on setting up Codex on Android for related workflows: [ChatGPT Codex mobile Android setup](/blog/chatgpt-codex-mobile-android-setup-guide/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/HFM3se4lNiw"
    title="Introducing the Codex app"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for preparing your workflow

- Keep open-source dependencies. Pierre’s Trees, Diffs, and related libraries remain open, so existing integrations continue.
- Test review flows. Inline editing in diffs reduces context switching when agents propose changes.
- Monitor scale. If your agents generate many short-lived repositories, the storage model (hot/cold tiers, high concurrent writes) is built for that pattern.
- Watch regulatory timelines. Closing depends on approvals; feature rollout will follow.

## Conclusion

OpenAI’s acquisition of Pierre Computer Company brings proven code navigation, review, and high-scale Git storage closer to Codex. Trees and Diffs are already in use. Code Storage and Highlights add infrastructure designed for agent volume. Combined with Pando, the direction is clearer source-control tooling that keeps pace with parallel agent work.

Developers can continue current Codex usage today. Future updates will surface the integrated capabilities once the deal closes.

## Sources

- OpenAI announcement: [OpenAI to acquire Pierre Computer Company, Inc.](https://openai.com/index/openai-to-acquire-pierre/)
- OpenAI engineering post: [Scaling Git at OpenAI](https://openai.com/index/scaling-git-at-openai/)
- Pierre Code Storage: [code.storage](https://code.storage/)
- Codex app overview: [OpenAI Codex](https://chatgpt.com/codex/)
