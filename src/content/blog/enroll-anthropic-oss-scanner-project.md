---
title: "Enroll an Open-Source Project in Anthropic OSS Scanner"
description: "How maintainers enroll in Anthropic OSS Scanner: project.yaml, a Dockerfile, threat model, and what model-generated reports include."
pubDate: 2026-10-09T13:30:00
heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["security", "developer", "how-to", "ai-tools"]
noindex: false
---

Anthropic opened OSS Scanner on 8 October 2026 as part of the Anthropic Cyber Mission. Eligible open-source projects can opt in for free, periodic scans from Anthropic's strongest models. Reports are emailed with a proof of concept and, when the model can produce one, a suggested fix.

This is not a general bug bounty and it is not a human-reviewed disclosure program. Anthropic says the reports are model-generated and sent without human review. Maintainers who cannot triage at that volume should stay on the existing coordinated vulnerability disclosure path instead.

If you already use Claude for defensive work, the related [Cyber Verification Program walkthrough](/blog/apply-claude-cyber-verification-program/) covers expanded model access. OSS Scanner is a separate enrollment, done with a pull request to Anthropic's public repo.

## What OSS Scanner is, and who it is for

The service sits under the open-source half of the Cyber Mission. The other half is the Critical Infrastructure Defense Program, which works with operational-technology providers rather than public Git repositories.

OSS Scanner is modeled on Google's OSS-Fuzz. Anthropic builds the project in an isolated virtual machine, then runs the audit with no internet access. Findings go to the address in `primary_contact`, plus any addresses listed under `auto_ccs`.

Eligibility follows a similar bar to OSS-Fuzz. Anthropic says projects should have a critical impact on infrastructure and user security, and that it decides case by case. A small personal app is unlikely to be accepted. Widely used libraries, runtimes, and infrastructure components are the intended audience.

Anthropic expects a true-positive rate above 90 percent, and it says some reports will still be wrong, including severity ratings. There is no 90-day disclosure clock on these findings, and Anthropic says it will not publish them. That is because a human has not reviewed the report before it reaches you.

![Server racks in a data center, the kind of infrastructure open-source libraries often sit under](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80)

## What you need before you open a pull request

