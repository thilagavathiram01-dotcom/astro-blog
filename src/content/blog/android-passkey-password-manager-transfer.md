---
title: "How to Transfer Passwords and Passkeys Between Android Password Managers"
description: "Move passwords and passkeys on Android without a CSV file. Use the system credential transfer flow with Google Password Manager, 1Password, Bitwarden, or Dashlane."
pubDate: 2026-09-19T12:00:00
tags: ["android", "tutorials", "how-to"]
heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&h=630&q=80"
---

Switching password managers used to mean exporting an unencrypted CSV, hunting for that file on your phone, importing it, and hoping you remembered to delete it. Passkeys were worse: there was no portable file at all, so you recreated them site by site.

On 10 September 2026, Google announced a system-level transfer on Android that moves **passwords and passkeys** directly between supported apps. Android coordinates the handoff. The operating system does not get a raw dump of your vault, and you do not leave a plaintext file on storage.

The flow works on **Android 8 and newer**. At launch it is available in **Google Password Manager**, **1Password**, **Bitwarden Password Manager**, and **Dashlane**. Other apps can join by implementing Credential Manager’s Credentials Transfer APIs and the FIDO Credential Exchange Format (CXF).

This guide is the consumer path: what you need, how to import into Google Password Manager, how to leave Google Password Manager for another app, and what to do when the list of sources is empty.

## What this transfer is (and is not)

Android’s credential transfer is a **same-device** peer-to-peer move between two credential providers installed on the phone. Official Android developer docs describe two roles:

- **Importer** — the app you want to start using. It asks Android for credentials of certain types (passwords, passkeys, and optionally addresses or notes).
- **Exporter** — the app that already holds the vault. It shows a review screen and, after you approve, writes a CXF payload to a content URI.

Raw secrets are not written to Downloads. Developer documentation states the framework is designed so credentials are not exposed to the Android OS or to unauthenticated apps.

This is **not**:

- A cloud sync between two accounts you never installed on the same phone
- A replacement for checking in at each website to confirm the new passkey works
- Available for every password manager yet

CSV export still exists in Google Password Manager for apps that have not implemented the API. Use the on-device transfer when both apps support it.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/SWocv4h7lng" title="Passkeys: a simpler and safer way to sign in — Google" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## What you need before you start

- A phone or tablet on **Android 8 (Oreo) or later**
- A **screen lock** (PIN, pattern, password, fingerprint, or face). Chrome Help requires it for import and export.
- Both password managers **installed and signed in** on that device
- For Google Password Manager: the same Google Account you use in Chrome / Password Manager
- Updated Play services and updated manager apps (Bitwarden’s earlier Play services 26.21+ requirement is a useful floor if a source app never appears)

If you are importing passkeys to a **new** device, Google’s Help Center notes you may need the **old device screen lock** or your **Google Password Manager PIN** before those passkeys will unlock.

