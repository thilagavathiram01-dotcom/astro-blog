---
title: "Verify Email Without OTP Using Credential Manager"
description: "Use Android Credential Manager Digital Credentials to fetch a Google-verified email and skip OTP signup friction."
pubDate: 2026-09-28T14:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "developer", "google", "security"]
noindex: false
---

Email OTPs still stall sign-up. Users leave your app, hunt a code, and often never come back. Google now issues a cryptographically verified email credential to Android devices, and you can request it through Credential Manager.

This guide follows the official Digital Credentials docs published for Android developers. You will add the Jetpack libraries, build an OpenID4VP request, show the system bottom sheet, and validate the SD-JWT on your server. Pair it with passkeys after the email lands, as covered in our [passkey transfer guide](/blog/android-passkey-password-manager-transfer/).

## What verified email actually proves

Google announced the credential on 22 April 2026. Credential Manager on Android implements the W3C Digital Credential API. The issuer places a verifiable credential on the device ahead of time, then checks that the Google Account still exists when the user shares it.

Only consumer Google Accounts work for this issuer. Workspace and supervised Family Link accounts are out of scope. The API itself is issuer-agnostic, so other providers can ship their own email claims later.

Treat `@gmail.com` as Google-authoritative. For custom domains on a consumer Google Account, Google is not the long-term source of truth. Route those addresses through your existing OTP path.

The flow does not prove inbox delivery. Spam filters can still hide mail. Use OTP when you must confirm the mailbox can receive messages.

## Requirements before you write code

The feature runs on phones, tablets, and foldables on Android 9 (API 28) and higher. Google Play services must be 25.49.x or later.

You need an activity context for `getCredential()`. Application context can leave the bottom sheet in a broken state.

This path is Android-only. It does not request OAuth scopes such as Calendar or Drive. Use Sign in with Google when you want a federated session instead of a local account. Our [Compose Sign in with Google tutorial](/blog/compose-credential-manager-google-sign-in/) covers that sibling flow.



![Smartphone on a desk next to a notebook during an app sign-up flow](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)



## Add Credential Manager dependencies

Google’s implementation sample pins the 1.7 alpha line. Use the same pair if you need `GetDigitalCredentialOption`.

```kotlin
dependencies {
    implementation("androidx.credentials:credentials:1.7.0-alpha03")
    implementation("androidx.credentials:credentials-play-services-auth:1.7.0-alpha03")
}
```

Create the manager once:

```kotlin
private val credentialManager = CredentialManager.create(context)
```

Keep a secure random nonce per request. The Key Binding signature includes that nonce at share time and blocks replay.

## Build the OpenID4VP request

Wrap a DCQL query inside `GetDigitalCredentialOption`. Current providers expect an outer `requests` array with protocol `openid4vp-v1-unsigned`.

```kotlin
val nonce = generateSecureRandomNonce()

val openId4vpRequest = """
{
  "requests": [
    {
      "protocol": "openid4vp-v1-unsigned",
      "data": {
        "response_type": "vp_token",
        "response_mode": "dc_api",
        "nonce": "$nonce",
        "dcql_query": {
          "credentials": [
            {
              "id": "user_info_query",
              "format": "dc+sd-jwt",
              "meta": { "vct_values": ["UserInfoCredential"] },
              "claims": [
                {"path": ["email"]},
                {"path": ["name"]},
                {"path": ["given_name"]},
                {"path": ["family_name"]},
                {"path": ["picture"]},
                {"path": ["hd"]},
                {"path": ["email_verified"]}
              ]
            }
          ]
        }
      }
    }
  ]
}
""".trimIndent()

val option = GetDigitalCredentialOption(requestJson = openId4vpRequest)
val request = GetCredentialRequest(listOf(option))
```

`UserInfoCredential` is the type that carries the email claim. `email_verified` is the boolean you should check after server parse. Extra fields such as name and picture are not verified by Google.

You can also install Google’s sample skill from the Android CLI:

```bash
android skills add verified-email
```

## Show the system bottom sheet

