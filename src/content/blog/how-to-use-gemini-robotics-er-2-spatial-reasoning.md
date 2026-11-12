---
title: "How to Use Gemini Robotics ER 2 for Spatial Reasoning"
description: "Step-by-step guide to Gemini Robotics ER 2 API for object pointing, video tracking, and task orchestration with code examples."
pubDate: 2026-11-12T18:00:00
heroImage: "https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini", "developer", "how-to"]
noindex: false
---

Google DeepMind’s Gemini Robotics 2.5 announcement on 10 November 2026 put physical AI back in the spotlight. While the full vision-language-action model stays limited to robotics partners, the embodied reasoning model Gemini Robotics ER 2 is available today through the Gemini API and Google AI Studio.

This guide shows how to use it for practical spatial tasks: pointing to objects, tracking them in video, and orchestrating multi-step actions. No robot hardware is required to start.

![Industrial robotic arm on a factory floor](https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?auto=format&fit=crop&w=800&q=80)

## What Gemini Robotics ER 2 Does

Gemini Robotics ER 2 is a vision-language model built on Gemini 3.5 Flash. It handles spatial reasoning, video understanding, multi-robot planning, and tool use. Official docs list two endpoints:

- `gemini-robotics-er-2-preview` for standard requests
- `gemini-robotics-er-2-streaming-preview` for Live API streaming

It outputs coordinates, plans, and function calls. You feed those into your own robot controller or simulation. DeepMind pairs it with the partner-only Gemini Robotics 2.5 VLA for actual motor control, as shown in the Mercedes-Benz Apollo 2 kitting pilot that reached 96 % success.

If you already work with other Gemini models, the same API key and client library apply. See our guide on [adding Gemini 4 Carbon to Android apps](/blog/add-gemini-4-carbon-android-firebase-ai-logic/) for related setup patterns.

## Set Up the API

1. Create a free API key in Google AI Studio.
2. Install the Python SDK: `pip install google-genai`.
3. Set the key as an environment variable or pass it to the client.

Pricing follows standard Gemini rates. Check the current model page for exact input and output token costs before production use.

## Point to Objects in an Image

The simplest useful call returns normalized coordinates for items in a scene.

```python
from google import genai
from google.genai import types

client = genai.Client()
uploaded = client.files.upload(file="scene.png")

prompt = """
Point to no more than 10 items in the image.
Return JSON: [{"point": [y, x], "label": "name"}] where y/x are 0-1000.
"""

response = client.models.generate_content(
    model="gemini-robotics-er-2-preview",
    contents=[
        types.Part.from_uri(file_uri=uploaded.uri, mime_type=uploaded.mime_type),
        prompt
    ],
    config=types.GenerateContentConfig(
        thinking_config=types.ThinkingConfig(thinking_level="high")
    )
)
print(response.text)
```

The JSON can go straight to a motion planner or overlay on your camera feed. Higher thinking levels improve accuracy on cluttered scenes at the cost of latency.

![Robotic arms assembling car chassis](https://images.unsplash.com/photo-1777383975764-bec6f5cabf00?auto=format&fit=crop&w=800&q=80)

## Track Objects Across Video

Upload a short video and ask for frame-by-frame positions. The model also supports progress classification and moment finding.

```python
uploaded_video = client.files.upload(file="task.mp4")

response = client.models.generate_content(
    model="gemini-robotics-er-2-preview",
    contents=[
        types.Part.from_uri(file_uri=uploaded_video.uri, mime_type="video/mp4"),
        "Track the blue cup. List normalized [y, x] for each second."
    ]
)
```

Use this for quality checks on recorded demos or to build simple monitoring dashboards.

## Orchestrate a Task with Function Calling

Declare robot actions as tools. The model sequences them based on the image and instruction.

```python
move_tool = {
    "name": "move",
    "description": "Move end effector to x, y coordinates",
    "parameters": {
        "type": "OBJECT",
        "properties": {
            "x": {"type": "NUMBER"},
            "y": {"type": "NUMBER"},
            "high": {"type": "BOOLEAN"}
        },
        "required": ["x", "y"]
    }
}

# Pass tools= in the request and handle the returned function calls
# in your robot or simulator loop.
```

The official robotics cookbook contains full pick-and-place examples that combine these calls. Start there, then adapt the function schemas to your hardware or MuJoCo simulation.

## Safety and Limits

Gemini Robotics 2.5 includes inference-time reasoning guidance that improved safe completion rates around obstacles and people in DeepMind’s tests. The open ASIMOV-Jailbreak benchmark on Hugging Face lets you evaluate whether a model refuses unsafe disguised requests. Gemini 4 Argon scored 99.5 % resistance in the announcement; ER 2 scored lower.

Always keep a human in the loop or hard safety limits when connecting outputs to physical actuators. Preview models can change or be rate-limited.

## Tips for Better Results

- Provide clear camera angles and good lighting.
- Use “thinking_level”: “high” for complex scenes.
- Request JSON-only output with a system instruction when you need machine-readable coordinates.
- Test in simulation before hardware.
- Monitor token usage; video inputs consume more.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/9MNLEAzA59o"
    title="Intelligent whole-body control with Gemini Robotics 2"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Gemini Robotics ER 2 gives developers a ready API for spatial understanding and high-level task planning today. Pair it with your own low-level controllers or wait for broader VLA access. The Mercedes-Benz pilot shows the direction; the public ER endpoint lets you experiment now.

Sources: Google DeepMind Gemini Robotics 2.5 announcement, Google AI for Developers robotics documentation, official model pages.
