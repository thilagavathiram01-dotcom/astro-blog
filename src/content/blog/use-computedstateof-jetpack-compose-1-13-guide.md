---
title: "How to Use computedStateOf in Jetpack Compose 1.13"
description: "Step-by-step guide to using computedStateOf in Jetpack Compose 1.13 to cut unnecessary recompositions and boost Android app performance."
pubDate: 2026-11-21T10:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "how-to", "developer"]
noindex: false
---

Jetpack Compose 1.13, released in the November 2026 stable update, adds computedStateOf. This lightweight tool helps you convert rapidly changing state into values that only trigger recomposition when the result actually changes. Apps with scrollable lists or animations often recompose more than needed. computedStateOf reduces that overhead without the caching cost of derivedStateOf.

You need the Compose BOM at 2026.11.01 or higher, Kotlin 2.2+, and compileSdk 37.1. The official Android Developers blog and performance docs confirm the recommendation: prefer computedStateOf for simple condition checks driven by fast-changing states such as scroll offsets.

![Android developer reviewing code on a laptop](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Why recompositions matter

Compose recomposes only the parts of the UI that depend on changed state. When you read a frequently updating value like listState.firstVisibleItemIndex directly inside a composable, every scroll step can force extra work. That leads to higher CPU use and potential jank on lower-end devices.

Both derivedStateOf and computedStateOf solve this by invalidating only when their calculated output changes. The difference is cost. derivedStateOf caches the result. computedStateOf skips the cache bookkeeping, so it runs lighter on basic checks. Official guidance says to use computedStateOf by default in 1.13 and higher, and reserve derivedStateOf for expensive calculations read multiple times in one pass.

For deeper performance tracing, see our guide on [analyzing Android traces with Perfetto SQL](/blog/analyze-android-traces-perfetto-sql-skill/).

## Step-by-step: show a scroll-to-top button

Start with a LazyColumn that tracks scroll position. Without derived state, a button that appears only after the user scrolls would recompose on every pixel of movement.

1. Declare the list state.

```kotlin
val listState = rememberLazyListState()
```

2. Create the computed state for the visibility condition.

```kotlin
val showButton by remember {
    computedStateOf {
        listState.firstVisibleItemIndex > 0
    }
}
```

3. Use the result in your UI.

```kotlin
LazyColumn(state = listState) {
    items(100) { index ->
        Text("Item $index", modifier = Modifier.padding(16.dp))
    }
}

AnimatedVisibility(visible = showButton) {
    FloatingActionButton(
        onClick = { /* scroll to top */ }
    ) {
        Icon(Icons.Default.ArrowUpward, contentDescription = "Scroll to top")
    }
}
```

The button now appears only when the first visible item index crosses zero. Scrolling further does not recompute the button visibility or recompose the button’s parent unless the boolean flips. This matches the pattern shown in the Android performance best-practices documentation.

## Comparing computedStateOf and derivedStateOf

Use this decision table based on official recommendations:

| Scenario | Recommended API | Reason |
| --- | --- | --- |
| Simple boolean from scroll or animation progress | computedStateOf | Lower overhead, no cache needed |
| Heavy calculation (filtering a large list, complex math) read multiple times | derivedStateOf | Caching avoids repeated work |
| Compose Runtime < 1.13 | derivedStateOf | computedStateOf not available |

Do not pass the snapshot values you read inside the block as remember keys. That recreates the state object on every change and defeats the purpose.

## Tips for real apps

Profile first. Enable recomposition tracing in Perfetto (available in the same 1.13 release) to see exactly which state reads trigger updates. The Android Developers talk “Outperform yourself in Compose” walks through this workflow.

Keep calculations cheap. computedStateOf re-evaluates on every read. A one-line comparison is ideal. Anything that allocates lists or does network work belongs in a ViewModel or a heavier derivedStateOf.

Test on device. Hero benchmarks in the November release show Compose 1.13 matching prior versions at 0% jank on Pixel 6 for scrolling. Your mileage depends on the rest of the composition tree.

Upgrade the BOM early. The November 2026 release also brings progressive blur, polygon shapes, and Material 3 1.5 stable components. See related graphics updates in our [progressive blur and polygon shapes guide](/blog/progressive-blur-polygon-shapes-jetpack-compose-1-13/).

![Close-up of programming code on a monitor](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Common mistakes to avoid

Reading the computed value outside the composition scope defeats tracking. Always consume it inside a composable or a lambda that Compose observes.

Ignoring the official preference. Some teams keep using derivedStateOf everywhere out of habit. On high-frequency scroll paths this adds measurable overhead that computedStateOf removes.

Forgetting to update the BOM. computedStateOf lives in the runtime module shipped with BOM 2026.11.01. Older projects simply will not compile the new API.

## Conclusion

computedStateOf gives Android developers a lighter tool for the most common recomposition problems in Jetpack Compose 1.13. Apply it to scroll thresholds, animation gates, and other simple derived booleans. Measure with Perfetto, keep the calculation cheap, and you will see smoother lists and fewer wasted frames. Start with the scroll-to-top example above and expand from there.

## Sources

- Android Developers Blog: What’s new in the Jetpack Compose November ’26 release (18 Nov 2026)
- Android Developers: Follow best practices – Use computedStateOf or derivedStateOf to limit recompositions
- Android Developers YouTube: Outperform yourself in Compose (Android Dev Summit 2026)

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/t5ujT_o8qj0"
    title="Outperform yourself in Compose"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
