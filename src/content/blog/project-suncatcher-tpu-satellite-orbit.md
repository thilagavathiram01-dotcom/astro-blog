---
title: "Project Suncatcher: Google’s TPU Satellite in Orbit"
description: "Project Suncatcher put Google TPUs in orbit on 1 Oct 2026. Here is what the Transporter-18 prototype tests, and what comes next."
pubDate: 2026-10-02T09:00:00
heroImage: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai", "google", "developer"]
noindex: false
---

Google’s first Project Suncatcher prototype is in orbit. On 1 October 2026, the satellite launched on SpaceX’s Transporter-18 rideshare, built with Planet. Google Research says the team has confirmed contact and the craft is operating as expected.

This is not a product launch. It is the first hardware test of a research moonshot: can Tensor Processing Units (TPUs) survive launch, radiation, and vacuum long enough to run machine learning off Earth? The peer-reviewed paper behind the mission is now in *Joule*.

If you follow Google’s AI stack, this flight sits beside model releases such as [Gemini 4 Argon](/blog/gemini-4-argon-developer-guide/). Argon is a software frontier. Suncatcher asks whether the chips that train and serve models can live in low Earth orbit.

## What launched, and what it is for

Project Suncatcher was announced last year as a long-term study of scalable machine learning infrastructure in space. In low Earth orbit, solar panels can see near-constant sunlight. Google says that can yield up to eight times more solar power than the same panel on Earth.

The October flight is narrower than that vision. Travis Beals, senior director of Paradigms of Intelligence, described the mission as a data-gathering step. Over the coming weeks, the team will measure how TPUs handle launch stress, radiation, and thermal extremes.

The New York Times reported that the satellite, named MVP, carries four TPUs with about the compute of one data-center server, and that its solar panels supply about one kilowatt. Google has not published a public query API for the craft. Treat any “run a prompt on the satellite” claim as unverified.

![Earth seen from orbit, the environment Project Suncatcher is testing](https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80)

## How to read the mission in five checks

You cannot book time on the prototype. You can still follow the experiment without inventing results.

1. Start with the 1 October post on the Google Research blog. It confirms launch, partner (Planet), vehicle (Transporter-18 with SpaceX), contact, and that in-orbit data collection has begun.
2. Read the 24 September explainer for the test plan: vibration, radiation, cooling, and future laser links. That post also points to a Google video series on the engineering questions.
3. Open the *Joule* paper linked from the launch note (`goo.gle/suncatcher-joule`) if you need the research design rather than the news summary.
4. Separate ground tests from flight tests. Ground results are already published. Flight results are not.
5. Watch the 2027 milestone, not daily social posts. Google says a two-satellite laser-link test is planned for 2027, after this first hardware flight.

## What Google already tested on the ground

A ride to low Earth orbit lasts about 10 minutes. During that window the spacecraft sees vibration and sustained acceleration up to about 10 g. Individual parts, including TPU chips, can see 50 to 100 g. Google shook the satellite on all three axes to mimic launch frequencies and reported that the hardware held up.

Radiation is the next filter. Solar events and cosmic rays flip bits and wear out electronics. The team ran Trillium TPUs in a proton beam at UC Davis’s Crocker Nuclear Laboratory while AI workloads were active, and watched for errors such as bit flips. Google says those chips survived a total ionizing dose greater than a five-year space mission would deliver.

That is a ground result. Orbit adds a mixed radiation field, thermal cycling, and no chance to swap a board. The October flight exists because those conditions cannot be fully copied in a lab.

![Solar array under bright light, the power source Suncatcher wants to use in orbit](https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80)

## Cooling without air

TPUs dump a lot of heat into a small area. On Earth, fans and liquid loops move that heat into air. In vacuum there is no airflow. Heat leaves only by radiation, so the thermal design has to change.

Google is testing heat pipes plus radiators. The stack has already been run in a thermal vacuum chamber that copies space temperature and pressure. The orbiting prototype is the first check of that cooling path on a real flight. If radiators underperform, later satellites get a different layout before anyone talks about clusters.

## What the 2027 flight is meant to prove

Future designs in Google’s plan carry dozens of TPU chips per satellite and fly in clusters. Training-scale jobs need high bandwidth between neighbors, not a thin link to the ground.

Most space lasers are built for modest bandwidth over long range. Suncatcher needs the opposite: very high bandwidth over very short range, with both ends moving. Google compares the pointing problem to hitting a coin-sized target from miles away while both points move. The 2027 mission puts two satellites up to test that link. This October flight does not.

Clusters also need each craft to know its absolute position and its place relative to the others. Google calls that guidance, navigation, and control work. None of it is solved by a single prototype that has only just checked in.

## What this does not change for developers

Suncatcher does not add a new model ID in AI Studio, Firebase AI Logic, or the Gemini API. Your current calls still land in terrestrial regions. Pricing, context windows, and safety filters are unchanged by this launch.

If you are sizing a workload today, keep using published API models. For a frontier model that is actually in a limited program, see the Argon notes on access and token pricing rather than this satellite. Argon’s introductory API price, announced 30 September 2026, is $2 per million input tokens and $10 per million output tokens, rising later to $4 and $20. Cached input is priced at 95% off the input rate. That is a billing fact. Suncatcher is a hardware experiment.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/o1JK79jszqo"
    title="Google’s latest moonshot to put machine learning in space"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical tips while the data comes in

- Quote only the two Google Research posts and the *Joule* paper when you brief a team. Secondary write-ups often mix the four-chip prototype with the “dozens of chips” future design.
- Do not plan a product dependency on orbital inference. Google has not offered a developer endpoint, a latency number, or a service level.
- Track three dates: contact confirmed (1 October 2026), in-orbit thermal and radiation data over the coming weeks, and the two-satellite test in 2027.
- Power scale is still tiny next to a campus. About one kilowatt on the prototype is a hair-dryer class supply, not a training cluster.
- Radiation tolerance on the ground is not the same as error rates in orbit. Wait for flight bit-flip data before comparing Trillium to rad-hard parts.

## Why Google is running the test anyway

Beals frames the work as working backward from a long goal: enough compute, powered by sunlight that does not set, to keep AI useful for science and health far past today’s grid limits. Google compares the timeline to early autonomous-driving and quantum research: years of experiments before a practical system.

The first launch is meant to show what breaks. Vibration, dose, and chamber tests reduce risk. They do not replace weeks of telemetry from a craft that is already on orbit and talking to the ground.

## Bottom line

Project Suncatcher has a prototype in orbit as of 1 October 2026, launched on Transporter-18 with Planet and SpaceX. Google has contact. The flight is collecting data on TPU survival, not serving public models. Ground tests already suggest Trillium parts can take a five-year radiation dose and a violent ride up. Cooling and short-range laser links are the open engineering problems, with a two-satellite test aimed at 2027.

Until Google publishes flight numbers, treat Suncatcher as a research log, not a cloud region.

## Sources

- Travis Beals, “Our Project Suncatcher prototype satellite is in orbit,” Google Research blog, 1 October 2026.
- Travis Beals, “Behind Project Suncatcher, our moonshot to put AI in space,” Google Research blog, 24 September 2026.
- Peer-reviewed mission paper in *Joule*, linked from the 1 October post.
- Google, “Google’s latest moonshot to put machine learning in space,” YouTube, 24 September 2026.
- Koray Kavukcuoglu, “Gemini 4 Argon: our next era of frontier intelligence,” Google blog, 30 September 2026.
