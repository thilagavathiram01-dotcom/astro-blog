---
title: "How to Create Gemini Skills in Google Workspace: 2026 Guide"
description: "Step-by-step guide to building reusable Gemini skills in Google Workspace Studio and apps for Gmail, Docs, Slides, and Chat."
pubDate: 2026-11-10T14:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "ai-tools", "google"]
noindex: false
---

Google rolled out skills across Workspace Studio and core apps starting 9 November 2026. These reusable instructions let Gemini handle repetitive work in Gmail, Docs, Slides, Drive, and Chat without retyping the same prompt every time.

Unlike the older Gems that lived only in the Gemini app, Workspace skills sit inside your daily tools. You can invoke them with an @ mention or let Gemini apply them automatically when the request matches. You can also connect them to Studio flows.

This guide shows how to create, test, share, and use skills based on the current Workspace rollout. If you already use skills in the Gemini app, note that they do not sync automatically. You will build separate ones for Workspace.

## What skills do in Workspace

A skill is a saved set of instructions plus an optional description that tells Gemini how to complete a specific job. You write it once. Gemini then follows those rules every time the skill runs.

Useful examples include:

- Turning meeting notes into a structured summary with action items and owners.
- Drafting emails that match your brand voice and required sections.
- Generating proposal outlines from a client brief stored in Drive.
- Reviewing a document for missing sections before you send it.

Skills work on the web in Workspace Studio, Gmail, Docs, Slides, Drive, and Chat. Invocation also works in the Chat mobile app. They are not yet available in Sheets or Meet. Instructions and prompts currently need to be in English.

## Create a skill in Workspace Studio

Workspace Studio is the central place to build, test, and manage skills.

1. Open [studio.workspace.google.com](https://studio.workspace.google.com) and sign in with your Workspace account.
2. Click **Skills** in the left navigation.
3. Choose **Create**. You can start from a template or build from scratch.
4. Give the skill a clear name that starts with a verb when possible (for example, `summarize-meeting-notes`). Names use lowercase letters and hyphens.
5. Write a short description. Include “Use when…” so Gemini knows the trigger. Example: “Use when turning raw meeting notes into a decision log with owners and deadlines.”
6. Add the full instructions. Describe the inputs you will provide, the exact steps Gemini should follow, the output format, and any guardrails (such as “never invent dates or owners”).
7. Optionally link to Google Drive files that hold reference material (style guides, past examples). Share those files with anyone who will receive a copy of the skill.
8. Test the skill in the builder chat. Paste a sample input and review the result. Adjust the instructions if the output misses key points.
9. Click **Turn on** when you are satisfied.

![Team collaborating around a laptop](https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80)

You can also draft the skill in a Google Doc using the skill builder, then send it to Studio. Open a Doc, ask Gemini to open the skill builder, write or refine the instructions with collaborators, and click the option to create the skill in Studio.

## Use skills in Gmail, Docs, Slides, Drive, and Chat

Once a skill is turned on, it becomes available in the Gemini side panel of supported apps.

- Type `@` followed by the skill name to invoke it directly.
- Gemini can also apply an active skill automatically when your prompt matches the description.
- You can combine multiple skills in one request. For example, apply a brand-voice skill and an executive-summary skill to the same draft.
- In Chat, the same @ invocation works on web and in the mobile app.

After Gemini produces a result, review it before you send or publish. Skills reduce repetition; they do not remove the need to check facts, tone, and completeness.

## Share skills with your team

From Workspace Studio you can share a copy of a skill. Recipients receive an independent version they can customize and turn on in their own library. Later edits you make do not overwrite copies others already saved.

If the skill references Drive files, share access to those files at the same time. Recipients otherwise see incomplete context.

Admins control whether users can create and use skills. In the Admin console go to Apps > Google Workspace > Workspace Studio > Skills and set the “Create and use skills” option for the relevant organizational units or groups.

## Tips for writing effective skills

- Start the name with a clear action.
- Keep the description specific and include concrete “Use when…” examples.
- Put one good output example in the instructions so Gemini sees the preferred structure.
- State what the skill must never do (invent numbers, recommend vendors, skip required sections).
- Test with real inputs before you turn the skill on for daily use.
- Limit active skills to those you actually need. You can keep many inactive and activate only the ones that matter for current work.

For Gemini app skills (separate from Workspace), see our earlier guide on [creating and using Gemini skills to automate tasks](/blog/how-to-create-and-use-gemini-skills-to-automate-tasks/).

![Person working at a laptop desk](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## Watch a walkthrough

The video below demonstrates the core ideas behind Gemini skills. While it focuses on the Gemini app, the same principles of clear name, description, and instructions apply when you build skills in Workspace Studio.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/XQtvloPXap4"
    title="Google Gemini Skills Are Finally Here"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Skills in Google Workspace turn repeated instructions into one-click or automatic helpers that live inside Gmail, Docs, Slides, Drive, and Chat. Create them in Workspace Studio or from a Doc, test the output, turn them on, and share copies with teammates. Because Workspace skills are separate from Gemini app skills, build the versions you need for each environment. Start with one high-frequency task, refine the instructions after a few real uses, then add more.

## Sources

- Google Workspace Updates: Scale customized AI across your team with skills (November 2026)
- Google Workspace Help: Prepare your organization for the transition to skills
- Google Workspace Help: Allow people to use skills in Studio and Gemini in Workspace
- Google Workspace blog: Teach Gemini your team’s know-hows with skills
- Gemini Apps Help: Create & manage skills (for comparison with the Gemini app experience)
