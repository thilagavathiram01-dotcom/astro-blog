---
title: "How to Access Claude Mythos 5.2 for Cyber Work"
description: "Step-by-step guide for security professionals to apply for Claude Mythos 5.2 access via Anthropic’s Cyber Verification Program."
pubDate: 2026-11-22T12:00:00
heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai", "security", "tutorials"]
noindex: false
---

Claude Mythos 5.2 gives verified cybersecurity teams and researchers the same underlying model as Claude Fable 5.2, but with more permissive safeguards for defensive security work. Anthropic released both models on November 9, 2026. Fable stays available to everyone. Mythos requires approval through the Cyber Verification Program or the Life Sciences Verification Program.

This guide covers who can apply, the three access tiers, and the exact steps to request access. All details come from Anthropic’s official announcement and help documentation.

![Cybersecurity abstract visualization](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80)

## What Claude Mythos 5.2 Offers

Mythos 5.2 shares the same capabilities and pricing as Fable 5.2. It costs $8 per million input tokens and $40 per million output tokens. An optional fast mode runs at $16 / $80 and can generate tokens up to 2.5 times faster. The context window is 1 million tokens with a maximum output of 128,000 tokens.

The key difference is the safeguard level. Fable 5.2 blocks most high-risk cybersecurity and biology tasks so Anthropic can offer it broadly. Mythos 5.2 relaxes those blocks for approved users working on defensive security, incident response, malware analysis, detection engineering, and authorized testing.

On Anthropic’s internal CVE Rediscovery evaluation, Mythos 5.2 identified 89.6% of tested vulnerabilities. That is higher than Mythos 5.1 (78.3%) and Opus 5.5 without safeguards (81.3%). Early testers also noted stronger judgment and fewer overstated findings.

For everyday coding and knowledge work, most people should start with Claude Opus 5.5 or Fable 5.2. Mythos 5.2 is intended for the hardest technical security problems. You can read more about the public model in our [Claude Fable 5.2 developer guide](/blog/claude-fable-5-2-developer-guide/).

## Who Qualifies for Access

Access runs through two programs:

- **Cyber Verification Program (CVP)** for security professionals and organizations.
- **Life Sciences Verification Program (LSVP)** for biomedical research organizations (currently organization-only and in beta).

Individuals can only apply through CVP’s Defense Access tier. Organizations can apply for any of the three CVP tiers or express interest in LSVP.

Claude Enterprise customers can also use Claude Security, which now runs on Mythos 5.2, without joining CVP.

You need a paid Claude plan (Pro, Max, Ultra, Team, or Enterprise) or a Claude Console account with billing enabled. Free plans are not eligible.

## The Three Cyber Verification Program Tiers

CVP offers three tiers. All include Mythos 5.2, Mythos 5.1, Opus 5.5, and Sonnet 5.5. The difference is how far the safeguards are relaxed and who can apply.

| Tier | Intended use | Who can apply | Review target |
|------|--------------|---------------|---------------|
| Defense Access | Incident response, malware analysis, detection engineering, vulnerability triage | Organizations and individuals | About 2 days |
| Red Team Access | Authorized penetration testing and red teaming | Organizations only (up to 75 users) | About 2 weeks |
| Specialized Access | Authorized testing of critical infrastructure | Organizations only (up to 25 users, reviewed with US government) | No fixed target |

Defense Access is the only tier open to independent researchers, open-source maintainers, and bug bounty hunters. Higher tiers require organizational accounts and stronger evidence of authorized work.

![Circuit board close-up representing technical depth](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80)

## How to Apply Through the Verification Portal

Apply from the organization or account where you will actually use the model. Approval does not transfer between Claude accounts and Claude Console accounts.

1. Sign in to Anthropic’s Verification Portal with your Anthropic account (Google, email, or SSO).
2. Go to Programs and select Cyber Verification Program.
3. Choose Apply and pick your tier. Individuals must select Defense Access and individual verification.
4. Complete identity verification. Individuals need a physical government-issued photo ID (passport, driver’s license, or national ID) that is not a photocopy or digital scan. A live selfie may be required. Organizations provide legal name, address, registration number, and a description of security work.
5. Describe how you will use the model and attest to the required security controls for your tier.
6. Accept the program terms and submit.

An Owner or Primary Owner must submit the application for Claude accounts. An Admin must submit it for Console accounts. One application per organization is allowed.

After approval, you assign access to specific workspaces, roles, or linked cloud accounts. Access on Amazon Bedrock, Google Cloud, and Microsoft Azure typically becomes available about five business days after approval.

Starting December 15, 2026, Defense Access will require phishing-resistant MFA and will no longer allow long-lived API keys.

## Life Sciences Route

Organizations working on beneficial biomedical research can register interest through the Life Sciences Verification Program form. Anthropic reviews applications and invites selected teams to complete a full application. This route is currently limited to organizations and remains in beta.

## Pricing and Usage Notes

Once approved, Mythos 5.2 uses the same pricing as Fable 5.2: $8 per million input tokens and $40 per million output tokens. Fast mode is available at the higher rate. Tokens are billed normally. There is no separate fee for the verification program itself.

Anthropic monitors traffic under the program. You must follow the Usage Policy. The model is designed to pause and confirm before high-impact actions.

## Tips for a Successful Application

- Use a company domain email if applying as an organization. Personal free-email domains are more likely to face extra scrutiny.
- Prepare clear evidence of defensive security work. For Defense Access, this can include descriptions of incident response, vulnerability triage, or open-source security contributions.
- Higher tiers require stronger proof of authorized testing scope and organizational controls.
- Keep personal use separate. Individual Defense Access is limited to the applicant.
- Check the official Cyber Verification Program help page for the latest checklist before submitting.

## Conclusion

Claude Mythos 5.2 brings frontier cybersecurity capabilities to verified teams and researchers who need more permissive safeguards than the public Fable 5.2 model. The application process is straightforward for Defense Access and more rigorous for red-team and specialized work. Start with the Verification Portal, gather the required identity documents, and clearly describe your defensive use case.

If your work does not require the relaxed cyber or biology safeguards, Claude Fable 5.2 or Opus 5.5 will cover most needs without the verification step.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/2TM8W66NI_8"
    title="Anthropic's Fable 5.2 is the World’s Best AI Model"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- [Introducing Claude Fable 5.2 and Claude Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2)
- [Claude Mythos overview](https://www.anthropic.com/claude/mythos)
- [Cyber Verification Program help article](https://support.claude.com/en/articles/14604842-cyber-verification-program)
- [Claude Mythos 5.2 model docs](https://platform.claude.com/docs/en/models/mythos-5-2/overview)
