---
title: "Enable Function Calling with Gemini Nano 4 in ML Kit"
description: "Step-by-step guide to add on-device function calling with Gemini Nano 4 using the ML Kit Prompt API for private agentic Android features."
pubDate: 2026-11-08T20:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "android", "tutorials", "gemini", "how-to"]
noindex: false
---

Android developers can now connect Gemini Nano 4 to local tools and app features through function calling in the ML Kit Prompt API. This runs entirely on-device, so user data stays private and responses arrive without network latency.

Function calling lets the model output structured tool requests instead of free text. Your app executes those functions locally, then optionally feeds results back for a final answer. It powers private agentic features such as controlling device settings, querying local data, or triggering in-app actions.

This guide shows how to set it up with the Prompt API (`com.google.mlkit:genai-prompt`). It covers prerequisites, tool definitions, model selection, and both single-turn and multi-turn flows. For higher-level agent loops, see our related post on [adding AppFunctions to Android apps](/blog/add-appfunctions-to-android-app/).

## Prerequisites

Your device must support the Prompt API and your Google account must be enrolled in the AICore Developer Preview. Open the AICore app, select a model, and confirm Gemini Nano 4 Fast appears. Projects also need Kotlin 2.3.0 or higher and `minSdk` 26 or higher.

Add these dependencies in your module-level `build.gradle.kts`:

```kotlin
dependencies {
    implementation("com.google.mlkit:genai-prompt:1.0.0-beta5")
    implementation("com.google.mlkit:genai-schema:1.0.0-alpha2")
}
```

Ensure `mavenCentral()` is in your project-level repositories. Function calling requires Gemini Nano 4, so you must target the preview fast model.

![Android developer workspace with laptop and phone](https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&q=80)

## Define Your Tools

Tools are defined programmatically with `FunctionDeclaration`, `FunctionSchema`, and `FunctionType` from `com.google.mlkit.genai.schema.tools`. This approach works at runtime. For compile-time declarative tools with `@AppFunction`, use the separate Agentic API.

Here is a single-turn action tool for controlling lights:

```kotlin
import com.google.mlkit.genai.schema.tools.FunctionDeclaration
import com.google.mlkit.genai.schema.tools.FunctionSchema
import com.google.mlkit.genai.schema.tools.FunctionType

val turnOnLightTool = FunctionDeclaration(
    name = "turn_on_light",
    description = "Turn on the lights in a room and set the brightness",
    parameters = FunctionSchema(
        type = FunctionType.OBJECT,
        properties = mapOf(
            "room" to FunctionSchema(
                type = FunctionType.STRING,
                description = "The room name"
            ),
            "brightness" to FunctionSchema(
                type = FunctionType.INTEGER,
                description = "Brightness level from 0 to 100"
            )
        ),
        required = listOf("room")
    )
)
```

A data-retrieval tool for multi-turn weather looks like this:

```kotlin
val getWeatherTool = FunctionDeclaration(
    name = "get_current_weather",
    description = "Get the current weather for a location",
    parameters = FunctionSchema(
        type = FunctionType.OBJECT,
        properties = mapOf(
            "location" to FunctionSchema(
                type = FunctionType.STRING,
                description = "The city and state, e.g. San Francisco, CA"
            ),
            "unit" to FunctionSchema(
                type = FunctionType.STRING,
                description = "The temperature unit, either 'celsius' or 'fahrenheit'"
            )
        ),
        required = listOf("location")
    )
)
```

## Select the Model and Attach Tools

Configure `GenerativeModel` to target Gemini Nano 4:

```kotlin
import com.google.mlkit.genai.prompt.Generation
import com.google.mlkit.genai.prompt.ModelPreference
import com.google.mlkit.genai.prompt.ModelReleaseStage
import com.google.mlkit.genai.prompt.generationConfig
import com.google.mlkit.genai.prompt.modelConfig

val config = generationConfig {
    modelConfig = modelConfig {
        releaseStage = ModelReleaseStage.PREVIEW
        preference = ModelPreference.FAST
    }
}
val generativeModel = Generation.getClient(config)
```

