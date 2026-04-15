import type { Metadata } from 'next';
import '../index.css';

export const metadata: Metadata = {
  title: '欧意下载中心_欧易OKX电脑网页APP下载注册官网地址 - 欧交所',
  description: '欧交所导航站，覆盖欧意OKX电脑端、网页端和APP下载与注册入口。',
};

export default function RootLayout({ children }: { children: import('react').ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

