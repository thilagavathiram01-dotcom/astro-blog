---
title: "Migrate Firebase Studio to Antigravity or AI Studio"
description: "Step-by-step guide to migrate Firebase Studio projects to Google Antigravity or AI Studio before the March 2027 shutdown."
pubDate: 2026-11-09T14:00:00
heroImage: "https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["firebase", "tutorials", "how-to", "developer", "ai-tools"]
noindex: false
---

Firebase Studio shuts down on March 22, 2027. New workspace creation and signups ended on June 22, 2026. Existing workspaces stay open until the sunset date, but you should move projects now to avoid permanent data loss.

Google is shifting the browser-based AI coding environment into Google AI Studio for prompt-driven prototyping and Google Antigravity for local, agent-first development. Core Firebase services such as Cloud Firestore, Authentication, and App Hosting continue to run without interruption. Only the Studio development environment is affected.

![Programmer working across multiple monitors in a modern workspace](https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=800&q=80)

## Sunset timeline

Google announced the sunset on March 19, 2026, and began rolling out migration tools the same day. New workspaces and user signups stopped on June 22, 2026. You can still open, edit, test, and deploy existing workspaces until March 22, 2027. On that date, Firebase Studio closes and remaining data is permanently deleted.

Critical security patches and Gemini model updates continue for existing workspaces until the final shutdown. Apps already published to Firebase Hosting or App Hosting keep running after the sunset.

## Choose your migration path

Pick the destination that matches how you work.

Google AI Studio fits rapid, browser-based prototyping. It now includes direct integrations for Cloud Firestore and Firebase Authentication so you can move from a prompt to a production app quickly. The Move now button in Firebase Studio can transfer a workspace into AI Studio automatically.

Google Antigravity suits code-first, multi-agent development on the desktop. It runs locally, supports Gemini plus other models such as Claude, and includes agent skills and MCP server connections. Use it when you need a full local environment without cloud workspace limits.

If your project started in Prototyper mode and later added complex scripts or local tooling, Antigravity is usually the better long-term home. You can also start in AI Studio and later export to Antigravity from the Code tab.

## Migrate to Google Antigravity

Install the Antigravity IDE, Node.js 20 or later, and Firebase CLI 15.10.0 or higher before you begin. Download the IDE from antigravity.google and choose the Antigravity IDE option.

Open your existing workspace in Firebase Studio and click the **Move now** button at the top. Choose the export method that appears. If a Zip and Download button shows, click it. Otherwise open the Command Palette (Cmd+Shift+P or Ctrl+Shift+P) and run **Firebase Studio: Zip & Download**. Allow pop-ups if the browser blocks the download.

Extract the ZIP on your machine and open the folder in the Antigravity IDE. In the Agent pane, select the Gemini Flash model for speed, then enter the prompt:

```
@fbs-to-agy-export
```

The agent transforms the project and asks for confirmation on steps such as dependency updates or config changes. Follow its guidance. If an error appears, ask the agent to retry.

For a manual path without the agent, extract the ZIP or point the CLI at the original archive and run:

```
npx firebase-tools@latest studio:export <path>
```

The export command is optimized for Next.js, Flutter, and Angular workspaces. Other frameworks may need manual cleanup of generated files after the transfer.

After the project opens in Antigravity, reconnect any Firebase project credentials through environment variables or the Firebase MCP server. Your existing Firestore data, Authentication users, and Hosting configurations stay in the original Firebase project. You only move the code and development environment.

If you already use Antigravity for other models, see the guide on [accessing Claude Opus 5.5 in Google Antigravity](/blog/access-claude-opus-5-5-google-antigravity/).

![Laptop and external monitor displaying code](https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&w=800&q=80)

## Migrate to Google AI Studio

In Firebase Studio click **Move now** and select **Prepare for AI Studio**. When preparation finishes, click **Move to Google AI Studio**. Accept any Terms of Service prompt. The code opens in a new AI Studio workspace. Conversion can take several minutes; AI Studio notifies you when it completes.

You can then continue iterating with the AI Studio agent. If the app previously used App Hosting and you want to keep the same `*.hosted.app` URL or custom domain, secure the Gemini API key in the Firebase console and use GitHub Sync for deployment. For a simpler path that accepts a new `*.run.app` URL, use the Publish button inside AI Studio to deploy to Cloud Run.

Core Firebase services remain linked to the same project. Re-enter API keys or configuration only if the transfer prompts you.

## Practical tips

Only the workspace owner can trigger the automated Move now flow. If you see a permission error, duplicate the workspace from the Firebase Studio dashboard (three-dot menu next to the project) and open the duplicate. The new copy treats you as the owner and enables the button.

Allow browser pop-ups for studio.firebase.google.com before you start an export. Clear multi-account Google sessions or use an Incognito window if the button stays disabled.

Test the migrated app locally or in the AI Studio preview before you rely on it for production deploys. Review any generated Firestore Security Rules and environment variables. The export does not always rewrite every custom script or Nix configuration.

Keep a local ZIP or GitHub copy even after a successful transfer. The original Studio workspace remains available until March 22, 2027, so you can fall back if needed.

## Conclusion

Firebase Studio ends on March 22, 2027. Use the Move now tools now to shift projects into Google AI Studio for fast prototyping or Google Antigravity for a local agentic IDE. Your databases, users, and published apps stay intact. Choose the path that matches your workflow, complete the export, and continue building without interruption.

## Sources

- [Firebase Studio sunset and project migration](https://firebase.google.com/docs/studio/migrating-project) — Firebase Docs
- [Get started with Firebase Studio](https://firebase.google.com/docs/studio/get-started) — Firebase Docs
- [Firebase Studio migration](https://antigravity.google/docs/firebase-studio-migration/) — Google Antigravity Docs
- [From prompt to production: Build full-stack apps faster with Google AI Studio and Firebase](https://firebase.blog/posts/2026/03/announcing-ai-studio-integration/) — Firebase Blog, March 19, 2026

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/9Z1k95Ka_xc"
    title="How to Use the Firebase Studio Move Now Button (Full Antigravity Migration Guide)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
