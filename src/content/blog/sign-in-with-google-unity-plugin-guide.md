---
title: "Add Sign in with Google to Unity Games: Open-Source Plugin Guide"
description: "Step-by-step guide to integrate Google's open-source Sign in with Google plugin for Unity 6.5 on Android and iOS using Credential Manager and ID tokens."
pubDate: 2026-11-14T14:00:00
heroImage: "https://images.unsplash.com/photo-1646950887163-25b5bff58eed?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "how-to", "google", "developer"]
noindex: false
---

Unity powers over half of all mobile titles worldwide. Players expect a fast sign-in on day one. For years, developers used deprecated sample bridges that broke on modern Gradle and AndroidX pipelines.

On 10 November 2026 Google open-sourced the Sign in with Google Mobile Plugin for Unity. It targets Unity 6.5, uses native bridges only, and returns a signed Google ID token to your C# code. You can hand that token to Firebase, Supabase, Auth0, or your own backend.

This guide walks through setup from Google Cloud credentials to a working sign-in button.

## Why the new plugin matters

Older Google Sign-In Unity samples relied on WebView-style bridges. They conflicted with Android Gradle Plugin updates and required manual manifest edits. The new plugin replaces those with lightweight native code.

On Android it talks to Credential Manager through Kotlin. On iOS it uses GIDSignIn through Objective-C++. Configuration lives inside the Unity Editor under Window > Google Sign-In Native > Settings. No more hand-editing AndroidManifest.xml or Info.plist for the client IDs.

The plugin is backend-agnostic. It never locks you into Firebase. It simply delivers the ID token via events so you decide where it goes.

![Mobile gaming controller attached to a smartphone](https://images.unsplash.com/photo-1793192650086-9d767f1abc06?auto=format&fit=crop&w=800&q=80)

## Prerequisites and Google Cloud setup

You need a Google Cloud project with the OAuth consent screen configured. Scopes should include openid, email, and profile.

Create three credentials:

1. A Web application OAuth client ID. Copy this Web Client ID. It is required for both platforms and becomes the audience claim in the ID token.
2. An Android OAuth client. Use your exact Unity package name and the SHA-1 fingerprint from your keystore (`keytool -list -v -keystore path-to-keystore.keystore`).
3. An iOS OAuth client. Use your bundle ID. Copy the Reversed Client ID (it looks like com.googleusercontent.apps.12345-abc).

Download the latest Firebase config files if you plan to use Firebase Auth later, but the plugin itself does not require them.

## Import and configure the plugin

Download the pre-built `.unitypackage` from the [GitHub releases](https://github.com/googlesamples/siwg-mobile-unity-plugin). In Unity go to Assets > Import Package > Custom Package and import everything.

Install External Dependency Manager for Unity (EDM4U) if it is not already present. Then open Window > Google Sign-In Native > Settings. Paste the Web Client ID and the iOS Reversed Client ID, then click Save Settings.

Force-resolve Android dependencies: Assets > External Dependency Manager > Android Resolver > Force Resolve. This pulls in the googleid and androidx Credential Manager libraries.

Set Minimum API Level to 34 or higher in Player Settings for Android. Match the package name and bundle ID exactly to the ones registered in Google Cloud.

## Wire the manager in your scene

Create an empty GameObject named GoogleSignInManager in your first scene. Attach the GoogleSignInManager.cs script that ships with the plugin. Drag the GoogleSignInNativeSettings asset (under Assets/GoogleSignInNative/Resources) into the Sign In Settings slot.

Write a small controller that listens for the events:

```csharp
using UnityEngine;

public class MyAuthController : MonoBehaviour
{
    private void OnEnable()
    {
        GoogleSignInManager.OnSignInCompleted += HandleSignInSuccess;
        GoogleSignInManager.OnSignInFailed += HandleSignInFailure;
    }

    private void OnDisable()
    {
        GoogleSignInManager.OnSignInCompleted -= HandleSignInSuccess;
        GoogleSignInManager.OnSignInFailed -= HandleSignInFailure;
    }

    public void OnSignInButtonClick()
    {
        GoogleSignInManager.Instance.StartSignIn();
    }

    private void HandleSignInSuccess(string idToken)
    {
        Debug.Log($"[Auth] ID Token received: {idToken.Substring(0, 20)}...");
        // Send idToken to your backend or Firebase
    }

    private void HandleSignInFailure(string error)
    {
        Debug.LogError($"[Auth] Sign-in failed: {error}");
    }
}
```

Call `OnSignInButtonClick` from your UI button.

## Hand the token to a backend

The success callback receives a standard Google ID token. Verify it on the server with Google’s tokeninfo endpoint or a library that checks signature, expiry, and audience.

For Firebase Auth, create a credential and sign in:

```csharp
using Firebase.Auth;
using Firebase.Extensions;

private void HandleSignInSuccess(string idToken)
{
    var auth = FirebaseAuth.DefaultInstance;
    var credential = GoogleAuthProvider.GetCredential(idToken, null);
    auth.SignInAndRetrieveDataWithCredentialAsync(credential)
        .ContinueWithOnMainThread(task =>
        {
            if (task.IsFaulted)
            {
                Debug.LogError(task.Exception);
                return;
            }
            Debug.Log($"Firebase user: {task.Result.User.UserId}");
        });
}
```

The same token works with Supabase, Auth0, or any custom endpoint that accepts a Google ID token. You do not need to change the Unity side when you switch backends.

If you are already using Credential Manager on pure Android Compose projects, see our guide to [Sign in with Google in Jetpack Compose](/blog/compose-credential-manager-google-sign-in/).

## Build and test

On Android, confirm the package name matches the OAuth client and that Play services is present. Build and run on a physical device or an emulator with Google Play.

On iOS, generate the Xcode project, open the `.xcworkspace`, select your team under Signing & Capabilities, and run on a device. The plugin adds the reversed client ID URL scheme automatically.

Test with at least two Google accounts on the device and with an account that has never signed into your app. Also test cancellation and network errors.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/hsJsGuDtAD8"
    title="Unity Gaming Services tutorial series Part 4: Google Play Games login"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for production

Keep the Web Client ID in a ScriptableObject or BuildConfig equivalent; never commit production secrets. Enable only the scopes you need on the consent screen.

If you already have custom Gradle templates, merge the Kotlin version pins the plugin expects. The README on GitHub lists the exact lines for AGP 9 and Kotlin 2.1.

The plugin does not request extra scopes beyond the ID token. If you need Google Drive or other APIs later, request them separately after the user is signed in.

Log only a prefix of the ID token during development. Full tokens should never appear in production logs.

![Laptop displaying code on a desk](https://images.unsplash.com/photo-1756946565798-382eb6bfeda2?auto=format&fit=crop&w=800&q=80)

## Conclusion

The open-source Sign in with Google plugin removes the last friction from native Google authentication in Unity 6.5 games. Import the package, paste two client IDs in the editor, attach the manager, and subscribe to the ID-token event. From there you own the backend choice.

Download the plugin from the official GitHub repository, register your OAuth clients, and ship a passwordless sign-in that works on both Android and iOS.

## Sources

- [Powering Seamless Player Sign-In: Introducing the Open-Source Sign in with Google Plugin for Unity](https://developer.android.com/blog/posts/open-source-google-sign-in-unity)
- [googlesamples/siwg-mobile-unity-plugin on GitHub](https://github.com/googlesamples/siwg-mobile-unity-plugin)
- [Authenticate Using Google Sign-In and Unity (Firebase)](https://firebase.google.com/docs/auth/unity/google-signin)
