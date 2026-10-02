---
title: "How to Read WeatherNext 3 Hourly Forecasts in Gemini"
description: "Learn how WeatherNext 3 powers hourly rain and temperature forecasts in Google Search, Gemini, and Maps, plus where developers can query the data."
pubDate: 2026-10-02T16:35:00
heroImage: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai", "google", "tutorials", "how-to"]
noindex: false
---

A weekend plan used to depend on a forecast that refreshed every six hours and smeared rain across a 25-kilometer grid. WeatherNext 3, Google DeepMind and Google Research's latest global weather model, updates every hour and draws on live satellite imagery plus weather-station observations. Google says the model began powering weather in Search, the Gemini app, Maps, the Maps Platform Weather API, and Earth Engine on September 3, 2026.

You do not install a separate WeatherNext app. The forecasts show up inside products you already use. This guide explains what changed, how to read the results, and where developers can query the raw data.

## What WeatherNext 3 actually changes

WeatherNext 2 produced forecasts on a 25-kilometer grid in six-hour steps. WeatherNext 3 uses a Functional Generative Network mesh transformer that takes live one-hour geostationary satellite mosaics as a direct input, alongside traditional analysis fields. Google DeepMind describes it as the first global weather model that generates a forecast every hour of the day.

Output is multi-resolution from a single forward pass, according to Google's developer documentation:

- About 5 kilometers (0.05°) for station-trained 2-meter temperature and dew point.
- About 10 kilometers (0.1°) for gridded surface wind, pressure, sea-surface temperature, cloud layers, solar radiation, and one-hour precipitation.
- About 25 kilometers (0.25°) for 3D pressure-level fields on the main 00, 06, 12, and 18 UTC cycles.

Google calls the overall picture roughly five times sharper than WeatherNext 2. Full 15-day (360-hour) forecasts run on those six-hourly cycles. Interim hourly runs cover 48 hours. Each cycle is an ensemble of 64 members.

![Satellite view of Earth with cloud systems over the ocean](https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80)

Precipitation is the headline consumer change. Google says that when you plan a day or more ahead, people will see up to 50 percent more accurate precipitation forecasts, with the largest gains in regions where forecasts have historically been less reliable. In medium-range evaluations, the team reports Continuous Ranked Probability Score gains of up to 60 percent against NASA IMERG, 30 percent against MRMS, and 10 percent against rain gauges for early lead times. Those figures compare the model with baselines on specific datasets. They are not a promise that every local app tile will be 50 percent better on a given afternoon.

The model also forecasts 100-meter wind, roughly turbine height, plus cloud cover and surface solar radiation. Those fields matter more to grid operators than to a picnic plan, but they explain why the same model feeds both consumer apps and Cloud tools.

## Check a forecast in Google Search

Search is the fastest place to see the consumer layer.

1. Open Google Search on the web or in the Google app.
2. Search for weather plus a city, neighborhood, or landmark, such as "weather Austin" or "weather near me."
3. Open the weather card and switch from the daily view to the hourly view.
4. Compare the next 12 to 48 hours of rain chance, temperature, and wind. Hourly initialization is where WeatherNext 3 differs most from a six-hour model cycle.
5. If you are planning more than a day out, read the daily precipitation chance again after the next hour. Google says the longer-range rain skill is where the 50 percent accuracy gain shows up.

The card will not label every cell "WeatherNext 3." Google says the model powers weather experiences in Search. Treat the hourly rain band as a planning aid, not a warning product. Google's own disclaimer says official forecasts, severe-weather warnings, and public-safety advisories still come from your national weather service or local meteorological agency.

## Ask Gemini for a planning answer

Gemini can turn the same forecast into a decision instead of a chart.

1. Open the Gemini app or gemini.google.com and sign in.
2. Ask a time-bound question: "Will it rain in Nairobi between 3 p.m. and 7 p.m. tomorrow, and should I move an outdoor market stall?"
3. Follow up with a comparison: "Which of Saturday or Sunday has the lower chance of more than 1 millimeter of rain?"
4. Ask for the assumption: "What time window are you using, and is this the latest hourly update?"
5. If the answer is vague, name the place more tightly. A 5-kilometer temperature grid can differ across a coastline, valley, or mountain ridge. A city name alone may average those differences.

