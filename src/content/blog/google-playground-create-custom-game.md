---
title: "Google Playground: Create a Custom Game, Step by Step"
description: "Create a custom game on Google Playground with text prompts, then play it in the browser, share a link, or publish to the gallery. US, 18+."
pubDate: 2026-10-07T15:00:00
heroImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "google", "gemini"]
noindex: false
---

Google opened Playground on 7 October 2026, an experimental site where you describe a game in plain text and play the result in a browser. No engine install and no code editor are required for the first pass.

Access is limited at launch. Google says Playground is available to users in the United States who are 18 or older, at [playground.google](https://playground.google). Creation limits scale with Google One membership. The Verge, citing Google spokesperson Nia Carter, reports that the tool is free to use and that a Google One plan raises weekly token limits.

## What Playground builds

Playground is a chat-style builder, not a downloadable game engine. You type what you want. You can start from a blank canvas, remix a starter prompt, or follow guided support, then test the game immediately.

Google’s blog lists the kinds of changes you can request after the first build: physics, rules, characters, and the environment. [9to5Google](https://9to5google.com/2026/10/07/google-labs-playground/) adds that the chat can set a 2D or 3D game and single-player or multiplayer. Treat those choices as prompts, not as a guarantee that every genre will support every feature.

Games run in the browser on a phone or a laptop. When a build is ready you can keep it private, send a link, or publish it to the Playground Explore gallery. In select genres, published games can use in-game leaderboards and multiplayer. A Play Games profile lets you claim a handle, compete for a spot, and follow creators.

The gallery ranks titles using player ratings and play activity. Every published game goes through safety screening aligned with Playground’s [Community Guidelines](https://playground.google/community-guidelines), plus user reporting.

![Person playing a game on a laptop in a dim room](https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80)

## Open Playground and start a build

1. On a desktop or phone browser in the US, open [playground.google](https://playground.google). The Google Labs video also points to [labs.google.com/playground](https://labs.google.com/playground).
2. Sign in with a Google account that meets the age requirement. If the page says the experiment is unavailable, you are outside the current rollout.
3. Choose a blank start, a starter prompt, or the guided path. Starter prompts are faster if you only want to see how revision works.
4. Write one concrete prompt. Name the player action, the win condition, and the view. Example: “A 2D single-player game where a cat jumps between bookshelves to catch falling yarn. Three lives. Score increases per yarn ball. Soft indoor lighting.”
5. Wait for the first playable build, then press play in the same browser tab. Do not judge the game from the chat text alone.

Carter told The Verge that Playground uses Google’s Gemini, Nano Banana, and Lyria models with a custom harness trained on internal games. Audio and image style may therefore draw on those models. If you want the music side of Lyria on its own, see [Generate Music with Lyria 3.5 in the Gemini API](/blog/generate-music-lyria-3-5-gemini-api/).

## Revise with short follow-up prompts

Google’s create flow is iterative. After the first playable version, send one change at a time so you can tell which prompt caused a break.

Useful follow-ups:

- “Slow the fall speed of the yarn by about a third.”
- “Add a pause button and a restart button.”
- “Replace the score with a 60-second timer. The game ends when the timer hits zero.”
- “Make the cat sprite larger on phone screens.”
- “Switch the camera to a fixed side view.”

If a revision removes a rule you liked, restate that rule in the next message. Playground does not publish a version history in the launch post, so keep your own notes of prompts that worked.

Play on both a laptop and a phone before you share the link. Browser games can fit a desktop window and still clip controls on a narrow screen.

![Close-up of a handheld game console and screen](https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80)

## Share a link or publish to the gallery

Google lists three outcomes:

- **Private.** Keep the game to your account while you revise.
- **Link.** Send a shareable link so friends can play. This is the right step for a small test before a public listing.
- **Explore gallery.** Publish for the wider Playground community. The listing can be featured based on ratings and play activity.

Leaderboards and multiplayer apply only in select genres. If your prompt asked for multiplayer and the build is still single-player, say so in a follow-up rather than assuming the gallery will add it.

For a public game, use a Play Games profile if you want a custom handle and the ability to follow other creators. Read the community guidelines before you publish. Screening can block a title, and players can report games after they go live.

## What Unity Spark adds later

Playground’s launch post says a Unity Spark integration is coming for creators who want more than the prompt builder. Unity Spark is in testing, with a closed beta planned. Google describes it as professional-level mechanics, higher-fidelity 3D, and the Unity runtime. Games built that way are meant to stay playable inside Playground.

[GamesIndustry.biz](https://www.gamesindustry.biz/unity-unveils-a-web-based-ai-game-creation-platform) reports that Unity Spark will run in the browser, with no local install, and that the editor is desktop-only while finished games can play on desktop and mobile browsers. The same report says projects can be shared by link and published on Playground, and that both Unity Spark and Playground are limited to users 18 and older. Spark is not required for a first game today. Demo games are on playground.google, and Unity’s page is [unity.com/spark](https://unity.com/spark).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Dxvrvfyicp0"
    title="Introducing Playground: If you can think it, you can play it."
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Limits to plan around

Playground is an early experiment. A few constraints are already public:

- **Region and age.** Launch access is US, 18+. A VPN is not a supported path, and the post does not promise a date for other countries.
- **Creation quota.** Google ties tiered creation access to Google One. Free accounts can generate games, with higher weekly limits on paid plans, according to Google via The Verge. If a build stops mid-revision, check the quota before you rewrite the prompt.
- **Genre features.** Leaderboards and multiplayer are not universal. Ask for them only if the game type supports them.
- **Safety review.** Published games are screened. Avoid copyrighted characters, real-person likenesses, and prompts you would not want reviewed against the community guidelines.
- **Quality.** The first build is a draft. Short prompts that name controls, a goal, and a failure state revise more cleanly than a paragraph of lore.

Save the share link once a private test plays correctly. If a later prompt breaks controls, you still have a working URL to compare against.

## Conclusion

Playground turns a text description into a browser game you can play, share, or list in the Explore gallery. Start at playground.google with a US account that is 18 or older, ship one clear prompt, and revise a single rule at a time. Publish only after the phone layout and the win condition both work.

Unity Spark is the later path for higher-fidelity 3D. It is still in testing. The tool you can use today is the prompt builder, with creation room that depends on your Google One plan.

## Sources

- [Introducing Playground: Create and play custom games](https://blog.google/innovation-and-ai/technology/ai/playground-experimental-gaming-platform/) — Google Blog, 7 October 2026
- [Introducing Playground: If you can think it, you can play it.](https://www.youtube.com/watch?v=Dxvrvfyicp0) — Google Labs, 7 October 2026
- [Google now lets you make games with AI](https://www.theverge.com/tech/1006477/google-playground-unity-spark-ai) — The Verge, 7 October 2026
- [Google Labs announces Playground for prompt-based game creation](https://9to5google.com/2026/10/07/google-labs-playground/) — 9to5Google, 7 October 2026
- [Unity unveils a web-based AI game creation platform](https://www.gamesindustry.biz/unity-unveils-a-web-based-ai-game-creation-platform) — GamesIndustry.biz, 7 October 2026
