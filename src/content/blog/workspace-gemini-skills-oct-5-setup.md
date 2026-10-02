---
title: "How to Set Up Gemini Skills in Workspace Before Oct 5"
description: "Prepare Google Workspace for Gemini Skills before the October 5 rollout: admin controls, dates, and how to rebuild Gems as skills."
pubDate: 2026-10-02T12:11:00
heroImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["google", "gemini", "productivity", "tutorials"]
noindex: false
---

Google starts rolling Gemini Skills into Workspace on October 5, 2026. Skills are reusable instruction packs you call with a slash, and they are the path Google has set for replacing Gems. If your domain is on Rapid Release, the window opens this weekend. Scheduled Release domains wait until October 19.

This guide covers the dates Google published, the Admin console control, and a practical way to rebuild a Gem as a skill before the first users see the feature.

## What changes on October 5

Skills are custom instructions Gemini can apply inside a chat or a Workspace flow. Unlike a Gem, a skill sits inline. You can stack more than one in the same prompt. Google builds them on the open Markdown `SKILL.md` format, so a skill written for another tool can be copied in.

Google’s Workspace Updates post lists these milestones:

- **October 5, 2026:** Skills begin rolling out in Workspace. Rapid Release domains start then and should finish by October 12. Scheduled Release domains start October 19 and finish by mid-November.
- **October 13, 2026:** Skills begin rolling out in the Gemini app for all users, finishing by mid-November.
- **November 17, 2026:** Gems move into the Settings panel of the Gemini app. People can still create, edit, and use them.
- **No sooner than March 1, 2027:** For business and enterprise, Gems can no longer be created, edited, or used. Workspace Studio flows that use an “Ask a Gem” step stop. Remaining Gemini app Gems are auto-migrated to draft skills.
- **No sooner than June 1, 2027:** The same cutoff applies to education, including Google Classroom and supported Gemini LTI tools.

Google says it will warn admins at least 30 days before auto-migration. You do not have to wait for that date to move important Gems yourself.

One limit matters more than the calendar. Skills do not sync between the Gemini app and Workspace apps. A skill you build in chat will not appear in Docs or Studio. You recreate it in each place if you want it in both.

![Team reviewing a shared document on laptops before a product rollout](https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80)

## Who can use Workspace Skills

Google lists Skills in Workspace for Business Starter, Business Standard, Business Plus, Enterprise Standard, Enterprise Plus, Education Fundamentals, Education Standard, the Teaching and Learning add-on, Education Plus, and the Google AI Pro for Education add-on.

Two age rules apply. Skills in Workspace are only for users over 18. In Workspace Studio, users designated as under 18 cannot use AI features, including creating and sharing skills. Skills in the Gemini app are planned for users of all ages, with an 18+ limit noted on the consumer rollout and under-18 access listed as coming later.

Google’s Admin Help page, updated October 1, 2026, also says Skills are available only to customers enrolled in the Gemini Beta program. If the Skills control is missing on October 5, check that enrollment before you open a support ticket. Admin changes can take up to 24 hours to propagate.

## Turn Skills on or off in the Admin console

You need the Service Settings administrator privilege.

1. In the Google Admin console, open **Menu > Apps > Google Workspace > Workspace Studio**.
2. Click **Skills**, then **Create and use skills**.
3. Optional: select an organizational unit or a configuration group. Group settings override organizational units.
4. Choose whether people can create and use skills.
5. Click **Save**. For an organizational unit you may need **Override**. Use **Inherit** later if you want the parent setting back, or **Unset** for a group.

If you turn Skills off, people cannot use existing skills and cannot open the skills page in Studio. That is the right move for a pilot: enable the control for one configuration group, let that group build two or three skills, then widen access after Rapid Release finishes.

You can no longer create new Workspace Studio flows that use an “Ask a Gem” step. Flows that already have that step keep working until the 2027 cutoff. Plan replacements around the “Ask Gemini” step, which can call a skill.

## Rebuild one Gem as a skill

Do this for the Gem your team actually uses every week. Leave the long tail for auto-migration.

