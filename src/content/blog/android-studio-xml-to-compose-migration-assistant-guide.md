---
title: "How to Use the XML to Compose Migration Assistant in Android Studio"
description: "Practical steps to migrate XML layouts to Jetpack Compose with the new AI Migration Assistant in Android Studio after Dev Summit 2026."
pubDate: 2026-10-29T23:30:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "how-to", "developer"]
noindex: false
---

Moving an existing Android app from XML Views to Jetpack Compose used to mean rewriting every layout by hand. At the Android Dev Summit on October 28, 2026, Google added a Migration Assistant to Android Studio that lets an AI agent handle most of that work.

The assistant is available in the latest Canary builds. It scopes the migration with you, drafts a plan, converts layouts and related view-binding code into idiomatic Compose, and shows progress so you can resume if the session stops. You can use the built-in agent or any agent connected through Bring Your Own Agent.

This guide walks through starting a migration, reviewing the output, and finishing the switch safely.

## What the Migration Assistant does

The tool targets XML layout files and the Kotlin or Java code that inflates them. It produces Compose functions that match the visual structure, then updates call sites where possible. A timeline in the agent window tracks each step. The conversation is saved, so you can close the IDE and return later.

Official Android Developers Blog posts list it under the Android Studio updates at the summit. It works alongside the new Change Review feature so you can inspect the generated code before committing.

![Android developer reviewing code on a laptop](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Step 1: Update to a Canary build with the assistant

The feature ships in Android Studio Canary, not yet in Stable Rabbit 2.

1. Open the Android Studio download page and select the Canary channel.
2. Install the latest Canary build.
3. Open your existing View-based project.
4. Confirm the Agent tool window is available (View > Tool Windows > Agent).

If you prefer a specific coding agent, connect it first through Settings > Tools > AI > Agents. The Migration Assistant can use that agent.

## Step 2: Start a migration on one layout

Begin with a single screen so the diff stays reviewable.

1. In the Project view, right-click an XML layout file (for example activity_main.xml).
2. Choose AI > Migrate to Compose.
3. The agent opens a planning dialog. Confirm the scope: only this layout, or include related fragments and view-binding classes.
4. Accept the plan. The agent begins converting the hierarchy to Column, Row, or ConstraintLayout composables as appropriate.
5. Watch the progress timeline in the Agent window. It lists completed steps and the next action.

You can also trigger the same flow from the action palette (double-shift or Ctrl+Shift+A) by searching for “Migrate to Compose”.

## Step 3: Review and refine the generated code

The agent creates a new Kotlin file with @Composable functions and updates the calling Activity or Fragment where it can.

1. Open the generated Compose file side-by-side with the original XML.
2. Check modifiers for padding, size, and background so the visual result matches.
3. Verify state handling. EditText becomes a TextField with a remembered mutableStateOf or a ViewModel property.
4. Run the Compose Preview to catch layout differences before launching the app.
5. Use Change Review (available in the same Studio version) to get an AI summary of the patch.

If the agent stops, reopen the Agent window. The timeline shows where to resume.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/8Lmv7LGgL4E"
    title="Android Dev Summit 2026 keynote"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step 4: Migrate a whole module or project

Once one screen works, expand the scope.

1. From the action palette run “Migrate to Compose” and select the module.
2. The agent proposes a batch plan. Accept or edit the list of layouts.
3. Let it run. It processes files sequentially and updates the timeline.
4. After each batch, build the project and fix any remaining compile errors. The agent can continue from the error list if you paste it into the chat.
5. Replace remaining View inflation calls with setContent or ComposeView once the UI is fully converted.

Keep the original XML files until the Compose version passes your tests. Delete them only after the app runs cleanly on device.

## Step 5: Handle themes and interoperability

Compose and Views can coexist during the migration.

1. Migrate colors and typography to MaterialTheme in Compose. Use the Material Theme Builder if your XML theme is complex.
2. For screens that still mix both, wrap Compose content in a ComposeView inside the XML layout.
3. Once a screen is pure Compose, remove the XML layout and the corresponding setContentView call.
4. Update navigation if you use the Navigation component. The agent can suggest Navigation 3 patterns; see our guide on [Android CLI and Agent Skills](/blog/android-cli-agent-skills/) for related skills.

![Code on a computer screen during an Android project](https://images.unsplash.com/photo-1763568258330-039d2f3dfc76?auto=format&fit=crop&w=800&q=80)

## Tips for cleaner migrations

- Start with leaf screens that have few dependencies. Avoid migrating the main navigation host first.
- Provide the agent with a screenshot of the current UI. It uses the image to match spacing and colors more closely.
- Run instrumented tests after each screen. The assistant does not generate tests automatically.
- Commit after every successful screen so you can revert a bad batch.
- Combine with the official “migrate-xml-views-to-jetpack-compose” skill if you prefer the terminal workflow with Android CLI.

## What to expect and what to check

The assistant handles standard widgets (TextView, Button, ImageView, RecyclerView patterns) reliably. Custom Views and complex ConstraintLayout chains still need manual adjustment. Always compare the Compose Preview against a device screenshot of the original screen.

The feature is in Canary, so expect occasional incomplete diffs. Treat the output as a strong first draft, not production code until you review it.

## Conclusion

The XML to Compose Migration Assistant in Android Studio Canary removes the most repetitive part of a Compose migration. Right-click a layout, let the agent draft the plan and code, then review the result with Compose Preview and Change Review. Start with one screen, expand to a module, and keep XML only until the Compose version is verified.

Download the latest Canary, open a View-based project, and try the AI > Migrate to Compose action on a simple layout today.

## Sources

- [What's new in Android developer tools and performance at Android Dev Summit](https://developer.android.com/blog/posts/android-dev-summit-26-developer-tools-performance)
- [Agentic and Flexible: A next era of Android development](https://developer.android.com/blog/posts/build-it-your-way-a-next-era-of-android-development)
- [Migrate XML Views to Jetpack Compose](https://developer.android.com/develop/ui/compose/migrate/migrate-xml-views-to-jetpack-compose)
- [Android Dev Summit 2026 keynote](https://www.youtube.com/watch?v=8Lmv7LGgL4E)
- [Android Studio releases](https://developer.android.com/studio/releases)
