---
title: "How to Use Codex in ChatGPT Mobile on Android"
description: "Step-by-step guide to set up and use OpenAI Codex from the ChatGPT mobile app on Android for remote coding tasks, reviews, and approvals."
pubDate: 2026-10-27T15:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["chatgpt", "tutorials", "how-to", "ai-tools", "developer"]
noindex: false
---

You can now start, steer, and review coding tasks from your Android phone while Codex keeps working on your laptop, Mac mini, or remote machine. OpenAI added Codex to the ChatGPT mobile app in May 2026 as a preview. It is now generally available with one-to-one device pairing, notifications, and improved review tools.

The phone acts as a control surface. Your files, credentials, and project setup stay on the host computer where Codex actually runs. Updates such as screenshots, terminal output, diffs, and approval requests appear on the phone in real time.

This guide walks through the requirements, connection steps, and everyday use on Android.

![Person coding on a laptop at night](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## What you need before you start

Update both apps first. On Android, open the Play Store, search for ChatGPT, and install the latest version. On your computer, update the Codex or ChatGPT desktop app (macOS support arrived first; Windows support followed).

You need a ChatGPT account. Codex in the mobile app works across plans, including Free and Go, in supported regions. The host machine must stay awake and online while you work from the phone.

Only pair devices you own and trust. The connection gives the mobile app visibility into active threads, plugins, and project context on the host.

## Connect your phone to a host machine

1. Open the ChatGPT desktop app on your Mac or Windows PC.
2. Go to Settings, then Connections, then Control this Mac or PC (wording may vary slightly by version).
3. Select Set up or Add and approve remote access. Complete any verification the app requests.
4. A QR code appears. On your Android phone, open the ChatGPT app and look for the Codex or Remote section in the navigation.
5. Scan the QR code, sign in to the same ChatGPT account, and approve the connection.

Once connected, the mobile app loads the live state from that environment. You can switch between connected machines if you have more than one.

![Laptop and smartphone on a desk](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## Start and manage tasks from Android

Open the Codex area in the ChatGPT app. You will see active threads and projects from the connected host.

To start something new:
- Choose the connected computer and project.
- Describe the task in natural language. Example: “Add unit tests for the authentication module and fix any failures.”
- Codex begins work on the host. Progress, terminal output, and diffs stream back to your phone.

You can:
- Review outputs and diffs before they are applied.
- Approve or reject commands Codex wants to run.
- Switch models mid-task if you need a different capability.
- Send follow-up instructions or start a parallel thread.

Side chat, file previews, and inline review comments are available in the current version. Notifications alert you when Codex finishes a step or needs input.

## Practical tips for better results

Keep the host machine from sleeping. Use system settings or a utility that prevents sleep while the lid is closed if you are away from the desk.

Start with small, low-risk tasks the first time. Confirm that diffs render correctly and approvals work before handing over larger changes.

Use clear, specific prompts. Mention the files or modules involved and the expected outcome. You can refine the request after you see the first output.

If the connection drops, reopen the Codex section in the mobile app and re-scan or re-approve if prompted. The host continues running the task independently.

For more on related ChatGPT features on mobile, see our guide on [ChatGPT Codex usage and task widgets](/blog/chatgpt-ios-codex-usage-task-widgets/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/tk9qrk5G4RQ"
    title="Now in preview: Codex in the ChatGPT mobile app."
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Troubleshooting common issues

The Codex tab is missing. Update the ChatGPT app, force-close it, and reopen. Server-side rollout can take a short time after an update.

QR code scan fails. Confirm both devices are on the same network or that the desktop app allows the connection. Re-generate the code and try again.

No live updates appear. Check that the host is awake and the desktop app is still running. Restart the connection from Settings on the computer.

Windows host not available. Support was added after the initial macOS release. Update the desktop app and check the Connections section again.

## What stays on the host

Your code, credentials, environment variables, and local tools never move to the phone. The mobile app receives only the outputs Codex chooses to share: diffs, logs, screenshots, and approval requests. This design keeps sensitive material on the machine you already trust for development.

You can disconnect the phone at any time from the desktop app settings. Future connections require a fresh pairing.

## Conclusion

Codex in the ChatGPT mobile app lets you stay involved with longer-running coding work without remaining at your desk. Setup takes a few minutes: update both apps, pair via QR code, and start sending tasks. Once connected, you review results, approve actions, and keep projects moving from your Android phone.

Try a small task today and see how the remote workflow fits your routine. As OpenAI continues to improve pairing security and review tools, the experience becomes more reliable for daily use.

## Sources

- OpenAI: Work with Codex from anywhere (May 14, 2026)
- ChatGPT Learn: Codex on mobile
- OpenAI official YouTube announcement video
- OpenAI Developers updates on general availability and pairing improvements
