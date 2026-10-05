---
title: "How to Prioritize DNA Variants With AlphaGenome Atlas"
description: "Learn how researchers query AlphaGenome Atlas, read an AVI score, and score a DNA variant without using predictions for clinical care."
pubDate: 2026-10-05T15:45:00
heroImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai", "google", "tutorials", "developer"]
noindex: false
---

About 2% of the human genome codes for proteins. The other 98% still hides most regulatory instructions. On September 8, 2026, Google DeepMind released AlphaGenome Atlas, a precomputed map of how every possible single-letter DNA change might affect molecular biology.

The catalogue covers 9 billion single-nucleotide variants and is about 1 petabyte, more than 30 times larger than the AlphaFold Database. You do not download that file. You query it. This guide shows the portal path, the API path, and the limits Google states in the terms.

If you want another research model with a public access path, see our [Google flu forecast notes](/blog/google-flu-forecast-cdc-flusight-2026/).

## What the Atlas actually stores

AlphaGenome already predicted regulatory effects from DNA sequence, including gene expression, splicing, chromatin features, and contact maps. The model reads sequences up to 1 million base pairs and returns most outputs at single-base resolution. The Atlas is the genome-wide result of running that idea in advance.

Each variant record has three useful pieces:

- Precomputed effects for that single-letter change.
- An AlphaGenome Variant Impact (AVI) score, one number that ranks how large the predicted effect looks.
- Feature attributions that split the score into categories such as chromatin accessibility, splicing, conservation, and, for protein-changing variants, the AlphaMissense protein-impact signal.

AVI is a ranking aid, not a diagnosis. Google says Atlas outputs are for theoretical modelling and research. They must not be used for clinical decision-making or other professional medical advice.

![Researcher reviewing data on a laptop in a lab](https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80)

## Who can use it, and where

DeepMind opened three research routes on launch day:

1. A website at alphagenome.google/atlas that needs no code.
2. The AlphaGenome API, free for non-commercial use under the terms of service.
3. An AlphaGenome Atlas skill inside Google Antigravity for agent workflows.

Commercial use of the base AlphaGenome model is available on Google Cloud through Model Garden. DeepMind said commercial Atlas access on Cloud would follow. Until that listing is in your project, treat the public site and API as the non-commercial path.

Outputs should not be used to train other machine learning models, except where the terms explicitly allow a downloadable artifact. Read the current terms before you script a bulk export.

## Look up a variant in the portal

The portal is the right start for a clinician-scientist or biologist who has a short variant list and does not want a Python environment.

