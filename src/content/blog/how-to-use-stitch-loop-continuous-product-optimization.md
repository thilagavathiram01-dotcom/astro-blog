---
title: "How to Use Stitch Loop for Continuous Product Optimization"
description: "Join the Stitch Loop waitlist, connect GitHub and metrics, and set up security, latency, and accessibility loops for ongoing product improvements."
pubDate: 2026-11-22T17:00:00
heroImage: "https://images.unsplash.com/photo-1576836165612-8bc9b07e7778?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials"]
noindex: false
---

Coding agents help you ship features quickly, but the work does not end when the pull request merges. Post-launch issues—security gaps, slow checkout flows, and accessibility barriers—still need attention. Stitch Loop, a new experiment from Google Labs announced on November 18, 2026, addresses this by connecting to your codebase and live metrics and working continuously toward measurable goals.

Google Labs describes Stitch Loop as a long-running product agent that finds what needs fixing and keeps working until your goals are met. It builds on the existing Stitch design tool that millions of designers and developers already use. Together they aim to support lean teams from ideation through continuous optimization.

## What Stitch Loop Does

Stitch Loop runs evergreen loops aimed at specific outcomes. You connect GitHub and product context such as logs, user behavior, and feedback. Google lists more than 180 integrations, plus support for custom MCP servers or local CLI uploads.

Three default loops ship out of the box:

- Security: pairs Gemini 4 Carbon’s cybersecurity capabilities with CodeMender, Google DeepMind’s autonomous agent for code security.
- Latency: focuses on keeping the product fast.
- Accessibility: works to make the product usable for more people.

You can also create custom loops, for example improving checkout conversion.

Each loop follows four steps. First, Suggestions surfaces opportunities grounded in evidence from your product. Second, Solutions offers one or more options with tradeoffs, scoping, and visual design choices where relevant. Third, Build writes code in an isolated cloud sandbox and opens a GitHub pull request for your approval. The PR can include screenshots and videos of the work. Fourth, Reflect monitors live data, learns from results, and continues watching after a goal is met in case the metric slips.

You always retain the final decision. Nothing merges until you review the PR.

![Developer reviewing code on multiple screens](https://images.unsplash.com/photo-1743090661053-3d1feb2beab7?auto=format&fit=crop&w=800&q=80)

## How to Join the Waitlist

Access begins with a waitlist that opened on November 18, 2026, for all users globally. Eligible Google AI Ultra subscribers receive priority. Visit stitch.google.com/loop/waitlist to join. Share feedback in the Google Labs Discord.

Once invited, you create a workspace linked to a selected GitHub project. From there you can activate the default loops or define your own. The system grounds suggestions in the connected context so recommendations reflect actual product data rather than generic advice.

## Setting Up Security, Latency, and Accessibility Loops

Start with the built-in loops. The security loop scans the codebase for vulnerabilities and opens PRs with proposed fixes backed by evidence. It uses Gemini 4 Carbon together with CodeMender. Latency and accessibility loops similarly identify issues and propose changes tied to measurable outcomes.

To activate a loop:

1. Connect your GitHub repository in the Stitch Loop workspace.
2. Link product metrics or feedback sources through the available integrations.
3. Select a default loop or create a custom one with a clear goal.
4. Review suggestions as they appear and choose a solution.
5. Approve or request changes on the generated pull request.

Because the agent works in an isolated sandbox, the production codebase stays untouched until you merge.

## Using Stitch Loop with Existing Workflows

Stitch Loop can serve as a service layer for other coding agents such as Google Antigravity. Your preferred agent can pull persistent product context via the Stitch CLI and MCP. This supports mixed-model setups and keeps improvements aligned with live data.

In Slack, mention @stitch to receive daily insight digests or create new loops without leaving the chat. The combination keeps the optimization process visible to the whole team.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/9guiyLXtEzc"
    title="Introducing Stitch Loop | Google Labs"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for Getting Value from Stitch Loop

Define clear, measurable goals. Loops work best when the outcome is specific—reduce p95 latency by 20 percent, close a set of accessibility issues, or lower a vulnerability count—rather than open-ended improvement.

Connect high-quality context early. Logs, user behavior data, and structured feedback give the agent better evidence for suggestions. Incomplete context leads to weaker recommendations.

Review PRs carefully. The agent proposes fixes, but you decide what ships. Check the evidence, the tradeoffs listed with each solution, and any screenshots or videos included in the PR.

Start with one loop. The security loop is a practical first choice for many teams because vulnerabilities have clear signals and measurable progress. Expand to latency, accessibility, or custom goals once the workflow is familiar.

Pair it with design work in Stitch. If you already use Stitch for interfaces, the continuous optimization layer can pick up after launch and keep refining based on real usage.

![Code editor with syntax highlighting](https://images.unsplash.com/photo-1753998943619-b9cd910887e5?auto=format&fit=crop&w=800&q=80)

## Limitations and What to Expect

Stitch Loop is still an experiment. Pricing and a general availability date have not been announced. Access depends on the waitlist, with priority for Google AI Ultra users. Early users will shape the product through feedback in the Google Labs Discord.

The agent does not merge code on its own. Every change requires human review. It also depends on the quality and completeness of the connected data sources. Teams with limited instrumentation may see fewer or less precise suggestions until more context is available.

## Conclusion

Stitch Loop extends the idea of coding agents past the moment of shipping. By connecting to the live product and running continuous loops for security, latency, accessibility, or custom goals, it gives lean teams a way to keep improving after launch. Join the waitlist at stitch.google.com/loop/waitlist, connect your repository and metrics, and start with a focused loop. Review every pull request before it merges, and use the Slack and MCP integrations to fit the process into the workflows you already use.

For related design workflows, see our guide to using Google Stitch for AI UI design at [/blog/how-to-use-google-stitch-ai-ui-design/](/blog/how-to-use-google-stitch-ai-ui-design/).

## Sources

- Google Labs blog: Introducing Stitch Loop (November 18, 2026)
- Stitch Loop waitlist: stitch.google.com/loop/waitlist
- Google Labs Discord for feedback
- Gemini 4 Carbon and CodeMender documentation referenced in the announcement
