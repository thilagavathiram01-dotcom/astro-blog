---
title: "WeatherNext 3 Guide: Hourly Rain Forecasts in Google"
description: "Use WeatherNext 3 hourly rain forecasts in Google Search, Maps, and Gemini. See resolution, accuracy claims, and where to open the data."
pubDate: 2026-10-02T14:00:00
heroImage: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai", "google", "tutorials", "how-to"]
noindex: false
---

A weekend plan used to depend on a forecast that refreshed every six hours and smoothed rain into a blurry blob. Google DeepMind and Google Research say WeatherNext 3 changes that. The model refreshes every hour, draws on live satellite mosaics, and now feeds weather in Google Search, the Gemini app, Google Maps, the Maps Platform Weather API, and Google Earth Engine.

This guide shows what the model actually claims, where you can read those forecasts today, and how to treat the numbers when a storm is still forming.

## What WeatherNext 3 changes

Google introduced WeatherNext 3 on 3 September 2026. The company calls it its most advanced global weather model, citing independent live evaluations by Brightband. Unlike WeatherNext 2, which produced forecasts on a 25-kilometer grid in six-hour steps, WeatherNext 3 generates hourly forecasts at more than one resolution.

Surface variables such as temperature and moisture are shown at about 5 kilometers. Other surface variables sit near 10 kilometers. Atmospheric variables such as wind speed stay at about 25 kilometers. Google describes the overall picture as roughly five times sharper than WeatherNext 2.

The model uses a Functional Generative Network mesh transformer. It takes live one-hour geostationary satellite mosaics plus historical analysis, then outputs gridded fields, cyclone tracks, and station-level points. Developer docs list 15-day global probabilistic forecasts, initialized hourly, with 64 ensemble members.

That matters for coasts, valleys, and mountain towns, where temperature and humidity can change over a few kilometers. WeatherNext 3 trains directly on sparse weather-station observations so those local shapes are less likely to wash out.

![Storm clouds over open land, the kind of fast-changing weather hourly forecasts aim to track](https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=800&q=80)

## Why rain forecasts look less blurry

Global models have long struggled with rain and snow. Cloud processes move fast and sit on small scales. Older AI forecasts often spread precipitation into a soft patch or miss the edge of a storm.

WeatherNext 3 is trained on two precipitation sources: NASA’s Integrated Multi-satellite Retrievals for GPM (IMERG) and Google’s own global precipitation reanalysis based on satellite radar. On medium-range global forecasts, Google reports Continuous Ranked Probability Score gains of up to 60 percent against IMERG, 30 percent for MRMS, and 10 percent against rain gauges at early lead times. Those are model-evaluation scores, not a promise that every local shower will land on time.

For day-ahead planning, Google says people will see up to 50 percent more accurate precipitation forecasts, with the largest gains in places where forecasts have been less reliable. The same post adds energy-focused variables: 100-meter wind near turbine height, plus high-resolution cloud cover and solar radiation.

Google’s disclaimer is clear. For official forecasts, severe-weather warnings, and public safety advice, use your local meteorological agency or national weather service. WeatherNext 3 is a planning layer inside Google products, not a replacement for a warning.

## Check the forecast in Search

Search is the fastest place to see the consumer forecast.

1. Open Google Search on the web or in the Google app.
2. Search for `weather` plus your city, or allow location and search `weather`.
3. Read the hourly strip first. WeatherNext 3 refreshes on an hourly cycle, so the next few hours are the part most affected by the new satellite input.
4. Open the precipitation graph or day view and compare today with tomorrow. Day-ahead rain is where Google says the accuracy gain is largest.
5. If you are near a coast or a ridge, check a nearby town as well. A 5-kilometer temperature field can differ from a city-center reading a short drive away.

Do not treat a single percent chance as a yes or no. The model is an ensemble. A 40 percent chance of rain means members of that ensemble disagree, not that the app is unsure of a fact.

## Ask Gemini for a planning answer

Gemini now sits on the same WeatherNext 3 feed. Use it when you need a decision, not a chart.

Open the Gemini app and ask a bounded question:

