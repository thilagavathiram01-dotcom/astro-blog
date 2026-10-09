---
title: "Pixel Watch Safety Signal Ends December 12: Setup Guide"
description: "Google ends Safety Signal on Pixel Watch 2 and 3 LTE on December 12, 2026. See what still works and how to keep emergency calls."
pubDate: 2026-10-09T11:00:00
heroImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["pixel", "google", "security", "how-to", "android"]
noindex: false
---

If your Pixel Watch 2 or Pixel Watch 3 calls for help without a carrier plan, that path is on a clock. Google told Pixel Watch Community users on October 8, 2026 that Safety Signal ends on December 12. Emergency SOS, Fall Detection, and Safety Check do not disappear. The free standalone LTE link that backed them does.

The Verge reported the post the same day: existing users get email and a push notification, then a 30-day transition that starts on the email date. After the cutoff, those features still run over Wi-Fi, over Bluetooth to a paired phone, or on an active watch line from a carrier. Google’s own help page still describes how Safety Signal works today, so this guide covers both the current setup and what to change before mid-December.

Phone-side theft tools are a separate layer. If the paired Android phone is the weak point, turn on the locks in [Android Theft Protection](/blog/android-theft-protection-setup/) before you rely on the watch alone.

## What Safety Signal actually covers

Google Pixel Watch Help defines Safety Signal as a Google Health Premium service. It supplies LTE from Google so safety features can run when you are away from the phone and the watch has no carrier plan. If the watch already has a carrier line, Safety Signal stays off. The carrier connection is the path for emergency calls.

Help lists the features that use that link:

- Calls to and from emergency contacts
- Safety Check
- Emergency Sharing
- Emergency SOS
- Fall Detection

It is limited to Pixel Watch 2 and Pixel Watch 3 LTE models. Wi-Fi-only watches never had it. Availability is the United States, Canada, the United Kingdom, and Germany, with roaming between the US and Canada and between the UK and Germany. Google also says new Pixel Watch 2 and 3 units bought from AT&T or Verizon cannot use Safety Signal, and a Watch 2 previously sold by those carriers cannot use it if the feature was never activated.

Pixel Watch 4 does not list Safety Signal. Its LTE models add Satellite SOS for off-grid emergency help, which is a different feature and is not part of this shutdown.

Made by Google walked through how Fall Detection decides to call for help. The timing still matters after Safety Signal ends, because the call only goes out if the watch has a path to the network.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Ywy5G8GUAJI"
    title="Don’t try this at home: Fall Detection on Pixel Watch | Made by Google Podcast"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What changes on December 12

Google’s community post, as reported by The Verge and Engadget on October 8, says Safety Signal support ends December 12, 2026. The connectivity had been included with Google Health Premium. After that date, using the same safety features over LTE without the phone nearby requires a mobile plan on the watch.

Two clocks run at once:

1. Google says it will email and notify current Safety Signal users in advance.
2. From the date of that email, features stay available for 30 days without a standalone carrier plan.
3. Access ends after December 12, 2026.

Read both. A late email does not extend the December 12 end date in the reports. If you have not received the email by early December, check the Pixel Watch app and the inbox tied to your Google Health account anyway.

After the cutoff, Emergency SOS, Fall Detection, and Safety Check still work on Watch 2 and Watch 3 when the watch is on Wi-Fi or paired to the phone over Bluetooth. They also work if the watch has its own active cellular line. What you lose is the Google-provided LTE path that did not need a watch plan.

![Close-up of a smartwatch on a wrist during a workout](https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=800&q=80)

## Check whether your watch uses Safety Signal

Do this on the phone that is paired to the watch.

1. Open the Google Pixel Watch app.
2. Tap **Safety & emergency**, then **Safety signal**.
3. If the row is missing, the watch is Wi-Fi only, it is a Pixel Watch 4 or later, or the model was sold through a carrier that blocks the feature.
4. If it is on, note the Google Health (or older Fitbit) account signed in. That is the inbox that should get the end-of-support email.

Help says eSIM activation can take up to 24 hours when you first turn the feature on. Pixel Watch 2 owners who still have a separate Fitbit login must move Fitbit to a Google Account before signup completes.

Child accounts under a Fitbit family plan are not supported. Family Link can pair a Pixel Watch, but that does not add Safety Signal for those child accounts.

