---
title: "A2UI Express Guide: Faster Generative UI for Agents"
description: "Step-by-step how to use A2UI Express for token-efficient generative UI. Reduce latency up to 3x with Python and TypeScript SDKs."
pubDate: 2026-11-03T14:00:00
heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "developer", "tutorials", "how-to", "ai"]
noindex: false
---

Agents that generate full user interfaces often make users wait. Direct JSON trees with nested braces and schema constraints slow models down and raise error rates. Google addressed this on October 27, 2026, with swappable inference formats for A2UI.

A2UI Express is the new default. It is a compact, Python-like DSL. Models write one component assignment per line. Deterministic code in the Agent SDKs compiles it into standard A2UI JSON messages. Existing catalogs and renderers stay unchanged. Google reports up to 3x lower latency and up to 3x fewer tokens versus direct JSON on the same tasks.

This guide shows how to install the SDKs, switch to Express, write a sample UI, and combine it with controlled generation for even faster results on known layouts.

## Why Express exists

A2UI lets an agent describe UI intent as data. The client advertises a catalog of trusted components. The agent sends messages that compose those components. The client renders them natively. No arbitrary code ships to the device.

The original path asked models to emit the full JSON transport format. Complex schemas made this slow and brittle. Express separates the model-facing syntax from the wire format. The model produces a short, readable statement list. The SDK validates and expands it.

Express works with thinking turned off, which further cuts latency. It remains fully expressive within your catalog. For screens with fixed shapes, decision models can choose layouts even faster.


![Abstract digital interface with glowing code elements](https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80)


## Install the Agent SDKs

Express is available in three official SDKs as of the October 2026 release.

Python:

```bash
pip install a2ui-agent-sdk
```

TypeScript:

```bash
npm install @a2ui/agent
```

Dart:

```bash
dart pub add a2ui_agent
```

The Python package is a2ui-agent-sdk 0.9.0 on PyPI. TypeScript uses @a2ui/agent. Dart is a2ui_agent 0.0.1-wip004 on pub.dev.

You also need a component catalog defined in JSON schema. The SDK generates both the system prompt instructions and the compiler from that schema. Unknown components or properties are rejected before they reach the renderer.

## Generate UI with Express

Create a generator and pass the Express format factory. In TypeScript this is the third argument. In Python the pattern is similar.

Example Express syntax for a simple notification card (from the official gallery):

```
root = Card(col)
col = Column([icon, title, text, ok])
icon = Icon("notifications")
title = Text($/title)
text = Text($/body)
ok = Button(ok_text, _, Event("ok"))
```

Each line assigns a component to a variable. The variable name becomes the component ID. Arguments are positional and map to the order declared in your catalog schema. Underscore skips a property. `$/title` binds to the data model. `Event("ok")` declares a server action.

The SDK compiles this into the standard A2UI createSurface and updateComponents messages. Your existing renderer (Lit, Flutter, Jetpack Compose, Angular, or React) draws the result without changes.

Run the model with thinking disabled for the lowest latency. Google’s eval on gemini-3.5-flash showed Express matching or beating direct JSON even without reasoning steps.

If you already have an Android client, pair this agent-side change with the Jetpack Compose renderer. See the existing guide on [A2UI for Jetpack Compose](/blog/a2ui-jetpack-compose-agent-ui-guide/).


![Neural network visualization with glowing connections](https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80)


## Controlled generation with decision models

Some screens have a known shape: settings pages, confirmation dialogs, or checkout summaries. For these, a full generative model is unnecessary. A decision model can select among layouts you define in advance.

Jev from TypeSafe is one such System One model. It answers structured questions in roughly 100–300 ms. Apparite (jev2ui) demonstrates the pattern:

1. A grammar written in Markdown asks layout questions (blockquote + bullets).
2. One Jev request answers all questions for the screen.
3. Code builds the A2UI component tree from the decisions and emits messages with placeholders.
4. A small model streams only the text into the data model.

In one reported run of 11 prompts, the component tree appeared in 92–298 ms and the full screen completed in 0.8–1.7 s. Token use for text stayed between 101 and 341 per screen. All outputs validated.

Controlled generation is faster but limited to the layouts described in the grammar. Use Express when the agent must invent novel arrangements within the catalog. Use controlled generation when the shape is known.

## Tips for production

Keep the catalog small and versioned. Advertise only the components the current client supports. The SDK rejects anything outside the schema.

Use macros in the Python SDK when the screen displays data your systems already hold. The model writes `OrderStatus("ord_42")`. Your macro fetches the real values and fills the tree. No hallucinated numbers reach the user.

Test with thinking off first. Measure end-to-end latency from user request to first painted component. Compare against your previous direct-JSON baseline.

Validate on the agent side before sending messages. The client still checks schemas, but early filtering reduces error states.

For Android, combine Express agents with the existing Compose renderer and AppFunctions. Agents can call tools for actions and return Express-generated UI for the visual result.

## Conclusion

A2UI Express removes the biggest latency bottleneck in generative UI. Models write a short, readable DSL. Deterministic compilers produce validated A2UI messages. Catalogs and renderers remain the same.

Install the SDK for your language, pass the Express format factory, and run with thinking disabled. For screens with fixed layouts, explore decision models like Jev. Both approaches keep the agent from inventing components your app does not own.

The same protocol continues to work across web, mobile, and desktop. Start with a simple card or form, measure the token and latency improvement, then expand the catalog.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/PS8mZFhodfE"
    title="A2UI: The Protocol That Makes AI Design Functional UIs"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- Fast, reliable A2UI, with swappable inference formats, Google Developers Blog, October 27, 2026: https://developers.googleblog.com/fast-reliable-a2ui/
- A2UI Express specification: https://a2ui.org/specification/proposals/express/
- a2ui-agent-sdk on PyPI and @a2ui/agent on npm
- Jev documentation: https://docs.typesafe.ai/
- Apparite (jev2ui): https://github.com/dglazkov/jev2ui
