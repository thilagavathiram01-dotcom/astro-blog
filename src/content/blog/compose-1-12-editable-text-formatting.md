---
title: "How to Format Editable Text in Compose 1.12"
description: "Apply SpanStyle in BasicTextField with Compose 1.12 addStyle APIs and query live text styles."
pubDate: 2026-09-20T14:00:00
heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "how-to"]
noindex: false
---

Jetpack Compose 1.12 adds first-party rich formatting for editable text. You can apply bold, color, and paragraph styles inside `BasicTextField` without a custom editor kit.

The APIs shipped in the August 2026 release on BOM `2026.08.00`. This guide shows the upgrade, `addStyle()` on `TextFieldBuffer`, how to read styles back, and how selection and credentials fit the same text stack.

Facts come from the official Android Developers Blog post for the Compose August 2026 release.

## What Compose 1.12 changes for text

`TextFieldBuffer` now exposes `addStyle()` so you can attach `SpanStyle` and `ParagraphStyle` while you edit. Call it inside `textFieldState.edit { }` or from an `InputTransformation`.

You can also inspect styles. `getSpanStyles()` and `getParagraphStyles()` return `TrackedRange` objects you can update or remove. `TextFieldState` adds a read-only `textStyles` property. `TextFieldBuffer.originalTextStyles` shows formatting as it existed before the current edit.

Google states that text formatting and custom annotations persist across configuration changes. That removes a common source of lost highlights after rotation.



![Laptop with code editor open on a wooden desk](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)



## Upgrade the project first

Pin the August BOM and let Compose modules resolve without hard-coded versions:

```kotlin
dependencies {
    implementation(platform("androidx.compose:compose-bom:2026.08.00"))
    implementation("androidx.compose.ui:ui")
    implementation("androidx.compose.foundation:foundation")
    implementation("androidx.compose.material3:material3")
}
```

Set `compileSdk = 37`. Compose 1.12 requires Android Gradle Plugin 9.1.1 or newer. Replace `Modifier.onFirstVisible()` with `Modifier.onVisibilityChanged()` before you ship.

If you already tuned startup with [Android Baseline Profiles](/blog/android-baseline-profiles-guide/), regenerate profiles after the BOM bump. The same release notes say Time to Initial Display in Google's hero benchmarks is now comparable to Views.

## Apply styles while the user types

Create a `TextFieldState`, then edit the buffer. The official sample bolds and colors the first nine characters:

```kotlin
val state = rememberTextFieldState("Formatted text in Compose 1.12")

state.edit {
    addStyle(
        SpanStyle(fontWeight = FontWeight.Bold, color = Color.Blue),
        start = 0,
        end = 9
    )
}

val currentStyles = state.textStyles
```

Keep the edit block short. Apply styles after you know the range, not on every keystroke unless product requires live highlighting.

For a notes or comments field, wrap the same call in an `InputTransformation` that scans for markers such as `**bold**` and maps them to `SpanStyle`. Read `originalTextStyles` if you need to restore a range the user just overtyped.

`ParagraphStyle` uses the same `addStyle()` entry point. Use it for alignment or line height on a selected block, then query `getParagraphStyles()` to keep a format toolbar in sync.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/thfNTC9x_Ys"
    title="Adaptive development for the expanding Android ecosystem"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Control selection next to formatting

Formatting is only half of an editor. Compose 1.12 also adds `SelectionState` for `SelectionContainer`.

Hoist state with `rememberSelectionState()`. You get a reactive `selectedTexts` list of `AnnotatedString` values, plus `selectAll()`, `clear()`, `select(TextRange)`, and `extendSelectionByWord()`.

`getSelectableTexts()` returns every selectable item in layout order. That lets you select across multiple composables with a global range.

```kotlin
@Composable
fun ProgrammaticSelectionExample() {
    val selectionState = rememberSelectionState()

    Column {
        Button(
            onClick = { selectionState.selectAll() },
            modifier = Modifier.disableSelectionClearOnTap()
        ) {
            Text("Select All")
        }

        SelectionContainer(state = selectionState) {
            Text("Text content to be selected programmatically.")
        }
    }
}
```

Use `disableSelectionClearOnTap()` on toolbar buttons so a format action does not wipe the selection. SelectionContainer now auto-scrolls when a drag leaves the viewport.



![Notebook and keyboard for writing and editing notes](https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80)



## Pair fields with Credential Manager

Login screens sit next to rich-text editors in many apps. On API 34 and higher, Compose text fields integrate with Android Credential Manager through Autofill. Below API 34, `androidx.credentialslibrary` covers the gap.

Attach `credentialRequest` semantics and a `CredentialRequestData` object so the field can request a passkey or saved credential during input. A dedicated walkthrough lives in [Compose Credential Manager Google Sign-In](/blog/compose-credential-manager-google-sign-in/).

Other text notes from the same release:

- Downloadable fonts support font variation settings.
- `KeyboardType` adds Date, Time, DateTime, and SignedDecimal.
- `BasicSecureTextField` defaults to `TextObfuscationMode.System`. `RevealLastTyped` remains an explicit override.
- Compose components play click and focus sounds. Wrap with `SoundEffectOnInteraction` to opt out. Semantics click listeners must run on the main thread.

## Practical tips

Store style ranges in your document model, not only in the field. Re-apply them in `edit { }` when you restore state so rotation and process death stay consistent with what Compose already persists.

Do not mix `addStyle()` with manual `AnnotatedString` rebuilds on the same buffer in one frame. Pick one writer.

Keep color tokens in a theme. Display P3 and HDR now travel through the Compose graphics pipeline in 1.12. If you paint [mesh gradient backgrounds](/blog/compose-1-12-mesh-gradients/) behind an editor, test contrast on both sRGB and P3 panels.

For dashboards that sit beside the editor, named areas on the experimental Grid keep chrome stable. See [named Grid areas in Compose 1.12](/blog/compose-grid-named-areas-1-12/) if the layout is more than a single column.

Write tests with `hasPendingWork()` and `runWithoutImplicitWait` when you assert style after an animation frame. Those APIs exist to cut flakiness while you step the clock.

## Conclusion

Compose 1.12 turns `BasicTextField` into a usable rich-text surface. Upgrade to BOM `2026.08.00`, call `addStyle()` on the buffer, and read `textStyles` to drive a toolbar.

Add `SelectionState` when users need Select All or word-level extend. Attach Credential Manager semantics on sign-in fields in the same release so the text stack stays consistent.

Start with one formatted title range. Expand to paragraph styles only after that path survives rotation and screenshot tests.

## Sources

- [What's new in the Jetpack Compose August '26 release](https://android-developers.googleblog.com/2026/08/jetpack-compose-august-2026-release.html)
- [Compose BOM mapping](https://developer.android.com/develop/ui/compose/bom/bom-mapping)
- [Set up Compose dependencies and compiler](https://developer.android.com/develop/ui/compose/setup-compose-dependencies-and-compiler#agp-compatibility)
- [Mesh gradients | Jetpack Compose](https://developer.android.com/develop/ui/compose/graphics/draw/mesh-gradient)
