---
title: "How to Minimize Gemini Overlay Into a Bubble on Android"
description: "Minimize the Gemini overlay on Android into a floating spark bubble so you can keep using apps while Gemini answers."
pubDate: 2026-09-22T11:00:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "android", "how-to", "tutorials"]
noindex: false
---

The Gemini overlay on Android used to lock the screen until you finished a chat. In early September 2026, Google began a wide rollout of a **Minimize** control that collapses that overlay into a floating spark bubble so you can keep using other apps while Gemini works.

Google’s own on-device copy states the point clearly: “Gemini is still available while you multitask. Tap to expand. Drag to move or dismiss.” The change lives in the Google app / Gemini overlay, not as a separate Play Store download.

This guide covers how to open the overlay, minimize it, resume the same conversation, and when to use Android 17 App Bubbles instead.

## What the overlay is for

Google documents the overlay as the compact assistant surface that appears when you say “Hey Google” or activate Gemini by touch, such as a long press of the power button. It sits on top of the current app instead of launching the full Gemini app.

When the overlay opens over another app, Gemini can use on-screen context. Official help lists two examples: suggestions such as “ask about this screen” or “ask about this video” on YouTube, and drag-and-drop of generated images into apps that accept them.

The overlay is useful for short prompts. It is a poor fit when you need Gems, long chat history, or tools that still require the full app. Minimize does not replace those screens. It keeps the current session alive while you leave the sheet.

## What you need before Minimize appears

1. Set **Gemini** as the digital assistant. On many Pixels and Galaxy phones this is already the default.
2. Update the **Google** app and the **Gemini** app from Play Store.
3. Confirm **Display over other apps** (Appear on top) is on for Google and Gemini. Settings → Apps → Special app access.
4. Trigger Gemini with **Hey Google**, a **power-button long press**, or the corner swipe on supported Samsung devices.

The Minimize button started rolling out widely on **4 September 2026**, according to multiple Android outlets that matched Google’s in-overlay text. Rollout is server-side. If you do not see the button, force-stop the Google app and try again after an update.



![Person holding an Android phone with apps ready for multitasking](https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80)



## Open Gemini and send a prompt

1. Open the app you want to keep using (Messages, Chrome, Gmail, Maps).
2. Long-press the **power** or **side** button, or say **Hey Google**.
3. Type or speak a prompt. Example: “Summarize the article on this screen in five bullets.”
4. Send the prompt. Do not swipe Back yet. Back closes the overlay instead of shrinking it.

Right after you send the prompt, look above the pill-shaped input. A **Minimize** chip appears, often centered at first, then sitting to the side of the response card.

## Collapse the overlay into a bubble

Tap **Minimize**. The sheet shrinks to a dark bubble with the Gemini spark.

The first time you do this, Google shows the hint: tap to expand, drag to move or dismiss. After that, the bubble stays at the edge of the screen.

Reported behavior from the September rollout:

- The bubble snaps to a small set of edge positions rather than any pixel on the display.
- After each minimize, some devices reset the bubble to the **bottom-right** corner. That is a known quirk, not a setting you missed.
- After the answer loads, tapping **outside** the response sheet can also return you to the bubble.
- The **Back** gesture still ends the overlay session. Use Minimize when you want to keep the chat.

Leave the bubble on screen and switch apps. Gemini can keep generating in the background. Open Messages, copy a code, or scroll a map, then tap the spark when you need the answer.



![Laptop and phone on a desk for switching between tasks](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80)



## Resume, move, or dismiss the bubble

- **Expand:** tap the spark bubble. The same overlay and conversation come back. You do not start a new chat.
- **Move:** drag the bubble along the edge. It parks on allowed snap points.
- **Dismiss:** drag the bubble toward the dismiss target, or use Back on the expanded overlay if you are done.

This is faster than opening the full Gemini app and hunting the side panel for the last thread. Use it when the prompt is still running or when you expect one or two follow-ups.

If bubbles appear when you do not want them, Google’s community support points to two controls: turn off the Gemini overlay toggle in Gemini Settings if your build shows one, or revoke **Appear on top** for Gemini and Google. Restart after changing those permissions.

## Overlay bubble versus Android 17 App Bubbles

The Gemini spark bubble is **not** the same feature as system App Bubbles.

Android 17 lets you long-press any launcher icon and choose **Bubble**, which parks that whole app in a floating window. Google documents that flow for phones, foldables, and tablets, with a Bubble Bar on large screens. See our walkthrough of [how to use Android 17 App Bubbles](/blog/android-17-app-bubbles/) if you want Messages or Keep as a persistent window.

Use the **Gemini Minimize bubble** when you started from Hey Google or the power button and only need that chat nearby. Use a **system App Bubble** on the Gemini app itself when you want a richer window with history and tools while you work in another app.

Do not stack both unless you have a reason. Two floating Gemini surfaces fight for the same edge of the screen.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/EjvWewzECzY"
    title="How to Use Gemini AI Shortcut on Android"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical ways to use Minimize

**Long answers.** Ask Gemini to draft an email, tap Minimize, and keep reading the thread you are answering. Expand when the draft is ready.

**Screen questions.** Open the overlay over YouTube or a PDF, send “ask about this,” then minimize so playback or scrolling is not blocked while the model reads the page.

**Codes and confirmations.** Prompt Gemini, jump to Gmail or Messages for a one-time code, then tap the bubble to paste context back into the chat.

**Maps and transit.** Start a “what’s nearby” prompt, minimize, and keep the map full screen.

Avoid Minimize for actions that need a visible confirmation in the overlay, such as sending a message or changing a smart-home device, until you have reviewed the preview.

## If Minimize is missing

- Update Google and Gemini, then **Force stop** the Google app (Settings → Apps → Google).
- Confirm Gemini is the **default digital assistant** under Settings → Apps → Default apps.
- Re-enable **Display over other apps** for Google and Gemini.
- Trigger the overlay from an app, not only from the Gemini home screen. Some builds show Minimize only after a prompt is sent.
- On work profiles, overlay permission can be blocked by policy.

Google’s help page still describes the overlay as the surface for Hey Google and power-button activation. Minimize is a behavior of that same surface. It is not a separate toggle named “bubbles” in every Settings build.

## Tips

Keep prompts short when you plan to leave the overlay. Long Deep Research jobs still belong in the full app.

Do not treat the spark bubble as a privacy shield. The conversation is the same Gemini session. Lock the phone if you step away.

If the bubble covers a keyboard or a send button, drag it to another snap point before you type.

Use system Back only when you intend to end the overlay. Muscle memory from the old overlay will close chats you meant to keep.

## Conclusion

Minimize turns Gemini from a modal sheet into a parked assistant. Send the prompt, tap Minimize, finish the thing you were already doing, then expand the spark when the answer is ready.

Set the overlay shortcut you already use (power button or Hey Google). Practice Minimize on one low-stakes prompt. After that, treat Back as “end session” and Minimize as “keep working.”

## Sources

- [Get started with the Gemini mobile app](https://support.google.com/gemini?p=activity_to_mobile) — Gemini Apps Help
- [Gemini overlay gets bubble minimization and multitasking on Android](https://9to5google.com/2026/09/04/gemini-minimize-bubble/) — 9to5Google
- [Google's new Gemini feature aimed at multitaskers is starting to roll out](https://www.androidauthority.com/gemini-overlay-minimize-button-rollout-3707874/) — Android Authority
- [Multitask between apps with bubbles](https://support.google.com/pixelphone/answer/17126710) — Pixel Phone Help
