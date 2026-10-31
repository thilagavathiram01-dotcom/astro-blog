---
title: "Register Android Apps in Google Connected Console for Gemini"
description: "Step-by-step guide to registering your Android app with AppFunctions in the Google Connected Console for Gemini and Search integration."
pubDate: 2026-10-31T14:00:00
heroImage: "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "gemini", "tutorials", "how-to", "developer", "ai-tools", "google"]
noindex: false
---

Google's Connected Apps Platform, announced at Android Dev Summit 2026, lets developers bring app capabilities into Gemini and Search. For Android apps, this uses Android MCP powered by the AppFunctions API.

This guide walks through registering an Android MCP connected app in Google Connected Console. It covers prerequisites, creation, details, bundle upload, testing, and publishing. Follow the official Android Developers documentation for the latest steps.<grok type="render_inline_citation" citation_id="128" />

## Prerequisites Before You Start

You need a registered developer account in Google Connected Console. An account owner or admin must accept the Connected Apps Terms of Service on first access.

Your Play app must exist in the same account. Each Play app links to only one Android MCP connected app. Configure a default store listing with an icon and supported languages. The Play app's languages and country targeting set availability.

Prepare an Android App Bundle (.aab) that targets Android mobile devices and includes implemented AppFunctions. Gather public metadata: category, app name, 512x512 icon (JPEG or PNG under 1 MB), description under 30 words, at least three capabilities, at least three example prompts, Privacy Policy URL, and Terms of Service URL.<grok type="render_inline_citation" citation_id="150" />

If you have not added AppFunctions yet, see the guide on [adding AppFunctions to your Android app](/blog/add-appfunctions-to-android-app/).

![Android developer workspace with laptop and phone](https://images.unsplash.com/photo-1778146448308-149ff6244135?auto=format&fit=crop&w=800&q=80)

## Step 1: Create the Connected App and Link Your Play App

Sign in to Google Connected Console. On the Home page, select Create app.

In the Choose what to create dialog, accept terms if prompted, then select Create under the Connected app card.

Enter a name. This appears across Google products and is used for @ mentions in Gemini.

Select a category. Categories set baseline capabilities and cannot change later.

Choose Android MCP as the connection type. You can select only one type per app, and it cannot change.

Select Create connected app. Then choose the Play app that contains your AppFunctions. Linked apps cannot be reselected.

This opens the management overview for further configuration.<grok type="render_inline_citation" citation_id="128" />

## Step 2: Add Connected App Details

On the management page, under the Android MCP card, select Add app details.

Confirm or update the connected app name.

Upload the 512x512 icon.

Enter a concise description under 30 words that summarizes main features.

Add at least three capabilities. Do not start with numbers. Category-defined capabilities appear at the top and cannot be modified.

Add at least three example prompts. Start at least two with @YourAppName. Mention the app name naturally in at least one without starting with it. Avoid numbered prefixes or quotes.

Provide Terms of Service and Privacy Policy URLs. A website URL is optional.

For multi-language support, wrap text in locale tags such as <en-US>text</en-US>. Console validates and shows detected locales.<grok type="render_inline_citation" citation_id="128" />

## Step 3: Upload the App Bundle and Submit

After saving details, upload the .aab containing AppFunctions.

From the Android MCP card, select Upload app bundle, or go to your Play app's Testing > Internal testing and create a release.

Upload the bundle. Confirm detected AppFunctions, tool count, languages, and country targeting. Fix any validation issues.

Select Submit connected app and continue. This submits the version for Gemini preview testing.

Leave the Play release in Draft if you want to iterate without incrementing the version code. Publishing locks the version code.<grok type="render_inline_citation" citation_id="128" />

![Multiple monitors in a coding setup](https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=800&q=80)

## Step 4: Verify the Version

On the connected app management page, select View next to Versions.

Confirm the submitted version appears under Available to testers. It shows the version number, submission date, and app bundle version code.

Select View on a row to inspect detected AppFunctions and the app details snapshot.

## Step 5: Test On-Device

Add testers on the Manage testers page. Only listed @gmail.com accounts can access the unpublished app. Include your own address.

Testers open Gemini, type @ followed by the app name, or go to Settings & help > Connected apps.

Requirements: signed-in Android phone or tablet on a listed account, running the exact app build matching the submitted version code.

Test all example prompts, both @ invocations and natural language. Verify parameters, confirmations, and execution.<grok type="render_inline_citation" citation_id="128" />

## Step 6: Publish to Production

Android MCP connected apps do not need a separate review on the management page. Google reviews and publishes automatically when you release the Play app version containing the AppFunctions bundle to production.

Complete testing, then roll out the Play production release. Review times may increase because of the combined check.

Track traffic, latency, and error rates in the console once live. You control brand identity including verified logos.<grok type="render_inline_citation" citation_id="150" />

## Watch the Android Dev Summit Keynote

The Connected Apps Platform and Android MCP were highlighted in the Android Dev Summit 2026 keynote.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/8Lmv7LGgL4E"
    title="Android Dev Summit 2026 keynote"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for Success

Choose the category carefully. It locks after creation and sets capability requirements.

Prepare high-quality example prompts. They teach users how to invoke your app.

Test thoroughly with multiple accounts before production rollout. Confirmations for state-changing actions are required.

Start with a small set of high-value AppFunctions. Expand after validation.

Monitor the console metrics after launch to refine performance.

## Conclusion

Registering an Android app in Google Connected Console connects your AppFunctions to Gemini on Android. Users gain direct access to your features through natural language without leaving the conversation.

The process is self-service in the preview. Apply for access if needed, implement AppFunctions, and follow the steps above. Official documentation at developer.android.com and developers.google.com/connected-apps provides the authoritative reference.<grok type="render_inline_citation" citation_id="151" />

## Sources

- Android Developers: Create and manage Connected Apps using AppFunctions and Android MCP
- Google Blog: New Connected Apps Platform launches for developers
- Google for Developers: Connected Apps Platform overview
- Android Dev Summit 2026 keynote
