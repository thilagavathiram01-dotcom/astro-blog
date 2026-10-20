---
title: "How to Migrate COBOL Code with GPT-6.1 Sol"
description: "Step-by-step guide to using GPT-6.1 Sol for COBOL migration, based on OpenAI's new evaluations showing 86.6% to 97.9% accuracy."
pubDate: 2026-10-20T14:00:00
heroImage: "https://images.unsplash.com/photo-Skf7HxARcoc?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "chatgpt", "tutorials", "developer", "ai"]
noindex: false
---

COBOL still powers critical systems. OpenAI reports that more than 40% of online banking systems, 80% of in-person credit card transactions, and 95% of ATM transactions rely on it. Fortran handles weather forecasting and nuclear reactor safety analysis. These languages have less training data than Python or JavaScript, so models have historically struggled with them.

On 19 October 2026, OpenAI published results showing large gains. GPT-6.1 Sol reached 86.6% accuracy on a COBOL migration evaluation at low reasoning effort (versus 5.4% for GPT-5.6 Sol) and 97.9% at higher effort. GPT-6 Astra averaged 87.4% on MultiLangBench across 20 languages. This guide explains what the evaluations measure and how to apply the models to a real migration pilot.

## What the evaluations actually test

OpenAI built two complementary tests. MultiLangBench asks a model to implement a SQLite-compatible database engine from scratch in one of 20 languages, including COBOL, Fortran, OCaml, and Visual Basic. The model receives documentation in an offline environment with no existing SQLite binaries. Scoring uses database files as the shared interface: the program must process an initial database and a SQL query so that a reference SQLite check confirms the expected contents. About 24,000 of SQLite's roughly 51,000 TCL tests were converted for this format. A wrong language scores zero.

The second evaluation migrates existing COBOL programs to C++, Java, Kotlin, Python, or Rust. Success requires byte-for-byte parity on hidden tests for observable outputs. COBOL's fixed-point arithmetic discards excess decimal digits unless rounding is requested. A rewrite that rounds instead can compile and run yet produce different financial results. The evaluation only counts a migration as successful if every test passes.

![Colorful code displayed on a computer monitor](https://images.unsplash.com/photo-zUrEj_OwLQM?auto=format&fit=crop&w=800&q=80)

## Key results from the October 19 post

On MultiLangBench at maximum reasoning effort:

- GPT-6 Astra: 87.4% average test pass rate (GPT-5.6 Sol: 26.8%). Scores above 83% in 19 of 20 languages. COBOL improved from 10.9% to 72.1%. Fortran from 21.4% to 83.5%. Visual Basic from 27.5% to 89.4%. OCaml from 25.6% to 85.8%.
- GPT-6 Luna: 40.3% average, at roughly 78% lower estimated API cost ($0.77 versus $3.48 per sample).

On the COBOL migration evaluation:

- GPT-6.1 Sol at low reasoning effort: 86.6% accuracy (GPT-5.6 Sol: 5.4%), at about 61% of the API cost.
- At higher reasoning effort: 97.9%.

OpenAI released the MultiLangBench setup, test suite, and per-language results on GitHub. The COBOL migration evaluation itself is not public. Production use still requires expert review and testing against business rules and dependencies.

## Step-by-step pilot for a COBOL migration

Start small. Pick one bounded program or module with clear inputs, outputs, and known business rules. Record its current behavior on representative data, including edge cases such as missing records or rounding boundaries.

1. Prepare the source. Extract the COBOL program and any related copybooks or data layouts. Remove secrets. Create a minimal test harness that runs the original program and captures its outputs.

2. Choose the target language. The evaluation tested C++, Java, Kotlin, Python, and Rust. Pick the one your team already maintains. Note COBOL-specific behaviors that must be preserved (fixed-point arithmetic, record handling).

3. Prompt the model. Use GPT-6.1 Sol or GPT-6 Astra through the API or ChatGPT. Supply the COBOL source, the target language, a description of the required behavior, and example inputs/outputs. Ask for a complete, compilable program that preserves byte-for-byte observable results on the provided cases. Request comments that map COBOL constructs to the new code.

4. Compile and run. Build the generated program in a clean environment. Execute the same test cases. Compare outputs exactly. Investigate any differences, especially around decimal handling or error paths.

5. Iterate. Feed failures back with the mismatched cases. Ask the model to adjust only the failing logic. Keep the original COBOL as the oracle.

6. Expand coverage. Add more test cases from production-like (de-identified) data. Include the edge cases that matter for your domain. Review the generated code for maintainability and security.

7. Human review. Have a developer familiar with both languages inspect the result before any further integration. OpenAI notes that the evaluations do not replace this step.

For agent-style workflows that navigate documentation or tools during the process, see the guide on [running browser tasks with the Agents API computer use](/blog/agents-api-computer-use-browser-tasks/).

![Developer workstation with dual monitors showing code](https://images.unsplash.com/photo-S8E1yLUNAw8?auto=format&fit=crop&w=800&q=80)

## Practical tips

- Prefer higher reasoning effort for the first pass on complex modules; drop to lower effort once the pattern is clear to control cost.
- Preserve the original test oracle. Never treat model output as ground truth until the hidden (or your own) tests match.
- Document COBOL quirks explicitly in the prompt: decimal truncation rules, default handling of missing fields, and any packed decimal or binary data layouts.
- Run MultiLangBench yourself if you want to measure language-specific performance. The repository is at github.com/openai/MultiLangBench.
- Budget for review time. Even at 97.9% on the evaluation, the remaining cases can be the ones that affect money or safety.
- Start with non-production copies. Verify side-by-side before any cutover.

## Watch AI agents on legacy modernization

IBM Developer shows how AI coding agents extract business rules, map architecture, and modernize RPG code in a connected legacy environment. The principles transfer to COBOL pilots.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/ulID1qBBz4o"
    title="How AI Coding Agents Modernize Legacy Applications"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

GPT-6.1 Sol and related models now clear a much higher bar on COBOL migration and multi-language construction than previous generations. The jump from 5.4% to 86.6% (and 97.9% with more reasoning) on OpenAI's behavior-preserving test is measurable. MultiLangBench, now open on GitHub, lets teams inspect the same standard for their own languages.

Treat the numbers as evidence for a controlled pilot, not as a green light for unreviewed rewrites. Preserve the original program's observable behavior, expand test coverage, and keep human experts in the loop. That combination turns the evaluation results into practical progress on systems that still run essential services.

## Sources

- [Advancing coding in low-resource programming languages](https://openai.com/index/low-resource-programming-languages/) — OpenAI, 19 October 2026
- [MultiLangBench repository](https://github.com/openai/MultiLangBench) — OpenAI on GitHub
- [How AI Coding Agents Modernize Legacy Applications](https://www.youtube.com/watch?v=ulID1qBBz4o) — IBM Developer
