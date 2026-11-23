---
title: "Chrome 159 Gemini File Upload Policy for Admins"
description: "Control local file uploads to Gemini in Chrome with the new GeminiChromeFileUploadSettings policy in Chrome 159. Steps, values, and platforms for admins."
pubDate: 2026-11-23T14:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["google", "security", "tutorials"]
noindex: false
---

Chrome 159 gives enterprise and education admins a precise new control over Gemini in Chrome. The GeminiChromeFileUploadSettings policy decides whether managed users can upload local files into the Gemini side panel. It arrives as Chrome 159 moves toward stable on December 8, 2026.

This is useful because previous Gemini controls were broader. Admins could turn Gemini off entirely with GeminiSettings or GenAiDefaultSettings. Now they can keep the side-panel summaries and page questions available while blocking file uploads from the local disk.

## What the New Policy Does

GeminiChromeFileUploadSettings is an integer policy. Setting it to 0 (or leaving it unset) allows local file uploads. Setting it to 1 blocks them. The policy maps to the internal preference `glic.file_upload_allowed`.

It is supported starting in Chrome 159 on Windows, macOS, Linux, and ChromeOS. Android support was proposed for policy parity but marked obsolete while Google re-evaluates end-to-end functionality. Standard Chromebooks do not receive full Gemini in Chrome in the same way Chromebook Plus devices do.

File upload itself has been present in the Gemini side panel since around Chrome 151. Users click the + button in the panel and choose Upload files or Add from Drive. The new policy only affects the local file path for managed users.

![Laptop showing a browser interface](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## How to Set the Policy in the Admin Console

Admins manage this through the Google Admin console under Chrome policies, the same place they already set GeminiSettings.

1. Sign in to the Google Admin console with an administrator account.
2. Go to Devices > Chrome > Settings.
3. Select Users & browsers or the organizational unit / group you want to configure.
4. Scroll to the Generative AI section.
5. Locate Gemini integrations and the related file-upload control once Chrome 159 is available.
6. Choose the desired value (allow or block) and save.

Settings typically apply within minutes but can take up to 24 hours to reach every device. Group settings override organizational units. You can also push the policy via the Windows registry, macOS preference files, or Chrome OS policy templates if you manage browsers outside the Admin console.

For registry on Windows the key is under Software\Policies\Google\Chrome with the DWORD GeminiChromeFileUploadSettings. Value 0 allows uploads; value 1 blocks them.

## Relationship to Existing Gemini Policies

GeminiSettings still controls whether the Gemini integration appears at all (0 = allow, 1 = block). GenAiDefaultSettings sets the broader default for generative AI features. The new file-upload policy is narrower and only takes effect when Gemini itself is allowed.

If you set GeminiSettings to 1, the file-upload setting becomes irrelevant because the side panel is unavailable. Schools that want page summaries but not local document uploads can leave Gemini enabled and set GeminiChromeFileUploadSettings to 1.

## Platforms and Rollout Timing

Chrome 159 is currently on the beta channel and is scheduled for stable on December 8, 2026 according to the Chromium release calendar. Early stable builds have already begun limited rollout on some platforms.

Gemini in Chrome itself is expanding to more devices, including certain ChromeOS and Googlebook configurations in this release. Admins should review the policy before the stable channel reaches their fleets so the desired setting is already in place when users update.

![Developer workspace with multiple screens](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## Practical Tips for Admins

Test the policy on a small organizational unit first. Open the Gemini side panel on a managed device running Chrome 159 beta or early stable and confirm whether the Upload files option is present or disabled according to your setting.

Document the decision for your help desk. Users may ask why they can summarize a page but cannot attach a local PDF. A short internal note that points to the policy avoids confusion.

Combine it with other data-loss controls if your organization already uses Chrome Enterprise Premium or DLP rules. Blocking local uploads is one layer; content inspection and Drive sharing policies remain complementary.

If you manage mixed environments (Windows, Mac, and ChromeOS), apply the policy consistently so behavior does not differ by platform.

## Video: Using Gemini in Chrome

The following video walks through the basic side-panel experience that the new policy now lets admins govern more finely.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/eV222Xz4Qu4"
    title="How to Use Gemini in Chrome"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Chrome 159’s GeminiChromeFileUploadSettings policy gives admins a targeted way to allow Gemini’s page-aware features while restricting local file uploads. Set it before the December 8 stable release so managed users receive the behavior you intend from the first day.

For related Gemini productivity tips see our guide on [using Gemini in Gmail](/blog/gemini-in-gmail/).

## Sources

- Chrome Enterprise release notes for Chrome 159 (published November 18, 2026)
- Chromium policy definition for GeminiChromeFileUploadSettings (supported_on Chrome 159+)
- Chrome Platform Status and Chromium release schedule for version 159 stable date
- Google Chrome Enterprise Help Center documentation on Gemini in Chrome and Generative AI policies
