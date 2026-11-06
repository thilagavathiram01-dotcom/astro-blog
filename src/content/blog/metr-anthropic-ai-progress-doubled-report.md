---
title: "METR: Anthropic AI Progress Doubled With AI Help"
description: "Independent METR assessment finds Anthropic models improving nearly twice as fast since late 2025, driven mainly by AI assistance in research and development."
pubDate: 2026-11-06T10:30:00
heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai", "security"]
noindex: false
---

Independent evaluators spent nearly three months inside Anthropic with access to internal metrics, unreleased models, and staff interviews. On November 5, 2026, Model Evaluation and Threat Research (METR) published its assessment: as of October 2026, Anthropic is likely improving model capabilities on well-specified tasks at roughly twice the rate seen between March 2024 and October 2025.<grok type="render_inline_citation" citation_id="118" />

The finding carries weight because METR operated with high-access privileges. Anthropic granted the team company hardware, office space, and tools comparable to its own risk teams. The public report notes that Anthropic redacted a majority of the evidence METR found most informative, leaving readers to rely more heavily on the evaluators’ judgment than METR considers ideal.<grok type="render_inline_citation" citation_id="108" />

![Researchers working in a laboratory setting with computers](https://images.unsplash.com/photo-1766297247924-6638d54e7c89?auto=format&fit=crop&w=800&q=80)

## What the Assessment Covered

METR staff worked at Anthropic from August 12 to October 29, 2026. They examined metrics across pretraining, reinforcement learning, training compute, benchmark scores for internal models, AI speedup analyses, and forecasts. They also conducted detailed interviews with researchers.<grok type="render_inline_citation" citation_id="118" />

The evaluation focused on three questions: whether acceleration is occurring, whether AI itself drives most of it, and whether clear bottlenecks would slow further gains in the next year. Anthropic lists AI R&D acceleration as a key risk indicator in its Responsible Scaling Policy.

This arrangement follows Anthropic’s earlier commitment to embed independent evaluators. The same team also reviewed the “Risks from automated R&D” section of Anthropic’s August 2026 Risk Report and published a companion review the same day.<grok type="render_inline_citation" citation_id="112" />

## Benchmark Evidence and the 1.9x Figure

METR used Anthropic’s AECI (its version of the Epoch Capabilities Index) as a primary quantitative measure. Since October 2025, AECI scores for Anthropic’s models have grown at an estimated 1.9 times the prior rate, with a 95 percent confidence interval of 1.5 to 2.8 times. In practical terms, Anthropic appears to have achieved roughly two years of historical benchmark progress in the past year.<grok type="render_inline_citation" citation_id="118" />

The estimate exceeds the 1.7 times figure reported in the Haiku 5.5 system card primarily because METR included data on newer unreleased internal models. Robustness checks across different model inclusions, dating choices, and benchmark subsets produced acceleration rates between 1.1 times and 2.9 times. METR stated it would be surprised if the true evolution of benchmark scores showed no acceleration or acceleration above 3 times.

METR is confident the acceleration is not driven by faster growth in training compute. Other factors, including algorithmic improvements and data, received partial examination, though many details remain redacted.

![Abstract visualization of an artificial neural network](https://images.unsplash.com/photo-1655635643568-f30d5abc618a?auto=format&fit=crop&w=800&q=80)

## How Much AI Contributes

METR’s subjective estimate is that a majority of the current (October 2026) acceleration is attributable to Anthropic’s extensive use of AI for research and development, perhaps around 80 percent, though with substantial uncertainty. Non-AI factors likely played a larger role in the acceleration observed in late 2025.<grok type="render_inline_citation" citation_id="118" />

Interviews with researchers produced a wide range of estimates but centered around a 2 times acceleration in their areas of work. Staff self-reported large productivity gains in internal surveys; one informal poll suggested an average uplift of about 12 times from the most capable internal model. METR cautioned that self-reported figures are difficult to interpret and may not represent all employees or carefully considered answers.<grok type="render_inline_citation" citation_id="109" />

Researchers told METR that acceleration occurs primarily through AI assistance rather than fully autonomous contributions, though some signs indicate autonomous work may play a larger role soon. One researcher noted that progress is now bottlenecked on ideas and compute rather than code.

## Bottlenecks and Further Acceleration Risk

METR did not identify clear bottlenecks in algorithmic progress, training compute, experiment compute, or data that would prevent further capability gains over the next 12 months. Understanding of specific bottlenecks shifted several times as more detailed information arrived, so confidence remains limited.<grok type="render_inline_citation" citation_id="118" />

The absence of observed bottlenecks or strong diminishing returns creates a significant risk that further capability progress could produce even faster acceleration. METR notes it may be missing important constraints. Limitations of the analysis include the possibility of underestimating acceleration if recent growth rates have increased further or if AECI understates real-world impact, and the possibility of overestimating if non-AI factors or AECI’s focus on verifiable tasks receive insufficient weight.

Anthropic co-founder Sam McCandlish has indicated the company plans to share its own analysis of development pace and Responsible Scaling Policy status.<grok type="render_inline_citation" citation_id="23" />

## How to Read the Public Report

The public version is a summary. METR submitted a roughly 100-page full report to Anthropic. Redactions cover the majority of evidence the evaluators found most informative for their risk conclusions. Anthropic described the redactions as aimed at removing confidential information that could accelerate other developers.<grok type="render_inline_citation" citation_id="108" />

Readers should treat the 1.9 times AECI figure and the roughly 2 times overall estimate as central estimates with wide uncertainty ranges. The report does not claim Anthropic has crossed any specific policy threshold in a way that triggers automatic action, though the companion review of the August Risk Report finds Anthropic’s public argument that the 2 times acceleration threshold had not been crossed by July 15 to be overstated. Most relevant researchers at both organizations lean toward the threshold not having been crossed at that time, but METR considers crossing plausible.<grok type="render_inline_citation" citation_id="112" />

For context on related capability and safety work, see our earlier coverage of Claude models and agentic systems.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/jQBoCp3txpY"
    title="Anthropic is letting METR researchers look under the hood with employee-level access"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical Takeaways

- Treat benchmark acceleration numbers as one input among several. AECI growth of 1.9 times is informative but maps imperfectly to broader real-world capabilities.
- Distinguish assistance from full autonomy. Current gains appear driven mainly by researchers using AI tools rather than agents completing research end-to-end.
- Watch for Anthropic’s forthcoming self-analysis. Independent and internal estimates together provide a clearer picture than either alone.
- Note the redaction pattern. High-access evaluations improve evidence quality, yet extensive redactions limit public verification of the most decisive data.

## Conclusion

METR’s assessment supplies the clearest independent evidence to date that AI assistance is accelerating AI development at a frontier lab. The central estimate of roughly double the prior pace of progress on well-specified tasks, combined with the lack of identified near-term bottlenecks, raises the possibility of further speedup. High uncertainty, redactions, and the distinction between benchmark scores and broader capabilities mean the precise trajectory remains open. Ongoing independent access and Anthropic’s planned disclosures will help refine the picture.

Sources: METR independent assessment (November 5, 2026), Reuters reporting, and Anthropic-related public statements.