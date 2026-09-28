---
title: "How to Analyze Web Pages With Gemini 3.8 URL Context"
description: "Use Gemini 3.8 Flash URL context to fetch live pages and PDFs, compare sources, and print citations from the Interactions API."
pubDate: 2026-09-28T14:00:00
heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "developer"]
noindex: false
---

Gemini can only reason about a URL if you give it a tool that can open that page. The **URL context** tool does that job. You put the links in the prompt, attach `url_context`, and Gemini 3.8 Flash retrieves the page instead of guessing from training data.

Google documents the tool on the [Gemini API URL context page](https://ai.google.dev/gemini-api/docs/url-context). The current samples use model ID `gemini-3.8-flash` and the Interactions API. This guide follows that page, plus the matching Firebase and Cloud notes.

If you already have an API key from the [Gemini 3.8 Flash API guide](/blog/gemini-3-8-flash-api-guide/), you can run the first sample in a few minutes.

## What URL context is for

Google lists four jobs for the tool:

- Pull prices, names, or findings from more than one page
- Compare reports, articles, or PDFs
- Combine several source URLs into a summary or draft
- Point at a public GitHub repo or technical doc and ask setup questions

The model does not invent the page. It either reads a cached index or fetches the live URL. Google says the cache is the first stop. A new page that is not in that index falls back to a live fetch.

Treat the result as grounded text plus citations, not as a browser session. The tool does not click buttons or log in.

![Developer reading documentation on a laptop with code nearby](https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80)

## What you need

- A Gemini API key from [Google AI Studio](https://aistudio.google.com/)
- `google-genai` SDK 2.0.0 or later (Google’s samples say older SDKs will not run the Interactions calls)
- Model `gemini-3.8-flash`
- Public HTTP(S) URLs that are not behind a login wall

Set the key in the environment:

```bash
export GEMINI_API_KEY="YOUR_API_KEY"
pip install -U google-genai
```

You can also flip **URL context** on under Tools in AI Studio and paste the same prompt there before you write code.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/UC4mxfQGh5s"
    title="URL Context with Gemini | Intro to Tools"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Run the official compare sample

Google’s first example compares two public roast-chicken recipes. Put both URLs in the prompt and enable the tool.

```python
from google import genai

client = genai.Client()

url1 = "https://www.foodnetwork.com/recipes/ina-garten/perfect-roast-chicken-recipe-1940592"
url2 = "https://www.allrecipes.com/recipe/21151/simple-whole-roast-chicken/"

interaction = client.interactions.create(
    model="gemini-3.8-flash",
    input=f"Compare the ingredients and cooking times from the recipes at {url1} and {url2}",
    tools=[{"type": "url_context"}],
)

for step in interaction.steps:
    if step.type == "model_output":
        for content_block in step.content:
            if content_block.type == "text":
                print(content_block.text)
                if content_block.annotations:
                    print("\nSources:")
                    for annotation in content_block.annotations:
                        if annotation.type == "url_citation":
                            print(f"  - {annotation.title}: {annotation.url}")
```

The same payload works over REST:

```bash
curl -X POST "https://generativelanguage.googleapis.com/v1beta/interactions" \
  -H "x-goog-api-key: $GEMINI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gemini-3.8-flash",
    "input": "Compare the ingredients and cooking times from the recipes at https://www.foodnetwork.com/recipes/ina-garten/perfect-roast-chicken-recipe-1940592 and https://www.allrecipes.com/recipe/21151/simple-whole-roast-chicken/",
    "tools": [{"type": "url_context"}]
  }'
```

Read the printed sources. Google attaches `url_citation` annotations to the text block, each with a title and URL. That is the citation surface you should show in a product UI.

## Combine URL context with Search

Gemini 3 models can run URL context and Grounding with Google Search in one call. Google’s pattern: Search finds candidate pages, URL context then reads the ones that matter.

```python
interaction = client.interactions.create(
    model="gemini-3.8-flash",
    input="Give me a three-day event schedule based on YOUR_URL. Also note weather and commute issues.",
    tools=[
        {"type": "url_context"},
        {"type": "google_search"},
    ],
)
```

Replace `YOUR_URL` with a public schedule page. Keep Search on when the user did not hand you every link. Keep Search off when you already trust the exact URLs and do not want extra web hops.

Gemini 3 also supports mixing this built-in tool with your own function calls. See Google’s [tool combination](https://ai.google.dev/gemini-api/docs/generate-content/tool-combination) page if you need a custom lookup after the page is read.

![Circuit board close-up representing networked page retrieval](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80)

## What the tool will and will not open

Google Cloud’s URL context notes list these supported types: HTML, JSON, plain text, XML, CSS, JavaScript, CSV, RTF, PNG, JPEG, BMP, WebP, and PDF.

The Gemini API page lists types the tool does **not** support:

- Paywalled pages
- YouTube videos (use video understanding instead)
- Google Docs, Sheets, and other Workspace files
- Video and audio files

Cloud docs also cap analysis at **20 URLs per request**. Stay under that limit. Prefer a small set of official pages over a dump of search-result links.

Safety checks run on each URL. If a page fails, the `url_context_result` step reports status `"unsafe"`. Use that field in logs. Do not retry the same blocked URL in a loop.

## How tokens and freshness work

Retrieved page text counts as input. Google’s sample `usage` object shows a small prompt (`input_tokens`) and a much larger `tool_use_input_tokens` number for the fetched pages. Price follows the [Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing) table for the model you picked.

Plan for that cost. A pair of long docs can add tens of thousands of tokens before the model writes a sentence.

Freshness is mixed. The first lookup hits an internal index. Google notes that index can be stale. Only a cache miss triggers a live fetch. If the page changed an hour ago and still sits in cache, you may see the older copy. For a breaking change, fetch the page yourself and send the text when you must have the current HTML.

## A short practice loop

1. Turn on URL context in AI Studio and compare two public help articles.
2. Copy the same prompt into the Python sample with `gemini-3.8-flash`.
3. Print `url_citation` titles. Confirm both source domains appear.
4. Add `google_search` and ask a follow-up that needs weather or hours.
5. Hit a Workspace Doc URL on purpose. Confirm the tool refuses it.
6. Check `usage.tool_use_input_tokens` so you know what one pair of pages costs.

Stop there. Do not point the tool at authenticated dashboards or at pages you do not have rights to scrape through an API.

## Tips that keep the output honest

- Put the exact URLs in the user prompt. The tool needs those strings.
- Ask for a table or a bullet list when you compare two specs.
- Show citations next to claims. Google already returns the annotations.
- Log `url_context_result` status when a summary looks empty.
- Keep thinking on `medium` for 3.8 Flash unless a long PDF comparison fails.
- Do not send secrets in query strings. Those URLs leave your process.

## Conclusion

URL context is the smallest way to stop Gemini 3.8 Flash from inventing a page it never opened. Attach `{"type": "url_context"}`, name the links, print the citations, and watch token use. Add Search only when you do not already hold the URLs.

Use it for public docs, product pages, and PDFs. Skip paywalls, YouTube, and Workspace files. For agent work that must click a UI, that is a different tool: computer use, covered in our [Computer Use API walkthrough](/blog/gemini-computer-use-api/).

## Sources

- [URL context](https://ai.google.dev/gemini-api/docs/url-context) — Google AI for Developers
- [URL context (Gemini Enterprise Agent Platform)](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/url-context) — Google Cloud
- [URL context | Firebase AI Logic](https://firebase.google.com/docs/ai-logic/url-context) — Firebase
- [Combine built-in tools and function calling](https://ai.google.dev/gemini-api/docs/generate-content/tool-combination) — Google AI for Developers
- [Gemini 3.8 Flash model page](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash) — Google AI for Developers
- [URL Context with Gemini | Intro to Tools](https://www.youtube.com/watch?v=UC4mxfQGh5s) — Google for Developers
