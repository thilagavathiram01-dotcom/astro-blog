---
title: "DeepMind AI Agents Find RSA-1024 Flaws: What to Check"
description: "Google DeepMind's AI agents found weaknesses in legacy 1024-bit RSA. Learn what it means and how to check your systems for old keys."
pubDate: 2026-11-07T14:00:00
heroImage: "https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["security", "ai", "google"]
noindex: false
---

Google DeepMind announced on November 6, 2026 that human-guided AI agents uncovered two weaknesses in legacy 1024-bit RSA cryptosystems. Modern systems using 2048-bit or larger keys remain unaffected.<grok type="render_inline_citation" citation_id="630" />

The findings show AI can accelerate cryptanalysis of older standards. Security teams should inventory remaining 1024-bit keys and migrate them.

![Server rack with network cables in a data center](https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?auto=format&fit=crop&w=800&q=80)

## What DeepMind Actually Found

The work came from DeepMind's Science team led by Dj Dvijotham and Abhradeep Thakurta, in collaboration with cryptographers Nadia Heninger (UC San Diego and Inria) and Emmanuel Thomé (Inria). Pushmeet Kohli, VP of Science at DeepMind, shared the results.<grok type="render_inline_citation" citation_id="630" />

Two advances stood out:

- **Signature padding weakness**: Once an attacker controls roughly half the signed data block (or more), the padding normally used to block forgery adds little or no protection. For short 32-byte digests, the agents identified an algorithm DeepMind estimates is about 1,600 times more efficient than the prior best method on 1024-bit keys. This is a theoretical estimate.
- **Batch factoring improvement**: A new method reduces the average cost of factoring each additional 1024-bit key in a batch by about 30 times compared with earlier batch techniques.

In a sandboxed test against an already-solved 1024-bit academic benchmark key, the agents' implementation reproduced the known result with 3.5 times less CPU time and under one-thousandth the compute needed to factor the key outright. No live systems were tested or compromised.<grok type="render_inline_citation" citation_id="631" />

DeepMind stressed that these results apply only to obsolete 1024-bit RSA. Current standards that use 2048-bit or larger keys stay secure against the reported techniques.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/bCe6Lziz-B4"
    title="Google DeepMind says AI agents found two weaknesses in legacy 1024-bit RSA"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Why This Matters for Legacy Systems

RSA-1024 was deprecated years ago. NIST guidance treats keys shorter than 2048 bits as disallowed for generating digital signatures and classifies 1024-bit RSA as legacy cryptography. Many organizations still carry older certificates, firmware, VPN configurations, SSH host keys, or hardware security modules that use them.

The new results lower the theoretical and practical cost of attacking those remaining deployments. Batch methods make large-scale scanning of related keys cheaper. The signature findings weaken assumptions about padding in certain oracle-style scenarios (for example, when an attacker can submit chosen data to a signing device).

This does not mean everyday HTTPS, messaging, banking apps, or software updates that already use modern key sizes are suddenly exposed. It does mean any remaining 1024-bit material should be treated as higher priority for replacement.

For context on how Google has handled related cryptographic upgrades elsewhere, see our guide to [Google Meet post-quantum cryptography](/blog/google-meet-post-quantum-cryptography/).

![Close-up of illuminated server equipment and cabling](https://images.unsplash.com/photo-1680992044138-ce4864c2b962?auto=format&fit=crop&w=800&q=80)

## How to Check Your Environment for Legacy RSA-1024 Keys

Follow these steps to locate and assess any remaining 1024-bit RSA material. Work in a test environment first and document findings.

### 1. Scan TLS Certificates and Endpoints

Use standard tools to inspect public certificates:

```bash
# Example with openssl for a single host
openssl s_client -connect example.com:443 -servername example.com </dev/null 2>/dev/null | openssl x509 -noout -text | grep -A2 "Public-Key"
```

Look for key sizes of 1024 bits. For broader scans, tools such as `sslscan`, `nmap` with ssl-enum-ciphers scripts, or certificate transparency monitors help identify older certificates still served on internal or external hosts.

### 2. Review SSH Keys and Host Configurations

Check authorized_keys files, known_hosts, and server host keys:

```bash
# List key types and sizes (example)
ssh-keygen -l -f /path/to/authorized_keys
ssh-keygen -l -f /etc/ssh/ssh_host_rsa_key.pub
```

Replace any 1024-bit RSA host or user keys with Ed25519 or 3072/4096-bit RSA (or stronger modern alternatives).

### 3. Audit Firmware, HSMs, and Embedded Devices

Legacy IoT devices, network appliances, and older hardware security modules often ship with or generate 1024-bit keys. Inventory:

- Certificate stores on appliances
- Code-signing keys used for firmware updates
- VPN concentrators and remote-access gateways
- Internal CA roots or intermediates still issuing or trusting short keys

Vendor security advisories and configuration exports usually list supported key sizes. Prioritize devices that cannot be upgraded to modern algorithms.

### 4. Check Internal CAs and Code-Signing Workflows

Query your internal certificate authority for any still-valid certificates with 1024-bit keys. Review code-signing pipelines, package repositories, and update servers. Even if the keys are not internet-facing, they can enable supply-chain or lateral-movement risks if compromised.

### 5. Prioritize and Migrate

- Rank findings by exposure (internet-facing first, then high-privilege internal systems).
- Generate replacement keys at 2048 bits or larger (or switch to elliptic-curve or post-quantum algorithms where supported).
- Rotate certificates and update relying parties.
- Document the change and set monitoring so new 1024-bit keys cannot be issued.

These steps are standard hygiene; the DeepMind results simply raise the urgency for any remaining 1024-bit inventory.

## Practical Tips

- Prefer modern key sizes and algorithms (Ed25519, ECDSA P-256/P-384, or 3072+ RSA) for all new deployments.
- Enable certificate transparency monitoring and automated expiry/key-size alerts.
- Test migration paths in staging. Some older clients or devices still require transitional dual-certificate setups.
- Review recent security bulletins (including Android's November 2026 update) for related cryptographic guidance on your platforms.
- Treat AI-assisted cryptanalysis results as signals to re-examine legacy assumptions rather than immediate production breakages.

## Conclusion

DeepMind's November 6 research demonstrates that human-guided AI agents can speed up the discovery of weaknesses in legacy 1024-bit RSA. The concrete advances concern signature padding under partial attacker control and more efficient batch factoring. Modern 2048-bit and larger deployments remain secure against these specific techniques.

The practical takeaway is clear: inventory any remaining 1024-bit RSA keys, certificates, and signing systems, then migrate them. Combined with existing deprecation guidance, the findings make continued use of these obsolete parameters harder to justify.

## Sources

- Google DeepMind announcement and related research details (November 6, 2026)
- Collaborator statements from Nadia Heninger and Emmanuel Thomé
- Public reporting on the sandbox verification and cost estimates
