---
title: "Track Google’s Project Suncatcher TPU Satellite Test"
description: "Project Suncatcher put a Google TPU prototype in orbit on October 1, 2026. Learn what the satellite tests and how to follow the results."
pubDate: 2026-10-05T16:30:00
heroImage: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai", "google", "how-to"]
noindex: false
---

Google confirmed on October 1, 2026 that its first Project Suncatcher prototype satellite is in orbit and operating as expected. The craft launched that day on SpaceX’s Transporter-18 rideshare, built with Planet. Contact was established after launch.

This is a hardware test, not a cloud region you can call from an API. Over the coming weeks Google plans to collect in-orbit data on how its Tensor Processing Units handle launch stress, radiation, and thermal extremes. The peer-reviewed paper behind the mission is now in the journal Joule.

## What Project Suncatcher is testing

Travis Beals, senior director of Paradigms of Intelligence, described the flight as the first step in a research moonshot announced last year. The question is whether low Earth orbit could one day host scalable machine learning infrastructure.

Google’s stated reason is power. In low Earth orbit, satellites can access near-constant sunlight and generate up to eight times more solar power than a panel on Earth. Later designs would link clusters of satellites so they can share larger workloads. That architecture is not flying on this prototype.

The October mission has a narrower job. Can Trillium TPU hardware survive the trip and keep working once it is there? Google has said some of those answers only exist in orbit.

![Earth seen from orbit with cloud cover and a dark horizon](https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80)

## What ground tests already showed

Before launch, the team published what it had already learned on the ground. A rocket ride to low Earth orbit lasts about 10 minutes. The spacecraft sees sustained acceleration up to 10 times gravity. Individual parts, including the TPU chips, can see 50 to 100 g. Engineers shook the satellite on all three axes to copy launch frequencies. Google said the hardware held up, and that these tests rarely go that cleanly.

Radiation was the second ground check. Solar events and cosmic rays can flip bits in electronics. The team ran TPUs in a proton beam at UC Davis’s Crocker Nuclear Laboratory while AI workloads were running, and watched for errors such as bit flips. Google reported that Trillium TPUs survived a radiation total ionizing dose greater than a five-year mission in the orbit they are studying.

Cooling is the open problem those lab runs cannot close. TPUs dump a lot of heat into a small area. In vacuum there is no air to carry that heat away, so the only path is radiation through radiators. The team is testing heat pipes plus radiators, and has already run the setup in a thermal vacuum chamber. The orbit flight is meant to show whether that cooling path behaves as the chamber did.

## What is not on this satellite

Future satellites in the concept would each carry dozens of TPU chips and fly in clusters. They would need to know their own position and their neighbors’ positions, then talk over lasers. Existing space lasers are mostly built for lower bandwidth over long distances. Google wants high bandwidth over very short distances, which it compares to hitting a coin-sized target from miles away while both ends move. That interconnect test is planned for 2027, when two satellites go up together.

Do not read the October 1 launch as a public TPU cluster. There is no developer endpoint, no Vertex AI region, and no pricing page for orbital inference. If you need a model you can call today, stay on the Gemini API or on-device options such as the setup in our guide to [running Gemma 4 12B on a laptop](/blog/gemma-4-12b-local-laptop/).

![Rocket climbing through clouds shortly after liftoff](https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=800&q=80)

## How to follow the mission without inventing results

Google has not published a public telemetry dashboard. The reliable trail is the research blog and the paper. Use this order when you check for updates.

1. Start with the October 1 post, “Our Project Suncatcher prototype satellite is in orbit.” It is the only place Google has confirmed contact and normal operation.
2. Read the September 24 explainer, “Behind Project Suncatcher, our moonshot to put AI in space,” for the ground-test numbers: launch loads, the Crocker beam test, cooling, and the 2027 two-satellite plan.
3. Open the Joule paper linked from the October 1 post (`goo.gle/suncatcher-joule`) before you quote a radiation or power figure in your own writing. The blog summaries are shorter than the paper.
4. Watch the official Google video series rather than recut clips. The September 24 post points to that series for hardware survival, cooling, and satellite links.
5. Treat any “in-orbit result” that is not on blog.google or in the paper as unverified. Google said the flight data will arrive over the coming weeks, not on launch day.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/o1JK79jszqo"
    title="Google’s latest moonshot to put machine learning in space"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

The video above is Google’s overview of the power, clustering, and laser-link questions. It was published on September 24, 2026, before the Transporter-18 flight. It explains the goal. It does not include post-launch measurements.

## What developers should take from the flight

The useful lesson is about constraints, not a new SDK. Ground tests can prove a chip survives a dose and a shake table. They cannot prove a radiator works for weeks in sun and eclipse, or that a laser link holds formation. Google is explicit that the 2027 flight is the interconnect milestone, and that this first craft is for learning failure points.

If you design on-device or edge inference, the same split applies. A lab thermal test is not a phone in a closed car, and a benchmark is not a five-year radiation budget. Suncatcher is an extreme version of that rule: the environment is the experiment.

For product planning, keep orbital compute out of roadmaps. Google has not given a date when customer workloads would run on these satellites. The public schedule stops at data collection now and a two-satellite test in 2027.

## Tips before you cite the mission

Name the partners correctly. The prototype was built with Planet and flew on Transporter-18 with SpaceX. Google did not claim to have launched its own rocket.

Keep the power claim attached to sunlight, not to a finished data center. “Up to eight times more solar power than on Earth” is Google’s figure for panels in low Earth orbit. It is not a measured output from this satellite.

Separate Trillium radiation survival on the ground from in-orbit health. The five-year total ionizing dose result comes from the Crocker proton-beam test. Flight data is still being gathered.

Do not conflate this project with Gemini model launches. Suncatcher is a Google Research hardware study. It does not change Gemini API model IDs, quotas, or regions.

## Conclusion

Project Suncatcher’s first prototype reached orbit on October 1, 2026, on Transporter-18, and Google says it is operating as expected. The flight is collecting data on launch stress, radiation, and heat in vacuum. Ground work already showed Trillium TPUs surviving a five-year radiation dose in a proton beam, and a 2027 mission is planned to test laser links between two satellites.

Until Google posts flight measurements, the accurate summary is short. A research satellite with TPU hardware is up. A space-based training cluster is not. Follow the research blog and the Joule paper, and ignore any claim that you can send a job to orbit today.

## Sources

- Travis Beals, “Our Project Suncatcher prototype satellite is in orbit,” Google Research, October 1, 2026: https://blog.google/innovation-and-ai/models-and-research/google-research/project-suncatcher-prototype/
- Travis Beals, “Behind Project Suncatcher, our moonshot to put AI in space,” Google Research, September 24, 2026: https://blog.google/innovation-and-ai/models-and-research/google-research/google-project-suncatcher-facts/
- Google, “Google’s latest moonshot to put machine learning in space,” YouTube, September 24, 2026: https://www.youtube.com/watch?v=o1JK79jszqo
- Joule paper linked by Google: https://goo.gle/suncatcher-joule
