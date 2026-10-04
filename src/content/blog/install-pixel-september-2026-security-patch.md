---
title: "Install the Pixel September 2026 Security Patch"
description: "Check the Pixel security patch level and install the September 2026 update so 2026-09-05 covers the modem and bootloader fixes."
pubDate: 2026-10-04T16:00:00
heroImage: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["pixel", "security", "android", "how-to"]
noindex: false
---

Google published the September 2026 Pixel Update Bulletin on September 15. A security patch level of 2026-09-05 or later covers every issue in that bulletin and every issue in the September 2026 Android Security Bulletin. If your Pixel still shows an August date, the phone has not taken this update.

The bulletin is Pixel-specific. Android’s monthly bulletin covers platform issues that every manufacturer must patch to claim a patch level. Pixel gets an extra list for Google hardware and software, including the modem, bootloader, fingerprint trusted application, and verified boot. Installing the system update is how those fixes land. There is no separate “security only” toggle.

## What the September bulletin fixes

Google says all supported Pixel devices receive an update to the 2026-09-05 patch level, and it asks customers to accept the updates. Carrier and device timing still apply. Google’s help page says updates roll out gradually and can take a few weeks to reach a given phone. A missing prompt in the first days after September 15 is not proof the phone is unsupported.

The Pixel table lists critical remote code execution issues in the IP Multimedia Subsystem, libpixelimsmedia, the VPU, the modem, Telephone, and BigOcean. It also lists critical elevation-of-privilege issues in the bootloader, the trusted execution environment, the Goodix fingerprint trusted application, and KeyMint. CVE-2026-58704 is a high-severity elevation of privilege in the Modem component (Android bug A-484011314). Kernel entries include a high-severity elevation of privilege in the Google eXperience Processor and another in the kernel.

A patch level of 2026-09-05 or later addresses that set and prior patch levels. Later October builds also count. You do not need to match a single build number. You need the date on the About phone screen to be September 5, 2026, or newer.

Functional fixes shipped in the same release. Google points to the Pixel Community forum for those notes. Security and polish arrive together.

![Hand holding a smartphone with the screen locked](https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80)

## Check the patch level before you download

Do this before you hunt for a file. The Settings screen is the source of truth.

1. Open Settings.
2. Tap About phone (or About tablet).
3. Tap Android version.
4. Read Android security update. You want 2026-09-05 or a later date.
5. Note the Android version and build number on the same screen. Support may ask for them if an install fails.

Google Play system update is a separate line. A current Play system date does not replace the Android security update. Pixel modem and bootloader fixes ride the system image, not the Play update.

Pixel 8 and later phones get seven years of OS and security updates from the date the device first went on sale in the Google Store in the US. Older Pixels follow a shorter window listed on Google’s update schedule. If the phone is past that window, Check for update will not offer 2026-09-05.

## Install the update from Settings

Google’s current help path is Settings, System, Software updates. A notification also works: open it and tap the update action. Most system updates and security patches install automatically once the phone is online, but a cleared notification or an offline phone leaves the package waiting.

1. Connect to Wi-Fi. These packages are large.
2. Charge to at least 75 percent. Google lists that floor before you start.
3. Open Settings, then System, then Software updates. On some builds the label is still System update.
4. Read the status. If an update is ready, follow the on-screen steps.
5. Tap Check for update if the status is idle. Wait for the check to finish.
6. Download, then install. Keep the phone unlocked and on Wi-Fi until the progress bar completes.
7. Restart when prompted. The patch level does not change until the reboot finishes.

After restart, return to About phone, Android version, and confirm Android security update shows September 5, 2026, or later. If the date is unchanged, the install did not apply. Check storage, then try again. Do not factory reset as a first step.

Google Help’s walkthrough uses System, System update, Check for update. Menu names shifted to Software updates on newer builds. Both paths land on the same status screen.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/lyv_3nVmED4"
    title="Update your Android version on your Pixel phone"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## If the update does not appear

Rollouts depend on carrier and device. Google says it may take a few weeks and that you get a notification when the package is ready. Checking twice a day does not force a server-side release.

Try these in order:

- Toggle Wi-Fi off and on, then check again. Mobile data can stall a large OTA.
- Restart, then open Software updates. A stuck download often clears after a reboot.
- Confirm the phone is not in a work profile or a restricted account that blocks system updates.
- Free several gigabytes. A full disk fails the download without a clear security error.
- Wait if the phone is a carrier model. Unlocked Pixels often see the package first.

Sideloading a full OTA is a repair path, not the normal one. Use only a package from Google’s Full OTA image page that matches your model and current build, and keep a backup. A mismatched zip will not install on a locked bootloader. For a phone that still receives updates, Settings is the right route.

![Close-up of a phone screen during a system settings check](https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=800&q=80)

## Read the date the way Google defines it

Google’s FAQ on the bulletin is direct. A security patch level of 2026-09-05 or later addresses all issues tied to that level and every earlier level. You do not add Pixel CVEs and Android bulletin CVEs by hand. The date is the declaration.

Type abbreviations in the table are standard: RCE is remote code execution, EoP is elevation of privilege, ID is information disclosure, and DoS is denial of service. Critical RCE rows are why Google tells every supported customer to accept the update, not only people who follow security news.

Pixel-only rows are not required for a generic Android phone to declare a patch level. That split is why a Samsung or other Android phone on the September Android bulletin is not the same check as a Pixel. On Pixel, confirm 2026-09-05 in About phone.

## Tips that avoid a bad install

A patched modem does not replace account protections. Pair the update with [Android Advanced Protection](/blog/android-advanced-protection-setup/) if you want the stronger lock-screen and sideload limits on supported Pixels. Entries marked with an asterisk next to the Android bug ID are not public. The fix ships in Pixel binary drivers.

Leave the phone on the charger for the reboot. A power loss mid-install is the failure mode Google’s 75 percent rule is meant to avoid.

Do not start a second download from a “system update” app that is not Settings. Pixel updates come from Google.

Screenshot the Android version page after the reboot. If a later support chat asks whether September landed, the date and build number answer it.

If the phone is a backup device you rarely power on, check Software updates the next time you charge it. Gradual rollouts do not retry forever on a phone that stays offline.

## Bottom line

Open About phone and read the Android security update line. If it is older than September 5, 2026, connect to Wi-Fi, charge past 75 percent, and install from Settings, System, Software updates. The 2026-09-05 level is what Google says covers the September Pixel bulletin, including the high-severity modem issue CVE-2026-58704 and the critical bootloader and modem fixes published on September 15.

## Sources

- Android Open Source Project, “Pixel Update Bulletin—September 2026,” published September 15, 2026: https://source.android.com/docs/security/bulletin/pixel/2026/2026-09-01
- Google Pixel Help, “Check & update your Android version”: https://support.google.com/pixelphone/answer/7680439
- Google Pixel Help, “Learn when you'll get software updates on Google Pixel phones”: https://support.google.com/pixelphone/answer/4457705
- Google Help, “Update your Android version on your Pixel phone” (YouTube): https://www.youtube.com/watch?v=lyv_3nVmED4
