---
title: "How Researchers Query AlphaGenome Atlas Variant Scores"
description: "Learn how researchers use AlphaGenome Atlas to rank DNA variants with the AVI score through the free portal, API, and Antigravity skill."
pubDate: 2026-10-03T12:00:00
heroImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai", "google", "tutorials", "how-to"]
noindex: false
---

A single letter change in human DNA can be harmless, or it can rewrite how a gene is spliced. Testing all of those changes in a lab is not practical. Google DeepMind says there are about 9 billion possible single-nucleotide variants in the human genome.

AlphaGenome Atlas, announced on 8 September 2026, precomputes predictions for every one of those changes. The result is a 1-petabyte catalogue, more than 30 times larger than the AlphaFold Database, with a single AlphaGenome Variant Impact (AVI) score for each variant. This guide shows how researchers can open the free portal, read an AVI score, and decide when to move to the API or the Antigravity skill.

## What the Atlas actually stores

The human genome is about 3 billion base pairs. Scientists understand the roughly 2% that codes for proteins better than the other 98%, which mostly regulates when genes turn on. AlphaGenome already predicted how a single change can disrupt processes such as protein production. Atlas runs that idea across the whole genome in advance.

DeepMind lists four linked resources:

- Molecular effect predictions for each variant, across gene-regulation features and hundreds of human and mouse cell types and tissues.
- An AVI score, one number that ranks impact for coding and non-coding variants.
- AVI feature attributions that point to the biology behind the score, such as splicing, gene expression, chromatin accessibility, or the AlphaMissense protein score.
- A catalogue of more than 2,500 recurrent DNA sequence motifs and where they sit in the genome.

The AVI score mixes AlphaGenome with AlphaMissense, DeepMind's model for protein-altering variants. A higher score means the model predicts a stronger molecular effect. DeepMind says testing showed best-in-class performance on several variant pathogenicity and rare-disease benchmarks. Treat that as a vendor claim, then check the paper before you cite it in a methods section.

![Researcher reviewing genetic data on a laboratory computer](https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80)

## Step 1: Open the free research portal

