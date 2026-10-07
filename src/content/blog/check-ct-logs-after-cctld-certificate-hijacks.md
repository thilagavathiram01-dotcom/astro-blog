---
title: "How to Check CT Logs After the ccTLD Certificate Hijacks"
description: "Chrome blocked unauthorized certificates after .gh, .sl, and .as registry hijacks. Learn how domain owners monitor CT logs and set CAA records."
pubDate: 2026-10-07T16:00:00
heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["security", "google", "how-to"]
noindex: false
---

On 6 October 2026, Google's Chrome Secure Web and Networking Team said attackers had compromised the country-code registries for .gh (Ghana), .sl (Sierra Leone), and .as (American Samoa). Those hijacks were not a breach of Google's systems. Attackers changed authoritative DNS records and obtained unauthorized HTTPS certificates for several Google domains and for other organizations.

Chrome already blocked the certificates it identified. Ordinary Chrome users do not need to install a patch or change a setting. Domain owners, especially anyone with a name under those three suffixes, still need to check what was issued in their name.

This guide walks through what Google confirmed, how to search Certificate Transparency logs, and how to publish restrictive CAA records so a later issuance window is harder to reuse.

## What Google confirmed

Google said the certification authorities that issued the certificates did not appear to have done anything wrong. The attackers passed domain-control checks because they controlled DNS for the affected names at the time.

Chrome's first response used CRLSets, the emergency blocklist Chromium pushes to the browser, to stop unauthorized certificates for Google properties. The team also asked the issuing CAs to revoke those certificates so other clients would reject them.

Certificate Transparency logs then showed more organizations, including global brands and widely used services, that appeared to be hit by the same attacks. Chrome blocked those certificates as well and contacted affected organizations where it could.

Google was explicit about the limit of that fix. Browser-side blocking should not be the only defense. DNS hijacks are messy, so Chrome cannot promise it found every affected name. CRLSets also do not reliably protect people who are not using Chrome.

If you already run [Password Checkup on Android and Chrome](/blog/google-password-checkup-android-chrome/), keep that habit. A stolen password and a forged certificate are different problems, but both show up as account risk after a registry incident.

![Padlock icon on a dark screen, representing HTTPS certificate checks](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80)

## Why Certificate Transparency is the alert channel

Chrome requires publicly trusted TLS certificates issued after 30 April 2018 to be logged in Certificate Transparency before it will treat them as valid. Every trusted-by-default certificate Chrome relies on must appear in public CT logs.

That public log is the practical alert. A monitor watches for new certificates that match your domains and notifies you when one appears, including certificates you never requested.

Google's advice is to cover the whole portfolio, not only the main marketing site. Parked names, regional ccTLD properties, and old campaign domains all count. If you operate anything in .gh, .sl, or .as, review recent CT entries for unexpected issuance.

## Step 1: List every name you own

Write down apex domains and important hostnames before you search. Include:

- Production sites and API hosts
- Mail and login subdomains
- Parked or redirect-only names
- Country-code variants, especially .gh, .sl, and .as
- Names delegated to vendors, CDNs, or regional partners

A certificate for `login.example.sl` is as useful to an attacker as one for the apex. Search the parent name so wildcard and subdomain certificates both show up.

## Step 2: Search public CT logs

crt.sh is the usual starting point because it indexes public CT logs. Open `https://crt.sh` and search your domain. Use the `%` wildcard form, such as `%.example.com`, so subdomains are included.

For each recent row, check:

1. The logged date. Focus on the days around the hijacks Google described as happening last week relative to 6 October 2026.
2. The issuer. It should be a CA you actually use.
3. The subject alternative names. Unexpected hosts are a signal even if the issuer looks familiar.
4. Whether you or your certificate vendor requested that issuance.

A certificate you did not order is not proof of abuse by itself. Partners, load balancers, and automated renewals issue certificates too. Compare the entry with your CA account and your DNS provider's change log before you treat it as malicious.

You can also query Google's Certificate Transparency lookup and commercial monitors such as your CA's built-in CT alerts. The requirement is coverage, not a specific vendor. Google points domain owners to public CT monitoring at certificate.transparency.dev.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Yy8erA9G1so"
    title="Certificate Transparency - Chrome's New Rule Is Already Live"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step 3: Confirm Chrome already blocked a known bad certificate

