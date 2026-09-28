---
title: "How to Use Android Fake Call Detection in Phone App"
description: "Set up Phone by Google fake call detection to flag spoofed contact numbers and AI voice-cloning scams on Android 12+."
pubDate: 2026-09-28T08:00:00
heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "security", "google", "how-to", "pixel"]
noindex: false
---

Caller ID is no longer proof that your parent, boss, or bank is on the line. Scammers spoof a saved number, then play an AI-cloned voice that asks for money or a one-time code.

Google shipped **fake call detection** in Phone by Google on 2 June 2026. The feature is on by default. It works only when both you and the saved contact use Phone by Google, with RCS available in Google Messages. This guide shows how to confirm it is active, what the alert looks like, and where the handshake still fails.

## What fake call detection actually checks

The system does not listen to the voice and guess if it is a clone. It checks whether the *device that owns that contact number* is placing the call.

When a saved contact calls you and both phones use Phone by Google, the caller’s device sends a silent confirmation over end-to-end encrypted RCS. Google describes this as a digital handshake. If a scammer spoofs the number, that signal is missing. Your phone then pings the real contact device. If that device reports it is not in a call, Phone by Google warns you to hang up.

The Verge recorded the on-screen copy as: “Someone may be pretending to call from your contact’s number,” with an option to end the call.

This sits next to older tools. Verified financial calls warn when someone impersonates a bank. [Pixel Scam Detection](/blog/pixel-scam-detection-notifications/) watches live conversation and messages for classic gift-card and wire-transfer scripts. Fake call detection is the layer that answers “is this even their phone?”

![Person holding a smartphone during a call at a desk](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## What you need before it can fire

Google’s footnote on the launch post is strict. All of the following must be true:

- Android **12 or later**
- **Phone by Google** as the app that places and receives the call on *both* devices
- **Contacts** and **Google Messages** installed
- **RCS** available in Google Messages
- The caller saved as a contact on your phone

The June 2026 rollout started on Pixel and then moved through Phone by Google on other Android 12+ devices. If your OEM dialer is still the default, install Phone by Google from Play and set it as the default phone app.

An iPhone on the other end, a Samsung-only dialer, or RCS turned off means there is no handshake. You will not get the fake-call banner for that person, even if the number is in your address book.

## Confirm Phone by Google is the default dialer

1. Open **Settings → Apps → Default apps** (wording varies by OEM).
2. Tap **Phone app** and select **Phone** by Google.
3. Open the Play Store listing for [Phone by Google](https://play.google.com/store/apps/details?id=com.google.android.dialer) and update it.
4. Open **Messages**, tap your profile, then **Messages settings → RCS chats**. Turn RCS on if your carrier supports it.
5. Confirm the people you actually answer — family, a manager, a partner — also use Phone by Google. Send them the Play Store link if they still use a skin dialer.

You do not enable a separate “fake call detection” toggle to start protection. Google states the feature is on by default. You only visit settings if you want it off.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/IMkmrUqc7R0"
    title="Spot scammers pretending to be trusted contacts with fake call detection"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## How to turn the feature off or back on

Google points disablement to Phone by Google settings (Help article on caller ID and spam).

1. Open the **Phone** app.
2. Tap the three-dot menu or your profile photo.
3. Open **Settings**.
4. Open **Caller ID and spam** (or the equivalent spam and verified-call page on your build).
5. Look for the fake call or impersonation warning control and set it the way you want.

Leave it on unless a lab or carrier test needs a clean incoming path. There is no benefit to disabling it for daily use.

If the page is missing, your Phone by Google build has not received the drop yet. Update the app, wait a day, and check again. Pixel devices were first in the June wave.

![Android phone home screen with app icons](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## What to do when the warning appears

Treat the banner as a hang-up instruction, not a puzzle.

1. End the call from the system button on the warning.
2. Do not send money, gift cards, or a verification code.
3. Call the real person back from the contact card you already saved. Do not redial the number sitting in Recents if you are unsure it matches the card.
4. If the real contact confirms they did not call, report the incident inside Phone by Google’s spam tools and warn family in a separate chat.
5. If they *did* call and you still saw a warning, note the time and file feedback in the Phone app. False alarms can happen when RCS is flaky or the other phone is offline.

Google’s own example is the “Mom lost her wallet” script. CNN coverage cited in the launch post says most people can no longer tell a cloned voice from the real one. The handshake exists because your ears are not a detector.

## Limits you should plan around

- **Both sides must run Phone by Google.** A spoof of an iPhone contact will not produce this specific alert.
- **The caller must be a saved contact.** Unknown numbers fall back to caller ID, spam scores, and verified-call badges — not this handshake.
- **RCS must work.** Wi-Fi calling plus a carrier that never provisioned RCS can leave a gap.
- **It does not stop every scam.** A criminal who uses a stolen phone, or who social-engineers you over a real number after a SIM swap, can still pass a device check.
- **It is not Call Screen.** Call Screen answers unknown callers. Fake call detection watches trusted numbers that fail the handshake.

Pair it with [Android Advanced Protection](/blog/android-advanced-protection-setup/) if the same account holds banking and work mail. Advanced Protection tightens sign-in. Fake call detection tightens the voice path.

## A ten-minute family checklist

1. Set Phone by Google as default on every Android 12+ phone in the house.
2. Turn on RCS in Google Messages on those same phones.
3. Save each other as contacts with the number that actually rings, not a second “work” line that never gets RCS.
4. Agree on a callback rule: if anyone asks for money or a code on a voice call, hang up and place a new call from the contact card.
5. Show older relatives the warning screenshot from Google’s video so the red banner is familiar before it appears.
6. Keep Scam Detection enabled in Phone by Google on Pixel and supported Samsung devices for the cases where the handshake never runs.

INTERPOL’s March 2026 fraud assessment, cited by Google, put impersonation among the drivers of more than $400 billion in global losses. The FTC tallied $2.95 billion in U.S. impersonation losses for 2024. Those figures are why a silent RCS check is worth the default-on setting.

## Conclusion

Fake call detection is a device-to-device proof, not a voice detector. Install Phone by Google on both ends, keep RCS on, leave the default setting alone, and hang up when the banner says someone may be pretending to use a contact’s number.

Call the person back from the card you saved. Do not trust a familiar voice on a first ring. The handshake is private. The warning is the part you act on.

## Sources

- [How Android helps keep you safe from impersonation scams with fake call detection](https://blog.google/security/android-fake-call-detection/) — Google, 2 June 2026
- [Google’s Phone app will tell you if a scammer is impersonating one of your contacts](https://www.theverge.com/tech/941517/google-phone-scammer-ai-impersonation) — The Verge
- [Phone by Google on Google Play](https://play.google.com/store/apps/details?id=com.google.android.dialer)
- [Caller ID & spam settings](https://support.google.com/phoneapp/answer/3459196) — Phone app Help
- [INTERPOL Global Financial Fraud Threat Assessment](https://www.interpol.int/en/News-and-Events/News/2026/INTERPOL-report-warns-of-increasingly-sophisticated-global-financial-fraud-threat) — March 2026