- “What is the hourly rain chance in Pune from 4 p.m. to 8 p.m. today?”
- “Which morning this weekend looks driest for a hike near Manali?”
- “Compare wind and cloud cover for a rooftop solar check in Jaipur tomorrow.”

Ask for the time window and the place in the same prompt. Follow up with “What is the forecast based on?” if you want Gemini to point at the weather result rather than a general summary.

Gemini can still misread a place name or mix a neighborhood with a city. If the answer names the wrong area, correct the location and ask again. For travel that depends on a warning, open your national weather service after the Gemini reply.

If you also use a Pixel home screen for a quick glance, the [Pixel weather widget refresh guide](/blog/pixel-weather-widget-refresh/) covers how that widget updates separately from the model behind Search and Gemini.

## Read the same system in Google Maps

Maps is useful when the question is a route, not a city name.

1. Open Google Maps and search the destination.
2. Tap the weather card on the place sheet if it appears, or search the area name plus weather from Maps.
3. Compare the start point and the end point. A 15-day ensemble can show a dry departure and a wet arrival.
4. For a drive through hills, check an intermediate town. Higher resolution helps, but a single map pin still sits on one grid cell.

Maps Platform developers can pull the same family of forecasts through the Weather API. Consumer Maps and the API are not identical products, so confirm units and update time in the API response before you ship a feature.

![Fog over a mountain valley, where a few kilometers can change temperature and rain](https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80)

## Watch the model explain the hourly update

Google DeepMind published a short walkthrough of the hourly refresh, the 5-kilometer surface fields, and the energy variables. It is the clearest public summary of what changed from WeatherNext 2.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/_6jZlnRsXXQ"
    title="WeatherNext 3: More accurate, timely, and local weather forecasts"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Open the grids if you build with the data

Researchers and developers can query the operational forecasts without training a model. Google points to three doors:

- Weather Lab at deepmind.google.com/science/weatherlab for a live view, including cyclone tracks.
- BigQuery and Earth Engine for hourly global predictions, linked from developers.google.com/weathernext.
- Bulk download from Google Cloud Storage for larger workflows.

The developer overview lists hourly satellite ingestion, multi-resolution output from 5 to 25 kilometers, and training against surface station measurements. Start with Weather Lab if you only need to see a field. Move to BigQuery or Earth Engine when you need a repeatable query.

The research paper is on arXiv at arxiv.org/abs/2609.03582. Independent ranking notes live on Brightband’s leaderboard, which Google links from the launch post.

## Practical limits

Hourly updates help with storms that form between the old six-hour cycles. They do not remove uncertainty. The launch post says the atmosphere keeps a degree of unpredictability.

Use WeatherNext 3 for packing, routing, and rough energy planning. Use an official warning service for floods, cyclones, heat alerts, and aviation decisions. If Search, Gemini, and your national service disagree on a severe event, follow the national service.

Resolution is not the same everywhere in the stack. Temperature and moisture can be at 5 kilometers while some atmospheric fields remain at 25 kilometers. A wind number and a rain number may not share the same grid.

## Conclusion

WeatherNext 3 is already behind everyday Google weather: hourly runs, sharper surface fields, and precipitation scores Google says beat its earlier model on IMERG, MRMS, and gauges. You can read it in Search, ask Gemini for a time-bounded plan, and cross-check a route in Maps. Builders can open the same grids in Weather Lab, BigQuery, and Earth Engine.

Start with the next six hours in Search, then ask Gemini only after you have named the place and the window. Keep the national weather service as the source for warnings.

## Sources

- Google DeepMind and Google Research, “Introducing WeatherNext 3,” blog.google, 3 September 2026: https://blog.google/innovation-and-ai/models-and-research/google-deepmind/introducing-weathernext-3/
- WeatherNext developer overview: https://developers.google.com/weathernext
- Weather Lab: https://deepmind.google.com/science/weatherlab
- Paper: https://arxiv.org/abs/2609.03582
- Google DeepMind, “WeatherNext 3: More accurate, timely, and local weather forecasts,” YouTube, 3 September 2026.
