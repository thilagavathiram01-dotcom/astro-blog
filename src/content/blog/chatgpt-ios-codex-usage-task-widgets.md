---
title: "Add ChatGPT Codex Usage Widgets on iPhone Home Screen"
description: "Add ChatGPT Codex usage and task widgets on iPhone after the iOS 1.2026.267 update. Track remaining limits, reset times, and recent computer tasks."
pubDate: 2026-10-09T12:30:00
heroImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["chatgpt", "tutorials", "productivity"]
noindex: false
---

ChatGPT for iOS 1.2026.267, logged on 2 October 2026, puts Codex status on the Home Screen and Lock Screen. One set of widgets shows recent tasks from the computers you select. Another tracks remaining usage and reset times. You no longer have to open the app just to see whether a run is waiting or a limit is close.

The same build also adds a setting that keeps the keyboard open after you send a message. A later build, 1.2026.272 on 7 October 2026, adds support for opening Codex task links directly on iOS. Update first, then add the widgets.

![iPhone on a desk, ready for a Home Screen widget setup](https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80)

## What the 2 October widgets actually show

OpenAI’s [ChatGPT and Codex changelog](https://learn.chatgpt.com/docs/changelog) lists two widget features for 1.2026.267:

- Home Screen widgets that show recent tasks from your selected computers.
- Home Screen and Lock Screen widgets that track remaining usage and reset times.

That matches an older in-app surface. On 6 July 2026, ChatGPT for iOS 1.2026.181 added usage limits and credit details to the task menu. The October widgets move the limits and reset timing onto the screen you already glance at.

The changelog does not publish exact widget names, sizes, or which plans get which tile. After you update, open the iOS widget gallery, choose ChatGPT, and swipe the available tiles. Pick the one that lists recent tasks, and the one that shows remaining usage and a reset time.

Codex on the phone is not new. On 14 May 2026, OpenAI shipped Codex in the ChatGPT mobile app in preview on iOS and Android, across plans including Free and Go, in supported regions. Files, credentials, and project setup stay on the machine where Codex is running. The phone receives updates such as screenshots, terminal output, diffs, test results, and approvals. The widgets sit on top of that connection. They do not run the agent on the phone.

## Update ChatGPT before you look for the tiles

Widgets only appear after the app build that includes them is installed.

1. Open the App Store on the iPhone.
2. Tap your profile icon, then tap ChatGPT if an update is listed. You can also search for ChatGPT and tap Update.
3. Confirm the installed version is 1.2026.267 or newer. 1.2026.272, released 7 October 2026, is the safer target because it also opens Codex task links from iOS.
4. Open ChatGPT and sign in to the account that already uses Codex.
5. If you work across hosts, connect the computer you want the task widget to follow. Codex in the mobile app loads live state from a machine where Codex is running, such as a laptop, a Mac mini, or a managed remote environment. The 14 May launch note said Windows host support was still coming; the 29 May 2026 Codex app changelog later added remote control for Windows devices.

If the gallery still shows only older ChatGPT shortcuts, force-quit the app, reopen it, and check the App Store again. Server-side flags can lag behind the binary, so a second check later the same day is reasonable.

## Add the Home Screen widgets

iOS uses the same widget flow for every app. ChatGPT does not get a separate installer.

1. Touch and hold an empty area of the Home Screen until the icons jiggle.
2. Tap the plus button, or tap Edit and then Add Widget.
3. Search for ChatGPT and tap the app.
4. Swipe the gallery. Add the tile that shows recent tasks from selected computers.
5. Swipe again and add the tile that shows remaining usage and reset times.
6. Tap Add Widget, place each tile, then tap Done.

Put the usage tile where you look before you start a long run. Put the task tile on the same page if you approve prompts from the phone. A larger tile is easier to read for task titles. A small tile is enough for a remaining-usage percentage and a reset countdown, if that layout is what the gallery offers on your phone.

The task widget follows computers you select, according to the changelog wording. If a host is offline, do not expect a live title. The 7 October build notes that new tasks keep your selected computer while it reconnects or is offline, which is a separate fix inside the app, not a promise that the widget can start work on a sleeping machine.

## Add the Lock Screen usage widget

The changelog specifically includes Lock Screen widgets for remaining usage and reset times. Task widgets are described for the Home Screen only.

1. Touch and hold the Lock Screen.
2. Tap Customize, then tap Lock Screen.
3. Tap the widget area under the clock.
4. Choose ChatGPT and pick the usage widget.
5. Tap Done, then close the editor.

Lock Screen space is small. Use it for the reset time, not for a task list. If the tile does not appear, confirm you are on 1.2026.267 or newer and that you are customizing the Lock Screen you actually use, not a spare wallpaper set.

![Developer reviewing code on a laptop while a phone sits nearby](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## Use the widgets with an active Codex host

A widget is a status surface. The work still runs on a connected computer or a cloud environment you already set up.

- Before a long task, glance at remaining usage and the reset time. If the window is nearly spent, queue the job after the reset or switch to a lighter model in the app.
- When a task title changes or a run needs input, open ChatGPT from the widget and approve or reply there. The May mobile preview is built for reviewing output, approving commands, and steering threads while the host keeps the files.
- If you publish a Codex Cloud environment, you can start and continue eligible cloud tasks from the phone after the environment exists. Model usage still counts toward normal Codex limits. See the setup notes in [publish a Codex Cloud environment for ChatGPT](/blog/publish-codex-cloud-environment-chatgpt/).
- On 7 October, task links open directly on iOS. If a desktop notification or a shared link points at a Codex task, the newer build should land in that task instead of a generic chat.

Usage numbers in the widget should match the limits already shown in the task menu since the 6 July build. If they disagree, trust the in-app task menu until the widget refreshes. Widgets update on iOS’s schedule, not on every token.

## Keep the keyboard open after send

Build 1.2026.267 also adds a setting to keep the keyboard open after you send a message. That is useful when you are approving a series of short replies from the phone.

Open ChatGPT settings on iOS and look for the keyboard option tied to sending a message. Turn it on if you send follow-ups in a row. Turn it off if the keyboard covers the diff or the approval controls.

The same build lists related fixes: faster task-list refresh when you return to the app, with existing titles preserved; fewer missing tasks while loading or scrolling; and recoverable text if you cancel a queued prompt. Those are app fixes, not widget features, but they make the widget-to-app hop less brittle.

## What these widgets do not do

- They do not raise your plan limit. Remaining usage is a readout of the limit you already have.
- They do not replace the Codex desktop app or CLI. The phone supervises a host. It does not become the host.
- They are not documented as an Android Home Screen feature in the 2 October iOS changelog. Codex itself is in the Android ChatGPT app from the May preview, but this widget note is filed under ChatGPT for iOS.
- Enterprise and Edu workspaces can still hide models or hosts. A widget cannot show a computer the account is not allowed to use.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/tk9qrk5G4RQ"
    title="Now in preview: Codex in the ChatGPT mobile app"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Quick checks if a tile is missing

1. Confirm the App Store version is 1.2026.267 or 1.2026.272.
2. Force-quit ChatGPT, reopen it, and sign in again.
3. Add the widget from the Home Screen gallery, not from a third-party launcher.
4. For usage on the Lock Screen, customize that Lock Screen and pick the ChatGPT usage tile.
5. For tasks, select a computer inside the app first. A widget cannot list tasks from a host you have not connected.

## Bottom line

Update ChatGPT on iPhone to 1.2026.267 or newer, then add the ChatGPT Home Screen widgets for recent tasks and for remaining usage plus reset times. Put usage on the Lock Screen if you want a glance before you unlock. Open the app from the tile when a task needs an approval. The phone still depends on a connected computer or an eligible cloud environment, and the numbers still come from your existing Codex limits.

## Sources

- OpenAI, ChatGPT and Codex changelog, 2 October 2026 (iOS 1.2026.267) and 7 October 2026 (iOS 1.2026.272): https://learn.chatgpt.com/docs/changelog
- OpenAI, Work with Codex from anywhere, 14 May 2026: https://openai.com/index/work-with-codex-from-anywhere/
- OpenAI YouTube, Now in preview: Codex in the ChatGPT mobile app: https://www.youtube.com/watch?v=tk9qrk5G4RQ
