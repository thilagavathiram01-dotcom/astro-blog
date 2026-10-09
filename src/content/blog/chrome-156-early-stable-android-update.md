---
title: "Check and Update Chrome 156 Early Stable on Android"
description: "Chrome 156 early stable is rolling out on Android. Check your version, update from Play, and know what the 156.0.8078.25 build includes."
pubDate: 2026-10-09T16:00:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "google", "security", "how-to"]
noindex: false
---

Google started shipping Chrome 156 early stable to a small share of Android users on 7 October 2026. The build is 156.0.8078.25. It is not yet on every phone, and Play Store availability follows over the next few days.

If you stayed on the Chrome 155 stable line, this is the next numbered release. Early stable is a staged rollout, not a separate browser. Most people still get the wider stable push about a week after the first slice of users, the same pattern Chrome has used since version 110.

This guide shows how to read your version, pull the update from Google Play, and decide whether to wait or switch to Chrome Beta.

## What the Chrome 156 Android note actually says

The Chrome Releases blog, posted by Harry Souders, says Chrome 156 (156.0.8078.25) for Android went to a small percentage of users. The same post says the package will appear on Google Play over the following days. The listed change set is stability and performance improvements. The full diff is in the Chromium git log from 155.0.8059.40 to 156.0.8078.25.

That wording matters. The Android early-stable note does not publish a CVE list. Do not treat ChromeOS Long-term Support channel fixes from the same month as Android Chrome 156 patches. Those LTC builds are a different product channel.

Desktop early stable landed around the same window at 156.0.8078.12 and 156.0.8078.13 for Windows and Mac, also to a small percentage of users. Android and desktop share a milestone number, but the build suffixes differ. Check the version string on the device you care about.

Chrome Beta for Android was already on 156.0.8078.25 and is listed as available on Google Play. Beta is a second app. Installing it does not replace stable Chrome.

## Why early stable exists

From Chrome 110 onward, Google ships an early stable build to a small percentage of users about a week before the scheduled wider stable date. The Chrome for Developers note on that schedule change says the point is monitoring. If a show-stopping bug appears, the team can fix it while the install base is still small. The download page and the majority rollout stay on the later date.

For phone users, that means three normal states this week:

- Play still offers Chrome 155, and About Chrome matches that.
- Play offers 156.0.8078.25, and an update button is present.
- Chrome already updated in the background after you left the app.

None of those states means your account is broken. Staged rollouts are how Chrome ships.

