---
title: "Enable In-Call Scam Protections on Android 15 and Earlier"
description: "Learn how the October 2026 Google System update adds extra in-call scam protection on Android 15 and earlier devices against accessibility apps."
pubDate: 2026-10-22T15:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "security", "tutorials", "how-to", "google"]
noindex: false
---

Google Play services v26.41, released 19 October 2026, adds an extra layer of in-call scam protection on phones running Android 15 and earlier. The update targets apps that request accessibility permissions while a call is active.

Scammers often push victims to install remote-control or accessibility tools during a call so they can take over the screen. The new protection raises the bar for those requests while you are on the phone.

This guide explains what changed, who receives it, and practical steps to stay protected. It follows the official Google System Release Notes.

## What the update changes

The October 2026 Google System update notes state:

> With updates to in-call scam protections, you’ll get an extra layer of defense against phone call scams on devices with Android 15 and earlier, with protections from apps that ask for accessibility permissions throughout a call.

On Android 16 and later the base protections are already stronger. The new layer focuses on older versions that still make up a large share of active devices.

The protection does not block every accessibility app. It adds checks and warnings when an app tries to gain accessibility access during an active call. This reduces the chance a scammer can walk you through enabling full remote control mid-conversation.

![Person holding phone during a call](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## Who receives the protection

The feature arrives through Google Play services. It applies to phones on Android 15 and earlier once Play services reaches version 26.41 or higher.

Check your version:

1. Open Settings.
2. Search for Google Play services or go to Apps > See all apps > Google Play services.
3. Tap the app and look at the version number.

If it is below 26.41, open the Play Store, tap your profile picture, then Manage apps & device, and update available apps. Play services updates often arrive in the background, but a manual check speeds them up.

You also need an active phone call for the protection to apply. The extra layer activates in the context of an ongoing call.

## How the protection works in practice

When an app requests accessibility permissions while a call is active, the system can:

- Show a stronger warning that explains the risk.
- Require additional confirmation steps.
- Limit or delay the grant until the call ends.

Exact prompts can vary by device manufacturer because OEMs customize system dialogs. Pixel devices show the cleanest version of Google’s implementation.

The protection complements existing tools such as Scam Detection in Phone by Google and Google Messages. Those features already flag suspicious calls and texts. This update focuses on the accessibility permission vector that scammers exploit after they have you on the line.

For broader scam defenses, see our guide on [new Android scam protections](/blog/android-new-scam-protections-setup-guide/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/tbM122Qe-lk"
    title="Gemini in Android Auto, your AI assistant in the car"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Steps to stay protected

1. Update Google Play services to 26.41 or later.
2. Keep the Phone app and Google Messages updated.
3. Review which apps already have accessibility permission: Settings > Accessibility > Installed apps (or Downloaded apps).
4. Remove accessibility access from any app you do not fully trust.
5. If a caller asks you to install an app or enable accessibility, hang up and call the organization back on a known number.
6. Enable Google’s enhanced scam protections in the Phone app if available on your device.

Never grant accessibility permission to an app recommended during a call unless you initiated the contact yourself and verified the source.

![Smartphone security settings screen](https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80)

## Limitations to know

The update does not replace good judgment. A determined scammer can still try other methods. The protection is one layer among several.

It targets Android 15 and earlier. If you are on Android 16 or 17, you already have stronger baseline controls, but the same advice about accessibility apps still applies.

Manufacturer customizations can change the exact wording of warnings. Test the behavior on your device if you want to confirm it is active.

## Tips

- Update Play services before you expect important calls.
- Audit accessibility permissions monthly.
- Use official apps from the Play Store only.
- Enable Screen Call or similar call-screening features if your carrier and device support them.
- Report scam calls through the Phone app so the network improves detection.

## Conclusion

The October 2026 Play services update adds targeted protection against accessibility-based phone scams on Android 15 and earlier. Update Play services, review existing accessibility grants, and treat any mid-call request to install or enable tools as a red flag.

The change is part of Google’s ongoing work to raise the cost of common scam techniques. Combined with existing detection features, it gives older devices a practical extra defense.

## Sources

- [What’s new in Android’s October 2026 Google System Updates — 9to5Google](https://9to5google.com/2026/10/19/october-2026-google-system-updates/)
- [Google System Release Notes — Google Support](https://support.google.com/product-documentation/answer/14343500)
- [New Android protections to help keep you safe from mobile scams — Google Blog](https://blog.google/security/new-android-scam-protections/)
