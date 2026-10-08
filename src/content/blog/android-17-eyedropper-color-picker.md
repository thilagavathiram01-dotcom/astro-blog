---
title: "How to Pick Screen Colors with Android 17 EyeDropper"
description: "Add the Android 17 EyeDropper API so users pick a screen color without screen-capture permission. Intent, result, and privacy notes."
pubDate: 2026-10-08T09:00:00
heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "how-to"]
noindex: false
---

Design tools, theme editors, and accessibility apps often need one color from the screen. Before Android 17, the usual path was a media-projection capture or a custom overlay, both of which ask for broad screen access. Android 17 adds a system EyeDropper so your app can request a single pixel color and receive only that value.

Google listed the EyeDropper API among the privacy features in the Android 17 release post on the Android Developers Blog. The platform constant `Intent.ACTION_OPEN_EYE_DROPPER` is available from API level 37. The system activity lets the user pick a pixel. Your app gets the color back as an activity result. Secure windows and protected buffers are blacked out, so the picker does not hand you protected content.

This guide shows how to call the API, read the result, and keep the feature optional on older devices.

## What the system picker returns

Launch the action `android.intent.action.OPEN_EYE_DROPPER`. The user moves a selector and confirms a pixel. On success, the result intent includes `EXTRA_COLOR` (`android.intent.extra.COLOR`). That integer is the selected pixel in ARGB form, `0xFFRRGGBB`.

Your process never receives the screenshot. The system owns the overlay and the pixel read. That is the point of the API: you do not request `MediaProjection` or a capture permission just to sample a color.

Pixels from secure windows and protected buffers are blacked out. A banking app, a DRM video surface, or a flag-secure window will not leak its real pixels through this picker. Plan the UI copy so users know some regions may return black.

![Developer reviewing Android code on a laptop](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Check the API level first

EyeDropper ships with Android 17, API 37. On Android 16 and earlier the action will not resolve. Gate the button and offer a fallback, such as a manual hex field or an in-app color wheel that only samples your own canvas.

```kotlin
fun canOpenEyeDropper(context: Context): Boolean {
    if (Build.VERSION.SDK_INT < 37) return false
    val intent = Intent("android.intent.action.OPEN_EYE_DROPPER")
    return intent.resolveActivity(context.packageManager) != null
}
```

`resolveActivity` also covers devices that ship Android 17 but do not include the system EyeDropper package. Hide the control when the check fails.

## Launch the picker and read the color

Use the Activity Result API. Do not call `startActivityForResult`, which is deprecated.

```kotlin
private val eyeDropperLauncher = registerForActivityResult(
    ActivityResultContracts.StartActivityForResult()
) { result ->
    if (result.resultCode != Activity.RESULT_OK) return@registerForActivityResult
    val color = result.data?.getIntExtra(Intent.EXTRA_COLOR, Color.TRANSPARENT)
        ?: return@registerForActivityResult
    applyPickedColor(color)
}

fun openEyeDropper() {
    val intent = Intent("android.intent.action.OPEN_EYE_DROPPER")
    eyeDropperLauncher.launch(intent)
}
```

`Intent.EXTRA_COLOR` is the standard extra name the platform documents for this result. Treat a missing extra as a cancel, not as black.

Convert the integer when you need a hex string for a theme file or a design token:

```kotlin
fun argbToHex(color: Int): String =
    String.format("#%06X", 0xFFFFFF and color)
```

Keep the alpha channel if your product stores full ARGB. The documented format is opaque `0xFFRRGGBB`, so the high byte is `0xFF` for a normal pick.

## Wire it into Jetpack Compose

Compose does not change the contract. Hold the launcher in a remembered callback and pass the color into state.

```kotlin
@Composable
fun ColorSampleButton(onColor: (Int) -> Unit) {
    val context = LocalContext.current
    val launcher = rememberLauncherForActivityResult(
        ActivityResultContracts.StartActivityForResult()
    ) { result ->
        if (result.resultCode == Activity.RESULT_OK) {
            result.data?.getIntExtra(Intent.EXTRA_COLOR, Color.TRANSPARENT)
                ?.let(onColor)
        }
    }
    if (Build.VERSION.SDK_INT >= 37) {
        Button(onClick = {
            launcher.launch(Intent("android.intent.action.OPEN_EYE_DROPPER"))
        }) {
            Text("Pick a color from the screen")
        }
    }
}
```

Android 17 is Compose-first for new platform UI, so a Compose entry point matches current guidance. If you still ship a View screen, the same intent works from an `Activity` or `Fragment`.

For color that must stay accurate on wide-gamut panels, pair this sample with a Display P3 path. The [Compose 1.12 Display P3 and HDR guide](/blog/compose-1-12-display-p3-hdr/) covers how Compose 1.12 exposes wide color, which is separate from the sRGB integer this picker returns.

![Close-up of a smartphone screen in use](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## Test on a real Android 17 device

The Android 17 source drop and Pixel rollout started on 16 June 2026. Test on a Pixel running API 37, or on an emulator image at that API level.

1. Install a debug build with `targetSdk` 37, or at least `minSdk` low enough that the version check compiles.
2. Open the picker from a foreground activity. The system UI should cover the display with a selector.
3. Sample a known swatch inside your app, such as a pure red `Color.RED` box, and confirm the hex is `#FF0000`.
4. Sample a secure surface, such as a flag-secure window or a protected video, and confirm the returned pixel is black rather than the real frame.
5. Press back and confirm you do not apply a color when `RESULT_OK` is missing.
6. Run the same build on API 36 and confirm the button stays hidden.

Also test large screens. Android 17 ignores several orientation and resizability opt-outs on windows wider than 600 dp. The picker is a system activity, but your color-preview pane still has to reflow. The [Android 17 App Bubbles guide](/blog/android-17-app-bubbles/) is a useful companion if your editor can be bubbled while the user samples another window.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/8rbub6oDBtg"
    title="Android 17 AOSP is here"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips before you ship

Store the last successful color in your own preferences. The system does not keep a history for your app.

Label the control with a verb, such as "Pick from screen," so people do not expect an in-app palette. If you also offer a palette, keep the two actions separate.

Do not log the raw color next to screenshots or account identifiers. A color alone is low risk, but pairing it with a capture of the same screen recreates the privacy problem this API avoids.

If the intent does not resolve on a partner device, file feedback with the OEM build number. The action is part of API 37, but a custom system image can omit the handler.

Skip this API for sampling your own bitmap. `Bitmap.getPixel` is simpler and does not leave your process. Use EyeDropper when the pixel lives outside your window.

## Conclusion

Android 17's EyeDropper is a small intent with a clear contract: the user picks a pixel, you receive one ARGB integer, and protected surfaces stay black. Gate it on API 37, read `EXTRA_COLOR` only on `RESULT_OK`, and keep a manual color field for older phones. That is enough to replace a media-projection color sampler in a theme editor, a note app, or an accessibility tool.

## Sources

- Android Developers Blog, "Android 17 is here" (16 June 2026): https://android-developers.googleblog.com/2026/06/Android-17.html
- Android Open Source Project reference for `Intent.ACTION_OPEN_EYE_DROPPER` (API 37), summarized in Microsoft Learn: https://learn.microsoft.com/en-us/dotnet/api/android.content.intent.actionopeneyedropper?view=net-android-37.0
- Android Developers, "Android 17 AOSP is here": https://www.youtube.com/watch?v=8rbub6oDBtg
