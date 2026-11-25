---
title: "How to Install Claude Artifacts as Desktop Apps"
description: "Step-by-step guide to turn Claude artifacts into standalone Mac and Windows apps with Install as app, permissions, and tips."
pubDate: 2026-11-25T14:00:00
heroImage: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to"]
noindex: false
---

Claude artifacts no longer have to stay inside a chat window. Anthropic’s new Install as app feature, released in beta on November 24, 2026, lets you turn an artifact into a standalone desktop application on Mac or Windows.

The installed app gets its own icon and window. It opens like any other program. It can send notifications, add menu bar or system tray items, and use your Claude connectors. You do not package, sign, or supply an API key. The app runs on your existing Claude account.

This guide shows exactly how to update Claude, build or open an artifact, install it, set permissions, and manage the app afterward. All steps come from Anthropic’s announcement and help center documentation.

## What Install as App Does

Artifacts began as shareable outputs such as charts or simple pages. Many people now treat them as daily tools—meeting prep pages, order trackers, or small utilities. Install as app moves those tools out of the Claude window so they behave like regular desktop software.

Once installed, the app stays linked to the original artifact. When you or another editor updates the artifact, the app updates automatically. You must stay online and signed in to Claude Desktop to launch it. Requests the app makes to Claude count against your plan’s usage limits.

Some artifact types cannot be installed, including Claude Docs, Slides, and Sheets. Browser shortcuts such as “Add to Dock” or “Add to Home Screen” do not unlock the same desktop features.

![Person coding on a laptop with a plant nearby](https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=800&q=80)

## Requirements and Availability

You need the Claude desktop app for Mac or Windows, version 6.28899.0 or later. The feature is rolling out in beta across Free, Pro, Max, Ultra, Team, and Enterprise plans.

On Team plans it is enabled by default, but full computer access starts off until an admin turns it on. On Enterprise plans the entire feature stays off until an owner enables it under Organization settings > Artifacts. HIPAA-ready organizations and hybrid deployments cannot use it.

Update first. On Mac choose Claude > Check for Updates. On Windows open the menu button and select Help > Check for Updates.

## Build or Open an Artifact

You can install an existing artifact or create a new one. Open Claude Desktop and describe what you want. Helpful starting prompts from Anthropic’s documentation include:

- Make a Pomodoro timer that lives in my menu bar.
- Make a small Mac app that reminds me to stretch every hour.
- Make a Windows app that renames the photos in a folder by date.

Claude generates the artifact. Review and refine it in the conversation until it works the way you need. Then proceed to installation.

## Install the Artifact as an App

1. Open the artifact inside the main Claude Desktop window.
2. Open the artifact’s title menu or right-click the artifact.
3. Select Install as app.
4. Confirm by selecting Install.

You can also find Install as app under the Share menu. Some artifacts can even include their own install button if you ask Claude to add one. Claude always asks you to confirm before the app is created.

After installation the app appears with its own icon. On macOS look in the Claude Apps folder inside your home Applications folder. On Windows check the Start menu’s Claude Apps folder or the desktop shortcut.

## Open and Manage the App

On macOS open the app from the Claude Apps folder, Spotlight, or the Apps launcher. To pin it, right-click the icon and choose Options > Keep in Dock.

On Windows launch it from the Start menu or the desktop shortcut.

Inside Claude Desktop you can also select Open installed app on the artifact, or go to File > Apps, choose the app, and select Open. On Windows the File menu sits under the menu button.

Apps that place a menu bar item or system tray icon keep running after you close their window. Quit them from the Dock or system tray when you want them to stop.

![Programmer working at a multi-monitor desk](https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=800&q=80)

## Understand the Three Permission Levels

Every installed app starts with limited access. You grant additional permissions explicitly. Anthropic defines three levels:

- Default: The app can only do what it could do inside a browser.
- App permissions: The app can request controlled features such as notifications, global keyboard shortcuts, always-on-top windows, or a menu bar / system tray icon.
- Full computer access: The app can run programs and read, change, or delete files without asking each time. This also covers the app-level permissions unless your organization has restricted them.

Your “Allow” decision applies only to the current version. After any update—including your own edits—Claude asks again. A “Don’t allow” stays until you change it. If part of the app loads code from another site, that code can change without a new prompt.

You can only grant full computer access to apps you created yourself, or, on Team and Enterprise plans, apps created by people in your organization. Anthropic does not review apps before installation, so grant full access only to apps you trust.

To change permissions later, open the app and select Permissions from its menu (macOS menu bar or Windows title bar), or use File > Apps inside Claude Desktop. Turning off full access may reload or close the app, so save work first.

## Tips for Safe and Useful Apps

Start with default permissions and add only what the app needs. A Pomodoro timer might need a menu bar item and notifications; a file renamer needs full access.

Test thoroughly before sharing. Installed apps can be shared with other Claude users. They update when the underlying artifact changes, so version carefully.

Monitor usage. Every call the app makes to Claude counts against your plan limits. An app that checks data frequently can consume allowance faster than a normal chat session.

If you also use Claude Ship for GitHub pull-request automation, the same careful permission habits apply. Review what each tool can do before granting broad access. See our guide on [using Claude Ship for automated PR reviews](/blog/using-claude-ship-for-automated-pr-reviews-on-github/).

## Uninstall When You Are Done

Open Claude Desktop, go to File > Apps, select the app, and choose Uninstall. This removes the desktop application. The original artifact remains in your Claude account unless you delete it separately.

## Conclusion

Install as app turns Claude artifacts into practical desktop tools without the usual packaging steps. Update Claude Desktop, create or open an artifact, choose Install as app, and set the permissions that match the job. The feature is still in beta, so check for updates and read the latest help documentation if menus differ on your account.

With a few minutes of setup you can keep everyday utilities in the dock or taskbar, ready whenever you need them.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/zhztepls8Yw"
    title="Anthropic Just Dropped Claude Apps (Build One in 1 Sentence)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- Anthropic, “Turn artifacts into Mac and Windows apps,” November 24, 2026. https://claude.com/resources/articles/install-as-app
- Claude Help Center, “Install an artifact as an app.” https://support.claude.com/en/articles/18516354-install-an-artifact-as-an-app
