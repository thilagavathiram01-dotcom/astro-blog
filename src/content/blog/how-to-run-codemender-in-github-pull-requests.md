---
title: "How to Run CodeMender in Your GitHub Pull Requests"
description: "Wire Google’s CodeMender agent into GitHub PRs so it scans, verifies exploits, and proposes security fixes directly in the timeline."
pubDate: 2026-11-22T14:00:00
heroImage: "https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["security", "ai-tools", "tutorials", "developer", "google"]
noindex: false
---

Developers now ship more code than ever, yet the time to fix known flaws has stretched past 170 days on average. CodeMender, Google’s autonomous code-security agent, closes that gap by finding vulnerabilities, proving them with sandboxed exploits, and writing tested patches. A new reference architecture published on 10 November 2026 puts the entire loop inside your GitHub pull-request timeline.

You never leave the PR. A single comment lists findings. Slash commands trigger verification or fixes. Approval commits the patch and turns a status check green.

## Why Pull Requests Are the Right Place

Security tools fail when they force developers into another console. CodeMender’s design keeps every action on the same timeline reviewers already use. The agent posts a table of findings with stable IDs. Reply `/verify 612424da` and the exploit trace appears in a collapsible block. Reply `/fix 612424da` and a unified diff arrives, already attached to a draft pull request you can `/approve`.

Both commands accept `all` in place of a single ID. Branch protection can require the resulting `security/codemender-gate` status before merge, turning the gate from advisory to blocking.

![Developer at a multi-monitor coding workstation at night](https://images.unsplash.com/photo-1719400471588-575b23e27bd7?auto=format&fit=crop&w=800&q=80)

## How the Reference Architecture Works

A GitHub pull request triggers a Cloud Run service that runs `cm find` against the changed files. Results return as one comment. Verification and remediation jobs run as separate Cloud Run jobs, one per finding.

Authentication uses GitHub’s OIDC token exchange instead of stored secrets. The workload identity pool provider maps `google.subject` to the assertion subject and restricts the pool with an immutable `assertion.repository_id` condition. Repository names can change or be reclaimed; the numeric ID cannot.

Exploit code executes inside a second-generation Cloud Run microVM. The job receives a dedicated service account with almost no permissions, no registry access, and Direct VPC egress into a subnet that has no route out. Cloud Run sandboxes further isolate the process from the metadata server and environment variables. The instance starts, runs one verification, and exits. Only the verdict survives.

Google publishes the full starter kit at [codemender-gitops](https://github.com/GCP-Architecture-Guides/codemender-gitops-starter-kit).

## Step-by-Step: Get the Loop Running

1. Enable the Gemini Enterprise Agent Platform and CodeMender in your Google Cloud project. The public preview uses generally available Gemini models. Deeper scans that require Gemini Flash Cyber remain limited to Fairwind partners.

2. Create a workload identity pool and provider that trusts GitHub’s OIDC issuer. Set the attribute condition to your repository’s immutable ID so only that repo can exchange tokens.

3. Deploy the Cloud Run service and jobs from the reference architecture. Point the service at your repository and configure the GitHub App or fine-grained personal access token for the comment and status updates.

4. Add a GitHub Actions workflow that calls the service on pull-request events. The workflow itself never stores long-lived credentials.

5. Protect the main branch so the `security/codemender-gate` status is required for merge. Without this setting the gate remains advisory.

6. Open a test pull request that introduces a known vulnerable pattern. Confirm the comment appears, then exercise `/verify` and `/fix`.

Local CLI users can still run `cm find`, `cm verify`, and `cm fix` against a checkout. The PR integration simply moves those same commands into the review conversation.

## Verification and Patch Quality

`cm find` returns a confidence score. When the score is below 100 percent, `cm verify` builds and runs a proof-of-concept exploit inside the isolated sandbox. A successful exploit raises the severity and produces an audit trail stored in Cloud Storage. Failed or crashed runs must be labeled inconclusive rather than safe; otherwise the pipeline can fail open.

Once verified, `cm fix` generates a candidate patch, applies it in the sandbox, recompiles and retests the project, then re-runs the original exploit to confirm the flaw is gone. An LLM-as-a-judge step checks that the change does not break existing behavior. You can pass extra context so the generated code matches your team’s style.

Developers still approve every change. The agent never commits without the explicit `/approve` reply.

![Person working at a dual-monitor coding desk](https://images.unsplash.com/photo-1744555270794-6d378b9e7cd3?auto=format&fit=crop&w=800&q=80)

## Tips for Production Use

Keep the verification jobs completely ephemeral. One job per finding, no persistent state, no outbound network. Stream artifacts to Cloud Storage only after the job finishes.

Parse verification results carefully. A crashed mock server or timeout is not the same as a clean negative. Treat incomplete runs as inconclusive so real vulnerabilities are not silently cleared.

Use the CLI’s local sandbox for developer machines, but disable nested sandboxing if you already run inside Cloud Run or another container runtime. The official docs and community notes describe the exact flags.

Pair the PR loop with broader agentic defenses. Our earlier post on [defending against autonomous AI exploit pipelines](/blog/defend-against-autonomous-ai-exploit-pipelines/) covers the complementary monitoring and inventory steps that shrink the remaining exposure window.

## What the Developer Sees Day to Day

A pull request opens. Within minutes a comment appears with a table of findings, each carrying an ID and severity. The reviewer types `/verify` on the highest-confidence item. The trace returns in the same thread. If the exploit succeeds, the reviewer types `/fix`. A diff appears together with a draft pull request. After a quick look the reviewer replies `/approve`. The status check turns green and the branch can merge.

No context switch, no separate ticket, no long-lived credentials stored anywhere.

## Conclusion

CodeMender turns the growing volume of agent-generated code into a manageable security problem by keeping the find-verify-fix cycle inside the pull-request timeline developers already trust. The November 2026 reference architecture removes the last friction: authentication without secrets, isolated exploit execution, and a status gate that branch protection can enforce.

Start with the published starter kit, wire the OIDC condition to your repository ID, and protect the merge. The same agent that already upstreamed dozens of open-source fixes can now operate on every pull request your team opens.

## Sources

- Google Cloud Blog: How to run CodeMender in your pull requests (10 November 2026)
- Google Cloud Blog: Now in preview: Find and fix software vulnerabilities with CodeMender (July 2026)
- Gemini Enterprise Agent Platform CodeMender documentation
- Reference implementation: codemender-gitops starter kit

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/4DJD3RHOnPA"
    title="How to find & fix code vulnerabilities autonomously with Google CodeMender"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