![Person unlocking a smartphone with fingerprint on a wooden desk](https://images.unsplash.com/photo-1614064641938-8b97b32c4717?auto=format&fit=crop&w=1200&h=630&q=80)

## How the three-step switch works

Google’s Android blog describes the same sequence no matter which supported app you open first:

1. Open the **new** password manager and choose import or copy from another provider. That app hands the job to Android.
2. Android lists compatible managers already installed and lets you pick a source.
3. You land in the **old** manager to review and authorize. After approval, the copy finishes in a few seconds.

Always start in the app you want to **receive** the vault. Starting in the source app and looking for “export to Bitwarden” is the old mental model and is easy to miss.

## Import into Google Password Manager

Use this when you are consolidating into Google’s vault (Chrome autofill, Android Autofill, passwords.google.com).

1. Open **Google Password Manager** on the phone. From Chrome: More → Settings → Autofill and passwords → Google Password Manager.
2. Open **Settings**.
3. Tap **Import passwords and passkeys**.
4. Unlock with your screen lock when prompted.
5. Choose the password manager to import from. Sign in there if asked. Importing passkeys may also ask for that app’s **recovery key**.
6. Approve the export in the other app.
7. Tap **Done**.

Chrome Help notes that **duplicate passwords already in Google Password Manager are skipped**. If a site name lands in the wrong field, use the Password Manager search box rather than scrolling the full list.

You can still import a CSV if the other app is not on the partner list. After any CSV import, **delete the file**. Google’s Help article is explicit: anyone with the device can open that file.

Limits from the same Help page: up to **3,000 passwords per CSV import**, and up to **10,000** stored in a Google Account. Split large vaults if you are forced onto CSV.

## Export from Google Password Manager into 1Password, Bitwarden, or Dashlane

This is the direction most people want when they leave the built-in manager.

1. Install and sign in to **1Password**, **Bitwarden**, or **Dashlane** on the same Android device.
2. In that app, start **import from another app** (wording varies; look for import, copy, or transfer credentials).
3. When Android’s picker appears, choose the Google Account whose passwords and passkeys you want to move.
4. Unlock the device when prompted.
5. When Google Password Manager opens, tap **Export**.
6. Wait for the destination app to confirm the count of items received.

Do not use **Download file** unless the destination app cannot speak the transfer API. Download file is the CSV path and does not move passkeys the way the system transfer does.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/q5nV9spPGpk" title="How passkeys work — Google Chrome Developers" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## After the copy: check sign-in, then clean up

A successful transfer is a **copy**, not a remote wipe of the source. Treat the next hour as verification, not deletion.

- Open a few high-value sites and apps (bank, email, work SSO) and confirm the new manager offers the passkey or password.
- In Google Password Manager, run the built-in check for breached or weak passwords after an import.
- Keep both apps installed for a few days. Only remove the old manager after you have signed in successfully with the new one.
- If you used a CSV at any point, delete it from Files / Downloads and empty Trash.

Passkeys remain bound to the credential provider that now stores them. After a move, the site should list the new manager the next time you choose a passkey. If a site still only shows the old provider, sign in with a backup method and add a fresh passkey from the new app.

![Close-up of a laptop login screen next to a smartphone](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&h=630&q=80)

## If Android shows no source app

Work through this list before assuming the feature is missing from your OS:

- Confirm **both** apps are updated from Play Store and you are signed in.
- Confirm a **screen lock** is set. Import and export both require it.
- Open the **destination** app’s import screen, not only the source app’s settings.
- On older Play services builds, update Google Play system / Play services and reboot.
- Remember only four consumer apps are confirmed at launch. LastPass, Proton Pass, and others need their own CXF integration before they appear in the picker.
- If the exporter returns no items, Chrome Help says the import can fail when data is missing or malformed. Open the source app, sync the vault, and try again.

Developers adding support should start from Android’s [Credential transfer](https://developer.android.com/identity/sign-in/credential-transfer) guide (`androidx.credentials:providerevents`) rather than inventing another CSV pipeline. That guide was last updated 16 September 2026 and lists passwords, passkeys, addresses, and custom fields over CXF.

## Privacy notes worth reading once

Google’s consumer blog frames the feature as control: you choose the manager, and you authorize each move. Chrome Help still asks you to **trust the third-party app** before you import into it or export to it. That warning is the real security boundary. Android can hide the file from Downloads; it cannot audit a password manager’s cloud policy for you.

Shared device? Finish the transfer, lock the screen, and do not leave either vault unlocked in recents.

## Conclusion

Android’s credential transfer closes the worst part of changing password managers: the plaintext export and the passkey dead end. Install both apps on Android 8 or later, start import in the **new** manager, pick the source Android detects, approve the export, then verify a handful of real logins before you uninstall anything.

Supported today: Google Password Manager, 1Password, Bitwarden, and Dashlane. Everyone else needs the Credentials Transfer API. Until they ship it, keep CSV as a last resort and delete the file the moment the import finishes.

Official walkthroughs live in the [Android blog post](https://blog.google/products-and-platforms/platforms/android/switch-password-managers/) and [Chrome Help for credential exchange on Android](https://support.google.com/chrome/answer/13068232).

## Sources

- [Switching password managers is easy and safe on Android](https://blog.google/products-and-platforms/platforms/android/switch-password-managers/) — Google
- [Import or export passwords and passkeys with Google Password Manager](https://support.google.com/chrome/answer/13068232) — Chrome Help
- [Credential transfer](https://developer.android.com/identity/sign-in/credential-transfer) — Android Developers
- [About Credential Manager](https://developer.android.com/identity/credential-manager) — Android Developers
- [FIDO Credential Exchange Format](https://fidoalliance.org/specs/cx/cxf-v1.0-ps-20250814.html) — FIDO Alliance
- [Passkeys: a simpler and safer way to sign in (YouTube)](https://www.youtube.com/watch?v=SWocv4h7lng)
- [How passkeys work (YouTube)](https://www.youtube.com/watch?v=q5nV9spPGpk)
