---
title: "How to Use Keyed SideEffect in Jetpack Compose 1.12"
description: "Upgrade to Compose BOM 2026.08.00 and fire one-shot SideEffect keys instead of LaunchedEffect when you only need to publish state."
pubDate: 2026-09-20T14:00:00
heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "developer"]
noindex: false
---

Jetpack Compose 1.12 ships a keyed overload of `SideEffect`. Use it when you need to publish Compose state to an analytics SDK, a logger, or another object that lives outside composition, and you do not need a coroutine or a dispose block.

The August 2026 Compose release notes state that keyed `SideEffect` can run up to 90 percent faster than `LaunchedEffect` and about 20 percent faster than `DisposableEffect` for that narrow job. This guide shows how to add the BOM, write the new call, and avoid the timing trap the same post warns about.

## What changed in Compose 1.12

Before 1.12, `SideEffect { }` ran after every successful recomposition. That is still true for the no-key overload. The new overloads take `key1`, `key1` plus `key2`, `key1` plus `key2` plus `key3`, or a `vararg` of keys.

The API reference is explicit: when a keyed `SideEffect` recomposes, the effect runs only if the key differs from the previous value. The unkeyed form still runs on every successful composition.

That is the contract you want for screen analytics. Log once when `userId` or `screenName` changes. Do not log again because an animation tick recomposed the same screen.

