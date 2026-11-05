---
title: "How to Connect Android Apps to Gemini via Connected Apps Platform"
description: "Register your Android app with the Connected Apps Platform using Android MCP and AppFunctions so Gemini can trigger actions on-device."
pubDate: 2026-11-05T16:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "gemini", "tutorials", "developer", "ai-tools"]
noindex: false
---

Google introduced the Connected Apps Platform preview at Android Dev Summit on 28 October 2026. It lets developers surface app actions inside Gemini and Search without building separate integrations for each surface.<grok type="render_inline_citation" citation_id="109" />

For Android apps the path runs through Android MCP, powered by the AppFunctions API (now in beta). Once registered, users can mention your app with @ or describe a task in natural language and Gemini executes it on the device.<grok type="render_inline_citation" citation_id="105" />

This guide covers the self-service workflow in Google Connected Console: create the connected app, link your Play listing, upload an App Bundle that contains AppFunctions, test with Gmail accounts, and publish when you release to production.

## What you need before starting

You need a Google Play developer account that already contains the app you want to connect. Each Play app can link to only one Android MCP connected app.<grok type="render_inline_citation" citation_id="105" />

An account owner or admin must accept the Connected Apps Terms of Service the first time the organisation uses the feature. Team members then need the “View Connected Apps” or “Create and manage Connected Apps” permission plus release-management rights on the Play app.

Your App Bundle must implement AppFunctions and target Android mobile devices. Store-listing assets (icon, languages, country targeting) control where the connected experience appears.

Prepare a 512 × 512 px icon (JPEG or PNG, under 1 MB), a short description under 30 words, at least three capabilities, at least three example prompts, a Privacy Policy URL, and a Terms of Service URL.

If you have not yet exposed functions, start with the Jetpack AppFunctions library and the official samples before you reach Connected Console. Our earlier guide on [adding AppFunctions to an Android app](/blog/add-appfunctions-to-android-app/) walks through the code side.

![Developers working on Android app integration](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## Create the connected app and link your Play listing

Sign in to Google Connected Console. On the Home page choose Create app.

If the Terms of Service dialog appears, an admin reviews and accepts it, then continues. Otherwise select Create on the Connected app card.

Give the connected app a name. This name appears across Google products and is what users type after @ to invoke it. Choose a category that matches your domain; the category cannot be changed later and may include baseline capabilities.

Select the connection type Android MCP. You cannot switch types after creation. Finally, pick the existing Play app that will contain the AppFunctions. The link is permanent, so confirm the package is correct.

The overview page opens and you can now add public details.

## Add public details and example prompts

On the Android MCP card select Add app details. Confirm or edit the connected app name.

Upload the 512 × 512 icon. Write a single-sentence description. Add at least three capabilities that describe high-value tasks users can complete. Do not number them and keep one capability per entry.

For example prompts, supply at least three. At least two must start with @ followed by your app name. At least one should mention the app name naturally without a leading @. Avoid quotation marks and numbered prefixes.

You can localise description, capabilities, and prompts by wrapping text in language tags such as <en-US>…</en-US>. Connected Console validates the tags automatically.

Enter the required Terms of Service and Privacy Policy URLs. A website URL is optional.

Save the details before you upload any bundle. The public metadata snapshot is captured when you later submit a version.

![Mobile app development workflow](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80)

## Upload the App Bundle and submit for preview

After the details are saved, go to the Upload an app bundle section and choose Upload app bundle. This takes you to the linked Play app’s Test and release page.

Create a new release on an internal testing track (or edit a draft). Upload the .aab that contains your AppFunctions, or add one already in the library.

Once processing finishes, the release page shows “App functions were detected.” Verify the connected app name, version code, tool count, languages, and country targeting. Fix any validation errors before continuing.

Select Submit connected app and continue. This sends the AppFunctions version to Gemini for preview testing and moves the Play release to the preview page.

Leave the Play release in Draft if you want to iterate without locking the version code. Publishing a Play release permanently locks that version code; later changes require an incremented version.

## Add testers and verify on device

Return to the connected app overview and open Manage testers. Create or select an email list containing only @gmail.com addresses. Include your own address.

Save the list. Testers can then open the Gemini app, type @ followed by the connected app name, and select it. They can also find the app under Settings & help > Connected apps.

Each tester must be signed in on an Android phone or tablet with a listed Google Account and must have the exact App Bundle version that was submitted. Sideloading a different build will not match.

Test every example prompt, both explicit @ mentions and natural-language requests. Confirm parameter handling, confirmation dialogs, and end-to-end execution of each AppFunction.

## Publish to production

Unlike remote MCP servers, an Android MCP connected app does not require a separate Connected Console publish step. Google reviews and publishes the connected experience automatically when you release the Play app version that contains the matching App Bundle to production.

After thorough testing, open the linked Play app in Connected Console, promote the release through the normal tracks, and publish. The connected app version becomes available to users in the countries and languages defined by your store listing.

## Tips for a smooth launch

Start with a small set of high-value AppFunctions rather than exposing every screen. Users discover the integration through example prompts, so make those prompts realistic.

Keep the connected app name short and memorable; it becomes the @ handle. Test on real devices that match the submitted version code, not only the emulator.

Monitor the Versions page after submission. Pending submission means you have not yet clicked Submit connected app and continue. Available to testers means preview is live for the email list.

If you also use coding agents in Android Studio, the same project can be built with any ACP-compliant agent. See our guide on [Bring Your Own Agent in Android Studio Rabbit 2](/blog/android-studio-byoa-agents-rabbit-2/) for setup.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/-4G-4w9FKDw"
    title="Extend your app to Gemini and Search with the Connected Apps Platform"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

The Connected Apps Platform preview gives Android developers a direct route into Gemini on the device through Android MCP and AppFunctions. Register once in Google Connected Console, link your existing Play app, upload a bundle that contains the functions, and test with a short Gmail list.

When you promote the same bundle to production, the connected experience follows automatically. Start with a focused set of actions, validate them thoroughly on device, and expand as user feedback arrives.

## Sources

- Create and manage Connected Apps using AppFunctions and Android MCP in Google Connected Console – Android Developers
- Connected Apps Platform overview – Google for Developers
- Agentic and Flexible: A next era of Android development – Android Developers Blog
- Extend your app to Gemini and Search with the Connected Apps Platform – Android Dev Summit 2026 session
