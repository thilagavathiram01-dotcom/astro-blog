---
title: "How to Publish Sheets Canvas as a Standalone Link"
description: "Publish a Google Sheets canvas mini-app as its own link so others can interact with dashboards or boards without seeing the source spreadsheet."
pubDate: 2026-11-12T22:00:00
heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "gemini", "google", "productivity"]
noindex: false
---

Google added a way to publish a Sheets canvas to its own link on 11 November 2026. The published view gives people read-only access to the interactive mini-app without opening the full source spreadsheet.<grok type="render_inline_citation" citation_id="272" />

You keep edit rights on the original file while sharing a clean dashboard, kanban board, or calendar with a wider group. The published URL has its own audience setting, separate from the spreadsheet's sharing list.

![Laptop showing analytics charts and data tables on screen](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80)

## What the publish option does

Sheets canvas turns spreadsheet data into interactive views with Gemini. You describe a layout in a prompt, and the canvas appears as a tab. Changes in the canvas update the sheet, and sheet edits appear in the canvas in real time.<grok type="render_inline_citation" citation_id="274" />

The new publish step creates a second link. Visitors open that link and see only the canvas. They cannot reach the underlying rows, formulas, or other tabs. You choose whether the published version updates automatically when the source changes or stays fixed as a snapshot of the current data.<grok type="render_inline_citation" citation_id="272" />

Examples from Google include a conference agenda shared with attendees while only the planning team edits the sheet, a launch timeline for stakeholders, and a course calendar visible company-wide.<grok type="render_inline_citation" citation_id="272" />

## Prerequisites

You need edit access to a spreadsheet that already contains a canvas tab. Creating and editing canvases is available on Google Workspace Business Standard and Plus, Enterprise Standard and Plus, Google AI Pro and Ultra consumer plans, and the Google AI Pro for Education add-on. The feature works in Sheets on the web with the account language set to English and smart features enabled.<grok type="render_inline_citation" citation_id="272" />

Publishing uses the existing Drive "Publish to the web" setting. Admins control whether users can publish files publicly through the standard external sharing policies. There is no separate admin toggle for canvas publishing.<grok type="render_inline_citation" citation_id="272" />

If you have not built a canvas yet, start with the [Sheets canvas mini-apps guide](/blog/sheets-canvas-gemini-mini-apps/). Open the sheet, go to Insert > Create a canvas or use the Gemini side panel, and describe the view you want.

## Step-by-step: publish the canvas

1. Open the Google Sheet that holds the canvas tab in a desktop browser.
2. Switch to the canvas tab.
3. Locate the publish icon in the canvas toolbar.
4. Click the icon and select "Publish canvas".
5. Choose the audience for the published link: your organisation, specific people, or anyone with the link.
6. Decide on update behaviour: automatic republish when the source sheet changes, or a static snapshot of the current data.
7. Copy the new link.
8. Share the link with the people who need the view.

You can return to the same icon later to copy the link again, change the audience, or stop publishing. Publishing is available only on the web version of Sheets.<grok type="render_inline_citation" citation_id="272" />

![Person working at a desk with multiple monitors showing spreadsheets and charts](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Audience and update choices

The published link is independent of the spreadsheet URL. You can keep the source file shared with a small team and set the canvas link to the whole organisation. Recipients open the canvas without gaining edit rights or seeing other sheets.<grok type="render_inline_citation" citation_id="272" />

Automatic republishing keeps the view current. Static publishing freezes the data at the moment you publish. Use static when you need a fixed report for a meeting or deadline. Use automatic for ongoing trackers such as project boards or course calendars.

While a flow is not involved here, the same principle of controlled visibility applies to other Workspace tools. Check the Activity or version history of the source sheet if you need to confirm when data last changed.

## Tips and limits

- Confirm you have edit access before the publish option appears.
- Test the published link in an incognito window or another account to verify the audience setting.
- If the canvas does not appear for visitors, check that Drive publish-to-web is allowed in your domain and that the link was copied correctly.
- Rollout started 11 November 2026 for Rapid Release domains and begins 2 December 2026 for Scheduled Release domains. Visibility can take up to 15 days.<grok type="render_inline_citation" citation_id="272" />
- Creating and editing canvases has per-user usage limits. Check the Help Center if you hit a quota.
- The published view is read-only. Viewers cannot drag cards or edit fields unless those actions are part of the canvas design and their permissions allow it through the published interface.

Keep the source sheet organised. Hide or protect sensitive columns before you build the canvas if the published view might still surface related data.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/qnNn6tsW-2U"
    title="Create interactive mini-apps with Sheets canvas"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Publishing a Sheets canvas to its own link separates the interactive view from the raw spreadsheet. Teams share live dashboards and boards with wider audiences while protecting the source data and formulas. Check the publish icon on any canvas tab once the feature reaches your account, set the audience and update mode, and distribute the link.

Official details are on the [Google Workspace Updates post](https://workspaceupdates.googleblog.com/2026/11/publish-sheets-canvas-as-standalone-link.html) and the [Create a Sheets canvas Help Center page](https://support.google.com/docs/answer/17035851).

## Sources

- [Publish a Sheets canvas as a standalone link](https://workspaceupdates.googleblog.com/2026/11/publish-sheets-canvas-as-standalone-link.html) — Google Workspace Updates, 11 November 2026
- [Use Sheets canvas to visualize data in custom, interactive mini-apps](https://workspaceupdates.googleblog.com/2026/08/use-google-sheets-canvas-to-visualize-data.html) — Google Workspace Updates, 13 August 2026
- [Create a Sheets canvas](https://support.google.com/docs/answer/17035851) — Google Docs Editors Help
- [Make Google Docs, Sheets, Slides & Forms public](https://support.google.com/docs/answer/183965) — Google Docs Editors Help
