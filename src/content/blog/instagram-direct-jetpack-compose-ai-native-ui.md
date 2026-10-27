---
title: "Instagram Cuts AI Agent Costs 33% with Compose"
description: "Learn how Instagram Direct built an AI-native UI with Jetpack Compose, cutting token costs 33% and code volume 50%."
pubDate: 2026-10-27T10:00:00
heroImage: "https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "ai-tools", "tutorials", "developer"]
noindex: false
---

Instagram Direct handles billions of messages daily. The team recently rebuilt large parts of its Android UI with Jetpack Compose specifically so AI coding agents would produce better results. The outcome: 50% less UI code, 35% faster agent execution, 32% fewer engineer-agent exchanges, and 33% lower token cost per session.<grok type="render_inline_citation" citation_id="285" />

This was not a standard modernization. Meta and Google partnered to design an AI-native architecture. The declarative style of Compose makes the code shorter and more predictable. Agents spend less effort figuring out side effects or hidden state.

![Programmer working across multiple monitors in a development workspace](https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=800&q=80)

## Why mixed View and Compose code hurts agents

Teams often start by embedding Compose components inside existing RecyclerView items. That works for gradual rollout, but it creates problems for AI. Agents take the path of least resistance. When they see both imperative and declarative patterns in the same class, they blend them incorrectly.

A common mistake is storing mutable state on the item class itself and reading feature flags outside the composable. The flag gets captured in the lambda, and the mutable field survives rebinding. The result is hard-to-reproduce bugs. Even a dedicated @Composable method does not fix the issue if the class still holds state the agent can reach.

The Instagram team documented this with simple examples. In one version, a Button toggled a field that lived outside the UiState. Agents repeatedly generated that pattern because it required less new context. Over time the quality of generated code dropped and token use rose.

## Practical rules for AI-friendly Compose code

The Direct team settled on two rules that any Android team can apply:

- Minimize custom context. The closer your code stays to published Compose best practices, the less the agent has to learn about your specific abstractions.
- Make the correct path the easiest path. Architecture should prevent bad patterns rather than relying on extra skills or prompts that consume tokens.

One concrete pattern they used is a constructor-only content lambda. The item class receives the UiState and callbacks. All Compose code lives inside the constructor block. It cannot reach class fields, so the agent has no place to hide mutable state. This looks almost identical to a plain @Composable function while still fitting the existing item architecture.

```kotlin
class ChatItem(
  val features: FeatureFlagProvider,
  val onPin: (Boolean) -> Unit,
) : ComposeItem<ChatUiState>(
  content = { uiState ->
    val isPinnedChatsEnabled = features.isEnabled("pinned_chats_feature")
    if (isPinnedChatsEnabled) {
      Button(onClick = { onPin(!uiState.isPinned) }) {
        Text(if (uiState.isPinned) "Unpin" else "Pin")
      }
    }
  }
)
```

![Close-up of a mechanical keyboard in a coding environment](https://images.unsplash.com/photo-1754548930550-be9fa88874f4?auto=format&fit=crop&w=800&q=80)

## Measured results from real agent sessions

Meta compared agent sessions on the same tasks before and after the Compose migration. Per character of landed code, Compose needed 32% fewer back-and-forth exchanges and 35% less execution time. Across a typical session the token cost fell 33%.<grok type="render_inline_citation" citation_id="285" />

They also tracked risk score, an internal measure of how likely a change is to cause production issues. When a file's risk score doubled, View-based UI lost 30% of agent resource efficiency. The same doubling cost Compose only 9%. Declarative boundaries keep the agent productive even on complex surfaces.

The migration covered components with more than 160 state combinations and screens that render over 200 message types. Multiple engineers ran agents against a shared set of skills and conventions. One engineer settled the architecture and edge cases; others then generated production-ready code without re-deciding those choices.

## Performance validation and Compose improvements

Instagram measures time to interact, time to fully load, and scroll performance in production. Small partial migrations gave misleading data because of interop costs between Views and Compose. Full-screen migrations produced clearer results and confirmed no regressions once the team finished the work.

The collaboration also improved Compose itself. New APIs such as pausable composition and LazyLayoutCacheWindow (available in recent Compose versions) came out of the performance work. These help other apps as well.

## How to apply the same approach

1. Audit current list items or screens for mixed imperative and declarative state.
2. Move all UI into pure composables or constructor-only content blocks that receive UiState and callbacks only.
3. Prefer standard Compose patterns over custom base classes that hide lifecycle hooks.
4. Run agent sessions on a few representative tasks and compare token use and iteration count before and after the change.
5. Migrate one complete screen at a time so performance metrics reflect the real cost of Compose rather than interop overhead.

If you already use AI agents for Android work, also look at how Android CLI and skills reduce token use for platform tasks. See the guide on [Android CLI skills for any agent](/blog/android-cli-agent-skills/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/wg4NHmxJ78g"
    title="Jetpack Compose migration code-along"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Instagram Direct showed that an AI-native UI architecture is not just cleaner code. It is a direct reduction in the cost and time of using coding agents. The 50% smaller codebase and 33% lower token cost came from deliberate boundaries, not from better prompts alone.

Start with one high-traffic screen. Keep state in UiState objects, keep composables pure, and measure the agent sessions. The same pattern scales from a single feature to an entire messaging surface.

## Sources

- Android Developers Blog: How Instagram Direct engineers built AI-native UI architecture with Jetpack Compose (30 September 2026)
- Instagram Direct performance and migration details from the same post
- Jetpack Compose documentation on migration strategy
