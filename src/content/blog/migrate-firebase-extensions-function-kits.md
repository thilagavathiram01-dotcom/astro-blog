---
title: "Migrate Firebase Extensions to Function Kits"
description: "Firebase Extensions shut down March 31, 2027. Migrate installed instances to function kits with firebase-tools 15.32 and ext:migrate."
pubDate: 2026-10-03T16:00:00
heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["firebase", "developer", "how-to", "tutorials"]
noindex: false
---

Firebase Extensions will shut down on March 31, 2027. Installed extensions keep running after that date, but key management features stop. Google’s recommended replacement is a self-managed function kit: the same job, packaged as Cloud Functions for Firebase (2nd gen) that you install and deploy yourself.

This guide follows the official user migration docs. It covers how to see whether a kit exists, which CLI version you need, and how `firebase ext:migrate` moves one instance without leaving the old extension in place until the new kit is up.

## What changes when an extension becomes a kit

Firebase Extensions used to create, update, and remove packaged functions for you. A function kit is ordinary 2nd gen Cloud Functions code. You create, update, delete, and troubleshoot it with the Firebase CLI inside your project.

The first official npm kit is Stream Cloud Firestore to BigQuery, published as `@firebase-function-kits/firestore-bigquery-export`. Other extensions may not have a kit yet. If the console or CLI shows no replacement, fork the open-source extension and follow the self-created kit guide instead of waiting.

Kits expect `firebase-functions` 7.4.0 or newer and `firebase-admin` 14.2.0 or newer. Instance configuration that used to live in the Extensions service moves into your codebase. The old `EXT_INSTANCE_ID` value maps to `FIREBASE_KIT_INSTANCE_ID`.

