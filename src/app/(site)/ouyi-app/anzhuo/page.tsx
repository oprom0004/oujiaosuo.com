import type { Metadata } from 'next';
import OuyiAppAnzhuo from '@/src/content/OuyiAppAnzhuo';

export const metadata: Metadata = {
    title: '欧意_OKX_殴易安卓版下载入口-欧交所',
    alternates: { canonical: '/ouyi-app/anzhuo' },
};

export default function Page() { return <OuyiAppAnzhuo />; }

