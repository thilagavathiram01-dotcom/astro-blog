---
title: "How to Set Up ADB Wi-Fi 2.0 Wireless Debugging on Android 17"
description: "Pair Android 17 devices over Wi-Fi with Platform-Tools 37 and Android Studio. Check mDNS, stay connected across networks, and troubleshoot drops."
pubDate: 2026-09-17
tags: ["android", "tutorials", "how-to"]
heroImage: "/images/adb-wifi-2-wireless-debugging.svg"
---

Wireless debugging used to drop the moment you changed Wi-Fi, closed a laptop lid, or walked to another access point in the same office. **ADB Wi-Fi 2.0**, shipping with **Android 17** and **SDK Platform-Tools 37.0.0**, rebuilds that stack so a paired phone, watch, or TV can reconnect on a trusted network without another USB cable.

This guide walks through official setup, how to confirm you actually have version 2.0, and the checks Google documents when discovery fails.

## What changed in ADB Wi-Fi 2.0

Google reworked three layers at once: the **adb server** on your computer, the **adbd** daemon on the device, and **Android Studio** Device Manager.

Official improvements:

- A new **mDNS** stack on the host replaces Bonjour and the older mDNS backend so connections survive common network changes.
- On the device, wireless debugging can **turn off on an untrusted network** and turn back on when you return to a network you already allowed.
- Devices with wireless debugging enabled **appear in Android Studio Device Manager**, so pairing is no longer a buried dialog.
- Google reports **auto-connection success up about 32%** and **connection speed up about 66%** for 90% of connections in its tests.

Wireless debugging itself still starts on **Android 11** (phones) and **Android 13** (TV and Wear). Version **2.0 of the mDNS service** is what requires **Android 17**.

Older phones can still benefit a little from updating **adb 37** and a current Android Studio build on the computer. The full reconnect-on-trusted-network behavior is an Android 17 device feature.

## What you need

- A device running **Android 17** (for ADB Wi-Fi 2.0). Android 11+ still works for basic wireless pairing.
- **Android SDK Platform-Tools 37.0.0** or newer.
- **Android Studio Quail 3** or later if you pair from the IDE. Google’s I/O tools post also points at later Quail Canary builds for related Device Manager work.
- Workstation and device on the **same Wi-Fi network**. Guest networks and many corporate VLANs block mDNS.

## Pair from Android Studio

1. Update Platform-Tools and Android Studio, then restart the IDE.
2. On the device, enable **Developer options**, then turn on **Wireless debugging**.
3. When the system asks, allow debugging on this network. Check **always allow on this network** if this is a home or office SSID you trust. That is how Android 17 treats a **trusted wireless debugging network**.
4. Open **Device Manager** in Android Studio and use **Pair over Wi-Fi**.
5. Scan the **QR code** with the device, or enter the **pairing code** shown on the phone.
6. Confirm the device is listed as online. Run or debug as you would over USB.

After the first successful pair, Android 17 should reconnect when the phone joins that trusted network again. You should not need to rescan a QR code every morning.

## Confirm the host tools are current

Open a terminal and run:

```bash
adb server-status
```

Google’s documentation wants you to see:

- **version: "37.0.0"** or higher
- **mdns_enabled: true**
- **mdns_backend: LIBADBMDNS**

If mDNS is off, set `ADB_MDNS=1`, then run `adb kill-server` and `adb start-server`.

If the backend is not `LIBADBMDNS`, set `ADB_MDNS_OPENSCREEN=0` and restart the server the same way. That forces the current discovery library instead of an obsolete one.

## Confirm the device is on ADB Wi-Fi 2.0

1. Leave wireless debugging on.
2. On the workstation run:

```bash
adb mdns track-services --proto-text
```

3. Look for a `tls` service with your device IP and port.
4. Confirm the line **`mdns_service_version: "2.0"`** (or higher).

If the command prints nothing, the network is likely blocking mDNS. If you see a service but the version is not 2.0, the device is not on Android 17.

Official sample output includes fields such as `product_model`, `serial`, `hostname`, and `mdns_service_version`. Use those to tell a phone from a watch when several devices are advertising.

