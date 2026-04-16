import { MetadataRoute } from 'next';
import siteConfig from '@/src/site.config';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    return siteConfig.routes.map((route) => ({
        url: `${siteConfig.baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '/' ? 1.0 : 0.8,
    }));
}
