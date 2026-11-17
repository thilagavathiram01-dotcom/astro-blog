---
title: "Add Files and Share Gemini Skills Before Gems End"
description: "Add Drive, Photos or Notebook files to Gemini Skills and share them with View or Edit access. Act before personal Gems go read-only."
pubDate: 2026-11-17T20:00:00
heroImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "how-to", "ai-tools"]
noindex: false
---

Google is replacing Gemini Gems with Skills. For personal Google accounts aged 18 and over, Gems become read-only on 17 November 2026 and are removed on 17 December 2026. New Skills features let you attach files from Google Drive, Gemini Notebook, Google Photos or your device, and share Skills with View or Edit access.

This guide shows the exact steps to create or update a Skill with files, share it, and handle the Gems transition. The features are rolling out to personal and Workspace accounts.

## What changes with Skills and files

Skills are reusable custom instructions you call in any Gemini chat by typing `/` (soon `@`) plus the name, or Gemini applies them automatically when relevant. You can stack multiple Skills in one conversation.

Previously Skills supported mainly local text, PDF and image files. Now you can pull in material from Drive, Notebook and Photos. Drive files and Notebooks stay linked and update in real time, so the Skill always uses the latest version. The total file size limit per Skill is 100 MB.

Sharing is available from the Skills page in the Gemini web app (not yet on mobile). Recipients get an email, can review the Skill before installing it, then use it automatically or with an `@` mention. If the Skill references Drive files, you must share those files separately.

Google automatically migrates eligible Gems into Skills, but some files (audio, video, GitHub, older Office formats, archives) do not transfer, and certain tools like Canvas or Deep Research are not available inside Skills yet. Download important knowledge files before 17 December.

![Person working at a desk with laptop and notebook](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## How to create a Skill and add files

Open gemini.google.com in a browser. In the sidebar select Customize (or More > Customize), then Skills.

Click Create. Choose Create with Gemini for a guided setup, Create manually to write instructions yourself, or Upload a SKILL.md file. You can also start from a recommended template.

Enter a name (Gemini converts it to lowercase with hyphens), a short description, and the full instructions. At the top click Add, then pick Google Drive, Google Photos, Notebooks, or files from your device. Select the items you need. Gemini references them every time the Skill runs in chats or tasks.

Save the Skill. Test it in a new chat by typing `/` and the Skill name, or describe a task that matches the description so Gemini applies it automatically.

For Gems you want to move yourself: open the Gem, download its knowledge files, create a new Skill, paste the name/description/instructions, then add the downloaded files (or re-link supported ones from Drive).

## How to share a Skill

On the Skills page in the web app, open the Skill you want to share. Choose the people or groups and set View or Edit permission. Optionally add an expiry date or a message, then send.

Recipients receive an email. They review the Skill and install it. After that they can trigger it with `@` or let Gemini use it when relevant. Editors can change instructions and files; Viewers can use the Skill and see the details.

Remember: sharing the Skill does not automatically share Drive files it references. Open those files in Drive and grant the same people access.

![Hand holding a smartphone showing an app interface](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## Key dates and limits for Gems transition

| Account type | Gems status | Removal |
| --- | --- | --- |
| Personal (18+) | Read-only from 17 Nov 2026 | Removed 17 Dec 2026 |
| Personal under 18 | Later date (details TBA) | Later |
| Workspace business/enterprise/nonprofit | Continue longer | March 2027 |
| Workspace education | Continue longer | June 2027 |

Skills have a 100 MB total file limit. During automatic migration Google drops the largest unsupported or oversized files first to stay under the limit. Some formats that worked in Gems (audio, video, .doc/.xls/.ppt, archives, GitHub) do not transfer.

Skills require activity history settings to be enabled in some cases. Check your Gemini settings if a Skill does not appear or run.

## Tips for reliable Skills

Write clear instructions that name the job, the inputs the Skill should use, any rules, and the desired output format. Include examples when possible.

Link Drive files or Notebooks for material that changes, instead of uploading static copies. This keeps the Skill current without re-uploading.

Share with Edit access only for people who should update the Skill. Use View for wider distribution.

Test with real prompts after adding files. Confirm Gemini actually references the attached material in its responses.

If you rely on Workspace-specific Skills builders or Docs integration, see our earlier guide on [building Gemini Workspace Skills in Google Docs](/blog/build-gemini-workspace-skills-google-docs/).

## Watch a Skills overview

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/XQtvloPXap4"
    title="Google Gemini Skills Are Finally Here"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

The new file support and sharing options make Skills a practical replacement for Gems. Attach live Drive or Notebook material, share with the right permissions, and migrate any critical Gems before the December cutoff. Check the Skills page on the web if the options have not appeared yet—the rollout is gradual.

## Sources

- [Google Workspace Updates: Share skills and add files](https://workspaceupdates.googleblog.com/2026/11/share-skills-add-files-from-Drive-Notebook-Photos-to-skills-Gemini-app.html)
- [Gemini Apps Help: About the transition from Gems to skills](https://support.google.com/gemini/answer/18560919)
- [blog.google: Automate repetitive tasks with Skills](https://blog.google/products-and-platforms/products/gemini/automate-tasks-with-skills/)
