---
title: "Claude Usage Policy Changes Effective November 12"
description: "The Claude Usage Policy update takes effect November 12, 2026. Review new rules on deception, surveillance, high-risk use, and hardware controls."
pubDate: 2026-10-09T09:30:00
heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai", "security"]
noindex: false
---

Anthropic published a new Usage Policy on October 8, 2026. It takes effect on November 12. Most of the text clarifies rules the company already enforces, but product and legal teams still need to check whether their Claude workflows match the rewritten sections.

The update covers Claude on the web, in apps, in Claude Code, and through the API. Anthropic says the refresh responds to longer, more independent model work and to misuse patterns documented in its September 2026 threat intelligence report. The full Usage Policy and Supported Regions Policy sit on Anthropic's legal pages.

If you already ship a Claude integration, treat November 12 as a review date, not a feature launch. The rules below are the ones that change how a product team should document use cases.

## When the new policy applies

The October 8 post is the summary. Enforcement of the updated text starts November 12. Until that date, the previous policy remains the stated baseline.

Anthropic says most edits are meant to make existing prohibitions easier to find. A few sections add examples that map old rules onto newer capabilities, including autonomous physical actions and sustained abuse of the model. Teams should not assume a quiet wording change is optional. If a use case sits near elections, surveillance, health, finance, or weapons-related software, re-read the matching section before the effective date.

![Person reviewing policy documents on a laptop](https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80)

## Deceptive campaigns are now one section

Anthropic moved scattered limits on fake accounts, fabricated news sites, and hidden sponsorship into a single section: Do Not Engage in Deceptive Campaigns or Artificial Activity. It applies to political and commercial deception.

The section covers efforts to hide who is behind a message, amplify content through fake accounts or posts, and build tools or infrastructure for influence campaigns. The company says state media outlets, government propaganda offices, and commercial firms have used Claude for networks of fake accounts and fabricated news sites. Those patterns were already banned. They were just split across elections, fraud, privacy, and disinformation rules.

Practical check: if your product generates social posts, comments, or site copy at scale, keep a human owner on the account and do not present model output as an independent person or newsroom. Building a scheduler that posts as real users without disclosure falls inside the new section's examples.

## Elections rules are narrower, not gone

The elections section is renamed Do Not Undermine Democratic Processes. Anthropic now focuses it on deceiving voters or disrupting elections. Examples in the announcement include false information about candidates or how to vote, impersonating candidates or election officials, and attempts to suppress turnout.

The blanket ban on personalized vote and campaign targeting is removed. Anthropic says that ban blocked legitimate civic work, such as nonprofits writing voter information in other languages or election officials sending ballot cure notices. Targeting that relies on deception or misuse of personal data stays prohibited under the deceptive-campaigns, surveillance, and privacy sections.

If you run a civic tool, document the source of voter data and the claim you are making. Language help and official notices are in bounds. Fake official notices are not.

## Weapons software is called out by name

The weapons prohibition still covers developing weapons. The October 8 summary says people have tried to use Claude to build guidance and control software for weapons. The updated section states that the ban includes software and components that make weapons work, plus actions such as arming drones and other autonomous vehicles.

Anthropic says this matches how it already enforced the prior policy. A robotics team writing motor-control code for a warehouse arm is a different case from guidance software for a weapon. If your domain is dual-use, write down the intended system and keep weapon-control tasks out of prompts and training data you supply.

## Surveillance and criminal justice wording is tighter

The September threat report described AI used to build systems that identify and track political dissidents. The rewritten surveillance and criminal justice section bans tracking people without consent, whether in real time or by analyzing data collected earlier. It also bans using Claude to decide or recommend who to investigate, arrest, or charge in a law enforcement or criminal justice process, and bans building or improving tools designed for surveillance.

Permitted examples in the announcement include tracking people have agreed to, such as fraud monitoring, plus content moderation, journalism, and legal research. Anthropic says the rewrite does not change what it enforces in practice.

A fraud desk that scores transactions a customer agreed to monitor is different from a product that locates a person who did not consent. Put that distinction in your acceptable-use notes for any agent that queries location, identity, or device graphs.

![Server room representing monitored systems](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80)

## High-risk use still needs a human in the loop

Requirements for high-risk use cases did not change, but the section was rewritten because customers kept asking whether a given workflow was covered. When a product can affect someone's health, legal rights, finances, livelihood, or access to essential services, Anthropic requires a qualified human in the loop. That person must have authority to review and, if needed, change Claude's recommendations. The affected individual must be told that AI was used.

