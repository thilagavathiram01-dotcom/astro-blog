---
title: "Gemini Robotics 2.5: Dexterity Gains and Factory Success Rates"
description: "Gemini Robotics 2.5 delivers 30-100% higher success rates on 200+ tasks and 96% accuracy on Mercedes-Benz production lines with Apptronik Apollo 2."
pubDate: 2026-11-10T14:00:00
heroImage: "https://images.unsplash.com/photo-1786033295800-1e990639d3e8?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai", "gemini", "tutorials"]
noindex: false
---

Google DeepMind released Gemini Robotics 2.5 on November 10, 2026. The model is the most capable vision-language-action system the team has published. It raises success rates on dexterous tasks by 30 to 100 percent versus prior baselines and finishes those tasks 20 to 30 percent faster.<grok type="render_inline_citation" citation_id="155" />

The release targets three practical gaps: finer manipulation of everyday objects, reliable performance outside the lab, and stronger safety controls when robots share space with people. DeepMind is rolling the model out to existing robotics partners rather than opening a public API.

![Humanoid robot head with mechanical components](https://images.unsplash.com/photo-1786033295800-1e990639d3e8?auto=format&fit=crop&w=800&q=80)

## What Gemini Robotics 2.5 Changes

Gemini Robotics 2.5 is a vision-language-action model. It takes camera frames and language instructions and outputs motor commands for arms, grippers, or full humanoid bodies. It pairs with Gemini Robotics ER, the embodied reasoning model that tracks multi-step workflows and decides when to move to the next action.<grok type="render_inline_citation" citation_id="155" />

DeepMind evaluated the model on more than 200 distinct tasks. Examples include serving food with tongs, tying a bow on a gift box, and pipetting liquid in a lab setting. These require tool use, handling of deformable materials such as ribbon, and careful treatment of delicate objects.

Compared with previous baselines, success rates rose 30 to 100 percent depending on the task. Completion times dropped 20 to 30 percent. The model works natively with different embodiments, including Apptronik’s Apollo 2 humanoid (with a 22-degree-of-freedom SharpaWave hand) and the Franka Duo platform with parallel grippers.<grok type="render_inline_citation" citation_id="155" />

## Factory Proof of Concept at Mercedes-Benz

DeepMind partnered with Apptronik and Mercedes-Benz to test the system on active production lines in Kecskemét, Hungary, and Sindelfingen, Germany. Apollo 2 humanoids performed automotive kitting: sorting individual parts from bulk bins into sequenced trays for the assembly line.

The embodied reasoning model kept track of the overall workflow. Gemini Robotics 2.5 controlled the hands and arms. The robot reached into bins, picked metal brackets, and placed them correctly while correcting for gaps. The pilot reached a 96 percent success rate.<grok type="render_inline_citation" citation_id="155" />

Apptronik CEO Jeff Cardenas noted that the models improved quickly with post-training and transferred to the Mercedes-Benz environment with little drop-off. The work shows robots can take on repetitive physical tasks and free technicians for higher-skill assembly steps.

![Industrial robotic arm on a factory floor](https://images.unsplash.com/photo-1752614671052-92e18f534db1?auto=format&fit=crop&w=800&q=80)

## Safety Improvements and the ASIMOV-Jailbreak Benchmark

Robots that leave controlled labs face obstacles, nearby people, and adversarial instructions. Gemini Robotics 2.5 adds inference-time reasoning guidance that steers the robot away from physical hazards in real time. Evaluations showed a 33 percent boost in safe task completion around obstacles and a 43 percent boost around people.<grok type="render_inline_citation" citation_id="155" />

DeepMind also released ASIMOV-Jailbreak, an open-source benchmark with hundreds of prompts that disguise unsafe requests across dozens of scenes. The dataset is available on Hugging Face. When Gemini 4 Argon sits in the loop, jailbreak resistance reaches 99.5 percent. Gemini Robotics ER 2 alone scores 82 percent on the same set.<grok type="render_inline_citation" citation_id="158" />

The combination of physical steerability and an open adversarial benchmark gives researchers a clearer way to measure and improve robot behavior before wider deployment.

## How Gemini 4 Argon Accelerated Training

Physical training data remains scarce. Gemini 4 Argon acted as a simulation engine during development. From a single real-world camera view it generated thousands of varied practice runs and built realistic digital twins. Researchers combined those simulations with real demonstrations so the robot generalized faster to new scenes and objects.<grok type="render_inline_citation" citation_id="155" />

Argon also helped analyze failure videos, form hypotheses, and test fixes both in simulation and on real hardware. This shortened the cycle that normally takes months of physical data collection. For developers already using Argon in other workflows, the robotics results illustrate one concrete way frontier models can speed up embodied research. See our earlier guide on adding Gemini 4 Argon to Android apps with Firebase AI Logic for related model access details.

## Practical Takeaways for Teams

- Partner access is the current path. DeepMind is distributing Gemini Robotics 2.5 to its existing robotics partners rather than opening a general developer endpoint.
- Cross-embodiment support is built in. The same model checkpoint drives both humanoid platforms and bi-arm grippers, which reduces the cost of switching hardware.
- Safety evaluation is now public. Download the ASIMOV-Jailbreak dataset and run your own refusal tests before deploying any similar system near people.
- Simulation-first development pays off. Teams with access to Argon or similar models can generate large volumes of synthetic practice data from limited real footage.

![Blue industrial robotic arm on an assembly line](https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?auto=format&fit=crop&w=800&q=80)

## Watch the Official Capabilities

DeepMind published demonstration footage of whole-body control, dexterity, and multi-robot collaboration with earlier Gemini Robotics models. The same architectural approach underpins the 2.5 results.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/4lSQnrMC6nY"
    title="Gemini Robotics 2 brings whole body intelligence to robots"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Gemini Robotics 2.5 moves physical AI from lab demos toward measurable factory reliability. The 96 percent kitting success rate on Mercedes-Benz lines, combined with 30 to 100 percent gains on 200-plus dexterous tasks, gives partners concrete numbers to evaluate. The open ASIMOV-Jailbreak benchmark and the use of Gemini 4 Argon for simulation both lower barriers for further research.

Teams building humanoid or bi-arm systems should contact DeepMind partners or Apptronik for access details. Monitor the Hugging Face release of the jailbreak dataset and test refusal rates on your own scenes before any human-proximity trials.

**Sources**

- DeepMind blog: Gemini Robotics 2.5 accelerates real-world physical intelligence (November 10, 2026)
- Ars Technica: DeepMind reveals Gemini Robotics 2.5 and open safety benchmark “ASIMOV-jailbreak”
- Apptronik and Mercedes-Benz production line proof-of-concept results as reported by DeepMind
- ASIMOV-Jailbreak dataset on Hugging Face
