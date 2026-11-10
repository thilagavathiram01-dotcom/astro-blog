---
title: "Use Server Prompt Templates with Firebase AI Logic on Android"
description: "Step-by-step guide to creating and calling server prompt templates in Firebase AI Logic for Android apps to update prompts without new releases."
pubDate: 2026-11-10T14:00:00
heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["firebase", "android", "tutorials", "how-to", "gemini"]
noindex: false
---

Android developers using Firebase AI Logic can store prompts, model settings, and schemas on the server instead of hard-coding them in the app. Server prompt templates let you change wording, switch models, or adjust parameters from the Firebase console without shipping a new APK.

This protects sensitive prompt text from reverse engineering and speeds up iteration. The client sends only a template ID plus any input variables. The server fills in the rest and returns the response.

Firebase requires App Check enforcement for AI Logic starting 2 November 2026. Complete that setup before you rely on templates in production.

## Why Use Server Prompt Templates

Client-side prompts expose your instructions if someone decompiles the APK. Templates keep that logic on Google’s servers. You update the template in the console and the change reaches users on the next request.

Templates also centralize configuration. Change the model from gemini-3.8-flash to gemini-4-argon, raise max output tokens, or add a system instruction without touching app code. Supported models include all Gemini models available through Firebase AI Logic except Live API models.

![Android phone and laptop on a desk during development](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## Prerequisites

Finish the standard Firebase AI Logic getting-started steps for Android. Your project must have AI Logic enabled and your app registered. Add the Firebase AI Logic SDK.

You need the Owner role or the specific IAM permissions for promptTemplates.create, get, update, delete, list, and updateLock. Start with a test project so you can experiment freely.

## Create a Template in the Console

Open the Firebase console and go to AI Services > AI Logic > Prompt templates. Click Create new template and choose a starter such as Input + System Instructions.

Set a display name and a unique Template ID. Use a versioned ID like invoice-generator-v1-0-0 so you can introduce breaking changes later without affecting existing clients. Template IDs allow lowercase letters, numbers, and hyphens, up to 63 characters. The ID cannot be changed after creation.

In the Configuration (frontmatter) section enter at least the model:

```
---
model: 'gemini-3.8-flash'
---
```

You can add generation config, safety settings, or input/output schemas here. In the Prompt section write the instructions. Use Handlebars syntax for variables:

```
{{role "system"}}
All output must be a clearly structured invoice document.
Use a tabular or clearly delineated list format for line items.

{{role "user"}}
Create an example customer invoice for a customer named {{customerName}}.
```

Save the template. The console offers a test panel. Supply sample input JSON such as {"customerName": "Jane"} and run a real request to verify the output before you call it from code.

## Call the Template from Android

Initialize Firebase as usual and obtain a TemplateGenerativeModel. The call looks similar to a normal generateContent request except you pass the template ID and a map of inputs.

```kotlin
val model = Firebase.ai(backend = GenerativeBackend.googleAI())
    .templateGenerativeModel()

val response = model.generateContent(
    "invoice-generator-v1-0-0",
    mapOf("customerName" to "Jane")
)

val text = response.text
```

The SDK injects the variables into the stored template and returns the model response. After you create or edit a template, wait a couple of minutes for the change to propagate before testing from the device.

![Close-up of code on a laptop screen](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Tips for Production

- Version your Template IDs. When you need a breaking change, publish a new ID and update the client only when ready.
- Keep templates focused. Complex control flow (loops, conditionals) is supported, but start simple so debugging stays easy.
- Combine with App Check and spend caps. Templates do not replace security controls.
- Test both the Gemini Developer API and Agent Platform Gemini API backends if your project enables both. The console test panel lets you choose.
- Monitor token usage in the Firebase console. Templates can increase or decrease cost depending on how you write the prompt.

For hybrid on-device and cloud routing, see the existing guide on [hybrid Firebase AI Logic inference](/blog/hybrid-firebase-ai-logic-android-guide/).

## Watch the Related Session

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/IPKerNnpddQ"
    title="Build optimized Android Apps with Firebase AI Logic and Gemini Nano 4"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Server prompt templates move prompt management out of the APK and into the Firebase console. You protect your instructions, iterate faster, and keep model configuration under central control. Create the template, test it in the console, then call templateGenerativeModel.generateContent with the template ID and input map.

Start with one narrow feature such as invoice generation or product description rewriting. Once the flow is stable, expand the set of templates your app uses.

## Sources

- Firebase AI Logic: Get started with server prompt templates — https://firebase.google.com/docs/ai-logic/server-prompt-templates/get-started
- Template format, syntax, and examples — https://firebase.google.com/docs/ai-logic/server-prompt-templates/syntax-and-examples
- Android Developers Blog: Build intelligent Android apps: Cloud and hybrid inference
