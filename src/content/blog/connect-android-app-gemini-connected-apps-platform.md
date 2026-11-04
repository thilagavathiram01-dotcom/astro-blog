---
title: "Connect Your Android App to Gemini with Connected Apps"
description: "Step-by-step guide to integrate your Android app with Gemini using Connected Apps Platform and AppFunctions for on-device actions."
pubDate: 2026-11-04T14:00:00
heroImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "gemini", "tutorials", "ai-tools"]
noindex: false
---

Google launched the Connected Apps Platform preview on 28 October 2026 at Android Dev Summit. It lets developers expose app capabilities so users can complete tasks in Gemini (and Search for remote paths) without switching apps. Users link once; after that Gemini can read live data and trigger actions with explicit confirmation for state-changing operations.

Two paths exist. A remote MCP server reaches Gemini and Search across web, Android, and iOS. Android MCP uses Jetpack AppFunctions so tools run locally on the device and reach Gemini on Android phones and tablets. This guide focuses on the Android path because it fits native apps that already hold data on-device. You implement AppFunctions, register in Google Connected Console, link a Play app, test with Gmail accounts, and publish when the containing Play release goes to production.


![Android smartphone displaying AI app icons including Gemini](https://images.unsplash.com/photo-1757310998309-87a97e562ee5?auto=format&fit=crop&w=800&q=80)


## Choose the right path and prepare prerequisites

Android MCP is best when tool execution must stay on-device for privacy or offline access. Remote MCP is preferred when you need Search reach or cross-platform coverage. You pick one connection type per connected app and cannot change it later.

Before you start:

- You need access to Google Connected Console. An account admin must accept the Connected Apps Terms of Service the first time.
- Your Play app must already exist in the same developer account with a default store listing, icon, and supported languages. Country and language targeting on the listing control where the connected app is available. Each Play app links to only one Android MCP connected app.
- Prepare a 512×512 px icon (JPEG or PNG, under 1 MB), a short description under 30 words, at least three capabilities, at least three example prompts, Privacy Policy URL, and Terms of Service URL.
- Build an Android App Bundle that targets mobile devices and contains your AppFunctions. AppFunctions require Android 16 or higher and the Jetpack AppFunctions library (currently alpha).

Implement AppFunctions first so the bundle can be detected. See the existing guide on [adding AppFunctions to an Android app](/blog/add-appfunctions-to-android-app/) for the library setup and function declaration pattern.

## Create the connected app and link your Play app

Sign in to Google Connected Console. On the Home page select Create app. Accept the terms if prompted (admin only). Choose the Connected app card, give the app a display name (this is the name users type after @ in Gemini), select a category, then choose the Android MCP connection type. Category cannot be changed after creation.

Link the existing Play app that will contain the AppFunctions. Once selected, the Play app cannot be changed. The management overview page opens for configuration, versions, and testers.

## Add public details and example prompts

On the connected app management page, open the Android MCP card and select Add app details. Confirm or edit the connected app name. Upload the 512×512 icon. Enter the description (concise, under 30 words). Add at least three capabilities that describe high-value tasks. Add at least three example prompts: at least two must start with @YourAppName, and at least one must mention the app name naturally without a leading @. Avoid numbered prefixes or quotation marks around prompts.

You can localize description, capabilities, and prompts by wrapping text in language tags such as <en-US>…</en-US> and <es-ES>…</es-ES>. Connected Console validates the tags. Provide the Privacy Policy and Terms of Service URLs. A website URL is optional for attribution.

## Upload the bundle and submit for testing

Return to the Android MCP card and select Upload app bundle (or go directly to the linked Play app’s Testing track). Create or edit a release, upload the .aab that contains the AppFunctions, or add it from the library. After upload, the release page shows detected AppFunctions, tool count, languages, and country targeting. Confirm automated checks pass, then select Submit connected app and continue.

This makes the version available to testers and advances the Play release to preview. Leave the Play release in Draft if you want to iterate without locking the version code. Publishing locks the version code so later changes require an incremented version.

## Add testers and verify on device

On the connected app overview, open Manage testers and add Gmail addresses (include your own). Only listed accounts can see the unpublished connected app. Testers must be signed in on an Android phone or tablet with the exact app build whose version code matches the submitted bundle.

In the Gemini app, type @ followed by the connected app name and select it, or open Settings & help > Connected apps. Test every example prompt, both explicit @ mentions and natural-language queries. Confirm parameter handling, confirmation dialogs for state-changing actions, and end-to-end execution.


![Developer working on a laptop with code and a phone nearby](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)


## Publish to production

Unlike remote MCP apps, an Android MCP connected app does not require a separate Connected Console review step. Google reviews and publishes it automatically when you release the Play app version that contains the AppFunctions bundle to production. Complete internal testing, then promote the release. Availability follows the Play listing’s languages and country targeting.

## Tips for a smooth launch

Start with a small set of high-value, well-described functions so Gemini can invoke them reliably. Write clear tool descriptions and example prompts; they influence discovery and invocation. Keep confirmation flows short and specific. Monitor the Connected Console for traffic, latency, and errors after launch. Because the Android path is experimental, expect API changes before general availability. For cross-platform or Search reach, evaluate a remote MCP server in parallel.

The official Android Developers session walks through the full flow:

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/-4G-4w9FKDw"
    title="Extend your app to Gemini and Search with the Connected Apps Platform"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Connected Apps Platform gives Android apps a standard way to surface on-device actions inside Gemini. Implement AppFunctions, register and link in Google Connected Console, test with real Gmail accounts, then ship through a normal Play production release. The result is users completing tasks in Gemini while your app stays in control of data and confirmation.

## Sources

- Google for Developers: Connected Apps Platform overview
- Android Developers: Create and manage Connected Apps using AppFunctions and Android MCP
- Android Developers Blog: Agentic and Flexible announcements (28 Oct 2026)
- Android Dev Summit session: Extend your app to Gemini and Search with the Connected Apps Platform