Useful prompts stay specific: location, time window, and the decision you need. "Is the 100-meter wind high enough that a small drone flight should wait?" is a better question than "how's the weather." Gemini is also where Google has placed WeatherNext 3 alongside other science tools. If you follow public-health modeling, our guide to [Google's CDC FluSight ranking](/blog/google-flu-forecast-cdc-flusight-2026/) covers a separate forecast problem: hospital admissions, not rain.

![Person checking a weather map on a phone before leaving home](https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80)

## Use Maps when the route matters

Google Maps is the right surface when the forecast has to sit on a path, not a single pin.

1. Open Google Maps and search the destination.
2. Check the weather module on the place card, if it is shown for that region.
3. For a drive or bike ride, note the hourly rain window at the start point and the destination separately. A 10-kilometer precipitation grid can put a storm on one end of a commute and not the other.
4. Developers using Google Maps Platform can pull Weather API data that Google says is now backed by WeatherNext 3. Consumer Maps will not expose ensemble members. The API and Cloud datasets are where the 64-member spread lives.

Do not treat a Maps weather chip as a substitute for a convective warning. Fast storms can still form inside an hour. The model refreshes hourly, which shortens the blind spot, but it does not remove it.

## Where developers query the data

Google is publishing the forecasts without asking you to host the model. Documented access points:

- BigQuery and Earth Engine for queries against operational and historical forecasts.
- Google Cloud Storage for bulk download.
- Google Maps Platform Weather API for app-level weather.
- The developer guide at developers.google.com/weathernext for field names and resolutions.

Surface fields to know if you build on the dataset include `total_precipitation_1hr`, IMERG-calibrated `imerg_tp_1hr`, an experimental satellite-radar precipitation field, total and layered cloud cover, and 10-meter and 100-meter wind. Station-style temperature and dew point are the 0.05° fields. Pressure-level atmosphere is the 0.25° set, and only on the four main synoptic cycles.

If you only need a yes-or-no rain call for a consumer UI, Search or Gemini is enough. If you need an ensemble spread, turbine-height wind, or a reproducible historical init time, use BigQuery or Earth Engine and record the initialization timestamp. Interim hourly runs stop at 48 hours. A 10-day energy forecast has to come from a 00, 06, 12, or 18 UTC cycle.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/_6jZlnRsXXQ"
    title="WeatherNext 3: More accurate, timely, and local weather forecasts"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## How to read the numbers without overclaiming

A few habits keep the forecast useful.

Prefer the latest hourly init for the next one to two days. That is the run built to catch fast rain and snow changes from live satellite mosaics. For a trip next week, use a six-hourly cycle and check it again the day before. The 15-day horizon exists, but skill drops with lead time on every global model.

Separate temperature from rain. The 5-kilometer station-trained heads are for 2-meter temperature and dew point. Precipitation products sit on the 10-kilometer grid. A sharp temperature change along a coast does not mean the rain band is equally sharp.

Treat probability as a range. An ensemble of 64 members is how the model expresses uncertainty. Consumer apps usually collapse that spread into one chance of rain. If two apps disagree, the underlying members may still overlap.

Watch the region, not only the city center. Google says training on sparse station observations is meant to help places that lacked costly regional models, including parts of Latin America, Africa, and Asia-Pacific. Local topography still matters. A valley and a ridge inside the same search can diverge.

Keep official warnings in the loop. WeatherNext 3 is a planning model inside Google products and Cloud. Severe-weather alerts remain the job of national meteorological services.

## What this does not replace

WeatherNext 3 does not give you a private radar, a guarantee of a dry afternoon, or access to the frontier model weights in the Gemini chat box. The paper and the Weather Lab visualization are research surfaces. Brightband hosts an independent live leaderboard that Google points to for ranking context. Rankings move as new cycles land, so check the board rather than treating a single blog line as a permanent score.

For most people, the practical gain is simpler: hourly refresh, tighter rain footprints than the 25-kilometer WeatherNext 2 grid, and the same forecast inside Search, Gemini, and Maps. Ask a specific question, note the hour of the update, and confirm anything safety-critical with your local weather service.

## Sources

- Google DeepMind and Google Research, "Introducing WeatherNext 3," blog.google, September 3, 2026: https://blog.google/innovation-and-ai/models-and-research/google-deepmind/introducing-weathernext-3/
- Google DeepMind, WeatherNext 3 overview: https://deepmind.google/science/weathernext/
- Google for Developers, WeatherNext 3 model guide: https://developers.google.com/weathernext/guides/models
- Google, "The latest AI news we announced in September 2026," October 2, 2026: https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-september-2026/
- Google DeepMind, "WeatherNext 3: More accurate, timely, and local weather forecasts," YouTube, September 3, 2026: https://www.youtube.com/watch?v=_6jZlnRsXXQ
