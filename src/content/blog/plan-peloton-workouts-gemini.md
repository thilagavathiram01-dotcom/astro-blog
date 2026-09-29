---
title: "How to Plan Peloton Workouts in Gemini"
description: "Connect Peloton to Gemini, schedule classes, and build multi-day training plans with official @ mentions and Spark tasks."
pubDate: 2026-09-29T14:00:00
heroImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "productivity", "google"]
noindex: false
---

Google added Peloton to Gemini on 23 September 2026 as part of a lifestyle wave of Connected Apps. You can search classes, schedule rides, and ask for a multi-day training plan without opening the Peloton app first.

This guide follows Google’s Connected Apps help pages and the official availability table. It is not a review of Peloton hardware. If Peloton is missing from your list, you are outside the current wave or account rules.

For the rest of that September list, see [How to Use Gemini Connected Apps After the Sept 2026 Wave](/blog/gemini-connected-apps-september-2026/).

## Who can use Peloton in Gemini

Google’s Connected Apps table lists Peloton with a short job: search for and schedule Peloton classes, and create multi-day training plans.

Requirements published there:

- Personal Google Account only (not work or school)
- Age 18 or over
- United States only
- English only
- Gemini web app at gemini.google.com and the Gemini mobile app
- Gemini chat and Gemini Spark modes

Keep Activity must be on for Connected Apps on the web and on iOS. On Android, most third-party connectors also need it. If the setting is off, Peloton will not appear or will refuse the prompt.

Gemini cannot use Connected Apps inside Google Messages. Stay in the Gemini app or the web client.



![Indoor cycling bike in a bright training room](https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80)



## Connect Peloton on the web

1. Sign in at [gemini.google.com](https://gemini.google.com) with the same personal account you use for Peloton if you want class history to match.
2. Open **Settings**, then **Connected Apps**. If you only see **Personal Intelligence**, open that first, then **Connected Apps**.
3. Find **Peloton**. Read **Learn more** before you toggle it on. That page lists supported and unsupported actions for your account.
4. Turn the app on. Complete the sign-in window Peloton shows.
5. Confirm the row shows as connected.

You can also browse the catalog at [gemini.google.com/apps](https://gemini.google.com/apps).

On Android or iOS, open the Gemini app, tap your profile, then Connected Apps (or Personal Intelligence, then Connected Apps). The toggle is the same. Availability still follows the US, English, 18+ rules.

## Call Peloton in a chat

Google’s help article says you can let Gemini pick an app, or force one with `@`.

1. Open a new chat on the web or in the mobile app.
2. Type `@` and choose **Peloton**, or write `@Peloton` plus the request.
3. Submit the prompt.
4. Approve any extra permission card if Gemini asks.

If you skip `@` and Peloton is connected, Gemini may still route a class or plan request to it. Use `@` when the reply looks generic or ignores your subscription.

Example prompts that stay inside the official description:

- `@Peloton find a 30-minute beginner ride I can take tonight`
- `@Peloton schedule a 45-minute power zone class for Saturday morning`
- `@Peloton create a 5-day training plan with two rest days`
- `@Peloton search classes under 20 minutes that focus on recovery`

Do not invent actions Google did not list. The published scope is search, schedule, and multi-day plans. Treat booking a live studio seat, changing billing, or exporting heart-rate files as unconfirmed unless **Learn more** on your account lists them.

## Use Peloton inside Gemini Spark

Spark is Gemini’s task surface. Google documents that Spark can use some Connected Apps when you describe a goal and a time.

1. On gemini.google.com, click **Switch to Spark** in the sidebar.
2. Describe the workout job and when it should run.
3. Add `@Peloton` if Spark ignores the connector.
4. Review the plan Spark drafts. Edit times before you accept a schedule.

Spark is useful for a weekly plan you do not want to retype. Keep the instruction narrow: class length, day, and intensity. Vague goals produce a plan that does not match the classes Peloton actually offers you.

Google’s skills help notes that skills are reusable instructions you can stack. A short skill such as “Prefer 30-minute rides on weekdays and one long endurance class on Sunday” can sit next to `@Peloton`. Skills currently require you to be 18+ on a personal account. Check Spark on your plan before you rely on auto-use.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/_fPFd7hgmms"
    title="Google Just Turned Gemini Into an AI Super-App"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Check the class in Peloton after Gemini replies

Gemini can search and schedule. It does not replace the Peloton calendar if the two systems disagree.

1. Open the Peloton app or site on the same account you authorized.
2. Confirm the class sits on the day and time you accepted.
3. If the class is missing, disconnect and reconnect Peloton in Gemini, then try one `@` prompt again.
4. If the class appears but the instructor is wrong, say so in the same Gemini thread. Do not start a second chat until the first plan is fixed.

Heart-rate pairing on Pixel Watch or Fitbit is a separate Google Health feature. It is not the same as the Gemini Connected App. Pairing a watch to a bike does not turn Peloton on inside Gemini.



![Person reviewing a training plan on a laptop after a workout](https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80)



## Disconnect Peloton and clean up data

You can turn Peloton off at any time.

1. Return to **Settings → Connected Apps** (or Personal Intelligence → Connected Apps).
2. Turn Peloton off.
3. Follow any on-screen revoke step in the Peloton or Google account window.
4. Review [Gemini Apps activity](https://myactivity.google.com/product/gemini) if you want those chats deleted.

Google’s privacy help explains that disconnecting stops new requests. Old chats can still contain class names you already asked about. Delete those threads if you do not want them stored.

Work and school Google Accounts use a different Connected Apps policy. Admins decide the list. Peloton is documented as personal-account only in the public table, so do not expect it on a Workspace login.

## Tips that keep plans usable

**State duration and day.** “A hard ride” is weaker than “45 minutes on Thursday after 7 p.m.”

**Name the format.** Ride, row, strength, or yoga. Gemini cannot guess your equipment.

**One plan per thread.** Mixing a five-day block with a last-minute 10-minute stretch in the same chat makes the schedule hard to check.

**Read Learn more first.** Supported actions differ by app. Adobe and Airtable from the same September wave do not share Peloton’s class scheduler.

**Keep Activity on only if you accept history.** Connected Apps on web and iOS require it. If you turn it off, expect Peloton to drop out.

**Stay in English in the US wave.** The table lists English only for Peloton.

## Conclusion

Peloton in Gemini is a scheduler and planner, not a replacement for the bike screen. Connect it on a personal US account, keep Activity on, and force `@Peloton` when a reply ignores your classes. Confirm every booked slot in the Peloton app before you treat the chat as the source of truth.

If you are still wiring up the rest of the September connectors, start with the [September Connected Apps setup guide](/blog/gemini-connected-apps-september-2026/) and add Peloton after Gmail and Calendar work.

## Sources

- [New connected apps roll out to Gemini](https://blog.google/innovation-and-ai/products/gemini-app/new-connected-apps-gemini/) — Google Blog, 23 September 2026
- [Use and manage Connected Apps in Gemini](https://support.google.com/gemini/answer/13695044) — Gemini Apps Help
- [Check the availability and requirements of Connected Apps](https://support.google.com/gemini/table/17434654) — Gemini Apps Help
- [Use Gemini Spark to manage your tasks and workflows](https://support.google.com/gemini/answer/17094507) — Gemini Apps Help
- [Create and manage skills for Gemini Apps](https://support.google.com/gemini/answer/17094296) — Gemini Apps Help
- [Browse Connected Apps](https://gemini.google.com/apps) — Gemini
