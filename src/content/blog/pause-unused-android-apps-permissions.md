---
title: "How to Pause Unused Android Apps and Reset Permissions"
description: "Pause unused Android apps, review auto-reset permissions, and keep banking or alarm apps active with official Settings steps."
pubDate: 2026-10-02T14:00:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "security", "how-to"]
noindex: false
---

An app you opened once in January can still hold camera, location, or contacts access months later. Android can pause that app if you have not used it for a long time: it deletes temporary files, revokes permissions, stops background activity, and stops notifications. The controls live under Unused apps, and you can exempt the few apps that must stay awake.

This guide follows Google's Android Help steps for reviewing unused apps and changing permissions. Menu labels differ on Samsung, Pixel, and other skins, so use Settings search if a path does not match your phone.

## What Android does when an app sits idle

Google's unused-app controls are meant to reclaim space and cut access for software you no longer open. When Android treats an app as unused for a long time, it can:

- Delete temporary files to free storage.
- Revoke permissions you previously allowed.
- Stop the app from running in the background.
- Stop the app from sending notifications.

That is different from uninstalling. The app icon can stay on your home screen, and your account data inside the app is not the same thing as temporary files. The next time you open it, Android can ask for permissions again.

Pause is a poor fit for apps that work while closed. Messaging, authenticator codes, medical reminders, and ride-tracking apps often need background access. Exempt those before you rely on the automatic pause.

![Person holding a smartphone with app icons on the home screen](https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80)

## Review the unused-apps list

Google documents this path on Android Help:

1. Open the Settings app.
2. Tap Apps.
3. Tap Unused apps.

The list shows apps Android has marked unused and optimized. Open any entry if you want to see what changed. If you do not see Unused apps, search Settings for "unused" or "pause app activity." On some phones the switch sits inside each app's info screen instead of a single list.

Check the list after a long trip or after you install a batch of one-off tools. Shopping, coupon, and event apps often land here first.

## Turn pause on or off for one app

To keep a specific app from being paused:

1. Open Settings, then Apps.
2. Tap the app. If it is missing, tap See all apps, then choose it.
3. Open App info if you are not already there.
4. Find Unused apps, or Unused app settings.
5. Turn off Pause app activity if unused.

Turn the switch on if you want Android to pause that app after a long idle period. Google's help page names the control Pause app activity if unused. Some devices shorten it to Remove permissions if app is unused. Both point at the same idea: idle apps lose granted access.

Do not exempt every app. A long exemption list cancels the point of the feature. Keep the switch on for games, demo apps, and stores you open a few times a year.

## Change permissions yourself

Auto-reset is not the only control. Google's permission help page, which notes that some steps apply on Android 11 and up, walks through manual changes:

1. Open Settings, then Apps.
2. Tap the app. Use See all apps if the icon is not on the first screen.
3. Tap Permissions.
4. Tap a permission, then choose Allow or Don't allow.

For location, camera, and microphone, you may also see tighter choices:

- All the time applies to location only. The app can use location even when you are not in it.
- Allow only while using the app limits access to the time the app is on screen.
- Ask every time makes the app request access on each use, when the permission supports it.

You can also review by permission type. Open Settings, then Security and privacy, then Privacy, then Permission manager (wording varies). Tap a type such as Location or Camera to see every app that holds it. This view is faster when you care about one sensor, not one app.

Denying a permission does not delete the app. It only blocks that feature. If a map app loses location, navigation fails until you allow location again.

![Close-up of a phone screen showing a grid of mobile apps](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## Pair pause with Play Protect and Private Space

Unused-app pause is a storage and permission tool. It is not a malware scanner. Google Play Protect still scans apps for harmful behavior. If you have not turned scanning on, start with the [Play Protect scanning guide](/blog/play-protect-scan-apps-android/) and then come back to the unused list.

Apps you want hidden, not merely paused, belong in Private Space. That is a separate lockable profile. The [Private Space setup guide](/blog/android-private-space/) covers creating the space and moving sensitive apps into it. Pause does not replace that lock.

Theft protection is also separate. Idle-app permission removal will not lock a stolen phone. If that is the risk you care about, use the [Android theft protection setup](/blog/android-theft-protection-setup/).

## What to exempt

Leave Pause app activity if unused off for:

- Two-factor and password apps you open only when a login demands a code.
- Alarm, medication, and transit apps that must notify you without a recent open.
- Device admin, work profile, and MDM apps your employer requires.
- Find Hub or the manufacturer's find-my-device app.

Leave it on for social apps you abandoned, airline apps from a past trip, and anything that asked for contacts on first launch and never needed them again.

After you exempt an app, open it once so Android treats it as used. Then confirm the pause switch is still off.

## When the feature fights you

If a banking app suddenly asks for permissions you already granted, check Pause app activity if unused before you blame the bank. Android may have revoked access after a long gap. Allow the permissions again, then turn pause off for that app.

If notifications from an old shopping app return, open that app's info screen and confirm pause is on, or turn notifications off directly under Notifications. Pause stops notifications for unused apps, but an app you opened yesterday is not unused.

Manufacturer battery savers can force-stop apps on their own schedule. If an exempted app still dies overnight, check the phone maker's battery or auto-launch screen in addition to Unused apps.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/T_91wVS0_Uo"
    title="Android 12 Has a New App Hibernation Feature for Unused Applications"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## A short monthly check

Once a month, open Settings, Apps, Unused apps. Uninstall anything you will not open again. Exempt anything that must notify you. For the rest, leave pause on so temporary files and old permissions do not linger.

Then open Permission manager and scan Location and Microphone. Anything set to All the time should be an app you can name out loud. If you cannot explain the access, set it to Allow only while using the app or Don't allow.

## Conclusion

Android already knows which apps you stopped opening. Unused apps shows that list, and Pause app activity if unused revokes permissions, clears temporary files, and stops background work and notifications for those apps. Review the list, exempt the few tools that must stay active, and use Permission manager when you want to change access yourself.

## Sources

- Google Android Help, Manage unused apps on your Android device: https://support.google.com/android/answer/13627979
- Google Android Help, Change app permissions on your Android phone: https://support.google.com/android/answer/9431959
