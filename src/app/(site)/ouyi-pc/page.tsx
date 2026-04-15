import type { Metadata } from 'next';
import OuyiPc from '@/src/content/OuyiPc';

export const metadata: Metadata = {
    title: '欧意_OKX_殴易电脑版下载入口-欧交所',
    alternates: { canonical: '/ouyi-pc' },
};

export default function Page() { return <OuyiPc />; }

