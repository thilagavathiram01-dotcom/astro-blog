---
title: "How to Test Multi-Device Interactions with the Android Emulator"
description: "Step-by-step guide to enable zero-configuration peer-to-peer networking between Android Emulator instances for multi-device app testing."
pubDate: 2026-10-17T16:30:00
heroImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "how-to", "developer"]
noindex: false
---

Testing apps that talk between phones, tablets, or companion devices used to require awkward port-forwarding scripts. Android Emulator 36.5 and later changes that. Multiple virtual devices on the same host now share a virtual Wi-Fi network automatically.

You can discover peers with Network Service Discovery, connect via Wi-Fi Direct, or address another emulator by its IP. This guide shows the official setup path from Android Developers documentation so you can validate multi-device flows without physical hardware.

## What changed in the networking stack

Earlier emulator versions isolated each Android Virtual Device (AVD) behind its own virtual router. Connecting two instances meant opening the emulator console or using adb to create host-to-guest port mappings.

Version 36.5 introduces a shared virtual Wi-Fi backplane. All running AVDs on the same machine appear as separate devices on one network. Protocols that rely on local discovery work out of the box. The change also improves stability by removing the flaky redirects that previously caused dropped connections.

Google lists these practical gains:

- Zero configuration for basic peer connectivity.
- Native support for NSD and Wi-Fi Direct.
- Consistent behavior on Windows, macOS, and Linux.
- Easier continuous-integration pipelines that spin up multiple devices.

The feature is on by default once you update the emulator package.

![Android phones and tablets arranged for testing](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## Update the emulator

1. Open Android Studio.
2. Go to **Tools > SDK Manager** (or the SDK Manager icon on the toolbar).
3. Switch to the **SDK Tools** tab.
4. Check **Android Emulator** and note the version. Update to 36.5 or higher if needed.
5. Click **Apply** and wait for the download and install to finish.
6. Restart Android Studio if prompted.

Confirm the version later by launching an AVD and checking the emulator window title or running `emulator -version` from a terminal that has the SDK tools on PATH.

## Launch multiple devices

Create or select two (or more) AVDs that represent the form factors you need. For example, one Pixel phone and one tablet, or a phone plus a Wear OS or automotive image if your app targets those.

1. Open the **Device Manager**.
2. Start the first AVD.
3. Start the second AVD. Both can run at the same time.
4. Verify they appear in `adb devices`. You should see two entries with distinct serial numbers.

Because they share the virtual Wi-Fi network, standard discovery APIs can find each other. No extra flags or console commands are required for basic connectivity.

## Find an emulator IP address

When you need a direct IP instead of discovery, query the Wi-Fi interface from the host:

```bash
adb -s <serial> shell ip addr show wlan0
```

Look for the inet address on wlan0. Other emulators can then connect to that address on the ports your app listens on. This is useful for custom socket servers, HTTP endpoints, or apps that accept a manual IP.

## Test common multi-device scenarios

**File sharing and local multiplayer.** Start a service that registers with NSD on one device. Open the matching client on the second device and confirm it discovers and connects.

**Companion apps.** Launch a phone AVD and a Wear or automotive AVD. Exercise the pairing or data-sync flows that normally require physical proximity.

**CI pipelines.** Script the launch of several headless or windowed emulators. Because the network is automatic, your tests no longer need fragile port-forward setup steps that break when port numbers change.

If you previously used the older redirection method (console `redir` commands or `adb forward`), you can leave those out for Emulator 36.5+. The documentation still describes the legacy approach for older packages.

![Developer desk with multiple screens and devices](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## Tips for reliable sessions

- Allocate enough host RAM. Each AVD needs its own memory; running three modern images can push a 16 GB machine.
- Prefer cold boots when testing network state so previous snapshots do not hide connectivity bugs.
- Use `adb -s <serial>` when you need to target a specific instance for logs or shell commands.
- For apps that rely on Google Play services discovery, ensure the images include Play services if your flow requires them.
- Disable the shared network only if you hit a conflict; the interconnect docs explain the switch.

Related reading on emulator features appears in our guide to [Android Emulator ADB and adaptive testing](/blog/android-emulator-adb-emu-adaptive/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Up3hyBSDAMA"
    title="Best practices in using the Android Emulator (Google I/O'19)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Android Emulator 36.5 removes the main friction from multi-device testing. Update through the SDK Manager, launch two or more AVDs, and use NSD, Wi-Fi Direct, or direct IPs to exercise real interaction paths. The shared virtual network works the same on every host OS and needs no custom scripts for everyday cases.

## Sources

- [Test Multi-Device Interactions with the Android Emulator](https://developer.android.com/blog/posts/test-multi-device-interactions-with-the-android-emulator) — Android Developers Blog, 13 April 2026
- [Interconnecting Emulator instances](https://developer.android.com/studio/run/emulator-networking-interconnect) — Android Developers documentation, updated 13 April 2026
- [Android Emulator networking](https://developer.android.com/studio/run/emulator-networking) — Android Developers
