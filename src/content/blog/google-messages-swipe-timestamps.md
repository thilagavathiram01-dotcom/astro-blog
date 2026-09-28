---
title: "How to Use Google Messages Swipe Timestamp Gestures"
description: "Swipe left for timestamps and RCS status in Google Messages, swipe right to reply, and copy part of a bubble with the new menu."
pubDate: 2026-09-28T14:00:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "how-to", "tutorials", "google"]
noindex: false
---

Google Messages changed two habits that Android texters used for years. A left swipe no longer starts a reply. It now slides every visible timestamp into view, plus the RCS lock for that thread.

The reply gesture moved to a right swipe on the bubble itself. Taps still show read receipts. A short timestamp peek after a tap is Google’s hint that the old tap-for-time flow is gone.

This guide covers the new gestures, the floating long-press menu that landed a day earlier, and what to check if your phone still behaves the old way. The redesign is showing up widely on Messages build **20260910_03_RC02**, but Google flips the switch on the server, so two phones on the same version can differ.

## What changed in the September 2026 rollout

Before this drop, a tap on a bubble showed the sent time, read receipts, and the RCS lock together. A left swipe on that bubble quoted the message for a reply.

Those jobs are now split:

- **Swipe left** anywhere in the open conversation to reveal timestamps and encryption status for every message on screen.
- **Swipe right** on one bubble to attach a quoted reply.
- **Tap** a bubble to see delivery and read status. Timestamps may flash for a moment as a cue.
- **Touch and hold** a bubble to open a floating menu: Reply, Forward, Copy, Star, Delete, Select more, and Info.

9to5Google and Android Authority both tied the swipe change to late September 2026, after a floating menu that lets you copy only part of a message instead of the whole bubble.



![Person holding an Android phone and reading a chat thread](https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=800&q=80)



## How to see every timestamp with one swipe

1. Open **Google Messages** and enter a conversation.
2. Place a finger on the thread (empty space or a bubble works).
3. Swipe left and hold if the times slide away when you lift.
4. Read the times next to each visible message. The RCS encryption indicator appears in the same view.

Use this when you need the sequence of a long group chat: who answered first, whether a plan changed after midnight, or whether a thread dropped from RCS to SMS mid-conversation. One swipe beats tapping twenty bubbles.

If you only need receipts, tap instead. Do not expect the tap to keep the full timestamp list on screen the way the old UI did.

## How to reply with a right swipe

Muscle memory will fight this for a few days. Reply used to live on the left swipe.

1. Find the exact bubble you want to quote.
2. Start the swipe **on the bubble**, not the margin.
3. Swipe right until the quoted reply docks above the text field.
4. Type and send.

A sloppy swipe often scrolls the thread instead of quoting. Reports from 9to5Google note that the right swipe needs more precision than the old left swipe.

You can still reply from the long-press menu if the gesture misses. Touch and hold the bubble, then tap **Reply**.

## How to copy only part of a message

The floating menu is the other half of the same week’s update.

1. Touch and hold a bubble until the floating bar appears.
2. Tap the message text again so selection handles show.
3. Drag the handles around an address, code, or name.
4. Copy that range. Use **Select more** if you need several bubbles.

This replaces the old “copy the entire bubble or nothing” path. It matters for one-time codes that sit in the middle of a carrier paragraph, or a street address buried in a group plan.

Star and Info stay on the same bar. Info still opens the detailed sent and delivered times for that one message if the swipe view is too brief.



![Close-up of a smartphone screen showing a messaging conversation](https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80)



## Confirm you have the right Messages build

Google has not published a public help article that names the new swipe map. Coverage points to version **20260910_03_RC02** as the build where the new design is common.

1. Open **Play Store** and search **Messages** from Google LLC.
2. Update if a newer build is waiting.
3. In Messages, tap your profile photo → **Messages settings** → scroll to the version string at the bottom (wording varies by device).
4. Open a thread and try a left swipe. If you still get a quoted reply, the server flag is off. Wait; reinstalling rarely forces the flag.

