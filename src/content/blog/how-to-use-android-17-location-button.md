---
title: "How to Use the Android 17 Location Button for Session Privacy"
description: "Step-by-step guide to integrate the Android 17 Location Button for one-time precise location access. Improve privacy and reduce permission prompts."
pubDate: 2026-10-21T16:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "developer"]
noindex: false
---

Android 17 introduces the Location Button, a system UI element that grants precise location access only for the current session. Apps no longer need permanent or background permissions for common tasks like finding a nearby store or tagging a post. Users tap the button, grant access, and the permission expires when they leave the app.

This change reduces repeated "Only this time" dialogs and gives clearer intent signals. Google Play requires apps targeting Android 17 (API 37) that need only session-based precise location to use the Location Button.

## What the Location Button Does

The button is rendered by the system on Android 17 and later. On earlier versions it falls back to the standard permission dialog. Access lasts only while the app remains in the foreground. Closing the app ends the grant.

Developers embed the button via the Jetpack locationbutton library. The location icon stays fixed so users recognize it as a system control. Text, colors, size, and corner radius can be customized to match your UI.

![Smartphone showing a map interface](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## Prerequisites

- Target and compile SDK 37 or higher for full Android 17 behavior.
- Jetpack library for the Location Button.
- Manifest permissions: `ACCESS_COARSE_LOCATION`, `ACCESS_FINE_LOCATION` with the `onlyForLocationButton` flag (if you use only the button), and `USE_LOCATION_BUTTON`.

Add the dependency in your module `build.gradle.kts`:

```kotlin
dependencies {
    implementation("androidx.core:core-locationbutton:1.0.0-alpha01")
}
```

Declare permissions in `AndroidManifest.xml`:

```xml
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"
    android:usesPermissionFlags="onlyForLocationButton" />
<uses-permission android:name="android.permission.USE_LOCATION_BUTTON" />
```

## Step-by-Step Integration

### 1. Add the button in XML

Place the widget in your layout. It does not accept child views.

```xml
<androidx.core.locationbutton.LocationButton
    android:id="@+id/location_button"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    app:backgroundColor="@color/button_bg"
    app:cornerRadius="24dp"
    app:locationButtonTextType="use_precise_location"
    android:textColor="@color/button_text" />
```

### 2. Listen for the result

In your Activity or Fragment, attach the listener.

```kotlin
val locationButton = findViewById<LocationButton>(R.id.location_button)

locationButton.setLocationButtonListener { granted ->
    if (granted) {
        // Fetch location for this session
    } else {
        // Handle denial
    }
}
```

### 3. Compose version

For Jetpack Compose, use the composable from the locationbutton-compose artifact.

```kotlin
LocationButton(
    onPermissionResult = { granted ->
        if (granted) {
            // Proceed with session location
        }
    }
)
```

The library handles remote system rendering on Android 17+ and local fallback on older devices.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Utmu5Sk3G54"
    title="Android 17 Deep Dive: Bubbles, Gaming Upgrades, & Privacy Features"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for Better Results

Keep the button visible only when location is required for the current action. This matches the session model and avoids unnecessary prompts.

Test on both Android 17 and earlier versions. The fallback dialog still requires user action, so your flow must handle both paths.

Combine the button with the updated location indicator. Users can tap the persistent indicator to see which apps recently accessed location and revoke access immediately.

If your app also needs background location, request the broader permissions separately and explain the need clearly. Play policy still requires justification for persistent access.

For related privacy tools in Android 17, see the [Contact Picker guide](/blog/android-17-contact-picker/).

![Developer working on a laptop with code](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80)

## Conclusion

The Location Button simplifies one-time precise location requests while improving user privacy. Integration takes a few lines of code and a new permission. Apps that target Android 17 and rely on session access should adopt it to meet Play requirements and reduce friction.

## Sources

- Android Developers: Request session-based location access with the location button
- Android Developers Blog: Redefining Location Privacy: New Tools and Improvements for Android 17
- Google Play Console Help: Minimum Scope: Foreground Location Access and the Location Button
