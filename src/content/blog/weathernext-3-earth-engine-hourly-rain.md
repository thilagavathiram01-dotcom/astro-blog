---
title: "How to Map WeatherNext 3 Hourly Rain in Earth Engine"
description: "Request WeatherNext 3 access, load the Earth Engine image collection, and map hourly rain and temperature bands after the September 2026 rollout."
pubDate: 2026-10-03T11:30:00
heroImage: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "google"]
noindex: false
---

A six-hour forecast cycle is a long wait when a rain band is already moving. WeatherNext 3, from Google DeepMind and Google Research, initializes every hour because it ingests live geostationary satellite mosaics plus ECMWF HRES analysis. Google began feeding those forecasts into Search, the Gemini app, Maps, the Maps Platform Weather API, and Earth Engine on September 3, 2026.

Earth Engine is the surface built for maps. You do not run the model. You load a public image collection, filter one initialization, and reduce the bands you need. If you already query the same statistics in SQL, start with [How to query WeatherNext 3 forecasts in BigQuery](/blog/weathernext-3-bigquery-access-sql/) and use this guide when the output has to be a raster.

![Satellite view of Earth with cloud systems over the ocean](https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80)

## What Earth Engine actually stores

Earth Engine does not host the raw 64-member ensemble or the 3D pressure-level fields. Those stay in the Google Cloud Storage Zarr stores. The Earth Engine listings are precomputed surface statistics.

| Collection | Asset ID | Grid | What you get |
| --- | --- | --- | --- |
| 0.1° gridded | `projects/gcp-public-data-weathernext/assets/weathernext_3_0_0_0p1deg` | about 10 km | 19 surface variables, each as mean, p10, p25, p50, p75, and p90 |
| 0.05° stations | `projects/gcp-public-data-weathernext/assets/weathernext_3_0_0_0p05deg` | about 5 km | Station-head 2 m temperature and dew point, same six statistics |

Band names follow a fixed pattern. `temperature_2m_mean` and `total_precipitation_1hr_mean` are typical 0.1° bands. The station collection uses names such as `station_head_temperature_2m_mean`. Official samples treat 2 m temperature as Kelvin, so subtract 273.15 before you label a map in Celsius.

Each image carries `start_time` (initialization, UTC ISO 8601), `end_time` (valid time), and `forecast_hour`. Six-hourly cycles at 00, 06, 12, and 18 UTC run out to 360 hours. Interim hourly runs cover 48 hours. Google's developer page lists 0.05° station temperature and dew point, other surface fields at 0.1°, and atmospheric variables at 0.25° in the full model output.

## Request access once

Operational WeatherNext data is allowlisted. Submit the WeatherNext data request form with the Google Account email you use in Cloud Console, BigQuery, or Earth Engine. Google says reviews typically take 5 to 7 business days. One approval covers Cloud Storage, BigQuery, and Earth Engine. A paid Cloud contract is not required. A free Cloud account is enough if you do not have a project yet.

Real-time data, meaning anything less than one hour old and any future valid time, falls under the GDM Real-Time Weather Forecasting Experimental Data Terms of Use. Data for times one hour ago or older is licensed CC BY 4.0. Treat the forecasts as experimental. They are not a substitute for an official warning from a national weather service.

## Load one forecast run

Install the Earth Engine Python client and authenticate against a Cloud project that Earth Engine can bill. Then point at the 0.1° collection and filter a single initialization.

```python
import ee

ee.Initialize(project="YOUR_PROJECT_ID")

collection_id = (
    "projects/gcp-public-data-weathernext/assets/weathernext_3_0_0_0p1deg"
)
col = ee.ImageCollection(collection_id)

forecast_run = col.filter(
    ee.Filter.eq("start_time", "2026-05-01T00:00:00Z")
)
print(forecast_run.size().getInfo())
```

Replace the example timestamp with a recent 00, 06, 12, or 18 UTC init if you need the 15-day horizon. `forecast_run.size()` can return up to 360 images for those cycles. Filter `forecast_hour` before you reduce, or you will scan the whole horizon for a map that only needs the next day.

![Person reviewing a map on a laptop beside a notebook](https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80)

## Map the next 24 hours of rain

Hourly precipitation is the field most people want on a map. Select `total_precipitation_1hr_mean`, clip the lead time, and bound the region before `reduceRegion`.

