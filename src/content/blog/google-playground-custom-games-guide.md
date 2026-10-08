---
title: "Make Custom Games on Google Playground Without Code"
description: "Build and share custom games on Google Playground with text prompts. US 18+ guide covering creation, gallery, and Unity Spark."
pubDate: 2026-10-08T11:00:00
heroImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "google", "ai"]
noindex: false
---

You can describe a game and play it in the browser. On 7 October 2026, Google launched Playground, an experimental platform for creating, playing, and sharing custom games without writing code. It is open to users aged 18 and older in the United States at [playground.google](https://playground.google).

Maryam Karimzadehgan, a software engineer on Google's AI Innovation and Research team, framed the launch as a way to open game creation beyond people who already know complex engines. Creation access is tiered by Google AI subscription. Playing published games does not require you to build one first.

This guide covers how to start a game, change it with follow-up prompts, and share it. It also covers what Unity Spark adds later, and what the current experiment does not promise.

## What Playground is

Playground is browser-based. Google says you can play community games on a phone or a laptop. You do not install a game engine or export a project to get a first playable version.

The creation path is a conversation. You type what you want to build, then test it. Google lists three starting points: a blank canvas, starter prompts you can remix, or guided support that helps shape the concept. After the first version appears, you can ask for changes to physics, rules, characters, or the environment.

You stay in control of the direction. Playground is not a one-shot generator that locks the result. Treat the chat as the editor.

Google and Unity announced the same day that a later integration, Unity Spark, will add higher-fidelity 3D and the Unity runtime. That product is not the tool you open today. The live product is Playground.

![Hands holding a game controller in front of a screen](https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80)

## Check access before you prompt

Playground launched for U.S. users who are 18 or older. If the site asks you to sign in, use a personal Google Account that meets that age and region rule. Google has not said the experiment is available outside the United States.

Creation limits depend on your Google AI subscription. The official post says tiered creation access is rolling out on that basis. If you can browse the gallery but cannot start a new game, the limit is on creation, not on the site itself.

Sign in with a Play Games profile if you want a custom handle, leaderboards, and the option to follow creators. Unity's partnership note says a Play Games profile is how players reach built-in leaderboards, multiplayer matchmaking, and community features.

## Create your first game

Open [playground.google](https://playground.google) in Chrome on a desktop or phone. Confirm you are signed in.

1. Start from a blank canvas if you already have a clear idea. Use a starter prompt if you want a working skeleton to rewrite. Use guided support if you only have a theme, such as a cafe rush or a short racing loop.
2. Write a prompt that names the genre, the goal, the controls, and one win or lose condition. A useful first line is specific: "A one-button browser game where a barista catches falling ice cubes. Miss three and the round ends. Score rises with each catch."
3. Generate the first version and play it before you ask for art or audio changes. A broken rule is cheaper to fix before you restyle the scene.
4. Send one change at a time. Ask to rewrite the scoring, then the physics, then the characters. Google's own examples are physics, rules, characters, and environment.
5. Play the revised build on the same page. If the new rule did not land, restate it in full instead of saying "make it better."
6. Keep the game private while you test. Share a link only after a friend can finish a round without you explaining the controls.

A strong prompt has four parts:

- **Genre and camera.** Top-down dodge, side-scrolling runner, or match-three.
- **Player action.** Tap, drag, or keyboard keys.
- **Session length.** A 60-second round is easier to judge than an open world.
- **Failure state.** Lives, a timer, or a missed target.

Avoid asking for a copy of a named commercial game. Describe the mechanic in plain language. Published games also go through safety screening, so a prompt that copies a trademarked character is a weak starting point.

## Play, share, and publish

When the build is ready, Google gives you three exits. Keep the game private. Send a shareable link to friends or family. Or publish it to the Playground Explore gallery.

Select genres support in-game leaderboards and multiplayer. That is not every game. If your prompt is a solo puzzle, do not expect a live lobby. Ask for a leaderboard only after the core loop works, and only if the genre you chose is one Playground already supports for competition.

With a Play Games profile you can claim a handle, like games, chase a top score, and follow creators. The gallery ranks what it shows with player ratings and play activity. Google says the goal is to surface games that are fresh, creative, and fun.

Every published game goes through safety screening aligned with the [Playground Community Guidelines](https://playground.google/community-guidelines). Players can also report a game. Publishing is not instant approval of whatever the prompt produced.

![People playing games together on a couch](https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=800&q=80)

## What Unity Spark adds later

Unity Spark is the next creation layer, not a replacement you can open today. Google says it will bring professional-level mechanics, high-fidelity 3D, and the Unity runtime into Playground. Games built that way are meant to stay playable for other Playground users.

Unity Spark is in testing. A closed beta is coming soon. Demo games are on playground.google, and the product page is [unity.com/spark](https://unity.com/spark). Unity's 7 October note says the broader Spark experience arrives later this year.

Stay on the current Playground chat if you want a small browser game this week. Wait for the Spark beta if you need Unity-grade 3D and a path that can grow past a prompt prototype. The two are designed to connect: start with text on Playground, then expand in Spark when that beta opens.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Dxvrvfyicp0"
    title="Introducing Playground: If you can think it, you can play it."
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips that save a failed build

Lock the rules before the theme. A clear fail state and a single button will tell you faster if the idea is fun than a detailed art direction will.

Name the session. "One round lasts 45 seconds" gives the model a boundary. Open-ended prompts tend to produce a menu and no finish line.

Change one system per message. If you ask for new physics and a new character in the same note, you will not know which request broke the round.

Test on your phone after the desktop pass. Playground is browser-based on both, and a control that needs a keyboard may fail on a touch screen.

Publish only after a second person can play from the link without your narration. Private mode is there for that check.

Read the community guidelines before you publish. Screening and user reports are part of the gallery, not an optional extra.

If you also make music or short clips in Google's other creative tools, the [Lyria 3.5 song guide](/blog/create-songs-lyria-3-5-gemini-app/) covers a separate Gemini app path. Playground does not replace that workflow.

## Limits to plan for

Playground is an early experiment. Google says it will keep changing and wants feedback from people who share games. Do not treat today's prompt format as a stable API.

Availability is U.S.-only and 18+ at launch. Creation capacity follows your Google AI subscription tier. Leaderboards and multiplayer apply to select genres, not every published game.

Unity Spark is not generally available. Closed beta timing is "soon," and the full integration is described as later this year. A Playground prototype is not a Unity project you can export today.

## Conclusion

Playground turns a written game idea into something you can play in the browser. Sign in at playground.google if you are 18 or older in the United States, start from a blank canvas or a starter prompt, and revise one rule at a time. Share a private link before you publish to Explore. Use Unity Spark only after the closed beta opens, when you need 3D and the Unity runtime on top of that first prompt.

## Sources

- Google blog, "Introducing Playground: Create and play custom games," 7 October 2026: https://blog.google/innovation-and-ai/technology/ai/playground-experimental-gaming-platform/
- Unity, "Google and Unity Partner on New AI Gaming Platform," 7 October 2026: https://unity.com/news/google-and-unity-partner-on-new-ai-gaming-platform-for-the-next-era-of-interactive-entertainment
- Playground: https://playground.google
- Unity Spark: https://unity.com/spark
- Playground Community Guidelines: https://playground.google/community-guidelines
- Google Labs, "Introducing Playground: If you can think it, you can play it.": https://www.youtube.com/watch?v=Dxvrvfyicp0
