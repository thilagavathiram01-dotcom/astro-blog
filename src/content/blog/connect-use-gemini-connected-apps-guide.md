---
title: "How to Connect and Use Gemini Connected Apps"
description: "Step-by-step guide to connecting Gmail, Spotify, Calendar and more to Gemini for actions without leaving the chat."
pubDate: 2026-11-01T10:00:00
heroImage: "https://images.unsplash.com/photo-1750056393356-d1de9d222a29?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "how-to", "productivity"]
noindex: false
---

Gemini Connected Apps turn the assistant into a bridge for the tools you already use. Instead of copying text between tabs, you ask Gemini to summarize a Gmail thread, create a Calendar event, or start a Spotify playlist while the conversation stays in one place.

Google has rolled out more than 50 Connected Apps across productivity, media, and lifestyle categories. The new Connected Apps Platform lets developers publish their own integrations for Search and Gemini using MCP or Android AppFunctions.

This guide shows exactly how to enable, connect, and call these apps on the web and mobile, plus what changes when Keep Activity is off.

## What Connected Apps Do

Connected Apps give Gemini permission to read authorized data and perform supported actions in another service. You approve the link once. After that, Gemini can use the app when your request matches its capabilities.

Common examples include summarizing emails, scheduling meetings, searching photos, controlling smart-home devices, or booking a reservation. Some first-party Google services (Search, Maps, YouTube) already supply public information without an extra toggle.

Availability depends on your account type, country, language, and device. Work or school accounts follow separate admin controls.

![Hand holding smartphone showing app icons including AI tools](https://images.unsplash.com/photo-1744900647430-965ccc7a6078?auto=format&fit=crop&w=800&q=80)

## Requirements Before You Start

You must be signed in to Gemini. Connected Apps are unavailable when you are signed out.

Keep Activity must be on for most apps on the web, iOS, and Wear OS. On Android, only Device assistance, Phone, Messages, and WhatsApp remain available if Keep Activity is off. You can turn the setting on in Gemini settings or at myactivity.google.com.

Most Connected Apps are currently strongest in English and the United States, with select partners available in other regions. Check the list inside Gemini because it updates frequently.

## Connect Apps on the Web

1. Open gemini.google.com and sign in.
2. Click Customize in the left sidebar (under More if it is collapsed).
3. Select the Connectors tab at the top.
4. Find the app you want and click Add.
5. Complete any sign-in or permission prompts that appear.

Google Workspace apps (Gmail, Calendar, Drive, Docs, Keep, Tasks) often activate as a group. Third-party apps require individual authentication.

After connecting, the app appears in the list. Click it to read the full description, supported actions, and example prompts.

## Connect Apps on Android or iOS

Open the Gemini app. Tap the menu or profile icon, then Customize (or Settings). Choose Connectors or Connected Apps. Tap Add next to the desired app and follow the prompts.

Android also surfaces phone-native tools such as Phone, Messages, WhatsApp, and Device assistance for alarms and settings. These remain usable even with Keep Activity off.

## Call an App with the @ Mention

In any chat, type @ followed by the app name. Gemini shows a picker of your connected apps. Select one and finish your request.

Examples:
- @Gmail summarize the last three emails from the product team
- @Google Calendar create a 30-minute focus block tomorrow at 2 pm
- @Spotify play an upbeat playlist for the morning commute
- @YouTube Music add the top hits from 2010 to a new playlist

If you skip the @ and simply describe the task, Gemini often selects the right app automatically. When the chosen app is not yet connected, Gemini prompts you to link it.

You can also use Connected Apps inside Gemini Live voice conversations on supported devices.

## Manage and Disconnect Apps

Return to Customize → Connectors at any time. Click the three-dot menu on an app and choose Disconnect. This stops future access. Review the Gemini Privacy Hub for details on what data is retained after disconnection.

Custom MCP servers can be added on the web (currently limited to users 18+ in the US with a personal account and Keep Activity on). Once linked, the custom app works in both web and mobile chats.

## Tips for Better Results

- Write specific prompts that name the action and any constraints (time, recipient, quantity).
- Check an app’s detail page for unsupported actions so you do not waste turns.
- Use @ when multiple apps could handle the request and you want a precise one.
- For Android developers, expose the same capabilities through AppFunctions so on-device agents can call them locally. See our guide on [adding AppFunctions to an Android app](/blog/add-appfunctions-to-android-app/).
- Admins of Google Workspace can control which Connected Apps are available under Apps > Additional Google services > Gemini.

![Person holding a smartphone in a modern workspace](https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80)

## What Developers Should Know

The Connected Apps Platform (preview launched 28 October 2026) lets you register once in the Google Connected Console and choose whether your app appears in Search, the Gemini app, or both. Integrate via a cloud-hosted MCP server (with OAuth 2.1 and PKCE) or via Android MCP using the Jetpack AppFunctions library for on-device execution.

Sign up for the preview at developers.google.com/connected-apps. Existing partners already include Adobe, Experian, Peloton, Instacart, Canva, and Calm (rolling out).

## Conclusion

Connected Apps remove the friction of switching between Gemini and the rest of your tools. Enable Keep Activity, add the services you use most, and call them with a simple @ mention or natural request. The list grows regularly, and the new developer platform means more apps will arrive without custom Google partnerships.

Start with one high-value connection such as Gmail or Calendar, test a few prompts, and expand from there.

## Sources

- Use & manage Connected Apps in Gemini: https://support.google.com/gemini/answer/13695044
- Connected Apps Platform: https://developers.google.com/connected-apps
- New Connected Apps Platform launches for developers: https://blog.google/innovation-and-ai/technology/developers-tools/connected-apps-one-place/
- Google Workspace Updates – Customize hub: https://workspaceupdates.googleblog.com/2026/10/an-easier-way-to-customize-how-gemini-works-for-you.html

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/NpCNG2-5qAU"
    title="Save time (and tabs) with apps in Gemini"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
