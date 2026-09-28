---
title: "How to Use Firebase Auth Triggers in Functions v2"
description: "Set up 2nd gen Firebase Auth triggers with onUserCreated and onUserDeleted, plus tenant filters, secrets, and idempotent welcome emails."
pubDate: 2026-09-28T16:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["firebase", "tutorials", "developer", "how-to", "security"]
noindex: false
---

Cloud Functions for Firebase (2nd gen) now supports Authentication user events that used to live only on 1st gen. You can send a welcome email, seed a Firestore profile, or clean storage when an account disappears, without pinning the old `functions.auth.user()` API.

Google documented `onUserCreated` and `onUserDeleted` in the `firebase-functions/v2/identity` (also imported as `firebase-functions/identity`) package. This guide follows that official page and the September 2026 Functions release notes. No invented APIs.

## What changed in 2nd gen Auth triggers

For years, user create and delete handlers were 1st gen only. Blocking functions (`beforeUserCreated`, `beforeUserSignedIn`) arrived earlier on 2nd gen. Background create and delete events did not.

That gap closed. The handlers now run on Cloud Run under Eventarc, with at-least-once delivery. You get an `AuthEvent` instead of a raw `UserRecord` plus a separate `context` object.

Use 2nd gen when you want concurrency, region control, and Secret Manager on the same function as the rest of a v2 codebase. Keep 1st gen only if you still have a mixed runtime you cannot migrate this week.



![Developer working at a laptop with code on the screen](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)



## When a create event fires

Official docs list four cases that emit a user-created event:

- A user creates an email and password account.
- A user signs in for the first time with a federated identity provider.
- You create an account with the Admin SDK.
- A user starts a new anonymous Auth session for the first time.

A first sign-in with a **custom token does not** fire the event. If your backend mints custom tokens for every session, do not wait on `onUserCreated` to write the user document. Write that document from the same Admin call that creates the user.

## Install and export onUserCreated

Use a current `firebase-functions` SDK that includes the identity handlers. The official sample stores an email API key in Secret Manager with `defineSecret`.

```js
const { onUserCreated } = require("firebase-functions/identity");
const { defineSecret } = require("firebase-functions/params");
const { logger } = require("firebase-functions");
const { sendWelcomeEmail } = require("./utils/myEmailService");

const emailApiKey = defineSecret("EMAIL_API_KEY");

exports.newUserWelcome = onUserCreated(
  { secrets: [emailApiKey] },
  async (event) => {
    const { uid, email, displayName } = event.data;

    if (!email) {
      logger.log(`User ${uid} does not have an email address.`);
      return;
    }

    await sendWelcomeEmail(email, displayName);
  },
);
```

`event.data` is the Admin `UserRecord`. You can read `uid`, `email`, `displayName`, providers, and the other public fields on that object.

The event itself also exposes metadata:

- `event.id` — unique event id
- `event.type` — `google.firebase.auth.user.v2.created`
- `event.time` — ISO 8601 timestamp
- `event.project` — Google Cloud project id
- `event.tenantId` — Identity Platform tenant, when present

Store `event.id` next to any side effect you write. That is how you make the handler idempotent when Eventarc delivers the same create twice.

## Filter tenants and set 2nd gen options

Pass an `AuthOptions` object as the first argument. Identity Platform multi-tenancy is first-class:

- Omit `tenantId` to hear every tenant plus default-project users.
- Set `tenantId: "my-tenant-id"` to listen to one tenant.
- Set `tenantId: IS_NOT_TENANT` to listen only to users that are not in a tenant.

You can also set standard 2nd gen knobs on the same object: `region`, `concurrency`, `cpu`, `memory`, `timeoutSeconds`, `minInstances`, `maxInstances`, and `secrets`.

```js
exports.sendWelcomeEmailToTenant = onUserCreated(
  {
    secrets: [emailApiKey],
    tenantId: "my-tenant-id",
    region: "us-central1",
  },
  async (event) => {
    const { uid, email, displayName } = event.data;
    await sendWelcomeEmail(email, displayName, event.tenantId);
  },
);
```

Put the function in a region close to Auth. Extra hops show up as delayed welcome mail, not as a failed create. The Auth path itself does not wait for this function.



