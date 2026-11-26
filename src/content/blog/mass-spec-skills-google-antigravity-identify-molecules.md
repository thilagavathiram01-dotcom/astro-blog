---
title: "Identify Molecules with Mass Spec Skills in Google Antigravity"
description: "Install Mass Spec Skills in Google Antigravity to identify molecules from tandem MS/MS spectra using Gemini tools like SIRIUS and MetFrag."
pubDate: 2026-11-26T14:00:00
heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "gemini", "google"]
noindex: false
---

Analytical chemists face thousands of tandem mass spectra from a single sample. Most remain unannotated because reference libraries cover only a small fraction of measured signals. Google DeepMind released Mass Spec Skills for Google Antigravity on 25 November 2026. The skills pair Gemini reasoning with established open tools so an agent can preprocess spectra, search libraries, predict formulas, and rank structures.

You describe the task in plain language. The agent chains the steps and returns an auditable report that maps fragments to a proposed structure. For catalogued molecules the identification is faster. For new compounds the agent still supplies a formula, peak assignments, and a starting point for full elucidation.

![Scientist working in a modern laboratory with analytical equipment](https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80)

## How the workflow runs

The agent follows a standard analytical sequence. It first cleans the spectrum with matchms, converts the precursor m/z to a neutral mass, and removes low-intensity noise. Next it queries GNPS and MassBank of North America (MoNA) reference libraries with cosine similarity.

When no confident library match appears, the agent calls SIRIUS to score candidate formulas. It then retrieves isomers from PubChem, ranks them with MetFrag and MAGMa against simulated fragments and neutral losses, and breaks ties by checking bond connectivity and functional groups.

In one published example the raw spectrum contained 1,761 peaks. After preprocessing, 19 peaks remained. SIRIUS identified C20H21ClN6O at –1.5 ppm. The agent ranked 845 PubChem isomers, explained 14 of 19 peaks (97.7 % of summed intensity), and selected the structure that matched the observed HCl and HNCO losses.

Each stage can also run alone for routine tasks such as noise removal, peak annotation, or isomer comparison.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/nTOVIGsqCuY"
    title="Learn the basics of Google Antigravity"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Benchmark results

DeepMind tested the skills on 100 compounds drawn from the Enamine REAL MS/MS collection in MoNA. Three models were compared: Gemini 3.8 Flash, Gemini 4 Argon, and Gemini 4 Carbon. Each spectrum received three attempts.

Without internet access or skills, every model stayed below 4 % exact identification. Limited internet access improved frontier models but still left large gaps, especially for the lightweight model. With internet plus Mass Spec Skills, all three models identified and verified the exact molecule in roughly 97 % of attempts.

The skills also cut token use: nearly fourfold on Flash, by half on Argon, and by nearly a fifth on Carbon. Lightweight models therefore match frontier accuracy while consuming fewer tokens.

![Molecular model illustrating chemical structure analysis](https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80)

## Install and start using the skills

Mass Spec Skills ship as a plugin on Google Antigravity. They are available now.

1. Download the Antigravity App from antigravity.google/download for your operating system.
2. Open the app and sign in with a Google account.
3. In the left sidebar click Customizations, then Marketplace.
4. Locate the Mass Spec or Science plugin under Build with Google and click Add.
5. Restart the app if prompted after the first dependency install.

Enterprise users can choose Use Business Account and sign in with Google Cloud credentials. You can also install related Science skills via the CLI with `agy plugin install` commands listed in the Marketplace, or pull the open bundle with `npx skills add google-deepmind/science-skills/`.

Google is offering 10,000 scientists the highest Antigravity usage tier free for six months, onboarded on a rolling basis. The offer is subject to eligibility, capacity, and selection. Details appear on the DeepMind post and the Antigravity science page.

If you already use Antigravity for drug discovery, our [guide to Cheminformatics Skills](/blog/agentic-cheminformatics-google-antigravity-guide/) covers the complementary RDKit-based workflows for literature search, matched molecular pair analysis, and design proposals.

## Run an example identification

Start a session with the plugin enabled. Upload or point the agent to a tandem spectrum file and give a prompt such as: “Identify the molecule from this negative-mode MS/MS spectrum. Report the formula, top structures, and a peak annotation table.”

The agent preprocesses the peaks, searches libraries, runs SIRIUS for the formula, retrieves PubChem candidates, ranks them, and produces a report that lists explained peaks, neutral losses, and the evidence supporting the top structure. Review the report, inspect the mapped fragments, and decide whether additional measurements (retention time, ion mobility, or NMR) are needed.

You can also ask for intermediate steps only: “Clean this spectrum with matchms and list the retained peaks,” or “Compare these two isomers against the observed fragments.”

## Tips and limitations

Keep prompts concrete. State the ionization mode, mass tolerance if known, and the desired output (full structure report, formula only, or peak annotation). The agent selects and chains the relevant skills automatically.

Stay in the loop at decision points. The tools reduce calculation errors, yet the chemist still judges which candidates warrant further experimental work.

The system cannot distinguish enantiomers or some closely related isomers that fragment almost identically. Those cases require orthogonal data. For molecules absent from all public databases the agent cannot retrieve a confirmed structure; it supplies a predicted formula, peak assignments, and an annotation table that serve as a reliable starting point.

Token savings are largest on lighter models, so start with Gemini 3.8 Flash for routine spectra and escalate only when needed.

## Conclusion

Mass Spec Skills turn Google Antigravity into a practical assistant for tandem mass spectrometry. You spend less time configuring separate tools and more time reviewing chemical evidence. Download the app, install the plugin, and test the workflow on your next unannotated spectrum.

## Sources

- Google DeepMind, “From spectrum to structure: Identifying molecules with Mass Spec Skills for Google Antigravity,” 25 November 2026: https://deepmind.google/blog/interpreting-mass-spectra-with-google-antigravity/
- Google Antigravity Science use case: https://antigravity.google/use-cases/science
- Google Antigravity Marketplace documentation: https://antigravity.google/docs/marketplace/
- Google Antigravity YouTube, “Learn the basics of Google Antigravity”: https://www.youtube.com/watch?v=nTOVIGsqCuY
- matchms library: https://github.com/matchms/matchms
- SIRIUS: https://bio.informatik.uni-jena.de/software/sirius/
- PubChem: https://pubchem.ncbi.nlm.nih.gov/
- GNPS: https://gnps.ucsd.edu/
