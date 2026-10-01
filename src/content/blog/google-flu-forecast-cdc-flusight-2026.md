---
title: "Google's Flu Forecast Ranked First in CDC FluSight"
description: "How Google's flu forecast ranked first in the CDC FluSight 2025-26 evaluation, and how to read weekly hospital admission forecasts."
pubDate: 2026-10-01T16:00:00
heroImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai", "google", "how-to"]
noindex: false
---

The Centers for Disease Control and Prevention published its FluSight 2025-2026 evaluation on September 30, 2026. Among 39 models that met the inclusion rules, CDC named Google_SAI-FluEns the top performing submission. Google Research said the same day that a flu forecasting model built with Google AI best matched observed flu-related hospital admissions for the season.

That ranking is useful only if you know what the forecast actually predicts. FluSight does not claim to name the day a season will peak months in advance. Teams submit short-horizon forecasts of new laboratory-confirmed influenza hospital admissions. This guide explains the score, the Google result, and how to read the public charts without treating a shaded band as a promise.

## What FluSight asked teams to predict

CDC has hosted influenza forecasting challenges since the 2013-2014 season, with a gap in 2020-2021 when flu activity was limited. For 2025-2026, CDC asked academic, industry, and government teams for weekly forecasts of influenza hospital admissions.

The main target was new weekly admissions for the current week and up to three weeks ahead. Locations covered the United States, each state, Puerto Rico, and Washington, D.C. Target data came from Weekly Hospital Respiratory Data Metrics by Jurisdiction, drawn from the National Healthcare Safety Network and data.cdc.gov. Forecasts first appeared on the CDC FluSight page on December 12, 2025. Solicitation ran from late November 2025 through May 20, 2026. Final target data used for scoring were published July 1, 2026.

CDC also built two reference forecasts each week. The FluSight baseline carries forward the prior week's admissions, with uncertainty based on observation noise. The FluSight ensemble takes the median of models that teams marked for ensemble inclusion. CDC uses that ensemble when it communicates forecast messaging.

![Hospital corridor with staff walking past patient rooms](https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80)

## How CDC scored the season

Thirty-four teams submitted forecasts from 53 unique models. Thirty-nine models met the inclusion rule of submitting at least 75 percent of the scored targets. CDC dropped national forecasts from the score because of scale differences, and dropped Puerto Rico because of data availability.

The primary metric is relative weighted interval score (WIS). WIS checks how well a set of prediction intervals matches what later happened. A lower score is better. Relative WIS compares a model with the FluSight baseline. A value below 1 means the model beat that baseline. CDC also reported 50 percent and 95 percent coverage: how often the interval actually contained the observed count.

The 2025-2026 season was moderate on CDC's preliminary in-season severity assessment. The highest weekly hospital admission count exceeded 40,000. Admissions started rising in mid-November 2025 and peaked nationally in the week ending December 27, 2025.

Of the 39 included models, 33 beat the baseline. The FluSight ensemble ranked 7th overall on average relative WIS across jurisdictions, excluding national. It was one of 12 models that beat the baseline in every scored jurisdiction. Google_SAI-FluEns was the top performing model among the individual team submissions.

Coverage was weakest around the sharpest turns. For the FluSight ensemble, the lowest coverage came around the national peak, when less than 25 percent of the two-week-horizon intervals across jurisdictions contained the observed values. Coverage dropped again in mid-January during the steepest decline, then stabilized near 95 percent from February 2026.

## What Google says it used

Google Research wrote that the forecasts were developed with Empirical Research Assistance (ERA), an AI tool that generates optimization algorithms across scientific fields. Google said research on ERA was published in Nature, and that the underlying technology is available to trusted testers through experimental science tools at labs.google/science.

ERA is not a public flu app you install on a phone. The public artifact is the forecast CDC evaluated, under the model name Google_SAI-FluEns. If you want a cited research workflow in the Gemini app instead, the steps in our guide to [Gemini Deep Research cited reports](/blog/gemini-deep-research-cited-reports/) are a closer match for everyday reading.

## How to read the weekly hospital chart

CDC posts forecasts of flu hospital admissions on the FluSight data page. Between seasons the page may show the last published week rather than a live submission. Use this checklist when a new season's chart is up.

