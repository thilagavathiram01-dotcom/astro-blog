---
title: "How Gboard Trains Next-Word Models in Private TEEs"
description: "Google now trains Gboard next-word models inside auditable TEEs. See what changed for English and Japanese, and how to review Gboard privacy settings."
pubDate: 2026-10-04T15:00:00
heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "security", "google", "tutorials"]
noindex: false
---

Gboard suggestions can feel personal, which raises a fair question: does Google read what you type to train them? On October 2, 2026, Google Research said the next-word models for English and Japanese now train inside trusted execution environments (TEEs), with access rules published to a public log. Your keyboard settings did not vanish. You can still turn federated learning off.

This guide explains what Google actually shipped, what it does not claim, and how to review Gboard privacy controls on Android.

## What Google announced on October 2

Katharine Daly and Daniel Ramage published [Toward provably private learning from federated data](https://research.google/blog/toward-provably-private-learning-from-federated-data/) on the Google Research blog. The post describes a new federated learning system that moves training computation to the server, inside TEEs, while keeping anonymization checks that outsiders can audit.

Federated learning is the method Google has used since 2017 so many phones can improve a shared model without uploading a raw typing history for central training. Gboard already used it for next-word prediction and Smart Compose. Reply suggestions in Google Messages and Smart Text Selection on Android have used related methods.

The October update is a change in where the heavy math runs, and in how a third party can check the server program. It is not a new consumer app.

![Person typing on a laptop with a phone beside the keyboard](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## How the TEE training path works

Google lists four ideas that the system coordinates.

1. **Encrypted upload.** The phone encrypts training examples and sends them with an access policy. That policy names the TEE programs allowed to process the data. The phone requires those policies to be published to [Rekor](https://docs.sigstore.dev/logging/overview/), a public transparency log.
2. **Key release only for matching code.** A key management cluster of TEEs uses the RAFT consensus protocol. It hands decryption keys only to server workloads that match the published policy.
3. **Training inside a TEE.** A root TEE runs a Python training loop and can split work across worker TEEs. Orchestration uses Federated Language, the open-source layer derived from TensorFlow Federated. Operators see metrics and differentially private model weights, not raw examples.
4. **Encrypted recovery.** The program saves a recovery state encrypted by the key system so a failed round can restart without extra leakage.

Google says the KMS and data-processing binaries can be rebuilt from the open-source [Confidential Federated Compute](https://github.com/google-parfait/confidential-federated-compute) repository. The paper linked from the post is [arXiv:2609.31494](https://arxiv.org/abs/2609.31494).

Privacy-relevant logic stays in the attested Python program. Google may sideload proprietary model architecture and preprocessing at runtime, but only if that privacy logic remains hardcoded. The post also says current TEE hardware has limits, including side-channel observations. This is not a claim of perfect secrecy against every hardware attack.

## What changed for Gboard next-word models

Gboard has deployed the system for English and Japanese next-word prediction. Google says those models ship with stronger privacy guarantees and improved accuracy.

Two design points in the post explain the gain.

Older training had to wait for phones that were charging, on Wi-Fi, and idle. Device availability swings through the day, so a run could stall. The new path collects uploads first, then trains on the server. At that point the program can pick a participation schedule and tune differential-privacy settings. The privacy-utility chart in the post comes from an English next-word model trained for 5,000 rounds with cohorts of 6,500 devices on both the old and new systems.

Speed is the other change. Google says these federated models used to take one to two months, limited by device availability, on-device compute, and several jobs competing for the same phones. Server-side parallelization removes that phone bottleneck. Training time is now limited by TEE capacity, not by whether your phone is plugged in at night.

Google does not say every Gboard language has moved. The shipped models named in the post are English and Japanese next-word prediction. Smart Compose, dictation, and other languages are separate products. Do not assume the TEE path covers them until Google says so.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/89BGjQYA0uE"
    title="Federated Learning: Machine Learning on Decentralized Data (Google I/O'19)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

The Google I/O 2019 talk above is still the clearest public walkthrough of why Gboard used on-device caches instead of a central typing log. The October 2026 system keeps that goal and moves the gradient step into attested servers.

## Review Gboard privacy controls

The research post does not add a new toggle. Google Help still documents the controls that decide whether your phone participates.

Federated learning is on by default. Help says it does not send the text you type or speak. It sends what the on-device job learns, combined later with other users. Help also says Gboard runs that job only while the phone is charging, on Wi-Fi, and not in use. The server-side TEE path does not remove that client rule from the help article.

To review the settings:

1. Open Android Settings.
2. Tap System, then Language & input.
3. Tap On-screen keyboard, then Gboard, then Privacy.
4. Check Personalize for you, Improve for everyone, and Delete learned words and data.

Personalize for you keeps audio recordings and transcripts of what you say and type on the device. You can clear them from the keyboard: Settings, Privacy, Delete, learned words & data. Improve for everyone is the shared-model path. Delete learned words and data clears the on-device store.

Audio donations are a different switch. Open any app with a text field, tap the keyboard Settings icon, then Privacy. Under Voice, turn Audio donations off if you do not want snippets sent for conventional speech training. Help says a donated snippet is at most 15 seconds, or up to 25 seconds if there is silence or unrecognized audio, and that Google does not keep those snippets beyond 18 months. Human reviewers may listen to or transcribe some snippets. Donations are optional. Turning them off does not, by itself, turn off federated learning.

If a menu name differs on your phone, use the keyboard path: open Gboard, tap Settings, then Privacy. Android skins sometimes nest Language & input under System or Additional settings.

![Close-up of a secured laptop in a dim workspace](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80)

## What this does not change

A public log is not the same as reading every training example. Auditors can see which server programs devices authorized. They cannot pull your messages out of Rekor.

Google is explicit about remaining gaps. Guarantees hold subject to current TEE limits. Side channels are still a research problem. The team expects future hardware and proofs of the differential-privacy code, which means those proofs are not finished. Operators still see metrics and the private model weights.

Scam warnings in the suggestion strip are a separate Gboard feature. If you want the typing-time checks rather than the training path, use the steps in [Pixel Scam Detection and Gboard warnings](/blog/pixel-scam-detection-gboard/).

## Practical checks after the update

- Leave federated learning on if you want English or Japanese next-word models to keep improving under the published policy. Turn Improve for everyone off if you do not.
- Treat audio donations as opt-in speech data, not as the same switch as federated learning.
- Clear on-device learned words after you share a phone or finish a sensitive draft.
- Do not expect a visible “TEE” badge in the suggestion bar. Google has not described one.
- Developers who want to inspect the server side can start at the Confidential Federated Compute repo and the Rekor docs, not at a hidden Gboard API.

## Bottom line

Gboard’s English and Japanese next-word models now train in a server TEE system that publishes its access policies and rebuilds from open source. Google says that cut a one-to-two-month device bottleneck and improved the privacy-utility tradeoff on a 5,000-round English run with 6,500-device cohorts. You still control participation in Gboard Privacy, and audio donations remain a separate choice.

## Sources

- [Toward provably private learning from federated data](https://research.google/blog/toward-provably-private-learning-from-federated-data/), Google Research, October 2, 2026
- [Paper on arXiv](https://arxiv.org/abs/2609.31494)
- [Learn how Gboard gets better](https://support.google.com/gboard/answer/12373137), Gboard Help
- [Confidential Federated Compute](https://github.com/google-parfait/confidential-federated-compute)
- [Federated Learning: Machine Learning on Decentralized Data (Google I/O '19)](https://www.youtube.com/watch?v=89BGjQYA0uE)