Attach tools when building the request:

```kotlin
import com.google.mlkit.genai.prompt.SystemInstruction
import com.google.mlkit.genai.prompt.TextPart
import com.google.mlkit.genai.prompt.generateContentRequest

val request = generateContentRequest(
    SystemInstruction("You are a helpful home automation assistant."),
    TextPart("Turn on the living room lights and set brightness to 50")
) {
    setTools(listOf(turnOnLightTool))
    temperature = 0.2f
}

val response = generativeModel.generateContent(request)
```

![Smartphone showing mobile app interface](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## Handle Tool Calls

Inspect the response for predicted calls:

```kotlin
val candidate = response.candidates.firstOrNull()
val functionCalls = candidate?.functionCalls ?: emptyList()

if (functionCalls.isNotEmpty()) {
    // Handle single-turn or multi-turn
}
```

### Single-Turn Function Calling

Use this for actions that complete immediately. Execute the function and finish:

```kotlin
for (functionCall in functionCalls) {
    val name = functionCall.name
    val args = functionCall.arguments

    when (name) {
        "turn_on_light" -> {
            val room = (args["room"] as? FunctionArgValue.StringValue)?.value
            val brightness = (args["brightness"] as? FunctionArgValue.IntValue)?.value ?: 100
            setLightState(room, brightness)
        }
        else -> Log.w(TAG, "Unhandled tool call: $name")
    }
}
```

### Multi-Turn Function Calling

For queries that need a natural-language answer based on tool results, execute the tool, package the response, append history, and call the model again:

```kotlin
val responseParts = mutableListOf<FunctionResponsePart>()

for (functionCall in functionCalls) {
    if (functionCall.name == "get_current_weather") {
        val location = (functionCall.arguments["location"] as? FunctionArgValue.StringValue)?.value ?: ""
        val unit = (functionCall.arguments["unit"] as? FunctionArgValue.StringValue)?.value ?: "celsius"
        val weatherData = fetchWeather(location, unit)

        responseParts.add(
            FunctionResponsePart(
                id = functionCall.id,
                name = functionCall.name,
                response = mapOf("result" to weatherData)
            )
        )
    }
}

// Append MODEL call and USER response to history, then generate again
```

## Watch the Official Overview

Google demonstrated these capabilities in a recent session on building agentic features with ML Kit GenAI.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/tAy7IifZXG0"
    title="Unlock agentic capabilities in your app with ML Kit GenAI"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for Production

Keep tool descriptions clear and specific so the model selects the right function. Limit the number of tools per request to reduce ambiguity. Handle unknown tool names gracefully and log them. Test both single-turn and multi-turn paths on a real device enrolled in the AICore preview, because emulator support can be incomplete.

Watch AICore quotas. Long outputs beyond roughly 4K tokens are discouraged. For fully automatic multi-step loops with AppFunctions discovery, consider the higher-level `genai-agent` library once it exits alpha.

## Conclusion

Function calling in the ML Kit Prompt API brings structured tool use to Gemini Nano 4 on-device. You define tools with `FunctionDeclaration`, target the preview fast model, attach them to requests, and handle the resulting calls. This unlocks private, low-latency agentic features without sending data to the cloud.

Start with a single action tool, verify it on a supported device, then expand to multi-turn data flows. Official docs at developers.google.com/ml-kit/genai/prompt/android/function-calling provide the full reference.

**Sources:**
- [ML Kit Function Calling docs](https://developers.google.com/ml-kit/genai/prompt/android/function-calling)
- [Android Developers Blog on Prompt API](https://developer.android.com/blog/posts/ml-kit-s-prompt-api-unlock-custom-on-device-gemini-nano-experiences)
- YouTube: Unlock agentic capabilities in your app with ML Kit GenAI
