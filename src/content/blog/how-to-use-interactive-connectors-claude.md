---
title: "How to Use Interactive Connectors in Claude"
description: "Step-by-step guide to connecting interactive connectors in Claude so you can open full apps like Notion, Adobe, and Asana beside your chat and edit with approval."
pubDate: 2026-11-12T08:00:00
heroImage: "https://images.unsplash.com/photo-1758873268695-1b55590e507a?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "productivity"]
noindex: false
---

Claude now lets you open full partner apps directly inside conversations. Interactive Connectors, expanded on November 10, 2026, replace limited previews with side-panel and full-screen views of tools such as Notion, Confluence, Adobe, Box, and Asana. You work in the real app while Claude suggests or applies changes that you approve.

This rolls out on web and Claude Desktop across all plans once your account receives the new Claude experience. Mobile apps do not yet support the side panel or full-screen modes.

![Team collaborating around a computer screen in an office](https://images.unsplash.com/photo-1758873268695-1b55590e507a?auto=format&fit=crop&w=800&q=80)

## What Interactive Connectors add

Earlier interactive connectors showed small live cards inside the chat. The November update adds three presentation modes:

- Inline cards for quick status or single actions.
- Side panel that keeps the full tool open next to your conversation.
- Full-screen view for editing documents, designs, or project boards.

Claude can request changes to an open page, row, or file. Those changes appear live in the tool after you approve them, using the same approval flow as other connector actions. You can also open a connected tool from the sidebar or + menu without writing a prompt first, then ask Claude from the bottom input while the app stays open.

Pins save per browser, so a pin added on the web does not appear in Desktop.

## Connect a tool from the directory

1. Open Claude on the web or Desktop and go to the Connectors Directory (Search and tools → Add connectors, or Customize → Connectors).
2. Filter or scan for connectors marked with the Interactive badge.
3. Select a supported tool such as Notion, Asana, Adobe, Box, Canva, or Atlassian Confluence.
4. Click Connect and complete the authentication for your account.
5. Enable the connector for the current conversation if the menu asks.

Interactive features turn on by default once the connector is enabled. Team and Enterprise admins can still restrict specific tool calls that render interactive views without disabling the whole connector.

## Open and work side by side

After connecting, start a conversation and ask Claude something the tool handles, or open the tool directly from the + menu or sidebar.

For example:

- “Open my launch plan in Confluence and add a summary section based on the latest notes.”
- “Pull up the product photo in Adobe and apply a dither effect.”
- “Show the open Asana board and mark the review tasks complete.”

The app appears in the side panel. Expand it to full screen from the title bar if you need more room. Type instructions in the chat input; Claude proposes edits that you review and approve. You can also edit the document yourself while Claude watches or continues the conversation.

Changes stay inside the original tool and respect the permissions you already granted.

![Modern multi-monitor desk setup for focused work](https://images.unsplash.com/photo-1742199009963-c028d0c5a603?auto=format&fit=crop&w=800&q=80)

## Practical use cases

**Document editing in Notion or Confluence.** Ask Claude to draft a page or update an existing one. The full editor opens signed into your account. Review Claude’s insertions live, then keep or discard them.

**Design and media in Adobe or Canva.** Request retouches, redactions on PDFs, or new design elements. Claude applies the action inside the open tool after approval.

**Task and pipeline management.** Open an Asana board or HubSpot view, then tell Claude to prioritize follow-ups or update statuses. You confirm each change.

**File comparison in Box.** Open a document, ask for a revision, and compare versions side by side before saving.

Partner tools currently include Asana, Canva, Carta, Dropbox, monday.com, Smartsheet, Vercel, Webflow, Adobe, Atlassian, Box, HubSpot, and Notion, with more arriving over time. Figma, Harvey, and Shopify are building integrations.

## Tips for smoother sessions

- Pin the two or three tools you open most often so they stay one click away in the sidebar.
- Start with a clear request that names the exact page, file, or board.
- Watch the approval prompts. Claude cannot execute changes until you confirm.
- If the interface does not appear, confirm the connector is enabled for the conversation and that your account has the new Claude experience.
- For Team or Enterprise plans, check Organization settings → Connectors if interactive views are missing.

Developers can build their own MCP Apps that embed full interfaces. The extension is open and not limited to Claude. Support is in public preview; Anthropic’s docs cover the additional design and security requirements.

## Conclusion

Interactive Connectors turn Claude into a workspace where you and the model share the same open app. Connect once from the directory, open the tool beside your chat or full screen, approve the changes Claude proposes, and keep working without tab switching. The feature is available on web and Desktop for all plans and continues to expand with more partner apps.

If you already use Claude models inside Google Antigravity, the same connector approach can complement multi-model coding sessions. See the guide on [accessing Claude Opus 5.5 in Google Antigravity](/blog/access-claude-opus-5-5-google-antigravity/).

## Sources

- [Open your apps in Claude and work in them together](https://claude.com/resources/articles/interactive-connectors-full-tool) — Anthropic, November 10, 2026
- [Use interactive connectors in Claude](https://support.claude.com/en/articles/13454812-use-interactive-connectors-in-claude) — Claude Help Center
- [Your apps have moved into Claude](https://www.youtube.com/watch?v=Gy1jSeSzAhk) — Claude official YouTube channel

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Gy1jSeSzAhk"
    title="Your apps have moved into Claude"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