## Keep emergency calls working after the cutoff

Pick one of these paths before December 12. You do not need all three.

**Stay near the phone**

Bluetooth pairing is enough for the watch to place many safety calls through the phone. Keep the phone in range on runs and commutes if you will not add a watch line. Wi-Fi calling from the watch is not a substitute when the phone is out of range: Google’s help note says Safety Signal does not support Wi-Fi calling when the watch is disconnected from the phone.

**Add a carrier line to the LTE watch**

1. Open the Pixel Watch app.
2. Tap the connectivity or mobile network section your carrier uses (labels vary by carrier).
3. Follow the carrier’s eSIM or number-share steps.
4. Wait until the watch shows an active LTE signal with the phone left in another room.
5. Place a test call to a personal contact, not to emergency services.

A watch line is the only reported way to keep standalone LTE safety calls after December 12.

**Confirm Fall Detection and Emergency SOS are still on**

On the watch:

1. Press the crown.
2. Open **Safety** or swipe to **Settings → Safety & emergency**.
3. Turn on **Fall detection** and **Emergency SOS**.
4. Add emergency contacts and medical info.

On the phone, open the Pixel Watch app, then **Safety & emergency**, and review Emergency Sharing and Safety Check. Fall Detection waits about 30 seconds, alerts you, and calls emergency services after about 60 seconds if you do not respond, according to Pixel Watch Help. That timer is useless if the watch has no phone, no Wi-Fi, and no LTE.

![Person checking a smartwatch and phone together outdoors](https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80)

## What still works on newer watches

Pixel Watch 4 LTE can use a carrier plan or, where offered, Satellite SOS when you are off the grid. Pixel Watch Help lists Satellite SOS for Watch 4 LTE on Wear OS 6 or newer, and it is separate from Safety Signal. Loss of Pulse Detection is on Pixel Watch 3 and 4 in cleared countries. It still needs a way to place the emergency call: phone over Bluetooth, Wi-Fi with the phone nearby, or an active LTE connection. Help notes that some regions require an active LTE carrier or Safety Signal for emergency calls from the watch. After December 12, that second option is gone on Watch 2 and 3.

Gemini on Wear OS is unrelated to this cellular link. If you use the assistant for timers and messages, the safety features above do not depend on it.

## Tips before the email arrives

- Screenshot the Safety signal page in the Pixel Watch app so you have proof of enrollment if the notification is easy to miss.
- Add at least one emergency contact who will answer a call. Emergency SOS can reach them only when a network path exists.
- Do not test Fall Detection by dropping the watch. Google’s own Fall Detection episode tells owners not to try it at home. Use the in-app sound test for the alarm instead.
- If you travel between the US and Canada, or the UK and Germany, roaming on Safety Signal ends with the feature. A carrier plan may have its own roaming rules.
- Google Health Premium does not, by itself, replace the LTE link after December 12. Budget for a watch line if you run or commute without the phone.

## Conclusion

Open the Pixel Watch app, confirm Safety signal is on, and decide how the watch will reach a network after December 12, 2026. Pair it to the phone and stay in Bluetooth range, or add a carrier line to the LTE model. Turn Fall Detection and Emergency SOS back on after any account change, and wait for Google’s email so you know when your 30-day transition starts. The safety features remain. The free cellular path does not.

## Sources

- [Use Safety Signal on Google Pixel Watch — Pixel Watch Help](https://support.google.com/googlepixelwatch/answer/13889549)
- [Get help in an emergency with Google Pixel Watch safety features — Pixel Watch Help](https://support.google.com/googlepixelwatch/answer/12663810)
- [End of support for Safety Signal — Google Pixel Watch Community](https://support.google.com/googlepixelwatch/thread/471984501/end-of-support-for-safety-signal-on-google-pixel-watch-is-going-away)
- [Older Pixel watches are losing free cellular access to several safety features — The Verge, October 8, 2026](https://www.theverge.com/tech/1008145/google-pixel-watch-1-2-free-safety-signal-emergency-access-ending)
- [Don’t try this at home: Fall Detection on Pixel Watch — Made by Google Podcast (YouTube)](https://www.youtube.com/watch?v=Ywy5G8GUAJI)
