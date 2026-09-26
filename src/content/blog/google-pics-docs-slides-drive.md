---
title: "How to Use Google Pics in Docs, Slides, and Drive"
description: "Set up Google Pics, generate images with Nano Banana, and edit objects or text inside Docs, Slides, and Drive."
pubDate: 2026-09-26T14:00:00
heroImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "google", "productivity", "ai"]
noindex: false
---

Google Pics is Workspace’s image studio, not another chat box that dumps a picture into a thread. You open pics.new or click an image already sitting in Docs or Slides, then generate, isolate objects, rewrite on-image text, and drop the result back into the file you were already editing.

Google opened general access on 1 September 2026. The product sits on the Nano Banana image model and ships as both a standalone editor and an overlay inside Workspace. This guide covers who can use it, how to start a file, how to edit inside Docs and Slides, and what still waits on the Drive wave.

## Who can open Google Pics today

Google listed these paid tiers in the launch posts:

- Google AI Pro and Google AI Ultra personal plans
- Workspace Business Standard, Business Plus, Enterprise Standard, and Enterprise Plus
- Google AI Pro for Education

If your account is on a lower Workspace edition or the free Gemini tier, Pics will not appear. Ask an admin whether the domain has the Google AI add-on and whether Pics is allowed.

Keep Activity and Connected Apps do not replace a Pics license. Those Gemini settings control chat connectors. Pics is a separate Workspace app.

## Open the standalone editor at pics.new

