---
title: "Project Suncatcher: Google’s First TPU Satellite Test"
description: "Project Suncatcher put a Google TPU prototype in orbit on Oct 1, 2026. See what the Planet and SpaceX test measures, and what comes in 2027."
pubDate: 2026-10-03T09:00:00
heroImage: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai", "google", "developer"]
noindex: false
---

Google confirmed contact with its first Project Suncatcher prototype on October 1, 2026. The satellite, built with Planet, rode SpaceX’s Transporter-18 rideshare and is operating as expected.

This is not a public cloud region in orbit. It is the first hardware check in a research program that asks whether machine-learning clusters can run on sunlight in low Earth orbit. Travis Beals, senior director of Paradigms of Intelligence, described the flight as the start of a long-term moonshot, with a peer-reviewed paper now in *Joule*.

If you follow Google’s AI stack on the ground — including models such as those covered in our [Gemini 4 Argon developer guide](/blog/gemini-4-argon-developer-guide/) — this flight is the matching hardware experiment: same class of accelerator, a very different power and cooling problem.

## What launched, and what it is for

Project Suncatcher was announced in 2025. The idea is to put Tensor Processing Units (TPUs) where a solar panel can see near-constant sunlight. Google says a panel in the right low Earth orbit can generate up to eight times more solar power than the same panel on Earth.

The October 1 flight is a prototype, developed with Planet and launched on Transporter-18. Over the coming weeks the team will collect in-orbit data on three stresses that ground labs only approximate:

- Vibration and acceleration from launch.
- Radiation from solar events and cosmic rays.
- Heat, because a vacuum has no air to carry heat away.

Future designs, Google says, would put dozens of TPU chips on each satellite and fly those satellites in clusters. Linking clusters could, in theory, handle larger workloads. That architecture is not on this first vehicle. The 2027 milestone is a two-satellite laser test.

![Earth seen from orbit, the environment Project Suncatcher is measuring](https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80)

## Why orbit is attractive, and why it is hard

Power is the attraction. Dawn-dusk orbits keep solar arrays in sunlight for almost the full orbit, which is why Google looked past geosynchronous options for this concept. More energy per panel is the bet. Whether that energy can feed a useful cluster is the open question.

Launch is the first filter. A ride to low Earth orbit lasts about 10 minutes. The spacecraft sees sustained loads up to 10 times Earth gravity. Individual parts, including the TPU chips, can see 50 to 100 g. Google shook the satellite on all three axes to match rocket frequencies before flight. The hardware survived that ground test. Survival on the pad is not the same as survival after months of radiation and thermal cycling.

Radiation testing happened at UC Davis’s Crocker Nuclear Laboratory. Engineers ran AI workloads on Trillium TPUs in a proton beam and watched for errors such as bit flips. Google’s initial result: the chips tolerated a total ionizing dose higher than a five-year mission would deliver. That is a lab result. The orbit test is meant to check what the beam cannot reproduce.

Cooling is the other constraint. On the ground, fans move air across a heat sink. In vacuum, heat leaves only by radiation. Google is using heat pipes and radiators, already proven on other spacecraft, and has run the stack in a thermal vacuum chamber. Radiators shed on the order of a few hundred watts per square metre, while a TPU pack produces far more heat in a much smaller volume. The flight will show whether that plumbing holds once the chips are actually computing.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/o1JK79jszqo"
    title="Google’s latest moonshot to put machine learning in space"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## How to follow the test without overreading it

You cannot rent this satellite. There is no public API and no developer console for the prototype. What you can do is track the claims Google has actually made, and ignore the ones it has not.

1. Read the October 1 status post. It confirms launch, contact, and normal operation. It does not publish a model name, a token rate, or a public inference endpoint.
2. Read the September 24 explainer for the engineering scope: Trillium radiation results, vibration loads, radiator cooling, and the 2027 two-satellite laser test.
3. Watch the Google Research short series. The overview is “Google’s latest moonshot to put machine learning in space.” Follow-ups cover laser links and cooling. Treat lab demos, including an 800 Gbps bench link built from fiber-optic parts, as ground proofs, not on-orbit results.
4. Open the *Joule* paper when you want the research record. Google pointed to it as the write-up behind the mission. Use the paper, not secondary recaps, for methods and limits.
5. Mark 2027 on a calendar. That is when Google plans to fly two satellites and test short-range, high-bandwidth laser links. Current space lasers are mostly tuned for long range and lower bandwidth. Suncatcher needs the opposite: very high bandwidth over short distances, with each satellite knowing its own position and its neighbor’s.

![A launch vehicle leaving the pad, the kind of ride Transporter-18 provided](https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=800&q=80)

## What this does not change for app developers

Nothing in the Gemini API, Vertex AI, or Android on-device stack moves because this satellite is alive. Training and serving still happen in terrestrial data centers. If you are choosing a model or an on-device runtime this quarter, size that choice against published quotas and device limits, not against an orbital prototype.

The useful takeaway is about constraints. Google is explicit that some failures only show up in orbit: combined radiation, thermal swing, and the lack of airflow. A ground beam test and a thermal vacuum chamber are necessary filters. They are not a substitute for weeks of flight data.

That same habit applies to product work. A benchmark on a lab device is not the same as a fleet. Google’s own note on Trillium — chips that survived a five-year dose in a proton beam — still needed a flight to close the loop.

## Tips before you cite the mission

- Quote the power claim carefully. Google says up to eight times more solar power in low Earth orbit, and researchers in the overview video say five to eight times versus the same panel on Earth. Do not turn that into a claim about total data-center cost.
- Do not call the prototype a production cluster. Google’s language is “first step” and “prototype.” Cluster designs with dozens of TPUs per satellite are future work.
- Separate ground demos from flight results. The 800 Gbps bidirectional laser test was a bench setup with telescopes and off-the-shelf transceivers. The two-satellite laser flight is scheduled for 2027.
- Cooling numbers from the research videos are order-of-magnitude engineering context, not a published spacecraft power budget. Google has not posted watt figures for this vehicle in the launch notes.
- The program is research. Google has not offered a timeline for customer workloads in orbit.

## What to watch next

The next public signal is flight data, not a product launch. Google said it will use the coming weeks to see how the TPUs handle launch stress, radiation, and heat, then refine designs. The 2027 pair of satellites is the first real test of the laser interconnect that a cluster would need.

Until those results land, Project Suncatcher is a hardware experiment with a clear question: can Google’s accelerators compute in orbit long enough to justify a larger design. Contact with the satellite answers only the first line of that question.

## Sources

- Google Research, “Our Project Suncatcher prototype satellite is in orbit,” October 1, 2026: https://blog.google/innovation-and-ai/models-and-research/google-research/project-suncatcher-prototype/
- Google Research, “Behind Project Suncatcher, our moonshot to put AI in space,” September 24, 2026: https://blog.google/innovation-and-ai/models-and-research/google-research/google-project-suncatcher-facts/
- Google, “Google’s latest moonshot to put machine learning in space” (YouTube): https://www.youtube.com/watch?v=o1JK79jszqo
- Google, “Keeping flying satellites connected with lasers” (YouTube): https://www.youtube.com/watch?v=KO2bNK9L7WA
- Google, “Making sure AI chips don’t overheat in space” (YouTube): https://www.youtube.com/watch?v=ktdbUIZKeSE
