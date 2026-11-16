---
title: "How to Set Up ChatGPT Wallet for Dots Agent Payments"
description: "Step-by-step guide to add a card and approve purchases with OpenAI ChatGPT Wallet so your dots agent can check out securely."
pubDate: 2026-11-16T10:00:00
heroImage: "https://images.unsplash.com/photo-1758876201966-a680772a41ef?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "chatgpt", "tutorials"]
noindex: false
---

OpenAI launched ChatGPT Wallet on 13 November 2026. It lets your dots agent finish online purchases on your behalf without ever seeing your real card number. You review every order and approve it with Face ID, Touch ID, or a fingerprint. The card network then issues a one-time payment token for checkout.

This guide shows exactly how to set it up and use it. Wallet is rolling out gradually to ChatGPT Pro subscribers in the United States who are 18 or older and hold an eligible US-issued credit card. It works only inside conversations with a dot, not in regular Chat, Work, or standalone Codex threads.

## What ChatGPT Wallet Does

ChatGPT Wallet stores an eligible credit card securely. When your dot finds something to buy and fills the cart, it asks you to review the merchant, items, total, selected card, and any shipping or recurring terms. After you approve with a biometric check, the payment network creates a payment token—a substitute card number, security code, and expiration date. The merchant charges that token. Your actual card details never reach the agent or the store.

You keep your existing card rewards and the usual protections for eligible disputes. OpenAI receives only limited details such as the last four digits, network, and issuer. The feature was built with American Express, Mastercard, and Visa.

Over time OpenAI expects users to set spending limits, categories, or time windows so agents can complete some purchases with pre-approval. That is not available yet. Every purchase still needs an explicit biometric approval today.

![Person holding a smartphone and credit card for online payment](https://images.unsplash.com/photo-1726066012618-f3b5fc6f6593?auto=format&fit=crop&w=800&q=80)

## Who Can Use It Right Now

Eligibility is narrow at launch:

- ChatGPT Pro subscription
- Age 18 or older
- Resident of the United States with a US billing address
- Eligible US-issued American Express, Chase, Mastercard, or Visa credit card
- Primary cardholder for Chase cards (not an authorized user)
- Supported device for biometric approval (Face ID, Touch ID, or equivalent)

Debit cards and virtual cards are not supported at launch. Wallet is separate from your ChatGPT subscription payment method and any gift-card balance. Even eligible Pro users may not see the feature yet because the rollout is gradual. Ask your dot whether Wallet is available on your account.

## How to Add a Card

You can add a card in two ways. Both open a secure form. Never paste your full card number, security code, or bank verification codes into a chat message.

### Option 1: Ask your dot

1. Start a conversation with your dot.
2. Say “Help me add a card to Wallet.”
3. Open the secure setup link or request that appears.
4. Enter the card number, expiration date, and security code in the form. For American Express use the four-digit code on the front.
5. Review the ChatGPT Wallet terms and Privacy Notice, then select Add card.
6. Complete any bank verification your issuer requests (code or approval in the bank app).
7. Wait for the “Card added” confirmation.

### Option 2: Use Settings

On mobile, open the left navigation, go to Settings, select Wallet, then Add Card. Follow the same secure form and verification steps.

For Chase cards, install the Chase app, sign in with biometrics, and approve the connection inside the Chase app (or scan a QR code from a computer). Return to Wallet to finish.

If you are unsure the card saved, ask your dot to show your saved cards before trying again.

## How to Complete a Purchase

Once a card is saved:

1. Ask your dot to find or buy something (for example, “Help me find a new sweater” or “Book a hotel for Chicago next weekend”).
2. Let the dot research, compare, and prepare the cart. It may ask for your name, email, phone, or delivery address.
3. When the purchase request appears, review the merchant, items, total, selected card, shipping, and any recurring terms.
4. Select Approve and complete the biometric check. If your current device cannot do biometrics, follow the link or QR code to a signed-in phone.
5. Your dot continues checkout and reports the result.

“Ready to check out” means your approval succeeded. It does not guarantee the merchant accepted the order. Check the merchant’s confirmation before trying again. If you change your mind before approving, decline the request. To cancel after approval, contact the merchant.

The number used at checkout may be the token, not the number printed on your physical card. That is expected.

![Man reviewing a credit card and smartphone while shopping online](https://images.unsplash.com/photo-1758874573126-cf93a36261e8?auto=format&fit=crop&w=800&q=80)

## Managing Cards and Getting Help

Ask your dot to show saved cards (nickname, last four digits, expiration). You can set a default or remove a card by last four digits. Removing a card does not cancel existing orders or close the card with your bank.

- Order status, returns, or refunds: contact the merchant.
- Declined, pending, or unrecognized charges: contact your card issuer.
- Wallet errors, suspected account access, or a purchase that differs from what you approved: contact OpenAI Support.

Never share full card numbers, security codes, passwords, or verification codes in support messages.

## Practical Tips

- Confirm the merchant and total carefully. Recurring charges follow the terms you agreed to with the merchant.
- Some websites and fraud systems still block agent traffic. If checkout fails, check for an order confirmation before retrying or paying directly.
- Keep your ChatGPT app updated and use a device that supports biometric approval.
- Wallet cards are separate from merchant-saved payment methods. Always check the selected card on the approval screen.
- For developers and businesses, OpenAI published a Commerce Partner Playbook with guidance on Web Bot Auth, fraud signals, and plugins. Related reading on accessing OpenAI models appears in our guide to [Google Cloud Model Garden](/blog/access-openai-models-google-cloud-model-garden/).

## Conclusion

ChatGPT Wallet gives dots a practical way to finish purchases while keeping you in control of every transaction. You add a card once, review the details, and approve with a biometric check. The network token protects your real card details, and you retain rewards and dispute rights. Availability is still limited, so not every eligible Pro user has access yet, and not every store will accept the agent. Start by asking your dot whether Wallet is ready on your account, then follow the secure add-card flow above.

## Sources

- OpenAI, “Introducing ChatGPT Wallet,” 13 November 2026. https://openai.com/index/introducing-chatgpt-wallet/
- OpenAI Help Center, “Making purchases with ChatGPT Wallet.” https://help.openai.com/en/articles/20001654-making-purchases-with-chatgpt-wallet
- OpenAI, ChatGPT Wallet terms and Privacy Notice (effective 12 November 2026).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/i3kK0_Kajf0"
    title="ChatGPT Wallet Explained: OpenAI's AI Agents Can Now Pay For You"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
