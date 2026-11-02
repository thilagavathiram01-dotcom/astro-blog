---
title: "How to Connect Your Android App to Gemini and Search"
description: "Guide to the Connected Apps Platform preview: integrate via Android MCP or AppFunctions so Gemini and Search can use your app's capabilities."
pubDate: 2026-11-02T20:45:00
heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "gemini", "google"]
noindex: false
---

Google opened the Connected Apps Platform preview on 28 October 2026. Developers can now expose app capabilities so users complete real tasks inside the Gemini app and Google Search without leaving those surfaces.<grok type="render_inline_citation" citation_id="887" />

The platform standardizes integration. You choose a cloud-hosted MCP server or the on-device Android MCP path that uses AppFunctions. Then you register, test, and submit through the Google Connected Console.<grok type="render_inline_citation" citation_id="889" />

![Developer workspace with laptop and code on screen](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Why This Matters for Android Apps

Users already ask Gemini to book classes, order groceries, or build playlists. Connected Apps bring your service into those conversations. Adobe, Experian, Localiza, and Peloton are live in Gemini, with Search support arriving in the coming weeks. Calm is coming to both.<grok type="render_inline_citation" citation_id="887" />

For Android developers the on-device route is especially useful. Tools run locally on the user's device. That keeps sensitive data off the network and reduces latency. AppFunctions, already covered in our earlier guide, is the Jetpack library that turns your app into a local MCP server.<grok type="render_inline_citation" citation_id="889" />

## Two Integration Paths

### Cloud-hosted MCP server

Build or expose a remote MCP server that implements the Model Context Protocol. Authorize Gemini and Search with OAuth 2.1 so they can call your tools on the user's behalf. This path works across Android, iOS, and web. It is the faster route for most existing backends.<grok type="render_inline_citation" citation_id="897" />

### Android MCP with AppFunctions

Use the Jetpack AppFunctions SDK so your Android app exposes typed functions that the on-device intelligence system can discover and invoke. This is Android's native MCP implementation. Tools execute inside your app process. The platform handles discovery, permission checks, and caller access levels.<grok type="render_inline_citation" citation_id="889" />

Both paths end in the same Google Connected Console. You register tools, test them, choose Search, Gemini, or both, then submit for review. Access is phased and currently limited to US developers who apply.<grok type="render_inline_citation" citation_id="890" />

## Prepare Your App with AppFunctions

If you have not added AppFunctions yet, start with the official documentation and our step-by-step post on adding them. The library is at `androidx.appfunctions:appfunctions:1.0.0-alpha13` (or later). Annotate public methods with `@AppFunctionDeclaration(isDescribedByKDoc = true)`. The KSP compiler generates the schema.<grok type="render_inline_citation" citation_id="825" />

Restrict sensitive functions with `@AppFunctionAccessLevel(level = AppFunctionMetadata.ACCESS_LEVEL_SELF)`. System agents and other apps cannot discover them. For functions that should be available to Gemini, use the default trusted level.<grok type="render_inline_citation" citation_id="825" />

Register the generated service in the manifest with the `BIND_APP_FUNCTION_SERVICE` permission and the correct XML property. Then test with `adb cmd app_function` commands before you connect to the platform.<grok type="render_inline_citation" citation_id="825" />

![Close-up of code on a laptop screen](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Prototype and Register

1. Apply for the Connected Apps Platform preview at the Google Connected Console.
2. Choose your path (cloud MCP or Android MCP).
3. Implement and document your tools clearly. Gemini Nano and larger models rely on good descriptions to decide when to call them.
4. Test in Gemini developer mode or with the platform's testing tools.
5. Submit for review and select the surfaces (Search, Gemini, or both).

The console later shows traffic, latency, and error rates once the app is live.<grok type="render_inline_citation" citation_id="897" />

## Practical Tips

Keep the action space small. Expose only the functions the user is likely to request through natural language. Large catalogs make on-device models less reliable and consume more context.

Return structured, focused results. On-device models have smaller context windows than cloud models. Prefer compact data classes over raw database dumps.

For destructive or payment actions, require explicit user confirmation before the function runs. The decorator pattern around AppFunctions makes this straightforward.<grok type="render_inline_citation" citation_id="825" />

Monitor the AppFunctions beta status. The API is still evolving. Pin versions and watch the issue tracker.

## Conclusion

The Connected Apps Platform turns your existing AppFunctions work into a distribution channel inside Gemini and Search. Start with a clear set of tools, apply for the preview, and test the on-device path if privacy and latency matter for your use case. The same functions that power your in-app agent can now serve users who never open your app.

## Sources

- [New Connected Apps Platform launches for developers](https://blog.google/innovation-and-ai/technology/developers-tools/connected-apps-one-place/) — Google Blog, 28 October 2026
- [Connected Apps Platform](https://developers.google.com/connected-apps) — Google for Developers
- [Define tools | ML Kit](https://developers.google.com/ml-kit/genai/agent/android/define-tools) — Google for Developers (AppFunctions patterns)
- [Add AppFunctions to your Android app](/blog/add-appfunctions-to-android-app/) — Yum News

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/-4G-4w9FKDw"
    title="Extend your app to Gemini and Search with the Connected Apps Platform"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
