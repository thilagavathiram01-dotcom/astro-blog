---
title: "DeepMind AI Agents Find RSA-1024 Weaknesses: Guide"
description: "Google DeepMind's AI agents uncovered two weaknesses in legacy 1024-bit RSA. Learn impacts, what stays secure, and developer response steps."
pubDate: 2026-11-08T14:00:00
heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai", "security", "google", "tutorials"]
noindex: false
---

Google DeepMind announced on November 6, 2026 that human-guided AI agents found two weaknesses in legacy 1024-bit RSA systems. The results accelerate cryptanalysis research but leave modern 2048-bit and larger keys unaffected, according to the team.

This guide explains the findings, what they mean for existing systems, and practical steps for developers and security teams. The work highlights how AI agents can speed up stress-testing of encryption assumptions that once took years to probe.

## What DeepMind Announced

DeepMind researchers Dj Dvijotham and Abhradeep Thakurta led the effort with cryptographers Nadia Heninger of UC San Diego and Inria, and Emmanuel Thomé of Inria. Pushmeet Kohli, VP of Science at DeepMind, shared the results via posts on X. The team produced two working papers in weeks of supervised agent work.

The first paper addresses RSA signature forgery. The second covers batch factoring of multiple keys. No live production systems were broken, and all testing stayed in sandboxed environments on already-solved academic benchmarks.

DeepMind frames the release as a contribution to the cryptanalysis community. It shows AI agents can evaluate mathematical hardness assumptions faster than traditional methods.

![Padlock resting on a circuit board](https://images.unsplash.com/photo-1654588836793-c6babf14d254?auto=format&fit=crop&w=800&q=80)

## The Two Weaknesses Explained

### Signature Padding and Forgery

RSA signatures add structured padding to a message before signing to prevent forgery. DeepMind reports that once an attacker controls roughly half or more of the signed block, this padding adds virtually no extra protection. Forging then becomes nearly as hard as attacking unpadded RSA.

For cases where an attacker controls only a small portion, such as a 32-byte digest, the agents found a new algorithm. DeepMind estimates it improves on the previous best method by about 1,600 times for 1024-bit keys. This remains a theoretical estimate.

In a practical sandbox test against an already-solved 1024-bit benchmark key from prior academic work, the agents' implementation reproduced the result with 3.5 times less CPU time. It used under one-thousandth of the compute required to factor the key outright. One human researcher sent about twenty short messages and wrote no code.

### Batch Factoring

The second result improves batch methods for factoring many 1024-bit keys together. After a one-time precomputation equal to factoring a single key, each additional key costs about 1/58 as much. Authors describe this as roughly 30 times less expensive than the best previous batch approach.

A two-agent system generated and verified the proofs. Algebraic identities were machine-checked in Lean 4. No full factory has been built, and no keys were factored in the published work.

## What Remains Secure

DeepMind states that modern encryption protocols using 2048-bit or larger RSA keys remain secure against these specific attacks. NIST and other standards bodies have long treated 1024-bit RSA as legacy and disallowed it for new digital signatures. Most current systems already moved to larger key sizes years ago.

The findings apply only to obsolete 1024-bit deployments. They do not change the security of properly configured modern systems. The speedup mainly affects older devices, firmware, or signing setups that still rely on 1024-bit keys.

This research accelerates the timeline for retiring remaining legacy keys rather than creating new threats to current standards.

![Developer workspace with multiple code screens](https://images.unsplash.com/photo-1759661990336-51bd4b951fea?auto=format&fit=crop&w=800&q=80)

## Implications for Developers and Security Teams

Organizations still running 1024-bit RSA should prioritize migration. The reduced cost of batch factoring and faster forgery paths make remaining legacy keys more attractive targets, even if attacks require significant resources.

AI-assisted cryptanalysis shortens the window between theoretical weaknesses and practical improvements. Teams can no longer assume hardness margins change only slowly.

For developers building authentication, signing, or key management systems:

1. Audit existing key sizes and certificate lifetimes.
2. Enforce minimum 2048-bit RSA or preferably post-quantum ready algorithms where supported.
3. Monitor for any remaining 1024-bit usage in libraries, hardware security modules, or third-party services.
4. Update signing oracles and firmware that might still accept short digests under older padding schemes.

The work also demonstrates practical agent workflows: one model generates designs and proofs while another verifies them, with human oversight limited to high-level guidance.

## How AI Agents Accelerated the Work

Historically, major cryptanalysis advances took years or decades. DeepMind's two-agent harness compressed significant progress into weeks. The supervisor model outlined stages and checks. The second model implemented and verified.

Human input stayed minimal—roughly twenty short messages, mostly approvals. The algebraic work received formal machine checking in Lean 4, while numerical optimizations received separate verification.

This pattern matches broader trends in AI-assisted research. Agents handle the combinatorial search and proof generation while humans set constraints and review results. Similar approaches appear in other DeepMind science efforts.

Watch a concise explanation of the announcement and its boundaries:

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/bCe6Lziz-B4"
    title="Google DeepMind says AI agents found two weaknesses in legacy 1024-bit RSA"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical Response Checklist

- Inventory all RSA keys and certificates. Flag anything at or below 1024 bits.
- Schedule replacement for remaining legacy keys. Prefer 2048-bit minimum or elliptic-curve alternatives.
- Review hardware security modules and signing APIs for padding behavior under partial attacker control.
- Test migration paths in staging before production cutover.
- Document the change for compliance and audit logs.

Teams already using modern key sizes need no immediate action beyond confirming no residual 1024-bit dependencies. The research reinforces existing best practices rather than requiring new emergency patches.

For related coverage of Google's cybersecurity model work, see our guide to [Gemini 4 Carbon access and benchmarks](/blog/gemini-4-carbon-access-features-guide/).

## Conclusion

DeepMind's AI agents delivered measurable improvements on known 1024-bit RSA problems in weeks of supervised work. The results make signature forgery and batch factoring cheaper for legacy keys while leaving 2048-bit and larger systems untouched. Developers should treat remaining 1024-bit deployments as higher priority for retirement.

The broader lesson is that AI agents can compress the time required to stress-test cryptographic assumptions. Security teams that inventory and migrate legacy keys now stay ahead of these faster research cycles.

## Sources

- Google DeepMind announcement on X, November 6, 2026
- Working papers: signature forgery and Fan Factories batch factoring results
- Coverage confirming 1,600x theoretical estimate and 30x batch improvement for 1024-bit keys only
- NIST guidance treating sub-2048-bit RSA as legacy for new signatures
