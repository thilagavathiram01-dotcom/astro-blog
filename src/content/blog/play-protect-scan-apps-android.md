---
title: "Turn On Google Play Protect App Scanning on Android"
description: "Learn how to turn on Google Play Protect scanning, improve harmful app detection, and review unused-app permissions on Android."
pubDate: 2026-10-02T10:00:00
heroImage: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "security", "how-to", "google"]
noindex: false
---

A sideloaded APK can look harmless until it asks for SMS access or hides behind a familiar icon. Google Play Protect is Android’s built-in check for that kind of app. It scans Play Store downloads before they install, looks for potentially harmful apps from other sources, and can warn you, disable an app, or remove it.

The scan is on by default. People turn it off to install a tool Play Protect blocks, then forget to switch it back. This guide shows how to confirm scanning is on, run a manual check, and decide what to do with the separate “Improve harmful app detection” setting. For a broader lock-down of a lost or stolen phone, see the [Android theft protection setup guide](/blog/android-theft-protection-setup/).

## What Play Protect actually checks

Google’s Play Help page lists the jobs Play Protect handles on a phone or tablet:

- It runs a safety check on apps from the Google Play Store before you download them.
- It checks the device for potentially harmful apps from other sources. Google calls these apps malware in the help text.
- It warns you about potentially harmful apps, and it may deactivate or remove them.
- It warns about apps that hide or misrepresent important information under Google’s Unwanted Software Policy.
- It sends privacy alerts when an app can reach personal information in a way that violates the Developer Policy.
- On some Android versions it may reset permissions. It may also block an unverified app that uses sensitive permissions often targeted in financial fraud.

Scanning is not the same thing as Play Protect certification. Certification is a device status you check under Play Store Settings, then About. If you see “Device is not certified,” Google says to use the Fix device issue flow there, not the Play Protect scan toggle.

