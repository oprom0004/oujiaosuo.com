import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: '页面未找到 - 欧意下载中心',
    robots: {
        index: false,
        follow: false,
    },
};

export default function NotFound() {
    return (
        <html lang="zh-CN">
            <body style={{ background: '#0B0E11', color: '#EAECEF', fontFamily: 'sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', margin: 0 }}>
                <div style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: '4rem', fontWeight: 'bold', color: '#0052FF', margin: 0 }}>404</h1>
                    <p style={{ color: '#848E9C', marginTop: '1rem' }}>页面不存在</p>
                    <Link href="/" style={{ display: 'inline-block', marginTop: '1.5rem', padding: '0.75rem 2rem', background: '#0052FF', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>
                        返回首页
                    </Link>
                </div>
            </body>
        </html>
    );
}
