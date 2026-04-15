import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE_URL = 'https://oujiaosuo.com';

const routes = [
    '/',
    '/ouyi-app',
    '/ouyi-app/anzhuo',
    '/ouyi-app/pingguo',
    '/ouyi-pc',
    '/ouyi-web',
    '/ouyi-zhuce',
    '/ouyi-xiazai',
    '/ouyi-official',
    '/ouyijiaoyisuo',
];

export default function sitemap(): MetadataRoute.Sitemap {
    return routes.map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '/' ? 1.0 : 0.8,
    }));
}
