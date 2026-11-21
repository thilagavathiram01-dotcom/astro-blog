---
title: "How to Use Tasks in Gemini for Multi-Step Help"
description: "Assign multi-step Tasks to Gemini free in supported countries. Official steps, limits, safety controls and practical tips."
pubDate: 2026-11-21T10:00:00
heroImage: "https://images.unsplash.com/photo-1773332585698-cba3c91b73e4?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "how-to", "ai-tools", "productivity"]
noindex: false
---

Gemini now handles longer projects while you do something else. Tasks mode lets you describe a goal once. Gemini plans the steps, works in the background, and checks with you before important actions.

The feature rolled out free on 17 November 2026 for users in the United States, Japan, South Korea, Canada, Australia and India. It runs on Gemini 4 Hydrogen. Advanced options start in the U.S. This guide covers the official steps, requirements and limits.

## What Tasks Can Do

Tasks are built for multi-step work that would otherwise take many clicks or phone calls. Examples from Google’s announcement include booking a car service appointment, analysing utility bills, comparing products and checking out, adding items to a grocery order, and extracting dates from school emails into Calendar.

Gemini can connect to more than 60 apps. It uses Personal Intelligence when enabled so it already knows relevant details such as vehicle type or location. In the U.S. it can make calls (with disclosure that it is an AI), use Google Pay for purchases under a spending cap you set, and receive tasks by email or text.

Only the text of conversations and permitted app data move with the task. You stay in control of confirmations.

![Person working at a desk with laptop and phone](https://images.unsplash.com/photo-1758598304525-c2bc7aada66d?auto=format&fit=crop&w=800&q=80)

## Requirements and Availability

You need:

- A personal Google Account (work, school and supervised accounts cannot use Tasks).
- Age 18 or older.
- History turned on in Gemini.
- The Gemini app or gemini.google.com.

Free access is available in Australia, Canada, India, Japan, South Korea and the United States. Everywhere else that Gemini Apps are supported, Tasks require a Google AI Pro or Ultra subscription, except in the EEA, Nigeria, Switzerland and the United Kingdom where the feature is not offered.

You can run up to 15 Tasks at the same time. Usage still counts against your overall Gemini compute limits, which are higher on paid plans. Schedules have their own caps (10 active on free or Plus, 50 on Pro/Ultra).

## How to Start a Task

1. Open the Gemini app or go to gemini.google.com and sign in.
2. On the home screen, flip the toggle from Chat to Task. On mobile the control sits above the input box; on web it appears below.
3. The prompt changes to ask what you need done. Describe the goal clearly. Include any constraints such as a spending limit, preferred time or required confirmation.
4. Send the request. Gemini creates a plan and begins work in the background.
5. Watch progress in the chat or via notifications. You can add more instructions at any time.
6. Gemini pauses for confirmation before high-impact steps such as clicking Buy or sending a message. You can set “Always allow” for routine actions you trust.

In the U.S. you can also forward emails to gemini@google.com or set up texting:

- Open Gemini on Android or iOS.
- Tap Settings, then Channels.
- Tap Set up under Text with Gemini.
- Verify your phone number.

Once set up, you can text a task and continue the conversation later in the app.

## Safety and Privacy Controls

Tasks run inside Google Cloud’s Agent Compute Engine. Each session uses a hardware-isolated virtual machine dedicated to your account. Additional layers include prompt-injection filters, Google Safe Browsing link rules, and Policy Guardian checks on commands and file edits.

Gemini is designed to ask for confirmation before critical actions. It discloses that it is an AI when it calls a business. Businesses can opt out of receiving AI calls. Payment and private account details are not shared unless you explicitly allow them.

You can adjust Task settings, disconnect apps, or delete history at any time. Google published a technical paper on the multi-layer defence-in-depth approach the same day as the Tasks announcement.

## Practical Tips

Start with a single, well-defined goal. “Book the earliest Friday morning oil change at the two nearest Honda dealers and add it to my Calendar” works better than a vague request.

Review the plan Gemini shows. Jump in if a step looks wrong. After the Task finishes, check the result (Calendar event, order confirmation, or summary) before you rely on it.

Set a hard spending cap for any purchase Task. Confirm the final amount. Receipts land in Google Wallet.

If you also use Personal Intelligence, Tasks can pull relevant context without you repeating details. See our guide on [transferring chat history and memory into Gemini](/blog/how-to-transfer-chat-history-gemini/) if you want to bring preferences from another assistant first.

For complex analysis that benefits from stronger reasoning, Pro and Ultra users can switch the model to Gemini 4 Neon while in Task mode. Neon handles multi-step jobs more quickly than larger models while stretching usage limits.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/BcSGxlw6dSg"
    title="Go From Chaos to Calm with Tasks in Gemini"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

![Apple laptop and smartphone on a wooden desk](https://images.unsplash.com/photo-1781871522095-3bb9439f3bbe?auto=format&fit=crop&w=800&q=80)

## Limits and Troubleshooting

Concurrent Tasks are capped at 15. If you hit the limit, wait for one to finish. Schedules will not start if 15 Tasks are already running.

Free users in supported countries still face the standard Gemini compute limits. Complex Tasks consume more quota. Paid plans raise those ceilings.

If a Task fails or looks incomplete, give it a thumbs-down so Google can improve the system. You can delete an individual Task or clear history. Re-try with clearer instructions or after connecting the required app.

Availability can vary by region and account type. If the Chat/Task toggle does not appear, confirm you meet the age, account and History requirements, then check again later.

## Conclusion

Tasks turn Gemini from a conversational helper into a background assistant that finishes multi-step work. Flip the toggle, describe the goal, and stay in the loop for confirmations. Free access in six countries and clear safety controls make it practical to try on real chores such as appointments, bills or grocery orders.

Check that History is on, start with one simple Task, and confirm the outcome. Once the basics work, connect additional apps and set spending caps for purchases. The feature continues to expand, so the same steps will apply as more capabilities roll out.

## Sources

- Google Blog: Put Gemini to work for you / How to use Tasks in Gemini (17 November 2026)
- Gemini Apps Help: Create & manage schedules for tasks in Gemini
- Gemini Apps Help: Manage your tasks & workflows in Gemini Apps
- Google Blog: How Gemini’s defense-in-depth approach works (17 November 2026)
