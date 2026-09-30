---
title: "How to Install ChatGPT Plugins After DevDay 2026"
description: "Install ChatGPT plugins from the directory, use @ mentions, and try DevDay 2026 extensions, Sites hosting, and MCP events."
pubDate: 2026-09-30T14:00:00
heroImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["chatgpt", "tutorials", "ai-tools", "productivity"]
noindex: false
---

OpenAI used DevDay 2026 to put plugins back at the center of ChatGPT. The 29 September recap lists sidebar homes, conversation panels, file viewers, better directory ranking, Sites that can host plugins, and MCP events that start work when a connected app changes.

You do not need to build any of that to benefit. You need a signed-in ChatGPT account, a plugin from the directory, and a habit of checking what each plugin can read before you approve it.

This guide covers install, @ mentions, plan and admin gates, and the new surfaces announced at DevDay. It stays with OpenAI’s own product pages and developer docs.

## What a plugin is now

A plugin connects ChatGPT to another product so the model can pull live context or take an action you approve. OpenAI’s plugins page names Slack, SharePoint, Airtable, and Google Drive as everyday examples. Partner listings also include tools such as Canva, Figma, Stripe, Vercel, and Replit.

Plugins are not the same as [ChatGPT Skills](/blog/chatgpt-skills-reusable-workflows/). A skill is a reusable instruction file. A plugin is a connection plus, after DevDay, optional UI that lives in the sidebar or beside the thread.

OpenAI also packages skills *inside* some plugins. Treat the skill as the playbook and the plugin as the data source.

