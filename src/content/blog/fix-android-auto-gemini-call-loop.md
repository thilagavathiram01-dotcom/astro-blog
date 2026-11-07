---
title: "Fix Android Auto Gemini Call Loop Issue on Pixel and Galaxy"
description: "Android Auto Gemini keeps asking 'who do you want to call' on Pixel and Galaxy. Learn confirmed workarounds, update steps, and how to report the bug."
pubDate: 2026-11-07T14:00:00
heroImage: "https://images.unsplash.com/photo-1730201078353-d2ad6cb2d6d3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "gemini", "tutorials"]
noindex: false
---

Android Auto users on Pixel and Galaxy phones report that Gemini gets stuck in a loop when they try to place a call or send a text by voice. You say a contact name. Gemini displays the correct name on the car screen. Then it asks again: "Who do you want to call?"

The problem has appeared in Google’s Android Auto Help forum since early October 2026, with more reports this week. It is not limited to one phone model or Android Auto version. Google’s Android Auto team is aware of the issue and is collecting diagnostic data from affected users. No public fix timeline has been announced.

This guide explains what is happening, what you can try right now, and how to report the problem so Google has the details it needs.

## What the Gemini call loop looks like

The failure is specific. Gemini understands the request. The contact appears correctly on the Android Auto display. The assistant still fails to start the call or compose the message and returns to the same prompt.

Both calling and texting by contact name are affected. The same loop has been reported on Pixel 10 series phones and on Galaxy models including the S24, S25 Ultra, and S26. Some users also see Android Auto answer incoming calls automatically, but that behavior is far less common.

A similar Gemini calling problem appeared in June 2026. Google confirmed the earlier issue and released a fix through the Play Store. The current loop is a separate problem that began after Gemini’s broader rollout on Android Auto. Nothing in public reporting links the two bugs.

![Modern car dashboard with large digital screens](https://images.unsplash.com/photo-1765446925669-063ffc68d85b?auto=format&fit=crop&w=800&q=80)

## Confirm the issue on your device

Test while parked. Connect the phone to the car, say “Hey Google, call [contact name],” and watch the screen. If the name appears and Gemini still asks who you want to reach, you are seeing the reported loop.

Try the same command for a text message. Many users see identical behavior for both actions. Note the exact Android Auto version (open the Android Auto app on the phone and check Settings) and the phone model. These details help when you report the bug.

Official Gemini documentation still lists “place calls and send text messages” as supported hands-free tasks in Android Auto. The feature works for many people; the loop is not universal.

## Immediate workarounds that some drivers report

No Google-confirmed workaround exists yet. Community reports describe two limited options:

- Speak the full phone number instead of the contact name for a call. Some users say this succeeds when the name fails. It does not help with texting.
- Use the phone app on the car screen and select the contact manually. This requires touching the display, which defeats the hands-free purpose but restores the function.

Avoid relying on voice contact calling or texting for anything time-sensitive until a fix arrives. Keep the phone number of frequent contacts handy if you need the number workaround.

![Driver’s hands on a car steering wheel](https://images.unsplash.com/photo-1733418801064-12a41adc829b?auto=format&fit=crop&w=800&q=80)

## Steps worth trying while Google investigates

These steps match standard Android Auto troubleshooting and the path that resolved the earlier June 2026 calling bug. They are not guaranteed for the current loop.

1. Update the Android Auto app and the Google app from the Play Store. Open Play Store, search each app, and install any available update.
2. Restart the phone, then reconnect to the car (wired or wireless).
3. On the phone, open Android Auto settings and clear the app cache (Settings > Apps > Android Auto > Storage > Clear cache). Do not clear data unless you are prepared to re-pair the vehicle.
4. Confirm Gemini is set as the default digital assistant on the phone (Settings > Apps > Default apps > Digital assistant app). The car mirrors the phone’s assistant choice.
5. If you use Personal Intelligence features, temporarily turn them off in the Gemini app settings, test a call, then re-enable them. Personal Intelligence is rolling out separately and is not the confirmed cause of the loop.

After each step, test the call command again while parked. If the loop continues, the problem is almost certainly on Google’s side rather than local configuration.

## How to report the bug so Google can fix it

Google’s Android Auto team is actively collecting reports. Use the official channel:

- Open the Android Auto Help community or the in-app feedback option.
- Include the phone model, Android version, Android Auto version, whether the connection is wired or wireless, and a short description of the loop (contact name appears, then prompt repeats).
- Mention whether speaking the phone number works for you.

The more precise the reports, the faster a targeted fix can be built. The June 2026 calling bug was resolved with a Play Store update once enough data arrived.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/tbM122Qe-lk"
    title="Gemini in Android Auto, your AI assistant in the car"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Keep using the parts of Gemini that still work

Navigation, media control, and general questions continue to function for most drivers. You can still say “Hey Google, navigate to the nearest gas station” or “play my commute playlist.” The failure is concentrated on contact lookup for calls and texts.

If you have already enabled Gemini Personal Intelligence for Android Auto, the feature remains available for email, calendar, and other connected data. See the setup guide for [Gemini Personal Intelligence on Android Auto](/blog/gemini-personal-intelligence-android-auto-setup/) if you want to adjust those permissions while you wait for the calling fix.

## What to expect next

Google has not published a root cause or an estimated repair date. The pattern matches earlier Gemini-on-Android-Auto issues that were corrected through app updates rather than full system patches. Watch the Play Store for new Android Auto and Google app versions, and check the Android Auto release notes for any mention of contact calling or contact resolution.

Until then, treat voice contact actions as unreliable and keep the number or on-screen manual options ready. Report your experience so the diagnostic data reaches the team already investigating the loop.

## Sources

- [Chat with Gemini in your car – Gemini Apps Help](https://support.google.com/gemini/answer/16735982)
- [Android Auto’s latest Gemini failing keeps asking ‘who do you want to call’ – 9to5Google](https://9to5google.com/2026/11/05/android-auto-gemini-call-text-voice-command-bug/)
- [Android Auto gets stuck in a loop for some Galaxy and Pixel phone users – SamMobile](https://www.sammobile.com/news/android-auto-gets-stuck-in-a-loop-for-some-galaxy-and-pixel-phone-users-after-gemini-update/)
- [Gemini in Android Auto: How to use an AI assistant in your car – Google](https://blog.google/products-and-platforms/platforms/android/android-auto-gemini-tips/)
