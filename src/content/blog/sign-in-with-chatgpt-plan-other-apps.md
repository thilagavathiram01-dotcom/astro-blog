---
title: "Sign in with ChatGPT: Use Your Plan in Other Apps"
description: "Learn how Sign in with ChatGPT works, which plans can share usage, and how to set app limits or disconnect a site."
pubDate: 2026-10-01T14:30:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["chatgpt", "tutorials", "how-to", "ai-tools"]
noindex: false
---

OpenAI now lets you sign in to participating apps and sites with the same account you use for ChatGPT. If you pay for Plus or Pro, you can also let those apps draw on the usage already included in your plan, without pasting an API key into someone else's product.

The option rolled out with DevDay 2026. OpenAI's help center documents the sign-in flow, what gets shared, and how weekly app limits work. This guide follows those steps so you can connect an app, cap its usage, and disconnect it later.

If you are already using plugins inside ChatGPT, the [DevDay plugins guide](/blog/chatgpt-plugins-after-devday-2026/) covers the in-chat side. Sign in with ChatGPT is the reverse direction: your account leaves ChatGPT and opens another product.

## What Sign in with ChatGPT actually does

Sign in with ChatGPT is an identity option. On a participating site you choose **Sign in with ChatGPT** or **Continue with ChatGPT**, then approve the connection from your ChatGPT account. OpenAI says the app receives basic account info: your name, email address, and profile picture.

Plan sharing is a separate choice. You can sign in and refuse plan use. If you turn plan use on, eligible AI requests in that app count toward the ChatGPT Work and Codex usage included in Plus or Pro. Free accounts can still sign in where the partner supports it. They cannot spend a ChatGPT plan they do not have.

OpenAI is clear about what does not move. Using your plan does not hand the app your ChatGPT conversations or memories, and it does not share an API key. Extra permissions, if the app asks for them, need a separate review. The app can still bill you for its own subscription, hosting, or premium features.

Initial identity partners named in OpenAI's sign-in article include Airtable, GitLab, HubSpot, Notion, Supabase, and Vercel, plus OpenAI Academy and ChatGPT Sites. The live directory of plan-usage partners, sign-in-only apps, and open-source tools is the list OpenAI maintains at its Sign in with ChatGPT partners page. Treat that directory as the source of truth, because the roster is still expanding.

![Person reviewing account settings on a laptop](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80)

## Connect an app without sharing an API key

Start in the other product, not in ChatGPT. OpenAI's help article walks through this order:

1. Open the participating app or site and start its sign-in flow.
2. Select **Sign in with ChatGPT** or **Continue with ChatGPT** if the button is offered.
3. Sign in to the ChatGPT account you want to use. If you have a work account and a personal account, check which one is active before you continue.
4. Read the basic account info the app will receive.
5. If the screen offers plan use, choose yes or no. That choice is separate from sign-in.
6. Continue into the app.

Already have an account there? Look in the app's account or billing settings for an option to use your ChatGPT plan instead of repeating the whole sign-up.

After you connect, ChatGPT's permissions area lists apps and sites where you have already signed in. That list is a record of your connections. It is not a catalog of every partner.

Enterprise and organization members can use identity sign-in, but availability still depends on admin settings. If the button is missing at work, an admin block is a likely cause, not a broken browser.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/trVYp0WeLos"
    title="Your ChatGPT Subscription Can Power OTHER Apps?!"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Set a weekly limit before the app spends your plan

Eligible requests count against the ChatGPT Work and Codex usage in your plan. How fast that happens depends on the app and the tasks you run. OpenAI lets you cap each app so one product cannot consume the whole week.

In ChatGPT, open **Settings**, then **Usage**. Under **App limits**, find the app and select **Manage limits**. Set the weekly usage limit and save.

That limit is a cap, not a second pool of usage. It does not reserve capacity for the app, and it does not raise your overall plan limits. An app can hit its own cap while you still have ChatGPT usage left. The percentage you set and the percentage already used are different numbers. Check both before you assume the app is broken.

