---
title: "Edit Google Vids by Timestamp: Point-in-Time Guide"
description: "Learn Google Vids point-in-time editing: scrub the timeline, trim object tracks, and build captions without splitting every scene."
pubDate: 2026-10-09T12:30:00
heroImage: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["tutorials", "how-to", "google", "productivity", "gemini"]
noindex: false
---

Google Vids now shows only the objects that are actually on screen at the playhead. The Workspace update, published October 6, 2026, calls this point-in-time editing. Before the change, the canvas stacked every text box, sticker, and image in a scene at once, even if those items appeared seconds apart.

That mismatch made layered videos harder than they needed to be. Captions, lower thirds, and media overlays piled up on one frame. Many editors split a scene just to hide the clutter. The new canvas follows the timeline one-to-one, so what you see while editing is what plays at that timestamp.

There is no setting to turn on. Google says point-in-time editing is the default in every Google Vids session, and admins have no control to disable it.

## Who gets the update, and when

Rapid Release domains started a gradual rollout on September 29, 2026. Google allows up to 15 days for the feature to appear. Scheduled Release domains get a full rollout starting October 13, 2026, with visibility expected in one to three days.

The feature is available on Business Starter, Standard, Plus, and Base, and on Enterprise Starter, Standard, and Plus. Education Fundamentals, Standard, and Plus are included, as are Frontline and Essentials editions, Individual, and Nonprofits. Consumer accounts need Google AI Plus or Ultra. Education add-ons listed in the announcement are Google AI Pro for Education and Teaching and Learning. AI Expanded Access is also covered.

If your canvas still shows every object in a scene at once, wait for your domain’s release track. Editing still happens on a computer. Google’s own training notes that mobile is for viewing, not full authoring.

![Editor reviewing a video timeline on a desktop monitor](https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=800&q=80)

## Open a video and show object tracks

Start at [vids.new](https://docs.google.com/videos/create) or open an existing file from Drive. You can also go to vids.google.com and create a project from the plus icon.

Each text box, shape, line, image, GIF, sticker, and video clip has its own object track. Google’s help article on [adjusting element timing](https://support.google.com/docs/answer/14960797) says the canvas displays objects based on the current playhead position.

1. Open the video on a computer.
2. At the top left of the timeline, click **Show timing**. That reveals the object tracks for the scene.
3. Click anywhere on an object track to move the playhead to that moment. The canvas should now show only the items visible at that exact point.
4. Optional: drag the top of the timeline to expand or collapse the view.
5. Click **Hide timing** when you want the tracks out of the way.

You can also click an object track to jump the playhead, which is one of the three improvements Google lists in the October 6 note. The other two are the synchronized canvas and simpler scene management, so you no longer need to split scenes only to separate timed objects.

## Trim, move, and preview a layer

Timing controls live on the track, not in a separate dialog.

Hover the left or right edge of an object track until the blue handle appears. Drag the handle to shorten or lengthen how long the item stays on screen. To change when it appears, drag the whole track left or right. That move works only if the track is shorter than the scene.

The Workspace Learning Center adds two practical tips. Hold Shift and click several objects, or drag across them, to select more than one track at once. Above the timeline, use the preview control to check the timing before you export.

A clean lower-third sequence looks like this:

1. Place the name and title as two text boxes.
2. Open **Show timing**.
3. Drag the name track so it starts a half-second after the scene begins.
4. Drag the title track so it starts just after the name.
5. Shorten both tracks so they leave before the next speaker.
6. Scrub the playhead across the scene. You should see the name, then the title, then a clear frame — not all three states stacked together.

If you generate a first draft with Help me create, the same tracks still apply. Pair this timeline pass with voiceover work covered in [Gemini 3.8 voiceovers in Google Vids](/blog/gemini-3-8-voiceovers-google-vids/) so narration and on-screen text do not fight each other.

![Film strip and editing workspace used to time visual layers](https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80)

## Build captions and overlays without extra scenes

The old canvas encouraged a workaround: split one scene into many short scenes so each caption had a clean frame. Point-in-time editing removes that reason. Keep related shots in one scene and let object tracks carry the timing.

Captions. Drop a text box, open timing, and drag the track so the words match the spoken line. Scrub to confirm the previous caption is gone before the next one appears.

Lower thirds. Keep the name and role as separate tracks. Stagger the in-points by a fraction of a second so the graphic does not pop in as a block.

Media overlays. A product photo or chart can sit on a short track in the middle of a talking-head scene. Because the canvas follows the playhead, the rest of the scene stays readable while you place it.

Stickers and shapes. Treat them like any other track. If a sticker covers a face only during a punchline, shorten the track instead of duplicating the scene.

Audio still has its own track. Drag it left or right to line up a sting with the moment the overlay appears. Video clips inside a scene can be trimmed the same way as other objects.

## Watch a setup walkthrough, then edit the timeline

Google Cloud Skills Boost published a short official walkthrough on opening Vids, including vids.new, Drive, and the app launcher. Use it if you are new to the product, then apply the timing steps above.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/MNyWed4_SbI"
    title="Accessing and Using Google Vids"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips when the canvas still looks crowded

Check the playhead first. If it sits at a timestamp where several tracks overlap, the canvas is correct — those items really are on screen together. Move one track instead of splitting the scene.

Select before you drag. A click on the canvas selects the object; **Show timing** then makes its track easier to grab. For a batch change, Shift-click the objects and drag one edge.

Do not expect a toggle. Google documents no end-user setting and no admin control. If a teammate on Scheduled Release still sees the old stacked canvas, the October 13, 2026 rollout window is the likely cause.

Export only after a scrub pass. Play from the start of the scene and watch for captions that linger, stickers that cover faces, and lower thirds that collide. The help page is explicit: the canvas shows objects at the current playhead, so a slow scrub is the fastest review.

Keep sensitive drafts in Drive with the right sharing settings. Point-in-time editing does not change permissions. Anyone with edit access can move tracks.

## What to do next

Open a crowded scene, click **Show timing**, and scrub. If the canvas updates with the playhead, the October update is live on your account. Trim one caption track and one overlay, then preview. That single pass replaces the old habit of splitting scenes just to see what is on screen.

For generated clips and higher-resolution output, see [Google Vids Omni HD videos](/blog/google-vids-omni-hd-videos/) after the timeline is clean. Timing and resolution are separate jobs: lock the tracks first, then export.

## Sources

- Google Workspace Updates, “Point-in-time editing now available in Google Vids,” October 6, 2026: https://workspaceupdates.googleblog.com/2026/10/point-in-time-editing-now-available-in-Google-Vids.html
- Google Docs Editors Help, “Adjust timing of elements in a video”: https://support.google.com/docs/answer/14960797
- Google Workspace Learning Center, “Customize timings, transitions & audio”: https://support.google.com/a/users/answer/14906566
- Google Cloud Skills Boost, “Accessing and Using Google Vids”: https://www.youtube.com/watch?v=MNyWed4_SbI