The updated section lists which kinds of recommendations are covered and which are not. Read that list against your actual prompts. A draft email that a clinician edits is not the same as an automated denial of a benefit.

If you already route sensitive Claude calls through a review queue, confirm the reviewer can override the output and that the user-facing screen discloses AI use. Those two checks are the policy requirements named in the announcement.

## Hardware that can move needs a stop control

After the Model Hardware Standard research preview, the high-risk section adds rules for models connected to hardware that takes autonomous physical actions and might cause injury. A qualified operator must be able to observe the equipment and stop it. The equipment must be able to hold a safe state if Claude is disconnected.

This is the clearest new operational control in the October 8 summary. If you are wiring Claude to a robot, vehicle, or lab instrument, test the disconnect path before November 12. The operator should see the motion, and the machine should not keep acting after the model session drops.

## Abuse toward the model is limited to extreme cases

Anthropic added a prohibition on sustained and needless abusive or cruel behavior toward its models. The company says this applies only in extreme cases where a user repeatedly acts cruelly with no discernible purpose. It does not cover ordinary frustration, pushback, dark creative themes, or model testing and research.

Enforcement on Claude.ai and Claude Code already lets models end rare conversations with persistently abusive users. That end-conversation behavior remains the main mechanism. API customers do not need a new classifier for routine negative feedback.

## Supported regions: ownership counts

Last year Anthropic restricted access for companies majority-owned by entities headquartered in unsupported regions. The Supported Regions page now states how that rule is applied. Use is prohibited for people physically located in an unsupported region, for entities incorporated or headquartered there, and for entities majority-owned or controlled by persons or entities in those regions.

Billing address alone is not the whole test. If your company structure includes a parent in an unsupported region, check the Supported Regions page with counsel before you expand seats.

## How to review your setup before November 12

Work through these steps with the person who owns the Claude integration, not only legal.

1. Open the October 8 announcement and the current Usage Policy. Mark every product surface that calls Claude: chat UI, batch jobs, agents, and Claude Code repos.
2. List use cases that touch health, money, legal rights, employment, or essential services. For each one, name the human who can change the recommendation and where the user sees the AI disclosure.
3. Search prompts and tool descriptions for account creation, posting, or identity fields. Remove any flow that hides the operator or farms fake engagement.
4. If an agent queries location, identity, or device history, confirm consent or drop the tool. Do not ask the model to recommend arrests or charges.
5. If Claude is connected to hardware, run a disconnect test. Confirm a person can see the equipment and that it holds a safe state when the session ends.
6. Check entity ownership and user location against the Supported Regions page.
7. Save the review date and the policy URL in your vendor file so the next refresh is not a surprise.

Developers comparing model choices can also read the [Claude Haiku 5.5 API setup guide](/blog/claude-haiku-5-5-api-setup-guide/) for current model IDs and pricing. Security teams evaluating Anthropic's separate trusted-access track can use the [Cyber Verification Program application guide](/blog/apply-claude-cyber-verification-program/). Those programs are not substitutes for the Usage Policy.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/PQGxYvkMobQ"
    title="How data retention works when using Claude"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for staying inside the policy

Keep system prompts factual about who the user is. Do not instruct Claude to pose as a government office, a news outlet, or a private individual.

Log the human reviewer on high-risk decisions. A queue that nobody can override does not meet the "authority to change the recommendation" bar described in the announcement.

Separate research red-team prompts from production traffic. The abuse clause exempts model testing, but production users still should not be steered into pointless cruelty loops.

Re-read the policy when you add tools. A harmless summarizer becomes a surveillance workflow the moment it is wired to a location feed the subject did not agree to.

## What to do on November 12

Nothing in the announcement requires a model ID change or a new API parameter on that date. The work is documentary and product-side: disclosures, review rights, consent, and stop controls.

If a workflow cannot meet the high-risk or hardware rules, take it off Claude before the effective date rather than hoping the clarifying language does not apply. Anthropic says it will keep updating the policy as capabilities change, and that it seeks input from customers and outside experts on each refresh.

## Sources

- Anthropic, "2026 Usage Policy update," October 8, 2026: https://www.anthropic.com/news/2026-usage-policy-update
- Anthropic Usage Policy: https://www.anthropic.com/legal/aup
- Anthropic Supported Regions: https://www.anthropic.com/supported-countries
- Claude, "How data retention works when using Claude": https://www.youtube.com/watch?v=PQGxYvkMobQ
