---
title: "How to Use MCP Tasks and Elicitation in Claude"
description: "Step-by-step guide to MCP Tasks and Elicitation in Claude. Hand off long jobs and get mid-step approvals for safer agent workflows."
pubDate: 2026-11-27T16:00:00
heroImage: "https://images.unsplash.com/photo-1764452008254-eed469a4fad3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "chatgpt", "productivity"]
noindex: false
---

Anthropic made MCP Tasks and Elicitation generally available in Claude and Claude Code on 24 November 2026. These features let MCP servers run long jobs in the background and pause to ask you for input before risky actions.

You no longer wait for every tool call to finish before Claude continues. Sensitive steps now require your confirmation through a form or link.

This guide shows how to use both features with existing connectors on supported plans.

## What MCP Tasks and Elicitation Do

Tasks let an MCP server start a long-running operation or even a full agent loop. Claude keeps working on other things and picks up the result when the server finishes.

Elicitation lets the server pause a tool call and request specific input from you. Common cases include confirming costs, approving deletions, or entering a confirmation string.

Both features are part of the open MCP specification and its extensions. Any client that supports them can use servers that implement them. In Claude they are available now on Pro, Max, and Ultra plans, with rollout to Team and Enterprise underway.

File Uploads, which lets Claude send PDFs, spreadsheets, and images to servers without routing the content through the context window, is rolling out soon.

![Person coding on a laptop at night with city lights in the background](https://images.unsplash.com/photo-1764452008254-eed469a4fad3?auto=format&fit=crop&w=800&q=80)

## How to Enable and Use the Features

Most users do not need extra setup. Skills over MCP is already on by default for Pro, Max, and Ultra. Tasks and Elicitation activate when a connected server supports them.

1. Open Claude on the web, desktop, or in Claude Code.
2. Connect or confirm an MCP server that supports Tasks or Elicitation. Examples include ZoomInfo for research, Supabase for database work, Railway for deployments, and GitHub for repository actions.
3. Start a conversation and ask for a multi-step or long-running job that matches the server’s tools. For example: “Research the top three competitors for this account and summarise recent news” with ZoomInfo connected.
4. Claude calls the tool. With Tasks, the server returns a task handle quickly. Claude continues and later incorporates the finished result.
5. If the server uses Elicitation, a form or link appears. Fill it in or approve the action. The server resumes from the same point.

In Claude Code the experience is similar in the terminal. Long tasks show a status indicator. Elicitation requests appear as interactive prompts.

## Practical Examples

**Background research with Tasks**  
Connect ZoomInfo. Ask Claude to pull detailed account and contact research that previously needed several separate prompts. The server runs the deeper queries while Claude drafts an email or updates a document. When the research finishes, Claude folds the results in.

**Approval before cost or deletion with Elicitation**  
Connect Supabase. Ask Claude to create a new project or run a SQL statement that modifies data. The server pauses and asks you to confirm the cost or the exact action. Only after you approve does it continue.

**Safe repository cleanup with GitHub**  
Ask Claude to delete a test repository. The GitHub connector uses Elicitation to require you to type the repository name before the deletion proceeds.

These patterns keep you in control while letting the agent handle the long or multi-step parts.

![Laptop screen showing code and a coffee mug on a developer desk](https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80)

## Tips for Better Results

- Start with a clear, specific request. Vague prompts reduce the chance that the server can usefully apply Tasks or Elicitation.
- Watch for the confirmation UI. Approvals are intentional; do not skip them on production data or paid actions.
- Combine with Skills over MCP. Servers can ship playbooks that guide Claude on when to use long tasks or request confirmation. See the related guide on [Skills over MCP setup](/blog/claude-skills-over-mcp-setup-guide/).
- Check your plan. Free users do not have access. Team admins may need to enable related features.
- Monitor usage. Long background tasks still consume your plan’s limits once results return.

## Limitations to Know

Not every MCP server supports Tasks or Elicitation yet. The server author must implement the extensions. Availability also depends on your Claude plan and whether your organisation has finished the rollout.

Elicitation protects against accidental actions, but you remain responsible for the final approval. Review the details shown in the form before confirming.

File Uploads is not generally available at the time of writing. Until it ships, large files still go through the conversation context or other workarounds.

## Conclusion

MCP Tasks and Elicitation turn connectors from simple tool lists into partners that can run longer work and check with you at the right moments. On supported plans you can start using them today with existing marketplace connectors that have added the features.

Connect a capable server, hand off a multi-step job, and approve the sensitive steps when they appear. The result is less waiting and clearer control.

## Sources

- Anthropic: MCP servers can now ship skills, run tasks, and more with Claude (24 November 2026) — https://claude.com/resources/articles/skills-over-mcp-tasks-and-more
- Model Context Protocol documentation for Tasks and Elicitation extensions
- Claude product availability notes for Pro, Max, and Ultra plans

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/TCl6gPAaQMc"
    title="Claude Skills over MCP, Tasks and Elicitation Explained"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
