---
title: "Manage What Gemini Remembers About You"
description: "Control Gemini's Memory and preview the upcoming Remembered Items section in Personal Intelligence settings on Android."
pubDate: 2026-10-28T14:00:00
heroImage: "https://images.unsplash.com/photo-1757310998309-87a97e562ee5?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "android", "how-to", "tutorials", "google", "ai"]
noindex: false
---

Gemini already learns from your chats. It also lets you explicitly tell it to remember facts about you. Until recently the only way to check those explicit memories was to ask Gemini in a new chat. Google is now building a dedicated Remembered Items screen inside Personal Intelligence settings so you can view and manage them in one place.

This guide shows how to use Memory today, how to ask Gemini to remember specific details, and what the upcoming Remembered Items interface is expected to offer. It is based on official Gemini help pages and the October 2026 Android Authority APK teardown of Google app version 17.70.10.sa.arm64.

## What Memory and Remembered Items actually track

Gemini has two related but distinct memory systems.

Memory (also called Saved info in some surfaces) lets Gemini learn preferences, roles, and facts from your past conversations when the toggle is on. It is designed to make future answers more relevant without you repeating the same background every time.

Remembered Items is the new section Google is testing. It is meant for the things you explicitly ask Gemini to store—text facts and images. Android Authority found the option inside the Personal Intelligence settings menu. The description reads that you can “view and manage the text and images you’ve saved to memory.” The interface is not fully functional yet and currently shows an error state when opened with flags enabled.

You can already tell Gemini things like “Remember that I prefer concise answers and work in product design.” Those explicit requests are the ones the new screen is intended to surface.

![Person holding a smartphone showing AI app icons including Gemini](https://images.unsplash.com/photo-1744900647430-965ccc7a6078?auto=format&fit=crop&w=800&q=80)

## How to turn Memory on today

Memory is available now on the Gemini app for Android and iOS and on gemini.google.com. Requirements are listed in Gemini Apps Help.

1. Open the Gemini app or go to gemini.google.com.
2. Tap your profile picture, then Settings (or Settings & help on the web).
3. Open Personal Intelligence or the Memory / Saved info section, depending on your client version.
4. Turn Memory on.

On the web the path is often Settings & help → Personal Intelligence. Once enabled, Gemini can reference earlier chats when it answers new ones. You can still start a temporary chat that does not feed Memory if you need a clean session.

If you also use Daily Brief, Memory is one of the requirements so Looking ahead can draw on past conversations. See our earlier guide on [setting up Gemini Daily Brief](/blog/daily-brief-gemini-free-us/) for the full list of switches.

## How to explicitly ask Gemini to remember something

You do not need a special settings page to store a fact today. Open a chat and tell Gemini directly.

Examples that work now:

- “Remember that my preferred response style is short bullet points.”
- “Remember I have two dogs and no cats.”
- “Remember my work focuses on Android app development.”

You can also attach an image and say “Remember this diagram for later reference.” Gemini stores the fact or the image reference so it can surface it in later conversations.

To check what is stored, simply ask: “What do you remember about me?” or “List the things I asked you to remember.” Gemini will reply with the explicit items it has. This is the method Android Authority noted as the current easiest approach.

## What the Remembered Items screen is expected to look like

The APK teardown of Google app 17.70.10.sa.arm64 shows a new card titled Remembered Items under Personal Intelligence. Tapping it is designed to open a dedicated interface that lists the text and images you have explicitly saved.

The same teardown found a text box on that screen that could let you add or remove details directly. In the current build the underlying functionality is not active, so the screen appears blank with an error. Google has not announced a public rollout date.

When it ships, the section should sit alongside the existing Memory toggle. Memory continues to learn from ordinary chats; Remembered Items is the explicit list you control. Android Authority also noted a separate Remember shortcut under development for the Gemini overlay, which would make saving a fact from any screen faster.

## Step-by-step: prepare for the new controls

Even before the screen arrives you can keep your explicit memories clean.

1. Turn Memory on if you want Gemini to use past chats.
2. Periodically ask “What do you remember about me?” and correct anything inaccurate in the same chat.
3. For sensitive facts, prefer not to store them or delete the related chat history under Gemini Apps Activity.
4. Keep the Google app updated. The Remembered Items code is in version 17.70 and later builds.
5. Once the section appears in Settings → Personal Intelligence, open it and review the list. Remove any item you no longer want Gemini to reference.

Official Gemini Apps Help still directs users to the Memory toggle and to asking the model directly. The dedicated screen is the next step Google is testing.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/YQt2f6HTHmY"
    title="Google Gemini Personal Intelligence explained"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for keeping Memory useful

Store only facts you want repeated. Gemini will surface them across chats, so avoid temporary project details unless you plan to clean them up later.

Use short, clear sentences when you say “Remember…”. Vague requests produce vague stored items that are harder to review.

Pair Memory with Connected Apps only if you want Gemini to also draw on Gmail, Calendar, or Drive. The two systems are independent; you can enable Memory without connecting Workspace.

On Android, force-stop and reopen the Google app if a new settings entry does not appear after an update. Server-side flags often control the final visibility.

## Conclusion

You can already control what Gemini remembers by turning Memory on and explicitly asking it to store facts. The upcoming Remembered Items section in Personal Intelligence settings will give you a dedicated place to view and manage those explicit text and image memories instead of asking in a chat. Until the screen ships, the ask-and-correct method remains the reliable way to keep the list accurate.

Update the Google app, check Personal Intelligence after the next release, and review the list when it appears.

## Sources

- [Google Gemini's Remembered Items feature spotted](https://www.androidauthority.com/google-gemini-remembered-items-feature-apk-teardown-3728147/) — Android Authority, 26 October 2026
- [Gemini Apps Help: Personal Intelligence and Memory](https://support.google.com/gemini) — Google
- [How To Enable Memory In Gemini AI](https://www.youtube.com/watch?v=IqLEoaODLcw) — ProgrammingKnowledge2
- Related: [Set Up Gemini Daily Brief After the Free US Rollout](/blog/daily-brief-gemini-free-us/)
