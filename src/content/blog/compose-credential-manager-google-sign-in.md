---
title: "Sign in with Google in Jetpack Compose"
description: "Add Sign in with Google in Jetpack Compose using Android Credential Manager, GetGoogleIdOption, and a Compose button."
pubDate: 2026-09-20T14:00:00
heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "developer", "google", "security"]
noindex: false
---

Android no longer wants you to wire Google Sign-In through a standalone one-tap SDK. Credential Manager is the official Jetpack API for passwords, passkeys, and Sign in with Google. This guide shows how to call it from a Compose screen without leaving the activity context.

You will add the libraries, build a `GetGoogleIdOption` request, launch the bottom sheet from a composable, parse the ID token, and clear state on sign-out. Pair this with passkeys later if you already follow our [passkey transfer guide](/blog/android-passkey-password-manager-transfer/).

## What Credential Manager replaces

Google documents Credential Manager as the recommended API for credential exchange on Android. It covers passkeys, federated sign-in (including Sign in with Google), passwords, and digital credentials. The same selector can list every saved account instead of forcing a separate Google button first.

The Jetpack library works on older devices when you also add `credentials-play-services-auth`. Passkeys need Android 9 or higher. Sign in with Google through Credential Manager still needs a Web OAuth client ID from Google Cloud.

Compose 1.12 (BOM `2026.08.00`) also lists Credential Manager integration among the August 2026 toolkit updates. You can stay on an older Compose BOM and still use `androidx.credentials`; the identity APIs live in their own artifacts.



![Developer reviewing an Android sign-in screen on a laptop](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)



## Add the official dependencies

In the app module, use the latest stable credentials artifacts. Google’s Sign in with Google page currently shows `1.7.0-alpha03` in samples; the stable line as of July 29, 2026 is `1.6.0`. Pin what your project already tests, then add the Google ID helper.

```kotlin
dependencies {
    implementation("androidx.credentials:credentials:1.6.0")
    implementation("androidx.credentials:credentials-play-services-auth:1.6.0")
    implementation("com.google.android.libraries.identity.googleid:googleid:1.1.1")
}
```

Create the manager once with an application or activity context:

```kotlin
val credentialManager = CredentialManager.create(context)
```

Use an **activity** context when you call `getCredential()`. Framework UI must attach to a visible activity. Application context can leave the bottom sheet in an undefined state.

## Create the Google ID request

`GetGoogleIdOption` drives the bottom-sheet flow. Set `setFilterByAuthorizedAccounts(true)` first so returning users only see accounts they already used in your app. If that request throws `NoCredentialException`, retry with `false` so the user can pick a new Google account.

```kotlin
fun buildGoogleIdOption(
    filterAuthorized: Boolean,
    webClientId: String,
    nonce: String,
): GetGoogleIdOption {
    return GetGoogleIdOption.Builder()
        .setFilterByAuthorizedAccounts(filterAuthorized)
        .setServerClientId(webClientId)
        .setAutoSelectEnabled(true)
        .setNonce(nonce)
        .build()
}
```

`setServerClientId` must be the **Web** client ID, not the Android client ID. Generate a nonce per attempt. Hash it with SHA-256 if your backend expects a hashed nonce in the ID token.

Wrap the option in `GetCredentialRequest`:

```kotlin
val request = GetCredentialRequest.Builder()
    .addCredentialOption(googleIdOption)
    .build()
```

You can add `GetPasswordOption` and `GetPublicKeyCredentialOption` to the same request if you also accept passwords or passkeys.

## Launch sign-in from Compose

Keep the network and Credential Manager work in a ViewModel or use case. The composable only holds a button and collects UI state.

```kotlin
@Composable
fun GoogleSignInButton(
    onClick: () -> Unit,
    enabled: Boolean,
) {
    Button(
        onClick = onClick,
        enabled = enabled,
    ) {
        Text("Sign in with Google")
    }
}
```

In the ViewModel:

