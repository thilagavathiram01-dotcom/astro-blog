---
title: "How to Ground Agents with Google Developer Knowledge API"
description: "Set up the Developer Knowledge API and MCP server so agents search official Android, Firebase, and Cloud docs instead of stale training data."
pubDate: 2026-10-08T08:30:00
heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "developer", "google", "tutorials"]
noindex: false
---

Coding agents still invent Android and Firebase APIs when their training cutoff is older than the docs. Google's Developer Knowledge API is the official way to hand those agents fresh Markdown from developer.android.com, firebase.google.com, cloud.google.com, and related sites. On October 7, 2026, Google Developers Blog outlined the full toolkit: gcloud commands, an agent skill, client libraries, and APIs Explorer.

The API and its Model Context Protocol (MCP) server reached general availability on April 16, 2026. The October write-up is about using that stack from a terminal, an IDE agent, or production code without scraping HTML.

## What the API actually returns

The Developer Knowledge API is a programmatic source of truth for public Google developer documentation. It serves Markdown, not rendered pages, and supports semantic search, keyword search, document chunks, and grounded answers.

Google says the corpus is indexed frequently so agents see upstream doc changes with less lag. Coverage listed on the MCP reference includes Android, Firebase, Flutter, Chrome, Google AI, Google Cloud, ADK, Gemini CLI, TensorFlow, web.dev, and more. On October 1, 2026, knowledge.workspace.google.com joined the corpus.

Three methods matter for most apps:

- `SearchDocumentChunks` finds snippets and returns a relevance score from 0.0 to 1.0.
- `documents.get` and batch get pull full Markdown. Batch retrieval is capped at 20 documents per call.
- `answerQuery` writes a grounded answer with references. It has a tighter quota. A 429 means you should fall back to search.

Search page size maxes out at 100. Values above 100 are coerced to 100 instead of failing the request.

