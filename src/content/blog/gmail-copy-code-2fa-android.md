---
title: "Gmail Copy Code Shortcut for 2FA OTPs on Android"
description: "Use Gmail’s new Copy code button on Android to grab email 2FA OTPs from the inbox without opening the message."
pubDate: 2026-09-20T14:00:00
heroImage: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "security", "tutorials", "google"]
noindex: false
---

One-time passcodes that arrive in email used to cost extra taps. You opened Gmail, opened the message, hunted for six digits buried in a template, then copied them by hand. Gmail for Android now shortens that path with a **Copy code** shortcut in the inbox list.

The control showed up in mid-September 2026 builds of the Gmail app on Android and iOS. It is not on Gmail on the web yet. This guide explains what the button does, which app versions report it, how to use it safely, and how it differs from SMS OTP shortcuts in Google Messages.



![Person unlocking a phone with a security lock overlay nearby](https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80)



## What the Copy code button does

When Gmail detects a one-time passcode in a new message, it can show a pill-shaped **Copy code** button under the subject in the inbox list. The button includes the digits Gmail extracted, similar to how the inbox already previews images or attachments.

Tap it. Gmail copies the code to the clipboard. Switch to the app or site that asked for the code and paste. You do not have to open the email first.

If you do open the message, Gmail can also pin the detected code near the top of the thread with the same copy control. That helps when the sender wrapped the OTP in a long marketing footer or a block of legal text.

Reporting from 9to5Google and Android Police in September 2026 matches that behavior on store and banking mail during early tests. Detection still depends on how the sender formats the code. A number mixed into a sentence or split across images may not surface the button.

## Check that you have the right Gmail build

The shortcut is an app feature, not a Gmail web setting.

1. Open the Play Store and search for **Gmail**.
2. Confirm the installed version is **2026.09.07** or later (9to5Google cited `2026.09.07.x` on Android).
3. Update if Play Store offers a newer build.
4. Force-stop Gmail once after the update, then reopen it so the inbox renderer reloads.

On iOS the matching build reported by 9to5Google is **6.0.260907**. The rest of this article focuses on Android, where clipboard paste and Gboard suggestions already work together.

If the button never appears after an update, wait for a new OTP from a sender that uses a clear numeric code. Older promotional templates and codes hidden in screenshots will not trigger detection.

## Copy an email OTP from the inbox

Use this path when a site just emailed a code and the Gmail tab is already open.

1. Open the **Gmail** app.
2. Stay on the primary inbox list. Do not open the thread yet.
3. Find the new mail. Look under the subject for a pill that reads **Copy code** plus the digits.
4. Tap the pill. Android copies the value.
5. Switch to the login screen and paste, or long-press the code field if the site supports paste from clipboard.

Android Police noted that some accounts see the control inside the opened message before it appears on the home list. If the list is empty of shortcuts, open the mail once. The in-thread copy button is the fallback.

Do not forward the message to another account just to grab the digits. Forwarding an active OTP is a common phishing pattern and can leak the code to a third mailbox.



![Smartphone next to a laptop used for signing into an account](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)



## How this differs from SMS copy code

Google Messages has shown a **Copy code** action on SMS and RCS one-time passwords for years. That shortcut often appears in the notification shade and in Gboard’s suggestion strip when the password field is focused.

Email OTPs did not get the same treatment until this Gmail update. Gboard still cannot reliably suggest a code that only exists inside an email body. The new inbox button closes that gap for mail-based 2FA.

Keep both paths in mind:

- **SMS / RCS:** copy from the Messages notification or the Gboard strip.
- **Email:** copy from Gmail’s inbox pill or the in-thread header.
- **Authenticator apps:** tap the code in Google Authenticator (tap-to-copy since version 7.0). Those codes never pass through Gmail.

Google Account 2-Step Verification still prefers passkeys or Google prompts over emailed codes when the account supports them. Use Copy code for third-party sites that only send email OTPs.

