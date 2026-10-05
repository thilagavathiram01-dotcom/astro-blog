---
title: "How to Restore the Contacts Tab in Phone by Google"
description: "Get the Contacts tab back in Phone by Google. Check the beta rollout, update the dialer, and open contacts if the tab is still missing."
pubDate: 2026-10-05T15:10:00
tags: ["android", "how-to", "google", "pixel"]
heroImage: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1200&h=630&q=80"
noindex: false
---

Phone by Google hid Contacts behind a drawer in the August 2025 Material 3 Expressive redesign. In early October 2026, Google started putting that tab back on the bottom bar, but only for some beta users. There is no switch in Settings that forces it on.

If your dialer still shows Home, Keypad, and Voicemail, the update has not reached your account yet. This guide covers how to check the app version, join the beta, and reach a contact while you wait.

## What changed in the dialer

The August 2025 update simplified Phone by Google to three bottom tabs: Home, Keypad, and Voicemail. Contacts moved into the navigation drawer. A second path stayed in the Favorites carousel at the top of the main feed.

Google is reversing the main change. On phones that have the new layout, Contacts sits between Home and Keypad. The drawer shortcut for Contacts is removed. Other ways in, including the Favorites carousel, stay.

9to5Google reported the tab in the Phone by Google beta, version 240 and newer, and said it was not widely available for testers as of October 1, 2026. Android Authority saw the tab in beta 240.0.98 on a Pixel 9, and did not see it on other phones with the same beta. That pattern fits a server-side rollout, not a setting you can flip.

![Person holding a smartphone above a notebook on a desk](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## Check whether your phone already has the tab

1. Open Phone by Google.
2. Look at the bottom bar. The restored layout shows Home, Contacts, Keypad, and Voicemail.
3. If you only see Home, Keypad, and Voicemail, the rollout has not landed on this account.
4. Open the navigation drawer. On the new layout, the Contacts shortcut in that drawer is gone. On the old layout, it is still there.
5. Confirm the app version in the Play Store listing for Phone by Google, or in Settings, then Apps, then Phone, then App details.

Stable builds were still on the three-tab bar when testers first reported the change. Updating the stable app alone may not add the tab until Google finishes the rollout.

## Join the Phone by Google beta

The public beta is the only path testers have used so far. It does not guarantee the tab, because the feature is rolling out in waves.

1. On the phone, open the Play Store and search for Phone by Google.
2. Scroll to the beta section. If Join is available, tap it and confirm.
3. Wait for the beta to install. Play can take a few minutes, and sometimes longer, before the update appears.
4. Open Phone again and check the bottom bar.
5. If the tab is still missing, force-close Phone and reopen it after the Play update finishes. Do not clear storage. That does not trigger a server flag, and it can wipe local call history preferences.

Android Authority noted that sideloading the latest public beta from a mirror site was another way testers tried the build. Stick to the Play Store beta unless you already trust that source and accept the usual sideload risks.

Leaving the beta later returns you to the stable track. Play may ask you to uninstall the beta first. Back up nothing critical inside Phone itself. Call history lives with the system dialer, but a reinstall can reset in-app options.

## Open a contact while the tab is missing

You do not need the bottom tab to place a call or edit a number.

- On the Home tab, use the Favorites carousel at the top. That path remained after the 2025 redesign and is still listed as available after the drawer shortcut goes away.
- Open the navigation drawer and tap Contacts, if that item is still present on your build.
- Open the separate Contacts app from the app drawer. Search, then tap the phone icon on the contact card.
- From the home screen, swipe up and search the contact name. Pixel search can open the contact card without the dialer tab. The same idea is in Google’s help clip on finding contacts from the home screen.

Spam and caller-ID tools stay on the Home tab. The Contacts tab is navigation, not a new blocking feature.

![Android phone on a wooden desk next to a laptop](https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80)

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/II1zvWiCcyQ"
    title="Google Dialer (Phone by Google App) New vs Old Design Incoming Call on Pixel 9 ProXL vs Pixel 8 Pro"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

That clip compares the newer Phone by Google incoming-call screen with the older dialer layout. It does not show the Contacts tab, but it is a useful check that you are on the Material 3 Expressive call UI that shipped with the three-tab bar.

## Tips if the tab still does not appear

Wait for the server flag. Version 240 on one Pixel and not on another is the reported pattern. Updating Play services or rebooting will not invent a tab Google has not enabled for that account.

Do not confuse Phone by Google with the Samsung, Nothing, or carrier dialer. The restored tab is specific to Google’s Phone app. A Samsung phone can install Phone by Google from Play, but the system dialer may still be the default. Set Phone by Google as the default phone app under Settings, then Apps, then Default apps, then Phone app, if you want this layout.

The drawer will look emptier once Contacts moves. Testers noted that Settings, clear call history, and help stayed in the menu. Expect that menu to feel thinner. Google has not published a separate overflow menu for those items.

If you also want faster text selection in chats, the Messages long-press change is a separate rollout. See [copy a text snippet in Google Messages](/blog/copy-text-snippet-google-messages-android/) for that app, not the dialer.

## Conclusion

The Contacts tab is returning to the bottom bar in Phone by Google, between Home and Keypad, after a year in the navigation drawer. As of early October 2026 it is a gradual beta rollout on version 240 and newer, not a toggle. Join the Play Store beta, confirm the version, and use the Favorites carousel or the Contacts app until the tab shows up on your account.

## Sources

- [Google Phone app brings back Contacts bottom bar tab](https://9to5google.com/2026/10/01/google-phone-contacts-tab/), 9to5Google, October 1, 2026
- [Google’s Phone app is bringing back the elusive Contacts tab](https://www.androidauthority.com/google-phone-beta-contacts-tab-roll-out-3716733/), Android Authority, September 29, 2026
- [Find your messages, photos and more on your Pixel phone](https://support.google.com/pixelphone/answer/7534757), Google Pixel Help