Chrome users do not need to act for the certificates Google has already identified. If you want to see that the browser is receiving revocation data, open `chrome://components` and look for CRLSet. The version number there is the blocklist Chrome is currently using.

Do not treat a current CRLSet as proof that every related certificate is dead outside Chrome. Firefox, Safari, mobile apps with their own TLS stacks, and embedded clients do not read Chrome's CRLSet. Revocation at the issuing CA is what those clients need.

If you find a certificate you did not authorize, contact the issuing CA and ask for revocation, then tell your DNS provider. Google said it worked with CAs to revoke certificates for Google properties. Other organizations need to make the same request for their own names.

## Step 4: Publish restrictive CAA records

Certification Authority Authorization records, defined in RFC 8659, let you name the CAs allowed to issue for a domain. A common record looks like this:

```
example.com. CAA 0 issue "letsencrypt.org"
example.com. CAA 0 issuewild "letsencrypt.org"
example.com. CAA 0 iodef "mailto:security@example.com"
```

Replace the CA identifier with the issuer you actually use. Add one `issue` line per authorized CA. `issuewild` controls wildcard certificates. `iodef` is an optional contact for reports.

Google is clear about what CAA does not do. CAA cannot stop issuance during an active DNS hijack, because the attacker can change CAA along with the rest of the zone. It still matters for two reasons.

First, after you regain DNS, a restrictive CAA policy blocks new issuance from CAs you do not use. Second, CAs may cache a completed domain-control validation and reuse it for later certificates. RFC 8657 account bindings and validation-method restrictions narrow that reuse. Google specifically recommends binding issuance to authorized accounts and methods so a cached check cannot mint fresh certificates after the hijack ends.

CAA can also stop some routing and HTTP-based attacks that never fully take over the registry. Publish it on the apex and confirm it is visible with a public DNS lookup before you consider the step done.

![Network operations desk with multiple monitors used to watch logs](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80)

## Step 5: Lock DNS after you restore control

If a name under .gh, .sl, or .as is yours, confirm the registry account, registrar lock, and authoritative nameservers with the operator. Then:

1. Rotate registry and DNS-host credentials, and turn on multi-factor authentication.
2. Compare current NS and A/AAAA records with a known-good export.
3. Re-issue certificates only from your authorized CA after CAA is in place.
4. Ask the previous issuer to revoke anything you did not request.
5. Leave CT monitoring on, including for parked names.

Registry locks and DNSSEC are worth enabling where the ccTLD supports them. They do not replace CT monitoring. They reduce the chance that the next change happens without you.

## What Chrome is changing next

Google said it will keep working with the web PKI community on shorter certificate lifetimes and less reuse of domain-control validation. That work sits with the CA/Browser Forum ballot on reducing validity and data-reuse periods, the Chrome Root Program, and the Chrome Quantum-resistant Root Program.

Those changes do not clean up this incident. They shrink the window an attacker has after a transient DNS or routing compromise. Until they land, CT monitoring plus CAA with account bindings is the control domain owners can turn on this week.

## Tips that avoid false alarms

- Search CT before you rotate certificates so you have a baseline.
- Exclude your own CA account IDs from alerts once you trust them.
- Review vendor-issued certificates monthly, not only after news breaks.
- Keep a contact at your DNS host who can confirm zone changes outside business hours.
- Do not disable HTTPS or pin an old certificate as a shortcut. Revoke the bad one and issue a new one from an authorized CA.

## Conclusion

Chrome has already blocked the unauthorized certificates it could identify from the .gh, .sl, and .as registry hijacks, and Chrome users do not need a manual fix. Domain owners should still search CT logs for unexpected issuance, ask CAs to revoke anything they did not order, and publish restrictive CAA records with account bindings so cached validation cannot be reused after DNS control returns.

The same checks apply if your names are not in those three suffixes. CT is public for every trusted certificate, which is why Google told organizations to monitor the full portfolio.

## Sources

- Chrome Secure Web and Networking Team, "Chrome's Response to Recent ccTLD Registry Hijacks," blog.google, 6 October 2026.
- Chromium, "CRLSets," chromium.org.
- Certificate Transparency, certificate.transparency.dev.
- RFC 8659, Certification Authority Authorization (CAA) Resource Record.
- RFC 8657, CAA Record Extensions for Account URI and ACME Method Binding.
- CA/Browser Forum, ballot SC-081v3 on reducing certificate validity and data reuse periods.
