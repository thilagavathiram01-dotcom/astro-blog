---
title: "How to Surface VoIP Calls in the Android System Dialer"
description: "Register ACTION_CALL_BACK, add VoIP calls with Jetpack Telecom 1.1, exclude private logs, and handle dialer callbacks on Android 16.1 and 17."
pubDate: 2026-10-04T09:30:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "how-to"]
noindex: false
---

Users of a VoIP app still open the system Phone app to return a missed call. Until Jetpack Telecom 1.1.0, that history lived only inside your app. Android can now log those calls in the system dialer and send a callback intent back to you.

The Android Developers blog post from 14 May 2026, written by Nataraj K R, covers the opt-in path. Official docs last updated 8 September 2026 add the Android 17 settings toggle. This guide follows those pages. It does not invent sample data or claim that every dialer already shows third-party logs.

CallsManager itself goes back to API 26. Unified logging and callbacks need Android 16.1 (SDK 36.1) or higher. Native dialers roll out the visible history in phases, starting with Google Meet, and use a package allowlist against spam.



![Person holding a smartphone during a call](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)



## What the 1.1.0 release actually adds

Three pieces matter for call history.

1. Register `TelecomManager.ACTION_CALL_BACK`. After that filter is in place, calls you add with `CallsManager.addCall` are logged by the system.
2. Store the UUID from `CallControlScope.getCallId`. The dialer sends that same value as `TelecomManager.EXTRA_UUID` when the user taps the entry.
3. Set `isLogExcluded = true` on `CallAttributesCompat` when a call must stay out of the system log.

Remote surfaces such as watches, Bluetooth headsets, and Android Auto still use the older CallsManager path. Logging is an extra contract on top of that, not a replacement. If your app still uses the legacy `ConnectionService` API, move the call lifecycle to CallsManager before you chase the dialer integration. The [Android 17 large-screen notes](/blog/adapt-android-apps-googlebook/) are a separate track, but the same app will hit both once it ships on phones and Googlebook.

## Register the app and the callback filter

Declare `MANAGE_OWN_CALLS` in the manifest. Register with Telecom during setup, before the first `addCall`.

```kotlin
val callsManager = CallsManager(context)
val capabilities =
    CallsManager.CAPABILITY_BASELINE or
        CallsManager.CAPABILITY_SUPPORTS_VIDEO_CALLING
callsManager.registerAppWithTelecom(capabilities)
```

The callback intent is system-protected. Export the activity that receives it, and do not add extra categories that the platform does not send.

```xml
<activity
    android:name=".VoipCallActivity"
    android:exported="true">
    <intent-filter>
        <action android:name="android.telecom.action.CALL_BACK" />
    </intent-filter>
</activity>
```

Compile against Android SDK 36.1 or higher so `ACTION_CALL_BACK` and the call-log APIs resolve. The library artifact is `androidx.core:core-telecom`. The blog points at the 1.1 line in the Core release notes. Pin a version you have tested, then recheck the notes before a release build.

## Add a call and decide what gets logged

Build `CallAttributesCompat` with a display name, an address, a direction, and a call type. Leave `isLogExcluded` false for calls the user should see in Phone. Set it true for ephemeral or private sessions.

```kotlin
CallAttributesCompat(
    displayName = displayName,
    address = address,
    isLogExcluded = excludeCallLogging,
    direction = if (isIncoming) {
        CallAttributesCompat.DIRECTION_INCOMING
    } else {
        CallAttributesCompat.DIRECTION_OUTGOING
    },
    callType = CallAttributesCompat.CALL_TYPE_AUDIO_CALL,
    callCapabilities = (
        CallAttributesCompat.SUPPORTS_SET_INACTIVE
            or CallAttributesCompat.SUPPORTS_STREAM
            or CallAttributesCompat.SUPPORTS_TRANSFER
        ),
)
```

Once the callback filter is registered, the system logs calls you add. Exclusion is per call, not per app. A support line can stay visible while a one-time meeting code stays hidden.

Keep a local map from the Telecom UUID to the address, display name, and call type you need to redial. The dialer does not send your app's internal user id. It sends `EXTRA_UUID`.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/cXl9fUyW6FM"
    title="Supporting BLE Audio in your voice communication applications"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Handle the callback intent

When the user taps a VoIP row in the dialer, the platform launches your registered activity with `TelecomManager.ACTION_CALL_BACK`.

```kotlin
if (intent.action == TelecomManager.ACTION_CALL_BACK) {
    val uuid = intent.getStringExtra(TelecomManager.EXTRA_UUID)
    launchCall(callDetails = getCallDetails(uuid))
}
```

