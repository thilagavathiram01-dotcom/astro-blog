---
title: "Generate SQL Connect Queries With Gemini"
description: "Use Gemini in Firebase to draft SQL Connect schemas, GraphQL queries, and mutations, then test them in the console before you deploy."
pubDate: 2026-10-09T12:00:00
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["firebase", "gemini", "tutorials", "developer", "how-to"]
noindex: false
---

Firebase SQL Connect is the relational product behind Cloud SQL for PostgreSQL. The product used to be called Data Connect. Firebase says the features and APIs are the same, so existing integrations keep working. What changed for many teams is the daily workflow: Gemini in Firebase can draft the schema, the queries, and the mutations from plain language.

That does not replace a review. Generated GraphQL still has to match your auth rules and the columns you actually store. This guide covers the console path, the local CLI path, and the checks to run before a client calls the operation.

If you already ship Gemini through Firebase AI Logic, the setup habit is similar: turn the feature on for the project, then keep generated output inside a named operation. See [how hybrid inference works in Firebase AI Logic](/blog/firebase-ai-logic-hybrid-inference/) for the client-side model side of that stack.

## What Gemini can generate

Gemini in Firebase writes SQL Connect artifacts, not free-form SQL strings that the app sends to Postgres. Official docs list three places it can help:

- The Firebase console, when you create a service or open the Data tab.
- The Firebase CLI command `firebase init dataconnect`, which still uses the Data Connect name in the command.
- The SQL Connect extension in Visual Studio Code, including a code lens that turns GraphQL comments into operations.

A new service can start from an app description. Gemini then proposes a schema plus example operations and a seed mutation. Later edits use **Help me write GraphQL** on the Data tab. AI assistance is included for individual users as part of Gemini in Firebase. Query and mutation execution is billed separately under SQL Connect and Cloud SQL.

![Developer reviewing code on a laptop before accepting a generated query](https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80)

## Turn on Gemini, then open SQL Connect

1. Open the Firebase console and select the project that will own the Postgres data.
2. Enable Gemini in Firebase. SQL Connect assistance depends on that setting.
3. Go to **Databases & Storage**, then **SQL Connect**.
4. Create a service if you do not have one. The console offers a **Getting started with Gemini** flow. Describe the app, not a single screen. A movie catalog, a pizza delivery menu, or a chat room list is enough for a first schema.
5. Attach a data source. On the Spark plan, a no-cost trial can create one Cloud SQL instance with trial limits. On Blaze, accepting the default Cloud SQL configuration qualifies the project for a three-month no-cost Cloud SQL trial.

Spark projects are capped at 8,300 SQL Connect operations per day. Blaze projects include 250,000 client operations per month, then $0.90 per million. Cloud SQL itself starts around $9.37 per month after any trial, and the price depends on region and size. Network egress is free up to 10 GiB per month.

The service is English-capable in the console prompts you type. The product itself is not limited to one client platform: generated SDKs cover Kotlin for Android, iOS, Flutter, and web.

## Write a query from the Data tab

Use a service that already has a schema. The Movies example in the official SQL Connect codelab is the reference Google uses in the AI assistance guide.

1. Select the service and data source.
2. Open the **Data** tab.
3. Click **Help me write GraphQL**.
4. Describe the result, including sort and limit. Google's sample prompt is: return the top five movies of 2022, in descending order by rating.
5. Click **Generate**.
6. If the operation looks right, click **Insert**. If a field is missing, click **Edit**, tighten the prompt, and click **Regenerate**.
7. Set variables as JSON when the operation needs them. Set the authorization context to Administrator, Authenticated, or Unauthenticated before you run it.
8. Click **Run** and read the result set.

A named operation is required if you want to run more than one block in the editor. Google's docs use this pattern:

```graphql
query GetMovie($myKey: Movie_Key!) {
  movie(key: $myKey) { title }
}
```

Put the cursor on the first line of that query to activate **Run**.

The same panel can draft a write. The documented movie prompt, "Create a movie based on user input," can return a `movie_insert` mutation with variables for title, year, genre, rating, description, image URL, and tags, marked `@auth(level: USER)`. Supply test JSON, run it, then ask for a follow-up query that lists 2024 movies tagged comedy and space travel. The inserted row should show in History if the write landed.

