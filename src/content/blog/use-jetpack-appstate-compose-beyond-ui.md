---
title: "How to Use Jetpack AppState for Compose State Beyond the UI"
description: "Step-by-step guide to Jetpack AppState Transform and StateStore for sharing reactive Compose state outside the UI in Android apps."
pubDate: 2026-10-31T16:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "how-to"]
noindex: false
---

Jetpack AppState brings Compose's reactive State model outside the UI hierarchy. Announced at Android Dev Summit on October 28, 2026, the alpha libraries let you run headless compositions in ViewModels, repositories, or services and share typed state across app components.

This guide shows how to add Transform and StateStore, create reactive transforms, and persist shared state with DataStore. The examples follow the official documentation and samples.

## Why AppState matters

Compose already tracks state reads and recomposes when values change. AppState extends that same tracking to non-UI code. You avoid writing custom Flow combinations or manual observers for derived values that depend on multiple sources.

Transform runs a `@Composable` block in a CoroutineScope and exposes the result as `State`. StateStore holds type-safe keys that any component can read or write as Compose State. Both work with existing APIs such as `mutableStateOf` and `SavedStateHandle`.

For related agent and Compose workflows, see the guide on [Bring Your Own Agent in Android Studio Rabbit 2](/blog/android-studio-byoa-agents-rabbit-2/).


![Android developer working on a laptop with code](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)


## Add the dependencies

AppState requires the Compose compiler plugin because Transform uses `@Composable` blocks. Declare versions in `libs.versions.toml`:

```toml
[versions]
appstate = "1.0.0-alpha01"
kotlin = "2.4.10"

[libraries]
androidx-appstate-transform = { module = "androidx.appstate.transform:transform", version.ref = "appstate" }
androidx-appstate-statestore = { module = "androidx.appstate.statestore:statestore", version.ref = "appstate" }
androidx-appstate-statestore-datastore = { module = "androidx.appstate.statestore:statestore-datastore", version.ref = "appstate" }
```

In the module `build.gradle.kts` enable Compose and add the artifacts:

```kotlin
plugins {
    alias(libs.plugins.compose.compiler)
    alias(libs.plugins.jetbrains.kotlin.serialization) // only if using DataStore persistence
}

android {
    buildFeatures {
        compose = true
    }
}

dependencies {
    implementation(libs.androidx.appstate.transform)
    implementation(libs.androidx.appstate.statestore)
    implementation(libs.androidx.appstate.statestore.datastore)
    implementation(libs.kotlinx.serialization.core)
    testImplementation(libs.androidx.appstate.transform.testing)
}
```

Sync the project. The libraries are available on Google Maven as of the October 28 alpha release.

## Create a reactive transform

The `transform` function takes an initial value, a scope, and a `@Composable` block. Any State or Flow read inside the block is tracked. When those values change the block recomposes and the returned State updates.

Example of debounced search that lives outside a composable:

```kotlin
var query by mutableStateOf("")

val searchResults: State<List<String>> = transform(
    initialValue = emptyList(),
    scope = viewModelScope
) {
    var results by remember { mutableStateOf(emptyList<String>()) }
    LaunchedEffect(query) {
        if (query.isBlank()) {
            results = emptyList()
            return@LaunchedEffect
        }
        delay(300.milliseconds)
        results = api.search(query)
    }
    results
}
```

The block receives the previous output as its parameter. You can return the previous value to avoid flashing a loading state. Inside a composable you can use the `@Composable` overload that remembers its own scope.

Use `listener` when you only need side effects and do not want a derived State. It runs a composable block until the calling coroutine is cancelled and recomposes on any state change.

## Combine sources in a ViewModel

Transform works well for UI state that depends on multiple repositories or monitors. Because tracking is dynamic, only the active branch is observed.

```kotlin
class HomeViewModel(
    private val mediaRepository: MediaRepository,
    private val networkMonitor: NetworkMonitor
) : ViewModel() {
    val uiState: State<HomeUiState> = transform(
        initialValue = HomeUiState.Loading,
        scope = viewModelScope
    ) {
        val isOnline by networkMonitor.isOnline
        val tracks = if (isOnline) {
            mediaRepository.allTracksFlow.collectAsState(initial = null).value
        } else {
            mediaRepository.downloadedTracksFlow.collectAsState(initial = null).value
        } ?: return@transform HomeUiState.Loading

        HomeUiState.Success(tracks = tracks, isOnline = isOnline)
    }
}
```

UI composables simply read `uiState.value`. No extra Flow collection is required in the composable tree.


![Close-up of code on a computer screen](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)


## Share state with StateStore

StateStore is a type-safe container. Define keys that implement the expected serialization when you want persistence.

```kotlin
val stateStore = StateStore()

// Read
val session: State<FocusSession> = stateStore.getState(FocusSessionKey)

// Write
stateStore.setState(FocusSessionKey, FocusSession.Running(...))
```

Any component that holds a reference to the same StateStore instance sees updates as Compose State. This is useful for session data that multiple activities or services need.

## Persist with DataStore

Add the DataStore artifact and call `syncToDataStore` from a long-lived scope. The integration handles write and restore for keys that are serializable.

```kotlin
class MyApplication : Application() {
    val stateStore = StateStore()
    private val scope = CoroutineScope(SupervisorJob() + Dispatchers.Default)

    override fun onCreate() {
        super.onCreate()
        scope.launch {
            stateStore.syncToDataStore(
                dataStoreFile("settings").absolutePath,
                this
            )
        }
    }
}
```

Mark your key types `@Serializable`. The library uses Kotlin serialization under the hood.

## Test transforms

The testing artifact supplies `transformTest` and `TransformTestScope`. You can advance virtual time, assert intermediate values, and verify that effects cancel correctly when inputs change.

## Tips for production use

- Tie the CoroutineScope to the component lifetime (`viewModelScope`, process scope, or a service scope). Cancelled scopes stop the composition.
- Prefer `derivedStateOf` for pure synchronous calculations that do not need collectAsState or LaunchedEffect.
- Keep transform blocks focused. Move heavy pure functions outside so recomposition stays cheap.
- Use the official recipes repository (github.com/android/appstate-recipes) for patterns that cover multi-window and form-factor state.

## Conclusion

Jetpack AppState lets you treat Compose State as a general reactive primitive rather than a UI-only tool. Transform replaces many custom Flow pipelines with readable composable logic. StateStore gives a single typed place to share values across components and persist them with DataStore.

Start with one ViewModel that currently combines several Flows. Replace the combination with a transform and observe the simpler code. The alpha is stable enough for experimentation; report issues through the Transform and StateStore trackers linked from the documentation.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/69QYEXymfVo"
    title="Take Compose state beyond the UI with Jetpack AppState"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- [AppState overview](https://developer.android.com/topic/libraries/architecture/appstate) (Android Developers, updated 28 Oct 2026)
- [Transform guide](https://developer.android.com/topic/libraries/architecture/appstate/transform) (Android Developers)
- [Android Dev Summit 2026 keynote](https://www.youtube.com/watch?v=8Lmv7LGgL4E) and session on AppState
- [AppState recipes repository](https://github.com/android/appstate-recipes)
