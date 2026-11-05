---
title: "How to Publish AppFunctions as Gemini Connected Apps"
description: "Step-by-step guide to create Android MCP Connected Apps with AppFunctions and publish them for Gemini users via Google Connected Console."
pubDate: 2026-11-05T10:00:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "how-to", "ai", "gemini"]
noindex: false
---

Android developers can now expose app capabilities directly to Gemini through the Connected Apps Platform. The Android MCP path uses AppFunctions so Gemini on Android phones and tablets can trigger actions inside your app on the user’s device.

This guide walks through the end-to-end process in Google Connected Console. You will create a connected app, link it to your Play app, upload a bundle that contains AppFunctions, test with selected accounts, and publish to production users.

![Android smartphone displaying app icons](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## Prerequisites

Before you start, confirm the following:

- Access to a Google Connected Console developer account. An account admin must accept the Connected Apps Terms of Service the first time.
- An existing Play app in the same account. Each Play app links to only one Android MCP connected app.
- An Android App Bundle that already implements AppFunctions and targets mobile devices.
- Prepared metadata: category, 512×512 icon (JPEG or PNG under 1 MB), description under 30 words, at least three capabilities, at least three example prompts, Privacy Policy URL, and Terms of Service URL.

AppFunctions require Android 16 or higher. If you have not yet added the functions to your code, follow the official implementation steps or our earlier guide on [adding AppFunctions to an Android app](/blog/add-appfunctions-to-android-app/).

## Create the Android MCP connected app

Sign in to [Google Connected Console](https://play.google.com/console/developers). On the Home page select Create app.

In the dialog choose Create under the Connected app card. Enter a name. This name appears to users and is the handle they type after @ in Gemini.

Select a category. Categories set baseline capability requirements and cannot be changed later. Then choose Android MCP as the connection type. You can select only one connection type per app and cannot switch it afterward.

Link the connected app to your existing Play app. Play apps already linked to another connected app are unavailable. Once selected, the Play app cannot be changed.

The management overview page opens. From here you configure public details, upload bundles, manage testers, and track versions.

## Provide public details

On the connected app management page, open the Android MCP card and select Add app details.

Upload the 512×512 icon. Enter a concise description. Add at least three capabilities that describe high-value tasks. Add at least three example prompts. Two prompts should start with @YourAppName. One prompt should mention the app name naturally without a leading @.

You can supply translations by wrapping text in language tags such as <en-US> and <es-ES>. Connected Console validates the tags and lists detected locales.

Enter valid https URLs for Terms of Service and Privacy Policy. An optional website URL can appear for attribution.

Save the details. These assets form the public card users see when they decide whether to connect the app in Gemini.

![Developer working with mobile devices and code](https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80)

## Upload the AppFunctions bundle

Return to the Android MCP card and select Upload app bundle. This takes you to the linked Play app’s Test and release section.

Create a new release on an internal testing track (or edit a draft). Upload the .aab that contains your AppFunctions, or add a previously uploaded bundle from the library.

After upload, the release page shows an “App functions were detected” section. Confirm the connected app name, version code, tool count, languages, and country targeting. Automated checks should report no issues.

Select Submit connected app and continue. This submits the AppFunctions version for preview testing. Leave the Play release in Draft if you want to iterate without locking the version code. Publishing a Play release locks the version code so later changes require an incremented version.

## Verify the version and add testers

On the connected app overview, open Versions. Your submitted version appears under Available to testers with the bundle version code and submission date. Select a version to inspect the detected AppFunctions and the snapshot of app details.

Only accounts you add as testers can see the unpublished connected app. Open Manage testers, create or select email lists, and include your own @gmail.com address. Save the list.

Testers must be signed in on an Android mobile device or tablet with the exact app build whose version code matches the submitted bundle. They invoke the app in Gemini by typing @ followed by the connected app name, or by browsing Settings & help > Connected apps.

Test every example prompt, both explicit @ mentions and natural-language queries. Check parameter handling, confirmation flows, and full end-to-end execution of each AppFunction.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/p-PsFV6TpRU"
    title="How to make your Android app smarter with AppFunctions API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Publish to production

Android MCP connected apps do not require a separate Connected Console review step. Google reviews the AppFunctions together with the Play app’s production release. When that production release is approved and rolled out, the connected app becomes available to users in the countries and languages targeted by your Play store listing.

Open the linked Play app in Connected Console, promote the tested release to production, and complete the release details. After rollout, Gemini users can connect the app and invoke its functions.

## Tips for a smooth launch

Keep the first set of AppFunctions focused on high-intent tasks users already perform in your app. Clear KDoc comments on the functions improve how Gemini selects and fills parameters.

Test on physical devices running Android 16 or higher. Emulators may not fully exercise the system agent path.

Monitor the Versions page after submission. If automated checks flag issues, fix them in a new bundle with an incremented version code before resubmitting.

Remember that availability follows your Play app’s store listing languages and country targeting. Update those settings if you want broader or narrower reach.

## Conclusion

The Connected Apps Platform lets Android developers expose on-device AppFunctions to Gemini through a self-service console flow. By creating an Android MCP connected app, linking it to an existing Play app, uploading a bundle, testing with selected accounts, and rolling out to production, you make your app’s capabilities available where users already ask Gemini for help.

Start with a small set of well-documented functions, verify them thoroughly with testers, then expand. Official documentation on [AppFunctions](https://developer.android.com/ai/appfunctions) and the [Connected Apps creation guide](https://developer.android.com/ai/appfunctions/create-manage-connected-apps) provides the latest details as the platform evolves.

## Sources

- [Create and manage Connected Apps using AppFunctions and Android MCP](https://developer.android.com/ai/appfunctions/create-manage-connected-apps) — Android Developers
- [Overview of AppFunctions](https://developer.android.com/ai/appfunctions) — Android Developers
- [Build and manage Connected Apps in one place](https://blog.google/innovation-and-ai/technology/developers-tools/connected-apps-one-place/) — Google Blog
- [How to make your Android app smarter with AppFunctions API](https://www.youtube.com/watch?v=p-PsFV6TpRU) — Android Developers (YouTube)
