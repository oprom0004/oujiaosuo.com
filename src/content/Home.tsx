'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useGateway } from '@/src/features/DownloadGateway/GatewayContext';
import content from './site-content.json';

const c = content.homepage;

export default function Home() {
    const [today, setToday] = useState('');
    const { openGateway } = useGateway();

    useEffect(() => {
        setToday(new Date().toISOString().slice(0, 10));
    }, []);

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="text-center mb-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-[42px] font-bold text-white mb-2 tracking-tight">
                        {c.hero.h1}
                    </h1>
                    <p className="text-brand-gray text-lg mb-8">
                        {c.hero.subtitle} · {today || '加载中...'} 更新
                    </p>
                    <div className="flex justify-center">
                        <button
                            onClick={openGateway}
                            className="inline-flex items-center space-x-2 px-8 py-3 bg-brand-blue text-white rounded-full font-bold hover:bg-blue-700 transition-all duration-300 shadow-[0_0_20px_rgba(0,82,255,0.4)] hover:shadow-[0_0_30px_rgba(0,82,255,0.6)] transform hover:-translate-y-0.5 cursor-pointer"
                        >
                            <span>{c.hero.cta}</span>
                            <ExternalLink size={18} />
                        </button>
                    </div>
                </motion.div>
            </section>

            {/* Download Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
                {c.downloadGrid.map((card, idx) => (
                    <Link key={idx} to={card.path} className="sleek-card p-6 text-center group">
                        <div className="text-3xl font-bold text-brand-blue mb-4 italic group-hover:scale-110 transition-transform">
                            {card.icon}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                        <span className="text-xs text-brand-gray">{card.desc}</span>
                    </Link>
                ))}
            </section>

            {/* Main Content Area */}
            <section className="grid lg:grid-cols-2 gap-10 bg-white/[0.02] rounded-2xl p-8 flex-grow">
                {/* SEO Text */}
                <div className="space-y-6">
                    <h2 className="text-base font-bold text-brand-gold uppercase tracking-wider">{c.seoTitle}</h2>
                    <div className="text-sm leading-relaxed text-brand-gray space-y-4">
                        {c.seoText.map((para, idx) => (
                            <p key={idx}>{para}</p>
                        ))}
                    </div>
                </div>

                {/* Quick Links Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {c.quickLinks.map((link, idx) => (
                        <Link key={idx} to={link.path} className="flex items-center p-3 bg-white/[0.03] hover:bg-brand-blue/15 rounded-lg transition-all group">
                            <div className="w-8 h-8 bg-[#1E2329] rounded-md flex items-center justify-center mr-3 text-brand-blue font-bold text-xs">
                                {link.icon}
                            </div>
                            <div className="flex-grow">
                                <div className="text-sm font-medium text-brand-text group-hover:text-brand-blue">{link.title}</div>
                                <div className="text-xs text-brand-gray opacity-60">{link.sub}</div>
                            </div>
                            {'badge' in link && link.badge && (
                                <span className="bg-brand-blue text-white text-xs px-2 py-0.5 rounded font-bold ml-2">
                                    {link.badge}
                                </span>
                            )}
                        </Link>
                    ))}
                </div>
            </section>

            {/* Brand Section */}
            <section className="mt-10 p-8 bg-white/[0.02] rounded-2xl border border-white/5">
                <div className="flex items-center space-x-3 mb-6">
                    <ShieldCheck className="text-brand-blue" size={24} />
                    <h2 className="text-xl font-bold text-white tracking-tight">{c.brandSection.title}</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="text-sm leading-relaxed text-brand-gray space-y-4">
                        <p>{c.brandSection.intro}</p>
                        <p>{c.brandSection.note}</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {c.brandSection.aliases.map((group, idx) => (
                            <div key={idx} className="space-y-2">
                                <div className="text-xs font-bold text-brand-gold uppercase opacity-80">{group.label}</div>
                                <div className="flex flex-wrap gap-1.5">
                                    {group.tags.map(tag => (
                                        <span key={tag} className="px-2 py-0.5 bg-white/5 text-brand-text text-xs rounded border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="mt-10 pt-10 border-t border-white/5">
                <h3 className="text-sm font-bold text-white mb-4">常见问题解答</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    {c.faq.map((faq, idx) => (
                        <div key={idx} className="text-xs">
                            <div className="text-brand-text font-bold mb-1">{faq.q}</div>
                            <div className="text-brand-gray leading-relaxed">{faq.a}</div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
