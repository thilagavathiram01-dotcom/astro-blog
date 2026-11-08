---
title: "How to Manage Multi-Turn Sessions with ML Kit Agentic API"
description: "Step-by-step guide to creating, preserving across rotation, and cleaning up multi-turn AgentSession instances with the ML Kit Agentic API and Gemini Nano 4 on Android."
pubDate: 2026-11-08T14:00:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "ai-tools", "gemini"]
noindex: false
---

Android developers building on-device agents with the ML Kit Agentic API quickly need more than a single prompt. Users expect conversations that remember earlier turns, survive screen rotation, and free memory when a chat ends.

The `AgentRunner` and `AgentSession` classes handle history automatically once you set them up correctly. This guide shows the practical patterns from the official ML Kit documentation so your agents stay responsive and private on Gemini Nano 4.

If you are still setting up the library, start with our earlier post on [building on-device agents with the ML Kit Agentic API](/blog/how-to-build-on-device-agents-ml-kit-agentic-api-android/).

## Prerequisites

Your project must already include the alpha dependency and meet the platform requirements.

```
dependencies {
    implementation("com.google.mlkit:genai-agent:1.0.0-alpha1")
}
```

Requirements from the docs:
- Android 14 (API 34) or higher, enrolled in the AICore Developer Preview program
- Supported device with Gemini Nano available
- minSdk 26 or higher
- Kotlin 2.3 or higher

The agent and runner are created once:

```
val agent = Agent.builder()
    .setName("Assistant")
    .setInstructions("You are a helpful on-device assistant.")
    .build()

val runner = AgentRunner(agent)
```


![Android phone showing a conversation interface](https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80)


## Creating Multi-Turn Sessions

Multi-turn conversations use an `AgentSession` obtained from the runner. Session IDs must be non-blank, at most 128 characters, and match the pattern of alphanumeric characters, underscores, hyphens, or periods.

A simple timestamp or UUID works:

```
val sessionId = "user_chat_${System.currentTimeMillis()}"
val session = runner.getOrCreateSession(sessionId)
```

Each new user message is wrapped in a `Content` object and sent with `runAsync`. The session automatically records prior turns (user messages, tool calls, and model responses) as context.

```
val prompt = Content.builder()
    .text("Hello! Can you help me organize my day?")
    .build()

lifecycleScope.launch {
    session.runAsync(prompt)
        .textTokens()
        .collect { token ->
            // Append token to your UI state
        }
}
```

Subsequent calls on the same session preserve the full dialogue. This is the core advantage over manually managing a list of `Content` objects with the lower-level Prompt API.

## Preserving Sessions Across Configuration Changes

`AgentSession` holds history in memory and does not implement `Parcelable`. If you store the session only in an Activity or Fragment, screen rotation destroys it and the conversation restarts.

The recommended pattern is to keep the session inside an AndroidX `ViewModel`:

```
class ChatViewModel(
    private val runner: AgentRunner,
    private val sessionId: String = "default_chat_session"
) : ViewModel() {

    private val session: AgentSession = runner.getOrCreateSession(sessionId)

    private val _responseText = MutableStateFlow("")
    val responseText: StateFlow<String> = _responseText.asStateFlow()

    fun sendMessage(userPrompt: String) {
        viewModelScope.launch {
            val content = Content.builder().text(userPrompt).build()
            session.runAsync(content)
                .textTokens()
                .collect { token ->
                    _responseText.update { it + token }
                }
        }
    }

    override fun onCleared() {
        super.onCleared()
        session.close()
    }
}
```

The ViewModel survives configuration changes, so the in-memory history stays intact. When the ViewModel is permanently destroyed, `close()` releases the session resources.


![Developer working with Android code on a laptop](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)


## Memory Management and Cleanup

In-memory history grows with every turn and tool result. Bound it deliberately:

- When the user starts a new chat or leaves a thread, call `session.delete()` or `runner.deleteSession(sessionId)` to free memory immediately.
- `session.close()` cancels in-flight work and schedules background eviction.
- On sign-out or full data clear, call `runner.clearAllSessions()`.

Always close the runner itself when the owning component is destroyed:

```
override fun onCleared() {
    super.onCleared()
    session.close()
    runner.close()
}
```

These steps prevent memory pressure on devices running Gemini Nano 4, especially during long multi-turn sessions that also invoke AppFunctions tools.

## Single-Turn vs Multi-Turn Execution

Not every request needs history. For one-off tasks such as summarizing text, validating input, or answering a standalone question, use the runner directly:

```
val content = Content.builder()
    .text("Summarize the following notes: ...")
    .build()

runner.runSingleTurnAsync(content)
    .collect { event ->
        if (event is AgentEvent.TextMessage && !event.isPartial) {
            // Display the complete summary
        }
    }
```

The runner creates a temporary internal session and purges it automatically when the stream finishes. This avoids leftover state for ephemeral features.

Choose multi-turn sessions for ongoing chats. Choose single-turn for isolated actions.

## Tips for Production Use

- Generate session IDs with `UUID.randomUUID().toString()` when you need guaranteed uniqueness across users or devices.
- Collect tokens into a `StateFlow` or Compose state so the UI updates smoothly without blocking the main thread.
- Monitor memory in the Android Studio profiler while testing long conversations that also call tools.
- Pair sessions with the streaming events APIs if you need finer control over partial text, tool status, or errors.
- Keep the AICore Developer Preview enrollment active during testing; function calling and the Agentic API require Gemini Nano 4.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/tAy7IifZXG0"
    title="Unlock agentic capabilities in your app with ML Kit GenAI"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Proper session management turns the ML Kit Agentic API from a simple prompt wrapper into a reliable on-device conversation engine. Create sessions with `getOrCreateSession`, hold them in a ViewModel so they survive rotation, clean them up explicitly when chats end, and fall back to `runSingleTurnAsync` for one-off work.

These patterns keep user data on the device, avoid memory leaks, and match the guidance in the official ML Kit documentation. Once your sessions are solid, you can layer on AppFunctions tools and Compose UI without losing context.

Sources:
- [Get started with agentic workflows](https://developers.google.com/ml-kit/genai/agent/android/get-started)
- [Manage sessions and lifecycle](https://developers.google.com/ml-kit/genai/agent/android/manage-sessions)
- [Build agentic workflows with Gemini Nano](https://developer.android.com/ai/gemini-nano/mlkit-agent-api)
- [Android Dev Summit 2026 intelligent apps announcements](https://developer.android.com/blog/posts/android-intelligence-system-in-app-agents-ads)
