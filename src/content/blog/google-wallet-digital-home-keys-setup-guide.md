---
title: "Unlock Doors with Google Wallet Home Keys"
description: "Set up Google Wallet digital home keys for Aliro locks: NFC tap or UWB hands-free unlock on Android with supported hubs and phones."
pubDate: 2026-11-18T22:00:00
heroImage: "https://images.unsplash.com/photo-1754494977432-425fb917df70?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "how-to", "google", "security", "tutorials"]
noindex: false
---

Google Wallet now stores digital home keys for compatible smart locks set up in the Google Home app. Starting in Public Preview on November 11, 2026, Android users can add a key and unlock with an NFC tap or, on select phones, hands-free via Ultra-Wideband.

This brings Android closer to Apple Home Key. The feature uses the open Aliro standard from the Connectivity Standards Alliance. One key covers every compatible lock in your home.

You need a Matter-certified Aliro lock, a Google hub that acts as a Thread border router, and an NFC-capable Android phone. Hands-free unlock requires a UWB phone such as the Pixel 10 Pro series or later.

![Hand holding smartphone near a door access reader](https://images.unsplash.com/photo-1754494977432-425fb917df70?auto=format&fit=crop&w=800&q=80)

## What you need before you start

Confirm these pieces are in place:

- **Lock:** Aqara U400 (NFC + UWB), Schlage Sense Pro (NFC now, UWB later), or Nuki Keypad 2 NFC. Google says more locks are coming.
- **Hub:** Nest Hub (2nd gen), Nest Hub Max, Nest Wifi Pro, or Google TV Streamer. It must support Matter and act as a Thread border router.
- **Phone for tap:** NFC-enabled Android phone running Android 9 or later, with the latest Google Home and Google Wallet apps.
- **Phone for hands-free:** Pixel 10 Pro, 10 Pro XL, 10 Pro Fold, or select UWB Samsung Galaxy phones. Unlock on Approach is off by default.

Wear OS watches are not supported at launch. The feature is rolling out to Public Preview users first and reaches everyone over the coming weeks.

## Add the home key during lock setup

1. Install the physical lock and pair it in the Google Home app as a Matter device. Follow the on-screen prompts to connect it to your Thread border router hub.
2. Create a backup passcode if the lock asks for one.
3. When the app shows the option to unlock with Google Wallet, tap **Add to Wallet** or **Add a key**.
4. Confirm your Google Account. The key appears in Google Wallet as a card with the Google Home logo and your home name.

The key is linked to your home in Google Home, not to a single lock. Every compatible Aliro lock in that home uses the same key. Other household members can add their own key through the Home app.

## Add the key to an existing lock

If the lock is already in Google Home:

1. Open the Google Home app.
2. Go to **Home settings → Google Wallet key**, or open the lock tile and tap its settings gear.
3. Select the option to add a Google Wallet key and follow the prompts to save it.

You can also manage the key later inside the Google Wallet app. Open the home key card to adjust settings or remove it.

![Hand holding a key above miniature house models](https://images.unsplash.com/photo-1724482606633-fa74fe4f5de1?auto=format&fit=crop&w=800&q=80)

## Unlock with a tap (NFC)

Hold the back of your phone near the lock’s reader. Tap to Unlock works even when the screen is locked and off, as long as you unlocked the phone within the last few hours.

You can change this. In Google Wallet, open the home key settings and turn on **Required device unlock**. The phone will then ask for your PIN, pattern, or biometrics on every tap. This is useful if you leave the phone in a bag or on a table near the door.

The key syncs across other Android phones signed into the same Google Wallet account.

## Enable Unlock on Approach (UWB)

This option is available only with a UWB lock (Aqara U400 at launch) and a UWB phone (Pixel 10 Pro series and later, plus select Samsung models). It is off by default so the door does not open when you simply walk past.

1. Open Google Wallet and select the home key.
2. Open its settings.
3. Turn on **Unlock on Approach**.

Walk up to the door and the lock should unlock automatically. Test it a few times to confirm the range and direction detection work in your entryway.

## Security and practical tips

- Enable Required device unlock if you prefer an extra check on every NFC tap.
- Keep a physical backup key or the lock’s keypad code. Digital keys depend on battery and phone availability.
- Guest key sharing is not available at launch. Household members each add their own key.
- Update Google Home, Google Wallet, and your phone’s system software so the feature appears.
- If the key does not show up, confirm you are in the Google Home Public Preview or wait for the wider rollout.

Pair this with other Android security tools. Our guide to [Android 17 Advanced Protection features](/blog/android-17-advanced-protection-six-features/) covers extra controls that help protect the phone holding your home key.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/lBm8Q1qFaOM"
    title="Google Wallet digital home keys explained with Aliro locks"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What to expect next

Google plans to add more locks. UWB support on additional models (including the Schlage Sense Pro) is coming later. Wear OS support may arrive in a future update.

For now the setup is straightforward once the hardware matches. Open Google Home, add the key to Wallet, and test a tap. If your lock and hub qualify, the door opens without hunting for a physical key or opening an app.

## Sources

- [Introducing home keys in Google Wallet for compatible smart locks](https://support.google.com/googlehome/thread/477084054/introducing-home-keys-in-google-wallet-for-compatible-smart-locks-in-the-google-home-app) — Google Home & Nest Community, November 11, 2026
- [Google Wallet rolling out digital Google Home keys on Android](https://9to5google.com/2026/11/11/google-wallet-home-key/) — 9to5Google
- [Google Wallet can finally unlock doors with digital home keys](https://www.theverge.com/tech/1032084/google-wallet-digital-home-key-smart-lock-rollout) — The Verge
- [Google Wallet digital home keys with NFC and UWB](https://www.androidauthority.com/google-wallet-digital-home-keys-nfc-uwb-unlocking-3734133/) — Android Authority
