---
title: "How to Build Connected Apps for Gemini and Search"
description: "Step-by-step guide to registering your MCP server or Android app on Google's Connected Apps Platform for Gemini and AI Mode."
pubDate: 2026-11-03T15:00:00
heroImage: "https://images.unsplash.com/photo-1780253256194-34e5867ccb8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["developer", "google", "ai-tools", "tutorials"]
noindex: false
---

Google's Connected Apps Platform lets developers expose tools from their services directly inside the Gemini app and AI Mode in Search. Users link an account once, then ask for actions such as booking a reservation or generating a playlist without leaving the Google surface.

The platform launched in preview on 28 October 2026. Access is phased, so you apply through the interest form at developers.google.com/connected-apps before you can create an app in Google Connected Console.

This guide covers the two integration paths, prerequisites, registration steps, testing, and review.

## Two Integration Paths

You choose one path when you create the app. The choice cannot be changed later on that app record.

The remote MCP server path uses the open Model Context Protocol over a public HTTPS endpoint. Your server lists tools, accepts tool calls, and returns results. This works for cloud services and web apps. You can also add interactive UI through MCP Apps.

The Android MCP path uses the Jetpack AppFunctions library. Your Android app exposes typed functions that run on the device. Agents such as Gemini call them locally. See our earlier post on [adding AppFunctions to an Android app](/blog/add-appfunctions-to-android-app/) for implementation details.

![Laptop and phone on a desk with coding software](https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=800&q=80)

## Prerequisites Before You Apply

Prepare these items so registration goes smoothly once you receive access.

For a remote MCP server:
- Public HTTPS endpoint that supports Streamable HTTP (example: https://api.yourdomain.com/v1/mcp).
- One global endpoint; no per-region URLs.
- Domain verification file at https://yourdomain/.well-known/google-connected-apps that returns HTTP 200 with no redirects and contains the verification token.
- OAuth 2.1 with PKCE for user-delegated access, or client credentials for machine-to-machine.
- Clear server instructions that describe your domain and capabilities.

For Android MCP:
- AppFunctions implementation with the Jetpack library.
- Functions registered and testable via ADB.

Listing assets for either path:
- 512 × 512 pixel icon (JPG or PNG, under 1 MB).
- Display name and a description under 30 words.
- At least three capabilities and three example prompts (at least two starting with @AppName).
- Terms of Service and Privacy Policy URLs.

## Apply for Preview Access

Visit developers.google.com/connected-apps and select Apply for the preview. The form asks basic questions about your service and whether you have a Play Developer account.

Google opens access in phases and will expand to more developers and markets over the coming months. While you wait, you can prototype a remote MCP server in Gemini Developer Mode at gemini.google.com/devmode.

## Register the App in Google Connected Console

Once approved:

1. Open Google Connected Console and create a new connected app. Enter the name users will mention with @.
2. Select the category. This cannot be changed later.
3. Choose MCP server or Android MCP.
4. Upload the icon, write the short description, list capabilities, and add example prompts.
5. For MCP server, enter the HTTPS endpoint and complete domain verification by hosting the provided file at /.well-known/google-connected-apps.
6. Configure authentication (OAuth 2.1 recommended for user data).
7. Sync tools and fix any errors marked “Must fix.”
8. Set availability by country, language, and product (Search, Gemini, or both).
9. Mark tools that require user confirmation for sensitive actions.
10. Add testers and enable a preview environment.
11. Test thoroughly, then submit for review.

After approval you control when the app goes live. Once live you can track traffic, latency, and error rates in the console.

![Person holding a smartphone](https://images.unsplash.com/photo-1721988348117-01a350266d26?auto=format&fit=crop&w=800&q=80)

## Test Before You Submit

Use Gemini Developer Mode to call your tools and inspect the event log. For Android MCP, use the ADB commands shown in the AppFunctions guide to list and execute functions.

Provide seeded test accounts with sample data if Google reviewers need to exercise user-delegated flows. Disable two-factor authentication on those accounts so review can complete.

## Tips for a Smooth Review

- Write precise server instructions so the platform knows when to call your tools.
- Annotate read-only tools and destructive tools clearly.
- Keep example prompts natural. One should mention the app without the @ prefix.
- Ensure the verification endpoint returns 200 with no redirects.
- Start with a small set of high-value tools rather than every possible action.

## Conclusion

The Connected Apps Platform gives you a single integration path to reach users inside Gemini and AI Mode. Build the MCP server or AppFunctions surface, apply for preview access, register in Google Connected Console, test, and submit.

Start with one clear tool that solves a real user task. As Google expands the preview, well-documented connected apps will appear for users who already ask Gemini or Search for help.

## Sources

- Build and manage Connected Apps in one place: https://blog.google/innovation-and-ai/technology/developers-tools/connected-apps-one-place/
- Connected Apps Platform overview: https://developers.google.com/connected-apps
- Create and manage Connected Apps in Google Connected Console: https://developers.google.com/connected-apps/gpc
- AppFunctions for Android: https://developer.android.com/ai/appfunctions

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/-4G-4w9FKDw"
    title="Extend your app to Gemini and Search with the Connected Apps Platform"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