List-level swipe actions (archive, pin, bin) are a separate setting. They live under **Messages settings → Swipe actions** and apply to conversation rows on the inbox, not to bubbles inside a thread. Official help for the inbox swipe is on Google’s [Manage the Bin folder](https://support.google.com/messages/answer/16962293) page.

If you theme chats, those colors stay. See our [Google Messages chat themes guide](/blog/google-messages-chat-themes/) for backgrounds and bubble colors that do not change these gestures.

## Turn on RCS so encryption status means something

The left-swipe view shows RCS encryption status. That icon is useful only when Chat features are actually connected.

1. Open Messages → profile photo → **Messages settings** → **RCS chats** (some phones still say **Chat features**).
2. Turn RCS on and wait until status reads **Connected**.
3. Confirm Messages is the default SMS app under Android **Settings → Apps → Default apps**.
4. Ask the other person to do the same. Mixed SMS/RCS threads will show a lock on some bubbles and not others.

Read receipts still depend on RCS. After the redesign, a tap on a bubble is the clean way to check those receipts without opening the full timestamp rail.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/24Fv16WIzIM"
    title="How to Turn On RCS on Any Android"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips that save time in long threads

- Swipe left when you are reconstructing a timeline. Hold the swipe if times vanish on lift.
- Swipe right only after your finger is on the target bubble.
- Use long-press → **Info** when you need sent *and* delivered times for one message.
- Use long-press → **Copy** with handles for codes and addresses.
- Do not remap inbox swipe to Bin and then expect the in-thread left swipe to archive. Those are different surfaces.
- If a group chat looks unencrypted on the rail, check whether one member fell back to SMS.

Some users dislike the hold-to-keep-timestamps behavior. That is the current design, not a missing toggle. There is no official setting that pins times next to every bubble all day.

## Troubleshooting

**Left swipe still replies.** You are on an older flag. Update Messages and wait. Beta testers sometimes see the new map first; joining the Messages beta in Play Store is optional.

**Right swipe only scrolls.** Start on the bubble. Shorten the swipe. Use the menu Reply action until the gesture sticks.

**No lock icon after a left swipe.** RCS is off, still “Setting up,” or the other party is on SMS. Fix RCS first.

**Partial copy handles never appear.** Long-press until the floating bar is up, then tap the text again. One press selects the whole bubble; the second press is what starts a range.

**Inbox swipe archives a chat when you meant to open timestamps.** You swiped a row on the conversation list. Open the thread first.

## Conclusion

Google Messages now treats time and reply as two gestures instead of one tap-and-swipe mashup. Swipe left to scan when things were sent and whether the thread is still on RCS. Swipe right on a bubble to quote it. Long-press when you need a precise copy or the full Info card.

Update to a mid-September 2026 Messages build, give the server flag a day, and practice the right-swipe reply before you need it in a busy group chat. The timestamp rail is the part worth the relearning curve.

## Sources

- [Google Messages rolls out new swipe for timestamps & reply gesture](https://9to5google.com/2026/09/25/google-messages-timestamps-reply/) — 9to5Google, 25 September 2026
- [Google Messages introduces new swipe controls for your chats](https://www.androidauthority.com/google-messages-swipe-3715719/) — Android Authority, 25 September 2026
- [Google Messages Adds a Floating Long-Press Menu and New Swipe Gestures](https://www.ghacks.net/2026/09/26/google-messages-adds-a-floating-long-press-menu-and-new-swipe-gestures-for-timestamps-and-replies/) — gHacks, 26 September 2026
- [Manage the Bin folder in Google Messages](https://support.google.com/messages/answer/16962293) — Google Messages Help
- [How to Turn On RCS on Any Android](https://www.youtube.com/watch?v=24Fv16WIzIM) — YouTube
