---
title: "How to Turn Paper Sketches into Working Apps with Gemini"
description: "Upload a photo of your paper sketch to Gemini Canvas, generate a working app prototype, test it live, and refine colors, fonts, or features in real time."
pubDate: 2026-11-08T14:00:00
heroImage: "https://images.unsplash.com/photo-1550660473-aed955e2e2a8?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini", "how-to"]
noindex: false
---

Most app ideas begin as a rough drawing on paper. You sketch boxes for buttons, lines for text fields, and arrows for navigation. Until recently, turning that drawing into something you could click required design tools and a developer.

Gemini Canvas changes that. On November 5, 2026, Google published a demonstration showing how a photograph of a hand-drawn mock-up becomes a live interactive app. You upload the sketch, select Canvas, and ask Gemini to code it. The result appears in a preview you can test immediately and refine through conversation.

This guide walks through the exact steps from Google's official demonstration and related documentation. It covers preparation, upload, generation, testing, refinement, sharing, and practical tips.

## What you need before you start

Open gemini.google.com in a desktop browser and sign in with a Google account. Canvas is available to all Gemini users. Google AI Pro and Google AI Ultra subscribers receive access to Gemini 3 and a significantly larger context window that supports more complex projects.

Prepare your sketch. Draw the main sections of the interface: a header, content areas, buttons, input fields, and any navigation elements. Labels such as "Submit" or "Habit list" improve recognition. The sketch can represent a signup form, a habit tracker, a simple game board, or another basic interface.

Photograph the sketch clearly. Place the paper flat, use even lighting, and hold the camera straight above the drawing. Avoid shadows, glare, or extreme angles. A smartphone photo works fine if the lines remain legible.

![Hand-drawn wireframe sketch on paper with pen](https://images.unsplash.com/photo-1600132806608-231446b2e7af?auto=format&fit=crop&w=800&q=80)

## Upload the sketch and select Canvas

In the Gemini chat, click the plus icon next to the prompt box. Choose the option to upload a file or photo and select the image of your sketch.

Below the prompt box, select the Canvas tool. This activates the interactive workspace that generates code and displays a live preview alongside the conversation.

Type a clear prompt. Google's demonstration uses the short instruction "Can you code this app?" You can add more detail when needed. For example: "Turn this sketch into a working habit tracker with checkboxes for daily tasks and a weekly progress bar."

Submit the prompt. Gemini analyzes the visual layout, identifies elements such as buttons and text areas, and writes the corresponding code. The preview pane on the right begins building the interface in real time. Generation usually completes within a minute for simple layouts.

## Test the prototype in the preview

When the preview finishes loading, interact with it as a user would. Click buttons, type into fields, and follow the intended flow. Compare the result against your original sketch.

If an element does not behave as expected, describe the change in the same chat. Specific requests work best. Examples include "Make the primary button blue and larger" or "Add a confirmation message that appears after the form is submitted." Gemini updates the underlying code and refreshes the preview automatically.

You can switch to Code view to inspect or edit the HTML, CSS, and JavaScript directly. All changes autosave. The Show console option reveals errors, logs, and other runtime information that can help diagnose problems.

## Refine features, style, and data

Continue iterating with natural language. Ask for layout adjustments, additional sections, different fonts, or color schemes. Because the conversation maintains context, you do not need to restate the entire app description with each request.

Apps that require persistent data can use Firestore. Canvas automatically provisions a Firestore instance when needed. Users who open a shared link can view and edit the shared data across sessions and devices.

Signed-in users aged 18 or older can add Gemini-powered features inside the app. These include text generation or image generation that the app itself can call.

![Developer reviewing code on multiple screens while taking notes](https://images.unsplash.com/photo-1753715613831-9e48eac86813?auto=format&fit=crop&w=800&q=80)

## Share the app or continue building

Use the share option to generate a public link. Anyone with the link can open and interact with the app. When Firestore is enabled, data persists for all users who access the shared project.

On Android devices, you can create a home-screen shortcut that launches the Canvas app directly. On the web, you can copy the generated code for further development or keep refining it in the same chat.

Canvas produces web prototypes. If you need a native Android application written in Kotlin and Jetpack Compose, use Google AI Studio's Build mode instead. That workflow generates a complete Android project that you can preview in a browser emulator and install on a physical device. See our earlier guide on [building your first Android app with Gemini 4 Argon in AI Studio](/blog/build-first-android-app-gemini-4-argon-ai-studio/) for the detailed steps.

## Tips for better results

Draw clear major sections. Distinct headers, content regions, and buttons help Gemini map the layout accurately.

Photograph the sketch flat and centered. Distorted or blurry images reduce the accuracy of element detection.

Start simple. Establish the core layout and primary interactions before adding complex logic or multiple screens.

Describe specific changes. A request such as "Increase the title font size to 24 pixels and change its color to navy" produces more reliable results than a vague instruction like "make it look better."

Test the preview on both desktop and mobile viewports when the app is intended for phones.

Review the code view periodically if you plan to export the project. This lets you catch structural issues early.

## Common questions

Canvas works on both the web version of Gemini and the mobile app, although the full set of editing controls is available on the desktop web interface. PDF preview and editing is supported on mobile as well for other file types, but Canvas app prototypes are best refined on the web.

You do not need coding knowledge. The initial generation and subsequent refinements happen through plain-language prompts. Direct code editing is optional.

The feature became available as part of the broader Gemini app updates in late 2026 and is open to all users in supported languages and regions.

## Watch the official walkthrough

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/7dsaxBUZPII"
    title="Turn your drawings into working marketing apps in minutes with Gemini Canvas"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- Google Blog: Turn sketches into apps with Gemini (November 5, 2026)
- Google Gemini Help: Create docs, apps and more with Canvas
- Google AI Studio: Build an App from a Single Mockup or Sketch
- Google Workspace Updates: Create, preview, and edit files directly in the Gemini app
