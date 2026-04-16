'use client';
import React from 'react';
import SEOPage from '../components/SEOPage';
import { ShieldCheck, ExternalLink, Globe, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useGateway } from '@/src/features/DownloadGateway/GatewayContext';
import content from './site-content.json';

const c = content.officialPage;
const colorMap: Record<string, string> = {
    black: 'bg-black hover:bg-gray-800',
    green: 'bg-green-600 hover:bg-green-700',
    purple: 'bg-purple-600 hover:bg-purple-700',
};
const iconColorMap: Record<string, string> = {
    black: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
};

export default function OuyiOfficial() {
    const { openGateway } = useGateway();
    return (
        <SEOPage
            title={c.title}
            breadcrumbs={[]}
            subtitle={c.subtitle}
            icon={<ShieldCheck size={48} className="text-blue-600" />}
            content={
                <>
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">{c.sectionTitle}</h2>
                        <p>{c.intro1}</p>
                        <p className="mt-4">{c.intro2}</p>
                    </section>

                    <div className="space-y-6 mb-12">
                        {c.channels.map((ch, idx) => (
                            <div key={idx} className="p-8 bg-white border border-gray-200 rounded-3xl shadow-sm flex flex-col md:flex-row items-center justify-between">
                                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                                    <div className={`p-3 rounded-2xl ${iconColorMap[ch.color]}`}><Globe size={24} /></div>
                                    <div>
                                        <h4 className="font-bold">{ch.name}</h4>
                                        <p className="text-xs text-gray-500">{ch.note}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={openGateway}
                                    className={`${colorMap[ch.color]} text-white px-8 py-3 rounded-full font-bold transition-all flex items-center space-x-2 cursor-pointer`}
                                >
                                    <span>{ch.cta}</span>
                                    <ExternalLink size={16} />
                                </button>
                            </div>
                        ))}
                    </div>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">{c.verifyTitle}</h2>
                        <div className="bg-yellow-50 border border-yellow-100 p-8 rounded-2xl">
                            <div className="flex items-center space-x-2 text-yellow-900 font-bold mb-4">
                                <AlertCircle size={20} />
                                <span>警惕钓鱼网站</span>
                            </div>
                            <ul className="space-y-2 text-yellow-800 text-sm">
                                {c.verifyTips.map((tip, idx) => (
                                    <li key={idx} className="flex items-start space-x-2">
                                        <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" />
                                        <span>{tip}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">{c.optimizeTitle}</h2>
                        <ul className="list-disc pl-6 space-y-3">
                            {c.optimizeTips.map((tip, idx) => (
                                <li key={idx}>{tip}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <h3 className="text-xl font-bold mb-4">免责声明</h3>
                        <p className="text-gray-500 text-xs leading-relaxed">{c.disclaimer}</p>
                    </section>
                </>
            }
        />
    );
}
