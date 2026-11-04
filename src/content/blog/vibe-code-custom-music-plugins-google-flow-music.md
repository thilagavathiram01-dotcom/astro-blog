---
title: "How to Vibe Code Custom Music Plugins with Google Flow Music"
description: "Step-by-step guide to creating custom VST3 and AU plugins in Google Flow Music using natural language. Export to your DAW on macOS."
pubDate: 2026-11-04T12:00:00
heroImage: "https://images.unsplash.com/photo-1760780567530-389d8a3fba75?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "google"]
noindex: false
---

Music producers often need instruments or effects that match their exact workflow. Google Flow Music now lets you describe those tools in plain language and export them as VST3 or AU plugins for your DAW. No traditional coding is required.

This feature arrived in early October 2026. It builds on Spaces, the vibe-coding area in Flow Music where you already build custom instruments and effects. You create the plugin in the browser, download a small .fmx file, and load it inside Ableton Live, Logic Pro, or FL Studio on a Mac.

The same Flow Music workspace also uses Lyria for full song generation. If you already make tracks there, the [Lyria 3.5 Gemini app guide](/blog/create-songs-lyria-3-5-gemini-app/) shows the consumer path for finished songs.

![Professional recording studio with mixing console and monitors](https://images.unsplash.com/photo-1760780567530-389d8a3fba75?auto=format&fit=crop&w=800&q=80)

## What the plugin export actually does

Spaces in Google Flow Music lets creators build custom instruments or effects with natural language. Google announced that producers can now export those Spaces as VST3 and AU plugins. The plugins run inside a standard Digital Audio Workstation instead of only in the browser.

Producer Khris Riddick-Tynes built one of the first examples, a plugin called “No Chaser.” It helps keep instrumentals and vocals sharp and studio-quality no matter where the recording happened. The export keeps the tool private to your machine while letting you use it in the same session as the rest of your tracks.

Right now the feature has clear limits. Plugins currently work on macOS only. Instrument plugins can only use standard synthetic audio. Sample-based instruments and anything that relies on generative AI audio cannot be exported as plugins yet. Effects that stay within those rules can still be exported.

## Create the instrument or effect

Sign in to Google Flow Music on a Mac. Use the same Google account you already use for other Google Labs tools.

1. Open the prompt box and describe what you want. Include the words “plugin” or “VST” so the system knows you plan to export it. Example prompts: “Make a warm analog-style synth plugin” or “Create a tape delay VST effect with adjustable feedback.”
2. Wait for the Space to finish building. Review the controls that appear in the browser version and ask for changes if the response is off.
3. When the tool is ready, open the side panel and select **Use in DAW**.

If you do not see the **Use in DAW** button, go back to the chat and ask the producer to turn the current instrument or effect into a VST plugin. Only tools built with that option can run outside the browser.

![Close-up of a MIDI keyboard controller](https://images.unsplash.com/photo-1708395259847-59e3bc3a8cf9?auto=format&fit=crop&w=800&q=80)

## Install the host plugin once

You install the Flow Music host plugin only one time. After that, each new instrument or effect is just a small .fmx file you drag in.

1. In the “Use in your DAW” window inside Flow Music, select **Download plugin**.
2. Open the downloaded .dmg file.
3. Drag the .component file into the Components shortcut and the .vst3 file into the VST3 shortcut.
4. Enter your Mac password if the system asks for it.

The installer places two plugins on your system: **Flow Instrument** and **Flow Effect**. You cannot rename them. They appear under the manufacturer name “Google Flow Music” once your DAW rescans.

If a shortcut fails because the folder does not exist, create it yourself. The standard paths are /Library/Audio/Plug-Ins/Components and /Library/Audio/Plug-Ins/VST3. Press Shift + Command + G in Finder and paste the path to jump there.

## Load the plugin in your DAW

Open Ableton Live, Logic Pro, or FL Studio.

1. Enable plugin scanning if the new plugins do not appear. In Ableton, go to Settings > Plug-Ins, turn on Use Audio Units v2 and Use VST3 Plug-Ins System Folders, then choose Rescan. Restart the DAW if needed.
2. Find **Flow Instrument** or **Flow Effect** under the Google Flow Music manufacturer.
3. Add the host plugin to a track.
4. Back in Flow Music, select **Download [name]** to get the .fmx file for your specific instrument or effect.
5. Drag that .fmx file onto the Flow Instrument or Flow Effect window inside the DAW.

The controls from the browser version should appear. Play or process audio through it the same way you use any other plugin. Save the DAW project as usual. The .fmx file stays on your disk so you can reload it later.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/q_IZq1Q5hMM"
    title="Vibe Coding My Own Instrument Plugin Using Google Flow Music"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Reuse plugins and fix common problems

To load a plugin you already created:

1. Sign in to Google Flow Music.
2. Select Spaces on the left.
3. Apply the Plugins filter. If the filter is missing, the feature may not be available on your account yet.
4. Next to the plugin, choose More > Use in DAW.
5. Download the .fmx again and drag it onto the host plugin in your DAW.

If the DAW shows Flow Instrument or Flow Effect twice, or loads an old version, delete the copies in your user folders (~/Library/Audio/Plug-Ins/VST3 and ~/Library/Audio/Plug-Ins/Components). Keep the system-wide copies in /Library/Audio/Plug-Ins/ and rescan.

Confirm the host files are in the correct system folders and that your DAW has AU and VST3 scanning enabled. Some DAWs need a full restart after the first install.

## Tips for better results

Describe the sound you want in concrete terms. “Warm analog-style synth with slow filter sweeps and a simple LFO” works better than “cool synth.” Mention specific controls you need, such as a tempo-synced delay or a drive amount that stays under 20 percent.

Test the browser version thoroughly before you export. Changes you make after export require a new .fmx download.

Start with an effect if you mainly need processing. Effects currently have fewer export restrictions than instruments.

Keep the .fmx files in a dedicated folder so you can reload them without searching through downloads. Name them clearly, for example “tape-delay-v1.fmx.”

Because the feature is still rolling out, check the Plugins filter regularly. Google may expand sample support and Windows availability later.

## Conclusion

Google Flow Music turns a text description into a custom instrument or effect you can load in your DAW. Create the tool in the browser with a clear prompt that includes “plugin” or “VST,” install the host plugin once on your Mac, then drag the .fmx file into Ableton, Logic, or FL Studio. The current limits are macOS only and synthetic audio for instruments. Within those bounds the workflow is short enough that you can try a new idea, export it, and test it in a real session the same afternoon.

## Sources

- Google blog, “Producers can now vibe code their own music production tools using Google Flow Music,” 6 October 2026: https://blog.google/innovation-and-ai/models-and-research/google-labs/create-music-production-plugins-google-flow/
- Google Flow Help, “Use Flow Music instruments & effects in your DAW”: https://support.google.com/flow/answer/18631279
- Google Flow Music: https://www.flowmusic.app/
- YouTube, “Vibe Coding My Own Instrument Plugin Using Google Flow Music”: https://www.youtube.com/watch?v=q_IZq1Q5hMM
