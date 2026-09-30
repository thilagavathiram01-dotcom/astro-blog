---
title: "How to Connect Linear to Gemini for Issue Tracking"
description: "Connect Linear to Gemini on a personal US account, @mention the app, and pull high-priority issues from official Connected Apps steps."
pubDate: 2026-09-30T10:00:00
heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "productivity", "google", "how-to"]
noindex: false
---

Linear already holds your issues, cycles, and assignees. Gemini can read that queue from chat if you connect the app and stay inside Google’s eligibility rules.

On 23 September 2026, Google added Linear to a new Connected Apps wave alongside Airtable, monday.com, and Zoho. The official Gemini availability table lists Linear as a way to create, manage, and track issues and project cycles.

This walkthrough uses Gemini Apps Help, the Connected Apps availability table, and Google’s product post. It does not invent extra Linear actions.

## Who can connect Linear today

Google’s Connected Apps table is stricter for Linear than for Gmail or YouTube Music.

You need all of the following:

- A **personal Google Account**. Work and school logins are not listed for Linear.
- Age **18 or over**.
- Use in the **United States**.
- Prompts in **English**.

Supported surfaces in that table include the Gemini web app at gemini.google.com, the Gemini mobile app, Gemini chat, and Gemini Spark. If Linear is missing on your phone but present on the web, that split is expected. Availability still varies by location, language, device, and Gemini app.

If you only want the broader September list, start with the [September Connected Apps setup guide](/blog/gemini-connected-apps-september-2026/). This article stays on Linear.



![Laptop on a desk with code and a project tracker open](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)



## What Gemini is allowed to do with Linear

Google’s short description is the scope you should plan around: create, manage, and track issues and project cycles.

The September Connected Apps post groups Linear under productivity tools that help you manage projects. Google’s public example prompt for this connector is:

> Show all high priority issues assigned to me on Linear.

Treat that sentence as the supported pattern. Ask for issues you own, a cycle you can name, or a status you already use in Linear. Do not assume Gemini can rewrite Linear’s workflow engine or replace the Linear desktop app for every keyboard shortcut.

Connected Apps also follow the general Gemini rules. Gemini can use a connected app on its own when the request is a clear match. You can force the tool by typing `@` and picking Linear. Google’s help page says some apps work automatically and that you can disconnect them at any time on the Apps page.

## Connect Linear from Gemini settings

Do this on a computer first. File uploads and some Skills tools are web-first; Connected Apps setup is more reliable on gemini.google.com even if you later chat on Android.

1. Sign in to [gemini.google.com](https://gemini.google.com) with the same personal Google Account you use on your phone.
2. Open **Settings & help**, then **Apps**. Some builds nest this under **Personal Intelligence → Connected Apps**.
3. Find **Linear** in the list.
4. Turn the connector **on**.
5. Complete Linear’s account-linking screens. Review the permissions before you agree.

You can also start from a chat. Type a Linear request or `@Linear` and, if you are eligible, Gemini can offer a connect button. Google’s availability table notes that asking by name or `@[app name]` is the in-thread path when the app is not linked yet.

Keep **Keep Activity** on if Gemini refuses third-party connectors. Google’s custom-app and many third-party help pages treat Keep Activity as a requirement. Linear’s row does not repeat every global flag, so check the Apps page after you change activity settings.

Disconnect the same way: Settings → Apps → Linear → off. Google Account linking pages also list linked apps if you need to revoke access outside Gemini.

## First prompts that match Google’s examples

Start with read-only questions so you can see what Linear actually returns.

**Assigned work**

- `@Linear Show all high priority issues assigned to me.`
- `@Linear List my issues in the current cycle.`
- `@Linear What is blocked on my board this week?`

**Team scan**

- `@Linear Show open bugs in the Mobile team project.`
- `@Linear Summarize issues marked Urgent that have no assignee.`

**Create or update (only after a read test works)**

Google’s table includes create and manage, so a narrow create prompt is fair once the link is live:

- `@Linear Create an issue titled “Fix login timeout on Pixel 11” in the Android project and assign it to me.`
- `@Linear Move issue ENG-1842 to In Progress and add a comment that QA is blocked on a build.`

Name the team, project, and issue ID the way they appear in Linear. Vague prompts make Gemini guess the wrong workspace.

If the answer cites the wrong team, say so in the next turn and repeat the `@Linear` mention. Skills and Connected Apps can run in the same chat when both are enabled, but Canvas, Deep Research, and several Gem-era tools still do not accept skills. Keep issue work in ordinary chat or Spark.



![Team standup notes next to a laptop in an office](https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80)



## Use Linear from Android after the web link

Once Linear is on for the account, open the Gemini app on your phone. Confirm the avatar is the personal US account you used on the web.

Long-press the power button or say “Hey Google” if Gemini is the default assistant. Then speak the same `@Linear` style request, or type `@` and pick Linear from the app chip.

Gemini cannot use most Connected Apps from Google Messages. Stay in the Gemini app or gemini.google.com.

If Linear never appears on Android, check three things in order: country (US), language (English), and account type (personal). A VPN does not replace Google’s region check.

## Limits you should plan around

**Workspace logins.** Linear’s official row is personal accounts only. Do not expect the same toggle on a company Gemini for Workspace session.

**Age and region.** Under-18 accounts and non-US locations are out of scope until Google updates the table.

**Language.** English-only for this connector. Mixed-language issue titles may still work as identifiers, but the prompt language Google lists is English.

**Not every Gemini surface.** Google Messages is excluded. Features that sit outside chat, such as Canvas or Deep Research, are not the place to drive Linear.

**Permissions.** Linking lets Gemini act with the scopes you approve. Review Linear’s consent screen. Revoke from Gemini Apps or your Google Account linked-apps page if the team no longer wants AI access to the workspace.

**Rollout lag.** Google said the September wave began rolling out on 23 September 2026. A missing row on your Apps page usually means the flag has not reached the account yet, not that you skipped a hidden setting.

## Watch how Connected Apps sit in Gemini chat

Google’s own explainer shows the older Maps and YouTube Music pattern: enable the app, then ask from one prompt box instead of bouncing between tabs. Linear uses the same `@` and Apps-page model.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/NpCNG2-5qAU"
    title="Save time (and tabs) with apps in Gemini. Access Google Maps, YouTube Music and more in one place"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips that keep the queue honest

- Connect Linear on the web, then test one assigned-to-me query before you create issues.
- Always `@Linear` on the first turn of a new chat so Gemini does not invent a list from memory.
- Copy issue IDs from Linear when you update status. Nicknames collide.
- Keep one personal account for this connector. Switching avatars mid-chat drops the link.
- Disconnect Linear when a contractor laptop leaves the team.
- Pair Linear with Calendar only when you need a meeting attached to an issue. Do not stack five connectors in one prompt.

## Conclusion

Linear in Gemini is a US personal-account connector for English issue work. Turn it on from the Apps page, pin it with `@Linear`, and start with Google’s own high-priority assigned-to-me prompt.

When that query returns the same issues you see in Linear, you can create and update tickets from chat. If the toggle is missing, wait for the September rollout or confirm you are not on a Workspace login.

## Sources

- [New connected apps roll out to Gemini (Google blog, 23 Sep 2026)](https://blog.google/innovation-and-ai/products/gemini-app/new-connected-apps-gemini/)
- [Use and manage connected apps in Gemini](https://support.google.com/gemini/answer/13695044)
- [Connected Apps availability and requirements table](https://support.google.com/gemini/table/17434654)
- [Discover and link apps to Google AI](https://support.google.com/accounts/answer/17256443)
