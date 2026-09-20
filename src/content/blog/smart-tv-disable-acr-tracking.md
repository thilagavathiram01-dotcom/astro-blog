---
title: "How to Turn Off Smart TV ACR and Viewing Data Collection"
description: "Disable Automatic Content Recognition on Samsung, LG, Sony, Vizio, Hisense, and Roku TVs. Find Viewing Information Services, Live Plus, and Viewing Data toggles, plus what ACR actually fingerprints."
pubDate: 2026-09-20T10:15:00
tags: ["privacy", "tutorials", "smart-tv"]
heroImage: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1400&q=80"
---

Smart TVs can identify what is on the screen even when the picture comes from an HDMI stick, a game console, or a cable box. The mechanism is **Automatic Content Recognition (ACR)**. It fingerprints short slices of video or audio and matches them against a catalog of shows, ads, and games. Manufacturers usually hide the switch behind a brand name such as Viewing Information Services or Live Plus.

This week’s news cycle around connected TVs is a reminder to check that switch. Samsung’s own support page says ACR is optional and only runs if you opted into Viewing Information Services. Menu names still differ by year and region, so treat the paths below as a search list, not a single universal screen.

![Living room television on a media console](https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=1400&q=80)

## What ACR does and what it does not do

ACR is closer to a Shazam for the screen than a hidden webcam. Samsung states that it does **not** record or watch the content displayed; it generates signatures so the company can capture viewership information if you opted in. That information, in Samsung’s description, can include programs viewed and time spent, a Personalized Service ID, and an IP address.

Because matching happens at the panel, the source often does not matter. A Netflix app, an antenna channel, a PlayStation over HDMI, or a home video can all produce fingerprints if ACR is on. That is why privacy researchers treat HDMI sources the same as built-in apps.

ACR is used for ads, recommendations, and measurement. Turning it off does not brick the TV. You still get apps and inputs. You may see less personalized ads and some “what’s on this channel” extras may go away.

## Confirm you actually opted in

On many 2024–2026 sets the first-run wizard includes a long privacy screen. If you tapped through it to finish setup, check Settings now instead of assuming the default is off.

Samsung’s U.S. support answer is explicit: you are **not** required to turn ACR on, and you can change the preference later in Settings. After you change it, reboot the TV once so background services reload.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/TT_G24fcoi8" title="Smart TVs: Is Your TV Watching You? — Consumer Reports" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Samsung: Viewing Information Services

Samsung brands ACR as **Viewing Information Services**. Paths move with Tizen versions. Try these in order:

1. Press **Home** on the remote.
2. Open **Settings** (sometimes **All Settings**).
3. Open **General & Privacy** or **Support**, then **Terms & Privacy** / **Privacy Choices**.
4. Turn **Viewing Information Services** off.
5. Turn **Interest-Based Advertising** off if you do not want viewing history used for ads.
6. If you do not use Bixby on the TV, turn **Voice Recognition Services** off as well.

On some older sets the same toggle lived under **Support → Terms & Policy**. Very old firmware used the name **SyncPlus**. If you cannot find the wording, search Settings for “Viewing” or “Privacy Choices.”