1. Confirm the as-of date. Reported admissions can be revised after the first publication. The evaluation used final target data from July 1, 2026, not the first weekly file.
2. Read the horizon. A point for "this week" is not the same claim as a point three weeks ahead. Error usually grows as the horizon lengthens.
3. Treat the shaded band as a prediction interval, not a target range hospitals must hit. CDC describes these bands as bounds of uncertainty around the forecast.
4. Check whether you are looking at the ensemble or a single model. The ensemble is what CDC uses in its messaging. A single model, including Google's, can rank higher for a season and still miss a turning week.
5. Compare with the baseline mentally. Beating "same as last week" is the bar relative WIS uses. A fancy chart that cannot beat that bar is not adding skill.

![Analyst reviewing charts on a laptop](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80)

## Why the peak still broke the ensemble

CDC's own write-up is direct about the limit. Ensemble forecasts have often been among the most accurate for flu and other infectious-disease work. They still may not reliably predict rapid changes, including the rise at season onset and the turn at the peak.

During 2025-2026, the ensemble's 50 percent and 95 percent intervals did not anticipate the late-December increase or the mid-January decrease. That does not cancel the season ranking. It means a first-place model and a seventh-place ensemble can both be useful for planning and still be wrong on the week that matters most for staffing.

If you work in a hospital or a local health department, use the forecast as one input next to local admissions, emergency-department visits, and vaccine coverage. Do not staff a ward from a national median alone.

## A short way to follow the next season

FluSight submissions are a research collaboration, not a consumer notification. You can still track them without a modeling background.

- Open the CDC FluSight hospital admissions page and note the report date.
- Read the national summary first, then switch the location filter to your state.
- Save the evaluation page at the end of the season. That is where relative WIS and coverage replace the weekly narrative.
- If you cite a model name, use the label CDC publishes, such as Google_SAI-FluEns, instead of a product nickname.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Ewxd1XYAIqI"
    title="The Forecast I Didn't Trust: influenza forecasting and CDC FluSight"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

The video above is a conversation with a FluSight contributor about one-to-four-week hospitalization forecasts, why ensembles can beat single models, and why disagreement between models is part of the signal. It is background, not a CDC briefing.

## Tips before you quote the ranking

Quote the denominator. "First of 39 included models" is accurate. "First of every flu model in the world" is not. Ten models were left out of the analysis because they submitted fewer than 75 percent of targets.

Separate the ensemble from the winner. CDC still communicates with the FluSight ensemble, which placed 7th. Google's model led the individual submissions. Both statements can be true in the same table.

Do not turn the result into medical advice. The forecast counts hospital admissions. It does not tell you whether to seek care, and it does not replace vaccination guidance from CDC or your clinician.

Watch the next evaluation for emergency-department visit percentages. CDC said that scoring was forthcoming when it posted the hospital-admission report.

## Conclusion

Google_SAI-FluEns earned the top slot in CDC's FluSight 2025-2026 hospital-admission evaluation, ahead of a field of 39 models that cleared the submission bar. The FluSight ensemble, the forecast CDC actually uses in public messaging, placed 7th and still beat a simple baseline in every scored jurisdiction. The same report shows both approaches struggling when admissions turned sharply in late December and mid-January.

For readers, the practical step is narrower than the headline. Open the FluSight hospital chart, read the horizon and the interval, and wait for the end-of-season relative WIS table before you rank a model. That is the standard CDC used on September 30, 2026.

## Sources

- CDC, FluSight 2025-2026 Evaluation, September 30, 2026: https://www.cdc.gov/flu-forecasting/evaluation/2025-2026-report.html
- CDC, Forecasts of Flu Hospital Admissions: https://www.cdc.gov/flu-forecasting/data-vis/current-week.html
- Google Research, "Google's AI ranks #1 for predicting flu hospitalizations," September 30, 2026: https://blog.google/innovation-and-ai/models-and-research/google-research/google-science-ai-flu-forecasts/
- Google Research, Empirical Research Assistance: https://research.google/blog/four-ways-google-research-scientists-have-been-using-empirical-research-assistance/
