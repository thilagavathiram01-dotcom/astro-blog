---
title: "Set Up Gemini 4 Argon with Android CLI and Antigravity"
description: "Step-by-step guide to install the Android CLI plugin and run Gemini 4 Argon in Antigravity or Android Studio for agentic Android app development."
pubDate: 2026-10-17T10:41:00
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "android", "ai-tools", "tutorials"]
noindex: false
---

Gemini 4 Argon arrived for Android developers on October 13, 2026. It brings stronger long-horizon reasoning and self-correcting build loops to agentic workflows.

You can use it in Google Antigravity, Android Studio Canary, or via the Gemini API. The Android CLI plugin connects the agent to your local Gradle, devices, and skills so it can plan, edit, and verify changes end-to-end.

This guide shows the exact setup steps from the official Android Developers Blog and Antigravity documentation.

## What you need before you start

Google AI Ultra subscribers get full Antigravity access to Argon. Developers on the paid Gemini API tier can use Argon inside Android Studio and Google AI Studio. Introductory pricing of $2 per million input tokens and $10 per million output tokens runs through November 30, 2026.

Update to the latest Antigravity desktop app or CLI, and install the newest Android Studio Canary if you plan to use the IDE path. Have Android Platform Tools and a recent Android SDK installed.

![Developer working with code on a laptop](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80)

## Install the Android CLI plugin in Antigravity

Open the Antigravity desktop app. Go to Settings > Customizations > Build With Google Plugins (or the Plugin Marketplace). Find android-cli-plugin and enable it.

From the terminal CLI, run:

```
agy plugin install android-cli-plugin
```

For any terminal agent that supports Android CLI, also run:

```
android init
```

This registers the official Android skills and tools so the agent can create projects, run builds, manage emulators, and apply skills such as Compose migration or AGP upgrades.

## Connect Argon inside Android Studio Canary

Launch the latest Android Studio Canary. Open the agent tool window and sign in with your Google AI Ultra account. Antigravity appears as an available agent; select Gemini 4 Argon as the model.

If you prefer the Gemini API path, add your paid API key in Android Studio settings under Model Provider. Argon then becomes available for Agent Mode sessions.

The agent can capture Gradle daemon and Kotlin compiler error streams. When a build fails it iterates on the hypothesis until the root cause is fixed—exactly the closed-loop behavior described in the October 13 Android Developers post.

## Run a first agentic task

Open or create an Android project. In the agent chat describe a concrete goal, for example: “Add a Compose screen that shows a list of items with a Material 3 top app bar and pull-to-refresh.”

Argon plans the files, writes the composables, updates the navigation graph if needed, and triggers a build. It can also apply AGSL shaders inside Modifier.graphicsLayer blocks for custom visual effects, as demonstrated in the official Planetarium example.

You keep full review control: accept or reject each edit before it lands.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/91oc9SyHxKI"
    title="Project Planetarium: 3D Android UI with Gemini 4 Argon"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

![Lines of code on a computer screen](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Tips for better results

- Keep Android CLI and the plugin updated so the agent sees the newest skills and device-streaming commands.
- Give the agent a clear success criterion (for example, “the app builds and the new screen appears on the emulator”).
- Use official Android skills for specialized work such as edge-to-edge layouts or R8 configuration. The agent loads them on demand.
- For long sessions, start with medium thinking and raise it only for multi-file refactors.
- Monitor token use; Argon’s unified 1 M context helps, but complex self-healing loops still consume output tokens.

If you already use Firebase AI Logic, you can also call Argon client-side from your app. See the related guide on [adding Gemini 4 Argon to Android with Firebase AI Logic](/blog/add-gemini-4-argon-android-firebase-ai-logic/).

## Conclusion

Gemini 4 Argon plus the Android CLI plugin turns Antigravity and Android Studio into capable agentic partners for real Android work. The setup takes only a few commands or a couple of UI clicks once you have the right subscription or API tier.

Start with a small feature, review the edits, and expand from there. The same surfaces also support other models, so you can switch when a lighter model is enough for the task.

## Sources

- Android Developers Blog: Bringing our latest frontier model to Android Developers (13 October 2026)
- Google Antigravity Blog: Gemini 4 Argon in Google Antigravity (13 October 2026)
- Gemini API documentation for Gemini 4 Argon model details and pricing
