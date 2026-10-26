---
title: "How to Protect Chrome and Android from eMudhra CA Compromise"
description: "Learn how Google blocked weak eMudhra intermediate CA keys and the steps Android and Chrome users should take to stay protected."
pubDate: 2026-10-26T14:00:00
heroImage: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["security", "android", "google", "how-to"]
noindex: false
---

On October 17, 2026, a security researcher reported that private keys for eight eMudhra intermediate certificate authority (CA) certificates had been generated with insufficient randomness. Those weak keys could let an attacker forge trusted HTTPS certificates and impersonate any website for clients that still trusted the CAs.

Google’s Chrome Root Program confirmed the findings the same day and blocked the affected keys. Android devices received equivalent protection through Google Play Services. Most users are already covered, but a few simple checks keep your devices current.

![Digital padlock resting on a laptop keyboard](https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80)

## What the eMudhra compromise involved

The report arrived at 18:05 UTC on Saturday, October 17. The private keys belonged to eight subordinate CA certificates issued by eMudhra (emSign). Six of them could issue TLS certificates; two were for code signing. All were created in April 2025 and had been trusted under major root programs.

Because the keys used weak cryptographic entropy, anyone could recover them from the public certificates. The researcher demonstrated control by signing a short message with each key. Google’s analysis found no TLS certificates chaining to the six affected intermediates in Certificate Transparency logs before the block. That means Chrome’s default configuration would have rejected any forged certificates even before the CRLSet update.

Chrome landed a CRLSet update at 19:45 UTC the same day. The update blocks the Subject Public Key Info (SPKI) hashes of the affected intermediate CAs. Because it targets the public key rather than a specific certificate serial, every certificate that used those keys is rejected without a browser restart or update.

## How Android and Chrome received protection

Android devices and Googlebooks received an equivalent block through Google Play Services around 22:00 UTC on Monday, October 19. Google says the majority of Android devices already have the update. Restarting the device forces Play Services to check for the latest revocation data if it has not yet applied.

Chrome users on desktop, Android, and other platforms that use the Chrome Root Store were protected by the CRLSet within hours of the report. No browser update was required for the initial block. The same protection applies to Chromebooks.

On October 27, 2026 (Pacific time morning), Chrome will remove the emSign ECC Root CA - G3 entirely from the Chrome Root Store. That root signed the compromised intermediates. Website operators whose certificates still chain to that root must replace them with certificates from another hierarchy listed in the Chrome Root Store to avoid breakage after the removal.

## Steps to confirm your devices are protected

Most people do not need to take extra action beyond keeping systems updated. These checks confirm the blocks are active.

1. Restart your Android phone or tablet. This triggers Google Play Services to pull the latest certificate revocation data if it has not already done so.
2. Open Chrome and go to chrome://settings/help (or Settings > About Chrome on Android). Confirm the browser is up to date. The CRLSet block does not require a version bump, but the latest stable release includes other security fixes.
3. On desktop Chrome, visit chrome://components and look for the CRLSet component. It should show a recent version. Force an update if the button is available.
4. For website owners: check whether any of your TLS certificates chain to emSign ECC Root CA - G3. If they do, obtain a replacement certificate from a different CA that is included in the Chrome Root Store before October 27.

These steps take only a few minutes and match the guidance published by the Chrome and Android Security Teams.

![Smartphone and laptop showing login and security icons](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80)

## What this means for everyday browsing

Chrome and Android users who received the updates are protected against certificates that rely on the compromised keys. Navigation, payments, and login pages continue to work normally. The only visible change for most people is that a small number of sites that still use the affected root may show connection errors after October 27 until those site operators replace their certificates.

Google noted that no fraudulent certificates from the affected intermediates appeared in Certificate Transparency logs before the blocks. Clients that enforce Certificate Transparency (including Chrome by default) therefore had an additional layer of protection.

Other browsers acted as well. Firefox blocked the certificates through OneCRL on October 17. Apple and Microsoft platforms applied blocks in the following days. Non-browser tools that ship their own CA bundles (some versions of Python, Node.js, Go, and container images) needed separate updates from their maintainers.

## Tips for staying current on certificate security

- Keep Google Play Services and Chrome updated. Automatic updates cover the majority of devices.
- Restart Android devices periodically. It forces Play Services to refresh revocation lists.
- If you manage websites, monitor Certificate Transparency logs and your certificate expiry dates. Replace certificates that chain to roots scheduled for removal.
- For enterprise environments, review whether any internal tools or proxies still trust the emSign root and update their trust stores.
- Review our earlier guide on [Android scam protections in Google Messages](/blog/android-enhanced-scam-protection-google-messages/) for related mobile security controls that use on-device analysis.

Certificate authority incidents are rare but serious because they affect the trust model that HTTPS relies on. The rapid response from browser vendors limited the window of exposure.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/yW1RnJ5oaMk"
    title="A Certificate Authority Just Got Caught Using a Private Key of 4"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

The eMudhra intermediate CA key compromise was contained quickly. Chrome blocked the weak keys within hours of the report on October 17, and Android received the same protection through Google Play Services shortly afterward. Restarting your Android device and confirming Chrome is current are the practical steps most users need.

Website operators with certificates chaining to the emSign ECC Root CA - G3 have until the morning of October 27, 2026 (Pacific time) to migrate to a different trusted hierarchy. After that date the root will no longer be trusted by Chrome.

Keeping browsers and mobile operating systems updated remains the most effective defense against certificate-related risks. The coordinated response across Chrome, Android, Firefox, and other platforms shows how quickly the ecosystem can react when a CA’s key material is found to be weak.

## Sources

- Google Blog: Protecting Chrome and Android Users from Compromised eMudhra Intermediate CA Certificates (October 20, 2026)
- Chrome Root Program timeline and CRLSet update details
- Mozilla and other vendor block announcements for the same certificates
