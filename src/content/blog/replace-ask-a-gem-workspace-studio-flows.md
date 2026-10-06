---
title: "How to Replace Ask a Gem in Workspace Studio Flows"
description: "Replace Ask a Gem steps in Google Workspace Studio with Ask Gemini and skills before the March 2027 cutoff. Official rollout steps."
pubDate: 2026-10-06T12:00:00
heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "google", "how-to", "productivity"]
noindex: false
---

Workspace Studio flows that still call a Gem will stop working starting March 2027. Google began rolling out skills in Workspace on October 5, 2026, and you can no longer add an Ask a Gem step to a new or existing flow.

Existing flows that already contain that step stay editable until the cutoff. The fix is to rebuild the Gem as a skill, then swap the step for Ask Gemini. If skills have not reached your account yet, you can still swap the step and paste the old prompt.

This guide follows the Workspace Studio Help page on the Gems-to-skills transition and the September 30 Workspace update.

## What changes, and when

Google is moving custom instructions from Gems to skills. Skills run inside a normal Gemini chat, so you can stack more than one set of instructions in a single prompt. They use a Markdown skill file, which means you can copy instructions you already wrote elsewhere.

The dates that matter for Studio flows:

- Now: you cannot add Ask a Gem steps. Flows that already have one keep working.
- October 5, 2026: skills start rolling out in Workspace. Rapid Release domains are expected to finish by October 12. Scheduled Release domains start October 19 and finish by mid-November.
- October 13, 2026: skills start rolling out in the Gemini app, finishing by mid-November.
- November 17, 2026: Gems move into the Settings panel of the Gemini app. Create, edit, and use still work.
- No sooner than March 1, 2027 (business and enterprise): Gems can no longer be created, edited, or used. Ask a Gem steps stop. Remaining Gemini app Gems become draft skills.
- No sooner than June 1, 2027: the same Gem cutoff applies to Education, including Classroom and supported Gemini LTI tools.

Skills in the Gemini app do not appear automatically in Workspace. Recreate them in Workspace Studio if a flow needs them.

Admins who need the console switches can follow [Enable Gemini Skills in Workspace: Admin Setup Guide](/blog/enable-gemini-workspace-skills-admin-guide/).

![Team planning a workflow around a conference table](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Rebuild the Gem as a skill

Do this first if Skills already appears in your Studio sidebar. If it does not, skip to the next section and update the flow with a plain Ask Gemini step. You can attach a skill later.

1. Open [Google Workspace Studio](https://studio.workspace.google.com/).
2. Click **Skills** on the left.
3. Click **Create**.
4. Copy the instructions from the Gem.
5. Paste them into the skill builder chat, or paste them straight into the skill instructions.
6. Add context. Upload reference files, or link a Drive folder that holds the standard you want the skill to follow.
7. Define the output. Example from Google Help: “Provide a bulleted list of risks and a final Go/No-Go recommendation.”
8. Review the generated instructions and edit anything that drifted from the original Gem.
9. Optional: in the skill builder chat, ask it to test the skill with a sample input.
10. Click **Turn on**.

If someone else owned a view-only Gem used by the flow, ask that owner to share the skill. You cannot turn their Gem into a skill on your own.

If the Gem was already converted to a skill in the Gemini app:

1. Open [gemini.google.com](https://gemini.google.com).
2. Open **Settings**, then **Skills**.
3. Copy the instructions.
4. Paste them into a new Workspace Studio skill and turn it on.

Once the skill is on, you can @mention it in the Gemini side panel in Workspace apps, and you can select it inside an Ask Gemini step.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/AkUUeePtbe4"
    title="Build custom AI agents in Workspace Studio to automate tasks using plain language"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Swap Ask a Gem for Ask Gemini

Google’s recommended order keeps the old step in place until the new one is configured. Do not delete Ask a Gem first.

1. In Workspace Studio, open **Flows**.
2. Open a flow that still has an Ask a Gem step.
3. Copy the prompt from that step.
4. Click **+ Add Step** and select **Ask Gemini**.
5. Move Ask Gemini above Ask a Gem. Open **Manage step**, then **Move up**, until it sits higher in the flow.
6. Replace the pre-filled prompt with the prompt you copied.
7. If you have skills access, select the skill or skills Gemini should use for that step.
8. Check later steps. Any step that read the Ask a Gem variable must point at the new Ask Gemini variable instead.
9. Run a test with a real trigger if the flow allows it, or use a sample payload.
10. When the new step returns the output you expect, open **Manage step** on Ask a Gem and click **Delete**.

Repeat for every flow that still lists Ask a Gem. A shared link to a skill does not rewrite those flows for you.

![Person editing notes beside a laptop](https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80)

## Share the skill with the same people

Sharing a Gem did not carry over. To give teammates a copy of the skill:

1. In Workspace Studio, open **Skills**.
2. Under **My skills**, open the skill.
3. It must be turned on. Google only lets you share skills that are on.
4. At the top left, click **Share**, change **Private** to **My organization**, then **Copy link**.
5. Send the link. Anyone who opens it can create a copy that includes the latest setup, referenced files, text, email addresses, and copies of referenced flows.
6. The link shows your email as the skill creator.

Organization sharing is not the same as a personal Gemini app share. Consumer Gems and Workspace skills stay separate until you copy the instructions across.

## Tips before the cutoff

List every Studio flow that still mentions a Gem. Sort them by owner and by how often they run. Daily mail and ticket flows should move first.

Keep the old prompt text in a Doc until the new step has run at least once in production. Google says existing Ask a Gem steps remain functional until deprecation, so you have a window to compare outputs.

If skills have not rolled out on your domain, update the step anyway and leave a comment in the flow naming the skill you plan to attach. Scheduled Release domains may not see Skills until after October 19.

Do not wait for automatic migration of Studio steps. Google auto-migrates remaining Gemini app Gems to draft skills for business and enterprise, no sooner than March 1, 2027. That migration does not rewrite Workspace Studio flows.

Education customers have a later Gem cutoff, no sooner than June 1, 2027, but the block on new Ask a Gem steps is already in effect.

## Conclusion

Ask a Gem is closed for new steps. Skills started reaching Workspace on October 5, 2026, and Ask a Gem steps stop no sooner than March 1, 2027 for business and enterprise. Copy the Gem instructions into a Studio skill, turn it on, place Ask Gemini above the old step, retarget later variables, then delete Ask a Gem.

If Skills is missing from the sidebar, swap the step now and attach the skill when the rollout reaches your domain.

## Sources

- Workspace Studio Help, “How Gems transition to skills impacts Workspace Studio flows”: https://support.google.com/workspace-studio/answer/18336943
- Google Workspace Updates, “Introducing skills in the Gemini app and Workspace, plus what’s next for Gems,” September 30, 2026: https://workspaceupdates.googleblog.com/2026/09/skills-gemini-app-workspace.html
- Google Workspace Help, “About the transition from Gems to skills,” updated September 30, 2026: https://knowledge.workspace.google.com/admin/generative-ai/gemini-app/about-the-transition-to-skills
- Google blog, “Let skills in Gemini tackle your most repetitive tasks,” September 30, 2026: https://blog.google/products-and-platforms/products/gemini/automate-tasks-with-skills/
- Google Workspace Developers, “Build custom AI agents in Workspace Studio,” YouTube, July 17, 2026: https://www.youtube.com/watch?v=AkUUeePtbe4
