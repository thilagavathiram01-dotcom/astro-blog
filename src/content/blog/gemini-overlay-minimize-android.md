---
title: "How to Minimize Gemini Overlay on Android"
description: "Minimize the Gemini overlay into a floating bubble on Android so you can keep using apps while Gemini works. Setup, controls, and limits."
pubDate: 2026-09-22T10:30:00
heroImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "android", "how-to", "tutorials"]
noindex: false
---

The Gemini overlay used to lock the lower part of your Android screen until you closed it. That made long answers and multi-step prompts feel like a pause button for the rest of the phone.

Google now ships a **Minimize** control on that overlay. After you send a prompt, you can collapse Gemini into a spark-logo bubble, keep using other apps, then tap the bubble to read the reply.

The overlay itself is official: Google Help says saying “Hey Google” or activating Gemini by touch opens an on-screen overlay instead of the full app. The minimize-to-bubble control began rolling out widely in early September 2026 with an updated Google app. If you do not see it yet, update Google and Gemini, then force-stop the Google app once.

## What the overlay is for

The overlay is the compact assistant sheet that appears over whatever app is open. You trigger it with:

- “Hey Google,” if Voice Match is on
- A long press on the power button when Gemini is the default digital assistant
- Touch-and-hold Home, or a corner swipe, on devices that still use those gestures

Google documents that the overlay can use **what is on screen**. Over YouTube you may see “ask about this video.” Over other apps you may see “ask about this screen.” That is why the overlay exists: it keeps the current app visible while you ask about it.

The full Gemini app is still the place for chat history, Gems, Daily Brief, and account settings. Swipe up on the overlay handle when you need those.

## Turn Gemini on as the default assistant

You cannot minimize an overlay that never appears. Set Gemini as the digital assistant first.

1. Open **Settings** and search for **Digital assistant app** (wording varies by manufacturer).
2. Choose **Gemini**.
3. On many Pixels and Galaxy phones, open **Settings → System → Gestures → Press and hold power button** and set it to the digital assistant.
4. Open the **Gemini** app and grant microphone, notifications, and “appear on top” when asked.
5. In the **Google** app, confirm Gemini is selected under Settings → Google Assistant → Digital assistants from Google.

If long-press power still opens the power menu, the gesture is assigned to power, not the assistant. Flip that toggle, then test once from the home screen.



![Person holding an Android phone while working at a desk](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)



## Minimize the overlay into a bubble

Once the overlay is working:

1. Open any app you actually need (mail, Maps, a browser tab).
2. Long-press power or say “Hey Google.”
3. Type or speak a prompt. You can minimize **before** the answer finishes.
4. Tap **Minimize** on the small pill above the prompt bar. After a reply loads, tapping outside the sheet can also collapse it.
5. The overlay shrinks to a bubble with the Gemini spark. Google’s on-device copy reads: “Gemini is still available while you multitask. Tap to expand. Drag to move or dismiss.”

Use the phone as usual. When you want the answer, tap the bubble. The same conversation continues. You do not have to hunt through the full app’s history for that thread.

**Back** still closes the overlay entirely. If you want to keep the chat parked, use Minimize or tap outside, not the system back gesture.

## What you can and cannot do with the bubble

Independent reports of the September 2026 rollout agree on a few limits:

- The bubble snaps to a small set of edge positions. It is not a free-floating icon you can drop anywhere.
- Some builds reset the bubble to the bottom-right after each minimize. That is a software quirk, not a setting you missed.
- Drag the bubble to the dismiss target to close Gemini for that session.
- The overlay is not Android 17 **App Bubbles**. App Bubbles turn *any* installed app into a system floating window from a launcher long-press. The Gemini spark is a Gemini-only shortcut. Use both if you want Gemini parked *and* Messages or Keep as separate bubbles. See our [Android 17 App Bubbles guide](/blog/android-17-app-bubbles/).

Do not expect the bubble to send files, edit sent messages, or run group-chat admin tasks. Treat it as a parked conversation, not a second launcher.

## Ask about the screen, then get out of the way

The overlay is most useful when the current screen is the context.

**YouTube.** Open a long video. Invoke Gemini. Tap the “ask about this video” chip if it appears, then minimize while you keep watching.

**Web page or PDF.** Open the document, invoke Gemini, ask for a three-bullet summary or a definition of a highlighted term, minimize, and keep reading.

**Shopping or travel tab.** Ask Gemini to compare options visible on screen, collapse the overlay, and finish the booking in the original app.

Google Help also notes you can press and hold a generated image in the overlay and drop it into another app when that app accepts the drop.



![Laptop and smartphone on a wooden desk used for everyday work](https://images.unsplash.com/photo-1484788984921-03950022c9ef?auto=format&fit=crop&w=800&q=80)



## Fix a missing Minimize button

If you only see the old locked overlay:

1. Update **Google** and **Gemini** in Play Store.
2. Open **Settings → Apps → Google → Force stop**. Open Gemini once after that.
3. Confirm **Appear on top** / **Display over other apps** is on for both **Google** and **Gemini** under Settings → Apps → Special app access.
4. Make sure Gemini, not the classic Google Assistant, is the default digital assistant.

If the power button opens the *full* Gemini app instead of the overlay, “appear on top” is often off, or a recent Google app build glitched. Toggle the permission, force-stop Google, and try again from an open app rather than the launcher.

To stop floating Gemini UI altogether, turn off appear-on-top for Gemini and Google, or send feedback from Gemini → profile → Help & feedback if a bubble will not dismiss.

## Tips that keep the feature useful

- Send the prompt first, then minimize. An empty overlay is not worth parking.
- Use voice for the request and your hands for the other app. Google has said a large share of Gemini app users now talk to the product rather than type.
- Pair the overlay with Android 17 App Bubbles only for apps you already open all day. Five system bubbles is the Pixel cap.
- For agent-style work across apps on supported flagships, that is a separate Gemini Intelligence / task-action path, not this bubble. Read [Gemini Intelligence on Android](/blog/gemini-intelligence-android/) if your Pixel or Galaxy already has those controls.
- Do not leave Deep Research or a huge Canvas job running only in the overlay if you need a stable document. Open the full app for work you will come back to tomorrow.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/EjvWewzECzY"
    title="How to Use Gemini AI Shortcut on Android 16"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

The Gemini overlay is the fast path: long-press power, ask about the screen in front of you, then get the sheet out of the way. Minimize turns that sheet into a parked bubble so a slow answer no longer blocks mail, maps, or a video.

Set the default assistant, update the Google app, try Minimize on one real prompt today, and keep the full Gemini app for history and settings. If the pill never appears, force-stop Google and check appear-on-top. The control is rolling out; the overlay behavior around screen context is already in Google’s own help pages.

## Sources

- [Get started with the Gemini mobile app](https://support.google.com/android/answer/14554984) — Android Help
- [Gemini Apps Help](https://support.google.com/gemini) — Google
- [Multitask between apps with bubbles](https://support.google.com/pixelphone/answer/17126710) — Pixel Phone Help
- [Gemini Intelligence brings proactive AI to Android](https://blog.google/products-and-platforms/platforms/android/gemini-intelligence/) — Google Blog
