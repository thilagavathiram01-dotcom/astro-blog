---
title: "How to Set Up Google Labs CC for Household Groups"
description: "Set up Google Labs CC for a US household group: join the waitlist, add up to six adults, and share only the emails and files you choose."
pubDate: 2026-10-05T16:45:00
heroImage: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "google", "how-to", "productivity"]
noindex: false
---

Google Labs rebuilt CC as a household agent on September 17, 2026. The experiment gives the agent its own verified Google account, then lets up to six adults share only the mail, files, and calendars they choose. The morning result is a shared brief called Your Day Ahead.

CC is not the same product as [Gemini Daily Brief](/blog/gemini-daily-brief/). Daily Brief came out of the earlier personal CC experiment and lives in the Gemini app. The new CC is a Google Labs group agent for people 18 or older in the United States who use a personal Google account. Work and school accounts are outside the current offer.

## What the household agent can and cannot see

Tom Shane, senior product manager for Google Labs, described the permissions model in the launch post. CC only sees what each member chooses to share. A school newsletter, a swim-center email, or a vet reminder can be shared. The rest of an inbox stays private unless that person opts in.

The agent has its own account so it can show up on a shared calendar and in group mail as CC, not as one parent’s address. Google says it only responds to group members and will not take action or share information outside the group without permission.

Each CC runs on an isolated cloud computer that uses Google’s Antigravity agent harness and current Gemini models. That setup is how Google says the agent can pre-fill a registration PDF, check drive times through the Maps API, or create a Doc or Sheet. It is still an experiment. Google has not published independent accuracy numbers for form filling or calendar extraction.

![Family reviewing a paper schedule together at a kitchen table](https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=800&q=80)

## Join the waitlist or accept the upgrade email

New users join at [labs.google/cc](https://labs.google/cc). Google says the experiment is available on web and mobile for eligible personal accounts in the U.S. If you used the earlier personal CC, Google said existing users would get an email to upgrade the account. Wait for that message rather than creating a second personal agent.

Use these checks before you invite anyone else:

1. Confirm the account is a personal Gmail account, not a Workspace or school account.
2. Confirm the account holder is 18 or older. The launch post limits the experiment to adults.
3. Open the waitlist page or the upgrade email on the account that should own the group.
4. Read the sharing controls before you connect Gmail. CC does not get a blanket inbox scan.

If the waitlist is closed or the upgrade email has not arrived, stop there. There is no public API key or admin console setting that turns CC on for an ineligible account.

## Add members, then decide what each person shares

Google says a group can include up to six members. The owner adds adults who also meet the personal-account and age rules. Each person controls their own sharing and can change it later.

Google documents three ways to feed the agent:

- **Auto cc.** Pick senders you always want shared, such as a school or a travel booking address. Each week, Google says you also get a private list of new senders you can choose to share.
- **Send it to CC.** Forward a one-off email, or send a photo of a party invite or practice schedule by email or Google Chat. CC can then update Calendar from that item.
- **Share a Drive folder, files, or a calendar.** Dump invitations and forms into a folder shared with CC, or add CC to a calendar you want it to see.

Do not share a whole mailbox to “save time.” Start with two or three senders. Review the weekly sender list before you expand it. A shared Drive folder should hold logistics only, not tax files or medical records, unless every adult in the group agrees those files belong there.

![Printed planner and pen used to track weekly tasks](https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80)

## Use the morning brief, calendar, and tasks

Once shared mail and files exist, Google says CC sorts them into a shared Your Day Ahead brief delivered to the inbox. The brief is meant to show who needs to be where, what still needs doing, and what CC already completed the day before.

Calendar and Tasks are the second layer. Google says CC pulls dates and to-dos from shared group information into a family calendar or task list and updates them when plans change. Treat those entries as drafts until a person confirms them. A practice time pulled from a photo can be wrong if the image is cropped or the date is ambiguous.

For longer chores, Google lists examples that still need a person in the loop: permission slips, activity registration PDFs, school-supply lists, and weekly meal plans. CC asks for missing details and stores household memory, such as a usual grocery list or a favorite restaurant, separately from personal details such as a dietary preference or a time zone.

A practical first week looks like this:

1. Share one recurring sender, such as a school office address.
2. Forward one invitation photo through email or Chat.
3. Read the next Your Day Ahead brief and correct any wrong time before anyone relies on it.
4. Ask CC to draft a supply list or meal plan, then edit the Doc or Sheet yourself.
5. Remove a sender if the brief starts including mail you did not mean to share.

## What stays with you

CC can request permission before it fills a form or acts on a task. Google says it will not share information outside the group without permission. That still leaves household risk: every member who can see the shared brief can see logistics another adult chose to share. Agree on a rule before the first invite. School pickup notes may be fine. Banking alerts are not.

Memory is split on purpose. Household facts can be reused for the group. Personal facts should stay with the person who shared them. If a brief mixes those up, correct it in the chat or mail thread and narrow sharing.

CC connects to Gmail, Chat, Docs, and Calendar. It is not a replacement for Gemini skills, Workspace admin controls, or Daily Brief. If you only need a personal morning summary, stay with [Daily Brief setup](/blog/gemini-daily-brief-setup/) instead of inviting a group.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/nDe15OvKGCI"
    title="Google’s CC Is Now a Family AI Agent—What Households Should Know"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips before you rely on it

Keep the group small at first. Two adults can test sharing before you add the rest of a six-person cap. Use a dedicated Drive folder named for logistics so CC is not pointed at an entire My Drive.

Review the weekly private sender list. That list is the easiest way to catch a new address before it becomes a standing share. Turn off auto-cc for any sender that sometimes includes private threads.

Confirm calendar writes. A shared brief is useful. An unreviewed event on a family calendar can send someone to the wrong field. Google describes CC as an early experiment, so expect misses on messy PDFs and photos.

Background on the product shift is in our earlier note, [Google Labs CC as a family agent](/blog/google-labs-cc-family-agent/). This guide is the setup path: waitlist or upgrade email, member invites, narrow sharing, then a checked brief.

## Bottom line

CC is a U.S. Labs experiment that puts a verified Google account in the middle of a household group of up to six adults. You join the waitlist or accept the upgrade email, add members, and share specific senders, files, or calendars. The agent can draft a morning brief, calendar items, tasks, lists, and forms. You still approve what it sees and what it sends.

## Sources

- [Google Labs: The new CC, an AI agent built for families](https://blog.google/innovation-and-ai/models-and-research/google-labs/cc-expanding-to-groups/) (September 17, 2026)
- [September 2026 AI updates, Google Blog](https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-september-2026/) (October 2, 2026)
- [CC waitlist](https://labs.google/cc)
