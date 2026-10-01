---
title: "How to Store Credentials for Gemini Managed Agents"
description: "Store write-only Gemini API credentials and attach them to Antigravity allowlists so tokens never enter the remote sandbox."
pubDate: 2026-10-01T08:00:00
heroImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "developer", "ai-tools", "security"]
noindex: false
---

A Gemini managed agent can call GitHub, Jira, or an MCP server from a Google-hosted Linux sandbox. If you drop a personal access token into the prompt or an environment file, that secret lives where the agent can read it.

Google’s Credentials API stores the secret on the server instead. You save it once, reference it by ID, and the egress proxy injects it on outbound requests. Official docs state that secret values are write-only and are never returned by any endpoint.

This guide follows the [Credentials in managed agents](https://ai.google.dev/gemini-api/docs/agent-credentials) page (last updated 23 September 2026) and the [Antigravity agent](https://ai.google.dev/gemini-api/docs/antigravity-agent) docs. Pair it with our [Gemini 3.8 Flash thinking levels](/blog/gemini-3-8-flash-thinking-levels/) walkthrough when you pick the model behind the agent.

## What a managed credential does

The Antigravity agent (`antigravity-preview-09-2026`) plans, runs Bash or Python, edits files, and hits the web inside a remote environment. Filesystem tools turn on when you set `environment`.

Credentials sit outside that environment. You attach a credential ID to a domain on `environment.network.allowlist`. The proxy resolves the ID per request and adds the auth header on the wire.

That design matters for two reasons:

- A compromised sandbox cannot list the raw token.
- An `oauth2` credential can refresh access tokens during a long run without you passing a new secret mid-task.

![Laptop showing a terminal and lock icon on a desk](https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80)

## Create a write-only credential

Set `GEMINI_API_KEY` and install the current Google Gen AI SDK. Then store a bearer token. Use a fine-scoped GitHub token in production, not the placeholder shown in docs.

### Python

```python
from google import genai

client = genai.Client()

credential = client.credentials.create(
    id="github-production",
    type="bearer_token",
    token="ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
)
print(f"Credential ID: {credential.id}, Status: {credential.status}")
```

### JavaScript

```javascript
import { GoogleGenAI } from "@google/genai";

const client = new GoogleGenAI({});

const credential = await client.credentials.create({
  id: "github-production",
  type: "bearer_token",
  token: "ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
});

console.log(`Credential ID: ${credential.id}, Status: ${credential.status}`);
```

### REST

```bash
curl -X POST "https://generativelanguage.googleapis.com/v1beta/credentials" \
  -H "Content-Type: application/json" \
  -H "x-goog-api-key: $GEMINI_API_KEY" \
  -d '{
    "id": "github-production",
    "type": "bearer_token",
    "token": "ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  }'
```

The `id` is the string you will put on allowlist rules. Treat it as a name in your project, not as a secret.

## Attach the credential to an allowlist

Create an interaction with the September 2026 Antigravity harness. Map `api.github.com` to the credential. Add a catch-all rule only if the task must fetch other public sites.

```python
interaction = client.interactions.create(
    agent="antigravity-preview-09-2026",
    input="Triage the open issues in my-org/my-repo.",
    environment={
        "type": "remote",
        "network": {
            "allowlist": [
                {"domain": "api.github.com", "credential": "github-production"},
                {"domain": "*"},
            ]
        },
    },
)
print(interaction.output_text)
```

Official JavaScript samples use a five-minute client timeout. Managed agent loops often run longer than a normal chat call.

The agent can now call `api.github.com` with an Authorization header. The token never exists inside the sandbox.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Psa8mLikdag"
    title="Managed Agents in the Gemini API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Pick the right credential type

Google documents three types. Use the one that matches how the upstream service authenticates.

| Type | Use case | Behavior |
| --- | --- | --- |
| `bearer_token` | Personal access tokens, bot tokens, static API keys | Proxy injects the token as a request header. No refresh. |
| `oauth2` | OAuth apps and user-delegated flows | Proxy exchanges the refresh token and refreshes access tokens as they expire. |
| `environment_variable` | Client SDKs that read secrets from the process environment | The agent sees a placeholder. The proxy substitutes the real secret on outbound requests. |

Use `oauth2` when a job can outlast a short-lived access token. Google states that refresh happens on the proxy, so a long interaction does not fail when the first access token expires.

## Mix domains, sources, and transforms

One allowlist can hold authenticated and unauthenticated rules. You can also clone a GitHub repo into the sandbox with `environment.sources`.

```python
interaction = client.interactions.create(
    agent="antigravity-preview-09-2026",
    input="Sync the open Jira issues into the tracking sheet in my repo.",
    environment={
        "type": "remote",
        "sources": [
            {
                "type": "repository",
                "source": "https://github.com/your-org/backend",
                "target": "/backend-app",
            }
        ],
        "network": {
            "allowlist": [
                {"domain": "github.com", "credential": "github-production"},
                {"domain": "api.atlassian.com", "credential": "jira-oauth"},
                {"domain": "*.googleapis.com"},
            ]
        },
    },
)
```

Allowlist rules also accept an inline `transform` object. Both `credential` and `transform` run on the proxy, so neither header value is visible in the sandbox.

| Rule | What the proxy does |
| --- | --- |
| `credential` only | Resolves the stored secret and injects its header. |
| `transform` only | Sends the static headers you wrote. |
| Both | Applies the credential first, then merges `transform`. An explicit transform header wins on the same key. |
| Neither | Allows the domain with no extra headers. |

A common pattern is credential for auth plus transform for a workspace header:

```json
{
  "domain": "api.atlassian.com",
  "credential": "jira-oauth",
  "transform": {
    "X-Atlassian-Workspace": "my-workspace-id"
  }
}
```

Keep one-off tokens in `transform`. Move any secret you reuse across agents into `POST /credentials`.

![Server racks in a data center aisle](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80)

## Use credentials with remote MCP servers

Remote MCP tools take the same `credential` field. Set it on an `mcp_server` tool so every request to that server gets the injected header. Do not put the token in the MCP URL or in the agent prompt.

Limit tools when the job does not need a shell. The Antigravity docs say the default set is `code_execution`, `google_search`, and `url_context`. Filesystem tools appear when `environment` is set. Pass only the tools you need if the agent should not run arbitrary commands.

## Practical limits and habits

Confirm these from the live docs before you ship:

- Agent id in current samples: `antigravity-preview-09-2026`.
- Default model behind that harness is Gemini 3.8 Flash. Override it with `agent_config` only when you have a documented reason.
- Secret values stay write-only after create. Plan rotation by creating a new credential id and updating allowlists.
- Give the HTTP client a long timeout. Official JS samples use 300000 ms.
- Do not paste tokens into `input`. The sandbox can write files and print stdout.

If you still use `generateContent` for short model calls, keep credentials on the Interactions path for agents. That is the surface Google documents for Antigravity, MCP, and network allowlists.

## Troubleshooting

**401 from GitHub or Jira.** The allowlist domain must match the host the agent actually calls (`api.github.com` is not `github.com`). Add both if the task clones a repo and hits the REST API.

**Agent says it cannot see the token.** That is expected. Ask it to call the API, not to print `Authorization`.

**OAuth call dies after an hour.** Switch the credential type to `oauth2` so the proxy refreshes. `bearer_token` has no refresh logic.

**Timeouts.** Raise the client timeout. A triage job that searches issues and writes a PDF can run for minutes.

## Conclusion

Store secrets with `client.credentials.create`, then point each allowlist domain at the credential id. The Antigravity agent keeps working in the remote sandbox. The egress proxy holds the token.

Start with one `bearer_token` against a throwaway GitHub repo. Add `oauth2` when a vendor token expires mid-run. Keep model routing on 3.8 Flash thinking levels for the text model, and keep secrets on this credentials path for every managed agent you run.

## Sources

- [Credentials in managed agents](https://ai.google.dev/gemini-api/docs/agent-credentials) — Gemini API
- [Antigravity agent](https://ai.google.dev/gemini-api/docs/antigravity-agent) — Gemini API
- [Agent environment](https://ai.google.dev/gemini-api/docs/agent-environment) — Gemini API
- [Managed agents quickstart](https://ai.google.dev/gemini-api/docs/managed-agents-quickstart) — Gemini API
- [Interactions API overview](https://ai.google.dev/gemini-api/docs/interactions-overview) — Gemini API
