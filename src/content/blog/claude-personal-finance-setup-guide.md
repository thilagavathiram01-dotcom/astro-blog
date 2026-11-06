---
title: "How to Set Up Claude Personal Finance for Bank Insights"
description: "Link US bank accounts to Claude Personal Finance via Plaid for read-only spending analysis on Pro, Max, and Ultra plans."
pubDate: 2026-11-06T14:00:00
heroImage: "https://images.unsplash.com/photo-1636115798885-68e47c928729?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "ai", "productivity"]
noindex: false
---

Anthropic launched Personal Finance in Claude on November 5, 2026. The beta lets eligible users connect bank and credit card accounts so Claude can answer questions about real balances and transactions in plain language.

Access stays read-only. Claude cannot move, manage, or invest money. The feature runs on Pro, Max, and Ultra plans in the United States only and appears on the web, Claude Desktop, iOS, and Android apps. Free, Team, and Enterprise accounts do not get it.

This guide walks through official setup steps, what data Claude receives, privacy controls, and practical ways to use the hub.

## What Personal Finance Does

Personal Finance adds a dedicated hub in the Claude side menu. Widgets display spending, cash flow, accounts, subscriptions, upcoming bills, and short insights. You can rearrange, edit, or remove them.

You ask questions directly on the page or in regular chats. Claude sorts spending by category, flags duplicate charges or rising bills, and builds charts or calendars as artifacts you can adjust.

Chats inside the hub are not used to train Anthropic models. Conversations outside the hub follow your normal privacy settings. Claude can make mistakes, so verify important numbers against your bank statements.

The tool is not designed for investment advice. Anthropic notes that bigger financial decisions still work best alongside licensed professionals.

![Person reviewing finances with laptop and documents](https://images.unsplash.com/photo-1713946598392-e8cbcf9e232d?auto=format&fit=crop&w=800&q=80)

## Requirements Before You Start

You need a personal Claude account on Pro, Max, or Ultra. The feature rolls out gradually, so it may not appear immediately. Only US banks can be linked through Plaid.

Plaid handles the connection. You sign in to your bank on Plaid’s screen, so Claude never sees your password. You choose which accounts to share. You can link up to 16 banks. Unlinking removes all accounts tied to that bank login.

For investment, loan, and card accounts, Claude reads only balances and credit limits. It does not see holdings, trades, rates, or loan terms.

If you have not already opted out of model training on your account, consider doing so before linking accounts. You can also turn the Plaid connector off for individual chats.

## Step-by-Step Setup

Open Claude on the web, desktop app, or mobile app. Look for Personal Finance in the side menu. If it is missing, hover over More.

Select Get started. Choose goals or skip them, then continue. Select Link accounts with Plaid. Review the access screen that lists what Claude will see. Continue.

Plaid opens in a new window on the web, your default browser on Desktop, inside the app on iOS, or a browser tab on Android. Choose your bank, sign in, and select the accounts to share. Complete the flow within 10 minutes, then return to Claude.

Wait for accounts to appear. Transactions can take a few minutes to sync. Link more banks or select Done.

To add another bank later, click Link another account at the top on web or Desktop, or use the gear icon on mobile. To add an account at an already-linked bank, link that bank again and share every account you want Claude to read.

## What Claude Can Access

For each shared account Claude sees:

- Bank name
- Account name, type, and last four digits
- Current balances and credit limits
- Up to 24 months of transactions with amount, date, merchant, category, and the bank’s description

If your bank places a full account number in an account name or transaction description, Claude may see it there. Balances can lag by a day or two. An account linked through two different logins can appear twice in totals.

Claude reads the data only to answer your questions. It cannot initiate transfers or place orders.

## Privacy Controls and Unlinking

Hub conversations stay out of training and shared memory. You can turn the Plaid connector off or on from the Connectors menu behind the plus button in the message box. On mobile you can set it to Needs approval so Claude asks before each read.

To unlink a bank, open Personal Finance, go to Manage linked accounts (three-dot menu on web/Desktop or gear on mobile), select Unlink, and confirm. Unlinking stops new reads. Previous answers remain in chat history until you delete them. Unlinking your last bank resets the dashboard widgets and setup choices.

You can also revoke access at my.plaid.com. If a bank expires the connection, select Sign in again and use the same login.

![Budget planner and finance tracker documents](https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&w=800&q=80)

## Asking Useful Questions

Start simple: “Where did my money go this month?” Claude totals spending across linked accounts and groups it by category. Follow up with “Is that higher than last month?” or “What bills come out before payday?”

Ask it to spot duplicates, unexpected fees, or subscriptions. Request a weekly spending chart, a calendar of due dates, or a custom dashboard. Claude builds these as artifacts you can keep refining.

In regular chats you can still reference linked accounts unless you disable the connector. Claude asks before publishing an artifact that contains bank data. Shared chat links can include figures from your accounts, so treat them carefully.

For deeper Claude workflows, see how teams access stronger models in Google Antigravity in our [guide to Claude Opus 5.5](/blog/access-claude-opus-5-5-google-antigravity/).

## Practical Tips

Link only the accounts you need. Start with one checking account and one card, then expand. Review the first few answers against your bank app to calibrate trust.

Ask Claude to list the exact transactions behind any total. That makes it easier to catch miscategorized items. Update goals in the hub if your priorities change.

Remember the feature is beta. Behavior and available banks can shift. Anthropic states it does not offer its own credit cards, loans, or savings products and does not show ads or sponsored recommendations.

## Conclusion

Claude Personal Finance gives US Pro, Max, and Ultra users a read-only window into their own accounts inside the chat interface they already use. Setup takes a few minutes through Plaid. The hub and chat answers stay grounded in real balances and up to two years of transactions, while strict controls keep the connection limited and reversible.

Try linking one account and asking a single concrete question. Check the result against your bank, then decide how much further to connect. For official steps and the latest privacy details, use Anthropic’s Help Center article.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/a8PmR-fNQ_0"
    title="How Claude is transforming financial services"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- Anthropic: [Introducing Personal Finance in Claude](https://claude.com/resources/articles/introducing-personal-finance-in-claude)
- Claude Help Center: [Use Personal Finance in Claude](https://support.claude.com/en/articles/18185620-use-personal-finance-in-claude)
- Reuters coverage of the November 5, 2026 rollout
