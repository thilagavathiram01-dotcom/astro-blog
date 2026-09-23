---
title: "How to Minimize the Gemini Overlay Into a Bubble on Android"
description: "Use Gemini’s new Minimize control on Android to shrink the overlay into a floating bubble so you can keep working while Gemini answers."
pubDate: 2026-09-23T18:00:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "android", "how-to", "tutorials"]
noindex: false
---

The Gemini overlay on Android used to own the screen until you closed it. Ask a long question and you waited, or you dismissed the sheet and lost the thread. In early September 2026, Google started rolling out a **Minimize** control that collapses that overlay into a floating spark bubble so you can switch apps while Gemini keeps working.

The change is small and easy to miss. This guide shows how to open the overlay, find Minimize, park the bubble, and pick when to use it instead of the full Gemini app or Android 17 App Bubbles.

Reporting from 9to5Google and Android Authority describes a wide Android rollout that began around September 4, 2026. Your phone may still be waiting on a Google app or Gemini app update.

## What the overlay bubble actually does

The overlay is the compact Gemini sheet you get from a side-button long-press, “Hey Google,” or a swipe shortcut. It is not the full Gemini app and not Gemini Live’s waveform circle.

When Minimize is on your build:

- A **Minimize** control appears above the overlay container after you send a prompt.
- After the reply lands, the sheet can sit as a pill on the right side of the screen.
- Minimize (or tapping outside the sheet on some builds) shrinks Gemini into a **spark logo bubble**.
- Google’s on-device hint reads: “Gemini is still available while you multitask. Tap to expand. Drag to move or dismiss.”

The conversation stays attached to that bubble. You do not have to reopen the Gemini app and hunt chat history just to add a follow-up.



![Person holding an Android phone while switching between apps](https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80)



## How to get the Minimize button

1. Update **Gemini** and the **Google** app from Play Store. Early testers saw the button after Google app builds in the 17.30 range; later September reports describe a wider public roll-out.
2. Confirm Gemini is your digital assistant: **Settings → Apps → Default apps → Digital assistant app** (wording varies by OEM).
3. Open the overlay the way you already use it: long-press the power or side button, say “Hey Google,” or use your OEM gesture.
4. Type or speak a prompt. Look for **Minimize** centered above the container while Gemini generates, and for the pill on the right after the answer.
5. Tap **Minimize**. The sheet collapses to the spark bubble.

If you only see Close or a full-screen Gemini activity, you are not on the overlay build yet. Wait for the app update rather than resetting the assistant.

## How to use the bubble day to day

**Expand.** Tap the bubble. The same chat returns, including the answer that finished in the background.

**Move.** Drag the bubble. Coverage of the September roll-out says it snaps to a small set of edge slots (often six), not free placement anywhere on the display. Some users also see it jump back to the bottom-right after each minimize. Treat that as a current quirk, not a setting you missed.

**Keep working.** Open Mail, Chrome, Maps, or Messages while Gemini writes. This is the point of the feature: you asked for a summary or a draft and you do not want to stare at a thinking spinner.

**Dismiss.** Drag the bubble to the dismiss target, or use the system Back gesture on the expanded overlay. Back typically closes the overlay instead of shrinking it. If you only wanted to hide Gemini, use Minimize or tap outside the sheet after the reply.

**Ask again later.** Expand the bubble and send a follow-up. That is faster than opening the Gemini app, then the side panel, then the last chat.

## Overlay bubble vs Android 17 App Bubbles

Do not mix the two systems.

The **Gemini overlay bubble** is Gemini-only. It keeps one assistant conversation parked while you use other apps.

**Android 17 App Bubbles** turn almost any installed app into a system floating window from the launcher long-press menu. That is the better tool when you want Messages, Keep, or Maps floating, not the assistant. See our walkthrough of [Android 17 App Bubbles](/blog/android-17-app-bubbles/) if you want a stack of apps at the edge rather than a single Gemini spark.

You can use both. Bubble your chat app. Minimize Gemini when you send a long prompt. Close whichever window you are not using so the edges of the screen stay usable.



![Laptop and phone on a desk during a focused work session](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80)



## Four practical uses

**Draft while you file.** Ask Gemini to turn messy notes into an email. Minimize immediately. File the receipt or attach the PDF. Expand the bubble, copy the draft, paste it.

**Research in Chrome.** Start a comparison prompt from the overlay. Minimize and keep reading the page. Expand when the table or shortlist is ready.

**Navigation plus a question.** You are in Maps and need a packing list or a reservation script. Trigger the overlay, send the prompt, Minimize so the map stays full screen.

**Voice first, text later.** Speak the prompt, Minimize, then expand to edit the written answer. This avoids holding the overlay open with one hand while you walk.

Skip Minimize for short timers, weather, and yes/no questions. Closing the overlay is faster when you do not need the reply later.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/4Rrmx1gMwcM"
    title="Four ways to open the Gemini on-screen overlay on a Galaxy phone"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## If Minimize never appears

- Update Gemini and the Google app, then force-stop both and reopen the overlay.
- Confirm you are in the **overlay**, not the standalone Gemini activity. The full app already has its own chat list and does not need this bubble.
- Check that Gemini is the default assistant. A leftover Google Assistant binding can open a different sheet.
- Wait. September coverage called the roll-out gradual. A friend on the same Android version may see the button a few days earlier.
- On Android 17, you can still [bubble the Gemini app itself](/blog/android-17-app-bubbles/) from the launcher if you want a persistent window and the overlay button has not arrived.

Do not uninstall Gemini to “force” the UI. That only delays the server-side flag.

## Limits worth knowing

The bubble is a shortcut to one live overlay chat. It is not a second Gemini account, not a Live camera session, and not a system notification shade widget.

Positioning is constrained. If you need pixel-perfect placement, you will be frustrated. Park it on the edge opposite your thumb and leave it there.

Closing the bubble ends that overlay session on most builds. Save or copy anything you still need before you drag it to dismiss.

Gemini Live already had a floating control for voice. Overlay Minimize is for typed and short voice prompts that return a written answer. Use Live when you want a spoken back-and-forth with camera or screen share.

## Conclusion

Treat Minimize as the missing close-but-keep-it control. Send the prompt, shrink the sheet, finish the thing you were doing, then tap the spark when you want the answer.

Update the apps, trigger the overlay once, and look for the button above the container. If it is there, use it on the next long draft. If it is not, keep the Android 17 app bubble path in reserve and check again after the next Google app update.

## Sources

- [Gemini overlay gets bubble minimization and multitasking on Android](https://9to5google.com/2026/09/04/gemini-minimize-bubble/) — 9to5Google
- [Google's new Gemini feature aimed at multitaskers is starting to roll out](https://www.androidauthority.com/gemini-overlay-minimize-button-rollout-3707874/) — Android Authority
- [Talk naturally with Gemini Live (Android)](https://support.google.com/gemini/answer/15274899) — Gemini Apps Help
- [Android 17 is here](https://android-developers.googleblog.com/2026/06/Android-17.html) — Android Developers Blog
