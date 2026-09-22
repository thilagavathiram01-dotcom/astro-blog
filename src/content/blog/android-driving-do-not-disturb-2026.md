---
title: "Find Driving Do Not Disturb After Android’s Sept 2026 Update"
description: "How to find and set Driving Do Not Disturb after the September 2026 Google Play services update on Pixel and Android phones."
pubDate: 2026-09-22T08:00:00
heroImage: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "how-to", "tutorials", "pixel", "google"]
noindex: false
---

The September 2026 Google Play services notes say you can find Driving Do Not Disturb more easily. That sounds small. In practice, the setting still hides under Modes, and the old Sound menu path is a dead end on many Pixels.

If the phone keeps buzzing in the cup holder, this guide shows where the control lives now, how to turn it on automatically, and which exceptions to keep so emergency calls still get through.

## What changed in the September 2026 system update

Google Play services v26.37 lists a Safety & Emergency item for phones: you can more easily find the Driving Do Not Disturb feature. The same notes also mention Motion Assist, which draws subtle on-screen shapes that move with the vehicle. That feature is separate. Pair it with DND if motion sickness is the problem; use Driving mode if notifications are the problem.

A line in a changelog does not mean the toggle moved to the home screen. On stock Android it still sits under Settings → Modes → Driving. Play Store and Play system packages also updated in the same drop. Update Play services first if Modes looks empty.

For the rest of that monthly package, see our [September 2026 Android drop guide](/blog/android-september-2026-drop-guide/). For the new visual motion aid, see [Motion Assist on Pixel and Samsung](/blog/android-17-motion-assist/).



![Smartphone mounted on a car dashboard during a drive](https://images.unsplash.com/photo-1489824904134-941f91325ad0?auto=format&fit=crop&w=800&q=80)



## Find Driving mode on Pixel and stock Android

Open the Settings app. Search for **Driving** if you want the shortest path. Otherwise tap **Modes**, then **Driving**.

If Modes is missing, update Google Play services from the Play Store, restart, and search again. On Android 15 and later, Google grouped Do Not Disturb, Bedtime, and Driving under Modes instead of burying Driving only under Sound.

Tap **Set up Driving** if you have never used it. Under **When to turn on automatically**, tap **While driving**. Official Android Help documents this path: Settings → Modes → Driving → Set up Driving → While driving.

Choose how the phone decides you are driving:

- Bluetooth to the car stereo or Android Auto head unit.
- Motion plus Bluetooth, if the car Bluetooth is shared with a passenger phone.
- Manual only, if you prefer the Quick Settings tile.

Google restored Bluetooth-based automation after earlier builds leaned too hard on motion alone. Prefer Bluetooth when the head unit is reliable.

## Set it up on Samsung and other skins

Samsung puts the same idea in **Settings → Modes and Routines → Driving**. Add a start condition: car Bluetooth or driving detection. Add actions: Do Not Disturb, open Maps, or an auto-reply.

OnePlus and some other skins keep a **Silence notifications while driving** item under Safety & emergency. Search **driving** in Settings if the label differs.

Keep one rule: the phone should enter the mode when the car Bluetooth connects, not when you walk past the vehicle in a parking lot.



![Night view of a car dashboard and windshield](https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80)



## Notification filters that still make sense

Driving mode is not a full radio-silence lock. Edit notification filters so starred contacts and repeat callers can break through. Android Help recommends reviewing those filters after setup.

A practical baseline:

1. Allow calls from starred contacts.
2. Allow repeat callers within a short window.
3. Block banners and sounds from social apps.
4. Leave alarms and timers on.
5. Turn on an auto-reply only if your carrier and messaging app support it.

Do not silence emergency alerts. Public-warning channels stay outside normal DND filters on current Android releases.

If you use Android Auto, test the same filters on a short drive. Auto can surface messages on the head unit even when the phone is quiet. That is expected. The point of Driving DND is the handset in your pocket, not the car display.

## Turn it on from Quick Settings

After setup, swipe down twice and look for **Modes**. Tap **Driving** to start it without waiting for Bluetooth. Long-press the chip to jump back into filters.

You can also say “Hey Google, let’s drive” on devices where Assistant still handles that shortcut. Voice start is useful when you cannot take a hand off the wheel to hunt for a tile.

Watch this short walkthrough of the Modes path on Pixel:

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/PCfsnDRLGUc"
    title="Google Pixel Android Do not disturb while driving mode"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Fix common misses after the update

**The setting search returns nothing.** Update Play services, then install any pending Play system update under Settings → Security and privacy → System updates (wording varies by OEM).

**Driving mode starts on a bus or train.** Switch the trigger from motion-only to Bluetooth, or to motion and Bluetooth together.

**It never starts in the car.** Confirm the head unit is the paired device listed in Driving settings, not a generic “Car Kit” name that belongs to a different vehicle.

**Messages still light the screen.** Check that the messaging app is not marked as a priority exception, and that bubbles or adaptive notifications are not punching through.

**Motion Assist and DND fight for attention.** Motion Assist adds moving shapes to reduce nausea. It does not mute alerts. Leave both on if you need both outcomes.

## Tips for a quieter cabin

Put the phone in a mount before you leave the driveway. A mounted screen is easier to ignore than a device that vibrates against plastic.

Star only the people who may need you during a commute. A long starred list defeats the mode.

If you share a car, create a second Bluetooth trigger only for that vehicle. One trigger per head unit beats a single “any car audio” rule.

Review Modes once after each major Play services drop. Google has moved this control more than once since the old Sound → Do Not Disturb → Automatic rules path.

## Conclusion

Driving Do Not Disturb did not become a new product in September 2026. Google made the existing Modes entry easier to discover and restated Bluetooth as a first-class trigger. Set the mode once, pin the Quick Settings chip, and keep a short exception list.

Update Play services, open Modes, and run one test drive. If the phone stays quiet until you park, the setup worked.

## Sources

- [Google System Release Notes coverage, September 2026 Play services](https://9to5google.com/2026/09/21/september-2026-google-system-updates/)
- [Limit interruptions with Modes and Do Not Disturb (Android Help)](https://support.google.com/android/answer/9069335)
- [Android Central on Bluetooth-based Driving Mode automation](https://www.androidcentral.com/apps-software/android-auto/google-has-finally-fixed-android-driving-mode)
