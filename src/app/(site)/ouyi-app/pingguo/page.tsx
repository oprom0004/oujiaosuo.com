import type { Metadata } from 'next';
import OuyiAppPingguo from '@/src/content/OuyiAppPingguo';

export const metadata: Metadata = {
    title: '欧意_OKX_殴易苹果版下载入口-欧交所',
    alternates: { canonical: '/ouyi-app/pingguo' },
};

export default function Page() { return <OuyiAppPingguo />; }

