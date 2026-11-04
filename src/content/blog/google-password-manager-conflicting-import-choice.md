---
title: "How to Choose Credentials in Google Password Manager Imports"
description: "Resolve conflicting passwords and passkeys during Google Password Manager imports with the new manual choice feature from Play services v26.43."
pubDate: 2026-11-04T14:00:00
heroImage: "https://images.unsplash.com/photo-1483070421852-a142ce0a385d?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "how-to", "security", "google", "tutorials"]
noindex: false
---

Switching password managers used to force a messy CSV export. Google’s November 2026 System Services update changes that for imports that hit conflicts. Google Password Manager now lets you manually choose which credentials to keep when imported passwords or passkeys clash with ones already stored.

This feature rolls out with Google Play services v26.43. It builds on the earlier Credential Exchange transfer flow that moves passwords and passkeys directly between supported managers without a file. The new control appears only when the import detects a conflict for the same site or app.

You need an Android device running Android 8 or later with the latest Play services. Update Google Password Manager from the Play Store if the option does not appear. The same choice also applies when you import from a CSV on supported surfaces.

![Person unlocking a smartphone with a keypad](https://images.unsplash.com/photo-1483070421852-a142ce0a385d?auto=format&fit=crop&w=800&q=80)

## Why conflicts happen and why manual choice matters

A conflict occurs when the incoming credential matches an existing one for the same username and site (or app). Previously the system might overwrite, skip, or create a duplicate. The new option lets you decide case by case.

This is useful after a device switch, a family account merge, or when you keep both Google Password Manager and a third-party manager for a while. You keep the stronger or more recent password and discard the weaker one. Passkeys follow the same rule: you pick which private key to retain.

The feature is listed under Security & Privacy in the official November 2026 notes for Play services v26.43. It does not require a full OS update.

## Prepare before you import

Update Google Play services. Open Settings → Google → All services → System services (or check for updates in the Play Store under Google Play services). Confirm version 26.43 or higher.

Open Google Password Manager. On Android go to Settings → Google → Autofill and passwords → Google Password Manager, or open the Password Manager shortcut from the Play Store. Sign in with the Google account that should receive the credentials.

Have your screen lock ready. Imports into Google Password Manager require verification with PIN, pattern, password, fingerprint, or face unlock.

If you are importing from another manager (1Password, Bitwarden, Dashlane), install the latest version of both apps on the same device. The system-level transfer starts in the destination app.

## Step-by-step: import and resolve conflicts

1. Start the import. In Google Password Manager open Settings and choose Import passwords and passkeys (or the equivalent CSV option if you already have a file).

2. Authenticate with your screen lock when prompted.

3. Select the source. For the app-to-app flow, pick the installed password manager. For a CSV, select the file. Android coordinates the transfer securely.

4. Review the incoming list. The system shows counts of passwords and passkeys. Expand sections if available to inspect individual items.

5. When a conflict appears, the new choice screen lists the existing credential and the incoming one. Tap the one you want to keep. You can keep the existing entry, replace it with the import, or skip that item.

6. Confirm each selection or use bulk options if shown. Finish the import. A summary appears when complete.

7. Open Password Checkup afterward to flag any weak or reused passwords you just retained.

The process takes a few seconds for the transfer itself. Conflict resolution is the only manual step.

![Smartphone showing security and password icons](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## Tips for clean results

- Prefer the direct app-to-app transfer over CSV whenever both managers support it. It avoids plaintext files.
- Test a small set first if you have hundreds of credentials. Confirm a few logins work before deleting anything from the old manager.
- Keep the source manager installed until you verify the new vault. Delete the old data only after successful sign-ins.
- Use Password Checkup in Google Password Manager to review the final set.
- If a passkey conflict appears, keep the one tied to the device or account you use most. Recreate any discarded passkey on the site if needed.

For the full transfer flow without conflicts, see our guide on [moving passwords and passkeys between Android managers](/blog/android-passkey-password-manager-transfer/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/ZSLTSr5WXsE"
    title="How to Import Passwords into Google Password Manager [2026 Full Guide]"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What the official notes confirm

Google’s System Services Release Notes for November 2026 list the change under Security & Privacy for Play services v26.43: “Google Password Manager now allows you to manually choose which credentials to keep when importing conflicting passwords and passkeys.”

The same release adds Android Family Hub in Settings and automatic Quick Share photo backup to Windows. The credential choice is the only Password Manager item in this batch.

Rollout is gradual. Some devices see the option after a Play services update; others may wait for a server-side flag. Restart the device or force-stop Google Play services if the menu is missing after the update.

## Conclusion

The manual choice removes the last friction from credential imports. You no longer guess which password survives a conflict. Update Play services, start the import from Google Password Manager, and pick the credential you trust for each clash. Your vault stays under your control.

## Sources

- [Google System Services Release Notes](https://support.google.com/product-documentation/answer/14343500) — official November 2026 notes for Play services v26.43
- [Switching password managers is easy and safe on Android](https://blog.google/products-and-platforms/platforms/android/switch-password-managers/) — Google
- [Import or export passwords and passkeys with Google Password Manager](https://support.google.com/chrome/answer/13068232) — Chrome Help
