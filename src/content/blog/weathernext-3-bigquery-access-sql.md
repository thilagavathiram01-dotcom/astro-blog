---
title: "How to Query WeatherNext 3 Forecasts in BigQuery SQL"
description: "Request WeatherNext 3 access, subscribe the BigQuery listing, and query hourly temperature, wind, and rain with partition filters."
pubDate: 2026-10-02T16:45:00
heroImage: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai", "google", "developer", "tutorials", "how-to"]
noindex: false
---

A six-hour forecast refresh is a long wait when rain is already moving. WeatherNext 3, from Google DeepMind and Google Research, initializes every hour because it ingests a live geostationary satellite mosaic plus ECMWF HRES analysis. Developers can query the surface statistics in BigQuery after an allowlist request, without running the model themselves.

This guide covers the access form, the two BigQuery tables, a first SQL query, and the rules that keep scans small. For how the same model shows up in Search, Maps, and Gemini, see the [hourly rain forecast guide](/blog/weathernext-3-hourly-rain-forecasts-google/).

## What the model actually outputs

WeatherNext 3 is a Functional Generative Network mesh transformer. Google for Developers lists a global grid, 64 ensemble members, and hourly timesteps. Station-trained 2-metre temperature and dew point are produced at about 5 km (0.05°). Other surface fields, including 10-metre and 100-metre wind, cloud layers, solar radiation, and 1-hour precipitation, are on a 10 km (0.1°) grid. Three-dimensional pressure-level fields stay at about 25 km and are not in the BigQuery tables.

Forecast length depends on the cycle. Runs at 00, 06, 12, and 18 UTC extend 15 days (360 hours). Interim hourly runs cover 48 hours. Google says precipitation skill, measured as Brier score and CRPS against IMERG, can be up to 50 percent better than numerical weather prediction baselines. That is a research metric, not a promise for every city.

![Satellite view of Earth used to illustrate global forecast coverage](https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80)

The model is experimental. Google’s terms say outputs are informational and do not replace official watches or warnings. For life and property, use your national meteorological service.

## Step 1: Request allowlist access

Real-time WeatherNext datasets are not open by default. Google asks you to submit the WeatherNext Data Request Form with the Google Account email you use in Cloud Console, BigQuery, or Earth Engine.

A paid Cloud contract is not required. Researchers, students, and personal Gmail accounts can apply. If you do not have a project yet, create a free Google Cloud account first, then use that login email on the form.

One approval covers Cloud Storage (Zarr), BigQuery, and Earth Engine. Google says reviews are rolling and typically finish in 5 to 7 business days. You do not file a separate request per product.

Licensing splits by age of the data. Forecasts for less than one hour ago, and anything in the future, follow the GDM Real-Time Weather Forecasting Experimental Data Terms of Use. Data that is one hour old or older is under CC BY 4.0. When a fresh run ages past that hour, it moves to the Creative Commons license automatically.

## Step 2: Pick BigQuery, not the raw ensemble

After approval, subscribe to the WeatherNext 3 listing in BigQuery Analytics Hub. The linked tables land in a dataset in your project.

| Table | Grid | What you get |
| --- | --- | --- |
| `weathernext_3_0_0_0p1deg` | 0.1° | 19 surface variables, each with mean, p10, p25, p50, p75, and p90 |
| `weathernext_3_0_0_0p05deg` | 0.05° | Station-head 2 m temperature and dew point, same six statistics |

BigQuery stores precomputed ensemble statistics, not the raw 64 members and not the 3D pressure levels. Those live in Zarr on Cloud Storage under paths such as `weathernext3_spatial`. Earth Engine is the better fit for raster overlays. Use BigQuery when you want SQL joins against stores, assets, or routes.

Both tables partition on `init_time` and cluster on `geography`. Each row is a grid cell. A repeated `forecast` record holds lead times: `time`, `hours`, and the statistic columns.

![Analyst reviewing charts on a laptop, standing in for a forecast query workflow](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80)

## Step 3: Run a point forecast

Replace the project and dataset with the names from your Analytics Hub subscription. Filter `init_time` on every query. Google documents that filter as the way to prune partitions.

