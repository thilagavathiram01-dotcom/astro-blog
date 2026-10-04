---
title: "How to Automate Google Workspace Studio with Webhooks"
description: "Add webhook steps, custom starters, and third-party integrations in Google Workspace Studio so Gmail and Chat events trigger external tools."
pubDate: 2026-10-04T14:00:00
heroImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["google", "productivity", "tutorials", "how-to"]
noindex: false
---

A labeled email used to sit in Gmail until someone copied it into another tool. Google Workspace Studio can now send that event out with a webhook step, or start a flow when something happens outside Workspace.

Google announced the additions on September 17, 2026: custom starters, custom steps, third-party integrations in beta, and webhooks. Admin controls started rolling out the same day. End-user features reached Rapid Release domains from September 21 and Scheduled Release domains from September 30, with gradual visibility of up to 15 days. If the new steps are missing, your domain may still be in that window.

This guide covers what each piece does, how to add a webhook, and how to keep account data from leaving Workspace by accident.

## What a Workspace Studio flow actually is

A flow has one starter and one or more steps. The starter is the event that launches a run: a schedule, a new email, or a custom trigger from another app. Steps are the work that follows, such as drafting a reply, posting in Chat, or calling an external URL.

You build flows in a supported browser at [studio.workspace.google.com](https://studio.workspace.google.com/). Once a flow is on, it runs without you keeping that tab open. If you already use reusable Gemini instructions, the [Workspace skills guide](/blog/google-workspace-skills-gemini/) covers a different layer: prompts that shape how Gemini answers. Studio flows are the automation layer that moves data between apps.

![Person planning a workflow on a laptop at a desk](https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80)

## Who can use the new steps

Google lists these editions for the September 17 features: Business Starter, Standard, and Plus; Enterprise Standard and Plus; Education Fundamentals, Standard, and Plus; plus Google AI Pro for Education, Teaching and Learning, and AI Expanded Access.

Webhook URL allowlists are narrower. Google says that admin control is available on Business Plus, Enterprise Standard, Enterprise Plus, Education Standard, and Education Plus. On those editions an admin can restrict which destinations a webhook may call.

There is no separate end-user toggle for the feature itself. Access depends on edition, release track, and any Marketplace restrictions your admin has set.

## Add a webhook step

A webhook step sends an HTTP request to a URL you provide. Google’s Help Center example is posting a message to a Slack channel. The URL must be static. Variables are not allowed in the URL field, which blocks someone from rewriting the destination at runtime.

1. Open [studio.workspace.google.com](https://studio.workspace.google.com/) and create a flow, or open one you already use.
2. Click **Add step**, then **Send a webhook**.
3. Enter the full destination URL, including `https://`. Google stores the URL securely and recommends HTTPS. Plain HTTP is allowed but not recommended.
4. Choose a method. The default is POST. GET retrieves data. POST sends data to create something. PUT replaces existing data. PATCH does a partial update. DELETE removes data.
5. Add an optional payload. GET ignores the payload. Google sends the body as plain text and recommends JSON. If you insert a variable, keep the JSON valid.
6. Optionally add a later step that reads the webhook response. Studio returns that response as plain text in a variable. An AI step can extract fields from it.
7. Click **Test run**, pick starting conditions, and click **Start**. A test run takes real actions.
8. Click **Turn on** when the result looks right.

A simple POST body from Google’s own examples looks like this:

```json
{
  "text": "Hello world!"
}
```

After a run, open the **Activity** tab. A successful call shows the data sent and the response returned. A failed call shows the error code and the response from the destination URL.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/ZOAszesMBGc"
    title="Get started with Google Workspace Studio"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Use a third-party integration instead of a raw request

Webhooks are the generic path. Third-party integrations, still labeled beta in Help Center, are the named path. Google’s article names Asana, Mailchimp, and Salesforce as examples, and notes that some services, including Salesforce and monday, need a helper app. HubSpot is called out because you pick permissions one by one. A missing permission, such as create contact, breaks only the step that needs it.

Integration steps appear when you build a flow with AI, in templates that already include them, and in the step selector under the service name.

To connect one:

1. Create or open a flow.
2. Select the integration step in the left panel.
3. Click **Connect** and finish the consent screens. You may need a paid subscription for that service.
4. Configure the step, run a test, then turn the flow on.

You can also connect from the Workspace Marketplace integrations category, then return to Studio. Disconnecting in Marketplace does not always match the connections list in your Google Account. To revoke access, open [myaccount.google.com/connections](https://myaccount.google.com/connections), open the app, and delete its connections. Flows that depend on it will stop until you connect again.

If Connect fails, check three things Google documents: a required subscription, an admin block on Marketplace apps, or a helper app that only an admin can install.

![Team reviewing a shared project board on a screen](https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80)

## Custom starters and custom steps

Built-in starters cover Workspace events. Custom starters cover events elsewhere. Google’s Help Center examples include a new Airtable record, an incoming webhook, or a support ticket update. A custom step is an action inside the flow, such as posting a message, creating a task, or sending an SMS.

Developers build these as Google Workspace add-ons with Apps Script or an HTTP add-on in another language. The manifest uses `workflowTrigger` for starters and `workflowAction` for steps. A custom starter can notify Studio asynchronously by calling the Workspace Studio API when the outside event happens. Teams can share a test deployment privately or publish the add-on on the Marketplace.

That split matters. A webhook step pushes data out from a flow that already started. A custom starter pulls the start signal in from another system. Use the webhook when Gmail, Calendar, or a schedule should kick off an external action. Use a custom starter when the outside system should kick off Workspace.

## Practical flow patterns

**Escalate a labeled email.** Starter: you receive an email with a chosen label. Step: Ask Gemini to summarize the thread. Step: send a POST webhook with the summary in a JSON `text` field to your incident channel.

**Log a meeting follow-up.** Starter: a Calendar event ends. Step: draft notes in a Doc. Step: PATCH an external record with the event id stored in a variable.

**Hand off to a tracker.** Starter: a new form response lands in Sheets. Step: an Asana or similar integration creates a task. Skip the webhook if the named integration already covers the action.

Keep payloads small. Studio does not let you build the URL from variables, so put changing values in the body, not the path, unless the receiving API only accepts path parameters. In that case you need a custom step, not the built-in webhook step.

## Tips before you turn a flow on

Variables in integration steps and add-on steps can include Gmail or Chat message contents and Calendar event details. Google’s warning is direct: the flow can share that Google Account data with the third party. Trust the destination before you map those variables.

Use HTTPS. Treat a test run as production, because it performs the real request. Check Activity after the first live run, not only the editor preview.

If you are under 18 on a school account, Google blocks AI steps in Workspace Studio. A shared flow that contains them will drop those steps when you open it. Webhook and integration steps are separate from that rule, but confirm with your admin before relying on them in an education domain.

Admins who can set a webhook URL allowlist should do it before a wide rollout. That control is the practical guardrail against a flow posting customer text to an unapproved endpoint.

## Conclusion

Workspace Studio’s September 2026 update closes the gap between a Gmail or Calendar event and a tool that has no native Workspace step. Start with a named integration when one exists. Use **Send a webhook** when you only have an HTTPS endpoint and a JSON body. Reach for a custom starter when the trigger lives outside Google.

Turn the flow on only after a test run and an Activity check. Then the labeled email does not wait for a copy-paste.

## Sources

- Google Workspace Updates, September 17, 2026: Automate workflows with custom starters and steps, third-party integrations, and webhooks in Workspace Studio
- Workspace Studio Help: Connect flows to other services with webhooks
- Workspace Studio Help: Take actions in third-party services with flows (Beta)
- Workspace Studio Help: Create and use custom starters and steps in flows
- Google Workspace Developers, YouTube: Get started with Google Workspace Studio