```python
region = ee.Geometry.BBox(72.7, 18.9, 73.0, 19.3)  # Mumbai box

rain = (
    col.filter(ee.Filter.eq("start_time", "2026-05-01T00:00:00Z"))
    .filter(ee.Filter.lte("forecast_hour", 24))
    .filterBounds(region)
    .select("total_precipitation_1hr_mean")
)

def hourly_total(image):
    stats = image.reduceRegion(
        reducer=ee.Reducer.mean(),
        geometry=region,
        scale=10000,
        maxPixels=1e9,
    )
    return ee.Feature(
        None,
        {
            "valid_time": image.get("end_time"),
            "hour": image.get("forecast_hour"),
            "rain_mean": stats.get("total_precipitation_1hr_mean"),
        },
    )

series = rain.map(hourly_total)
print(series.aggregate_array("rain_mean").getInfo())
```

Google's Earth Engine guide recommends `scale=10000` for 0.1° surface fields and `scale=5000` for the 0.05° station collection. Use the precomputed `_mean` and percentile bands. Do not try to rebuild the 64-member ensemble inside Earth Engine. That data is not in these collections.

For a single map frame, filter both `start_time` and `end_time`, call `.first()`, and add the image in the Code Editor or with geemap. A cool-to-warm palette works for temperature. For rain, a white-to-blue ramp on `total_precipitation_1hr_mean` is easier to read than a diverging scale.

## Pull a 5 km temperature point

Coastal and urban temperature is the reason the station collection exists. It is trained toward weather-station observations and only covers 2 m temperature and dew point.

```python
stations = ee.ImageCollection(
    "projects/gcp-public-data-weathernext/assets/weathernext_3_0_0_0p05deg"
)
point = ee.Geometry.Point([72.8777, 19.0760])

step = (
    stations.filter(ee.Filter.eq("start_time", "2026-05-01T00:00:00Z"))
    .filter(ee.Filter.eq("forecast_hour", 6))
    .select("station_head_temperature_2m_mean")
    .first()
)

value_k = step.reduceRegion(
    reducer=ee.Reducer.first(),
    geometry=point,
    scale=5000,
).get("station_head_temperature_2m_mean")
print(value_k.getInfo())
```

If the call returns null, the init may not be published yet, or the account is not on the allowlist. Check `ingestion_time_utc` on a known image before you debug the geometry.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/_6jZlnRsXXQ"
    title="WeatherNext 3: More accurate, timely, and local weather forecasts"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips that keep the bill and the map honest

Filter bounds and lead time before any reducer. Earth Engine still scans what you ask it to scan.

Prefer p10 and p90 next to the mean when you brief a field team. A tight envelope and a wide envelope are different decisions, even when the mean looks the same.

Do not mix the two collections in one reducer. The 0.05° asset will not give you precipitation. The 0.1° asset will not give you the station-head temperature names.

Google says day-ahead precipitation in Search, Gemini, and Maps can be up to 50 percent more accurate after this update, with larger gains where older forecasts were weaker. That product claim is not the same number as a research score against IMERG. Cite the product you actually queried.

Starter notebooks live on Cloud Storage: the 0.1° Earth Engine Colab and the 0.05° Colab linked from the access guide. Open those if you want the geemap color-scale example instead of writing the vis params yourself.

## Conclusion

WeatherNext 3 in Earth Engine is a filtered image collection, not a model you host. Request allowlist access, pick the 0.1° collection for hourly rain and the 0.05° collection for station temperature, and reduce only the lead times you will plot. Keep raw ensemble members in Cloud Storage if you need every member or upper-air levels.

## Sources

- Google DeepMind, Introducing WeatherNext 3 (September 3, 2026): https://blog.google/innovation-and-ai/models-and-research/google-deepmind/introducing-weathernext-3/
- Google for Developers, WeatherNext forecasts on Earth Engine: https://developers.google.com/weathernext/guides/earth-engine
- Google for Developers, Quick start: Accessing WeatherNext forecasts: https://developers.google.com/weathernext/guides/access-forecast
- Google for Developers, WeatherNext 3 model guide: https://developers.google.com/weathernext/guides/models
- Google DeepMind, WeatherNext 3 video: https://www.youtube.com/watch?v=_6jZlnRsXXQ
