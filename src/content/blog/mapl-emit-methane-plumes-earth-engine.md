---
title: "How to Browse MAPL-EMIT Methane Plumes"
description: "Open the MAPL-EMIT Earth Engine app, read plume vectors, and run Google Research inference on NASA EMIT granules."
pubDate: 2026-10-03T19:30:00
heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai", "google", "developer"]
noindex: false
---

Google Research and NASA’s Jet Propulsion Laboratory published MAPL-EMIT in September 2026: a deep-learning model that finds methane point sources in hyperspectral scenes from the EMIT instrument on the International Space Station. The global plume catalog, a browser viewer, a trained model, and inference code are all public.

You do not need a GPU to start. The Earth Engine app shows detected plumes on a map. Researchers who want to process a new granule can install the open library and point it at radiance and observation files from NASA.

## What the model actually measures

EMIT was built to map minerals in dry regions. Its imaging spectrometer also records the infrared fingerprint of methane. Google Research and JPL used that signal in the PNAS paper “Global monitoring of methane point sources using deep learning on hyperspectral radiance measurements from EMIT.”

Point-source mappers trade coverage for detail. EMIT sees an 80 km swath at about 60 meters per pixel, with 7.4 nm spectral sampling. That is enough to separate a landfill cell or a well pad from the surrounding ground. Global mappers such as TROPOMI cover a much wider swath, around 2,600 km, but at kilometer-scale pixels.

Methane’s 100-year warming potential is about 30 times that of carbon dioxide, and the IPCC attributes roughly 25% of human-induced warming since the industrial era to methane. More than 125 countries signed the Global Methane Pledge to cut emissions 30% by 2030. Facility-scale maps are one of the few ways operators can act on that pledge without waiting for a national inventory update.

![Earth seen from orbit, the vantage used by instruments that scan for gas plumes](https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=800&q=80)

## Why a vision transformer beats a pixel filter

Matched-filter products already turn EMIT radiance into a methane enhancement image. Surfaces such as bright roofs and certain soils can look like methane in a single pixel. MAPL-EMIT is a Swin-S vision transformer. It reads the spectrum and the neighborhood around each pixel, so a wind-blown plume is easier to separate from a look-alike patch of ground.

The model solves three tasks at once:

- Enhancement: how much extra methane sits in each pixel of a plume.
- Delineation: the outline of the plume, including cases where neighboring sources overlap.
- Source location: a point traced back to the likely origin, marked in the research figures with an X.

Training used 3.6 million physics-simulated plumes injected into real EMIT scenes. On expert-annotated plumes, Google Research reports 84% recall and a higher signal-to-noise ratio than matched-filter enhancements. Across the global run, the team says the model found 50% more plumes than human experts and more than 23,000 additional plumes, including 24 of the 25 largest-emitting landfills in the comparison set.

Those figures come from the September 2026 Google Research post and the companion note on blog.google. They are model evaluations, not a regulatory inventory.

## Step 1: Open the public viewer

The fastest check is the Earth Engine app at `nature-trace.projects.earthengine.app/view/mapl-emit`.

1. Open the app in a desktop browser. It loads a global map of MAPL-EMIT detections.
2. Zoom to a region you know, such as a landfill corridor or an oil and gas basin.
3. Click a plume polygon. The popup carries the attributes stored in the vector catalog, including location and the detection metadata published with the asset.
4. Compare the outline with a known facility. A plume downwind of a site is a candidate for follow-up, not proof of a leak rate by itself.

The same vectors live in the Earth Engine catalog as `projects/nature-trace/assets/ghg/emit/mapl_emit_plumes_v1_0`. A second asset stores methane enhancements. Both are listed on the Earth Engine dataset pages linked from the research post.

If you already use Earth Engine, load the plume collection in the Code Editor and filter by bounds. Keep the geometry as vectors. Rasterizing the whole globe just to count sites wastes quota.

## Step 2: Read the catalog before you retrain

The plume database is the product most policy and operations teams need. Re-running inference only helps when you have a granule the public catalog does not cover, or when you want to test a threshold change.

Use the catalog when:

- You need a first pass over landfills, energy sites, or agricultural facilities already observed by EMIT.
- You want to cite a public asset instead of a screenshot.
- You are comparing MAPL-EMIT outlines with the NASA L2B matched-filter enhancement product.

Skip a full reprocess when the question is “has EMIT already seen this site?” The app answers that in a minute.

## Step 3: Run inference on one granule

Google Research published the library at `github.com/google-research/mapl`. The README states it is not an officially supported Google product. The trained weights are on Kaggle under Vishal Batchu’s EMIT methane plume detection and quantification model. A synthetic plume dataset is on Kaggle as well.

EMIT granules come in pairs. You need the L1B radiance file and the observation file from NASA Earthdata or LP DAAC.

```bash
pip install .
python3 -m mapl.single_granule_inference \
  --model_path /path/to/pretrained/model \
  --input_filepath /path/to/EMIT_L1B_RAD.nc \
  --output_filepath /path/to/output/prefix
```

The library tiles the scene, runs the detector, then deduplicates and vets plumes. Outputs include masks, enhancement rasters, and source points in raster and vector form. Match the argument names in the current README before you script a batch. The example path in the repo uses an EMIT L1B radiance netCDF.

![Night side of Earth, a reminder that orbital instruments keep scanning after local sunset](https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=800&q=80)

## How EMIT context fits the new model

NASA installed EMIT on the station in 2022 to map desert dust minerals. Within months, the team reported methane super-emitters in Central Asia, the Middle East, and the southwestern United States. MAPL-EMIT does not replace that instrument. It automates review of the radiance EMIT already collects.

The JPL briefing below explains why a mineral mapper can see methane at all. The spectral fingerprint is the same idea MAPL-EMIT was trained to use at global scale.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/t0GdlQkDXwE"
    title="Methane Super-Emitters Detected by NASA's New Earth Science Mission"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips before you cite a plume

- Treat the public catalog as a screening layer. Emission rate still depends on wind and on how you convert enhancement to flux.
- Overlapping plumes are a known failure mode for pixel filters. Check whether MAPL-EMIT split them before you assign a source to one facility.
- EMIT does not image every site every day. A missing plume can mean no overpass, cloud, or a source below the detection floor.
- The GitHub library and Kaggle weights are research releases. Pin a commit if you put them in a pipeline.
- Google’s other Earth models follow the same pattern: a research system, then a public surface. WeatherNext 3 forecasts now sit in Search and Maps, and the October orbital test in [Project Suncatcher](/blog/project-suncatcher-tpu-satellite-orbit/) is checking whether TPUs survive space. MAPL-EMIT is the methane entry in that set.

## Conclusion

Start with the Earth Engine app if you only need to see where EMIT-based detections already exist. Move to the plume asset when you need a filterable table. Install `google-research/mapl` only when a new radiance granule is worth a local run. The PNAS paper remains the citation for the 84% recall and the landfill comparison. The viewer is the practical tool.

## Sources

- Google Research, “Mapping global methane emissions from space with deep learning,” 1 September 2026
- blog.google, “A new deep learning model maps global methane emissions from space,” 9 September 2026
- PNAS, “Global monitoring of methane point sources using deep learning on hyperspectral radiance measurements from EMIT”
- Earth Engine catalog: MAPL-EMIT plumes v1.0 and the Nature Trace viewer
- github.com/google-research/mapl and the Kaggle EMIT methane model
- NASA JPL, EMIT mission notes on methane detection from the International Space Station
