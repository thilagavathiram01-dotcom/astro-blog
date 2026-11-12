---
title: "How to Use AlphaGenome 2 for Cell-Specific DNA Predictions"
description: "Step-by-step guide to AlphaGenome 2 API: predict variant effects in specific cell types, score genes, and condition on your own scRNA-seq data."
pubDate: 2026-11-12T19:00:00
heroImage: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai", "tutorials", "google", "developer"]
noindex: false
---

Google DeepMind released AlphaGenome 2 on 11 November 2026. The model predicts how DNA sequence changes affect molecular activity in one specific cell type or cell state at a time. Researchers can access it free for non-commercial work through the AlphaGenome API.

Unlike earlier tools that averaged across whole tissues, AlphaGenome 2 takes a 1-million-letter DNA sequence plus a target condition. It returns predictions for gene expression, chromatin accessibility, histone marks, transcription factor binding, splicing, 3D contacts, and DNA methylation. This guide shows the practical steps to install the package, score a variant, and adapt the model to your own single-cell data.

![DNA double helix structure](https://images.unsplash.com/photo-1732046801426-f32529468176?auto=format&fit=crop&w=800&q=80)

## What changed from AlphaGenome 1

AlphaGenome 1 predicted thousands of experiments in parallel from a fixed set of bulk tissues and cell lines. AlphaGenome 2 is a conditional model. You choose one condition (a tissue, cell type, or state) and the model conditions on it at every layer.

DeepMind trained it on more than 107 million individual cell profiles across 68 tissues from human and mouse samples. On the TenK10K single-cell eQTL benchmark covering 28 primary immune cell types, AlphaGenome 2 identified 30 percent of causal variants at 90 percent precision, versus 16 percent for AlphaGenome 1 fine-tuned on single-cell data. Directional gene-effect accuracy rose from 23 percent to 43 percent.

The model can also impute unmeasured experimental readouts. If you supply gene expression for a cell state, it can predict chromatin accessibility or other tracks that were not measured in that experiment.

## Getting an API key and installing the package

1. Go to [alphagenome.google/api](https://alphagenome.google/api) and sign in. Accept the non-commercial terms of service. The API is free for non-commercial research; commercial use is in private preview.
2. Install the Python package: `pip install alphagenome` (or use `uv` or `conda`).
3. Store your key as an environment variable `ALPHA_GENOME_API_KEY` or pass it directly when you create the client.

The official documentation at [alphagenomedocs.com](https://www.alphagenomedocs.com/) includes Colab notebooks for the full workflow.

## Scoring a variant in a reference cell type

The core workflow has four steps: choose a condition, select a genomic interval centered on the variant, score or predict, then inspect the results.

Here is the official example that scores a variant in CD14-positive monocytes in blood:

```python
from alphagenome.data import genome
from alphagenome.models.v2 import dna_client

dna_model = dna_client.create('YOUR_API_KEY')

# Condition: CD14-positive monocytes in blood
condition = 'UBERON:0000178_CL:0001054'

variant = genome.Variant(
    chromosome='chr2',
    position=219243701,
    reference_bases='C',
    alternate_bases='T',
)
interval = variant.reference_interval.resize(dna_client.SEQUENCE_LENGTH_1MB)

scores = dna_model.score_variant(
    interval=interval,
    variant=variant,
    condition=condition,
)
```

You can request specific scorers (for example gene expression) and tidy the output into a DataFrame for filtering by gene or track. The same client supports `predict_interval`, `predict_variant`, and batch methods.

If you already work with pre-computed genome-wide scores, the [AlphaGenome Atlas variant scores guide](/blog/query-alphagenome-atlas-variant-scores/) shows how to look up AVI scores without running the live model.

![Laboratory researcher preparing genetic samples](https://images.unsplash.com/photo-1576091160651-e028ca26a943?auto=format&fit=crop&w=800&q=80)

## Conditioning on your own single-cell data

AlphaGenome 2 accepts up to 256 cells of your own scRNA-seq counts. The API compresses the expression profile into a cell-state embedding and conditions the model on that state. No fine-tuning is required.

This lets you predict variant effects in cell states the model never saw during training, such as activated T cells after vaccination or disease-specific macrophage populations. DeepMind reports that the approach matches or outperforms models trained or fine-tuned directly on those datasets.

See the official tutorials for the exact `cell_conditioning` call and for plotting gene-expression heatmaps or enhancer-gene arcs.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/uND6iY2qp_c"
    title="AlphaGenome 2: Teaching AI to read the entire human genome"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical tips

- Start with a reference condition that matches your biological question. List supported conditions with the client before you write code.
- Live model predictions suit small-to-medium analyses. For genome-wide lookups of pre-computed scores, use the AlphaGenome Atlas website or Atlas API endpoints, which support higher query rates.
- Predictions are for research only. They are not validated for clinical or diagnostic use.
- Outputs must not be used to train other machine-learning models under the non-commercial terms.
- Pair model scores with orthogonal evidence (CRISPR screens, eQTL fine-mapping, or functional assays) before treating a variant as causal.

## Conclusion

AlphaGenome 2 turns a 1 Mb DNA window and a cell-type condition into quantitative predictions of molecular activity. The free non-commercial API, expression-conditioning support, and improved single-cell variant recall give researchers a practical way to prioritize disease-relevant variants in the cell types where they matter. Install the package, score a few known variants in a relevant condition, and compare the output against existing functional data before scaling up.

## Sources

- Google DeepMind blog, AlphaGenome 2 announcement, 11 November 2026: https://deepmind.google/blog/alphagenome-2-deciphering-how-cells-read-dna-to-better-understand-disease/
- AlphaGenome API GitHub repository and README: https://github.com/google-deepmind/alphagenome
- Official documentation and tutorials: https://www.alphagenomedocs.com/
- AlphaGenome terms of service: https://alphagenome.google/terms
