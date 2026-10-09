---
title: "How to Catch Silent Agent Failures with Google AQuA"
description: "Set up Google AQuA, the Ambient Quality Agent, to sample production traces, cluster silent failures, and cite the deployed source."
pubDate: 2026-10-09T15:00:00
heroImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "developer", "google", "tutorials"]
noindex: false
---

Your agent can return HTTP 200, stay inside its latency budget, and still book the wrong seat. Google Cloud AI published AQuA, the Ambient Quality Agent, on 8 October 2026 to catch those silent conversation failures after launch.

AQuA is an open reference implementation in [google/adk-recipes](https://github.com/google/adk-recipes/tree/main/core/python/ambient-quality-agent). It runs beside your agent in a Google Cloud project, reads production trajectories, and never sits on the request path. This guide walks through what it checks, how Google attached it to travel-concierge, and what you should not expect it to auto-fix.

If you already ship browser agents, pair this outer loop with the patterns in our [computer-use browser tasks guide](/blog/agents-api-computer-use-browser-tasks/). Health checks will not tell you the task failed.

## Why green health checks miss agent bugs

Google's Cloud AI team says most teams hit about 80 percent task success on cases they already wrote, then flatten after launch. Users try new paths. Model, harness, tool, and skill updates still pass deploy checks while conversation quality moves.

A raw trace records what happened next to what. It does not say which layer caused the miss. Google lists four layers that can look the same from the outside:

- The model hallucinated an argument or dropped a constraint from earlier turns.
- The orchestration harness routed to the wrong sub-agent or lost state.
- A tool contract rejected an input because valid values were never in the schema.
- Instructions or skills never stated a rule someone assumed was obvious.

Online dashboards show that a score moved. A coding agent can read one trace. Nobody can read every production session. AQuA is the first pass: sample, grade, cluster, verify, and hand you a case file.

![Developer reviewing code on a laptop](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80)

## What one AQuA sweep actually does

AQuA pulls sessions from Cloud Trace, Cloud Logging, or BigQuery. It can run on a schedule, after a deploy, or on demand. Transcripts, source snapshots, and BigQuery tables stay inside your project. It does not write back to the agent.

Each sweep uses five stages:

1. **Sample.** A random sample of up to 1,000 recent sessions, capped so run cost stays predictable.
2. **Review.** Grade each session against a nine-point checklist covering procedure, tool selection and arguments, grounding, task completion, and related breakdowns. Failures become structured actual / expected findings. A plain-English `goal.md` is appended to every review prompt. Optional Python metrics in `eval_config.yaml` trend pass rates.
3. **Cluster.** Group findings that share the same failure mechanism.
4. **Verify.** A separate model checks each candidate cluster against up to three full transcripts and drops clusters the evidence does not support.
5. **Track.** Match survivors to open insights in BigQuery as NEW, RECURRING, or auto-RESOLVED after 14 days unseen.

The default judge is a single-pass `session_review` call per session. You can opt in to Gemini platform AutoRaters such as `task_success`, `tool_use_quality`, and `trajectory_quality` if you want the same rubrics as offline evals.

Root-cause analysis is separate. You start it from the dashboard Chat or `agents-cli aqua run`. AQuA reads failing trajectories next to an immutable source snapshot taken at deploy time. If the defect is in your repo, it cites `<path>:<start>-<end>` and proposes an edit. If the fault is an upstream dependency, handoff, or retrieved payload, it attributes that step and does not invent a diff. It never applies the edit or opens a pull request.

## Attach AQuA to an ADK agent

Google's walkthrough uses travel-concierge from adk-recipes. That agent routes across inspiration, place, planning, flight search, seat selection, booking, and trip-phase sub-agents, and stores the trip with `memorize(key, value)`.

They attach AQuA with three agents-cli commands after checking out the AQuA extension:

```bash
agents-cli extension add "${AQUA_CHECKOUT}"
agents-cli infra single-project --project="${GOOGLE_CLOUD_PROJECT}" --apply
agents-cli deploy --project="${GOOGLE_CLOUD_PROJECT}" --region us-east1
```

Deploy also writes an immutable snapshot of the agent source tree to Cloud Storage, keyed by revision. The runner, BigQuery dataset, and Cloud Run dashboard sit behind Identity-Aware Proxy.

On the dashboard Configuration page, save a developer goal in `goal.md`. Google uses it to point the review at product invariants and to suppress stylistic noise, while still requiring every finding to cite a concrete turn. Publish a deterministic rubric with:

```bash
agents-cli aqua metrics publish
```

To drive the same loop from Antigravity, Gemini CLI, Claude Code, or Cursor, install the `agents-cli-aqua` skill next to the inner-loop eval skill:

```bash
npx skills add https://github.com/google/agents-cli --skill google-agents-cli-eval
```

The AQuA skill lives at `skills/agents-cli-aqua/SKILL.md` in the reference checkout. The Developers Blog also documents a local dashboard preview on a synthetic month of runs, with no cloud project, credentials, or model calls. Use that path before you attach production telemetry.

![Circuit board close-up representing on-call diagnostics](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## What the travel-concierge sweep found

Google replayed four scripted traveler journeys into 32 sessions, producing 1,583 OpenTelemetry spans. Five sessions passed cleanly. Twenty-seven sessions produced 42 structured findings, each scoped to a sub-agent's instructions and tools.

One planning-agent finding is the seat case from the intro. The user picked outbound flight UA204 and asked for seats 3A and 3B in the same turn. planning_agent wrote those seat numbers into session state and never called flight_seat_selection_agent. The expected behavior was a seat-availability and pricing check first. The call still looked healthy: HTTP 200 and zero tool errors.

Clustering turned 42 findings into 9 candidate clusters. The verifier, Gemini 3.7 Flash, rejected 3 false positives. In two, the traveler had asked to take the first return flight or jump straight to booking. In the third, unrelated prompt-tool mismatches from flight_search_agent and inspiration_agent had been merged. Six verified issues remained. The top three:

- Seat-check bypass when the user volunteers a seat: 15 sessions on planning_agent.
- Dietary constraints dropped across a sub-agent boundary: 7 sessions. inspiration_agent had food_preference vegan, but place_agent is an isolated tool whose prompt never received that profile, so it suggested carbonara and Florentine steak.
- Prompt-to-toolset contradiction on poi_agent: 5 sessions. The prompt requires Google Maps Grounding Lite fields, but the agent is declared with `tools=[]`, so it invented example.com URLs.

Investigate on the top insight launched Gemini 3.8 Flash against Revision 1's 33-file snapshot. It pointed at line 93 of `travel_concierge/sub_agents/planning/prompt.py`: seat selection was only required when presenting a seat map, not when the user named a seat. The vegan handoff traced to line 23 of `travel_concierge/sub_agents/inspiration/prompt.py`.

After both one-line prompt fixes and a Revision 2 deploy, the same 32 sessions showed the seat bypass down 87 percent (15 sessions to 2), vegan omissions from 7 to 0, and full-session passes from 5/32 to 13/32. The untouched poi_agent `tools=[]` defect stayed in the queue.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/fOIGMZusCs8"
    title="Google ADK 2.0 workflows tutorial: Building reliable multi-agent systems"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

ADK workflows, covered in the Google Cloud Tech video above, decide the order of sub-agents. AQuA is what you run after those workflows meet live traffic.

## Cost, trust rules, and limits

Google published two sweep costs at standard Gemini platform pricing. A 96-session single-agent sweep (about 5 to 6 spans per session) cost $0.70 total, about $0.007 per session, using Gemini 3.1 Pro and Gemini 3.7 Flash. The 32-session travel-concierge sweep cost $3.76 total, about $0.12 per session: review and clustering on Gemini 3.1 Pro, plus nine cluster verifications on Gemini 3.7 Flash. On-demand root-cause diagnosis with Gemini 3.8 Flash cost $0.33 to $2.47 per insight, depending on how many full trajectories it pulled.

Trust rules are explicit because a model judge will be wrong:

- Clusters stay claims until they are checked against full transcripts. On an 87-trace internal benchmark, the verifier rejected 4 of 24 candidate clusters. The trace count is a priority hint, not proof that every member session failed the same way.
- There is no confidence field. Every occurrence links to Cloud Trace session IDs. Every root cause cites path and line ranges the server validates against that revision's snapshot. A citation to a missing file or line is rejected.
- Rejected clusters, the 50-cluster verification cap, rubric errors, and empty trace windows are recorded on the run. They are not counted as clean sessions.
- By-design behavior can be dismissed permanently so later sweeps do not reopen it as NEW.

Sampling is random, up to 1,000 sessions (`ORDER BY RAND()`). That will miss a silent 1 percent regression unless you add cheaper pre-filters. Whole-transcript review works for short chats and breaks on hundred-turn coding agents. `adk run --replay` resends recorded user turns, but it does not rebuild external state if a row changed or a later turn depended on an earlier model reply.

## Close the loop without auto-merging

Pull the insight, including anchored `edits[]` and trace rubrics, with `agents-cli aqua get-insight`. A coding agent can apply the edit on a branch, extract the failing user inputs into a local replay, and check the fix before anyone opens a pull request.

Keep three habits:

- Write `goal.md` around invariants users care about, not tone.
- Treat proposed diffs as drafts. Google's own demo left the empty tool list untouched until a human queued it.
- Re-sweep the same sessions after the next revision so RESOLVED means unseen for 14 days, not "we edited a prompt."

AQuA will not replace offline evals. Offline evals grade a candidate build on known cases. Online evals trend pass rates. AQuA turns raw production traffic into cited issues and archived transcripts you can feed back into that inner loop.

## Sources

- Google Developers Blog, 8 October 2026: [The Outer Loop, Insights First: An Ambient Quality Agent That Diagnoses Your Production Agent](https://developers.googleblog.com/the-outer-loop-insights-first-an-ambient-quality-agent-that-diagnoses-your-production-agent)
- Reference code: [ambient-quality-agent in google/adk-recipes](https://github.com/google/adk-recipes/tree/main/core/python/ambient-quality-agent)
- Agents CLI: [google/agents-cli](https://github.com/google/agents-cli)
- Related earlier post linked by Google: [Driving the Agent Quality Flywheel from Your Coding Agent](https://developers.googleblog.com/driving-the-agent-quality-flywheel-from-your-coding-agent/)
