---
title: "How to Install and Use the Gemini API CLI for Agents"
description: "Step-by-step guide to install the new Gemini API CLI, generate media from the terminal, analyze files, and integrate with coding agents."
pubDate: 2026-10-22T18:00:00
heroImage: "https://images.unsplash.com/photo-1774901128283-64c62117216a?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "ai-tools", "developer", "how-to"]
noindex: false
---

Google released the experimental Gemini API CLI on October 19, 2026. The zero-dependency binary gives developers and coding agents direct access to Gemini models, media generation, and managed agents from the terminal.

Unlike the older Gemini CLI (now superseded by Antigravity CLI for unpaid users), this tool is purpose-built for shell pipelines and autonomous agents. Media commands write files straight to disk and print only the path, so agents stay focused without base64 bloat.

This guide walks through installation, authentication, core commands, and agent integration.

## Prerequisites

You need a Gemini API key from Google AI Studio. Create one at aistudio.google.com if you do not have one. The CLI works on macOS, Linux, and Windows. Go 1.26 or later is optional for building from source.

If you already integrate Gemini models in Android apps, the same API key works here. See our guide on [adding Gemini 4 Argon to Android with Firebase AI Logic](/blog/add-gemini-4-argon-android-firebase-ai-logic/) for related setup.

![Developer terminal with code and command output](https://images.unsplash.com/photo-1743090660977-babf07732432?auto=format&fit=crop&w=800&q=80)

## Install the CLI

On macOS and Linux, run the official installer:

```bash
curl -fsSL https://raw.githubusercontent.com/google-gemini/gemini-api-cli/main/scripts/install.sh | bash
```

On Windows PowerShell:

```powershell
iwr -useb https://raw.githubusercontent.com/google-gemini/gemini-api-cli/main/scripts/install.ps1 | iex
```

Alternatively, if you have Go installed:

```bash
go install github.com/google-gemini/gemini-api-cli/cmd/gemini-api@latest
```

Verify the install with `gemini-api version`. Prebuilt binaries are also available on the GitHub releases page.

## Authenticate

Export your API key:

```bash
export GEMINI_API_KEY="YOUR_API_KEY"
```

Or store it persistently:

```bash
gemini-api configure --api-key "YOUR_API_KEY"
```

Check the active configuration:

```bash
gemini-api whoami
```

Test offline without a network call:

```bash
gemini-api generate "Hello from the CLI" --dry-run
```

The dry-run flag validates the request and redacts credentials.

## Generate content and media

List available models:

```bash
gemini-api models
```

Generate text:

```bash
gemini-api generate "Explain the difference between a REST API and a webhook in two sentences."
```

Generate an image (writes the file and prints the path):

```bash
gemini-api image "Isometric icon of a distributed database" --out ./assets/
```

Generate video:

```bash
gemini-api video "A slow camera move through a sunlit workshop" --out ./assets/
```

Create multi-speaker TTS:

```bash
gemini-api tts "Alice: Deployment succeeded! Bob: Let's ship it." --multi-speaker "Alice=Kore,Bob=Puck" --out ./assets/
```

Generate music:

```bash
gemini-api music "Lo-fi ambient background track for a focus app" --out ./assets/
```

Analyze a local PDF:

```bash
gemini-api analyze -i architecture.pdf "Summarize the key bottlenecks"
```

Transcribe audio to SRT:

```bash
gemini-api transcribe -i earnings_call.mp3 --format srt --out earnings_call.srt
```

![Laptop screen showing code and terminal](https://images.unsplash.com/photo-1762242298589-582f5f6c3fb1?auto=format&fit=crop&w=800&q=80)

## Use with coding agents

Any agent with shell access can call the CLI, including Antigravity, Claude Code, Codex, Cursor, and custom loops. The binary is self-describing: agents can inspect commands with `--help` or `--usage`, check schemas with `--schema`, and validate offline with `--dry-run`.

Add this block to your agent's instructions file (AGENTS.md, CLAUDE.md, or similar):

```
You have access to gemini-api through the shell.
Use it to call Gemini models, generate or edit media, analyze files, or launch managed agents.
1. Inspect --help or --usage to choose a command, and --schema when building a --body JSON payload.
2. Preview API calls with --dry-run (or --dry-run --output-format json).
3. For discrete JSON output or --jq filtering on streaming/background commands, pass --stream=false --output-format json.
4. Capture returned file paths and interaction IDs to continue multi-step tasks.
```

Then prompt the agent: "Build the landing page. Use the gemini-api CLI to generate a hero image and a welcome voiceover."

For background research, start a managed agent:

```bash
INTERACTION_ID=$(gemini-api agent run "Research battery recycling approaches and cite sources" \
  --agent deep-research-preview-04-2026 \
  --background \
  --stream=false \
  --jq '.id')

gemini-api agent status "$INTERACTION_ID" --stream=false --output-format json
```

## Tips for production use

Prefer the typed Google Gen AI SDKs (Python, TypeScript, Go, Java) for application backends. Use the CLI for interactive terminal work, shell scripts, and agent loops.

Media generation commands write files to disk by default. This keeps agent context windows clean. Use `--output-format json` or `--jq` when you need structured data.

The current release is experimental (v0.4.x) and evolves alongside the Interactions API. Report issues on the GitHub repository.

Gemini 4 Argon and other frontier models are available through the same API key when your account is on the paid tier. Introductory pricing for Argon runs through November 30, 2026.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/iOK1-b_9Dlg"
    title="Get started with the Interactions API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

The Gemini API CLI turns terminal sessions and coding agents into first-class Gemini clients. Install the binary, set your API key, and start generating media or delegating research without writing throwaway scripts. Check the official announcement and GitHub repository for the latest command surface and feedback.

**Sources**

- Google AI Studio: Introducing the Gemini API CLI (October 19, 2026)
- GitHub: google-gemini/gemini-api-cli README and installation instructions
- Gemini API documentation for models and Interactions API
