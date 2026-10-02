---
title: "Firebase Phone Verification on Android: No SMS OTP"
description: "Set up Firebase Phone Number Verification on Android with a test token, carrier checks, and a tap-to-consent flow instead of SMS OTP."
pubDate: 2026-10-02T12:40:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["firebase", "android", "tutorials", "how-to", "security"]
noindex: false
---

SMS one-time codes are easy to phish and slow when a carrier delays the text. Firebase Phone Number Verification (Firebase PNV) skips the message. The user taps to share the number already tied to the SIM, and your app receives a signed token.

On 28 September 2026, Firebase added 10 carrier networks to the production list. Micah Baker, senior product manager for Firebase, described PNV as the third generation of number checks after SMS and Silent Network Authentication. This guide follows the current Android getting-started docs, last updated 1 October 2026, plus that carrier expansion.

## What changed on 28 September 2026

Firebase PNV already covered carriers such as DNA in Finland, Orange in France, Deutsche Telekom and Telefónica O2 in Germany, Telkomsel in Indonesia, CelcomDigi in Malaysia, and Movistar in Spain. The 28 September update added:

- Malaysia: Tune Talk and U Mobile
- Spain: MasOrange
- Pakistan: PTML
- Vodafone in Germany, Greece, Ireland, the Netherlands, Romania, and the United Kingdom (listed as Vodafone Ziggo in the Netherlands)

The official post says you can verify a number even if the phone is in airplane mode or mobile data is off, as long as the device still has an internet path such as Wi-Fi. There is no SMS to intercept. The user consents with a tap instead of typing a code.

