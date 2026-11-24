---
title: "How to Set Up Gemini Computer Use on Mac (2026 Guide)"
description: "Enable Gemini computer use on Mac to automate multi-step tasks across apps and files in a background window. Apple Silicon required."
pubDate: 2026-11-24T14:00:00
heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "ai-tools", "productivity"]
noindex: false
---

Your Mac handles dozens of clicks for routine jobs every day. Gemini computer use lets the assistant take over those steps in desktop apps, local files, and the web while your screen stays free. Google rolled the feature out on 19 November 2026 for eligible U.S. users.

It runs inside an isolated background window with a live preview in your chat. You keep full control of your cursor and main display. The assistant pauses for approvals on sensitive actions and only touches apps you allow.

![MacBook on a clean desk workspace](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80)

## Requirements

You need an Apple Silicon Mac running macOS Sequoia 15.0 or later. Intel Macs are not supported. Sign in with a personal Google account (18 or older). Work and school accounts do not have access at launch.

A Google AI Plus, Pro, or Ultra subscription is required. The free tier does not include computer use. Use the feature in English in the United States. Download the Gemini app from gemini.google/mac if you do not already have it. The app needs at least 8 GB of RAM and 200 MB of free disk space.

For better responses, select Gemini Hydrogen 4 or a newer model in the app.

## Enable Computer Use

Open the Gemini app on your Mac. Click Gemini in the menu bar, then Settings, or press Command + comma. Select Computer use in the side menu.

Turn on Allow Gemini to work with your Mac. The app will prompt you to enable Accessibility and Screen & System Audio Recording in System Settings if those permissions are off. Grant them so Gemini can observe and interact with other apps.

Turn on Use on-demand file backups. Gemini tries to create temporary backups of files before it changes them. Backups last 24 hours or until the next prompt. You can review them later from the chat.

## Control Which Apps Gemini Can Use

Still in Computer use settings, manage access lists.

Under Blocked apps, click Add app and choose any program Gemini should never open. Under Allowed apps, add programs it can use without asking again in the chat.

The first time Gemini needs a new app during a task, it asks you to deny, allow once, or always allow. Choosing always allow adds it to the Allowed apps list. Temporary choices in a single chat do not change the permanent settings.

New desktop connectors such as Blender and Autodesk Fusion appear under Customize > Connectors alongside existing options like Git and Obsidian.

## Start a Computer Use Task

Open the Gemini app. Below the chat box, click Task. Type your request and include @Computer use so Gemini knows to take actions instead of only answering.

Example prompt: “Take the butterfly sketch in my Downloads folder, model it and rig it for me in Blender. @Computer use”

Gemini works in the background window. A live preview appears in the chat. Click Full screen for a larger view. Click Stop task at any time to end the work.

The assistant can click, type, scroll, and navigate menus. It can extract data from one app and use it in another, such as pulling details from PDFs into a form.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/dp9x8EMAE9I"
    title="Turn a Sketch Into a Rigged 3D Model With Computer Use in the Gemini App for Mac"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical Examples

Google shared these use cases at launch:

- Batch color-grade photos in design software or set up complex 3D scenes.
- Extract weights, dimensions, and addresses from local PDFs to fill multi-box shipping quotes.
- Pull metrics and screenshots from live dashboards and build a presentation in Google Slides.
- Analyze clothing photos from a folder, research pricing, and stage listings on resale platforms.

These match the multi-step chores that normally require dozens of clicks. You can chain results. Finish a design asset in one app, then ask Gemini to turn it into a mini-app with Visual Studio Code.

For background tasks that do not need local app control, see our guide to [free Gemini Tasks for daily assistance](/blog/how-to-use-free-gemini-tasks-for-daily-assistance/).

![Person working at a laptop with code on screen](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## Safety and Limits

Gemini can make mistakes. It has access to logged-in accounts and active sessions inside native Mac apps, not only websites. Some actions cannot be undone. Untrusted content on screen can potentially influence the assistant across allowed apps.

Granting access to code editors or developer tools may enable broader file or shell changes. Gemini can read multi-factor authentication prompts visible in other apps. Automating certain third-party apps may conflict with their terms of service. You remain responsible for which apps you allow.

Block banking, password manager, and other high-risk apps. Review the live preview before approving sensitive steps. Google documents these risks in its help center and notes that backups are not guaranteed for every app.

Computer use is currently limited to personal accounts in U.S. English on Apple Silicon. Expansion timing has not been announced.

## Tips for Reliable Results

Write clear, complete instructions. Specify the exact apps, folders, and outcome you want. Include constraints such as “do not delete any files” or “ask me before uploading.”

Start with a small task to test permissions and behavior. Watch the preview the first few times. Give feedback if the result misses the mark.

Keep the backup option enabled. Check View backups in the chat if you need to recover an earlier version.

Select a capable model such as Gemini Hydrogen 4 or newer for complex multi-app workflows.

## Conclusion

Gemini computer use turns the Mac app into an agent that finishes repetitive desktop work in the background. Setup takes a few minutes once you meet the hardware, account, and subscription requirements. Enable the feature, set app permissions, and start with a constrained prompt that includes @Computer use. Your main screen stays available while the assistant handles the clicks.

Sources:
- Google blog: Automate Mac tasks with Gemini computer use (19 November 2026)
- Google Gemini Apps Help: Use Gemini to work with apps on your Mac
- Official Google Gemini YouTube: Turn a Sketch Into a Rigged 3D Model With Computer Use in the Gemini App for Mac
