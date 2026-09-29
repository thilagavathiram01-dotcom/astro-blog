---
title: "How to Use Gemini 3.8 Flash in AI Mode Search"
description: "Switch Google AI Mode to Gemini 3.8 Flash on Pro or Ultra, then ask longer questions with follow-ups, images, and Search Live."
pubDate: 2026-09-29T14:00:00
heroImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "google", "ai-tools", "tutorials", "productivity"]
noindex: false
---

Gemini 3.8 Flash is now a selectable model in Google Search AI Mode for Google AI Pro and AI Ultra subscribers. Google listed AI Mode next to the Gemini app and Google Sheets when it launched the model on 2 September 2026. You do not need the developer API to try it.

This guide walks through how to open AI Mode, pick 3.8 Flash, and ask questions that use the model’s extra reasoning. Steps follow Google Search Help and the official model post.

## What AI Mode is, and what 3.8 Flash adds

AI Mode is Google’s conversational search surface. You type, speak, or attach an image. Search runs several related lookups and returns a written answer with links to the web.

Gemini 3.8 Flash is Google’s current workhorse Flash model. The company says it improves on 3.7 Flash for software engineering, agentic tasks, and multi-step reasoning. Default thinking level in the API is medium. In AI Mode you pick the model from a menu instead of setting `thinking_level` yourself.

Robby Stein, VP of Product for Google Search, said on launch day that Pro and Ultra subscribers worldwide can tap the plus icon in AI Mode and select 3.8 Flash. Free Search users do not get that menu. They keep the default model Google assigns.



![Person searching on a laptop at a desk](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)



## What you need

- A personal Google Account signed into Search or the Google app.
- **Google AI Pro** or **Google AI Ultra** if you want the model menu.
- AI Mode available in your country and language. Google documents access at [google.com/ai](https://google.com/ai), on google.com after you search, and from the AI Mode control in the Google app.

Workspace-only logins follow admin policy, not this consumer path. If AI Mode is missing, you are waiting on a regional rollout, not a hidden flag.

## Step 1: Open AI Mode

Google Search Help lists three official entry points:

1. Go to [google.com/ai](https://google.com/ai).
2. Search on [google.com](https://www.google.com), then tap **AI Mode**.
3. Open the Google app and tap **AI Mode** on the home screen.

On desktop you stay in the browser. On a phone, the Google app is the cleaner path because voice and camera sit on the Ask anything bar.

If you already use Personal Intelligence in the Gemini app, the same Google Account can personalize AI Mode after you allow Search services. Set that up with the [Personal Intelligence guide](/blog/gemini-personal-intelligence-setup/) before you expect answers that mention your trips or inbox.

## Step 2: Select Gemini 3.8 Flash

On a Pro or Ultra account:

1. Open AI Mode so the **Ask anything** bar is visible.
2. Tap the **+** control next to the bar.
3. Open the model list. Launch-day screenshots placed 3.8 Flash under Gemini 3 models, between Auto and Pro.
4. Choose **3.8 Flash** (wording may read Gemini 3.8 Flash).
5. Ask one test question you can check against a live source.

If the plus menu has no Flash row, confirm the account is Pro or Ultra and refresh. Google rolled the picker out globally with the model, but Search clients update on their own schedule.

Leave Auto selected when you want Google to pick speed for short lookups. Use 3.8 Flash when the question needs several steps: compare two products, debug a snippet, or plan a sequence of tasks.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/tD-V9emq6A8"
    title="AI Mode is now available in the U.S. Find it in the Google app or in a new tab in Search"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step 3: Ask questions that match the model

Google built 3.8 Flash for longer work, not one-word lookups. Use it when a normal results page would force you to open five tabs.

Prompts that fit official AI Mode capabilities:

- Compare two laptops on battery life, repair parts, and warranty, then list sources.
- Explain why a Python script fails, then propose a patch and the test you should run.
- Plan a three-stop itinerary with transit times and a backup indoor option.
- Upload a photo of a device label and ask which spare part matches the model number.

AI Mode accepts text, voice, images, and PDFs. Search Help documents the microphone on the Ask anything bar and image or PDF upload on the same bar. Search Live adds a spoken back-and-forth and optional camera context.

Ask a follow-up in the same thread. That is the point of the mode. Do not start a new search for every refinement.



![Code editor on a monitor during a development session](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)



## Step 4: Check sources before you act

AI Mode is Search, not a closed chatbot. Google’s product page says answers include links so you can inspect the web pages behind the summary.

Open at least one cited page when the answer names a price, a statute, a medical claim, or a flight time. Treat the model as a first pass. Confirm numbers in the original source.

3.8 Flash can reason across several sub-questions in one reply. That does not make it a substitute for your bank, airline, or doctor.

## What this model cannot do in Search

AI Mode does not expose API knobs such as `thinking_level`. You cannot set low, medium, or high inside the Search bar. Developers who need that control should call `gemini-3.8-flash` in the Gemini API instead.

Flash Cyber is not in AI Mode. That variant stays behind the Fairwind Program for trusted defenders.

Gems and Gemini Live skills are Gemini-app features. They do not travel into the AI Mode tab. Wallet, Photos, and other Connected Apps follow Gemini Apps settings, not the Search plus menu.

Free-tier Search has no subscriber model picker. Google has not published a promise that 3.8 Flash is the default for unpaid AI Mode.

## Tips

Keep one thread per project. Mixed topics make source lists harder to audit.

Use voice when your hands are full. Help documents the microphone on the Ask anything bar.

Upload a photo when the object is in front of you. Multimodal input is a documented AI Mode path, not a Gemini-app-only trick.

Switch back to Auto for “what time does the store close” queries. Flash’s extra diligence costs time you do not need for a hours listing.

If Personal Intelligence is on, ask a question that should stay generic in a temporary Gemini chat instead. Search history and AI Mode history are separate from Gemini Apps activity.

Revisit AI Mode history when you pause a research thread. Help documents that you can pick up where you left off.

## Conclusion

Gemini 3.8 Flash in AI Mode is a model picker, not a new Search product. Open google.com/ai or the Google app, tap plus, select 3.8 Flash on a Pro or Ultra plan, and ask a multi-step question you can verify against a source link.

Use Auto for short lookups. Use Flash when the work spans several facts. Leave Cyber, Gems, and API thinking levels on their own surfaces.

## Sources

- [Introducing Gemini 3.8 Flash and 3.8 Flash Cyber](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/) — Google, 2 September 2026
- [Get AI-powered responses with AI Mode in Google Search](https://support.google.com/websearch/answer/16011537) — Google Search Help
- [Google AI Mode](https://search.google/intl/en-GB/ways-to-search/ai-mode/) — Google Search product page
- [What's new in Gemini 3.8 Flash](https://ai.google.dev/gemini-api/docs/generate-content/latest-model) — Gemini API docs
- [AI Mode is now available in the U.S. (YouTube)](https://www.youtube.com/watch?v=tD-V9emq6A8) — Google
