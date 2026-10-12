---
title: "Prepare for 100B On-Device AI on Android Phones"
description: "Qualcomm CEO says AI companies want phones running 100-billion-parameter models by 2028. See current Snapdragon limits and practical steps to prepare."
pubDate: 2026-10-12T15:00:00
heroImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai", "android", "tutorials", "how-to"]
noindex: false
---

Qualcomm CEO Cristiano Amon said in early October 2026 that leading AI companies are already asking for smartphones that can run 100-billion-parameter models continuously by 2028. Today’s newest Snapdragon chips handle mixture-of-experts models around 30 billion parameters on-device. The jump is large, and it will change what phones can do without a network connection.

This guide covers what Amon stated, what current hardware supports, the practical limits of memory and power, and steps developers and users can take now. All details come from Qualcomm statements and reporting on the Snapdragon Summit.

## What Qualcomm’s CEO Actually Said

Amon spoke at the Snapdragon Summit and in interviews around October 8–12, 2026. He noted that some frontier AI companies told Qualcomm they need phones capable of running at least a 100-billion-parameter model by 2028, and that the model should stay active rather than load for a single task. He did not name the companies. He also said some users prefer keeping data on the device.

The comments sit against the Snapdragon 8 Elite Extreme Gen 6, announced September 22, 2026. That chip runs mixture-of-experts models above 30 billion parameters locally, with a context window around 32,000 tokens. The standard Snapdragon 8 Elite Gen 6 is close but has less NPU shared memory. Both use a 2 nm process and a new Hexagon NPU with an Element Accelerator.

![Smartphone held in hand against a blurred background](https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80)

## Current On-Device Limits Versus the 2028 Target

A 30-billion-parameter mixture-of-experts model activates only a fraction of its parameters for each token. That is why it fits on a phone today. A dense 100-billion-parameter model would need far more memory. Even a 4-bit quantized version can require tens of gigabytes just for weights, plus room for the operating system, apps, and context cache. Continuous operation adds heat and battery draw.

Qualcomm’s Sensing Hub already runs small models up to about 200 million parameters for always-on tasks such as personal context. The larger NPU handles the heavier generative and agentic work. Moving from roughly 30 billion to 100 billion parameters is more than a threefold increase in scale inside the same phone form factor. Memory supply and cost remain open questions; Amon has noted pressure on DRAM availability.

For comparison, today’s on-device models such as Gemini Nano variants are in the low single-digit billions of parameters. The Extreme Gen 6 already moves the ceiling well beyond that for MoE architectures.

## Steps to Prepare Your Workflow Today

You do not need a 2028 phone to start building habits that will transfer. Focus on models and techniques that already run locally.

1. Check your device’s AI features. Open Settings and look for Gemini, on-device processing options, or developer menus that show NPU usage. Flagship phones with recent Snapdragon or Tensor chips already expose local summarization, transcription, and image tools.

2. Prefer mixture-of-experts or smaller models when you have a choice. In developer tools or AI Studio, test quantized versions and measure latency and memory. The Extreme Gen 6’s support for INT2 through FP16 and mixed precision shows the direction hardware is taking.

3. Keep personal context on-device where possible. Features that build a local knowledge graph or personal scribe stay private and work offline. Review app permissions so only trusted apps access that data.

4. Test offline scenarios. Turn on airplane mode and run the AI features you use most. Note which ones fail. Those gaps are exactly what larger local models are meant to close.

5. For developers, profile memory and thermal behavior. Android’s developer options and tools such as Android Studio’s profiler help you see when an app pushes the NPU or RAM. Optimize for the current 30B-class ceiling so your code remains efficient when larger models arrive.

![Close-up of a circuit board with electronic components](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80)

## Tips for Developers Building Local AI Features

Use Android’s ML Kit GenAI APIs or Firebase AI Logic hybrid inference where they fit. These already route some work on-device and some to the cloud. Design prompts and tool calls so the on-device path handles quick classification, extraction, and routing. Reserve heavier reasoning for models that can escalate.

Watch context length. The current Extreme Gen 6 supports roughly 32,000 tokens. Structure multi-turn agents so they compact history or use external tools rather than holding everything in memory. When 100-billion-parameter models arrive, the same compaction habits will still save power and heat.

Test on real hardware. Emulators do not fully reproduce NPU behavior or thermal throttling. If you target flagship Android devices, include at least one Snapdragon 8 Elite series phone in your test matrix. Measure tokens per second, battery impact, and temperature after several minutes of continuous inference.

Link related work: for more on running smaller models today, see the guide on [Gemini Nano and ML Kit Prompt API](/blog/gemini-nano-4-ml-kit-prompt-api/).

## What to Watch Through 2028

AI companies have not confirmed specific phone projects, and Qualcomm has not announced a chip that runs 100-billion-parameter models continuously. Memory technology, power management, and software frameworks will need to advance together. Android’s intelligence system and App Functions already point toward agents that act across apps; larger local models would let those agents stay private more often.

Users can expect gradual increases in local capability with each new chip generation rather than a sudden jump. Developers who profile and optimize for today’s NPUs will be ready when the ceiling rises.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/1MjKzyB2TRQ"
    title="Snapdragon Summit 2026 Recap: Powering the Agentic Age"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

The request for 100-billion-parameter models running continuously on phones by 2028 is a clear signal from AI companies to chip makers. Current Snapdragon 8 Elite Extreme Gen 6 hardware already supports 30-billion-parameter mixture-of-experts models on-device. Memory, heat, and battery remain the practical constraints. Start by testing offline features, preferring efficient model formats, and profiling your apps on real flagship hardware. Those steps keep your work useful now and ready for larger local models later.

## Sources

- Qualcomm product pages and Snapdragon Summit 2026 announcements for Snapdragon 8 Elite Extreme Gen 6 and Gen 6 specifications and on-device AI claims.
- Interviews with Qualcomm CEO Cristiano Amon reported October 2026 on AI company requests for 100-billion-parameter models by 2028.
- Reporting from TechCrunch, GSMArena, and 9to5Google on the September 22, 2026 chip launch and NPU capabilities.
