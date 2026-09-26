---
title: "Control Gemini Agents on Android Work Profiles"
description: "How IT and workers keep Gemini multi-step agents out of corporate apps on Android Enterprise work profiles in 2026."
pubDate: 2026-09-26T10:00:00
heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "gemini", "security", "google", "tutorials"]
noindex: false
---

Gemini on Android can now run multi-step tasks across calendar, mail, and the browser. That is useful at home. On a company phone, or a personal phone with a work profile, those same agents must stop at the work boundary.

On 23 September 2026, Google published an Android Enterprise update that states this rule in plain terms: personal agents cannot reach corporate apps and data, and administrators can configure, restrict, or disable AI automation across a fleet.

This guide translates that policy into a setup you can check today. It is written for IT staff and for workers who want to use Gemini without mixing personal chat into work mail.

## What Google announced for 2026

The official Android Enterprise post lists six work streams. The first is the one that matters for Gemini users:

- **Contextual automation.** Gemini can use on-screen context to run multi-step tasks across apps instead of forcing you to switch by hand.
- **Work profile separation.** Built-in safeguards keep personal agents away from corporate apps and data.
- **Granular IT control.** Admins can configure, restrict, or disable AI automation with Android Enterprise management policies.

Those three points sit next to other 2026 work: manageable XR devices, desktop mode on external monitors, safer Quick Share, unified update controls, and new identity and patch reporting.

Treat the agent controls as live policy language, not a future sketch. The hardware and update items have their own dates. XREAL Aura wired glasses are listed for Q4. Attestable Identifiers and Unified Update Controls are described as arriving later this year.



![Office desk with laptop, notebook, and phone used for work planning](https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80)



## Confirm you have a work profile

A work profile is a separate Android user space with its own apps, accounts, and badge. Personal Gemini must not read that space.

On the device:

1. Open **Settings → Passwords, passkeys and accounts** (wording varies by OEM).
2. Look for a second Google or Microsoft account marked **Work**.
3. Open the app drawer. Work apps show a small briefcase badge.
4. Confirm **Settings → Security and privacy** lists a work profile that can be paused.

If every work app lives in the same drawer as personal apps and nothing is badged, you do not have a work profile. In that case Gemini sees one profile. Ask IT whether the device is fully managed (company-owned) or personally owned with a work profile (COPE / BYOD).

Pause the work profile when you are off shift. That hides work apps and stops work notifications. It does not delete the profile.

## What personal Gemini is allowed to do

On a dual-profile phone, keep personal Gemini in the personal profile only.

Safe personal uses:

- Draft a message in personal Gmail or Messages.
- Summarize a personal Calendar day.
- Remember a home item in Find Hub, if that feature is on your Android 16+ personal profile.
- Use Gemini Live on the personal camera for a home object.

Do not ask personal Gemini to:

- Open a badged work app.
- Quote a work email or work calendar event.
- File a ticket in a work IT or CRM app.
- Share a work PDF through personal Quick Share.

Google’s 2026 note says personal agents are blocked from corporate apps and data. If a prompt still tries to cross the badge, stop the task and report it. Do not “just this once” paste work text into a personal Gemini thread.

## What IT can set on the fleet

Administrators use the Android Management API and their EMM console. Google says they can configure, restrict, or disable AI automation fleet-wide.

Practical policy questions to settle in the console, not in a hallway chat:

1. Is Gemini allowed inside the **work profile** at all?
2. If yes, which accounts and Workspace data may it read?
3. Are multi-step agent actions allowed, or is Gemini limited to chat?
4. Are screenshots, overlay draw-over-apps, and accessibility access blocked for AI apps in work?
5. Does Quick Share stay inside the work profile, matching the 2026 “safe file sharing” controls?

If the company is not ready for agents, disable AI automation in work and leave personal Gemini alone. Workers still get a personal assistant. Corporate mail stays in the badged space.

Fully managed devices have no personal profile. On those phones, every Gemini setting is an IT setting. Do not assume a “personal” Gemini app exists.



![Team working at laptops in a modern office](https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80)



## Worker checklist after a Gemini update

Run this after a Play or system update that mentions Gemini Intelligence or agents.

1. Open the **Gemini** app from the personal drawer, not a badged icon.
2. Check **Gemini settings → Personal Intelligence / connected apps**. Remove any work account if it appears.
3. Start a harmless personal prompt. Confirm the response does not cite work mail.
4. Open a work app. Confirm Gemini overlay or Live cannot attach to that window.
5. If your phone is on Android 17, do not bubble a work app next to personal Gemini. Keep work windows in the work profile. For personal multitasking only, see [How to Use Android 17 App Bubbles for Faster Multitasking](/blog/android-17-app-bubbles/).

If Gemini offers to “complete this in your work inbox,” decline and tell IT. That prompt is a policy bug, not a feature you should train.

## Desktop mode and XR still follow the same wall

Android Enterprise 2026 also describes desktop mode on an external monitor and manageable XR devices such as Samsung Galaxy XR and XREAL Aura glasses.

Those surfaces inherit mobile policy. A work window on a monitor is still a work window. A heads-up display managed through the Android Management API is still a managed endpoint.

Do not treat a bigger screen as a way around the work profile. Dragging a work window onto a monitor does not make the data personal.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/8PxuWdjESfg"
    title="What's new in Android"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips that keep audits boring

- Pause the work profile on personal time so agents have nothing to see.
- Keep one Google account per profile. Mixing personal Gemini login into a work profile invites policy blocks.
- Use work Quick Share only for work files. The 2026 update says admin restrictions and work profile boundaries stay enforced on tap-to-share transfers.
- Ask IT which security patch level the fleet expects. Google is adding clearer Available Security Patch Level reporting for conditional access.
- Do not sideload an “unofficial Gemini” APK into work. EMMs will flag it, and it will not inherit the official isolation rules.

## Conclusion

Android Enterprise’s 2026 message is simple: workers can use Gemini, and IT keeps a switch on the work side of the badge.

Set the profile first. Keep personal Gemini personal. Let admins decide whether work Gemini may run multi-step tasks. If a prompt crosses the briefcase icon, stop and report it.

That split is the feature. The rest of the 2026 list — XR fleets, desktop mode, update controls, attestable device identity — only works if the same isolation holds when an agent is in the loop.

## Sources

- [6 ways Android Enterprise is evolving for the modern workforce](https://blog.google/products-and-platforms/products/android-enterprise/whats-new-android-enterprise-2026/) — Google Blog
- [Tap to share on Android](https://blog.google/products-and-platforms/platforms/android/tap-to-share-android/) — Google Blog
- [Android security state libraries](https://blog.google/security/android-security-state-libraries/) — Google Blog
- [Android Enterprise Solutions Directory](https://androidenterprisepartners.withgoogle.com/) — Google
- [Secure, intelligent experiences across every endpoint](https://cloud.google.com/blog/products/chrome-enterprise/secure-intelligent-experiences-across-every-endpoint) — Google Cloud Blog
