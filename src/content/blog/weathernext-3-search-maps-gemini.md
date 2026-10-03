---
title: "How to Read WeatherNext 3 Forecasts in Search and Maps"
description: "Use WeatherNext 3 hourly forecasts in Google Search, Maps, and Gemini, and learn how developers request BigQuery access."
pubDate: 2026-10-03T10:00:00
heroImage: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "google", "tutorials", "how-to", "gemini"]
noindex: false
---

A weekend plan that looked clear at breakfast can turn wet by lunch. WeatherNext 3 is Google DeepMind and Google Research's latest global weather model, built to refresh forecasts every hour from live satellite observations instead of waiting on a six-hour cycle.

Google began wiring that model into Search, the Gemini app, Google Maps, the Google Maps Platform Weather API, and Google Earth Engine on 3 September 2026. You do not install a separate app. The forecasts show up in the weather views you already open. This guide covers what changed, how to read the results, and how developers request the underlying data.

## What WeatherNext 3 actually changes

Earlier AI weather models, including WeatherNext 2, were trained mostly on numerical weather prediction analyses. Those physics simulations are strong, but they carry about a six-hour data lag. Fast variables such as rain and surface temperature can shift inside that window.

WeatherNext 3 learns from a mosaic of live geostationary satellite imagery plus sparse weather-station observations. Google says it produces a new forecast every hour. Surface temperature and moisture are shown at about 5 kilometres. Other surface fields sit near 10 kilometres. Upper-air wind is near 25 kilometres. Google describes the overall picture as roughly five times sharper than WeatherNext 2, which used a 25-kilometre grid in six-hour steps.

Independent live evaluations by Brightband are the basis for Google's claim that WeatherNext 3 is its most accurate global weather model to date. For trips planned a day or more ahead, Google says people should see up to 50 percent more accurate precipitation forecasts, with the largest gains in places where forecasts have been less reliable.

The model is an ensemble. Developer docs list 64 members and a Functional Generative Network mesh transformer. Six-hourly cycles (00, 06, 12, and 18 UTC) run out to 15 days, or 360 hours. Interim hourly runs cover 48 hours. That split matters: a mid-morning check is fresher, but the long-range view still comes from the main cycles.

![Satellite view of Earth used to illustrate live weather observations](https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80)

## Check a forecast in Search, Maps, and Gemini

WeatherNext 3 does not add a new button labelled with the model name in most consumer screens. It powers the weather experience already in those products. Use the same places you check conditions today, then recheck closer to departure because the data refreshes hourly.

1. Open Google Search and type the place plus "weather", or ask for the forecast in the search box. Note the hourly strip, not only the daily high and low. Precipitation timing is the field Google says improved most for day-ahead plans.
2. Open Google Maps, search the same place, and open the weather layer or place card if it is shown for that region. Compare wind and rain against the route time, not against yesterday's screenshot.
3. In the Gemini app, ask for the forecast at a specific address and time window. Example: "Hourly rain chance in Pune from 4 pm to 8 pm tomorrow." Follow up with a second window if you are choosing between two days.
4. Recheck within an hour of leaving. Interim runs use newer satellite mosaics. A forecast from last night is not the same product as the latest hour.
5. For severe weather, follow your national weather service. Google's own disclaimer says official warnings and public-safety advisories still come from the local meteorological agency.

If you already use Gemini for route questions, the same chat can sit next to Maps. Our guide to [asking Maps questions in Gemini](/blog/gemini-ask-maps-immersive-navigation/) covers place and navigation prompts that pair well with a weather check before you leave.

Clean-energy fields are part of the model even if they do not appear in a consumer card. WeatherNext 3 forecasts 100-metre wind, near turbine height, plus cloud cover and surface solar radiation. Those variables are aimed at grid operators and developers, not at a phone widget.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/_6jZlnRsXXQ"
    title="WeatherNext 3: More accurate, timely, and local weather forecasts"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Read the resolution without over-trusting a pin