1. Open the Gem and copy its instructions, name, and any example prompts.
2. In Workspace Studio, create a skill. Give it a short name people will type after a slash, such as `vendor-brief` or `lesson-plan`.
3. Paste the instructions. State the job, the inputs you expect, the output format, and what the skill must not do.
4. Add reference files if the skill needs a style guide, a rubric, or a sample. Google’s September 30 announcement says skills can include plain text, PDFs, and images. Drive files and Gemini Notebook sources are still on the “coming weeks” list, so do not assume those attachments work on day one.
5. Save, then invoke it in Gemini in a Workspace app by typing `/` and the skill name.
6. Stack a second skill in the same prompt if you need both a format and a voice. Google’s example is a weekly newsletter skill plus brand guidelines.

If you already built skills in Gemini chat, repeat the steps in Studio. Copying the `SKILL.md` text is the reliable transfer method until Google offers sync.

For the chat-side workflow, see [how to create Gemini skills on the web](/blog/create-gemini-skills-web-chat-guide/).

![Person writing structured notes on a laptop](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## A skill worth shipping this week

Keep the first skill narrow. A vendor brief works well because the output is easy to check.

Name: `vendor-brief`

Instructions you can adapt:

- Ask for the vendor name, the decision date, and the must-have requirements if they are missing.
- Summarize fit against those requirements in a table with columns for requirement, evidence, and gap.
- List open questions for the next call.
- End with a one-paragraph recommendation and the assumption it depends on.
- Do not invent pricing, customer counts, or security certifications. Mark unknown fields as unknown.

Call it with `/vendor-brief` and paste the RFP notes. Pair it with a writing-style skill if the brief has to match an internal voice.

Other first skills Google itself suggests: presentation prep (outline, talking points, likely questions) and a perspectives skill that always returns three to five distinct viewpoints before you decide.

## What to tell your team

Send a short note before October 5 if you are on Rapid Release, or before October 19 if you are on Scheduled Release.

- Skills replace the role Gems played, but Gems still work after November 17. They move to Settings. They are not deleted in 2026.
- A skill in the Gemini app is not the same object as a skill in Workspace. Build the shared ones in Studio if Docs, Gmail, or flows need them.
- Type `/` and the skill name in the prompt bar. You can use more than one skill in a single prompt.
- Users under 18 should not expect Workspace Studio skills.
- Gemini can still be wrong. A skill that drafts policy or grades work needs a human check.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/XQtvloPXap4"
    title="Google Gemini Skills Are Finally Here"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips before the rollout finishes

Inventory Gems that sit inside Studio flows. Those “Ask a Gem” steps are the ones that stop in 2027, not the casual chat Gems.

Name skills so the slash command is obvious. `q3-board-update` beats `helper`.

Pilot with a configuration group, not the whole domain. You can turn Skills off later, and that blocks existing skills as well as new ones.

Do not wait for Drive and Notebook attachments if a PDF style guide is enough. Attach the file you have now and swap it when Google adds the richer sources.

Education admins should read Google’s Gems transition guide before June 2027. Classroom and LTI Gems follow the later date, but teacher workflows take longer to replace than a single chat Gem.

## Conclusion

October 5 is the start of the Workspace Skills rollout for Rapid Release, not the day Gems disappear. The useful work this week is smaller: confirm the Admin console control, enable it for a pilot group, and rebuild the one Gem your team cannot lose. Copy that skill into Studio even if it already lives in the Gemini app, because the two surfaces do not sync.

Gems remain usable after they move to Settings on November 17. The hard stop for business and enterprise is no sooner than March 1, 2027, and for education no sooner than June 1, 2027. Treat the next month as the migration window, not the deadline.

## Sources

- Google Workspace Updates, “Introducing skills in the Gemini app and Workspace, plus what’s next for Gems,” September 30, 2026: https://workspaceupdates.googleblog.com/2026/09/skills-gemini-app-workspace.html
- Google, “Let skills in Gemini tackle your most repetitive tasks,” September 30, 2026: https://blog.google/products-and-platforms/products/gemini/automate-tasks-with-skills/
- Google Workspace Admin Help, “Allow people to use skills in Studio and Gemini in Workspace,” updated October 1, 2026: https://knowledge.workspace.google.com/admin/studio/turn-skills-on-or-off
- Google Workspace Admin Help, “About the transition from Gems to skills,” updated September 30, 2026: https://knowledge.workspace.google.com/admin/generative-ai/gemini-app/about-the-transition-to-skills
