---
title: "How to Build Full-Stack Web Apps in Google AI Studio"
description: "Step-by-step guide to vibe code full-stack web apps in Google AI Studio Build mode using prompts, then iterate, share, and deploy."
pubDate: 2026-10-17T10:00:00
heroImage: "https://images.unsplash.com/photo-bWVBCDtTRJI?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "google", "developer"]
noindex: false
---

You describe a web app in plain language and Google AI Studio generates a working full-stack project with a live preview. The Antigravity agent handles the React frontend, Node.js server, package installs, and API wiring so you can focus on testing and refining the idea.

This guide covers the current Build mode workflow from the official Google AI for Developers documentation. You start in the browser, iterate through chat or visual annotations, and finish by deploying or exporting the code. No local setup is required to get a running prototype.

![Programmer coding at a desk with several monitors](https://images.unsplash.com/photo-bWVBCDtTRJI?auto=format&fit=crop&w=800&q=80)

## What Build mode creates

Open [Google AI Studio](https://aistudio.google.com/apps) and switch to Build mode. You can begin in four ways:

- Type a prompt describing the app.
- Click the “I’m Feeling Lucky” button for a generated idea.
- Remix an existing project from the App Gallery.
- Import a project from GitHub.

Select the web app option (the default). AI Studio then generates:

- A client-side React frontend.
- A server-side Node.js runtime that supports npm packages, secure API calls, and database connections.

The Antigravity agent manages files across the stack and keeps context from earlier prompts. It verifies updates to reduce common generation errors. You see the live preview on the right and can open the Code tab to inspect the generated files.

The agent can add AI features such as image generation (Nano Banana) or real-time interactions (Live API) when you include them in the prompt or use AI Chips. Secrets such as your Gemini API key stay on the server side and are never exposed in client code.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/gJYZE9UXiHk"
    title="Google AI Studio's new full-stack vibe coding experience"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step-by-step: Create and refine a web app

1. Sign in to Google AI Studio with your Google account and open Build mode.
2. Choose the web platform if the picker is visible.
3. Enter a clear prompt. Example: “Build a task tracker web app with a list of tasks, add/edit/delete buttons, local storage for persistence, and a simple dashboard that shows completion percentage. Use a clean light theme with Tailwind CSS.”
4. Click Build. The agent generates the files and starts the live preview. This usually takes a few minutes.
5. Test the preview. Click buttons, enter data, and reload the page to confirm persistence works.
6. Iterate in the chat panel. Ask for one change at a time: “Add a dark mode toggle that saves the preference” or “Show a confirmation before deleting a task.”
7. Use annotation mode when available. Highlight a section of the UI in the preview and describe the change directly.
8. Review the Code tab if you want to see or manually edit the React and server files.

The agent installs needed npm packages automatically. You can request specific libraries if you know them. For data that must survive sessions, mention Firebase Firestore in the prompt; the agent can provision and wire it up, including Google sign-in.

![Laptop and phone on a desk with coding software open](https://images.unsplash.com/photo-oYzjGQ7LCVE?auto=format&fit=crop&w=800&q=80)

## Full-stack features you can request

AI Studio supports more than static frontends:

- **npm packages**: Ask for charts, form libraries, or other tools. The agent identifies and installs them.
- **Secrets**: Store additional API keys in the Settings > Secrets panel. They remain available only to server-side code.
- **Firebase**: Request Firestore for persistent storage and Firebase Authentication for “Sign in with Google.”
- **Google Workspace**: Connect Gmail, Sheets, Docs, Drive, or Calendar. The agent handles the OAuth setup.
- **Multiplayer**: Describe real-time collaboration. The server runtime manages connections and shared state.
- **Maps or search grounding**: Use AI Chips or mention Google Maps data or Search grounding when relevant.

API calls made by the app count against your Gemini usage. Paid models can incur costs; AI Studio warns you before sharing if costs may apply.

## Deploy, share, or export

When the app works as expected:

- **Share**: Generate a link so others can use the running preview. Shared users can view the code and fork it. API usage still counts against your quota. Apps are private by default.
- **Deploy to Cloud Run**: Publish a scalable public URL. Your API key stays secured in the server environment. Standard Cloud Run pricing may apply.
- **Sync with GitHub**: Connect a repository for two-way sync. Push AI Studio changes or pull local edits. Manage the connection in the GitHub tab under Settings.
- **Download ZIP**: Export the project and host it elsewhere. You must set the GEMINI_API_KEY environment variable in the new hosting environment. Calls remain server-side, so the key is not exposed to end users.

If a shared link shows a 403 Access Restricted error, check for privacy browser extensions or ask the agent to “fix any build issues with the current code.”

For Android apps instead of web apps, see our guide on [vibe coding private Android apps on Google Play](/blog/vibe-code-private-android-apps-google-play/).

![Developer typing code on a laptop screen](https://images.unsplash.com/photo-xaWYIbNIOdw?auto=format&fit=crop&w=800&q=80)

## Tips for better results

Write specific first prompts. List the main screens, data needs, visual style, and any AI features you want. Vague prompts produce generic layouts that need more iteration.

Iterate in small steps. One clear change per message reduces the chance of breaking earlier work.

Test edge cases in the preview: long text, empty states, duplicate entries, and page reloads. The emulator or browser preview shows most issues quickly.

Use the App Gallery for inspiration. Open a similar project, click Copy App or Remix, then adapt it with your own requirements.

Check the Code tab after major changes so you understand the structure before deploying or exporting.

Remember the limitations: some Navigator APIs (camera, microphone) require extra user acknowledgements. Direct database support beyond Firebase is still evolving; any network-accessible storage can be used if you configure it yourself after export.

## Conclusion

Google AI Studio Build mode turns a short description into a runnable full-stack web app with a live preview and server-side capabilities. You refine through chat or annotations, then share a link, deploy to Cloud Run, sync with GitHub, or download the code. The Antigravity agent keeps the project consistent while you focus on the behavior and design.

Start with a focused prompt today, test the preview thoroughly, and iterate until the app matches your needs. When you are ready, deploy or export and continue development in your preferred tools.

**Sources**

- [Build apps in Google AI Studio](https://ai.google.dev/gemini-api/docs/aistudio-build-mode) (Google AI for Developers, last updated 2026-08-20)
- [Vibe Code to production with Google AI Studio](https://blog.google/innovation-and-ai/technology/developers-tools/full-stack-vibe-coding-google-ai-studio/) (blog.google)
- Google for Developers: Google AI Studio's new full-stack vibe coding experience (YouTube)
