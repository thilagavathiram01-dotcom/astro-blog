---
title: "How to Connect Apps in Gemini on Web and Android 2026"
description: "Connect Gmail, Drive, and new third-party tools in Gemini. Setup for web and Android, @ mentions, Keep Activity, and how to disconnect apps."
pubDate: 2026-09-28T14:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "productivity", "google", "ai-tools"]
noindex: false
---

Gemini is more useful when it can act on the tools you already use. Google calls these links **connected apps**. Once an app is on, you can ask Gemini to pull a file from Drive, draft from Gmail, or hand a task to a third-party service without leaving the chat.

On 23 September 2026, Google started another wave of connections. The new list includes Airtable, Linear, monday.com, PandaDoc, Wispr AI, Zoho, Adobe, Picsart, Squarespace, Webflow, apartments.com, Experian, Peloton, and SeatGeek. Availability still depends on your account type and region.

This guide follows Google’s own help pages. You will turn Keep Activity on, connect apps, call them with `@`, and disconnect anything you no longer want Gemini to see.



![Laptop and notes on a desk used for planning work in Gemini](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80)



## What connected apps can do

Google’s help center groups the jobs into a few buckets:

- **Work:** summarize Gmail threads, create Calendar events, or pull code from GitHub when that app is connected.
- **Media:** play tracks from YouTube Music or Spotify, or search Google Photos.
- **People:** place calls and send messages through your default phone and Messages apps, plus WhatsApp on Android.

Some apps run automatically when a prompt matches them. Others wait until you name them. You stay in control. You can turn any connection off on the Apps page at any time.

Gemini cannot use connected apps inside **Google Messages**. If you chat with Gemini there, switch to the Gemini app or gemini.google.com for app actions.

## Before you connect anything

You must be signed in. Apps never appear for a signed-out session.

Check **Keep Activity**. Google states that when Keep Activity is off:

- Apps are unavailable on gemini.google.com, iOS, and watches.
- On Android, only Utilities, Phone, Messages, and WhatsApp stay available.

Turn Keep Activity on in Gemini settings under Activity. Pick a retention window of 3, 18, or 36 months if the picker is shown.

Work and school accounts follow extra admin rules. If Apps is missing, ask your administrator. Personal Intelligence features that read Gmail and Photos have also shipped as a limited beta on personal accounts in some countries. Do not assume every toggle exists on every account.

## Connect apps on the web

1. Open [gemini.google.com](https://gemini.google.com) and sign in.
2. Open **Settings and help** (bottom of the sidebar on desktop).
3. Open **Apps**. Some accounts nest this under **Personal Intelligence**, then **Connected Apps**.
4. Find the app. Turn the toggle on.
5. For Google apps tied to the same account, the switch is usually enough. For third-party apps, approve the sign-in and permissions screen.

Google apps such as Gmail, Drive, Calendar, Photos, Maps, YouTube, and YouTube Music sit in this list when your region supports them. Third-party names appear as Google finishes each rollout wave.

To disconnect, return to the same page and turn the app off. A few Google services show a confirmation first.

## Connect apps on Android

1. Open the **Gemini** app and sign in with the same Google account you use on the web.
2. Open your profile or the menu, then **Settings**.
3. Open **Apps** (or **Personal Intelligence → Connected Apps**).
4. Toggle the app on and complete any extra login.

Android can also expose Phone, Messages, WhatsApp, and Utilities even when Keep Activity is off. Everything else still needs Keep Activity on.

If you already use Gemini on a Pixel for system tasks, connected apps are separate from features such as [Motion Assist on Android 17](/blog/android-17-motion-assist/). App connections live inside the Gemini app settings, not in the Android system Settings tree.



![Smartphone next to a laptop on a wooden desk](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)



## How to call an app in a prompt

Gemini often picks an app on its own. When you want a specific one, type `@` in the prompt box and choose the app from the list.

Examples that match Google’s documented pattern:

- `@Gmail summarize unread messages from my project alias this week`
- `@Google Drive find the latest budget spreadsheet`
- `@YouTube Music play a quiet instrumental playlist`
- `@Calendar create a 30-minute focus block tomorrow at 10`

Name the outcome, the time range, and the app. Vague prompts force Gemini to guess, which is when it reaches for Search instead of the tool you meant.

On Android you can still use voice. After you connect an app, say the app name in the request. Confirm the preview before Gemini sends a message or books something.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/PDMcpthR88U"
    title="How to Use Google Gemini AI (Full Tutorial)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What rolled out in August and September 2026

Google published two consumer posts that list partner categories. Treat the names as the official catalog for those waves, not as a promise that every account sees every toggle on day one.

**August 2026 (Made by Google announcement):**

- Productivity and creativity: Granola, Otter.ai, Wix
- Local and entertainment: Fever, GetYourGuide, Localiza, OpenTable (UK), Ticketmaster
- Music: iHeartRadio, Pandora
- Home, health, and lifestyle: Angi, Thumbtack, Zocdoc

**23 September 2026 wave:**

- Productivity: Airtable, Linear, monday.com, PandaDoc, Wispr AI, Zoho
- Creativity: Adobe, Picsart, Squarespace, Webflow
- Lifestyle: apartments.com, Experian, Peloton, SeatGeek

Connect only what you will actually query. Each extra login expands the data Gemini can request from that vendor under the permissions you approve.

## Tips that keep the setup clean

Start with Gmail, Calendar, and Drive if those are already on the same Google account. Test one prompt per app before you add partners.

Review permissions on the third-party site after you connect. If an app asks for write access you do not need, skip it.

Keep Activity stores chat history that apps rely on. If you later turn it off, expect most connections to stop on web and iOS.

Do not connect a work tracker on a personal Gemini account unless your company allows it. Admin policies can block or silently hide Apps.

If an `@` list is empty, you are signed into the wrong account, Keep Activity is off, or that app has not reached your country yet.

## Disconnect and privacy checks

Open **Settings → Apps** and switch the tool off. Google says you can do this at any time.

Then open the third-party account’s security or connected-apps page and revoke Gemini or Google if a leftover OAuth grant remains.

Personal Intelligence, when offered, is a separate toggle that can read Gmail and Photos more deeply. Google documents it as a beta for personal accounts in limited countries, not for Workspace business, enterprise, or education users. Read that settings page before you accept it.

## Conclusion

Connected apps turn Gemini from a chat box into a router for the tools you already pay for. Sign in, turn Keep Activity on, enable only the apps you need, and call them with `@` when Gemini guesses wrong.

Recheck the Apps page after each Google rollout. The September 2026 list is large. You do not need every name. You need the three or four services that sit in your daily loop.

## Sources

- [New connected apps roll out to Gemini (23 Sep 2026)](https://blog.google/innovation-and-ai/products/gemini-app/new-connected-apps-gemini/)
- [New connected apps are coming to Gemini (12 Aug 2026)](https://blog.google/innovation-and-ai/products/gemini-app/new-connected-apps-services-gemini-august-2026/)
- [Use and manage connected apps in Gemini (Google Help)](https://support.google.com/gemini/answer/13695044)
- [Personal Intelligence: Connecting Gemini to Google apps](https://blog.google/innovation-and-ai/products/gemini-app/personal-intelligence/)
- [How to Use Google Gemini AI (Kevin Stratvert)](https://www.youtube.com/watch?v=PDMcpthR88U)
