import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download, Globe, Monitor, Smartphone, ShieldCheck, HelpCircle, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: '首页', path: '/' },
    { name: '网页版', path: '/ouyi-web' },
    { name: '电脑版', path: '/ouyi-pc' },
    { name: 'APP下载', path: '/ouyi-app' },
    { name: '下载教程', path: '/ouyi-xiazai' },
    { name: '注册教程', path: '/ouyi-zhuce' },
    { name: '官方通道', path: '/ouyi-offcial' },
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <div className="text-2xl font-bold text-white flex items-center">
                  <span className="text-brand-blue mr-1">●</span>欧交所
                </div>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-brand-blue ${
                    location.pathname === item.path ? 'text-brand-blue' : 'text-brand-gray'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/ouyi-zhuce"
                className="sleek-btn-primary text-sm"
              >
                立即注册
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-brand-gray hover:text-white focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-brand-bg border-t border-white/10 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-3 text-base font-medium text-brand-gray hover:bg-white/5 hover:text-brand-blue rounded-md"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <Link
                    to="/ouyi-zhuce"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-center sleek-btn-primary"
                  >
                    立即注册
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 border-t border-white/10 border-dotted">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <div className="text-sm font-bold text-white mb-4">关于欧交所</div>
            <p className="text-xs text-brand-gray leading-relaxed max-w-md">
              欧交所（oujiaosuo.com）是领先的数字资产信息服务平台，致力于为全球用户提供安全、稳定、及时的欧意OKX下载及访问指引。我们通过多节点加速技术，确保用户在任何环境下都能快速获取官方最新版程序。
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-[10px] font-bold text-white/40 uppercase mb-3 tracking-widest">快速导航</div>
              <ul className="space-y-2">
                <li><Link to="/ouyi-app" className="text-xs text-brand-gray hover:text-brand-blue">APP下载</Link></li>
                <li><Link to="/ouyi-pc" className="text-xs text-brand-gray hover:text-brand-blue">电脑版下载</Link></li>
                <li><Link to="/ouyi-zhuce" className="text-xs text-brand-gray hover:text-brand-blue">注册教程</Link></li>
              </ul>
            </div>
            <div>
              <div className="text-[10px] font-bold text-white/40 uppercase mb-3 tracking-widest">官方支持</div>
              <ul className="space-y-2">
                <li><Link to="/ouyi-offcial" className="text-xs text-brand-gray hover:text-brand-blue">官方入口</Link></li>
                <li><Link to="/ouyi-web" className="text-xs text-brand-gray hover:text-brand-blue">网页直连</Link></li>
                <li><Link to="/ouyi-xiazai" className="text-xs text-brand-gray hover:text-brand-blue">下载指南</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* SEO Brand Index */}
        <div className="py-6 border-t border-white/5 mb-6">
          <div className="text-[10px] text-white/30 mb-3">品牌索引 / 常用搜索：</div>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {[
              "欧易OKX", "欧意下载", "OKX官网", "欧易交易所", "易欧APP", "o易入口", 
              "欧亿官网", "OKEx下载", "殴易注册", "欧意电脑版", "OKX手机版", "欧交所直连"
            ].map(term => (
              <span key={term} className="text-[10px] text-brand-gray/40 hover:text-brand-blue cursor-default transition-colors">
                {term}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-brand-footer pt-6 border-t border-white/5">
          <div className="mb-4 md:mb-0">
            © 2026 oujiaosuo.com | 欧意下载中心 24H 自动更新
          </div>
          <div className="flex space-x-6">
            <span>服务器状态：正常运行</span>
            <span>当前节点：亚太加速</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
