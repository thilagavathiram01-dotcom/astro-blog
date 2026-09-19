---
title: "How to Create and Edit Images with Google Pics in Workspace"
description: "Generate, refine, and share images with Google Pics: open pics.new, use Nano Banana object edits, fix text in-image, and edit photos inside Docs and Slides without leaving Workspace."
pubDate: 2026-09-19T15:45:00
tags: ["ai-tools", "tutorials", "google-workspace"]
heroImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1600&h=840&q=80"
---

Most image tools force a detour: export a slide graphic, open a separate editor, download a PNG, then paste it back. **Google Pics** is Google Workspace’s native image app for that job. It generates new pictures from a prompt, edits existing files from Drive or your device, and drops the result back into Docs, Slides, and Drive.

Google announced the rollout on 1 September 2026. Pics is built on the **Nano Banana** image model. You can try the standalone editor at [pics.new](https://pics.new/). This guide stays with official product pages and admin help.

<img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1400&q=80" alt="Designer reviewing color swatches and layouts on a desk" width="1400" height="800" loading="lazy" />

## Who can use Google Pics

Official availability:

- **Workspace:** Business Standard and higher
- **Consumer:** Google AI Pro and Google AI Ultra
- **Admins:** Pics is on by default for most organizations. Turn it on or off under Apps → Google Workspace → Drive and Docs → Google Pics

If the spark or Pics entry is missing, check the plan first. A free personal Gmail account is not the same as AI Pro or a qualifying Workspace edition.

Google’s product page notes Pics is still rolling out. If `pics.new` does not open the editor, wait for the account to receive the feature or confirm the admin toggle.

## What Pics is — and is not

Pics is a **creative Workspace file**, similar in spirit to Docs or Slides. Files live in Drive. You can share a link, invite editors, and keep versions in the same place as the rest of a project.

It is **not** Google Photos. Photos stores personal libraries and memories. Pics is for work and school visuals: posters, social assets, slide art, product mockups, and document illustrations.

It is also not the same as a one-shot “Help me create an image” prompt in Slides. Pics adds **object-level edits**, in-image text changes, crop presets, upscaling, and multi-edit sessions so you do not have to regenerate the whole picture when one label is wrong.

## Open Pics and generate a first image

1. Sign in with an eligible Google account.
2. Go to [pics.new](https://pics.new/) or create a Pics file from Drive.
3. Describe the image in plain language. Include subject, setting, style, and how it will be used (“square social post,” “16:9 slide hero,” “print poster”).
4. Review the **multiple options** Pics returns from one prompt. Google documents this as a first-class feature so you pick an iteration instead of rerunning blindly.
5. Save. The file syncs to Drive like any other Workspace document.

Practical prompt pattern that works better than a one-word request:

> Flat-lay product photo of a stainless water bottle on a light oak desk, soft window light from the left, empty space on the right for a headline, no logos, photorealistic, 4:5 social crop.

Keep brand names and other people’s likenesses out of prompts unless you have rights to use them.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/S18L1NFTda8" title="Say hello to Google Pics from Google Workspace" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Edit an existing photo instead of starting over

You can upload from Drive, Google Photos, or a local file. That path is the one to use when the subject already exists — a product shot, a conference photo, a scanned flyer.

Official editing tools to try in order:

- **Object segmentation.** Isolate one object and change it without rewriting the background. Add a short text note on the selected area when you need a targeted change.
- **Batch edits.** Queue several object or region changes, then apply them together. Revert any step you do not want.
- **In-image text.** Edit or translate words that already sit inside the picture. Official docs say this should keep the surrounding design and type style instead of flattening the whole graphic.
- **Crop for destination.** Presets for web, social, print, and digital.
- **Upscale.** Official Workspace blog lists 2K and 4K upscale options when you need a larger deliverable.

Do one job per pass. Change the product color, then fix the headline, then crop. A single mega-prompt that asks for lighting, layout, copy, and aspect ratio at once is harder to control.

<img src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=1400&q=80" alt="Tablet showing photo editing tools next to printed layouts" width="1400" height="800" loading="lazy" />

## Edit images without leaving Docs or Slides

Google’s September 2026 consumer post says Docs and Slides integration started at launch, with Drive following in the weeks after.

Typical path in a document or deck:

1. Insert or select an image in [Google Docs](https://docs.google.com) or [Google Slides](https://slides.google.com).
2. Open the Pics editing entry from the image (Google describes this as a single-click handoff into Pics tools).
3. Run object, text, crop, or upscale edits.
4. Apply the result back into the file. You stay in the same tab instead of downloading a PNG.

This is the workflow that matters for most teams: a slide already exists; only the hero graphic is wrong. Regenerating the whole deck is the slow path.

Google also documented dropping Drive files into Pics for brand concepts. Use a folder of approved product photos as source material rather than inventing the product from text.

## Share and collaborate like any Workspace file

Pics uses the same sharing model as Docs and Slides:

- Share a link with view, comment, or edit access.
- Invite teammates to refine the same image.
- Keep the file in the project Drive folder so reviewers do not hunt through downloads.

Treat Pics files as source assets. If legal or brand review needs a frozen PNG or PDF, export after sign-off. Do not treat a shared edit link as an archival original.

## Practical examples

**Social announcement.** Generate a 4:5 graphic in Pics, fix the on-image date with in-image text edit, crop for Instagram, then drop the file into a Slides recap for the marketing standup.

**Sales one-pager.** Start in Docs. Select a muddy product photo. Open Pics, isolate the product, clean the background, upscale, and return the image to the page.

**Localized poster.** Keep the layout. Use in-image translation on the headline only. Check spelling on the result — machine translation inside a graphic still needs a human pass.

**Mockup from a Drive packshot.** Upload the official packshot, generate a lifestyle scene around it, then export 16:9 for Slides.

## Limits and safety notes

- Usage of advanced AI features in Workspace is subject to Google’s published **usage limits**. Heavy generation sessions can hit those caps.
- Workspace customers should assume standard Workspace data protections apply: Google states Workspace customer data is not used to train Gemini models and is not reviewed by humans for that purpose. Follow your admin’s Workspace Intelligence and sharing settings.
- Pics respects ordinary Drive sharing. If a teammate cannot open the source photo, they cannot edit it in Pics either.
- Generated images can still invent logos, faces, or product details. Do not publish those as photographs of real people or official brand marks.

If you only need a quick decorative blob in a slide, the built-in Slides image prompt may be enough. Use Pics when you must **edit a region**, **change text in the picture**, or **keep a file that other people can revise**.

## Conclusion

Google Pics is the Workspace-native answer to “make this image, then fix one thing.” Open [pics.new](https://pics.new/), generate options, isolate objects, correct in-image text, crop for the channel, and send the file back to Docs or Slides. Eligibility is limited to qualifying Workspace and Google AI Pro/Ultra plans, and the Drive integration is still completing its rollout — confirm access before you promise the workflow to a team.

For slide-only prompting without the Pics editor, Google Workspace’s official Slides tutorials remain useful. For project files that live in Drive and need review, Pics is the tool to learn first.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/KYxyuSveqkE" title="Gemini in Slides: Create polished presentations from Drive content" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- [Try Google Pics: Easy image creation and editing in Google Workspace](https://blog.google/products-and-platforms/products/workspace/google-pics/)
- [Google Pics brings pro-level AI image creation and editing to Google Workspace](https://workspace.google.com/blog/product-announcements/google-pics-brings-pro-level-ai-image-creation-and-editing-to-google-workspace)
- [Google Pics product page](https://workspace.google.com/products/pics/)
- [Turn Google Pics on or off for users](https://knowledge.workspace.google.com/admin/users/access/turn-pics-on-or-off-for-users)
- [Get more done with the latest Google AI plan updates](https://blog.google/products-and-platforms/products/google-one/fall-2026-ai-plan-updates/)
- [Say hello to Google Pics from Google Workspace (YouTube)](https://www.youtube.com/watch?v=S18L1NFTda8)
