---
title: "How to Check and Replace eMudhra Certificates After Chrome Root Removal"
description: "Step-by-step guide to verify certificate chains in Chrome and Android and replace any eMudhra or emSign certificates after the 2026 root removal."
pubDate: 2026-10-28T14:00:00
heroImage: "https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["security", "android", "google", "how-to"]
noindex: false
---

Chrome removed the emSign ECC Root CA - G3 from its root store on October 27, 2026. Any TLS certificate that still chains to that root now fails in Chrome, even if it was never issued by the compromised intermediates. Website operators and anyone managing servers need a clear way to check chains and replace affected certificates.

This guide shows how to inspect certificate paths in Chrome and on Android, identify eMudhra or emSign issuers, and complete a replacement. For background on the original key compromise and user-side protection steps, see our earlier article on [protecting Chrome and Android from the eMudhra CA compromise](/blog/protect-chrome-android-emudhra-ca-compromise/).

![Golden padlock resting on a keyboard](https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=800&q=80)

## Why the root removal matters now

On October 17, 2026, a researcher reported that private keys for eight eMudhra intermediate CAs had been generated with almost no randomness. One key was the integer 4. Chrome blocked those intermediate keys the same day via a CRLSet update. Android received an equivalent block through Google Play Services.

The intermediates were signed by the emSign ECC Root CA - G3. To protect clients that do not consume CRLSet updates, Chrome removed that root entirely. The change reached devices relying on the Chrome Root Store on the morning of October 27, 2026 Pacific time. Legitimate certificates that chain to the removed root stop working in Chrome regardless of whether they used the weak keys.

Google’s security blog states that website operators with certificates chaining to emSign ECC Root CA - G3 must acquire and install a new TLS certificate from another hierarchy included in the Chrome Root Store. eMudhra has said it is working with subscribers on migration.

## How to view a certificate chain in Chrome (desktop)

Chrome makes the full path visible in a few clicks.

1. Open the site in Chrome.
2. Click the lock icon (or tune icon) to the left of the address bar.
3. Select “Connection is secure” or the equivalent message.
4. Click “Certificate is valid” (or “Certificate details”).
5. In the certificate viewer, switch to the Certification Path or Details tab.

Read every level from the leaf certificate up to the root. Look for names containing “emSign”, “eMudhra”, “EM DV TLS CA”, “EM OV TLS CA”, or “EM EV TLS CA”. If the root listed is “emSign ECC Root CA - G3”, the certificate is affected and must be replaced.

You can also open DevTools (F12 or Ctrl+Shift+I / Cmd+Option+I), go to the Security tab, and click “View certificate”. This shows the same chain.

## How to check the chain on Android Chrome

The mobile steps are shorter but show less detail.

1. Open the site in Chrome on Android.
2. Tap the lock icon next to the address bar.
3. Tap “Details” or “Certificate”.
4. Review the issuer and the certificate hierarchy if shown.

Android Chrome uses the system trust store updated through Google Play Services. After the October 27 root removal, sites chaining to emSign ECC Root CA - G3 produce connection errors. Restart the device if you want to force the latest Play Services data, though the root removal itself travels with the Chrome Root Store update.

For deeper inspection on a device you control, use a desktop browser or a command-line tool against the same hostname.

![Server racks in a data center](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80)

## Checking chains with OpenSSL (for site owners)

If you operate the server, OpenSSL shows exactly what the server sends.

```bash
openssl s_client -connect example.com:443 -servername example.com -showcerts </dev/null 2>/dev/null | openssl x509 -noout -issuer -subject
```

Replace `example.com` with your hostname. Look at every issuer line. Servers usually do not send the root, so the issuer of the highest intermediate reveals the root the chain expects. Search the full output for “emSign” or “eMudhra”.

A single command that filters for the relevant names:

```bash
openssl s_client -connect example.com:443 -servername example.com -showcerts </dev/null 2>/dev/null | grep -iE 'emsign|emudhra|EM (DV|OV|EV) TLS'
```

No output means the served chain does not mention those issuers. Run the check against every hostname, including API endpoints, CDN origins, mail servers, and load-balancer listeners.

## Steps to replace an affected certificate

If any check shows an eMudhra or emSign issuer, or the chain reaches emSign ECC Root CA - G3, replace the certificate.

1. Obtain a new certificate from a CA whose root is included in the Chrome Root Store. Popular public CAs that remain trusted work for this purpose.
2. Install the new leaf certificate and the correct intermediate certificates on every TLS endpoint (web servers, reverse proxies, load balancers, CDNs).
3. Confirm the full chain is served. Browsers will fetch missing intermediates, but many non-browser clients will not.
4. Test in an updated Chrome: the lock icon should appear and the certification path should no longer reference emSign ECC Root CA - G3.
5. Monitor Certificate Transparency logs or your certificate inventory so the next renewal does not reintroduce an affected chain.

Google noted that roughly 30,800 unexpired certificates were associated with the root as of mid-October. Most of those need migration if they have not already been replaced.

## Tips for ongoing certificate hygiene

- Inventory every hostname and TLS endpoint, not only the public website.
- Prefer short-lived certificates or automated renewal (ACME) so replacements are routine.
- Keep Chrome, Android system updates, and Google Play Services current so revocation and root-store changes arrive promptly.
- For non-browser software (Python certifi, Java cacerts, container base images, Go), update the CA bundle separately; those packages do not automatically receive Chrome Root Store changes.
- After any CA incident, re-check chains rather than assuming the leaf certificate is the only item that matters.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/mSCksYQW76w"
    title="This Trusted CA's Private Key Was Literally 4"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

The eMudhra intermediate key problem was contained within hours, but the subsequent removal of emSign ECC Root CA - G3 on October 27, 2026, breaks any remaining certificates that chain to it. Checking the certification path in Chrome, reviewing the issuer on Android, and running a quick OpenSSL command against your hostnames identifies the affected certificates.

Once identified, replace them with certificates from a different hierarchy that remains in the Chrome Root Store, then verify the new chain. Keeping an accurate inventory of TLS endpoints and updating both browsers and application CA bundles reduces the impact of future root-store changes.

## Sources

- Google Blog: Protecting Chrome and Android Users from Compromised eMudhra Intermediate CA Certificates (October 20, 2026)
- Chrome Root Store documentation and root removal timeline
- Public reports on the weak intermediate keys and the October 27 root removal
