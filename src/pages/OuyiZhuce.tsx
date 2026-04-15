import React from 'react';
import SEOPage from '../components/SEOPage';
import { UserPlus, CheckCircle2, ShieldCheck, Mail, Smartphone, ArrowRight } from 'lucide-react';

export default function OuyiZhuce() {
  return (
    <SEOPage
      title="欧意注册教程及入口"
      breadcrumbs={[]}
      subtitle="欧意OKX官方注册入口，新手注册领盲盒，详细图文教程助您快速完成开户。"
      icon={<UserPlus size={48} className="text-blue-600" />}
      content={
        <>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">欧意OKX注册：开启数字资产大门</h2>
            <p>
              注册欧意账号是进入加密货币世界的第一步。作为全球顶尖的交易所，欧意为新用户准备了丰厚的福利。通过欧交所（oujiaosuo.com）提供的官方链接注册，您可以确保获得最高级别的安全保障和手续费优惠。
            </p>
          </section>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-10 rounded-3xl mb-12 text-center">
            <h3 className="text-2xl font-bold mb-4">官方注册直连入口</h3>
            <p className="mb-8 text-blue-100">点击下方按钮，立即跳转至欧意官方注册页面。</p>
            <a
              href="https://www.okx.com/join"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-xl"
            >
              <span>立即注册领红包</span>
              <ArrowRight size={20} />
            </a>
            <p className="mt-6 text-sm text-blue-200">邀请码：已自动填写（享永久手续费返现）</p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">注册详细步骤（图文指南）</h2>
            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">1</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">选择注册方式</h4>
                  <p className="text-gray-600">
                    进入注册页面后，您可以选择使用<strong>手机号</strong>或<strong>邮箱</strong>进行注册。建议使用常用邮箱，以便接收系统通知和安全验证。
                  </p>
                  <div className="flex space-x-4 mt-4">
                    <div className="flex items-center space-x-1 text-sm text-gray-500"><Smartphone size={16} /> <span>手机号</span></div>
                    <div className="flex items-center space-x-1 text-sm text-gray-500"><Mail size={16} /> <span>邮箱</span></div>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">2</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">输入验证码</h4>
                  <p className="text-gray-600">
                    输入手机号或邮箱后，点击“领取验证码”。系统会向您发送一组 6 位数字验证码，请在有效期内输入。
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">3</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">设置登录密码</h4>
                  <p className="text-gray-600">
                    设置一个强密码（包含大小写字母、数字和特殊字符）。请务必妥善保管您的密码，不要泄露给任何人。
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">4</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">完成实名认证 (KYC)</h4>
                  <p className="text-gray-600">
                    注册完成后，为了保障交易安全和提高提现额度，您需要按照提示上传身份证件并进行人脸识别。这是合规交易平台的标准流程。
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100 mb-12">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <ShieldCheck className="text-blue-600 mr-2" size={24} />
              注册安全注意事项
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={18} />
                <span className="text-sm"><strong>官方网址：</strong>注册前请务必确认浏览器地址栏为 okx.com 或其官方指定的跳转域名。</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={18} />
                <span className="text-sm"><strong>双重验证：</strong>注册成功后，请第一时间在“安全中心”绑定谷歌验证器（GA），这是保护账户最有效的手段。</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={18} />
                <span className="text-sm"><strong>防钓鱼码：</strong>建议设置防钓鱼码，这样欧意发给您的每一封邮件都会包含该代码，助您识别真伪。</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">新手注册福利说明</h2>
            <p>
              通过欧交所注册的新用户，在完成首次充值或交易后，即可获得一次开启“盲盒”的机会。盲盒内包含价值不等的数字货币（如 BTC、ETH、OKB 等）或手续费返现卡。此外，您还可以参与新手学院的学习，通过完成简单的任务赚取更多的奖励。
            </p>
          </section>
        </>
      }
    />
  );
}
