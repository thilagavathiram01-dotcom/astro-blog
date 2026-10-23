---
title: "Assign Different AI Models in Android Studio Rabbit 3"
description: "Step-by-step guide to Model Assignment in Android Studio Rabbit 3 Canary. Balance quality, speed, and quota for Agent Mode and other AI features."
pubDate: 2026-10-23T21:00:00
heroImage: "https://images.unsplash.com/photo-1780253256194-34e5867ccb8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "ai-tools", "developer"]
noindex: false
---

Android Studio Rabbit 3 Canary 1, released on October 22, 2026, adds Model Assignment. This feature lets you pick different AI models for different tasks inside the IDE.

You no longer use one model for everything. Assign a large pro-tier model for complex reasoning in Agent Mode. Use a faster lightweight model for commit message generation or next-edit prediction. The result is better balance of quality, speed, and quota use.

This guide shows how to set it up on the Canary channel. Facts come from the official Android Studio preview release notes.

![Developer working on a laptop with code open](https://images.unsplash.com/photo-1780253256194-34e5867ccb8c?auto=format&fit=crop&w=800&q=80)

## Why Model Assignment matters

Agent Mode and other Gemini features in Android Studio handle many different jobs. Complex multi-step tasks need strong reasoning. Quick suggestions need low latency. One model rarely optimizes both.

Model Assignment lets you map models to feature categories. Changes apply immediately. You can also switch models from the Agent Mode panel. The settings for Thinking features update to match.

If you already use Bring Your Own Agent or custom models from Rabbit 2, this builds on that flexibility. See the earlier guide on [Bring Your Own Agent in Android Studio Rabbit 2](/blog/android-studio-byoa-agents-rabbit-2/).

## Prerequisites

Install Android Studio Rabbit 3 Canary 1 or later from the Canary channel. Open Help > Check for Updates if you already run Canary builds. Otherwise download it from the Android Studio preview page.

You need an active Gemini setup. This includes the default no-cost tier, a Gemini API key, Google AI Pro/Ultra, or Gemini Enterprise. Model Assignment works with the models available to your account.

## Step-by-step: Open Model Assignment settings

1. Launch Android Studio Rabbit 3 Canary.
2. Go to File > Settings (Android Studio > Settings on macOS).
3. Navigate to Tools > AI > Model Providers.
4. Select the Model Assignment tab.

The tab shows feature categories with dropdowns. Categories include Thinking features used by Agent Mode and lighter tasks such as commit message generation.

## Assign models to feature categories

Open each dropdown. Choose from the models your account can access. Examples from the release notes include assigning a large pro-tier model to complex reasoning tasks and a faster lightweight model to latency-sensitive ones.

Save the settings. The IDE applies the mapping right away. Test it by starting an Agent Mode session that requires multi-step planning. Then try generating a commit message from the VCS window.

You can also change the model directly from the model selector dropdown in the Agent Mode panel. Doing so updates the Model Assignment settings for Thinking features automatically.

![Laptop screen showing code in an IDE](https://images.unsplash.com/photo-1763568258330-039d2f3dfc76?auto=format&fit=crop&w=800&q=80)

## Practical tips for better results

Start with two models. Keep your strongest model on Thinking and Agent Mode tasks. Move everything else to a faster model. Measure quota use after a day of normal work.

If a task fails or times out, switch the category back to a more capable model and retry. The release notes note that local model connections previously timed out at 600 seconds with no UI setting; Model Assignment gives you another lever for control.

Combine this with the Compose Preview Screenshot Testing tool that also arrived in Rabbit 3. Use a lightweight model for quick UI iteration suggestions while keeping a stronger model for agent-driven test generation.

## Embed video

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/WQhiA25aExI"
    title="What’s new in Android Studio Otter: The AI Agent update"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

The video covers Agent Mode improvements and model choice in earlier Android Studio releases. The same principles apply to the new Model Assignment controls in Rabbit 3.

## What else is new in Rabbit 3

Rabbit 3 Canary also adds the Compose Preview Screenshot Testing tool for generating HTML reports of UI changes. It includes automated migration tooling for iOS, Flutter, and React Native projects into native Android. You can publish signed app bundles directly to Google Play Console test tracks from the IDE.

These features sit alongside the model controls. Together they tighten the loop from idea to tested build.

## Conclusion

Model Assignment in Android Studio Rabbit 3 Canary gives you explicit control over which AI model handles which IDE task. Assign stronger models where reasoning quality matters and lighter models where speed and quota matter more. The setting is available now on the Canary channel under Tools > AI > Model Providers.

Update to Rabbit 3 Canary, open the Model Assignment tab, and map your models. Then run a few Agent Mode tasks and lighter suggestions to confirm the balance you want.

Sources: Android Studio preview release notes (developer.android.com/studio/preview/features), Android Studio Release Updates blog (androidstudio.googleblog.com), and official documentation on Model Providers.
