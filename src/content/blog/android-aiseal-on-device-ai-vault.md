---
title: "Android AISeal: What the On-Device AI Vault Protects"
description: "Android AISeal is Google’s hardware-isolated vault for on-device AI context. See what is rolling out now, what is still planned, and which chips support it."
pubDate: 2026-10-08T14:00:00
heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "security", "ai", "developer"]
noindex: false
---

On-device assistants get useful when they can connect mail, messages, calendar events, and app activity. That same context is also the data an attacker wants if they break the phone’s main operating system. On 7 October 2026, Google introduced Android on-device AI seal, also called AISeal, as a hardware-isolated vault for that personal AI context.

AISeal is not a Settings toggle you flip today, and it is not a replacement for Private Space or Advanced Protection. It is platform architecture. The first piece rolling out is encrypted, isolated storage for personal context. Model execution and autonomous agents are planned next, not already inside the vault.

![Circuit board close-up representing on-device computing hardware](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80)

## Why app sandboxing is not enough for AI context

Android already isolates apps with the application sandbox and SELinux. Those controls stop most apps from reading another app’s files. They assume the host operating system itself is still trustworthy.

Google’s security post, written by Irene Ang and Helen Jiang, says helpful assistants will rely on an on-device knowledge graph that links emails, messages, calendar events, and cross-app interactions. Centralizing that graph makes a stronger boundary necessary. AISeal is built so personal data stays cryptographically isolated even if the host OS is fully compromised.