Academic and other non-commercial use starts on the website. DeepMind points researchers to the AlphaGenome Atlas portal at [alphagenome.google/atlas](https://alphagenome.google/atlas). Google's blog describes it as a portal that needs no coding.

1. Open the portal in a desktop browser.
2. Search or paste the variant you already have from sequencing, a clinical report, or a paper. Keep the genome build and allele notation consistent with your source file.
3. Read the AVI score first. Use it to sort a candidate list, not as a diagnosis.
4. Open the feature attributions for any high-scoring variant. Look for the process the model says is disrupted, such as an incorrect splice site or a change in expression.
5. Note the cell type or tissue context if the portal shows one. A score without that context is harder to explain to a collaborator.

Commercial use of the Atlas on Google Cloud was described as coming soon at launch. The base AlphaGenome model is already available for commercial use in Cloud Model Garden, and for academic use on GitHub and through the AlphaGenome API.

## Step 2: Rank a shortlist before you order experiments

The practical job is prioritisation. Rare-disease teams often start with thousands of variants and need a short list for wet-lab checks.

DeepMind's collaborators at the Broad Institute, including Laura Covill and Anne O'Donnell-Luria, working with the GREGoR Consortium, used the AVI score on unsolved rare-disease cases. The score highlighted a variant in *DNM1*, a gene linked to epileptic encephalopathy, that earlier review had missed. Predictions under the score said the variant created an incorrect splice site and extended the protein. Experimental screens later supported that prediction and found nearby variants with similar effects.

You can copy that workflow without copying their data:

1. Export candidate variants from your pipeline, including ones previously labelled benign or of uncertain significance.
2. Score them in the portal, or in batch through the API if the list is long.
3. Sort by AVI score, then filter to genes already tied to the phenotype.
4. Read attributions before you pick assays. A predicted splice error points to a different experiment than a predicted expression change.
5. Record the score, the attribution category, and the assay result in the same table so a later reviewer can see why you followed that variant.

## Step 3: Group non-coding variants for trait studies

Most trait-associated variants sit outside protein-coding sequence. Rare non-coding changes are hard to link to a trait because harmless variation creates statistical noise.

Gareth Hawkes, a Medical Research Council fellow at the University of Exeter, applied Atlas to whole-genome data from more than 54,000 UK Biobank participants. Grouping rare variants by predicted molecular effects uncovered 22% more non-coding genetic associations than the ungrouped analysis. That work pointed to regulatory variants tied to levels of PLA2G7, linked to aging, and EGLN1, an oxygen sensor.

On body mass index, Hawkes limited the search to the top 1% of non-coding variants Atlas scored as most impactful, across hundreds of millions of non-coding variants in the biobank data. That filter identified 19 genetic regions for follow-up. The blog presents those regions as leads, not as finished biology.

If you run a similar study, pre-register the score cutoff. A top-1% filter is a modelling choice. Say so in the paper.

![Scientist working with samples in a genetics laboratory](https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&q=80)

## Step 4: Use the API or the Antigravity skill for batches

The portal is enough for a handful of variants. Cohort work needs a batch path.

DeepMind lists three access routes:

- The website portal for non-commercial lookup.
- The AlphaGenome API, with client code in the [google-deepmind/alphagenome](https://github.com/google-deepmind/alphagenome) GitHub repository. The research code for the base model is in [alphagenome_research](https://github.com/google-deepmind/alphagenome_research).
- A skill inside Google Antigravity for science workflows that need the Atlas inside a longer agent task.

For a batch job, pull variants from your VCF or association file, request AVI scores and feature attributions, and join the results back to your sample metadata. Keep the model version and query date in the output. Atlas is a snapshot of precomputed predictions, and DeepMind describes it as a baseline that will be updated as AlphaGenome improves.

Antigravity is the agent path, not a replacement for the portal. Use it when the next step is a written summary, a comparison across genes, or a handoff into another scientific tool. If you already use Gemini skills for repeat lab write-ups, the Atlas skill follows the same idea: package the instructions once, then call them on new variant lists.

## Step 5: Read motifs when the score is not enough

Atlas also maps short recurring sequences, the motifs DeepMind calls the words of the genome. Julia Zeitlinger and Melanie Weilert at the Stowers Institute used that layer to separate transcription factors that only change DNA accessibility from factors that also switch genes on or off.

When an AVI attribution names chromatin or expression, check whether the variant sits on a known motif. That extra step gives a reviewer a mechanism, not only a rank.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/U0aToL5C-bQ"
    title="AlphaGenome Atlas: Understanding the human genome"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Limits to write into your methods

Atlas predictions are not clinical results. The Broad *DNM1* case still needed experimental screens. Hawkes's BMI regions are candidates for the next study, not confirmed causes.

A few other limits follow from the launch posts:

- Coverage is single-nucleotide variants, not every structural change or insertion.
- Scores combine model outputs. They can be wrong in cell types the training data covers poorly.
- Non-commercial portal access and upcoming Cloud commercial access are different paths. Confirm the licence before you use a score in a product.
- The paper is the right citation for benchmark claims. The blog summary is not.

Google's other science models follow a similar pattern of a research system plus a product surface. Weather forecasts from WeatherNext 3 now sit in Search, Maps, and Gemini, and [Project Suncatcher](/blog/project-suncatcher-tpu-satellite-orbit/) is testing TPUs in orbit. Atlas is the genomics entry in that set: a large precomputed table, a simple score, and a portal that does not require a training cluster.

## What to do next

Start with one variant you already trust from a published case. Confirm that the portal returns an AVI score and an attribution you can explain in a sentence. Then score a small candidate list from your own data and compare the top hits with what your current filters already flag.

If the short list changes which assay you would run, the Atlas is doing the job DeepMind built it for: shrinking a 9-billion-variant haystack before anyone books time in the lab.

## Sources

- Google, [AlphaGenome Atlas: a high-resolution map of human DNA](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/alphagenome-atlas/), 8 September 2026.
- Google DeepMind, [AlphaGenome Atlas: a predictive map of every possible DNA letter change](https://deepmind.google/blog/alphagenome-atlas-a-predictive-map-of-every-possible-dna-letter-change-in-the-human-genome/), 8 September 2026.
- Google DeepMind, [AlphaGenome Atlas: Understanding the human genome](https://www.youtube.com/watch?v=U0aToL5C-bQ), 8 September 2026.
- AlphaGenome API repository: [github.com/google-deepmind/alphagenome](https://github.com/google-deepmind/alphagenome).
