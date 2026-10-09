---
title: "How Maintainers Enroll in Anthropic's OSS Scanner"
description: "Core maintainers can enroll an open-source project in Anthropic OSS Scanner. See eligibility, the project.yaml fields, and what reports include."
pubDate: 2026-10-09T14:30:00
heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["security", "developer", "tutorials", "how-to"]
noindex: false
---

Anthropic opened OSS Scanner on October 8, 2026, as part of the Anthropic Cyber Mission. It is a free, opt-in scan for open-source repositories. Enrolled projects get periodic reports from Anthropic's strongest models, without a human review step in front of the email.

That last point is the product. Anthropic already scans open-source code and sends findings after people check them under its coordinated vulnerability disclosure process. By October 2026, staff had reviewed more than 6,000 of those reports. Review slows delivery. Maintainers who can handle unvalidated findings can now take the fast path.

This guide covers who should enroll, the pull request Anthropic asks for, and what a report does and does not promise.

## Who the scanner is for

OSS Scanner follows criteria close to Google's OSS-Fuzz. Anthropic says it accepts established projects with a critical impact on infrastructure and user security. Two factors it calls out are exposure to remote attacks, such as libraries that process untrusted input, and the number of users or downstream projects that depend on the code.

Decisions are case by case. Anthropic may tighten acceptance if the queue grows. A short sentence on why the project matters helps when that is not obvious from the homepage.

Only a core maintainer should file the request. Anthropic says it will manually confirm that role before enrollment, and may contact the project another way if the pull request alone is not enough.

The service is aimed at projects that already keep up with verified high and critical reports and want more coverage. If the inbox is already full, stay on the human-reviewed path. Anthropic will keep sending verified disclosures to projects that do not enroll.

Security teams that need reduced safety blocks on Claude, rather than a free repository scan, should look at the [Claude Cyber Verification Program](/blog/apply-claude-cyber-verification-program/).

![Server racks in a dim data center aisle](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80)

## What you get, and what you do not

After enrollment, Anthropic scans the repository. The pipeline includes agents that double-check bugs, suggest patches, and run root cause analysis. Maintainers receive a bundle of bug reports by email.

Later scans look for issues introduced since the last run and for issues the earlier run missed. Frequency depends on the queue, how widely the project is used, and other factors Anthropic has not fixed in public.

Each report is model-generated. The research post says a report includes a self-contained reproducer, an explanation, a bisection of when the bug was introduced where that is possible, and a candidate patch when one is available. Anthropic expects a true-positive rate above 90 percent and says it will work on that rate and on patch quality. Some reports will still be wrong, including wrong severity ratings.

There is no 90-day disclosure clock on these unvalidated findings. Anthropic does not want to force a maintainer to read every item if a human at Anthropic has not read it either. If staff later validate a report through the existing disclosure process, a 90-day clock can start from the notice that a human validated it. Anthropic may add a disclosure period for some high-severity scanner reports later, with notice and an opt-out.

Scanning agents run after internet access is turned off inside hardened sandboxes. The Dockerfile is built with network access. Everything after that build runs offline. Reports sit in a locked-down cloud project limited to Anthropic security staff who run the program.

## Prepare the project file

