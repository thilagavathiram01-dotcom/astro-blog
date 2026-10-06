---
title: "How to label AI images on the Play Store in India"
description: "Declare AI-generated images in Play Console so Google Play can show the India AI label on store listing graphics."
pubDate: 2026-10-06T10:00:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "google", "developer", "how-to", "tutorials"]
noindex: false
---

Google Play Store version 53.5, listed in the 5 October 2026 Google system release notes, says AI-generated images in India will now include an AI label, with some exceptions. If you ship screenshots, feature graphics, or promo videos made with a generator, the label starts with a self-declaration in Play Console — not with a badge you draw yourself.

A line in the monthly notes is not the same as a finished rollout. Google warns that a changelog item can take months to reach every device. Treat the India label as something to prepare for now, then check a real listing on an account set to India after you publish.

This guide covers what Play asks developers to declare, where the checkbox lives, and what not to assume about ads, YouTube, or watermark tools.

## What the October Play Store note actually says

The October 2026 Google Play services and Play Store notes, summarised by 9to5Google from Google’s system release notes, include this phone item for Play Store v53.5: AI-generated images in India will now include an AI label, with some exceptions.

The same Play services build, v26.39, also adds NFC tap-to-open details for Find Hub tags and card art on wallet tokenisation prompts. Those are separate changes. The image label is a Play Store listing behaviour aimed at India.

Google does not publish the exception list in that short note. Do not invent a rule such as “icons are exempt” or “only promo videos count.” If an image was generated or edited with AI and you are uploading it as a store asset, declare it and let Play apply the label where the product requires one.

## Why Play Console uses a self-declaration

Play Console Help says regulations require AI-generated or edited content or assets — images, text, or video — to be labelled under certain circumstances. Google Play uses a self-declaration model so users can tell when they are looking at assets made with AI tools.

Two rules matter:

- The requirement applies to assets you introduce through Play Console content creation flows.
- Each image or video is declared on its own. A checked box on one screenshot does not cover the rest of the listing.

Help documentation names visual assets used in store listings, promotional content, and YouTube videos attached to those flows. Declared assets are AI-labelled on the Google Play Store and on other surfaces where those assets are used.

This is not the same control as Google Ads. Ads Help says AI rules in the European Union, India, and New York can require disclosures on certain AI-generated or edited ad creatives, and that advertisers can add a label in the creative or use the AI label setting in Google Ads and related tools. A Play listing declaration does not fill in that Ads setting.

![Android phone showing an app store style screen](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## Declare an AI image in Play Console

You need a Play Console account with permission to edit store presence. The steps below follow Play Console Help.

1. Open [Play Console](https://play.google.com/console) and select the app.
2. Go to **Grow users**, then **Store presence**. Open **Store listings** or **Promotional content**, depending on the asset.
3. Start the content creation flow for the graphic or video you are adding. Do not rely on an old asset that never passed through the current flow.
4. For each item, look for the checkbox whose wording is similar to “Regulations require that AI-generated content be labeled under certain circumstances.”
5. Check the box for every asset you judge to be in scope. You can clear the box in the creation flow or later from the asset library asset details if the file was not AI-generated or AI-edited.
6. Review the listing and submit. Help says declared assets will carry the AI label on Google Play and other surfaces where they are used.

Repeat the check for phone screenshots, tablet screenshots, the feature graphic, and any promo video you attach. A YouTube URL used as a preview is still an asset in that flow, so judge it separately from the screenshots.

If several people upload creatives, put the checkbox in the release checklist. The model is self-declaration, so an unchecked AI screenshot will not label itself just because another screenshot was declared.

## What users in India should expect

On a phone with Play Store v53.5 or later, AI-generated images in India are supposed to show an AI label, with exceptions Google has not listed in the short release note. Update Play Store from the store’s own settings page, or update system services, before you judge whether a listing is missing a badge.

On Pixel phones, 9to5Google describes the system-services path as Settings, your name, All services, Privacy and security, then System services. Availability still varies by account and device.

The label is a store disclosure. It does not prove the image is fake, and a missing label does not prove the image is a photograph. Play’s own note allows exceptions, and changelog features often roll out in stages.

If you want a separate check on images made with Google’s generators, read [how to check SynthID watermarks in Gemini](/blog/check-synthid-watermarks-gemini/). SynthID is a watermark signal. The Play label is a developer declaration shown on the store.

![Person reviewing app screens on a laptop](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Watch a Play Console listing walkthrough

Android Developers’ video below covers store listing assets and how Play uses screenshots and video. It predates the India AI label, so use it for the listing workflow, then apply the checkbox steps above.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/xLecR6zYiFY"
    title="Make your app shine for all devices on Google Play"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips before you upload generated graphics

Keep a one-line note in the asset filename or ticket, such as “AI-edited screenshot, declared 6 Oct 2026.” The asset library is where you later tick or untick the declaration, and a naming habit saves a second review.

Do not paint your own “AI” stamp over the screenshot and skip the checkbox. Play says declared assets are labelled by the store. A homemade watermark can also clash with graphic policies that limit text overlays.

Edited counts. Play Console Help covers content that is AI-generated or edited, not only images built from a blank prompt. A screenshot you extended or restyled with an image model belongs in the same review.

Text in the short and full description is a different field from visual assets. Help mentions images, text, or video in the regulation sentence, but the assets section you must self-declare calls out visual assets. If a checkbox appears on a text field in your Console, follow that control. Do not assume a screenshot declaration covers the description.

Ads stay on their own track. If the same image runs in Google Ads in India, use the AI label setting described in Google Ads Help as well as the Play declaration.

## Conclusion

The October 2026 Play Store note is narrow: AI-generated images in India get an AI label, with some exceptions, as Play Store v53.5 rolls out. Developers meet that with a per-asset checkbox in store listing and promotional content flows. Check the box when the file was generated or edited with AI, submit, and confirm the listing on an India account once the store build is present.

## Sources

- [Declaring AI-generated content in Play Console](https://support.google.com/googleplay/android-developer/answer/17262077?hl=en) — Play Console Help
- [What’s new in Android’s October 2026 Google System Updates](https://9to5google.com/2026/10/05/october-2026-google-system-updates/) — 9to5Google, citing Google system release notes
- [About generated images in Google Ads](https://support.google.com/google-ads/answer/14150986?hl=en) — Google Ads Help
- [Make your app shine for all devices on Google Play](https://www.youtube.com/watch?v=xLecR6zYiFY) — Android Developers
