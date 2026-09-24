---
title: "How to Use Gemini Live Camera and Screen Share"
description: "Use Gemini Live on Android to share your camera or screen, talk in real time, and get help from official Google steps."
pubDate: 2026-09-24T10:00:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "android", "tutorials", "how-to", "ai-tools"]
noindex: false
---

Gemini Live is the voice conversation mode in the Gemini app. You talk out loud, interrupt when you need to, and keep context in one thread. On Android you can also share the rear or front camera, or the full device screen, so Gemini can talk about what you see.

Google updated the underlying live models in September 2026. Gemini 3.8 Live is built for fluid dialogue and visual grounding. Gemini 3.8 Live Extended Thinking is the higher-complexity option that Google says is rolling into Gemini Live and tools such as Gmail Live. This guide sticks to official setup steps so you can use camera and screen share today.

## What you need before you start

Google lists these requirements for Gemini Live on Android:

- An Android phone or tablet with 2 GB of RAM or more, running Android 10 or later
- The Gemini mobile app, or Gemini set as your mobile assistant
- A personal Google Account, or a work or school account that has access to Gemini Apps
- The latest version of the Google app
- Age 18 or over

Live is not available in the Gemini web app or in Gemini in Google Messages. Camera and screen sharing in Live is available on eligible Android devices that meet the RAM and OS floor above.

Update Gemini and the Google app from Play Store before you test features. An old Google app is a common reason the Live icon or Share screen chip is missing.



![Person holding an Android phone during a voice conversation](https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=800&q=80)



## Start a Gemini Live conversation

You can open Live from the app, from the assistant overlay, or with a voice command.

**From the Gemini app**

1. Open the Gemini app.
2. Tap **Live** at the bottom of the prompt box, or swipe left on the prompt bar.
3. Follow the first-run prompts if Android asks for microphone access.
4. Start talking.

**From the power button or Hey Google**

1. Long-press the power button if Gemini is your assistant, or say “Hey Google, let’s talk Live” or “Hey Google, let’s talk.”
2. Tap **Live** if the overlay still shows the typed prompt bar.
3. Speak. You can interrupt Gemini mid-reply.

To pause, tap **Hold**. That mutes the microphone. Tap **Live** again to resume. To leave the session and read the transcript, tap **End**.

Background Live needs notifications enabled for Gemini Live. Open **Settings → Notifications → App notifications**, find Gemini or Google (depending on how Live is packaged on your device), and allow Live notifications. Without that toggle, Live cannot stay active when the screen locks or you switch apps.

If you use Android 17 bubbles or overlay shortcuts, keep Gemini allowed to draw over other apps. For related overlay behavior on Android 17, see [Android 17 app bubbles](/blog/android-17-app-bubbles/).

## Share your camera in Live

Camera share lets Gemini look at a physical object while you talk. Official steps from Google:

1. Open Gemini (app or long-press power).
2. Tap **Live**.
3. Tap the **Camera** icon.
4. Point the viewfinder at the object.
5. Ask your question out loud.

Tap the switch-camera control to flip between rear and front cameras. Tap **Camera** again to stop sharing.

Google documents three cases where the camera turns off on its own:

- You put Live on hold. The camera returns when you resume.
- You leave the Gemini app. The camera does not turn back on when you return.
- The screen locks. The camera does not turn back on after unlock.

Use cases that work well: a damaged appliance, a recipe in progress, a product label, a room you want layout ideas for, or fine print you need read aloud. Guided vision in Gemini Live, highlighted in Google’s September 2026 Android Drop, is designed with blind and low-vision users to describe scenes and read labels when you share the camera.

Keep the subject in frame and well lit. Live processes video off-device, so a stable network connection matters more than raw GPU power.



![Android phone camera pointed at a desk workspace](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)



## Share your screen with Live

Screen share sends the **full screen** to Gemini, not a single app window. Confirm the system prompt before you continue.

**From inside a Live session**

1. Start Live in the Gemini app.
2. Tap **Turn on screen sharing** (wording can read **Share screen**).
3. Accept the Android screen-capture prompt.
4. Switch to the app or page you want help with and keep talking.

