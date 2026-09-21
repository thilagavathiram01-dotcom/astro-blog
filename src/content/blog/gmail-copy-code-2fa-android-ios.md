---
title: "How to Copy 2FA Codes in Gmail on Android and iOS"
description: "Use Gmail Copy code on Android and iOS to grab 2FA verification codes from your inbox without opening the email."
pubDate: 2026-09-20T14:00:00
heroImage: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "security", "google", "how-to", "productivity"]
noindex: false
---

Two-factor authentication keeps accounts safer. The last step is still clumsy when the one-time code lands in email instead of SMS.

Gmail on Android and iOS now places a **Copy code** shortcut in the inbox. You tap once, paste the digits, and sign in. You do not need to open the message or hunt through branding and legal text.

This guide shows how the shortcut works, which app versions include it, and how to stay safe when codes arrive by email.

## What the Gmail Copy code button does

The control is a pill-shaped button under the subject line. It looks like Gmail’s attachment chips and document previews. The label reads something like **Copy code 000000**, with the detected digits in the chip.

Tap it and Gmail copies the code to the clipboard. Switch to the app or site that asked for verification and paste.

9to5Google first reported the shortcut on 19 September 2026. Android Authority and Android Police confirmed it on supported phones. Testers saw it on store and banking emails, not only Google’s own messages.

The same chip can appear at the top of an opened message. If the inbox chip is missing, open the email and look just below the subject.

## Check your Gmail version first

The shortcut is rolling out in:

- **Gmail for Android** version `2026.09.07.x` and later
- **Gmail for iOS** version `6.0.260907` and later

It is **not** on Gmail in the browser yet.

### Android

1. Open the Play Store.
2. Search for Gmail and tap the listing.
3. Update if a newer build is available.
4. Open Gmail, tap your profile photo, then **Help & feedback** or **About** to confirm the version string.

### iOS

1. Open the App Store.
2. Search for Gmail.
3. Update if offered.
4. Confirm the version on the App Store page or under Gmail settings.

If you are on an older build, wait for the staged rollout. Features often appear on some accounts before others, even on the same app version.



![Person reviewing email on a smartphone at a desk](https://images.unsplash.com/photo-1512940977326-4e031ed630ba?auto=format&fit=crop&w=800&q=80)



## How to copy a 2FA code from the inbox

1. Open the Gmail app on Android or iPhone.
2. Find the verification email. Look under the subject for a **Copy code** chip.
3. Tap the chip. Gmail copies the digits.
4. Switch to the login screen that requested the code.
5. Paste and submit before the code expires.

Most email codes last a few minutes. Copy them only when the site is already asking for the second step.

If you do not see the chip:

- Pull down to refresh the inbox.
- Open the message. Gmail may show the code and a copy button at the top of the body.
- Check that the sender formatted the code as a clear numeric block. Codes mixed with other numbers may not parse.

Android already offers copy actions on many **SMS** one-time passwords in notifications. Email codes lacked that path until this Gmail update.

## When the shortcut may not appear

Detection depends on how the sender writes the message. Expect gaps when:

- The code sits inside a long sentence or a screenshot.
- Extra numbers (order IDs, amounts, dates) sit next to the code.
- The email is a forwarded thread or a forwarded PDF.
- You are viewing Gmail on the web or in a third-party mail client.

Treat missing chips as a parsing limit, not a sign that the email is fake. Still apply the usual checks: sender address, unexpected login prompts, and whether you started the sign-in.

## Use Copy code without lowering your guard

Email 2FA is weaker than a passkey, a hardware security key, or an authenticator app. Google’s account help still recommends passkeys and Google prompts over SMS or email codes where those options exist.

Keep these habits:

- Never read a code to someone who calls or messages you. Google will not phone you to “confirm” a code.
- If you did not start a login, ignore the email and review recent security activity.
- Prefer [passkeys and the Android password manager transfer tools](/blog/android-passkey-password-manager-transfer/) when a site supports them.
- Use Gemini in Gmail for search and summaries, but do not paste live 2FA codes into chat threads. See our [Gemini in Gmail guide](/blog/gemini-in-gmail/) for inbox features that stay inside the mail app.

Clipboard contents can appear in keyboards and overlay apps. Paste the code, then clear the clipboard if your phone offers that control.



![Padlock on a laptop keyboard representing account security](https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80)



## Pair Gmail codes with stronger second steps

Copy code helps when a bank or store still sends email OTPs. For Google itself, turn on 2-Step Verification and pick a stronger method.

Official options, from Google Account Help:

- **Passkeys** — device lock, fingerprint, or face. Strong against phishing.
- **Google prompts** — Yes/No on a signed-in phone.
- **Authenticator app** — offline rotating codes.
- **Security keys** — physical keys for high-risk accounts.
- **SMS or voice codes** — available, but more exposed to number-based attacks.
- **Backup codes** — printed or saved offline for lockouts.

Set these at [myaccount.google.com/security](https://myaccount.google.com/security). Work or school accounts may follow admin policy instead.

The short official explainer below covers why a second step matters even if a password leaks.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/c-_XZL19m08"
    title="Safer with Google Presents: 2-Step Verification"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips that save time on mobile

- Keep Gmail signed in on the phone you use for logins so the inbox chip is one switch away.
- Split-screen on Android: Gmail on one side, the login page on the other.
- After you paste, stay on the site until the session finishes. Do not leave a live code sitting in a note.
- If a merchant always sends messy emails, ask support whether an authenticator app is available.
- Update Gmail from the official store only. Sideloaded APKs can fake a copy button.

Pixel owners who also use App Lock can keep Gmail behind biometrics so a borrowed phone cannot copy codes. That pairs well with the inbox shortcut without extra taps during a normal login.

## Troubleshooting checklist

**Chip missing after an update.** Sign out of Gmail, force-stop the app, open it again, and wait for the inbox to sync.

**Wrong digits copied.** Open the email and confirm the highlighted code matches the chip. Some messages include both a reference number and a shorter OTP.

**Paste does nothing.** The target field may block paste. Long-press and choose Paste, or type the digits from the chip label.

**Web Gmail has no button.** Use the Android or iOS app, or copy from the opened message on desktop the old way.

**Work profile.** If Gmail runs in an Android work profile, clipboard sharing to a personal app may be blocked. Paste inside the same profile.

## Conclusion

Gmail’s Copy code shortcut removes the worst part of email 2FA: opening a message, selecting six digits, and racing the timer. Update to Gmail 2026.09.07.x on Android or 6.0.260907 on iOS, watch for the pill under the subject, and paste.

Keep using passkeys and prompts for Google and any site that offers them. Treat email codes as a fallback, not the main lock on the door.

## Sources

- [Gmail adds ‘Copy code’ shortcut for 2FA on Android & iOS](https://9to5google.com/2026/09/19/gmail-copy-code/) — 9to5Google
- [Gmail just made copying 2FA codes much less annoying](https://www.androidauthority.com/gmail-copy-2fa-codes-inbox-3713263/) — Android Authority
- [Gmail for Android now finds your verification codes](https://www.androidpolice.com/gmail-for-android-finds-verification-codes-so-you-dont-have-to/) — Android Police
- [Turn on 2-Step Verification](https://support.google.com/accounts/answer/185839) — Google Account Help
- [Get verification codes with Google Authenticator](https://support.google.com/accounts/answer/1066447) — Google Account Help
