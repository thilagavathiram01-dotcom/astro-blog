---
title: "How to Finish Android Developer Verification by Sept 30"
description: "Register apps and verify identity in Play Console or Android Developer Console before the Sept 30, 2026 regional deadline."
pubDate: 2026-09-26T10:00:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "security", "tutorials"]
noindex: false
---

Android will start blocking installs of unregistered apps on certified devices in four countries on **30 September 2026**. If you ship on Play, Galaxy Store, HONOR, OPPO, vivo, Xiaomi, or Transsion in Brazil, Indonesia, Singapore, or Thailand, finish verification now.

Google already auto-registered most Play package names. Your job is to confirm status, register leftovers, and pick the right console if you never used Play.

## What changes on 30 September 2026

Android developer verification ties a real person or organization to each package name. On certified phones running Android 7 or later, users in the first four countries can install and update apps from participating stores only when a verified developer registered that package.

Participating stores for the first wave:

- Google Play
- HONOR App Market
- OPPO App Market
- Samsung Galaxy Store
- Transsion Palm Store
- vivo V-Appstore
- Xiaomi GetApps

Unregistered apps can still land through **ADB** or the **advanced sideload flow**. A global requirement on certified devices is planned for **2027**. Do not wait for that date if you already ship in the four countries.



![Developer reviewing an Android phone and laptop](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)



## Pick the correct console

Google documents two official paths. Use one account family, not both for the same Play listing.

**Play Console** if you distribute on Google Play, or on Play plus other stores. Identity checks you already passed for Play usually count. Open **Settings → Developer account** to confirm the record. New apps register their package name when you create the listing. Check Home for packages that were not auto-registered.

**Android Developer Console (ADC)** if you never ship on Play. Create the ADC account, complete identity checks, then register each package name and the SHA-256 fingerprint of the signing certificate.

Students, teachers, and hobbyists who only share with a small set of devices can use a **limited distribution** account. Official docs say that path covers up to **20 devices**, skips a government ID, and skips the registration fee. It is not a public-store path.

## Step 1: Confirm Play auto-registration

Google states that about **99%** of Play apps were registered from data already in Console. Still open Home before the deadline.

1. Sign in at [play.google.com/console](https://play.google.com/console).
2. Read the verification or registration card on **Home**.
3. Open any app that shows an action required state.
4. Follow the prompt to register the package name. You may need to prove ownership of the private signing key.
5. Repeat for packages you also ship outside Play if Console offers that registration control.

If another developer already holds the package name on Play, Console will refuse a duplicate for a new listing. You can keep a name you already used off Play when you first create the Play app, per the official Play registration guide.

Android Studio also surfaces registration status when you generate a signed App Bundle or APK. Use that check during a release build so a missing registration does not wait until store review. For the Studio workflow that shows this status, see [Android Studio Panda 4 planning mode](/blog/android-studio-panda-4-planning-mode/).

## Step 2: Verify identity if you are not on Play

On ADC, identity comes before package registration.

1. Open the [Android Developer Console](https://developer.android.com/developer-verification/guides/android-developer-console).
2. Choose a personal account or an organization account.
3. Link a Google payments profile when the console asks.
4. Submit the documents the console lists for your account type. Personal accounts use identity details tied to that payments profile. Organizations typically provide a D-U-N-S number (except known government agencies), an official organization document, and a government ID for an authorized representative.
5. Verify the contact email with the six-digit code if that address is not already verified on the Google Account.

Names on business papers must match the Dun & Bradstreet profile. Mismatched legal names are a common reject reason in Help Center copy.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/A7DEhW-mjdc"
    title="Android developer verification"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step 3: Register each off-Play package

ADC registration is explicit. You tell Google the package name and the public certificate fingerprint.

1. In ADC, start package registration.
2. Enter the exact `applicationId` / package name from the shipped APK or AAB.
3. Enter the **SHA-256** fingerprint of the signing certificate that users install.
4. Complete any ownership proof the console requests for that key.
5. Save and wait for the registered state.

Print or export the fingerprint from the keystore you actually ship with. A debug key or an old upload key that is not on devices will not match installs in the four countries.

Play developers who also ship APKs on Galaxy Store or another partner store should register those same package names in Play Console when the off-Play control is present, instead of opening a second identity in ADC.



![Close-up of code on a laptop screen](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)



## What users can still do without registration

Google kept two escape hatches so labs and power users are not locked out.

**ADB install** continues to work for unregistered packages.

**Advanced flow** is a one-time user path for sideloading from unverified developers. Official steps:

1. Turn on developer options in system settings.
2. Confirm nobody is coaching the change.
3. Wait through the one-day cooling-off period.
4. Confirm with biometrics or the device PIN.
5. Allow unverified installs for **7 days** or indefinitely.

That flow exists so a scam call cannot rush a victim through a one-tap bypass. It is not your distribution plan for a consumer app in the four countries.

## Fees, limited accounts, and 2027

Read the current [FAQ](https://developer.android.com/developer-verification/guides/faq) for fees. Limited distribution remains the documented no-fee path for tiny private installs. Public store listings use the paid or Play-linked path that matches your console.

After 30 September 2026, treat the four-country rule as live. Google says it will take partner and developer feedback, then expand the same requirement to certified devices worldwide in 2027.

If Home still shows unregistered Play apps after you submit proof, use Play Console Help. If ADC rejects documents, use Android Developer Console Help. Do not open a second console for the same Play package.

## Tips before you ship this week

- Register the production signing cert, not only the Play App Signing upload key, when the console asks for the key users install.
- Keep one legal name across payments profile, D-U-N-S, and ID scans.
- Check Studio’s signed-bundle screen on every release cut until Home stays clean.
- Tell QA in Brazil, Indonesia, Singapore, and Thailand to install from the production store listing, not a random APK, after 30 September.
- Document the advanced-flow and ADB exceptions for internal builds so support does not treat them as store bugs.

## Conclusion

Open Play Console Home today if you already ship on Play. Register stray packages and confirm identity under Settings. If you never used Play, create an ADC account, verify identity, and submit package name plus SHA-256 before 30 September 2026.

The first enforcement wave is regional and store-specific. The 2027 plan is not. Finish the paperwork while the consoles still accept late registrations without blocking your testers.

## Sources

- [Android developer verification](https://developer.android.com/developer-verification)
- [Register on Google Play Console](https://developer.android.com/developer-verification/guides/google-play-console)
- [Android developer verification guides](https://developer.android.com/developer-verification/guides)
- [Building a safer ecosystem together (Android Developers Blog)](https://android-developers.googleblog.com/2026/06/android-developer-verification.html)
- [Verify identity information (Android Developer Console Help)](https://support.google.com/android-developer-console/answer/16641416)
- [Android developer verification (YouTube)](https://www.youtube.com/watch?v=A7DEhW-mjdc)
