---
title: "How to Use ChatGPT Voice Plugins on Android Today"
description: "Set up ChatGPT Voice plugins on Android, iOS, and web. Official steps for Live, Work, Gmail, Calendar, and Slack."
pubDate: 2026-09-25T08:30:00
heroImage: "https://images.unsplash.com/photo-1590650153855-d9e8087c5178?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["chatgpt", "ai-tools", "tutorials", "how-to", "android", "productivity"]
noindex: false
---

ChatGPT Voice can now call the same plugins you already use in text chat. OpenAI shipped the change on 23 September 2026 for web, iOS, and Android.

You can ask Voice to check Gmail, read a calendar, or look at Slack without dropping back to the keyboard. Written replies still appear in the chat so you can review what happened.

This guide follows OpenAI’s Voice help article and the official release notes. Connect accounts first if you have not already. See [How to Connect Multiple ChatGPT Plugin Accounts](/blog/chatgpt-plugins-multiple-accounts/) for the extra-login flow.

## What OpenAI enabled on 23 September

Live Voice supports the plugins and connected apps available to your account. Free and Go users can use Voice in Chat with the plugins their plan allows.

Voice in Work is separate. It needs both Voice access and Work access. You can ask it to create documents, presentations, and spreadsheets, use connected apps, or work in a browser. If you end the call while a task is running, the task can continue in text.

Existing app connections, permissions, and usage limits still apply. Voice does not grant extra scopes on its own.

OpenAI’s product post also notes that Voice can be powered by GPT-6 Astra, Sol, and Luna where those models are available to the account.



![Person speaking into a phone during a work call](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)



## What you need before you start

Use a current ChatGPT app on Android or iOS, or an updated browser session on ChatGPT.com. Sign in to the same account that already holds your plugin connections.

Open **Settings → Voice** and select **Live**. Live is powered by GPT-Live-1 or GPT-Live-1 mini, depending on your plan. Live can use plugins. It does not support video or screen sharing.

If you need the camera or screen share, switch to **Advanced**. That mode is the older real-time Voice path and is not the plugin path described here.

Connect each app in **Settings → Plugins** (some accounts still label this **Apps**) before you speak. Voice will prompt you to sign in if a tool is missing, but finishing OAuth on a small phone screen mid-call is slower than doing it first.

Workspace admins can still block plugins. Business, Enterprise, Edu, and Healthcare access depends on those settings.

## Start Live Voice on Android

1. Open the ChatGPT app and stay in **Chat** (not Work) unless you intend to run a Work task.
2. Tap the **Voice** icon in the message bar.
3. Allow microphone access if Android asks.
4. Choose a voice the first time you use Voice.
5. Start speaking. Live can listen and talk at the same time, so you can interrupt.

Mute with the on-screen microphone control. Exit with the end-call control. The transcript stays in the same chat.

On the web the same Voice icon sits in the prompt window. Allow the browser microphone when asked.

Turn on **Background conversations** under **Settings → Voice** if you want the call to continue while the phone is locked or you switch apps.

## Ask Voice to use a plugin

Name the tool and the action. OpenAI’s help page says to ask ChatGPT to use a plugin available to your account during the Live conversation.

Examples that match documented plugin families:

- “Use Gmail. Find unread messages from the landlord sent this week.”
- “Check Google Calendar for tomorrow morning and list conflicts.”
- “Search Slack for the deploy thread in #eng from yesterday.”

Be specific about the account if you connected more than one. Say “work Gmail” or “personal Calendar” so Voice does not pick the wrong inbox.

If an action needs approval, Voice shows an on-screen prompt on web and mobile. Tap approve or decline. Spoken approval is not supported.

You can type or attach a supported image while Live is open. Use the add button in the message bar. Live cannot currently pull files from ChatGPT Library.



![Laptop and notebook ready for a spoken work session](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80)



## Use Voice inside ChatGPT Work

Switch the product to **Work**, then start Voice from that surface. OpenAI lists Voice in Work on web and mobile as of 23 September 2026.

