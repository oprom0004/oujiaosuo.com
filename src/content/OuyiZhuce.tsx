'use client';
import React from 'react';
import SEOPage from '../components/SEOPage';
import { UserPlus, CheckCircle2, ShieldCheck, Mail, Smartphone, ArrowRight } from 'lucide-react';
import { useGateway } from '@/src/features/DownloadGateway/GatewayContext';
import content from './site-content.json';

const c = content.zhucePage;

export default function OuyiZhuce() {
    const { openGateway } = useGateway();
    return (
        <SEOPage
            title={c.title}
            breadcrumbs={[]}
            subtitle={c.subtitle}
            icon={<UserPlus size={48} className="text-blue-600" />}
            content={
                <>
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">{c.sectionTitle}</h2>
                        <p>{c.intro}</p>
                    </section>

                    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-10 rounded-3xl mb-12 text-center">
                        <h3 className="text-2xl font-bold mb-4">{c.ctaSectionTitle}</h3>
                        <p className="mb-8 text-blue-100">{c.ctaSectionDesc}</p>
                        <button
                            onClick={openGateway}
                            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-xl cursor-pointer"
                        >
                            <span>{c.cta}</span>
                            <ArrowRight size={20} />
                        </button>
                        <p className="mt-6 text-sm text-blue-200">{c.ctaNote}</p>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">注册详细步骤（图文指南）</h2>
                        <div className="space-y-10">
                            {c.steps.map((step, idx) => (
                                <div key={idx} className="flex items-start space-x-6">
                                    <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">{idx + 1}</div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                                        <p className="text-gray-600">{step.desc}</p>
                                        {idx === 0 && (
                                            <div className="flex space-x-4 mt-4">
                                                <div className="flex items-center space-x-1 text-sm text-gray-500"><Smartphone size={16} /> <span>手机号</span></div>
                                                <div className="flex items-center space-x-1 text-sm text-gray-500"><Mail size={16} /> <span>邮箱</span></div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100 mb-12">
                        <h3 className="text-xl font-bold mb-6 flex items-center">
                            <ShieldCheck className="text-blue-600 mr-2" size={24} />
                            {c.securityTitle}
                        </h3>
                        <ul className="space-y-4">
                            {c.securityTips.map((tip, idx) => (
                                <li key={idx} className="flex items-start space-x-3">
                                    <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={18} />
                                    <span className="text-sm">{tip}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-6">{c.bonusTitle}</h2>
                        <p>{c.bonusDesc}</p>
                    </section>
                </>
            }
        />
    );
}