![Laptop with Android code on a wooden desk](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## Upgrade the project first

Compose 1.12 lives in Compose BOM `2026.08.00`. The official August 2026 blog post from Nick Butcher lists two breaking requirements:

1. `compileSdk` moves to API 37.
2. You need a minimum Android Gradle Plugin of 9.1.1.

In the app module:

```kotlin
implementation(platform("androidx.compose:compose-bom:2026.08.00"))
implementation("androidx.compose.runtime:runtime")
implementation("androidx.compose.ui:ui")
```

Confirm the mapping on the [Compose BOM mapping](https://developer.android.com/develop/ui/compose/bom/bom-mapping) page before you ship. While you are in the same file, replace deprecated `Modifier.onFirstVisible()` with `Modifier.onVisibilityChanged()`.

If you already added [mesh gradients from Compose 1.12](/blog/compose-1-12-mesh-gradients/), keep that painter work on a separate branch of the pull request. The runtime change does not depend on `MeshGradientPainter`.

## Write a keyed analytics tracker

The sample in the August 2026 release post is the right shape:

```kotlin
@Composable
fun AnalyticsTracker(userId: String, screenName: String) {
    SideEffect(key1 = userId, key2 = screenName) {
        analytics.logScreenView(userId, screenName)
    }
}
```

Call it from the screen composable after you have a stable `userId`. Pass primitive keys or data-class copies that implement `equals`. Do not pass a new object instance on every composition or the effect will fire every frame.

The older pattern from the side-effects guide still works when the property must refresh on every successful composition:

```kotlin
SideEffect {
    analytics.setUserProperty("userType", user.userType)
}
```

Use that unkeyed form only when the external object must match the latest composition every time. Prefer keys when the work is a one-shot publish.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/89UusPuz8q4"
    title="What’s new in Jetpack Compose"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Know when not to migrate

Google’s release notes add a timing warning. `SideEffect` runs its block before `DisposableEffect` and `LaunchedEffect`. `LaunchedEffect` work that must start after the current frame completes will change behavior if you swap APIs blindly.

Keep `LaunchedEffect` when you need:

- A coroutine (`delay`, a network call, collecting a flow)
- Automatic cancellation when the composable leaves the tree or the key changes

Keep `DisposableEffect` when you need:

- A listener registration with an `onDispose` teardown
- A sensor or broadcast receiver that must unregister

Keyed `SideEffect` is for publishing already-known values. It is not a job scheduler.

## Pair it with deferred two-stage motion

The same 1.12 drop graduates `DeferredTargetAnimation` and adds `DeferredAnimatedContent` plus `DeferredAnimatedVisibility`. Those composables cover a different problem: a gesture owns the first part of a transition, then the engine takes over with velocity transfer.

A predictive-back sketch from the official post looks like this:

```kotlin
val state = remember { DeferredTransitionState(initialScreen) }
val transition = rememberDeferredTransition(state)

if (predictiveBackInProgress) {
    state.defer(targetScreen)
} else {
    state.animateTo(targetScreen)
}

transition.DeferredAnimatedContent(
    targetState = targetScreen,
    mutableTransformSpec = {
        MutableContentTransform {
            initialContentTransform { scale = swipeProgress }
        }
    }
) { screen ->
    ScreenContent(screen)
}
```

Do not log analytics from inside the `mutableTransformSpec`. Drive the animation from the gesture, and keep `SideEffect` at the screen boundary with keys for `screen` identity.

![Close-up of code on a monitor in a dim room](https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80)

## Test the effect without flaky clocks

Compose 1.12 also adds test helpers aimed at animation loops: `hasPendingWork` and `runWithoutImplicitWait`. Use them when you step the clock yourself.

```kotlin
@Test
fun logsOnceWhenScreenChanges() {
    composeTestRule.setContent {
        AnalyticsTracker(userId = "u1", screenName = "Home")
    }
    composeTestRule.waitForIdle()
    // Assert the analytics fake received one Home event.
}
```

Do not advance the clock to “wait out” a keyed `SideEffect`. The block runs when composition applies, not on a dispatcher delay. If a test only fails when you tap a second screen, the key is working.

`runWithoutImplicitWait` is most useful when you query several nodes in one frozen frame. The release post notes that it avoids redundant sync on every query.

## Practical checklist

1. Bump the Compose BOM to `2026.08.00` and set `compileSdk` 37 with AGP 9.1.1 or newer.
2. Find `LaunchedEffect(userId, screenName)` blocks that only call a logger.
3. Replace those with `SideEffect(key1 = userId, key2 = screenName)`.
4. Leave network and listener code on `LaunchedEffect` or `DisposableEffect`.
5. Confirm keys are stable values, not new list instances.
6. Run the screen-change test once with the analytics fake.

If a screen logs twice on first open, a parent is passing a changing key. Print the keys in debug and look for a timestamp or a random UUID created in the composable body.

## Limits you should expect

- Keys compare with `equals`. Data classes work. Lambdas do not.
- The effect still runs only after a successful composition. Discarded optimistic recompositions do not publish.
- There is no `onDispose` counterpart on `SideEffect`. You cannot unregister here.
- Wide Color Gamut paint, mesh gradients, and Grid named areas are separate 1.12 features. They do not change when `SideEffect` fires.

Startup time in this release is a separate claim. Google says Time to Initial Display in its hero benchmark is now comparable to Views. That is a framework result, not something keyed `SideEffect` invents in your app.

## Conclusion

Treat keyed `SideEffect` as a cheap publish hook. Point it at analytics, feature flags, or a third-party SDK that must see the latest user and screen. Keep coroutines and teardown on the older effect APIs.

Upgrade the BOM, swap the one-shot loggers, and read the timing note once so you do not move a `LaunchedEffect` that waited for the next frame. The rest of Compose 1.12 — mesh paint, P3 color, Credential Manager semantics — can land in later diffs.

## Sources

- [What's new in the Jetpack Compose August '26 release](https://android-developers.googleblog.com/2026/08/jetpack-compose-august-2026-release.html) — Android Developers Blog
- [SideEffect API reference](https://developer.android.com/reference/kotlin/androidx/compose/runtime/SideEffect.composable)
- [Side-effects in Compose](https://developer.android.com/develop/ui/compose/side-effects)
- [Compose BOM mapping](https://developer.android.com/develop/ui/compose/bom/bom-mapping)
- [Set up Compose dependencies and compiler](https://developer.android.com/develop/ui/compose/setup-compose-dependencies-and-compiler#agp-compatibility)
- [What’s new in Jetpack Compose (YouTube)](https://www.youtube.com/watch?v=89UusPuz8q4) — Android Developers
