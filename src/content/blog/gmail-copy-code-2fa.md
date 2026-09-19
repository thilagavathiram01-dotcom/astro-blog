---
title: "How to Use Gmail’s Copy Code Shortcut for 2FA on Android and iOS"
description: "Gmail on Android 2026.09.07 and iOS 6.0.260907 can show a Copy code button under 2FA emails. Learn how to update the app, use the shortcut, and keep codes off your clipboard longer than you need."
pubDate: 2026-09-19T20:30:00
tags: ["gmail", "android", "tutorials"]
heroImage: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=1200&h=630&q=80"
---

Most two-factor codes that arrive by email still force the same dance: open Gmail, open the message, pinch-select six digits, copy, switch apps, paste. In mid-September 2026 Gmail started showing a **Copy code** chip directly in the inbox list on phones, so you can grab the number without opening the thread.

The shortcut is a small quality-of-life change, not a new security product. It does not replace an authenticator app, a passkey, or Google Prompt. It only speeds up the codes that already land in mail — stores, banks, and other services that still email a one-time password.

This guide is based on hands-on reporting of the mobile Gmail builds and on Google’s published 2-Step Verification and Gmail help pages. Google had not posted a standalone product blog for the button at the time of writing, so treat availability as a server-side rollout on those app versions.

![Person checking email on a smartphone at a desk](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80)

## What Copy code actually is

[9to5Google](https://9to5google.com/2026/09/19/gmail-copy-code/) documented the control on **19 September 2026**. In the inbox, under the subject line of a qualifying message, Gmail draws a pill similar to the chips it already uses for image and document previews. The label looks like **Copy code 000000**, with the digits filled in from the email.

Tap the pill and Gmail puts that value on the system clipboard. You then paste it into the sign-in or checkout screen that requested the code.

What reporters have confirmed so far:

- It appears in **Gmail for Android 2026.09.07.x** and **Gmail for iOS 6.0.260907**
- It does **not** appear in Gmail on the web
- It has been seen on store and banking messages, not only Google’s own mail
- It is an inbox-row shortcut. It is not the same as Android’s SMS autofill for text-message codes

If you still have to open the message and highlight text, you are either on an older build, the message format does not look like a one-time code to Gmail, or the feature has not reached your account yet.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/c-_XZL19m08" title="Safer with Google Presents: 2-Step Verification" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Update Gmail before you hunt for the chip

1. On Android, open Play Store → Gmail → **Update**. Confirm the version is **2026.09.07** or later under Settings → About Gmail.
2. On iPhone or iPad, open App Store → your profile → Gmail → **Update**. Look for **6.0.260907** or newer in Settings → About.
3. Force-quit Gmail and reopen it so the inbox list reloads from the server.
4. Pull to refresh the Primary tab. Promotions and spam are weaker places to test; codes usually arrive in Primary or Updates.

Workspace accounts follow admin policy. If your organization freezes the Gmail app version, you will not see a consumer rollout until that pin moves.

## How to use the shortcut during a real login

Keep both apps in the recent-apps switcher so you are not hunting through folders.

1. Start the sign-in on the site or app that asked for email verification.
2. When it says a code was sent, switch to Gmail. Do not wait for a notification if the list already shows the new message.
3. Find the row. Under the subject you should see **Copy code** plus the digits.
4. Tap the chip once. You should get the usual system “copied” confirmation.
5. Switch back and paste into the code field. Submit before the code expires — many issuers use 5 or 10 minutes.
6. Clear the clipboard when you are done (see below).

If the chip shows digits that do not match the email body, open the message and copy from the body. Trust the message, not the chip, when they disagree.

![Close-up of a phone lock screen representing account security](https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80)

## When the button does not appear

Work through this list before assuming a bug.

- **Wrong client.** Desktop Gmail and the basic HTML view do not have the chip.
- **Old app.** Anything older than the September 2026 mobile builds listed above is a miss.
- **Odd formatting.** Some senders put the code in an image, split it with spaces in a way Gmail does not parse, or bury it in a long marketing template.
- **Wrong tab.** Check Updates and the search query `newer_than:1d (code OR verification OR OTP)`.
- **Delayed mail.** The login page can outrun delivery. Wait for the message instead of requesting a second code immediately.

Gmail’s existing [verification-code help](https://support.google.com/mail/answer/41078) still applies for Google’s own 2-Step Verification codes. Copy code is only a faster way to lift a number that already arrived.

## Treat the clipboard as sensitive

A copied 2FA code is a short-lived secret. Any app with clipboard access on an older Android build, or a password field that auto-pastes, can see it until something else overwrites the clipboard.

Practical habits:

- Paste once, then copy a single harmless character or use the system clipboard history clear if your phone offers it.
- Do not paste the code into a chat “to save it.”
- If a site emails a code *and* offers an authenticator app or passkey, prefer the app or passkey next time. Email is the weakest common second factor because the inbox is already a target.
- Turn on [2-Step Verification](https://support.google.com/accounts/answer/185839) on the Google Account itself with Google Prompt, a security key, or a passkey — not only emailed codes.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/KrtM55JioWs" title="Make your Gmail account more secure with account recovery and 2-step authentication — Google" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## How this fits next to Gmail Live and AI Overviews

Copy code is a list-row control. It is separate from the Gemini features Google rolled out around the same month:

- **Gmail Live** lets paid Google AI Plus, Pro, and Ultra users talk to the inbox in English on Android and iOS.
- **AI Overviews in Gmail search** answers natural-language questions about mail for eligible consumer and Workspace plans, with a global English expansion announced on 15 September 2026.

You do not need those plans for Copy code. You need a current mobile Gmail build and a message Gmail can parse.

Do not ask Gmail Live to “read me the code and remember it.” Read the chip or the message, paste, and move on.

## A 5-minute setup checklist

1. Update Gmail on the phone you actually use for sign-ins.
2. Send yourself a test from a service that emails numeric codes, or wait for the next real checkout.
3. Confirm the pill appears without opening the thread.
4. Paste once and clear the clipboard.
5. In Google Account → Security, add a non-email second factor so a stolen inbox is not enough to take the account.

## Conclusion

Copy code is worth turning on for the same reason SMS autofill was worth turning on: it removes a fiddly step you do under time pressure. Update the September 2026 Gmail builds, use the chip when it appears, and keep treating emailed one-time passwords as a last-resort factor.

The feature will feel invisible when it works. That is the point. The useful follow-up is still the older advice: passkeys or an authenticator for accounts that matter, and a recovery phone and email you control.

## Sources

- [Gmail adds ‘Copy code’ shortcut for 2FA on Android & iOS](https://9to5google.com/2026/09/19/gmail-copy-code/) — 9to5Google, 19 September 2026
- [Turn on 2-Step Verification](https://support.google.com/accounts/answer/185839) — Google Account Help
- [Verification codes and Gmail](https://support.google.com/mail/answer/41078) — Gmail Help
- [Gmail Search’s AI Overviews now available globally](https://workspaceupdates.googleblog.com/2026/09/gmail-searchs-ai-overviews-now-available-globally.html) — Google Workspace Updates, 15 September 2026
- [Google now lets you chat with Gmail, Docs, and Keep](https://www.theverge.com/tech/989508/google-gmail-docs-keep-live-voice-modes-gemini) — The Verge, 3 September 2026
- [Safer with Google Presents: 2-Step Verification](https://www.youtube.com/watch?v=c-_XZL19m08) — Google
