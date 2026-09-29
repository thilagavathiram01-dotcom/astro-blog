---
title: "How to Build In-App Agentic Workflows on Android"
description: "Use ADK, AG-UI, and A2UI to run cloud booking agents and render live cards in Jetpack Compose on Android."
pubDate: 2026-09-29T14:00:00
heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "ai-tools", "tutorials", "gemini"]
noindex: false
---

Long booking jobs die when a phone sleeps. Android’s latest developer series shows a cleaner split: run the agent in the cloud, keep the phone as a live control surface.

On 28 September 2026, Android Developer Relations published **Build intelligent Android apps: In-app agentic workflows**. The post is part five of the Jetpacker series. It walks through a Booking Assistant that books flights, hotels, museums, and restaurants while the user watches progress in Compose.

This guide restates the official pattern. You host agents with the Agent Development Kit (ADK), stream events with AG-UI, and let A2UI describe cards the app already knows how to draw.

## Why the work leaves the phone

A holiday itinerary is not one inference call. It is a chain: search flights, pick a hotel, hold tickets, wait for the user, then confirm.

If that loop lives only on the device, three things break. The process dies when the app is killed. API keys pile up in the client. Every new card type needs a Play Store update.

Google lists three reasons to host the loop instead:

- **Background execution.** Agents keep running if the app is backgrounded or the radio drops.
- **Multi-agent orchestration.** A coordinator can hand work to specialist subagents and track dependencies.
- **Client-agnostic UI.** The backend describes structure. You can change layout without shipping a new APK for every copy tweak.

The phone still matters. It sends the current itinerary, shows surfaces, and asks for confirmation. It does not own the session clock.



![Developer laptop with code editor open during an Android project](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)



## What you need before you write code

Work from the official stack in the 28 September post:

