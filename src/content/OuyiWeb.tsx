'use client';
import React from 'react';
import SEOPage from '../components/SEOPage';
import { Globe, ExternalLink, ShieldCheck, Zap } from 'lucide-react';
import { useGateway } from '@/src/features/DownloadGateway/GatewayContext';
import content from './site-content.json';

const c = content.webPage;

export default function OuyiWeb() {
    const { openGateway } = useGateway();
    return (
        <SEOPage
            title={c.title}
            breadcrumbs={[]}
            subtitle={c.subtitle}
            icon={<Globe size={48} className="text-green-600" />}
            content={
                <>
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">{c.sectionTitle}</h2>
                        <p>{c.intro1}</p>
                        <p className="mt-4">{c.intro2}</p>
                    </section>

                    <div className="bg-blue-600 text-white p-10 rounded-3xl mb-12 text-center">
                        <h3 className="text-2xl font-bold mb-4">{c.ctaSectionTitle}</h3>
                        <p className="mb-8 text-blue-100">{c.ctaSectionDesc}</p>
                        <button
                            onClick={openGateway}
                            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all cursor-pointer"
                        >
                            <span>{c.cta}</span>
                            <ExternalLink size={20} />
                        </button>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">网页版核心优势</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {c.features.map((f, idx) => (
                                <div key={idx} className="flex items-start space-x-4">
                                    <div className={`p-3 rounded-xl ${idx === 0 ? 'bg-green-50' : 'bg-blue-50'}`}>
                                        {idx === 0 ? <ShieldCheck className="text-green-600" size={24} /> : <Zap className="text-blue-600" size={24} />}
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-2">{f.title}</h4>
                                        <p className="text-gray-600 text-sm">{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">{c.safetyTitle}</h2>
                        <ul className="list-decimal pl-6 space-y-4">
                            {c.safetyTips.map((tip, idx) => (
                                <li key={idx}>{tip}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <h3 className="text-xl font-bold mb-4">{c.troubleshootTitle}</h3>
                        <p className="text-gray-600">{c.troubleshootDesc}</p>
                    </section>
                </>
            }
        />
    );
}
