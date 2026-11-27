---
title: "How to Send Files from Claude to Connected Apps (Beta)"
description: "Step-by-step guide to Claude's beta file transfers with connectors. Send or save files to Google Drive and more without manual downloads."
pubDate: 2026-11-27T21:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "ai", "productivity"]
noindex: false
---

Claude can now move files between your chat and the apps you already connect, without the download-then-upload loop. The feature, called file transfers with connectors, entered beta on 24 November 2026.

It works on Pro, Max, and Ultra plans as the rollout reaches you. Team and Enterprise plans stay off until an owner turns it on. Free plans will follow. The change removes a friction point for anyone who builds reports, decks, or code in Claude and needs them in Drive, Slack, or another connected tool.

You still need the right plan, an eligible connector, and a quick approval step the first time you send a file to each app. Once set, the process feels closer to asking a colleague to file something than to managing downloads.

## What the Feature Actually Does

File transfers let Claude send a file you attach or that it creates to a connected app. They also let Claude save a file that the app offers, so you can review it inside the chat.

Examples from Anthropic’s help center include uploading a presentation Claude just made to cloud storage or pulling a contract into the conversation for review. The file moves through Anthropic’s servers with a temporary encrypted copy. Deleting the chat does not remove the file from the destination app.

Only connectors listed in the official directory that have file support added by their developer work. Custom connectors and MCP servers you add yourself do not support transfers.

![Person working at a laptop with documents nearby](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Where It Works and Where It Does Not

Transfers are available in the new Claude experience on the web, Claude Desktop, and the iOS and Android apps. They also run in Claude Code in the terminal, VS Code, and the web version.

They do not work in Incognito chats, scheduled tasks, or Claude Code sessions started with Remote Control. Some older chats also cannot send or save files, so start a fresh one if the option is missing.

On Team and Enterprise, an Owner or Primary Owner must enable the feature under Organization settings > Connectors > File transfers. They can turn on uploads, downloads, or both. Members then need to start a new chat or session.

Certain organizations cannot use the feature at all. These include setups with HIPAA, zero data retention, customer-managed encryption keys, Access Transparency, IP allowlists, FERPA, or Claude for Teachers accounts. Organizations whose default workspace keeps data outside the US are also excluded. Sending is unavailable if inference hooks are allowed.

## Step-by-Step: Send a File to a Connected App

1. Connect the app from the connectors directory if you have not already. Open Customize or the plus menu, choose Connectors, and follow the authentication flow. Claude inherits the permissions of your account on that service.

2. Attach the file or tell Claude which one to send. You can drag a local file into the chat or refer to one Claude created earlier in the conversation. Claude can send files but not folders.

3. Name the destination. A clear instruction works best: “Put this report in my Receipts folder on Drive” or “Upload the deck to the shared Marketing folder.”

4. Review the approval prompt if it appears. Claude asks before the first file goes to each app, even in Auto mode or if the tool is set to Always allow. Check the file and the destination before you confirm. Later transfers may proceed without another prompt, depending on your permission settings.

Limits apply. In chats and web Claude Code you can send up to 10 files at once, totaling 500 MB. Attached files are capped at 400 MB each. Local Claude Code allows up to eight files of 500 MB each. If the batch is too large, send them one by one. Some apps impose tighter size or type restrictions.

Claude Code also refuses most credential-like files (for example .env or .pem) unless you attached them yourself. Files outside your working folders trigger an extra confirmation unless you first add the folder with /add-dir.

## How to Save a File from a Connected App

Ask Claude directly. “Get the Q3 report from my Finance folder” or “Pull the latest contract from Drive” is enough. The permission you already set for that connector tool controls access.

In a chat the file lands in that conversation, where you can open or download it. In local Claude Code the file goes into a connector-downloads folder under ~/.claude/projects. Claude shows the path. Ask it to copy the file into your project if you need it there. By default those saved files are deleted after 30 days, so copy anything you want to keep. Nothing is saved while you are in plan mode.

You can save files up to 500 MB each and up to 10 at a time. Most have five minutes to finish downloading. Claude Code may append .bin or .txt to some types such as .html; rename them to open correctly.

![Laptop screen showing data charts and documents](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80)

## Practical Tips and Limits to Watch

Update Claude and Claude Code to the latest version before you try transfers. Sign in with your Claude account; API keys and cloud-provider sessions do not support the feature in Claude Code.

Watch environment variables in Claude Code. Setting DISABLE_TELEMETRY, DO_NOT_TRACK, or CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC turns transfers off.

Photos and videos may carry location metadata. The receiving app stores the file under its own terms. A file pulled from an app can contain text designed to mislead Claude, so connect only services you trust.

Files pass through Anthropic servers. A temporary encrypted copy is kept, and some images or videos may be retained briefly for safety scanning (typically deleted within two weeks unless longer retention is required). On Enterprise plans with the Compliance API, sent files usually appear in the activity feed; saved files may not.

If a transfer fails, check the destination app first—the file may have arrived. On mobile, keep Claude open and the screen awake until the upload finishes.

For teams already using Claude for documents or presentations, this pairs well with existing workflows. See our guide on [how to use Claude Sheets](/blog/how-to-use-claude-sheets/) for related file-creation tips that now feed directly into connected storage.

## Troubleshooting Common Issues

- Option missing: Start a new chat or session and confirm your plan has received the rollout.
- “Custom connector” error: Remove the connector and re-add it from the directory.
- Large-file failures: Split the batch or check the app’s own limits.
- Team plan blocked: Ask an Owner to enable File uploads and/or File downloads under Organization settings > Connectors.

## Sources

- [Send files to connected apps and save files from them](https://support.claude.com/en/articles/18534325-send-files-to-connected-apps-and-save-files-from-them) — Claude Help Center, updated November 2026
- [Release notes](https://support.claude.com/en/articles/12138966-release-notes) — Claude Help Center, 24 November 2026 entry
- [Use connectors to extend Claude’s capabilities](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities) — Claude Help Center

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/_jjSS0qGFbI"
    title="Getting started with connectors in Claude.ai"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
