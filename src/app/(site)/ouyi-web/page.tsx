import type { Metadata } from 'next';
import OuyiWeb from '@/src/content/OuyiWeb';

export const metadata: Metadata = {
    title: '欧意_OKX_殴易网页版地址入口-欧交所',
    alternates: { canonical: '/ouyi-web' },
};

export default function Page() { return <OuyiWeb />; }

