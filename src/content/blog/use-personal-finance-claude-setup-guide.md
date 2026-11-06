---
title: "How to Connect Banks and Use Personal Finance in Claude"
description: "Connect US bank accounts to Claude Personal Finance with Plaid. Read-only access for spending insights, charts, and bill tracking on Pro, Max, and Ultra."
pubDate: 2026-11-06T14:00:00
heroImage: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to"]
noindex: false
---

Anthropic launched Personal Finance in Claude on November 5, 2026. The beta lets eligible users connect bank and credit card accounts so Claude can answer questions about real balances and transactions in plain language.

Access stays read-only. Claude cannot move, manage, or invest money. The feature has no ads or sponsored recommendations.

It is rolling out gradually to Pro, Max, and Ultra subscribers in the United States. Free, Team, and Enterprise plans do not have access yet. Availability covers the web, Claude Desktop, iOS, and Android apps.

![Person reviewing financial documents with a calculator and laptop](https://images.unsplash.com/photo-1753955900083-b62ee8d97805?auto=format&fit=crop&w=800&q=80)

## What Personal Finance in Claude Does

Personal Finance lives in its own hub. Once accounts are linked, Claude sorts spending by category, flags unusual charges, and builds charts or calendars from the data you choose.

You can ask questions such as “Where did my money go this month?” or “What bills come out before payday?” Claude adds up the numbers across connected accounts and explains terms it uses. In one Anthropic example, the assistant totaled $4,309.37 for the month, with more than half going to rent and utilities and $1,024.51 to food and drink.

Anthropic says hub conversations are not used to train models. Data outside the hub follows your normal privacy settings. You can unlink accounts at any time.

This approach differs from generic advice. Answers draw from your actual transaction history of up to 24 months. The hub also shows widgets for cash flow, top merchants, subscriptions, and short insights.

## Set Up Personal Finance and Link Accounts

Open Claude on the web, desktop app, or mobile app. Look for Personal Finance in the side menu. If it is not visible, hover over More.

Choose goals if prompted, or skip them, then continue. Select Link accounts with Plaid. Review the access screen that lists what Claude will see. The screen is titled “Connect Plaid to Claude.”

Plaid opens in a new window or browser tab depending on your device. On iOS it stays inside the app; on Android it uses a browser tab. Sign in to your bank there. Claude never sees your bank password. Select the specific accounts you want to share rather than accepting every option by default.

Return to Claude and wait for the accounts to appear. Transactions can take a few minutes to sync. You can link up to 16 banks. Adding another account at an already-linked bank requires linking that bank again.

Finish the Plaid flow within 10 minutes, then return to Claude promptly. If nothing loads after a day, unlink and try again.

## What Claude Can Access and Answer

For each connected account Claude can read the bank name, account name and type, last four digits, balances, credit limits, and up to 24 months of transactions. Transaction details include amount, date, merchant, category, and the bank’s description.

Claude can build weekly spending charts, calendars of upcoming bills, and custom dashboards. It can spot duplicate charges, unexpected fees, or bills that have increased over time. You can ask whether spending is higher than usual or what an APR has cost you this year.

It is not designed to give investment advice. Anthropic notes that Claude can make mistakes, so verify important figures with your bank and ask which transactions support a number.

For comparison, OpenAI’s similar ChatGPT Finances feature is covered in our [ChatGPT Finances setup guide](/blog/chatgpt-finances-free-go-setup/).

![Calculator and currency notes next to a laptop keyboard](https://images.unsplash.com/photo-1730789701634-5386e7271462?auto=format&fit=crop&w=800&q=80)

## Security and Privacy Controls

Connections run through Plaid, the same service used by many budgeting apps. You authenticate directly with your bank. Claude receives only the approved read-only data. Plaid has connections to more than 12,000 financial institutions in the United States.

Hub chats stay out of model training and are not added to Claude’s shared memory. Unlinking a bank removes all accounts tied to that login. You can also revoke access from Plaid’s own portal or use the Unlink all banks option.

US banks only are supported. Investment, loan, and some card accounts may show balances and limits but not full transaction history in every case. The feature is separate from other Claude connectors.

## Practical Tips for Daily Use

Start with one account and one clear question, such as “How much did I spend on food last month?” Review the sources Claude cites before acting on the answer. Ask for the specific transactions behind any total.

Use the hub for recurring reviews rather than pasting statements into regular chats. Keep the Plaid connection active only for accounts you want analyzed. You can turn the connector on or off for individual conversations from the Connectors menu.

If numbers look off after a day, unlink and reconnect the bank. Sync delays are common right after the first link. Compare spending month to month inside the hub instead of exporting CSVs. Claude can surface patterns you might miss when scanning statements manually.

## Limitations to Know Before You Connect

The feature is US-only and limited to paid consumer plans. It is not available in Claude Duet or for scheduled tasks and Cowork. Team and Enterprise accounts cannot use it. Free users and people outside the United States must wait for a later expansion.

Claude cannot initiate transfers, pay bills, or open new accounts. It will not recommend specific investments. Because this is a beta, the interface and available banks may change. Check the sidebar regularly if the option does not appear on your first visit.

When you delete your Claude account, the linked banks are unlinked automatically after the deletion processes.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/u4DjUO-wO7Y"
    title="How OpenAI Built Finances in ChatGPT with Plaid"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Personal Finance in Claude gives Pro, Max, and Ultra users in the US a read-only way to query their own bank data inside the assistant they already use. Setup takes a few minutes through Plaid, and answers stay tied to the transactions you authorize.

Verify every material number against your bank records. Unlink accounts when you no longer need the connection. For broader AI finance options, see the related ChatGPT Finances guide linked above.

## Sources

- Anthropic, Introducing Personal Finance in Claude, November 5, 2026
- Claude Help Center, Use Personal Finance in Claude
- Plaid, Plaid Powers Financial Insights In Claude
