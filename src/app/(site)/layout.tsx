'use client';

import Layout from '@/src/components/Layout';
import MobileStickyFooter from '@/src/components/MobileStickyFooter';
import { GatewayProvider, GatewayTrigger } from '@/src/features/DownloadGateway/GatewayContext';

export default function SiteLayout({ children }: { children: import('react').ReactNode }) {
  return (
    <GatewayProvider>
      <Layout>{children}</Layout>
      <MobileStickyFooter>
        <GatewayTrigger className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg flex items-center justify-center transition-colors shadow-lg">
          访问 OKX 官网
        </GatewayTrigger>
      </MobileStickyFooter>
    </GatewayProvider>
  );
}