- A Python ADK server. Google notes that A2UI support in ADK is currently on the Python path used in Jetpacker.
- The [Jetpacker sample](https://android-developers.googleblog.com/2026/07/build-intelligent-android-apps-introduction-jetpack.html) as a reference app.
- AG-UI on both sides so events have names, not ad-hoc JSON.
- A2UI 0.9 catalogs that match on server and client.
- Jetpack Compose A2UI renderer artifacts at `1.0.0-alpha01` as listed in the post.

This pattern sits next to on-device tools. If you also expose local actions to the system assistant, keep that work in [How to Prepare Your Android App for AppFunctions Agents](/blog/android-appfunctions-agents/). AppFunctions is for typed local calls. This article is for long cloud sessions.

## Step 1: Define one ADK agent with real tools

Do not start with five agents. Start with flights.

ADK owns context, tool routing, and session IDs. You own the functions that talk to your booking APIs.

```python
from google.adk import Agent
from google.adk.runners import InMemoryRunner
from google.adk.tools import FunctionTool

def search_flights(destination: str, date: str) -> list[str]:
    return ["10:00 AM", "2:00 PM"]

def reserve_flight(flight_time: str) -> str:
    return "Reserved flight at " + flight_time

flight_agent = Agent(
    name="Flight Booker",
    model="gemini-3.1-flash-lite",
    instruction="Help the user search for flights and book a reservation.",
    tools=[
        FunctionTool(search_flights),
        FunctionTool(reserve_flight, require_confirmation=True),
    ],
)
```

Two details from the official sample matter in production.

First, `require_confirmation=True` on `reserve_flight`. Money moves only after the user agrees.

Second, `InMemoryRunner` is for local debug. Replace it with a durable session store before you put real bookings on the wire.

The Jetpacker diagram is simple: the app sends itinerary state, a coordinator picks subagents, each subagent writes into a shared session queue, and that queue streams back to Android.

## Step 2: Stream the session with AG-UI

AG-UI is the transport. The server emits Server-Sent Events such as `TEXT_MESSAGE_CONTENT`. The Kotlin client maps those frames to typed events.

```kotlin
val config = HttpAgentConfig(
    agentId = "booking-assistant",
    threadId = threadId,
    url = "https://<your-backend-url>"
)
val agent = HttpAgent(config, httpClient)

val input = RunAgentInput(
    threadId = threadId,
    runId = runId,
    messages = listOf(UserMessage("Book a flight to Paris"))
)

agent.runAgentObservable(input).collect { event ->
    when (event) {
        is TextMessageStartEvent -> { }
        is TextMessageContentEvent -> { }
        is TextMessageEndEvent -> { }
    }
}
```

Keep `threadId` stable for one trip. A new thread is a new booking, not a retry of the last seat pick.

A first UI can be a chat transcript. That is enough to prove the pipe. Do not stop there. Chat is a poor seat map.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/zgrOwow_uTQ"
    title="Introducing Agent Development Kit"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step 3: Let the agent describe UI with A2UI

A2UI is how the agent asks for a picker without shipping a new screen.

The client publishes a catalog of components it can draw. The server sends a JSON tree that names those components and their properties. Jetpacker uses version `v0.9` payloads such as:

```json
{
  "version": "v0.9",
  "updateComponents": {
    "surfaceId": "Flight Reservation",
    "components": [
      {
        "id": "flight_option_picker",
        "component": "InteractiveOptionPicker",
        "properties": {
          "prompt": "Select a flight time:",
          "options": ["10:00 AM", "2:00 PM"],
          "selectedIdx": null,
          "confirmBtnText": "Confirm Flight"
        }
      }
    ]
  }
}
```

The visual look stays in Compose. The agent only chooses *which* catalog item to show and which values to fill.



![Smartphone on a wooden desk next to travel documents and a notebook](https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80)



## Step 4: Ground the model in your catalog

Do not paste component docs into a prompt by hand. Jetpacker uses `A2uiSchemaManager` so the schema, examples, and allowed names land in the system instruction.

```python
schema_manager = A2uiSchemaManager(
    version=VERSION_0_9,
    catalogs=[
        BasicCatalog.get_config(version=VERSION_0_9),
        CatalogConfig.from_path(
            name="https://example.com/catalogs/booking_assistant/v1/catalog.json",
            catalog_path="booking_catalog.json",
        ),
    ],
)

A2UI_SYSTEM_INSTRUCTION = schema_manager.generate_system_prompt(
    role_description="You are a helpful travel booking assistant.",
    ui_description="Use InteractiveOptionPicker for choices, SeatSelectionPicker for seat selection...",
    include_schema=True,
    include_examples=True,
    allowed_components=[
        "InteractiveOptionPicker",
        "SeatSelectionPicker",
        "BookingStatus",
    ],
)
```

Use the same catalog ID string on the phone. If you add a property, bump the version on both sides. A mismatch is a parse error, not a soft fallback.

## Step 5: Render cards in Jetpack Compose

Add the artifacts from the official post:

```kotlin
dependencies {
    implementation("androidx.a2ui:a2ui-model:1.0.0-alpha01")
    implementation("androidx.a2ui.compose:compose-runtime:1.0.0-alpha01")
    implementation("androidx.a2ui.compose:compose-ui:1.0.0-alpha01")
    implementation("androidx.compose.material3:material3-a2ui:1.0.0-alpha01")
}
```

Register only the components your catalog promises:

```kotlin
fun bookingAssistantCatalog(): A2uiCatalog {
    return A2uiCatalog(
        catalogId = "https://example.com/catalogs/booking_assistant/v1/catalog.json",
        components = listOf(
            InteractiveOptionPickerComponent(),
            SeatSelectionPickerComponent(),
            BookingStatusComponent(),
        ),
    )
}
```

If you only need text, cards, buttons, rows, columns, checkboxes, and date-time pickers, `materialA2uiBasicCatalogV1(...)` already covers those. Custom pickers are for flows the Material catalog cannot express.

In the ViewModel, feed A2UI messages through `A2uiMessageProcessor` and keep a map of active surfaces. One surface per booking stage is easier to reason about than a single growing tree.

## Tips that keep the first build honest

**Confirm money tools.** Mirror `require_confirmation=True` in the UI. A picker that cannot fail closed is a charge bug.

**Keep catalogs small.** Three components beat twenty half-documented ones. The model will invent properties if you flood the schema.

**Treat alpha versions as alpha.** The Compose A2UI libraries in the post are `1.0.0-alpha01`. Pin them and re-read release notes before you ship.

**Test the kill case.** Background the app mid-booking. Confirm the cloud session still advances and the next open restores the same `threadId`.

**Do not mix AppFunctions into this path.** Local functions are for short on-device actions. Cloud ADK sessions are for work that outlives a process.

## Conclusion

In-app agentic workflows on Android are a three-layer contract. ADK runs the agents. AG-UI carries the session. A2UI names the cards Compose already implements.

Start with one confirmed tool, one thread ID, and one catalog component. When that loop survives a process death, add the hotel agent. The Jetpacker Booking Assistant is the reference, not a finished product. Copy the contracts, then replace the mock flight list with your own APIs.

## Sources

- [Build intelligent Android apps: In-app agentic workflows](https://android-developers.googleblog.com/2026/09/android-agentic-workflows.html) — Android Developers Blog, 28 September 2026
- [Build intelligent Android apps: Introduction to Jetpacker](https://android-developers.googleblog.com/2026/07/build-intelligent-android-apps-introduction-jetpack.html) — Android Developers Blog
- [Agent Development Kit](https://adk.dev/) — ADK docs
- [AG-UI protocol](https://ag-ui.com/) — AG-UI
- [A2UI](https://a2ui.org/) — A2UI
- [Introducing Agent Development Kit](https://www.youtube.com/watch?v=zgrOwow_uTQ) — Google for Developers
