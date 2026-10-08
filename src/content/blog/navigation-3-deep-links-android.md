---
title: "How to Set Up Navigation 3 Deep Links on Android"
description: "Add Navigation 3 deep links on Android with DeepLinkRequest, DeepLinkMatcher, intent filters, and a matched back stack."
pubDate: 2026-10-08T09:30:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "developer", "how-to"]
noindex: false
---

A notification, a shared link, or a web URL should open the right screen, not the home tab. Starting in Navigation 3 version 1.2.0, Android gives you that path with two types: `DeepLinkRequest` and `DeepLinkMatcher`. This guide walks through the official flow: declare the URIs your app accepts, map them to navigation keys, then match the incoming intent and rebuild the back stack.

Navigation 3 already treats the back stack as a list of keys you own. Deep links fit that model. You do not hand the library a navigation graph XML file and hope the destination id matches. You write matchers that return keys, then you place those keys on the stack yourself.

![Android phone showing an app home screen on a desk](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## What shipped in Navigation 3 1.2.0

The Android Developers guide for Navigation 3 deep links says support starts in version 1.2.0. A `DeepLinkRequest` holds a `DeepLinkUri` plus optional `RequestExtras`, such as the intent action or MIME type. A `DeepLinkMatcher` turns a matching request into a navigation key you can add to the back stack.

The library ships three built-in matchers:

- `UriDeepLinkMatcher` for pattern-based URI matching, including path placeholders such as `{id}`.
- `StaticKeyDeepLinkMatcher` for links that always land on one key and do not extract arguments.
- `BackStackMatcher` for synthetic back stacks, so a profile link can sit above Home instead of replacing it.

You can also write a custom matcher when those three do not cover the URI shape. `MatchResult` implements `Comparable`, so if several matchers accept the same request you can pick the best one with `maxOrNull()`.

The artifact that contains these types is `androidx.navigation3:navigation3-runtime`. Confirm 1.2.0 or newer in your version catalog before you import `androidx.navigation3.runtime.deeplink`.

## Step 1: Declare the intent filter

The system will not deliver a link to your activity until the manifest says you want it. Add an `intent-filter` on the activity that owns the back stack. A typical App Link filter looks like this:

```xml
<activity
    android:name=".MainActivity"
    android:launchMode="singleTop"
    android:exported="true">
    <intent-filter android:autoVerify="true">
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data
            android:scheme="https"
            android:host="www.example.com"
            android:pathPrefix="/users" />
    </intent-filter>
</activity>
```

`singleTop` matters. If the app is already open, Android delivers the new link through `onNewIntent` instead of creating a second activity. Handle both entry points, or the second tap on a notification will do nothing.

Verified App Links also need a Digital Asset Links file on the host. The filter only declares interest. Verification is a separate step in the App Links docs, and it is what keeps a browser from showing a disambiguation dialog.

## Step 2: Build a DeepLinkRequest

You can construct a request from a string URI, from a `DeepLinkUri`, or from an Android `Intent`. The intent constructor is the one you want in an activity. Official behavior is:

- The URI comes from `intent.data`.
- If present, the action and MIME type are stored as extras.
- Non-null intent extras are saved as a `SavedState` under `DeepLinkRequest.IntentExtrasKey`.
- Any extras you pass in are added on top.

```kotlin
val request = DeepLinkRequest(intent = intent)
val uri = request.uri
val action = request.extras[DeepLinkRequest.ActionExtrasKey]
```

For tests, or for links you synthesize inside the app, a string is enough:

```kotlin
val request = DeepLinkRequest(uri = "https://www.example.com/users/42")
```

Typed extras use `RequestExtrasKey`. The library already defines keys for MIME type and, on Android, the intent action. You can add your own, such as a campaign id, with `requestExtras { put(CampaignIdExtrasKey, "spring_promo") }`. Empty extras come from `emptyRequestExtras()`, and you can combine maps with `+`.

![Developer reviewing mobile app code on a laptop](https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=800&q=80)

## Step 3: Map URIs to navigation keys

A matcher does not navigate. It returns a key, or a stack of keys. Keep keys as the same serializable types you already use with Navigation 3.

A static home link does not need path arguments:

```kotlin
val homeMatcher = StaticKeyDeepLinkMatcher(
    HomeKey,
    listOf(DeepLinkMatcher.actionFilter(Intent.ACTION_VIEW))
)
```

A profile link extracts an id and should not wipe the stack. The guide pairs `UriDeepLinkMatcher` with `withBackStack`:

```kotlin
val userProfileMatcher = UriDeepLinkMatcher(
    DeepLinkUri("www.example.com/users/{id}"),
    serializer<UserProfileKey>()
).withBackStack { matchResult ->
    listOf(HomeKey, matchResult.key)
}
```

Collate matchers into one list. Different key types force a star projection, `List<DeepLinkMatcher<*, *>>`. That is expected. You cast the resulting key or back stack back to `NavKey` at the boundary, which is the pattern in the official sample.

If modules own their own destinations, the modularize guide shows multibindings so each feature contributes matchers without the activity listing them by hand.

## Step 4: Match and replace the back stack

In `onCreate` and `onNewIntent`, build the request, match it, and choose a stack:

```kotlin
override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    val request = DeepLinkRequest(intent = intent)
    val matchResult = deepLinkMatchers
        .mapNotNull { it.match(request) }
        .maxOrNull()

    val backStack: List<NavKey> = when (matchResult) {
        null -> listOf(HomeKey)
        is BackStackMatchResult<*, *> ->
            matchResult.backStack as List<NavKey>
        else -> listOf(matchResult.key as NavKey)
    }
    // Hand backStack to your Navigation 3 state holder.
}
```

`maxOrNull()` works because `MatchResult` is comparable. A more specific URI pattern should outrank a broad prefix. If nothing matches, fall back to Home rather than leaving the stack empty.

Call `setIntent(intent)` inside `onNewIntent` before you build the request, so later reads of `getIntent()` see the link that just arrived.

## Tips that prevent broken links

Test with `adb shell am start -a android.intent.action.VIEW -d "https://www.example.com/users/42"` while the app is cold and while it is already resumed. Those are different code paths.

Keep the manifest `pathPrefix` and the matcher pattern in sync. A filter that accepts `/users` and a matcher that only accepts `/user/{id}` will open the app and then dump the user on Home.

Do not parse the URI yourself and also run a matcher. One path should own argument extraction, or you will fix the same off-by-one bug twice.

If agents or Gemini Intelligence call into your app, deep links are still the right entry for content. Action-style calls belong on App Functions. The setup for that surface is covered in [how Android apps expose tools to on-device agents](/blog/android-appfunctions-agents/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/XJgPIeolJu8"
    title="Navigation: Deep links - MAD Skills"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

The MAD Skills episode above is the older Navigation component, not Navigation 3. It is still the clearest official walkthrough of why implicit links exist: a notification or shortcut should land on a destination without a chain of taps. Navigation 3 keeps that goal and replaces the graph-based destination id with matchers and keys.

## What a finished link looks like

A working setup has four pieces. The manifest filter names the scheme, host, and path. `singleTop` plus `onNewIntent` covers a running app. One matcher per destination returns a key, and profile-style links use `withBackStack` so Back returns Home. Unmatched requests fall back to a default stack instead of crashing.

Ship the matcher next to the key it produces. When a route changes, the person editing the key is the person who should edit the pattern. That is the practical win over a central XML graph: the link definition lives with the screen.

## Sources

- Android Developers, Support deep links (Navigation 3): https://developer.android.com/guide/navigation/navigation-3/deep-links
- Android Developers, Create DeepLinkMatcher instances: https://developer.android.com/guide/navigation/navigation-3/deep-links/create-matchers
- Android Developers, DeepLinkRequest API reference: https://developer.android.com/reference/kotlin/androidx/navigation3/runtime/deeplink/DeepLinkRequest
- Android Developers on X, Navigation 3 1.2.0 deep linking announcement, 30 September 2026: https://x.com/AndroidDev/status/2105326809101336672
- Android Developers, Navigation: Deep links (MAD Skills): https://www.youtube.com/watch?v=XJgPIeolJu8
