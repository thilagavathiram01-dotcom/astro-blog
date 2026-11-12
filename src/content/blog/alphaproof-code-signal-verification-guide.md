---
title: "How AlphaProof Code Verified Signal Encryption with AI"
description: "Guide to DeepMind AlphaProof Code: how Gemini 4 Carbon agents formally verified Signal protocol code in four weeks."
pubDate: 2026-11-12T21:00:00
heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai", "security", "gemini", "tutorials", "google"]
noindex: false
---

Google DeepMind announced AlphaProof Code on November 10, 2026. The agentic framework formally verified key security properties of the Signal protocol’s reference implementation, libsignal, down to compiled machine code. Agents powered by Gemini 4 Carbon generated over six million lines of Lean proof in four weeks. Human experts reviewed only about one percent of the output.

This is the first time AI has been used to formally verify a widely deployed cryptographic protocol at this depth. It is also the first time the implementation of such a protocol has been formally verified by any method.

The Signal protocol protects billions of conversations in Signal, WhatsApp, Messenger, and Google Messages. Formal verification provides the highest standard of assurance that the code matches its security claims.

## What AlphaProof Code Proved

AlphaProof Code is a multi-agent framework. Human experts and AI agents first translate security goals into formal mathematical specifications. Human experts review every specification. Then teams of AI agents write the proofs. Lean, a proof assistant, automatically checks every proof.

The proofs cover the PQXDH handshake (the post-quantum key exchange that starts a session) and the Triple Ratchet (which rotates keys with each message). They establish forward secrecy, authentication, post-compromise security, and handshake secrecy. The target was unmodified libsignal v0.105.4 compiled by the stock Rust compiler to AArch64 machine code inside a small command-line harness.

Because the proofs target compiled machine code, neither the Rust source nor the compiler needs to be trusted for the verified properties. The agents produced roughly 6.5 million lines of machine-checked Lean, resting on about 26,000 lines of trusted specifications and AArch64 semantics.

![Laptop screen showing lines of code](https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80)

## How the Verification Worked

Researchers first collaborated with models to turn Signal’s security goals into Lean specifications. Human experts reviewed each one. Prover agents, typically 40 to 80 running on a single machine, then generated the proofs. Campaigns ran for 24 to 72 hours. The full effort took four weeks with a team of five researchers. None of the human authors wrote proof code.

Agents audited the proofs and flagged areas that needed human review—just one percent of the codebase. Lean checked the rest automatically. This division of labor let experts focus where judgment matters most.

To confirm the system detects real flaws, the team reintroduced two previously fixed bugs into an isolated copy of the code. In both cases, AlphaProof Code produced a machine-checked proof that the buggy version was insecure.

Signal’s CTO Ehren Kret noted that using AI agents to translate live code into valid Lean theorems is a major breakthrough and gives greater confidence in the privacy guarantees.

## What the Proofs Do Not Cover

The verification applies to the one-to-one session code in the reference library, not to every installed Signal or Google Messages binary. Key generation, side channels, group chats, and the full applications fall outside the proved properties. Some cryptographic primitives are specified by contracts rather than fully verified.

DeepMind open-sourced the formal verification artifacts so the community can inspect the specifications and proofs. The technical paper and the repository provide the exact statements that were proved.

![Developer reviewing code on multiple screens](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Implications for Developers and Security Teams

Formal verification has historically required years of expert effort even for smaller systems. Completing a machine-code-level proof of a production cryptographic protocol in four weeks shows that agentic frameworks can make the technique practical for real software.

Security teams can now treat the open-sourced Lean artifacts as a template. The approach pairs human-guided specification with autonomous provers whose output is mechanically checked. This reduces the risk that a subtle implementation gap violates a high-level security claim.

Gemini 4 Carbon supplied the reasoning capacity for the long proof campaigns. For developers who want to experiment with the same model on other security or coding tasks, our [Gemini 4 Carbon API guide](/blog/how-to-use-gemini-4-carbon-api-guide/) walks through the first calls, thinking levels, and when to choose Carbon over Argon.

Paired with other automated defense agents, formal verification can help counter the speed of modern threats. DeepMind notes that the same techniques could later apply to medical device firmware or power-grid software.

## Tips if You Explore the Artifacts

Start with the open-sourced repository and the technical paper. Focus on the trusted specification lines first; those are the parts that require human judgment. The bulk of the proof is machine-checked.

If you run your own agent experiments with Gemini 4 Carbon, set a high thinking level for multi-step verification tasks and monitor token usage. Long campaigns consume substantial output tokens.

Re-running the bug-injection test on a local copy is a useful way to understand how the system distinguishes correct from incorrect code.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/ldHNiZnlr3g"
    title="Gemini 4 Carbon: Why Google's Signal Proof Is Alarming"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

AlphaProof Code shows that AI agents can produce machine-checked proofs for the compiled code of a widely used cryptographic protocol in weeks rather than years. Gemini 4 Carbon agents wrote the bulk of the 6.5 million lines of Lean while humans focused on specifications and the small fraction of proofs that needed review. The open-sourced artifacts give security researchers a concrete starting point.

Formal verification remains expensive and specialized, but the cost curve has shifted. Teams that need the highest assurance for critical code can now combine human expertise with autonomous provers more effectively than before.

**Sources**

- [Introducing AlphaProof Code](https://deepmind.google/blog/introducing-alphaproof-code/) — Google DeepMind, November 10, 2026
- [AlphaProof Code: Verifying Signal’s Security at the Machine-Code Level](https://google-deepmind.github.io/code-verification) — technical paper and open artifacts
- [Gemini 4 Carbon is now available](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/) — Google Blog, November 10, 2026
