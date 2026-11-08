---
title: "How to Turn Paper Sketches into Working Apps with Gemini"
description: "Upload a photo of your paper sketch to Gemini Canvas, generate a working app prototype, test it live, and refine colors, fonts, or features in real time."
pubDate: 2026-11-08T14:00:00
heroImage: "https://images.unsplash.com/photo-1550660473-aed955e2e2a8?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini", "how-to"]
noindex: false
---

Most app ideas begin as a rough drawing on paper. You sketch boxes for buttons, lines for text fields, and arrows for navigation. Until recently, turning that drawing into something you could click required design tools and a developer.

Gemini Canvas changes that. On November 5, 2026, Google showed how a photo of a hand-drawn mock-up becomes a live interactive app. You upload the sketch, select Canvas, and ask Gemini to code it. The result appears in a preview you can test immediately.

This guide walks through the exact steps from Google's official demonstration.

## What you need

Open gemini.google.com in a desktop browser and sign in with a Google account. Canvas works for all Gemini users. Google AI Pro and Ultra subscribers get Gemini 3 and a larger context window for more complex projects.

Take a clear, straight-on photo of your sketch in good light. Include labels if they help, such as "submit button" or "habit list." The sketch can be a simple signup form, a habit tracker, a game board, or any basic interface.

![Hand-drawn wireframe sketch on paper with pen](https://images.unsplash.com/photo-1600132806608-231446b2e7af?auto=format&fit=crop&w=800&q=80)

## Upload the sketch and select Canvas

Click the plus icon next to the prompt box and upload the photo of your sketch.

Below the prompt box, select the Canvas tool. This switches Gemini into the interactive workspace that generates code and shows a live preview.

Type a short prompt. Google's example uses "Can you code this app?" You can add detail if you want: "Turn this sketch into a working habit tracker with checkboxes and a weekly progress bar."

Submit the prompt. Gemini reads the visual layout and writes the code. The preview pane on the right builds the interface in real time.

## Test the prototype

Once the preview loads, interact with it. Click buttons, type in fields, and check whether the flow matches your sketch.

If something is off, describe the change in the same chat. Examples include "Make the primary button blue" or "Add a confirmation message after submit." Gemini updates the code and refreshes the preview.

You can also switch to Code view to inspect or edit the HTML, CSS, and JavaScript directly. Changes autosave. The Show console option displays any errors or logs.

## Refine features and style

Continue iterating with natural language. Ask for layout adjustments, new sections, or different fonts. Gemini keeps the conversation context so you do not need to re-describe the whole app.

For apps that need data, Canvas can provision a Firestore database. Users who open a shared link can view and edit the shared data.

If you are 18 or older and signed in, you can add Gemini-powered features such as text or image generation inside the app.

![Developer reviewing code on multiple screens while taking notes](https://images.unsplash.com/photo-1753715613831-9e48eac86813?auto=format&fit=crop&w=800&q=80)

## Share or export

Click the share option to generate a public link. Anyone with the link can open the app. Data can persist across sessions and devices when Firestore is enabled.

On Android, you can add a home-screen shortcut for the Canvas app. On the web, you can copy the code or continue building in the same chat.

For native Android apps instead of web prototypes, Google AI Studio offers a separate Build mode that generates Kotlin and Jetpack Compose projects. See our guide on [building your first Android app with Gemini 4 Argon in AI Studio](/blog/build-first-android-app-gemini-4-argon-ai-studio/).

## Tips for better results

Draw clear major sections. Headers, content areas, and buttons help Gemini understand the structure.

Photograph the sketch flat and centered. Distorted or blurry images reduce accuracy.

Start simple. Get the core layout working before adding complex interactions.

Describe specific changes rather than broad requests. "Increase the font size of the title to 24px" works better than "make it look better."

Test on both desktop and mobile previews if the app targets phones.

## Watch the official walkthrough

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/7dsaxBUZPII"
    title="Turn your drawings into working marketing apps in minutes with Gemini Canvas"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- Google Blog: Turn sketches into apps with Gemini
- Google Gemini Help: Create docs, apps and more with Canvas
- Google AI Studio: Build an App from a Single Mockup or Sketch
