---
title: "How to Enable AICore Developer Preview and Test Gemini Nano 4"
description: "Step-by-step guide to opt into the AICore Developer Preview and test Gemini Nano 4 models on supported Android devices like Pixel 11."
pubDate: 2026-11-09T14:00:00
heroImage: "https://images.unsplash.com/photo-1765256931300-ceeaed648d21?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "gemini", "tutorials", "ai"]
noindex: false
---

Android developers can now test Gemini Nano 4, Google's next on-device generative model, through the AICore Developer Preview. Recent updates make access simpler on devices like the Pixel 11 series, where a single toggle unlocks preview models without the full Google Group signup process that was previously required.

Gemini Nano 4 builds on the Gemma 4 architecture. It offers up to 4x faster inference and uses up to 60% less battery than earlier versions in internal testing, with Full and Fast variants optimized for different tasks. Accessing it early lets you prototype agentic features, structured outputs, and multimodal prompts before broader rollout.

This guide walks through official opt-in steps, the Pixel 11 shortcut, testing prompts, and next actions for integrating the model into apps.

![Close-up of a complex electronic circuit board with many components](https://images.unsplash.com/photo-1765256931300-ceeaed648d21?auto=format&fit=crop&w=800&q=80)

## Check Device Support

AICore Developer Preview is available on devices that support custom generation and agents. These include recent flagships with dedicated AI accelerators from Google, MediaTek, and Qualcomm. Pixel 10 and 11 series, certain Galaxy Z Fold models, and other nano-v2/nano-v3 hardware qualify. On unsupported devices, preview models may fall back to CPU execution that does not represent final performance.

Confirm support in the official device list on the ML Kit GenAI overview page before proceeding. Preview models can increase storage use and may affect system stability during testing.

## Opt In to the AICore Developer Preview

Follow these steps from the official AICore Developer Preview program documentation:

1. Verify your device supports developer previews.
2. Join the aicore-experimental Google Group using the Google account you will use for testing.
3. Become a tester in the Android AICore testing program on Google Play. This opts in all supported devices signed in with that account.
4. Update AICore through Google system services:
   - Open Settings.
   - On Pixels, tap your profile. On other devices, tap Google (services).
   - Go to All services > System services > AICore.
   - Look for the Android AICore (Beta) label. It can take up to an hour to appear.
   - Tap Update if an update is available.
5. After the update, the AICore launcher icon appears. Open the app and accept the terms and policies.

Pre-production models may run slower or less accurately than stable versions. Use them only for development.

## Pixel 11 Shortcut

On Pixel 11 devices, a simpler path appeared around November 6, 2026. Go to Settings > System > Developer options > AICore Settings and toggle Enable AICore Developer Preview. This unlocks preview models and features, adds the AICore app to the drawer, and lets you switch between Gemini Nano 4 Full and Fast variants (including preview builds) without the full group and tester steps.

Developer options must already be enabled. The toggle defaults to off.

![Smartphone with AI text in a jeans pocket](https://images.unsplash.com/photo-1763110305836-17790330be78?auto=format&fit=crop&w=800&q=80)

## Download and Test Preview Models

Open the AICore app. Use the model picker to select a Gemini Nano 4 preview variant and start the download. Your device may already have a stable Gemini Nano version ready, so you can test while waiting.

Enter a text prompt after the model loads. AICore runs inference entirely on-device and streams the response. The first inference can take about a minute while the model initializes. A BUSY error on the first try often means another large model is active; retry later.

The response includes total inference time in milliseconds for performance checks. For heavy testing, go to Settings in the AICore app and enable Bypass quota limits. This applies to all AICore-using apps on the device and can affect system health, so disable it when finished.

Share feedback directly from the app under Settings > Send feedback.

## Integrate Into Your App

After testing in the AICore app, select the model for your own app using ML Kit direct model access or the Agentic API. Code written against Gemma 4 / Gemini Nano 4 preview APIs remains forward-compatible as the model rolls out more widely.

Opt into the AICore Developer Preview program when testing preview capabilities. For agentic workflows, use the ML Kit Agentic API (alpha) which handles orchestration, history, and guardrails. Pair it with AppFunctions for on-device tools.

See the related guide on [Gemini Nano 4 architecture and efficiency gains](/blog/gemini-nano-4-architecture-efficiency-gains/) for details on per-layer embeddings, quantization-aware training, and multi-token prediction that drive the speed and memory improvements.

## Tips for Effective Testing

- Expect longer first-token latency on preview builds. Warm the model with a short prompt before measuring.
- Monitor storage. Preview models add temporary disk use during updates.
- Test both Full and Fast variants. Full prioritizes reasoning quality; Fast prioritizes lower latency.
- Use Bypass quota limits only during active development sessions.
- Leave the program when finished by visiting the Android AICore testing program page, selecting Leave the program, then removing updates and restoring the production AICore version.

## Conclusion

The AICore Developer Preview gives Android developers early access to Gemini Nano 4 for private, offline generative features. On Pixel 11 the process is now a single toggle in Developer options. On other supported devices the official group and tester steps still apply. Start with the AICore app to validate prompts, then integrate via ML Kit for production prototypes.

## Sources

- AICore Developer Preview program, Google for Developers
- Announcing Gemma 4 in the AICore Developer Preview, Android Developers Blog
- Gemini Nano overview, Android Developers
- Pixel 11 Gemini Nano 4 Developer Preview rollout reports (November 2026)

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/ekS4_gV6Ojc"
    title="Inside Gemini Nano and Gemma 4 powering on-device intelligence"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
