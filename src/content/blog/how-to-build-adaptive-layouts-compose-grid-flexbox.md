---
title: "How to Build Adaptive Layouts with Compose Grid and FlexBox"
description: "Step-by-step guide to using Jetpack Compose Grid and FlexBox for adaptive Android UIs across phones, tablets, and foldables."
pubDate: 2026-11-05T14:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "how-to", "developer"]
noindex: false
---

Android apps now run on phones, foldables, tablets, Googlebook, and XR devices. Fixed layouts that work on one phone size break when the window expands or the device folds. Jetpack Compose 1.13 adds Grid and FlexBox as first-class adaptive layout containers so you can build UIs that reflow without nested Rows and Columns.<grok type="render_inline_citation" citation_id="154" />

Grid handles strict two-dimensional structure with rows, columns, and spans. FlexBox manages one-dimensional flows that wrap, grow, and shrink to fill available space. Both are available in the foundation-layout artifact starting with Compose 1.13.0-rc01.<grok type="render_inline_citation" citation_id="153" />

This guide shows how to add the dependency, create a basic FlexBox that wraps items, build a Grid with spanning areas, and combine them with window size class checks for multi-device support.

![Android developer coding on a laptop with multiple screens](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## Why Grid and FlexBox replace nested layouts

Nesting Column inside Row (or the reverse) works for simple cases but becomes brittle on larger windows. Aligning items across rows requires extra modifiers and often produces uneven gaps. LazyVerticalGrid solves scrolling lists but measures only visible items and does not fit non-scrolling screen scaffolding such as dashboards or settings forms.

Grid places every child on a defined track structure so horizontal and vertical alignment stay consistent. You declare columns and rows once, then assign items to cells or areas. FlexBox follows the CSS Flexbox model: items flow along a main axis, wrap when space runs out, and can grow or shrink individually. The official layout containers table lists FlexBox as the preferred choice for mixed-size items that need grow, shrink, order, and alignSelf.<grok type="render_inline_citation" citation_id="154" />

Both containers measure all children, so keep the item count bounded. Use LazyVerticalGrid or LazyColumn when the data set is long or infinite.

## Add the dependency

Update your version catalog and module build file. The examples below use Compose 1.13.0-rc01; check the latest release notes for the current version.

In `gradle/libs.versions.toml`:

```toml
[versions]
compose = "1.13.0-rc01"

[libraries]
androidx-compose-foundation-layout = { group = "androidx.compose.foundation", name = "foundation-layout", version.ref = "compose" }
```

In the app module `build.gradle.kts`:

```kotlin
dependencies {
    implementation(libs.androidx.compose.foundation.layout)
}
```

Sync the project. Opt in to the experimental APIs with `@OptIn(ExperimentalGridApi::class)` or `@OptIn(ExperimentalFlexBoxApi::class)` at the call site until the APIs graduate to stable.<grok type="render_inline_citation" citation_id="153" />

## Create a wrapping FlexBox

FlexBox is useful for toolbars, chip groups, or card rows that should reflow on narrow windows. The container accepts a `config` lambda where you set direction, wrap, gap, and alignment.

```kotlin
@OptIn(ExperimentalFlexBoxApi::class)
@Composable
fun WrappingCardRow() {
    FlexBox(
        config = {
            wrap(FlexWrap.Wrap)
            gap(8.dp)
            justifyContent(FlexJustifyContent.SpaceBetween)
        },
        modifier = Modifier.fillMaxWidth()
    ) {
        // Each child can declare grow or shrink
        Card(modifier = Modifier.flex { grow(1f) }.widthIn(min = 120.dp)) {
            Text("Item 1", modifier = Modifier.padding(12.dp))
        }
        Card(modifier = Modifier.flex { grow(1f) }.widthIn(min = 120.dp)) {
            Text("Item 2", modifier = Modifier.padding(12.dp))
        }
        Card(modifier = Modifier.flex { grow(2f) }.widthIn(min = 120.dp)) {
            Text("Item 3 grows more", modifier = Modifier.padding(12.dp))
        }
    }
}
```

On a phone the cards wrap to multiple lines. On a tablet they sit side-by-side and the third card receives twice the extra space. The `grow` factor only distributes leftover space after intrinsic sizes are respected.

![Multiple Android devices showing different screen sizes](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## Build a structured Grid with areas

Grid shines for screen-level scaffolding. Define tracks in the config block, then place children with `gridItem` modifiers. Named areas make the intent clearer than numeric spans when the layout changes with window size.

```kotlin
@OptIn(ExperimentalGridApi::class)
@Composable
fun DashboardGrid(windowSizeClass: WindowSizeClass) {
    val isExpanded = windowSizeClass.isWidthAtLeastBreakpoint(
        WindowSizeClass.WIDTH_DP_EXPANDED_LOWER_BOUND
    )

    Grid(
        config = {
            if (isExpanded) {
                column(1.fr)
                column(2.fr)
                row(IntrinsicSize.Min)
                row(1.fr)
                area("header", row = 0, column = 0, columnSpan = 2)
                area("sidebar", row = 1, column = 0)
                area("content", row = 1, column = 1)
            } else {
                column(1.fr)
                row(IntrinsicSize.Min)
                row(1.fr)
                area("header", row = 0, column = 0)
                area("content", row = 1, column = 0)
            }
            gap(16.dp)
        },
        modifier = Modifier.fillMaxSize().padding(16.dp)
    ) {
        Text("Header", modifier = Modifier.gridItem(areaId = "header"))
        if (isExpanded) {
            Text("Sidebar", modifier = Modifier.gridItem(areaId = "sidebar"))
        }
        Text("Main content", modifier = Modifier.gridItem(areaId = "content"))
    }
}
```

Obtain the window size class from `currentWindowAdaptiveInfo()`. The same composable now shows a single-column stack on compact windows and a two-column layout on expanded windows without rewriting the child tree.

## Combine with adaptive navigation

Grid and FlexBox handle content arrangement. Pair them with Navigation 3 and the Material adaptive scaffolds for the overall app structure. On expanded windows you can show a permanent navigation rail beside a Grid-based detail pane. On compact windows the rail collapses to a bottom bar and the Grid stacks vertically.

If you already use the official adaptive skill for agents, the same patterns appear in generated code. See our earlier guide on [using the Compose adaptive skill for Googlebook and foldables](/blog/adaptive-compose-skill-googlebook-foldables-guide/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/RyO2H1VbqdM"
    title="Build adaptive apps with Compose's new APIs (I/O Connect '26)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for production use

- Prefer FlexBox over the older FlowRow and FlowColumn. The layout containers documentation marks Flow layouts as superseded by FlexBox.<grok type="render_inline_citation" citation_id="154" />
- Keep Grid item counts small. Measuring every child is intentional for precise alignment; large collections belong in lazy grids.
- Test on the Android Studio XR glasses emulator and the desktop form-factor preview. Both are stable in Rabbit 2 and surface window size changes that phones do not.
- Use `widthIn` or `heightIn` on FlexBox children so grow factors do not collapse items below readable sizes.
- Opt in only at the call site. Experimental annotations keep the rest of the codebase free of warnings until the APIs stabilize.

## Conclusion

Grid and FlexBox give Compose the structural tools that adaptive apps need. Declare tracks once, let items span or grow, and switch the configuration based on window size class. The result is a single codebase that looks correct on a phone, a foldable in tabletop mode, and a large Googlebook window.

Start with a small FlexBox chip group or a two-column dashboard Grid, then expand to full-screen scaffolds. The APIs are already in the 1.13 release candidates, so you can ship them today while watching the release notes for the final stable cut.

## Sources

- [Get started with FlexBox](https://developer.android.com/develop/ui/compose/layouts/adaptive/flexbox/get-started) — Android Developers
- [Layout containers](https://developer.android.com/develop/ui/compose/layouts/containers) — Android Developers
- [Build adaptive apps with Compose's new APIs](https://www.youtube.com/watch?v=RyO2H1VbqdM) — Android Developers
- [Build for every screen with the latest Jetpack Compose updates](https://developer.android.com/blog/posts/build-for-every-screen-with-the-latest-jetpack-compose-updates-from-android-developer-summit) — Android Developers Blog
