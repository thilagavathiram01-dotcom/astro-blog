---
title: "How to Set Up ChatGPT Wallet for Agent Purchases"
description: "Step-by-step guide to add a card and approve purchases with ChatGPT Wallet using dots agents. Available for US Pro subscribers."
pubDate: 2026-11-15T14:00:00
heroImage: "https://images.unsplash.com/photo-1750262701480-91fc40e726ba?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["chatgpt", "ai-tools", "tutorials", "how-to"]
noindex: false
---

OpenAI launched ChatGPT Wallet on 13 November 2026. It lets your always-on dot agent complete online purchases after you review and approve each one. The agent never sees your actual card number. A payment token stands in for it.

This guide shows how to check eligibility, add a card, and approve a purchase. It draws only from OpenAI's official announcement and help documentation. Availability is limited at launch.

## Who can use ChatGPT Wallet

ChatGPT Wallet rolls out gradually to ChatGPT Pro subscribers who are 18 or older, live in the United States, and have a US billing address. You need an eligible US-issued American Express, Chase, Mastercard, or Visa card. Debit cards and virtual cards are not supported at launch.

The feature works only inside conversations with your dot. It is not available in regular ChatGPT chats, Work threads, or standalone Codex sessions. You must set up a dot first.

OpenAI built the wallet with American Express, Mastercard, and Visa. Users keep existing card rewards and protections for eligible disputes. Over time, OpenAI expects users to set spending limits or categories so agents can handle some purchases with pre-approval. That is not available yet.

If you already use agents for browser tasks, the pattern is similar: the agent prepares the work, and you approve the sensitive step. See [how to run browser tasks with the Agents API computer use](/blog/agents-api-computer-use-browser-tasks/) for a related approval flow.

![Person holding a smartphone and credit card for contactless payment](https://images.unsplash.com/photo-1726066012618-f3b5fc6f6593?auto=format&fit=crop&w=800&q=80)

## Step 1: Confirm you have a dot and Wallet access

Open ChatGPT and start or open a conversation with your dot. Ask it to help you add a card to Wallet. If the option appears, you have access. If not, the gradual rollout has not reached your account yet. Check again later.

You can also open Settings on the mobile app, select Wallet, and look for the Add Card option. Both paths lead to the same secure form.

Do not type your card number into the chat. The form is separate and secure.

## Step 2: Add your card

In the secure form, enter the card number, expiration date, and security code. For American Express, use the four-digit code on the front of the card. Review the ChatGPT Wallet terms and privacy notice, then select Add card.

Your bank may require a verification step. Complete it. Wait until you see confirmation that the card is added. If you are unsure, ask your dot to show your saved cards before trying again.

You add the card once. Later purchases do not require re-entering the full details.

## Step 3: Ask your dot to shop

Tell your dot what you need. Examples from OpenAI include finding a new sweater or booking a hotel for a trip. The dot researches options, compares them, and prepares a checkout on the merchant site using details such as your name and delivery address.

It works through its own cloud computer and browser, plus any plugins you have connected. You can open the dot's computer to inspect progress at any time.

When the dot is ready to pay, it presents the purchase for review.

![Woman using a credit card and smartphone for online shopping](https://images.unsplash.com/photo-1758876201966-a680772a41ef?auto=format&fit=crop&w=800&q=80)

## Step 4: Review and approve the purchase

Before any charge occurs, you see the merchant, the items, the total, and the selected card. Check shipping, taxes, and any subscription terms. Approve only if everything matches what you expected.

Approval requires a security check on a supported device, such as Face ID or a fingerprint scan. Each approval creates a clear record of what you authorized the agent to buy.

After you approve, the payment network issues a payment token. It contains its own card number, security code, and expiration date. The merchant charges that token. Neither the merchant nor the agent receives your actual card details. OpenAI receives only limited information such as the last four digits.

The charge appears on your statement under your real card. Rewards and dispute rights remain those of your card issuer and network.

## Watch a short explanation of the payment flow

This video covers how the token works and why the agent never sees your real card number.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/ULkypS17iLY"
    title="ChatGPT can now spend your money. Here's how it pays"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for safer use

Review every purchase carefully. The agent prepares the cart, but you decide. Start with low-value items while you learn the flow.

Some merchants may block agent traffic or flag the transaction. OpenAI is working with payment and risk providers so legitimate agent purchases clear more reliably. If a purchase fails, cancel or complete it directly with the merchant.

Keep the card saved only if you plan to use the feature. You can manage saved cards from the Wallet section in Settings.

Wallet does not create a stored balance or change your relationship with your card issuer. You still deal with the bank for rewards, disputes, and statements.

## Conclusion

ChatGPT Wallet turns research into a completed purchase while keeping your real card number away from the agent and the merchant. Add an eligible card once, ask your dot to find what you need, review the details, and approve with a biometric check. The payment network handles the rest with a token.

The feature is still early and limited to US Pro users. Check official sources for any expansion beyond the initial rollout.

## Sources

- [Introducing ChatGPT Wallet](https://openai.com/index/introducing-chatgpt-wallet/) — OpenAI, 13 November 2026
- [Making purchases with ChatGPT Wallet](https://help.openai.com/en/articles/20001654-making-purchases-with-chatgpt-wallet) — OpenAI Help Center
- [ChatGPT Wallet terms](https://openai.com/policies/chatgpt-wallet-terms/) — OpenAI, effective 12 November 2026
- [Introducing dots](https://openai.com/index/introducing-dots/) — OpenAI, 29 September 2026