Ask it to draft a document, build a spreadsheet, assemble slides, or drive a browser task. Work tasks also count toward normal Work usage, not only the Voice clock.

When you hang up, an unfinished task can keep running in text. Open the same Work thread to check progress instead of starting a second session.

Voice in the macOS and Windows desktop app is a third surface. There you can start tasks, check agent progress, and coordinate more than one agent. Desktop Voice has its own pricing page and limits.

## Usage limits that still apply

Live in Chat is measured over a rolling 24-hour window. ChatGPT notifies you when you hit the cap.

OpenAI’s current Voice help table lists:

- Free: limited GPT-Live-1 mini access; limits may change
- Go: 3 hours with GPT-Live-1 mini
- Plus: 3 hours with GPT-Live-1
- Pro ($100/month): 15 hours with GPT-Live-1
- Pro ($200/month): unlimited GPT-Live-1

Business Standard matches the 3-hour GPT-Live-1 allotment, with extra minutes billed in credits. Business Premium matches the 15-hour allotment. Enterprise and Edu follow workspace pricing.

Voice in Work follows the same Voice limits and also consumes Work usage. Plugin actions still honor the connected app’s own quotas.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/96ogPwN9ykM"
    title="Get Stuff Done with ChatGPT Voice — OpenAI"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical prompts that stay inside the docs

Keep requests to information lookup, summaries, and actions your plugin already allows in text.

- “Read my work Calendar for Thursday and suggest two 30-minute gaps.”
- “Draft a short Slack reply confirming the 3 p.m. standup, then wait for me to approve send.”
- “List the last three invoices in Gmail from Acme and read the totals.”

Stop and take over in text if the model starts a write action you did not want. Revoke a plugin in Settings if a connection should not stay live on a shared phone.

For model choice in older Voice chats, [ChatGPT Voice with GPT-5.6 and GPT-6 Astra](/blog/chatgpt-voice-gpt-5-6-astra/) covers the September 9 model and limit update.

## Data and safety notes

Audio clips from Live are stored with the chat transcript and retained for 30 days. Deleting the chat also queues those clips for deletion within 30 days, subject to OpenAI’s privacy policy exceptions.

OpenAI does not train on the audio clip unless you turn on the account toggles that share recordings. Transcripts can still be used for training when **Improve the model for everyone** is on, depending on plan and settings.

Business, Enterprise, and Edu workspaces cannot share Voice audio or video clips for training.

Do not speak passwords, one-time codes, or card numbers into Voice. Plugin write actions that move money or send mail should stay behind the on-screen approval step.

## Tips that reduce failed calls

Use Live, not Advanced, when the goal is plugins. Advanced keeps camera and screen share but is not the path OpenAI documents for Live plugins.

Connect apps on Wi-Fi before you leave the desk. OAuth redirects fail more often on flaky mobile data.

Name the plugin in the first sentence. Vague requests such as “what’s on tomorrow” may search the web instead of Calendar.

If Voice keeps interrupting you, pause a half-second after you finish a clause. Live is built for overlap, but noise and Bluetooth headsets still cut phrases short.

Check the transcript before you treat a spoken summary as final. OpenAI states that Voice transcripts are not a verbatim record of the audio.

## Conclusion

Voice plugins close the gap between talking to ChatGPT and getting work out of Gmail, Calendar, Slack, and Work tools. Connect the apps once, switch Voice to Live, and approve write actions on screen.

Start with a read-only prompt on Android today. Add Work Voice only after you confirm both Voice and Work are enabled on the plan.

## Sources

- [ChatGPT release notes (23 September 2026)](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)
- [ChatGPT Voice help](https://help.openai.com/en/articles/20001274-chatgpt-voice)
- [Get Stuff Done with ChatGPT Voice (OpenAI on YouTube)](https://www.youtube.com/watch?v=96ogPwN9ykM)
- [OpenAI on X, 23 September 2026](https://x.com/OpenAI/status/2102808325742322002)