Samsung documents the feature on [its U.S. support page for ACR](https://www.samsung.com/us/support/answer/ANS10010616/). Use that page plus the on-TV privacy notices if a software update renamed a menu.

## LG: Live Plus and related agreements

LG’s common ACR-related toggle is **Live Plus**.

1. Press **Settings** (gear) on the remote, or Home then Settings.
2. Go to **General → System → Additional Settings** (sometimes **Advanced Settings**).
3. Turn **Live Plus** off.
4. Open **Support → Privacy & Terms** (wording varies).
5. Decline or turn off **Viewing Information**, **Voice Information**, and **Interest-Based Advertising** if those rows exist.
6. If you see **Do not sell my personal information**, switch it on.

LG webOS menus change by year. If Live Plus is missing, search Settings for “Live Plus” or “viewing information.”

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/vT_yUJCZCNY" title="Smart TV tracking and LG privacy settings explained" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Sony / Google TV: Samba Interactive TV

Many Sony Bravia Google TV models use a third-party ACR service labeled **Samba Interactive TV**.

Typical path:

1. **Settings → System** or **Device Preferences**.
2. Find **Samba Interactive TV** (sometimes under **Initial Setup**).
3. Disable it.
4. Open **Apps**, find **Samba Services Manager** if it is listed, then **Force stop**, **Clear cache**, and disable the app if the system allows it.
5. Under ads or about screens, turn off ads personalization when present.

Google TV itself also has **Usage & diagnostics** style toggles. Those are separate from Samba. Turn off usage sharing if you do not want crash and usage reports leaving the device.

## Vizio, Hisense, TCL / Roku, Fire TV

| Brand | Look for this label | Typical menu |
| --- | --- | --- |
| Vizio | Viewing Data | System → Privacy or Reset & Admin |
| Hisense | Smart TV Experience or Viewing Information Services | Settings → System → Privacy |
| TCL / many Roku TVs | Smart TV Experience | Settings → Privacy |
| Amazon Fire TV | Automatic Content Recognition | Settings → Preferences / Privacy |

On Roku-powered sets, also review **Advertising** and any “use info from other activities” style switches. On Fire TV, ACR is named more plainly than on most OEM skins.

![Person adjusting television settings with a remote](https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=1200&q=80)

## Extra switches that are not ACR but still leak context

- **Interest-based / personalized ads** — ads continue; targeting from viewing history should drop.
- **Voice assistants** — disable always-listening or cloud voice if you only use the remote buttons.
- **HDMI-CEC** (Anynet+, SimpLink, Bravia Sync) — this is device control, not ACR. Leave it on if you want one remote for the soundbar. It is not a substitute for turning ACR off.
- **Chromecast / Google TV usage reports** — in the Google Home app, open the TV → Settings and disable usage and crash reports if you do not want that stream.

Do not confuse “Limit ad tracking” with ACR off. You usually need both.

## A 10-minute audit

1. Search the TV Settings app for: Viewing, Live Plus, Samba, ACR, Advertising, Privacy.
2. Photograph each privacy screen so you can compare after a firmware update.
3. Reboot the TV.
4. Play 10 minutes of a known show from an HDMI source, then check whether any “continue watching” or recommendation row suddenly knows that title. Recommendations can also come from the app account, so this test is only a hint.
5. After a major firmware update, repeat the search. Vendors restore or rename toggles.

If you want a stronger cut, use the TV as a dumb panel: an external streamer you control, Ethernet or Wi-Fi only on that box, and the TV’s smart apps signed out. That is more work than flipping Viewing Information Services, and most households only need the toggle.

## What this guide is not

It is not a claim that any one brand “secretly records conversations” as a microphone product. Microphones for voice search are a different setting. ACR fingerprints the program on screen. Samsung’s public position is that customers can change privacy settings at any time and that ACR is opt-in via Viewing Information Services. Menu labels still obscure that choice, which is why you should look up the brand name instead of searching only for “ACR.”

Firmware paths change. If a step fails, open the manufacturer’s current privacy notice from the TV’s Support menu rather than an old screenshot.

## Conclusion

ACR is a measurement system with a marketing name. On Samsung it is Viewing Information Services. On LG it is Live Plus. On many Sony sets it is Samba Interactive TV. On Vizio it is Viewing Data. Find the label, switch it off, turn off interest-based ads in the same privacy cluster, and re-check after the next software update.

That is enough to stop most screen fingerprinting without giving up HDMI, streaming apps, or a working remote.

## Sources

- [Samsung Smart TV Automatic Content Recognition (ACR) Feature](https://www.samsung.com/us/support/answer/ANS10010616/) — Samsung Support
- [How to turn off smart TV snooping features](https://www.consumerreports.org/electronics/privacy/how-to-turn-off-smart-tv-snooping-features-a4840102036/) — Consumer Reports
- [FTC: Vizio to pay $2.2 million to settle charges it collected viewing histories](https://www.ftc.gov/news-events/news/press-releases/2017/02/vizio-pay-22-million-ftc-state-new-jersey-settle-charges-it-collected-viewing-histories-11-million) — U.S. Federal Trade Commission
- [What is automatic content recognition and how does it work?](https://digilant.com/blog/what-is-automatic-content-recognition/) — industry explainer on fingerprint matching
