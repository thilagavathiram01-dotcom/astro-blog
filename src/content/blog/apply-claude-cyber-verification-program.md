---
title: "How to Apply for the Claude Cyber Verification Program"
description: "Security teams can apply for Anthropic's Claude Cyber Verification Program. See the three access tiers, portal steps, and what to prepare."
pubDate: 2026-10-07T10:00:00
heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["security", "ai-tools", "tutorials", "how-to", "developer"]
noindex: false
---

Anthropic expanded its Cyber Verification Program on October 6, 2026. Security teams that keep hitting safety blocks on legitimate defensive work can apply for one of three access tiers covering Claude Opus 5.5, Claude Sonnet 5.5, Claude Mythos 5.1, and later models.

The public models still block most cybersecurity tasks. Anthropic says that limit is intentional: the same capability that helps a team validate a flaw can also be misused. Code review, patching known issues, finding issues in source you own, and alert triage stay available without the program. Malware analysis and other defensive work may still stop mid-task until you are verified.

This guide covers who qualifies, what each tier allows, and how to submit one application.

## What changed on October 6

For six months Anthropic ran two paths. Project Glasswing gave a smaller set of organizations access to Claude Mythos for critical software. The original program reduced safeguards on Claude Opus and Claude Sonnet for vetted security teams.

Those paths are now one program. Existing members keep their current settings on older models. Anthropic will automatically evaluate them for Opus 5.5, Sonnet 5.5, and Mythos 5.1. Admins still assign the grant to specific workspaces. Project Glasswing members move to Specialized Access and do not need reapproval for current models.

Glasswing partners reported at least 129,000 verified software vulnerabilities between April and July 2026. Anthropic’s open-source scanning found another 5,500 between April and October 2026. More than 33,000 were rated critical or high. Anthropic calls that a lower bound from partial surveys and expects the true count to be at least five times higher.

![Analyst reviewing security dashboards on multiple monitors](https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80)

## Pick the tier that matches the work

You submit one application. Anthropic places the organization at the highest tier the evidence supports. Do not file separate applications for each teammate. Admins assign seats after approval. Independent researchers, maintainers, and bug bounty hunters apply as individuals. The Help Center says only Tier C is open to individual applicants right now, and the announcement says Red Team Access is organizations only.

**Defense Access** covers security operations, incident response, malware reverse engineering, and analyzing or validating vulnerabilities. Qualifying groups include company, nonprofit, university, and government defenders, critical-infrastructure operators, smaller security firms, open-source maintainers, and individual researchers with a record of reported vulnerabilities. Anthropic expects many defensive teams to qualify and aims to reply within a few days.

**Red Team Access** adds authorized testing against systems the organization is allowed to test. In-house red teams, government red teams, and security testing firms are the examples given. Blocks remain for actions that could cause physical harm or mass disruption. Reviews can take a few weeks, and qualifying organizations stay on Defense Access while that review runs.

**Specialized Access** has the fewest cyber blocks. It is limited to verified organizations authorized to test safety systems that could affect lives or markets, such as flight systems, power grids, telecom networks, interbank transfers, and government administrative networks. Anthropic reviews each applicant in depth with the U.S. government.

For everyday model switching outside cyber work, see [how to switch to Claude Sonnet 5.5](/blog/claude-sonnet-5-5-switch-guide/).

Anthropic tested the tiers with Claude Opus 5.5 on CyScenarioBench. Across five attempts at each of 10 challenges, every task was blocked on the first prompt without program access. In Defense Access, 46 of 50 trials were blocked and four succeeded. In Red Team Access, no blocks occurred and the model completed 34 of 50 tasks, matching the 67.6 percent rate Anthropic reports with no safeguards.

## Where the program is available

The program is available on the Claude Platform, Google Cloud’s Vertex AI, and Microsoft Foundry. On Amazon Bedrock it is limited to customers eligible for Enterprise Frontier Safeguards. Defense and Red Team Access can also be requested through third-party platforms that support the program. Specialized Access is not available that way.