A 5-kilometre temperature grid is finer than the old 25-kilometre product, and it is still a grid. Coastlines, valleys, and city centres can differ inside one cell. Google trains the station head directly on weather-station observations so topography is not smoothed away the way it was in WeatherNext 2. The UK temperature comparison in the launch post shows that difference: the older field looks blocky, and the new field follows hills and coasts.

Precipitation is the harder problem. Rain and snow form at scales that blur in many global models. WeatherNext 3 is trained on NASA IMERG satellite precipitation and Google's own satellite-radar reanalysis. In Google's medium-range tests, Continuous Ranked Probability Score improved by up to 60 percent against IMERG, 30 percent against MRMS, and 10 percent against rain gauges at early lead times. Those are research scores, not a promise that every shower on your street is pinned.

Treat the hourly chart as a probability band. If the 10th and 90th percentile temperatures in the developer tables are far apart, the ensemble is uncertain. Pack for the spread, not only the mean.

![Rain over a city street, a case where hourly precipitation forecasts matter](https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=800&q=80)

## Request the dataset if you build with it

Consumer apps do not expose the raw grids. Researchers and businesses can query WeatherNext 3 in BigQuery and Earth Engine, or bulk-download Zarr v3 stores from Google Cloud Storage. Google says no model setup is required once access is granted.

Real-time operational data is allowlisted. Google's quick start asks you to submit the WeatherNext data request form with the Google account you use for Cloud Console, BigQuery, or Earth Engine. Reviews are rolling and are typically approved in five to seven business days. One approval covers Cloud Storage, BigQuery, and Earth Engine. You do not file three forms.

Licensing splits by time. Data for less than one hour ago, and for the future, falls under the Google DeepMind real-time weather forecasting experimental terms. Data for one hour ago or older is under CC BY 4.0.

After you are on the list, subscribe to the WeatherNext 3 BigQuery Analytics Hub listing. Tables land in your project dataset. The 0.1-degree table (`weathernext_3_0_0_0p1deg`) holds 19 gridded surface variables with mean, p10, p25, p50, p75, and p90. The 0.05-degree table covers station-style temperature and dew point. Temperatures in the sample queries are in kelvin, so subtract 273.15 for Celsius. One-hour precipitation in the sample is stored in metres; multiply by 1,000 for millimetres.

Maps Platform Weather API customers get the same model behind the API that now serves Maps, without querying BigQuery. Use that path if you only need a forecast for an app, not a join against store locations.

## Practical limits

Hourly refresh does not remove uncertainty. Google says the atmosphere stays partly unpredictable. Use WeatherNext 3 to choose a departure window or a backup plan, then follow local warnings if a storm is official.

Regions that lacked dense regional models — parts of Latin America, Africa, and Asia-Pacific — are a stated reason for the 5-kilometre station grid. Supercomputer cost used to limit those local models. A global AI grid does not replace a national service's warning desk.

Developer access is not instant, and historical versus real-time terms differ. Do not ship a public dashboard on the experimental real-time terms without reading them.

## Conclusion

WeatherNext 3 is already the weather layer in Search, Gemini, and Maps. Read the hourly strip, recheck near departure, and keep official warnings separate from the AI forecast. If you need the grids, request allowlist access and query BigQuery or Earth Engine instead of scraping a consumer card.

## Sources

- Google DeepMind and Google Research, "Introducing WeatherNext 3" (3 September 2026): https://blog.google/innovation-and-ai/models-and-research/google-deepmind/introducing-weathernext-3/
- Google DeepMind, WeatherNext product page: https://deepmind.google/science/weathernext/
- Google for Developers, WeatherNext quick start: https://developers.google.com/weathernext/guides/access-forecast
- Google for Developers, WeatherNext 3 model card: https://developers.google.com/weathernext/guides/models
- Google DeepMind, "WeatherNext 3: More accurate, timely, and local weather forecasts" (YouTube): https://www.youtube.com/watch?v=_6jZlnRsXXQ
