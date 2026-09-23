---
title: "How to Use Search Live With Gemini 3.8 on Android"
description: "Open Search Live in the Google app, talk or share the camera, follow on-screen links, and switch languages mid-conversation with Gemini 3.8 Live."
pubDate: 2026-09-23T07:40:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "android", "how-to", "google", "tutorials"]
noindex: false
---

Google Search Live is no longer a Labs experiment you have to hunt for. On 15 September 2026, Google started powering Search Live with **Gemini 3.8 Live**, the same native audio model it shipped for developers and Gemini Live.

You open the Google app, tap Live, speak, and get a spoken answer plus web links on the same screen. This guide walks through setup, camera mode, language switching, and the checks that keep answers honest.

For the model split between 3.8 Live and Live Extended Thinking, see our earlier overview of [Gemini 3.8 Live](/blog/gemini-3-8-live/). Search Live uses the faster Live model, not Extended Thinking.

## What Search Live does now

Search Live is a voice conversation inside **AI Mode** on the Google app for Android and iOS. You stay in one session. Follow-up questions keep the context instead of starting a new typed query.

Google says 3.8 Live brings three practical upgrades to that session:

- Spoken answers with **web links** on screen so you can open sources
- **Multilingual** dialogue, including a language change mid-conversation
- More natural turn-taking than earlier Live models

Rajan Patel, VP of Engineering for Search, wrote that 3.8 Live now powers real-time conversations in Search Live. Google’s product blog also shows Search Live used for live troubleshooting, with the camera pointed at the thing you are fixing.

Gemini 3.8 Live is built for scale and cost. It takes audio, images, video, and text. It returns audio and text. Official docs list a **131,072**-token input window and **65,536**-token output window. That is enough for a long spoken session. It is not a writing model for long reports.



![Person holding an Android phone while talking through a voice search session](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)



## What you need before you tap Live

1. Install or update the **Google** app from Play Store. Search Live lives there, not in Chrome.
2. Sign in with the Google Account you use for Search and AI Mode.
3. Allow **microphone** access when the app asks. Allow **camera** access if you want visual questions.
4. Use a supported language. Search Live launched in English in the U.S. and later expanded. Google announced a global rollout to **200+ countries and territories** in March 2026, first on Gemini 3.1 Flash Live. The September 2026 model swap keeps that surface and adds 3.8 Live quality.
5. Stay out of work or school accounts unless an admin has enabled AI Mode features.

If you do not see a Live control, update the app and check that AI Mode is available in your country. Rollouts are staggered. The feature is not tied to a Pixel-only build.

## Start a Search Live session on Android

1. Open the **Google** app.
2. Tap the **Live** icon under the Search bar. Google’s official how-to uses that exact control.
3. Grant mic permission if this is the first session.
4. Ask a full question out loud. Example: “What should I check if this washing machine error code keeps coming back?”
5. Listen to the spoken answer. Scan the **links** that appear on screen.
6. Ask a follow-up without restating the whole problem.
7. Tap **transcript** when you want the same exchange as text, or when you need to type the next question in a quiet place.
8. Reopen the session later from **AI Mode history** if you want to continue the same thread.

Search Live can keep running while you switch apps. That is useful when you are following a recipe, packing a bag, or holding a tool with both hands.

Keep questions concrete. “Compare these two official warranty pages and tell me which repair is covered” beats “fix my phone.”

## Use the camera when words are not enough

Search Live can use what the camera sees. Google’s consumer tips walk through this path: start Live, share the camera feed, and ask about the object in frame. If you already have **Google Lens** open, pick the Live option at the bottom of that screen. Camera sharing can start on by default in that flow.

Good camera prompts:

- “Which HDMI port on this TV should the soundbar use?”
- “What does this dashboard warning light mean?”
- “Is this plant the same species as the one on this seed packet?”
- “Read this error sticker and tell me the next official troubleshooting step.”

Hold the phone steady. Name the brand or model if the label is small. Ask one physical question at a time, then follow up.

