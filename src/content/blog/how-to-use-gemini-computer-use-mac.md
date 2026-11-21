---
title: "How to Use Gemini Computer Use on Mac: Full Guide"
description: "Step-by-step tutorial on enabling and using Gemini Computer Use on Mac to automate desktop apps, local files, and the web. Requires Apple Silicon and paid plan."
pubDate: 2026-11-21T18:00:00
heroImage: "https://images.unsplash.com/photo-1781871522095-3bb9439f3bbe?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "ai-tools", "productivity"]
noindex: false
---

Google rolled out computer use in the Gemini app for Mac on November 19, 2026. You describe a multi-step task, and Gemini clicks, types, navigates menus, and fills forms across your local files, desktop apps, and the web. It runs in an isolated background window with a live preview in your chat, so your main screen and cursor stay free.<grok type="render_inline_citation" citation_id="135" />

This feature builds on Gemini Tasks. If you already use Tasks for calls or shopping, computer use extends that to native Mac apps. See our guide on [How to Use Tasks in Gemini for Personal Assistance](/blog/how-to-use-tasks-in-gemini-for-personal-assistance/).

## Prerequisites

You need an Apple Silicon Mac running macOS Sequoia 15.0 or later. Intel Macs are not supported. You must be 18 or older, signed into a personal Google Account (work and school accounts are excluded at launch), and hold a Google AI Plus, Pro, or Ultra subscription. The feature is rolling out in English in the United States.<grok type="render_inline_citation" citation_id="161" />

Download the Gemini Mac app from gemini.google/mac if you do not already have it. Enable the required macOS permissions: Accessibility and Screen & System Audio Recording. Google recommends Gemini 4 Hydrogen or a newer model for better results.

![MacBook on a wooden desk ready for AI automation](https://images.unsplash.com/photo-1758857087569-83791ac9edd5?auto=format&fit=crop&w=800&q=80)

## Enable Computer Use

Open the Gemini app on your Mac. Click Gemini in the menu bar, then Settings (or press ⌘ + ,). Select Computer use in the sidebar. Turn on Allow Gemini to work with your Mac. The app will prompt you to enable the two macOS permissions if they are off.

Optionally turn on Use on-demand file backups so Gemini can create temporary copies of files before changing them. Backups last 24 hours or until the next prompt. You can review them from View backups in a chat.

Manage app access under the same Computer use settings. Add apps to Allowed apps to skip confirmation, or add them to Blocked apps to prevent access entirely. Per-task choices (deny, allow once, or always allow) do not permanently change these lists unless you pick always allow.

## Start a Task with @Computer use

In the Gemini app, click Task below the chat box. Type @Computer use followed by a clear description of the job. Gemini plans the steps, then executes them in the background window. A live preview appears in the chat. Click Full screen for a larger view, or Stop task at any time.<grok type="render_inline_citation" citation_id="171" />

The first time Gemini needs a new app, it asks whether to deny access, allow once, or always allow. Sensitive actions (logins, payments, irreversible changes) require your explicit approval. Gemini pauses for those steps.

Example prompt: “Take the butterfly sketch in my Downloads folder, model it and rig it in Blender. @Computer use”

## Practical Examples

**Creative workflows.** Batch color-grade a folder of photos in your design app, or set up a 3D scene. Google’s launch demo shows Gemini turning a child’s sketch into a textured, rigged butterfly model in Blender.<grok type="render_inline_citation" citation_id="135" />

**Skip manual form entry.** Extract weights, dimensions, and addresses from local PDFs and fill multi-box shipping quotes. The same pattern works for expense reports or supplier forms.

**Build presentations from live data.** Pull metrics and screenshots from dashboards across regions and assemble them into a Google Slides deck.

**Batch product listings.** Analyze clothing photos in a local folder, research pricing, log details, and stage listings on resale platforms. Review before publishing.

![Apple Mac Mini setup on a clean desk](https://images.unsplash.com/photo-1735810501839-2b607933eece?auto=format&fit=crop&w=800&q=80)

## Safety Controls

You choose which apps Gemini can open. You watch every step in the live preview. You can pause or stop the task instantly. Key actions require approval. Google warns that agentic AI can make mistakes, that untrusted on-screen content can influence the agent, and that certain apps may allow broader file or shell access. Automating third-party apps may conflict with their terms of service—you are responsible for the apps you select.<grok type="render_inline_citation" citation_id="171" />

Start with low-risk tasks. Grant the narrowest set of apps needed. Verify outputs before they leave your machine.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/d8hPM3Eezp4"
    title="Google Just Launched Gemini Computer Use for Mac — 5 Ways to Use It in Your Business"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Troubleshooting

If computer use does not appear, confirm you are on a personal account in the US, using English, and that your subscription is active. Restart the Gemini app after enabling the macOS permissions. Check System Settings > Privacy & Security for Accessibility and Screen Recording. If an app is blocked, remove it from the Blocked list. For model quality issues, switch to Gemini 4 Hydrogen or newer in the app settings.

Computer use is currently limited to the Mac app. No Windows or Chromebook support has been announced. Expansion outside the US and English has no timeline.

## Conclusion

Gemini Computer Use on Mac removes repetitive clicking across desktop apps and the web while leaving your screen free. Enable it in Settings, start tasks with @Computer use, keep permissions tight, and approve sensitive steps. Pair it with existing Gemini Tasks for a fuller automation setup. Official details are on the [Google blog post](https://blog.google/innovation-and-ai/products/gemini-app/computer-use-mac/) and the [Gemini Apps Help page](https://support.google.com/gemini/answer/18956635).

## Sources

- Google blog: Automate Mac tasks with Gemini computer use (November 19, 2026)
- Gemini Apps Help: Use Gemini to work with apps on your Mac
- TechCrunch, The Verge, and Android Authority coverage of the November 19 announcement
