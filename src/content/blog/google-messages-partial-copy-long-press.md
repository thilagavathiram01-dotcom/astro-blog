---
title: "Google Messages Partial Copy: Long-Press Menu Guide"
description: "Learn how to copy part of a Google Messages text with the new long-press menu, plus reply, translate, and landscape tips."
pubDate: 2026-10-03T11:00:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "how-to", "tutorials", "google"]
noindex: false
---

Google Messages used to treat a text as one block. Copy meant the whole bubble, or nothing. On 1 October 2026, 9to5Google reported that Google had confirmed the redesigned long-press menu was officially launched, including partial copying, one of the most requested actions in the app.

The new menu is a floating panel instead of the old top toolbar. It puts common actions next to the message you pressed, and it is built for light and dark themes plus landscape screens. If you only need a phone number, an address, or one sentence from a long thread, this is the path that avoids a second edit.

## What changed in the conversation view

The previous toolbar showed a few actions and hid the rest behind an overflow menu. The replacement appears when you long-press a message or image. Reports of the wide rollout describe icons for Reply, Forward, Copy on text, Star, Delete, Select More, and Info. Photos can offer Save, and some builds also show Remix for images.

If the message is the newest one in the thread, testers saw a short bounce, haptic feedback, and a blurred background so the menu stays in focus. The same menu is meant to stay readable in landscape on phones, foldables, and tablets. Theme support covers both light and dark, so the panel follows the conversation theme instead of forcing a separate style.

Partial copy is the practical change. You no longer have to paste a full paragraph into Notes and delete the lines you did not want.

![Person holding a smartphone while reading a conversation](https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80)

## Copy only part of a text message

Update Google Messages from the Play Store first. Coverage of the stable rollout points to build `20260910_03_RC02`, with a server-side switch, so the menu can appear on one phone and not yet on another even when the app version matches.

1. Open the conversation that holds the text you need.
2. Long-press the message bubble. The floating action menu should appear beside it.
3. Long-press again directly on the words inside that message. Do not tap Copy on the first menu if you only want a fragment. The first Copy action still takes the full bubble on many builds.
4. Drag the selection handles until only the phrase, code, or address is highlighted.
5. In the second dialog, choose Copy, Translate, or Select All.

Copy places the selection on the Android clipboard. Translate runs on the highlighted span, which is useful when a group chat mixes languages and you only need one sentence. Select All expands the highlight back to the full message if you changed your mind mid-gesture.

Paste works in any field that accepts text: another Messages thread, Gmail, Keep, or a browser address bar. Android’s clipboard history, if you have it enabled, keeps recent copies so you can grab an earlier fragment without repeating the selection.

## Reply, star, and multi-select from the same menu

Reply from the floating menu quotes the bubble you pressed, which is clearer in busy group chats than scrolling to the composer and hoping the context is obvious. Forward sends that message onward without copying it first.

Star keeps the bubble in the starred list so you can find a booking code later. Delete removes it from your view according to the usual Messages rules for that chat type. Select More lets you mark several bubbles before you forward or delete them as a batch.

Info is the place to check delivery details on a sent message. On RCS chats you may already use a related edit window. Google has long allowed edits on sent RCS messages for up to 15 minutes after send. Partial copy does not replace that edit. Use edit when you sent a typo. Use partial copy when you received text and need a slice of it.

If you also rely on gesture shortcuts, the [swipe timestamps and reply gesture guide](/blog/google-messages-swipe-timestamps/) covers the earlier Messages update that surfaces times and a reply swipe without opening this menu.

## Photos, landscape, and wider screens

Long-press a photo and the menu shifts toward media actions. Save stores the image. Remix, where it appears, starts an edit flow on that picture instead of the text tools. You will not get selection handles on an image bubble, because there is no text span to highlight.

Landscape is the other layout change Google called out in the launch notes reported by 9to5Google. On a foldable or tablet, the old top bar could sit far from the bubble you pressed. The floating menu stays near the message, which matters when the thread is stretched across a wide inner display.

Dark theme support means the panel should match the conversation instead of flashing a light card over a dark thread. If colors look wrong after an update, force-stop Messages and reopen the chat before filing a bug.

![Android phone on a desk beside a notebook](https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=800&q=80)

## If the new menu is missing

Rollout is server-side as well as version-based. A matching Play Store build does not guarantee the switch is on for your account yet.

- Confirm Google Messages is updated. Open the Play Store listing and tap Update if it is offered.
- Force-stop the app from Settings, Apps, Messages, then reopen a conversation and long-press again.
- Check that you are in a standard chat bubble. Some system cards and unsupported message types still use older actions.
- Wait a day if the device just received the build. Server flags often trail the APK.

Do not clear storage just to chase the menu. That can remove local chat cache and force a fresh sync. Force-stop is the lighter step testers used when the UI lagged behind the update.

## Tips that keep partial copy reliable

Press the text, not the timestamp or reaction row, on the second long-press. Handles only appear on the message body.

Short messages may already be fully selected when the handles appear. Drag inward if you need a smaller span.

Links and verification codes copy cleanly if you stop the handles at the token. Including a trailing space is harmless, but a trailing emoji can break a code you paste into a form.

Translate before you copy if you want the translated wording on the clipboard. Copy first if you need the original spelling for a name or address.

On a shared tablet, partial copy still lands on the device clipboard. Clear clipboard items after you paste a one-time code.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/y8ORUW3lRQ0"
    title="Google Messages Adds a Floating Long-Press Menu"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What to do with the selection

Partial copy is a small control, but it removes a daily friction point. Pull an order number into a retailer chat, a street address into Maps, or one action item into a note, without dragging the rest of the thread along.

The floating menu also shortens reply and forward. Once the panel shows on your phone, the second long-press on the text is the gesture to remember. If it is not there yet, update, force-stop, and check again after the server flag catches up.

## Sources

- 9to5Google, “Google Messages rolls out new long-press menu with partial copying,” 1 October 2026 update: https://9to5google.com/2026/10/01/google-messages-long-press-menu-wide/
- Google, “7 new Android features to elevate your everyday” (RCS edit window, up to 15 minutes): https://blog.google/products-and-platforms/platforms/android/new-android-features-may-2024/
- Online Tech Tips, “Google Messages Adds a Floating Long-Press Menu”: https://www.youtube.com/shorts/y8ORUW3lRQ0
