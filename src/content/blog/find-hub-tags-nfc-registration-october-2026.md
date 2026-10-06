---
title: "Set Up Find Hub Tags With NFC Tap and Left-Behind Alerts"
description: "Play services v26.39 adds NFC tap for Find Hub tags and a first-run flow for names, categories, and Left-Behind Reminders. Here is how to use it."
pubDate: 2026-10-06T11:00:00
heroImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "google", "security"]
noindex: false
---

Google Play services 26.39, dated 5 October 2026, adds two phone features for Find Hub network tags. You can tap an NFC-capable tag to open its details, settings, or a lost-tag identification screen. A new registration flow also lets you name the tag, set a category, and turn on Left-Behind Reminders during first setup instead of doing that later in the app.

A line in the Google System Release Notes does not mean every phone has the screen today. Play services features often roll out in stages. Update Play services and Find Hub, then check the pairing flow before you rely on it for a trip.

If the item has no radio at all, log it as a note instead. The guide to [Find Hub Remembered items with Gemini](/blog/find-hub-remembered-gemini/) covers passports, spare keys, and folders that never get a tracker.

![Person holding a smartphone outdoors](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## What the October notes actually add

The Security and Privacy section of Play services v26.39 lists two phone changes:

- With NFC support, a tap can open Find Hub tag details and settings, or identify a lost tag.
- The new registration flow lets you set categories, rename tags, and configure features such as Left-Behind Reminders when you first set up a network tag.

That second point matches a real gap in the older path. Google’s help pages already describe pairing a Bluetooth tracker tag, then managing it in Find Hub. Categories and left-behind options used to wait until after the tag was on your account. The October note moves that configuration into first setup so you do not have to open the app again to finish the basics.

These notes are for phones. The same Play services release also mentions Android Auto theme tokens, Maps developer features, and card art in Wallet tokenization prompts. Those are separate from tag setup.

## What you need before pairing

Google’s Find Hub documentation sets a few hard limits. Tracker tags are for items you own, such as keys, luggage, or a bike. Google says you should not use them to track pets or to locate stolen items.

Check these before you open the battery tab:

- Android 9 or later for sharing a tag. Ultra-wideband precision finding needs Android 13 or later, and only on phones and tags that both support UWB.
- Bluetooth on. Find Hub network tags are Bluetooth accessories. NFC in the October note is an extra way to open details or identify a tag, not a replacement for Bluetooth pairing.
- A Find Hub-compatible tag. Samsung SmartTag, Tile, and AirTag use their own apps. A tag that never appears in Find Hub is usually the wrong network.
- The Find Hub app and Google Play services updated from the Play Store. Play services 26.39 is the build named in the 5 October notes.
- A screen lock. Find Hub network locations are end-to-end encrypted, and Google says only you can decrypt them with the device PIN, pattern, or password.

UWB precision finding is listed for Pixel 8 series and later Pro models, Samsung Galaxy S21 and later Plus and Ultra models, and some Motorola Edge and Razr phones. If your phone is not on that list, you still get last-known location and ring, not the directional arrow.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/rO_xoPyeUqo"
    title="How To Add Device To Google Find Hub - Full Guide"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Pair a tag and finish setup in one pass

Google’s accessory help still starts with Fast Pair. Bluetooth tracker tags are added to Find Hub after pairing completes. The October registration flow sits on top of that step.

1. Install or update **Find Hub** and accept the Play services update if the Play Store offers it.
2. Turn on Bluetooth. Turn on NFC in quick settings if you plan to use the tap path on an NFC tag.
3. Put the tag in pairing mode. On most Find Hub tags that means pulling the battery tab or holding the button until it beeps or flashes. Follow the card in the box if the maker uses a different gesture.
4. Hold the tag near the phone. Accept the Fast Pair prompt to add it to Find Hub. If you dismiss the prompt, open Find Hub and add the accessory from there.
5. On the new registration screens, set a short name (“House keys”, “Cabin bag”) and a category such as bag, bike, or car if the picker is shown. Categories are called out in the Play services note. Exact labels can vary by tag maker.
6. Turn on **Left-Behind Reminders** during that same flow if the toggle is present. Google’s note says this used to be a later, manual step in the app.
7. Confirm the tag appears under Devices in Find Hub. Ring it once while it is still in your hand.

If the new screens are missing, the server-side flag has not reached your account. Name the tag from its details page after pairing, then look for left-behind settings on that same card. Do not sideload an older Play services APK to force the note.

![Close-up of a smartphone screen on a desk](https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=800&q=80)

## Use an NFC tap on a tag you already own

The October note is specific: with NFC support, a phone tap can open tag details and settings, or identify a lost tag. It does not say every Find Hub tag has an NFC chip. Check the product page before you expect a tap to do anything.

For a tag you own:

1. Unlock the phone and turn on NFC.
2. Tap the back of the phone to the tag. Alignment varies by phone. The upper third of the back is the usual NFC spot on Pixels.
3. Open the Find Hub card if Android shows one. The release note describes access to details and settings, not a new map type.
4. Check the name, category, and Left-Behind Reminders from that card if the controls are there.

For a tag you do not own, the same note says a tap can identify a lost tag. Today, unknown-tracker alerts already exist in Find Hub. Treat the NFC path as a faster way to reach that identification flow when the tag supports it. If a tap does nothing, scan for unknown trackers from Find Hub instead of assuming the tag is offline.

## Share a tag without handing over your account

Google documents a separate share path that is unchanged by the October note. You can share an accessory or tracker tag with up to 10 people. Sharing works on Android 9 and later. The recipient has 24 hours to accept, and location detection can take several minutes after they accept. A 4-digit PIN appears under the shared device.

1. Open Find Hub and select the tag.
2. Tap **Share device** and send the invite by message, email, or Quick Share.
3. The other person opens the link on an Android phone, installs Find Hub if needed, and taps Accept or Decline.

Stop sharing from the same device card when the trip ends. Sharing a tag is not the same as sharing your Google account, and it is not the same as a Remembered item note.

## Left-behind alerts, ring, and remote areas

Left-Behind Reminders are the feature the new registration flow calls out by name. Enable them for bags and keys you normally carry. Leave them off for a bike that stays in a garage, or you will get alerts every time you leave home.

The rest of the Find Hub toolkit is already documented:

- Ring the tag from its card when it is in Bluetooth range.
- Use UWB directional finding only when both the phone and the tag support it, and UWB is enabled in Settings.
- For sparse areas, Find Hub settings include a “With network everywhere” option under finding offline devices. Google says this shares location through the network even when your phone is the only one that detected the item. It can help in remote places, and it is optional.

The network itself is crowdsourced. Nearby Android phones detect the tag over Bluetooth and send an encrypted location. Google says those locations are encrypted with a key only you can unlock.

![Keys on a wooden table](https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=800&q=80)

## If the tag does not appear

Work through the boring checks before you blame the October rollout.

- Battery tab removed, and the tag beeps or flashes in pairing mode.
- Bluetooth on, and the phone is not in airplane mode.
- Play services and Find Hub updated. On the Play Store, open your profile, then Manage apps and device, and check for updates.
- The tag is a Find Hub network product, not a Tile or AirTag.
- You are signed into the Google account that should own the tag.
- You did not already pair it to another phone. Factory-reset the tag with the maker’s button sequence, then pair again.

Unknown tags that follow you are a different screen. Use Find Hub’s unknown-tracker scan, or the NFC identify path once v26.39 is on the phone and the tag has an NFC chip.

## Tips that save a search later

Name tags for the object, not the brand. “Black cabin bag” beats “Tag 2” when you are in an airport queue.

Set the category during first setup if the new flow is visible. That is the point of the October change.

Turn on Left-Behind Reminders only for items that move with you. A spare tag in a drawer should stay quiet.

Share luggage tags with the person who is actually travelling, then revoke the share after the flight.

Keep a screen lock. Without it, Find Hub cannot use the encrypted network location the way Google describes.

Do not put a tag on a pet, and do not rely on a tag as a theft-recovery tool. Google’s acceptable-use note rules both out.

For items you only need to remember, use Remembered items. A tag is the wrong object for a passport in a drawer.

## Conclusion

Play services 26.39 does not reinvent Find Hub. It shortens two chores: opening a tag by NFC tap, and finishing name, category, and Left-Behind Reminders while you pair it. Update Play services, pair through Fast Pair, and complete those fields on the first screen if they appear.

If the new flow is absent, the older details page still works. Ring the tag once, share it only with people who need it, and leave left-behind alerts off for anything that is supposed to stay home.

## Sources

- [Google Find Hub tags adding NFC support, better registration — 9to5Google, quoting the 5 October 2026 Google System Release Notes for Play services v26.39](https://9to5google.com/2026/10/05/google-find-hub-tags-nfc/)
- [What’s new in Android’s October 2026 Google System Updates — 9to5Google](https://9to5google.com/2026/10/05/october-2026-google-system-updates/)
- [Be ready to find a lost Android device — Google Account Help](https://support.google.com/accounts/answer/3265955)
- [Share and manage devices with Find Hub — Android Help](https://support.google.com/android/answer/14800516)
- [How Find Hub protects your data — Android Help](https://support.google.com/android/answer/14796936)
- [How To Add Device To Google Find Hub — GuideRealm on YouTube](https://www.youtube.com/watch?v=rO_xoPyeUqo)