![Laptop on a wooden desk during a focused work session](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## Who can add plugins

Select plugins are available on Free, Go, Plus, Pro, Business, Enterprise, Edu, and ChatGPT for Teachers. Some plugins still require a paid plan.

Plan rules from OpenAI:

- **Plus and Pro.** You connect plugins yourself. There is no workspace admin list.
- **Business.** Plugins are on by default. Admins can still restrict them.
- **Enterprise and Edu.** Plugins start off. An admin must enable them in Workspace settings before anyone can connect one.

ChatGPT only reads data you can already see in the connected product. On Business, Enterprise, Edu, and ChatGPT for Teachers, plugin data is not used to train models by default. Plus and Pro users control data use in account settings.

## Watch the DevDay keynote

OpenAI streamed the 29 September 2026 keynote. Plugins sit in the “customize ChatGPT” block alongside Dots, Spaces, and Sign in with ChatGPT.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Fls_onRviPM"
    title="Live from OpenAI DevDay 2026: Keynote"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Install a plugin from the directory

1. Open [ChatGPT](https://chatgpt.com) on the web or the desktop app.
2. Open the sidebar and go to **Plugins**, or visit [chatgpt.com/plugins](https://chatgpt.com/plugins).
3. Browse the directory. OpenAI says ranking and recommendations were rebuilt so relevant plugins show up in the list and inside conversations.
4. Select a plugin. Read the builder name, the data it can access, and the actions it can take.
5. Approve only the access you need, then finish the product’s own login if it asks for one.

On Enterprise and Edu, stop at step 2 if the directory is empty. Ask an admin to open **Workspace Settings → Plugins** and enable the catalog for your role.

You can also add a plugin from the Tools menu in a chat once it is already installed.

## Use a plugin in a conversation

OpenAI documents two summon methods after install:

- Open **Tools** and pick the plugin.
- Type `@` and the plugin name, then the task.

Official-style prompts from the plugins page:

- `@Airtable, pull next steps from my meetings this week`
- `@Stripe, list active subscriptions from this week and flag past-due accounts`
- `@Vercel, show the latest deployment for our site, summarize errors and recommend fixes`
- `@Canva, turn this outline into a clean pitch deck`

Stay in the same thread for follow-ups. ChatGPT can keep using the same connected records if you ask it to tighten the structure or add a missing field.

Plugins follow your normal ChatGPT rate limits. The third-party product can still apply its own caps.

![Two colleagues reviewing a laptop screen together](https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80)

## What DevDay added on top of install

### Plugin extensions

OpenAI opened the surfaces it uses for first-party ChatGPT features. Developers can now ship:

- A **sidebar app** that opens fullscreen from the left rail
- A **conversation panel** that sits beside the thread
- **File viewers and editors** for formats the product owns
- **Composer mentions** on the ChatGPT desktop app
- **Rich forms** for structured choices

Canva is the documented sidebar example. Figma is the documented composer-mention example. Adobe is the documented file-handler example for Acrobat and Photoshop files.

Composer mentions work only in the desktop app today. Plugin extensions on the web for Free and Go accounts are listed as coming soon. Existing tool-calling plugins keep working while those UIs roll out.

### Better create and submit flow

Plugin Creator helps you assemble a plugin. A redesigned submission flow gives clearer review feedback. Users still choose which plugins to run and approve each grant.

If you only consume plugins, you can ignore Creator until you need an internal connector.

### Sites can host plugins

On Business, Enterprise, Healthcare, and Edu, a Site can carry a plugin so teammates use the same app with their own connected accounts. OpenAI’s help article *Hosting a plugin with ChatGPT Sites* says hosting itself is available to all plans, but workspace members need admin flags before they publish or share.

Enterprise defaults from that article:

- **Use plugins** — on by default
- **Upload plugins** — off by default
- **Create plugins with MCPs** — off by default
- **Share plugins** and **Publish plugins to workspace** — extra role flags

### MCP events

Plugins can subscribe to the proposed MCP Events spec. You can ask ChatGPT to watch a project board. When a matching event arrives, ChatGPT can read linked docs and draft a plan while you are away. OpenAI lists this for all plans.

Treat event-driven plugins like cron jobs. Start with a read-only watch, then add write actions after you trust the output.

## Workspace admin checklist

If you own a Business or Enterprise workspace:

1. Open **Workspace Settings → Plugins**.
2. Decide which directory plugins are allowed.
3. Turn on **Use plugins** for the roles that need them.
4. Leave upload and MCP-create off until you have a review path for custom servers.
5. Use compliance logs to inspect tool calls, files touched, and conversation context.
6. Remove a plugin from the same settings page if a vendor leaves your stack.

Admins can pull a plugin at any time. The third-party product may also offer its own unlink control.

## Practical limits

- Rollout is staggered. OpenAI’s Sites help page notes that DevDay features are arriving gradually.
- A plugin cannot see data you cannot already open in that product.
- Custom plugins need Developer mode and, in a workspace, the MCP-create permission.
- Do not confuse Sign in with ChatGPT with plugin install. Sign-in lets partner apps use your ChatGPT identity and, for eligible Plus and Pro users, plan usage. It does not add a sidebar plugin by itself.
- Meetings is a separate beta plugin on the macOS desktop app for Pro and Business. Audio is deleted after notes are ready, per the DevDay recap.

## Conclusion

Start with one directory plugin you already pay for. Install it from [chatgpt.com/plugins](https://chatgpt.com/plugins), read the permission card, then run a single `@` prompt you can verify in the source app. Add a sidebar extension or an MCP event only after that loop is boring.

Official references: the [DevDay 2026 recap](https://openai.com/index/devday-2026-recap/), the [plugins product page](https://chatgpt.com/features/plugins/), [Plugin Extensions](https://developers.openai.com/plugins/build/extensions), and [Hosting a plugin with ChatGPT Sites](https://help.openai.com/en/articles/20001547-hosting-a-plugin-with-chatgpt-sites).

## Sources

- [DevDay 2026 Recap](https://openai.com/index/devday-2026-recap/) — OpenAI, 29 September 2026
- [Plugins in ChatGPT](https://chatgpt.com/features/plugins/) — OpenAI
- [Plugin Extensions](https://developers.openai.com/plugins/build/extensions) — OpenAI Developers
- [Hosting a plugin with ChatGPT Sites](https://help.openai.com/en/articles/20001547-hosting-a-plugin-with-chatgpt-sites) — OpenAI Help Center
- [DevDay 2026 (ChatGPT Learn)](https://learn.chatgpt.com/docs/whats-new/devday-2026) — OpenAI
- [Live from OpenAI DevDay 2026: Keynote](https://www.youtube.com/watch?v=Fls_onRviPM) — OpenAI