Temperatures are in kelvin. Subtract 273.15 for Celsius. Native 1-hour precipitation is in metres, so multiply by 1000 for millimetres. The sample below is adapted from the official BigQuery recipes and uses a New York bounding box and a 5-day horizon.

```sql
SELECT
  f.time AS forecast_time,
  f.hours AS forecast_hour,
  f.temperature_2m_mean - 273.15 AS temp_mean_c,
  f.temperature_2m_p10 - 273.15 AS temp_p10_c,
  f.temperature_2m_p90 - 273.15 AS temp_p90_c,
  f.wind_speed_10m_mean AS wind_speed_mps,
  f.total_precipitation_1hr_mean * 1000 AS precip_1hr_mm
FROM
  `YOUR_PROJECT_ID.YOUR_DATASET_ID.weathernext_3_0_0_0p1deg` AS t,
  t.forecast AS f
WHERE
  t.init_time = TIMESTAMP('2026-08-26 00:00:00 UTC')
  AND ST_INTERSECTS(
    t.geography_polygon,
    ST_GEOGFROMTEXT('POLYGON((-74.26 40.50, -73.70 40.50, -73.70 40.90, -74.26 40.90, -74.26 40.50))')
  )
  AND f.hours <= 120
ORDER BY f.time;
```

Swap the timestamp for a recent 00, 06, 12, or 18 UTC init once your allowlist is active. Interim hours only have 48 hours of lead time, so a 120-hour filter on those runs returns a shorter series.

For a station-calibrated temperature, query `weathernext_3_0_0_0p05deg` and read `station_head_temperature_2m_mean` and `station_head_dewpoint_temperature_2m_mean`. Those heads train on weather-station observations, not only on reanalysis grids.

## Step 4: Join forecasts to your own locations

A retail or field-ops table with a `GEOGRAPHY` column can join on `ST_INTERSECTS(weather.geography_polygon, stores.location_geog)`. Keep the `init_time` predicate on the weather side so BigQuery does not scan every cycle.

Clean-energy columns are on the 0.1° table: `wind_speed_100m_*` for hub-height wind, `surface_solar_radiation_downwards_1hr_*` (SSRD), and `total_sky_direct_solar_radiation_at_surface_1hr_*` (FDIR). Units for the radiation fields are joules per square metre over the hour.

If you are migrating WeatherNext 2 SQL, rename the height-prefixed fields. `2m_temperature` becomes `temperature_2m`. `10m_u_component_of_wind` becomes `u_component_of_wind_10m`. Names without a height, such as `mean_sea_level_pressure` and `total_cloud_cover`, stay the same.

## Cost and safety tips

Always filter `init_time`. Select only the statistic columns you chart. A `SELECT *` pulls six percentiles for every surface variable. Use `ST_INTERSECTS` or `ST_DWITHIN` on `geography_polygon` so clustering can limit the cells.

Do not treat p10 to p90 as a formal confidence interval from a national weather service. They are ensemble percentiles from an experimental model. Google also ships three precipitation fields: native `total_precipitation_1hr`, IMERG-calibrated `imerg_tp_1hr`, and experimental satellite-radar `experimental_tp_1hr`. Pick one and label it in the dashboard.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/_6jZlnRsXXQ"
    title="WeatherNext 3: More accurate, timely, and local weather forecasts"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What to open next

Start with the access form, then the Analytics Hub listing, then one filtered query against `weathernext_3_0_0_0p1deg`. Move to Cloud Storage Zarr only if you need the 64-member ensemble or pressure levels. Official starter notebooks are linked from the Google for Developers quick start, including Zarr and Earth Engine Colabs.

WeatherNext 3 will not replace a warning from your local forecast office. It will let a SQL job refresh hourly rain, temperature, and turbine-height wind next to the rest of your operational data.

## Sources

- Google DeepMind and Google Research, “Introducing WeatherNext 3,” blog.google, 3 September 2026.
- Google for Developers, “WeatherNext 3” model guide, updated 28 September 2026.
- Google for Developers, “Quick start: Accessing WeatherNext forecasts,” and “WeatherNext forecasts on BigQuery.”
- Google DeepMind, “WeatherNext 3: More accurate, timely, and local weather forecasts,” YouTube, 3 September 2026.
