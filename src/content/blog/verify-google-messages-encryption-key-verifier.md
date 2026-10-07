---
title: "Check Google Messages Encryption With Key Verifier"
description: "Turn on RCS chats, confirm the lock icon, and verify Google Messages end-to-end encryption with Key Verifier or a shared code."
pubDate: 2026-10-07T11:00:00
heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "security", "how-to", "google"]
noindex: false
---

A lock on the send button is not a decoration. In Google Messages, it is the visible sign that an RCS chat is end-to-end encrypted. Encryption is automatic when both sides qualify, but confirming the keys is a separate step you control.

Google documents two checks. First, look for the RCS banner and the lock. Second, compare keys with Android System Key Verifier, or fall back to the numeric verification code if Key Verifier is not available. This guide follows those official steps.

## What end-to-end encryption covers

Google Messages supports end-to-end encryption for RCS chats with other Google Messages users. When the conversation is eligible, message text and attachments such as photos and videos are encrypted on the way between devices.

Google says the secret key is created on the two devices, is not shared with Google, is generated again for each message, and is deleted after the message is created on the sender and decrypted on the receiver. SMS and MMS are not covered. If the compose field falls back to a text or multimedia message, that send is not end-to-end encrypted.

RCS chats between Android and iPhone are available, but encryption still depends on an eligible Google Messages RCS conversation. Check the lock on the thread you care about instead of assuming every chat qualifies.

## What you need before you verify

Key Verifier is not supported on Android Go devices, tablets, or wearables. For the Android System Key Verifier app, Google requires both phones to meet these conditions:

- Android 10 or later
- A current Google Contacts app and Google Messages app
- The Android System Key Verifier app installed from Google Play (package `com.google.android.contactkeys`)
- RCS chats turned on in Google Messages

Update Google Messages from the Play Store. If the phone shipped with Carrier Services, update that app too. Encryption will not verify if RCS chats are off for any participant in the thread.

If a phone does not qualify for Key Verifier, Google still lets you compare the verification code inside the conversation. That older check remains valid.

![Person holding a smartphone beside a laptop](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## Turn on RCS chats

Open Google Messages and tap your profile picture. Open Messages settings, then RCS chats. Turn RCS chats on and wait until the status shows connected. On a dual-SIM phone, confirm the number listed matches the SIM you use for messaging.

Ask the other person to do the same. Encryption is a property of the conversation, not a switch you flip once for every contact. A friend who still uses SMS, or whose RCS setup is stuck on verifying, will not show a lock.

## Check that a chat is encrypted

Open the conversation. Google lists two signs of an end-to-end encrypted thread:

1. A banner that reads RCS chat with the contact name or phone number.
2. A lock on the send button while you compose a message.

Google also notes a lock next to the message timestamp once encryption is in use. Dark blue bubbles are the RCS style; light blue bubbles are SMS or MMS. If the send control offers an SMS fallback instead of a lock, the next message will not be end-to-end encrypted.

If the lock is missing, update both apps, confirm RCS is on for both people, and send a fresh message after the status connects. Google warns that switching messaging apps or operating systems can leave a short window where a conversation looks eligible but a message arrives unreadable. In that case, update the apps and ask the sender to resend.

## Verify keys from Google Messages

Key Verifier lets you confirm the public keys of a contact so you are talking to the device you expect over RCS.

For a one-to-one chat:

1. Open Google Messages.
2. Open the chat. You can open a contact without sending a message.
3. Tap the contact name at the top, or tap More, then Details, then Verify keys.
4. Follow the on-screen steps. Both people should scan each other's QR codes and finish every step. Google says you can scan a screenshot of the other person's QR code.

For a group:

1. Open the group in Google Messages.
2. Tap More, then Group details.
3. Select the participant you want to check.
4. Tap More, then Verify keys, and complete the prompts.

You can also start from Google Contacts. Open the contact, then under Contact settings tap Verify keys, and complete the same QR flow.

After a successful check, Contacts shows a Connected apps section for that person only when the key is verified. In Messages, verified contacts show a keys verified status. A lapsed check shows keys no longer verified.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/5U9_iuf1BBs"
    title="How To Enable End-To-End Encryption In Google Messages"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Compare the verification code instead

If Key Verifier is unavailable, use the numeric code. Each encrypted conversation has a unique code. It must match on both sides.

For an individual chat, open the thread, tap More, then Details, then Verify encryption. For a group, open Group details, pick a participant, then tap More and Verify encryption. Read the code on a voice call, or compare the screens in person. Google says this step is optional. Messages stay end-to-end encrypted even if you never compare codes. The comparison is how you detect a swapped key.

## When keys change

A contact can show keys no longer verified for ordinary reasons. Google lists a new device or SIM, expiry of the key's time-bound validity, and an upgrade to the encryption protocol.

The same status can also follow a malicious change. Google names two cases: a man-in-the-middle attack that replaces keys during the first exchange, and SIM swapping, where someone convinces a carrier to move a number onto a SIM they control. Treat a sudden unverified status on a sensitive chat as a reason to re-scan QR codes on a channel you already trust, such as an in-person meeting.

## Fix common Key Verifier errors

Google documents these outcomes on the Key Verifier help page:

- **Setting up key verification.** The service is still starting. Dismiss the screen and try again later.
- **No keys available.** One phone does not meet the Android, app, or RCS requirements.
- **Question mark after a QR scan.** The code does not match that contact's device. Scan the correct code.
- **Yellow shield with a cross.** Encryption keys did not verify. Confirm RCS end-to-end encryption is on, send a message, and verify again.
- **Empty QR box.** Restart Google Messages and open the code again.

Private keys are not sent to Google. The Key Verifier app can optionally collect crash logs, diagnostics such as API latency, and device or account identifiers to monitor quality. That collection follows the Usage & diagnostics setting, and you can turn sharing off.

![Close-up of a smartphone on a desk](https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=800&q=80)

## Extra habits that keep chats private

Verification proves the keys match. It does not hide the app from someone holding your unlocked phone. Pair it with a screen lock, and move sensitive apps into Private space if your phone supports it. The setup steps are in [Hide apps with Android Private space](/blog/android-private-space/).

If a phone is lost, theft protection and Find Hub matter more than a verification code. See [Set up Android theft protection](/blog/android-theft-protection-setup/) for the lock and wipe controls.

A few practical limits:

- Do not verify a code over the same chat you are trying to check. Use a call or an in-person scan.
- Re-verify after either person gets a new phone or SIM.
- Group encryption requires every participant on Google Messages with RCS on. One SMS-only member drops the thread out of end-to-end encryption.
- Unreadable encrypted messages usually clear after both apps are updated and the sender resends.

## Conclusion

Google Messages encrypts eligible RCS chats automatically. Your job is to confirm the lock, then match keys. Install Android System Key Verifier on both Android 10 or later phones, turn on RCS, and scan QR codes from Messages or Contacts. If that path is blocked, compare the verification code from Details. A keys no longer verified label is a prompt to check again, not proof that every past message was exposed.

## Sources

- [Use end-to-end encryption in Google Messages](https://support.google.com/messages/answer/10252671)
- [Android System Key Verifier](https://support.google.com/android/answer/15669061)
- [How end-to-end encryption in Google Messages provides more security](https://support.google.com/messages/answer/10262381)
- [Android System Key Verifier on Google Play](https://play.google.com/store/apps/details?id=com.google.android.contactkeys)
