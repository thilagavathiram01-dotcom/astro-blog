---
title: "How to Add a Gemini API Key in Android Studio"
description: "Add a Gemini API key in Android Studio, expand the Agent Mode context window, and create a new Compose project with AI."
pubDate: 2026-09-26T05:30:00
heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "android", "tutorials", "developer", "how-to"]
noindex: false
---

Android Studio ships Gemini with a no-cost daily quota and a small context window. That is enough for short chat prompts. It is not enough when Agent Mode has to read a multi-module project or scaffold a new app.

Google documents a fix: add your own Gemini API key from Google AI Studio. Official pages last updated in 2026 state that a personal key can use up to 1 million tokens with Gemini 3 Pro. Usage on that key is billed separately from Studio's bundled quota.

This guide follows the official setup, then uses the same key when you create a project with AI.

## What you need before you start

Install a current Android Studio build from [developer.android.com/studio](https://developer.android.com/studio). Some Agent features still sit in preview or Studio Labs. Check the [Gemini features table](https://developer.android.com/studio/gemini/features) for the version that matches the tool you want.

You also need:

- A Google Account signed into Android Studio
- Access to [Google AI Studio](https://aistudio.google.com/) so you can create an API key
- A project folder you are willing to share as context (or a plan to turn context sharing off per project)

Do not commit the key to Git. Treat it like any other secret.


![Laptop with code editor used for Android development](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80)


## Step 1: Open Gemini Agent Mode

Open an existing project or create a blank one.

Click **Agent**, or go to **View > Tool Windows > Agent**. Sign in if Studio asks. Finish onboarding.

When the product-tier screen appears, choose **Gemini for individuals**. For the best results, select **Use all Gemini features** so Studio can share project context. That default applies to every project unless you change Gemini settings later.

If you work on a client codebase you cannot send off-device, open Gemini settings and restrict context sharing for that project only.

## Step 2: Add the Gemini API key

Google's add-key page lists these clicks:

1. Open **File > Settings** (Windows/Linux) or **Android Studio > Settings** (macOS).
2. Go to **Tools > AI > Model Providers** and select **Gemini**.
3. Click **Get a Gemini API key**. Studio opens Google AI Studio so you can create or copy a key.
4. Paste the key into the **API key** field. Available models appear in the list.
5. Enable the models you want to pick from when you send a prompt.
6. Click **Apply**. Click **OK** if you want Settings to close immediately.

The same settings path is labeled **Google AI Studio** on the Create a project with AI page. Both routes store the key for Agent Mode and for the New Project agent.

After the key is active, the default bundled quota is no longer the ceiling. You pay for tokens used with that key. Monitor spend in AI Studio under **Usage and Limits**.

## Why the key changes the answers

Official docs give three reasons to attach a key:

- Larger context. You can send more instructions, source files, and attachments. Google cites up to 1 million tokens with Gemini 3 Pro.
- Newer models. A personal key can reach current Gemini 3-class models instead of only the bundled default.
- Better new-project output. The New Project agent can use a larger window and, with a key, Nano Banana for design mockups behind the scenes.

None of that replaces a review. The agent can still invent APIs. You still run the app and read the diff.

## Step 3: Create a project with AI

Once the key is saved, start a prototype from the welcome screen.

1. Launch Android Studio.
2. Choose **New Project**, or **File > New > New Project** if a project is already open.
3. Select **Create with AI**.
4. Type a prompt. Click next.
5. Name the app and click **Finish**.
6. Read the generated plan. Edit it or ask for another plan before you approve generation.

After you approve the plan, the agent writes files, builds the project, and retries when the build fails. Stop it if the loop is stuck on the same error.

Google lists four shapes the agent handles well: single-screen UIs, simple multi-page apps, apps that call Gemini APIs, and apps that read a public HTTP API.

The default target is Jetpack Compose. Ask for Compose in the prompt unless you have a reason to generate XML views.

A prompt that works better than "make a notes app":

> Create a simple note-taking app with Jetpack Compose and a Room database so users can add, edit, and delete notes. Use Material 3. Phone layout only.

Name the form factors you care about. If you want phone and tablet, say so and keep matching emulator images installed so the agent can run what it built.

You can attach a sketch or mockup in the New Project dialog. Official guidance says visual references improve layout fidelity.


![Developer reviewing generated code on a desktop monitor](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)


## Step 4: Check the build on a device

Do not treat a green Gradle sync as proof the UI is correct.

Run the module on an emulator or hardware. Walk the screens in the plan. Confirm navigation, empty states, and any network call.

If generation stopped with a compile error the agent could not fix, copy the error into Agent Mode and name the file. Vague "fix the project" prompts waste quota.

For UI flows you want to re-run after each change, pair this setup with [Journeys in Android Studio](/blog/journeys-android-studio-gemini/). Journeys describe taps and assertions in plain language and sit on the same Gemini sign-in.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/zGK1vIX87vw"
    title="Gemini in Android Studio: now helping you at every stage of the dev life cycle"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Prompt habits that keep Agent Mode useful

Google's Gemini-in-Studio tips and the New Project page agree on the same pattern: give bounds.

- State the library and the version family you want. If the library is new, ask the agent to use its Android docs tools instead of guessing APIs.
- Say what not to change. "Do not migrate the networking stack" stops a drive-by rewrite.
- Prefer one task per conversation when the change is large. Parallel Agent conversations exist for separate tracks, not for one tangled refactor.
- After a new project lands, keep iterating in Agent Mode rather than starting over unless the architecture is wrong.

Studio Labs and canary channels move faster than stable. If a control is missing, confirm you are on the channel the features page lists for that control.

## Keep the key off the repo

A personal Gemini key can incur charges. Store it only in Studio settings or a local secrets file that stays out of version control.

If a key leaks, revoke it in Google AI Studio and create a new one. Update Model Providers, then click **Apply**.

Team projects should decide in writing whether context sharing is on. The onboarding default is convenient. It is not a legal review of your source tree.

## What to do next

You now have Agent Mode signed in, a billed key for a larger window, and a path from a sentence to a Compose project that builds.

Next, pick one real screen from an existing app and ask Agent Mode to add a test or a Compose preview. Keep the prompt short. Read every file it touches.

## Sources

- [Get started with Gemini in Android Studio](https://developer.android.com/studio/gemini/get-started) — Android Developers (updated 2026-09-10)
- [Add your own Gemini API key](https://developer.android.com/studio/gemini/add-api-key) — Android Developers
- [Create a project with AI](https://developer.android.com/studio/gemini/create-a-new-project-with-ai) — Android Developers
- [Gemini in Android Studio features](https://developer.android.com/studio/gemini/features) — Android Developers
- [Supercharge your Android development with 6 expert tips for Gemini in Android Studio](https://android-developers.googleblog.com/2026/03/supercharge-your-android-development.html) — Android Developers Blog
- [Gemini in Android Studio: now helping you at every stage of the dev life cycle](https://www.youtube.com/watch?v=zGK1vIX87vw) — Android Developers on YouTube
