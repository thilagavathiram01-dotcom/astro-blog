---
title: "Modern Web Guidance 1.0: Better Code from AI Agents"
description: "Install Modern Web Guidance 1.0 to give coding agents expert web best practices, Baseline data, and modernization workflows."
pubDate: 2026-11-16T17:00:00
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "developer", "tutorials", "how-to", "google"]
noindex: false
---

AI coding agents write web code quickly. They often reach for JavaScript polyfills and libraries when modern HTML and CSS already handle the task. Modern Web Guidance 1.0, released as stable on 10 November 2026 by Chrome for Developers, embeds expert-vetted guides, Baseline compatibility data, and a modernization workflow directly into your agent.

The project is now a cross-browser effort with Firefox, Edge, and MDN. It covers 203 guides targeting verified knowledge gaps. Public evaluations show pass rates rising from around 50–60% without the guidance to 80–98% with it, depending on the model and harness.

## Why agents miss modern web features

Frontier models train on large volumes of older code. They know how to make something work with custom JavaScript, but they frequently overlook native platform solutions that are shorter, faster, and more accessible.

Examples include dialog and popover animations, scroll-driven effects, form autofill, and main-thread task scheduling. Accessibility mistakes are common: incorrect ARIA can make a page worse than no ARIA. Security patterns such as safe HTML sanitization and strict Content Security Policies are also inconsistent.

Modern Web Guidance steers the agent toward the right feature for the job and includes fallbacks based on your Baseline target.

![Laptop screen showing colorful code in an editor](https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80)

## Install Modern Web Guidance

The recommended method is the official CLI. From your project directory run:

```bash
npx modern-web-guidance@latest install
```

The command launches an interactive wizard that detects your agent (Antigravity, Claude Code, Copilot, Cursor, and others) and installs the skill. If you already have an earlier preview, update with:

```bash
npx modern-web-guidance@latest update
```

Alternative installs exist as plugins or direct skill files on the GitHub repository. Automatic updates keep the guides current as browsers ship new Baseline features.

## New in version 1.0

The stable release adds four main capabilities:

- **Modernization workflow**: Scans existing HTML, CSS, JavaScript, and package.json for outdated patterns and polyfills. Prompt your agent with “/modern-web-guidance Modernize the code in this directory” to get guided, safe upgrades.
- **Expanded guide database**: 203 expert-reviewed guides covering performance, accessibility, security, privacy, forms, CSS layout, passkeys, and more. Every guide includes Baseline data and cross-browser fallbacks.
- **Deeper expert review**: Content-area tech leads and accessibility specialists signed off on user-facing guides. Accessibility reviews used real assistive technologies.
- **Public eval dashboard**: Thousands of automated runs across leading models and harnesses. Results are inspectable so you can see the lift for your stack.

The first modernization release uses static analysis on a focused set of patterns for predictable results. Broader agentic audits are planned.

## Pair it with Chrome DevTools for agents

Authoring is only half the workflow. Chrome DevTools for agents gives the coding agent runtime visibility to verify and optimize.

- Run a performance trace on a simulated low-end CPU, then apply Modern Web Guidance advice until main-thread tasks stay under 50 ms (protecting INP).
- Record and review animations for dialogs or popovers, and confirm they respect `prefers-reduced-motion`.
- Check memory while caching views in SPAs so unused components are cleaned up.

Together the two tools reduce the number of turns needed to reach production-quality code.

![Developer workspace with laptop and code on screen](https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&q=80)

## Real-world results

Several teams reported measurable gains after adopting the 1.0 release:

- Pensionbazaar and Policybazaar cut UI bugs on new screens by over 90% and shortened turnaround from about four days to a few hours. Policybazaar also reduced manual performance auditing effort by 92% across roughly 30 high-traffic pages.
- WeTV (Tencent’s international streaming service) added the tools to its CI/CD pipeline. The agent now automatically diagnoses and fixes 90% of failed performance checks, cutting resolution time by 87%.
- note inc. combined Modern Web Guidance with internal design-system rules. Modern-web check pass rates rose from 61% to 94%, and correct LCP image prioritization improved by 28%.
- MetaMask integrated it into a PR-review bot that examined about 480 pull requests and fixed 43 accessibility and semantic-HTML issues with a median handling time of 15 minutes.

These outcomes come from the official Chrome for Developers case studies.

## Tips for daily use

- Install once per project so every agent session receives the relevant guides automatically.
- When prompting for a new feature, mention the user-facing behavior rather than the implementation. The agent will retrieve the matching guide.
- Review the “Modern Web Guidance” section the agent appends to its responses; it cites the guides it used and helps you learn the underlying techniques.
- Browse the public guide catalog on Chrome for Developers to see coverage before you start a large refactor.
- Combine with Baseline targets so recommendations match the browsers you actually support.

For related agent workflows, see our guide on [running browser tasks with the Agents API computer use tool](/blog/agents-api-computer-use-browser-tasks/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/PsrHq5F_BAc"
    title="Modern Web Guidance in your AI workflow: What is Modern Web Guidance?"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Modern Web Guidance 1.0 turns coding agents from fast generators of legacy patterns into tools that prefer native, accessible, and performant web platform features. The one-command install, modernization scanner, public evals, and cross-browser stewardship make it practical for both new projects and existing codebases.

Run the install command, try a modernization prompt on a small directory, and compare the output with and without the skill. The difference in code volume and correctness is usually visible on the first feature.

## Sources

- [Modern Web Guidance 1.0 announcement](https://developer.chrome.com/blog/modern-web-guidance-v1) — Chrome for Developers, 10 November 2026
- [Get started with Modern Web Guidance](https://developer.chrome.com/docs/modern-web-guidance/get-started) — Chrome for Developers
- [Modern Web Guidance YouTube overview](https://www.youtube.com/watch?v=PsrHq5F_BAc) — Chrome for Developers
- [Public eval dashboard](https://goo.gle/mwg-evals) — Google Chrome
- [Modernization workflow docs](https://developer.chrome.com/docs/modern-web-guidance/modernization-workflow) — Chrome for Developers
