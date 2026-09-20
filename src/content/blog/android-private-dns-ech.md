---
title: "How to Turn On Private DNS on Android (and Why Android 17 Needs It)"
description: "Encrypt DNS lookups with Android Private DNS, pick a provider hostname such as dns.google, and pair it with Encrypted Client Hello on Android 17 so fewer networks can see which sites you open."
pubDate: 2026-09-20T20:30:00
tags: ["android", "tutorials", "how-to"]
heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&h=630&q=80"
---

HTTPS encrypts the contents of a page. It does not, by itself, hide the **name** of the site you asked for. That name still leaves the phone as a DNS lookup, and on many networks it also appears in the TLS handshake as Server Name Indication.

Android has a built-in fix for the first leak: **Private DNS**. On Android 17, Google added **Encrypted Client Hello (ECH)** so supported apps can hide the second leak too. ECH only helps if DNS is already encrypted. This guide is the consumer path: turn Private DNS on, choose a hostname you trust, confirm it works, and understand what Android 17 does and does not hide.

## What Private DNS actually encrypts

When an app opens `news.yumpdf.com`, the phone asks a DNS resolver for an IP address. On a default coffee-shop or hotel network that query is often plain text. Anyone on the path can log the hostname even if the later HTTPS session is solid.

Private DNS wraps those questions and answers in **DNS-over-TLS**. Android Help is explicit: the feature “helps secure only DNS questions and answers. It can’t protect anything else.” It is not a VPN. It does not change your public IP. It does not encrypt the bytes of the website after the name is resolved.

Google’s Pixel and Android help pages both say the default is **Automatic**: the phone uses Private DNS on every network that supports it, and they recommend leaving that on.

![Person using a smartphone on a public cafe table](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80)

## Requirements

- **Android 9 (Pie) or later** for the Private DNS setting (Pixel Help dates the network panel to 9.0+)
- A working internet connection so Android can validate the hostname when you Save
- A resolver that publishes a **DNS-over-TLS hostname**, not only an IPv4 address such as `8.8.8.8`

Samsung and other skins sometimes nest the row under **Connections → More connection settings**. If you cannot see it, search Settings for `Private DNS`.

## Turn Private DNS on (stock Android and Pixel)

