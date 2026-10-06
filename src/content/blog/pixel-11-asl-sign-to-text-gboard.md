---
title: "Pixel 11 ASL Sign-to-Text: Setup and Tips in Gboard"
description: "Turn on Pixel 11 sign-to-text in Gboard, grant camera access, and sign in ASL so English text appears in Messages, notes, or Gemini."
pubDate: 2026-10-06T16:30:00
heroImage: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["pixel", "android", "how-to", "tutorials"]
noindex: false
---

Typing in English is not the first language for many deaf and hard-of-hearing people who sign. Pixel 11 puts American Sign Language on the keyboard itself. Sign-to-text, built into Gboard, watches the front camera and writes English as you sign.

Google built the feature with the Deaf community and powers it with a multilingual sign language-to-text model, called SL2T. The model reads hand shapes, facial expressions, and body movement, then turns that into written English sentences. It supports one-handed and two-handed signing.

This guide follows Google’s Pixel Phone Help page and the August 2026 Pixel announcement. The feature is limited to Pixel 11 devices, and the keyboard language must be English (United States) or English (Canada).

## What sign-to-text is for

Sign-to-text works in any app that accepts Gboard. You can sign a message, a note, a web search, or a Gemini prompt without switching to a separate translator app.

Google separates two jobs. Gboard sign-to-text is for writing. Live Transcribe is for face-to-face conversation, such as ordering coffee or talking with a colleague. If you already use camera descriptions in Gemini Live, the [Guided vision shortcut guide](/blog/android-accessibility-shortcut-guided-vision/) covers a different accessibility path.

The announcement also notes that translations can appear on the outer display when you sign toward the front camera. On the support page, translated words stream into the text field of the app you have open.



![Person holding a smartphone and looking at the screen](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)



## Check requirements before you open Gboard

Stop here if either item fails. The feature will not appear on older Pixels.

1. Confirm the phone is a Google Pixel 11. Google’s help page lists that series as the requirement.
2. Install the latest Gboard from the Play Store.
3. Set the Gboard language to English (United States) or English (Canada). Other languages do not unlock sign-to-text in the current release.
4. Plan to grant camera permission. Without it, the tool cannot start.

Update Gboard from Play Store → Gboard → Update if the Sign-to-text control is missing after a system update. The control ships with the keyboard app, not as a separate download.

## Add Sign-to-text to the toolbar

The fastest launch is a toolbar button. Google’s setup path is short.

1. Open any text field so Gboard appears. Messages is a good first app.
2. Tap **Sign-to-text** if it is already on the toolbar.
3. If it is not visible, open the Gboard menu and tap **Sign-to-text**.
4. To pin it: tap **Edit**, touch and hold **Sign-to-text**, then drag it onto the toolbar.
5. Read the onboarding screen. It includes short videos on framing your face, upper body, and hands for the front camera.
6. Continue and allow camera access when Android asks.

Pinning matters. Hunting through the menu mid-conversation defeats the point of a real-time translator.

## Sign into a text field

Practice in a notes app before you send a message.

1. Open an app that accepts typing, such as Google Messages, Keep, or Chrome.
2. Confirm Gboard is the active keyboard.
3. Tap **Sign-to-text** on the toolbar, or open the menu and choose it.
4. Allow the camera if this is the first run. A preview window opens.
5. Hold the phone so the front camera sees your hands, upper body, and face. Landmarks appear over those regions while Gboard is capturing.
6. Sign. English words stream into the text field as you go.
7. When you finish a thought, move your hands out of the camera view. That signals the end of the sign sequence.
8. Tap **Sign-to-text** again to return to the normal keyboard.

Suggested words can appear on the toolbar while you sign. Tap one if the model offers a closer match. You can also tap **Minimize** to shrink the keyboard without losing the draft.

Google says pose coordinates, your videos, and the translations are not stored. Treat that as the privacy claim on the help page, not as a reason to sign sensitive account numbers in a crowded room. The camera is still live while the session is open.



![Hands using a phone keyboard in daylight](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)



## Edit without starting over

A streamed translation will miss a sign or pick the wrong English word. Gboard expects you to revise in place.

- Tap the standard keyboard button and fix a word by typing.
- Use the prediction strip for an alternate suggestion.
- Use Gboard writing tools to format, punctuate, or polish the sentence. Google documents those tools separately from sign-to-text.
- Switch back to signing and continue. You do not have to clear the field.

Read the line before you send it. Sign-to-text is a writing aid, not a certified interpreter. For medical, legal, or financial messages, confirm the English with a person who knows ASL if the wording matters.

## What leaves the phone

Google’s privacy section is specific. The camera watches face, hands, and upper body in real time. Gboard does not upload the video. It sends a 2D representation of key points from those movements to a server, which translates the points into written English.

Those coordinates are processed on secure servers for the live translation. Google states that inputs are not saved, shared, or used to train models.

If the phone shows a system health warning, Gboard posts a short notice and asks you to close other apps. Free memory and close camera-heavy apps, then start the session again.

## Use it with Gemini and search

The help page lists Gemini prompts as a supported input, alongside messages, notes, and web search. Open the Gemini app, focus the prompt field, switch to sign-to-text, and sign the request. Review the English prompt before you submit it.

The same pattern works in Chrome’s address or search box. Sign the query, check the text, then run the search.

Do not expect other sign languages yet. Google’s Made by Google demo described American Sign Language as available now, with more sign languages planned. The help page still requires an English (US or Canada) keyboard.

## Watch the Made by Google demo

The Verge’s recap of the August 2026 Pixel event includes the on-stage sign-to-text demo with actor Daniel Durant, starting around the five-minute mark.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/VC_Ft0stjCM"
    title="Google Pixel 11 event in 8 minutes"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## If the button never appears

Work through this list in order.

- Confirm the model is a Pixel 11, not a Pixel 10 or earlier. The help page does not list older phones.
- Update Gboard, then reboot.
- Set the keyboard language to English (United States) or English (Canada), then reopen the text field.
- Check Settings → Apps → Gboard → Permissions and allow Camera.
- Remove and re-add the toolbar button with Edit.
- If a health warning appeared, close other apps and retry.

A VPN will not move the feature onto a non-Pixel phone. Availability is tied to the device, not to a region toggle you can flip.

## Tips for a clearer translation

- Frame face, hands, and upper body together. Cropped hands lose grammar that lives in facial expression.
- Use even light. Backlight on the front camera hides landmarks.
- Sign at a steady pace on the first runs so you can see which signs the model drops.
- End a phrase by moving your hands out of frame, then check the sentence.
- Keep the toolbar button pinned so you are not opening menus in Messages.
- Close the session when you are done. A live front camera should not stay open in the background.
- For in-person conversation, switch to Live Transcribe instead of holding the phone up as a keyboard.

## Conclusion

Pixel 11 sign-to-text is a Gboard mode, not a separate app. Update the keyboard, set English (US or Canada), pin the toolbar button, grant the camera, and sign toward the front camera. English streams into the field you already have open.

Review every line before you send it, and use Live Transcribe when the other person is in the room. Google’s current release covers ASL on Pixel 11 only, with more sign languages listed as future work.

## Sources

- [Use sign-to-text on Pixel (Google Help)](https://support.google.com/pixelphone/answer/17468449)
- [How to use sign-to-text translation on Pixel 11 (Google blog)](https://blog.google/products-and-platforms/devices/pixel/american-sign-language-sign-to-text-pixel-11/)
- [Live Transcribe and notification (Android accessibility)](https://support.google.com/accessibility/android/answer/9158064)
