---
title: "Navigation 3 Deep Link Setup Guide for Android Devs"
description: "Learn how to add Navigation 3 deep links on Android with DeepLinkRequest, DeepLinkMatcher, intent filters, and a synthetic back stack."
pubDate: 2026-10-06T10:00:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "how-to"]
noindex: false
---

A notification, an email, or a shared product URL should open the right screen, not your home tab. Starting in Navigation 3 version 1.2.0, Android gives you typed APIs for that job: `DeepLinkRequest` models the incoming link, and `DeepLinkMatcher` maps it to a navigation key you can put on the back stack.

Android Developers documented the APIs on September 22, 2026, and announced them on September 30, 2026. This guide walks through the official flow: declare an intent filter, build matchers, match the incoming `Intent`, and restore a sensible back stack.

If you are also exposing app actions to on-device agents, pair this setup with [AppFunctions for Android agents](/blog/android-appfunctions-agents/). Deep links and agent tools both start from a clear destination model.

## What changed in Navigation 3 1.2.0

Navigation 3 already treats destinations as keys instead of a graph XML file. Version 1.2.0 adds deep linking on top of those keys. The runtime artifact is `androidx.navigation3:navigation3-runtime`.

A `DeepLinkRequest` holds a `DeepLinkUri` plus optional `RequestExtras`. Those extras can carry the intent action, a MIME type, or your own typed values. A `DeepLinkMatcher` accepts that request and returns a match result with a key, or null if it does not fit.

The library ships three built-in matchers:

- `StaticKeyDeepLinkMatcher` for links that need no path arguments.
- `UriDeepLinkMatcher` for hierarchical URI patterns such as `www.example.com/users/{id}`.
- `BackStackMatcher`, usually applied with `withBackStack`, so a match can rebuild the screens the user would have seen on the way in.

You can still write a custom matcher when those three do not cover the case, such as a `tel:` link.

