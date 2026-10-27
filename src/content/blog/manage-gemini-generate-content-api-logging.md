---
title: "Manage Gemini Generate Content API Logging Defaults"
description: "Learn how new Gemini API projects store Generate Content requests by default since Oct 26 2026, and how to view, manage, or opt out in AI Studio."
pubDate: 2026-10-27T17:00:00
heroImage: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "tutorials", "developer"]
noindex: false
---

New billing-enabled Gemini API projects created on or after October 26, 2026 now store Generate Content API requests by default. This aligns the Generate Content API with the Interactions API, where storage has already been the default.

For developers building apps that handle user prompts, this change means prompts and responses automatically appear in Google AI Studio’s Logs and Datasets dashboard unless you take action. Existing projects keep their previous settings.

![Developer workspace with code on multiple screens](https://images.unsplash.com/photo-1753715613457-63127ec40824?auto=format&fit=crop&w=800&q=80)

## What Changed on October 26, 2026

Google updated the default for the Generate Content API (`generateContent`, `streamGenerateContent`, and `batchGenerateContent`). New paid projects store requests with `store=true`. Projects created before that date continue with `store=false` unless you enable logging in AI Studio.

The request-level `store` parameter overrides the project setting. You need SDK versions that support it: `google-genai` 2.33.0+ for Python, `@google/genai` 2.31.0+ for JavaScript, and equivalent minimums for Java and Go.

OpenAI-compatible endpoints follow the same rules. Logs remain private to your Google Cloud project and are separate from any abuse-monitoring data Google keeps.

## How to View Logs in AI Studio

1. Open the [Logs page in AI Studio](https://aistudio.google.com/logs).
2. Select your project from the dropdown.
3. Logs appear in reverse chronological order when they exist.
4. For older projects, enable Generate Content API logging first in the Settings panel.

Click any entry to inspect the full prompt, response, and prior conversation context. Interactions API logs also include a direct link back to the interaction.

Retention defaults to 55 days. You can shorten it to 7, 14, or 28 days in the same Settings panel. Datasets you create from logs do not expire.

![Code displayed on a laptop screen](https://images.unsplash.com/photo-1637778352878-f0b46d574a04?auto=format&fit=crop&w=800&q=80)

## Opt Out or Control Storage

You have two straightforward ways to stop or limit storage.

**Per request:** Set `store: false` (or `store=False` in Python) in the config when calling the API. This takes precedence over the project default.

**Project-wide:** In AI Studio’s Logs and Datasets Settings panel, toggle logging off independently for the Generate Content API or the Interactions API. Changes apply immediately for new requests.

Do not include personal, sensitive, or confidential information in prompts if logging is enabled. By default, logged data from billing-enabled projects is not used for product improvement or model training unless you explicitly share datasets.

## Build Datasets for Evaluation

Logs become more useful when you turn selected ones into datasets:

- Filter the Logs table by model, status, time, or other attributes.
- Select the rows you want.
- Click Create dataset and give it a name and optional description.
- Export as CSV, JSONL, or to Google Sheets.

Use these sets for prompt refinement, baseline comparisons, or batch evaluations with the Gemini Batch API. You can also optionally share datasets with Google to help improve models.

If you are already using Gemini features elsewhere, such as [personal intelligence with Maps saved places](/blog/use-gemini-personal-intelligence-maps-saved-places/), the same logging principles apply when those features call the underlying APIs.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/J-58XHx15RY"
    title="Google AI Studio logs and datasets tool walkthrough"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical Tips

- Check the creation date of your project before your first production request. New projects start storing immediately.
- Update your SDKs so the `store` parameter is available.
- Prefer short retention windows if your application processes customer data.
- Create datasets only from logs that are safe to keep longer.
- Review the official [Data logging and sharing](https://ai.google.dev/gemini-api/docs/logs-policy) page for the latest policy details.

## Conclusion

The October 26, 2026 default brings Generate Content API behavior in line with the Interactions API for new paid projects. Viewing and managing logs takes only a few clicks in AI Studio, and opting out is possible at both the request and project level. Treat the setting as a deliberate choice rather than an afterthought, especially when prompts may contain user data.

## Sources

- [Logs and datasets | Gemini API](https://ai.google.dev/gemini-api/docs/logs-datasets)
- [Data logging and sharing | Gemini API](https://ai.google.dev/gemini-api/docs/logs-policy)
- Gemini API changelog, October 26, 2026 entry on Generate Content API storage defaults
