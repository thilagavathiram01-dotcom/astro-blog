---
title: "How to Transfer Google Authenticator Codes to a New Phone"
description: "Move Google Authenticator 2FA codes to a new Android or iPhone. Use account sync when you are signed in, or export and scan QR codes when you use the app offline."
pubDate: 2026-09-20T12:00:00
tags: ["android", "tutorials", "how-to"]
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&h=630&q=80"
---

Changing phones is the moment two-factor authentication usually bites. A new Pixel or iPhone will not invent your old time-based codes. If Google Authenticator lived only on the old handset and that handset is already wiped, you are looking at backup codes or account recovery on every site.

Google’s own help page splits the job in two. If you **sign in to a Google Account inside Authenticator**, codes sync to the new device when you sign in there. If you **use Authenticator without an account**, you export a QR code on the old phone and import it on the new one. Both paths are official. Neither requires a third-party “secret exporter.”

This guide follows [Google Account Help for Authenticator](https://support.google.com/accounts/answer/1066447) and stays on the in-app transfer tools. It also covers what to do after the scan so you do not lock yourself out of a bank or work login.

## Pick the right path before you factory-reset anything

Do this while the old phone still unlocks.

- **Signed into a Google Account in Authenticator:** install the app on the new phone, sign in with the **same** account, and wait for the list to appear. Google states that signing in on a new device syncs codes automatically.
- **No Google Account in the app:** keep the old phone. You will export QR codes from it and scan them on the new phone.
- **Old phone already gone:** stop. You cannot reconstruct TOTP secrets from screenshots of six-digit codes. Use each site’s backup codes or official 2-Step recovery instead.

Update Authenticator from Play Store or the App Store on **both** devices before you start. Google’s transfer steps assume the latest app on the device that still holds the codes.

![Person holding a smartphone with a second phone nearby on a desk](https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=1200&h=630&q=80)

## Path A — Sync with a Google Account

Use this when the old phone already shows your profile photo or initial in Authenticator.

1. On the **new** phone, install [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2) (Android) or the App Store listing from Google LLC (iOS).
2. Open the app and tap **Get Started**.
3. Sign in with the same Google Account you used on the old phone.
4. Wait for the account list to populate. Do not delete entries on the old phone until you have generated a matching code on the new one for a few high-value sites.

Google Help notes a separate control: you can run Authenticator **without** an account. That choice stores codes only on the device. If you later tap a control that removes codes from Google Accounts and keeps them local, those codes will **not** appear on other devices. Read the confirmation screen before you confirm that mode.

You can attach more than one Google Account. On the home screen, tap your profile picture or initial, then **Add another account**, and finish setup for that account the same way you did the first.

## Path B — Manual QR transfer (no account, or extra safety copy)

Google’s manual path needs three things: the old device with the codes, the latest Authenticator on that old device, and the new device.

### On the new phone

1. Install Google Authenticator.
2. Open it and tap **Get Started**.
3. Sign in if you want sync for future codes. You can still import a QR export either way.

### On the old phone

1. Open Authenticator.
2. Tap **Menu** (three lines or the overflow control).
3. Tap **Transfer accounts**, then **Export accounts**. Android builds may label this **Transfer codes** / **Export codes**.
4. Unlock the phone with PIN, pattern, fingerprint, or face when asked.
5. Select the accounts to move. Tap **Next** (Android) or **Export** (typical iOS wording).
6. Leave the QR code on screen. If you selected many accounts, Google says the old device **may show more than one QR code**. Scan every page.

Do not screenshot the QR and upload it to Drive, chat, or social media. That image is a portable copy of the underlying secrets.

### On the new phone

1. Tap **Menu** → **Transfer accounts** → **Import accounts**.
2. Tap **Scan QR code**.
3. Point the camera at the old phone. Repeat if the old phone advances to another QR.
4. Wait for the confirmation that codes transferred.

If the new phone camera cannot focus, raise brightness on the old screen and hold both phones still. You do not email the QR; the scan is device-to-device.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/c-_XZL19m08" title="Safer with Google Presents: 2-Step Verification" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## After the transfer: prove it, then clean up

A finished import is a **copy**. The old phone still generates codes until you remove accounts there.

1. Open Authenticator on the **new** phone and confirm the same issuer names and usernames you had before.
2. Sign in to two or three real sites (email, bank, work SSO). Use the new phone’s code, not the old one.
3. If a site rejects the code, check that both phones show the same digits at the same second. A wrong time zone or a stalled clock on a cheap device will desync TOTP. Set date and time to automatic.
4. Keep the old app installed for a few days. Only then delete individual accounts from the old phone, or factory-reset that device.
5. Store each site’s **backup codes** in a password manager. Authenticator is not a backup by itself.

If one site never appears after import, that account was not selected on the export screen. Export again for the missing row. Do not disable 2-Step on the website unless you have another factor ready.

![Close-up of a laptop login form next to a phone](https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&h=630&q=80)

## If the old phone is dead

You cannot scan what you cannot unlock. Work site by site:

- Use printed or password-manager **backup codes** created when you turned on 2-Step.
- For a Google Account, use [2-Step Verification recovery](https://support.google.com/accounts/answer/185839) with a passkey, security key, prompt on another signed-in device, or the recovery email and phone you already control.
- For other issuers, use that company’s documented lost-device flow. Many banks require a call or an identity check.
- After you are back in, add Authenticator on the new phone from the site’s “change authenticator” page. That issues a **new** secret. The old secret on the broken phone becomes useless.

Skip unofficial “migration QR decoder” websites. Those tools exist to parse `otpauth-migration` payloads. They also turn a transfer QR into a file of secrets. Google’s supported path is account sync or in-app scan.

## How this fits next to emailed codes and passkeys

Authenticator still matters because many banks and admin panels never shipped passkeys. Emailed one-time codes (including Gmail’s new inbox **Copy code** chip on recent mobile builds) are weaker: anyone who can read the inbox can read the factor. A TOTP secret on a phone you unlock is better. A passkey or hardware key is better still when the site offers it.

On Android you can also move **passwords and passkeys** between managers with the system credential transfer Google launched in September 2026. That flow does not move Authenticator TOTP seeds. Treat password-manager transfer and Authenticator transfer as two separate checklists.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/KrtM55JioWs" title="Make your Gmail account more secure with account recovery and 2-step authentication" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Troubleshooting

- **Empty list after sign-in.** Confirm it is the same Google Account. Check that the old app was actually signed in, not local-only.
- **Import confirmation never appears.** Update both apps, grant camera permission, and scan every QR page.
- **Codes work on the old phone only.** The new phone’s clock is wrong, or you imported a different subset of accounts.
- **Work profile / MDM.** A managed play store may pin an old Authenticator build. Ask IT before you wipe the personal copy.
- **Multiple Google Accounts.** Add each account from the profile menu after the first sign-in. Sync is per account.

## Conclusion

Move Authenticator **before** you erase the old phone. Sign in on the new device if the old app already used a Google Account. Otherwise export QR codes from Menu → Transfer accounts and scan them on the new phone, including every extra page for large vaults. Prove a few live logins, keep backup codes in a password manager, and only then wipe the old handset.

Official steps live in [Get verification codes with Google Authenticator](https://support.google.com/accounts/answer/1066447). Pair that with [Turn on 2-Step Verification](https://support.google.com/accounts/answer/185839) so a lost phone is an inconvenience, not an account funeral.

## Sources

- [Get verification codes with Google Authenticator](https://support.google.com/accounts/answer/1066447) — Google Account Help
- [Turn on 2-Step Verification](https://support.google.com/accounts/answer/185839) — Google Account Help
- [Google Authenticator on Google Play](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)
- [Safer with Google Presents: 2-Step Verification (YouTube)](https://www.youtube.com/watch?v=c-_XZL19m08)
- [Make your Google account more secure (YouTube)](https://www.youtube.com/watch?v=KrtM55JioWs)
