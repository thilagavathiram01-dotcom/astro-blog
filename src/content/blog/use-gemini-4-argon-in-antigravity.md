---
title: "How to Use Gemini 4 Argon in Google Antigravity"
description: "Step-by-step guide to access and use Gemini 4 Argon inside Google Antigravity for long-horizon coding and agent tasks on Pro and Ultra plans."
pubDate: 2026-10-26T15:00:00
heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "developer", "ai"]
noindex: false
---

Google Antigravity is the agent-first desktop app and CLI for building with AI agents. On 13 October 2026 Google rolled Gemini 4 Argon into Antigravity for Google AI Pro and Ultra subscribers. Argon handles long-horizon software engineering, multi-file refactors, and complex planning better than earlier Gemini models.

You can point Antigravity at Argon for tasks that need sustained reasoning across many files or tools. This guide shows the exact steps from the official Antigravity blog and Google announcements.

![Developer workspace with laptop showing code](https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=800&q=80)

## What You Need

Argon in Antigravity requires a Google AI Pro or Ultra subscription for individuals. Eligible Gemini Enterprise plans also get access. Free and Google AI Plus tiers do not include Argon.

Update the Antigravity desktop app or CLI to the latest version released around mid-October 2026. The desktop app runs on macOS, Windows, and Linux. Google also offers it through the Gemini macOS app for personal accounts.

Sign in with the Google account that holds the paid plan. Antigravity shows remaining quota for each model in settings or via the CLI usage command.

## Download and Open Antigravity

Go to antigravity.google and download the installer for your operating system. Run the installer and launch the app.

Choose Continue with Google and sign in. Create a new project by selecting a local folder. For multi-folder workspaces, add extra directories under Project Settings.

The interface shows a chat pane for the agent, an auxiliary pane for plans and artifacts, and file views. Argon appears in the model selector once the client is updated and your account is eligible.

## Select Gemini 4 Argon

In the desktop app, open the model picker in the agent chat. Choose Gemini 4 Argon (gemini-4-argon). You can also set thinking levels: low for faster routing, medium as the default, or high for deeper multi-step work.

In the CLI, use the model flag or the /model command to switch. The CLI reports remaining usage so you can track the separate weekly Argon quota on Pro plans.

If Argon does not appear, restart the app after updating and confirm your subscription status on one.google.com.

![Multiple monitors with coding environment](https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=800&q=80)

## Run Long-Horizon Tasks

Argon shines on jobs that span many steps. Google teams use slash commands to keep the agent on track:

- /grill-me asks clarifying questions about edge cases and success criteria before coding starts.
- /plan opens an implementation plan in the auxiliary pane for you to approve or revise.
- /goal sets a measurable target so the agent works autonomously, writing code, running checks, and iterating while pausing for irreversible actions.

Give clear success criteria up front. Attach relevant files or point the agent at a repository. Argon holds context across the 1 million token window and can call tools via MCP or skills.

For example, ask it to audit a multi-service codebase for a specific performance issue, propose targeted changes, and verify them against tests. Internal Google use showed a 35 percent increase in agentic code submissions and a 30 percent drop in post-submit rollbacks over four weeks.

## Tips for Better Results

Start with a medium thinking level for most coding tasks and raise it to high only when the plan needs deeper analysis. Review the plan before the agent writes code so you catch scope issues early.

Connect custom skills or MCP servers for specialized workflows such as database queries or design tools. Google reported that teams outside core engineering, including finance and sales, adapted Argon this way for reconciliations and prospect research.

Watch the quota panel. Pro plans have a separate weekly Argon allotment on top of the regular Gemini bucket. Ultra offers higher limits refreshed every five hours plus a weekly cap.

Validate outputs. Argon can propose security fixes or performance changes, but always run the tests yourself and check the diffs. Google noted that earlier models missed issues that Argon caught in the same audit.

You can also use Argon through the Gemini API in managed agents by setting the model to gemini-4-argon in the agent config. This pairs with the Antigravity harness for remote execution.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/nSwmcs37Jd4"
    title="Gemini 4 Argon in Antigravity"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Gemini 4 Argon turns Antigravity into a stronger partner for complex, multi-step development work. Update the app, select the model, and start with a clear plan or goal. The same model is available in the Gemini app and API for other workflows.

For more on Argon access and pricing, see our guide on [how to access and use Gemini 4 Argon](/blog/how-to-access-use-gemini-4-argon/).

## Sources

- Gemini 4 Argon in Google Antigravity, Antigravity blog, 13 October 2026: https://antigravity.google/blog/gemini-4-argon-in-google-antigravity/
- Introducing Gemini 4 Argon, Google blog, 13 October 2026: https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/
- Gemini 4 Argon developer guide, Google AI Studio: https://aistudio.google.com/learn/gemini-4-argon-developer-guide
