---
title: "How to Use Stitch Loop for Continuous Product Optimization"
description: "Step-by-step guide to Google Stitch Loop: join the waitlist, connect GitHub and metrics, run security and custom loops for ongoing product improvements."
pubDate: 2026-11-28T14:00:00
heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "ai", "productivity", "google"]
noindex: false
---

Lean teams ship features fast with coding agents. The hard part starts after the pull request merges. Bugs appear, latency creeps up, and conversion drops hide in noisy feedback. Stitch Loop from Google Labs addresses that gap.

Stitch Loop is a long-running product agent. It connects to your codebase and live metrics. It finds issues and keeps working until measurable goals are met. Google announced it on 18 November 2026 as an experiment under Stitch.

![Team reviewing analytics dashboard on laptop](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80)

## What Stitch Loop Does

Coding agents stop when code lands. Stitch Loop continues. It monitors production data. It proposes changes. It writes code in a cloud sandbox. It opens a GitHub pull request for your review. Nothing merges without your approval.

You connect GitHub plus product context. Context can include logs, user behaviour, feedback, or custom sources. The system supports over 180 integrations, MCP servers, or local CLI uploads. Grounded in that data, it runs evergreen loops toward outcomes you set.

Three default loops ship out of the box: cybersecurity, latency, and accessibility. You can add custom loops, such as improving checkout conversion.

## How the Four-Step Loop Works

Each loop follows the same cycle:

1. **Suggestions.** Stitch Loop surfaces opportunities backed by evidence from your product data.
2. **Solutions.** Each suggestion includes one or more options with trade-offs, scoping notes, and visual designs when relevant.
3. **Build.** After you pick a direction, the agent writes the code in an isolated sandbox and opens a pull request. The PR can include screenshots and videos of the changes.
4. **Reflect.** It watches live metrics. It learns from positive and negative results. Once the goal is met it keeps watching in case the metric slips.

You always make the final call on merges.

## Security Loop with Gemini 4 Carbon and CodeMender

Security is a common gap for small teams. The built-in security loop pairs Gemini 4 Carbon’s cybersecurity capabilities with CodeMender, DeepMind’s autonomous agent for code security. It scans the codebase for vulnerabilities. It flags each issue with evidence. It opens a PR with a proposed fix.

This runs continuously so issues are caught before they become incidents.

## Use It with Existing Agents and Slack

Stitch Loop works as a service layer. Your preferred coding agent (Google Antigravity or others) can pull persistent product context via the Stitch CLI and MCP. This supports mixed-model setups and autonomous improvements inside your current workflow.

In Slack you can @stitch for daily insight digests or to create new loops. This keeps the work inside the tools your team already uses.

![Developer coding on multiple monitors at night](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## How to Join the Waitlist and Prepare

Access starts with a waitlist. It opened globally on the announcement day. Eligible Google AI Ultra subscribers receive priority. Everyone else can join.

Steps:

1. Go to stitch.google.com/loop/waitlist.
2. Sign in with your Google account.
3. Submit the form. Priority goes to Ultra users.
4. Watch your email and the Google Labs Discord (#stitch) for updates.
5. Prepare your GitHub repository and metric sources so connection is fast once access arrives.

While you wait, document the measurable outcomes you care about most. Clear goals (reduce checkout latency by 20 percent, raise accessibility score, cut security findings) make the first loops more effective.

For related agent work with Gemini models, see our guide on [using Gemini 4 Neon for coding and knowledge work](/blog/how-to-use-gemini-4-neon-coding-knowledge-work/).

## Practical Tips

Start with one default loop after access. Security or latency is usually the easiest to measure. Review every PR carefully; the agent proposes, you decide.

Connect real production metrics early. Synthetic data produces weaker suggestions. Use the Reflect step’s learning; do not reset loops unless the goal changes.

Combine it with your existing coding agents via MCP rather than replacing them. Stitch Loop supplies the product context; your agent handles the detailed implementation style you prefer.

Share feedback in the Google Labs Discord. Early experiments improve from user reports.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/9guiyLXtEzc"
    title="Introducing Stitch Loop | Google Labs"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Stitch Loop shifts product work from one-off feature shipping to continuous optimisation. Lean teams gain a persistent agent that watches metrics, proposes evidence-backed changes, and opens reviewable pull requests. Join the waitlist, prepare your repository and goals, and integrate it with the agents you already use.

The experiment is early. Results will depend on clear metrics and careful PR review. Teams that treat it as a partner rather than a fully autonomous system will get the most value.

## Sources

- Introducing Stitch Loop, Google Blog, 18 November 2026: https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-loop/
- Introducing Stitch Loop, Google Labs YouTube: https://www.youtube.com/watch?v=9guiyLXtEzc
- Stitch Loop waitlist: https://stitch.google.com/loop/waitlist
