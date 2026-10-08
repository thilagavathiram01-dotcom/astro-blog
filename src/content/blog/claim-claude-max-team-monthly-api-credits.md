---
title: "How to Claim Claude Max and Team Monthly API Credits"
description: "Claim Claude monthly API credits on Max and Team plans. Link a Console organization, see what the credit covers, and stretch it with Haiku 5.5."
pubDate: 2026-10-08T12:00:00
heroImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "developer"]
noindex: false
---

Anthropic started rolling out monthly Claude Platform credits for Max and Team subscribers this week. The balance is separate from chat limits in Claude, Claude Code, and Claude Cowork. It pays for API calls you make from your own apps and agents.

Free, Pro, and Enterprise plans are not eligible. If you pay for Max or Team, the credit is included in the plan. You still have to claim it by linking a Claude Console organization.

## What each plan receives

Anthropic published the amounts in the [Claude Help Center](https://support.claude.com/en/articles/17154008-monthly-api-credits-for-max-and-team-plans). The figures below are the official monthly grants.

| Plan | Monthly credit |
| --- | --- |
| Max 5x | $100 |
| Max 20x | $200 |
| Team Standard seat | $20 per seat |
| Team Premium seat | $100 per seat |
| Discounted Team (Nonprofit, Scientists) | Same seat rates as standard Team |

Team credits are pooled into one organization balance and capped at $500. A team with three Standard seats and two Premium seats receives $260 a month. The pool is calculated from the seats on the plan when the credits are granted. Adding a Premium seat raises the next cycle, not the current one.

Credits do not roll over. Unused balance expires at the end of the billing cycle. On annual plans, new credits still arrive monthly, shortly after the plan payment goes through.

![Developer reviewing API usage on a laptop](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Who can claim, and when

Four rules decide whether the offer shows up:

1. The Max or Team subscription must be active and in good standing.
2. New subscribers can claim only after seven days on an eligible plan.
3. You can subscribe on the web, iOS, or Android, but you claim on claude.ai in a browser.
4. You do not need a payment card on Claude Platform to claim or spend the credit.

Role checks are strict. On Max, only the subscriber can claim. On Team, only a Primary Owner or Owner can claim. In the Console organization you link, you need the Owner, Admin, or Billing role. If you do not have a Console organization yet, you can create one during the claim flow or at [platform.claude.com](https://platform.claude.com).

Anthropic says the offer is rolling out over a few days. If you are past seven days and still do not see API credits, confirm the plan and role first, then contact support.

## Link a Console organization

Claiming is a one-time link. Credits land in that organization each month.

1. Sign in to claude.ai with the same email you use in the Console.
2. Open **Settings > Billing** if you are the Max subscriber. Team Owners and Primary Owners open **Organization settings > Billing**.
3. In the **API credits** section, select **Link organization**.
4. Choose the Console organization that should receive the credits, or create a new one.
5. Review the Supplemental Credit Terms, then confirm **Link organization**.

The balance should appear in that organization right away. You can link only one Console organization, and each Console organization can receive credits from only one plan. You cannot change the linked organization yourself. Contact support if you need to move it later. Pick the organization you actually build in.

If the linking flow errors, Anthropic recommends signing in with the same email on both sides and trying again in a few hours.

## What the credits pay for

The credit works with any available Claude model on the Claude Platform. Covered surfaces are:

- The Claude API, including the Messages API and the Message Batches API
- The Playground in the Claude Console
- Claude Managed Agents
- The Claude Agent SDK
- `claude -p` when you run it yourself with an API key from the linked Console organization

The credit does not pay for interactive Claude Code in the terminal, an IDE, the desktop app, or the web. It does not cover extra usage after you hit plan limits in Claude, Claude Code, or Claude Cowork. It also does not apply to Claude on Amazon Bedrock, Google Cloud Vertex AI, or Microsoft Foundry.

Runs started by the Claude Code GitHub Action, an IDE extension, or the desktop app count as Claude Code usage even if you pass `-p`. Those runs stay on your plan limits.

This is not the Agent SDK credit announced in June. That earlier credit is not available. The October credit is the one you claim into a Console organization.

![Team reviewing charts on a shared screen](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80)

## Spend the balance before it expires

Monthly credits are used before any credits you purchased. Everyone with an API key in the linked organization draws from the same balance. Set workspace spend limits in the Console if you need to cap a project or a teammate.

Check the amount and expiry under **Settings > Billing** in Claude Console. When the monthly credit runs out, behavior depends on how the organization is billed:

- If you have purchased credits or auto-reload, usage continues from those.
- If you have no other credits, API requests stop until the next monthly grant. Usage is never charged to your Claude plan.
- If the organization is invoiced through Anthropic sales, usage beyond the credits is billed as usual.

Canceling, downgrading to an ineligible plan, or getting a refund stops new grants. Credits you already hold stay usable until they expire. Upgrading from Max 5x to Max 20x adds prorated credits right away, then $200 each cycle. Moving from Max to Team ends the Max link. A Team Owner can claim the team pool after the Team plan has been active for seven days.

## Stretch the credit with Haiku 5.5

Claude Haiku 5.5 launched on October 7, 2026, the same week as the credit. On the Claude Platform it costs $0.10 per million input tokens and $0.50 per million output tokens for prompts up to 100,000 tokens. Above that threshold the rates are $0.50 and $2.50. Cache reads are $0.01 or $0.05 per million tokens on the same split. Anthropic says about 90 percent of previous Haiku requests stayed under 100,000 tokens, and that average workloads cost about 75 percent less to run than on Haiku 4.5.

A $100 Max 5x grant covers a large volume of short Haiku calls: classification, extraction, routing, and subagent tasks. The model id is `claude-haiku-5-5`. It has a 1 million token context window and up to 128,000 output tokens on the synchronous Messages API. The newer tokenizer counts the same text as about 30 percent more tokens than Haiku 4.5, so budget token use, not character count.

For the request setup, model id, and effort parameter, use the existing [Claude Haiku 5.5 API setup guide](/blog/claude-haiku-5-5-api-setup-guide/). Keep Sonnet 5.5 or Opus 5.5 for the hard steps and route the repetitive ones to Haiku so the monthly grant lasts the cycle.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/bXe7TIwKKVQ"
    title="BREAKING: Claude Haiku 5.5 Is 90% Cheaper and 4x Faster (Tested)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical checks before you build

Create a dedicated API key in the linked organization and store it outside the repo. Turn on workspace spend limits before you share the key with a team. Watch the 100,000-token price step on Haiku 5.5 if you attach large files. Prefer prompt caching on repeated system prompts, since cache reads are priced far below fresh input.

Do not treat the credit as extra Claude Code quota. Interactive sessions still draw from your plan. If a script must use the credit, run `claude -p` with an API key from the linked organization, not a plan login.

## Conclusion

Max and Team subscribers get a monthly Claude Platform credit, but it is not automatic until you link one Console organization. Max 5x receives $100, Max 20x receives $200, and Team seats pool up to $500. The balance covers the API, Playground, Managed Agents, and the Agent SDK. It does not cover interactive Claude Code or cloud marketplaces. Claim it on claude.ai after seven days on the plan, then point high-volume work at Haiku 5.5 so the grant covers more of the month.

## Sources

- Anthropic Help Center, [Monthly API credits for Max and Team plans](https://support.claude.com/en/articles/17154008-monthly-api-credits-for-max-and-team-plans), updated October 7, 2026
- Anthropic Help Center, [Use the Claude Agent SDK with your Claude plan](https://support.claude.com/en/articles/15036540-use-the-claude-agent-sdk-with-your-claude-plan), update October 7, 2026
- Anthropic, [Introducing Claude Haiku 5.5](https://www.anthropic.com/claude-haiku-5-5), October 7, 2026
- Anthropic, [Claude Haiku model page](https://www.anthropic.com/claude/haiku)
- Claude Platform docs, [Haiku 5.5 overview](https://platform.claude.com/docs/en/models/haiku-5-5/overview)
