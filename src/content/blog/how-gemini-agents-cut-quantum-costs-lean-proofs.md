---
title: "How Gemini Agents Cut Quantum Costs with Lean Proofs"
description: "Guide to Google DeepMind Gemini 4 agents optimizing quantum algorithms with Lean formal proofs, cutting costs up to 290x."
pubDate: 2026-11-25T11:30:00
heroImage: "https://images.unsplash.com/photo-1737505599159-5ffc1dcbc08f?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai", "gemini", "tutorials", "how-to", "developer"]
noindex: false
---

Google DeepMind announced on November 23, 2026 that teams of Gemini 4 agents improved well-known quantum algorithms and proved every result correct in the Lean theorem prover. The biggest gain was a 290	imes reduction in the cost of an arcsin arithmetic routine. Other improvements reached 11.8× for a fusion simulation and 2.5× for a drug-metabolism enzyme model.

These circuits are still too large to run on today’s hardware or to simulate classically. Formal proofs replace testing. Researchers set the problems and supervised the agent teams. The Lean library, problem specifications, and verified solutions are open-sourced on GitHub.

This guide explains the method, the results, how the agent teams worked, and how you can explore the released materials.

## Why quantum circuits need formal proofs

Large quantum circuits that matter for science cannot be fully tested today. Classical computers cannot simulate them at the required scale. Current quantum processors are too small. DeepMind’s agents therefore proved correctness and resource cost mathematically inside Lean.

The cost metric is spacetime volume: logical qubits multiplied by the number of expensive T-gates. Lower spacetime volume means fewer resources for future fault-tolerant quantum computers. Every candidate circuit entered a shared notebook only after Lean accepted the proof.

![AI chip on a circuit board](https://images.unsplash.com/photo-1744640326166-433469d102f2?auto=format&fit=crop&w=800&q=80)

## How the Gemini agent teams operated

For each problem DeepMind gave the task to several independent agent teams built on Gemini 4. Teams proposed algorithmic improvements. A successful idea had to pass Lean verification before it joined the shared notebook. Every four hours agents from the teams met in a virtual conference to trade and compare ideas. As better ideas accumulated, the measured cost of the best circuit fell until the experiment ended.

Researchers chose the target applications and supervised progress. The approach is not limited to the problems shown. The same agent-plus-proof setup can accelerate other quantum algorithm research.

## The reported improvements

DeepMind published five headline results in the blog post and the accompanying arXiv paper (2611.09822):

- Inertial confinement fusion property: 11.8× lower computing cost and memory reduced from 5,650 to 4,338 error-corrected qubits.
- Photochemistry simulation of a common light-sensitive molecule: 8× cheaper by simplifying particle-position and force tracking.
- Cytochrome P450 enzyme (drug metabolism): 2.5× improvement and memory cut from 481 to 333 qubits by replacing bulky lookups.
- Specific implementation of Grover’s algorithm: 2.57× speedup (fewer expected oracle rounds in multi-target search).
- Fixed-point arcsin routine: 290× reduction in spacetime cost (from more than 1.08×10⁸ down to 3.70×10⁵). This building block loads numbers into quantum states for many other algorithms.

All figures are DeepMind’s own measurements against the baselines they used. Independent replication has not yet appeared. Running the optimized circuits in full scientific simulations would still require more resources than the first error-corrected quantum computers are expected to provide. The gap narrows but does not close.

![Abstract diagram of quantum computing concepts](https://images.unsplash.com/photo-1717501218456-c4789b65fc21?auto=format&fit=crop&w=800&q=80)

## Access the open-source Lean library

DeepMind open-sourced the Lean library for quantum algorithms, the problem specifications, and the verified solutions. The repository is at github.com/google-deepmind/formal-quantum-computation under the Apache-2.0 license. A separate discoveries branch holds the programs found by the agents.

To explore:

1. Clone the repository.
2. Install Lean 4 and the required dependencies listed in the README.
3. Open the problem specifications to see the target cost functions and constraints.
4. Load a verified solution and examine the formal proof of correctness and resource bounds.
5. Experiment with the library’s quantum Hoare logic primitives to write or verify your own small circuits.

The library is intended for researchers and developers who already work with formal verification or quantum algorithms. Beginners can still read the blog post and paper for the high-level method.

## Tips for following the work

- Read the DeepMind blog first for the accessible summary, then the arXiv paper for technical detail.
- Check the GitHub repository for the latest library updates and the discoveries branch.
- Note the difference between spacetime cost (qubits × T-gates) and simpler qubit counts. Both matter for future hardware.
- Remember that these are algorithm improvements proved on paper, not results from a running quantum computer.
- Similar agent-plus-proof techniques appear in other DeepMind projects. Compare the reliability focus in the recent Humanity’s First Exam benchmark: [How to Understand Google’s HFE Benchmark](/blog/how-to-understand-google-hfe-benchmark-guide/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/o48LGppB8ok"
    title="Can AI Prove Its Own Quantum Gains? Gemini 4 Teams Verify Results in Lean"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Gemini 4 agent teams, working under Lean verification and periodic idea exchange, produced measurable reductions in the estimated cost of several quantum algorithms. The largest single gain was the 290× improvement on the arcsin routine. Fusion, photochemistry, and enzyme simulations also improved. Because the circuits cannot be tested directly, formal proofs supply the confidence. The open-source Lean library lets others inspect, reuse, and extend the results.

Researchers still set the scientific direction. Agents handle the search and the proof checking. The combination compresses work that previously required years of manual design. Future error-corrected quantum computers will still need more capacity than these optimized circuits currently demand, but the resource estimates are now lower than the prior published constructions.

## Sources

- Google DeepMind blog, “Finding faster quantum algorithms with agents and formal verification,” Sergey Shirobokov, Ben Jaderberg and Ryan Babbush, 23 November 2026: https://deepmind.google/blog/finding-faster-quantum-algorithms-with-agents-and-formal-verification/
- arXiv paper 2611.09822, “Discovering formally verified quantum programs with AI”: https://arxiv.org/abs/2611.09822
- Lean library repository: https://github.com/google-deepmind/formal-quantum-computation