```kotlin
suspend fun signIn(activity: Activity) {
    val option = buildGoogleIdOption(
        filterAuthorized = true,
        webClientId = BuildConfig.WEB_CLIENT_ID,
        nonce = createNonce(),
    )
    val request = GetCredentialRequest(listOf(option))
    try {
        val result = credentialManager.getCredential(
            context = activity,
            request = request,
        )
        handleSignIn(result)
    } catch (e: NoCredentialException) {
        retryWithoutFilter(activity)
    } catch (e: GetCredentialException) {
        _error.value = e.errorMessage
    }
}
```

Call `signIn()` from a coroutine scope tied to the composition. Pass `LocalContext.current` only after you confirm it is an `Activity` (or wrap it with `findActivity()`).

Google also documents `GetSignInWithGoogleOption` for a dedicated branded button. Use that when product design requires the official Sign in with Google button instead of the multi-credential bottom sheet.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/FULNucVxf94"
    title="Save User Credentials With the Google Credential Manager - Android Studio Tutorial"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Parse the Google ID token

A successful `GetCredentialResponse` holds a `CustomCredential` whose type is `GoogleIdTokenCredential.TYPE_GOOGLE_ID_TOKEN_CREDENTIAL`.

```kotlin
fun handleSignIn(result: GetCredentialResponse) {
    val credential = result.credential
    when (credential) {
        is CustomCredential -> {
            if (credential.type == GoogleIdTokenCredential.TYPE_GOOGLE_ID_TOKEN_CREDENTIAL) {
                val googleId = GoogleIdTokenCredential.createFrom(credential.data)
                sendIdTokenToBackend(googleId.idToken)
            }
        }
        else -> error("Unexpected credential type")
    }
}
```

Send `idToken` to your backend. Verify the token with Google’s tokeninfo endpoint or a server library. Do not treat the client-side email as proof of identity.

## Handle errors you will actually see

Google’s troubleshooting guide lists the cases that show up in production:

- `GetCredentialCancellationException` — the user closed the sheet.
- `NoCredentialException` — no matching account; retry without the authorized-account filter or offer create-account.
- `GetCredentialInterruptedException` — retry the same request.
- `TransactionTooLargeException` on Android 14+ with several Google accounts — update Play services to 24.40 or later.

Log `e.type` for custom exceptions from third-party SDKs. Do not show raw exception strings in the UI.



![Padlock on a wooden desk representing account security](https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80)



## Sign out the right way

After the user signs out of your app, clear Credential Manager state so the next launch does not auto-select the previous account.

```kotlin
suspend fun signOut() {
    credentialManager.clearCredentialState(
        ClearCredentialStateRequest()
    )
}
```

This notifies every credential provider that the session for your package should reset. It does not delete the Google account from the device.

## Tips that keep the flow stable

Use activity context for every `getCredential` and `createCredential` call. Store the Web client ID in BuildConfig or a secrets plugin; never hard-code it in a public gist with a production project.

Enable `setAutoSelectEnabled(true)` only when a single authorized credential exists. Auto-select on a shared family tablet surprises people.

If you also collect passwords, link the same `GetCredentialRequest` to username and password fields so keyboard autofill can recover after the user dismisses the sheet. That pairing is documented for Android 15 with `androidx.credentials` 1.5 and later.

Test on a device with two Google accounts, a device with none, and an emulator image without Play services. The Play services auth artifact is what keeps the flow alive on Android 13 and below.

## Conclusion

Sign in with Google in Compose is a thin wrapper around Credential Manager. Add the Jetpack artifacts, build `GetGoogleIdOption` with your Web client ID, call `getCredential` from an activity, and parse `GoogleIdTokenCredential`. Clear state on sign-out and keep passkeys on the same request when you are ready to drop passwords.

Start with the authorized-account filter, add a fallback request, and verify tokens on the server. That is the full official path.

## Sources

- [About Credential Manager](https://developer.android.com/identity/credential-manager)
- [Implement Sign in with Google](https://developer.android.com/identity/sign-in/credential-manager-siwg-implementation)
- [androidx.credentials releases](https://developer.android.com/jetpack/androidx/releases/credentials)
- [Troubleshoot Credential Manager errors](https://developer.android.com/identity/sign-in/credential-manager-troubleshooting-guide)
- [What’s new in Jetpack Compose August 2026](https://android-developers.googleblog.com/2026/08/jetpack-compose-august-2026-release.html)
