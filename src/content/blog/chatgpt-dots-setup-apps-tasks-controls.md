---
title: "ChatGPT Dots Setup Guide: Apps, Tasks, and Controls"
description: "Set up ChatGPT Dots on desktop, connect apps, assign tasks, and set custom rules. Covers Pro, Business Premium, and Enterprise access."
pubDate: 2026-10-02T14:05:00
heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["chatgpt", "ai-tools", "tutorials", "how-to", "productivity"]
noindex: false
---

ChatGPT Dots are always-on agents that keep working after you close the chat. OpenAI started rolling them out on 29 September 2026, powered by GPT-6 Astra, with a cloud computer and access to the apps you choose to connect. This guide covers who can create a Dot, how to set one up on desktop, and the controls that decide what it can do without asking.

A regular ChatGPT thread waits for your next message. A Dot can take an ongoing goal, work between conversations, and bring results back for review. OpenAI says the first Dot is included in eligible Pro and Business Premium plans at no extra cost. Deeper work still draws on a plan allowance, with extended limits for the first month after launch.

## Who can use Dots right now

Access is plan- and region-specific. OpenAI’s help center lists three paths:

- **Pro:** rolling out in markets excluding the European Economic Area, Switzerland, and the United Kingdom.
- **Business Premium:** available across supported ChatGPT regions.
- **Enterprise, including Edu and Healthcare:** a beta that stays off until a workspace admin turns it on.

Rollout is gradual. OpenAI notes that access can take several days to reach an account even after the plan qualifies. You cannot create a Dot on the mobile app or on mobile web. After it exists, you can talk to it in the ChatGPT mobile app when mobile access is available for your account.

Specialist Dots, with their own identity for company systems of record, are a separate enterprise preview. This guide covers the personal Dot.

![Person working at a laptop in a bright workspace](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Step 1: Create the Dot on desktop

Open ChatGPT in the desktop app or in a desktop browser. Start the Dot introduction and follow the prompts. You can name it during setup. The default handle is `@yourname-dot`. After you name it, the handle becomes `@yourname-agentname`.

You can pick from available characters or select a pet. The Dot may also generate a pet. To change the name or avatar later, open its profile, then use the pencil icon.

Skip app connections if you want a narrower first session. You can add them later. Messaging channels such as Slack or texting are set up from desktop, not from the phone.

## Step 2: Connect apps and decide on computer access

Plugins are how a Dot reaches mail, calendars, files, and other tools. OpenAI’s product page says the plugin ecosystem can connect to more than 4,000 apps. Available apps still depend on your account and region.

On mobile, open the Dot’s profile and go to **Customize → Plugins**. Select a supported app and read its permissions before you connect it. That Plugins screen uses shared ChatGPT settings, so a connection is not isolated to the Dot alone.

Disconnecting an app later does not wipe information the Dot already pulled from it. OpenAI says you need to delete the Dot to remove that stored information.

The Dot has its own cloud computer. Access to your local machine starts turned off. To allow it, use the ChatGPT desktop app on that computer and confirm **Allow access**. Work on the local computer runs as separate tasks in the sidebar. With access on, the Dot can create Work or Codex tasks, use local skills, and use your local browser when its cloud browser is blocked. Confirm **Revoke access** to stop local file access and local work.

You can also point the Dot at a Codex cloud environment, but you must create that environment in Codex first.

If you are wiring plugins for ordinary ChatGPT chats as well, the setup steps overlap with the [ChatGPT plugins guide after DevDay 2026](/blog/chatgpt-plugins-after-devday-2026/).

## Step 3: Give it a task and check progress

Describe the outcome and the details it needs. Useful first jobs are ones you want tracked, not one-off trivia: review tomorrow’s calendar, collect notes on a topic, or remind you before a deadline. Reply in the same conversation to add context or change the request. Attach a file or photo with the **+** button.

Open the Dot’s profile on desktop to review **In progress**, **Scheduled**, and **Completed**. You can open its computer from the profile and interact with it. On mobile, that computer opens in your control.

Ask it to set a reminder or a recurring check, such as a morning calendar summary. Scheduled runs and proactive updates show up in the conversation. Manage a scheduled task from Recent activity in the profile, or from the Scheduled section in ChatGPT. You can change the repeat schedule, time, and completion notifications, and you can review active, paused, and completed tasks.

![Team reviewing work together at a shared table](https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80)

## Step 4: Set custom rules before it acts alone

A Dot can research in the background, suggest help, and form memories from connected apps even when you have not asked a new question. It can also run reminders you already scheduled. That is useful, and it is also why rules matter.

On mobile, open **Customize → Custom rules**. Describe the action, then pick one behavior:

1. **Take action without asking**
2. **Take action if pre-approved** — you explicitly requested that action in the prompt
3. **Ask before taking action**
4. **Hand off to you**

Save with the checkmark, then re-open Custom rules to confirm the rule stuck. OpenAI warns that a Dot can still make mistakes while following those rules. Check important details before you rely on the result.

Memory is shared in one direction and separate in another. The Dot receives ChatGPT memories and can create its own, including from connected apps. On mobile, **Customize → Memory** shows what ChatGPT remembers and uses shared ChatGPT memory settings. Deleting the Dot’s own saved memories requires deleting the Dot.

## Pause, text, and reset

To stop work until you are ready, open the **•••** menu in the profile and select **Pause**. Resume from **Paused • Tap to resume**.

Texting is a limited beta that uses a third-party provider. It is limited to Pro users in the United States and is not available in Business or Enterprise workspaces. Not every Pro account gets it. If it appears, connect your phone from the desktop app. Reply **STOP** to halt outgoing texts. Message and data rates may apply. At launch, a Dot cannot call you, and it cannot have its own standalone email address. You can connect a personal email account so it can use that inbox for tasks.

Reset is permanent for that agent. Open the profile, choose **•••**, then **Reset**. Confirm only after you read the deletion notice. Reset removes the Dot, its conversations, its saved memories, and its scheduled tasks. You land in a new ChatGPT chat and must create another Dot on desktop or desktop web.

## Watch the launch overview

OpenAI’s product video is the short official walkthrough of what a Dot is meant to do: stay available in ChatGPT, Slack, or Teams, take feedback, and keep work moving.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/uXspbC2srEQ"
    title="Introducing dots, always-on agents built to handle everything."
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical limits to set on day one

Start with one recurring task and one connected app. A calendar summary is easier to audit than a multi-app workflow. Leave local computer access off until you need it, then revoke it when the job ends.

Do not treat proactive memory as a filing system you can partially erase. If a connected app exposed something you do not want kept, disconnecting the app is not enough. Reset the Dot.

Enterprise admins should leave the beta off until they have a policy for plugins, specialist Dots, and what employees may approve without review. Personal Pro users in the EEA, Switzerland, and the UK should not expect the consumer rollout yet.

## Conclusion

A Dot is a persistent agent with its own cloud computer, not a renamed chat. Create it on desktop, connect only the apps the first task needs, and write custom rules before you let it act. Pause when you want silence. Reset when you want its memories and schedule gone. Eligibility still depends on plan and region, and OpenAI is rolling access out over days, not all at once.

## Sources

- OpenAI, “Introducing dots,” 29 September 2026: https://openai.com/index/introducing-dots/
- OpenAI Help Center, “Getting started with your dot”: https://help.openai.com/en/articles/20001530-getting-started-with-your-dot
- OpenAI, “Introducing dots, always-on agents built to handle everything,” YouTube, 29 September 2026: https://www.youtube.com/watch?v=uXspbC2srEQ
