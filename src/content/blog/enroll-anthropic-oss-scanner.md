---
title: "How to Enroll Your Open-Source Project in Anthropic OSS Scanner"
description: "Step-by-step guide for open-source maintainers to enroll in Anthropic's free OSS Scanner: eligibility, project.yaml, Dockerfile, threat model, and validation steps."
pubDate: 2026-10-10T14:00:00
heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["developer", "tutorials", "security", "ai-tools"]
noindex: false
---

Anthropic launched OSS Scanner on October 8, 2026, as part of its Cyber Mission. Eligible open-source projects can opt in for free, periodic vulnerability scans from Anthropic's strongest models, including Claude Mythos. Reports arrive faster because they skip human review, but maintainers must still check findings and patches themselves.

This guide walks core maintainers through the official enrollment process using Anthropic's public GitHub repository.

## What OSS Scanner Provides

OSS Scanner builds on lessons from Project Glasswing, where Anthropic scanned widely used open-source projects and reported human-reviewed findings through its coordinated vulnerability disclosure process. By October 2026, the team had reviewed more than 6,000 such reports. Some maintainers requested the full unreviewed batch so they could act sooner.

Enrolled projects receive model-generated reports that include a self-contained reproducer, an explanation of the issue (sometimes with a bisection), and a candidate patch when the model can produce one. Anthropic does not apply a 90-day disclosure deadline to these unvalidated findings and does not publish them. If a finding is later validated under the standard CVD process, normal disclosure rules may apply after notice.

The service targets projects that already handle verified high- and critical-severity reports and have capacity for additional findings. Projects without that capacity continue to receive only human-verified disclosures.