![Developer reviewing Cloud Functions logs on a laptop](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Check which instances can move

Open the Extensions page in the Firebase console. Each installed extension notes whether a function kit replacement is available.

From a terminal in a project that already uses the CLI, list instances and replacement packages:

```bash
firebase ext:list --project my-project
```

The table includes state, version, last update, and a Replacement Kit column. An empty cell means there is no official npm kit for that instance. The CLI also prints the March 31, 2027 shutdown notice.

Two paths are supported, both documented from September 2026:

- **npm function kit.** Use this when `ext:list` names a package, as it does for Firestore to BigQuery.
- **Fork and self-manage.** Use this when no kit is listed. Copy the extension source, convert triggers to 2nd gen functions, and own updates yourself. The `extension-to-functions-codebase` agent skill can automate publisher steps 1 through 8 if you are converting source, via `npx skills add firebase/agent-skills --skill extension-to-functions-codebase`.

## Prepare the CLI and IAM roles

Update the CLI before you migrate. Function kit and migration commands ship in `firebase-tools` 15.32.0 and later. Firebase CLI 15.32.1, released September 30, 2026, also adds extension migration tools and secret ID overrides for Cloud Functions.

```bash
npm install -g firebase-tools
firebase --version
```

Confirm the version is at least 15.32.0, then make sure the project is initialized (`firebase init` if this machine has never deployed functions for it).

The account you use needs roles that match what the CLI creates. Google lists these for the migration:

- `roles/firebaseextensions.editor`
- `roles/cloudbuild.builds.editor`
- `roles/artifactregistry.writer`
- `roles/run.developer`
- `roles/iam.serviceAccountUser`
- `roles/iam.serviceAccountCreator`
- `roles/cloudfunctions.admin` if you expose public endpoints
- `roles/secretmanager.admin` if the extension uses secrets
- `roles/serviceusage.serviceUsageAdmin` if new APIs must be enabled

An account that has already installed extensions and deployed functions usually already has most of these. Add missing roles in Google Cloud IAM before you start, or the migrate command will fail partway through.

Custom Docker repositories and customer-managed encryption keys (KMS) are not supported as replacement system parameters. If an instance uses either, follow the workaround in the Extensions FAQ before you migrate.

## Migrate one instance with ext:migrate

The recommended command deploys the kit first, then uninstalls the extension it replaces. Run it once per instance:

```bash
firebase ext:migrate --project <project-id>
```

The prompt walks through seven steps:

1. Pick an extension that has an official kit.
2. Pick the instance.
3. Update that extension to the latest version if needed.
4. Install the kit and copy the instance configuration.
5. Deploy the kit.
6. Confirm the deploy succeeded and that lifecycle hooks ran.
7. Uninstall the extension instance.

If you already know the target, skip the menus:

```bash
firebase ext:migrate --extension firebase/firestore-bigquery-export --project <project-id>
```

Or target one instance ID:

```bash
firebase ext:migrate --ext-instance firestore-bigquery-export-abcd --project <project-id>
```

To pin a package that is not the listed official replacement, add `--package`:

```bash
firebase ext:migrate --ext-instance firestore-bigquery-export-abcd \
  --package @firebase-function-kits/firestore-bigquery-export \
  --project <project-id>
```

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/nhCbAezbiQ8"
    title="Build your retail app with Firebase extensions"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

That Firebase walkthrough shows how Extensions used to package retail tasks such as image search, payments, and email. The shutdown does not remove those product ideas. It moves the packaged code into kits you deploy as normal functions.

## Confirm the kit before you trust it

Do not treat a green deploy as proof the kit works. Popular kits, including Firestore to BigQuery, run lifecycle hooks. A successful first deploy logs an `afterFirstDeploy` line and a queued task, plus a Cloud Logging link.

Open that link and confirm the task finished without errors. If the hook did not run, retrigger it:

```bash
firebase functions:lifecycle:run afterFirstDeploy <kit-instance-id>
```

While the old extension is still installed, both can process the same event. For Firestore to BigQuery, writes to the raw changelog and latest view deduplicate, so row counts will not tell you which path handled the event. Write a test document, then read kit logs:

```bash
firebase functions:log
```

Look for the kit function name, such as `kit-firestore-bigquery-export-fsexportbigquery`, and a line that the trigger received the document. Only then let the migrate flow uninstall the extension.

If validation fails, stop and uninstall the kit using the undo steps in the post-migration best-practices guide. Do not uninstall the extension until the kit has processed a real event you can see in logs.

![Server racks representing Cloud Functions runtime](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80)

## Install a kit when you are not migrating

You can add a kit to a project that never had the extension. From the best-practices guide:

```bash
firebase functions:kits:install --package @firebase-function-kits/firestore-bigquery-export --project my-project
```

The CLI asks for a kit name, an instance ID, and configuration. Deploy that instance alone:

```bash
firebase deploy --only functions:<kit-instance-id>
```

Global options live in `function-kits/<kit-id>/source/src/index.ts`. Per-instance values land in an env file under `function-kits/<kit-name>/config-<instance-id>/`. Edit those files, then redeploy. Treat kit upgrades like any other npm dependency: bump the package version, review params, and deploy again.

A local fork uses a directory instead of a package name:

```bash
firebase functions:kits:install --directory <path-to-your-fork> --project <project-id>
```

## Tips before the 2027 cutoff

- Migrate one instance at a time. `ext:migrate` is scoped to a single extension instance.
- Keep the extension installed until kit logs show a real event. The command order already deploys first, but you still have to read the logs.
- 2nd gen functions must sit in the same region as their trigger resources. A 1st gen location may not be valid after the move. Publishers are told to collect the event location and map multi-region Firestore values such as `nam5` to a Cloud Run region such as `us-central1`.
- Auth-related functions are a separate track. If you are adding `onUserCreated` or `onUserDeleted`, see [Firebase Auth triggers with Functions v2](/blog/firebase-auth-triggers-functions-v2/).
- Publisher questions can go to `firebase-extensions-migrator-support-external@google.com`. Subscribe by emailing the `+subscribe` address and replying to the membership request. Do not use the Join button.

## What to do this week

Run `firebase ext:list` on every project that still shows an extension. Note which rows already name an npm kit and which need a fork. Update `firebase-tools` to 15.32.0 or newer, confirm IAM, and migrate the Firestore to BigQuery instance first if you have it. The service shutdown date is March 31, 2027. Management features end then, even though already installed extensions keep executing.

## Sources

- [Migrate Firebase Extensions to function kits](https://firebase.google.com/docs/extensions/users/migrate) — Firebase
- [Migrate Firebase Extensions to Cloud Functions (publishers)](https://firebase.google.com/docs/extensions/publishers/migrate) — Firebase
- [Firebase Extensions Deprecation FAQ](https://firebase.google.com/docs/extensions/faq-and-troubleshooting) — Firebase
- [Firebase release notes, CLI 15.32.0 and 15.32.1](https://firebase.google.com/support/releases) — Firebase
- [Build your retail app with Firebase extensions](https://www.youtube.com/watch?v=nhCbAezbiQ8) — Firebase