![Server racks in a data center aisle](https://images.unsplash.com/photo-1558494949-ef646f5c9c1d?auto=format&fit=crop&w=800&q=80)



## Handle account deletion

`onUserDeleted` uses the same options and the same `event.data` shape. Official sample:

```js
const { onUserDeleted } = require("firebase-functions/identity");

exports.deletedUserFarewell = onUserDeleted(
  { secrets: [emailApiKey] },
  async (event) => {
    const { uid, email, displayName } = event.data;
    if (!email) {
      logger.log(`User ${uid} does not have an email address.`);
      return;
    }
    await sendGoodbyeEmail(email, displayName);
  },
);
```

Deletion is the right place to drop private Cloud Storage prefixes and Firestore user trees that security rules no longer cover. Do that with the Admin SDK inside the function. Do not rely on the client to finish cleanup after `deleteUser()`.

You can still attach `{ tenantId: IS_NOT_TENANT }` so tenant wipe events do not hit a function built for the default project only.

## Blocking functions are a different tool

Background triggers run **after** Auth finishes. They cannot stop a sign-up.

If you need to reject an email domain or attach custom claims before the ID token returns, use [blocking functions](https://firebase.google.com/docs/functions/auth-blocking-events) on Firebase Authentication with Identity Platform: `beforeUserCreated` and `beforeUserSignedIn`. Those run synchronously and can return a modified user or an error.

A common split:

- Blocking function: deny disposable domains, set `admin: false` claims.
- `onUserCreated`: send mail, write `/users/{uid}`, enqueue onboarding.
- `onUserDeleted`: erase files and analytics user keys.

Do not put network-heavy work in a blocking function. Timeouts there block the client sign-in.

## Official best practices you should copy

Google lists four rules on the same docs page. Treat them as required, not optional.

**Concurrency.** 2nd gen defaults to 80 concurrent requests when CPU is at least 1. Do not store per-user state on a module-level variable. Two welcome mails can run in the same instance.

**Idempotency.** Delivery is at-least-once. Before you call the mail API, read a `welcomeSentAt` field (or the stored `event.id`) and skip if it is already set.

**Tenant scope.** A function without `tenantId` sees every tenant. That is a leak if Tenant A should never receive Tenant B’s template.

**Region and resources.** Set `region` and size `memory` for the worst email or Admin batch you actually run. Defaults are fine for a short mail send. They are not fine if you scan Storage on delete.

If this function also calls Gemini or another billed API, put a service-level budget next to it. The walkthrough in [Firebase spend caps for Gemini and Functions](/blog/firebase-spend-caps-gemini-functions/) covers how a runaway retry loop gets paused at 100% of the cap.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/DYfP-UIKxH0"
    title="Getting Started with Cloud Functions for Firebase using TypeScript - Firecasts"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Deploy checklist

1. Upgrade `firebase-functions` and `firebase-admin` in `functions/package.json`.
2. Export `onUserCreated` / `onUserDeleted` from `index.js` or `index.ts`.
3. Run `firebase deploy --only functions`.
4. Create a test email user in the Auth console. Confirm one log line and one mail.
5. Delete the test user. Confirm the delete handler and that Storage cleanup ran once.
6. Create the same user again after a deploy. Confirm you did not send two welcome mails if Eventarc retried.

Local emulators received 2nd gen Authentication trigger fixes in Firebase CLI 15.30.2 (17 September 2026). Use that CLI or newer before you trust emulator-only tests.

## Conclusion

2nd gen Auth triggers give you the create and delete hooks that used to force a 1st gen function into an otherwise v2 project. Import `onUserCreated` and `onUserDeleted` from `firebase-functions/identity`, read `event.data`, filter tenants on purpose, and write every side effect so a duplicate Eventarc delivery is a no-op.

Ship the welcome path first. Add delete cleanup before you let users wipe accounts from the client. Keep blocking functions for policy, not for mail.

## Sources

- [Firebase Authentication triggers](https://firebase.google.com/docs/functions/auth-events) — Cloud Functions for Firebase documentation (updated 24 September 2026)
- [Firebase release notes](https://firebase.google.com/support/releases) — Cloud Functions 2nd gen Authentication event triggers, 15 September 2026; CLI 15.30.2 emulator fixes, 17 September 2026
- [Blocking functions](https://firebase.google.com/docs/functions/auth-blocking-events) — Firebase documentation
- [What can you do with Cloud Functions?](https://firebase.google.com/docs/functions/use-cases) — Firebase documentation
