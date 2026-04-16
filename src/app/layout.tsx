import type { Metadata } from 'next';
import '../index.css';
import siteConfig from '@/src/site.config';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  alternates: {
    canonical: '/',
  },
  title: {
    template: `%s | ${siteConfig.titleSuffix}`,
    default: siteConfig.titleDefault,
  },
  description: siteConfig.description,
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