Enrollment is a pull request to [github.com/anthropics/oss-scanner](https://github.com/anthropics/oss-scanner). Add `projects/<project>/project.yaml`. Start from the template in `templates/project.yaml`.

Required fields:

- `repo`: the git URL to clone. A branch can be appended with `#branch`. The host does not have to be GitHub.
- `primary_contact`: the email that receives reports and any unusual follow-up. Use an address you control.
- `Dockerfile`: a path, relative to your repository, to a Dockerfile that installs dependencies and builds the project so an offline agent can audit it. You can instead place a file named `Dockerfile` next to `project.yaml` in the Anthropic repo and omit this field.

Optional fields:

- `auto_ccs`: extra addresses copied on every report.
- `homepage`: used so reviewers can judge impact.
- `threat_model`: a repo-relative path, defaulting to `.oss-scanner/threat_model.md`. You can also drop `threat_model.md` beside `project.yaml`.
- `pgp`: a GPG public key. If you set this, Anthropic encrypts the mail and will not copy extra addresses. Mail goes only to the primary contact.
- `disabled`: set to `true` to pause reports without deleting the project.

The Dockerfile should leave a container where tests pass. Confirm that locally. Anthropic builds it again after acceptance and emails you if that build fails.

The threat model file has no required sections. Useful contents include which code and inputs are in scope, what to ignore, a severity rubric, how patches and proofs of concept should look, and how granular deduplication should be. The scanner still runs without it, but it will guess at those choices. If the file lives in your own repository, you can edit it between scans.

Before you open the pull request, run `tools/validate.py` on the config. Submitting the pull request also accepts the terms linked from the OSS Scanner page.

![Developer editing configuration files on a laptop](https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80)

## Enrollment steps

1. Confirm you are a core maintainer and that the project can triage extra, unreviewed findings.
2. Write a Dockerfile that installs dependencies and builds the project. Run the tests inside the image.
3. Fork [anthropics/oss-scanner](https://github.com/anthropics/oss-scanner) and add `projects/<project>/project.yaml` from the template.
4. Fill `repo`, `primary_contact`, and the Dockerfile path, or place a `Dockerfile` next to the YAML.
5. Add a homepage and a one-line note on why the project matters if that is not obvious.
6. Optionally add `auto_ccs`, a threat model, or a GPG key. Do not combine extra CCs with a GPG key.
7. Run `tools/validate.py` and open the pull request.
8. Wait for Anthropic to confirm maintainer status. After acceptance, watch for a build-failure email and fix the image if asked.

Questions from projects that are not enrolled go to oss-scanner-questions@anthropic.com. Anthropic says a human monitors that mailbox. Enrolled maintainers should reply on the report email if a finding is wrong, duplicate, or out of scope.

## Pause, credit, and related help

To pause, open a pull request that sets `disabled: true`. To leave, delete the `projects/<project>/` directory in another pull request. Either change stops automated unvalidated reports. Verified disclosures under the normal process can still arrive.

Credit is optional. If you patch a finding, Anthropic asks for a line in the commit message with the report ID, in this form: `Discovered by Anthropic's OSS Scanner, as vulnerability ANT-2026-ABCD1234.` The ID helps the team see which reports were fixed.

Maintainers can also apply for Claude for Open Source, which offers free Claude Max subscriptions for remediation work, and for the Cyber Verification Program if defensive tasks need fewer safety blocks. Those are separate from the scanner enrollment.

OSS Scanner is not Claude Security. Claude Security is the commercial product for finding and fixing issues in a team's own source, including Claude Mythos in an enterprise workflow. The scanner is free for accepted open-source projects and uses extra, token-heavy harnesses. Anthropic covers the cost through the Defender Advantage Fund, which it launched in August 2026.

The Cyber Mission also started the Critical Infrastructure Defense Program the same day, with founding partners including Accenture, Booz Allen, CrowdStrike, Deloitte, Dragos, Hitachi, Insane Cyber, Nozomi Networks, Palo Alto Networks, PwC, and Rockwell Automation. That program is for vendors that already secure operational technology. Open-source maintainers use the scanner pull request, not that interest form.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/INGOC6-LLv0"
    title="An initiative to secure the world's software | Project Glasswing"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips before you file

Do not enroll a toy repo or a personal fork. Reviewers are matching the project to infrastructure impact, and a rejected request still uses reviewer time.

Treat the first bundle as a queue, not a release blocker list. Sort by whether the reproducer runs, then by whether the input is actually attacker-controlled in your threat model. Reply on the thread when a class of finding is out of scope so later scans can use that feedback.

Keep the image reproducible. An agent that cannot build the project cannot audit it, and a failed build delays the first scan. Pin dependencies the same way your CI does.

If you want encrypted mail, generate the GPG key before the pull request and skip `auto_ccs`. Adding CCs later means dropping encryption, or the reverse.

## What to do next

If the project already triages verified high and critical reports, open the pull request with a working Dockerfile and a contact address you read. If the project cannot take unreviewed volume, leave enrollment alone and stay on coordinated disclosure. The October 8 launch does not replace human review for everyone. It adds a faster lane for maintainers who ask for it, with false positives still possible and no disclosure deadline on the unvalidated mail.

## Sources

- Anthropic, Introducing the Anthropic Cyber Mission, October 8, 2026: https://www.anthropic.com/news/anthropic-cyber-mission
- Anthropic Frontier Red Team, Launching an opt-in vulnerability-finding service for open-source software, October 8, 2026: https://www.anthropic.com/research/launching-opt-in-vuln-finding-service-for-open-source
- Anthropic, OSS Scanner FAQ: https://red.anthropic.com/oss-scanner/
- Anthropic, Project Glasswing video, April 7, 2026: https://www.youtube.com/watch?v=INGOC6-LLv0
