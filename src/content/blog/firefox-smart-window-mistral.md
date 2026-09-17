---
title: "How to Use Firefox Smart Window With Mistral Small 4"
description: "A practical guide to Firefox Smart Window beta after Mozilla added Mistral Small 4: enable the window, pick a model, use tab-aware chat, and manage privacy controls."
pubDate: 2026-09-17T22:50:00
tags: ["ai-tools", "firefox", "tutorials"]
heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80"
---

Firefox Smart Window is an optional AI workspace inside the browser. It is not a new search engine and it is not a replacement for a normal Firefox window. You open it when you want help with a pile of tabs, a messy research trail, or a page you already have open.

On 16 September 2026, Mozilla and Mistral announced that **Mistral Small 4** is joining Smart Window beta as a model option. The same announcement expands the beta to **France** with official French-language support. Users in the United States and Canada already had access. Mistral said the United Kingdom and Germany are expected later in 2026.

This guide covers how to turn Smart Window on, how to choose Mistral (or another model), and how to use it without handing the browser more context than you intend.

![Laptop with code and browser tabs on a desk](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80)

## What Smart Window actually is

Mozilla describes Smart Window as a separate window type with a built-in assistant. Official jobs it is designed for:

- Make sense of a long search trail
- Find a page you clicked away from and still need
- Pull answers from the tabs you already have open
- Group related tabs and flag duplicates (added in the August 2026 update)
- Retrieve current web sources without bouncing you to a separate results page (via Mozilla's Exa partnership announced in August)

It stays optional. You can keep using classic Firefox and never open it. AI Controls is the single settings hub for turning the window off, quieting AI notices, or making Smart Window the default window type.

Availability as of the September 16 update:

- **Languages / locales:** en-US, en-CA, and fr
- **Markets:** United States, Canada, and France
- **Status:** beta
- **Entry point:** [firefox.com/smart-window](https://www.firefox.com/smart-window)

If you are outside those locales, the Settings row may be missing. That is a staged rollout, not a broken install.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/aHfhsfyVrKw" title="Mozilla VP on Firefox AI, Smart Window, and AI Controls" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## What changed with Mistral Small 4

Mozilla selected Mistral Small 4 after testing it on Smart Window beta, including multilingual performance. Mistral Small 4 is an open-weight model published under Apache 2.0. Mozilla's post is clear that it is **an additional option**, not a lock-in:

- Mistral Small 4 becomes available to Smart Window users in the U.S., Canada, and France
- You can still pick other models already wired into the beta
- Independent reporting on the current picker also lists options such as Gemini 3.1 Flash Lite and Qwen 3, plus a path to bring your own API key on some builds

Treat the picker labels as product UI, not as a permanent catalog. Mozilla has already reshuffled model slots as the beta evolved. Check the in-product list on your build.

Privacy claims both companies published together:

- Smart Window conversations are **not saved on Mozilla servers by default**
- Mistral agrees to **zero data retention** for this partnership

That is not the same as "nothing leaves your device." The model still has to receive the prompt and whatever tab context you allow. Read the onboarding toggles before you treat the window like a private notebook.

![Person browsing on a laptop near a window](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1400&q=80)

## Before you start

1. Update Firefox to the current stable release. France access is documented against **Firefox 155**; North America has been on the beta since the 150-series rollout.
2. Set the browser language to **English (US)**, **English (Canada)**, or **French** if you want the official locale path.
3. Sign in only if you want sync. Smart Window does not require a Mozilla account to try the window itself.
4. Open **Settings → AI Controls** (`about:preferences#ai`) and confirm Smart Window is not disabled globally.

## Step-by-step: turn Smart Window on

### 1. Use the official download / waitlist page

Go to [firefox.com/smart-window](https://www.firefox.com/smart-window). If the beta is live for your profile, Firefox will offer the window. If it is not, join the waitlist rather than flipping random `about:config` flags first.

Community guides document `browser.smartwindow.enabled` in `about:config`. That preference can expose UI on some builds, but it does **not** override region, language, or server-side rollout gates. Prefer Settings when the control exists.

### 2. Enable it from AI Controls

1. Open the application menu → **Settings**.
2. Select **AI Controls**.
3. Open Smart Window settings.
4. Set Smart Window to available / enabled.
5. Finish onboarding when Firefox asks which model to use and what the assistant may learn from.

Starting in Firefox 151.0.2 you can also turn on **Use Smart Window by default**. That applies to browser launch, restart, and links opened from other apps. Leave it off until you know you want every new window to be the AI workspace.

### 3. Open the window on demand

If you did not make it the default:

1. Click the Firefox icon near the upper-right of a normal window.
2. Choose **Smart Window (beta)**.
3. Start a chat from New Tab or from the sidebar while a page is visible.

## Pick Mistral (or switch models mid-chat)

On current betas the first-run wizard groups models by role (fast / flexible / personal) instead of dumping raw model IDs. After Mistral landed, look for **Mistral Small 4** in that list. Some coverage marks it as recommended in France.

During a chat:

1. Open the model drop-down near the chat box.
2. Switch to Mistral Small 4 for French-language work or when you want the open-weight option Mozilla just added.
3. Switch back if a different model handles a coding or summarization pass better on your task.

Do not assume one model owns every job. Smart Window's point is that the browser stays the product and the model is swappable.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/rc-AARTUGUU" title="Mozilla and Mistral join forces for Firefox Smart Window" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## A useful first session

Use a real research mess, not a toy prompt.

1. Open four to eight tabs on one topic (a product changelog, two reviews, a pricing page, a forum thread).
2. Open Smart Window.
3. Ask: "Compare what these open tabs agree on about pricing and support hours. List conflicts and cite the tab titles."
4. Ask it to suggest tab groups for the same set.
5. If duplicates appear, close them from the suggestion instead of hunting the tab strip.
6. If the answer invents a number that is not on any open page, treat the page as source of truth and tighten the prompt: "Use only the tabs I have open. Do not add web results."

August's Exa-backed retrieval is useful when you *want* fresh sources. It is noise when you only want the documents already on screen. Say which mode you mean.

### Memories, chat by chat

Smart Window can keep a memory of browsing context. Mozilla has described this as local-first in public product talks, with a control to enable or disable Memories per chat. Use memory for an ongoing project ("kitchen remodel research"). Turn it off for a one-off medical or finance lookup.

You choose during onboarding whether the assistant may learn from Smart Window chats and/or broader Firefox browsing. You can change that later in AI Controls.

## Privacy and control checklist

Work through this once after onboarding:

- **AI Controls → off** if you want zero Smart Window and no AI feature prompts
- **Default window type** left on classic Firefox unless you live in the workspace
- **Memories** disabled on chats that include account dashboards, mail, or tax sites
- **Feedback previews** reviewed before you submit a thumbs-down (recent point releases added a preview of what gets shared)
- **Model choice** revisited when you change language or task type

Zero data retention at the partner is a policy, not a substitute for closing the banking tab before you ask the assistant to summarize "this page."

![Close-up of hands typing on a laptop keyboard](https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=1400&q=80)

## When the feature is missing

Work the list in order:

1. Firefox is fully updated
2. UI language is en-US, en-CA, or fr
3. You are in the U.S., Canada, or France
4. AI Controls does not have a global AI off switch enabled
5. You opened the official Smart Window page and completed onboarding

If those are true and the row is still gone, you are waiting on Mozilla's gradual rollout. Flipping `browser.smartwindow.enabled` is a last resort for testing, not a supported way to jump the queue.

## Conclusion

Use Smart Window as a workspace for tabs you already opened. Turn it on from AI Controls, pick **Mistral Small 4** when you want the new open-weight option (especially in French), and keep classic Firefox as the default until the assistant proves it saves time on real research.

Start at [firefox.com/smart-window](https://www.firefox.com/smart-window). Read the onboarding toggles. Ask the model to work from open tabs first. Bring in live web retrieval only when you need sources that are not already on the strip.

## Sources

- [Mozilla and Mistral: Partnering to expand AI competition and preserve user choice](https://blog.mozilla.org/en/firefox/mozilla-mistral-partnership/) — Mozilla Blog, 16 September 2026
- [Mistral and Mozilla are bringing open, private and multilingual AI to your web browser](https://mistral.ai/news/mistral-x-mozilla/) — Mistral, 16 September 2026
- [Smart Window: Finish what you start online](https://blog.mozilla.org/en/firefox/firefox-smart-window/) — Mozilla Blog (updated 16 September 2026)
- [Get started with Smart Window](https://support.mozilla.org/en-US/kb/smart-window) — Firefox Help
- [Firefox Smart Window](https://www.firefox.com/smart-window) — product page
- [Mozilla's VP on Firefox AI](https://www.youtube.com/watch?v=aHfhsfyVrKw) — YouTube
