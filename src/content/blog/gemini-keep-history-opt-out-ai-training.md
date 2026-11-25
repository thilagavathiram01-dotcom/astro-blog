---
title: "How to Keep Gemini Chat History and Opt Out of AI Training"
description: "New Gemini settings let you keep chat history while opting out of AI model training. Step-by-step guide for web and mobile."
pubDate: 2026-11-25T17:00:00
heroImage: "https://images.unsplash.com/photo-1772182125359-e472ca9b27c2?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "how-to", "security"]
noindex: false
---

Google has split Gemini’s old Keep Activity control into two independent settings. You can now keep your chat history for reference while stopping future conversations from training generative AI models.

This change, announced on 16 November 2026, is rolling out globally in the Gemini app and on gemini.google.com. It replaces the single switch that previously forced a trade-off: either save history (and allow training) or delete it (and opt out). The update gives clearer control without removing access to past chats.

![Person holding a smartphone showing privacy and settings options](https://images.unsplash.com/photo-1772182125359-e472ca9b27c2?auto=format&fit=crop&w=800&q=80)

## What the New Controls Do

Two settings now appear under Gemini History (or Data & privacy → History in the app):

- **History**: Controls whether chats are saved to your Gemini activity. You can also set auto-delete periods and manually review or delete entries.
- **Chat content including text & attachments** (under “Help train generative AI models with”): Decides if the text and files you send are used to train models. This is separate from History.

Training on audio and Gemini Live videos/screenshares remains its own opt-in box.

If you leave History on and uncheck the chat-content training box, your conversations stay available in the app or web history, but future ones are not used for model training (unless you send feedback). Turning History fully off still saves future chats for roughly two months for response context, feedback processing, and safety review with human reviewers. Previously, off-state chats were kept only about 72 hours.

Defaults depend on your previous Keep Activity setting. If it was off when the update reached you, both new options start off. If it was on, both start on—you must manually uncheck training if you want to opt out while keeping history. For users over 18 the chat-content box is often enabled by default, so check it.

The change applies only to future chats. Content already used for training or reviewed by humans can remain for up to three years, separate from your account history.

## Step-by-Step: Opt Out on the Web

1. Open [gemini.google.com](https://gemini.google.com) and sign in.
2. Click the settings gear (usually bottom left or via the menu).
3. Scroll to the bottom and select **Gemini History**. This opens myactivity.google.com/product/gemini.
4. Ensure the History dropdown is set to **On** if you want chats saved.
5. Under “Help train generative AI models with”, uncheck **Chat content including text & attachments**.
6. Confirm **Turn off** if prompted.
7. Optionally review the separate audio/Live checkbox.

You can also go directly to [myactivity.google.com/product/gemini](https://myactivity.google.com/product/gemini).

## Step-by-Step: Opt Out in the Gemini App (Android / iOS)

1. Open the Gemini app.
2. Tap your profile or the menu at the top, then **Settings**.
3. Under **Data & privacy**, tap **History**.
4. Keep History on.
5. Uncheck the chat content / attachments training option.
6. Tap **Turn off** to confirm.

Labels can vary slightly during rollout (“text & uploads” vs “text & attachments”). If you still see only the old single Keep Activity switch, the update has not reached your account yet—check again in a few days.

![Smartphone home screen showing AI app icons including Gemini](https://images.unsplash.com/photo-1757310998309-87a97e562ee5?auto=format&fit=crop&w=800&q=80)

## Additional Tips and Limitations

- **Feedback still trains**: Submitting thumbs-up/down or other feedback can send the related chat (and recent context) for improvement, even with the training box off.
- **Temporary / incognito chats**: These are not used for training by default.
- **Connected apps and Workspace**: History settings affect Gemini Apps Activity. Turning certain options off can limit Gmail, Drive, or other integrations until you re-enable them.
- **Account type**: Work or school accounts may have admin-managed controls. Personal accounts see the full options.
- **Delete old data**: Use the activity page to review and delete past chats individually or in bulk. This does not remove copies already selected for human review.

For comparison, ChatGPT offers a similar independent “Improve the model for everyone” toggle that lets you keep history. See our earlier guide on [ChatGPT privacy center setup](/blog/chatgpt-privacy-center-setup/) for the parallel steps.

## Watch the Quick Walkthrough

This short video covers the exact web steps and the main caveats:

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/DMMd_QPkJx0"
    title="How to Stop Gemini Training on Your Chats (And Keep Your History)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

The new Gemini controls remove the forced choice between history and privacy. Keep History on, uncheck chat-content training, and your past and future conversations remain available for reference while future content stays out of model training (barring feedback). Check your settings today—the rollout is active as of late November 2026.

Official sources:
- [Google blog announcement (16 Nov 2026)](https://blog.google/innovation-and-ai/products/gemini-app/updated-controls/)
- [Gemini Apps Privacy Hub](https://support.google.com/gemini/answer/13594961)
- [Manage & delete history](https://support.google.com/gemini/answer/13278892)
