---
title: "How to Use Cheminformatics Skills in Google Antigravity"
description: "Install Science plugin in Google Antigravity, run drug discovery workflows with RDKit, and access free high-tier for scientists."
pubDate: 2026-11-07T14:00:00
heroImage: "https://images.unsplash.com/photo-1745237497721-5e6c13a171ac?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "ai", "google"]
noindex: false
---

Drug discovery teams lose days converting molecules between paper names, patent diagrams, and catalog files. A single wrong bond turns a promising candidate into an inert compound. Google DeepMind’s Cheminformatics Skills in Antigravity cut that cycle. In a published walkthrough, an agent pulled thousands of compounds, ran analysis, and proposed new designs with synthesis routes in about one hour.

The skills pair a language model for orchestration and reasoning with deterministic chemistry tools. You get literature search, molecule extraction, matched molecular pair analysis, potency models, and design proposals without leaving the Antigravity workspace.

![Molecular structure visualization](https://images.unsplash.com/photo-1745237497721-5e6c13a171ac?auto=format&fit=crop&w=800&q=80)

## What the Cheminformatics Skills do

The underlying model handles workflow steps, database navigation, and scientific reasoning. Deterministic tools based on RDKit perform the molecular calculations. Connectors link to curated resources in ChEMBL and PubChem.

This split matters. Language models can miscount atoms or invent bonds. RDKit and related libraries do not. The skills encode domain practices so the agent extracts structures correctly, associates them with reported data, and prepares compounds for analysis.

In the lung cancer example, the agent worked with crizotinib and lorlatinib analogues. Crizotinib is a first-generation tyrosine kinase inhibitor with five major rotatable bonds. Lorlatinib is a later cyclized version that reduces those bonds and improves potency. The agent retrieved compounds, filtered buffers and solvents, and highlighted that many macrocycles appear brain-penetrant—an important property for lung cancer that spreads to the brain.

It then built an interactive viewer for the curated set. Users can plot potency against rotatable bonds and color by macrocycle status. The pattern is clear: fewer rotatable bonds often track with higher potency.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/afQqqcmLUWw"
    title="Accelerating cheminformatics with Google Antigravity"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## How to access and install the skills

The skills ship inside the Science plugin for Google Antigravity. They are available now.

1. Download the Antigravity app from the official site at antigravity.google.
2. Open Customizations in the left sidebar.
3. Switch to the Marketplace tab.
4. Find the Science plugin under Build with Google and click Add.
5. Restart the app if prompted after the first dependency install.

You can also install the open Science skills bundle with:

```bash
npx skills add google-deepmind/science-skills/
```

The first time a skill runs, the agent may request approval to install the `uv` package manager. Approve it and restart Antigravity once. Some skills benefit from API keys for higher rate limits, but core cheminformatics functions work without them.

Google is offering 10,000 scientists the highest Antigravity usage tier free for six months, onboarded on a rolling basis. The offer is subject to eligibility, capacity, and selection. Applications are open via the form linked from the DeepMind post and the Antigravity science page.

For general Antigravity model setup, see our [guide to accessing Claude Opus 5.5 in Google Antigravity](/blog/access-claude-opus-5-5-google-antigravity/).

![Chemistry laboratory equipment](https://images.unsplash.com/photo-1742137587510-389de3549208?auto=format&fit=crop&w=800&q=80)

## Run a rigidification workflow

Start a session in Antigravity with the Science plugin enabled. Give the agent a focused prompt such as: “Search literature for crizotinib, lorlatinib, and close analogues. Extract structures, associate reported potency data, remove solvents and buffers, and prepare a curated set.”

The agent retrieves compounds, documents sources, and opens an interactive viewer. From there you can:

- Click individual molecules to inspect metadata.
- Generate scatter plots of potency versus rotatable bonds, colored by macrocycle status.
- Export the curated set for further work.

Next, ask for matched molecular pair analysis. The agent compares pairs that differ only by cyclization. Results typically show that closing a ring reduces rotatable bonds and raises potency, matching the known crizotinib-to-lorlatinib path.

Then request potency models. The skills guide the agent on best practices: chronological splits when dates are available, or scaffold splits to estimate performance on new chemotypes. It benchmarks multiple architectures and feature sets, then shows statistical and visual outputs so you can judge quality and iterate.

Finally, prompt for new designs: “Propose improved rigidified macrocycles based on the MMPA and models. Include synthesis routes and electron-pushing diagrams.” The agent generates candidates, predicts potency with the models it trained, and suggests reactions grounded in public data. Results export to standard chemistry formats.

![Clean laboratory bench with glassware](https://images.unsplash.com/photo-1783454975251-8baeadeb91f7?auto=format&fit=crop&w=800&q=80)

## Tips and limitations

Keep prompts specific. Name the target, the desired property change (rigidification, potency, brain penetration), and the analysis type (MMPA, model training, design proposal). The agent works best when you stay in the loop at decision points.

Review every structure. The deterministic tools reduce errors, but sparse literature data and inter-lab assay noise still limit model precision. Computational designs are testable hypotheses. Every proposed molecule needs synthesis and experimental validation before it becomes a candidate.

Use the interactive viewer early. Visual patterns often surface faster than tables. Export intermediate results so you can load them into other chemistry software if needed.

If you hit rate limits on public databases, consider the free high-tier offer for scientists. The Science plugin also connects to other DeepMind resources such as AlphaFold when the workflow calls for structure prediction.

## Conclusion

Cheminformatics Skills turn Antigravity into a collaborative science workbench for drug discovery. You spend less time converting formats and more time testing hypotheses. Install the Science plugin, run a focused literature-to-design cycle, and keep experimental validation in the plan.

## Sources

- Google DeepMind, “Agentic cheminformatics with Google Antigravity,” 3 November 2026: https://deepmind.google/blog/agentic-cheminformatics-with-google-antigravity/
- Google Antigravity Science use case page: https://antigravity.google/use-cases/science
- Google Antigravity YouTube, “Accelerating cheminformatics with Google Antigravity”: https://www.youtube.com/watch?v=afQqqcmLUWw
- RDKit documentation: https://www.rdkit.org/
- ChEMBL: https://www.ebi.ac.uk/chembl/
- PubChem: https://pubchem.ncbi.nlm.nih.gov/