The shortest path is the official shortcut Google published: [pics.new](https://pics.new).

1. Sign in with the Google account that holds AI Pro, Ultra, or a qualifying Workspace seat.
2. Choose **Generate** to start from a prompt, or import a file from your computer, Drive, or Google Photos.
3. Review the set of options Pics returns from one prompt. Google built multiple generations into the first pass so you can pick a direction instead of regenerating blindly.
4. Save the chosen frame. From here you stay in the editor for object edits, text edits, crop, and upscale.

Use a specific brief. Name the format, aspect ratio, audience, and what must stay readable at thumbnail size. “Square social post for a product launch, high contrast type, no tiny legal copy” beats “make a nice poster.”



![Designer reviewing generated layout options on a laptop](https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80)



## Edit an image already in Docs or Slides

The Workspace overlay is the part that saves tab switching. Google said the Docs and Slides integration started on launch day. Drive follows in a later wave.

1. Open a Doc or a Slides deck that already contains an image, or insert a placeholder photo.
2. Select the image. Open Pics from the image controls. Google describes this as a single-click jump into the full editor, still attached to that file.
3. Run the edit. Isolate an object, rewrite the headline on the graphic, crop for the slide ratio, or upscale before you present.
4. Confirm the update. The revised image returns to the same Doc or slide. You do not export, download, and re-upload unless you want a second copy.

Treat the overlay like a focused pass, not a new design system. Brand colors, logo files, and approved type should still live in your template. Pics changes pixels; it does not replace your style guide.

If you already route other work through Gemini connectors, keep those accounts aligned. The same Google identity you use for [Gemini Connected Apps](/blog/gemini-connected-apps-september-2026/) should own the Docs file you are editing, or sharing and comments get messy.

## Use the precision tools Google actually shipped

The September posts list a short, specific tool set. Stay inside that list instead of assuming a full Photoshop clone.

**Object segmentation.** Isolate one object and change only that region. You can leave comments on a region and batch several of those notes in one pass. Useful when a product shot is fine except for a label or a background prop.

**In-image text editing and translation.** Change or translate letters that already sit on the graphic without rebuilding the layout or swapping the font family. Check the result at 100% zoom. Small type still fails if the source image is soft.

**Crop for the destination.** Google lists web, social, print, and digital crop targets. Set the crop before you upscale so you are not paying generation cost on pixels you will throw away.

**Upscale to 2K or 4K.** Use this after the composition is locked. Upscaling a draft you will discard wastes quota and time.

**Multiple edits and revert.** Apply several changes, then roll back the ones that miss. Do not stack ten unreviewed prompts. Make two or three, inspect, revert, then continue.

**Collaboration.** Share a Pics file with teammates and edit the same image. Agree who owns the final export so two people do not overwrite a slide five minutes before a meeting.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/S18L1NFTda8"
    title="Say hello to Google Pics from Google Workspace"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Drop Drive files into Pics for brand work

Google showed a Drive-to-Pics path for brand concepts: pull existing assets from Drive, generate variations, then push a finished frame back into the deck or doc.

Until the in-Drive editor finishes rolling out, use this loop:

1. Keep source logos, product photos, and approved backgrounds in a shared Drive folder.
2. Open pics.new and import from Drive rather than a random desktop download.
3. Generate or edit against those files so the output stays close to assets legal already cleared.
4. Save the result and insert it into Slides or Docs from Drive, not from a private Downloads folder.

When Drive editing arrives on your domain, the extra import step should shrink. Until then, the folder habit still keeps versions honest.



![Team collaborating on visual assets around a desk](https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80)



## Practical prompts that match the product

Pics responds better when you name the object, the change, and the constraint.

- “Keep the bottle, replace the wooden table with a white seamless sweep, leave the label untouched.”
- “Translate the headline on this poster into Spanish. Do not change the photo or the footer.”
- “Crop this slide graphic to 16:9 and upscale to 2K after the crop.”
- “Generate four square options for a product launch post. High contrast type. No tiny legal text.”

Avoid vague taste notes (“make it premium”) unless you also name colors, lighting, and what must not move.

## Limits you should plan for

**License gates.** No Pics tile usually means the plan or the admin policy, not a broken link.

**Staged Drive rollout.** Docs and Slides were day one. Drive editing was promised for the following weeks. If the overlay is missing in Drive, use pics.new and import.

**Model behavior.** Nano Banana can invent details. Read every on-image word after a translation pass. Confirm logos still match the vector file in Drive.

**Sharing.** A Pics collaboration link is not the same as a published Drive file. When the image is final, store the approved export in the project folder and lock edit access.

**Quota and cost.** Paid plans include generation capacity, but heavy batch work still burns through it. Draft in low resolution, then upscale the keeper.

## Tips that save a revision cycle

Start from an existing photo when the product already exists. Generation is faster at adding a background than at inventing accurate packaging.

Lock type size against the smallest place the asset will run. A headline that looks fine in Pics can collapse on a phone.

Keep one “source of truth” image in Drive. Treat Pics outputs as numbered versions, not as five competing finals.

If a teammate needs only a crop, do that crop in Slides first. Reserve Pics for object and text work the native editor cannot do.

## Conclusion

Google Pics is useful when you need an image that lives inside the same Doc or deck as the rest of the work. Open pics.new for a blank start. Click an image in Docs or Slides when the file already exists. Use object selection, on-image text, crop, and upscale in that order. Wait for the Drive overlay if it has not reached your domain yet, and keep approved assets in a shared folder so the next edit starts from the right file.

## Sources

- [Try Google Pics: Easy image creation and editing in Google Workspace](https://blog.google/products-and-platforms/products/workspace/google-pics/) — Google, 1 September 2026
- [Google Pics brings pro-level AI image creation and editing to Google Workspace](https://workspace.google.com/blog/product-announcements/google-pics-brings-pro-level-ai-image-creation-and-editing-to-google-workspace) — Google Workspace Blog, 1 September 2026
- [Get more done with the latest Google AI plan updates](https://blog.google/products-and-platforms/products/google-one/fall-2026-ai-plan-updates/) — Google, 9 September 2026
- [Say hello to Google Pics from Google Workspace](https://www.youtube.com/watch?v=S18L1NFTda8) — Google Workspace, 1 September 2026
