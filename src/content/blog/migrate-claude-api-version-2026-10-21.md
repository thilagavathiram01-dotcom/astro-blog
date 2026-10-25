---
title: "How to Migrate to Claude API Version 2026-10-21"
description: "Step-by-step guide to migrate to Claude API version 2026-10-21. Remove sampling parameters, update SDKs, and fix breaking changes."
pubDate: 2026-10-25T16:00:00
heroImage: "https://images.unsplash.com/photo-1529465230221-a0d10e46fcbb?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "developer", "how-to"]
noindex: false
---

Anthropic released Claude API version 2026-10-21 on October 21, 2026. It is the first new version since 2023-06-01. New SDK major versions send this version by default, and several request shapes that previously worked now return 400 errors.

If your code calls the Claude API directly or through an SDK, you should plan the upgrade. Nothing forces the change today, but staying on the old version means missing future improvements and keeping deprecated parameters. This guide walks through the exact steps from official Anthropic documentation.

## What Changed in API Version 2026-10-21

The new version removes three sampling parameters from the Messages API, Message Batches API, and Token Counting API. Sending `temperature`, `top_p`, or `top_k` now returns a 400 error, even at their previous default values.

Two message shapes are also rejected:

- A document block placed directly inside an assistant message returns 400.
- A text block that carries non-empty citations inside a user message (or inside a search_result) returns 400.

Admin API and Enterprise Analytics API responses renamed several fields. Examples include `roles` becoming `role_ids` and `actor.email` becoming `actor.email_address`.

New major SDK versions ship with the change and switch API-key authentication to the `Authorization: Bearer` header. The Claude API still accepts the older `X-Api-Key` header, so direct calls continue to work. Proxies or gateways that only read the old header need an update.

![Developer reviewing code on a laptop](https://images.unsplash.com/photo-1759884247381-d7222dd72dec?auto=format&fit=crop&w=800&q=80)

## Upgrade the SDK or Set the Version Header

If you use an official SDK, install the first major version that defaults to 2026-10-21:

| Language | Minimum version |
| --- | --- |
| Python | 2.0.0 |
| TypeScript | 1.0.0 |
| C# | 13.0.0 |
| Go | 2.0.0 |
| Java | 3.0.0 |
| PHP | 1.0.0 |
| Ruby | 2.0.0 |
| ant CLI | 2.0.0 |

After the upgrade, the SDK automatically sends `anthropic-version: 2026-10-21`. You do not set the header yourself.

If you call the API with raw HTTP requests, add the header:

```
anthropic-version: 2026-10-21
```

In Claude Code 2.1.307 or later you can run the command `/claude-api api-version`. It rewrites local Claude API calls to the new version and helps surface the parameter removals.

Test the upgrade in a non-production environment first. Older SDK major versions continue to send 2023-06-01 until you upgrade them.

## Remove Sampling Parameters

Search your codebase for every occurrence of `temperature`, `top_p`, and `top_k`. The search must cover Message Batch jobs and any prompt templates that forward those values.

Delete the parameters. The new SDK versions no longer expose them. A request that still includes them fails with a 400 error on every model.

Adaptive thinking and the `effort` parameter replace the old sampling controls for most use cases. Leave them at defaults unless your evaluation shows a quality drop. For high-volume classification work, pair the change with the model selection steps in the [Claude Haiku 5.5 Setup Guide for API and Claude Code](/blog/claude-haiku-5-5-api-setup-guide/).

## Fix Message Shape Errors

Move any document blocks that appear inside assistant messages into the following user message. The API now accepts documents only in user messages.

Strip non-empty citation fields from text blocks that sit inside user messages. Citations remain valid on assistant messages and on search results returned by tools, but they must not travel back inside a user text block.

Run a full integration test suite after these edits. Token-counting endpoints and batch jobs follow the same rules, so include them in the test plan.

## Update Authentication and Admin Calls

New SDKs send the API key as `Authorization: Bearer <key>`. Direct API calls that already use either header continue to succeed. Update any proxy, gateway, or logging layer that inspects only the `X-Api-Key` header.

If your application reads Admin API or Enterprise Analytics responses, update field names:

- `roles` → `role_ids`
- `actor.email` → `actor.email_address`
- Other renames appear in the official migration guide.

Recompile or re-generate client code that deserializes those responses.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/IWJIXXFiJao"
    title="Welcome to the course - Building with the Claude API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Availability and Special Cases

API version 2026-10-21 is available on the Claude API, Claude Platform on AWS, Claude Models on Google Cloud (both Anthropic-managed and Google-managed), and Microsoft Foundry.

On Amazon Bedrock the version works for Claude 4.7 and later models. Older Bedrock models must stay on your current SDK version or the 2023-06-01 header. Check the migration guide for the exact Bedrock matrix before you change production traffic.

The previous version remains supported. Anthropic does not force an immediate cut-over.

![Laptop showing code next to a notebook and pen](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Tips for a Safe Rollout

Pin the new SDK version in your lock file so builds stay reproducible. Run your existing evaluation suite against both API versions side by side and compare output quality and latency.

Log the `anthropic-version` header on every request during the transition week. That makes it easy to spot any service that still sends the old version.

If you operate a multi-tenant platform, test the new user-profile endpoints that arrived in the same release window. They let safety actions apply to a single end customer instead of the whole organization.

Keep a short rollback path. Because the old version continues to work, you can revert the SDK pin if an unexpected quality regression appears.

## Conclusion

Claude API version 2026-10-21 simplifies the request surface by removing sampling parameters and tightening message shapes. Upgrade the SDK, delete the three removed parameters, move document blocks to user messages, and update any Admin API field names. Test thoroughly, then ship. The previous version stays available, so you control the timing.

## Sources

- Claude Platform release notes, October 21, 2026: https://platform.claude.com/docs/en/release-notes/overview
- Migrating to API version 2026-10-21: https://platform.claude.com/docs/en/api/migration-2026-10-21
- API versioning reference: https://platform.claude.com/docs/en/api/versioning
- Official Anthropic SDK repositories and release notes for Python 2.0.0, TypeScript 1.0.0, and the ant CLI 2.0.0
