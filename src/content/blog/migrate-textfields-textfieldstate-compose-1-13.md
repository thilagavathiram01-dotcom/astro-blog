---
title: "Migrate TextFields to TextFieldState in Compose 1.13"
description: "Step-by-step guide to migrate value-based TextFields to TextFieldState in Jetpack Compose 1.13. Update BOM and use InputTransformation."
pubDate: 2026-11-23T14:00:00
heroImage: "https://images.unsplash.com/photo-1754548930550-be9fa88874f4?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials"]
noindex: false
---

Jetpack Compose 1.13, released on 18 November 2026 with BOM 2026.11.01, deprecates the value-based BasicTextField and Material 2 TextField APIs. Developers must move to the state-based TextFieldState model for better performance and synchronous updates. Material 3 value-based overloads remain available for now, but the state-based versions are recommended.

This guide walks through the migration with concrete code changes. All information comes from the official Android Developers release notes and migration documentation.

## Update your project dependencies

Raise your Compose BOM to 2026.11.01. The release requires Kotlin 2.2 or newer and compileSdk 37.1.

```kotlin
implementation(platform("androidx.compose:compose-bom:2026.11.01"))
```

Sync the project and rebuild. Deprecation warnings appear on any remaining value-based BasicTextField or Material 2 TextField calls. Material 3 1.5.0 ships as stable in the same release and is the preferred path for new UI.

If you are still on Material 2, migrate those text fields directly to Material 3 state-based overloads.

## Replace value and onValueChange with TextFieldState

The old pattern stored a string in mutableStateOf and passed it with a callback. The new pattern hoists a TextFieldState created with rememberTextFieldState.

Old code:

```kotlin
var text by remember { mutableStateOf("") }
TextField(
    value = text,
    onValueChange = { text = it },
    singleLine = true
)
```

New code:

```kotlin
val textState = rememberTextFieldState()
TextField(
    state = textState,
    lineLimits = TextFieldLineLimits.SingleLine
)
```

Read the current value from textState.text.toString() when you need it. For multi-line fields use TextFieldLineLimits.MultiLine(maxHeightInLines = 10). TextFieldState updates synchronously with keyboard input and supports saving and restoring formatted styles.

![Hands typing on a laptop with code on screen](https://images.unsplash.com/photo-1756830257330-6aa11c6869db?auto=format&fit=crop&w=800&q=80)

## Move filtering and formatting to transformations

VisualTransformation is deprecated. Use InputTransformation for filtering or modifying input as the user types, and OutputTransformation for display-only formatting.

To block leading zeros:

```kotlin
val state = rememberTextFieldState()
TextField(
    state = state,
    inputTransformation = InputTransformation {
        if (it.startsWith('0') && it.length > 1) {
            // adjust buffer as needed
        }
    }
)
```

For a credit-card style mask, limit length and insert dashes on output:

```kotlin
val state = rememberTextFieldState()
TextField(
    state = state,
    inputTransformation = InputTransformation.maxLength(16),
    outputTransformation = OutputTransformation {
        if (length > 4) insert(4, "-")
        if (length > 9) insert(9, "-")
        if (length > 14) insert(14, "-")
    }
)
```

InputTransformation.maxLength is a built-in helper. OutputTransformation runs only for presentation and does not change the underlying state.

## Hoist state and observe changes

Keep TextFieldState at the lowest parent that needs to read or write the text. For a self-contained field you can leave it inside the composable. When a parent must clear the field or submit the value, hoist the state and call clearText or read the text property.

To react to text changes without blocking the UI:

```kotlin
LaunchedEffect(textState) {
    snapshotFlow { textState.text.toString() }
        .collect { newText ->
            // handle update
        }
}
```

Undo and redo history APIs are now stable. Access them through the UndoState available on TextFieldState.

![Smartphone showing a virtual keyboard](https://images.unsplash.com/photo-1788835363012-bcac6ca7a8f7?auto=format&fit=crop&w=800&q=80)

## Additional benefits and related changes

TextFieldState delivers improved performance by avoiding unnecessary recompositions. It also natively handles formatted styles. The release removes experimental annotations from change tracking buffers.

Material 3 1.5.0 adds further stateful components such as SliderState. Pair this text migration with the progressive blur and polygon shape features covered in our [Compose 1.13 progressive blur guide](/blog/jetpack-compose-1-13-progressive-blur-polygon-shapes/).

Test forms on both soft keyboards and hardware keyboards. Verify that IME suggestions and autocorrect continue to work after the change.

## Checklist

- Update BOM to 2026.11.01, Kotlin 2.2+, compileSdk 37.1.
- Replace value/onValueChange with rememberTextFieldState and the state parameter.
- Convert VisualTransformation usages to InputTransformation or OutputTransformation.
- Hoist TextFieldState only as far as needed.
- Check Material 3 state-based overloads for new screens.
- Profile recompositions if you observe lag on large forms.

## Watch the official session

The Android Dev Summit 2026 talk explains the architecture behind TextFieldState and walks through migration patterns.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/1DvjkRYGs2g"
    title="Building reliable text editing experiences in Compose"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- Android Developers Blog: What’s new in the Jetpack Compose November ’26 release (18 November 2026)
- Android Developers: Migrate to state-based text fields
- Android Dev Summit 2026: Building reliable text editing experiences in Compose

Migrating now removes deprecation warnings and prepares your forms for future Compose releases. Start with the fields that use VisualTransformation, update one screen at a time, and verify keyboard behavior on real devices. The state-based APIs are stable and ready for production.
