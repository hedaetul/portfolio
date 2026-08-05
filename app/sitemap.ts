import type { MetadataRoute } from 'next';

import { getSiteUrl } from '@/lib/site';

const routes = [
  { path: '', priority: 1 },
  { path: '/about', priority: 0.8 },
  { path: '/resume', priority: 0.9 },
  { path: '/projects', priority: 0.8 },
  { path: '/experience', priority: 0.7 },
  { path: '/skills', priority: 0.7 },
  { path: '/contact', priority: 0.7 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();

  return routes.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority,
  }));
}