**From outside the Gemini app**

1. Open the screen you want to discuss.
2. Long-press power or say “Hey Google.”
3. Tap **Share screen with Live**.
4. Accept the capture prompt and start talking.

You must have Gemini Live notifications on for screen share. That is an official requirement, not optional.

Good prompts while sharing:

- “Summarize this article and list the three claims I should verify.”
- “Walk me through this settings page. What does each toggle do?”
- “Compare the two products on this page and flag the fees.”
- “This error message appeared. What should I try first?”

Stop sharing from the Live controls or the capture indicator in the status bar. Ending screen share does not have to end the voice session.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/atAk9c54sAw"
    title="Hit a snag? Gemini Live can help. Share your camera and screen to get clear, step-by-step guidance."
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What Gemini 3.8 Live changes for these sessions

On 15 September 2026 Google introduced Gemini 3.8 Live and Gemini 3.8 Live Extended Thinking. Official product notes that matter for phone users:

- 3.8 Live targets low-latency voice with visual grounding, so camera and screen context stay in the same conversation.
- Tools and API calls can run in the background while audio keeps streaming. Developers see this as asynchronous function calling in the Live API.
- 3.8 Live Extended Thinking is the model Google associates with higher-complexity live tasks and with Live surfaces such as Gmail Live, Docs Live, and Keep Live.
- 3.8 Live is also powering Search Live in the Google app, with spoken follow-ups and on-screen links.

You do not pick a model string in the consumer Gemini app. Update the app and use Live as usual. Developers who build their own voice agents use `gemini-3.8-live` in the Gemini API and Google AI Studio.

## Privacy and safety checks

Treat camera and screen share as a live broadcast to Gemini, not a local preview.

- Hide passwords, 2FA codes, banking balances, and private chats before you share the screen.
- Lock the phone if you step away. The camera turns off on lock, but end the session if you no longer need it.
- Review the transcript after **End** and delete the chat in Gemini activity controls if the session included sensitive material.
- Work and school accounts follow admin policy. If Live or camera share is missing, your admin may have disabled Gemini Apps features.

Google states that Gemini acts on your command in related Android agent features and that you stay in control of confirmations. Still verify any action that sends a message, places an order, or changes a setting.

## Tips that save time

- Grant microphone, camera, and notification access on first run so you are not dumped back to Settings mid-task.
- Use Hold instead of End when you need a quiet moment. Hold keeps the thread.
- Combine camera share with a short spoken goal: “I need a repair method, not a product pitch.”
- For long research, switch from Live to typed chat in the same thread. Google documents that voice and text can share one conversation.
- If Live fails to see the screen, revoke and re-grant screen capture, then confirm notifications are on.
- Keep Gemini as the default assistant if you rely on the power-button overlay and “Share screen with Live.”

## Conclusion

Gemini Live on Android is a spoken session with optional camera or full-screen context. Meet the Android 10 / 2 GB RAM bar, update Gemini and the Google app, allow Live notifications, then tap Live and the camera or screen-share control. The September 2026 3.8 Live models improve the dialogue layer behind those sessions. Start with one concrete object or one settings page, confirm what Gemini can see, and end the session when you are done.

## Sources

- [Talk naturally with Gemini Live (Gemini Apps Help)](https://support.google.com/gemini/answer/15274899)
- [How to use the Gemini AI assistant on Android](https://www.android.com/intl/en_uk/articles/gemini-android-app/)
- [Gemini Live camera and screen sharing on Android](https://android.com/articles/gemini-on-android/)
- [Introducing Gemini 3.8 Live and 3.8 Live Extended Thinking](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/)
- [Build real-time voice applications with Gemini audio models](https://blog.google/innovation-and-ai/technology/developers-tools/build-real-time-voice-applications-gemini-audio/)
- [September 2026 Android Drop](https://blog.google/products-and-platforms/platforms/android/android-drop-september-2026/)
- [Gemini 3.8 Live model docs](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-live)
