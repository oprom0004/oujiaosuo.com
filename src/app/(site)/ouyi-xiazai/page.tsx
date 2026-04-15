import type { Metadata } from 'next';
import OuyiXiazai from '@/src/content/OuyiXiazai';

export const metadata: Metadata = {
    title: '欧意_OKX_殴易下载教程入口-欧交所',
    alternates: { canonical: '/ouyi-xiazai' },
};

export default function Page() { return <OuyiXiazai />; }

