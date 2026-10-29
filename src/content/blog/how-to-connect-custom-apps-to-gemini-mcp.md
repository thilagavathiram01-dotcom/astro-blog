---
title: "How to Connect Custom Apps to Gemini with MCP"
description: "Step-by-step guide to add custom MCP server apps to Gemini for personalized workflows. Official requirements and steps from Google Help."
pubDate: 2026-10-29T17:00:00
heroImage: "https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "how-to", "ai-tools", "productivity"]
noindex: false
---

Custom apps let you connect personal or third-party tools to Gemini through a Model Context Protocol (MCP) server. Once linked, you can pull live data or trigger actions inside chats and tasks without leaving Gemini.

This works for users who meet the requirements and have an MCP server URL. Google documents the process on its official Gemini Apps Help page.

## What you need before you start

You must be 18 or older and located in the United States. Sign in with a personal Google Account. Work or school accounts cannot use this feature yet.

Turn on Keep Activity in Gemini settings. Custom apps stay unavailable while this setting is off. Have the MCP server URL ready. The server must follow standard MCP specifications.

Custom Connected Apps currently support English only. They work in the Gemini web app for setup and then appear in both the web and mobile apps.

![Person working at a multi-monitor coding setup](https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=800&q=80)

## Connect a custom app

Open gemini.google.com on a computer and sign in. You can only start the connection from the web app.

Click the menu, then Settings. Choose Connected Apps. If you do not see it, open Personal Intelligence first, then select Connected Apps.

Under Custom apps, select Add a custom app. Paste the MCP server URL. If the server does not support Dynamic Client Registration, open Advanced features, choose Show more, and enter the required credentials.

Click Next and follow the on-screen prompts to authorize access. After confirmation, the app appears in your list.

The connected app becomes available immediately in the Gemini mobile app as well.

## Use the custom app in a chat

Start a new chat or open an existing one. Type @ in the text box and select the custom app from the list. Write your request.

Gemini can also detect when the app is relevant and use it automatically. Confirm any actions that change data before they run.

You can combine the custom app with other connected services or skills in the same conversation. For more on managing standard connected apps, see the guide on [Gemini Connected Apps setup](/blog/gemini-connected-apps-setup/).

![Laptop showing code on a desk with a plant and mug](https://images.unsplash.com/photo-1763568258289-47ada8efe7ea?auto=format&fit=crop&w=800&q=80)

## Manage and remove custom apps

Return to Connected Apps settings anytime. Toggle the app off to disconnect it. You can re-add it later with the same URL.

Review the supported actions on the app details page before you rely on it for important work. Google notes risks around custom apps, so connect only servers you trust.

## Tips for better results

Test with simple read-only requests first. Confirm the server responds correctly before you ask for writes or multi-step actions.

Keep the MCP server documentation nearby. Match your prompts to the tools the server exposes.

If the connection fails, check that Keep Activity remains on and that the URL is correct. Restart the chat after adding the app.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/lFfQWtYuoSo"
    title="How To Add Skills & Connected Apps In Google Gemini"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Connecting a custom MCP app expands what Gemini can reach without extra switching. Follow the web setup steps, confirm the requirements, and test small requests before you build larger workflows.

The feature stays limited to personal accounts in the US for now, but the process stays the same as Google rolls it out further.

## Sources

- [Connect & manage custom apps for Gemini Apps](https://support.google.com/gemini/answer/17209137) — Gemini Apps Help
- [Use & manage connected apps in Gemini](https://support.google.com/gemini/answer/13695044) — Gemini Apps Help
- [New Connected Apps Platform launches for developers](https://blog.google/innovation-and-ai/technology/developers-tools/connected-apps-one-place/) — Google Blog, October 28, 2026