![Person holding a smartphone above a laptop keyboard](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## Turn scanning on in the Play Store

Google recommends keeping Play Protect on. The path is the same on most phones that ship with the Play Store.

1. Open the Google Play Store app and sign in with the Google account you use for installs.
2. Tap your profile icon at the top right.
3. Tap Play Protect.
4. Tap the settings gear.
5. Turn on **Scan apps with Play Protect**.

On that same screen you can start a scan of apps already installed. Play Protect also checks apps at install time and runs periodic scans later. You do not have to open this page every day for the automatic checks to run.

If a scan flags an app, the help page says Play Protect might notify you, disable the app until you uninstall it, or remove it. In most automatic-removal cases you get a notification that the app was removed. To remove an app from a warning, tap the notification, then tap Uninstall.

Some phones add a pause option when you try to turn scanning off. A pause is temporary. A full off state stays off until you turn the switch back on. If you only needed one blocked installer to finish, turn scanning back on before you leave the settings screen.

## Improve harmful app detection

The second switch is separate. Turning off “Scan apps with Play Protect” does not automatically change **Improve harmful app detection**.

Google’s help text says that if you install apps from outside the Play Store, Play Protect may ask you to send unknown apps to Google. When Improve harmful app detection is on, Play Protect can send those unknown apps automatically. A recommended scan of an app Google has never seen sends app details for a code-level evaluation. You then get a result saying the app looks safe to install, or that the scan found it potentially harmful.

Turn it on from the same gear menu:

1. Open Play Store, tap the profile icon, then Play Protect, then the settings gear.
2. Turn **Improve harmful app detection** on.

Leave it off only if you do not want sideloaded packages sent to Google for that check. Google notes that even if you disable some protections, it may still receive information about apps installed through Google Play. The help page also says Google may receive information about network connections, potentially harmful URLs, the operating system, and apps installed from Play or other sources, so it can warn about unsafe apps or URLs.

## Review permissions Play Protect can reset

On devices running Android 6.0 through Android 10, Play Protect may reset permissions for apps you have not used for three months. Google says this is meant to keep data private. You may get a notification when it happens. Play Protect does not automatically reset permissions for apps needed for normal device operation.

To review that list:

1. Open Play Store, tap the profile icon, then Play Protect, then the settings gear.
2. Tap **Permissions for unused apps**.
3. Select an app if you want to stop automatic resets.
4. Turn off **Remove permissions if app isn’t used**, **Remove permissions if app is unused**, or **Pause app activity if unused**, depending on which label your Android version shows.

If Play Protect already cleared a permission, you have to grant it again the next time the app needs it. On newer Android versions, unused-app permission controls also live under system Settings, Apps. The Play Protect list is the place Google documents for this older behavior.

![Close-up of a laptop screen showing lines of code](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## What to do when an app is blocked

A block is not always a false positive, and a false positive is not always malware. Google’s developer guidance splits the outcomes.

If you are installing something you trust and Play Protect recommends a scan, run the scan and read the result before you override it. If the result says the app looks potentially harmful, do not install it unless you can confirm the package from the publisher’s own site and you accept the risk.

If you publish apps and Play Protect flags a build, Google points developers to the Play Developer Policy Center and the Unwanted Software policy. An incorrect flag can be appealed. The appeal form is linked from the Play Help article for developers who believe an app was blocked by mistake.

Work-managed phones can be different. Android Enterprise documentation says an admin can require Play Protect on managed devices and can be notified when a potentially harmful app is found. If the toggle is missing or greyed out, check with the account that manages the phone before you assume the Play Store path is broken.

## Watch how always-on app checks are described

The Android channel’s short overview covers Play review before an app appears in the Store, checks on apps from outside the Store, and daily scans after install. It matches the help-center model: protection is not a one-time install screen.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/uxFU9D4EtMc"
    title="Android App Safety - Always on protection"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical checks after you turn scanning on

Keep the profile you use for Play Store signed in. Scans and warnings are tied to that device session.

Open Play Protect once after a batch of sideloads. Automatic scans exist, but a manual pass is the fastest way to see a current “no issues found” state or a list of warnings.

Do not treat a clean scan as a reason to install every APK a message link offers. Play Protect can miss a brand-new package until it has been evaluated. The help page is explicit that a never-scanned app can be sent for a code-level check, which takes a short time before you get a result.

Pair scanning with account controls you already use. [Advanced Protection on Android](/blog/android-advanced-protection-setup/) is a separate, stricter mode for people who face targeted attacks. Play Protect is the everyday app scan. They solve different problems.

If Play Store itself will not open the Play Protect page, update Play Store from the profile menu, then retry. A “Device is not certified” line under Settings, About is a certification issue. Follow Fix device issue on that screen instead of toggling Scan apps with Play Protect.

## What this does not cover

Play Protect does not replace a lock screen, Find Hub, or theft-detection features. It also does not review the content of your messages. It looks at apps, some URLs tied to harmful software, and, on older Android versions, unused-app permissions.

Samsung, Pixel, and other skins sometimes rename the profile menu, but the Play Protect entry still lives in the Play Store app, not in a third-party “cleaner” download. Avoid apps that claim to replace Play Protect. Those downloads are a common way harmful packages get onto a phone in the first place.

## Bottom line

Open Play Store, tap your profile icon, open Play Protect, and confirm **Scan apps with Play Protect** is on. Decide separately whether **Improve harmful app detection** should send unknown apps to Google. Then run a scan and uninstall anything the warning tells you to remove. That is the full official path, and it is the setting Google says to leave enabled.

## Sources

- Google Play Help, “Use Google Play Protect to help keep your apps safe & your data private”: https://support.google.com/googleplay/answer/2812853?hl=en
- Android Enterprise Help, “Google Play Protect”: https://support.google.com/work/android/answer/15162069
- Android YouTube, “Android App Safety - Always on protection”: https://www.youtube.com/watch?v=uxFU9D4EtMc
