---
title: "How to Share Your Screen with Gemini Live on Android"
description: "Turn on Gemini Live screen share on Android, fix the notification requirement, and stop sharing when you are done."
pubDate: 2026-10-02T09:30:00
heroImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "android", "tutorials", "how-to"]
noindex: false
---

Gemini Live can look at your Android screen and talk you through what is on it. Google’s help page treats this as a separate control from the camera. The full screen is shared, and the session will not start unless Live notifications are on.

That notification rule is the step most people miss. This guide follows the official Gemini Apps Help steps for Android so you can start a share, keep it in the background, and stop it without guessing.

## What screen share does, and what it does not

Screen share sends the full display to the Live session. Gemini can talk about the page, settings panel, or app you have open. It is not a crop of one window. Google states that the full screen is shared.

Camera share is a different path. Camera share shows the world in front of the lens. Screen share shows pixels already on the phone. Guided Vision, which launched more widely on October 1, 2026, is tied to the camera path. If you only need spoken help with a label or a room, use the camera flow in our [Guided Vision setup guide](/blog/guided-vision-gemini-live-android/). Use screen share when the problem is already on the display.

Gems cannot be used with Gemini Live for now. A custom Gem will not ride along in a screen-share session.



![Android phone on a desk next to a notebook during a setup session](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)



## What you need before the first share

Google lists these requirements for Gemini Live on Android:

- An Android phone or tablet with the Gemini mobile app, or Gemini set as the mobile assistant.
- A personal Google account, or a work or school account that already has Gemini Apps access.
- The latest Google app. Update it from the Play Store before you test.
- You must be signed in to Gemini Apps. Live is not available in the Gemini web app or in Gemini inside Google Messages.

Google’s older Android product note for camera and screen sharing lists devices with 2 GB of RAM or more on Android 10 and up. If Live itself opens but the share control is missing, update the app first. Google says Live updates roll out gradually.

Ask permission before you include another person in a Live chat. The help page points to Google’s generative AI use policy on that point.

## Turn on Live with Gemini notifications

Screen share and background Live both depend on the same notification channel. Google’s wording is direct: to share your screen, you must turn on notifications for Gemini Live.

1. Open the device **Settings** app.
2. Tap **Notifications**, then **App notifications**, then **Google**.
3. Turn on **All Google Notifications** if it is off.
4. Turn on **Live with Gemini** if it is off.

If that channel stays off, the share control can appear and then fail, or background Live will not stay active when you leave the Gemini app. Check this setting before you reinstall anything.

## Start a screen share from inside Live

1. Open the Gemini mobile app.
2. At the bottom, tap **Live**, or swipe left. You can also say “Hey Google, let’s talk Live” or “Hey Google, let’s talk.”
3. On the Live screen, tap **Turn on screen sharing**.
4. Follow the Android system prompt and allow the share.
5. Leave Gemini and open the screen you want help with. Talk as you scroll.

Name the target in the first sentence. “Explain the toggle under Notification history” is more useful than “what is this?” Hold the screen still for a moment after you land on the panel so the model is not describing a half-scrolled page.

Mute is not the same as stop. Google notes that when a Live chat is muted, the microphone is off but video or screen sharing continues. Use mute if you need quiet. Use the stop control if you want the pixels to stop leaving the phone.

## Start a share from outside the Gemini app

You do not have to open Live first every time.

1. Go to the screen you want to discuss.
2. Open Gemini by saying “Hey Google” or by touch.
3. Tap **Share screen with Live**.
4. Accept the system prompt, then start talking.

Google warns that **Share screen with Live** might not appear when another feature is shown as more relevant. If the chip is missing, open the Gemini app, start Live, and use **Turn on screen sharing** instead.



![Person reviewing a smartphone screen while working at a table](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)



## Stop the share, and know when Android stops it for you

Stop sharing in either of these ways:

- Return to the Gemini app and tap **Turn off screen sharing**.
- Swipe down from the top of the screen and tap **Stop sharing** on the Screen Sharing card.

