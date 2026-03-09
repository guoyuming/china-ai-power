interface ArticleSeoData {
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  heroImage?: string;
  tags?: string[];
}

export function generateArticleJsonLd(
  post: ArticleSeoData,
  siteUrl: string,
  pageUrl: string
): string {
  const imageUrl = post.heroImage
    ? post.heroImage.startsWith('http')
      ? post.heroImage
      : `${siteUrl}${post.heroImage}`
    : undefined;

  const image = imageUrl
    ? { '@type': 'ImageObject', url: imageUrl }
    : undefined;

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: post.title,
        item: pageUrl,
      },
    ],
  };

  const article = {
    '@type': 'NewsArticle',
    headline: post.title,
    description: post.description,
    ...(image && { image }),
    datePublished: post.pubDate.toISOString(),
    dateModified: (post.updatedDate ?? post.pubDate).toISOString(),
    author: {
      '@type': 'Organization',
      name: 'China AI Digest',
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'China AI Digest',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.svg`,
        width: 600,
        height: 60,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
    url: pageUrl,
    ...(post.tags && post.tags.length > 0 && { keywords: post.tags.join(', ') }),
  };

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [article, breadcrumb],
  };

  return JSON.stringify(schema);
}

export function generateSiteJsonLd(siteUrl: string): string {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: 'China AI Digest',
        url: siteUrl,
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${siteUrl}/search?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'Organization',
        name: 'China AI Digest',
        url: siteUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}/logo.svg`,
          width: 600,
          height: 60,
        },
        sameAs: [],
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'hello@chinaaidigest.com',
          contactType: 'editorial',
        },
      },
    ],
  };

  return JSON.stringify(schema);
}
