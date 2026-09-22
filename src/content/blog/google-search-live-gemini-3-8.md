---
title: "How to Use Google Search Live With Gemini 3.8"
description: "Set up Search Live in the Google app, talk with Gemini 3.8 Live, share the camera, and follow web links."
pubDate: 2026-09-22T14:00:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "google", "tutorials", "ai", "android"]
noindex: false
---

Google Search Live is no longer a Labs experiment. As of 15 September 2026, the voice and camera conversation inside the Google app runs on **Gemini 3.8 Live**, the same audio model Google shipped for developers and Search.

You speak, Search answers out loud, shows web links on screen, and keeps a transcript. Point the camera at a shelf, a circuit board, or a street sign and the model uses that frame as context. This guide walks through setup, the buttons that matter, and a few habits that keep answers grounded.

## What Search Live is (and is not)

Search Live is a real-time conversation in AI Mode. You stay inside the Google app. The session can mix voice, typed follow-ups, and the camera.

It is not the Gemini app, and it is not Gemini Live Extended Thinking. Google states that **Gemini 3.8 Live** is the model rolling out to everyone in Search Live. Extended Thinking is a separate, higher-reasoning variant aimed at developers and Google AI Pro / Ultra surfaces such as Docs Live, Gmail Live, and Keep Live.

Rajan Patel, VP of Engineering for Search, described the 3.8 Live upgrade as more helpful spoken answers with web links, mid-conversation language switching, and a more natural back-and-forth.

If you already use [Circle to Search on Android](/blog/circle-to-search-android/), think of Search Live as the spoken, multi-turn version of that idea: you stay in one session instead of launching a new query each time.



![Person holding a smartphone and talking during a live search session](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)



## What you need before you start

- The **Google app** on Android or iOS, updated from the Play Store or App Store.
- A Google Account signed in.
- Microphone permission for the Google app.
- Camera permission if you want visual context.
- A network connection. Live sessions stream audio both ways.

Search Live expanded to more than 200 countries and territories in March 2026, when Google switched the experience to Gemini 3.1 Flash Live. The September 2026 model swap does not change that footprint. If you already see a **Live** control under the Search bar, you are in a supported region.

Gemini 3.8 Live automatically detects and switches among **97 languages** mid-conversation. You do not pick a language in a settings menu first.

## Start a Search Live session

1. Open the **Google** app (the colored G), not Chrome and not the Gemini app.
2. Look under the Search bar for the **Live** icon.
3. Tap Live. Grant the microphone if the app asks.
4. Ask your question out loud. Wait for the spoken reply and the links that appear on screen.
5. Interrupt or follow up by speaking again. You can also open the **transcript** and type.

To attach the camera:

1. Start Live as above, then turn the camera on from the Live controls.
2. Or open **Google Lens**, frame the object, and tap **Live** at the bottom. Camera sharing is on by default from Lens so you can talk about what is in frame immediately.

Lock the phone or leave the app and the camera session ends. That is the privacy default, not a crash.

## A first session that shows the new model

Pick a task that needs more than one hop. Gemini 3.8 Live is built for that pattern: it can speak an interim answer, keep working, then come back with links.

Try this sequence:

1. “Walk me through replacing the cabin air filter on a 2019 Honda Civic. I have the glove box open.”
2. Turn the camera toward the glove box so Search can see the clips and the filter slot.
3. Ask, “Which of these two filters matches the OEM part?”
4. Tap a product or how-to link on screen if you want a written procedure.
5. Open the transcript if you need to copy a torque spec or part number.

Google’s own 3.8 Live announcement highlights Search Live as a place for step-by-step troubleshooting with visual context. Keep the question specific. Vague prompts still produce vague speech.



![Close-up of a phone camera pointed at a workbench for visual search help](https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80)



## Use the transcript and AI Mode history

Spoken answers disappear. The transcript does not.

- Tap **Transcript** during or after the session to read the same replies as text.
- Continue from the transcript by typing if you are in a quiet room.
- Open **AI Mode history** in the Google app to resume an earlier Live thread instead of starting over.

Treat history like any other Search activity. If the topic is sensitive, end the session and clear it from your Google Account activity controls the same way you would clear a typed query.

## Switch languages without restarting

Gemini 3.8 Live is trained for mid-conversation language changes. You can start in English, ask a follow-up in another supported language, and keep the same camera session.

This is useful when a product label, a menu, or a street sign is not in the language you started with. Say the new language out loud. You do not need a settings toggle.

For longer spoken translation outside Search, see the [Gemini 3.5 Live Translate walkthrough](/blog/gemini-3-5-live-translate/). Search Live still aims at grounded web answers, not a dedicated interpreter mode.

## Watch Search Live in action

Google’s official clip shows the same two patterns this guide uses: point the camera at a project, then settle a question with a spoken follow-up.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/lr6Cw5uc5Bw"
    title="Search Live is global: Talk to Search with voice and video"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

The clip predates the 3.8 Live swap. The buttons and camera flow are the same. The September 2026 change is the audio model behind those buttons.

## Practical tips that keep answers useful

**Name the object in frame.** “What is this bolt size?” works better after you say “this is the lower control arm bolt.” The camera helps, but speech still sets the task.

**Use links when the stakes are high.** Search Live shows sources on screen for a reason. Open the how-to or spec sheet before you cut a wire or book a fare.

**Keep one task per session.** Mixing a recipe, a flight, and a homework question in one Live thread makes the transcript hard to reuse.

**Do not use Live as a medical or navigation device.** Google’s own camera features, including Guided vision in Gemini Live, carry the same warning: the model can be wrong, and it is not a substitute for a clinician or a mobility aid.

**Compare with Gemini Live when you need apps, not the web.** Search Live is for grounded Search. Inbox triage, Calendar, and Spark-style agents live in the Gemini app. For the model card and API path, start with the [Gemini 3.8 Live overview](/blog/gemini-3-8-live/).

## Troubleshooting

**No Live icon.** Update the Google app. Confirm you are signed in. If the control is still missing, the account or country may not have AI Mode Live yet.

**Live starts but stays silent.** Check the phone’s media volume, not only the ringer. Deny-and-forget microphone permission is the other common cause.

**Camera preview is black.** Grant camera access to the Google app in system settings. Close any other app that holds the camera, including a lingering Gemini Live session.

**Answers ignore what you are pointing at.** Confirm the camera indicator is on. Restart Live from Lens so the frame is attached from the first turn.

**Language does not switch.** Speak a full sentence in the new language. A single word is easy for the model to treat as a proper noun.

## Conclusion

Search Live is the fastest way to put Gemini 3.8 Live to work without an API key or a paid Gemini plan. Open the Google app, tap Live, talk, and keep the camera ready when the object in front of you is part of the question.

Use the transcript when you need to copy a step. Use the on-screen links when you need a source. Leave Extended Thinking and Workspace Live sessions for the paid Gemini surfaces. For everyday how-to and “what am I looking at” questions, the Google app is enough.

## Sources

- [Introducing Gemini 3.8 Live and 3.8 Live Extended Thinking](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/) — Google, 15 September 2026
- [Search Live is expanding globally](https://blog.google/products-and-platforms/products/search/search-live-global-expansion/) — Google, 26 March 2026
- [5 ways to get real-time help by going Live with Search](https://blog.google/products/search/search-live-tips/) — Google
- [Gemini 3.8 Live powers Google Search Live](https://searchengineland.com/gemini-3-8-live-powers-google-search-live-488757) — Search Engine Land, 15 September 2026