![Developer reviewing code on a laptop](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Eligibility Requirements

Anthropic accepts projects using criteria similar to Google's OSS-Fuzz. It looks for established projects with a critical impact on infrastructure and user security. Factors include exposure to remote attacks (such as libraries that process untrusted input) and the number of users or dependent projects.

Each request is reviewed case by case. Anthropic manually confirms that the applicant is a core maintainer before merging the pull request. Maintainers should add a short note in the pull request explaining the project's importance if it is not obvious.

Eligibility may tighten if demand is high. The service is free and funded through Anthropic's Defender Advantage Fund.

## Prepare the Configuration

Enrollment happens by opening a pull request to the [anthropics/oss-scanner](https://github.com/anthropics/oss-scanner) repository. You add one directory under `projects/<project-name>/` containing at least a `project.yaml` file.

Start from the official template. Required fields are:

- `repo`: the Git URL to clone (append `#branch` to pin a branch if needed). The repository does not have to be on GitHub.
- `primary_contact`: one email address that receives reports and build failure notices. Use an address suitable for public listing, such as a security alias.

Optional fields include `auto_ccs` (additional addresses), `homepage`, `disabled` (set to true to pause reports), `pgp` (an armored OpenPGP public key for encrypted reports), `dockerfile`, and `threat_model`.

Email addresses appear in the public repository. If you supply a PGP key, reports go only to the primary contact and `auto_ccs` is not allowed.

## Supply a Dockerfile

The scanner builds your project in an isolated virtual machine. The build stage has network access so dependencies can be installed. The subsequent security audit runs with no internet access.

You must provide a Dockerfile in one of two ways:

1. Place it in your own repository (recommended path such as `.oss-scanner/Dockerfile`) and set the `dockerfile` field in `project.yaml`. This lets you update the build later without another pull request to the enrollment repository.
2. Place a file named `Dockerfile` next to `project.yaml` inside `projects/<project-name>/` and omit the `dockerfile` key.

The Dockerfile should install all dependencies and build the project so that tests can run offline. Anthropic recommends verifying that your test suite passes inside the finished image before submitting the pull request.

![Code on a computer screen](https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80)

## Add an Optional Threat Model

A `threat_model.md` file is optional but strongly recommended. It has no fixed format. Useful sections include:

- A description of the project and where untrusted input enters.
- Components that are in scope versus out of scope.
- A severity rubric (for example, how you rate post-authentication SQL injection or buffer overflows without a demonstrated exploit).
- Preferences for report format, patch style (minimal proof-of-concept versus merge-ready), and proof-of-concept detail.
- Guidance on deduplication.

You can place the file in your repository and point to it with the `threat_model` field, or place `threat_model.md` next to `project.yaml`. You can update the file between scans if you want to change how reports are generated.

Without a threat model the scanner makes its own judgments, which can lead to inflated severity ratings or findings outside your threat model.

## Validate Before Opening the Pull Request

Clone the oss-scanner repository locally. You need Git, Docker, and Python 3 with PyYAML (`pip install pyyaml`).

Run two checks:

- `tools/validate.py` examines your `projects/<name>/` directory against the rules.
- `tools/check <name>` builds the project the same way the scanner will and opens a shell in the finished image with no network. Confirm that tests pass. The `--qemu` option runs the same check inside virtual machines on Linux x86-64.

These tools install Claude Code into the image. Only check projects you trust, or use an isolated machine, because the build stage has network access.

After validation, open a pull request that adds only the `projects/<project-name>/` directory. Anthropic reviews enrollment pull requests; it does not accept changes to tools or templates. A human confirms maintainer status before merging.

## What Happens After the Merge

Once merged, the scanner imports the project, builds it online in an isolated VM, then moves the VM to a network with no internet access for the audit. If the build fails, Anthropic emails the primary contact with an error so you can correct the Dockerfile.

Findings are emailed to the primary contact and any CCs. Each report includes reproduction steps and a proposed patch when available. Agents in the pipeline double-check bugs, propose patches, and perform root-cause analysis.

Subsequent scans look for newly introduced issues and any earlier findings that were missed. Frequency depends on the number of enrolled projects, project reach, and other factors. Anthropic does not guarantee a fixed schedule.

You can pause reports by setting `disabled: true` in a follow-up pull request, or remove the directory entirely to withdraw. After withdrawal you return to receiving only standard CVD reports.

## Tips for Useful Reports

- Write a clear threat model that states severity preferences and out-of-scope areas. This reduces noise.
- Keep the Dockerfile minimal and reproducible. Anything required for tests must be fetched during the build stage.
- Reply to report emails with feedback. Anthropic monitors the mailbox and uses maintainer input to improve the scanner.
- If you fix a reported issue, consider adding a credit line such as “Discovered by Anthropic's OSS Scanner, as vulnerability ANT-2026-XXXX.” This helps Anthropic track impact.
- Apply separately for free Claude Max subscriptions through Claude for Open Source if you need additional capacity to triage and patch findings. Qualifying security professionals can also explore the Cyber Verification Program for expanded model access. See our guide on [how to apply for the Claude Cyber Verification Program](/blog/apply-claude-cyber-verification-program/).

## Limits and Next Steps

Reports are model-generated without human triage, so some will be incorrect, duplicated, or incorrectly rated. An early evaluation of 97 critical- and high-severity findings across 48 projects found that 85 met Anthropic’s CVD bar, 11 were real duplicates, and one was invalid. Maintainers remain responsible for verification and prioritization.

The service is a first step. Anthropic plans to expand faster delivery of findings, explore automated triage and patching for projects that want it, and research more secure architectures. It continues to support foundations such as the Python Software Foundation, OpenSSF, and the Apache Software Foundation.

If your project meets the criteria and you have capacity to review additional reports, enrollment is straightforward once the configuration and build are validated.

## Sources

- [Introducing the Anthropic Cyber Mission](https://www.anthropic.com/news/anthropic-cyber-mission)
- [Launching an opt-in vulnerability-finding service for open-source software](https://www.anthropic.com/research/launching-opt-in-vuln-finding-service-for-open-source)
- [OSS Scanner](https://red.anthropic.com/oss-scanner)
- [anthropics/oss-scanner GitHub repository](https://github.com/anthropics/oss-scanner)

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/0SgCiUfoYo8"
    title="Find and fix security vulnerabilities with Claude"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