## Command-line pairing without the IDE

You can pair from Platform-Tools alone:

1. On the device, open **Wireless debugging** and choose pairing by code. Note the **IP address**, **pairing port**, and **six-digit code**.
2. Run `adb pair IP:PAIRING_PORT` and enter the code.
3. After pairing, `adb devices` should list the device. If it does not appear immediately, use the connection IP and port shown under Wireless debugging with `adb connect`.

Keep pairing ports and connection ports straight. They are not the same number.

## Everyday workflow that stays stable

- Pair once per workstation on each trusted SSID (home, office).
- Prefer **always allow on this network** only on networks you control.
- After a laptop sleep or VPN flap, run `adb devices` before assuming the daemon died.
- If the list is empty, `adb kill-server` then `adb start-server` is still the fastest reset.
- Target a device explicitly with `adb -s SERIAL` when an emulator and a phone are both online.

Android 17 can keep a wireless session across network changes that used to kill adbd. That does not mean every café Wi-Fi will allow discovery. Captive portals and client isolation still break mDNS.

## Troubleshooting checklist

**Device never appears in Device Manager**

- Same SSID, not a guest or IoT VLAN.
- Wireless debugging toggle is on and the current network is allowed.
- `adb server-status` shows version 37+ and `mdns_enabled: true`.

**Pairing QR spins and never finishes**

- Studio’s newer pairing UI is supposed to list discoverable devices instead of hanging on a blind QR. Update Studio if you still have the old dialog.
- Try the pairing code path. Some access points pass mDNS poorly in one direction.

**Drops after you change rooms**

- On Android 17, trusted networks use a smarter mix of **SSID and BSSID** so multi-AP offices are less likely to look like a new network. Re-allow the SSID if you never checked “always allow.”
- Confirm `mdns_service_version` is 2.0. Without it you still have the old drop-prone path.

**Works in Studio, fails in a script**

- Scripts must use the same Platform-Tools 37 binary. A stale `adb` on `PATH` is a common mismatch.

If it still fails, Google asks for device logs plus host logs: set `ADB_TRACE=all`, restart the server, reproduce, then attach the file path printed by `adb server-status` (`log_absolute_path`) on an issue in the Android Studio tracker.

## What this does not replace

USB is still useful for first-time driver installs, recovering a device that will not boot, and networks that block multicast. The old `adb tcpip 5555` plus `adb connect IP:5555` path remains documented for **Android 10 and lower**, and as a fallback that starts with a cable on newer releases.

Wireless debugging is also not a substitute for Play testing. Studio can upload a signed bundle to a Play test track after you generate it; that is a separate I/O 2026 workflow.

## Watch the tools overview

The Android Developers session below covers current Studio and platform tooling, including wireless devices and Device Manager. Use it alongside the official adb page when a UI label differs slightly between Quail stable and Canary.

<iframe width="560" height="315" src="https://www.youtube.com/embed/N4GgGBKnHe4" title="What's new in Android development tools" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Conclusion

Treat ADB Wi-Fi 2.0 as three version pins: **Android 17** on the device, **Platform-Tools 37** on the host, and a current **Android Studio** Device Manager. Pair once on a trusted network, verify `mdns_service_version: "2.0"`, and keep the new mDNS backend enabled.

If you only do one check today, run `adb server-status` and `adb mdns track-services --proto-text`. Those two commands tell you whether you have the new stack or you are still debugging the old disconnects.

## Sources

- [Introducing Fast and Reliable Wireless Debugging with ADB Wi-Fi 2.0](https://android-developers.googleblog.com/2026/09/wireless-debugging-adb-wifi-2.html) — Android Developers Blog
- [Android Debug Bridge (adb)](https://developer.android.com/tools/adb) — Android Developers (updated 2026-09-02)
- [Run apps on a hardware device](https://developer.android.com/studio/run/device) — Android Studio documentation
- [Android Studio I/O Edition: What’s new in Android Developer tools](https://android-developers.googleblog.com/2026/05/whats-new-android-developer-tools.html)
- [SDK Platform-Tools releases](https://developer.android.com/tools/releases/platform-tools)