## Pair it with Gemini in Gmail, not instead of it

Copy code is a clipboard helper. It does not summarize mail or draft replies. For those jobs, use the Gemini side panel documented in our [Gemini in Gmail guide](/blog/gemini-in-gmail/).

Do not paste a live OTP into Ask Gemini or Help me write. A one-time code is a secret for the current login, not a source for a summary. Treat it the same way you treat a password: copy, paste, done.

If you need to find *which* sender mailed a code last week, search Gmail with `newer_than:1d subject:(code OR verification OR OTP)` instead of asking a model to recite digits from memory.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/mmMex_A8yDw"
    title="Gemini in Gmail | Google Workspace"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Security habits that still matter

A faster copy button does not change the rules for 2FA mail.

**Confirm you requested the code.** If Gmail shows Copy code on a message you did not trigger, do not tap it and do not paste it anywhere. Mark the mail as phishing if the sender domain is wrong.

**Watch the sender address.** Banks and stores often mail OTPs from a fixed subdomain. Hover is not available in the Android list view, so open the message once for any sender you have not saved.

**Paste only into the site that asked.** Clipboard managers and nearby-share sheets can keep the last copied string. Paste the OTP, then copy something else (a draft sentence works) so the digits do not sit on the clipboard.

**Prefer stronger second factors where Google offers them.** Google Account Help still recommends passkeys or Google prompts over SMS or emailed codes because phone-number and inbox attacks remain common.

**Turn on Play Protect and keep Gmail updated.** The shortcut ships in the app binary. Skipping Play Store updates is how you miss both the button and later security fixes.

## If the button is missing

Work through this list before you assume the feature is off for your account.

1. Update Gmail past 2026.09.07 and reopen the app.
2. Trigger a fresh OTP from a service that prints the code as plain digits, not an image.
3. Check Spam and Promotions. Detection runs on the message Gmail indexed; filtered mail may not render the inbox pill until you open that category.
4. Open the thread. Android Police saw in-message buttons appear before list buttons on some accounts.
5. Confirm you are in the official Gmail app, not a third-party IMAP client or Gmail on the web.

Workspace admins do not have a documented toggle for this control as of the September 2026 reports. If a work account never shows the pill, the mail format or a side-loaded older APK is the more likely cause.

## A two-minute practice run

Use a low-stakes login you control, such as a shopping account with email 2FA enabled.

1. Start a sign-in on the merchant site until it says a code is on the way.
2. Open Gmail and wait for the new row.
3. Tap **Copy code** without opening the mail.
4. Return to the site and paste.
5. Sign in, then copy unrelated text so the clipboard is clean.

Repeat once with the thread open so you know where the in-message control sits. That is the whole feature: fewer taps, same code, same duty to check the sender.

## Conclusion

Gmail’s Copy code shortcut puts email OTPs next to the subject line the way Messages already treats SMS codes. Update to a mid-September 2026 Gmail build, tap the pill, paste, and clear the clipboard.

Keep Gemini for summaries and drafts. Keep Authenticator or a passkey for accounts that support them. Use this button only for mail you expected, from a sender you recognize.

## Sources

- [Gmail adds ‘Copy code’ shortcut for 2FA on Android & iOS — 9to5Google, 19 September 2026](https://9to5google.com/2026/09/19/gmail-copy-code/)
- [Gmail for Android now finds your verification codes — Android Police, 21 September 2026](https://www.androidpolice.com/gmail-for-android-finds-verification-codes-so-you-dont-have-to/)
- [Turn on 2-Step Verification — Google Account Help](https://support.google.com/accounts/answer/185839)
- [Get verification codes with Google Authenticator — Google Account Help](https://support.google.com/accounts/answer/1066447)
- [Gemini in Gmail — Google Workspace (YouTube)](https://www.youtube.com/watch?v=mmMex_A8yDw)
