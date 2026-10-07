---
title: "Add Google Preferred Sources Button: Publisher Guide"
description: "Add the Google Preferred Sources button with two HTML lines so readers can highlight your site in Top Stories and AI Overviews."
pubDate: 2026-10-07T09:00:00
heroImage: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["google", "tutorials", "how-to"]
noindex: false
---

Google started emailing Search Console property owners this week with a count of people who already chose their domain as a Preferred Source. The message, dated from data as of 5 October 2026, also points site owners at the official button. If you publish news, a blog, or any site that appears in the source preferences tool, that button is the shortest path from a reader on your page to a selection in their Google account.

Preferred Sources is a user setting, not a ranking factor you buy. When someone selects your site, Google can show your links more often in Top Stories and mark them with a preferred badge. The same badge can appear in AI Mode and AI Overviews for people who already picked you. Google has said readers are twice as likely to click through to a site after marking it as a Preferred Source.

This guide follows the [publisher documentation](https://developers.google.com/search/docs/appearance/preferred-sources) updated on 18 September 2026. You will check eligibility, add the recommended two-line button, and fall back to a deeplink if your CMS blocks scripts.

## What the feature actually changes

Preferred Sources is available globally for Top Stories in every language where Google Search runs. It can also appear in AI Mode and AI Overviews in locales where those features exist. For the AI surfaces, your site needs to be included in Search generative AI features in Search Console.

Only domain and subdomain sites qualify. `https://www.example.com/` and `https://news.example.com/` can be selected. A subdirectory such as `https://www.example.com/blog` cannot. Readers manage selections in the [source preferences tool](https://www.google.com/preferences/source).

Public totals have grown quickly. Google reported more than 345,000 unique sources selected by late May 2026, then more than 600,000 by the 20 August button update. The October emails are the first per-property counts many owners have seen. They are not a Search Console report yet. The email includes a short survey about whether that report should live in Search Console.

![Laptop on a desk with analytics charts on screen](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80)

## Check eligibility before you embed anything

Open [google.com/preferences/source](https://www.google.com/preferences/source) and search for your domain. If your site appears, you can promote it. If it does not, the button will not create a listing that Google has not already indexed as a source.

Confirm three things in Search Console before you promote the control:

1. The property matches the domain readers will select, not a subdirectory path.
2. The site is eligible for Search generative AI features if you care about the preferred badge in AI Overviews and AI Mode.
3. Fresh pages are indexed. Google has described eligibility as applying to sites that publish content people can follow, not a separate application form.

Placement matters more than design. Put the control next to other follow actions: the article footer, a newsletter block, or a sidebar. Do not hide it only on a settings page nobody visits.

## Add the recommended JavaScript button

Google recommends the standard JavaScript button. Two lines render a localized control. After a reader confirms, they return to the same page instead of being left in preferences.

Add this script, preferably in the `<head>`:

```html
<script async src="https://news.google.com/swg/js/v1/publisher.js"></script>
```

Then place this element where the button should appear:

```html
<div google-add-preferred-source-btn></div>
```

The default theme is light. For a dark page, set the theme attribute:

```html
<div google-add-preferred-source-btn data-theme="dark"></div>
```

The label follows the reader's browser language. Override it with a language code when the page language and the button should match:

```html
<div google-add-preferred-source-btn data-lang="en"></div>
```

Supported codes are listed in Google's preferred-sources language CSV on the same documentation page. You can combine `data-theme` and `data-lang` on one div.

On WordPress, a Custom HTML block in the footer or after the post content is enough if your theme allows scripts. On a static site, add the script once in the shared layout and the div only on article templates. Test in a logged-in Google account. You should see an add confirmation, then land back on the page you started from.

## Use your own button with the advanced API

If the default badge does not match your design system, load the library in manual mode and call it from your own control. Add this in the head so the script does not auto-render badges:

```html
<script async preferred-sources-control="manual" src="https://news.google.com/swg/js/v1/publisher.js"></script>
```

Bind your button with the callback queue:

```html
<script>
  (self.PREFERRED_SOURCE = self.PREFERRED_SOURCE || []).push(
    function(preferredSource) {
      preferredSource.init({
        theme: 'light',
        lang: 'en'
      });
      document.querySelector('#myButton').addEventListener('click', () => {
        preferredSource.addPreferredSource();
      });
    });
</script>
```

Module bundlers can import the same client:

```js
import { preferredSource } from "https://news.google.com/swg/js/v1/publisher.mjs";

preferredSource.init({ theme: 'light', lang: 'en' });
document.querySelector('#myButton').onclick = () => {
  preferredSource.addPreferredSource();
};
```

Google hosts a live demo of the ESM, IIFE, and declarative patterns at the reader-revenue preferred-sources demo. The user flow stays the same: confirm in the overlay, then return to your page.

![Developers reviewing a website layout on a shared screen](https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80)

## Fall back to a deeplink when scripts are blocked

Some newsletter tools and locked-down CMS themes cannot load `publisher.js`. Use a deeplink instead. Replace the domain with yours:

```html
<a href="https://www.google.com/preferences/source?q=example.com">
  Add as Preferred Source
</a>
```

The same URL works on an image. Google provides translated badge files in a zip linked from the publisher guide, or you can design your own graphic as long as the link target stays the preferences URL. Deeplinks also work in social posts and email, where a script button cannot run.

The deeplink does not return the reader automatically the way the JavaScript button does. Mention that they should confirm the selection, then come back. Test the URL in a browser first. It should open your domain inside the source preferences tool, not a generic empty search.

## What to do with the October email

The Search Console email states how many people have chosen the property as a Preferred Source, using figures as of 5 October 2026. Treat that number as a baseline, not a traffic guarantee. Selection counts are not clicks. A site with few selections and strong Top Stories coverage still benefits from a visible button. A site with many selections and no fresh indexed pages will not invent coverage.

Practical checks after you ship the button:

- Click it yourself on mobile and desktop while signed in.
- Confirm the preferred badge appears later in Top Stories for that account on a query your site already ranks for.
- Keep the control on evergreen pages, not only the homepage.
- Track referral changes in Search Console over weeks. Do not expect a same-day spike.
- Reply to Google's survey only if you want per-site reporting inside Search Console. The email does not create that report today.

If you also cover product queries, pair this with how readers already use AI answers. Our guide to [AI Overviews in Gmail search](/blog/gmail-search-ai-overviews/) shows a related place where Google labels summarized results.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Tv7n03rkgaM"
    title="Google Just Gave SEOs a New Ranking Signal (Do This Now) - Preferred Sources"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips that avoid wasted setup

Do not point the deeplink at a path such as `example.com/news`. Google matches domains and subdomains only. Do not load the auto script and the manual script on the same page, or you can get two controls. Do not promise readers a ranking boost. Google's own wording is that selected sources are more likely to appear in Top Stories and can be highlighted in AI answers for that user.

Refresh the button language when you localize a template. A Hindi page with an English-only label still works, but a matching `data-lang` value is clearer. If your consent manager blocks `news.google.com` until the reader accepts analytics cookies, the button will not render. Classify the publisher script as a functional control, or offer the deeplink as a no-script fallback.

## Conclusion

The October 2026 emails make Preferred Sources measurable for the first time at the property level. The implementation Google recommends is still two lines: load `publisher.js`, then drop a `google-add-preferred-source-btn` div beside your other follow actions. Use the manual API when you need your own markup, and the `preferences/source` deeplink when JavaScript is not an option. Confirm the domain appears in the source tool, ship the control, and compare the next email count with the baseline you already have.

## Sources

- Google Search Central, [Guide to Preferred Sources for web publishers](https://developers.google.com/search/docs/appearance/preferred-sources) (updated 18 September 2026)
- Google Blog, [New ways to find favorite sources and original content in AI Search](https://blog.google/products-and-platforms/products/search/original-high-quality-content-search/) (27 May 2026)
- Search Engine Roundtable, [Google email shares number of Preferred Source subscribers](https://www.seroundtable.com/google-preferred-source-subscribers-email-42244.html) (6 October 2026)
- Search Engine Roundtable, [Preferred Source button keeps readers on the site](https://www.seroundtable.com/google-preferred-source-button-update-41912.html) (21 August 2026)
