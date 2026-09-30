---
title: "How to Use ChatGPT Space for Shared Team Pages"
description: "Set up ChatGPT Space after DevDay 2026: create pages, share with teammates, tag ChatGPT or a dot, and keep private chats separate."
pubDate: 2026-09-30T14:00:00
heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["chatgpt", "tutorials", "productivity", "ai-tools"]
noindex: false
---

ChatGPT Library is gone for eligible accounts. In its place, OpenAI shipped **Space** at DevDay 2026: a home for pages, files, and shared work that people and ChatGPT can edit together.

Space is not a group chat and it is not a Project. A **page** is the document. A **space** is the folder that groups related pages. Projects still hold chats, files, and project instructions.

This guide follows OpenAI's Help Center article *Getting started with Space in ChatGPT* and the product page at chatgpt.com/features/space. It covers who can use Space, how to create a page, how sharing works, and what stays private.

## What shipped at DevDay 2026

OpenAI presented Space as the place where you keep living documents next to ChatGPT, Codex, and a **dot** (the always-on agent announced the same day). You tag those helpers on the page instead of copying drafts back into a chat.

Official availability, as of the launch docs:

- **Plans:** ChatGPT Pro, Business, and Enterprise
- **Create and edit:** web and the ChatGPT desktop app
- **Mobile:** find, read, and share pages; editing is not supported at launch
- **Coming soon:** collaborative slides and spreadsheets, mobile editing, and “Keep updated” automatic page refreshes

Enterprise and Business workspaces with data residency in Canada or the UAE do not have Space yet. Inference data residency is not supported for Space at launch. Enterprise admins may need to turn sharing on before teammates can collaborate.

OpenAI is rolling features out after DevDay. If the Space tab is missing, wait for the rollout rather than hunting a hidden toggle.

![Team collaborating around laptops in a bright office](https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80)

## Watch the DevDay keynote

Sam Altman, Romain Huet, Tejal Patwardhan, and Holly Li introduced Space, dots, and the rest of the DevDay 2026 lineup on the official OpenAI channel.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Fls_onRviPM"
    title="Live from OpenAI DevDay 2026: Keynote"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Create a space and a first page

You can ask ChatGPT in plain language. OpenAI's own examples work as written.

