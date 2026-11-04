---
title: "Choose Credentials During Google Password Manager Import"
description: "Google Password Manager now lets you manually select which conflicting passwords and passkeys to keep during import on Android."
pubDate: 2026-11-04T14:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "security", "how-to", "google", "tutorials"]
noindex: false
---

Google Password Manager on Android just gained a practical control during imports. When you bring in passwords or passkeys that already exist in your account, the app now lets you decide which version to keep instead of automatically skipping or overwriting them.

This change arrived with Google Play Services v26.43, released in early November 2026. Official release notes list it under Security & Privacy: Google Password Manager now allows you to manually choose which credentials to keep when importing conflicting passwords and passkeys.<grok type="render_inline_citation" citation_id="749" />

The feature builds on earlier work that made secure transfers possible between password managers. Previously, the system avoided creating duplicates by skipping matching entries. Now you get a clear choice when the same site or account appears in both places with different details.

![Person unlocking a smartphone with a PIN](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## Why This Matters for Everyday Use

Conflicts appear more often than people expect. You might have an older password saved in Google Password Manager and a newer one stored in Bitwarden or 1Password. Or a passkey created on one device might differ slightly from one generated elsewhere.

Before this update, the import process simply left the existing credential alone. That kept things simple but forced you to check later and update entries by hand. The new manual selection step lets you review the difference and keep the stronger or more recent version in one action.

It also reduces the chance of locking yourself out of an account after a transfer. You can confirm the password or passkey that actually works before the import finishes.

## Prerequisites Before You Start

Make sure your phone meets these conditions:

- Android 8 or later (the transfer system has worked since Play Services updates earlier in 2026)
- Google Play Services updated to v26.43 or newer
- Screen lock enabled (PIN, pattern, password, fingerprint, or face unlock)
- The source password manager app installed and signed in if you are importing from a third-party service

Update Google Play Services through the Play Store if the option does not appear. Open Settings, tap Google, then All services, and check for updates under System services.

## Step-by-Step: Import and Resolve Conflicts

1. Open the Google Password Manager app or go to Settings > Passwords & autofill > Google Password Manager.
2. Tap Settings in the bottom right.
3. Select Import passwords and passkeys.
4. Authenticate with your screen lock when prompted.
5. Choose the source. You can select another password manager installed on the phone or upload a CSV file.
6. Review the list of items ready to import.
7. When the app detects a conflict, it shows both versions and asks which one to keep. Pick the entry you want to retain, then continue.
8. Confirm the transfer and wait for the process to finish.

The exact conflict screen appears only for matching sites or usernames where the password or passkey differs. Identical entries are still skipped automatically.

After the import completes, open Google Password Manager and search for a few important accounts. Sign in to those sites in Chrome or the relevant app to verify the saved credential works.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/ZSLTSr5WXsE"
    title="How to Import Passwords into Google Password Manager [2026 Full Guide]"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Handling CSV Imports Versus Direct Transfers

CSV imports still work and remain useful when the other password manager does not support the direct Credential Exchange flow. Export the CSV from the old manager on a trusted computer, then upload it through the Import passwords and passkeys option on your phone.

Google limits each CSV import to 3,000 passwords. A Google Account can store up to 10,000 total. Split larger exports into multiple files if needed.

Direct transfers from supported apps (currently Google Password Manager, 1Password, Bitwarden, and Dashlane) avoid creating an unencrypted file on your device. The new conflict choice works in both flows once the data reaches Google Password Manager.<grok type="render_inline_citation" citation_id="739" />

![Close-up of a padlock symbolizing security](https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80)

## Tips for Cleaner Results

- Review the source vault first and delete obvious duplicates or outdated entries before starting the import.
- Prefer passkeys over passwords where the site supports them. After import, create a passkey for important accounts if one is missing.
- Keep the original password manager installed until you have tested every critical login.
- Delete any temporary CSV files immediately after a successful import. Move them to a secure location or use the device’s secure delete option if available.
- Check Password Checkup in Google Password Manager after the transfer. It flags weak, reused, or compromised passwords so you can update them.

If you manage family accounts, the same Play Services update added an Android Family Hub in Settings. You can review shared family tools there while handling individual password imports. See our guide on [Android Family Hub settings](/blog/android-family-hub-settings-guide/) for the full setup steps.

## What Happens to Existing Credentials

Google Password Manager does not create a second copy of an identical password or passkey. When the details differ, the manual choice determines which version stays. The rejected version is not imported, so your account stays free of unnecessary duplicates.

Passkeys that fail to transfer cleanly (rare, usually due to device-specific binding) can be recreated on the destination site after the import. Most supported transfers complete in a few seconds once you authorize them.

## Conclusion

The ability to choose which credentials to keep removes a small but persistent friction from password manager switches. You no longer need a separate cleanup pass after every import. Update Play Services, start the import from Google Password Manager settings, and review any conflicts as they appear.

For broader migration steps between apps, the earlier direct transfer system remains the safest option when both managers support it. Combined with this new selection control, moving your logins on Android is now more precise and less error-prone.

## Sources

- Google System Services Release Notes (Play Services v26.43)
- Google blog: Securely switch password managers on Android
- Android Authority and Droid-Life coverage of the November 2026 Play Services update