![Android phone showing an app home screen on a desk](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## Step 1: Declare the links your app will open

The system will not deliver a URL to your activity until the manifest says you want it. Add an `<intent-filter>` on the activity that owns navigation. For a web link, use `ACTION_VIEW`, the `DEFAULT` and `BROWSABLE` categories, and an `https` data element.

```xml
<activity android:name=".MainActivity" android:exported="true">
    <intent-filter>
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

That filter covers `https://www.example.com/users/42`. Use `pathPrefix` when several destinations share a host path, and a full `android:path` when only one route should match. Android App Links add `android:autoVerify="true"` plus a Digital Asset Links file on your domain so the system can open your app without a disambiguation dialog. The Navigation 3 docs point to the standard intent-filter guide for that part. The matcher layer does not replace it.

## Step 2: Model the request

Create a request from a string, a `DeepLinkUri`, or an `Intent`. The Intent constructor is the one you will use in production. It copies `intent.data` into the URI. If they are present, it also stores the action and MIME type in extras, and it saves non-null intent extras as a `SavedState` under `DeepLinkRequest.IntentExtrasKey`.

```kotlin
val request = DeepLinkRequest(intent = intent)
val uri = request.uri
val action = request.extras[DeepLinkRequest.ActionExtrasKey]
```

The official snippets also show helpers for MIME type extras and a `requestExtras { }` DSL when you need a custom key, such as a campaign id. Keep those keys typed by implementing `RequestExtrasKey`. Do not parse the raw URI string in the activity and then parse it again in the composable.

## Step 3: Map URIs to navigation keys

Define one matcher per destination that should be linkable. `StaticKeyDeepLinkMatcher` is enough for a home screen that only needs an action filter. `UriDeepLinkMatcher` takes a pattern and a serializer for the destination key, then extracts path arguments into that key.

```kotlin
val homeMatcher = StaticKeyDeepLinkMatcher(
    HomeKey,
    listOf(DeepLinkMatcher.actionFilter(Intent.ACTION_VIEW))
)

val userProfileMatcher = UriDeepLinkMatcher(
    DeepLinkUri("www.example.com/users/{id}"),
    serializer<UserProfileKey>()
).withBackStack { matchResult ->
    listOf(HomeKey, matchResult.key)
}
```

`withBackStack` is the piece that keeps Up and Back honest. A deep link lands the user on one screen. Android's navigation guidance says that path should still feel like the user walked there. Putting `HomeKey` under the profile key means Back returns to home instead of leaving the app immediately.

Collate matchers in one list. Different generic types need a star projection, which the official sample uses as `List<DeepLinkMatcher<*, *>>`. In a multi-module app you can collect them with multibindings instead of a hand-written list.

![Developer writing Kotlin on a laptop](https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=800&q=80)

## Step 4: Match the intent and build the back stack

Run this in `onCreate`, and again in `onNewIntent` if the activity uses `singleTop` or `singleTask`. A second link into an already running activity arrives through `onNewIntent`, not a fresh `onCreate`.

```kotlin
val request = DeepLinkRequest(intent = intent)
val matchResult = deepLinkMatchers
    .mapNotNull { it.match(request) }
    .maxOrNull()

val backStack: List<NavKey> = when (matchResult) {
    null -> listOf(HomeKey)
    is BackStackMatchResult<*, *> -> {
        @Suppress("UNCHECKED_CAST")
        matchResult.backStack as List<NavKey>
    }
    else -> listOf(matchResult.key as NavKey)
}
```

`match` runs every filter first, then `matchRequest`. `MatchResult` implements `Comparable`, so `maxOrNull()` picks the best hit when more than one matcher accepts the request. A null result should fall back to your start destination. A `BackStackMatchResult` already contains the synthetic stack. Any other result contributes a single key.

Pass that list into your `NavDisplay` back stack. Do not push the deep-link key on top of whatever the user already had open unless the product decision is to keep the old task. Cold start and warm start behave differently. Test both.

## Step 5: Verify with adb before you ship the link

Install a debug build, then fire the same URI the filter claims to handle:

```bash
adb shell am start -a android.intent.action.VIEW \
  -d "https://www.example.com/users/42"
```

Confirm three things. The correct activity starts. The profile key is parsed with id `42`. Back lands on home, not the launcher. Then send a second link while the app is in the foreground and confirm `onNewIntent` updates the stack. Android Developers' deep-link series covers the older filter and App Links model. The matching step above is the Navigation 3-specific piece.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/SCl_rdp0Wik"
    title="Part 2: Deep links from zero to hero"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips that prevent broken links

Keep the manifest host and the matcher pattern in sync. A filter for `www.example.com` and a matcher for `example.com` will open the app and then miss the destination.

Prefer HTTPS App Links for anything you share outside the app. Custom schemes still work for internal notifications, but other apps can claim the same scheme.

Put argument parsing in the serializer and the matcher, not in a composable `LaunchedEffect`. The back stack should already hold a valid key when the first frame draws.

If several matchers can hit the same URI, make the more specific pattern rank higher. Relying on list order alone is brittle once modules register matchers independently.

Handle the no-match case. A stale campaign link should open home, not crash on a missing path segment.

## Conclusion

Navigation 3 1.2.0 splits deep linking into three jobs you can test on their own: the manifest filter, the request built from the `Intent`, and the matcher that returns a key or a synthetic back stack. Start with one HTTPS route, wire `UriDeepLinkMatcher` plus `withBackStack`, and prove it with `adb` before you add the rest of the site map.

## Sources

- Android Developers, Support deep links (Navigation 3), updated September 22, 2026: https://developer.android.com/guide/navigation/navigation-3/deep-links
- Android Developers, Create DeepLinkMatcher instances: https://developer.android.com/guide/navigation/navigation-3/deep-links/create-matchers
- Android Developers, DeepLinkRequest API reference, added in 1.2.0: https://developer.android.com/reference/kotlin/androidx/navigation3/runtime/deeplink/DeepLinkRequest
- Android Developers, DeepLinkMatcher API reference, added in 1.2.0: https://developer.android.com/reference/kotlin/androidx/navigation3/runtime/deeplink/DeepLinkMatcher
- Android Developers on X, September 30, 2026 announcement of Navigation 3 1.2.0 deep linking APIs
- Android Developers, Part 2: Deep links from zero to hero: https://www.youtube.com/watch?v=SCl_rdp0Wik