1. Open [ChatGPT](https://chatgpt.com) on the web or the desktop app and sign in with a Pro, Business, or Enterprise account that has Space.
2. Ask ChatGPT to create the container: “Create a space named Website launch.”
3. Put a page in that space: “Create a project overview page in Website launch with our goals, timeline, and next steps.”
4. Open the page. Edit the text yourself or ask ChatGPT for a specific change.

You can also start a page from an existing conversation. Open the chat that already has the notes, then ask: “Create a page from this conversation with the project goals, decisions, and next steps.”

Space home also offers templates. Use those when you want a blank structure instead of a chat dump.

## Edit with ChatGPT, comments, and your own cursor

People with **edit** access can work on the same page at the same time. Each person talks to their own ChatGPT. Sharing does not merge memories or private chats.

Useful prompts from OpenAI's help article:

- “Shorten the introduction and keep the recommendations unchanged.”
- “Add a summary of the attached meeting notes under Decisions.”
- “Compare these two proposals and add the main differences to this page.”

Pages can hold charts, trackers, and other tools ChatGPT inserts. Ask for a chart only when the numbers already sit on the page or in an attached file.

For a single paragraph, select the text and leave a comment. For a change that spans the document, use the page chat. Review names, dates, and figures before you share.

If you already keep reusable briefs as Skills, you can still run those workflows in Chat or Work and then ask ChatGPT to drop the result onto a page. See [How to Create and Use ChatGPT Skills for Repeatable Work](/blog/chatgpt-skills-reusable-workflows/) for the Skills setup.

![Notebook and laptop on a desk during a planning session](https://images.unsplash.com/photo-1434030216411-0b7c2763d0c5?auto=format&fit=crop&w=800&q=80)

## Organize pages, subpages, and search

A space can hold folders and pages. A page can hold **subpages**, so a project overview can nest meeting notes and weekly updates underneath it.

Ask ChatGPT to create the child: “Create a Meeting notes subpage under Project overview.” You can also ask it to rename a page or move one page under another in the same space. You need edit access to both pages. Check who will inherit access after the move.

Find work with the built-in views:

- **All > Your items** — personal space pages, files, and folders
- **All > Shared with you** — items shared with you or a team you belong to
- **Pages** — pages you own or that were shared with you
- **Suggested** and **Recents** — recent work
- **Images** — creations versus uploads

Items you can reach only through a shared space may not appear under Shared with you. Open that space instead. On mobile, use Space search or global search.

## Share a page without leaking private chats

Open the page and select **Share**. Invite people or, on a workspace plan with teams enabled, invite a whole team. Choose **view** or **edit**.

On a personal Pro plan, invite by email and pick view or edit. Link sharing is available where the product shows that option.

Access can come from a direct invite, a parent page, or the space. Subpages inherit access from the parent. Removing a direct invite does not remove inherited access. Change the parent or space settings if you need a clean break. Moving a page can also change who can open it.

OpenAI is explicit about privacy:

- Sharing a page does **not** share your private chats or personal Memory.
- Anything written onto the page is visible to everyone with access, including details ChatGPT pulled from Memory while helping you write.
- Files uploaded into a page follow that page's permissions.
- A link to a file stored elsewhere does not grant access to the original file. Connected services keep their own permissions.
- If you or ChatGPT copy or summarize a source onto the page, viewers can read that summary even if they cannot open the source.

If Memory is on, ChatGPT may use personal context while drafting. Once that text lands on the page, collaborators can see it. Review the page before you hit Share.

OpenAI does not train on ChatGPT Business or Enterprise data by default. On individual accounts, each collaborator's training and Memory settings apply when *their* ChatGPT reads the shared page. Your “off” setting does not cover a teammate who left training on.

## Files, connected tools, meetings, and dots

You can upload files into a page or ask ChatGPT to use connected tools such as Google Drive and Slack. The Meetings plugin, in beta on Pro and Business in the macOS desktop app, can capture notes and suggest follow-ups. Review those notes privately, then copy only what the team should see onto a page. The plugin deletes the captured audio after it generates notes.

Dots work across files in Space. You can ask a dot to keep a page current as plans change. Texting a dot is listed as coming soon. Dots themselves roll out first to Pro and Business Premium in eligible markets; Enterprise needs an admin to enable the beta. Space still works if you do not have a dot yet.

Automatic “Keep updated” page refreshes are **not** available at launch. Until that ships, ask ChatGPT to update the page when you need a refresh, or set a recurring automation with instructions for sources and frequency if that control appears on your account.

## Limits and common errors

- **No edit on mobile.** Open the page on web or desktop if you have edit access but cannot type.
- **Linked file 403.** Share the source file separately. Page share does not rewrite Drive or Slack ACLs.
- **Delete is recursive.** Deleting a page sends it and its subpages to Trash, including subpages owned by other people. Check children first.
- **Plan gate.** Free, Go, and Plus are not on the Space availability list.
- **Admin gate.** Workspace sharing rules still apply.

Report policy or legal issues with the [Report Content form](https://openai.com/form/report-content/) and include a link to the page.

## Conclusion

Treat Space as a shared notebook with an editor sitting next to every teammate. Create a named space, turn one conversation into a page, give edit access only to people who should change the text, and keep Memory-backed details off the page unless the team should see them.

Projects still hold the chats. Skills still hold the repeatable playbooks. Space holds the document you actually ship.

## Sources

- [Getting started with Space in ChatGPT](https://help.openai.com/en/articles/20001549-getting-started-with-space-in-chatgpt) — OpenAI Help Center
- [ChatGPT Space](https://chatgpt.com/features/space/) — product page
- [Introducing dots](https://openai.com/index/introducing-dots/) — OpenAI
- [DevDay 2026 Recap](https://openai.com/index/devday-2026-recap/) — OpenAI
- [Live from OpenAI DevDay 2026: Keynote](https://www.youtube.com/watch?v=Fls_onRviPM) — official OpenAI video
