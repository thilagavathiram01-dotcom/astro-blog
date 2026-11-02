---
title: "How to Build Connected Apps for Gemini and Search"
description: "Step-by-step guide to building and submitting a Connected App for the Gemini app and Google Search using MCP or AppFunctions."
pubDate: 2026-11-02T14:00:00
heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini", "developer"]
noindex: false
---

Google's Connected Apps Platform, launched in preview on October 28, 2026, lets developers bring their services into the Gemini app and Google Search. Users link an app once. After that, they can access personal data and complete actions directly in conversations.

This guide shows how to prepare, register, test, and submit a Connected App. The platform supports a cloud-hosted MCP server or Android MCP via AppFunctions. Access opens in phases.

## What the Connected Apps Platform Provides

The platform standardizes integration so one build can reach users across Gemini and Search. Developers use the Google Connected Console to register tools, configure public details, manage testers, and track traffic, latency, and error rates after launch.

You choose availability for Search, the Gemini app, or both before review. Verified logos and authenticated accounts stay under your control. More than 50 Connected Apps already exist between the two surfaces, including partners such as Adobe, Experian, Localiza, and Peloton. Calm is among the new additions rolling out to both.

![Developer writing code on a laptop](https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80)

## Prerequisites Before You Start

Sign up for the preview at developers.google.com/connected-apps or the apply link in Google Connected Console. Prepare a public HTTPS endpoint for a remote MCP server, or an Android app that implements AppFunctions.

Domain verification is required. Place a token file at /.well-known/google-connected-apps that returns HTTP 200 with no redirects. Allowlist Google's IP ranges if you filter traffic. Prepare a 512 × 512 px icon, a description under 30 words, at least three capabilities, example prompts, Terms of Service, and Privacy Policy URLs.

For Android, AppFunctions require Android 16 or higher and the Jetpack library. See our guide on [adding AppFunctions to your Android app](/blog/add-appfunctions-to-android-app/).

## Build the Integration Path

### Option 1: Cloud-hosted MCP Server

Implement a remote MCP server that exposes tools over Streamable HTTP. Use clear server instructions and typed schemas. Annotate tools with readOnlyHint for read-only actions and destructiveHint for modifications. Optionally add UI metadata with a ui:// resource URI for interactive widgets.

Follow the Connected Apps Platform MCP server developer guide for the exact protocol requirements. Implement OAuth 2.1 with PKCE for user-delegated access. Google recommends this for secure authorization.

Test locally with the MCP Inspector before exposing the endpoint publicly.

### Option 2: Android MCP with AppFunctions

For on-device execution, use the Jetpack AppFunctions SDK. Define functions in an AppFunctionService, register them in the manifest, and provide metadata so agents understand when to call them. Execution happens on the user's Android device, which keeps data local.

Both paths let users invoke your capabilities with @ mentions or natural language once the app is connected.

## Register and Configure in Google Connected Console

After you receive preview access, create a connected app in the console. Set the name, category, and connection type. Category and connection type are locked after creation.

Add the icon, short description, capabilities, example prompts, and legal URLs. Connect your MCP endpoint and complete domain verification. Choose the authorization type: none, machine-to-machine client credentials, or user-delegated authorization code.

Select the surfaces: Search, the Gemini app, or both. Sync tools so Google snapshots the schemas your endpoint exposes. Fix any must-fix errors before continuing.

![Team collaborating on software development](https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=800&q=80)

## Test Your Connected App

While waiting for full console access, prototype against a deployed HTTPS endpoint in Gemini Developer Mode at gemini.google.com/devmode. The mode shows the event log, tool schemas, simulated date, time, location, and authentication flows.

In the console, add tester accounts and provide instructions. Invite them to connect the app and exercise the tools. Confirm that @ mentions trigger the correct functions and that results return accurately. Check error handling and permission prompts.

Once testing passes, submit for review. Google notifies you when the review completes. No public timeline is published for review duration.

## Tips for a Smooth Submission

Write precise tool descriptions and KDoc so agents select the right function. Limit exposed actions to those that benefit from conversational access. Require confirmation for destructive operations inside your own service even if the agent calls the tool.

Keep the MCP endpoint stable. Google takes a snapshot during sync, so schema changes after submission require a new version. Monitor the console analytics after launch to watch latency and error rates.

Start with a small set of high-value tools. Expand later once the first version is live. For Android apps, pair AppFunctions with clear app metadata so agents understand operational patterns.

## Conclusion

The Connected Apps Platform gives developers a single registration path to reach users in Gemini and Search. Build an MCP server or AppFunctions integration, register in the Google Connected Console, test thoroughly, and submit for review. Phased access means early applicants gain an advantage as more markets and products open.

Users already complete tasks like ordering, creating playlists, and managing fitness data through Connected Apps. Your service can join them once it meets the requirements.

## Sources

- New Connected Apps Platform launches for developers: https://blog.google/innovation-and-ai/technology/developers-tools/connected-apps-one-place/
- Connected Apps Platform overview: https://developers.google.com/connected-apps
- Create and manage Connected Apps in Google Connected Console: https://developers.google.com/connected-apps/gpc
- AppFunctions overview: https://developer.android.com/ai/appfunctions

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/DrMbmsQkFZw"
    title="Gemini Just Got 7 Big Updates You Need to See"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
