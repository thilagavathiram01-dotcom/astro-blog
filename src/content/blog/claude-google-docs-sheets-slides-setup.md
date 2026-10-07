---
title: "How to Use Claude in Google Docs, Sheets, and Slides"
description: "Install Claude for Google Workspace in beta and edit Docs, Sheets, and Slides from the sidebar. Plans, permissions, and connectors."
pubDate: 2026-10-07T12:00:00
heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "google", "productivity", "tutorials"]
noindex: false
---

Claude for Google Workspace opened in public beta on 6 October 2026. The add-on puts a Claude sidebar next to the file you already have open in Google Docs, Sheets, or Slides, so you can ask questions and apply edits without copying text into a separate chat.

The beta is on every paid Claude plan: Pro, Max, Team, and Enterprise. Free Claude accounts do not get it. You also need a Google account that is allowed to install Google Workspace Marketplace apps. One install covers all three editors. You do not add three separate extensions.

This is not the older Google Workspace connectors inside claude.ai. Those connectors let Claude search Drive, Gmail, and Calendar while you chat on the web. The new add-on works the other way: Claude comes into the file you already have open.

## What the sidebar can do

Anthropic says the sidebar reads the document, spreadsheet, or deck you opened, plus any text, cells, or slides you have selected. It can then change that file in place.

In Docs, Claude can fix a sentence or restyle a heading without touching the formatting around it. For larger rewrites it can propose edits as suggestion cards. Each card highlights the passage it would change, and you apply or dismiss it. Help Center examples include tightening an executive summary, cutting a long brief, turning notes into a table, and checking a contract for defined terms that are used but never defined.

In Sheets, Claude can write formulas, build pivot tables and native charts, and add tabs. For joins or data cleaning, Anthropic says it can pull a range into Python and write the results back. You can ask it to walk through a total, normalize mixed date formats, or fix a VLOOKUP that returns `#N/A`.

In Slides, Claude builds new slides from the deck's existing layouts and themes. It can then flag elements that overlap, run off the slide, or are hard to read. You can ask it to split a text-heavy slide, shorten titles, or add a chart that follows the deck's colors.

Edits are written as you. Google records them under your name, so they show up in File, Version history like any other change. Undo the last change, or restore an earlier version if a pass goes too far.

