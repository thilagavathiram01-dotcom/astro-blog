---
title: "Enable OpenAI API HIPAA Support and Accept the BAA"
description: "OpenAI added self-serve HIPAA support on October 5, 2026. Accept the API BAA, check eligibility, and keep PHI on covered endpoints."
pubDate: 2026-10-06T14:00:00
heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["security", "chatgpt", "how-to"]
noindex: false
---

OpenAI added an in-product flow on October 5, 2026 so eligible API organizations can accept a standard Business Associate Agreement and turn on HIPAA compliance support. The control lives under Organization settings, then General. You still cannot send protected health information to the API until that agreement is in place and the account meets OpenAI’s configuration rules.

A BAA is the contract HIPAA uses between a covered entity or business associate and a vendor that handles PHI. Accepting it does not, by itself, make your app compliant. OpenAI says you remain responsible for how you use the service and for the rest of your obligations. The practical change is that admins no longer have to start every standard request by email.

## Who can accept the standard BAA

An enterprise contract is not required for API services. Self-serve enrollment does require an established history of API usage. OpenAI does not publish a spend threshold or a day count for that history. If the section says **Not eligible yet**, the organization does not currently meet the self-serve rules.

Only an organization admin can complete the flow. That person also needs authority to accept the agreement for the organization. Pick the correct organization before you start. The confirmation step asks you to match the organization name and Organization ID.

Once HIPAA compliance support is enabled, you cannot turn it off in API Platform settings. Treat the click as a lasting account change, not a toggle you can reverse after a test.

![Clinician reviewing records on a laptop in a hospital workspace](https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80)

## Accept the agreement in API settings

Sign in to the API Platform and select the organization you want to configure.

Open Settings, then Organization, then General. The direct path is the organization general settings page.

Under **HIPAA compliance support**, select **Enable**.

Download and review the Business Associate and Healthcare Addendum before you agree.

Read the coverage notes in the flow, including which API services are eligible for PHI. The public list of eligible products and endpoints is in OpenAI’s HIPAA eligible products article.

Confirm that you have authority to accept the agreement, that you reviewed it, and that you understand the coverage.

Confirm the organization name and Organization ID, then select **Agree and enable**.

When setup finishes, the section shows **Active**. Select **View agreement** later if you need to download the standard agreement again. Custom BAAs arranged outside this flow are not available from that setting.

If the status fails to load, select **Try again**. If enabling stops partway, select **Agree and enable** again. If the agreement changed, use **Reload agreement** when it appears, review the new file, and complete the confirmations again.

## What the API BAA covers

HIPAA eligibility for the API depends on the organization being provisioned with Modified Retention, unless OpenAI specifies otherwise. After that provisioning, and after the BAA is executed, the endpoints below can process PHI even if data is retained.

Covered endpoints include `/v1/chat/completions`, `/v1/responses`, `/v1/assistants`, threads and thread messages, runs and run steps, vector stores, image generations, edits, and variations, embeddings, audio transcriptions, translations, and speech, files, fine-tuning jobs, batches, moderations, completions, realtime, and `/v1/live/sessions`.

Codex Local that uses a customer API key is covered for data OpenAI processes only if the BAA includes API services with Modified Retention as an eligible service. OpenAI’s BAA does not cover how the local client runs on your machines, or third-party services the client reaches because of your instructions. You still have to configure the workstation.

Do not assume a new endpoint is covered because it exists in the API. OpenAI says features that are not listed are not automatically covered, and recently added functionality may not be on the page yet. Check the HIPAA Implementation and Configuration Guide linked from the help center before you route chart text, recordings, or images through a call.

![Team reviewing a compliance checklist at a desk](https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80)

## ChatGPT is a separate path

This October flow is for the API organization. It does not sign a BAA for consumer ChatGPT. OpenAI does not offer a BAA for ChatGPT Business. Sales-managed ChatGPT Enterprise or Edu accounts need a sales request. Eligible individual clinicians on ChatGPT for Clinicians use a different in-product BAA.

HIPAA-eligible ChatGPT products listed by OpenAI are ChatGPT for Healthcare, ChatGPT for Enterprise with Regulated Workspace, ChatGPT FedRAMP, and ChatGPT for Clinicians, plus API with Modified Retention and API FedRAMP with Modified Retention.

On those ChatGPT workspaces, some features are covered and some are not. Web search and deep research in a HIPAA-eligible workspace use OpenAI’s own search index. OpenAI says those workspaces do not send queries to third-party search providers such as Bing. Improved memory, Codex in the cloud, browser use for Work in the cloud, and event-triggered scheduled tasks are examples of functionality that is not covered. Those extras are off by default. Admins can enable them for roles that will not send PHI.

If your team uses ChatGPT privacy controls for consumer accounts, those settings are a different product surface. The steps in [How to Use the ChatGPT Privacy Center](/blog/chatgpt-privacy-center-setup/) apply to consumer data requests, not to an API BAA.

## Ask for custom terms without sending PHI

If the standard addendum is not enough, email baa@openai.com with company and use-case details. The same address is listed under **Need custom BAA terms?** in organization settings. Do not put PHI in the email, in screenshots, or in attachments.

OpenAI says email requests get a response within 1–2 business days. Review is case by case and may ask for more information. The process is usually finished within a few business days. If a manual request is not approved, reconsideration is only available to customers working with sales.

## Tips before you send the first PHI request

Confirm **Active** on the organization you will bill, not on a sandbox org you created for a spike.

Wait until Modified Retention is provisioned. A signed BAA without that configuration does not meet OpenAI’s API eligibility rule.

Keep a copy of the downloaded agreement and the Organization ID in your vendor file.

Block non-listed endpoints in your gateway. A client SDK that falls back to an uncovered tool can move PHI outside the BAA.

Tell support staff never to paste chart excerpts into tickets. The help center repeats that rule for BAA email.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/ll3klR8_j_E"
    title="Using AI to navigate healthcare systems"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

Kate Rouch, then OpenAI’s chief marketing officer, described the January 2026 healthcare product rollout in that CBS LA segment, including tools aimed at clinicians and paperwork. The October API setting is the later self-serve contract step for developers who need a BAA on the platform itself.

## What to do next

Open Organization, then General, and read the HIPAA section before you write client code that might see PHI. If it says **Not eligible yet**, keep building on synthetic data and either wait for usage history or email baa@openai.com. If you are eligible, download the addendum, match the Organization ID, and enable support only when someone with signing authority has reviewed it.

After the status is **Active**, limit calls to the published endpoint list and follow the HIPAA Implementation and Configuration Guide. The agreement is the start of the control set, not the end of it.

## Sources

- OpenAI API changelog, October 5, 2026: in-product HIPAA compliance support and standard BAA acceptance
- OpenAI Help Center: Getting a Business Associate Agreement for the OpenAI API
- OpenAI Help Center: HIPAA eligible products and functionality
- OpenAI: HIPAA Implementation and Configuration Guide (linked from the BAA help article)
