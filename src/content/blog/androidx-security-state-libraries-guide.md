---
title: "How to Check Android Security State with Jetpack"
description: "Use AndroidX Security State 1.1.0 to check system, Mainline, and kernel patches before payments or MDM access."
pubDate: 2026-09-20T14:00:00
heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "security", "developer", "tutorials"]
noindex: false
---

A single `ro.build.version.security_patch` string no longer tells you if a phone is actually patched. Google Play system updates, OEM OTAs, and kernel LTS releases now ship on different calendars.

On 17 September 2026, Android announced the stable **AndroidX Security State 1.1.0** and **Security State Provider 1.0.0** libraries. Banking, healthcare, and MDM apps can query component-level patch data instead of blocking every device that looks a month behind.

This guide walks through the official APIs, permissions, and a practical gate for high-risk flows.

## Why one SPL is no longer enough

Android now patches three layers on separate tracks:

- **System** — OEM or Google OTA images.
- **System modules** — Project Mainline packages delivered through Google Play system updates.
- **Kernel** — Long-Term Support versions such as `5.15.159` or `6.1.91`, not calendar dates.

The Security State libraries expose three patch dimensions for those components:

- **Device SPL (DSPL)** — what is installed right now. Read locally. No network.
- **Published SPL (PSPL)** — the latest level in the [Android Security Bulletin](https://source.android.com/docs/security/bulletin) and OSV feeds.
- **Available SPL (ASPL)** — an update already staged on the device, reported over IPC by trusted update clients.

Compare those three values and you can prompt a user to install a pending OTA instead of locking them out.



![Developer reviewing Android device security settings on a laptop](https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80)



## Add the library

Include Google Maven, then add the stable artifact documented in the [Understand device security state](https://developer.android.com/privacy-and-security/understand-device-security-state) guide.

```kotlin
// build.gradle.kts
dependencies {
    implementation("androidx.security:security-state:1.1.0")
}
```

Permissions from the official matrix:

- `getDeviceSecurityPatchLevel()` needs **none**. It reads local properties.
- `fetchAvailableSecurityPatchLevel()` and `queryAllAvailableUpdates()` need **none**. They talk to privileged update providers on the device.
- `createVulnerabilityReportUrl()`, `loadVulnerabilityReport()`, `getPublishedSecurityPatchLevel()`, `areCvesPatched()`, and `isDeviceFullyUpdated()` need `android.permission.INTERNET` so the app can fetch public OSV reports. After `loadVulnerabilityReport()`, those checks run locally.

Platform notes from Google:

- Android 11 (API 30) and higher: full support, including bulletin kernel LTS versions and ASPL.
- Android 10: system and module SPLs work; bulletin kernel versions are not published.
- Android 9 and older: Mainline does not exist. `COMPONENT_SYSTEM_MODULES` falls back to `1970-01-01`.

## Initialize and read DSPL

```kotlin
import androidx.security.state.SecurityPatchState

val securityPatchState = SecurityPatchState(context)

val deviceSpl = securityPatchState.getDeviceSecurityPatchLevel(
    SecurityPatchState.COMPONENT_SYSTEM
)
val mainlineSpl = securityPatchState.getDeviceSecurityPatchLevel(
    SecurityPatchState.COMPONENT_SYSTEM_MODULES
)
val kernelVersion = securityPatchState.getDeviceSecurityPatchLevel(
    SecurityPatchState.COMPONENT_KERNEL
)

val requiredSpl =
    SecurityPatchState.DateBasedSecurityPatchLevel.fromString("2026-01-01")

if (deviceSpl < requiredSpl) {
    // Restrict payments, passkeys, or work data until the user updates
}
```

System and Mainline values are date-based. Kernel values are versioned strings. Compare like types only.

If you already downloaded an OSV JSON report, pass it at construction in Kotlin:

```kotlin
val securityPatchState = SecurityPatchState(
    context,
    vulnerabilityReportJsonString = jsonString
)
```

In Java, call `loadVulnerabilityReport(jsonString)` after construction.

## Prompt on pending updates (ASPL)

Do not treat every stale DSPL as a hard fail. Ask whether an update is already waiting.

```kotlin
val available = securityPatchState.fetchAvailableSecurityPatchLevel(
    SecurityPatchState.COMPONENT_SYSTEM
)

if (available > deviceSpl) {
    // Send the user to system update settings instead of blocking them
}
```

`queryAllAvailableUpdates()` returns `UpdateCheckResult` objects with provider URI, component, published date, and freshness. Google Play system updates already publish ASPL on GMS devices. Google OTA (GOTA) is onboarded. OEM OTA clients publish through `androidx.security:security-state-provider:1.0.0`.

Kernel availability is evaluated with `COMPONENT_SYSTEM` because kernel fixes ship inside the OS image.



![Close-up of a smartphone lock screen representing app security gates](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)



## Check specific CVEs before tap-to-pay

Google’s announcement calls out NFC and Bluetooth as examples. Use `areCvesPatched()` after you load a vulnerability report.

```kotlin
val url = SecurityPatchState.createVulnerabilityReportUrl()
// GET the URL, then:
securityPatchState.loadVulnerabilityReport(reportJson)

val nfcSafe = securityPatchState.areCvesPatched(
    listOf("CVE-2026-0019") // example ID from a current bulletin
)

if (!nfcSafe) {
    // Disable proximity payments until the fix is present
}
```

Replace the sample CVE with IDs that matter to your threat model. Pull them from the current [Android Security Bulletin](https://source.android.com/docs/security/bulletin).

Two extra signals from the 17 September 2026 post:

1. If a monthly bulletin adds no new threats for a component, the library can raise that component’s **effective** security level so the device is not penalized.
2. Android 17 lets OEMs declare extra fixes in a [Supplemental Patches XML](https://source.android.com/docs/security/overview/supplemental-security-patches) file. `areCvesPatched()` honors those records, so a backport counts immediately.

`isDeviceFullyUpdated()` is the coarse helper when you only need a yes/no after the report is loaded.

## Suggested product policy

Use a three-step gate instead of a single date check:

1. Read DSPL for system, modules, and kernel on launch.
2. If DSPL is below your baseline, query ASPL. If an update is staged, show a settings deep link.
3. For tap-to-pay, Bluetooth pairing, or passkey enrollment, call `areCvesPatched()` on the CVEs that affect those stacks.

This matches the zero-trust pattern Google described for unmanaged, employee-owned devices: scale down only when a critical fix is missing, not whenever the calendar string looks old.

Pair this check with lock-screen and private-space controls already covered in [how Android 17 App Lock works on Pixel](/blog/android-17-app-lock-pixel/) and [how to set up Android Private Space](/blog/android-private-space/). Device posture and user isolation solve different parts of the same risk.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/8PxuWdjESfg"
    title="What's new in Android"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for MDM and OEM teams

- Cache DSPL. It does not change until the next reboot after an update.
- Refresh ASPL when the user returns from Settings, not on every frame.
- Fetch OSV reports on a schedule. Do not block the main thread on the first cold start if you only need DSPL.
- Treat provider data as authentic only because update clients must hold `READ_PRIVILEGED_PHONE_STATE`. Do not invent your own binder endpoint.
- OEMs should publish ASPL with Security State Provider and ship supplemental patch XML so backports are visible the same day.

## Conclusion

AndroidX Security State 1.1.0 gives apps a documented way to ask three questions: what is installed, what is published, and what is waiting on the device. Use DSPL for an instant baseline, ASPL to avoid false blocks, and CVE checks before you turn on NFC, Bluetooth, or high-value payments.

Start with the official guide, pin `androidx.security:security-state:1.1.0`, and keep your CVE list aligned with the latest bulletin.

## Sources

- [Introducing the AndroidX Security State Libraries](https://android-developers.googleblog.com/2026/09/introducing-androidx-security-state-libraries.html)
- [Understand device security state](https://developer.android.com/privacy-and-security/understand-device-security-state)
- [androidx.security.state API reference](https://developer.android.com/reference/androidx/security/state/package-summary)
- [Security-State 1.1.0 release notes](https://developer.android.com/jetpack/androidx/releases/security#security-state_2)
- [A unified view of Android security updates](https://blog.google/security/android-security-state-libraries/)
- [Android Security Bulletin](https://source.android.com/docs/security/bulletin)
- [Supplemental security patches](https://source.android.com/docs/security/overview/supplemental-security-patches)
