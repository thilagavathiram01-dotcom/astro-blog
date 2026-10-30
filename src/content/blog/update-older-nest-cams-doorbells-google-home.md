---
title: "How to Update Older Nest Cams and Doorbells in Google Home"
description: "Check eligibility, migrate devices, and apply the October 2026 firmware fixes for Wi-Fi, night vision, and status lights on legacy Nest Cams."
pubDate: 2026-10-30T14:00:00
heroImage: "https://images.unsplash.com/photo-1534157327728-accacabda257?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["google", "tutorials", "how-to"]
noindex: false
---

Google continues to support older Nest Cams and Doorbells with software updates that improve reliability after you move them into the Google Home app. The October 29, 2026 release notes list specific fixes for models that have been migrated.

These updates address common issues: cameras that stall after brief Wi-Fi drops, slow night vision switches on first-generation units, audio/video sync problems on the original wired doorbell, and misleading status lights on Nest Cam IQ models. The updates install automatically once the devices are in Google Home.

This guide shows how to confirm eligibility, complete the migration if needed, and verify that the new firmware is active. It follows Google’s official What’s new notes and Nest Help transfer instructions.

## Which models receive the October 2026 updates

Google lists five models that must already be migrated to the Google Home app:

- Nest Cam Indoor (1st gen)
- Nest Cam Outdoor (1st gen)
- Nest Doorbell (wired, 1st gen), formerly Nest Hello
- Nest Cam IQ Indoor
- Nest Cam IQ Outdoor

Updates are not available if the device remains only in the older Nest app. Migration has been available for these models for months.

![White security camera mounted on a post](https://images.unsplash.com/photo-1528312635006-8ea0bc49ec63?auto=format&fit=crop&w=800&q=80)

## What the firmware actually fixes

The [October 29, 2026 Google Home release notes](https://support.google.com/googlehome/answer/15962877) detail four changes:

- **Improved Wi-Fi reconnection stability**: Cameras no longer crash or stall when reconnecting after short Wi-Fi interruptions.
- **Faster night vision switching**: On Nest Cam Indoor and Outdoor (1st gen), turning the camera on in low light or switching to night vision in the app no longer takes 15–20 seconds.
- **Synchronized audio and video**: On Nest Doorbell (wired, 1st gen), audio and video stay in sync and the device avoids unexpected restarts.
- **Accurate status light on Nest Cam IQ**: The status light ring no longer pulses blue (setup waiting) when Wi-Fi drops on an already configured camera.

These are reliability improvements, not new features. They roll out in the background after the camera is managed in Google Home.

## Confirm your device is migrated

Open the Google Home app and check the device list. Migrated cameras appear with full history, event timeline, and live view options that match other Home cameras.

If the camera still only shows in the Nest app:

1. Ensure your Nest account is linked to a Google Account.
2. Join Public Preview in the Google Home app if required for your model (check Settings → Preview).
3. Open the Nest app, select the camera, and look for “Transfer to Home app” under Settings.
4. Follow the prompts. Transfer can take up to 25–30 minutes. Live view is unavailable during the process.
5. Confirm the camera appears in Google Home with its history intact.

Google’s Nest Help page on transferring devices lists the exact eligibility: Google Home app version 3.26 or higher, Public Preview where needed, and a migrated Nest account. Some features such as Supersight on Cam IQ remain Nest-app only.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/6PxG3avUTo8"
  title="Fully Transfer Nest Cameras into the Google Home App"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen loading="lazy"></iframe>
</div>

## How to check that the update has applied

Firmware updates install automatically over Wi-Fi. There is no manual “check for update” button for these legacy models once they are in Google Home.

1. Open the Google Home app and select the camera.
2. Tap the settings gear.
3. Look for a software or device information section. Note the current version if shown.
4. Leave the camera powered and on the same Wi-Fi network overnight. Updates typically arrive within a few days of the release notes.
5. Test the specific fix for your model:
   - For 1st-gen Cam Indoor/Outdoor: Switch to night vision in low light and time the transition.
   - For Nest Doorbell (wired, 1st gen): Start a live view and check that audio stays locked to video.
   - For Cam IQ: Disconnect and reconnect Wi-Fi briefly and confirm the status light does not pulse blue.

If the camera still shows the old behavior after several days, restart the camera by unplugging it for 30 seconds, then plug it back in. Confirm it remains online in Google Home.

![Dome security camera on a wall](https://images.unsplash.com/photo-1523350518665-e177eea6988b?auto=format&fit=crop&w=800&q=80)

## Tips for reliable performance after the update

- Keep the camera on a stable 2.4 GHz Wi-Fi network. The Wi-Fi reconnection fix helps with brief drops, but a weak signal still causes problems.
- Avoid power cycling the camera repeatedly during the first 24 hours after you notice the update; let the new software settle.
- For the doorbell, confirm Familiar Face detection is enabled if you want the improved person detection noted in the same release notes.
- Battery-powered Nest Cams and newer wired models receive separate firmware. This October 29 drop targets only the listed legacy units that have been migrated.

Related reading: the earlier guide on the [battery-efficient Google Home Favorites widget](/blog/google-home-widget-battery/) covers how home-screen tiles interact with camera polling.

## Conclusion

Older Nest Cams and the first-generation wired doorbell still receive useful reliability updates once they live in the Google Home app. The October 2026 firmware improves Wi-Fi recovery, speeds night vision on first-gen cameras, fixes audio sync and restarts on Nest Hello, and corrects status lights on Cam IQ models.

Migrate any remaining devices, leave them online, and verify the specific behavior that was broken before. The updates arrive automatically and do not require a factory reset.

## Sources

- [What's new in Google Home](https://support.google.com/googlehome/answer/15962877) — Google Home and Nest Help (October 29, 2026 notes)
- [Transfer devices to the Google Home app](https://support.google.com/googlenest/answer/13038234) — Google Nest Help
