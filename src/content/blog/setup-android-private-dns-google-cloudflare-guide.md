---
title: "How to Set Up Private DNS on Android for Better Privacy"
description: "Step-by-step guide to enable Private DNS on Android using Google or Cloudflare hostnames for encrypted DNS queries and improved privacy."
pubDate: 2026-10-19T16:00:00
heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "how-to", "security", "productivity"]
noindex: false
---

Private DNS on Android encrypts your domain name lookups so your carrier or public Wi-Fi cannot easily see every site you visit. The feature has been available since Android 9 and works on both Wi-Fi and mobile data once configured. You only need a provider hostname—no extra apps required for the basic setup.

Most people leave the setting on Automatic. That mode tries encrypted DNS when the network supports it and falls back to plain DNS otherwise. Switching to a specific hostname forces DNS-over-TLS and gives you consistent privacy.

![Person configuring network settings on a smartphone](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Why Private DNS Matters

DNS queries normally travel in clear text. Anyone on the same network, or your mobile carrier, can log the domains you resolve. Private DNS wraps those queries in TLS on port 853. The connection is encrypted end-to-end between your phone and the resolver you choose.

Google and Cloudflare both publish free hostnames that work with Android’s Private DNS field. Google’s resolver prioritizes reliability and speed. Cloudflare emphasizes minimal logging. Neither requires an account for the basic service.

You can also use filtering hostnames from the same providers if you want to block known malware domains. Those options appear later in this guide.

## Locate the Private DNS Setting

The exact menu path varies by manufacturer, but the search bar finds it quickly on almost every phone.

1. Open **Settings**.
2. Tap the search icon and type **Private DNS**.
3. Select the Private DNS result.

On a near-stock Pixel or Motorola device the path is usually Settings → Network & internet → Private DNS. On Samsung phones it sits under Settings → Connections → More connection settings → Private DNS.

You will see three choices: Off, Automatic, and Private DNS provider hostname. Select the hostname option.

## Enter a Trusted Hostname

Android accepts only a hostname in this field, never a raw IP address. Type one of the following exactly:

- Google Public DNS: `dns.google`
- Cloudflare: `one.one.one.one`
- Cloudflare malware blocking: `security.cloudflare-dns.com`
- Cloudflare family (malware + adult content): `family.cloudflare-dns.com`

Tap **Save**. Android tests the connection immediately. If the hostname is correct and port 853 is open, the setting sticks and a small “Private DNS” indicator may appear in the status bar on some devices.

If you see “Private DNS server cannot be reached,” double-check the spelling or try the other provider. Some public Wi-Fi networks block port 853; switch to Automatic temporarily while you are on that network, then restore the hostname afterward.

![Close-up of a smartphone screen showing network settings](https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80)

## Verify the Change

Open a browser and visit a site you know works, such as example.com or google.com. Then visit https://1.1.1.1/help if you chose Cloudflare, or simply continue browsing normally for Google. Successful page loads confirm the resolver is answering.

You can also use a DNS leak test site. The reported resolver should match the provider you entered. Results can take a few seconds to update after you save the setting.

## Additional Provider Options

Quad9’s hostname `dns.quad9.net` blocks known malicious domains while still providing fast resolution. AdGuard’s public hostname `dns.adguard-dns.com` reduces many ads and trackers system-wide. Both work the same way: paste the hostname, save, and test.

Filtering DNS cannot remove every ad. YouTube, Instagram, and similar apps often serve ads from the same domains that deliver the main content, so those ads continue to appear. The benefit is mainly on ordinary websites and in-app browser views.

## Tips for Reliable Use

- Search Settings for “Private DNS” instead of hunting through menus.
- Write down the hostname you chose so you can restore it later.
- Switch to Automatic or Off if a captive portal (hotel or airport Wi-Fi login page) refuses to load.
- Private DNS encrypts only name lookups. Your actual page traffic still needs a VPN if you want full protection.
- Test both Wi-Fi and mobile data after setup. The setting applies to both.

If you later want more granular control, Android also offers per-network DNS overrides on some Wi-Fi connections, but Private DNS is the simplest system-wide method.

For related Android privacy features, see our guide on [Android Advanced Protection setup](/blog/android-advanced-protection-setup/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Yj4wOQtj0EA"
    title="How to Use Private DNS on Android (Cloudflare, Google, AdGuard & More)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Setting up Private DNS takes under a minute and immediately encrypts your DNS queries on every network. Choose `dns.google` for straightforward reliability or `one.one.one.one` for Cloudflare’s privacy focus. Filtering hostnames add light protection without extra apps. Once saved, the setting persists until you change it, giving you consistent privacy on both Wi-Fi and cellular data.

## Sources

- Google Public DNS documentation: https://developers.google.com/speed/public-dns/docs/using
- Cloudflare 1.1.1.1 Android setup: https://developers.cloudflare.com/1.1.1.1/setup/android/
- Android Private DNS feature (available since Android 9)
