---
title: "How to Install Claude Artifacts as Desktop Apps"
description: "Turn Claude artifacts into Mac and Windows desktop apps with Install as app. Step-by-step guide, permissions, and tips."
pubDate: 2026-11-26T22:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "ai", "productivity"]
noindex: false
---

Anthropic released Install as app on November 24, 2026. The beta lets you turn any Claude artifact into a standalone desktop application on Mac or Windows. The app gets its own icon and window. It opens outside the main Claude client.

You do not package or sign the app. It runs on your existing Claude account. No separate API key is required. Requests the app makes to Claude count against your plan limits.

![Team collaborating around laptops in a modern workspace](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## What Install as app does

An artifact is the interactive tool or page Claude builds beside your chat. Install as app moves that tool onto your computer. You launch it from the Dock, Start menu, or Spotlight the same way you open any other program.

The installed app can use Claude and any connectors you have enabled. When you edit the underlying artifact, the desktop version updates automatically. Claude asks you to confirm permissions again after each update.

The feature is rolling out in beta on Free, Pro, Max, Ultra, Team, and Enterprise plans. It requires Claude for Mac or Claude for Windows version 6.28899.0 or later. Linux, web, and mobile are not supported.

Some artifacts cannot be installed. These include Claude Docs, Slides, Sheets, older legacy artifacts, and live artifacts from Claude Cowork.

## Update Claude Desktop first

Open Claude for Mac or Windows. Check for updates before you look for the Install option.

On macOS choose Claude > Check for Updates. On Windows open the menu button and select Help > Check for Updates. Restart the app if an update is available.

On Team plans the feature is on by default. Full computer access starts off until an admin enables it. On Enterprise plans an owner must turn the feature on first. HIPAA-ready organizations and hybrid deployments cannot use it.

## Build or open an artifact

Describe the tool you want in a new chat. Example prompts from Anthropic include a Pomodoro timer that lives in the menu bar, a stretch reminder, or a photo renamer that sorts files by date.

Test the artifact thoroughly while it is still inside Claude. Fix layout, logic, and connectors before you install it. You can also ask Claude to add its own Install as app button inside the artifact.

If you already have a useful artifact, open it in the main Claude Desktop window.

## Install the app

1. With the artifact open, click its title menu or right-click the artifact.
2. Choose Install as app. The same option appears under Share.
3. Confirm with Install.

The app installs in a few seconds. On macOS it appears in the Claude Apps folder inside your home Applications folder and in Spotlight. On Windows it appears in the Start menu under Claude Apps and as a desktop shortcut.

You must stay online and signed in to Claude to open the app. Closing the main Claude window does not close the installed app.

![Developer workspace with laptop and external monitor](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## Choose permission levels

Claude offers three tiers. Default permissions limit the app to what a browser tab could do. App permissions let it send notifications, respond to global keyboard shortcuts, stay always on top, or add a menu-bar item on macOS or system-tray icon on Windows.

Full computer access lets the app run programs and read, change, or delete files without asking each time. Anthropic does not review apps before installation. Only grant full access to apps you created or, on Team and Enterprise, apps created inside your organization.

You can change or revoke permissions later from the artifact or from Claude Desktop > File > Apps. Every update to the artifact triggers a fresh permission prompt.

## Practical tips

Start with default permissions. Add app-level features only after the core tool works. Keep usage in mind: a menu-bar app that checks Claude often will consume more of your monthly allowance.

Share the installed app with colleagues by sending them the artifact link. They install it under their own Claude accounts. Updates you publish propagate to everyone who has the app installed.

If Install as app is missing, confirm you are on version 6.28899.0 or later and that your plan or admin settings allow the beta.

For related Claude model access inside other tools, see the guide on [Access Claude Opus 5.5 in Google Antigravity](/blog/access-claude-opus-5-5-google-antigravity/).

## Limitations to know

The app is not offline. You need an active internet connection and a signed-in Claude session. Building the app and every subsequent Claude call count toward plan limits. No Linux, web, or mobile version exists at launch.

Template artifacts such as Docs, Slides, and Sheets cannot be installed. Older artifacts and Cowork live artifacts are also excluded.

## Conclusion

Install as app turns the tools you already build in Claude into real desktop applications. Update Claude Desktop, open a tested artifact, choose Install as app, and set the narrowest permissions that still let the tool do its job. The beta works on every plan for Mac and Windows users who stay online and signed in.

## Sources

- [Turn artifacts into Mac and Windows apps](https://claude.com/resources/articles/install-as-app) — Anthropic, November 24, 2026
- [Install an artifact as an app](https://support.claude.com/en/articles/18516354-install-an-artifact-as-an-app) — Claude Help Center
- Coverage from MacRumors, ZDNet, and Notebookcheck, November 25, 2026

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/fPXDMks4ZIk"
    title="Claude Artifacts Are Now Real Desktop Apps!"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
