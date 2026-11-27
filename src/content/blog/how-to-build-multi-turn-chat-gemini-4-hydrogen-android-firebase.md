---
title: "How to Build Multi-Turn Chat with Gemini 4 Hydrogen in Android"
description: "Step-by-step guide to add multi-turn Gemini 4 Hydrogen chat to Android apps using Firebase AI Logic and App Check."
pubDate: 2026-11-27T14:00:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "firebase", "gemini", "tutorials", "how-to"]
noindex: false
---

Users expect apps to remember context across questions. A single prompt is not enough for a useful assistant. Firebase AI Logic lets you add multi-turn chat with Gemini 4 Hydrogen directly from Android client code while keeping API keys off the device.

Gemini 4 Hydrogen is the fast, high-intelligence model in the Gemini 4 family. It handles everyday coding, multimodal inputs, and agentic tasks without requiring billing for basic use. Pair it with the Firebase AI Logic SDK so your app calls the model securely through a managed proxy.

![Android smartphone displaying a chat interface on a desk](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## Set Up Firebase and the SDK

Create or open a Firebase project in the console. Go to AI Services > AI Logic and follow the prompts to register your Android app. This step enables the required APIs and enforces App Check for production protection.

Add the dependencies in your app-level `build.gradle.kts`. Use the Firebase BoM so versions stay compatible:

```kotlin
dependencies {
    implementation(platform("com.google.firebase:firebase-bom:35.2.0"))
    implementation("com.google.firebase:firebase-ai")
    implementation("com.google.firebase:firebase-appcheck-debug")
}
```

For local testing, initialize the App Check debug provider so the emulator and debug builds can reach the service. Production builds use the Play Integrity provider automatically once you ship to the Play Store.

If you have not added Firebase AI Logic to an Android project before, the base setup matches the pattern in our [guide to adding Gemini 4 Hydrogen with Firebase AI Logic](/blog/add-gemini-4-hydrogen-android-firebase-ai-logic/).

## Initialize the Model and Start a Chat

Create a `GenerativeModel` that points at `gemini-4-hydrogen`. Then call `startChat()` to open a session that the SDK manages for you. You do not keep history yourself.

```kotlin
val model = Firebase.ai(backend = GenerativeBackend.googleAI())
    .generativeModel("gemini-4-hydrogen")

val chat = model.startChat()
```

You can pass an optional history list when you start the chat if the conversation continues from a previous session you stored. Each entry uses the `user` or `model` role.

Note that for Gemini 4 Hydrogen, prefilling the last model turn is not supported. The request fails with a 400 error if the history ends on a model message.

## Send Messages and Read Responses

Call `sendMessage` with the new user text. The method is a suspend function, so run it inside a coroutine. The SDK appends both the user message and the model response to the internal history.

```kotlin
scope.launch {
    val response = chat.sendMessage("Summarize the key points from our last discussion.")
    val reply = response.text ?: "No response"
    // Update your UI with reply
}
```

For a streaming UI that shows tokens as they arrive, use `sendMessageStream` instead. Collect the flow and append each chunk to the displayed text.

The SDK supports text, images (as bitmaps), and other multimodal inputs in a single turn when the model allows them. Keep the first version text-only so you can validate the conversation flow.

![Developer coding on a laptop with an Android device nearby](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## Handle Streaming Responses

Streaming improves perceived speed. Initialize the same chat, then collect the stream:

```kotlin
scope.launch {
    chat.sendMessageStream("Explain this concept in simple terms.").collect { chunk ->
        // Append chunk.text to your message list as it arrives
    }
}
```

Cancel the collection when the user leaves the screen so you do not keep an open connection. The official quickstart samples show full Compose and View implementations if you want a complete reference.

## Tips for Production Chat

- Enforce App Check before you ship. Debug tokens work only for development.
- Store conversation history yourself if you need to persist it across app restarts. The in-memory chat object resets when the process dies.
- Set generation config options such as temperature or max output tokens on the model if you need tighter control.
- Monitor token usage and latency in the Firebase console once traffic grows.
- Start with Gemini 4 Hydrogen for most chat use cases. Switch to Neon or Carbon only when the task needs deeper reasoning.

Test with real user flows. Ask follow-up questions that depend on earlier answers and confirm the model keeps context.

## Conclusion

Multi-turn chat with Gemini 4 Hydrogen fits cleanly into an Android app through Firebase AI Logic. You create a model, start a chat, and send messages. The SDK manages history and routes requests securely. Add App Check, test streaming, and you have a working assistant ready for users.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/0UoReIOwC-Q"
    title="Get Started with Firebase AI Logic on Android"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- [Build multi-turn conversations (chat) using the Gemini API](https://firebase.google.com/docs/ai-logic/chat) — Firebase
- [Get started with the Gemini API using Firebase AI Logic](https://firebase.google.com/docs/ai-logic/get-started) — Firebase
- [Supported models in Firebase AI Logic](https://firebase.google.com/docs/ai-logic/models) — Firebase
- [Get Started with Firebase AI Logic on Android (YouTube)](https://www.youtube.com/watch?v=0UoReIOwC-Q)
