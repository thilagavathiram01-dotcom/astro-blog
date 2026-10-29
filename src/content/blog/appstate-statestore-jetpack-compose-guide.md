---
title: "How to Hoist State with Jetpack AppState StateStore"
description: "Learn how to use the new AppState StateStore alpha library to hoist Compose snapshot state to the application layer with DataStore persistence."
pubDate: 2026-10-29T15:30:00
heroImage: "https://images.unsplash.com/photo-1753715613457-63127ec40824?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "how-to"]
noindex: false
---

AppState arrived in alpha at Android Dev Summit on October 28, 2026. It brings the Compose runtime outside the UI hierarchy so you can hoist snapshot state into the application layer and persist it with DataStore. This guide shows the practical steps to add StateStore, sync it, and pair it with Transform for headless compositions.

Developers who already use `remember` and ViewModels for screen-level state now have a Compose-first option for longer-lived data that must survive configuration changes and process death without custom SavedStateHandle wiring.

## What AppState Provides

AppState consists of two related libraries released as `1.0.0-alpha01`:

- **StateStore** (`androidx.appstate.statestore`) – a wrapper that lets you hoist Compose snapshot state into an application-scoped object and optionally sync it to DataStore.
- **Transform** (`androidx.appstate.transform`) – runs a composition outside any UI hierarchy so reactive logic produces a continuously updated `State` object.

Both build directly on the Compose runtime. They complement (they do not replace) ViewModels or `rememberSaveable`.

## Add the Dependencies

In your module’s `build.gradle.kts` (or Groovy equivalent), add:

```kotlin
dependencies {
    implementation("androidx.appstate.statestore:statestore:1.0.0-alpha01")
    implementation("androidx.appstate.statestore:statestore-android:1.0.0-alpha01")
    implementation("androidx.appstate.statestore:statestore-datastore:1.0.0-alpha01")
    implementation("androidx.appstate.statestore:statestore-datastore-android:1.0.0-alpha01")
}
```

Google Maven is required. The multiplatform artifacts exist if you target Desktop, iOS, or JS, but the DataStore integration is Android-only.

## Create and Sync a StateStore

Place a single `StateStore` in your `Application` subclass so it outlives activities and fragments.

```kotlin
class MyApplication : Application() {
    val stateStore = StateStore()
    private val scope = CoroutineScope(SupervisorJob() + Dispatchers.Default)

    override fun onCreate() {
        super.onCreate()
        scope.launch {
            launch {
                try {
                    stateStore.syncToDataStore(
                        dataStoreFile("settings").absolutePath,
                        this
                    )
                } catch (e: Exception) {
                    e.printStackTrace()
                }
            }
        }
    }
}
```

`syncToDataStore` starts a listener that keeps the in-memory snapshot and the on-disk file in sync. Use a child coroutine so the outer scope stays free. Expose the `stateStore` instance through a custom `Application` accessor or a simple singleton holder so ViewModels and composables can reach it.

![Developer working at dual monitors with code](https://images.unsplash.com/photo-1730130054404-c2bd8e7038c2?auto=format&fit=crop&w=800&q=80)

## Hoist Snapshot State

Once the store is running, move state that previously lived only inside `remember` blocks into the store. The library treats Compose `MutableState` values as the source of truth and keeps them alive outside any composition. Read and update them from ViewModels, background work, or other processes; the UI observes the same objects and recomposes automatically.

For adaptive apps that must preserve window size class, navigation state, or user preferences across device configurations, the official announcement notes that AppState supplies “Compose-first architecture building blocks that devs and AI agents can use to preserve state across device configurations.”

## Run Headless Compositions with Transform

When you need derived state that updates whenever source state changes, but the calculation should not live inside a UI composition, use Transform:

```kotlin
var sourceState by mutableStateOf(0)

val derived = transform(
    initialValue = 0,
    scope = myCoroutineScope
) {
    // recomputes whenever sourceState changes
    sourceState * 2
}
```

You can also create a `TransformScope` and call `launchTransform` if you prefer explicit control. A companion `transformTest` API exists for unit tests. This pattern is useful for background calculations, agent-driven logic, or multi-platform shared code that still needs Compose’s reactivity.

![Hands taking notes beside code on screen](https://images.unsplash.com/photo-1753715613831-9e48eac86813?auto=format&fit=crop&w=800&q=80)

## Practical Tips

- Start with a single `StateStore` at the Application level. Multiple stores are possible, but one simplifies persistence and testing.
- Keep the store’s scope on `Dispatchers.Default` (or a custom dispatcher) so disk I/O never blocks the main thread.
- Combine with the existing A2UI renderer when agents need both interactive UI and durable application state. See the [A2UI Jetpack Compose guide](/blog/a2ui-jetpack-compose-agent-ui-guide/) for the complementary UI side.
- Because the library is alpha, pin the exact version and watch the Issue Tracker for breaking changes.
- For configuration-change survival of pure UI element state, continue using `rememberSaveable` or `SavedStateHandle`; reserve AppState for data that must outlive the UI hierarchy.

## Conclusion

AppState StateStore and Transform give Android developers a direct way to lift Compose snapshot state out of individual composables and into the application layer, with optional DataStore persistence and headless recomposition. The alpha release from Android Dev Summit 2026 is ready for experimentation in apps that need durable, reactive state across form factors and agent workflows. Add the dependencies, create the store in your Application class, sync it once, and start hoisting the pieces that previously lived only inside `remember`.

Sources:
- [Appstate Statestore release notes](https://developer.android.com/jetpack/androidx/releases/appstate-statestore)
- [Agentic and Flexible: A next era of Android development](https://developer.android.com/blog/posts/build-it-your-way-a-next-era-of-android-development)
- [Appstate Transform release notes](https://developer.android.com/jetpack/androidx/releases/appstate-transform)

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/w-auFZP5gJo"
    title="The latest in Android dev tools from Android Dev Summit 2026"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
