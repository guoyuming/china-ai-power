interface ArticleSeoData {
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  heroImage?: string;
  author?: string;
}

export function generateArticleJsonLd(
  post: ArticleSeoData,
  siteUrl: string,
  pageUrl: string
): string {
  const image = post.heroImage
    ? post.heroImage.startsWith('http')
      ? post.heroImage
      : `${siteUrl}${post.heroImage}`
    : undefined;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    ...(image && { image }),
    datePublished: post.pubDate.toISOString(),
    dateModified: (post.updatedDate ?? post.pubDate).toISOString(),
    author: {
      '@type': 'Person',
      name: post.author ?? 'NOICELAND',
    },
    publisher: {
      '@type': 'Organization',
      name: 'NOICELAND',
      url: siteUrl,
    },
    url: pageUrl,
  };

  return JSON.stringify(schema);
}
