---
title: "How to Install Claude Artifacts as Desktop Apps"
description: "Step-by-step guide to install Claude artifacts as standalone Mac and Windows desktop apps. Covers permissions, limits, and official Anthropic details."
pubDate: 2026-11-26T15:00:00
heroImage: "https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "ai", "productivity"]
noindex: false
---

Anthropic released the Install as app beta on November 24, 2026. You can now turn a Claude artifact into a standalone desktop application on Mac or Windows. The app gets its own icon and window. It opens outside the main Claude interface while still running on your Claude account.

This feature works on Free, Pro, Max, Ultra, Team, and Enterprise plans. It requires Claude for Mac or Claude for Windows version 6.28899.0 or later. Linux, web, and mobile are not supported. Some artifacts, including those from Claude Docs, Slides, and Sheets templates, cannot be installed.

![Programmer working at a multi-monitor desk setup](https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=800&q=80)

## What Install as app does

An installed app displays the same artifact in its own window. When you or another editor updates the artifact, the app updates automatically. You must stay online and signed in to Claude Desktop to open it. Building the app and any requests it makes to Claude count toward your plan usage limits.

The app can use your existing Claude connectors. With your permission, it can also send notifications, respond to global keyboard shortcuts, float over other windows, or add a menu bar item on macOS or a system tray icon on Windows. Full computer access lets it run programs and read, change, or delete files without repeated prompts. Anthropic does not review apps before installation.

You can only grant full access to apps you created, or, on Team and Enterprise plans, apps created by people in your organization. A warning appears if Claude cannot confirm the creator.

## Update Claude Desktop first

Check your version before you start. On macOS, open Claude and choose Check for Updates from the Claude menu. On Windows, open the menu button and select Help > Check for Updates. You need version 6.28899.0 or later.

If the Install as app option does not appear, update and restart. On Team plans the feature is on by default, but full computer access stays off until an admin enables it. On Enterprise plans an owner must turn the feature on under Organization settings > Artifacts. HIPAA-ready organizations and hybrid deployments cannot use it.

## Build or open an artifact

Describe the tool you want in a Claude chat. Anthropic’s help center gives these examples:

- Make a Pomodoro timer that lives in my menu bar.
- Make a small Mac app that reminds me to stretch every hour.
- Make a Windows app that renames the photos in a folder by date.

Test the artifact in the main Claude Desktop window until it works the way you need. You can also open an existing artifact you already use. The install option is only available when the artifact is open in the main window, not from a small preview panel.

## Install the app

Follow these steps:

1. Open the artifact in the main Claude Desktop window.
2. Open the artifact’s title menu or right-click the artifact.
3. Select Install as app.
4. Choose Install to confirm.

The same option appears under Share. You can also ask Claude to add an install button inside the artifact. Claude always asks you to confirm, no matter which path you use.

On macOS the app lands in the Claude Apps folder inside the Applications folder in your home directory. You can find it in Spotlight and the Apps launcher. Right-click the icon and choose Options > Keep in Dock to pin it. On Windows it appears in the Start menu under Claude Apps and as a desktop shortcut. You can also open installed apps from File > Apps inside Claude Desktop.

![Laptop displaying code on a clean desk](https://images.unsplash.com/photo-1756946565798-382eb6bfeda2?auto=format&fit=crop&w=800&q=80)

## Understand the permission levels

Every installed app starts with browser-level abilities. Anything beyond that triggers an Allow or Don’t allow prompt. An Allow covers only the current version. After any update, including your own edits, Claude asks again. A Don’t allow stays until you change it.

The levels are:

- **Default**: Only what the artifact could do in a browser.
- **App permissions**: Features Claude can tightly control, such as always-on-top windows, global keyboard shortcuts, or notifications.
- **Full access to this computer**: Run programs and read, change, or delete files without asking each time. This also covers the permissions above unless you or your organization turned them off.

If part of the app loads code from another website, that code can change without a new permission request. Grant full access only to apps you trust. Turning off full access can reload or close the app, so save work first. It stops programs the app started, except any that separated themselves.

To change permissions on macOS, open the app, click its name in the menu bar, and select Permissions. On Windows, right-click the title bar or press Alt+Space and select Permissions. Inside Claude Desktop, go to File > Apps, select the app, and choose Permissions.

## Tips for daily use

Keep the artifact focused. A single clear job produces a more reliable app than a long list of features. Test thoroughly before you install. Once installed, the app still needs an internet connection and a signed-in Claude Desktop session.

Edit the underlying artifact whenever you want to improve the app. The installed version updates automatically and prompts for permissions again. Share the artifact with teammates if you want them to install their own copies. On Team and Enterprise, shared apps from your organization can receive full access more easily.

If an app misbehaves, uninstall it from File > Apps in Claude Desktop. Select the app and choose Uninstall. Reporting is also available from the same menu when the option appears.

For related Claude workflows inside Google tools, see the guide on [accessing Claude Opus 5.5 in Google Antigravity](/blog/access-claude-opus-5-5-google-antigravity/).

![Modern desk with laptop, keyboard, and mouse](https://images.unsplash.com/photo-1764755932155-dabbee87df7e?auto=format&fit=crop&w=800&q=80)

## Conclusion

Install as app turns frequently used Claude artifacts into ordinary desktop programs on Mac and Windows. Update Claude Desktop, open a working artifact, choose Install as app, and set only the permissions you need. The app stays tied to the artifact, updates with it, and runs on your existing Claude account. Start with a simple timer or reminder, then expand once you see how the permission model behaves on your machine.

## Sources

- [Turn artifacts into Mac and Windows apps](https://claude.com/resources/articles/install-as-app) — Anthropic, November 24, 2026
- [Install an artifact as an app](https://support.claude.com/en/articles/18516354-install-an-artifact-as-an-app) — Claude Help Center

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/fPXDMks4ZIk"
    title="Claude Artifacts Are Now Real Desktop Apps!"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
