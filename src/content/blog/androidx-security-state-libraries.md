---
title: "How to Check Android Device Security State with AndroidX Security State 1.1"
description: "Add AndroidX Security State 1.1.0 to check component patch levels, pending updates, and whether specific CVEs are patched before you allow payments or other sensitive work."
pubDate: 2026-09-18T18:20:00
tags: ["android", "tutorials"]
heroImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&h=630&q=80"
---

A single Security Patch Level (SPL) string no longer describes how protected an Android phone actually is. Google Play system updates (Mainline modules), OEM OTAs, and kernel LTS builds land on different calendars. A banking or MDM app that only reads `ro.build.version.security_patch` can treat a device as current when a Mainline or kernel fix is still missing — or block a user whose OEM already backported the relevant CVE.

On 17 September 2026, Android announced the stable release of **AndroidX Security State 1.1.0** and **Security State Provider 1.0.0**. The client library gives apps a component-level view of device, published, and available patch levels. This guide follows the official [Understand device security state](https://developer.android.com/privacy-and-security/understand-device-security-state) page (updated 15 September 2026) and the [Android Developers Blog announcement](https://android-developers.googleblog.com/2026/09/introducing-androidx-security-state-libraries.html). It does not invent version numbers, device lists, or Play policy rules that those pages do not state.

![Person unlocking a smartphone next to a laptop](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=700&q=80)

## What the libraries do

**AndroidX Security State** (`androidx.security:security-state:1.1.0`) is the app-facing Jetpack library. It combines on-device properties, IPC with trusted update clients, and public [Open Source Vulnerabilities (OSV)](https://opensource.googleblog.com/2024/04/osv-and-helping-developers-fix-known-vulnerabilities.html) / [Android Security Bulletin](https://source.android.com/docs/security/bulletin) data.

**AndroidX Security State Provider** (`androidx.security.state.provider`) is for OEMs and OTA clients. It publishes Available SPL so third-party apps can query pending updates through one API instead of vendor-specific channels. Google Play system updates already expose ASPL on GMS devices. Google OTA (GOTA) is onboarded; Android is working with OEMs to connect their own OTA clients.

## The three patch levels

For each component the library can expose up to three dimensions:

- **Device SPL (DSPL)** — What is installed and running now. Queried synchronously from device properties and package metadata. No network.
- **Published SPL (PSPL)** — The latest level published in the Android Security Bulletin / OSV for that component.
- **Available SPL (ASPL)** — A newer package ready to download or install on *this* device, queried asynchronously over IPC with on-device update clients.

Components:

- **System** (`COMPONENT_SYSTEM`) — Core OS via OEM / GOTA system OTA. Date-based SPL.
- **System modules** (`COMPONENT_SYSTEM_MODULES`) — Mainline modules via Google Play system updates. Date-based SPL.
- **Kernel** (`COMPONENT_KERNEL`) — Versioned LTS string such as `5.15.159` or `6.1.91`, not a calendar date. Kernel *availability* is evaluated with `COMPONENT_SYSTEM` because kernel updates ship inside the OS image.

The library also computes an **effective** patch level: if a monthly bulletin added no new threats for a component, the effective level still moves forward so the device is credited for being protected against known issues. Android 17 lets OEMs declare extra backports in a [Supplemental Patches XML](https://source.android.com/docs/security/overview/supplemental-security-patches). Security State surfaces those so a backport is visible without waiting for a full SPL bump.

## Platform support

Documented behavior by API level:

- **Android 11 (API 30) and higher** — Full support, including bulletin-published kernel LTS versions and ASPL queries.
- **Android 10 (API 29)** — System and module SPLs work. Bulletin-published kernel versions are unavailable (GKI / bulletin LTS tracking started in Android 11). The on-device kernel version can still be read locally.
- **Android 9 (API 28) and older** — Same limits as 10, plus Mainline did not exist. `getDeviceSecurityPatchLevel(COMPONENT_SYSTEM_MODULES)` falls back to the Unix epoch date `1970-01-01`.

## Add the dependency

Include Google’s Maven repository, then:

```kotlin
// build.gradle.kts
dependencies {
    implementation("androidx.security:security-state:1.1.0")
}
```

```groovy
// build.gradle
dependencies {
    implementation "androidx.security:security-state:1.1.0"
}
```

### Permissions

| APIs | Manifest permission | Notes |
| --- | --- | --- |
| `getDeviceSecurityPatchLevel()` | None | Local properties and package metadata. |
| `fetchAvailableSecurityPatchLevel()`, `queryAllAvailableUpdates()` | None | On-device IPC to providers that hold privileged `READ_PRIVILEGED_PHONE_STATE`. Your app does not need that privilege. |
| `createVulnerabilityReportUrl()`, `loadVulnerabilityReport()`, `getPublishedSecurityPatchLevel()`, `areCvesPatched()`, `isDeviceFullyUpdated()` | `android.permission.INTERNET` | Fetch public OSV reports. After `loadVulnerabilityReport()`, queries run in memory. |

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

val requiredSpl = SecurityPatchState.DateBasedSecurityPatchLevel.fromString("2026-01-01")
if (deviceSpl < requiredSpl) {
    // Restrict high-risk features or send the user to Settings
}
```

Context-only construction is enough for offline DSPL. Pass a preloaded OSV JSON string to the Kotlin constructor, or call `loadVulnerabilityReport(jsonString)` after a network fetch, when you need CVE and published-level APIs.

![Lock and security hardware on a wooden desk](https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&h=700&q=80)

## Prompt on pending updates (ASPL)

Do not treat every stale DSPL as a hard block. Compare DSPL with ASPL first.

- `fetchAvailableSecurityPatchLevel(component, timeout)` — Effective available SPL for one component. Falls back to current DSPL if nothing newer is staged.
- `queryAllAvailableUpdates(timeout)` — Every trusted provider on the device, plus `UpdateCheckResult` metadata (source and freshness).

If ASPL is ahead of DSPL, show in-app copy that sends the user to system update settings instead of failing a payment with a generic “device not secure” error.

Google Play system updates already publish Mainline ASPL on GMS devices. System OTA ASPL depends on GOTA or an OEM client that implemented Security State Provider.

<div class="video-embed" style="position:relative;width:100%;max-width:100%;aspect-ratio:16/9;margin:1.5rem 0;background:#0a0a0a;border-radius:8px;overflow:hidden;">
  <iframe src="https://www.youtube.com/embed/RccJYep2v5I" title="Safeguarding user security on Android" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
</div>

## Audit specific CVEs

For tap-to-pay, BLE pairing, or NFC sharing, a date comparison is coarse. After loading an OSV report:

1. `createVulnerabilityReportUrl()` — Build the device-specific report URL.
2. Download the JSON (needs `INTERNET`).
3. `loadVulnerabilityReport(json)`.
4. `areCvesPatched(listOf("CVE-…"))` — True only when those IDs are remediated on this device, including supplemental OEM patches when declared.

`isDeviceFullyUpdated()` is the coarse helper once the report is loaded. Prefer CVE checks when you care about one subsystem.

## Practical policy examples

These patterns match what Google describes; they are not Play policy mandates.

**Banking / payments.** On launch, read DSPL for system and modules. If below your baseline *and* ASPL shows a pending package, require the update before high-value transfers. If DSPL is current but `areCvesPatched()` fails for a known NFC issue, disable tap-to-pay only.

**MDM.** Sync DSPL + ASPL into your console. Distinguish “behind with nothing to install” (OEM lag) from “update sitting in Settings.” The second case is a user prompt, not a wipe.

**Healthcare / identity.** Use DSPL vs PSPL for a published baseline, then CVE checks before credential enrollment.

Do not invent a consumer Settings toggle named “Security State.” Users install OS and Play system updates through the usual system UI.

## What this is not

- Not a replacement for [Play Integrity API](https://developer.android.com/google/play/integrity) device-and-app attestation.
- Not a root or Magisk detector.
- Not a network call on every `getDeviceSecurityPatchLevel()`.
- Not available as ASPL for every OEM on day one — provider onboarding is in progress.

Pair Security State (patch posture) with Play Integrity (genuine app + certified device) when both signals matter.

<div class="video-embed" style="position:relative;width:100%;max-width:100%;aspect-ratio:16/9;margin:1.5rem 0;background:#0a0a0a;border-radius:8px;overflow:hidden;">
  <iframe src="https://www.youtube.com/embed/fwLiTPtPHjw" title="What’s new in Google Play (Google I/O 2026)" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
</div>

## Checklist

- Depend on `androidx.security:security-state:1.1.0`.
- Request `INTERNET` only if you load OSV reports.
- Gate on DSPL first (offline).
- Soft-prompt when ASPL is ahead of DSPL.
- Use `areCvesPatched()` for NFC / Bluetooth / similar high-risk surfaces.
- Document your baseline date internally; do not hard-code a date you cannot defend from the latest bulletin.
- OEMs: ship Security State Provider and Supplemental Patches XML so backports are visible.

![Android phone on a workbench with cables](https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=1200&h=700&q=80)

## Conclusion

AndroidX Security State 1.1.0 is the supported way to read more than one SPL string. You get per-component device, published, and available levels, plus optional CVE checks against OSV and bulletin data. Use DSPL for an immediate baseline, ASPL so you do not punish a user who has not tapped Install yet, and CVE queries when a specific bug class matters.

OEMs and OTA clients should publish ASPL through Security State Provider so those prompts work on more than GMS Mainline. App teams should treat this as posture data next to Play Integrity — not as a new consumer feature with its own Settings tile.

## Sources

- [Introducing the AndroidX Security State Libraries](https://android-developers.googleblog.com/2026/09/introducing-androidx-security-state-libraries.html) — Android Developers Blog (17 September 2026)
- [Understand device security state](https://developer.android.com/privacy-and-security/understand-device-security-state) — Android Developers (updated 15 September 2026)
- [security-state 1.1.0 release notes](https://developer.android.com/jetpack/androidx/releases/security#security-state_2) — AndroidX
- [security-state-provider release notes](https://developer.android.com/jetpack/androidx/releases/security#security-state-provider_2) — AndroidX
- [Android Security Bulletin](https://source.android.com/docs/security/bulletin)
- [Supplemental security patches](https://source.android.com/docs/security/overview/supplemental-security-patches)
- [OSV and helping developers fix known vulnerabilities](https://opensource.googleblog.com/2024/04/osv-and-helping-developers-fix-known-vulnerabilities.html)
- [Safeguarding user security on Android](https://www.youtube.com/watch?v=RccJYep2v5I) — Android Developers
- [What’s new in Google Play](https://www.youtube.com/watch?v=fwLiTPtPHjw) — Android Developers
