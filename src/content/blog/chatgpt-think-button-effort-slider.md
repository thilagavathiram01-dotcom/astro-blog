---
title: "ChatGPT Think and Effort Slider: Plan-by-Plan Guide"
description: "Use the ChatGPT Think button on Free and Go, and the effort slider on Plus and Pro, so you pick GPT-5.6 Luna or Sol for the right job."
pubDate: 2026-10-06T11:20:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["chatgpt", "tutorials", "how-to", "ai-tools", "productivity"]
noindex: false
---

A harder question does not automatically get a stronger model. On Free and Go, the Think button keeps you on GPT-5.6 Luna and gives that model more time. On Plus and Pro, a Thinking slider moves GPT-5.6 Sol from Instant to Medium or High. Asking ChatGPT to “think harder” in the prompt does not flip that control for you.

OpenAI shipped the split on 6 August 2026. Plus and Pro got the updated Sol chat model and the slider that day. Free and Go moved to Luna as the default that week, then gained unlimited everyday text chats and Think the following week, subject to abuse guardrails. The Help Center still documents the same split.

## Match the control to your plan

Instant is the fast path. On eligible paid plans it runs on GPT-5.6 Sol. On Free and Go it runs on GPT-5.6 Luna. Medium and High are standard and extended thinking on Sol. Extra High is the top Sol thinking level. Pro is a separate model slot for harder, longer work: GPT-5.6 Sol Pro, and GPT-6 Pro on plans that include it.

OpenAI’s plan table is the part people miss:

- Plus includes Medium and High. It does not include Extra High or the Pro model slot.
- Pro, Business, and Enterprise include Medium, High, Extra High, and Pro. Workspace admins can still hide models.
- Free and Go do not include Sol thinking. Think uses Luna, not Sol.

Logged-out chats also skip Sol. Enterprise workspaces may still show the older model picker until the new controls reach that workspace.

