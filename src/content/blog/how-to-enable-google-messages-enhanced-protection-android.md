---
title: "How to Enable Enhanced Protection in Google Messages"
description: "Step-by-step guide to turn on Enhanced Protection in Google Messages for AI-powered scam detection with Gemini on Android phones."
pubDate: 2026-10-31T14:00:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "security", "how-to", "gemini"]
noindex: false
---

Scammers now use long conversations and fresh phishing links that basic filters miss. Google added Enhanced Protection in Google Messages as an opt-in mode that brings cloud Gemini models and on-device Gemini Nano checks to conversations with unknown senders.

The feature rolled out starting mid-October 2026 and is not enabled by default. You choose it yourself. This guide covers what it does, which phones support which parts, how to turn it on, and what to expect after you enable it.

![Person holding a smartphone showing a messaging interface](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## What Enhanced Protection adds

Standard Protection in Google Messages already filters spam and flags known bad links. Enhanced Protection builds on that with three extra layers for chats with people not in your contacts.

**Cloud Scam Detection with Private AI Compute.** When you chat with an unknown sender, Messages can send the conversation context to Google’s stronger cloud Gemini models. The analysis runs inside Private AI Compute. Your data is encrypted and processed in a dedicated space that Google says is inaccessible to anyone else, including Google itself. This helps catch novel “slow-burn” scams that on-device detection may miss.

**Smarter link checks with Gemini Nano.** On supported phones, the on-device Gemini Nano model looks at real-time web signals for unfamiliar links before you open them. This targets brand-new phishing sites that have not yet been added to blocklists.

**Redesigned link checkpoints.** You get clearer warnings and extra time before tapping a link from a number not saved in your contacts.

Google’s October 14, 2026 announcement notes that existing Scam Detection already flags more than 5 million suspected scam calls and messages each month across Phone by Google and Messages.

## Device support

Support is split by feature. Check your phone against these lists from Google’s footnotes.

| Feature | Supported devices |
| --- | --- |
| Cloud Scam Detection (Private AI Compute) | Pixel 6 and newer, Galaxy S24 series and newer, Galaxy Z Flip/Z Fold 6 and newer, other Android AICore devices |
| Gemini Nano link checks | Pixel 10 and newer, Galaxy S26 series, Galaxy Z Flip 8 / Z Fold 8, other select devices |
| Link checkpoints | Android 6 and newer |

Update Google Messages from the Play Store first. The option appears only after the staged rollout reaches your account and device. On some phones you may also need Android AICore active (Settings → Google → All services → System services under Privacy & Security on Android 14+).

## How to turn on Enhanced Protection

1. Open the **Google Messages** app.
2. Tap your **profile picture or initials** in the top-right corner.
3. Tap **Messages settings**.
4. Tap **Protection & Safety**.
5. Tap **Spam and scam protection** (or similar label).
6. Select **Enhanced protection**.

You will also see **Standard protection** (the previous default) and **No protection (not recommended)**. Choose Enhanced only if you want the extra AI layers.

After you enable it, test with a known safe contact first so you know how warnings look. Conversations with people already in your contacts stay under the lighter on-device checks.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/B4XSwBWTIOc"
    title="Google's Android Scam Protections: Enhanced Protection in Messages"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Privacy and what happens to your messages

Google states that the cloud analysis uses Private AI Compute. Messages are encrypted and processed in a secure dedicated space that remains private to you. Google says the data is not accessible to anyone else, including Google.

You can still report a message as spam. That optional report can send the content to Google for analysis, the same as before. Turning Enhanced Protection off returns you to Standard Protection without deleting prior reports.

If you prefer to avoid any cloud processing for unknown senders, stay on Standard Protection. On-device Scam Detection continues to run either way on supported phones.

## Related Android protections

Enhanced Protection in Messages is one piece of a larger set announced the same day. Other changes include:

- Screen-share privacy that blanks login and payment fields in Chrome and Android WebView (Android 15+).
- Call-forwarding protection that blocks background enabling and warns you if someone asks you to dial a forwarding code (Pixel and select devices, early December 2026).
- Expanded on-device Scam Detection in chat notifications for more device makers beyond Pixel.

For stronger device-wide controls, see our guide to [Advanced Protection on Android](/blog/android-advanced-protection-setup/). That mode locks Play Protect on, blocks unknown-source installs, and adds theft locks.

![Close-up of hands using a smartphone for messaging](https://images.unsplash.com/photo-1601972602237-8c79241e468b?auto=format&fit=crop&w=800&q=80)

## Tips for using the feature well

- Update Messages and Play services regularly so the option appears when your rollout window opens.
- Treat any “Likely scam” warning as a pause signal. Verify the request through a known official channel instead of replying in the chat.
- Keep Standard Protection as a fallback if Enhanced feels too strict for your contacts.
- Check notification scam alerts on third-party chat apps once your manufacturer rolls them out. Those are separate from the Messages setting.
- Pair this with a strong screen lock and Play Protect. No single feature stops every scam.

## Conclusion

Enhanced Protection gives Google Messages an optional boost against sophisticated text scams by combining on-device Gemini Nano checks with private cloud Gemini analysis for unknown senders. It is off by default, device support varies by feature, and you control the switch.

Open Messages settings today, look for the Protection & Safety section, and choose the level that matches your risk tolerance. If the option is not visible yet, update the app and check again in the coming days as the staged rollout continues.

## Sources

- [New Android protections to help keep you safe from mobile scams](https://blog.google/security/new-android-scam-protections/) — Google Blog, Oct 14, 2026
- [Google Messages rolling out Enhanced Protection mode on Android](https://9to5google.com/2026/10/23/google-messages-enhanced-protection/) — 9to5Google
- [Use and manage connected apps in Gemini](https://support.google.com/gemini/answer/13695044) — Google Help (related context)
- [Google's Android Scam Protections](https://www.youtube.com/watch?v=B4XSwBWTIOc) — YouTube
