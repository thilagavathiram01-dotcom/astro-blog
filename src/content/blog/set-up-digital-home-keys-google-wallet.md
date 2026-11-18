---
title: "Set Up Digital Home Keys in Google Wallet to Unlock Doors"
description: "Add Aliro digital home keys to Google Wallet for NFC tap or UWB approach unlock on compatible smart locks via Google Home."
pubDate: 2026-11-18T14:00:00
heroImage: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "google", "how-to", "tutorials"]
noindex: false
---

Android users can now store digital home keys in Google Wallet and unlock compatible smart locks with a quick NFC tap or hands-free approach. Google announced the feature on November 11, 2026, starting in Google Home Public Preview and expanding to everyone over the coming weeks.

This brings Android in line with Apple Home Key and Samsung options. The keys sit right next to payment cards and passes. You manage access in the Google Home app and use the key from Wallet without opening another app.

## What you need before you start

You need three things: a supported lock, a Google hub, and a compatible phone.

Supported locks at launch use the Aliro open access standard from the Connectivity Standards Alliance:

| Lock | NFC Tap | UWB Approach |
|------|---------|--------------|
| Aqara U400 | Yes | Yes |
| Schlage Sense Pro | Yes | Coming later |
| Nuki Keypad 2 NFC | Yes | No |

Google says more locks will arrive later. You also need a Matter-enabled Google hub that acts as a Thread border router. Compatible hubs include Nest Hub (2nd gen), Nest Hub Max, Nest Wifi Pro, and Google TV Streamer.

For the phone, Tap to Unlock works on any NFC-enabled Android device running Android 9 or later. Unlock on Approach requires an Aliro UWB phone. Google lists the Pixel 10 Pro series and later (including Fold and XL) plus select UWB Samsung Galaxy phones. Wear OS watches are not supported at launch.

Make sure you run the latest Google Home and Google Wallet apps. The feature is rolling out first to Public Preview users in the Google Home app.

![Person holding a phone near a security door reader](https://images.unsplash.com/photo-1754494977432-425fb917df70?auto=format&fit=crop&w=800&q=80)

## How to add the home key to Google Wallet

Setup starts in the Google Home app. If you are pairing a new Aliro Matter lock, the app prompts you to add a digital home key at the end of setup.

For an existing lock:

1. Open the Google Home app on your Android phone.
2. Go to Home settings (or open the lock tile and tap Settings).
3. Tap Google Wallet key.
4. Follow the prompts and tap Add to Wallet (or Add a key).

The key appears in Google Wallet as a card with the Google Home logo and your home name. It is tied to the home, not a single lock, so one key works with every compatible Aliro lock in that home. The key also syncs across other Android phones signed into the same Google Wallet account.

Household members can add their own keys through Google Home. Guest key sharing is not available yet.

## Tap to Unlock and Unlock on Approach

Tap to Unlock uses NFC. Hold the back of your phone near the lock reader. It works even when the screen is locked (as long as the phone was unlocked within the last few hours). You can change this in Wallet settings and require biometric or screen unlock every time for extra security.

Unlock on Approach uses UWB and is off by default. Open the home key in Google Wallet, go to settings, and turn it on. The door unlocks automatically as you walk up, provided both the phone and lock support UWB. Google notes that some locks can distinguish a true approach from someone simply walking past.

You do not need to dig through Wallet cards. Google Home recognizes the lock as part of your home.

![Person using a smartphone](https://images.unsplash.com/photo-1483070421852-a142ce0a385d?auto=format&fit=crop&w=800&q=80)

## Tips and troubleshooting

- Confirm NFC is on in phone settings for tap unlock.
- If the key does not appear, update both apps and check that the lock is fully set up in Google Home with a Thread border router hub online.
- For approach unlock, test with the phone in a pocket and the setting enabled. Range depends on the specific lock and phone.
- Security note: the feature is designed so the phone does not need to be unlocked for basic tap, but you control verification. Review Wallet key settings after adding it.
- If you manage multiple homes, each needs its own key.

If you are already using Google Home for other devices, this fits into the same ecosystem. For more advanced control, check our guide on [setting up Google Home MCP for AI agents](/blog/how-to-set-up-google-home-mcp-for-ai-agents/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/OeATZCtZIjA"
    title="Set up & use Google Wallet"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Digital home keys in Google Wallet make keyless entry practical on Android for owners of the first Aliro locks. Start with the Google Home app to add the key, then use NFC for reliable tap unlock or enable UWB approach on supported Pixel 10 Pro and later phones. The rollout is still expanding, so check the Google Home app if the option is not visible yet.

## Sources

- Google Home & Nest Community: Introducing home keys in Google Wallet
- Google Blog: New features and updates in Google Home (November 17, 2026)
- Official product announcements covering Aqara U400, Schlage Sense Pro, and Nuki Keypad 2 NFC support
