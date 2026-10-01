---
title: "Install and Use the Firebase Plugin in OpenAI Codex"
description: "Install the official Firebase plugin in Codex, then provision Auth, Firestore, and Security Rules with agent skills and the MCP server."
pubDate: 2026-10-01T10:00:00
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["firebase", "chatgpt", "developer", "tutorials", "how-to"]
noindex: false
---

On 28 September 2026, Firebase published the official agent plugin for Codex. Install it once, and Codex can follow Firebase agent skills, call the Firebase MCP server, and run the Firebase CLI. That is a practical way to provision a project, wire Authentication, create a Firestore database, and start with Security Rules instead of an open database.

This guide follows the Firebase blog post and the Firebase agent skills docs. It does not invent menu labels. If a button name differs in your Codex build, use the Plugins directory search for Firebase and the terminal commands from the docs.

## What the plugin actually installs

The plugin is a bundle, not a single prompt. Firebase says it gives Codex three things at once:

- **Firebase agent skills** for recommended workflows and product knowledge. Skills live in the `firebase/agent-skills` GitHub repo and also work with Antigravity, Claude Code, and Cursor.
- **The Firebase MCP server** for structured tool calls. Codex can query data, manage Authentication users, and read official docs through those tools.
- **The Firebase CLI** for project lifecycle work such as initializing services and deploying.

OpenAI lists the Google Firebase plugin under Engineering and IT, with Skills and MCP as the capabilities. The plugin page says Codex can set up projects, configure backend services, query Firestore, manage authentication, deploy Hosting, work with AI Logic, and audit security rules.

That is different from pasting a docs link into a chat. Skills use progressive disclosure: the agent sees short metadata first, then loads detailed instructions only when the task matches. Firebase documents this as a way to cut token use versus loading a full docs dump up front.