These steps match [Android Help](https://support.google.com/android/answer/9654714) and [Pixel Phone Help](https://support.google.com/pixelphone/answer/2819583):

1. Open **Settings**.
2. Tap **Network & internet**.
3. Tap **Private DNS**. If the row is missing, use the Settings search box.
4. Choose one of the three official options:
   - **Off** — DNS is unencrypted. Avoid this on public Wi-Fi.
   - **Automatic** — use encrypted DNS when the current network offers it.
   - **Private DNS provider hostname** — lock every network to a resolver you name.
5. Tap **Save**.

If you pick a hostname and Save fails, Android could not complete a TLS handshake with that resolver. Check spelling, try another network, and do not paste an IP address into the hostname field.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/4_DKodOYPZ4" title="How HTTPS works — Google Chrome Developers" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Hostnames that are documented and widely used

Android wants a **hostname**, because that is what TLS authenticates.

| Provider | Hostname to type |
| --- | --- |
| Google Public DNS | `dns.google` |
| Cloudflare | `one.one.one.one` |
| Quad9 | `dns.quad9.net` |

Google’s own community replies list `dns.google` for system-wide Private DNS, and `8.8.8.8` / `8.8.4.4` only for the older per-Wi-Fi static DNS fields. Those IPv4 fields are **not** Private DNS. They do not encrypt lookups.

Pick one resolver and stay on it for a week before you judge speed. Jumping between three hostnames makes it hard to tell whether a broken site is the resolver or the app.

## Samsung, OnePlus, and other skins

The control is the same feature with a different path:

1. Open **Settings → Connections** (Samsung) or **Network & internet**.
2. Open **More connection settings** if that submenu exists.
3. Tap **Private DNS**.
4. Choose **Private DNS provider hostname** and enter `dns.google` (or another host from the table).
5. Save and open a few sites in Chrome to confirm pages still load.

If Save succeeds but some carrier-branded apps fail, try **Automatic** instead of a pinned hostname. A few captive portals and enterprise Wi-Fi setups break when they cannot inspect DNS.

![Close-up of a smartphone settings screen in a person’s hands](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=80)

## Why Android 17 still needs this switch

On 27 August 2026 Google published [4 new ways Android is protecting your network connections](https://blog.google/security/new-android-network-security-protections/). Android 17 adds **Encrypted Client Hello**. ECH encrypts the destination name inside the TLS ClientHello so a network operator cannot read it from the handshake the way it can read classic SNI.

Google’s post is careful: ECH works **with** Private DNS. If the lookup stays in the clear, the hostname is already visible before TLS starts. Independent write-ups of the same launch make the same point: leave encrypted DNS off and ECH’s privacy gain collapses.

What ECH does **not** hide, even on Android 17:

- Destination IP addresses
- Traffic volume and timing
- Apps that have not adopted an ECH-capable stack (Google pointed developers at OkHttp 5.5.0 and API level 37)
- Sites that do not publish ECH configuration in DNS HTTPS records

Treat ECH as a platform default you benefit from when apps and sites catch up — not as a setting you toggle next to Private DNS.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/jPfUDVXkj-0" title="Android security and privacy — Android Developers" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Confirm it is working

After you Save a hostname:

1. Open Chrome and load a few HTTPS sites you use daily.
2. Toggle Airplane mode on and off once so the radio rebinds.
3. If pages fail only on one Wi-Fi network, that network may be intercepting DNS. Switch to **Automatic** on that SSID by turning Private DNS off only if you must join a captive portal, then turn it back on after you authenticate.
4. Optional: visit Google Public DNS’s web test pages or Cloudflare’s `1.1.1.1/help` from the phone’s browser to see whether the resolver you named is the one answering.

Do not install a random “DNS changer” APK. The system setting is the supported path.

## What to do on hotel and cafe Wi-Fi

1. Keep Private DNS on **Automatic** or pinned to `dns.google`.
2. Complete the hotel splash page if the network blocks all DNS until you accept terms. Temporarily set Private DNS to **Off**, sign in, then set it back.
3. Prefer a personal hotspot or a VPN you already trust for banking if the network is hostile. Private DNS is one layer.
4. Remember Android Help’s limit: encrypted DNS does not hide the rest of the session.

## Common mistakes

- Typing `8.8.8.8` into the Private DNS hostname box. That field must be a name such as `dns.google`.
- Assuming Private DNS blocks ads. Some third-party resolvers filter domains; Google Public DNS does not advertise itself as an ad blocker. Use it for encryption, not for hiding banners.
- Turning the feature **Off** after one failed Save and leaving it off. Try another hostname first.
- Expecting ECH on Android 17 to cover every Play Store app overnight. Google documented an app and library requirement.

## Conclusion

Private DNS is the one network setting most Android phones already have and most people never open. Leave it on **Automatic**, or pin `dns.google` if you want the same resolver on every network. On Android 17 that choice also unlocks the privacy value of Encrypted Client Hello for apps that implement it.

It will not replace a VPN, and it will not encrypt your entire session. It will stop casual network logs of every hostname your phone asks for. That is enough reason to tap Save once and leave the row alone.

Official steps live in [Android Help: advanced network settings](https://support.google.com/android/answer/9654714) and [Pixel network settings](https://support.google.com/pixelphone/answer/2819583). The Android 17 pairing with ECH is described in Google’s [August 2026 network security post](https://blog.google/security/new-android-network-security-protections/).

## Sources

- [Manage advanced network settings on your Android phone](https://support.google.com/android/answer/9654714) — Android Help
- [Control airplane mode, private DNS and other network settings](https://support.google.com/pixelphone/answer/2819583) — Pixel Phone Help
- [4 new ways Android is protecting your network connections](https://blog.google/security/new-android-network-security-protections/) — Google Security Blog, 27 August 2026
- [Google Public DNS](https://developers.google.com/speed/public-dns) — hostname `dns.google`
- [How HTTPS works (YouTube)](https://www.youtube.com/watch?v=4_DKodOYPZ4) — Chrome Developers
- [Android security and privacy (YouTube)](https://www.youtube.com/watch?v=jPfUDVXkj-0) — Android Developers