![Person typing on a laptop at a desk](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## Use Think on Free and Go

1. Sign in. A logged-out window will not give you Sol, and it will not give you the signed-in Luna controls either.
2. Start a normal text chat. Instant on these plans is Luna.
3. For a question that needs several steps, dates, or a comparison, select Think before you send. OpenAI’s Help Center is explicit: Think uses GPT-5.6 Luna, not GPT-5.6 Sol.
4. Read the answer, then ask one follow-up that names the missing constraint. Luna is tuned to update the recommendation instead of repeating the whole reply.
5. If a limit message appears, wait for the reset time ChatGPT shows, or stay on Instant. Support does not reset usage limits.

Unlimited here means everyday text chats, with abuse-prevention safeguards. File uploads, image generation, voice, data analysis, and other tools still have separate limits. Do not treat a long text thread as proof that image or voice quotas moved.

OpenAI’s internal check on financial, medical, and legal prompts found responses with at least one factual error about 62 percent less common on Luna, and about 68 percent less common on Sol, than on GPT-5.5 Instant. That is an internal evaluation of a prompt set, not a guarantee for your question. Still check dates, prices, and rules against the source.

## Set the slider on Plus and Pro

Plus and Pro use the Thinking slider on web, mobile, and the desktop app. On those plans Instant does not climb to a higher level just because the request looks hard. A sentence such as “think deeply” will not switch the level. ChatGPT can still switch on its own for safety.

1. Open a chat and find the Thinking control in the model picker. On web, the older Higher intelligence toggle is not the control OpenAI points you to. Use the picker.
2. Leave Instant on for a short factual question, a rewrite, or a list you will edit yourself.
3. Move to Medium when you want a plan, a comparison, or a draft with a clear recommendation.
4. Move to High for research, coding in Chat, or a decision that depends on numbers and constraints. Plus stops here.
5. On Pro, use Extra High when Medium and High still miss a step. Use the Pro slot only for the long task. That slot is Sol Pro, or GPT-6 Pro where your plan includes it.
6. Send the prompt. If you hit a Thinking limit, ChatGPT may continue on another available model. The reset time appears when OpenAI has one to show.

Business keeps a related switch under Settings, then General: Higher intelligence. That setting decides whether Chat can add thinking while Instant is selected. It is not the same as the Plus and Pro slider. Admins can also limit which models a role can see.

![Code and notes on a computer screen](https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80)

## Keep Chat separate from Work and Codex

The August Sol update applies to Chat. OpenAI said the Sol build that powers Work and Codex did not change in that release. Help Center still lists Sol, Terra, and Luna in Work for Plus, Pro, Business, and Enterprise, and Terra in Codex for Free and Go. You cannot pick Terra or Luna inside a standard Chat thread. Developers can call them from the API.

If you need Astra or GPT-6.1 Sol, look in Work or Codex, not in the Chat slider. Plus includes GPT-6 Astra in Work and Codex, not as a Free-style Think upgrade. Usage and credits there are separate from Chat. Our guide to [GPT-6 Sol and Luna in Work](/blog/chatgpt-gpt-6-sol-luna-work-setup/) covers that surface.

On Pro $200, hitting the GPT-6 Pro weekly limit switches Chat to GPT-5.6 Thinking at Medium. Sol Pro stays available only while its daily allowance and the combined daily allowance still have room. On Pro $100, GPT-6 Pro and Sol Pro share one weekly allowance. Switching models does not refill it. Business Standard and Premium also share the included allowance across those two models.

## Check the answer before you act on it

Sol in Chat is meant to answer the real question first, drop extra formatting, and correct you when agreement would be wrong. That is useful. It is not a reason to skip the source.

- Name the date, place, and constraint in the first message. A follow-up should add one fact, not restart the brief.
- For money, health, or legal wording, paste the clause or the figure you care about and ask which sentence supports the claim.
- If the reply cites a product limit, open the Help Center article for your plan. Model menus move faster than blog recaps.
- On a managed workspace, ask an admin before you assume Extra High or Pro is missing because of a bug.
- Update the desktop app with Menu, then Check for Updates, if Astra or a newer Codex model is missing. Astra in the Codex CLI needs version 0.153.0 or later. GPT-5.6 in Codex needs desktop Codex mode 26.707.30751 or CLI 0.144.0.

GPT-5.6 follows the normal ChatGPT country list. It is not a separate region launch. Eligible users in the EEA, Switzerland, the UK, and the UAE can use it when the plan includes it. A workload set to UAE inference residency is a different case: OpenAI says GPT-5.6 is not supported for that residency configuration.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/ELh8R7bGlxE"
    title="Sol, Terra, and Luna, our GPT-5.6 family of models are here."
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What to do when the control is missing

Confirm you are on the account that pays for the plan. Free and Go will not show Sol thinking, even if a teammate’s screenshot does. A Business or Enterprise member should ask whether the admin enabled the model for that role.

If Instant feels thin, raise the slider or tap Think. Do not paste “use a smarter model” and expect the picker to move. On Plus and Pro, OpenAI says that request will not change the thinking level.

If a higher-risk biology or cybersecurity prompt is refused, that can be a safeguard rather than a broken slider. Legitimate work in those areas sometimes needs a narrower, clearly authorized prompt. The August system card describes extra training for users OpenAI believes are under 18, including limits on romantic role-play, age-restricted challenges, and presenting the model as a stand-in for a real relationship.

## Pick a level and send the next message

Use Instant for the short question. Use Think when you are on Free or Go and the answer needs more steps. Use Medium or High on Plus when the draft has to hold up. Save Extra High and the Pro slot for plans that include them, and keep Work and Codex on their own menus.

The useful habit is small: set the control, state the constraint, then check the fact that would be expensive to get wrong.

## Sources

- OpenAI, “Improving GPT-5.6 Sol in ChatGPT—and expanding access to GPT-5.6 Luna for free users,” 6 August 2026: https://openai.com/index/improving-gpt-5-6-sol-in-chatgpt/
- OpenAI Help Center, “GPT-5.6 and GPT-6 Pro in ChatGPT”: https://help.openai.com/en/articles/20001354-gpt-56-and-gpt-6-pro-in-chatgpt
- OpenAI, GPT-5.6 family video: https://www.youtube.com/watch?v=ELh8R7bGlxE
