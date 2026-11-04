---
title: "How to Turn Off AI Overviews in Google Search"
description: "Learn how to disable AI Overviews in Google Search using the Web filter, udm=14 parameter, and custom search engines for classic results."
pubDate: 2026-11-04T21:00:00
heroImage: "https://images.unsplash.com/photo-1726066012699-1c843dad5fd8?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["google", "ai", "productivity", "tutorials", "how-to"]
noindex: false
---

Google’s AI Overviews appear at the top of many search results. They summarise answers with generative AI and link to sources. Many users prefer the classic list of blue links. Google does not offer a permanent off switch for AI Overviews.<grok type="render_inline_citation" citation_id="216" />

You can still get text-only results. This guide covers verified methods that work in 2026. They rely on Google’s own Web filter and a URL parameter called udm=14.

## Why AI Overviews Cannot Be Fully Disabled

Google classifies AI Overviews as a core Search feature, similar to knowledge panels. Official help pages state that features cannot be turned off. The same pages note that the Web filter shows only text-based links without AI Overviews.<grok type="render_inline_citation" citation_id="155" />

No Google Account setting, Search Labs toggle, or Chrome preference removes them permanently from the default “All” results. Workarounds hide or bypass the overviews rather than disable generation.

## Method 1: Use the Web Filter for a Single Search

This is the official, documented approach.

1. Perform any search on Google.
2. Look under the search box for the filter row (All, Images, Videos, News).
3. Click **Web**. On mobile or narrow windows it may sit under **More**.
4. The page reloads with classic text links only. No AI Overview appears.

The filter lasts for that search only. The next query returns to the standard view. You also lose maps, shopping carousels, knowledge panels, and video boxes in this mode.

![Person searching on a laptop showing Google](https://images.unsplash.com/photo-1726066012699-1c843dad5fd8?auto=format&fit=crop&w=800&q=80)

## Method 2: Add udm=14 to the Search URL

When you select the Web filter, Google appends a parameter to the address. The parameter is `udm=14`. You can add it manually.

Example:

```
https://www.google.com/search?q=how+to+boil+an+egg&udm=14
```

This loads the same Web view instantly. It is not an officially documented parameter, so Google could change it without notice. Multiple tests in late 2026 confirmed it still works on google.com and regional domains.<grok type="render_inline_citation" citation_id="140" />

## Method 3: Set a Custom Search Engine for Permanent Web Results

Make the udm=14 view your default for address-bar searches. This is the closest practical equivalent to an off switch.

### Chrome or Edge (desktop)

1. Open `chrome://settings/searchEngines` (or Edge equivalent under Privacy, search, and services → Address bar and search).
2. Next to **Site search**, click **Add**.
3. Name: `Google Web`
4. Shortcut: `gw` or `@web`
5. URL: `https://www.google.com/search?q=%s&udm=14`
6. Click **Add**. Then open the three-dot menu beside the new entry and choose **Make default**.

Firefox 140 and later supports the same URL under Settings → Search → Add.

On mobile Chrome or Safari you usually cannot add custom engines. Bookmark a udm=14 link or tap the Web filter after each search.

![Close-up of Google search interface on a screen](https://images.unsplash.com/photo-1586125674857-4eb86880905d?auto=format&fit=crop&w=800&q=80)

## Additional Tips and Alternatives

- Append `-ai` to a query (for example, `best running shoes -ai`). It sometimes suppresses the overview but is unreliable and can exclude relevant pages that mention AI.
- Browser extensions such as “Hide AI Overviews” can hide the rendered block after the page loads. They do not stop generation and may break after updates.
- For a completely different experience, try DuckDuckGo or other engines that do not inject AI summaries by default.
- If you manage a site, focus on clear, authoritative content. AI Overviews cite sources; strong pages still receive traffic from the links below the summary.

Related reading on Google features: [Add Google Preferred Sources Button](/blog/add-google-preferred-sources-button/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/eEQQRetxFOs"
    title="How to Turn Off AI on Google (2026): AI Overviews, AI Mode & Gemini"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

You cannot turn off AI Overviews through any Google setting. The Web filter and the udm=14 parameter give reliable text-only results. Setting a custom search engine makes the clean view the default for everyday use.

These methods match Google’s own documentation for the Web filter and have been verified by users through 2026. Test them on your device and browser, then keep the one that fits your workflow.

## Sources

- Google Search Help: AI Overviews and the Web filter
- Google Search Community FAQs on AI Overviews
- Verified user reports and browser settings documentation (October–November 2026)
