import { getCollection } from 'astro:content';

const staticPaths = [
  '/',
  '/about/',
  '/contact/',
  '/privacy/',
  '/search/',
  '/rss.xml',
];

export async function GET(context) {
  const posts = await getCollection('blog');
  const site = context.site?.href?.replace(/\/$/, '') || 'https://news.yumpdf.com';

  const urls = [
    ...staticPaths.map((path) => ({
      loc: `${site}${path}`,
      lastmod: new Date().toISOString(),
    })),
    ...posts.map((post) => ({
      loc: `${site}/blog/${post.slug}/`,
      lastmod: (post.data.updatedDate || post.data.pubDate).toISOString(),
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
