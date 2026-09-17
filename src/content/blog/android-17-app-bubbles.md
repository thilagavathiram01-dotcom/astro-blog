---
title: "How to Use Android 17 App Bubbles for Faster Multitasking"
description: "Turn any app into a floating bubble on Android 17. Learn how to create, switch, and dismiss App Bubbles on phones, plus the Bubble Bar on foldables and tablets."
pubDate: 2026-09-17T15:20:00
tags: ["android", "tutorials", "how-to"]
heroImage: "/images/android-17-app-bubbles.svg"
---

Android has long let messaging chats float in bubbles. **Android 17** extends that idea to **any app**. Long-press a launcher icon, choose Bubble, and the app sits in a compact window you can park at the edge of the screen while you keep working in something else.

Google documented this as part of Android 17’s windowing work: App Bubbles on phones, foldables, and tablets, plus a **Bubble Bar** on large screens. This guide is a user-facing walkthrough of those official capabilities, with practical setups that do not depend on a third-party launcher.

You need **Android 17**. On Pixel phones the feature shipped with the June 2026 platform release. Other manufacturers may take longer to expose the same long-press action on their skins.

## What App Bubbles are (and are not)

An App Bubble is a **system floating window** for an app you already installed. It is not a widget, not split-screen, and not the older chat-only Bubbles API limited to conversations.

Official behavior, from Google’s Android 17 developer announcement:

- You can turn **any app** into a bubble from the **launcher** long-press menu.
- The feature works on **phones, foldables, and tablets**.
- On large screens, the system taskbar can show a **Bubble Bar** to organize and dock those windows.
- Apps should still follow multi-window layout rules; a poorly adaptive app may look cramped inside a bubble.

Independent Pixel coverage after the June 2026 drop consistently reports a **limit of five** bubbles at once. Treat five as the working cap on Pixel until your Settings or on-device UI says otherwise.

## Create a bubble on a phone

1. Confirm **Settings → System → About phone** (or Software update) shows Android 17.
2. Go to the **home screen** or **app drawer**.
3. **Long-press** the app you want nearby all day (Messages, Keep, Calendar, Maps, a music app).
4. In the shortcut sheet, tap **Bubble**. On Android 17 QPR1 the sheet is often split into app shortcuts and system **Actions**; Bubble lives with Actions.
5. The app opens in a floating window. Tap outside it or tap the bubble handle to shrink it to an edge icon.
6. Repeat for other apps. The system groups them into one bubble stack.

If Bubble is missing:

- You are not on Android 17 yet.
- The OEM skin hid the action; check the long-press menu and Recents overflow.
- Some work-profile or kiosk policies block free-form windows.

## Switch, resize, and dismiss

- **Expand:** tap the edge bubble.
- **Switch apps:** tap another icon in the stack, or use the + control if the panel offers it.
- **Minimize:** tap the bubble again or tap the background app.
- **Close:** drag the bubble toward the dismiss target, or use the close control on the window.
- **Full screen:** use the maximize control when you need the whole display again.

Do not treat a bubble as a second user account. Notifications, logins, and permissions are the same as the full app.

## Use the Bubble Bar on foldables and tablets

On large screens (roughly tablets and unfolded foldables), Android 17 adds a **Bubble Bar** on the system taskbar.

Typical flow:

1. Open the **taskbar** (often a short swipe up from the bottom on Pixel tablets and folds).
2. Long-press an icon and choose **Bubble**, or dock an existing bubble into the bar.
3. Use the bar to jump between floating apps, park them, or expand one without hunting along the screen edge.

This is the better mode when you are reading a document and glancing at chat or a timer. The phone-edge stack is fine for one-handed use; the bar is better when you have a taskbar already.

Android 17 also adds **interactive Picture-in-Picture** in desktop-style environments: pinned windows stay on top and remain usable, not a video-only preview. That is separate from App Bubbles, but it is the same multitasking family if you plug into an external display.

## Five useful bubble setups

**Messaging stack.** Bubble your main chat app and email. Leave the full screen for the document or map you are actually using.

**Navigation plus notes.** Keep Maps or transit full screen. Bubble Keep or Messages so the group can drop a pin without burying navigation.

**Timer while cooking or working out.** Bubble Clock or a workout app. You still get glanceable controls without leaving a recipe or video.

**Reference window.** Bubble Settings, a password manager, or documentation while you configure another app. Close it when the task is done so you stay under the five-app cap.

**Media controls.** Bubble the podcast or music app if its notification shade controls are incomplete. Expand only when you change albums.

Skip bubbling games that assume a fixed orientation, camera apps in the middle of a capture, and banking apps you would rather keep behind the lock screen. Android 17 QPR2 is separately adding a native **App lock** action on the same long-press sheet on Pixel; lock those apps instead of floating them.

## Tips that prevent frustration

- Bubble **utility** apps, not your primary full-screen task.
- If an app’s UI collapses badly, open it full screen. Google told developers that layouts must adapt when a window shrinks to a bubble.
- After Android 17 QPR1, the long-press menu can list **Bubble** next to Widgets and (later) App lock. Look under Actions if Shortcuts looks empty.
- Closing a bubble does not uninstall the app or sign you out.
- OEM layers may rename the control. Search Settings for “bubbles” or “floating” if the launcher sheet has no Bubble row.

## What this feature does not replace

App Bubbles do not replace split-screen, desktop windowing, or Continue On (Android 17’s handoff suggestion that can resume a recent phone app on a tablet). Use split-screen when two apps need equal space. Use bubbles when one app is primary and two or three others are interruptions.

Availability on non-Pixel phones depends on the manufacturer’s Android 17 build. Google’s platform description is device-class based (phones, foldables, tablets), not Pixel-only, but skins can delay or restyle the launcher action.

## Conclusion

App Bubbles are the everyday multitasking change in Android 17: long-press, tap Bubble, keep the tool at the edge. On a phone, cap yourself at a small stack of chat, notes, and media. On a foldable or tablet, park that stack on the Bubble Bar so it behaves like a lightweight taskbar.

Set up three bubbles you already open ten times a day. If a fourth app is only occasional, leave it in the drawer. The feature is useful when the floating window is a shortcut, not a second home screen.

## Sources

- [Android 17 is here](https://android-developers.googleblog.com/2026/06/Android-17.html) — Android Developers Blog
- [Explore what’s new on Android](https://www.android.com/intl/en_us/new-features-on-android/featured/) — Android
- [Adaptive apps guidance](https://developer.android.com/adaptive-apps) — Android Developers
