---
title: "How to Use AlphaGenome 2 for Cell-Specific Variant Scoring"
description: "Step-by-step guide to the free AlphaGenome 2 API. Score genetic variants by cell type, set up the Python client, and interpret results for non-commercial research."
pubDate: 2026-11-24T14:00:00
heroImage: "https://images.unsplash.com/photo-1732046801426-f32529468176?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "developer", "ai"]
noindex: false
---

Google DeepMind released AlphaGenome 2 on November 11, 2026. The model predicts how DNA sequence changes affect gene regulation in specific human cell types rather than averaged tissues.

It improves on the original AlphaGenome by conditioning on cell states. Researchers can now score variants for particular immune cells or other types and condition on their own single-cell RNA-seq data. Access is free for non-commercial research through the AlphaGenome API.

This guide walks through setup, a basic variant scoring example, and practical next steps. All steps follow official DeepMind documentation.

## What AlphaGenome 2 Adds

AlphaGenome 2 takes a DNA sequence up to 1 million base pairs plus a biological condition. It predicts outputs such as gene expression, RNA splicing, chromatin accessibility, histone marks, and DNA methylation for that specific condition.

On the TenK10K single-cell dataset of 28 primary immune cell types, it identified nearly twice as many causal expression variants (30 percent versus 16 percent) compared with the prior model fine-tuned on single-cell data. Directional effects improved from 23 percent to 43 percent.

The model was trained on more than 100 million individual cell profiles across 68 tissues. It can also accept a researcher’s own scRNA-seq snapshot from a few dozen cells to define an unseen condition without retraining.

![DNA double helix structure](https://images.unsplash.com/photo-1732046801426-f32529468176?auto=format&fit=crop&w=800&q=80)

## Access and Setup Requirements

Non-commercial research use is free via the AlphaGenome API. Commercial research is available in private preview through Google Cloud. Outputs are for research only and have not been validated for clinical or diagnostic use. Do not use them to train other machine learning models.

Requirements:

- A free API key from the AlphaGenome site
- Python 3.9 or later
- The alphagenome package

1. Visit the AlphaGenome API page and sign in with a Google account.
2. Accept the non-commercial terms and generate an API key.
3. Install the package in a virtual environment:

```bash
pip install alphagenome
```

4. Export the key as an environment variable:

```bash
export ALPHA_GENOME_API_KEY="your-key-here"
```

In Google Colab, store the key in Secrets and grant notebook access.

## Score a Variant with AlphaGenome 2

The official quick-start pattern centers a 1 Mb interval on the variant and selects a condition.

Example for a variant on chromosome 2:

```python
import os
from alphagenome.data import genome
from alphagenome.models.v2 import dna_client

dna_model = dna_client.create(os.environ["ALPHA_GENOME_API_KEY"])

# Example condition: CD14-positive monocytes in blood
condition = "UBERON:0000178_CL:0001054"

variant = genome.Variant(
    chromosome="chr2",
    position=219243701,
    reference_bases="C",
    alternate_bases="T",
)

interval = variant.reference_interval.resize(dna_client.SEQUENCE_LENGTH_1MB)

# Score the variant
outputs = dna_model.score_variant(
    interval=interval,
    variant=variant,
    condition=condition,
)

print(outputs)
```

Adjust the chromosome, position, and bases for your variant. Call `supported_conditions()` to list available conditions and check which outputs are observed or imputed.

The client returns track data and scores you can plot with the built-in visualization helpers. Start with recommended variant scorers, then explore custom ones if needed.

![Researcher examining samples under a microscope](https://images.unsplash.com/photo-1578496479914-7ef3b0193be3?auto=format&fit=crop&w=800&q=80)

## Work with Your Own Single-Cell Data

AlphaGenome 2 accepts expression conditioning. Upload a small scRNA-seq count matrix (raw counts per gene, up to 256 cells). The model compresses it into a cell-state representation and uses that to condition predictions.

Official Colab tutorials cover this workflow. A few dozen cells are often sufficient. This lets you score variants in disease-relevant or patient-derived cell states the model has not seen during training.

## Practical Tips

- Begin with Atlas lookups for pre-computed scores across 9 billion variants when you need broad screening. Live model predictions suit targeted analyses of thousands of variants.
- Check the `observed`, `imputed_supported`, and `imputed_exploratory` labels on tracks before interpreting results.
- Rate limits vary with demand. Atlas queries allow higher throughput than live predictions.
- Review the migration guide if you previously used AlphaGenome 1. Import paths and some behaviors changed.
- Pair genomic analysis with other Gemini tools when appropriate. Our guide on [how to access and use Gemini 4 Neon](/blog/how-to-access-use-gemini-4-neon/) covers related model access for broader science workflows.

## Limitations to Keep in Mind

The model improves prioritization of candidate variants but does not replace experimental validation. Benchmarks show better recovery of known effects, yet many causal variants remain undetected. Outputs cannot inform clinical decisions.

Commercial users must apply for the private preview. Weights are not released; all inference runs on Google servers. Query rates are not guaranteed and can change with demand.

## Conclusion

AlphaGenome 2 gives non-commercial researchers a free, cell-specific way to score DNA variants. Setup takes minutes once you have an API key. The Python client and Colab notebooks handle the rest.

Start with a single known variant in a well-documented cell type. Compare the scores against existing literature, then expand to your own data or the Atlas. Official documentation and the DeepMind blog remain the authoritative sources for updates.

## Sources

- [AlphaGenome 2: Deciphering how cells read DNA to better understand disease](https://deepmind.google/blog/alphagenome-2-deciphering-how-cells-read-dna-to-better-understand-disease/) — Google DeepMind, November 11, 2026
- AlphaGenome API documentation and Colab tutorials — alphagenomedocs.com
- github.com/google-deepmind/alphagenome — official Python client

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/uND6iY2qp_c"
    title="AlphaGenome 2: Teaching AI to read the entire human genome"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
