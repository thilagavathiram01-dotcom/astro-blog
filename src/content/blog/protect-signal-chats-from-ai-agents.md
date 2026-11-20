---
title: "How to Protect Signal Chats from AI Agents"
description: "Signal now blocks screenshots by default to stop Gemini and Siri AI from reading private messages. Learn the Android and iOS setup steps."
pubDate: 2026-11-20T19:20:00
heroImage: "https://images.unsplash.com/photo-1760360497581-0606569510a6?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["security", "android", "ai", "tutorials", "how-to"]
noindex: false
---

Signal announced on November 20, 2026 that it is restricting screenshots inside its app by default. The change aims to stop AI agents built into phone operating systems from scanning private chats.

Meredith Whittaker, Signal president, called the integrations of Gemini Intelligence on Android and Siri AI's Onscreen Awareness an existential threat to the app's privacy guarantees. End-to-end encryption protects messages in transit. It does not stop an OS-level agent from reading content after decryption when it appears on screen.

![Private text message conversation displayed on a smartphone screen](https://images.unsplash.com/photo-1760360497581-0606569510a6?auto=format&fit=crop&w=800&q=80)

## What Signal Changed on Mobile

On iOS 27, Signal adds a Block Siri AI setting under App Security. It is on by default. The setting stops Siri AI from scanning Signal content. It also blocks screenshots inside the app and in the App Switcher.

On Android, Signal automatically enables its existing Screen security setting when it detects an AI assistant attempting to read the screen. Screen security already prevents previews in the app switcher and blocks screenshots on the device. Users see a pop-up when Signal detects such access or a screenshot attempt. They can choose to disable the protection.

Disabling either control can expose your messages and those of your contacts to the AI agent. Signal notes that its remedy is incomplete. Screenshot blocking does not cover other possible access methods, such as filesystem reads of data already on the device.

Signal applied a similar approach last year on Windows 11. It blocked screenshots by default to stop Microsoft Recall from capturing chats. The company says it cannot reliably do the same on macOS because Apple does not provide clear APIs for screenshot protection that work beyond streaming media.

## Why OS-Level AI Agents Create the Problem

Google and Apple are embedding agentic features deep into the operating system. These agents scan on-screen content to answer questions or take actions. Once captured, the data can move to a local database or remote server under the OS vendor's control.

Signal's open-source code and formally verified encryption protocol have withstood scrutiny for years. The new threat sits outside that model. The operating system forms the environment in which the app runs. When the OS itself gains tools to read the screen, app-level privacy controls face limits.

Whittaker has previously warned that AI agents requiring broad permissions act as a backdoor for encrypted apps. She has also criticized the lack of documentation around how these agents access data.

Signal is calling on Apple, Google, and Microsoft to give developers simple, documented ways to opt apps out of AI data access. That includes screen reading, filesystem access, notifications, and other frameworks, without breaking core app functions. The company also wants better technical specifications for how the agents work.

![Hand holding a smartphone displaying a messaging app interface](https://images.unsplash.com/photo-1763810021881-49b45b0717d5?auto=format&fit=crop&w=800&q=80)

## Check and Manage the Setting on Android

Open the Signal app. Tap your profile picture, then Settings, then Privacy. Look for Screen security.

When an AI assistant tries to access the screen, Signal turns the toggle on automatically. You can still change it manually. If you turn it off, expect a warning about the privacy impact.

Screen security covers only your own device. Someone else can still screenshot their own screen while viewing a message you sent. The feature also hides the conversation in the app switcher with a blue privacy screen that shows the Signal logo.

Update Signal to the latest version from the Play Store so the detection logic is present. Behavior can vary across Android distributions because not every vendor exposes the same signals for AI assistant activity.

## Check and Manage the Setting on iOS

On an iPhone running iOS 27, open Signal, tap your profile, then Settings, then App Security or Privacy. Find Block Siri AI.

The option is enabled by default. Its description states that it prevents Siri AI from scanning Signal content and also blocks screenshots in the app and App Switcher.

You can switch it off if you need screenshots. Signal will note the risk. For macOS 27 users, the app cannot apply the same block. The recommended workaround is to add Signal under System Settings > Siri > Excluded Apps so Siri AI does not proactively access message content.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/z-ZwonKqAtc"
    title="Meredith Whittaker: Your AI agent puts your contacts at risk"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Additional Steps You Can Take

Keep Signal updated. New protections roll out through the app rather than through an OS setting alone.

Review which AI assistants have screen or app data access on your device. On Android, check Gemini settings for options related to screen context or device assistance. On iOS, review Siri and Apple Intelligence permissions, including any Excluded Apps list.

Consider Android's Advanced Protection mode for broader device hardening. Our guide to the [six new Advanced Protection features on Android 17](/blog/android-17-advanced-protection-six-features/) covers intrusion logging, USB controls, and accessibility limits that reduce other attack surfaces.

Avoid granting third-party AI agents broad accessibility or screen-reading permissions. Signal notes that tools such as Meta's Muse can use accessibility settings that were designed for human users.

## Limitations to Keep in Mind

The screenshot restriction is a practical defense, not a complete solution. Signal has said so explicitly. Other vectors remain possible, including agents that read data already stored on the device.

Coverage is incomplete across Android vendors and is absent on macOS. Users who need screenshots for legitimate reasons must weigh the privacy trade-off themselves.

Accessibility tools that rely on screen content may face friction when the protection is active. Signal has historically made the related setting easy to disable for that reason, as it did on Windows for Recall.

## Conclusion

Signal's November 20 update puts a default barrier between private chats and the AI agents now shipping in phone operating systems. The Block Siri AI toggle on iOS 27 and the automatic Screen security response on Android are the concrete controls available today.

The company continues to press Apple, Google, and Microsoft for proper developer opt-outs and clearer documentation. Until those arrive, the screenshot block is the tool Signal has. Check the setting in your app, leave it on unless you have a specific need, and review the broader AI permissions on your device.

## Sources

- [Signal is Serious About Protecting Your Privacy](https://signal.org/blog/protecting-your-privacy/) — Signal, November 20, 2026
- [Screen Security](https://support.signal.org/hc/en-us/articles/360043469312-Screen-Security) — Signal Support
- [EXCLUSIVE: Signal restricts screenshots to block AI agents from reading messages](https://www.reuters.com/legal/litigation/signal-restricts-screenshots-block-ai-agents-reading-messages-2026-11-20/) — Reuters, November 20, 2026
- [Meredith Whittaker: Your AI agent puts your contacts at risk](https://www.youtube.com/watch?v=z-ZwonKqAtc) — Masters of Scale on YouTube