![Person holding a smartphone with a browser open](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## Check the version on your phone

Google’s Chrome Help page for Android is the reference for the version check.

1. Open Chrome on the phone or tablet.
2. Tap the three-dot menu at the top right.
3. Tap Settings, then About Chrome.
4. Read the version line. You want to see whether it starts with 156.0.8078 or still shows a 155 build such as 155.0.8059.

About Chrome also triggers an update check on many devices. If a newer package is already downloaded, the page tells you to relaunch.

Chrome Help currently lists Android 10 and up as the supported range, with languages that the Play Store supports. If the phone is below that floor, Play will not offer current Chrome.

## Update from the Play Store

Chrome on Android updates through Google Play, not through an in-browser download. Google’s help steps are:

1. Open the Play Store app.
2. Tap the profile icon at the top right.
3. Tap Manage apps & device.
4. Under Updates available, find Chrome.
5. Tap Update next to Chrome.

If Chrome is missing from that list, open the Chrome store listing directly and look for Update or Open. Open means Play already considers you current for the build it is serving in your region.

Play settings can delay updates. In Play Store, profile, Settings, Network preferences, Auto-update apps, you can allow updates over any network or over Wi-Fi only. A Wi-Fi-only rule will hold 156 until you are on Wi-Fi even after the package is published.

After the install finishes, force-close Chrome and open it again, then recheck About Chrome. The version should match the package Play just installed.

If the button still says Open and the version is 155, you are outside the early-stable percentage. Wait for the wider push. Refreshing the Play listing does not move you into the canary slice.

## What to do if 156 is not offered yet

Early stable is intentional. The 7 October post says the Android package becomes available on Play over the next few days, and only for a small percentage at first.

Practical options:

- Leave auto-update on and keep using Chrome 155. The browser keeps working.
- Check Play once a day until 156.0.8078.25 appears.
- Install Chrome Beta from Play if you want the 156 line now. Beta stays side by side with stable. Google’s help note says Beta does not replace your usual Chrome.
- Avoid sideloading an APK from a random site. The supported path is Play.

If you already covered the [Chrome 155 security update on Android and desktop](/blog/chrome-155-security-update-android-desktop/), treat 156 as the next milestone, not a replacement for that earlier patch set. Stay on 155 until Play serves 156, rather than uninstalling Chrome to force a version.

## Desktop and beta builds in the same week

The same October release thread includes other 156 packages. Keep them separate when you support a family or a small fleet.

- Android early stable: 156.0.8078.25, small percentage, Play over the following days.
- Windows and Mac early stable: 156.0.8078.12 and 156.0.8078.13, small percentage.
- Desktop beta: 156.0.8078.17 for Windows, Mac, and Linux.
- Android beta: 156.0.8078.25 on the Chrome Beta Play listing.
- iOS beta: 156.0.8078.24, App Store over the following days.

A laptop on 156.0.8078.12 and a phone still on 155 is normal during early stable. Do not factory-reset the phone to match the laptop.

![Laptop and phone on a desk during a software update](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Report a problem in 156

The Android release note asks people who hit a new issue to file a bug with the Android issue template. On desktop, the matching note points at crbug.com and the Chrome help community.

Useful report details:

- Exact version from About Chrome, including the full 156.0.8078.x string.
- Android version and phone model.
- Whether the problem started only after the 156 update.
- A short repro: page URL, tap sequence, and whether it happens in a guest profile.

Guest profile is a quick split. If the bug vanishes in a guest window, an extension or site setting on the main profile is a likely cause. Chrome on Android has fewer extensions than desktop, but site settings and account sync still carry state across updates.

## Tips for keeping the update quiet and safe

Turn on Play auto-update for Chrome if you want security fixes without a manual check. Google’s update page says Chrome applies updates in the background and finishes them when you close and reopen the app.

Confirm the signer by updating only from the Play listing for `com.android.chrome`. A second icon named Chrome Beta is `com.chrome.beta`. Both are Google packages. Other lookalike names are not.

If you use Enhanced Safe Browsing, leave it on across the update. Version bumps do not reset that control, but it is worth a glance under Settings, Privacy and security, after a major milestone.

Workspace and school-managed phones may pin a Chrome version. If About Chrome shows a managed notice and Play has no update, the admin console is holding the channel. Ask the admin rather than removing the work profile.

Developers tracking web platform changes should use Chrome Status for milestone 156, which the beta posts link, instead of assuming every beta flag is in early stable. Early stable is a stability slice of the milestone, not a promise that every beta experiment is on.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/vukchAoaTdE"
    title="What's New: Chrome DevTools 151-153"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

Chrome for Developers’ DevTools recap for versions 151–153 also notes that Chrome moved to a two-week release cycle starting with Chrome 153, on desktop, Android, and iOS. That shorter cadence is why 156 can show up so soon after 155. Smaller milestones mean you should expect version checks more often, not a single large yearly jump.

## Conclusion

Chrome 156 early stable on Android is build 156.0.8078.25, released to a small percentage of users on 7 October 2026, with Play Store availability following over the next few days. The published note covers stability and performance work. Check About Chrome, update from Play when the button appears, and leave auto-update on if you want the wider stable push without watching the listing.

Beta is the supported way to sit on the 156 line early. Sideloading is not required. If 156 has not reached your account yet, Chrome 155 remains the current build Play is serving you.

## Sources

- Chrome Releases, October 2026: Chrome 156 (156.0.8078.25) for Android early stable, Harry Souders, 7 October 2026. https://chromereleases.googleblog.com/2026/10/
- Chrome for Developers: change in release schedule from Chrome 110 (early stable to a small percentage, wider stable about a week later). https://developer.chrome.com/blog/early-stable/
- Google Chrome Help: Update Google Chrome on Android. https://support.google.com/chrome/answer/95414?hl=en&co=GENIE.Platform%3DAndroid
- Chrome for Developers: Chrome 156 beta, published 30 September 2026. https://developer.chrome.com/blog/chrome-156-beta
- Chrome for Developers, YouTube: What’s New: Chrome DevTools 151-153, including the two-week release cycle note from Chrome 153. https://www.youtube.com/watch?v=vukchAoaTdE
