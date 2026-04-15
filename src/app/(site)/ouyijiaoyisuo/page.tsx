import type { Metadata } from 'next';
import OuyiJiaoyisuo from '@/src/content/OuyiJiaoyisuo';

export const metadata: Metadata = {
    title: '欧意_OKX_殴易交易所介绍-欧交所',
    alternates: { canonical: '/ouyijiaoyisuo' },
};

export default function Page() { return <OuyiJiaoyisuo />; }

