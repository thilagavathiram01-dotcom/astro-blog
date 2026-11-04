---
title: "Connect Your Android App to Gemini: Connected Apps Guide"
description: "Step-by-step guide to integrate your Android app with Gemini using the Connected Apps Platform, AppFunctions, and Android MCP."
pubDate: 2026-11-04T12:30:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "gemini", "tutorials", "developer"]
noindex: false
---

Users now ask Gemini to complete tasks across apps instead of opening each one separately. Google’s Connected Apps Platform, launched in preview at Android Dev Summit on October 28, 2026, lets your Android app expose actions that Gemini can trigger on-device.<grok type="render_inline_citation" citation_id="77" />

This guide shows how to prepare AppFunctions, register an Android MCP connected app in Google Connected Console, test with selected accounts, and publish so Gemini on Android can call your features.

![Android phone showing app icons](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## What the Connected Apps Platform offers

Two integration paths exist. A cloud-hosted MCP server reaches Search and Gemini across web, Android, and iOS. Android MCP uses the AppFunctions API so Gemini on Android devices can invoke your app’s capabilities locally.<grok type="render_inline_citation" citation_id="80" />

AppFunctions is Android’s unified tool-calling layer, now in beta. Your app declares discrete functions with clear schemas. Gemini discovers them and executes them on the user’s device after they connect your app.<grok type="render_inline_citation" citation_id="89" />

The platform is in preview. You request access, then use Google Connected Console to create the connected app, link your Play listing, upload an app bundle, add testers, and ship.

## Prerequisites before you start

You need a Google Play developer account with an existing Play app. The app must have a default store listing that includes an icon and supported languages. Country and language targeting on the Play listing controls where the connected app becomes available.<grok type="render_inline_citation" citation_id="106" />

Your Android project must target mobile devices and include implemented AppFunctions. Compile against a recent SDK (compileSdk 36 or higher is recommended for the Jetpack library). You also need a 512×512 icon (JPEG or PNG, under 1 MB), a short description, at least three capabilities, at least three example prompts, a Privacy Policy URL, and a Terms of Service URL.

An account admin must accept the Connected Apps Terms of Service the first time your organization uses the feature.

## Step 1: Implement AppFunctions in your app

Add the AppFunctions Jetpack library to your module. Define functions that agents can call. Each function needs a clear name, description, and parameter schema so Gemini understands when and how to use it.

Build an Android App Bundle (.aab) that contains these functions. Keep the version code ready for upload. If you already have guidance on exposing functions, see our earlier article on [adding AppFunctions to an Android app](/blog/add-appfunctions-to-android-app/).

Test the functions locally with your own agent first. Once they work, proceed to registration.

## Step 2: Create the connected app in Google Connected Console

Sign in to Google Connected Console. On the Home page, choose Create app. Accept the Terms of Service if prompted (only an admin can do this). Select the Connected app option.<grok type="render_inline_citation" citation_id="106" />

Name the connected app. This name appears in Google products and is what users type after @ to mention it. Choose a category that matches your domain. Select Android MCP as the connection type. You cannot change the connection type later.

Link the existing Play app that will contain the AppFunctions. Each Play app can link to only one Android MCP connected app. Confirm the selection carefully.

![Developer working on a laptop with code](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Step 3: Add public details and capabilities

Open the connected app management page. Under the Android MCP card, add app details. Upload the 512×512 icon. Write a concise description under 30 words that explains what the app does for users.<grok type="render_inline_citation" citation_id="106" />

List at least three capabilities. These are the high-value tasks users will see. Add at least three example prompts. Two should start with @YourAppName. One should mention the app name naturally without the @ prefix. Avoid numbered lists or quotation marks.

Supply the Privacy Policy and Terms of Service URLs. A website URL is optional. You can include multi-language text by wrapping translations in language tags; the console validates them.

Save the details before uploading any bundle.

## Step 4: Upload the app bundle and submit for testing

From the connected app page, choose to upload an app bundle. This takes you to your linked Play app’s test track (internal testing is common). Upload the .aab that contains the AppFunctions, or add one already in your library.<grok type="render_inline_citation" citation_id="106" />

After upload, the release page shows detected AppFunctions. Check the tool count, languages, and country targeting. Fix any validation errors. Select Submit connected app and continue. This sends the version to Gemini for preview testing and moves the Play release forward.

Leaving the Play release in draft lets you iterate without locking the version code. Once published, you must increment the version code for changes.

## Step 5: Add testers and verify on device

Return to the connected app overview. Add testers by email list. Only @gmail.com accounts you add can see the unpublished connected app. Include your own address.<grok type="render_inline_citation" citation_id="106" />

Testers open the Gemini app on an Android phone or tablet signed in with a listed account. They must run the exact app build whose version code matches the submitted bundle. They invoke the app by typing @ followed by the connected app name, or find it under Settings & help > Connected apps.

Test every example prompt, both @ mentions and natural language queries. Confirm parameter handling and end-to-end execution.

## Step 6: Publish to production

Android MCP connected apps do not need a separate publish action in Connected Console. When you release the Play app version that contains the AppFunctions bundle to production, Google reviews and publishes the connected app automatically for the countries and languages targeted by your Play listing.<grok type="render_inline_citation" citation_id="106" />

Complete testing first. Then promote the release in Play Console as you normally would.

## Tips for a smooth integration

Write clear, single-purpose functions. Gemini performs best with concise tool descriptions. Test both explicit @ invocations and open-ended questions that should trigger your app.

Keep the connected app name short and memorable. Users will type it after @. Update example prompts after you see real usage patterns.

Because the feature is in preview, expect changes to APIs and console flows. Monitor the Android Developers documentation for updates.

## Conclusion

The Connected Apps Platform lets Gemini on Android call actions inside your app without users leaving the conversation. Start by implementing AppFunctions, register an Android MCP connected app, test with a small group, then release the Play bundle. The same Play listing controls availability, so your existing distribution setup continues to work.

Official resources:
- [Create and manage Connected Apps using AppFunctions](https://developer.android.com/ai/appfunctions/create-manage-connected-apps)
- [Connected Apps Platform announcement](https://blog.google/innovation-and-ai/technology/developers-tools/connected-apps-one-place/)
- [Android Dev Summit talk](https://www.youtube.com/watch?v=-4G-4w9FKDw)

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/-4G-4w9FKDw"
    title="Extend your app to Gemini and Search with the Connected Apps Platform"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
