---
title: "How to Connect Custom MCP Apps in Gemini"
description: "Add a custom MCP server to Gemini Apps: US eligibility, Keep Activity, web setup, @ prompts, and how to disconnect safely."
pubDate: 2026-09-24T14:00:00
heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "productivity", "developer"]
noindex: false
---

Gemini can use more than the partner list Google ships. If a tool exposes a Model Context Protocol (MCP) server, you can add that URL as a custom Connected App and call it from chat or from Gemini Spark.

This walkthrough follows Google’s official help article for custom apps. It covers who can use the feature, how to add a server on the web, how to force it with `@`, and how to disconnect or remove it when you no longer trust the connection.

If you only want the built-in partners that arrived on September 23, 2026 (Airtable, Linear, Adobe, and the rest), start with the [September Connected Apps setup guide](/blog/gemini-connected-apps-september-2026/) instead. Custom MCP is a separate path with tighter limits.

## Who can add a custom MCP app

Google’s [Connect & manage custom apps](https://support.google.com/gemini/answer/17209137) page lists hard requirements. You must:

- Be 18 or over and located in the United States.
- Sign in with a **personal** Google Account. Work and school accounts cannot add custom MCP apps for now.
- Keep **Keep Activity** turned on. Custom apps disappear when that setting is off.
- Have the MCP server URL, and that server must follow the standard MCP specification.

Custom Connected Apps are English-only today. You add them in the Gemini web app at [gemini.google.com](https://gemini.google.com). After the link succeeds, the same custom app is available in the Gemini mobile app as well.

Google does not control, monitor, or secure third-party MCP servers. You are responsible for the server you attach. Read the provider’s privacy policy and terms before you paste any URL.



![Developer reviewing a dashboard on a laptop while planning an integration](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)



## What custom apps are for

Google describes two uses once an MCP server is linked:

- Quick actions in a normal Gemini chat.
- Longer workflows with Gemini Spark, the personal agent that can keep working across tools under your direction.

You still pick the app. Gemini does not invent a custom connector on its own. Write actions currently require manual confirmation, but Google notes that Gemini can make mistakes. Treat every write as something you will check in the source app.

Built-in Google services such as Search, Maps, Flights, Hotels, and public YouTube data can still be used without a custom MCP link. Custom servers are only for tools that are not already on your Connected Apps list.

## Prepare Keep Activity and settings

1. Sign in at [gemini.google.com](https://gemini.google.com) with the personal account you will use on your phone.
2. Open Gemini activity settings and confirm **Keep Activity** is on. Pick a retention window you accept.
3. Open **Settings**, then **Connected Apps**. If that label is missing, open **Personal Intelligence**, then **Connected Apps**.
4. Confirm you can already see partner apps. If the page is empty, fix sign-in and Keep Activity before you try a custom URL.

On Android, Keep Activity off blocks most Connected Apps. Device assistance, Phone, Messages, and WhatsApp can still appear. Custom MCP is not in that exception list.

## Connect a custom app on the web

You can only create the link from the computer client. Mobile can use it later; it cannot add the URL.

1. Go to [gemini.google.com](https://gemini.google.com).
2. Open **Settings → Connected Apps** (or **Personal Intelligence → Connected Apps**).
3. Paste the app’s MCP server URL in the custom-app field.
4. If the server does not support Dynamic Client Registration, open **Advanced features → Show more** and enter the credentials the provider gave you.
5. Continue and finish every on-screen consent screen.
6. When the app appears under **Custom apps**, open its details and read supported versus unsupported actions.

If the URL is wrong, the server is down, or the spec does not match MCP, the connect step fails. Fix the server first. Gemini will not invent a working endpoint.

**Tip from Google:** To make sure a prompt uses your custom app, type `@` and select it before you submit.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/NpCNG2-5qAU"
    title="Save time (and tabs) with apps in Gemini. Access Google Maps, YouTube Music and more in one place"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Use the custom app in chat

1. Stay signed in on web or open the Gemini mobile app on the same account.
2. Type `@` and choose the custom app, then describe the task.
3. Submit and follow any confirmation cards.
4. Open the third-party product and verify the result before you run a batch of writes.

Keep first prompts read-only: list items, summarize a board, fetch a status. After one correct read, try a single write that you can undo.

Gemini may send information from the current chat and from other sources you already enabled, including other Connected Apps, Personal Intelligence, skills, tasks, and logged-in websites. That is why a poorly chosen MCP server is riskier than a first-party partner on Google’s list.



![Team discussing a software workflow around a shared table](https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80)



## Risks Google wants you to accept first

The same help article is blunt about custom servers:

- **Outside Google’s control.** After data leaves Gemini, the third party’s privacy rules apply.
- **Your responsibility.** Do not connect a server unless you trust the application behind it.
- **Excessive data requests.** A custom app can ask for more than the current prompt needs.
- **Unintended sharing.** Chat context plus other Connected Apps can leak more than you meant to send.

Google currently requires manual confirmation for write actions. That is not a guarantee the model will always pick the right record. Confirm every change in the source system.

## Disconnect, unlink, or remove

Three different actions exist. Use the smallest one that matches your goal.

**Turn the custom app off**

1. Open Connected Apps on gemini.google.com.
2. Under **Custom apps**, turn the toggle off.
3. Follow any extra prompts.

Gemini stops using the app. The listing can remain so you can turn it back on.

**Unlink the MCP server**

1. Open the custom app’s **More details**.
2. Choose **Disconnect**.
3. Or revoke the link from your [Google Account linked apps](https://myaccount.google.com/linkedapps) page.

Unlinking revokes permissions. The custom app can stay in the list until you remove it. You reconnect later by linking the MCP server again.

**Remove the custom app**

1. Open **More details**.
2. Choose **Remove app** and confirm.

Removal also unlinks the MCP server from the Google Account. Use this when you no longer want the tool on the page at all.

Review custom apps the same week you add them. If a workflow was a one-off, remove it instead of leaving a live token in settings.

## Fixes when the custom app never appears

Work this list in order:

- You are in the United States, 18 or older, and signed in with a personal account.
- Keep Activity is on.
- You added the URL on the **web** client, not only on the phone.
- The MCP server follows the published spec and is reachable.
- You completed Dynamic Client Registration or entered advanced credentials.
- You are not trying to use the custom app inside Gemini in Google Messages. Google says Connected Apps do not work there.

Availability still varies by Gemini surface. An app you added on the web should show in the mobile Gemini app on the same account, but it will not appear on every device type Google documents for first-party partners.

## A short setup that stays safe

1. Confirm Keep Activity and the US personal-account limits.
2. Add one MCP server you already operate or whose vendor you have a contract with.
3. Run one `@` read prompt and check the source app.
4. Run one confirmed write, then stop.
5. Bookmark Connected Apps and the Google Account linked-apps page.
6. Remove the custom app when the project ends.

Do not paste MCP URLs from social posts. Treat the server like production credentials.

## Conclusion

Custom MCP apps let Gemini talk to tools that never made the partner catalog. The tradeoff is that Google does not secure those servers for you. Stay inside the official limits: personal US account, Keep Activity on, English, web-based setup.

Add one URL, force it with `@`, verify the result, and remove the app when you are done. That is the whole workflow. Partner logos from the September 23 rollout are easier and safer for everyday use. Save custom MCP for the one system that is missing from the list and that you already trust.

## Sources

- [Connect & manage custom apps for Gemini Apps](https://support.google.com/gemini/answer/17209137)
- [Use & manage Connected Apps in Gemini](https://support.google.com/gemini/answer/13695044)
- [New connected apps roll out to Gemini (Sep 23, 2026)](https://blog.google/innovation-and-ai/products/gemini-app/new-connected-apps-gemini/)
- [Gemini Apps Privacy Hub](https://support.google.com/gemini/answer/13594961)
- [Use Gemini Spark to manage tasks and workflows](https://support.google.com/gemini/answer/17094507)
- [Manage links between your Google Account and other apps](https://support.google.com/accounts/answer/13533235)
