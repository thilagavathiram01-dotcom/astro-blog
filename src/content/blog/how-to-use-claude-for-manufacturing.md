---
title: "How to Use Claude for Manufacturing Plugin"
description: "Step-by-step guide to install Claude for Manufacturing, connect Autodesk Fusion, Infor, NetSuite and Microsoft 365, and use its 17 plant skills."
pubDate: 2026-11-13T18:00:00
heroImage: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "ai", "productivity"]
noindex: false
---

Anthropic launched Claude for Manufacturing on November 12, 2026. The plugin adds 17 skills that help plant teams draft quotes, nonconformance reports, breakdown diagnoses, supplier requests and production reports from the systems they already run.

It works on Claude Team and Enterprise plans. Every output stops for a human review before it reaches a customer or supplier. The plugin does not operate equipment.

## What the Plugin Covers

The 17 skills span sales, quality, operations, supply chain, design and setup. Some handle one task. Others chain several steps until a person needs to approve the result.

Examples include:

- Quoting a new job: Claude reads the customer request, lists missing information, compares costs on similar jobs and drafts the quote.
- Investigating a failed inspection: It documents the failure, checks past reports, ranks likely causes and drafts the corrective action report (NCR or 8D).
- Diagnosing a breakdown: Claude reviews sensor exports, repair notes, photos and the manual, then ranks causes for a technician to check.
- Sourcing from another supplier: It prepares the RFQ package and compares the bids that return.
- Comparing designs in Autodesk Fusion: An engineer can generate variations, score them against targets and receive a decision memo.
- Reporting on production: A plant manager gets a report that shows output against target, downtime and the cost of both.

These skills start from your existing records. Organizations can adapt them to their own forms and procedures.

![Workers assembling products on a factory production line](https://images.unsplash.com/photo-1589793463357-5fb813435467?auto=format&fit=crop&w=800&q=80)

## Connectors to Existing Systems

Claude for Manufacturing connects to four systems:

- Autodesk Fusion for design variations and trade studies.
- Infor for purchase orders, stock and production data.
- Microsoft 365 for procedures, emails and exported reports.
- Oracle NetSuite for orders, inventory, production steps and job costs.

If a system has no connector, teams can drop regular CSV or file exports into Microsoft 365. Claude works from those files. Eleven of the skills still function without live connectors. Only the design exploration skill needs a live Autodesk Fusion connection.

Infor also released its own plugin. With that, approved users can take write actions such as releasing a purchase order or rescheduling production after a review.

## How to Install and Set Up

On a Team or Enterprise plan:

1. Install the Claude for Manufacturing plugin from the Claude plugin directory.
2. Open a new chat and type “Set us up.”
3. Claude asks which ERP, CAD, maintenance and document systems the plant uses.
4. It tests the four supported connectors.
5. It accepts a drop of your plant documents so it only asks questions the files do not answer.
6. It learns your export folder, shift pattern and vocabulary.
7. It returns a list of anything still missing and which skills those gaps limit.

Setup never blocks. Deferred items go on a gaps list. You can start with the skills that already work and add connectors later.

For Autodesk Fusion, enable the Fusion MCP Server in the desktop app under Preferences → General → API. Keep Fusion open with a document loaded.

For Microsoft 365 and Oracle NetSuite, enable the connectors in Claude’s connector settings. For Infor M3, add the company’s MCP server address as a custom connector.

## Running Everyday Jobs

After setup, describe the work in plain language. Claude selects the right skill.

An estimator can say “An RFQ came in” or “Price this job.” Claude pulls the inquiry into a consistent form, checks it against plant capabilities, builds the quote from actual costs and routing, and shows its working. A person reviews and releases it.

A quality engineer can say “Write up this nonconformance” or “Why did this happen?” Claude cites the violated requirement, estimates the suspect quantity across locations, searches prior NCRs, and drafts the 8D up to the point that needs real action.

A technician can say “The machine is down.” Claude ranks likely causes from sensors, history and the manual, and suggests the cheapest test that distinguishes them. Safety notes come first.

A plant manager can schedule the morning production report. The skill runs from the previous day’s export and notes if the file is missing.

Every skill that would change a system pauses for approval. Nothing is sent or written without a person’s confirmation. Claude links figures and claims back to the source records so reviewers can check them.

![Industrial factory interior with production equipment](https://images.unsplash.com/photo-1716191300020-b52dec5b70a8?auto=format&fit=crop&w=800&q=80)

## What Claude for Manufacturing Does Not Do

The plugin drafts and analyzes. It does not operate plant equipment. For physical control, Anthropic is developing the Model Hardware Standard research preview. That standard gives programmable machines a way to describe their measurements, settings and safety limits so an AI agent can interact with them within those bounds.

Watch Anthropic’s short overview of the Model Hardware Standard:

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/UxJZrCFzTHY"
    title="Model Hardware Standard: AI operating physical equipment"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for Plant Teams

Start with one measured process. Many teams begin with the morning report or the NCR workflow and compare Claude’s drafts with the process they already track.

Keep the human review step. The skills are built to end at approval.

Use scheduled exports if live connectors are not ready. The plugin is designed to work from a folder of CSVs.

Adapt the skills. They are a starting point. Organizations can extend them for their own forms.

Register for the technical webinar on November 17, 2026, to see the plugin in action.

If you already use Claude for other work, the same Team or Enterprise plan covers the manufacturing plugin. You can also explore related Claude capabilities such as [Access Claude Opus 5.5 in Google Antigravity](/blog/access-claude-opus-5-5-google-antigravity/).

## Sources

- Anthropic, “Introducing Claude for Manufacturing,” November 12, 2026. https://claude.com/resources/articles/claude-for-manufacturing
- Claude plugin repository documentation for Claude for Manufacturing. https://github.com/anthropics/claude-plugins-official/tree/main/plugins/claude-for-manufacturing
- Anthropic, Model Hardware Standard research preview. https://www.anthropic.com/news/model-hardware-standard-research-preview
