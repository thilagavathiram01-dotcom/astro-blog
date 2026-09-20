import { getCollection } from 'astro:content';

const staticPaths = [
  { path: '/',          changefreq: 'daily',   priority: '1.0' },
  { path: '/about/',    changefreq: 'monthly',  priority: '0.5' },
  { path: '/contact/',  changefreq: 'monthly',  priority: '0.4' },
  { path: '/privacy/',  changefreq: 'yearly',   priority: '0.3' },
  { path: '/search/',   changefreq: 'daily',    priority: '0.7' },
];

export async function GET(context) {
  const posts = await getCollection('blog');
  const site = context.site?.href?.replace(/\/$/, '') || 'https://news.yumpdf.com';

  // Sort by pubDate descending so newest posts get highest priority
  const sortedPosts = posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  const urls = [
    ...staticPaths.map(({ path, changefreq, priority }) => ({
      loc: `${site}${path}`,
      lastmod: new Date().toISOString(),
      changefreq,
      priority,
    })),
    ...sortedPosts.map((post, i) => ({
      loc: `${site}/blog/${post.slug}/`,
      lastmod: (post.data.updatedDate || post.data.pubDate).toISOString(),
      changefreq: 'weekly',
      // Top 10 newest articles get 0.9, rest get 0.7
      priority: i < 10 ? '0.9' : '0.7',
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
>
${urls
  .map((u) => {
    const newsTag = u.priority === '0.9'
      ? `\n    <news:news>
      <news:publication>
        <news:name>Yum News</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${u.lastmod}</news:publication_date>
      <news:title>${u.loc.split('/blog/')[1]?.replace(/\/$/, '') ?? 'Yum News'}</news:title>
    </news:news>`
      : '';
    return `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>${newsTag}
  </url>`;
  })
  .join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
