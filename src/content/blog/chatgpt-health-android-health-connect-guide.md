---
title: "How to Connect ChatGPT Health to Android Health Connect"
description: "Step-by-step guide to connect ChatGPT Health with Android Health Connect for sleep, activity, and workout insights. Includes privacy notes and disconnect steps."
pubDate: 2026-11-26T14:00:00
heroImage: "https://images.unsplash.com/photo-1764426445444-5a528029fd62?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "android", "chatgpt", "tutorials", "how-to"]
noindex: false
---

ChatGPT Health now reads data from Android Health Connect for eligible U.S. users. You can ask about sleep after morning workouts, spot activity patterns, or get suggestions grounded in your own numbers from Garmin, Oura, WHOOP, and other apps that write to Health Connect.

The feature rolled out starting 19 November 2026 on Android, the desktop app, Sites, and dots. It is available to logged-in Free, Go, Plus, and Pro users in the United States. Dots remain a Pro feature. The rollout is gradual, so the Health tab may not appear on every account immediately.

## What Health Connect provides

Health Connect is Android’s system for sharing health and fitness data between apps. When you connect it in ChatGPT, the app can use sleep, activity, workouts, and other categories you approve. Proprietary scores from some wearables may not transfer. What appears depends on the app and the permissions you grant.

OpenAI states that the data you sync through Health is not used to train foundation models or target ads. Conversations that reference the connected data can be used to improve models unless you turn off “Improve the model for everyone” in Settings > Data Controls.

![Person checking a fitness tracker during a workout](https://images.unsplash.com/photo-1773399452188-a42e29543bf2?auto=format&fit=crop&w=800&q=80)

## How to connect Health Connect

1. Update the ChatGPT app on your Android phone.
2. Open Health from the sidebar. If it is not listed, look under the Explore menu.
3. Choose to connect Health Connect (or select Get started / Connect Health and pick Health Connect).
4. Select the data categories you want to share and complete the Android permission prompts.
5. Wait for the sync. Large histories can take several minutes or longer.
6. Review or add current conditions, medications, and family history if prompted.

After the first connection, you can add or manage accounts later by going to Health > Accounts > Add account.

Make sure your wearable or fitness app is already writing data into Health Connect. Open Android Settings, search for Health Connect, and check the list of connected apps. If workouts or sleep are missing in ChatGPT, verify the source app has permission to write those records.

You can ask questions anywhere in ChatGPT once data is synced. Add @Health to a message if you want the response grounded in your connected data.

## Wearables and apps

OpenAI lists setup paths for popular devices:

- WHOOP: follow the Health Connect integration steps in the WHOOP app.
- Oura: enable Health Connect sharing in the Oura app.
- Garmin: turn on Health Connect sync in Garmin Connect.

Other apps that already support Health Connect (such as Strava or MyFitnessPal) work the same way. Open Health Connect settings, select the app, and choose which data categories to share with ChatGPT.

## Privacy and controls

You decide which categories to share. ChatGPT uses your global plugins permission setting by default. Change Health-specific permissions later under Settings > Plugins > Health.

To stop sharing:

1. Go to Health > Accounts.
2. Select the more options menu (•••) next to Health Connect.
3. Choose Disconnect or Manage > Disconnect.

Synced data from that source is deleted from OpenAI’s systems within 30 days. Conversation history that already includes health details remains until you delete those chats.

Health is designed to support, not replace, medical care. It is not for diagnosis or treatment. For urgent symptoms, contact a professional.

![Close-up of a fitness tracker band](https://images.unsplash.com/photo-1576243345690-4e4b79b63288?auto=format&fit=crop&w=800&q=80)

## Tips for better results

- Grant only the categories you need. You can add more later.
- Check the last sync time in the Health tab if answers feel outdated.
- Use Temporary Chat if you want a one-off conversation without creating memories.
- If you also use dots (Pro), connected Health data can inform proactive suggestions, such as an alternative workout time when a meeting overlaps.

For related ChatGPT features on Android, see the guide to [setting up ChatGPT Dots](/blog/chatgpt-dots-setup-apps-tasks-controls/).

## Sources

- [Health in ChatGPT](https://help.openai.com/en/articles/20001036-health-in-chatgpt) — OpenAI Help Center (updated November 2026)
- OpenAI release notes, 19 November 2026 (Health expansion to Android via Health Connect, desktop, Sites, and dots)
- [Health Privacy Notice](https://openai.com/policies/health-privacy-policy/) — OpenAI

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Z82cxeuCZ_I"
    title="Securely connecting your information and apps with ChatGPT Health"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
