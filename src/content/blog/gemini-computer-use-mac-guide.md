---
title: "How to Use Gemini Computer Use on Your Mac"
description: "Complete guide to Gemini computer use on Mac. Enable settings, run tasks with @Computer use, control apps safely, and stay productive."
pubDate: 2026-11-23T14:00:00
heroImage: "https://images.unsplash.com/photo-1690384058153-09d5cfe13690?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "ai-tools", "productivity", "google"]
noindex: false
---

Google added computer use to the Gemini app for Mac on November 19, 2026. You describe a multi-step task, and Gemini clicks, types, navigates menus, and fills forms across your desktop apps and the web. It works in an isolated background window with a live preview in your chat. Your main screen and cursor stay free so you can continue working.

This feature saves time on repetitive chores that normally require dozens of clicks. Google recommends Gemini 4 Hydrogen or a newer model for better results. Availability is limited at launch.

## What computer use does

Gemini handles interactions inside selected apps. It can extract details from local PDFs and enter them into shipping forms. It can pull metrics and screenshots from dashboards and build a Google Slides deck. It can sort photos in Lightroom or set a desktop background from a browser search.

You stay in control. You choose which apps Gemini can access. You watch every step in the live preview. You can stop the task at any time. Gemini pauses for logins, payments, and other sensitive actions and asks for confirmation before continuing.

The feature runs only in the Gemini Mac app. It does not appear in the web version or on other platforms yet.

![Person working at a desk with a MacBook and external monitor](https://images.unsplash.com/photo-1690384058153-09d5cfe13690?auto=format&fit=crop&w=800&q=80)

## Requirements and availability

You need the following to use computer use:

- Apple Silicon Mac running macOS Sequoia 15.0 or later.
- Personal Google account (not work or school).
- Age 18 or older.
- Google AI Plus, Pro, or Ultra subscription.
- English language and United States location (rolling out).

Download the Gemini app for Mac from gemini.google/mac if you do not already have it. Sign in with your personal account. Computer use is not available on Intel Macs, free accounts, or work/school accounts at launch. Google has not announced timelines for other countries or Windows.

For better quality, select Gemini 4 Hydrogen or a newer model in the app before starting tasks. If you work with Gemini models on Android, see our related guide on [adding Gemini 4 Hydrogen to Android with Firebase AI Logic](/blog/add-gemini-4-hydrogen-android-firebase-ai-logic/).

## Turn on computer use

Open the Gemini app on your Mac. Click Gemini in the menu bar, then Settings, or press Command + comma. Select Computer use in the side menu.

Turn on Allow Gemini to work with your Mac. The app will prompt you to enable Accessibility and Screen & System Audio Recording in System Settings if they are not already on. These permissions let Gemini see and interact with your desktop apps.

You can also turn on Use on-demand file backups. Gemini tries to create temporary backups of files before making changes. Backups last 24 hours or until the next prompt. You can review them from the chat via View backups. Not every app supports backups due to its own permissions.

![MacBook on a clean white desk with keyboard and mouse](https://images.unsplash.com/photo-1740924874302-0126c4119b5c?auto=format&fit=crop&w=800&q=80)

## Manage app access

In the same Computer use settings, you can build Allowed apps and Blocked apps lists.

To block an app, click Add app under Blocked apps and select it. Gemini will never open or control that app. To allow an app without repeated prompts, add it under Allowed apps. Hover over any listed app and click Remove to take it off the list.

The first time Gemini needs a new app during a task, it asks whether to deny access, allow once, or always allow. Choosing always allow adds the app to your Allowed apps list. A one-time or deny choice applies only to that step or chat and does not change the permanent settings.

## Start and run a task

Open the Gemini app. Below the chat box, click Task. Type your request and include @Computer use. Describe the source, the actions, and the desired output clearly. For example: “Take the butterfly sketch in my Downloads folder, model and rig it in Blender, then export a PNG preview.”

Gemini works on a virtual screen in the background. A live preview appears in the chat. Click Full screen for a larger view. Click Stop task at any time to end the run. You can continue using your main desktop while Gemini works.

Google’s official demo shows this process with a child’s sketch turned into a rigged 3D model in Blender. The same pattern works for document extraction, photo editing, presentation building, and form filling.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/dp9x8EMAE9I"
    title="Turn a Sketch Into a Rigged 3D Model With Computer Use in the Gemini App for Mac"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical tips for better results

Write complete instructions in one prompt. Include the specific files or folders, the apps to use, and the exact output you expect. Vague requests such as “process my photos” usually lead to clarifying questions.

Start with simple test data. Confirm permissions and backups work before running tasks on important files. Watch the live preview, especially on the first few runs with a new app.

Gemini pauses for logins and payments rather than entering those details itself. It also asks for confirmation on key actions. Grant the narrowest access needed for the task.

## Safety considerations

Agentic tools can make mistakes or behave unexpectedly. Gemini can access logged-in sessions inside native Mac apps, not only Chrome. It can read multi-factor authentication codes if they appear on screen. Untrusted content in one allowed app could influence actions in another.

Some actions are irreversible even with backups. Automating certain third-party apps may conflict with their terms of service. You are responsible for the apps you instruct Gemini to use. Review Google’s guidance on agentic AI risks in the Gemini Help Center before relying on the feature for sensitive work.

## Conclusion

Gemini computer use on Mac turns multi-step desktop chores into a single prompt. Enable it in Settings, manage app permissions carefully, and start tasks with @Computer use in Task mode. Keep an eye on the live preview and use the stop control when needed.

The feature is rolling out to eligible Google AI Plus, Pro, and Ultra subscribers in the United States on Apple Silicon Macs. Check the official Gemini Help page and the November 19 announcement for the latest availability and details.

**Sources**

- Blog.google: Automate Mac tasks with Gemini computer use (November 19, 2026)
- Google Support: Use Gemini to work with apps on your Mac
- Official Google Gemini YouTube demo: Turn a Sketch Into a Rigged 3D Model With Computer Use
