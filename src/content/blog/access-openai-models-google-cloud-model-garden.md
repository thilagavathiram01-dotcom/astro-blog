---
title: "How to Access OpenAI Models on Google Cloud"
description: "Step-by-step guide to request preview access for OpenAI GPT-6 models in Google Cloud Model Garden and start building agentic workflows."
pubDate: 2026-10-21T23:00:00
heroImage: "https://images.unsplash.com/photo-1752742111841-f490c48aa668?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "google", "tutorials"]
noindex: false
---

OpenAI and Google Cloud announced on October 21, 2026 that frontier models including GPT-6 Astra, GPT-6.1 Sol, and GPT-6 Luna are rolling out in private preview inside Google Cloud's Model Garden. Enterprise customers can purchase them through the Google Cloud Marketplace and draw down existing commitments. This guide shows how to request access and begin using the models for agentic workflows.

The partnership gives teams that already run workloads on Google Cloud a path to OpenAI models without separate contracts. Customer prompts and outputs stay inside the customer's data perimeter. Microsoft remains OpenAI's primary cloud partner, and general availability is planned for the coming weeks.

![Server racks in a modern data center](https://images.unsplash.com/photo-1759836096317-e746643cc277?auto=format&fit=crop&w=800&q=80)

## What models are available now

Google Cloud lists three OpenAI models in the initial private preview:

- **GPT-6 Astra** for demanding work across coding, computer use, professional tasks, and scientific research.
- **GPT-6.1 Sol** for near-Astra intelligence at lower cost on agentic coding, computer use, and professional work.
- **GPT-6 Luna** as a fast, cost-efficient model for everyday tasks at scale.

Developers can already connect local Codex CLI and Desktop workflows to the Gemini platform for inference. OpenAI models will later appear in Google Antigravity and the Gemini Agent.

## Step 1: Confirm your Google Cloud eligibility

Access is limited to select enterprise customers in private preview. You need an active Google Cloud project with billing enabled. Organizations that already have spend commitments can apply those commitments to OpenAI model purchases once access is granted.

If you manage multiple projects, choose the project that will host the Model Garden usage. Identity and Access Management (IAM) roles that allow you to view Model Garden and manage APIs are required. The Cloud Resource Manager and Service Usage APIs must be enabled.

## Step 2: Request preview access

OpenAI published a form to request access to frontier models on Google Cloud. Google Cloud also listed an interest form. Visit the official OpenAI page at openai.com/form/openai-on-google-cloud/ or the Google Cloud resources form. Complete the fields that describe your organization, use cases, and preferred models.

Select all interests that apply, such as Responses API access or Codex workflows. Submit the form. Approval is not automatic; OpenAI and Google Cloud review requests for the limited preview. Check the email address you provided for follow-up.

## Step 3: Explore Model Garden after approval

Once your organization is granted preview access, sign in to the Google Cloud console. Navigate to Vertex AI or the Gemini Enterprise Agent Platform section and open Model Garden. Filter by provider or search for the OpenAI model names.

Model Garden groups foundation models, fine-tunable models, and task-specific solutions. OpenAI models appear alongside Google first-party models and more than 200 other options. You can review model cards for capability descriptions and access paths.

![Close-up of networking cables connected to server hardware](https://images.unsplash.com/photo-1682559736721-c2e77ff4c650?auto=format&fit=crop&w=800&q=80)

## Step 4: Call the models through APIs

After access is enabled, you can invoke the models through Google Cloud APIs. The integration supports building with the Responses API style and connecting Codex. Usage appears on your single Google Cloud invoice and counts toward Flexible Savings Plans where applicable.

A typical flow starts with enabling the relevant AI platform APIs in your project. Authenticate with Application Default Credentials or a service account that has the necessary roles. Point your client at the Model Garden endpoint for the chosen model. Test with a short prompt before scaling to production agentic tasks.

For regulated industries, the setup pairs OpenAI models with Google Cloud access controls, VPC Service Controls, and unified audit logging. Zero Data Retention options are expected soon, and Confidential Compute support is planned.

## Step 5: Connect Codex and plan for broader availability

Starting the same day as the announcement, you can connect local Codex CLI and Desktop sessions to the Gemini platform for inference on these models. Follow the Codex documentation for configuration once your project has preview access.

General availability is scheduled for the coming weeks. When it arrives, the models will also surface in Google Antigravity and the Gemini Agent. That expansion lets teams pick the best model for each task without changing the surrounding platform.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/I7UiSU96CLc"
    title="Introduction to Vertex AI Model Garden"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for early users

Start with GPT-6 Luna for high-volume everyday tasks and reserve Astra for complex coding or research. Monitor costs in the Google Cloud console because usage draws against existing commitments. Review IAM and data perimeter settings before you send production data.

If you already use Gemini models on the same platform, compare latency and quality on similar prompts. The single invoice and commitment drawdown remove the need for separate OpenAI billing accounts. For more on Gemini options, see our guide to [Gemini 4 Argon developer access](/blog/gemini-4-argon-developer-guide/).

## Conclusion

Requesting access is the first concrete step. Complete the official form, confirm your Google Cloud project settings, and test the models inside Model Garden once approved. The combination of OpenAI frontier models with Google Cloud governance gives enterprise teams a practical path to agentic workflows on infrastructure they already manage.

## Sources

- OpenAI, OpenAI models are coming to Google Cloud, October 21, 2026: https://openai.com/index/openai-models-google-cloud/
- Google Cloud Blog, Google Cloud brings OpenAI models to customers, October 21, 2026: https://cloud.google.com/blog/products/ai-machine-learning/google-cloud-brings-openai-models-to-customers/
- OpenAI request form: https://openai.com/form/openai-on-google-cloud/
- Google Cloud Model Garden documentation: https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/model-garden/explore-models
