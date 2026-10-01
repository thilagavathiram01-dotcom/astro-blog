---
title: "How Instagram Cut Agent Tokens With Compose"
description: "Instagram Direct cut UI code 50% and agent token cost 33% with Compose. Apply the same AI-native UI rules on Android."
pubDate: 2026-10-01T10:00:00
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "ai", "productivity"]
noindex: false
---

Instagram Direct handles billions of messages a day. On 30 September 2026, Meta and Google published how the Android team rebuilt that surface in Jetpack Compose so AI agents could write safer UI at lower cost.

The official numbers are specific. Migrated Direct UI is 50 percent smaller. Agent sessions on Compose used 33 percent fewer tokens than the same work on Views. Engineer-agent exchanges dropped 32 percent. Agent execution time dropped 35 percent per character of landed code.

This guide restates those results and the architecture rules the team published. Use them before you point an agent at a hybrid View-plus-Compose screen.

## Why Views plus agents get expensive

Direct already squeezed the View system hard. The problem was not raw frame time. It was how much custom context an agent needed to change a row without breaking recycling.

One conversation screen handles more than 200 message types. Individual components can render in more than 160 state permutations. An agent that sees a `RecyclerViewItem` base class with `onBind` will often stash extra mutable fields on the item. Those fields survive rebinds and leak across rows.

Google and Meta call this the path of least resistance. Skills and prompt packs help, but they burn tokens and still fail when the architecture lets bad code compile.

If you already run agents inside the IDE, pair this with our [Android Studio BYOA setup](/blog/android-studio-byoa-agents-rabbit-2/) so the agent you pick hits the same project graph.



![Laptop showing code in a dark editor](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80)



## Two rules that made Direct AI-native

The blog lists two practical rules. They are more useful than a slogan about “AI-first.”

**1. Minimize custom context.** The more bespoke base classes an agent must learn, the worse its diffs. Prefer patterns that already live in Android documentation.

**2. Let the architecture enforce boundaries.** Do not rely on a skill file to stop mutable item state. Put Compose content where it cannot see leftover fields. Make the cheap path the correct path.

The team’s working shape is a list item whose Compose lambda lives in the constructor. The lambda receives `uiState`. Pin actions go through a callback. Feature flags are read inside the composable, not captured from imperative `onBind`.

That is equivalent to a plain `@Composable` function, while it still fits the existing item registry. Agents stop inventing `var isPinned` on a recycled holder.

## How they migrated without stopping feature work

Direct could not freeze the product. Hundreds of UI pieces had to exist next to the old Views for a long stretch.

They split each surface into two stages:

1. Write the Compose implementation with AI and lock the architecture plus the hard edge cases.
2. Polish performance and ship a public test so other engineers can finish production quality without reopening design fights.

Engineers shared a knowledge base of reusable skills and conventions. That kept agents from inventing a new style per person. AI sped up the volume of parallel code. Humans still owned rollout and metrics.

Do not treat interop as the end state. Embedding a Compose island in a large View tree is a valid first step. Leaving it there trains agents to mix paradigms. The official post says that mix is where subtle bugs and extra token spend appear.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/wg4NHmxJ78g"
    title="Jetpack Compose migration code-along"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What the token study measured

Meta compared agent sessions that edited Compose UI with sessions that edited Views on the same Direct Android codebase. Two views of the data:

- Per character of landed code: 32 percent fewer engineer-agent exchanges and 35 percent less agent execution time.
- Per agent session: 33 percent lower token cost on Compose.

They also track a risk score on files. When that score doubles, Views lose about 30 percent agent resource efficiency per landed character. Compose loses about 9 percent under the same rise in risk. Resource efficiency here is a composite of tokens, execution time, and engineer-agent turns.

These figures are Meta’s internal analysis as published on the Android Developers Blog. They are not a public benchmark you can rerun on your repo without matching their session definition.



![Close-up of programming on a monitor](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)



## Performance bar they refused to drop

Direct already sat on years of View tuning. Compose had to match production feel. The three metrics they named for the migration:

- Time to interact after opening the screen.
- Time to fully load, including images.
- Scroll performance without dropped frames.

Those run in production so A/B tests compare Compose against the legacy tree. Small interop slices often look worse than a full surface because bridging cost distorts the number. The post is explicit: the more of a screen you migrate end to end, the clearer the performance picture.

Google and Meta also used the work to improve Compose for other apps, not only Instagram. Treat that as a platform note, not a promise that your first Compose list will beat a hand-tuned View list on day one.

## Apply the pattern in a smaller app

You do not need Direct’s scale to use the same checklist.

**1. Stop teaching agents your private item base class.** If every row subclasses a custom binder, write one constructor-lambda item type and delete the extra hooks.

**2. Keep state in the UI model.** Pins, selections, and draft flags belong in `UiState`, not on the item instance.

**3. Read flags inside composition.** Feature checks captured outside `setContent` are easy for an agent to freeze at the wrong time.

**4. Finish a screen before you measure.** One Compose button in a View list is a bridge test, not a Compose verdict.

**5. Share one skill pack.** One conventions file beats five engineers pasting different “never use mutableState on the holder” notes.

**6. Count tokens per landed change.** If Views sessions cost more turns on risky files, schedule those files for Compose first.

## Tips

Do not ask an agent to “convert this RecyclerView to Compose” in one shot on a 200-type inbox. Give it one message type and the target item constructor.

Keep production metrics on during the public test. Time to interact and scroll jank will catch holder bugs that unit tests miss.

When an agent proposes a field on the item class, reject the patch even if the preview looks fine. That field is how Direct’s Example 1 leaked pin state across rows.

## Conclusion

Instagram Direct’s Compose migration cut UI code by half and cut typical agent-session token cost by 33 percent, according to Meta and Google. The win came from architecture that blocks mixed imperative state, not from a larger prompt.

Copy the constructor-lambda item, keep state in the model, migrate a whole surface, then measure time to interact and scroll. Agents follow the cheapest compile path. Make that path declarative.

## Sources

- [How Instagram Direct engineers built AI-native UI architecture with Jetpack Compose](https://android-developers.googleblog.com/2026/09/jetpack-compose-ai-native-ui-instagram-direct.html) — Android Developers Blog, 30 September 2026
- [Jetpack Compose documentation](https://developer.android.com/compose) — Android Developers
- [Jetpack Compose migration code-along](https://www.youtube.com/watch?v=wg4NHmxJ78g) — Android Developers
