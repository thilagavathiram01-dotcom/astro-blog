---
title: "Create Your First Gemini Workspace Skill Today"
description: "Build a Gemini Workspace skill in Studio or Docs. Rapid Release domains start Oct 5, 2026. Steps, sources, and Gems notes."
pubDate: 2026-10-05T16:10:00
heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "google", "productivity", "tutorials"]
noindex: false
---

Google starts rolling out skills in Workspace on October 5, 2026. A skill is a reusable instruction set Gemini can apply inside Gmail, Docs, Sheets, Slides, Drive, Chat, and Workspace Studio flows. You do not open a separate chat window each time. You call the skill from the side panel, or attach it to an Ask Gemini step.

If your domain is on Rapid Release, the feature can appear between October 5 and October 12. Scheduled Release domains start October 19 and finish by mid-November. Skills in the Gemini app follow a separate rollout that begins October 13. They do not sync with Workspace. If you need the same behavior in both places, create it twice.

This guide walks through the first skill on a work account. For the admin checklist and the later Gemini app dates, see [how to prepare Workspace for skills](/blog/prepare-gemini-skills-workspace-oct-5/).

## Who can create a skill today

Workspace skills are limited to users over 18. Your admin must allow create-and-use skills under Apps, Google Workspace, Workspace Studio, Skills. If the Skills item is missing in Studio, wait for your release track or ask an admin to confirm the setting. Changes in the Admin console can take up to 24 hours.

You also need a Workspace edition that includes Gemini in Workspace. Education customers should follow Google’s separate Gems transition guide. Personal Google accounts do not create Workspace Studio skills.

## What a skill is, and what it is not

A skill is a Markdown instruction file, built on the open SKILL.md pattern, plus optional Drive files or folders. Google describes skills as reusable prompts that carry your team’s rules, templates, and tone. You can stack more than one skill in a single prompt. An editor can pair a newsletter skill with a brand-guidelines skill. A buyer can pair a vendor review skill with an executive email skill.

Gems still work in the Gemini app for now. You can no longer add a new Ask a Gem step in Workspace Studio. Existing flows that already use Ask a Gem keep running until Google retires that step, no sooner than March 1, 2027 for business and enterprise, and no sooner than June 1, 2027 for education. Skills do not replace those flows on their own. You rebuild the instructions, then point the flow at Ask Gemini.

![Team reviewing a shared document on laptops](https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80)

## Create a skill in Workspace Studio

Google documents two paths in Studio Help: start from scratch, or start from a template.

1. Open [Google Workspace Studio](https://studio.workspace.google.com/).
2. In the left nav, click Skills.
3. Click Create.
4. In the skill builder chat, describe the job in plain language. Example: “Draft a weekly project status from the linked Drive folder. Use short bullets, name owners, flag blockers, and end with a one-line ask for the sponsor.”
5. Read the instructions Gemini writes. Edit wording that is vague or too broad.
6. Optional: at the bottom of the builder, click Add, then Gemini search settings. Drive and Web are checked by default. Add Gmail, Chat, or Calendar only if the task needs them.
7. Optional: click Add, then Add from Drive, and attach a template or a folder of good examples.
8. Test in the builder chat with a real scenario. If the output is wrong, tighten the instructions and test again.
9. Click Turn on.

Generating instructions is not the same as saving the skill. Studio Help notes that if you stop after the generated draft, the skill is not created. Turn on is the step that makes it available.

## Draft the skill in Google Docs first

If more than one person owns the wording, start in Docs. Workspace’s skill builder there lets the team comment before anyone enables the skill.

1. Open a Doc on your computer.
2. Click Ask Gemini at the top right.
3. Click Tools, then Skill builder.
4. Describe the skill. Review and edit the instructions Gemini returns.
5. Share the Doc with the people who will use the skill.
6. When the group agrees, click Make this skill in Studio.

That action creates a copy for each collaborator who clicks it. It does not publish one shared skill that everyone edits in place. If you want a single source of truth, one owner should turn the skill on in Studio and share that skill from Studio.

For a Docs-only walkthrough of the builder, see [build Workspace skills from Google Docs](/blog/build-gemini-workspace-skills-google-docs/).

![Person writing notes beside a laptop](https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80)

## Call the skill from Gemini in Workspace

After the skill is on, open the Gemini side panel in Gmail, Docs, Slides, Drive, or Chat. Mention the skill with @ and its name, then add the facts for this run. Google’s Workspace blog lists those surfaces as the places you can call a skill. In Studio flows, add an Ask Gemini step and attach the skill there.

Keep the first prompt small. A status skill should receive the week and the folder, not a request to “do my whole project.” If the answer ignores a rule, put that rule in the skill instructions, not only in the chat.

## Move a Gem into a Workspace skill

Studio Help lists this rebuild while skills roll out:

1. Open the Gem and copy its instructions.
2. In Studio, click Skills, then Create.
3. Paste the instructions into the builder chat, or into the skill instructions field.
4. Add Drive files that show the standard you want, and state the output shape. Example: “Return a bulleted risk list and a Go or No-Go line.”
5. Test, then click Turn on.
6. In any flow that used Ask a Gem, add an Ask Gemini step, move it above the old step, and attach the new skill.

View-only Gems cannot be copied by recipients. Ask the owner to share the new skill.

## Tips that keep the first skill useful

- Name the output. Length, headings, and what to skip matter more than a long persona.
- Attach one good example, not a whole drive. Extra files raise noise.
- Leave Gmail and Calendar unchecked unless the task reads mail or events.
- Test with a case that should fail a rule, such as a missing owner, and confirm the skill flags it.
- Do not paste secrets into instructions. Drive links respect existing sharing; a skill does not grant new access.
- Expect the Gemini app copy to stay separate until you recreate it there after October 13.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/QBPf5Myq2UU"
    title="Google Workspace Studio: Automate work with AI agents"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What to do if Skills is missing

Check the release track first. Rapid Release can still be mid-rollout through October 12. Scheduled Release should not expect the control until October 19. Then confirm the admin toggle for Create and use skills. Users marked under 18 cannot use AI features in Workspace Studio, including skills.

If Studio opens but Create does nothing after you generate text, you have not turned the skill on. Return to the builder and click Turn on.

## Conclusion

October 5 is the start of the Workspace skills rollout, not the day every account sees the button. When Skills appears, build one narrow instruction in Studio or Docs, attach only the sources that task needs, test it, and turn it on. Recreate anything you still rely on from Gems, because Workspace will not import those Gems for you, and the Gemini app will not share its skills back.

## Sources

- Google Workspace Updates, “Introducing skills in the Gemini app and Workspace, plus what’s next for Gems,” September 30, 2026: https://workspaceupdates.googleblog.com/2026/09/skills-gemini-app-workspace.html
- Workspace Studio Help, “Learn how skills work in Google Workspace & Google Workspace Studio”: https://support.google.com/workspace-studio/answer/17307546
- Workspace Studio Help, “How Gems transition to skills impacts Workspace Studio flows”: https://support.google.com/workspace-studio/answer/18336943
- Google Workspace Admin Help, “Allow people to use skills in Studio and Gemini in Workspace”: https://knowledge.workspace.google.com/admin/studio/turn-skills-on-or-off
- Google Workspace Blog, “Teach Gemini your team’s know-hows with skills in Google Workspace,” September 16, 2026: https://workspace.google.com/blog/product-announcements/teach-gemini-your-teams-know-hows-with-skills-in-google-workspace
