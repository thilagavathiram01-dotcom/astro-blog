---
title: "Gemini Computer Use Is Now GA: Build Production Agents"
description: "Gemini Computer Use tool is generally available. Learn supported models, the screenshot-action loop with Playwright, safety settings, and how to start building agents."
pubDate: 2026-11-01T10:00:00
heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "developer"]
noindex: false
---

Google released the Computer Use tool to general availability on 30 October 2026. It is now supported across both the Interactions API and the GenerateContent API. The model looks at a screenshot of a browser, Android device, or desktop, then returns a structured UI action for your code to execute.

This is the same loop that has been in preview since October 2025 and the June 2026 public preview. GA removes the preview limitation. You still own the execution environment, the safety handling, and the sandbox. For a comparison with OpenAI's hosted browser approach, see [how to run browser tasks with Agents API computer use](/blog/agents-api-computer-use-browser-tasks/).

## What changed and which models to use

The 30 October changelog entry is short: Computer Use is GA on both API surfaces. No new model IDs, no separate pricing, and no change to the action schema. Billing stays on the underlying model's token rates. Computer Use is paid-tier only.

Google lists four models that support the tool:

| Model | Official positioning |
| --- | --- |
| gemini-4-argon | Most capable; complex reasoning and agentic UI workflows |
| gemini-3.8-flash | Recommended for Computer Use; high-accuracy UI interaction and reliable tool calling |
| gemini-3.5-flash-lite | Low-latency, cost-effective option |
| gemini-3-flash-preview | Preview model |

Start with `gemini-3.8-flash`. Move complex multi-step tasks to `gemini-4-argon`. Drop to `gemini-3.5-flash-lite` when latency or cost matters more than perfect accuracy. The Python SDK needs `google-genai` 2.7.0 or higher.

![Laptop screen showing code in a dark workspace](https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&q=80)

## The agent loop

You implement a continuous loop. Your code sends a prompt plus a screenshot. The model returns a function call (for example `click` with normalized coordinates and an `intent` string that explains the step). Your code denormalizes the coordinates, executes the action, takes a new screenshot, and sends the result back.

Coordinates arrive on a 0-1000 grid. Scale them to your actual viewport before you click or type. The docs include a helper:

```python
def denormalize_x(x: int, screen_width: int) -> int:
    return int(x / 1000 * screen_width)
```

Responses can also include a `safety_decision`: `allowed`, `require_confirmation`, or `blocked`. Your code must check it. If the decision is `require_confirmation`, pause and ask the user. If it is `blocked`, stop.

Supported environments are browser (`ENVIRONMENT_BROWSER`), mobile (`ENVIRONMENT_MOBILE`), and desktop (`ENVIRONMENT_DESKTOP`). Browser is the most common starting point and the one shown in the official examples.

## Minimal setup with Playwright

Install the packages and launch a browser:

```bash
pip install google-genai playwright
playwright install chromium
```

```python
from playwright.sync_api import sync_playwright

SCREEN_WIDTH = 1440
SCREEN_HEIGHT = 900

playwright = sync_playwright().start()
browser = playwright.chromium.launch(headless=False)
context = browser.new_context(
    viewport={"width": SCREEN_WIDTH, "height": SCREEN_HEIGHT}
)
page = context.new_page()
page.goto("https://www.google.com")
```

In production, run this inside a sandboxed VM or container. The official reference implementation on GitHub includes a Docker-based sandbox you can start from. Do not point the agent at your main machine or accounts that hold real money or personal data until you have tested the safety path.

Send a request with the Interactions API (the recommended surface):

```python
from google import genai

client = genai.Client()

interaction = client.interactions.create(
    model="gemini-3.8-flash",
    input="Search for 'Gemini API' on Google.",
    tools=[{"type": "computer_use", "environment": "browser"}]
)
```

You can also enable prompt-injection detection on screenshots:

```python
tools=[
    {
        "type": "computer_use",
        "environment": "browser",
        "enable_prompt_injection_detection": True
    }
]
```

The same tool works on the GenerateContent API if your existing code still uses that surface.

![Developer focused on code at a desk](https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80)

## Safety and production tips

- Always handle `safety_decision`. Built-in policy categories cover payments, sending messages, account creation, accepting terms, and data modification. Some policies can be overridden; confirmation handling cannot be skipped.
- Enable prompt-injection detection when the agent will visit untrusted sites. It is opt-in.
- Keep the first tasks read-only. Ask the agent to report a page title and URL. Do not ask it to submit forms or log in on day one.
- Log every action and intent. The `intent` field on Gemini 4 and Gemini 3.x models makes debugging easier.
- Budget for image tokens. Each screenshot costs tokens. Longer loops cost more than a simple chat call.
- Pin the model string. Preview models can still shift.

Google's docs list concrete use cases: repetitive data entry or form filling, automated testing of user flows, and research that gathers product information across sites. Start with one of those and a narrow prompt.

## Watch a short briefing

This independent video walks through the GA announcement, the loop, the three environments, and the safety layer using Google's own documentation.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/cON4RnddXCY"
    title="Gemini Computer Use Is Now Generally Available: How Google's Screen-Clicking AI Works"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Computer Use is no longer a preview feature. Use `gemini-3.8-flash` as the default, implement the screenshot-to-action loop with Playwright (or an equivalent for mobile or desktop), check every `safety_decision`, and run the agent in a sandbox. The official Computer Use docs and the reference implementation on GitHub are the sources of truth for the current action schema and safety behavior.

## Sources

- [Computer use](https://ai.google.dev/gemini-api/docs/computer-use) — Gemini API documentation
- [Gemini API release notes, 30 October 2026](https://ai.google.dev/gemini-api/docs/changelog) — Computer Use GA entry
- [computer-use-preview reference implementation](https://github.com/google/computer-use-preview/) — Google
