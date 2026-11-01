---
title: "Adaptive List-Detail Layouts with Navigation 3"
description: "Build multi-pane list-detail UIs with Navigation 3 Scenes and Material Adaptive for Googlebook, foldables, and tablets from one codebase."
pubDate: 2026-11-01T10:00:00
heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "how-to", "developer"]
noindex: false
---

Android apps now run on phones, foldables, tablets, and Googlebook laptops. A single-pane phone layout wastes space on larger screens. Navigation 3 solves this with Scenes that display multiple destinations at once.

This guide shows how to implement an adaptive list-detail layout using the Material Adaptive `ListDetailSceneStrategy`. The same code works on compact phones and expands to side-by-side panes on medium and expanded windows.

![Laptop showing code on a desk](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## Why Navigation 3 Scenes Matter

Earlier Navigation libraries showed only the top destination. Adaptive layouts required custom logic or separate scaffolds. Navigation 3 treats the back stack as a list you own. `NavDisplay` renders entries, and Scene strategies decide how many of them appear together.

`ListDetailSceneStrategy` from `androidx.compose.material3.adaptive:adaptive-navigation3` watches window size. On narrow windows it shows one pane. On wider windows it places list and detail side by side. Extra panes appear on the largest screens. Navigation still happens by adding or removing keys from the back stack.

This matches Google’s guidance for Googlebook and foldables. See the companion guide on [adapting Android apps for Googlebook](/blog/adapt-android-apps-googlebook/).

## Add the Dependencies

In your module’s `build.gradle.kts` add the Navigation 3 and adaptive libraries. Versions move quickly; check the latest on Android Developers.

```kotlin
implementation("androidx.navigation3:navigation3-runtime:1.0.0-alpha08") // use current
implementation("androidx.navigation3:navigation3-ui:1.0.0-alpha08")
implementation("androidx.compose.material3.adaptive:adaptive-navigation3:1.3.0-alpha03")
implementation("androidx.lifecycle:lifecycle-viewmodel-navigation3:2.10.0-rc01")
```

You also need Compose, Material 3, and a serialization library if you use `@Serializable` keys.

## Define Your Keys

Keys identify destinations. Keep them serializable so the back stack survives process death.

```kotlin
@Serializable
object ConversationList : NavKey

@Serializable
data class ConversationDetail(val id: String) : NavKey

@Serializable
data object Profile : NavKey
```

## Create the Adaptive Layout

Inside your root composable, create a back stack and the scene strategy.

```kotlin
@OptIn(ExperimentalMaterial3AdaptiveApi::class)
@Composable
fun App() {
    val backStack = rememberNavBackStack(ConversationList)

    val windowAdaptiveInfo = currentWindowAdaptiveInfoV2()
    val directive = remember(windowAdaptiveInfo) {
        calculatePaneScaffoldDirective(windowAdaptiveInfo)
            .copy(horizontalPartitionSpacerSize = 0.dp)
    }
    val listDetailStrategy = rememberListDetailSceneStrategy<NavKey>(directive = directive)

    NavDisplay(
        backStack = backStack,
        onBack = { backStack.removeLastOrNull() },
        sceneStrategies = listOf(listDetailStrategy),
        entryProvider = entryProvider {
            entry<ConversationList>(
                metadata = ListDetailSceneStrategy.listPane(
                    detailPlaceholder = {
                        Text("Choose a conversation")
                    }
                )
            ) {
                // List UI
                Button(onClick = { backStack.add(ConversationDetail("ABC")) }) {
                    Text("Open detail")
                }
            }
            entry<ConversationDetail>(
                metadata = ListDetailSceneStrategy.detailPane()
            ) { detail ->
                // Detail UI
                Text("Conversation ${detail.id}")
            }
            entry<Profile>(
                metadata = ListDetailSceneStrategy.extraPane()
            ) {
                Text("Profile")
            }
        }
    )
}
```

The strategy reads metadata on each entry. List entries stay visible. Detail entries appear beside them when space allows. Extra panes fill remaining width on large windows. On phones the same back stack shows one screen at a time.

![Developer workspace with multiple monitors](https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=800&q=80)

## Test on Different Window Sizes

Open the desktop emulator in Android Studio Canary. Resize the free-form window. The layout should switch from single pane to list-detail around the medium breakpoint (roughly 600 dp). Fold the emulator or use a foldable device preview to confirm posture changes trigger the same logic.

Googlebook testing also benefits from the adaptive skill. Run `android skills add adaptive` so agents can suggest keyboard shortcuts, hover states, and multi-pane refinements on top of this Navigation 3 base.

## Tips for Production

- Provide a clear `detailPlaceholder` so empty detail areas do not look broken.
- Use `dropUnlessResumed` on click handlers that navigate to avoid double-adds during transitions.
- Keep ViewModels scoped to the correct entry with the lifecycle-viewmodel-navigation3 library.
- Test keyboard focus and pointer targets. Googlebook users expect precise mouse and trackpad interaction.
- Check the official recipe at developer.android.com/guide/navigation/navigation-3/recipes/material-listdetail for the full sample.

## Watch the Official Walkthrough

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/j0k8qizH0KY"
    title="Build adaptive layouts with Navigation 3"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Navigation 3 plus `ListDetailSceneStrategy` removes the friction of multi-pane layouts. One back stack and a few metadata tags give you phone-friendly and desktop-friendly UIs. Add the adaptive skill and test on the desktop emulator to prepare for Googlebook and foldables without maintaining separate codebases.

Start with a simple list-detail pair, then expand to extra panes or supporting panes as your app grows.

## Sources

- [Navigation 3 guide](https://developer.android.com/guide/navigation/navigation-3)
- [Material List-Detail recipe](https://developer.android.com/guide/navigation/navigation-3/recipes/material-listdetail)
- [Create custom layouts using Scenes](https://developer.android.com/guide/navigation/navigation-3/custom-layouts)
- [Build adaptive layouts with Navigation 3 (YouTube)](https://www.youtube.com/watch?v=j0k8qizH0KY)
- [Land your apps on Googlebook](https://developer.android.com/blog/posts/land-your-apps-on-googlebook-with-adaptive-development)
- [Jetpack Navigation 3 skill](https://developer.android.com/agents/skills/navigation/navigation-3/skill)
