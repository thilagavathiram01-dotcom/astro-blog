---
title: "ChatGPT Chrome Tabs Control: Setup and Use Guide"
description: "Learn how to set up the ChatGPT Chrome extension to read open tabs in Chat and control them in Work mode for forms, downloads, and more."
pubDate: 2026-10-17T09:00:00
heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["chatgpt", "tutorials", "how-to", "productivity", "ai-tools"]
noindex: false
---

OpenAI updated the official ChatGPT browser extension on October 15, 2026. The change lets ChatGPT read information across your open Chrome tabs in regular Chat. In Work mode it can act on those tabs to fill forms, send messages, download files, or organize them. The update works with Chrome, Edge, Brave, Opera, and Vivaldi. Side chat is available in all of them except Opera.<grok type="render_inline_citation" citation_id="40" />

This guide shows the exact setup steps from OpenAI’s documentation, how Chat and Work differ, and practical ways to use the feature. You need the ChatGPT desktop app for full control. The extension is available to all ChatGPT plans.<grok type="render_inline_citation" citation_id="30" />

## What the update actually does

In Chat mode, ChatGPT can look across the tabs you already have open. You can ask it to compare product pages, summarize several articles, or pull details from multiple sites without copying text yourself. OpenAI’s examples include comparing three open sofa listings by size, material, delivery time, and return policy.<grok type="render_inline_citation" citation_id="33" />

In Work mode, ChatGPT gains the ability to control the tabs. It can fill registration forms (and stop before submitting if you ask), send messages on sites where you are signed in, download files, or group a pile of open tabs. The tool runs in the background and does not take over your active browsing session. It asks for permission before accessing new sites or managing downloads.<grok type="render_inline_citation" citation_id="35" />

The sidebar also received an update. You now get the full ChatGPT experience, including conversation history for both Chat and Work, right beside the page you are viewing.<grok type="render_inline_citation" citation_id="33" />

![Person working on a laptop with multiple browser windows open](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Requirements and setup steps

You need the ChatGPT desktop app (updated) and the official ChatGPT extension from the Chrome Web Store (or the equivalent store for your browser). The extension is published by OpenAI. Confirm the publisher before installing.<grok type="render_inline_citation" citation_id="43" />

Follow these steps from OpenAI’s browser extension documentation:<grok type="render_inline_citation" citation_id="40" />

1. Install or update the ChatGPT desktop app.
2. Open the desktop app and go to Settings > Computer Use.
3. Select your browser. Expand “More browsers” if yours is not listed.
4. Select Install beside the browser. This opens the extension store page. Install the ChatGPT extension and approve the permission prompts.
5. Return to Computer Use and confirm the browser now shows Manage.
6. Start a new ChatGPT Work or Codex chat. Type @ and select Chrome (or your browser) from the menu. Use the browser profile where you installed the extension.

The toggle in Computer Use controls whether the browser appears in the @-mention menu. Use Manage to adjust website permissions. By default ChatGPT asks before acting on a new website.<grok type="render_inline_citation" citation_id="40" />

On macOS you can also open side chat with Cmd + Shift + . in supported browsers. Right-click a page and choose “Ask ChatGPT” to open the side panel with page context.<grok type="render_inline_citation" citation_id="40" />

## Chat versus Work with tabs

| Mode | What it does with tabs | How to start |
|------|------------------------|--------------|
| Chat | Reads across open tabs and gathers information for answers | Ask in the side panel or mention a tab |
| Work | Controls tabs: sends messages, fills forms, downloads files, groups tabs | Enable the browser in Settings > Computer Use, then @-mention it in a Work or Codex chat |

Chat is useful for research and comparison. Work is for multi-step actions that would normally require you to click and type across pages. You can still review drafts before anything is submitted or saved.<grok type="render_inline_citation" citation_id="31" />

![Close-up of a computer screen showing code and browser interfaces](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Practical examples

OpenAI listed these sample requests:<grok type="render_inline_citation" citation_id="33" />

- Compare the three couches I have open by dimensions, material, delivery time, and return policy.
- Use the details in this event brief to fill out the registration form, and stop before submitting.
- Put the vendors in these tabs into my comparison sheet, with pricing, key features, and source links.
- Look at all the tabs I have open and compare the contractor services. Then draft an email to the one that fits my home renovation.
- Fill out the form I have open in @chrome ahead of seeing my new dentist. Also, can you add the appointment to my work and personal calendar.

Other everyday uses include summarizing several research tabs into one note, extracting pricing from multiple vendor pages into a table, or grouping related tabs by project. For sites that already have dedicated plugins, prefer the plugin. Use the browser extension when you need the context of pages where you are already signed in.<grok type="render_inline_citation" citation_id="41" />

If you work with agents that already handle browser tasks through the Agents API, this extension gives a similar capability inside your regular browser profile. See our earlier guide on [Agents API computer use for browser tasks](/blog/agents-api-computer-use-browser-tasks/) for the API approach.

## Tips for reliable results

Give clear, specific instructions. Tell ChatGPT exactly which tabs to use and what “done” looks like. Ask it to stop before submitting forms or sending messages so you can review.

Start with low-stakes tasks while you learn the permission flow. ChatGPT asks before new sites and before managing downloads. Keep the desktop app updated; older versions may not show the latest Computer Use options.<grok type="render_inline_citation" citation_id="40" />

For YouTube videos, open the video in a supported browser and ask questions in side chat. When captions are available, ChatGPT can use the transcript.<grok type="render_inline_citation" citation_id="40" />

If the browser does not appear in the @ menu, confirm it shows Manage in Computer Use and that you are using the correct browser profile.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/8uiRrhVQI08"
    title="ChatGPT Computer Use Tutorial: Control Chrome & Desktop Apps (2026)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

The October 15, 2026 update turns the ChatGPT extension into a practical assistant for the tabs you already have open. Chat mode handles research and comparison. Work mode handles actions such as form filling and file downloads while you stay in control. Setup takes a few minutes through the desktop app’s Computer Use settings and the official extension.

Install the extension from the OpenAI listing, enable your browser in Computer Use, and start with a simple comparison or form-fill request. Review the results before anything is submitted. For more on computer-use workflows, check the Agents API guide linked above.

## Sources

- OpenAI browser extension documentation: https://learn.chatgpt.com/docs/chrome-extension
- OpenAI announcement via ChatGPT account on X, October 15, 2026
- Chrome Web Store listing for the official ChatGPT extension by OpenAI
- The Verge coverage of the tab-reading and control features
