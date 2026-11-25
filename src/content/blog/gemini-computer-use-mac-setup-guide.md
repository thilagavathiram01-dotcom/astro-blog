---
title: "How to Set Up Gemini Computer Use on Mac"
description: "Step-by-step guide to enable Gemini computer use on Mac, requirements, Task mode with @Computer use, safety settings, and practical examples."
pubDate: 2026-11-25T10:00:00
heroImage: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "how-to"]
noindex: false
---

Google added computer use to the Gemini app for Mac on 19 November 2026. You describe a multi-step task, and Gemini clicks, types, navigates menus, and fills forms across local files, desktop apps, and the web. It runs in an isolated background window with a live preview in chat, so your main screen and cursor stay free.

This guide covers the requirements, how to turn the feature on, how to start a task, and the safety controls Google built in. It draws from the official Gemini blog post and support documentation.

## Requirements for Gemini computer use

You need an Apple Silicon Mac (M1 or later) running macOS Sequoia 15.0 or later. Intel Macs are not supported. Sign in with a personal Google account belonging to someone 18 or older. Work and school accounts are excluded at launch.

A Google AI Plus, Pro, or Ultra subscription is required. The feature is rolling out in English in the United States. Download the Gemini app from gemini.google/mac if you do not already have it.

![MacBook Pro open on a dark desk](https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&w=800&q=80)

## Enable computer use and permissions

Open the Gemini app on your Mac. Click Gemini in the menu bar, then Settings (or press Command + comma). Select Computer use in the side menu.

Turn on Allow Gemini to work with your Mac. macOS will prompt for Accessibility and Screen & System Audio Recording if they are not already granted. Approve both. These permissions let Gemini see and interact with apps in its virtual screen.

You can also turn on Use on-demand file backups. Gemini tries to create temporary backups of files before it changes them. Backups last 24 hours or until the next prompt. You can review them later in the chat via View backups.

### Block or allow specific apps

Under Blocked apps, click Add app to prevent Gemini from opening particular programs. Under Allowed apps, add programs you want Gemini to use without repeated confirmation in chat. Removing an app from either list restores the default prompt behavior.

Choosing Always allow during a task adds that app to the Allowed list permanently. Selecting Don’t allow or Allow once applies only to that step or chat.

## Start a computer use task

Open the Gemini app and click Task below the chat box. Type your request and include @Computer use. For example: “Extract the weights, dimensions, and addresses from the PDFs in Downloads and fill out the shipping quote form. @Computer use”

Gemini works in a virtual screen so your normal desktop remains available. A live preview appears in the chat. Click Full screen for a larger view. You can click Stop task at any time.

The first time Gemini needs an app, it asks whether to deny, allow, or always allow access. For sensitive actions it pauses and requests confirmation. For related browser-based computer use in other systems, see [how to run browser tasks with the Agents API](/blog/agents-api-computer-use-browser-tasks/).

## Practical examples

Google’s announcement lists several starting points:

- Batch color-grade photos in design software or set up complex 3D scenes.
- Pull weights, dimensions, and addresses from local PDFs to complete multi-box shipping quotes.
- Pull metrics and screenshots from live dashboards and build a presentation in Google Slides.
- Analyze clothing photos in a local folder, research pricing, and stage listings on resale platforms.

In the official demo, a user asks Gemini to model and rig a child’s butterfly sketch in Blender. Gemini checks the workspace, creates and textures the model, and works through the app while the user continues other work.

![MacBook Pro next to an external monitor on a white desk](https://images.unsplash.com/photo-1497296805880-3b37686c87ea?auto=format&fit=crop&w=800&q=80)

## Safety controls and risks

You choose which apps Gemini can access. You watch every step in the live preview, pause or stop at any moment, and approve key actions before they happen. Gemini is designed to ask before sensitive steps such as purchases.

Google’s support documentation notes several risks of agentic computer use:

- Gemini can share information with desktop apps, not only websites.
- It can access logged-in accounts and active sessions inside native Mac apps.
- Some actions are irreversible even if backups are attempted.
- Untrusted content on screen can potentially influence Gemini to act in other allowed apps.
- Granting access to code editors or developer tools may enable broader file or shell actions.
- Gemini can see multi-factor authentication prompts visible in apps.
- Automating some third-party apps may conflict with those apps’ terms of service. You are responsible for the apps you instruct it to use.

Start with small, reversible tasks and review the preview carefully. Enable on-demand backups and keep sensitive apps on the blocked list until you are comfortable.

## Watch the official demo

Google published a short demo showing the butterfly sketch turned into a rigged 3D model in Blender using computer use.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/dp9x8EMAE9I"
    title="Turn a Sketch Into a Rigged 3D Model With Computer Use in the Gemini App for Mac"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for better results

- Prefer Gemini Hydrogen 4 or newer models when available for higher quality responses.
- Write clear, step-by-step prompts. Name the apps and folders involved.
- Keep your main cursor free; the background window is intentional.
- Review Allowed and Blocked app lists after a few tasks so permissions stay intentional.
- Check View backups if a file change needs to be undone.
- The feature is U.S. English only at launch. Availability may expand later; check the Gemini app or blog.google for updates.

## Conclusion

Gemini computer use on Mac lets paid subscribers hand off multi-step desktop and web chores while they continue working. Enable it in Settings, grant the required macOS permissions, switch to Task mode, and include @Computer use in your prompt. Use the app allow/block lists and live preview to stay in control.

The feature is currently limited to Apple Silicon Macs on macOS Sequoia, personal accounts 18+, and Google AI Plus/Pro/Ultra subscriptions in the U.S. English rollout.

## Sources

- [Automate Mac tasks with Gemini computer use](https://blog.google/innovation-and-ai/products/gemini-app/computer-use-mac/) — Google Blog, 19 November 2026
- [Use Gemini to work with apps on your Mac](https://support.google.com/gemini/answer/18956635) — Gemini Apps Help
- [Turn a Sketch Into a Rigged 3D Model With Computer Use in the Gemini App for Mac](https://www.youtube.com/watch?v=dp9x8EMAE9I) — Google Gemini, 19 November 2026
