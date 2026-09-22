---
title: "How to Use Compose Grid Named Areas in 1.12"
description: "Build dashboard layouts with Jetpack Compose Grid named areas and FlexBox using BOM 2026.08.00."
pubDate: 2026-09-20T14:00:00
heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "how-to"]
noindex: false
---

Jetpack Compose 1.12 ships a first-party Grid with named areas. You can place a header, sidebar, and main pane by name instead of tracking raw row and column indexes.

This guide covers the August 2026 BOM bump, a dashboard Grid, FlexBox wrapping for chips, and the experimental opt-in you still need. Facts come from the Android Developers Blog and official Grid and FlexBox docs.

## What named areas add

Grid itself arrived earlier as an experimental 2D layout. Compose 1.12 adds `area()` on `GridConfigurationScope` so you map an identifier to a start cell and optional spans.

Nick Butcher's August 2026 release post shows a three-region dashboard: `header` across two columns, then `sidebar` and `content` on the next row. Children attach with `Modifier.gridItem(areaId = ...)`.

The API is still `@ExperimentalGridApi`. Treat names as a readability layer, not a frozen contract. Track sizes still use fixed `Dp`, flexible `Fr` units, percentages, and content-based `Auto` tracks, as described in the Grid reference.



![Laptop showing code editor and layout sketches](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)



## Upgrade the project first

Pin Compose BOM `2026.08.00` so foundation-layout resolves to 1.12:

```kotlin
dependencies {
    implementation(platform("androidx.compose:compose-bom:2026.08.00"))
    implementation("androidx.compose.foundation:foundation")
    implementation("androidx.compose.foundation:foundation-layout")
    implementation("androidx.compose.material3:material3")
}
```

Set `compileSdk = 37` and use Android Gradle Plugin 9.1.1 or newer. Those are hard requirements in the same release notes.

Replace `Modifier.onFirstVisible()` with `Modifier.onVisibilityChanged()` while you are in the file. The old modifier is deprecated.

If you already added [mesh gradients from the same 1.12 drop](/blog/compose-1-12-mesh-gradients/), keep that painter on a full-bleed Box and put the Grid on top. The two APIs do not conflict.

## Build a named dashboard

Official sample structure looks like this:

```kotlin
@OptIn(ExperimentalGridApi::class)
@Composable
fun DashboardLayout() {
    Grid(
        config = {
            area("header", row = 0, column = 0, rowSpan = 1, columnSpan = 2)
            area("sidebar", row = 1, column = 0)
            area("content", row = 1, column = 1)
            gap(16.dp)
        }
    ) {
        HeaderSection(modifier = Modifier.gridItem(areaId = "header"))
        NavigationSidebar(modifier = Modifier.gridItem(areaId = "sidebar"))
        MainContentView(modifier = Modifier.gridItem(areaId = "content"))
    }
}
```

`area()` also accepts `IntRange` overloads for rows and columns when a region is not a simple span. Use that form when a pane covers non-contiguous math you would rather write as `0..1`.

Items without `gridItem` auto-place into the next free cell using the configured flow. Name the regions that designers treat as landmarks. Leave metric tiles to auto-placement if their order is data-driven.

Define explicit column and row tracks when you need ratios. Flexible `Fr` tracks share leftover space the same way CSS `fr` units do. Implicit tracks that Grid creates for overflow default to `Auto`.

Keep `gap()` on the container so gutters stay consistent. Per-item padding fights the track math and makes foldable resizes harder to reason about.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/thfNTC9x_Ys"
    title="Adaptive development for the expanding Android ecosystem"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Pair Grid with FlexBox

Grid is for two-dimensional page structure. FlexBox is for one main axis that can wrap. Official docs describe FlexBox as a configurable superset of Row, Column, FlowRow, and FlowColumn.

A chip row that wraps is the common case:

```kotlin
@OptIn(ExperimentalFlexBoxApi::class)
@Composable
fun FilterChips(tags: List<String>) {
    FlexBox(
        config = {
            wrap(FlexWrap.Wrap)
            gap(8.dp)
        }
    ) {
        tags.forEach { tag ->
            AssistChip(
                onClick = { },
                label = { Text(tag) },
                modifier = Modifier.flex { grow(0f) }
            )
        }
    }
}
```

Put that FlexBox inside the Grid cell named `content` or `header`. Children opt into grow and shrink with `Modifier.flex`. Default wrap is `FlexWrap.NoWrap`; set `Wrap` when items must break to the next line.

Google's get-started page also shows a column of centered text and a wrap row where some boxes call `grow(1.0f)` so leftover width is shared. Use grow for flexible cards. Use grow `0f` and shrink `0f` for chips that must keep their intrinsic size.

Both APIs are experimental. Opt in at the file or module level and expect signature tweaks before they leave experimental.



![Tablet and phone showing a multi-pane dashboard layout](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)



## Adapt the same Grid on large screens

Named areas stay useful when the window grows. Change the config block with window size, not the child tree.

On a compact width, map `header` to a single column and stack `sidebar` above `content`. On expanded width, restore the two-column span from the official sample. Children keep the same `areaId` values.

At I/O 2026, the adaptive development session introduced Grid and FlexBox next to MediaQuery. MediaQuery remains experimental and is meant for environment signals such as window size and pointer precision. You can branch Grid config from those signals once you adopt that API.

Do not rebuild the entire composition just to change spans. The config lambda runs during measure, so updating state that the lambda reads is enough.

For foldables, treat posture as another input to the same named map. Keep landmark names stable so tests and design specs stay aligned.

## Tips that keep layouts fast

Name only stable regions. Auto-place repeating cards. A unique area per list item fights recycling and makes diffs noisy.

Prefer `Fr` tracks over measuring children twice. Content-based `Auto` tracks are correct for labels, but they cost an extra measure pass.

Avoid nesting a lazy grid inside every named cell. Use Grid for chrome. Use `LazyVerticalGrid` or a lazy list inside `content` for long data.

Google's 1.12 notes say Time to Initial Display in hero benchmarks is now comparable to Views. Still regenerate Baseline Profiles after the BOM bump so the new layout code is in the profile.

Write screenshot tests for compact and expanded configs. Named areas make assertion text clearer than raw indexes when a pane jumps columns.

## Conclusion

Compose 1.12 lets you describe a dashboard as named regions instead of a spreadsheet of indexes. Upgrade BOM `2026.08.00`, opt into `ExperimentalGridApi`, copy the header-sidebar-content map, then drop FlexBox into a cell when chips need to wrap.

Keep the API experimental flag in mind and read the official Grid container-properties page before you ship production chrome. Pair the layout with mesh backgrounds or Credential Manager fields only after the structure is stable.

## Sources

- [What's new in the Jetpack Compose August '26 release](https://android-developers.googleblog.com/2026/08/jetpack-compose-august-2026-release.html)
- [Named areas | Grid container properties](https://developer.android.com/develop/ui/compose/layouts/adaptive/grid/container-properties#named-area)
- [GridConfigurationScope API](https://developer.android.com/reference/kotlin/androidx/compose/foundation/layout/GridConfigurationScope)
- [Get started with FlexBox](https://developer.android.com/develop/ui/compose/layouts/adaptive/flexbox/get-started)
- [Compose BOM mapping](https://developer.android.com/develop/ui/compose/bom/bom-mapping)
