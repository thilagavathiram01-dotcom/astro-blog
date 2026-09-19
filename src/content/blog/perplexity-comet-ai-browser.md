---
title: "How to Use Perplexity Comet as an AI Browser Assistant"
description: "Install Perplexity's Comet browser, import Chrome data, and use the built-in assistant to summarize tabs, search your history, and run supervised tasks on the page."
pubDate: 2026-09-19
tags: ["ai-tools", "tutorials", "perplexity"]
heroImage: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1200&h=630&q=80"
---

Most browsers still treat AI as a sidebar bolt-on. Perplexity's **Comet** is a Chromium browser with the assistant sitting on the page you already have open. You can ask what a long article argues, group research tabs, or — with supervision — let it click and type through a form.

Comet launched on Windows and macOS in July 2025, arrived on Android in November 2025, and reached iOS in March 2026. The desktop download is free at [comet.perplexity.ai](https://comet.perplexity.ai). Paid Perplexity plans remain optional for extra model capacity; they are not required to install the browser.

This guide walks through install, first-run setup, and three workflows that match Perplexity's own help docs: research across tabs, personal search of your history, and supervised page actions.

## What Comet is (and is not)

Comet is built on Chromium. Bookmarks, most Chrome extensions, page translation, and a built-in ad blocker work the way you expect. The difference is the **Comet Assistant**: it can read the current tab, reason across open tabs, and run browser commands in natural language.

Perplexity's help center lists these as core behaviors:

- Perplexity search as the default way to ask questions with citations
- Personal Search over your browsing history when you ask for something you already saw
- Natural-language tab commands
- An Ask button for context on the open page and a Summarize button for long articles
- Optional Gmail and Calendar connectors for inbox and schedule help
- A smart action engine that can click, type, and submit **under your supervision**

It is not a replacement for a password manager you already trust, and it is not a reason to hand the assistant unsupervised checkout or email send on day one.

![Person working at a laptop with multiple research tabs in a bright workspace](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=630&q=80)

## Watch Perplexity introduce Comet

Official product film from the Perplexity channel:

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/YeldJ4UezDQ" title="Introducing Comet: Browse at the Speed of Thought — Perplexity" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Step 1: Install Comet

### Windows or Mac

1. Open [comet.perplexity.ai](https://www.perplexity.ai/download-comet) (or the Comet page on [perplexity.ai/platforms](https://www.perplexity.ai/platforms)).
2. Download the installer for your OS.
3. **Windows:** run the installer and accept the system prompt if Windows asks.
4. **Mac:** drag Comet into Applications, then open it (approve Gatekeeper if macOS asks).
5. Sign in with your Perplexity account when onboarding starts.

### Android and iOS

- Android: install from the official Comet listing Perplexity links on its platforms page (Android 12 or later is the floor listed in public product notes).
- iPhone: install Comet from the App Store. Perplexity's March 18, 2026 post covers voice on the page and continuing a desktop thread on the phone.

After install, complete onboarding. Do not skip the import step if you are leaving Chrome.

## Step 2: First-run setup that actually matters

Perplexity's Comet help article on use cases recommends this checklist:

1. **Import bookmarks and extensions** — Settings → Import from Chrome or another Chromium browser.
2. **Default browser (optional)** — Settings → Default browser, only if you intend to live in Comet.
3. **Privacy and ad-blocking** — Settings → Privacy. Review what history Personal Search can see.
4. **Connectors** — Add Gmail and Google Calendar only if you want inbox summaries and meeting briefs.
5. **Open the Assistant** on any page so you see how sidebar context works before you automate anything.

Treat connectors like app permissions. If you would not paste that inbox into a chat window, do not connect it yet.

## Step 3: Ask about the page you are on

Open a long article, a product page, or a docs site. Then:

- Use the **Ask** control for a question grounded in that page.
- Use **Summarize** when you only need the argument, not a rewrite.
- Type in the assistant and mention the tab, or use `@tab` to pin Comet to one open page.

Useful first prompts (adapted from Perplexity's examples):

- "What is this page arguing, and where is the evidence thin?"
- "List the three pricing tiers and what each includes."
- "Explain this API section as if I already know REST but not this product."

If the answer should stay on *this* URL, say so. Otherwise Comet may blend page context with a fresh web search.

![Close-up of a browser window and notebook during a research session](https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&h=630&q=80)

## Step 4: Research across many tabs

Comet's documented research use case is grouping, tagging, and summarizing open tabs for a paper or project.

A practical loop:

1. Open five to ten sources on one question.
2. Ask: "Summarize the open tabs on this topic. Flag where they disagree."
3. Ask Comet to keep related tabs together or to open the three most cited follow-ups in new tabs.
4. Save the summary somewhere you control (a doc, a notes app) instead of trusting chat history alone.

Example command from Perplexity's own list:

> Identify today's 3 hottest news stories and open related articles in different tabs.

That is a good test of tab control. It is a poor test of whether those stories are actually the ones you care about — skim the tabs before you quote them.

## Step 5: Search your own browsing history

Personal Search is for the tab you lost, not for a new topic.

Prompts Perplexity documents:

- "What article was I reading about quantum computing last week?"
- "Find that tab where I compared Airbnbs in Paris."

This only works if history is on and you used Comet (or imported history) when you saw the page. Incognito and cleared history will not reconstruct a page you never stored.

## Step 6: Supervised actions on the page

The action engine can fill forms, compare products, draft mail, and move through checkout-style flows. Perplexity is explicit that this runs **under supervision**.

Start with reversible tasks:

- "Add Caesar salad ingredients to my cart and let me review it before checkout."
- "Draft a reply to this thread; do not send."
- "Find double-booked meetings this week and suggest new times."

Watch the clicks. If Comet reaches a payment, permission, or send button, take the keyboard back. Background or multi-step assistants on paid plans can keep working while you look away — that is a feature only after you have seen the same flow succeed with you watching.

## Mobile: pick up the same thread

On Android and iOS, the assistant is one tap off the page. Comet for iOS adds voice on the current site. Perplexity's iOS post states that a research thread stays tied to the page when you move from desktop to iPhone, so you do not rebuild context from scratch.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/s_oq4RupCgg" title="Comet for iOS: Search, Browse, and Ask with AI — Perplexity" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Limits worth knowing

- **Supervision is the product, not a footnote.** Form fill and checkout are documented capabilities, not a promise that the assistant should run unattended on money or mail.
- **Connectors expand blast radius.** Gmail and Calendar help only if you accept that those threads become model context.
- **Personal Search is local to what Comet can see.** It will not invent a tab from another browser profile you never imported.
- **Security research exists in this category.** Independent researchers have published prompt-injection style attacks against AI browsers, including Comet. Keep the assistant off banking and work admin pages until you understand what the page can say to the model.
- **Plans change.** Max historically bundled extra background-assistant capacity. Confirm current limits in your account rather than an old launch post.

## Conclusion

Comet is useful when the question is about *this page*, *these tabs*, or *that thing you already opened*. Install it from Perplexity's site, import Chrome once, and spend a day on Ask, Summarize, and `@tab` before you enable actions that click for you.

If you only try one workflow: open your real research tabs and ask for the disagreements, then save the summary yourself. Official setup and prompt examples live in the [Comet Help Center](https://www.perplexity.ai/help-center/comet/en) and the [Advice and Use Cases](https://www.perplexity.ai/help-center/comet/en/articles/11732243-advice-and-use-cases) article (updated September 14, 2026).

## Sources

- [Advice and Use Cases](https://www.perplexity.ai/help-center/comet/en/articles/11732243-advice-and-use-cases) — Comet Browser Help Center (updated September 14, 2026)
- [Getting Started with Comet](https://www.perplexity.ai/help-center/en/articles/11172798-getting-started-with-comet) — Perplexity Help Center (updated September 3, 2026)
- [Comet Help Center home](https://www.perplexity.ai/help-center/comet/en)
- [Download Comet](https://www.perplexity.ai/download-comet) / [comet.perplexity.ai](https://comet.perplexity.ai)
- [Perplexity platforms](https://www.perplexity.ai/platforms)
- [Comet for Android is here](https://www.perplexity.ai/hub/blog/comet-for-android-is-here) — Perplexity, November 20, 2025
- [Comet is now available on iOS](https://www.perplexity.ai/hub/blog/meet-comet-for-ios) — Perplexity, March 18, 2026
- [Perplexity's Comet AI browser now free](https://techcrunch.com/2025/10/02/perplexitys-comet-ai-browser-now-free-max-users-get-new-background-assistant/) — TechCrunch, October 2, 2025
