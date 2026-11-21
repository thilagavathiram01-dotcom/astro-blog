---
title: "How to Enable Claude Computer Use for Team Plans"
description: "Step-by-step guide to turn on Claude computer use for Team and Enterprise plans, set app restrictions, and start safe desktop automation."
pubDate: 2026-11-21T15:00:00
heroImage: "https://images.unsplash.com/photo-1763191213523-1489179a1088?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "ai"]
noindex: false
---

Claude computer use lets the model see a user's screen and work inside approved desktop apps on Claude Desktop. The feature arrived in beta for Team and Enterprise plans in mid-November 2026 and stays off until an owner enables it.

This guide shows admins how to turn it on, limit access, and restrict apps, then shows users how to start a session. All steps come from Anthropic's official Help Center articles.

![Team workspace with multiple computers and desks](https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=800&q=80)

## Prerequisites

Computer use works only in the new Claude experience where Chat and Cowork unified is turned on. It runs from Claude Desktop on macOS 14 or later and Windows. Users can also reach it from Claude on the web or mobile when the organization's Computer access setting is on and Claude Desktop stays open on the target computer.

It does not work in tasks started with the separate Cowork option or inside Claude Code. Organizations with HIPAA-ready configuration, Zero Data Retention for Claude Code, customer-managed encryption keys, or FERPA/K-12 settings cannot enable it.

Owners should review the safety guidance before they switch the feature on. Computer use has no sandbox between Claude and the apps a user approves. Content on screen can influence Claude's actions, and approved apps can open or change files outside connected folders.

## Enable Computer Use for the Organization

Only an Owner or Primary Owner can change the setting.

1. Sign in to Claude as an Owner or Primary Owner.
2. Go to Organization settings > Capabilities.
3. Confirm that Chat and Cowork unified is on. Computer use requires it.
4. Under Claude Desktop, find Computer use and turn it on.
5. On Enterprise plans a role list appears. Clear every custom role that should not receive the feature, then click Turn on.

The change can take about an hour, sometimes longer, to reach each user's Claude Desktop. Until it does, Claude can still use previously approved apps.

Team plans have no custom roles, so the toggle covers every user. On Enterprise plans you can keep the feature from specific users by adjusting their roles before you turn it on. Wait 15 minutes after you change a role, then enable the organization setting.

## Restrict Apps with Block and Allow Lists

Under the same Capabilities page, the App access setting lets you control which applications Claude may touch.

Choose either Block these apps or Allow only these apps. An empty allow list blocks everything until you add the first app. Users still approve each app the first time Claude asks to use it.

To add apps:

1. Navigate to Organization settings > Capabilities.
2. Under Claude Desktop find App access below Computer use.
3. Select the list type.
4. Click Add app.
5. Search common apps or enter an app ID (Mac bundle ID such as com.microsoft.Excel, or Windows file name such as excel.exe).
6. Click Done.

Changes take roughly an hour to propagate. Claude Desktop does not show users the list, but the IDs are sent to their computers. Avoid putting confidential details in the list.

Some items remain outside the lists: Claude in Chrome, the built-in browser, Claude Code, desktop extensions, websites, browser extensions, remote desktop windows, and apps on other accounts. Windows notifications and the Start menu stay visible in screenshots even for blocked apps.

![Modern desk setup with laptop and monitor](https://images.unsplash.com/photo-1787112831662-e545dd89d316?auto=format&fit=crop&w=800&q=80)

## Start a Computer Use Session as a User

Once the organization setting is live:

1. Install or update the latest Claude Desktop from claude.com/download.
2. Open the app and go to Settings > Capabilities (or Settings > System > This computer if the section is missing).
3. Turn on Enable computer use if it is not already active.
4. Start a chat in the new Claude experience.
5. Ask Claude to perform a task that needs a desktop app. Claude requests permission for each new app.

On macOS 15 or later, Claude works in background windows by default so your main cursor stays free. You can switch to full control in the Computer use settings if you prefer Claude to take the screen.

Claude tries connectors and the browser first. It falls back to screen interaction only when those options cannot finish the task. You can stop Claude at any time. Some app categories (certain browsers, trading apps, terminals) receive limited or no typing access even after approval.

## Safety Tips

Close sensitive documents and apps before you start. Claude captures screenshots that stay with the chat and can be reviewed by Anthropic's automated checks. Do not approve banking, healthcare, or password-manager apps.

Start with simple, clearly worded tasks. Specify the exact outcome and which apps to use. Review every action that Claude proposes for forms, messages, or file changes.

If you manage devices with MDM, you can force computer use off on individual computers with the computerUseEnabled policy key. The organization setting still controls the default.

## Related Features

Teams already using Claude Meetings can combine live meeting notes with later desktop automation. See the existing guide on [how to use Claude Meetings with Google Meet](/blog/how-to-use-claude-meetings-google-meet/).

## Conclusion

Claude computer use gives Team and Enterprise organizations a controlled way to let the model handle multi-step desktop work. Owners enable it once, set role and app limits, and users approve individual applications. The beta remains off by default and rolls out gradually, so check Organization settings if the toggle is missing.

Keep the safety notes in view, start with low-risk tasks, and watch the first few runs. The combination of per-app permission, block lists, and the ability to stop at any moment keeps the feature usable without giving Claude unrestricted access to the machine.

## Sources

- Anthropic Help Center: Set up computer use for Team and Enterprise plans
- Anthropic Help Center: Let Claude use your computer in Cowork
- Claude official resources on the new unified experience

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/vH2f7cjXjKI"
    title="Claude | Computer use for coding"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