![Developer reviewing documentation on a laptop](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Search docs from the terminal

The gcloud surface for this API became generally available on September 22, 2026. It ships with Cloud Shell and with a standard Google Cloud SDK install on Linux, macOS, and Windows. No extra plugin is required.

Sign in and set a project first:

```bash
gcloud auth login
gcloud config set project PROJECT_ID
```

Then use the three GA commands:

```bash
gcloud developer-knowledge documents search-chunks \
  --query="Firebase AI Logic hybrid inference Android"

gcloud developer-knowledge documents describe DOCUMENT_NAME

gcloud developer-knowledge answer-query \
  --query="How do I enable App Check for Firebase AI Logic?"
```

`search-chunks` is the right first call. It is cheaper on context than a full page and returns the parent document name you need for `describe`. Use `answer-query` when you want a short grounded reply plus citations, not when you need the raw guide.

If you also use the MCP server, enable it on the project. Google's February 2026 launch post shows this command:

```bash
gcloud beta services mcp enable developerknowledge.googleapis.com --project=PROJECT_ID
```

After March 17, 2026, enabling the Developer Knowledge API also enables the MCP server. Confirm the service in the Cloud console if an agent reports the endpoint is unavailable.

## Connect an agent through MCP

The global MCP endpoint is `https://developerknowledge.googleapis.com/mcp`. The server exposes three tools:

1. `search_documents` returns chunks, titles, and URLs. Use it first.
2. `get_documents` fetches full content for one document or up to 20 names taken from the `parent` field of search results.
3. `answer_query` synthesizes an answer from the same corpus and returns `answer_text` plus document names. If quota is exhausted, switch back to search.

You can list the tool schemas with a JSON-RPC call:

```bash
curl --location 'https://developerknowledge.googleapis.com/mcp' \
  --header 'content-type: application/json' \
  --header 'accept: application/json, text/event-stream' \
  --data '{ "method": "tools/list", "jsonrpc": "2.0", "id": 1 }'
```

Authentication is not optional. Google documents both an API key restricted to the Developer Knowledge API and Application Default Credentials. Restrict the key to that API and to the hosts that call it. Do not paste an unrestricted key into a shared repo.

Google's agent skill lives at `google/skills` under `skills/developers/retrieving-developer-knowledge`. It shipped on September 25, 2026. The skill tells assistants to search chunks before loading a full page, and to fall back to the REST API with curl if MCP is down. Google lists compatibility with Antigravity, Claude Code, Cursor, GitHub Copilot, and custom agents that speak MCP.

The same retrieval pattern fits the Android CLI skill workflow covered in [Android CLI agent skills](/blog/android-cli-agent-skills/). Point the skill at Developer Knowledge when the agent needs current platform docs, then keep device commands in the Android skill.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/SeuhYVg8-AU"
    title="Gemini CLI + Google MCPs: Migrate and deploy full stack apps"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

Google's walkthrough of Gemini CLI with Google MCP servers shows the Developer Knowledge server next to Cloud SQL and Cloud Run. That is the practical loop: look up the current API, then deploy.

## Call it from application code

Client libraries expose `AnswerQuery`, `SearchDocumentChunks`, `GetDocument`, and `BatchGetDocuments`. They support Application Default Credentials, retries, and citation fields on answers. Google's October 7 post points to Python, plus the other supported language libraries, for fetching release notes that sit past a model's training cutoff.

A safe agent loop looks like this:

1. Search chunks with a tight query, such as a class name plus the product.
2. Keep only chunks above a relevance threshold you choose after inspecting scores.
3. Fetch full Markdown only for the parents you still need, at most 20 per batch.
4. Ask the model to answer from those chunks and to cite the returned URIs.
5. If `answerQuery` returns 429, skip it and stay on search plus get.

Filter support is generally available on `AnswerQuery`. Search can also filter on data source, update time, and URI. Use a URI filter when you only want `developer.android.com` or `firebase.google.com` results.

![Engineer working through code and reference notes](https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80)

## Practical limits and safer defaults

Treat `answer_query` as a convenience, not the only path. The MCP reference says the tool has limited quota and tells callers to use `search_documents` after a 429.

Prefer chunks over full pages in the prompt. The skill docs describe that order because full Markdown burns context. A chunk plus its URI is usually enough for an API signature question.

Do not scrape as a fallback. The point of the API is stable Markdown and citations. If the MCP server is disabled, the skill path is REST via curl, not an HTML fetch of the same URL.

Watch the corpus list when a product is missing. Workspace docs were added on October 1, 2026, and genkit.dev on August 25, 2026. A missing domain is a corpus gap, not a model failure.

For local experiments, APIs Explorer on the Developer Knowledge REST reference lets you run the same methods without writing a client. Use it to confirm a document name before you hard-code it in CI.

## Where this fits an Android workflow

Android agents fail in two ways: stale SDK advice, and commands that never touch a device. Developer Knowledge fixes the first. Pair it with on-device skills for the second.

A useful split is: MCP search for Jetpack, Play policy, and Firebase AI Logic pages, then Android Studio or the Android CLI for the project. If you already connect custom MCP apps to Gemini, the same endpoint pattern applies. See [custom MCP apps in Gemini](/blog/gemini-custom-mcp-apps-setup/) for the client side, and keep this API as the documentation source.

## Conclusion

The Developer Knowledge API is GA, the gcloud commands are GA, and the agent skill has been in `google/skills` since September 25, 2026. Start with `search-chunks` or `search_documents`, fetch full pages only when the snippet is not enough, and keep `answer_query` for short grounded replies. That order keeps agents on current Android, Firebase, and Cloud docs without a scrape step.

## Sources

- Google Developers Blog, October 7, 2026: Supercharge your development with the Google Developer Knowledge API ecosystem
- Developer Knowledge release notes, updated October 7, 2026
- MCP reference for developerknowledge.googleapis.com
- Google Developers Blog, February 4, 2026: Introducing the Developer Knowledge API and MCP Server
- Google Cloud YouTube: Gemini CLI + Google MCPs
