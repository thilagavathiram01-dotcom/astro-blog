---
title: "How to Use Android Dev Summit 2026 Session Notebooks"
description: "Access Gemini Notebooks with enhanced transcripts from Android Dev Summit 2026 sessions. Step-by-step guide for developers and agents."
pubDate: 2026-11-09T14:00:00
heroImage: "https://images.unsplash.com/photo-1762968274962-20c12e6e8ecd?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "ai-tools"]
noindex: false
---

Google returned with its first Android Dev Summit since 2022, held October 28–29 in Mountain View (plus a London extension). Over 50 technical sessions across Apps Foundations, Intelligent Apps, Tools & Performance, and Android XR are now available on YouTube, and Google also released Gemini Notebooks containing enhanced transcripts for each track.

These Notebooks combine full session transcripts with slide content. You (or your coding agent) can load them and extract concrete takeaways without watching every minute of video. This guide shows the practical steps to access, load, and use them.

## Why the Notebooks matter

Watching every session takes hours. The Notebooks let you:

- Search across talks for specific APIs or patterns
- Ask Gemini to summarize agent-related changes from the Intelligent Apps track
- Feed the transcript directly into Claude, Codex, or Android Studio’s Bring Your Own Agent workflow
- Keep slide context so code examples and diagrams stay accurate

Google noted that the transcripts include slide content so agents get full context.



![Android Dev Summit 2026 keynote stage with speaker and audience](https://images.unsplash.com/photo-1762968274962-20c12e6e8ecd?auto=format&fit=crop&w=800&q=80)



## Access the sessions and Notebooks

1. Open the official Android Developers YouTube channel and find the Android Dev Summit 2026 playlists, or go directly to d.android.com/events/dev-summit.
2. Choose your track:
   - Apps Foundations
   - Intelligent Apps
   - Tools and Performance
   - Android XR
3. Each track page links to the matching Gemini Notebook. Download the Notebook file.
4. The keynote itself is at https://www.youtube.com/watch?v=8Lmv7LGgL4E.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/8Lmv7LGgL4E"
    title="Android Dev Summit 2026 keynote"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Load a Notebook into Gemini

1. Go to notebooklm.google.com (or the Gemini app’s Notebook feature).
2. Create a new Notebook and upload the downloaded transcript file from the track you care about.
3. Wait for processing. Gemini indexes both the spoken content and the embedded slide text.
4. Start asking questions. Useful prompts include:
   - “List every new stable or beta API mentioned in the Intelligent Apps sessions.”
   - “Extract the exact steps for connecting an app to the Connected Apps Platform.”
   - “Summarize the Android CLI remote device streaming changes and any code samples.”

The Notebook stays private to your account. You can share it with teammates or export answers as notes.

## Practical workflow for developers

Many teams already use agents inside Android Studio Rabbit 2 or via Android CLI. The Notebooks fit that workflow cleanly.

- Drop the transcript into your agent’s context when you ask it to implement a feature discussed at the Summit (for example, A2UI Compose rendering or AppFunctions).
- Combine it with existing skills. If you already use the Android skills for agents, the Notebook gives the agent the latest official guidance instead of relying only on training data.
- For XR work, load the Android XR track Notebook before starting a SceneCore or ARCore for Jetpack XR project. The stable libraries were a major announcement.

Internal link example: pair this with the existing guide on [Android skills for AI agents](/blog/android-skills-ai-agents/).



![Developer working on a laptop with code open](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)



## Tips for better results

- Ask for timestamps or session names when you want to go back to the video for a demo.
- Request code diffs or before/after examples when the talk covers a migration (Compose adaptive layouts, memory budgets, etc.).
- Limit context to one track at a time if your Notebook grows large; Gemini handles long context well but focused questions return cleaner answers.
- Save useful prompt chains as Gemini Skills so you can reuse them on future Summit content.

## Conclusion

The Android Dev Summit 2026 sessions are now fully available with ready-to-use Gemini Notebooks. Loading a track transcript takes a few minutes and gives you searchable, agent-ready notes that include slide context. Whether you want a quick summary of intelligent apps updates or detailed implementation steps for XR, the Notebooks remove the need to scrub through hours of video.

Start with the track most relevant to your current work, upload the Notebook, and ask Gemini the questions you would have asked the speaker.

**Sources**

- Android Developers Blog: Developing for Today: 50+ New Developer Sessions (November 2, 2026)
- Android Dev Summit 2026 keynote and track playlists on YouTube
- Official event page at d.android.com/events/dev-summit
