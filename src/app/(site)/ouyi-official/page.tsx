import type { Metadata } from 'next';
import OuyiOfficial from '@/src/content/OuyiOfficial';

export const metadata: Metadata = {
    title: '欧意_OKX_殴易官方地址入口-欧交所',
    alternates: { canonical: '/ouyi-official' },
};

export default function Page() { return <OuyiOfficial />; }