If you hit a limit, wait for the reset shown in usage settings. Signing in again does not restore usage. You also do not need to buy credits only because an app reached a lower cap you chose yourself.

Credits are optional and off by default. If the control appears, you can allow apps to use available credits after included usage runs out. OpenAI says an app must have its usage limit set to 100 percent before it can use credits, and setting that limit to 100 percent does not turn credit use on by itself. Review automatic credit purchases first. If those purchases are enabled, continued use can create charges, and OpenAI says you may not get a separate notice when included usage ends.

![Notebook and phone on a desk used to track app limits](https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80)

## Disconnect the app when you are done

Signing out of the other product ends that session. It does not disconnect the app from ChatGPT, and it does not stop authorized plan use. OpenAI's disconnect path is inside ChatGPT:

1. Open permissions and select **Sign in with ChatGPT**.
2. Select the app or site.
3. Under **Manage connection**, select **Disconnect**.
4. Confirm **Disconnect** again.

The app may stay signed in to its own account until you sign out there. Disconnecting does not reverse usage already recorded, and it does not delete data the app already received. For deletion, use the app's own data controls or contact the provider.

If you connect again later, review the requested permissions from scratch. A previous refusal of plan use may not flip on by itself when you sign in again.

## Fix the errors people hit first

**Account not eligible.** Confirm you are on Plus or Pro if you expected plan use, and that the app offers the option on your tier of that product. Credits do not make a free account eligible. If both sides match the published rules and plan use is still missing, OpenAI Support wants the app name and the error text.

**Plan use never starts.** Check whether you declined plan use during sign-in. You can be signed in while AI requests in the app stay off your ChatGPT plan. Look in the app's settings for a switch, or run the sign-in flow again and review the choice.

**Credits exist, but the app stops.** Credit use needs a separate opt-in, a balance, and an app limit of 100 percent. A lower app limit blocks credits for that app.

**Usage looks high.** Rates can differ from ChatGPT itself. Usage settings show the app, period, and limit, not a full action log. Ask the app provider what ran. If the recorded ChatGPT amount looks wrong, contact OpenAI Support with the task details and any case reference from the provider.

**The app asks for a feature ChatGPT has.** Some ChatGPT or API features are not available when another app spends your plan. That limit is on the app's side. Ask the provider which capability it requested.

## Practical tips before you connect a second app

Connect only products you already trust. The shared fields are limited, but email and name are still identity data.

Set a weekly app limit on day one, even if you expect light use. You can raise it after you see real consumption in **Settings > Usage**.

Keep plan use and the app's own bill separate in your notes. A partner subscription is not included in Plus or Pro.

For organization accounts, check admin policy before you promise a teammate that Sign in with ChatGPT will appear.

Developers who want to add the button have a different path. OpenAI points open-source projects to its developer docs and asks commercial partners to submit an interest form. End users do not need either of those.

## Bottom line

Sign in with ChatGPT is a controlled way to open participating apps with your ChatGPT identity, and, on Plus or Pro, to spend included usage there without an API key. Sign-in and plan sharing are separate switches. Weekly app limits are caps, credits stay off until you opt in, and disconnect lives in ChatGPT permissions, not in the other app's log-out button.

Check OpenAI's partner directory before you assume a tool supports plan sharing, then set a limit the same day you connect.

## Sources

- OpenAI Help Center, "Using your ChatGPT plan in other apps and sites" (updated October 2026): https://help.openai.com/en/articles/20001542-using-your-chatgpt-plan-in-other-apps-and-sites
- OpenAI Help Center, "Sign in with ChatGPT": https://help.openai.com/en/articles/20001410-sign-in-with-chatgpt
- OpenAI, DevDay 2026 recap (September 29, 2026): https://openai.com/index/devday-2026-recap/
