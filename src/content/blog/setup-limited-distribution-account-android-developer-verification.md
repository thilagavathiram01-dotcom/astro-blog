---
title: "How to Set Up a Limited Distribution Account for Android Developer Verification"
description: "Step-by-step guide to create a free limited distribution account in Android Developer Console. Share apps with up to 50 devices without a government ID."
pubDate: 2026-11-11T18:00:00
heroImage: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "how-to", "security"]
noindex: false
---

Android developer verification went live in Brazil, Indonesia, Singapore, and Thailand on 30 September 2026. Students, hobbyists, and classroom projects can still share apps without a government ID or the $25 fee.

A limited distribution account in the Android Developer Console lets you register packages and share them with up to 50 explicitly authorized devices. This guide walks through the exact requirements, signup steps, package registration, and the QR or link handshake.

For the full verification timeline and Play Console path, see our earlier guide on [how to finish Android developer verification by Sept 30](/blog/android-developer-verification-sept-2026/).

## Who limited distribution accounts are for

Google designed this account type for people who do not distribute widely. Common cases include:

- Hobbyists sharing with family and friends
- Individual learners building portfolio prototypes
- Classroom projects shared with classmates and teachers

You can register apps and authorize up to 50 devices. The account is free. You do not need a government-issued photo ID. You can later upgrade a limited account to full distribution, but you cannot convert a full account back to limited.

The account does not replace Google Play’s closed testing requirements for new personal developer accounts. If you want a public Play listing, you still need the standard Play path.



![Person coding on a laptop next to a plant](https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=800&q=80)



## What you need before you start

Prepare these items. The console will ask for them during signup:

- A Google Account with 2-Step Verification turned on
- A linked Google payments profile (used for your legal name and address, not for billing)
- A contact email address (Google uses this privately and does not show it publicly)

No additional identity documents are required for limited distribution accounts.

## Step 1: Create the limited distribution account

1. Go to the [Android Developer Console](https://developer.android.com/developer-verification/guides/android-developer-console) and sign in with your Google Account.
2. Choose the limited distribution plan when the console asks how you want to distribute. This is the free option for students and hobbyists.
3. Select a personal account type. Organization accounts are for full distribution and require a D-U-N-S number.
4. Link or create a Google payments profile so the console can store your legal name and address.
5. Enter and verify your contact email if it is not already verified on the Google Account.
6. Accept the Android Developer Console Terms of Service.

The account is free. You will not see a $25 payment screen.

## Step 2: Register your package names

Once the account is active, register each app you want to share.

1. Open the Packages page in the Android Developer Console.
2. Enter the exact package name (`applicationId`) from your APK or App Bundle.
3. Add the SHA-256 certificate fingerprint of the signing key you use for that package. You can extract it with `keytool` or from Android Studio’s signed APK/AAB dialog.
4. For a new package name with no prior installs, providing the name and fingerprint is usually enough. The status moves to registered.
5. For an existing package that already has installs, the console may require you to prove ownership by uploading a signed APK that contains a challenge snippet Google provides.

After registration, the package can be installed on authorized devices even in the four countries where verification protections are active.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/jEATR5sF5Lo"
    title="Android developer verification walkthrough"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step 3: Authorize devices with the secure handshake

Sharing is not a public download link. Each device must be explicitly authorized by its owner.

1. In the Android Developer Console, open the Devices page.
2. Add a friendly name for the device (for example, “Student Pixel 8” or “Classroom tablet 3”). This name is only for your account.
3. Generate an authorization code. The console shows a QR code and a shareable link.
4. If you have the device, scan the QR code with it. If you do not, send the link. The link includes your developer name so the recipient can confirm they know you.
5. The device owner must consent. They confirm they personally know and trust you as a developer. The device then generates a unique code.
6. Enter that code in the console to complete authorization.

Shared links expire after 7 days. You can authorize up to 50 devices. Once authorized, the user can install the registered packages you share with them through the normal sideload or install flow.



![Laptop and phone on a desk with coding software](https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=800&q=80)



## Tips for students and hobbyists

- Register the package and signing fingerprint before you hand the APK to anyone. Unregistered packages can be blocked on certified devices in the four countries.
- Use a single Google Account for the limited distribution console. Switching accounts later complicates package ownership.
- Keep a short list of authorized devices. You can remove a device from the console if a student leaves the class or a friend no longer needs the app.
- If your project grows beyond 50 devices or you want to publish on a store, upgrade to a full distribution account. The limited account can be migrated one way.
- ADB installs and the advanced sideload flow still work for unregistered packages. Limited distribution is simply the cleaner path for small trusted groups.

## Conclusion

A limited distribution account is the practical way for students, teachers, and hobbyists to keep sharing Android apps after the 30 September 2026 regional verification protections started. Create the free account, register your package names and signing fingerprints, then authorize each device through the QR or link handshake.

The process takes a few minutes once you have a Google Account with 2-Step Verification and a payments profile. It keeps Android open for learning while the wider ecosystem requires verified developers for public store installs.

## Sources

- [Register for limited distribution on Android devices](https://developer.android.com/developer-verification/guides/limited-distribution)
- [Android developer verification](https://developer.android.com/developer-verification)
- [Register on Android Developer Console](https://developer.android.com/developer-verification/guides/android-developer-console)
- [Limited distribution accounts in Android Developer Console Help](https://support.google.com/android-developer-console/answer/17131204)
- [Android developer verification walkthrough (YouTube)](https://www.youtube.com/watch?v=jEATR5sF5Lo)
- [Android developer verification: Building a safer ecosystem together](https://developer.android.com/blog/posts/android-developer-verification-building-a-safer-ecosystem-together)
