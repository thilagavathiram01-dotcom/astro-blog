---
title: "Enable Always Use Secure Connections in Chrome 154"
description: "Learn how to enable Always Use Secure Connections in Chrome 154, handle HTTP warnings, and keep public sites safer on desktop and Android."
pubDate: 2026-10-09T15:30:00
heroImage: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["security", "google", "how-to"]
noindex: false
---

Chrome 154 turns on a prompt before the first visit to a public site that cannot load over HTTPS. The setting is called Always Use Secure Connections. Google planned this default for the Chrome 154 release, and the stable release notes list “Ask before HTTP” as on by default.

If an old bookmark, a printer page, or a redirect still uses plain HTTP, Chrome now asks before it continues. You can keep the protection, allow one site, or change the warning scope. This guide covers what the prompt does, how to check it, and what site owners should fix.

## What changed in Chrome 154

Chrome Security said it would enable Always Use Secure Connections, in the public-sites variant, by default with Chrome 154. The [Chrome 154 release notes](https://developer.chrome.com/release-notes/154) confirm that Chrome prompts when a connection is insecure HTTP. Administrators can override that default with the HttpsOnlyMode enterprise policy.

The public-sites variant is the important detail. Chrome warns before insecure public sites. It does not apply the same default warning to private destinations such as local IP addresses, single-label hostnames, and short intranet names. Google chose that split because public HTTP can be hijacked from anywhere on the path, while private HTTP is mainly a risk on the local network.

Chrome already tried HTTPS upgrades for years. The new default makes the fallback visible. If HTTPS is unavailable, Chrome shows a bypassable warning instead of silently loading HTTP. In a Chrome 141 experiment, Google reported that the median user saw fewer than one warning per week, and the 95th percentile saw fewer than three.

Chrome 147 had already enabled the public-sites variant for people who opted in to Enhanced Safe Browsing. Chrome 154 extends the default to users who had not set the control themselves. If you already chose a setting, Chrome keeps that choice.

![Padlock resting on a laptop keyboard, representing an encrypted browser connection](https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80)

## Check the setting on desktop

Use the direct settings URL. Menu labels can differ slightly by version, but the page is stable.

1. Open Chrome on Windows, macOS, Linux, or ChromeOS.
2. Paste `chrome://settings/security` into the address bar and press Enter.
3. Find **Always use secure connections** under Security.
4. Leave it on if you want the Chrome 154 default.
5. If Chrome offers a scope choice, pick **Warn you for insecure public sites** to match the shipped default, or **Warn you for insecure public and private sites** if you also want prompts for local devices and intranet names.

You can also reach the same page from the three-dot menu, then Settings, Privacy and security, Security.

Turn the control off only if a managed workflow depends on many new HTTP sites and you accept the risk. Turning it off does not fix certificate errors. Expired or mismatched HTTPS certificates still show the existing connection warning. Chromium’s adoption guide says those certificate warnings are unchanged.

## Check the setting on Android

Chrome on Android uses the same feature name.

1. Open the Chrome app.
2. Tap the three-dot menu, then Settings.
3. Open Privacy and security.
4. Open Security, or scroll to the security section.
5. Turn on **Always use secure connections** if it is off.
6. Choose public sites only, or public and private sites, if both options appear.

On a work profile, the toggle may be locked. A school or company policy can force the balanced public-sites mode or the stricter mode that also warns on private sites. If the control is greyed out, ask the administrator which HttpsOnlyMode value is set.

After a Chrome update, open `chrome://version` on desktop, or Settings, About Chrome on Android, and confirm you are on 154 or newer. Pair this check with the steps in our [Chrome 155 security update guide](/blog/chrome-155-security-update-android-desktop/) so the browser binary is current as well as the HTTPS setting.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/B0VzyZ0YlL4"
    title="How to Turn On the Always Use Secure Connections Function in Chrome App"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What to do when the warning appears

The interstitial means Chrome could not complete the navigation over HTTPS and believes HTTP might work. It is not the same screen as “Your connection is not private.”

Use this order:

1. Check the address. If you typed a name, try the `https://` version explicitly.
2. If you meant a public site, go back unless you trust that exact host and network.
3. If you must continue, use the continue option on the warning. Chromium says Chrome remembers that decision for 15 days, and a revisit renews the exception. Regular visitors to one HTTP site often see the prompt once, not on every load.
4. Do not continue on a banking, mail, or account page that only offered HTTP. Close the tab and open the site from a known HTTPS bookmark.

Explicit `https://` links do not fall back to HTTP. If that secure URL fails, you get a network error, not the ask-before-HTTP prompt. Sites that send an HSTS header also skip the HTTP fallback.

Private addresses stay quieter on the default. A router page at `192.168.0.1`, a printer hostname with no dots, or an intranet short name should not trigger the public-sites warning. Switch to the public-and-private option if you want those prompts too, for example on café Wi-Fi where a local name could be spoofed.

![Person working on a laptop in a cafe, a common place to meet an insecure public site](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Fix sites that still trip the prompt

Site owners should treat the warning as a migration list, not a browser bug.

- Serve the real pages over HTTPS with a certificate Chrome trusts.
- Redirect HTTP to HTTPS in one hop. Google noted that many remaining HTTP navigations are instant redirects to HTTPS. Those redirects were invisible before, and they can now show a prompt.
- Add HSTS after HTTPS is stable, so Chrome will not fall back to HTTP.
- Avoid mixed-content calls from HTTPS pages to HTTP APIs. Those requests are blocked separately from this setting.
- For local device setup, do not rely on a public HTTP page to reach a LAN address. That pattern hits both this warning and local-network restrictions.

Chromium’s [Ask-before-HTTP adoption guide](https://chromium.googlesource.com/chromium/src/+/main/docs/security/ask-before-http/ask-before-http-adoption-guide.md) is the reference for allowlists and enterprise policy. `force_balanced_enabled` locks the public-sites default. `force_enabled` also warns on private sites. An HTTP allowlist is available when a legacy host cannot move yet.

Test before users report it. Enable Always Use Secure Connections for public sites, then click through bookmarks, email links, and payment return URLs. Watch for a warning on any host you still own.

## Tips that avoid false alarms

Update Chrome before you debug a site. An older build may not match the 154 default, and a newer build may add unrelated security fixes.

Do not confuse this control with Safe Browsing. Enhanced Safe Browsing was the group that received the public-sites default in Chrome 147. The HTTP prompt is a separate switch on the same Security page.

If a site loads over HTTPS and still looks wrong, check the certificate and the clock on the device. The ask-before-HTTP screen will not appear for a successful HTTPS load.

On shared PCs, leave the default on. The Chrome 141 experiment is the best public signal Google has published: most people should see the prompt rarely, because repeat visits are remembered.

![Close-up of a browser window on a desktop monitor during routine web work](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80)

## Conclusion

Always Use Secure Connections in Chrome 154 asks before a new public HTTP visit, tries HTTPS first, and leaves private network names out of the default warning. Check `chrome://settings/security` on desktop and the Security section in Chrome for Android. Continue only for a site you recognise, and move anything you control to HTTPS so the prompt never appears for your users.

## Sources

- Chrome Security, [HTTPS by default](https://blog.google/security/https-by-defau/)
- Chrome for Developers, [Chrome 154 release notes](https://developer.chrome.com/release-notes/154)
- Chromium, [Adapting your website for Chrome’s Ask-before-HTTP warning](https://chromium.googlesource.com/chromium/src/+/main/docs/security/ask-before-http/ask-before-http-adoption-guide.md)
