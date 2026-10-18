---
title: "Google Meet Now Protects Calls With Post-Quantum Crypto"
description: "Google Meet adds post-quantum cryptography to video calls on web and room hardware. Learn what it means and why no action is required."
pubDate: 2026-10-18T14:00:00
heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["security", "google", "productivity"]
noindex: false
---

Google Meet is rolling out post-quantum cryptography (PQC) for calls. The change started on October 12, 2026, for laptop web clients and meeting room hardware. Mobile support is coming soon. You will not see any new buttons or settings. The encryption simply becomes stronger in the background.

This update protects against a future risk known as Store Now, Decrypt Later. An attacker could record encrypted Meet traffic today and try to decrypt it years later if a powerful quantum computer appears. No such computer exists now. Google is applying the protection early so today’s calls stay safe.

Meet previously used quantum-safe encryption only for client-side encrypted (CSE) calls. The new rollout expands it to regular Meet calls for eligible accounts.

![Abstract digital security visualization with glowing locks and data streams](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80)

## What post-quantum cryptography means for Meet

Classical public-key cryptography, such as RSA and elliptic-curve methods, relies on math problems that are hard for ordinary computers but become easy for a large quantum computer using Shor’s algorithm. Symmetric encryption like AES remains strong if key sizes are large enough.

Post-quantum cryptography uses different math problems that stay hard for both classical and quantum machines. NIST has standardized several algorithms, including lattice-based ones such as ML-KEM (formerly Kyber) for key exchange and ML-DSA for signatures.

Google has been migrating products toward PQC for years and has set 2029 as an internal target for broader readiness. The Meet change is one visible step in that larger effort. It applies automatically to hosts and participants. Neither administrators nor end users need to change any setting.

The gradual rollout for web clients and room hardware can take up to 15 days for visibility on both Rapid Release and Scheduled Release domains. Availability covers all Google Workspace customers, Workspace Individual subscribers, and users with personal Google accounts.

## How the protection works in practice

There is no user-facing toggle. Google implements the necessary cryptographic updates on its infrastructure. Calls continue to look and behave exactly as before. Encryption still protects the media and signaling in transit. The difference is that the key-exchange portion now resists a hypothetical future quantum attacker who recorded the traffic.

This is distinct from client-side encryption. CSE already offered stronger protection for sensitive meetings and continues to do so. The new PQC layer strengthens the default path that most people use.

Mobile apps will receive the same treatment once the rollout reaches them. Until then, web and hardware rooms already benefit.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/_C5dkUiiQnw"
    title="Post-quantum cryptography: Security after Shor’s algorithm"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Why Google is acting now

Quantum computers large enough to break current public-key systems do not exist. Research continues to lower the estimated resources required, so organizations are moving earlier rather than waiting for a sudden breakthrough. Recording encrypted traffic today is cheap. Decrypting it later with a future machine is the concern.

Google’s own public timeline points to 2029 for completing its broader PQC migration. The Meet update is consistent with that schedule and with similar work already underway in Chrome, Cloud, and other services. Protecting live video calls reduces the window during which harvested data could later be exposed.

For comparison, see how Android strengthens device-level protections in our guide to [Advanced Protection on Android](/blog/android-advanced-protection-setup/).

## What users and admins should know

**End users**

Continue joining and hosting meetings as usual. No prompt appears, and no option needs to be enabled. The stronger encryption is transparent.

**Administrators**

There is no admin control for this feature. It cannot be turned off. The change applies across Workspace, Individual, and personal accounts that use Meet. Check the official Workspace Updates blog for the exact rollout window if you need to document compliance.

**CSE users**

Client-side encrypted calls already used quantum-safe methods. Those meetings retain their existing protections. The new rollout mainly benefits standard calls.

**Verification**

You cannot easily inspect the cipher suite of a live Meet call the way you can with a browser TLS connection. Trust the official announcement and the automatic nature of the change. Google’s Help Center page on call and meeting encryption remains the reference for current behavior.

![Person participating in a video conference call on a laptop](https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=800&q=80)

## Tips for stronger meeting security

PQC addresses one future risk. Everyday practices still matter.

- Prefer client-side encryption for the most sensitive discussions when your organization supports it.
- Use a strong Google Account password and two-step verification or passkeys.
- Limit who can join or record a meeting through Meet’s standard controls.
- Keep the Google Meet app and Chrome updated so you receive security fixes promptly.
- For device-level protection on Android, review settings such as Private DNS if you want encrypted name resolution alongside other controls.

These steps complement the automatic cryptographic upgrade rather than replace it.

## Looking ahead

Mobile support will arrive later. Google has not published an exact date. Once it lands, the same transparent protection should apply to Android and iOS Meet clients.

The broader industry continues to standardize and deploy PQC. NIST algorithms are already in use in browsers and cloud services. Meet’s change is a practical example of applying those standards to a high-volume communication product.

If you host regular meetings, the practical takeaway is simple: keep using Meet. The platform is now applying stronger, future-resistant encryption without requiring any configuration on your side.

## Sources

- [Google Meet now uses post-quantum cryptography](https://workspaceupdates.googleblog.com/2026/10/google-meet-now-uses-post-quantum-cryptography.html) — Google Workspace Updates
- [Google Workspace Weekly Recap – October 16, 2026](https://workspaceupdates.googleblog.com/2026/10/weekly-recap-10-16-2026.html) — Google Workspace Updates
- [PQC in Plaintext: Google Cloud’s post-quantum cryptography roadmap](https://cloud.google.com/blog/products/identity-security/pqc-in-plaintext-google-clouds-post-quantum-cryptography-roadmap) — Google Cloud
- [Setting a timeline for post-quantum cryptography migration](https://blog.google/innovation-and-ai/technology/safety-security/cryptography-migration-timeline/) — Google Blog
- [Post-quantum cryptography: Security after Shor’s algorithm](https://www.youtube.com/watch?v=_C5dkUiiQnw) — YouTube (Chalk Talk)
