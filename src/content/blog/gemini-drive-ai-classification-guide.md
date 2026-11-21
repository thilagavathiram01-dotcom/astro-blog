---
title: "How to Set Up Gemini AI Classification in Google Drive"
description: "Step-by-step admin guide to Gemini-powered data classification labels in Google Drive. Test instructions, set auto-apply, and monitor results."
pubDate: 2026-11-21T10:00:00
heroImage: "https://images.unsplash.com/photo-1751448555253-f39c06e29d82?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "google", "tutorials", "security", "productivity"]
noindex: false
---

Google Workspace admins can now apply classification labels to Drive files using plain-language instructions with Gemini. The feature reached general availability on November 17, 2026, after an open beta. It removes the need to manually label hundreds of training files for a custom model.

This guide walks through setup in the Admin console, testing instructions, enabling auto-apply, and reviewing results. It applies to organizations on Enterprise Plus, Google AI Pro for Education, or Frontline Plus.

## Prerequisites and Limits

You need the Manage Classification Labels, Manage DLP rule, and View DLP rule privileges. Labels must be published, enabled for Drive and Docs, and use a single-select options list or badge list field with 2 to 7 options.

Organizations can run one active Gemini instruction model. The total limit is five AI classification models (Gemini instructions plus custom-trained models). Files must sit in Shared Drives or be owned by users with licenses that support classification labels.

Gemini needs roughly 50 words and 200 characters of readable text, including OCR-extracted text, for reliable results. It skips client-side encrypted files and non-text media without extractable text. It never overwrites labels that users applied, accepted, or modified, nor labels set by DLP rules.

Data processing respects your Workspace Data Regions settings. Eligible file content stays in your selected region (United States or Europe). Admin instructions are stored in the United States. Content and instructions remain isolated to your organization and are not used to train Google’s global models.

![Security dashboard showing status indicators](https://images.unsplash.com/photo-1751448555253-f39c06e29d82?auto=format&fit=crop&w=800&q=80)

## Create Gemini Instructions

1. In the Admin console, go to **Security > Access and data control > Data classification**.
2. In the AI classification section, start creating Gemini instructions (or select an existing published label that meets the criteria).
3. Choose the classification label and the eligible field.
4. On the instruction details page, write clear guidance for every label option. Describe what the option represents, the clues or keywords Gemini should look for, and any exceptions where the option should not apply.
5. Optionally click **Test instructions**. Paste 500–10,000 characters of sample document text, run the test, and refine the descriptions until the predicted label matches your expectations.
6. Select which label options are eligible for auto-apply. Unchecked options will not be applied automatically.
7. Name the instructions and save, or save and proceed to auto-apply setup.

Good instructions focus on content signals rather than vague terms. For example, tell Gemini that “Confidential” applies when a document contains customer personal data, financial figures, or internal strategy, and that it should not apply to public marketing materials.

## Turn On Auto-Apply and Scope Users

After the instructions are saved:

1. Open the Model details page for the Gemini instructions.
2. Click **Set up auto-apply** (or Edit auto-apply if already configured).
3. Check the label options you want Gemini to apply.
4. Choose the organizational units or groups whose files should be evaluated. The default is the top-level organization; groups override OUs.
5. Turn the setting On and save.

Enabling auto-apply starts a one-time scan of existing and inactive files. The scan typically begins within 1–2 weeks and can take weeks or months depending on volume. New uploads and edits are evaluated after a short cooldown. Updating instructions applies only to future content; previously evaluated files are not rescanned on demand. For inactive files with Gemini instructions, you may need to enable the option explicitly on the instructions page.

![Rows of filing cabinets representing organized documents](https://images.unsplash.com/photo-1765502318157-61d9bb6579e0?auto=format&fit=crop&w=800&q=80)

## Monitor Results and User Acceptance

The Model details page shows near real-time counts of labeled files by option. The User acceptance chart tracks activity over the last 180 days: how many users reviewed the banner and how many accepted the suggested label.

Users with the right label permissions (Can view, or Can apply labels and set values) who are Editors or Owners on a file can Accept or Edit the label directly in the Drive banner when only one label is auto-applied. Audit logs and the Drive events log record labeling events and user decisions. You can open filtered views of Label applied and Label field value changed events from the Model details page.

If acceptance is low, return to the instructions, adjust the descriptions or clues, re-test with sample text, and update. Gemini classification coexists with custom models and DLP rules; DLP takes priority, and higher options in a label’s list take priority when multiple sources suggest different values.

## Practical Use Cases

Labeled files feed into DLP rules that can block external sharing, apply information rights management restrictions, or trigger alerts. They also support retention rules in Vault and make sensitive content easier to find or report on during audits. In agentic workflows, correctly labeled files help limit what automated agents can access or act on.

Start with a small set of high-value labels (for example, Public, Internal, Confidential) and expand once the acceptance rate looks healthy. Pair the setup with clear guidance for users so they understand why a label appeared and how to correct it.

For related Workspace AI controls, see [How to Build Gemini Workspace Skills in Google Docs](/blog/build-gemini-workspace-skills-google-docs/).

## Sources

- [Google Workspace Updates: Gemini-powered data classification in Google Drive is now generally available](https://workspaceupdates.googleblog.com/2026/11/gemini-powered-data-classification-in-Google-Drive-is-now-generally-available.html)
- [Label Google Drive files automatically using AI classification (Google Workspace Admin Help)](https://knowledge.workspace.google.com/admin/security/label-google-drive-files-automatically-using-ai-classification)

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/gS0i6xzaHuc"
    title="Turn your files into knowledge with Gemini in Google Drive"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