Core maintainers enroll by adding one directory to [github.com/anthropics/oss-scanner](https://github.com/anthropics/oss-scanner):

```text
projects/<name>/
```

That directory needs a `project.yaml`. It also needs a Dockerfile, either in your own repository or next to `project.yaml` in Anthropic's repo. A threat model is optional, but Anthropic calls it strongly recommended.

You need git, Docker, and Python 3 with PyYAML if you want to run the local checks. The `--qemu` path needs Linux on x86-64 with QEMU instead of Docker.

Email addresses in `project.yaml` are public. Use a security alias you are willing to publish. If you want encrypted reports, add an armored OpenPGP public key. PGP cannot be combined with `auto_ccs`. Encrypted mail goes to `primary_contact` only.

## Step 1: Copy the project template

Fork or clone `anthropics/oss-scanner` and start from `templates/project.yaml`. The README documents this shape:

```yaml
repo: https://github.com/example/project
primary_contact: security@example.org
auto_ccs:
  - maintainer@example.org
homepage: https://example.org
disabled: false
dockerfile: .oss-scanner/Dockerfile
threat_model: .oss-scanner/threat_model.md
```

`repo` and `primary_contact` are required. Append `#branch` to `repo` if you want a specific branch pinned. `dockerfile` is required unless you place a file named `Dockerfile` beside `project.yaml` in the enrollment repo and omit the key.

Prefer the in-repo Dockerfile. You can then change the build without another pull request to Anthropic. If you do not want extra files in your tree, put `projects/<name>/Dockerfile` in the scanner repo and leave the `dockerfile` key out.

The threat model works the same way. Set `threat_model` to a path in your repository, or drop `threat_model.md` next to `project.yaml`.

## Step 2: Write a Dockerfile that finishes offline

The Dockerfile installs dependencies and builds the project. That first build runs with network access. Everything after it, including the security audit, runs with no internet.

Fetch every package, test fixture, and toolchain the scanner might need during the image build. If a test tries to download a dependency later, it will fail. Anthropic recommends checking that tests pass inside the finished image.

`tools/check` also installs Claude Code into the image, the same way the scanner does. Claude Code is covered by its own terms. Treat the check host as untrusted for anything you would not expose to a build that can reach your local network.

## Step 3: Write a threat model the scanner can use

Anthropic says a written threat model is where maintainers explain severity. Examples in the README include whether post-authentication SQL injection is high or critical, whether a buffer overflow without a demonstrated exploit is capped at high, and when stored cross-site scripting is medium, high, or critical.

Also state what the project does, where untrusted input enters, which components matter, and what is out of scope. You can describe how you want reports and patches to look. The model has the code. It does not have the design decisions that live only in maintainer notes unless you write them down.

![Developer reviewing source code on a laptop before a security scan](https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=800&q=80)

## Step 4: Validate, then open the pull request

From a checkout of the scanner repo, Anthropic suggests two commands before you open the pull request:

1. `tools/validate.py` checks `projects/<name>/` against the config rules.
2. `tools/check <name>` builds the project the way the scanner will and opens a shell in the finished image with no network.

`tools/check --qemu <name>` repeats that build inside virtual machines laid out like the scanner's. With `--qemu`, the build stays off your files, but it can still reach services on your computer and your local network. Only check projects you trust, or use a machine with nothing sensitive on it.

Open a pull request that adds only `projects/<name>/`. Anthropic says it reviews and merges enrollment pull requests under that path. It does not accept other contributions, including changes to `tools/` or `templates/`.

## What happens after the merge

Anthropic describes three steps:

1. The scanner imports the project, builds it online in an isolated VM, then moves that VM onto a network with no internet. If the build fails, it emails `primary_contact` with the error.
2. It scans the project for vulnerabilities.
3. Findings are emailed to `primary_contact` and any CCs, with reproduction steps and a proposed patch where one is available.

Each report is meant to include a self-contained reproducer, an explanation, and a bisection of when the bug was introduced when that is possible. The research post says the same package also includes a candidate patch when the model can produce one.

You can edit the enrollment with another pull request. Set `disabled: true` to pause reports without leaving the program. Delete `projects/<name>/` to withdraw.

## How this differs from human-reviewed disclosure

Under Project Glasswing, Anthropic scanned hundreds of widely used projects, had people triage many findings, and reported them privately through its coordinated vulnerability disclosure process. Some maintainers with capacity to triage at scale asked for everything the models found, reviewed or not. OSS Scanner is the response to that request.

Projects that cannot keep up still get human-verified disclosures. Anthropic is explicit that the new service is for teams that can absorb unreviewed mail.

The company has funded the Python Software Foundation, the Apache Software Foundation, and Alpha-Omega and OpenSSF through the Linux Foundation. It also supports Akrites and Gold Eagle, which collect reports from many sources so maintainers are not flooded. The Defender Advantage Fund, launched in August 2026, is what Anthropic says keeps OSS Scanner free.

Maintainers can separately apply for free Claude Max seats through Claude for Open Source, and for the Cyber Verification Program if they want expanded defensive access to Claude's cyber capabilities.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/sDpkV_iEnck"
    title="Find and fix security vulnerabilities with Claude"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips before you enroll

Treat the first reports as drafts. Anthropic has already heard that severity can be inflated and that the scanner can misunderstand a project's threat model. A short `threat_model.md` is the cheapest way to push back on that.

Do not point `primary_contact` at a personal inbox you will ignore. Build failures and findings both land there.

Keep the Dockerfile boring. Pin the base image, install only what the build and tests need, and confirm the offline shell from `tools/check` can still run your tests.

If a finding looks real, reproduce it yourself before you ship a patch. The suggested fix is model-generated. The same caveat applies to the proof of concept.

Vendors that secure power, water, factories, or transport are on a different form. The Critical Infrastructure Defense Program interest form is for companies that build security products or services for that equipment, not for library maintainers.

## What to do next

Read the enrollment rules on [red.anthropic.com/oss-scanner](https://red.anthropic.com/oss-scanner) and the launch note on Anthropic's research blog. Clone `anthropics/oss-scanner`, copy the template, and run `tools/validate.py` before you ask for a review.

If the project cannot staff triage, do not enroll. Wait for a human-verified report under the existing disclosure policy, or apply for Claude for Open Source if the gap is access to the model rather than inbound mail.

## Sources

- Anthropic, "Introducing the Anthropic Cyber Mission," 8 October 2026: https://www.anthropic.com/news/anthropic-cyber-mission
- Anthropic, "Launching an opt-in vulnerability-finding service for open-source software," 8 October 2026: https://www.anthropic.com/research/launching-opt-in-vuln-finding-service-for-open-source
- Anthropic OSS Scanner repository README: https://github.com/anthropics/oss-scanner
- OSS Scanner service page: https://red.anthropic.com/oss-scanner
- Claude, "Find and fix security vulnerabilities with Claude": https://www.youtube.com/watch?v=sDpkV_iEnck
