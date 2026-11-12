---
title: "How to Use AlphaGenome 2 for Cell-Specific DNA Predictions"
description: "Step-by-step guide to AlphaGenome 2 API: condition on cell types, score variants, and predict effects with official DeepMind examples."
pubDate: 2026-11-12T14:00:00
heroImage: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "ai", "google"]
noindex: false
---

Google DeepMind released AlphaGenome 2 on November 11, 2026. The model predicts how DNA sequences and single-letter variants affect specific human cell types and states instead of averaging across whole tissues.

Trained on more than 107 million individual cell profiles across 68 tissues, it identifies nearly twice as many causal variants that change gene expression (30% versus 16% on the TenK10K immune-cell set) compared with the prior model fine-tuned on single-cell data. Directional accuracy rises from 23% to 43%. Access is free for non-commercial research through the AlphaGenome API today, with commercial use in private preview.

This guide shows how to install the client, choose a condition, score a variant, and interpret the results. It builds on the earlier [AlphaGenome Atlas variant scores guide](/blog/query-alphagenome-atlas-variant-scores/).

## Why cell-type conditioning matters

Every cell carries the same DNA. Different cell types turn different genes on or off. A variant that overactivates ETS2 in gut macrophages can drive inflammatory bowel disease while leaving other cells largely unaffected. Broad-tissue models can miss these effects. AlphaGenome 2 is a conditional model: you supply a 1 Mb DNA window plus a target condition, and it predicts molecular readouts for that condition only.

Conditions can be reference catalog entries (tissue + cell type ontology CURIEs) or your own single-cell RNA-seq counts (up to 256 cells). The model also supports DNA methylation predictions and can impute missing modalities from a single measurement such as gene activity.

![DNA double helix structure against a dark background](https://images.unsplash.com/photo-1732046801426-f32529468176?auto=format&fit=crop&w=800&q=80)

## Set up the Python client

Install the package from PyPI:

```bash
pip install alphagenome
```

Request a free API key for non-commercial use at the AlphaGenome portal and store it securely. Then create the client:

```python
from alphagenome.data import genome
from alphagenome.models.v2 import dna_client

dna_model = dna_client.create('YOUR_API_KEY')
```

The v2 client supports reference-condition and expression-conditioned predictions, variant and interval scoring, cell embeddings, and input gradients. Interactive Colab tutorials cover each step.

## Choose a condition

List supported reference conditions:

```python
conditions = dna_model.supported_conditions()
print(conditions.head())
```

Each row includes a condition string (ontology CURIE or composite), biosample name, and imputation mode for each output type. Example for CD14-positive monocytes in blood:

```python
condition = 'UBERON:0000178_CL:0001054'
```

You can also build a ModelCondition from component CURIEs. For your own data, pass raw UMI counts as AnnData via the cell_conditioning argument (and supply a cell_condition_name).

## Score a variant

Define a variant and center a 1 Mb interval on it:

```python
variant = genome.Variant(
    chromosome='chr2',
    position=219243701,
    reference_bases='C',
    alternate_bases='T'
)
interval = variant.reference_interval.resize(dna_client.SEQUENCE_LENGTH_1MB)
```

Score it with recommended scorers:

```python
from alphagenome.models.v2 import variant_scorers

scorer = variant_scorers.RECOMMENDED_VARIANT_SCORERS['SC_GENE_EXPRESSION']
scores = dna_model.score_variant(
    interval=interval,
    variant=variant,
    variant_scorers=[scorer],
    condition=condition
)
```

Tidy the results into a DataFrame:

```python
df = variant_scorers.tidy_scores(
    scores,
    match_gene_strand=True,
    filter_protein_coding=True
)
print(df.query('imputation_mode == "observed"').head())
```

Each row reports one variant, gene, scorer, and track. Positive or negative raw_score values indicate the direction of the expression change. You can request multiple scorers (RNA-seq, chromatin accessibility, splicing, methylation) in one call. Batch methods accept lists of intervals, variants, and conditions.

![Scientist handling DNA samples in a laboratory](https://images.unsplash.com/photo-1576091160651-e028ca26a943?auto=format&fit=crop&w=800&q=80)

## Predict tracks and condition on your data

Use predict_variant or predict_interval to obtain full reference and alternate tracks for gene expression, histone marks, chromatin accessibility, splicing, and methylation. Filter to observed tracks when available. For new cell states, encode a small scRNA-seq sample (a few dozen cells can suffice) and pass it as conditioning. The model adapts without retraining and can distinguish, for example, vaccine-activated T cells from resting ones.

Precomputed scores for many GWAS-linked variants across primary human cell types are also available, helping link association signals to specific enhancers, genes, and cell types.

## Tips for productive use

- Start with supported_conditions() to confirm observed tracks for your cell type of interest.
- Prefer protein-coding gene filters and strand matching when ranking expression effects.
- Compare several related cell types by looping or using score_variants with a conditions list.
- Treat outputs as research predictions. DeepMind states the model is not validated for clinical or diagnostic use.
- Pair results with experimental follow-up; the model prioritizes candidates, it does not replace wet-lab validation.

For the earlier genome-wide Atlas that precomputes every possible single-letter change, see the [AlphaGenome Atlas AVI scores guide](/blog/alphagenome-atlas-avi-variant-guide/).

## Conclusion

AlphaGenome 2 moves variant effect prediction from tissue averages to individual cell types and states. The free non-commercial API, clear Python client, and Colab tutorials let researchers score variants, condition on their own single-cell data, and inspect molecular readouts in minutes. Combined with the precomputed Atlas and upcoming Antigravity skills, it gives a practical way to prioritize disease-relevant candidates that broader models miss.

## Sources

- Google DeepMind blog: AlphaGenome 2 announcement (11 November 2026)
- alphagenome Python package README and v2.0.0 release notes
- Official Colab tutorials for scoring variants and choosing conditions
- TenK10K benchmark results reported by DeepMind

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/uND6iY2qp_c"
    title="AlphaGenome 2: Teaching AI to read the entire human genome"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
