---
title: "Connect Third-Party Apps to Google Health with Health Connect"
description: "Step-by-step guide to connect Strava, MyFitnessPal, Garmin and other apps to the Google Health app using Health Connect on Android before the October 30 deadline."
pubDate: 2026-10-12T19:00:00
heroImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "how-to", "tutorials", "google"]
noindex: false
---

Google Health replaced the Fitbit app in May 2026. It now pulls data from many sources into one place. Third-party apps and devices can feed steps, workouts, sleep and more into it through Health Connect on Android.

The Fitbit Web API shuts down on October 30, 2026. Partner apps must switch to the new infrastructure. If you use Strava, MyFitnessPal, Garmin, Oura or similar tools, reconnect them soon so data keeps flowing without gaps.

This guide shows exactly how to set up the connection on an Android phone. It follows Google’s official steps from the Google Health Help Center.

## What Health Connect Does

Health Connect stores health and fitness data on your Android phone. Apps request permission to read or write specific types such as steps, heart rate, sleep sessions or workouts. Google Health can read data other apps write and write its own data for other apps to read.

You control every permission. Data stays on the device until an app uploads it under its own rules. Google Health uses the synced data for metrics in the app, though some scores like sleep score still rely mainly on first-party sources.

Android 9 or higher is required. Sign in with an adult personal Google Account. Workspace accounts do not work with Google Health.

![Person checking a fitness tracker on their wrist outdoors](https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80)

## Set Up the Health Connect Connection

Open the Google Health app on your Android phone.

Tap the Connections icon at the top left.

Tap Partner apps.

Under Add connections, tap Sync your favorite health apps, then Set up.

Review the information and tap Accept.

Choose the data types you want to sync and tap Continue.

For fitness and wellness data, select Allow all, Allow specific items, or Don’t allow. Do the same if medical records appear.

Under Allow additional access for health, decide whether Google Health can read historic data and sync in the background. Background access keeps numbers current without opening the app every time.

Tap Allow, then Done when the confirmation appears.

Google Health starts syncing recent data first. Check status under Connections → Partner apps → Manage Health Connect. A “Synced just now” message means it worked.

## Connect Specific Third-Party Apps

Most popular apps connect through Health Connect rather than a direct Google Health link.

Open Health Connect from Settings. On Android 14 and higher go to Settings → Security and privacy → Privacy controls → Health Connect. On older versions search for Health Connect in Settings or add it to Quick Settings.

In Health Connect, open the app you want (Strava, MyFitnessPal, Garmin Connect, Samsung Health, etc.).

Grant the permissions you need. For example, allow Strava to write exercise sessions and allow Google Health to read them.

Return to Google Health. Under Partner apps you should see the app listed with “via Health Connect.”

Some devices such as certain Garmin watches or Oura rings also appear under Partner apps for direct setup. Follow the on-screen prompts in Google Health or in the partner app.

If an app used the old Fitbit Web API, open it and look for a reconnect or update prompt. Complete that before October 30 so sync continues.

## Manage Permissions and Troubleshoot

You can change what Google Health sees at any time.

In Google Health go to Connections → Partner apps → Manage Health Connect → Manage data and access.

Tap Health under Your health apps. Adjust Fitness and wellness, Medical records or Additional access.

To force a sync, tap Sync at the top right of the Manage Health Connect screen.

If data is missing, confirm the third-party app has write permission for that type in Health Connect and that Google Health has read permission. Update both apps from the Play Store. Restart the phone if the connection shows an error.

Disconnecting is simple. In Manage Health Connect scroll to the bottom and tap Disconnect. Then remove access inside Health Connect settings if you want to clean up fully.

![Runner on a trail with a fitness watch](https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80)

## Tips for Reliable Syncing

Allow unrestricted battery use for Google Health and the third-party apps so background sync is not blocked.

Keep the Google Health app updated. New data types sometimes need fresh permission grants. A “NEW” badge appears on the Health Connect tile when this happens.

Check the Health tab in Google Health to see combined data. Tap a metric then View sources to see which apps contributed.

For the new Fitbit Edge or Pixel Watch, pair the device first through Connections → Add device. Third-party data then sits alongside native tracker numbers.

If you also use iPhone, the same idea applies through Apple Health. The Android steps above cover the majority of users who switched from the Fitbit app.

Internal note: readers who just ordered the Fitbit Edge can also review the launch details in our [Fitbit Edge launch guide](/blog/fitbit-edge-launch-october-12-what-to-know/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/aR7XZaPIKkA"
    title="How to SETUP & Pair - ANY Fitbit with Google Health App - iPhone & Android Tutorial."
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Connecting third-party apps to Google Health through Health Connect takes a few minutes and keeps your fitness history complete. Complete the setup before the October 30, 2026 Fitbit Web API cutoff so partner apps continue to deliver data without interruption.

Once permissions are set, Google Health becomes the single view for steps from one app, workouts from another and sleep from your tracker. Review the sources occasionally to confirm everything is flowing as expected.

## Sources

- Google Health Help Center: Connect third-party devices & apps to the Google Health app
- Google Health Help Center: How do I use Health Connect with the Google Health app?
- Google Health Help Center: How do I set up my Fitbit device?
