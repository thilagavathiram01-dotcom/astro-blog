---
title: "How to Add the Wear Compose Material 3 Android Skill"
description: "Install Google's Wear Compose Material 3 skill with Android CLI, then migrate watch lists to TransformingLazyColumn and ScreenScaffold."
pubDate: 2026-10-04T16:40:00
heroImage: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "ai-tools"]
noindex: false
---

Watch UIs fail in predictable ways when an agent copies phone Compose. Round screens, rotary input, and ambient mode are not optional details. On 2 October 2026, Android Developers published a CLI update that puts an official Wear OS skill in the same install flow as Device Streaming.

The skill is `wear-compose-m3`. It is a `SKILL.md` file that feeds your agent current guidance from developer.android.com instead of a stale training cutoff. This guide covers install, the patterns the skill enforces, and how one Wear team used it on a real migration.

If you already stream remote phones from the terminal, pair this skill with [Android Device Streaming in the CLI](/blog/android-cli-device-streaming-remote-phones/). The remote device catches hardware bugs. The skill stops the model from inventing Wear layout code while that device is reserved.

## What the skill is for

Android skills are structured instructions. They include API references, samples, and architectural patterns. Google says the catalog now has over 20 skills, covering Play policy audits, Credential Manager restore, intent security, profilers, CameraX, Leanback-to-Compose for TV, Media3 Cast, Play Engage, test setup, and R8 configuration.

`wear-compose-m3` is the Wear OS entry. Official docs describe it as guidance for `androidx.wear.compose.material3`, `androidx.wear.compose.foundation`, and Wear navigation, plus ambient mode and previews. The skill metadata lists `AppScaffold`, `ScreenScaffold`, and `TransformingLazyColumn`, and migration from Material 2.5 and Horologist.

Wear OS has its own Material 3 library. Phone `androidx.compose.material3` is not a substitute. Foundation from mobile can sit alongside Wear foundation. Navigation should come from the Wear artifact, not `androidx.navigation:navigation-compose`.

![Round smartwatch on a wrist, the form factor Wear Compose targets](https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80)

## Install Android CLI and the skill

The 2 October post lists a short sequence. Run it from the Wear project root so the skill lands where the agent reads project files.

1. Install Android CLI from the official install link on the Android CLI docs (`goo.gle/android-cli`).
2. Run `android init` to install the `android-cli` skill and configure the agent.
3. List official skills with `android skills list`.
4. Add the Wear skill to this project: `android skills add wear-compose-m3 --project=.`
5. Update later with `android skills update wear-compose-m3`, or `android skills update --all`.

The developer.android.com Compose for Wear OS page also documents the shorter form `android skills add wear-compose-m3` when you are already in the project.

Skills are environment-agnostic. The same file works in Android Studio, Antigravity, Claude, and Codex. You do not maintain a separate Wear prompt for each agent.

## Patterns the skill is meant to enforce

The blog calls out decisions agents miss without explicit guidance:

- Round viewports and rotary input, not a shrunk phone list.
- Ambient display mode and lower power use.
- `TransformingLazyColumn` for scrolling lists.
- `AppScaffold` and `ScreenScaffold` as the containers.
- Theme typography instead of hardcoded `sp` values.
- Forwarding `ScreenScaffold` content padding into the list.

Those last two are not style nits. The Android Developers post says the skill caught both on a production migration after the base model missed them. A list that ignores scaffold padding clips under the round bezel. Hardcoded type breaks when the user changes display size.

The skill file also tells the agent to read the version from `gradle/libs.versions.toml` or `build.gradle.kts` directly, and not to shell out to `./gradlew dependencies` just to discover the current Wear Compose version.

![Developer laptop with code on screen, where Android CLI installs skills](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80)

## What FotMob changed in one afternoon

Android Developers quotes the FotMob Android tech lead, Roy Solberg: "One skill, one afternoon, eight lists migrated and a pile of custom rotary code gone!"

The post says the team used the skill to modernize an existing Wear Material 3 app. The work included:

- Moving multiple lists to `TransformingLazyColumn`.
- Applying `ScreenScaffold` content padding.
- Using `ListHeader` for titles.
- Applying `SurfaceTransformation` on cards and buttons.
- Switching to theme typography.
- Adding Wear previews.

The changes compiled and were checked on the emulator for scrolling, rotary input, edge morphing, and right-to-left layout. The team then deleted a legacy wrapper and custom rotary and focus boilerplate.

That is a case study, not a benchmark you should quote as a universal speedup. Your app may have more custom drawing. Still, the failure modes they removed are the ones the skill text is written to prevent.

## A practical migration pass

Use the skill as a checklist, not as a blind rewrite.

1. Confirm the module already depends on `androidx.wear.compose:compose-material3` and Wear foundation. Do not add phone Material 3 for watch screens.
2. Ask the agent to migrate one list screen, and name `TransformingLazyColumn`, `ScreenScaffold`, and `ListHeader` in the prompt so the skill triggers on those terms.
3. Check that `contentPadding` from `ScreenScaffold` is passed into the list. The FotMob note says the base model forgot this.
4. Replace hardcoded text sizes with the Wear theme typography roles.
5. Preview the screen, then run it on an emulator. Scroll with touch and with the rotary crown. Switch the layout direction to RTL.
6. Repeat per list. FotMob did eight in an afternoon after the pattern was proven on the first screens.

Keep phone Compose migrations on the separate Compose skill. Mixing the two in one prompt is how agents import `androidx.compose.material3` into a watch module.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/qZLQVlLgTDU"
    title="What are Android skills and how to use them with AI tools?"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Other skills worth adding in the same session

The October catalog is not only Wear. If the agent is already configured, these official skills match common follow-up work:

- Play policy compliance, for manifests, runtime permissions, target SDK, and privacy disclosures before review.
- Android Intent security, for implicit intent hijacking, broadcast receivers, and `PendingIntent` checks.
- Testing strategy, for unit tests, Compose UI test rules, and screenshot infrastructure.
- R8 configuration audit, if the Wear app shares a minified release pipeline with the phone app.

Install only what the current task needs. A project root full of unrelated skills makes the agent pull TV or camera guidance into a watch change.

## Limits to keep in mind

The skill does not replace an emulator or a watch. FotMob still verified scroll, rotary, edge morphing, and RTL on the emulator. Device Streaming in Android CLI is for remote physical phones such as a Pixel 10 Pro over ADB over SSL. It does not, in the 2 October post, claim a Wear OS watch farm.

Skills also go stale if you never update them. Run `android skills update wear-compose-m3` when Wear Compose releases land. The skill file itself was last noted in its metadata as updated on 10 September 2026, before the October CLI announcement, so treat the CLI blog as the install source of truth and the skill file as the component source of truth.

Google evaluates skills and points readers to "Inside Android Skills - Built for deprecation" for the method. That does not mean every generated diff is correct. Review padding, ambient behavior, and permission prompts before you merge.

## Conclusion

Install Android CLI, run `android init`, then `android skills add wear-compose-m3 --project=.`. Point the agent at one list, require `TransformingLazyColumn` and `ScreenScaffold` padding, and verify rotary and RTL on an emulator. The October 2026 CLI post shows that this skill already caught padding and typography mistakes on a shipping Wear app, and removed a layer of custom rotary code in the same pass.

## Sources

- Android Developers Blog, 2 October 2026: Device Streaming and Android skills in Android CLI
- developer.android.com: Use Jetpack Compose on Wear OS (Wear Compose Material 3 skill install)
- android/skills on GitHub: `wear/wear-compose-m3/SKILL.md`
- Android Developers on YouTube: What are Android skills and how to use them with AI tools?