Do not point the camera at passwords, bank cards, medical records, or other people’s faces without a reason. Live audio from Gemini products is watermarked with **SynthID**. That mark is for detecting generated speech. It does not hide what you showed the camera.



![Close-up of a smartphone camera pointed at a desk for a live visual question](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)



## Switch languages without restarting

Gemini 3.8 Live can detect and move between many spoken languages in one session. Google’s model post says it automatically detects and transitions across **97** supported languages mid-conversation.

In Search Live that means you can start in English and finish a follow-up in another language the model supports. You do not need a settings toggle for that handoff.

Still say the language out loud the first time you switch if the answer comes back in the wrong one: “Answer in Hindi from here.” Then check the on-screen links. Citations stay useful even when the spoken language changes.

## Watch how Search Live is supposed to feel

Google’s own Search Live explainer shows the voice-plus-camera loop and the reason the feature exists: you keep working with your hands while Search stays on the line.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/lr6Cw5uc5Bw"
    title="Search Live is global: Talk to Search with voice and video in your language"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

That video shipped with the global rollout on Gemini 3.1 Flash Live. The September 2026 change is the model under the same Live button: Gemini 3.8 Live.

## Prompts that work better than a typed search box

Use Search Live when the next question depends on the last answer.

- Travel: “I have four hours in Tokyo Station. Rank nearby food options that are open now and walkable with a suitcase.”
- Repair: “I am looking at the back of this router. Which port is WAN, and what should the lights do after I plug the ISP cable in?”
- Shopping: “Compare the official spec sheets for these two power banks and tell me which one supports USB PD at 30W.”
- Learning: “Explain this paragraph I just read, then quiz me with three short questions.”

After the spoken answer, open at least one link. Search Live is still Search. The audio is a guide. The pages are the record.

## Limits you should plan around

- **Availability varies.** Google listed Search Live as a 3.8 Live consumer surface on launch day. Your app build and country still control whether the Live icon appears.
- **It is not Gemini Live.** Gemini Live and Workspace surfaces such as Gmail Live, Docs Live, and Keep Live use **3.8 Live Extended Thinking**. Search Live uses the base Live model.
- **It does not generate images.** Official 3.8 Live tables mark image generation, code execution, file search, caching, and structured outputs as unsupported on the Live endpoint.
- **Answers can be wrong.** Treat spoken claims like any AI Mode reply. Follow the links. Do not use Live audio as medical, legal, or financial advice.
- **Sensitive tasks stay on you.** Do not dictate one-time codes or account passwords into a live session.

If you need a long written brief with citations, use typed AI Mode or a text Gemini model. If you need a voice agent in your own app, use the [Gemini Live API](https://ai.google.dev/gemini-api/docs/live-api) with `gemini-3.8-live`.

## Tips that save time

- Start with the goal in one sentence, then add constraints.
- Interrupt when the model repeats itself. These models are built for turn-taking.
- Use transcript mode in libraries, offices, and late-night rooms.
- Pin useful links from the session into Chrome or Keep before you close the app.
- Update the Google app when a Live session fails to start. Stale builds hide the control.

## Conclusion

Search Live is the fastest way to use Gemini 3.8 Live without an API key. Open the Google app, tap Live, speak, and keep the camera ready when the question is physical. Read the links. Switch language only when you need to. Leave Extended Thinking and Workspace Live features for inbox and document work.

If the Live icon is missing today, update the app and check again after the regional rollout catches up. The button is the same one Google has been shipping all year. The September 2026 change is the model that answers when you tap it.

## Sources

- [Introducing Gemini 3.8 Live and 3.8 Live Extended Thinking](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/) — Google
- [Gemini 3.8 Live model page](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-live) — Google AI for Developers
- [Search Live with voice in AI Mode on Google Search](https://blog.google/products/search/search-live-ai-mode/) — Google
- [Search Live launches in the U.S.: Tips on how to use Google Search Live](https://blog.google/products/search/search-live-tips/) — Google
- [Gemini 3.8 Audio model card](https://deepmind.google/models/model-cards/gemini-3-8-audio/) — Google DeepMind