Trigger the request when the user focuses the email field, taps Sign up, or lands on the screen.

```kotlin
coroutineScope {
    try {
        val result = credentialManager.getCredential(activity, request)
        when (val credential = result.credential) {
            is DigitalCredential -> {
                val responseJsonString = credential.credentialJson
                sendToServer(responseJsonString, nonce)
            }
            else -> showFallback()
        }
    } catch (e: Exception) {
        showFallback()
    }
}
```

The sheet lists the claims you requested. The user taps **Agree and Continue**. If the device has no matching credential, the system shows a generic error. Always keep a “Verify another way” control that falls back to manual email plus OTP.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/eAyq9AWLRlY"
    title="Authentication on Android with Credential Manager and Firebase Auth"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Parse the SD-JWT on the client only for UI

The raw `credentialJson` wraps a `vp_token`. The token is an SD-JWT string. You may decode claims on-device to prefill a name field. Do not create an account from client-side claims.

```kotlin
val responseData = JSONObject(responseJsonString)
val dataObject = responseData.getJSONObject("data")
val vpToken = dataObject.getJSONObject("vp_token")
val credentialId = vpToken.keys().next()
val rawSdJwt = vpToken.getJSONArray(credentialId).getString(0)
```

Send `responseJsonString` and the original nonce to your backend.

## Validate the credential on the server

Google documents two checks your server must pass.

First, confirm authenticity. `iss` must be `https://verifiablecredentials-pa.googleapis.com`. Verify the SD-JWT signature against the JWKs at `https://verifiablecredentials-pa.googleapis.com/.well-known/vc-public-jwks`.

Second, confirm the presenter. Check the `cnf` field and the Key Binding signature so the credential cannot be copied onto another device.

Also reject a reused nonce. Credentials are issued while the device is idle and can stay valid for several days, but the system rechecks account presence at share time. Offline devices and removed accounts fail instead of returning a stale credential.

After a clean verify, create the account and offer passkey registration with the same Credential Manager stack.



![Laptop showing code for an authentication API on a wooden desk](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)



## Pick the right product path

Use verified email when users stay on your username, password, or passkey account and you only need proof of the address. Use Sign in with Google when they expect a Google session and OAuth scopes.

Recommended screens:

- Sign-up: fetch email, create the account, then create a passkey.
- Recovery: replace the “check your spam folder” step with the same sheet.
- Step-up: confirm the same verified address before a password change or payout edit.

WebView apps need a JavaScript bridge. The page signals the native host, and the host calls Credential Manager. That pattern matches the existing Credential Manager WebView handoff docs.

## Tips that keep the flow honest

Keep a fallback button on every screen that calls this API. No credential on device is a normal case, not a crash.

Auto-verify only `@gmail.com`. Send OTP to every other domain even when `email_verified` is true in the payload.

Log `GetCredentialException` types. Do not print raw JSON or emails in analytics events.

Test three devices: two consumer Google accounts, one Workspace-only profile, and an emulator without Play services. The last two should hit fallback.

## Conclusion

Verified email through Credential Manager cuts the OTP loop for consumer Google Accounts on Android 9 and higher. Request `UserInfoCredential` with a fresh nonce, show the system sheet, and verify the SD-JWT on your server against Google’s issuer and JWKs.

Keep Sign in with Google for federated login. Keep OTP for custom domains and deliverability checks. After a verified address lands, create a passkey so the next visit needs no mailbox at all.

## Sources

- [Streamline User Journeys with Verified Email via Credential Manager](https://android-developers.googleblog.com/2026/04/streamline-auth-credential-manager-verified-email.html)
- [Retrieve a verified email using digital credentials](https://developer.android.com/identity/digital-credentials/email-verification)
- [Implement email verification with the Digital Credentials API](https://developer.android.com/identity/digital-credentials/email-verification-implementation)
- [About Credential Manager](https://developer.android.com/identity/credential-manager)
- [W3C Digital Credentials](https://www.w3.org/TR/digital-credentials/)