Data retention is required so Anthropic can monitor for misuse. Later this fall, eligible organizations can keep data in infrastructure they control through Enterprise Frontier Safeguards. Until that ships, organizations that already have zero data retention on Claude Fable 5.1 or Claude Mythos 5.1 can use the program with zero data retention. Claude Mythos 5.1 pricing starts at $10 per million input tokens and $50 per million output tokens.

## How to apply

Anthropic’s Help Center says a review email, or a request for more information, should arrive within seven business days. The announcement is more specific: a few days for Defense Access, and a few weeks for Red Team Access.

Prepare organization and applicant details, a plain description of the security work, and an attestation of the controls required for the tier you want.

Apply at the [Verification Portal](https://portal.anthropic.com/programs/cvp). The path depends on how you call Claude.

**Claude.ai, Claude Code, or the Anthropic API.** Sign in, open Programs, choose Cyber Verification Program, and select Apply.

**Claude on Google Cloud.** Under Linked accounts, choose Google Cloud, enter the project ID (not the project number), run the gcloud command shown, then verify. Apply only after the link succeeds.

**Microsoft Foundry.** Deploy a Claude model in Foundry first. Link the Azure subscription and directory IDs, run the commands shown, verify, then apply.

**Amazon Bedrock or Claude Platform on AWS.** Bedrock enrollment is only for Enterprise Frontier Safeguards customers. Link the 12-digit AWS account ID and create the verification role from the portal. Link Claude Platform on AWS IDs before Bedrock IDs.

**A third-party coding tool.** Ask that platform for an Anthropic enrollment link. Those links expire quickly, and you cannot start the link from the Linked accounts page.

![Team working through a checklist on laptops](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Turn on access after approval

Approval does not always switch the model on by itself.

- Claude Console and API organizations must assign the program to workspaces.
- Claude Enterprise admins assign it to a custom role.
- Claude Team, Max, and Pro attach the program at organization level.
- On Bedrock, Google Cloud Agent Platform, and some cloud projects, an owner still turns the approved level on for the linked account. Mythos access can trail approval by about five business days. Contract customers may also need to accept a marketplace private offer.

The Usage Policy still applies. Anthropic can review, narrow, or withdraw a grant. Client-facing products built on these capabilities follow a separate Cyber Productization Policy, which is not open yet.

Defense Access organizations have until December 15, 2026 to adopt phishing-resistant multi-factor authentication and stop using API keys. Until then, some form of multi-factor authentication is required, and API keys expire every seven days. Anthropic recommends Workload Identity Federation now. Existing customers keep current terms for access they already have.

If a task you believe your tier should allow is still blocked, use Anthropic’s [false-positive form](https://claude.com/form/cyber-block-false-positive-report-cvp-rejection-appeal). A webinar on tiers and setup is set for October 14, 2026, at 9:00 a.m. PT.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/INGOC6-LLv0"
    title="An initiative to secure the world's software | Project Glasswing"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical tips before you submit

Apply once. Duplicate applications inside the same company slow review, because only admins designate seats. Match the write-up to the tier. A team that analyzes malware on systems it owns should not describe that work as safety-system testing. A red team should state which systems it is authorized to test.

Link the cloud account before you apply if you use Google Cloud, Azure, or AWS. Plan for retention if policy forbids Anthropic storing prompts. Check zero data retention on Fable 5.1 or Mythos 5.1, or register interest in Enterprise Frontier Safeguards. Keep public models for routine secure-coding tasks.

## What to do next

If blocks are already stopping incident response or malware analysis, file the Defense Access application and gather the control attestation while you wait. Red teams should apply knowing the longer review still starts them on Defense Access. Specialized Access is a narrow path reviewed with the U.S. government, not a general upgrade. The October 6 change does not remove safeguards for the public. It routes reduced blocks to verified defenders, with retention and tier limits still in place.

## Sources

- Anthropic, Expanding the Cyber Verification Program, October 6, 2026: https://www.anthropic.com/news/cyber-verification-program
- Claude Help Center, Cyber Verification Program, updated October 2026: https://support.claude.com/en/articles/14604842-cyber-verification-program
- Anthropic, Claude Mythos availability and pricing: https://www.anthropic.com/claude/mythos
- Anthropic, Project Glasswing, April 7, 2026: https://www.youtube.com/watch?v=INGOC6-LLv0
