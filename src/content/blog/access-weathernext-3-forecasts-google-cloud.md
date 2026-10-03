---
title: "Access WeatherNext 3 Forecasts via BigQuery and GCS"
description: "Request allowlist access and query WeatherNext 3 hourly forecasts in BigQuery, Earth Engine, or Cloud Storage."
pubDate: 2026-10-03T08:30:00
heroImage: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai", "google", "tutorials", "developer"]
noindex: false
---

WeatherNext 3 is Google DeepMind and Google Research’s current global weather model. It refreshes every hour, reads live satellite mosaics, and writes forecasts you can query on Google Cloud. You do not need a paid Cloud contract to start. You do need an allowlisted Google Account.

This guide covers what the model actually outputs, how to request access, and which surface to use for a first query. It follows the [developer model page](https://developers.google.com/weathernext/guides/models) and the [access quick start](https://developers.google.com/weathernext/guides/access-forecast).

## What WeatherNext 3 outputs

WeatherNext 2 ran on a 25-kilometer grid and stepped every six hours. WeatherNext 3 keeps a single Functional Generative Network mesh transformer, but it now initializes 24 times a day.

Resolution depends on the variable:

- Station-trained 2-metre temperature and dew point land on a 0.05° grid, about 5 kilometres.
- Most surface fields, including 10-metre and 100-metre wind, cloud cover, sea-level pressure, and hourly precipitation, land on a 0.1° grid, about 10 kilometres.
- Upper-air fields at 13 pressure levels land on a 0.25° grid, about 25 kilometres, and only on the 00, 06, 12, and 18 UTC cycles.

The 6-hourly cycles forecast out to 15 days (360 hours). Interim hourly runs (every other hour) forecast out to 48 hours. Each run is a 64-member ensemble. Inputs are live geostationary satellite mosaics plus ECMWF HRES analysis.

Google says precipitation skill improves by up to a 50 percent reduction in Brier score and CRPS versus numerical weather prediction baselines when scored against NASA IMERG. In product copy, Google also says day-ahead precipitation in Search, Maps, and Gemini can be up to 50 percent more accurate, with the largest gains in regions that had weaker forecasts before. Treat those as Google’s published evaluations, not a guarantee for every city.

![Satellite view of cloud systems over Earth](https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80)

The model is experimental. Google’s terms say outputs are not official forecasts, watches, or warnings. For safety decisions, use your national meteorological service.

## Where the forecasts already show up

You do not need Cloud access to see the model in consumer products. Google began routing WeatherNext 3 into Search, the Gemini app, Google Maps, the Maps Platform Weather API, and Earth Engine on 3 September 2026. If you only need a local outlook, open Search or Maps and read the forecast there.

Developers who want the grids, percentiles, or the full ensemble still go through the allowlist. The same Google Account covers Cloud Storage, BigQuery, and Earth Engine. You do not file three requests.

If you already ground Gemini answers with Maps data, the product-side weather update sits next to that stack. Our walkthrough of [Gemini 3.8 Flash with Maps grounding](/blog/gemini-3-8-flash-maps-grounding/) covers the app and API side of location answers.

## Step 1: Request allowlist access

Real-time operational datasets are not public by default.

1. Use the Google Account you will sign into Cloud Console, BigQuery, or Earth Engine with. A personal Gmail address works. A Workspace address works if that is the account on the project.
2. Open the [WeatherNext data request form](https://docs.google.com/forms/d/e/1FAIpQLSeCf1JY8G78UDWzbm0ly9kJxfSjUIJT5WyMR_HiNqCm-IHIBg/viewform).
3. Submit the form. Google reviews requests on a rolling basis and typically approves them in 5 to 7 business days.
4. If you have no Cloud account yet, create a free one at cloud.google.com/free before you try to query. The form does not require an existing paid contract.

One approval unlocks all three surfaces.

## Step 2: Pick a surface

Match the surface to the job. Pulling the wrong bucket is the usual first mistake.

**BigQuery** is the fastest path for SQL. You get precomputed mean and percentile surface statistics for the 0.1° gridded collection (`weathernext_3_0_0_0p1deg`) and the 0.05° station collection (`weathernext_3_0_0_0p05deg`). Join those tables to store locations, assets, or a supply-chain extract. You do not get the raw 64-member 3D fields here.

**Earth Engine** serves the same surface statistics as image collections: `weathernext_3_0_0_0p1deg` and `weathernext_3_0_0_0p05deg`. Use it when you want a raster overlay, a fusion with satellite imagery, or a map in the Code Editor. Python (`ee`, `geemap`) and JavaScript both work.

**Cloud Storage (Zarr v3)** is the full-fidelity path. The raw 64-member ensemble, including 13 atmospheric pressure levels, lives at `gs://weathernext3_spatial/weathernext_3_0_0/zarr/`. Precomputed surface summary statistics live at `gs://weathernext3_statistics_spatial/weathernext_3_0_0_statistics/zarr/`. This is the surface for custom models and high-resolution extraction. Open it with Python `xarray`, `zarr`, and `obstore`.

![Rain clouds over open land](https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=800&q=80)

Upper-air variables such as `temperature_500` or `geopotential_500` are GCS-only, and only on the four synoptic cycles. If your notebook expects those fields in BigQuery, it will come back empty.

## Step 3: Run a first query

Google publishes starter Colab notebooks on the access page. Use those rather than inventing a schema.

For Cloud Storage, install the client stack:

```bash
pip install xarray zarr obstore
```

Open the full ensemble store with a requester-pays billing project header. The GCS guide expects `x-goog-user-project` set to your project ID when you construct the `obstore` GCS client. Without that header, the read fails even after allowlisting.

Then pick a notebook:

- Full ensemble Zarr on Cloud Storage, for the 64 members and pressure levels.
- Statistics Zarr on Cloud Storage, for means and percentiles without the full ensemble.
- Earth Engine 0.1° and 0.05° notebooks, for map overlays.

Notebooks are hosted under `storage.googleapis.com/weathernext-public/colabs/`. Filenames are listed on the [quick start](https://developers.google.com/weathernext/guides/access-forecast).

If you are migrating a WeatherNext 2 pipeline, rename the height-prefixed fields before you rerun. `2m_temperature` is now `temperature_2m`. `10m_u_component_of_wind` is now `u_component_of_wind_10m`. The same pattern applies to dew point and the 100-metre wind components. Names without a height prefix, such as `mean_sea_level_pressure` and `total_cloud_cover`, stay the same.

Temperature fields are in kelvin. Precipitation accumulations are in metres. Divide geopotential by 9.80665 to get height in metres.

## Licensing and what not to ship

Real-time data — anything less than one hour old, plus the future — falls under the GDM Real-Time Weather Forecasting Experimental Data Terms of Use. Data aged one hour or more is CC BY 4.0, and real-time files flip to that license once they cross the threshold.

Do not present a WeatherNext 3 grid as a warning product. Google states the system is automated, experimental, and provided as-is for information and research. Pair any public display with a link to the official advisory for that region.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/_6jZlnRsXXQ"
    title="WeatherNext 3: More accurate, timely, and local weather forecasts"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical tips

Ask for the Account you will actually query with. A personal Gmail approval does not cover a Workspace identity, and the reverse is also true.

Start on BigQuery or the statistics Zarr if you only need a city time series. The full ensemble bucket is larger and bills the requester project on GCS reads.

Check the cycle before you request upper air. An 03 UTC init will have surface fields and a 48-hour horizon. It will not have the 13 pressure levels.

For renewable work, the useful fields are already on the 0.1° surface grid: `wind_speed_100m` for hub-height wind, plus `surface_solar_radiation_downwards_1hr` and `total_sky_direct_solar_radiation_at_surface_1hr` for irradiance. You do not need the 3D store for those.

Older models remain online for benchmarks. WeatherNext 2 (June 2025) is the 0.25°, 6-hour, 64-member FGN. WeatherNext 1 Gen is the diffusion ensemble. WeatherNext 1 Graph is the deterministic GraphCast line. New projects should target WeatherNext 3.

## Conclusion

WeatherNext 3 is available in Google products today and as allowlisted grids on Cloud. Request access with the Account you will query, pick BigQuery or Earth Engine for surface statistics, and use the Zarr buckets when you need the 64-member ensemble or pressure levels. Keep official weather services in the loop for any decision that affects safety.

## Sources

- Google DeepMind, [Introducing WeatherNext 3](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/introducing-weathernext-3/), 3 September 2026
- Google for Developers, [WeatherNext 3 model guide](https://developers.google.com/weathernext/guides/models), updated 28 September 2026
- Google for Developers, [Quick start: Accessing WeatherNext forecasts](https://developers.google.com/weathernext/guides/access-forecast)
- Google for Developers, [WeatherNext forecasts on Google Cloud Storage (Zarr)](https://developers.google.com/weathernext/guides/gcs)
- Google DeepMind, [WeatherNext 3 video](https://www.youtube.com/watch?v=_6jZlnRsXXQ)
