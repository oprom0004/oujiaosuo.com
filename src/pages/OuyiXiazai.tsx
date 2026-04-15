import React from 'react';
import SEOPage from '../components/SEOPage';
import { Download, Smartphone, Monitor, Globe, HelpCircle, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OuyiXiazai() {
  return (
    <SEOPage
      title="欧意各端下载教程及地址"
      breadcrumbs={[]}
      subtitle="汇总欧意OKX全平台下载方式，提供最详尽的安装指南，助您快速开启交易。"
      icon={<Download size={48} className="text-blue-600" />}
      content={
        <>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">欧意OKX：全平台覆盖</h2>
            <p>
              欧意OKX为用户提供了完善的终端支持，无论您习惯使用手机还是电脑，都能找到适合自己的交易工具。欧交所（oujiaosuo.com）为您整理了各端的下载地址和安装要点。
            </p>
          </section>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
              <Smartphone className="mx-auto mb-4 text-blue-600" size={32} />
              <h4 className="font-bold mb-2">移动端 APP</h4>
              <p className="text-xs text-gray-500 mb-4">安卓/苹果全支持</p>
              <Link to="/ouyi-app" className="text-blue-600 font-bold text-sm hover:underline">去下载 &rarr;</Link>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
              <Monitor className="mx-auto mb-4 text-purple-600" size={32} />
              <h4 className="font-bold mb-2">电脑客户端</h4>
              <p className="text-xs text-gray-500 mb-4">Win/Mac 专业版</p>
              <Link to="/ouyi-pc" className="text-purple-600 font-bold text-sm hover:underline">去下载 &rarr;</Link>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
              <Globe className="mx-auto mb-4 text-green-600" size={32} />
              <h4 className="font-bold mb-2">网页版直连</h4>
              <p className="text-xs text-gray-500 mb-4">浏览器一键访问</p>
              <Link to="/ouyi-web" className="text-green-600 font-bold text-sm hover:underline">去访问 &rarr;</Link>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">下载安装常见问题汇总</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6 py-2">
                <h4 className="font-bold mb-2">1. 苹果手机下载提示“App不可用”？</h4>
                <p className="text-gray-600 text-sm">这是因为您使用的是中国大陆 ID。请参考我们的 <Link to="/ouyi-app/pingguo" className="text-blue-600">苹果下载教程</Link>，更换海外 ID 后再试。</p>
              </div>
              <div className="border-l-4 border-green-600 pl-6 py-2">
                <h4 className="font-bold mb-2">2. 安卓手机安装包下载极慢？</h4>
                <p className="text-gray-600 text-sm">请尝试切换网络（如从 4G/5G 切换到 Wi-Fi），或者使用欧交所提供的备用下载链接。</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-6 py-2">
                <h4 className="font-bold mb-2">3. 电脑版安装后无法打开？</h4>
                <p className="text-gray-600 text-sm">请检查您的系统版本是否符合要求（Win7+ 或 macOS 10.12+），并尝试以管理员身份运行。</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">安全下载三原则</h2>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="text-green-600 mt-1" size={18} />
                <span><strong>认准官方域名：</strong>始终检查下载页面的域名，确保其属于欧意官方或像欧交所这样可信的合作伙伴。</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="text-green-600 mt-1" size={18} />
                <span><strong>拒绝第三方修改版：</strong>切勿下载所谓的“破解版”、“去广告版”或“加速版”，这些版本极易被植入木马。</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="text-green-600 mt-1" size={18} />
                <span><strong>及时更新：</strong>为了修复已知的安全漏洞，请务必在 APP 提示更新时第一时间进行升级。</span>
              </li>
            </ul>
          </section>

          <div className="bg-blue-600 text-white p-10 rounded-3xl text-center">
            <h3 className="text-2xl font-bold mb-4">还没注册账号？</h3>
            <p className="mb-8 opacity-90 text-lg">点击下方按钮，30秒完成注册，开启您的加密货币之旅。</p>
            <Link to="/ouyi-zhuce" className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all">
              立即注册欧意
            </Link>
          </div>
        </>
      }
    />
  );
}
