import React from 'react';
import SEOPage from '../components/SEOPage';
import { ShieldCheck, Zap, Globe, Users, BarChart3, Lock } from 'lucide-react';

export default function OuyiJiaoyisuo() {
  return (
    <SEOPage
      title="欧意交易所简介"
      breadcrumbs={[]}
      subtitle="了解全球领先的加密货币交易平台——欧意OKX，探索其安全体系、产品矩阵与全球生态。"
      icon={<ShieldCheck size={48} className="text-blue-600" />}
      content={
        <>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">什么是欧意交易所（OKX）？</h2>
            <p>
              欧意OKX（原名OKEx）成立于2017年，是一家总部位于塞舌尔的全球领先加密货币交易所。作为区块链行业的先行者，欧意致力于通过去中心化技术重塑全球金融体系，为全球数千万用户提供安全、透明、高效的数字资产服务。
            </p>
            <p>
              欧意不仅是一个交易平台，更是一个涵盖了 Web3 钱包、NFT 市场、DEX（去中心化交易所）以及 OKB 链（OKC）的完整生态系统。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">欧意的核心产品矩阵</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <BarChart3 className="text-blue-600 mb-3" size={24} />
                <h4 className="font-bold mb-2">多元化交易服务</h4>
                <p className="text-gray-600 text-sm">支持币币交易、杠杆交易、交割合约、永续合约及期权交易，满足不同风险偏好的投资者需求。</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <Lock className="text-purple-600 mb-3" size={24} />
                <h4 className="font-bold mb-2">OKX Web3 钱包</h4>
                <p className="text-gray-600 text-sm">最强大的多链钱包之一，支持 80+ 条公链，让您一键接入 DeFi、NFT 和 DApp 世界。</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <Zap className="text-yellow-600 mb-3" size={24} />
                <h4 className="font-bold mb-2">欧意赚币 (Earn)</h4>
                <p className="text-gray-600 text-sm">提供灵活存取、定期锁仓、双币赢等多种理财产品，助您实现数字资产的稳健增值。</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <Globe className="text-green-600 mb-3" size={24} />
                <h4 className="font-bold mb-2">机构级服务</h4>
                <p className="text-gray-600 text-sm">为机构投资者提供定制化的 API 接口、大宗交易服务以及专业的资产托管方案。</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">安全：欧意的头等大事</h2>
            <p>
              欧意深知安全是交易所的基石。多年来，平台投入了海量资源构建了行业领先的安全防御体系：
            </p>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="text-green-600 mt-1" size={18} />
                <span><strong>冷热钱包分离：</strong>95% 以上的用户资产存储在离线冷钱包中，多重签名授权，确保绝对安全。</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="text-green-600 mt-1" size={18} />
                <span><strong>储备金证明 (PoR)：</strong>欧意定期发布储备金证明报告，确保用户资产 1:1 准备，透明可查。</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="text-green-600 mt-1" size={18} />
                <span><strong>风险准备金：</strong>建立了数亿美元的风险准备金，用于应对极端市场波动带来的潜在风险。</span>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">全球影响力与合规化</h2>
            <p>
              欧意在全球范围内积极推进合规化进程，已在迪拜、巴哈马等多个司法管辖区获得相关牌照。同时，欧意也是曼城足球俱乐部和麦克拉伦 F1 车队的官方合作伙伴，品牌影响力遍布全球。
            </p>
            <p>
              作为欧交所（oujiaosuo.com），我们致力于将欧意最优质的服务带给每一位用户，通过提供准确的资讯和安全的下载通道，降低用户进入加密世界的门槛。
            </p>
          </section>

          <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-blue-900 mb-2">准备好开始交易了吗？</h3>
              <p className="text-blue-700">立即注册欧意账号，开启您的数字资产之旅。</p>
            </div>
            <a href="/ouyi-zhuce" className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all">
              立即注册
            </a>
          </div>
        </>
      }
    />
  );
}

function CheckCircle2({ className, size, ...props }: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
