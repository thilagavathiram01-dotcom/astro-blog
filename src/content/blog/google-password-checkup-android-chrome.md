---
title: "How to Run Password Checkup in Google Password Manager"
description: "Run Google Password Checkup on Android, Chrome, and the web to find compromised, reused, and weak saved passwords, then fix them."
pubDate: 2026-10-09T16:00:00
heroImage: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["security", "android", "google", "how-to", "tutorials"]
noindex: false
---

A reused password on one shopping site can unlock a mail account, a bank login, and a work tool after a single breach. Google Password Checkup is built into Google Password Manager so you can scan saved passwords without installing another app.

Google Account Help says the checkup looks for passwords that may have been exposed, are weak, or are used on more than one site. You can start it on Android, in Chrome, or on the web at [passwords.google.com](https://passwords.google.com). This guide walks through each path, what the three result groups mean, and how to replace the risky ones.

![Padlock resting on a laptop keyboard](https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80)

## What Password Checkup actually checks

Password Checkup reviews passwords already saved in your Google Account. It does not scan every password on your phone if those logins live only in Samsung Pass, a third-party manager, or a notes app.

After the scan, Google groups findings into three buckets:

- **Compromised.** Google says the password may have appeared in a third-party data breach.
- **Reused.** The same password is saved for more than one site or app.
- **Weak.** The password is easy to guess, often because it is short or common.

Google also notes that it may ask you to change your Google Account password if that password looks unsafe, even if you never open Password Checkup. The checkup is for the saved logins in Password Manager. Your Google Account sign-in is a separate control.

## Before you start

Sign in to the Google Account that stores the passwords you care about. Checkup only covers the account you are using. If you keep work and personal logins in different accounts, run the scan twice.

On Android, Google should be the autofill service if you want Checkup from system settings. On a phone that defaults to another manager, open Settings, search for Autofill service, and select Google. Then open the settings gear next to Google and confirm Autofill with Google is on.

In Chrome, saved passwords stay in sync with the account when Chrome sync is on, or when you allow Chrome to use passwords from your Google Account. Without that link, a password you typed on one device may not appear in the checkup on another.

## Run Password Checkup on Android

Google's help page lists this path:

1. Open Settings.
2. Search for Password Manager.
3. Tap Password Manager, then Password Checkup.

On many phones the same screen sits under Settings, then Google, then Autofill, then Autofill with Google, then Google Password Manager. If search does not find Password Manager, use that route and set Google as the autofill provider first.

Wait for the scan to finish. Tap a category to expand the list. For a site you still use, choose Change password. Android opens the site so you can set a new password. When Chrome or the system prompt asks to save the new one, accept it so Password Manager replaces the old entry.

If the account is dead, delete the saved password instead of inventing a new one you will never use. Fewer stale logins means a smaller list the next time a breach alert arrives.

## Run Password Checkup in Chrome

On desktop Chrome:

1. Select your profile picture at the top right.
2. Open Passwords. If that icon is missing, open the three-dot menu, then Passwords and autofill, then Google Password Manager.
3. On the left, select Checkup.

Sign in if Chrome asks. Review compromised passwords first. Those are the ones Google has matched to known exposure. Reused passwords are next, because one leak can hit every site that shares the string. Weak passwords can wait until the other two lists are clear, unless the weak password protects mail or banking.

Chrome can offer to update a password on the site. Save the new password when the prompt appears so the manager does not keep the old value.

## Run Password Checkup on the web

The same tool lives at passwords.google.com, which is useful when you are on a shared computer or a phone browser that is not signed into Chrome.

1. Open [passwords.google.com](https://passwords.google.com).
2. Sign in.
3. Select Go to Password Checkup, then Check passwords.

Google may ask you to confirm it is you before showing results. That step is expected. The page lists the same three categories as Android and Chrome.

Google's own walkthrough of this flow is short and still matches the product labels:

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/hMRL2qZ5eek"
    title="Check the security of all your saved passwords: Take a Password Checkup"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Fix each result without creating a new mess

Change compromised passwords on the real site, not only inside Password Manager. Editing the stored string without changing it on the site leaves you locked out, and the exposed password still works for an attacker.

For reused passwords, pick the highest-value account first: email, banking, cloud storage, and your Google Account. Generate a unique password in Password Manager and save it. Then move down the list. Do not rotate ten sites to the same new password.

Weak passwords should be long and unique. Google recommends a different password for every site, and a password manager so you do not have to memorize them. If a site offers a passkey, add one after the password change. Passkeys skip the shared secret that shows up in breach lists. If you are moving saved logins between managers, the steps in [transfer passwords with Android's password manager](/blog/android-passkey-password-manager-transfer/) cover the handoff without pasting secrets into a chat.

![Person working on a laptop in a dim room](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Turn on on-device encryption if you want it

Google Password Manager can store passwords with on-device encryption so Google cannot read them. The passwords.google.com security page describes this as an extra layer that only you can unlock. Setup uses your screen lock or a recovery method you choose. If you lose every recovery option, Google cannot restore those passwords for you. Read the recovery warning on the setup screen before you confirm.

Encryption does not replace Checkup. It protects the vault. Checkup still tells you which entries inside that vault are compromised, reused, or weak.

## Tips that keep the next scan shorter

- Run Checkup after any news of a breach at a site you use, and again every few months if you add logins often.
- Keep one Google Account as the source of truth. Mixing Samsung Pass and Google Autofill splits the list, and Checkup only sees the Google side.
- Delete saved passwords for shops and apps you no longer use.
- Prefer a passkey on sites that offer one, and keep the password as a backup only if the site requires it.
- Do not paste checkup results, or the passwords themselves, into email or a chatbot. The list is enough for you. It is also a map for anyone who receives it.

## Conclusion

Password Checkup is a scan of passwords already saved to your Google Account, available from Android Settings, Chrome's Password Manager, and passwords.google.com. Start with compromised entries, then reused, then weak. Change each password on the site, save the new one, and drop logins you no longer need. Pair that habit with a passkey where the site allows it, and the next checkup has less to flag.

## Sources

- Google Account Help, "Change unsafe passwords in your Google Account" (Password Checkup on Android, Chrome, and the web): https://support.google.com/accounts/answer/9457609
- Google Password Manager: https://passwords.google.com
- Google, "Check the security of all your saved passwords: Take a Password Checkup" (YouTube): https://www.youtube.com/watch?v=hMRL2qZ5eek