![Person reviewing notes and a laptop at a desk](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Install Claude for yourself

If your organization already allows Marketplace apps, Anthropic says setup takes about two minutes.

1. Open the [Claude listing in the Google Workspace Marketplace](https://workspace.google.com/marketplace/app/claude/12459801340) and click Install.
2. Choose the Google account you use for Docs, Sheets, and Slides, then click Continue.
3. Review the permissions and click Allow.
4. Reload any Docs, Sheets, or Slides files you already have open.
5. In an open file, go to Extensions, then Claude, then Open Claude.
6. The first time, Google asks you to allow two permissions. Review them and click Allow.
7. Sign in with your Claude account in the sidebar. You can also turn on connectors from that panel.
8. Ask something about the open file. Anthropic suggests "Summarize this document in five bullets" or "What does column F calculate?"

The add-on runs in Chrome, Edge, and Safari. If the Install button is greyed out, or you see "This application is not allowed by your administrator," that message comes from Google. Only a Workspace admin can clear it.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/idJQMJwHtyM"
    title="Claude for Google Workspace™"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Install it for a whole organization

Google Workspace super administrators can deploy Claude so people do not install it themselves.

1. Open the Marketplace listing while signed in as a super admin.
2. Click Admin install, then Continue.
3. Choose everyone at the organization, or certain groups or organizational units.
4. Review data access and terms, tick the agreement box, and click Finish.
5. Ask people to reload open files. Claude then appears under Extensions without a personal install.

Many domains block Marketplace installs by default. An admin has two options under Apps, Google Workspace Marketplace apps, Settings. They can allowlist Claude so users install it themselves, or admin-install it even while user installs stay blocked.

To remove it later, open the Admin console, go to Apps, Google Workspace Marketplace apps, Apps list, select Claude, and click Uninstall app. Removal takes effect the next time each person reloads a file.

## Choose how much Claude edits on its own

You control how far Claude goes before it writes. The announcement describes two modes. In the default Ask before edits mode, each change appears as an approval card with a summary, and Claude waits before it edits. The Help Center describes the same default as a plain-language preview that waits until you click Allow. In Accept all edits mode, Claude works through the task and applies changes without stopping.

Keep Ask before edits on for contracts, shared trackers, and decks that already have a locked theme. Switch to Accept all edits only when you are working in a draft file and you plan to review version history afterward.

Select text, a cell range, or a slide before you send the prompt. Anthropic says Claude works best when you name the outcome and let it choose the steps. "Rewrite the executive summary so it leads with the recommendation and fits in one paragraph" is more useful than "make this better."

![Charts and metrics on a laptop screen](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80)

## What Claude can and cannot see

In the add-on, Claude can access its sidebar and the file you opened it in, plus any connectors you turn on. Google lists those permissions before you allow access. Apart from connector content, it cannot see other Drive files, email, or calendar from the sidebar. If you need outside material, paste it into the chat or drop a PDF, CSV, or Office file into the sidebar. Claude reads that attachment alongside the open file.

That scope is narrower than editing Google files from Claude on the web or desktop. There, once the Google Docs, Sheets, and Slides connectors are on, Claude can reach any file your Google Drive permissions allow. Paste a Docs, Sheets, or Slides link, or ask Claude to create a file, and on supported setups it opens in a pane beside the chat. Anthropic says starting from Claude makes more sense when you need a new file or the work spans several files.

On Team and Enterprise plans, an owner or primary owner has to enable those connectors before members can use them. Consumer plan data follows Anthropic's Privacy Policy. Team and Enterprise data follows the Commercial Terms and the data processing addendum.

On Enterprise plans, Anthropic says controls such as the Compliance API, customer-managed encryption keys, and OpenTelemetry audit export apply to the add-on as well.

## Use connectors and skills in the sidebar

When you are signed in, the sidebar uses the same models, connectors, and skills as Claude. Anthropic's example is a quarterly business review deck: Claude can pull account history from Salesforce and recent call notes through a Google Drive connector, then build slides that match the open deck. If you save that format as a skill, the team can run the same steps in Docs, Sheets, and Slides later.

You can also set preferences for how you draft a memo or build a model. Claude is meant to follow that pattern the next time.

If your team already writes in Google files with Gemini, compare the two sidebars on a non-sensitive draft. Our guide to [building and editing a spreadsheet with Gemini](/blog/gemini-sheets-build-edit-spreadsheet/) covers the Google-side workflow. Claude's beta is the alternative when you want the same paid Claude account, skills, and connectors inside the file.

## Practical prompts to try first

Start with questions that do not edit anything. Ask which slides mention pricing, or what changed between the Q2 and Q3 tabs. That confirms the sidebar is reading the open file before you allow writes.

Then try one scoped edit:

- In Docs: "Turn the notes under Next steps into a table with owner, action, and due date."
- In Sheets: "Column D has dates in three formats. Normalize them to YYYY-MM-DD on a copy of the column."
- In Slides: "Slide 7 is a wall of text. Split it into two slides and keep the deck's styling."

Review each card before you allow it. Check version history after the first Accept all edits session so you know how to roll back.

## Limits to plan around

The product is still in beta. Behaviour can change, and some file opens from the Claude chat depend on "supported setups," which Anthropic does not list in full in the launch note.

Workspace admins can block the Marketplace listing even if someone has a paid Claude plan. Personal Gmail accounts can install Marketplace apps in many cases, but a managed school or company domain may not.

Claude does not see the rest of Drive from the sidebar unless you attach files or turn on a connector. Do not assume a prompt about "the budget folder" will find those files.

Usage still counts against your Claude plan. Long sheet models and multi-slide rewrites can burn through a session faster than a short summary.

## Bottom line

Claude for Google Workspace is a sidebar for the file you already have open, not a second copy of your Drive. Install it once from the Marketplace, open it from Extensions, and keep Ask before edits on until you trust the cards. Use the chat connectors only when the job starts in Claude or spans several Google files.

## Sources

- Anthropic, "Claude now works with Google Docs, Sheets, and Slides," 6 October 2026: https://claude.com/resources/articles/claude-now-works-in-google-docs-sheets-and-slides
- Anthropic product page, "Claude for Google Workspace": https://claude.com/claude-for-google-workspace
- Claude Help Center, "Use Claude in Google Docs, Sheets, and Slides": https://support.claude.com/en/articles/16951679-use-claude-in-google-docs-sheets-and-slides
- Google Workspace Marketplace listing for Claude: https://workspace.google.com/marketplace/app/claude/12459801340
- Claude YouTube, "Claude for Google Workspace," 6 October 2026: https://www.youtube.com/watch?v=idJQMJwHtyM
