---
title: "How to Enable Chrome Enhanced Protection for Gemini Scam Detection"
description: "Turn on Chrome Enhanced Protection to activate Gemini-powered scam detection, suspicious site warnings, and ClickFix protection in October 2026."
pubDate: 2026-10-21T16:00:00
heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["google", "security", "gemini", "how-to", "tutorials"]
noindex: false
---

Google updated Chrome’s Safe Browsing Enhanced Protection mode on October 20, 2026. The change adds a server-side Gemini model for broader scam detection, a new lower-tier warning for suspicious sites, and protection against ClickFix social engineering tricks.

Users with Enhanced Protection already see ten times fewer phishing and scam warnings than those on Standard Protection. The new Gemini checks expand that coverage to fake antivirus pages and fake browser update pages for every Enhanced Protection user, not just those with on-device Gemini Nano support.

![Laptop screen showing a security shield icon over a browser window](https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80)

## What the October 2026 update adds

Enhanced Protection now uses two warning levels for sites:

- **Suspicious sites** trigger a smaller pop-up and a shield chip in the address bar. These pages show deceptive patterns common to phishing, malware, and scam sites but carry a lower-confidence verdict. You can mark the site as safe or go back.
- **Dangerous sites** continue to show the full-page red interstitial. These carry a high-confidence verdict and a high risk of harm.

Gemini scam detection moved from an on-device model (limited to supported devices and mainly tech-support scams) to a more powerful server-side Gemini model. The model reads page text only when high-confidence scam indicators appear. It scores brand impersonation, page intent, and scam likelihood. Safe Browsing combines that analysis with domain reputation and other signals for the final verdict.

Page content sent for analysis is processed ephemerally. Google states it is never logged, retained, or used to train models.

Chrome also now detects ClickFix attacks. These scams trick users into copying and running a malicious command (often PowerShell or cmd.exe) that appears as a “fix.” When an Enhanced Protection user copies a suspicious command, Chrome strips personally identifiable information and checks the payload with Safe Browsing. A warning appears if the command is dangerous.

## How to turn on Enhanced Protection

The new Gemini checks, suspicious-site warnings, and ClickFix detection require Enhanced Protection. The setting is off by default.

### On desktop (Windows, macOS, Linux, ChromeOS)

1. Open Chrome and click the three-dot menu in the top-right corner.
2. Select **Settings**.
3. In the left sidebar, choose **Privacy and security**, then **Security**.
4. Under **Safe Browsing**, select **Enhanced protection**.

You can also type `chrome://settings/security` in the address bar and press Enter.

### On Android

1. Open the Chrome app and tap the three-dot menu.
2. Tap **Settings** → **Privacy and security** → **Safe Browsing**.
3. Choose **Enhanced protection**.

### On iPhone or iPad

1. Open Chrome and tap the three-dot menu (bottom or top depending on iOS version).
2. Tap **Settings** → **Privacy and security** → **Safe Browsing**.
3. Select **Enhanced protection**.

The change applies immediately. No restart is required.

Google also recommends enabling Enhanced Safe Browsing for your Google Account. This extends similar protections to Gmail and other signed-in services. Visit [myaccount.google.com/security](https://myaccount.google.com/security) and look for the Enhanced Safe Browsing section.

![Person reviewing security settings on a laptop at a desk](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## What data is shared

Enhanced Protection sends the URLs you visit and a small sample of page content, download information, extension activity, and limited system data to Google Safe Browsing for real-time checks. When you are signed in, some data is linked to your Google Account to improve protection across services.

Gemini analysis only occurs on pages that already show high-confidence scam indicators. The content is not stored.

If you prefer less data sharing, Standard Protection remains available. It relies mainly on known-threat lists and does not activate the new Gemini scam checks, suspicious-site warnings, or ClickFix detection.

## Tips for stronger protection

- Keep Chrome updated. The new features roll out through normal updates.
- Review extensions regularly. Enhanced Protection also scans them more thoroughly.
- Use a strong password manager and enable two-factor authentication on your Google Account.
- If you see a suspicious-site warning on a site you trust, you can mark it as safe. For red dangerous-site warnings, leave the page.
- Pair Enhanced Protection with other Chrome settings such as “Always use secure connections.” See our guide on [Chrome always use secure connections](/blog/chrome-154-always-use-secure-connections/) for details.

## Watch the setup steps

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/WFw8-4wyPgI"
    title="How to Turn On Enhanced Safe Browsing in Google Chrome (2026)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Turning on Enhanced Protection takes under a minute and unlocks the latest Gemini-powered defenses against evolving web scams. The two-tier warning system reduces full-page interruptions for lower-confidence risks while still blocking known dangerous sites. Combined with ClickFix detection, the mode gives stronger real-time protection without requiring special hardware.

Enable it on every device you use for browsing. The trade-off of additional security data is documented by Google and limited to threat analysis.

## Sources

- [Our latest defenses against evolving web scams – Google Security Blog, October 20, 2026](https://blog.google/security/our-latest-defenses-against-evolving-web-scams/)
- [Choose your Safe Browsing protection level in Chrome – Google Chrome Help](https://support.google.com/chrome/answer/9890866)
- [Manage Enhanced Safe Browsing for your account – Google Account Help](https://support.google.com/accounts/answer/11577602)