Android also stops the share on its own. If you put Live on hold, or you lock the screen, screen sharing stops. It does not resume when you continue the Live chat or unlock the phone. You have to start the share again.

That behavior is different from the camera. Google says the camera turns back on if you continue a Live chat after hold. Screen share does not get that automatic return. Plan on re-enabling it after every lock.

You cannot start Gemini Live on a locked screen. Unlock first. If Gemini on the lock screen is enabled, an already running Live chat can continue after you lock, but the screen share itself still stops when the screen locks.

## Use Live in the background while the screen is shared

Background Live also needs the Live with Gemini notification.

- Swipe up from the bottom to put Live in the background and use other apps.
- Swipe down from the top and tap the **Live with Gemini** card to return to fullscreen.

On the lock screen, tap the Live notification and unlock to return, or expand the notification and tap **End Live mode** to exit. If the chat was put on hold while locked, unlock the phone before you continue.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/naTvTQ60eoE"
    title="Automate Tasks with Gemini"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Privacy habits that match the full-screen rule

Because the share is the full display, anything that appears during the session is in frame. That includes notification banners, password managers, banking balances, and one-time codes.

- Close chats and banking apps before you start.
- Turn on Do Not Disturb if you expect message previews.
- Stop sharing before you hand the phone to someone else.
- End the Live session when the task is done so the microphone is not left open.

Google’s help article links to a separate page on how Gemini Live data is handled. Read that if you are deciding whether a work account should use screen share at all. For a work or school account, only Google Calendar, Google Keep, and Google Tasks can currently be used inside Live chats, and an admin has to enable them.

If you want a broader map of camera plus screen controls, the earlier walkthrough in [Gemini Live camera and screen share](/blog/gemini-live-camera-screen-share-android/) covers both paths. This article stays on the notification gate and the stop rules.

## Troubleshooting

**No screen-share button.** Update the Google app and the Gemini app. Confirm you are in a Live session, not a text chat. Live updates are gradual, so a missing control can be a rollout gap rather than a broken install.

**Button is there, share never starts.** Turn on **Live with Gemini** under Google app notifications, then try again.

**Share ends as soon as you lock the phone.** That is expected. Unlock and tap **Turn on screen sharing** again.

**Share screen with Live chip is missing on the assistant sheet.** Google says that chip can be replaced by another suggested action. Start Live from the Gemini app and use the in-session control.

**You muted and thought the share stopped.** Mute only silences the mic. Tap **Turn off screen sharing** or use the Screen Sharing notification card.

## Tips that keep the session useful

Ask one screen at a time. Jumping across three apps in ten seconds produces a vague answer.

Use captions if you are in a loud room. In an active Live chat, tap the captions control at the top right. Caption size and style live under Gemini Settings, then Caption preferences.

Interrupt is on by default. You can talk over Gemini to correct it. If that causes cutoffs, turn **Interrupt Live responses** off in Gemini Settings. You can still interrupt by tapping the screen.

Do not expect a Gem or a saved skill to apply inside Live. For now, Gems are blocked from Live sessions.

## Conclusion

Screen share in Gemini Live is a full-display session with a hard dependency on the Live with Gemini notification. Turn that channel on, start the share from Live or from the assistant sheet, and start it again after every lock. Stop it from the app or from the Screen Sharing card when you are finished.

Use the camera path, including Guided Vision, when the subject is in the room. Use screen share when the subject is already on the phone.

## Sources

- [Talk naturally with Gemini Live (Android, Gemini Apps Help)](https://support.google.com/gemini/answer/15274899)
- [Get audio descriptions with Guided Vision in Gemini Live](https://support.google.com/gemini/answer/18365638)
- [Guided Vision launches in Gemini Live for Android (Google blog, Oct 1, 2026)](https://blog.google/innovation-and-ai/products/gemini-app/guided-vision-gemini-live/)
- [Gemini Live camera and screen sharing (Android)](https://www.android.com/articles/gemini-on-android/)
- [Automate Tasks with Gemini (Android Developers on YouTube)](https://www.youtube.com/watch?v=naTvTQ60eoE)
