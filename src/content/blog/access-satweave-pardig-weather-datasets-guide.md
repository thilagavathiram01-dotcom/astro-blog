---
title: "How to Access SatWeave and PARDIG Weather Datasets"
description: "Step-by-step guide to accessing SatWeave satellite mosaics and PARDIG precipitation data on Google Cloud Storage and Earth Engine for AI weather models."
pubDate: 2026-11-22T10:00:00
heroImage: "https://images.unsplash.com/photo-1534996858221-380b92700493?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai", "tutorials", "how-to", "google", "developer"]
noindex: false
---

Google DeepMind released SatWeave and PARDIG on 13 November 2026. These two datasets power WeatherNext 3 forecasts. SatWeave delivers hourly global satellite mosaics. PARDIG supplies AI-generated precipitation estimates every 15 minutes. Both are open under CC BY 4.0 on Google Cloud Storage. PARDIG historical catalogs also sit in Google Earth Engine.

Researchers and developers can now train models, build flood tools, or monitor solar power without building their own satellite pipelines. The data is analysis-ready in Zarr format.

This guide shows how to access both datasets, what each contains, and how to start querying them.

## What SatWeave and PARDIG Provide

SatWeave harmonizes imagery from five geostationary satellites: GOES-East, GOES-West, Meteosat Prime, Meteosat Indian Ocean, and Himawari. It produces a global mosaic at 0.1° resolution (~10 km) across 17 spectral bands. The operational feed updates hourly with about one hour latency. A historical archive from 2016 to 2025 is available at 30-minute intervals.

PARDIG (Precipitation AI Reanalysis: Densely Inferred GPM) is an AI model trained on sparse radar observations from NASA’s GPM Core Observatory. It uses SatWeave imagery and ECMWF atmospheric fields as inputs. The result is global precipitation estimates at 15-minute temporal resolution and ~10 km spatial resolution. Average latency is about five hours. Historical records go back to 1999.

DeepMind reports that PARDIG improves hourly precipitation detection skill by more than 30% over NASA’s IMERG-Final on light-to-moderate rain, based on evaluations against ground radar networks in the US, Europe, and Japan plus more than 36,000 weather stations.

These datasets let WeatherNext 3 initialize forecasts every hour instead of every six hours. They also open research on floods, droughts, wildfires, and renewable energy in regions that lack dense ground observations.

![Earth from space showing continents and clouds](https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?auto=format&fit=crop&w=800&q=80)

## Requirements Before You Start

You need a Google Cloud account. No separate access request form is required. The buckets are public under the CC BY 4.0 license.

Install the Python packages used in the official examples:

```bash
pip install xarray zarr obstore
```

A Google Cloud project helps with authentication if you query large volumes, but basic reads work with default credentials in many environments. For Earth Engine access to PARDIG historical catalogs, sign up for the Earth Engine API if you have not already.

If you plan to run WeatherNext models themselves, see our earlier guide on [accessing WeatherNext 3 forecasts via BigQuery and GCS](/blog/access-weathernext-3-forecasts-google-cloud/).

## Access SatWeave on Google Cloud Storage

SatWeave lives in the public bucket `gs://satweave_1/`.

The directory structure separates the historical archive from the live operational feed:

- `gs://satweave_1/zarr/2016_to_2025/mosaic.zarr` — 2016–2025 at 30-minute steps
- `gs://satweave_1/zarr/2026_to_present/<YYYYMMDDTHHMMSS>/mosaic.zarr` — hourly mosaics from 2026 onward

Open a recent hourly mosaic with Xarray and the obstore library:

```python
import obstore
import xarray as xr
import zarr

gcs_store = obstore.store.GCSStore(
    bucket="satweave_1",
    prefix="zarr/2026_to_present/20261122T100000/mosaic.zarr",  # adjust timestamp
)
ds = xr.open_zarr(zarr.storage.ObjectStore(gcs_store), chunks={})
print(ds)
```

The dataset has dimensions `(time, latitude, longitude)` on a 0.1° grid from 90°N to 90°S and 0° to 360°E. Variables include reflectance bands (for example `mosaic_640_nm`) and brightness temperature bands (for example `mosaic_11200_nm`).

You can slice by region or time, compute composites, or feed the arrays directly into a training pipeline. Note that high-latitude cells and some bands on certain satellites are NaN outside their coverage.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/YQwqoEm_xis"
    title="WeatherNext 2: Our most advanced weather forecasting model"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Access PARDIG Precipitation Data

PARDIG is published in `gs://pardig_1/`. Two main variants exist:

- PARDIG-NRT (near-real-time): 2016 to present, updated in batches, ~5 hour average latency, Zarr under `gs://pardig_1/NRT/`
- PARDIG-LR (long-record): 1999–2023 static archive under `gs://pardig_1/LR/`

Historical catalogs for both are also available in the Google Earth Engine Data Catalog. Search for “PARDIG” or use the asset IDs under `projects/gcp-public-data-weathernext`.

A simple open for a NRT store follows the same pattern as SatWeave once you locate the correct Zarr path. The output is precipitation rate at 15-minute steps on the same ~10 km grid.

Because the model learns from satellite radar rather than ground gauges alone, coverage remains useful over oceans and data-sparse land areas.

![Satellite view of Earth with cloud systems](https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80)

## Practical Tips for Using the Datasets

Start with a small geographic subset or a single time step. Full global files are large. Use Dask or Xarray’s lazy loading so you do not pull everything into memory at once.

Convert longitude if needed: the grid uses 0–360°. Standard -180 to 180 values convert with `lon % 360`.

Check for NaNs, especially near satellite limbs or for bands carried by only some instruments. The official developer documentation lists which bands cover which satellites.

For production pipelines, schedule pulls of the latest hourly SatWeave mosaic or the most recent PARDIG-NRT batch. Attribution under CC BY 4.0 is required if you redistribute or publish derived work.

Combine SatWeave channels to build custom true-color or water-vapor composites. Pair PARDIG with local gauge data if you have it to fine-tune regional models.

## Conclusion

SatWeave and PARDIG remove a major barrier for anyone building weather, hydrology, or climate applications on top of Google’s Earth AI work. Hourly satellite views and 15-minute global precipitation estimates are now publicly queryable without special approval. Open the Zarr stores, slice the grids, and start testing ideas that were previously limited to teams with their own satellite ingestion systems.

The data will continue to update. Check the developer guides for the latest path conventions and any schema changes.

## Sources

- Google DeepMind blog: Opening the datasets behind our AI weather models (13 November 2026)
- Google for Developers: SatWeave guide
- Google Earth Engine Data Catalog: PARDIG NRT and LR assets
- Official announcements confirming CC BY 4.0 availability on Google Cloud Storage
