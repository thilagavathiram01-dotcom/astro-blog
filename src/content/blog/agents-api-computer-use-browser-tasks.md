---
title: "How to Run Browser Tasks with Agents API Computer Use"
description: "Learn how to run OpenAI Agents API computer use in a hosted browser: create a session, approve website origins, send a task, and delete the session."
pubDate: 2026-10-05T14:00:00
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "chatgpt", "tutorials", "developer"]
noindex: false
---

A model that can click through a website is useful only if you can stop it. OpenAI's Agents API computer use, added on 29 September 2026, runs that browser in an OpenAI-hosted environment. Your app starts the session, follows events, and answers each website-access request.

This guide follows the official [computer use](https://developers.openai.com/api/docs/guides/agents-api/tools/computer-use) page. It covers a public documentation task, not a login flow. The Agents API itself is in public beta, announced on 10 September 2026. OpenAI says there is no extra fee for the Agents API: you pay for the tokens and tools the agent uses.

## What computer use does in the Agents API

Computer use lets an agent navigate websites and use browser interfaces. Typical jobs include testing a page, collecting public information, or completing a task through the UI.

You do not drive the browser yourself. The Agents API runs it. Your application creates a session, sends a task, and handles approvals. The agent decides the next step from what it sees in the browser.

Official examples use the model `gpt-6-astra` and the tool `{ "type": "computer_use" }`. Screenshots are optional; the docs set `include_screenshots` to true so the agent can see the page. The header `OpenAI-Beta: agents=v1` is required on the session requests shown in the docs.

If you already build ChatGPT workflows, the pattern is different from a skill. A skill is a reusable instruction file. Computer use is a hosted browser tool inside an agent session. For the skill side, see [how to create ChatGPT Skills](/blog/chatgpt-skills-reusable-workflows/).

![Developer typing on a laptop in a dim workspace](https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&q=80)

## Prerequisites

OpenAI's quickstart prerequisites apply:

1. Create an API key in the OpenAI platform dashboard.
2. Export it as `OPENAI_API_KEY`. Do not put the key in source control.
3. Install the OpenAI SDK for your language. The JavaScript examples also use `prompt-sync` when the walkthrough asks for input. The cURL examples need Bash and `jq`.

Enable the browser with two settings:

- Add `{ "type": "computer_use" }` to `agent.tools`.
- Set `environment.type` to `openai_hosted`, `environment.desktop.enabled` to true, and `network.access` to `enabled`.

Enabling network access does not approve websites. Each new origin still needs approval, including public sites.

## Step 1: Create a browser session

Creating a session does not start the task. Save the session ID. Official guidance says not to retry automatically if creation fails or the outcome is unknown.

A minimal cURL shape from the docs:

```bash
curl --silent --show-error --fail https://api.openai.com/v1/agents/sessions \
  -H "OpenAI-Beta: agents=v1" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "agent": {
      "model": "gpt-6-astra",
      "instructions": "Read public documentation in the browser. Do not sign in or change any website data. Report the page title and URL you find.",
      "tools": [{ "type": "computer_use", "include_screenshots": true }]
    },
    "environment": {
      "type": "openai_hosted",
      "desktop": { "enabled": true },
      "network": { "access": "enabled" }
    }
  }'
```

The JavaScript equivalent uses `client.beta.agents.sessions.create` with the same agent and environment fields. Print `session.id` and keep it for every later call.

Write instructions that bound the job. The sample instructions tell the agent to read public docs, skip sign-in, avoid changing site data, and report a title and URL. Narrow instructions reduce surprise clicks.

## Step 2: Send the task and follow events

After the session exists, send the user task as a session event. The docs use an `agent.session.input.message` event with `input_text`, for example: open the OpenAI developer docs, find the Agents API quickstart, and report the page title and URL.

Follow the event stream in a second terminal or process. That second process is where approvals arrive. Do not assume the first request returns the final answer. The agent works across turns until the main turn finishes.

If the connection drops, recover the same session before you retry. Starting a second session for the same task can leave the first browser running.

## Step 3: Approve or deny each origin

The browser asks for approval before it opens each new website origin. Your app answers that request. Official docs describe this as a user approval, not a silent allow-all switch.

Handle each request before the agent can continue on that site. Approve only origins you intend the task to use. Deny anything outside that list. If the task is "read developers.openai.com," there is no reason to approve a payment or account domain.

Sign-in is a separate path. The computer-use guide has a dedicated section for account sign-in, and the sample instructions explicitly say not to sign in. For a first integration, stay on public pages. If you later allow sign-in, treat credentials as a product decision: the docs limit how field values are submitted, and your app still owns the approval.

![Lines of code on a monitor during a programming session](https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80)

## Step 4: Check the result, then delete the session

Wait until the main agent's turn finishes. Read the reported title and URL, and compare them with the page you asked for. A confident sentence is not a check. Open the URL yourself if the result will drive another system.

Then delete the session. The docs show a delete after the root turn completes, fails, or is cancelled:

```bash
curl --fail-with-body -X DELETE \
  "https://api.openai.com/v1/agents/sessions/$session_id" \
  -H "OpenAI-Beta: agents=v1" \
  -H "Authorization: Bearer $OPENAI_API_KEY"
```

Review saved browser activity before you throw the session away if you need an audit trail. Hosted environments have a lifetime; deletion is still your cleanup step, not an optional courtesy.

## Watch a DevDay recap of the agent stack

This Latent Space interview, recorded after DevDay 2026, covers computer use, the Agents API, and related API work with OpenAI engineers. It is an interview, not the official quickstart.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/z9OkBD2-MDU"
    title="OpenAI’s New Agent Stack: Computer Use, Decisions API, UltraFast, Dots"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips that keep the first task boring

- Start with a read-only prompt. Ask for a title and URL. Do not ask the agent to submit a form on day one.
- Name the allowed site in both the instructions and the task text.
- Keep the session ID. Approvals, follow-up messages, and delete all use it.
- Fail closed. If session creation returns an unclear result, stop and inspect. The cURL sample in the docs exits instead of retrying.
- Separate approval handling from the task sender, matching the two-terminal walkthrough in the docs.
- Budget for model tokens and tool use. The Agents API announcement says there is no additional Agents API fee beyond that usage.
- Treat the API as beta. Request shapes can change. Pin your reading to the current computer-use page before you ship.

## Conclusion

Agents API computer use is a hosted browser with an approval gate, not a free-roaming desktop. Create a session with `computer_use` and an OpenAI-hosted desktop, send a narrow public-page task, approve only the origins you expect, verify the answer, and delete the session.

That loop is enough to test the integration. Login, form submission, and multi-site jobs can wait until the approval path is solid.

## Sources

- [Computer use (Agents API)](https://developers.openai.com/api/docs/guides/agents-api/tools/computer-use) — OpenAI API docs
- [Introducing the Agents API](https://openai.com/index/introducing-the-agents-api/) — OpenAI, 10 September 2026
- [OpenAI API changelog, 29 September 2026](https://developers.openai.com/api/docs/changelog) — computer use added to the Agents API
- [OpenAI's New Agent Stack interview](https://www.youtube.com/watch?v=z9OkBD2-MDU) — Latent Space, 30 September 2026
