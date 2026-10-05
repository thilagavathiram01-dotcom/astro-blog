---
title: "How to Create Docs and Decks From Gmail With Gemini"
description: "Use Gemini in Workspace to draft Docs, Sheets, and Slides from Gmail, Drive, Docs, or Chat, with plans, English limits, and review steps."
pubDate: 2026-10-05T14:00:00
heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["google", "gemini", "productivity", "how-to"]
noindex: false
---

You used to open Docs to draft a brief, then jump to Slides for the deck, then Gmail for the recap. Google now lets Gemini do those handoffs from the app you already have open.

On September 9, 2026, Google Workspace announced five agentic capabilities powered by Workspace Intelligence. The matching admin update started a gradual rollout on September 2, 2026, for Rapid Release and Scheduled Release domains. At launch the feature is English only.

This guide walks through what you can ask for, where the side panel lives, and the checks you should make before anything leaves your account.

## What changed in Workspace

Before this update, Gemini help was mostly stuck inside the app you were using. A formatted document meant opening Docs. A spreadsheet meant opening Sheets.

Workspace Intelligence can now gather context from files, emails, and chat threads you can already access, then create a new file in Drive while you stay in Gmail, Drive, Docs, Slides, or Chat. Google says your data is not reviewed by humans and is not used to train Gemini models. Gemini also follows the signed-in user's existing sharing permissions. If you cannot open a file, Gemini cannot either.

Sending email and booking meetings are not fire-and-forget. Google says Gemini shows an interactive preview card so you can review, edit, and confirm before those actions run.

![Person working on a laptop at a desk with notes](https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80)

## Check that your account can use it

Availability is plan-specific. According to the Workspace Updates post:

- Business Standard and Business Plus
- Enterprise Standard and Enterprise Plus
- Google AI Pro and Google AI Ultra for consumers, with scheduling excluded on AI Pro
- Frontline Plus, limited to scheduling
- Google AI Pro for Education, and the AI Expanded Access add-on

Advanced AI use is subject to Workspace usage limits. Admins also control which sources Workspace Intelligence can read. If a prompt cannot see a folder, check the sources selected in Drive and the admin setting for Workspace Intelligence before you rewrite the prompt.

If you already use reusable instructions, the [Workspace Gemini skills setup](/blog/workspace-gemini-skills-oct-5-setup/) covers how teams package know-how that Gemini can call on demand. Cross-app file creation is a separate feature, but the two pair well once both are enabled.

## Create a deck from Chat

This is the case Google highlights for product updates.

1. Open the Chat conversation that already holds the status notes.
2. Open Ask Gemini in Chat.
3. Ask for a leadership update, and name the project. Example: "Build a short project-update deck for the product launch using this conversation and related email."
4. Answer any clarifying questions Gemini asks. Google notes that clarifying questions are part of the presentation flow and are rolling out more widely.
5. Open the Drive link Gemini returns and edit the slides before you share them.

Gemini looks across selected sources, including Chat, Gmail, and action items, then saves a multi-slide presentation. Treat the first version as a draft. Numbers and names still need a human pass.

## Build a spreadsheet from Drive

If you are already in a project folder, you do not have to start a blank Sheet.

1. Open the Drive folder that holds specs, quotes, or notes.
2. Open Gemini in Drive.
3. Ask for a structured tracker. Example: "Create a spreadsheet of material costs and sustainability metrics from the files in this folder."
4. Open the new Sheet from the link and check formulas, units, and missing rows.

Google's example is a cost and materials tracker built from the open folder plus other sources you choose. The file lands in Drive so you can share it with the same controls you use for any Sheet.

## Draft an email without leaving Docs

After you finish a sales overview or status doc, you can ask Gemini to write the recap in place.

1. Stay in the Doc.
2. Open the Gemini side panel.
3. Prompt it to summarize milestone progress for the sales team, in your usual tone.
4. Review the preview card. Add recipients. Edit anything that overstates a result.
5. Send from the card, or open the draft in Gmail if you want a final look in the inbox.

Google says you can send directly from Docs after that review. Do not skip the card. External mail is one of the actions that requires confirmation.

![Team reviewing notes around a laptop in a meeting](https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80)

## Turn a Gmail thread into a brief

Long threads are the other common handoff.

1. Open the thread in Gmail.
2. Ask Gemini to turn it into a structured brief with goals, targets, and next steps.
3. Let it pull related Drive files and chats only from sources you or your admin have enabled.
4. Use the side-panel link to open the Doc. The point of the flow is that you keep your place in the inbox.

Source attributions are part of the deep-research style summary Google describes. Click through them. A cited line is still only as good as the file it came from.

## Convert a Doc into a branded deck

If leadership wants slides instead of a written proposal:

1. Open the Doc.
2. Ask Gemini to turn the proposal into a presentation.
3. Reference the team's slide template or brand guidelines with the @ file picker when that file is in Drive.
4. Open the saved deck and fix layout, charts, and any claim that was shortened too far.

Google says Gemini applies the referenced visual style and saves the presentation to Drive. The official Workspace walkthrough below shows that Docs-to-Slides path.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/b0sVLrjVoJs"
    title="Build Branded Presentations from Google Docs | Gemini in Google Workspace"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Schedule and log tasks from the same panel

Beyond file creation, the same update covers calendar and task actions:

- Find open times and schedule a meeting
- Resolve a calendar conflict
- Log a reminder or create a to-do that maps into Google Tasks

Scheduling is not included for consumer Google AI Pro. It is included for AI Ultra, Business and Enterprise plans listed above, and Frontline Plus. Calendar commitments use the same preview-and-confirm step as outbound email.

Google also says these capabilities will later power flows in Workspace Studio. That piece is marked as coming soon, so do not build a production Studio flow that depends on it until the control appears in your domain.

## Practical prompt tips

Keep the ask specific. Name the destination file type, the audience, and the source. "Make a deck" is weaker than "Create a five-slide launch update for leadership from this Chat and the Q3 brief in Drive."

Select sources on purpose. Workspace Intelligence only connects files, mail, and chat that you pick or that an admin has allowed. A missing source looks like a weak answer, not a permissions error.

Write in English for now. Google says more languages will be added later.

Review every external action. Preview cards exist so a drafted email or meeting invite does not send on the first pass.

Watch usage limits. Creating decks and research briefs counts toward advanced AI limits on eligible plans.

## What to do next

Open Gmail or Docs, confirm Gemini is in the side panel, and run one low-risk prompt: a brief from a thread you already understand. Compare the Doc against the source before you share it.

If the panel is missing, check the plan list above and ask an admin whether Workspace Intelligence sources are enabled. The feature rolled out gradually from September 2, 2026, so a delayed domain is still possible.

## Sources

- Google Workspace Blog, "Less switching, more flow: 5 new agentic capabilities across Google Workspace apps," September 9, 2026: https://workspace.google.com/blog/product-announcements/less-switching-more-flow-5-new-agentic-capabilities-across-google-workspace-apps
- Google Workspace Updates, "Create content, schedule events, and coordinate tasks across Workspace regardless of what app you are in," September 9, 2026: https://workspaceupdates.googleblog.com/2026/09/create-content-schedule-events-and-coordinate-tasks-across-Workspace-regardless-of-what-app-you-are-in.html
- Google Workspace YouTube, "Build Branded Presentations from Google Docs," September 9, 2026: https://www.youtube.com/watch?v=b0sVLrjVoJs
