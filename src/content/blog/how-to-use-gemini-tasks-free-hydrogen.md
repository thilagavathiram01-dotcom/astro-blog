---
title: "How to Use Gemini Tasks Free with Gemini 4 Hydrogen"
description: "Step-by-step guide to using free Gemini Tasks powered by Gemini 4 Hydrogen for calls, shopping, and productivity in six countries."
pubDate: 2026-11-18T10:30:00
heroImage: "https://images.unsplash.com/photo-1746608943132-065d1d4b3c5d?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "how-to", "productivity", "google"]
noindex: false
---

Google made Tasks in the Gemini app free on November 17, 2026, for users in the United States, Japan, South Korea, Canada, Australia, and India. The feature runs on Gemini 4 Hydrogen, Google's fast model for everyday agentic work. You switch from Chat to Task, describe a multi-step job, and Gemini handles it in the background.

This guide shows how to start using it, what it can do today, and how Google protects your data. Developers building with Hydrogen can also check our guide on [adding Gemini 4 Hydrogen to Android with Firebase AI Logic](/blog/add-gemini-4-hydrogen-android-firebase-ai-logic/).

![Person holding smartphone showing AI assistant interface](https://images.unsplash.com/photo-1746608943132-065d1d4b3c5d?auto=format&fit=crop&w=800&q=80)

## What Gemini Tasks can do

Tasks mode turns Gemini into a personal assistant that finishes work instead of only answering questions. Google shared real examples from the Gemini team.

One user asked Gemini to schedule a minivan service. It called two nearby dealerships, checked the calendar for free slots, and booked an early Friday morning appointment in under five minutes. Gemini discloses that it is an AI on the call.

Another example involved a surprise utility bill. Gemini accessed past statements through Google Password Manager, analyzed the PDFs, and identified that a heat pump was running during peak pricing hours.

You can also ask it to compare products, apply discount codes, and check out with Google Pay. Receipts go to Google Wallet. Gemini connects to more than 60 apps for grocery orders, calendar updates, and more.

Advanced actions such as phone calls, Google Pay checkout, texting Gemini, and email forwarding start in the United States. Calling is unavailable in Indiana, Louisiana, Minnesota, Montana, and Nebraska.

## How to start a task

Open the Gemini app on Android or iOS, or go to gemini.google.com. On the home screen you will see a toggle between Chat and Task. Tap Task.

Describe the job in plain language. Include any deadlines or preferences. Gemini may ask clarifying questions. For purchases it is designed to pause and confirm before clicking Buy. You can set a hard spending limit in advance.

For routine actions you trust, such as adding items to a grocery cart, you can choose Always allow so it does not interrupt every time.

Starting in the United States you can also forward emails to gemini@google.com. Gemini extracts dates and adds them to your calendar. To text Gemini:

1. Open the Gemini app.
2. Tap Settings.
3. Tap Channels.
4. Tap Set up under Text with Gemini.
5. Verify your phone number. You need a US number on an eligible carrier.

![Smartphone screen displaying popular AI app icons including Gemini](https://images.unsplash.com/photo-1757310998309-87a97e562ee5?auto=format&fit=crop&w=800&q=80)

## Security and data protection

Each task runs inside a hardware-isolated virtual machine on Google Cloud's Agent Compute Engine. The environment is dedicated to your account and sandboxed. Google tests it with red teams.

Additional layers include prompt-injection filters and Google Safe Browsing. Gemini does not share payment details or private account information unless you explicitly approve it.

You can review or delete chat history, disconnect apps, and adjust task settings at any time. Google published a technical paper on its defense-in-depth approach for these agentic systems.

If you see a mistake, tap the thumbs-down icon and provide feedback. The team notes that some websites still treat automated agents as bots, so Gemini may hand the final click back to you on certain sites.

## Tips for better results

Be specific. Include the outcome you want, any constraints, and relevant account details Gemini already has access to. Connect Google Workspace, Password Manager, and payment methods for fuller capability.

Start with low-stakes tasks such as adding calendar events from forwarded emails or comparing product options. Once you see consistent results, move to calls or purchases.

Monitor the first few tasks. You can jump in with additional instructions at any point. Gemini is designed to ask before irreversible actions.

For developers, Hydrogen is available on the free and paid Gemini API tiers at $1.50 per million input tokens and $7.50 per million output tokens across its full 1 million-token context. Higher thinking levels improve multi-step agent performance.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/ntVTAaHL5KM"
    title="How to Use Google Gemini Step by Step (It Can Do Your Work Now)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Availability and requirements

Tasks is free for personal Google Accounts of users aged 18 or older in the six countries listed. History must be turned on. Outside those countries the feature still requires a Google AI Pro or Ultra subscription, and some regions remain excluded even for paid users.

The rollout uses Gemini 4 Hydrogen. Free users in the Gemini app cannot always select Hydrogen manually; Auto mode may route harder prompts to it. In Search, Hydrogen is available more broadly.

## Conclusion

Gemini Tasks is now free for hundreds of millions of people in six countries and powered by Gemini 4 Hydrogen. Switch the toggle from Chat to Task, describe the work, and let Gemini handle calls, shopping, calendar updates, and bill analysis while you focus on other things.

Connect your Google accounts, start with simple jobs, and review the results. The combination of agentic execution and hardware-isolated security makes it one of the more practical personal AI assistants available today.

**Sources**

- Blog.google: Put Gemini to work for you (November 17, 2026)
- Google Gemini official announcement on Tasks availability
- Gemini 4 Hydrogen model introduction (November 12, 2026)
- Firebase AI Logic documentation for Hydrogen
