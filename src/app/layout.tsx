import type { Metadata } from 'next';
import '../index.css';

const BASE_URL = 'https://oujiaosuo.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/',
  },
  title: {
    template: '%s | 欧意下载中心',
    default: '欧意下载中心_OKX欧易电脑网页版_殴易APP网址-欧交所官网',
  },
  description: '欧交所导航站，覆盖欧意OKX电脑端、网页端和APP下载与注册入口。',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: import('react').ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
