---
title: "How to Enable Private DNS on Android for Better Privacy"
description: "Step-by-step guide to turn on Private DNS on Android 9 and later. Encrypt DNS queries with providers like Cloudflare or Google for stronger privacy."
pubDate: 2026-10-12T14:00:00
heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "security", "how-to", "tutorials"]
noindex: false
---

Your phone asks a DNS server where to find every website you visit. By default those lookups travel in plain text. Anyone on the same network can see the sites you request. Private DNS on Android encrypts those queries with DNS-over-TLS so the lookup itself stays hidden.

Android has offered this setting since version 9. It works on Pixel, Samsung, and most other devices running Android 9 or newer. Once enabled, it covers both Wi-Fi and mobile data without an extra app.

![Smartphone showing network settings](https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80)

## Why Private DNS matters

DNS is the phone book of the internet. When you type a domain, your device asks a resolver for the matching IP address. Unencrypted queries reveal the sites you visit to your carrier, public Wi-Fi operator, or anyone monitoring the link.

Private DNS forces the device to use TLS on port 853. The content of the query is protected even if the rest of the connection is not. It does not replace a VPN. It only hides the names you look up.

Google documents three modes:

- **Off**: plain DNS on port 53.
- **Automatic**: try encrypted DNS when the network supports it, otherwise fall back.
- **Private DNS provider hostname**: always use the named resolver you enter.

The hostname mode gives the strongest guarantee. If the resolver cannot be reached, name resolution stops until you change the setting.

## Requirements

You need:

- Android 9 (Pie) or later.
- A working internet connection for the initial setup.
- The exact hostname of a DNS-over-TLS provider.

Search Settings for “Private DNS” if the menu location differs on your device. Samsung places it under Connections → More connection settings. Stock Android usually shows it under Network & internet.

## Step-by-step setup

1. Open the Settings app.
2. Tap Network & internet (or Connections on Samsung).
3. Tap Private DNS. If it is missing, use the Settings search box.
4. Select Private DNS provider hostname.
5. Enter one of the hostnames below exactly as written. Do not add https:// or a port.
6. Tap Save.

After you save, Android begins using the new resolver for all DNS lookups. Test it by opening a few sites. If pages fail to load, switch back to Automatic and check the hostname for typos.

Popular free hostnames:

- **Cloudflare**: `one.one.one.one` — privacy-focused, no logging of queries.
- **Google Public DNS**: `dns.google` — reliable and widely available.
- **Quad9**: `dns.quad9.net` — blocks known malware and phishing domains.
- **AdGuard DNS**: `dns.adguard.com` — blocks many ad and tracker domains.

Choose based on your needs. Ad-blocking resolvers can break some apps or login flows that share domains with advertising services.

## Verify it is working

Open Chrome and visit `https://1.1.1.1/help`. The page reports whether you are using DNS-over-TLS. You can also check `https://dnsprivacy.org` for a similar confirmation.

On some networks (airport or hotel captive portals) Private DNS can block the login page. Temporarily set the mode to Off, complete the portal login, then turn the hostname mode back on.

## Tips and limitations

Private DNS applies system-wide. It does not require root and does not create a VPN interface. Apps that hard-code their own DNS resolvers may bypass it, but most normal traffic is covered.

It encrypts only the DNS lookup, not the subsequent traffic to the site. Use HTTPS (already the default for most sites) or a VPN if you also want to hide the content of the connection.

If you see the message “Private DNS server cannot be accessed,” the hostname is wrong, the network blocks port 853, or the resolver is down. Switch to Automatic and try again later.

For stronger protection on high-risk accounts, combine Private DNS with the steps in our [Android Advanced Protection setup guide](/blog/android-advanced-protection-setup/).

![Person using a laptop on a desk](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80)

## Video walkthrough

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Yj4wOQtj0EA"
    title="How to Use Private DNS on Android (Cloudflare, Google, AdGuard & More)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Enabling Private DNS takes under a minute and stops plain-text domain lookups. Pick a reputable hostname, save it, and test. You can change or disable it any time from the same Settings screen.

This small change improves privacy on every network you join without installing extra software. Pair it with other Android security features for a more complete setup.

## Sources

- Android developer documentation on Private DNS (DNS-over-TLS)
- Cloudflare 1.1.1.1 documentation
- Google Public DNS hostname information
- Quad9 and AdGuard public DNS-over-TLS endpoints
