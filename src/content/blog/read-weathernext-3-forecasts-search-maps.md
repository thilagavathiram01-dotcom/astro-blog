---
title: "Check WeatherNext 3 Rain Forecasts in Search and Maps"
description: "Learn how WeatherNext 3 powers Google Search, Maps, and Gemini rain forecasts, and how to ask for hourly precipitation before you leave."
pubDate: 2026-10-06T09:00:00
heroImage: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai", "google", "tutorials", "how-to"]
noindex: false
---

A weekend plan used to depend on a six-hour weather cycle and a blurry rain blob. Google says WeatherNext 3 now refreshes forecasts every hour and feeds Google Search, the Gemini app, Google Maps, the Maps Platform Weather API, and Google Earth Engine. If you are packing for a trip or picking an outdoor day, the practical change is sharper precipitation guidance a day or more ahead.

This guide shows where that forecast shows up, what questions to ask, and what the model actually claims. It is not a replacement for your national weather service.

## What WeatherNext 3 changed

Google DeepMind and Google Research introduced WeatherNext 3 on 3 September 2026. The model takes live geostationary satellite mosaics plus traditional analysis, then writes a new forecast every hour. Google says key surface fields such as temperature and moisture run at about 5 kilometres, other surface fields at about 10 kilometres, and atmospheric fields such as wind at about 25 kilometres. WeatherNext 2 used a 25-kilometre grid and six-hour steps, so Google describes the new picture as roughly five times sharper.

Independent live evaluations from Brightband are cited by Google as the basis for calling WeatherNext 3 its most accurate global model to date. For people using Search and Maps, Google also says precipitation forecasts a day or more ahead can be up to 50 percent more accurate, with the largest gains in places where forecasts were historically weaker. That is a product claim from Google, not a guarantee for every city and every storm.

Google also trains the precipitation path on NASA IMERG satellite retrievals and its own satellite-radar reanalysis. In the research write-up, medium-range scores improved by up to 60 percent CRPS against IMERG, 30 percent against MRMS, and 10 percent against rain gauges at early lead times. Those numbers belong to model evaluation, not to the rain percentage you see on your phone.

![Storm clouds over open land, the kind of system hourly AI forecasts try to track](https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80)

## Check the forecast in Google Search

Search is the fastest place to see the updated weather card. You do not install a new app.

1. Open the Google app or google.com on your phone.
2. Allow location, or type a city in the query if you are planning somewhere else.
3. Search `weather`, `weather tomorrow`, or `will it rain Saturday in [city]`.
4. Open the hourly strip and the daily rows. Look at precipitation chance and amount, not only the icon.
5. Refresh later in the day. Because the model initializes every hour, a morning front can look different by afternoon.

Useful queries:

- `hourly rain forecast [city]`
- `chance of rain Saturday afternoon [city]`
- `weather this weekend [city]`
- `wind tomorrow [city]`

Google notes that the atmosphere stays unpredictable. Treat a sudden jump in the hourly rain chance as a reason to check again, not as a finished answer.

## Read rain on Google Maps before you go

Maps is the better surface when the forecast has to sit next to a route.

1. Open Google Maps and search the destination, or drop a pin.
2. Look for the weather chip on the place sheet. On many Android builds it sits near the address and hours.
3. Tap it for the short forecast, then compare it with the Search card for the same place.
4. If you are driving, check the destination hour, not only the current temperature at home.
5. For a multi-stop day, repeat the check for each city. Resolution of about 5 kilometres matters more near coasts, valleys, and ridges than on flat ground.

![A paper map and compass on a table, a reminder to pair a route with a local forecast](https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80)

Maps Platform developers can also pull the same generation of forecasts through the Weather API. Consumer Maps does not expose model grids. If you need raw fields, use the Cloud path described later.

## Ask Gemini for a planning answer

Gemini is useful when you want a decision, not a chart. Google says the Gemini app is one of the products WeatherNext 3 began powering on launch day.

1. Open the Gemini app and allow location if you want answers for where you are.
2. Name the place and the time window in the first prompt.
3. Ask for precipitation, not a vague "how is the weather."
4. Follow up if the first reply only gives a daily high.

Prompts that stay specific:

- `Will I need a rain jacket in Austin between 3 pm and 7 pm on Saturday? Give the hourly chance of rain.`
- `Compare rain chances in Pune and Bengaluru this weekend. Which day is drier for an outdoor market?`
- `I am cycling 20 kilometres tomorrow morning near the coast. What does the hourly forecast say about wind and rain?`

Gemini can still miss a local warning. If the reply mentions storms, open your national weather service next. Google's own disclaimer says official forecasts, severe weather warnings, and public safety advisories belong to your local meteorological agency.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/_6jZlnRsXXQ"
    title="WeatherNext 3: More accurate, timely, and local weather forecasts"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

The Google DeepMind clip above walks through hourly refresh, satellite input, and the 5-kilometre surface grid. Use it if you want the model story before you trust the phone card.

## What the phone card does not show

Consumer Search, Maps, and Gemini hide the ensemble. On the developer side, WeatherNext 3 publishes 64 members. Full 15-day forecasts (360 hours) come from the 00, 06, 12, and 18 UTC cycles. Interim hourly runs cover about 48 hours. That split explains why a same-day rain band can update often, while a 10-day outlook still moves.

Clean-energy fields are also part of the model, not the typical phone card. Google forecasts 100-metre wind, cloud cover, and surface solar radiation so grid operators can estimate wind and solar output. Those variables live in BigQuery, Earth Engine, and Cloud Storage after an access request, not in the Search weather chip.

If you build on the data, start with the allowlist form. Google says reviews usually take 5 to 7 business days, and a free Google Cloud account is enough. The step-by-step for Zarr, BigQuery, and Earth Engine is in our earlier guide, [Access WeatherNext 3 forecasts on Google Cloud](/blog/access-weathernext-3-forecasts-google-cloud/).

## Practical checks before you rely on it

- Compare two sources. Read the Search hourly row and your national service for the same hour.
- Name the hour. "Saturday" hides a dry morning and a wet evening.
- Re-check after a new hour if a front is nearby. Hourly init is the point of the model.
- Do not treat a 50 percent accuracy gain as a local promise. Google ties that figure to day-ahead precipitation and to regions that were previously weaker.
- For warnings, leave Google. Watches and warnings still come from the weather service that covers your area.

Weather Lab on the DeepMind site shows WeatherNext 3 fields if you want to see the grid instead of a summary card. Brightband's public leaderboard is the independent scoreboard Google points to.

## Bottom line

You do not switch on WeatherNext 3. Search, Maps, and Gemini already use it for weather answers. Ask for a place, a day, and an hour, then read the precipitation line. Use the hourly refresh when plans are same-day, and keep official warnings outside the chat window.

## Sources

- Google Blog, "Introducing WeatherNext 3" (3 September 2026): https://blog.google/innovation-and-ai/models-and-research/google-deepmind/introducing-weathernext-3/
- Google for Developers, WeatherNext 3 model guide: https://developers.google.com/weathernext/guides/models
- Google for Developers, access quick start: https://developers.google.com/weathernext/guides/access-forecast
- Google DeepMind, "WeatherNext 3: More accurate, timely, and local weather forecasts": https://www.youtube.com/watch?v=_6jZlnRsXXQ
- Brightband live evaluations, cited by Google: https://owb.brightband.com/
