---
title: "Export Flow Music Spaces as VST3 and AU Plugins"
description: "Build a Google Flow Music Space with a text prompt, then export it as a VST3 or AU plugin for Ableton, Logic, FL Studio, and other DAWs."
pubDate: 2026-10-07T10:00:00
heroImage: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "google", "how-to"]
noindex: false
---

Google Flow Music now lets producers take a custom Space out of the browser and run it inside a digital audio workstation. On October 6, 2026, Google said Spaces can be exported as VST3 and AU plugins, so an instrument or effect you describe in plain language can sit on a track in the same session as the rest of your mix.

That is a practical change. A song generated in Flow Music still needs stems, edits, and a final bounce. A plugin stays in the project. You can reopen it, automate a control, and apply the same tool to the next session.

This guide covers what Google has documented: who can use Flow Music, how to build a Space, what VST3 and AU actually mean, and how to load the result in a DAW. Export button labels are not spelled out in the public help article yet, so the steps below stick to the official Spaces flow and the formats Google named.

## What changed on October 6

[Spaces](https://www.flowmusic.app/library/spaces) in [Google Flow Music](https://www.flowmusic.app/) already let creators build instruments, effects, music games, or a small custom DAW with natural language. No coding experience is required.

Google's Labs post adds the studio step. Producers can export those custom Spaces as VST3/AU plugins and run them inside a DAW. Producer Khris Riddick-Tynes used the feature for a plugin he called "No Chaser," built to keep instrumentals and vocals sharp and studio-ready no matter where they were recorded.

The product page describes the same Build area as a place to vibe-code audio plugins, music games, and custom DAWs. Song creation in Flow Music still uses Lyria 3.5 for full-length tracks. Spaces are the separate tool layer. If you want the song workflow first, the [Lyria song guide on Yum News](/blog/google-flow-music-lyria-songs/) walks through that path.

![Mixing console faders and meters in a studio](https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80)

## Check that your account can open Spaces

Google Flow Help lists three requirements before you can use Flow Music:

1. Your age must be verified. You need to be 18 or older.
2. You need to be in a supported region.
3. You sign up at no charge with a Google Account. Extra credits and generations require a Flow Music subscription or a Google AI membership plan.

Sign-in is at [flowmusic.app](https://www.flowmusic.app/). Choose Continue with Google, pick the account, and confirm the authorization screen. The help article notes that Google Flow Music asks for authorization again when you log back in. If you want Google AI membership benefits inside Flow Music, select the Google One benefits checkbox on the first login.

Spaces are currently available on web and PC only. Plan to build and export from a desktop browser, not a phone.

## Build a Space you can actually reuse

Google's help article documents this creation path:

1. Sign in to Google Flow Music.
2. On the left, select Spaces, then New space.
3. In the prompt box, describe what you want to build.
4. Select Send.

The official example is a visual step sequencer: "The Neon Sequencer: A visual, grid-based step sequencer where you can toggle blocks to build a drum pattern or bassline in real time."

For a DAW plugin, write the job the tool should do on a track, not a vague style word. Useful prompts name the input, the control, and the result:

- A vocal cleanup effect with a presence control and a low-cut, aimed at phone recordings.
- A simple drum instrument with kick, snare, and hat level controls you can play while a track runs.
- A saturator with drive and mix knobs for bass.

Google's published example, No Chaser, follows that pattern. It solves a recurring recording problem instead of generating a one-off song.

After the Space loads, play it in the browser and revise the prompt if a control is missing. Publish only when you want others to see it. From a Space, Publish at the top right makes it publicly visible. Share copies a link. You can set visibility to Anyone with the link or Only me. Delete is under More, then Delete space.

## What VST3 and AU mean in a session

VST3 is Steinberg's plugin format. Hosts such as Ableton Live, FL Studio, Cubase, Studio One, and Reaper can scan VST3 files and list them in the plugin browser.

AU is Apple's Audio Units format. Logic Pro and GarageBand on macOS load AU plugins. A Windows-only DAW will not load an AU file.

Google said both formats are available for exported Spaces. Pick the format your host scans:

- On macOS, export AU if you work in Logic or GarageBand, and VST3 if you work in Ableton, FL Studio, or Reaper.
- On Windows, export VST3.

Keep the downloaded plugin in the folder your DAW already scans. Common locations are the system VST3 directory and the user Audio Units component folder on Mac. After you copy the file, rescan plugins in the DAW preferences. The new name should appear under instruments or effects, depending on what the Space does.

Google has not published a full click path for the export control in the help center. After a Space is built, use the export option shown on that Space and choose VST3 or AU. If the control is missing, confirm you are on web or PC and that the account meets the age and region rules above.

![Headphones and a laptop in a home recording setup](https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80)

## Load the plugin and test it on a real track

1. Open the DAW and create a new project at your usual sample rate.
2. Rescan plugins if the new file does not appear.
3. Insert the plugin on a vocal, drum, or instrument track that matches the prompt.
4. Compare the dry signal with the processed signal. Bypass the plugin and listen again.
5. Automate one control across four bars. Save the project, close it, and reopen it to confirm the plugin state returns.

If the plugin fails to scan, check the file extension and the scan folder before you rebuild the Space. A VST3 file in an AU-only folder will not show up. Also confirm the DAW is allowed to load third-party plugins. Some hosts hide unverified plugins until you enable them.

Treat the first export as a draft. Go back to Spaces, describe the missing control, and export again. The browser Space and the plugin are two views of the same idea. The browser is where you change the design. The DAW is where you use it.

## Limits to plan around

Spaces do not replace a finished mix. Flow Music still generates songs, splits stems, and applies effects in the app. The plugin export is for the custom tool you built, not for every generated track.

Credits still apply to generations. The free signup includes daily credits. Larger plans add credits. A complex Space can take more than one pass, so keep the first prompt narrow.

Sharing is separate from export. Publish and Share control who can open the Space in Flow Music. The VST3 or AU file is what you load locally. Do not assume a public Space link installs a plugin on someone else's machine.

You can report a bad Space from More, then Report. Legal issues use the legal-issue form. That path is useful if a generated tool copies a product name or produces output you should not distribute.

## Watch a Spaces build

This walkthrough shows how to open Spaces on flowmusic.app and generate a custom music tool from a prompt. It predates the October 6 plugin export, so use it for the build step, then export from your own Space.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/IbzV1gtMFrs"
    title="How to Build a CUSTOM Music Studio App with Google Flow Music"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Keep the tool small enough to reuse

Name the Space after the job, not the genre. "Phone vocal presence" is easier to find in a plugin list than "late night idea."

Ask for a few controls. A drive knob and a mix knob are easier to automate than a panel of unnamed sliders.

Test on the recording you actually have. Riddick-Tynes built No Chaser around tracks that were not recorded in a treated room. Match the prompt to your own problem.

Save the project after the first successful scan. If a later export uses the same plugin name, your session is more likely to reconnect.

## Bottom line

Flow Music Spaces were already a way to describe an instrument or effect and get a working tool in the browser. As of October 6, 2026, Google says you can export that Space as a VST3 or AU plugin and run it in a DAW. Build it from Spaces, then New space, describe one clear job, and export the format your host scans. Song generation with Lyria 3.5 stays a separate workflow.

## Sources

- Google Blog, October 6, 2026: Producers can now vibe code their own music production tools using Google Flow Music. https://blog.google/innovation-and-ai/models-and-research/google-labs/create-music-production-plugins-google-flow/
- Google Flow Help: Create and manage spaces in Google Flow Music. https://support.google.com/flow/answer/17083802
- Google Flow Help: Get started with Google Flow Music. https://support.google.com/flow/answer/17083868
- Google Flow Music product page. https://www.flowmusic.app/
