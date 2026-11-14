---
title: "How to Use Orchestrator in Google Antigravity with Gemini 4 Hydrogen"
description: "Step-by-step guide to using Orchestrator in Google Antigravity. Pair Gemini 4 Carbon or Argon with Hydrogen for faster coding and lower quota use."
pubDate: 2026-11-14T19:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "tutorials", "how-to", "developer"]
noindex: false
---

Google Antigravity rolled out Gemini 4 Hydrogen on 12 November 2026 along with a new Orchestrator mode. Orchestrator pairs a frontier planning model such as Gemini 4 Carbon or Argon with the faster Gemini 4 Hydrogen inside one session. The planner builds and repairs the plan while Hydrogen handles edits, package updates, and tests.

This setup aims for near-Carbon success rates while using about 24 percent less quota and finishing 19 percent faster on Terminal-Bench 4.1. You select it once from the model dropdown and the system handles the hand-offs automatically.

![Developer workspace with multiple monitors showing code](https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80)

## What Orchestrator does

Orchestrator differs from a static model router. A router picks one model at the start and sticks with it. Orchestrator switches dynamically within the same trajectory.

The planner model starts in a read-only phase. It explores dependencies, resolves ambiguities, and produces a concrete plan with explicit re-planning triggers. Hydrogen then takes over to write code, apply edits, update packages, and run builds or tests. If Hydrogen hits friction—such as a failing verification step or an unexpected interface—control returns to the planner. The planner inspects the state, repairs the plan, and hands execution back.

Google reports that this approach reaches near-Carbon task success rates on Terminal-Bench while consuming less quota and completing faster. The feature is available in the Antigravity app, the `agy` CLI, and IDE extensions.

## Who can use it

Access depends on your Google AI plan:

- **Orchestrator (Carbon)** pairs Gemini 4 Carbon with Hydrogen and is available to Google AI Ultra subscribers.
- **Orchestrator (Argon)** pairs Gemini 4 Argon with Hydrogen and is available to both Google AI Pro (paid or eligible trials) and Ultra subscribers.
- Standalone Gemini 4 Hydrogen is available to Google AI Pro and Ultra subscribers.

Enterprises can access the models through Gemini for business. Free and lower-tier plans do not currently include Orchestrator. Check the model selector after signing in with a qualifying account.

## Select Orchestrator in the app

1. Open Google Antigravity and sign in with a Google AI Pro or Ultra account.
2. Start or open a project that contains the repository you want to modify.
3. Locate the model selector under the conversation prompt box.
4. Choose **Orchestrator (Carbon)** if you have Ultra access, or **Orchestrator (Argon)** if you have Pro or Ultra.
5. Confirm the selection stays active for the conversation. You can switch models later if needed.

Once selected, type your task as usual. For example: “Add input validation to the signup form, update the related unit tests, and run the test suite.” The planner phase runs first, then Hydrogen executes.

![Close-up of code on a computer screen](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Use Orchestrator from the CLI

If you prefer the command line, the `agy` tool supports model selection.

List available models:
```
agy models
```

Start a session with Orchestrator:
```
agy --model Orchestrator
```

Or apply it to a single prompt:
```
agy -p "Refactor the authentication module for better error handling and add tests." --model Orchestrator
```

Inside an interactive session you can switch with:
```
/model Orchestrator
```

The choice persists across sessions when set via `/model`. Review the generated plan and diffs before accepting changes, the same way you would with any agent.

## When to choose Orchestrator versus standalone Hydrogen

Use Orchestrator for multi-step feature work or debugging that benefits from an explicit plan. Examples include:

- Implementing a new endpoint that touches several files and requires tests.
- Refactoring a module while preserving existing behavior.
- Debugging an intermittent failure that needs dependency analysis first.

Select Gemini 4 Hydrogen directly for routine tasks that do not need deep planning:

- Package upgrades.
- Boilerplate scaffolding.
- Writing unit tests for well-defined functions.
- Updating documentation or generating small scripts.

Hydrogen offers four thinking levels—low, medium, high (default), and xhigh—when used alone. Orchestrator uses a fixed configuration optimized for the planner-plus-executor flow.

For more on calling Hydrogen directly through the API, see the earlier guide on [how to use the Gemini 4 Hydrogen API](/blog/how-to-use-gemini-4-hydrogen-api-guide/).

## Tips for better results

Write clear prompts that state the goal, constraints, and how to verify success. Mention specific files or tests when possible. The planner uses that information to build a tighter plan.

Watch the hand-off points. If Hydrogen repeatedly fails a verification step, the planner will re-engage. You can also send a follow-up message while Hydrogen is working; it reports back to the planner for a progress check.

Review diffs carefully. Orchestrator reduces quota use but does not remove the need for human review, especially on security-sensitive or production changes.

If your account supports it, try Orchestrator (Carbon) on a longer task and compare token use and wall-clock time against running Carbon alone on a similar task.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/3tacaSEZM9M"
    title="Bug Triage with Gemini 4 Hydrogen and Gemini 4 Carbon"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Orchestrator in Google Antigravity gives you frontier planning quality without paying the full quota cost on every edit. Select it from the model dropdown or CLI, describe the task, and let Carbon or Argon plan while Hydrogen executes. The dynamic hand-off keeps the session on track when verification fails or the plan needs adjustment.

Start with a mid-sized change in an existing project so you can compare the result against a single-model run. Official details are on the [Antigravity blog post](https://antigravity.google/blog/gemini-4-hydrogen-in-google-antigravity/) and the [models documentation](https://antigravity.google/docs/models/).

## Sources

- [Gemini 4 Hydrogen and Orchestrator](https://antigravity.google/blog/gemini-4-hydrogen-in-google-antigravity/) — Google Antigravity Blog, 12 November 2026
- [Choose a model](https://antigravity.google/docs/models/) — Google Antigravity Docs
- [Introducing Gemini 4 Hydrogen](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/) — Google Blog, 12 November 2026
- [Bug Triage with Gemini 4 Hydrogen and Gemini 4 Carbon](https://www.youtube.com/watch?v=3tacaSEZM9M) — Google Antigravity YouTube channel
