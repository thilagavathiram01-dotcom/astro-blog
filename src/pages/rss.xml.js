import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from '../consts';

export async function GET(context) {
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    customData: `
      <language>en-us</language>
      <managingEditor>news@yumpdf.com (${SITE_TITLE})</managingEditor>
      <webMaster>news@yumpdf.com (${SITE_TITLE})</webMaster>
      <copyright>Copyright ${new Date().getFullYear()} ${SITE_TITLE}</copyright>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <image>
        <url>${SITE_URL}/logo.png</url>
        <title>${SITE_TITLE}</title>
        <link>${SITE_URL}</link>
        <width>144</width>
        <height>144</height>
      </image>
    `,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      categories: post.data.tags ?? [],
      customData: post.data.heroImage
        ? `<enclosure url="${post.data.heroImage.startsWith('http') ? post.data.heroImage : `${SITE_URL}${post.data.heroImage}`}" type="image/jpeg" length="0" />`
        : '',
    })),
  });
}
