---
title: "How to Control Text Selection in Compose 1.12"
description: "Use SelectionState in Jetpack Compose 1.12 to select all, clear, and observe selected text across composables."
pubDate: 2026-09-28T11:00:00
heroImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "how-to"]
noindex: false
---

Jetpack Compose 1.12 gives you a first-party handle on text selection. You can hoist a `SelectionState`, drive Select All from a toolbar, and read the current ranges as `AnnotatedString` values.

The API shipped in the August 2026 release on Compose BOM `2026.08.00`. This guide covers the upgrade, `rememberSelectionState()`, toolbar buttons that do not wipe the highlight, and how to select across more than one composable.

Facts come from the official Android Developers Blog post for the Compose August 2026 release.

## What SelectionState adds

Until 1.12, `SelectionContainer` owned selection internally. You could wrap text, but you could not observe or set the range from a parent toolbar.

Compose 1.12 adds `SelectionState`. Hoist it with `rememberSelectionState()` and pass it into `SelectionContainer`. The object exposes:

- `selectedTexts` — a reactive list of `AnnotatedString` values
- `selectAll()`
- `clear()`
- `select(TextRange)`
- `extendSelectionByWord()`

`getSelectableTexts()` returns every selectable item in layout order. You can then apply a global range that spans more than one child.

The same release also auto-scrolls `SelectionContainer` when a drag leaves the viewport. That matters for long articles and chat transcripts.



![Developer laptop showing a text editor and notes](https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80)



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

If you already keep startup profiles, regenerate them after the BOM bump. Google reports Time to Initial Display in its hero benchmarks is now comparable to Views.

## Wire SelectionState to a toolbar

The official sample uses a Select All button above a `SelectionContainer`. The button must not clear the highlight when the user taps it.

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

`disableSelectionClearOnTap()` belongs on every toolbar control that acts on the current range: Copy, Bold, Share, or Clear. Without it, the tap that fires the action also drops the selection.

Read `selectionState.selectedTexts` to drive a format bar. Each item is an `AnnotatedString`, so you keep existing spans when you copy or apply style.

Use `select(TextRange)` when you restore a saved caret after process death. Use `extendSelectionByWord()` for double-tap style expansion from a custom handle.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/3vavMmZfSms"
    title="New Android Studio Rabbit, MCP for Compose Multiplatform and More - Mobile Dev News Sep 2026"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Select across several composables

Call `getSelectableTexts()` to list every selectable child in layout order. Then pick a global range that starts in one `Text` and ends in another.

That pattern fits reading apps, legal documents, and chat threads where one bubble should not own the selection by itself. Keep all of those children inside the same `SelectionContainer` that holds your hoisted state.

Do not nest two `SelectionContainer` instances for the same document. Nested containers split the range and make `selectAll()` apply to only the inner tree.

For an editor that also applies bold and color while the user types, use `TextFieldBuffer.addStyle()` from the same 1.12 text stack. The walkthrough lives in [How to Format Editable Text in Compose 1.12](/blog/compose-1-12-editable-text-formatting/).



![Close-up of highlighted text on a printed page](https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80)



## Related 1.12 text and input notes

The August post lists other input changes that sit next to selection:

- Downloadable fonts support font variation settings.
- `KeyboardType` adds Date, Time, DateTime, and SignedDecimal.
- `BasicSecureTextField` defaults to `TextObfuscationMode.System`. `RevealLastTyped` remains an explicit override.
- Compose components play click and focus sounds. Wrap with `SoundEffectOnInteraction` to opt out. Semantics click listeners must run on the main thread.

On API 34 and higher, Compose text fields talk to Credential Manager through Autofill. Attach `credentialRequest` semantics with a `CredentialRequestData` object. Below API 34, use `androidx.credentialslibrary`.

Login fields and article readers often share a screen. Keep selection state on the article container, not on the password field.

## Test selection without a flaky clock

Compose 1.12 adds `hasPendingWork()` and `runWithoutImplicitWait` for tests that step the clock by hand.

```kotlin
@Test
fun selectAllHighlightsBody() {
    composeTestRule.mainClock.autoAdvance = false

    composeTestRule.setContent { ProgrammaticSelectionExample() }
    composeTestRule.onNodeWithText("Select All").performClick()

    while (composeTestRule.hasPendingWork()) {
        composeTestRule.mainClock.advanceTimeByFrame()
        composeTestRule.waitForIdle()
        composeTestRule.runOnUiThread {
            composeTestRule.runWithoutImplicitWait {
                // Query several nodes in this frame without extra sync.
            }
        }
    }
}
```

`hasPendingWork()` checks pending UI work without advancing time. `runWithoutImplicitWait` is useful when you inspect more than one node in a single frame.

## Practical tips

Keep `SelectionState` in the screen that owns the document, not inside a leaf `Text`. That lets a top app bar call `clear()` when the user navigates away.

Do not call `selectAll()` from `LaunchedEffect(Unit)` on first composition unless the product requires an initial highlight. Users treat unexpected selection as a bug.

If you paint a [mesh gradient](/blog/compose-1-12-mesh-gradients/) behind selectable text, check contrast on both sRGB and Display P3 panels. Compose 1.12 preserves P3 colors through the graphics pipeline.

Store the last `TextRange` with your document model if you need to restore it. `select(TextRange)` is the write path; `selectedTexts` is the read path.

## Conclusion

Compose 1.12 turns selection into state you can own. Upgrade to BOM `2026.08.00`, hoist `rememberSelectionState()`, and pass it into `SelectionContainer`.

Put `disableSelectionClearOnTap()` on toolbar buttons. Use `getSelectableTexts()` when one range should cross several composables. Pair the same BOM with `addStyle()` if the screen is an editor, not only a reader.

Start with Select All and Copy. Add word-level extend and saved ranges after those two actions survive rotation and screenshot tests.

## Sources

- [What's new in the Jetpack Compose August '26 release](https://android-developers.googleblog.com/2026/08/jetpack-compose-august-2026-release.html)
- [Compose BOM mapping](https://developer.android.com/develop/ui/compose/bom/bom-mapping)
- [Set up Compose dependencies and compiler](https://developer.android.com/develop/ui/compose/setup-compose-dependencies-and-compiler#agp-compatibility)
- [SelectionContainer](https://developer.android.com/reference/kotlin/androidx/compose/foundation/text/selection/SelectionContainer.composable)
