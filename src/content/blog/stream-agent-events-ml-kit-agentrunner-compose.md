---
title: "Stream ML Kit Agent Events in Jetpack Compose"
description: "Collect AgentEvent streams from ML Kit AgentRunner and render live tool status plus partial text responses in a Jetpack Compose chat UI."
pubDate: 2026-10-31T14:00:00
heroImage: "https://images.unsplash.com/photo-1757165792338-b4e8a88ae1c7?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "ai-tools", "gemini", "developer"]
noindex: false
---

On-device agents need responsive UIs. The ML Kit Agentic API returns a Flow of AgentEvent objects so your app can show progress while Gemini Nano 4 reasons and calls tools. Waiting for the full loop to finish leaves users staring at a spinner.

This guide shows how to collect those events in a ViewModel and render them in Jetpack Compose. It builds on the basic AgentRunner setup covered in our earlier post on [building on-device agents with Gemini Nano 4](/blog/build-on-device-agents-gemini-nano-4-ml-kit/).

![Hand holding smartphone displaying lines of code](https://images.unsplash.com/photo-1757165792338-b4e8a88ae1c7?auto=format&fit=crop&w=800&q=80)

## Understand the AgentEvent types

AgentSession.runAsync and AgentRunner.runSingleTurnAsync return Flow<AgentEvent>. Three event types matter for most chat UIs:

- TextMessage carries incremental text when isPartial is true and the final response when isPartial is false.
- FunctionCall signals that the model selected a tool. It includes the function name and typed arguments.
- FunctionResponse arrives after your tool finishes. It contains the name and the result payload.

You can ignore other event types or log them for debugging. The flow completes when the agent reaches its termination condition or hits the maxTurns limit.

## Set up the ViewModel

Create a simple data class for UI state and a ViewModel that holds the AgentSession. The ViewModel launches a coroutine to collect the flow and updates a StateFlow that Compose observes.

```kotlin
data class AgentUiState(
    val messages: List<String> = emptyList(),
    val currentResponse: String = "",
    val activeToolStatus: String? = null,
    val isLoading: Boolean = false,
    val errorMessage: String? = null
)

class ChatViewModel(
    private val runner: AgentRunner,
    private val sessionId: String = "default_chat_session"
) : ViewModel() {

    private val session: AgentSession = runner.getOrCreateSession(sessionId)
    private val _uiState = MutableStateFlow(AgentUiState())
    val uiState: StateFlow<AgentUiState> = _uiState.asStateFlow()

    fun sendMessage(userText: String) {
        _uiState.update {
            it.copy(
                messages = it.messages + userText,
                currentResponse = "",
                activeToolStatus = null,
                isLoading = true,
                errorMessage = null
            )
        }

        viewModelScope.launch {
            val content = Content.builder().text(userText).build()
            session.runAsync(content)
                .catch { e ->
                    val message = when {
                        e is GenAiException && e.errorCode == GenAiException.ErrorCode.MAX_TURNS_EXCEEDED ->
                            "Agent exceeded the maximum reasoning turns allowed."
                        e is GenAiException && e.errorCode == GenAiException.ErrorCode.NOT_AVAILABLE ->
                            "On-device AI is currently unavailable."
                        e is GenAiException && e.errorCode == GenAiException.ErrorCode.BUSY ->
                            "On-device AI is busy. Please try again."
                        else -> e.localizedMessage ?: "Agent error"
                    }
                    _uiState.update {
                        it.copy(
                            isLoading = false,
                            activeToolStatus = null,
                            errorMessage = message
                        )
                    }
                }
                .collect { event ->
                    when (event) {
                        is AgentEvent.TextMessage -> {
                            _uiState.update {
                                it.copy(
                                    currentResponse = if (event.isPartial) {
                                        it.currentResponse + event.text
                                    } else {
                                        event.text.ifEmpty { it.currentResponse }
                                    },
                                    activeToolStatus = null
                                )
                            }
                        }
                        is AgentEvent.FunctionCall -> {
                            _uiState.update {
                                it.copy(activeToolStatus = "Executing ${event.name}...")
                            }
                        }
                        is AgentEvent.FunctionResponse -> {
                            _uiState.update {
                                it.copy(activeToolStatus = "Received data from ${event.name}")
                            }
                        }
                        else -> {}
                    }
                }

            _uiState.update {
                it.copy(
                    messages = it.messages + it.currentResponse,
                    currentResponse = "",
                    activeToolStatus = null,
                    isLoading = false
                )
            }
        }
    }

    override fun onCleared() {
        super.onCleared()
        session.close()
    }
}
```

Handle GenAiException codes for max turns, unavailable models, and busy state. Close the session in onCleared to release memory.

![Person coding on laptop overlooking city lights at night](https://images.unsplash.com/photo-1764452008254-eed469a4fad3?auto=format&fit=crop&w=800&q=80)

## Render the stream in Compose

A LazyColumn displays the completed messages. While the agent runs, show the activeToolStatus line and a card for the growing currentResponse. Disable the send button during loading.

```kotlin
@Composable
fun AgentChatScreen(
    viewModel: ChatViewModel,
    modifier: Modifier = Modifier
) {
    val state by viewModel.uiState.collectAsState()
    var inputText by remember { mutableStateOf("") }

    Column(modifier = modifier.fillMaxSize().padding(16.dp)) {
        LazyColumn(
            modifier = Modifier.weight(1f).fillMaxWidth(),
            verticalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            items(state.messages) { message ->
                Card(modifier = Modifier.fillMaxWidth()) {
                    Text(text = message, modifier = Modifier.padding(12.dp))
                }
            }

            if (state.activeToolStatus != null) {
                item {
                    Text(
                        text = state.activeToolStatus ?: "",
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.secondary
                    )
                }
            }

            if (state.currentResponse.isNotEmpty()) {
                item {
                    Card(
                        colors = CardDefaults.cardColors(
                            containerColor = MaterialTheme.colorScheme.surfaceVariant
                        ),
                        modifier = Modifier.fillMaxWidth()
                    ) {
                        Text(
                            text = state.currentResponse,
                            modifier = Modifier.padding(12.dp)
                        )
                    }
                }
            }
        }

        Row(
            modifier = Modifier.fillMaxWidth().padding(top = 8.dp),
            horizontalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            TextField(
                value = inputText,
                onValueChange = { inputText = it },
                modifier = Modifier.weight(1f),
                placeholder = { Text("Ask about an order...") }
            )
            Button(
                onClick = {
                    if (inputText.isNotBlank()) {
                        viewModel.sendMessage(inputText)
                        inputText = ""
                    }
                },
                enabled = !state.isLoading
            ) {
                Text("Send")
            }
        }
    }
}
```

Pass the ViewModel from your activity or navigation graph. The collectAsState call keeps the UI in sync with each event.

## Simplify with textTokens

If your UI only needs the text and does not display tool progress, call the textTokens extension on the flow. It filters to TextMessage events and emits the partial strings.

```kotlin
session.runAsync(content)
    .textTokens()
    .collect { token ->
        appendTokenToChatBubble(token)
    }
```

This reduces boilerplate when tool status is not required.

![Laptop screen showing lines of code in an IDE](https://images.unsplash.com/photo-1763568258330-039d2f3dfc76?auto=format&fit=crop&w=800&q=80)

## Tips for production use

Keep tool return values small. Large JSON payloads consume the limited on-device context window and slow subsequent turns.

Show a distinct status for FunctionCall so users know the app is acting, not stuck. Clear the status on the next TextMessage.

Test configuration changes. Recreate the ViewModel carefully or persist the session ID so the conversation survives rotation.

Handle the MAX_TURNS_EXCEEDED case by offering a retry or summarizing the partial result. The default limit protects battery life.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/p-SZ1rWvErU"
    title="On-device intelligence: Optimized performance and quality using Android ML Kit APIs"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Streaming AgentEvent objects turns the ML Kit Agentic API from a black-box call into a responsive chat experience. Collect the flow in a ViewModel, map events to UI state, and render partial text plus tool status in Compose. Pair this with clear tool descriptions and a modest maxTurns value to keep the on-device loop reliable.

Official details live in the [ML Kit streaming events guide](https://developers.google.com/ml-kit/genai/agent/android/streaming-events) and the main [agentic workflows page](https://developers.google.com/ml-kit/genai/agent/android).

## Sources

- ML Kit documentation: Stream events and UI integration
- ML Kit documentation: Build agentic workflows with Gemini Nano
- Android Dev Summit 2026 announcements on on-device intelligence