The building blocks are not new names. AISeal sits on the [Android Virtualization Framework](https://source.android.com/docs/core/virtualization) and the protected Kernel Virtual Machine (pKVM) hypervisor. A protected virtual machine (pVM) runs beside the main Android OS. The hypervisor is designed so the host cannot read the pVM’s memory, even if the host is compromised. AVF is supported on ARM64 devices.

pKVM ships through Android’s Generic Kernel Image. Google says that implementation is certified to SESIP Assurance Level 5 (AVA_VAN.5), which it describes as the highest vulnerability-testing tier under ISO 15408.

## What shares the vault today

AISeal is a multi-tenant protected environment. The point is one secure vault that several AI services can share without dropping hardware isolation, while keeping memory and battery cost reasonable on a phone.

Google lists three tenants:

- **Protected databases.** Personal context is stored and indexed in encrypted local storage. The reference implementation uses [AppSearch](https://developer.android.com/develop/ui/views/search/appsearch). OEMs can plug in their own database, including a proprietary store.
- **On-device inference.** The design is meant to run foundation models locally through future integrations with AICore. That path is not the current rollout.
- **AI agents.** Assistants that combine private context with local inference are part of the architecture, not the feature that is shipping now.

Access controls between those components are meant to keep raw data inside the vault. Google’s example: an assistant can query the database and run an inference to summarize your schedule entirely inside the vault. Outbound controls are designed to let only the final answer cross back to the main operating system.

That example is the product goal. The same post is explicit about timing: the foundational milestone rolling out across Android is hardware-isolated personal context storage. In-vault inference and autonomous agents come later.

![Abstract data network over a dark globe, suggesting isolated digital context](https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80)

## How the isolation is supposed to work

Think of the phone as two rooms with a locked door between them.

The main room is Android: launcher, apps, notifications, and anything that can run if the OS is compromised. The second room is the protected VM. Personal context lives there, encrypted. A query goes in. A short answer is allowed out. The raw calendar rows, messages, and graph edges are not supposed to land in host memory.

That is a different job from [Private Space](/blog/android-private-space/). Private Space is a user-facing second profile. You install apps into it, lock it, and hide the drawer row. When it is locked, those apps stop. AISeal is a system vault for AI context, managed centrally, and not something you open from the app drawer.

It is also different from a trusted execution environment that only handles keys. A pVM can run a richer guest, including Microdroid, Android’s mini distribution for virtual machines. AISeal uses that style of protected VM so storage, and later inference, can share one isolated environment.

Google Open Source’s talk on pKVM covers the isolation primitive AISeal depends on:

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/7novnkldMmQ"
    title="How Protected KVM provides isolation primitive for guest VMs"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Which chips and phones are in scope

Google has not published a device list or a region-by-region schedule. It says personal context storage is actively rolling out across Android, and that it is working with device makers to put the capabilities into practice.

Silicon support is more specific:

- MediaTek has announced support for the pKVM-backed on-device AI seal on the Dimensity 9600 Pro.
- Qualcomm Snapdragon chipsets will support the architecture via AVF as Google expands across the silicon ecosystem.

If your phone is not on one of those platforms, there is nothing to enable in Settings. Older devices without AVF and pKVM cannot grow this vault through an app update. AVF itself has been limited to select devices since Android 13 and 14.

## What is still on the roadmap

Google lists three follow-on pieces, all described as work in progress with silicon and OEM partners:

1. **In-vault inference and autonomous agents.** Model execution and system-level agents move into the pVM so sensitive context is processed without touching host memory.
2. **Direct NPU device assignment.** The enclave gets a private hardware lane to the on-chip neural processing unit so models can run at full silicon speed.
3. **Confidential cloud extension.** End-to-end encrypted hybrid inference between the on-device pVM and an OEM’s confidential cloud servers.

Until those land, do not treat a Gemini reply on your phone as proof that the model ran inside AISeal. Current on-device models can still use AICore and other paths outside this vault. The vault’s present job is protecting the stored personal context those systems will increasingly depend on.

## What you can do while the vault rolls out

AISeal does not add a user checklist. These steps still reduce how much context an assistant can see, and they work on phones that do not have the enclave yet.

1. Review which apps Gemini and other assistants can reach. Disconnect accounts you do not want in an on-device graph.
2. Use Private Space for apps whose notifications and files should stay off the main profile. That isolation is separate from AISeal, and it is available on Android 15 and later when the OEM has not removed it.
3. Turn on Advanced Protection if you handle high-risk accounts. It tightens the device around you. It does not create the AI vault. See the [Android 17 Advanced Protection feature guide](/blog/android-17-advanced-protection-six-features/) for the user-facing controls.
4. Keep the system image current. pKVM arrives through the Generic Kernel Image and platform updates, not through a Play Store app.
5. If you build assistants, plan for a boundary where only the final answer leaves the vault. Do not assume host memory is a safe place for the raw knowledge graph once AISeal storage is on the device.

Developers should read the AVF docs before designing around this. Protected VMs are mutually distrusted guests. A compromised host is not supposed to read pVM memory. That is a stronger claim than the app sandbox, and it only holds on hardware that actually runs pKVM.

## Limits to keep in mind

AISeal does not detect AI-generated images, and it does not watermark model output. Those are SynthID jobs. It also does not stop you from pasting sensitive text into a cloud chat. Data you send off the device never enters this vault.

A no-watermark or no-enclave result is not a safety proof either. Google has not said every assistant query will stay on device. The confidential-cloud item on the roadmap is an explicit path for hybrid inference, encrypted between the pVM and an OEM cloud, not a promise that nothing leaves the phone.

Coverage that says agents already process your messages inside the vault overstates the October 2026 post. Storage is the milestone that is rolling out. Agents and in-vault inference are the next stage.

## Conclusion

AISeal is Android’s open enclave design for personal AI context: a multi-tenant protected VM on pKVM, with AppSearch as the reference store, built so a broken host OS still cannot read that store. MediaTek’s Dimensity 9600 Pro and upcoming Snapdragon support via AVF are the first silicon signals. Inference, agents, a direct NPU lane, and confidential cloud extension are still ahead.

For most people, the practical move is still the controls you already have: limit assistant access, use Private Space for sensitive apps, and install system updates that carry the kernel and virtualization stack. The vault matters because assistants are about to sit on a single on-device graph. The graph should not sit in ordinary app storage.

## Sources

- [Android’s Next-Gen Enclave for On-Device AI — Google](https://blog.google/security/enabling-the-next-gen-enclave-architecture-for-on-device-ai-on-android/)
- [Android Virtualization Framework overview — Android Open Source Project](https://source.android.com/docs/core/virtualization)
- [Virtual machines as a core Android primitive — Android Developers Blog](https://android-developers.googleblog.com/2023/12/virtual-machines-as-core-android-primitive.html)
- [AppSearch — Android Developers](https://developer.android.com/develop/ui/views/search/appsearch)
- [How Protected KVM provides isolation primitive for guest VMs — Google Open Source (YouTube)](https://www.youtube.com/watch?v=7novnkldMmQ)
