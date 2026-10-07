---
title: "Gemini 2.5 Retirement: Migrate by October 20, 2026"
description: "Gemini 2.5 Pro, Flash, and Flash-Lite retire on Agent Platform on October 20, 2026. Switch model IDs and test before the cutoff."
pubDate: 2026-10-07T14:00:00
heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "developer", "tutorials", "google"]
noindex: false
---

Google Cloud will retire `gemini-2.5-pro`, `gemini-2.5-flash`, and `gemini-2.5-flash-lite` on Gemini Enterprise Agent Platform on October 20, 2026. After that date, calls to those model IDs stop working on that platform.

The retirement dates are listed on the [model versions and lifecycle](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/model-versions) page, last updated October 5, 2026. Google says retirement timelines may be extended, but they will not move earlier than the posted date.

If your app, agent, or batch job still hard-codes a 2.5 model ID, treat the next two weeks as a migration window, not a reminder for later.

![Developer reviewing source code on a laptop](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## What retires, and what replaces it

On Agent Platform, Google lists these replacements:

| Current model ID | Release date | Retirement | Recommended replacement |
| --- | --- | --- | --- |
| `gemini-2.5-pro` | June 17, 2025 | October 20, 2026 | `gemini-3.8-flash` or `gemini-3.5-flash` |
| `gemini-2.5-flash` | June 17, 2025 | October 20, 2026 | `gemini-3.8-flash`, `gemini-3.5-flash-lite`, or `gemini-3.1-flash-lite` |
| `gemini-2.5-flash-lite` | July 22, 2025 | October 20, 2026 | `gemini-3.8-flash`, `gemini-3.1-flash-lite`, or Gemma 4 |

`gemini-3.8-flash` is generally available and has no retirement date announced. It uses a 1,048,576-token context window and a 65,536-token output limit, the same totals Google lists for the 2.5 family on Agent Platform.

Do not jump to a short-lived Flash build if you want a stable ID. Google lists `gemini-3.6-flash` retiring on November 19, 2026, and `gemini-3.7-flash` retiring on January 28, 2027, both with `gemini-3.8-flash` as the replacement.

`gemini-live-2.5-flash-native-audio` is a separate Live API model. Its listed retirement date is December 13, 2026, not October 20.

Image generation is also separate. `gemini-2.5-flash-image` is scheduled to retire on March 15, 2027, with `gemini-3.1-flash-lite-image` as the replacement.

## Two products, two dates

Do not mix Agent Platform model IDs with the Gemini Enterprise web app.

On October 20, 2026, Gemini 2.5 Pro is removed from the Gemini Enterprise app in the Canada and Japan in-country regions. After that date, users in those regions cannot select Gemini 2.5 Pro in the app. Google Cloud release notes from October 1, 2026 say the model remains available in the `global`, `us`, and `eu` regions, and stays on by default there. Administrators can turn that toggle off.

India, Singapore, and the United Kingdom in-country regions do not offer Gemini 2.5 Pro in the Gemini Enterprise app. That is a product-availability limit, not the Agent Platform shutdown.

If you call models through the API on Agent Platform, the model-ID retirement is the date that matters. If your team only picks models inside the Enterprise app, check the region of the app as well.

## Step 1: Inventory every 2.5 call

Search your repos, Cloud Functions, Firebase backends, and agent configs for these strings:

- `gemini-2.5-pro`
- `gemini-2.5-flash`
- `gemini-2.5-flash-lite`
- any versioned alias that still resolves to those IDs

Include batch jobs, evaluation scripts, and Provisioned Throughput orders. A model ID buried in a YAML file will fail the same way as one in application code.

Write down the task for each call: chat, extraction, tool use, long context, or low-cost classification. That map decides which replacement you pick.

## Step 2: Pick the replacement by job

Google's migration guide says most apps need few code or prompt changes, but some prompts will drift. Test before you flip production traffic.

Use `gemini-3.8-flash` when the old call was `gemini-2.5-pro` or a hard agent workflow. Google's developer guide describes 3.8 Flash as the workhorse model for software engineering, agent tasks, and multi-step reasoning. Thinking levels are `low`, `medium`, and `high`, with `medium` as the default.

Use `gemini-3.5-flash-lite` or `gemini-3.1-flash-lite` when the old call was Flash or Flash-Lite and cost or latency mattered more than peak quality. Both lite models are listed as available for at least 12 months after release: Flash-Lite through July 21, 2027 or later, and 3.1 Flash-Lite through May 7, 2027 or later.

For a walkthrough of the 3.8 Flash request shape, see our guide to the [Gemini 3.8 Flash API](/blog/gemini-3-8-flash-api-guide/).

![Team planning a software migration on a whiteboard](https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80)

## Step 3: Update the SDK and the model ID

Google recommends the Google Gen AI SDK at version `2.0.0` or later for Gemini 3.5 Flash and later models. Vertex AI SDK releases after June 2026 do not support Gemini, and new Gemini features ship only in `google-genai`.

Install the current SDK, then change the model string:

```python
from google import genai

client = genai.Client(
    enterprise=True,
    project="PROJECT_ID",
    location="global",
)

response = client.models.generate_content(
    model="gemini-3.8-flash",
    contents="Summarize the open support tickets from this week.",
)
print(response.text)
```

The Agent Platform quickstart uses the global endpoint. Regional availability differs by model, so confirm the location in Google's locations guide before you pin a region.

If you only need a fast fix, Google's own shortcut is three steps: point the app at the recommended upgrade, test mission-critical features, then deploy as you normally would.

## Step 4: Fix parameters the new models reject

Google's migration page lists breaking changes that show up once you leave the 2.5 generation:

- Gemini 3 Pro and later models use `thinking_level`, not `thinking_budget`.
- If a thought signature is expected and you do not send it back, the model returns an error instead of a warning.
- Top-K is not adjustable on models after `gemini-1.0-pro-vision`. Tune Top-P if you relied on Top-K.
- Media tokenization uses a variable sequence length. Default resolutions and token costs for images, PDFs, and video changed.
- PDF token counts in `usage_metadata` are reported under the IMAGE modality, not DOCUMENT.
- Image segmentation is not supported on Gemini 3 Pro and later models.
- OCR is not used by default on scanned PDFs.

Token counts can also rise. Google says upgraded infrastructure now counts request parts, including response schemas and function-calling metadata, that the older system undercounted. Budget alerts that were tuned to 2.5 usage may fire earlier after the switch.

Dynamic retrieval should move to Grounding with Google Search, which requires the Google Gen AI SDK.

## Step 5: Test quality, then load

Google asks for three checks:

1. Code regression tests. These are always required.
2. Model-quality tests, offline first. Repeat the evals you used at launch, plus any you added later. The Gen AI evaluation service is the fallback if you do not already have a harness.
3. Load tests if you need a minimum throughput. Load testing is required for apps on Provisioned Throughput.

If quality drops, refine prompts before you retune. Supervised fine-tunes do not carry over. You must start a new tuning job, and Google says to use default hyperparameters rather than values copied from a 2.5 tune.

Only run online tests, such as an A/B or canary, after offline quality looks acceptable. Online evaluation puts the new model on live traffic.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/dRlyq3GGxqg"
    title="Gemini 3 Flash is now rolling out in the Gemini App, AI Mode in Search and our developer tools."
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips before October 20

Keep the old and new model IDs behind a config flag until the eval set passes. A one-line flag is easier to roll back than a scattered search-and-replace.

Quote the replacement in comments next to the call site. Six months from now, `gemini-3.6-flash` will already be past its November 19, 2026 date.

If you sell seats in Canada or Japan through the Gemini Enterprise app, tell those users that Gemini 2.5 Pro disappears from the picker on the same day. API callers in `global`, `us`, and `eu` are on a different path: the model stays selectable in the app unless an admin turns it off, but Agent Platform still retires the 2.5 model IDs.

Check batch jobs scheduled for the week of October 20. A job submitted on the 19th that runs after the cutoff will fail if it still names a 2.5 model.

## Conclusion

October 20, 2026 is the posted retirement date for Gemini 2.5 Pro, Flash, and Flash-Lite on Gemini Enterprise Agent Platform. The documented replacements are Gemini 3.8 Flash for the Pro path, and 3.8 Flash or a current Flash-Lite model for the cheaper path.

Change the model ID, move to `google-genai` 2.0.0 or later, replace `thinking_budget` with `thinking_level`, and rerun the evals you already trust. That is the whole migration if you start before the cutoff.

## Sources

- [Model versions and lifecycle](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/model-versions), Google Cloud, updated October 5, 2026
- [Migrate to the latest Gemini models](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/migrate), Google Cloud, updated October 6, 2026
- [Developer's guide to Gemini 3.8 Flash](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/guides/gemini-3-8-flash), Google Cloud
- [Gemini Enterprise release notes, October 1, 2026](https://docs.cloud.google.com/gemini/enterprise/docs/release-notes), Google Cloud
- [Data residency for Gemini Enterprise](https://docs.cloud.google.com/gemini/enterprise/docs/locations), Google Cloud