![Developer writing application code on a laptop](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## Install it in the Codex app

Firebase documents two install paths. Use the app path if you already work in the Codex UI.

1. In a terminal, register the marketplace once: `codex plugin marketplace add firebase/agent-skills`
2. Fully restart the Codex app so it picks up the new marketplace.
3. Open **Plugins**.
4. Select the Firebase marketplace or source.
5. Open **Firebase** and click **+ Install**.
6. Start a new task. Type `@Firebase` to select the plugin, or ask Codex to do a Firebase task.

The Firebase blog describes the same UI flow in shorter form: open a new or existing Codex project, go to Plugins, search for Firebase, and install the Firebase plugin. A **Try now** action can preload the prompt `Set up Firebase in this app`.

If you prefer the terminal only, the docs list:

```bash
codex plugin marketplace add firebase/agent-skills
codex plugin add firebase@firebase
```

To refresh later, run `codex plugin marketplace upgrade firebase`. If the new snapshot is not picked up, remove and add the plugin again:

```bash
codex plugin remove firebase@firebase
codex plugin add firebase@firebase
```

Availability still depends on your ChatGPT or Codex plan and workspace settings. OpenAI notes that some plugins need admin approval. If Firebase does not appear, check workspace plugin controls before retrying the marketplace command.

## Ask Codex to build and provision

After install, give Codex a concrete app plus a Firebase instruction. The blog uses a fitness tracker as the example. A clear prompt looks like this:

> Build a small workout tracker. Use Firebase as the backend. Set up Authentication and Cloud Firestore. Store each workout under the signed-in user. Write Security Rules so a user can read and write only their own workouts.

Firebase says Codex will often load these skills for that job:

- **firebase-basics** to add Firebase and configure the app
- **firebase-auth-basics** for sign-in and auth-based rules
- **firebase-firestore** (documented as `firebase-firestore-standard` in the skills table) for database provisioning, rules, and SDK calls

Codex may scaffold the UI first, use placeholder config, and keep state in memory so you can click through the flow before a live project exists. That is expected. The blog says Codex usually asks before it provisions a real backend, including whether you already have a Firebase project and which location to use for the database.

When you approve setup, the plugin path is supposed to wire SDKs, write config, enable Authentication, create Firestore, and add a starter rules file. Review every generated file. Do not deploy on the first pass.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/7Bv68f5szSU"
    title="Meet the all new Codex Cloud"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

OpenAI's Codex Cloud walkthrough shows how a named environment can hold repos, networking, and secrets so a team does not repeat setup. Pair that with the Firebase plugin if you want the same backend tools available on later cloud tasks.

## Check the project before you trust it

Inspect the repo and the console. The blog points to a `firebase.ts` file for client config. In the [Firebase console](https://console.firebase.google.com/), open Authentication providers and the Firestore data viewer for the project Codex created or updated.

Starter rules from the fitness example in the Firebase post do three useful things:

- Require `request.auth != null` and match `request.auth.uid` to the user path.
- Validate workout fields such as type, title length, duration, and calories.
- Allow read, create, update, and delete only for the owner path.

That pattern is a starting point, not a launch sign-off. Firebase still points teams to the [launch checklist](https://firebase.google.com/support/guides/launch-checklist) before production.

![Team reviewing a product build on a laptop](https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80)

## Audit Security Rules with the same plugin

The blog walks through an audit prompt after the first rules file exists. In the example, Codex flagged two issues:

- No cap on how many workout documents a listener can read, or how many a user can store, which can raise read, write, and storage cost.
- Anonymous Authentication as the only identity, which can orphan data if the user loses that anonymous session.

Ask Codex to fix the second issue by adding a permanent sign-in provider, such as Google Sign-In, and a flow that links the anonymous user before data is treated as durable. Then confirm the provider is enabled under Authentication in the console. Do not assume the chat summary matches the console.

The skills list also includes `firestore-security-rules-auditor` for common rule gaps. Invoke it by name if the agent does not load it on its own. Firebase says you can often type `/` in agent chat and search for the skill.

If you already use ChatGPT plugins for other work, the same install habit applies here: add the official plugin, then constrain the task. Our walkthrough of [ChatGPT plugins after DevDay 2026](/blog/chatgpt-plugins-after-devday-2026/) covers how plugin availability can depend on plan and workspace admin settings.

## Tips that prevent a bad first deploy

- Keep the first prompt narrow. Auth, one collection, and owner-only rules are enough. Add Storage, Hosting, or AI Logic in a later task.
- Say which Firebase project and database location to use if you already have one. Otherwise Codex may create a new project.
- Read `firestore.rules` yourself. Check that create and update validate `request.resource.data`, and that update cannot rewrite ownership fields.
- Turn off anonymous-only auth before you store anything a user would miss.
- Run the rules emulator, or a small set of allow and deny tests, before `firebase deploy`.
- Update the plugin with `codex plugin marketplace upgrade firebase` after Firebase ships skill changes.
- For Android clients later, pair this backend with a reviewed app setup. The [Firebase AI Logic hybrid inference guide](/blog/firebase-ai-logic-hybrid-inference/) is a separate path if the app also calls Gemini.

## Conclusion

The Firebase plugin for Codex is the supported way to give that agent Firebase skills, MCP tools, and the CLI in one install. Register the `firebase/agent-skills` marketplace, restart the Codex app, install Firebase from Plugins, and start a new task that names Auth, Firestore, and owner-only rules. Then compare the generated rules and Authentication providers with the console, audit cost and identity gaps, and use the launch checklist before you ship.

## Sources

- Firebase blog, 28 September 2026: [The Firebase plugin is now available in Codex](https://firebase.blog/posts/2026/09/firebase-plugin-for-codex/)
- Firebase docs: [Firebase agent skills](https://firebase.google.com/docs/ai-assistance/agent-skills)
- OpenAI plugin listing: [Google Firebase plugin](https://openai.com/business/plugins/firebase/)
- Firebase: [Launch checklist](https://firebase.google.com/support/guides/launch-checklist)
- OpenAI YouTube: [Meet the all new Codex Cloud](https://www.youtube.com/watch?v=7Bv68f5szSU)