Resolve the UUID against your stored map, then place the call through the same `addCall` path you use for an in-app redial. If the UUID is missing, do not guess a phone number. Show an in-app error and stop.

Dialer apps that want to start the return call use `TelecomManager.placeCall` with a `content://` URI built from `CallLog.Calls.CONTENT_URI` and the call log row id. Your VoIP app does not construct that URI. You only consume the callback.

On Android 16.1, a dialer includes VoIP rows by appending the query parameter `include_voip_calls=true` on `CallLog.Calls.CONTENT_URI`. On Android 17 the docs formalize that provider query. Third-party dialers still have to opt in. Phone by Google is the first surface Google called out, and even there the allowlist gates which packages appear.

## Clean up UUIDs the log no longer holds

The system call log is finite. Old rows are purged. A UUID that is gone cannot be called back, so your map should drop it.

Query `CallLog.Calls.CONTENT_VOIP_URI` for the UUIDs still attributed to your package. Compare that set with local storage and delete the rest. Do this on a background dispatcher, not on the main thread during startup.



![Developer reviewing code on a laptop](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80)



## Android 17 settings and the preference broadcast

Starting in Android 17 (API 37), users can turn unified call history on or off per app. The path is typically **Settings > Calling accounts > Integrated call logs**, or inside the default dialer.

Open that screen with `TelecomManager.ACTION_CONFIGURE_CALL_LOG_INTEGRATION`.

```kotlin
val intent = Intent(TelecomManager.ACTION_CONFIGURE_CALL_LOG_INTEGRATION)
startActivity(intent)
```

When the user turns the toggle off, the platform purges existing call log entries for your package from `CallLog.Calls`. Later calls are not recorded in the system dialer. Listen for `TelecomManager.ACTION_VOIP_CALL_LOG_PREFERENCE` and read `TelecomManager.EXTRA_VOIP_CALL_LOG_PREFERENCE_STATUS`. On `false`, clear the local UUID map so you do not offer a callback you can no longer complete.

## Test before you expect Phone to show the row

Google is explicit: the 1.1.0 APIs are available to integrate, but the system dialer's rendering of native VoIP logs is phased, starting with Google Meet. A correct integration can still show nothing in Phone on a given device.

Use the open-source Telecom sample dialer in `android/platform-samples` under `samples/connectivity/telecom` as the emulator environment. Confirm four cases:

- A normal outgoing call appears and returns `EXTRA_UUID` on callback.
- An incoming call uses `DIRECTION_INCOMING` and still callbacks.
- A call with `isLogExcluded = true` does not appear.
- Disabling integrated logs on Android 17 clears rows and fires the preference broadcast.

Do not request the call log permission only to prove the feature. Logging happens because you registered the callback filter and added the call through Telecom.

## Tips that avoid support tickets

Store the UUID as soon as `getCallId` is available, not after the call ends. A crash mid-call should still leave a row the dialer can return.

Do not log meeting codes, one-time PINs, or health-line calls. `isLogExcluded` exists for that. The system log is visible to anyone who can open Phone.

Tell users the history toggle lives in Calling accounts on Android 17. A missing row is often a user setting or an allowlist, not a failed `addCall`.

Audio routing is a separate problem. BLE headsets and Android Auto still depend on CallsManager endpoint selection. A logged call that cannot route audio is a worse bug than a missing history row.

## Conclusion

Surface VoIP history by registering `android.telecom.action.CALL_BACK`, adding calls through CallsManager, and mapping `EXTRA_UUID` back to your own call record. Exclude private calls. On Android 17, honor the integrated-log toggle and clear stale UUIDs when the system purges them.

Ship the integration, then verify it in the platform sample dialer. Treat a row in Phone by Google as a phased rollout, not as proof the API call failed.

## Sources

- [Bring Native Visibility to Your VoIP App Experience with Telecom's Latest Alpha](https://developer.android.com/blog/posts/bring-native-visibility-to-your-vo-ip-app-experience-with-telecom-s-latest-alpha) — Android Developers Blog, 14 May 2026
- [Unified call history](https://developer.android.com/develop/connectivity/telecom/call-log-integration) — Android Developers, updated 8 September 2026
- [Core-Telecom](https://developer.android.com/develop/connectivity/telecom/voip-app/telecom) — Android Developers
- [Telecom sample](https://github.com/android/platform-samples/tree/main/samples/connectivity/telecom) — Android platform samples
- [Supporting BLE Audio in your voice communication applications](https://www.youtube.com/watch?v=cXl9fUyW6FM) — Android Developers
