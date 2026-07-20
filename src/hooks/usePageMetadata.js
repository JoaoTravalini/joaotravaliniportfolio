import { useEffect } from 'react';

const upsertMetaTag = (selector, attributes) => {
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement('meta');
    document.head.appendChild(tag);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    tag.setAttribute(key, value);
  });
};

const upsertLinkTag = (selector, attributes) => {
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement('link');
    document.head.appendChild(tag);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    tag.setAttribute(key, value);
  });
};

const getPageKey = (pathname) => {
  if (pathname.startsWith('/about')) return 'about';
  if (pathname.startsWith('/projects')) return 'projects';
  if (pathname.startsWith('/contact')) return 'contact';

  return 'home';
};

const usePageMetadata = ({ language, pathname, t }) => {
  useEffect(() => {
    const pageKey = getPageKey(pathname);
    const pageTitle = t.meta.pages[pageKey];
    const pageDescription = t.meta.descriptions[pageKey] || t.meta.description;
    const title = pageKey === 'home' ? t.meta.title : `${pageTitle} | ${t.meta.siteName}`;
    const canonicalPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
    const canonicalUrl = `${window.location.origin}${canonicalPath}`;

    document.title = title;

    upsertMetaTag('meta[name="description"]', {
      name: 'description',
      content: pageDescription,
    });
    upsertMetaTag('meta[name="theme-color"]', {
      name: 'theme-color',
      content: '#f8fafc',
    });
    upsertMetaTag('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    });
    upsertMetaTag('meta[property="og:locale"]', {
      property: 'og:locale',
      content: language === 'en' ? 'en_US' : 'pt_BR',
    });
    upsertMetaTag('meta[property="og:title"]', {
      property: 'og:title',
      content: title,
    });
    upsertMetaTag('meta[property="og:description"]', {
      property: 'og:description',
      content: pageDescription,
    });
    upsertMetaTag('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl,
    });
    upsertMetaTag('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    upsertMetaTag('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: title,
    });
    upsertMetaTag('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: pageDescription,
    });
    upsertLinkTag('link[rel="canonical"]', {
      rel: 'canonical',
      href: canonicalUrl,
    });
  }, [language, pathname, t]);
};

export default usePageMetadata;