Carrier coverage still decides whether the flow can run in production. Always read the [supported carriers table](https://firebase.google.com/docs/phone-number-verification/pricing#supported-carriers) before you promise the feature in a country. If no SIM is supported, keep SMS or another method as a fallback.

![Person holding a smartphone while reviewing a mobile app](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## What you need before the first call

Add Firebase to the Android project if it is not there yet. Test mode also needs the device enrolled in the Google system services public beta program. The official Firebase walkthrough states that PNV works on Android 8 or later.

In the app module Gradle file, pull in the library with the Firebase Android BoM so versions stay aligned:

```kotlin
dependencies {
    implementation(platform("com.google.firebase:firebase-bom:34.19.0"))
    implementation("com.google.firebase:firebase-pnv")
}
```

If you skip the BoM, the docs pin the library at `com.google.firebase:firebase-pnv:16.1.1`. Prefer the BoM when the app already uses other Firebase SDKs.

## Step 1: Turn on a SIM-less test session

You do not need a supported SIM to prototype the screens. The test token uses the same methods as production.

1. Open the Firebase console and go to **Security > Phone Verification > Testing**.
2. Click **Generate token**.
3. Create one client and enable the session once:

```kotlin
import com.google.firebase.pnv.FirebasePhoneNumberVerification

val fpnv = FirebasePhoneNumberVerification.getInstance()
fpnv.enableTestSession("COPIED_TOKEN_STRING")
```

Call `enableTestSession` only once on that instance. A second call throws. Tokens last 7 days, then you generate a new one. They work on physical devices and emulators, which makes them useful in CI as well as on a desk.

The Firebase blog notes that this setup is the same path you will ship. When testing is done, delete the `enableTestSession` line. That is the switch into production mode.

## Step 2: Check support before you show the button

`getVerificationSupportInfo()` is a pre-check. It does not ask the user for consent. Use it on launch to decide whether to offer PNV or fall back to SMS.

```kotlin
fpnv.getVerificationSupportInfo()
    .addOnSuccessListener { results ->
        if (results.any { it.isSupported() }) {
            // Safe to call getVerifiedPhoneNumber
        } else {
            // Fall back to SMS or another method
        }
    }
    .addOnFailureListener { error ->
        // Log and keep the fallback path
    }
```

While a test session is active, the method returns a single entry for that token. After you remove test mode, it returns a result for each SIM in the device. Dual-SIM phones can support PNV on one line and not the other.

## Step 3: Ask for the verified number

The recommended API is one call. `getVerifiedPhoneNumber()` opens Android Credential Manager for consent, talks to the Firebase PNV backend, and returns a phone number plus a token.

```kotlin
fpnv.getVerifiedPhoneNumber(this@MainActivity)
    .addOnSuccessListener { result ->
        val phoneNumber = result.getPhoneNumber()
        val token = result.getToken()
        // Send the token to your backend. Do not trust the raw number alone.
    }
    .addOnFailureListener { error ->
        // User declined consent, or the network call failed.
    }
```

In test mode the number has a real country code followed by zeros. In production, billing starts when the backend returns the token with the verified number. If you need a custom consent screen or extra steps, the docs describe a separate custom flow. Most apps should stay on the single-call API.

Pass the token to your server, not only the phone string. The [verify tokens guide](https://firebase.google.com/docs/phone-number-verification/verify-tokens) shows how to check integrity before you create an account or reset a session.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/A8zq0xfXlvY"
    title="Tap to verify: No SMS, no Friction with Firebase Phone Number Verification"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step 4: Move from the test token to production

Finish the client flow and the backend token check first. Then remove `enableTestSession`. Confirm the user’s carrier is on the production list. New names from 28 September 2026 include U Mobile, Tune Talk, MasOrange, PTML, and the Vodafone networks listed above. Older networks such as Orange France and Telkomsel remain available.

Keep a fallback. A traveler on an unsupported MVNO, a Wi-Fi-only tablet with no SIM, or a declined consent sheet should not dead-end sign-in. SMS is the usual backup. You can also point users who only need a signed-in Google session at Credential Manager sign-in, covered in our [verified email and Credential Manager guide](/blog/verified-email-credential-manager-android/).

If the same project calls Gemini through Firebase AI Logic or Cloud Functions, set a spend cap before traffic grows. The cap pauses the chosen service at 100 percent of the budget and emails you at 50 and 80 percent. See [how to set Firebase spend caps](/blog/firebase-spend-caps-gemini-functions/).

![Laptop and notebook on a desk used for app security review](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Tips that save a failed rollout

- Generate a fresh test token every week. A 7-day TTL will break a demo that worked on Friday.
- Do not call `enableTestSession` from more than one place. Share a single `FirebasePhoneNumberVerification` instance.
- Branch on `getVerificationSupportInfo()` before you hide the SMS field. A supported country is not the same as a supported SIM.
- Store and verify the token server-side. A client can display a number; only the token proves Firebase issued it.
- Watch the carriers page after each release. The 28 September list is already longer than the first PNV launch, and Firebase says it adds networks on a regular basis.
- Treat declined consent as a normal result, not a crash. Offer SMS or a different sign-in method on that listener.

## Conclusion

Firebase PNV replaces the typed SMS code with a carrier check and a consent tap. The Android path is short: add `firebase-pnv` with BoM `34.19.0`, enable a 7-day test token, check SIM support, then call `getVerifiedPhoneNumber()`. Delete the test-session line only after the backend verifies tokens and your target carriers are on the production list, including the 10 networks added on 28 September 2026.

## Sources

- Micah Baker, [New regions and networks: Firebase Phone Number Verification adds more networks](https://firebase.blog/posts/2026/09/firebase-pnv-more-networks/), Firebase Blog, 28 September 2026
- [Get started with Firebase Phone Number Verification on Android](https://firebase.google.com/docs/phone-number-verification/android/get-started), Firebase docs, updated 1 October 2026
- [Supported carriers](https://firebase.google.com/docs/phone-number-verification/pricing#supported-carriers), Firebase docs
- [Verify Firebase PNV tokens](https://firebase.google.com/docs/phone-number-verification/verify-tokens), Firebase docs
- Firebase, [Tap to verify: No SMS, no Friction with Firebase Phone Number Verification](https://www.youtube.com/watch?v=A8zq0xfXlvY), 25 June 2026
