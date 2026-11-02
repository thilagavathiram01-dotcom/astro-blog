---
title: "How to Start with Google Connected Apps Platform Preview"
description: "Step-by-step guide for developers to join the Connected Apps Platform preview and integrate apps with Gemini and Search using MCP."
pubDate: 2026-11-02T11:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["developer", "ai-tools", "gemini", "tutorials"]
noindex: false
---

Google launched the Connected Apps Platform preview on October 28, 2026. It gives developers one place to build and manage apps that work inside Search and the Gemini app.

Users already connect more than 50 apps for tasks like ordering groceries or creating playlists. The new platform opens this to more developers through a unified console and standard protocols.

This guide shows how to get started with the preview. You will learn the integration options, the registration process, and what to expect during review.

## What the Connected Apps Platform Does

The platform lets you expose your app’s tools and data so Gemini or Search can call them on behalf of a signed-in user. Users link their account once. After that, they can ask natural language questions that trigger actions in your service.

You choose whether the app appears in Search, the Gemini app, or both. Once live, the Google Connected Console shows traffic, latency, and error rates. You keep control of branding, including verified logos.

Two integration paths exist:

- Cloud-hosted MCP server for cross-platform reach (web, iOS, Android).
- Android MCP using AppFunctions APIs for deeper on-device experiences.

MCP (Model Context Protocol) is the open standard. Google provides guides for remote MCP servers and OAuth 2.1 authorization.

![Developer coding on a laptop with code editor open](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Prerequisites Before You Apply

Access opens in phases. The preview is currently limited. Sign up at developers.google.com/connected-apps and review the documentation.

You need:

- A working remote MCP server or an Android app with AppFunctions.
- Domain verification and metadata assets (logo, description, privacy policy).
- OAuth 2.1 setup so users can authorize your service securely.
- IP allowlisting if required for your endpoint.

For Android MCP, use the Jetpack library. Annotate functions and add clear KDoc so agents can discover them. See our related post on [adding AppFunctions to an Android app](/blog/add-appfunctions-to-android-app/).

Test your tools locally first. Make sure sensitive actions (payments, bookings) require explicit user confirmation.

## Step-by-Step: Register and Test in Google Connected Console

1. **Sign up for the preview.** Visit the Connected Apps Platform page and request access. Approval is phased by developer, market, and product.

2. **Prepare your MCP endpoint.** Host a server that follows Google’s MCP specification. Implement the required tools and return structured results. Follow the official MCP server developer guide for authentication and discovery.

3. **Create the connected app in the console.** Log into Google Connected Console. Add your app name, description, logo, and privacy details. Connect the MCP server URL.

4. **Choose surfaces.** Select Search, Gemini app, or both. Configure any product-specific settings.

5. **Add testers.** Invite a small group of testers. They can try the integration before public review.

6. **Test thoroughly.** Run real user flows. Check that Gemini correctly discovers tools, requests permissions, and shows confirmation cards for sensitive actions. Monitor latency and errors in the console.

7. **Submit for review.** Once testing looks solid, submit. Google reviews branding, security, and user experience. You receive feedback if changes are needed.

After approval, the app goes live. You can track usage and update the version as needed.

![Smartphone and laptop on a desk during app development](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Tips for a Smooth Integration

Keep tool descriptions clear and action-oriented. Agents perform better when KDoc or MCP tool schemas explain exactly what the function does and which parameters it needs.

Handle errors gracefully. Return useful messages so Gemini can explain problems to the user.

Respect user control. Always require confirmation for irreversible or paid actions. Users can disconnect the app anytime in their Gemini settings.

Monitor the console after launch. High error rates or slow responses affect ranking and user trust.

If you already have a remote MCP server, reuse it. The platform is designed so one integration can reach multiple Google surfaces.

## What Users See Today

More than 50 Connected Apps are already live in Gemini, including Adobe, Experian, Localiza, and Peloton. Calm is launching across both Search and Gemini. Search will gain more of these partners in the coming weeks.

Availability varies by country, language, and device. AI Mode in Search currently shows connected apps mainly in the US and English.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/8Lmv7LGgL4E"
    title="Android Dev Summit 2026 keynote"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

The Android Dev Summit 2026 keynote demonstrates the platform in action, including an official summit app built with these tools.

## Conclusion

The Connected Apps Platform preview lowers the barrier for developers who want their services inside Gemini and Search. Start with a solid MCP server or Android AppFunctions, register in the Google Connected Console, test with real users, and submit for review.

Early participants gain visibility with high-intent users who already live in Google’s products. As access expands over the coming months, more markets and surfaces will open.

Sign up today, read the official docs, and begin building. Your users will be able to get things done without leaving their conversation.

## Sources

- Google Blog: New Connected Apps Platform launches for developers (October 28, 2026)
- developers.google.com/connected-apps
- Google Connected Console documentation
- Android Dev Summit 2026 keynote
