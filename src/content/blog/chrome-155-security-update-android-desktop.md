---
title: "How to Install Chrome 155 Security Fixes on Your Device"
description: "Learn how to update Google Chrome to 155.0.8059 on Android, Windows, Mac, and Linux, confirm the version, and apply the October 2026 security fixes."
pubDate: 2026-10-08T15:00:00
heroImage: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["security", "google", "how-to", "android"]
noindex: false
---

Google shipped Chrome 155.0.8059.39 and .40 in early October 2026 with a large set of security fixes. If Chrome stays open for days, those fixes sit downloaded and unused until you relaunch or update the app.

This guide covers the official check on a computer and on Android, what version string to expect, and what to do if Play Store still shows an older build. It also notes the early Chrome 156 rollout so a higher number is not a surprise.

## What Chrome 155 actually ships

On 6 October 2026 the [Chrome Releases blog](https://chromereleases.googleblog.com/2026/10/stable-channel-update-for-desktop_086471744.html) moved the Stable channel to **155.0.8059.39/.40** on Windows and Mac and **155.0.8059.39** on Linux. The same post says the update includes **247 security fixes** and points readers to the Chrome security page. Access to individual bug details stays restricted until most users are on the fixed build.

Four issues in that note are marked Critical:

- CVE-2026-106382, use after free in Chromecast, reported by Google
- CVE-2026-106197, use after free in Browser, reported by Xinyang Ge
- CVE-2026-106358, use after free in Navigation, reported by Xinyang Ge (Anthropic), assisted by Claude
- CVE-2026-106347, use after free in Track, reported by Xinyang Ge (Anthropic), assisted by Claude

Google has not published exploit details. Treat the labels as a reason to update, not as a description of an attack you can reproduce.

The matching Android note, also dated 6 October, releases **Chrome 155 (155.0.8059.39)** on Google Play over the following days. It says Android releases contain the same security fixes as the desktop builds above unless otherwise noted. The Android post itself describes the package as stability and performance improvements and links the desktop security note for the fix list.

On 7 October Google also started an early Stable rollout of **Chrome 156 (156.0.8078.25)** for Android to a small percentage of users. That build is described as stability and performance improvements. If About Chrome shows 156, you are ahead of 155, not behind it.

![Laptop on a desk beside a notebook, used for checking browser version](https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=800&q=80)

## Update Chrome on Windows, Mac, and Linux

Chrome Help says updates normally finish in the background when you close and reopen the browser. If a window has stayed open, the pending update waits for a relaunch. The official path is:

1. Open Chrome.
2. At the top right, open the **More** menu (three dots).
3. Choose **Help**, then **About Google Chrome**. The address `chrome://settings/help` opens the same page.
4. Chrome checks for updates as soon as that page loads.
5. If a build is ready, select **Relaunch**. Chrome Help says opened tabs and windows come back. Incognito windows do not.
6. Return to About Google Chrome. You are current when the page says Chrome is up to date and shows **155.0.8059.39**, **155.0.8059.40**, or a later 155 or 156 build offered to your channel.

Windows users should close every Chrome window, including background ones in the system tray, then open Chrome again if Relaunch does not appear. On Mac, if Chrome is installed in the Applications folder, About Google Chrome can offer **Automatically update Chrome for all users**.

Linux packages from your distribution may lag the Google-hosted build. If About Chrome stays on 154 after a relaunch, update the `google-chrome-stable` package from the repository you installed, then check the page again.

## Update Chrome on Android

Chrome Help says the Android app supports **Android 10 and up** and should update from Play Store settings. Manual check:

1. Open the **Play Store** app.
2. Tap your profile icon at the top right.
3. Tap **Manage apps & device**.
4. Under **Updates available**, find Chrome.
5. Tap **Update** next to Chrome.

Confirm the install inside the browser:

1. Open Chrome.
2. Tap **More**, then **Settings**, then **About Chrome**.
3. Read the version line. A current stable phone on this release should show **155.0.8059.39** once Play has delivered it, or **156.0.8078.25** if you are in the early Stable group.

Play Store does not push every phone on the same hour. The Android release note says the build becomes available over the next few days. If Update is missing, you are either current or still waiting for the staged rollout. Do not sideload an APK from a random site to jump the queue.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/EeJVm1p3GrQ"
    title="How to Update Google Chrome (Mobile and Desktop)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What the version number means

Chrome version strings have four parts. **155** is the milestone. **0** is a branch marker. **8059** is the build. **39** or **40** is the patch. Windows and Mac can show either patch of the same milestone. Linux is listed as .39 only.

A phone on 154.0.8037.x is still on the previous stable milestone and should take 155 when Play offers it. A computer that still shows 154.0.8037.97 or .98 after you open About Chrome has not applied the 6 October desktop update yet. Leave that page open for a minute so the updater can finish, then relaunch.

Early Stable is a small-percentage channel, not a beta you opted into. Chrome 156 on Android does not mean your account is on Dev or Canary. Beta is a separate app and does not replace stable Chrome.

## If the update will not apply

Work through these checks before you reinstall:

- **Desktop stays on an old build after Relaunch.** Quit every Chrome process, reopen, and visit `chrome://settings/help` again. A managed work profile can pin a version. Ask IT before you override policy.
- **Play Store shows no Chrome update.** Confirm you are signed into the Play account that installed Chrome, then pull to refresh Manage apps & device. Wait for the staged rollout noted on 6 October.
- **About Chrome fails to load.** Check the network, then try again. Chrome cannot report a new version if it cannot reach the update server.
- **You use Chrome Beta or Canary.** Those apps have their own version lines. The 155.0.8059 stable note does not apply to them. Update each app from its own About page or Play listing.
- **WebView-based apps.** Many Android apps embed WebView rather than the Chrome app UI. Updating Chrome does not always update WebView. In Play Store, also check **Android System WebView** if it appears in your update list.

![Close view of a phone in someone’s hands, the usual place to confirm an app update](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80)

## Extra checks after you relaunch

Updating the browser closes known holes in that build. It does not replace other network settings.

On Android, leave Private DNS on Automatic so DNS lookups are encrypted on networks that support it. The steps are in [How to Turn On Private DNS on Android](/blog/android-private-dns-ech/). That setting does not patch Chrome. It reduces a different leak.

On a computer, sign back into sites that dropped your session after relaunch, and confirm extensions still load. An extension can block the updater. If About Chrome never moves, disable extensions, check again, then re-enable them one at a time.

Google also asks you not to treat unpublished bug links as public proof. The release note keeps details restricted on purpose. Sharing crash traces from an unpatched browser on a public forum is not required to get the fix.

## Tips that save a second visit

- Bookmark `chrome://settings/help` on desktop. Opening it is the update check.
- Close Chrome at the end of the day on a shared PC so background updates can finish.
- On Android, allow Play Store auto-update for Chrome. The manual path is the backup, not the only path.
- Compare your version to the milestone, not to a screenshot from another operating system. .39 and .40 are both current for this Windows and Mac release.
- Ignore messages that ask you to install a “Chrome security tool” from outside Play Store or google.com. The updater is already inside the browser and the Play listing.

## Conclusion

Chrome 155.0.8059 is the stable security build Google published on 6 October 2026 for desktop, with the same fix set called out for Android 155.0.8059.39. Open About Google Chrome and relaunch on a computer. On a phone, update Chrome from Play Store, then read the version under Settings, About Chrome.

If you already see Chrome 156 on Android, you are on the early Stable build from 7 October. Either way, the useful action is the same: confirm the number on the device in front of you, and do not wait on a browser window that has been open since last week.

## Sources

- [Stable Channel Update for Desktop, 6 October 2026](https://chromereleases.googleblog.com/2026/10/stable-channel-update-for-desktop_086471744.html) — Chrome Releases
- [Chrome for Android Update, 6 October 2026](https://chromereleases.googleblog.com/2026/10/chrome-for-android-update_01835271525.html) — Chrome Releases
- [Chrome 156 early Stable for Android, 7 October 2026](https://chromereleases.googleblog.com/) — Chrome Releases
- [Update Google Chrome (computer)](https://support.google.com/chrome/answer/95414?co=GENIE.Platform%3DDesktop) — Chrome Help
- [Update Google Chrome (Android)](https://support.google.com/chrome/answer/95414?co=GENIE.Platform%3DAndroid) — Chrome Help
- [How to Update Google Chrome (Mobile and Desktop)](https://www.youtube.com/watch?v=EeJVm1p3GrQ) — How-To Authority