Treat those samples as shapes, not as your production schema. If your table uses different field names, regenerate against that schema instead of pasting the movie mutation.

## Generate locally, then test in the emulator

Console generation is fast for a spike. A shipping app should keep schema and operations in source control.

1. Install the Firebase CLI and sign in to the same project.
2. Run `firebase init dataconnect`.
3. Provide the app idea when the CLI asks. It can generate a schema, example operations, and a seed data mutation.
4. Open the project in VS Code with the SQL Connect extension.
5. Use **Generate/Refine Operations** on a GraphQL comment when you want a named query without leaving the file.
6. Point tests at the SQL Connect emulator before you deploy.

AI tools that speak Model Context Protocol can use the Firebase MCP server. Google lists Antigravity, Claude Code, Claude Desktop, Cline, Cursor, VS Code Copilot, and Windsurf as clients. After the MCP client is configured, useful prompts from the docs include setting up a SQL Connect project for a pizza delivery app, fixing compile errors, and asking which users are in the local emulator.

For Cursor or Windsurf, Firebase publishes prompt templates in the `firebase-tools` repo under `templates/dataconnect-prompts/`. Copy the schema-generation or operation-generation rule into the IDE's project rules so the assistant follows SQL Connect syntax instead of generic GraphQL.

![Analytics style dashboard used as a stand-in for reviewing query results](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80)

## Check auth before you insert the operation

Generated operations often include an `@auth` directive. A public list and a user-scoped insert are not interchangeable. Before you click Insert:

- Confirm the level matches who should call it. A review list can be public. A create-movie mutation in Google's example is `USER`.
- Confirm filters use variables the client will send, not hard-coded years, unless the operation is an admin report.
- Run once as Administrator in the console, then again as Authenticated or Unauthenticated so a missing rule fails in the editor instead of in the app.
- Name the operation. Unnamed blocks are harder to call from generated SDKs.
- Keep seed mutations out of the client connector. They belong in emulator setup.

SQL Connect stores deployed queries and mutations on the server. Client code calls them by name through the generated SDK. It does not send arbitrary GraphQL. That is why a bad generated query is a deploy problem, not only a prompt problem.

## Watch a SQL Connect walkthrough

Google Cloud Tech published a product walkthrough with Cynthia Wang from the SQL Connect team. It covers schema, operations, native SQL, and a mutation that calls Gemini for a headline. Use it for the product map, then follow the console steps above for the query editor.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/SOoBKKDO0Lc"
    title="Firebase goes SQL: Inside the new SQL Connect (PostgreSQL)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips that save a second generate

- Name the entity and the limit in the prompt. "Top five movies of 2022 by rating, descending" beats "show popular films."
- Ask for variables when the filter should change per user. Google's review example takes genre plus a min and max rating.
- Regenerate after a schema change. A query drafted against an old field will still look fluent and fail at run time.
- If Gemini in Firebase errors, use the Gemini troubleshooting page rather than retrying the same prompt. Access is tied to the Gemini in Firebase setup for that user.
- Vector search and Vertex AI embeddings are optional and billed separately. Do not add them in the first prompt unless the app needs similarity search.

## Conclusion

Gemini in Firebase can draft a SQL Connect schema from an app description and later draft the GraphQL you would otherwise write by hand. The safe path is short: enable Gemini, generate in the console or with `firebase init dataconnect`, insert only after you set auth and variables, and run the operation before a client SDK calls it.

Data Connect commands and APIs still work under the SQL Connect name. The review step does not go away. A generated `movie_insert` is only as correct as the schema and the `@auth` level you accept.

## Sources

- [Firebase SQL Connect](https://firebase.google.com/docs/sql-connect) — Firebase Documentation, updated October 7, 2026
- [Use AI assistance for SQL Connect](https://firebase.google.com/docs/sql-connect/ai-assistance) — Firebase Documentation, updated October 6, 2026
- [Firebase SQL Connect pricing](https://firebase.google.com/docs/sql-connect/pricing) — Firebase Documentation
- [Realtime PostgreSQL: From Data Connect to SQL Connect](https://firebase.blog/posts/2026/04/whats-new-sql-connect/) — Firebase Blog, April 29, 2026
