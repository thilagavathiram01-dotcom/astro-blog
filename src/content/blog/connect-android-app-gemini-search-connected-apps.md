---
title: "How to Connect Android Apps to Gemini and Search"
description: "Step-by-step guide to integrate your Android app with Gemini and Search using the Connected Apps Platform and AppFunctions."
pubDate: 2026-10-31T16:00:00
heroImage: "https://images.unsplash.com/photo-1757310998309-87a97e562ee5?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "how-to", "gemini", "ai-tools", "developer"]
noindex: false
---

Users already complete tasks inside the Gemini app and Google Search. The Connected Apps Platform, launched in preview at Android Dev Summit 2026, lets your Android app join that flow. Users link once, then Gemini or Search can call your on-device functions to finish real actions without leaving the conversation.

This guide shows how to prepare AppFunctions, register an Android MCP connected app in Google Connected Console, test with selected accounts, and publish so Gemini on Android can invoke your tools. The platform also supports cloud MCP servers for Search and the Gemini app across devices.

Over 50 partner apps already run between Search and Gemini. New partners such as Adobe, Peloton, Experian, and Localiza are live in Gemini, with Search support arriving soon. Calm is next. Your app can follow the same path once it passes review.

![Smartphone showing AI app icons including Gemini, ChatGPT, and Grok](https://images.unsplash.com/photo-1757310998309-87a97e562ee5?auto=format&fit=crop&w=800&q=80)

## Prerequisites

You need a Google Play developer account and an existing Play app. The Connected Apps Platform is currently in preview for US developers; apply at developers.google.com/connected-apps if you do not yet have access to Google Connected Console.

Your app must implement AppFunctions that run on Android 16 or higher. If you have not added them yet, follow the steps in our earlier guide: [Add AppFunctions to Your Android App](/blog/add-appfunctions-to-android-app/). The Jetpack library (currently in the 1.0.0-alpha series) generates the required service, XML schema, and metadata.

Prepare these assets before you start in the console:

- 512×512 px icon (JPEG or PNG, under 1 MB)
- Short description under 30 words
- At least three capabilities
- At least three example prompts (two starting with @YourAppName)
- Privacy Policy and Terms of Service URLs

Category choice is permanent, so select the domain that matches your use cases (productivity, shopping, health, etc.).

## Create the Android MCP Connected App

Sign in to Google Connected Console. On the Home page choose Create app, accept the Connected Apps Terms of Service if prompted (only an admin can do this), then select Create in the Connected app card.

Enter the display name users will type after the @ symbol. Choose your category. On the connection-type screen select Android MCP. You cannot change the connection type later, and each Play app can link to only one Android MCP connected app.

Link the existing Play app that contains (or will contain) your AppFunctions. Confirm the selection carefully; the link cannot be altered afterward. The management overview page opens.

## Add Public Details

On the Android MCP card click Add app details. Upload the 512×512 icon. Fill the description, capabilities, and example prompts. Wrap translations in language tags such as <en-US>text</en-US> if you support multiple locales. Provide the required policy and terms URLs.

These strings appear to users when they decide whether to connect and when Gemini suggests your tools. Clear, action-oriented language improves discovery.

![Google Gemini app listing in the Play Store](https://images.unsplash.com/photo-1788837368825-45c06f4a87cc?auto=format&fit=crop&w=800&q=80)

## Upload the App Bundle and Submit

From the Android MCP card choose Upload app bundle. This takes you to the linked Play app’s Test and release section. Create or edit a release on an internal testing track and upload the .aab that includes your AppFunctions.

After upload, the console detects the functions and shows the connected-app name, version code, tool count, and language count. Confirm automated checks pass. Then select Submit connected app and continue.

Leave the Play release in Draft if you plan to iterate without incrementing the version code. Once you publish a Play release, that version code is locked.

## Verify and Add Testers

Return to the connected-app Versions page. Your submission appears under Available to testers. Open it to inspect the detected AppFunctions and the snapshot of public details.

On the overview page open Manage testers. Create or select an email list containing only @gmail.com accounts. Include your own address. Save. Only listed testers can see the unpublished connected app inside Gemini.

Each tester must:

- Be signed in on an Android phone or tablet with a listed Google Account
- Run the exact app build whose version code matches the submitted bundle

## Test Inside Gemini

Open the Gemini app on a tester device. Type @ followed by your connected-app name and select it. Or go to Settings & help > Connected apps to view and connect the app.

Run every example prompt. Test both explicit @ invocations and natural-language requests that should surface your tools. Confirm parameter handling, confirmation cards for sensitive actions, and full execution. Gemini shows an interactive confirmation before actions such as bookings or purchases.

You can also prototype earlier with Gemini developer mode before the formal submission.

## Publish to Production

Unlike remote MCP apps, an Android MCP connected app does not require a separate Connected Console publish step. When you release the Play app version that contains the submitted AppFunctions bundle to production, Google reviews and publishes the connected app automatically.

After production rollout, users who have your app installed can connect it and invoke the functions from Gemini on Android. Search availability depends on the connection type and future platform expansion; Android MCP currently targets the on-device Gemini app.

## Tips for Reliable Integrations

- Start with one high-value, low-risk function so review and testing stay focused.
- Write precise KDoc and capability text; agents rely on them for correct tool selection.
- Require in-app confirmation for any irreversible or financial action even though Gemini also shows a confirmation card.
- Keep functions idempotent where possible and return clear error types.
- Monitor the Versions page and Play Console for validation feedback.
- Pin the AppFunctions library version and watch the Issue Tracker for alpha changes.

## Conclusion

The Connected Apps Platform turns AppFunctions into a distribution channel inside Gemini and, soon, Search. Users reach your features at the moment of intent instead of hunting for the app icon. Complete the console workflow, test with a small Gmail list, then ship the Play release that carries the functions. The same preview program that already hosts Adobe, Peloton, and dozens of other partners is open for new Android apps today.

## Sources

- Connected Apps Platform overview: https://developers.google.com/connected-apps
- Create and manage Connected Apps with AppFunctions: https://developer.android.com/ai/appfunctions/create-manage-connected-apps
- New Connected Apps Platform announcement: https://blog.google/innovation-and-ai/technology/developers-tools/connected-apps-one-place/
- Overview of AppFunctions: https://developer.android.com/ai/appfunctions
- Android Dev Summit session: Extend your app to Gemini and Search with the Connected Apps Platform

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/-4G-4w9FKDw"
    title="Extend your app to Gemini and Search with the Connected Apps Platform"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
