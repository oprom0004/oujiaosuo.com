'use client';

import Layout from '@/src/components/Layout';

export default function SiteLayout({ children }: { children: import('react').ReactNode }) {
  return <Layout>{children}</Layout>;
}

