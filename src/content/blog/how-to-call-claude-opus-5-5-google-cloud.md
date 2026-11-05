---
title: "How to Call Claude Opus 5.5 on Google Cloud"
description: "Step-by-step guide to call Claude Opus 5.5 using the Anthropic Vertex SDK on Google Cloud Agent Platform."
pubDate: 2026-11-05T14:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "developer"]
noindex: false
---

Claude Opus 5.5 runs on Google Cloud through the Gemini Enterprise Agent Platform. You call it with the Anthropic Vertex SDK using the model ID claude-opus-5-5. This keeps enterprise billing, logging, and access controls inside your Google Cloud project.

The setup takes a few minutes once you have a project with the Agent Platform API enabled. This guide walks through enabling the model, installing the SDK, and making your first request.

![Developer workspace with multiple code screens](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Enable Claude Opus 5.5 in Model Garden

Open the Claude Opus 5.5 model card in Google Cloud Model Garden. Click Enable and accept the terms. The Agent Platform API (aiplatform.googleapis.com) must already be turned on for the project.

You need the roles that let you enable partner models. Check the partner models permissions page if the Enable button stays gray. Anthropic also recommends turning on 30-day prompt and completion logging so you can review usage later.

If your billing account sits with a restricted reseller, the enable step fails. Contact the reseller to resolve the block before you continue.

## Install the Anthropic Vertex SDK

Install the package that includes Google Cloud support:

```bash
pip install -U "anthropic[vertex]"
```

Authenticate with Application Default Credentials. Run gcloud auth application-default login on your local machine, or use a service account key in a production environment. Set the project ID in an environment variable so the client can find it.

## Make a basic request

Create a client that points at your project and a supported region. The example below uses the multi-region endpoint "us".

```python
import os
from anthropic import AnthropicVertex

client = AnthropicVertex(
    project_id=os.environ["GCP_PROJECT_ID"],
    region="us"
)

message = client.messages.create(
    model="claude-opus-5-5",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "Explain how to use Claude on Google Cloud in three sentences."}
    ]
)
print(message.content[0].text)
```

The response arrives as a Message object. Access the text from the first content block. Raise max_tokens when you expect longer answers. Opus 5.5 supports up to 128,000 output tokens and a 1,000,000 token context window.

![Abstract network of AI nodes and code](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Stream the response

Streaming reduces perceived latency. Wrap the call in messages.stream and iterate over text_stream:

```python
with client.messages.stream(
    model="claude-opus-5-5",
    max_tokens=2048,
    messages=[{"role": "user", "content": "Write a short Python function that validates an email address."}]
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)
```

The same pattern works for longer generations. Keep the client timeout high enough for the model to finish thinking and writing.

## Tips for production use

Start with medium effort if your workload supports the parameter. Test a representative set of prompts at low, medium, and high before you lock in a default. Higher effort increases token use and latency.

Enable inference metadata logging so you track token counts, latency, and errors without storing full prompts. Combine this with request-response logging only when you need the raw text for review.

If you also use Google Antigravity, the same model is available in the model picker once an administrator enables partner models. See our guide on [accessing Claude Opus 5.5 in Google Antigravity](/blog/access-claude-opus-5-5-google-antigravity/) for the IDE path.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/l8fxVYIP4HQ"
    title="Building with Claude on Google Cloud"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Calling Claude Opus 5.5 on Google Cloud keeps your existing billing, IAM, and logging in one place. Enable the model in Model Garden, install the Anthropic Vertex SDK, and send your first messages.create call. From there you can stream responses, adjust effort, and integrate the model into agents or backend services.

## Sources

- Request predictions with Claude models, Google Cloud Documentation
- Claude Opus 5.5 on Google Cloud, Gemini Enterprise Agent Platform
- Introducing Claude Opus 5.5, Anthropic
- Building with Claude on Google Cloud, Claude YouTube channel
