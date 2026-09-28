---
title: "How to Search Multiple Items With Circle to Search"
description: "Use Circle to Search on Pixel 10 and Galaxy S26 to identify several objects in one image, find a full outfit, and ask follow-up questions."
pubDate: 2026-09-28T16:00:00
heroImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "google", "how-to", "tutorials", "pixel", "samsung"]
noindex: false
---

Circle to Search already lets you look up one object on an Android screen without leaving the app. In February 2026 Google added multi-object image search so one circle can cover a whole scene.

The update first shipped on Samsung Galaxy S26 and Google Pixel 10 phones. Google says Circle to Search now runs on more than 580 million Android devices, and the multi-object layer is expanding beyond those flagships.

This guide follows the official Search blog post by Harsh Kharbanda and the standard Circle to Search gesture used on Pixel and Galaxy phones. For the original single-item flow, see [How to Use Circle to Search on Android](/blog/circle-to-search-android/).

## What multi-object search actually does

Older Circle to Search results focused on one crop. Multi-object search uses Gemini 3 planning plus Google’s visual query fan-out technique.

The model picks the important regions in the frame, runs several visual searches at once, then compiles a response for each item. You get names, related images, and links instead of a single match.

Google’s published example is a travel photo full of fish. Circle the group and ask what the species are and how they live together. The product identifies each animal and adds web links for more reading.

Shopping is another top use. Circle an entire outfit on social media. Circle to Search breaks the look into clothing, shoes, and accessories and shows similar items.



![Person browsing fashion photos on a smartphone](https://images.unsplash.com/photo-1515886657613-9f3515e0c37f?auto=format&fit=crop&w=800&q=80)



## Who can use it today

Google launched the multi-object experience on 25 February 2026 on:

- Samsung Galaxy S26 series
- Pixel 10, Pixel 10 Pro, Pixel 10 Pro XL, and Pixel 10 Pro Fold

Google stated the same update is coming to more Android devices. It did not publish a complete later device list in that post. If your phone already has Circle to Search but not multi-item cards, update Google Play services and the Google app, then try again after a system update.

You still need:

- A supported Android phone with Circle to Search enabled
- A signed-in Google account
- Gesture navigation or 3-button navigation with the Circle to Search toggle on

On Pixel, check **Settings → Display and touch → Navigation mode**. On many Galaxy phones the same toggle lives under **Settings → Display → Navigation bar** (wording varies by One UI build).

## Turn Circle to Search on

1. Update the phone and the Google app from Play Store.
2. Open **Settings** and find **Navigation mode** or **Navigation bar**.
3. Confirm **Circle to Search** is on.
4. Open any app that shows a photo, video, or webpage.
5. Press and hold the **home button** (3-button mode) or the **gesture handle** at the bottom of the screen.
6. Wait for the overlay. The screen tints and a search bar appears at the bottom.

You cannot scroll the underlying app while the overlay is active. Leave Circle to Search, scroll, then start again if the subject moved off screen.

## Search several objects in one photo

1. Put the image on screen. Social apps, Chrome, Photos, and YouTube all work.
2. Start Circle to Search with the long-press gesture.
3. Circle the whole group, scribble across several items, or tap more than one object.
4. Type a follow-up in **Add to your search**, such as “name every plant in this photo” or “what are all these fish, and how do they coexist?”
5. Review the stacked results. Open a card when you want a deeper page or shopping links.

Keep the question tied to what is visible. The model plans crops from the screen capture. A vague prompt like “tell me everything” is weaker than a request that names the category you care about.



![Underwater photo of colorful reef fish](https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80)



## Find a full outfit and try items on

On Galaxy S26 and Pixel 10, Google documents a fashion path it calls finding the look.

1. Open a social post or product photo that shows a complete outfit.
2. Start Circle to Search.
3. Circle or scribble over the person, not only one garment.
4. Wait for the breakdown: top, bottoms, shoes, bag, and other accessories when the model can see them.
5. Open similar listings when they appear.
6. In countries where Google Shopping virtual try-on is already available, tap **Try On** from those Circle to Search results and upload your photo.

Virtual try-on is not global. Use it only where Google Shopping already supports the dressing-room tool. The Circle to Search post points to Google Shopping Help for that country list.

Merchants can appear in the extra visual results. Treat those cards as search results, not a guarantee that the exact item is in stock.

## Follow-up questions that work

After the first multi-object answer, stay in the sheet and refine:

- “Which of these is safe for a beginner aquarium?”
- “Show cheaper alternatives for the jacket only.”
- “Translate the labels in this photo.”
- “Is this image AI generated?”

Google said at I/O 2026 that you can ask “Is this made with AI?” or “Is this AI generated?” from Circle to Search, Lens, AI Mode, and Gemini in Chrome. Pair that check with [How to Use Gemini in Chrome on Android](/blog/gemini-in-chrome-android/) when you are already in the browser.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/x6Ix0RVd7yk"
    title="Search What You See: The Tech Behind The Magic | Made by Google Podcast S9E4"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips that save time

**Circle the set, then narrow.** Start with the whole scene. Open one card if you only need shoes.

**Use good source images.** Blurry screenshots and heavy filters reduce crop quality. Pause a video on a sharp frame before you gesture.

**Ask one job per follow-up.** Identification, shopping, and translation can share a session, but stacking all three in the first box often muddies the plan.

**Leave work profiles alone.** Some managed phones restrict overlay search. If the gesture does nothing in a work app, try the same image in a personal Chrome tab.

**Do not treat it as a medical or legal tool.** Use it to name objects and find public pages. Confirm safety, fit, and product claims on the merchant or publisher site.

## If multi-object results do not appear

- Confirm the phone model. Multi-object launch hardware is Galaxy S26 and Pixel 10. Older Circle to Search phones may still return a single primary match.
- Update System WebView, Play services, and the Google app.
- Toggle Circle to Search off and on in navigation settings.
- Restart the phone after a large Play services update.
- Try a still photo in Google Photos, then retry the social app.

If only one object is labeled, circle a wider area and add a prompt that says “identify every item in this selection.”

## Conclusion

Multi-object Circle to Search is the same gesture you already use, with a planner that splits one screenshot into several visual queries. On Pixel 10 and Galaxy S26 you can circle a reef, a living room, or an outfit and get a card per item.

Turn the navigation toggle on, long-press the home control, circle the whole scene, then ask a specific follow-up. Use Try On only where Google Shopping already offers it. For single-object basics, stay with the [Circle to Search setup guide](/blog/circle-to-search-android/).

## Sources

- [See the whole picture and find the look with Circle to Search](https://blog.google/products-and-platforms/products/search/circle-to-search-february-2026/) — Google Search blog, 25 February 2026
- [Celebrating 25 years of visual search innovation](https://blog.google/products-and-platforms/products/search/google-images-25th-anniversary/) — Google Images anniversary post
- [A more intelligent Android on Samsung Galaxy S26](https://blog.google/products-and-platforms/platforms/android/samsung-unpacked-2026/) — Android blog
- [100 things we announced at Google I/O 2026](https://blog.google/innovation-and-ai/technology/ai/google-io-2026-all-our-announcements/) — AI-generated image checks in Circle to Search
- [Virtually try on clothes](https://support.google.com/googleshopping/answer/16253678) — Google Shopping Help
