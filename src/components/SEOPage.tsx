import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon, ExternalLink } from 'lucide-react';

interface SEOPageProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
  sidebar?: React.ReactNode;
  breadcrumbs?: { name: string; path: string }[];
}

export default function SEOPage({ title, subtitle, icon, content, sidebar, breadcrumbs }: SEOPageProps) {
  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-xs text-brand-gray/60 mb-6 uppercase tracking-widest">
        <a href="/" className="hover:text-brand-blue transition-colors">首页</a>
        {breadcrumbs?.map((crumb, idx) => (
          <React.Fragment key={idx}>
            <span>/</span>
            <a href={crumb.path} className="hover:text-brand-blue transition-colors">{crumb.name}</a>
          </React.Fragment>
        ))}
        <span>/</span>
        <span className="text-brand-gray">{title}</span>
      </nav>

      {/* Header */}
      <div className="py-12 md:py-16 border-b border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center text-center"
        >
          {icon && <div className="mb-6 p-4 bg-white/5 rounded-2xl border border-white/10">{icon}</div>}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">{title}</h1>
          {subtitle && <p className="text-brand-gray text-lg max-w-2xl mb-8">{subtitle}</p>}
          <div className="flex justify-center">
            <a
              href="https://www.okx.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-3 bg-brand-blue text-white rounded-full font-bold hover:bg-blue-700 transition-all duration-300 shadow-[0_0_20px_rgba(0,82,255,0.4)] hover:shadow-[0_0_30px_rgba(0,82,255,0.6)] transform hover:-translate-y-0.5"
            >
              <span>欧意OKX官方入口</span>
              <ExternalLink size={18} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <article className="prose prose-invert prose-sm max-w-none text-brand-gray leading-relaxed">
              {content}
            </article>
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {sidebar || (
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">快速链接</h3>
                  <ul className="space-y-3">
                    <li><a href="/ouyi-app" className="text-xs text-brand-gray hover:text-brand-blue transition-colors">APP下载中心</a></li>
                    <li><a href="/ouyi-zhuce" className="text-xs text-brand-gray hover:text-brand-blue transition-colors">欧意注册入口</a></li>
                    <li><a href="/ouyi-offcial" className="text-xs text-brand-gray hover:text-brand-blue transition-colors">官方备用网址</a></li>
                    <li><a href="/ouyi-xiazai" className="text-xs text-brand-gray hover:text-brand-blue transition-colors">下载安装教程</a></li>
                  </ul>
                </div>
              )}
              <div className="bg-brand-blue rounded-2xl p-8 overflow-hidden relative group">
                <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-4">立即加入欧意</h3>
                  <p className="text-white/70 text-xs mb-6">全球领先的交易平台，安全稳定，新手注册领红包。</p>
                  <a href="/ouyi-zhuce" className="block w-full text-center bg-white text-brand-blue py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                    立即注册
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