1. Open [alphagenome.google/atlas](https://alphagenome.google/atlas).
2. Search by chromosome, position, reference base, and alternate base. Use the same assembly the portal documents. Do not mix builds.
3. Read the AVI score first. A higher score means the model predicts a larger molecular effect, not that a patient has a disease.
4. Open the feature attributions. A splice-site signal is a different hypothesis from a chromatin-accessibility signal.
5. Compare the variant with nearby candidates. The point of the score is triage, so rank the list before you design an assay.

Google cites two early uses. At the Broad Institute, Laura Covill's team used AVI to prioritize variants in unsolved rare-disease research. The score flagged a DNM1 variant predicted to create an incorrect splice site, which supported further case work. Separately, Dr. Gareth Hawkes applied Atlas scores to data from more than 54,000 UK Biobank participants. Grouping variants by predicted molecular effect uncovered 22% more non-coding associations. Restricting to the top 1% of impactful variants pointed to 19 regions linked to body mass index.

Those are research results, not a claim that the portal diagnoses BMI or rare disease.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/U0aToL5C-bQ"
    title="AlphaGenome Atlas: Understanding the human genome"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Score a variant with the API

Use the API when you already have a variant call format file and need repeatable scores. Precomputed Atlas queries get a higher rate limit than live model predictions. Live predictions fit thousands of variants, not analyses that need more than 1 million calls.

Get a key at alphagenome.google/api. Store it outside the notebook.

Install the client from the official repository:

```bash
git clone https://github.com/google-deepmind/alphagenome.git
pip install ./alphagenome
```

The quick-start notebook on Colab is the fastest check that your key works. For a local script, the DeepMind example scores one variant on chromosome 22 and plots reference versus alternate RNA-seq tracks:

```python
from alphagenome.data import genome
from alphagenome.models import dna_client
from alphagenome.visualization import plot_components
import matplotlib.pyplot as plt

model = dna_client.create("YOUR_API_KEY")

interval = genome.Interval(chromosome="chr22", start=35677410, end=36725986)
variant = genome.Variant(
    chromosome="chr22",
    position=36201698,
    reference_bases="A",
    alternate_bases="C",
)

outputs = model.predict_variant(
    interval=interval,
    variant=variant,
    ontology_terms=["UBERON:0001157"],
    requested_outputs=[dna_client.OutputType.RNA_SEQ],
)

plot_components.plot(
    [
        plot_components.OverlaidTracks(
            tdata={
                "REF": outputs.reference.rna_seq,
                "ALT": outputs.alternate.rna_seq,
            },
            colors={"REF": "dimgrey", "ALT": "red"},
        ),
    ],
    interval=outputs.reference.rna_seq.interval.resize(2**15),
    annotations=[plot_components.VariantAnnotation([variant], alpha=0.8)],
)
plt.show()
```

That call is a live prediction, not an Atlas lookup. Use it when you need tissue-specific tracks. Use Atlas when you need a genome-wide AVI rank and the precomputed feature split. Documentation and the visualization library cover the other output types.

![Close-up of laboratory glassware on a bench](https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&q=80)

## How to read an AVI score

Treat the number as a sort key.

- Sort candidate variants by AVI before you open raw tracks.
- Read the attribution bar. A high score driven by splicing is a different follow-up from a high score driven by AlphaMissense.
- Keep the reference and alternate bases attached to the query. A swapped allele produces a different record.
- Do not average AVI across a gene and call that a gene score. The unit is the variant.
- Pair the score with your own association statistic. Atlas does not replace a cohort p-value.

If you publish, cite the Atlas preprint. DeepMind lists the medRxiv record with DOI 10.64898/2026.09.16.26363192. Cite the Nature paper (DOI 10.1038/s41586-025-10014-0) when you use the base model.

## Limits that should stay in the methods section

Query rate moves with demand. Atlas lookups are the path for broad screens. Fresh model calls are for smaller intervals.

Predictions can be wrong. A flagged splice site still needs an assay. Google's own examples describe supporting evidence and the next experiment, not a closed case.

Non-commercial terms block training new models on Atlas outputs. Clinical use is out of scope. If a hospital workflow needs this class of model, wait for the Cloud commercial offering and a separate validation plan. Do not paste patient identifiers into a public demo.

Bugs go to the GitHub issues list. Usage questions go to the AlphaGenome community forum, or to alphagenome@google.com if the forum does not cover the case.

## A practical first session

Pick 20 variants you already trust from a published paper. Look them up in the portal and write down AVI plus the top attribution. Then run the Colab quick start on one interval you can plot. If the portal rank and the track disagree, keep both and check the assembly, the allele, and the ontology term before you scale the job.

That loop takes an afternoon and tells you whether Atlas is useful for your variant class. It also keeps the first result inside the research boundary Google set.

## Sources

- Google blog, AlphaGenome Atlas announcement, September 8, 2026: https://blog.google/innovation-and-ai/models-and-research/google-deepmind/alphagenome-atlas/
- Google DeepMind, AlphaGenome Atlas: https://deepmind.google/blog/alphagenome-atlas-a-predictive-map-of-every-possible-dna-letter-change-in-the-human-genome/
- AlphaGenome API README: https://github.com/google-deepmind/alphagenome
- Portal: https://alphagenome.google/atlas
