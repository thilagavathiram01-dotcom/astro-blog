---
title: "Enable Gemini Skills in Workspace: Admin Setup Guide"
description: "Turn on Gemini skills in Google Workspace from the Admin console, check rollout dates, and rebuild priority Gems before March 2027."
pubDate: 2026-10-05T09:00:00
heroImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["google", "gemini", "how-to", "productivity"]
noindex: false
---

Google starts rolling out skills in Workspace on October 5, 2026 for Rapid Release domains. Skills replace Gems as the reusable instruction format for Gemini in chat and in Workspace apps. Admins who leave the setting off will block both new skills and the skills page in Workspace Studio.

This guide covers who can use skills, how to switch them on, and what to tell users before Gems stop working in 2027. If you already mapped the dates, the companion checklist in [prepare Gemini skills for Workspace](/blog/prepare-gemini-skills-workspace-oct-5/) pairs with the console steps below.

## What skills change for Workspace users

Skills are modular instructions stored in an open Markdown format, SKILL.md. People invoke one by typing a slash, soon an @ symbol, plus the skill name in a prompt. They can stack more than one skill in the same message. Gems cannot run inside Workspace apps, and skills do not sync between the Gemini app and Workspace. A skill used in both places must be created in each surface.

Google lists four practical differences from Gems in its [transition help article](https://knowledge.workspace.google.com/admin/generative-ai/gemini-app/about-the-transition-to-skills):

- Skills work in the Gemini app and in Workspace apps.
- Users call them inline instead of opening a separate Gem window.
- Multiple skills can apply in one prompt or across a conversation.
- Instructions can be copied as Markdown instead of staying locked to one product.

![Team reviewing a shared document on a laptop during a planning session](https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80)

## Who gets skills, and when

Skills in the Gemini app are listed as available to all Workspace editions and all ages. Skills inside Workspace are limited to users age 18 and older on Business Starter, Standard, and Plus; Enterprise Standard and Plus; Google AI Pro for Education; or the AI Expanded Access add-on.

The Admin console page for skills also says the feature is only available to customers enrolled in the Gemini Beta program. Users designated as under 18 cannot use AI features in Workspace Studio, including creating and sharing skills.

Rollout dates from the Workspace help timeline, last updated October 1, 2026:

| Date | What happens |
| --- | --- |
| October 5, 2026 | Skills start in Workspace for Rapid Release domains, finishing by October 12. |
| October 19, 2026 | Scheduled Release domains start, finishing by mid-November. |
| October 13, 2026 | Skills start in the Gemini app for Rapid and Scheduled Release, finishing by mid-November. Users can keep Gems and skills together. |
| November 17, 2026 | Gems move under Settings in the Gemini app. Create, edit, and use still work. |
| No sooner than March 1, 2027 | Business and enterprise users can no longer create, edit, or use Gems. Ask a Gem steps in Studio flows stop. Remaining Gemini app Gems become draft skills. |
| No sooner than June 1, 2027 | The same Gem cutoff applies to Education, including Classroom and supported Gemini LTI tools. |

Existing Studio flows that already use Ask a Gem keep working until that 2027 cutoff. New flows cannot add an Ask a Gem step.

## Turn skills on in the Admin console

You need the Service Settings administrator privilege. Google says changes can take up to 24 hours, though they often apply sooner.

1. Open the Google Admin console and go to Menu, then Apps, then Google Workspace, then Workspace Studio. The direct path is the Workspace Studio service settings page.
2. Click Skills, then Create and use skills.
3. Optional: select an organizational unit or a configuration group if only some people should get skills. Group settings override organizational units.
4. Choose the option that allows create and use.
5. Click Save. For an organizational unit you may need Override. To restore the parent setting later, click Inherit, or Unset for a group.

If you turn skills off, people cannot use existing skills and cannot open the skills page in Studio. Confirm the setting before you announce the rollout, especially on Rapid Release domains that start receiving the feature this week.

![Person working through a checklist on a laptop at a desk](https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80)

## What users should do on day one

Skills created in Studio can be used in Studio, in an Ask Gemini step inside a flow, and in Gemini in Workspace. Workspace also lets a team draft a skill in Google Docs with the skill builder, comment on it, then add and enable it in Studio.

Point people at three official paths:

- The [AI skills 101 handbook](https://workspace.google.com/learning/report/content/skills-in-gemini-101) for business and enterprise users.
- Help on [creating and using skills in the Gemini app](https://support.google.com/gemini?p=b_ws_skills).
- Help on [skills in Google Workspace Studio](https://support.google.com/workspace-studio/answer/17307546).

Manual recreation is the safe path for important Gems. Automated migration, when it starts, converts remaining Gemini app Gems into inactive drafts. Creators must review and activate each draft before use or sharing. Names, descriptions, custom instructions, and uploaded knowledge files are preserved, and Drive permissions and sharing settings transfer. Google says full migration details will be published at least 30 days before that automation starts.

To rebuild a Gem early, open it on gemini.google.com, download any knowledge files, then create a skill from Settings and paste the name, description, and instructions. Re-upload files. Because Workspace skills do not inherit Gemini app skills, repeat the build in Workspace Studio or the Docs skill builder if the team needs the same behavior in Docs, Gmail, or a Studio flow.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/e8ja0hQtBmI"
    title="Use Gemini Notebook as a context source in Google Docs"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

That Workspace clip shows how Gemini in Docs can use a notebook as a context source. Skills follow the same idea: ground the model on instructions your team already agreed on, instead of retyping them in every prompt.

## Tips before the March 2027 cutoff

Notify users with the edition-specific date. Business and enterprise lose Gems no sooner than March 1, 2027. Education loses them no sooner than June 1, 2027. Education admins can share Google’s [Gems and Skills Transition Guide PDF](https://services.google.com/fh/files/misc/gemini_gems_skills_transition_guide.pdf) and point classroom work toward Gemini Notebook, which is available now.

Replace Ask a Gem steps in Studio flows using the [Workspace Studio transition guide](https://support.google.com/workspace-studio?p=gems_transition). Waiting until the step stops working leaves automated invoice checks, proposal drafts, and brand-voice emails broken.

Keep a short inventory: skill name, owner, knowledge files, and which surface it lives on. That list matters because a skill enabled in chat will not appear in Workspace on its own.

For a walkthrough of copying a Gem into a skill by hand, see [convert Gemini Gems to skills](/blog/convert-gemini-gems-to-skills/).

## Conclusion

October 5 is the start of the Workspace skills rollout, not the end of Gems. Rapid Release domains should see skills through October 12. Scheduled Release domains begin October 19. Turn Create and use skills on in Workspace Studio settings, tell people skills do not sync across surfaces, and rebuild the flows that still depend on Ask a Gem before the 2027 cutoff.

## Sources

- [About the transition from Gems to skills](https://knowledge.workspace.google.com/admin/generative-ai/gemini-app/about-the-transition-to-skills), Google Workspace Help, updated October 1, 2026
- [Allow people to use skills in Studio and Gemini in Workspace](https://knowledge.workspace.google.com/admin/studio/turn-skills-on-or-off), Google Workspace Help
- [Introducing skills in the Gemini app and Workspace](https://workspaceupdates.googleblog.com/2026/09/skills-gemini-app-workspace.html), Google Workspace Updates, September 30, 2026
- [Teach Gemini your team’s know-hows with skills](https://workspace.google.com/blog/product-announcements/teach-gemini-your-teams-know-hows-with-skills-in-google-workspace), Google Workspace Blog
