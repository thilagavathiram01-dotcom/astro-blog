---
title: "Best Prompts for Create My Widget on Pixel"
description: "Discover effective prompts to build useful Create My Widget widgets with Gemini Intelligence on Pixel 10 and 11 phones."
pubDate: 2026-11-28T10:00:00
heroImage: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["pixel", "gemini", "tutorials", "how-to"]
noindex: false
---

Create My Widget lets you describe a home screen widget in plain language and have Gemini Intelligence build it. The feature rolled out with the November 2026 Pixel Drop for Pixel 10 and Pixel 11 series phones (excluding the Pixel 10a). It works in English for users 18 and older in the US, UK, Canada, Australia, and India.

Good prompts produce widgets that show the information you actually want. Vague prompts often return simple shortcuts back to Gemini. Specific prompts that name the data source, update frequency, and layout work better.

This guide shares tested prompt patterns, examples that pull from Gmail, Calendar, and Search, and ways to refine the results. For the full setup steps, see our guide on [how to use Gemini Intelligence on Pixel 10](/blog/how-to-use-gemini-intelligence-on-pixel-10/).

![Pixel phone home screen with widgets and apps](https://images.unsplash.com/photo-1760900051041-90417b9c110e?auto=format&fit=crop&w=800&q=80)

## Check eligibility and start a widget

Your phone must run a recent Pixel update and have the Gemini app installed. Long-press an empty area on the home screen, tap Widgets, then tap Create. Choose Describe your widget or pick a template category such as Important dates, Sports & fitness, or Finance.

If the Create button does not appear, join the Create My Widget beta in the Play Store and update the app. Grant any requested permissions so the widget can read Calendar events, Gmail receipts, or location data.

## Prompt structure that works

Start with the outcome, then add constraints. Name the source when you know it. Mention size or style if it matters. Keep each prompt under a few sentences.

Effective structure:

1. What to display.
2. Where the data comes from.
3. How often it should update.
4. Optional visual preference.

Example skeleton: “Show [specific metric] from [source] updated [frequency] in a compact layout.”

## Countdown and date prompts

Countdowns are among the most reliable widgets. Gemini handles fixed dates cleanly.

- “Countdown to my vacation starting July 15, 2027, in large numbers.”
- “Days until my marathon on June 25, 2026, with the race name underneath.”
- “Show the next three birthdays from my Google Contacts, sorted by date.”

After the preview appears, use Edit if the layout is too large or the date format is wrong. You can ask for “smaller text and a circular progress ring.”

## Finance and spending prompts

Widgets that read purchase receipts from Gmail work when you connect your Workspace account.

- “Total shopping spend this month from Gmail receipts, shown as a single number.”
- “Monthly budget tracker: $800 limit, remaining amount from credit card emails, color the number red when under $100.”
- “List the three most recent Amazon orders with delivery status.”

Double-check the totals. Gemini can miss a receipt or include a refund. Use Edit to exclude a merchant or change the date range.

![Android phones displaying home screens](https://images.unsplash.com/photo-1596742578443-7682ef5251cd?auto=format&fit=crop&w=800&q=80)

## Sports and live data prompts

Sports widgets pull from Search. They update, but complex live scores sometimes become a button that opens Gemini.

- “Next match for Arsenal, show opponent, date, and kick-off time.”
- “Latest score and headlines for the Lakers from Search.”
- “Countdown to the next Formula 1 race with circuit name.”

If the widget only shows a “Ask Gemini” button, rewrite the prompt to request a static summary that refreshes once a day instead of live scores.

## Travel and trip dashboard prompts

Combine Calendar and Gmail for trip overviews.

- “Dashboard for my trip to Tokyo: departure date from Calendar, hotel confirmation number from Gmail, and weather forecast.”
- “Upcoming flights from Gmail, list confirmation codes and departure times for the next 30 days.”
- “Show today’s agenda from Calendar plus the next outdoor activity weather.”

Grant the widget access to both Calendar and Gmail when prompted.

## Productivity and habit prompts

- “Daily high-protein meal idea, refreshed every morning, with a short recipe link.”
- “Steps goal of 8,000, show today’s total from Google Fit if available.”
- “List open tasks from Google Tasks that are due today.”

Some health data may require the relevant app to be installed and connected.

## Refine and edit widgets

After Gemini generates a preview, tap Edit and describe the change. Common refinements include:

- “Make the number larger and remove the title.”
- “Change the color scheme to dark.”
- “Update only once a day instead of live.”
- “Exclude Amazon and show only grocery receipts.”

You can also long-press a widget already on the home screen, choose Edit, and send a new instruction. The original prompt is kept, so incremental changes work well.

## Limits and tips

Create My Widget is still rolling out. Some complex requests (live transit times, real-time stock tickers, or multi-app dashboards) return a simple Gemini shortcut. In those cases, break the request into two smaller widgets.

Always verify numbers and dates. Gemini Intelligence can misread an email or use an outdated result. Paid Gemini plans may be required for higher usage on certain widgets.

UK users do not yet have full Connected Apps support, so Gmail and Calendar pulls can be limited.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/pkPah7KU8O4"
    title="I Tested New Pixel Drop Features: Create My Widget Is Insane!"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Clear, specific prompts turn Create My Widget into a useful home screen tool. Start with simple countdowns or spending totals, then edit until the layout matches what you need. The feature continues to expand to more devices and regions.

## Sources

- Google blog: Gemini Intelligence features and new device support (November 10, 2026)
- Google Pixel Help: Create My Widget
- Android Authority and 9to5Google coverage of the November Pixel Drop
