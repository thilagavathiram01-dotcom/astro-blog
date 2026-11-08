---
title: "How Developers Adopt Encrypted Client Hello on Android 17"
description: "Step-by-step guide for Android developers to enable Encrypted Client Hello (ECH) on Android 17 apps. Official steps for OkHttp 5.5.0, Network Security Config, and target SDK 37."
pubDate: 2026-11-08T14:00:00
heroImage: "https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "security", "developer", "tutorials"]
noindex: false
---

Android 17 brings platform-level support for Encrypted Client Hello (ECH). This TLS extension encrypts the Server Name Indication (SNI) field so network observers cannot easily see the hostnames your app connects to.

ECH works best when the destination server publishes an ECH configuration in DNS HTTPS records. On Android 17 it is enabled by default for apps that target API level 37 and use a compatible networking library.

This guide shows app developers the practical steps from official Android documentation.

## What ECH Changes for Your App

Before Android 17, SNI leaked the destination hostname in clear text during the TLS handshake. Even with HTTPS, an ISP or network operator could log which domains your users visited.

ECH encrypts that hostname. When a server supports ECH, the real name stays private. When it does not, Android sends ECH GREASE (a randomized fake extension) so real ECH connections do not stand out.

The feature requires Android 17 (API 37) or higher. Apps still targeting lower API levels do not receive the platform support.

![Laptop and phone showing coding software on a desk](https://images.unsplash.com/photo-1763568258266-3794097e5837?auto=format&fit=crop&w=800&q=80)

## Step 1: Update Target SDK and Dependencies

Set `targetSdk` and `compileSdk` to 37 or higher in your module-level `build.gradle`.

For OkHttp, upgrade to version 5.5.0 or later. Add the dependency:

```
implementation("com.squareup.okhttp3:okhttp:5.5.0")
```

OkHttp 5.5.0 added opt-in ECH support that uses the Android 17 platform APIs. HttpEngine support arrives in Android 17 QPR2 (API 37.2). WebView support is planned for a later release.

If you use another networking stack, check its changelog for ECH or Android 17 platform API support.

## Step 2: Enable ECH in OkHttp

OkHttp does not query the HTTPS DNS records needed for ECH by default. You must configure a DNS implementation that retrieves them.

Option A uses Android’s system resolver:

```
val client = OkHttpClient.Builder()
    .dns(AndroidDns())
    .build()
```

`AndroidDns` is available in OkHttp 5.5.0. It calls the platform resolver and fetches the ECH configuration list. Note that the DNS query itself is only encrypted if the device has Private DNS enabled.

Option B uses DNS-over-HTTPS for end-to-end encrypted lookups:

```
val bootstrapClient = OkHttpClient()
val dnsOverHttps = DnsOverHttps.Builder()
    .client(bootstrapClient)
    .url("https://1.1.1.1/dns-query".toHttpUrl())
    .build()

val client = bootstrapClient.newBuilder()
    .dns(dnsOverHttps)
    .build()
```

You also need the matching artifact:

```
implementation("com.squareup.okhttp3:okhttp-dnsoverhttps:5.5.0")
```

Either approach lets OkHttp retrieve the EchConfigList and pass it to the TLS socket before the handshake.

## Step 3: Configure Network Security Config (Optional)

By default, ECH is enabled for all domains when the library supports it and the app targets API 37. You can override the behavior with the `domainEncryption` element in `res/xml/network_security_config.xml`.

Example that keeps the default:

```
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <domain-config>
        <domain includeSubdomains="true">example.com</domain>
        <domain-encryption mode="enabled" />
    </domain-config>
</network-security-config>
```

Possible modes are `enabled`, `opportunistic`, `disabled`, and the system default. Query the active mode at runtime with `NetworkSecurityPolicy.getDomainEncryptionMode(host)`.

Reference the config file in your `AndroidManifest.xml`:

```
<application
    android:networkSecurityConfig="@xml/network_security_config"
    ... >
```

![Developer taking notes while coding at a dual-monitor setup](https://images.unsplash.com/photo-1753715613831-9e48eac86813?auto=format&fit=crop&w=800&q=80)

## Step 4: Handle Fallback and Testing

When a cached ECH configuration is stale, the platform may throw an exception. OkHttp retries once without ECH when the mode allows it. Test on a real Android 17 device or emulator.

Enable Private DNS on the test device (Settings > Network & internet > Private DNS) so DNS lookups are also protected. Without it, the hostname can still leak in the DNS query even if ECH encrypts the TLS handshake.

Verify behavior with packet captures or by checking server logs. Look for the absence of clear-text SNI on supported hosts and the presence of ECH GREASE on unsupported ones.

## Tips for Production

- Pair ECH with Private DNS on devices you control or recommend to users. The combination closes both the DNS and SNI leaks.
- Monitor OkHttp and Android release notes. Future OkHttp versions may enable the AndroidDns path by default.
- If your app talks to first-party servers, ensure those servers publish ECH configurations in HTTPS resource records. CDNs such as Cloudflare already support this for many customers.
- ECH does not hide IP addresses or traffic volume. Combine it with other privacy features such as the Android 17 Contact Picker and one-time location access.

For more Android 17 privacy controls, see our guide on [Android 17 Advanced Protection Mode](/blog/android-17-advanced-protection-six-features/).

## Conclusion

Adopting Encrypted Client Hello on Android 17 is mostly a library and target-SDK upgrade for OkHttp users. Set `AndroidDns` or `DnsOverHttps`, target API 37, and optionally tune the Network Security Config. The platform then encrypts SNI for supported destinations and sends GREASE elsewhere.

The result is fewer clear-text domain names in network logs without changing your request code. Test thoroughly on Android 17 hardware before shipping.

## Sources

- [Adopting Encrypted Client Hello (ECH)](https://developer.android.com/privacy-and-security/encrypted-client-hello) — Android Developers
- [OkHttp 5.5.0 Changelog](https://lysine.dev/okhttp/changelogs/changelog/#version-550) — OkHttp
- [Android 17 is Here](https://developer.android.com/blog/posts/android-17-is-here) — Android Developers Blog

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Utmu5Sk3G54"
    title="Android 17 Deep Dive: Bubbles, Gaming Upgrades, & Privacy Features"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
