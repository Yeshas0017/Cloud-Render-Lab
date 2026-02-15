'use client';

import React from 'react';
import { Newspaper, ArrowLeft, Zap, Info, Clock, BarChart3, Terminal, BookOpen, Cpu, ShieldCheck, Globe } from 'lucide-react';

/**
 * RESEARCH DATA (INLINED)
 * Including data directly to resolve module resolution issues in the preview environment.
 */
const mockProducts = [
    { id: "1", name: "Quantum Processor X1", category: "Core Unit", price: "€499.00", description: "High-performance serverless chip designed for rapid data processing.", latencyTarget: "0.2ms", lastUpdated: "08:00:00 AM" },
    { id: "2", name: "Neural Link Module", category: "AI Interface", price: "€850.00", description: "Advanced interface for real-time AI processing and neural network integration.", latencyTarget: "14ms", lastUpdated: "08:00:00 AM" },
    { id: "3", name: "Cloud Core G2", category: "Infrastructure", price: "€1,200.00", description: "Enterprise-grade cloud infrastructure component for scalable serverless deployments.", latencyTarget: "4ms", lastUpdated: "08:00:00 AM" },
    { id: "4", name: "Edge Sync Hub", category: "Networking", price: "€320.00", description: "Low-latency networking hub optimized for edge computing.", latencyTarget: "8ms", lastUpdated: "08:00:00 AM" },
    { id: "5", name: "Vertex AI Accelerator", category: "AI Interface", price: "€950.00", description: "Specialized hardware for accelerating machine learning inference at the edge.", latencyTarget: "12ms", lastUpdated: "08:00:00 AM" },
    { id: "6", name: "Nexus Security Gateway", category: "Networking", price: "€450.00", description: "Zero-trust security gateway with integrated hardware-level encryption.", latencyTarget: "5ms", lastUpdated: "08:00:00 AM" },
    { id: "7", name: "Titan Storage Array", category: "Infrastructure", price: "€2,100.00", description: "Ultra-fast NVMe storage array optimized for massive parallel operations.", latencyTarget: "3ms", lastUpdated: "08:00:00 AM" }
];

export default function SSGPage() {
    return (
        <div className="min-h-screen bg-[#F4F1EA] text-black font-serif selection:bg-black selection:text-white p-6 md:p-12">

            {/* RESEARCH VARIANT BRIEF - TOP LAYER */}
            <section className="max-w-5xl mx-auto mb-12 bg-blue-600 text-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] font-sans">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white text-blue-600 rounded-lg"><BarChart3 size={24} /></div>
                    <div>
                        <h2 className="text-xs font-black uppercase tracking-[0.4em]">Research Variant 01</h2>
                        <p className="text-2xl font-black italic uppercase tracking-tighter">Static Site Generation (SSG)</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4 border-r border-white/20 pr-10 text-white">
                        <p className="text-xl font-bold leading-tight italic">“This page is generated at build time, like printing a newspaper edition before delivery.”</p>
                        <p className="text-sm opacity-80 leading-relaxed font-bold uppercase tracking-widest">Behavior: It calls the AI at build time, stores the result, and serves static HTML. Updates only when you trigger a new build.</p>
                    </div>
                    <div className="space-y-4 text-white">
                        <div className="flex justify-between items-end border-b border-white/20 pb-2">
                            <span className="text-[10px] font-black uppercase tracking-widest">Observed Latency</span>
                            <span className="text-4xl font-black italic">~0.2S</span>
                        </div>
                        <p className="text-sm font-bold italic leading-relaxed">“Ideal for content where AI output does not need to change often, but not suitable for real-time responses.”</p>
                    </div>
                </div>
            </section>

            {/* THE STATIC GAZETTE METAPHOR - BOTTOM LAYER */}
            <div className="max-w-5xl mx-auto border-4 border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] font-sans text-black">
                <header className="p-8 border-b-4 border-black text-center">
                    <div className="flex justify-between items-center mb-6 font-black text-xs uppercase tracking-widest">
                        <span>VOL. 01 // NO. 042</span>
                        <span>BUILD_TIME: 04:00 AM</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-4 text-black uppercase leading-none">THE MORNING EDITION</h1>
                    <p className="font-bold text-sm tracking-[0.4em] uppercase opacity-60 italic">"Pre-rendered at build. Served via global edge."</p>
                </header>

                <main className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-10 border-b-4 lg:border-b-0 lg:border-r-4 border-black bg-[#FAF9F6] font-serif">
                        <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-8 border-b-2 border-black pb-4 font-sans text-black">Latest Headlines</h2>
                        <div className="space-y-12">
                            {mockProducts.slice(0, 4).map(product => (
                                <article key={product.id} className="text-black">
                                    <h3 className="text-3xl font-black leading-none mb-4 uppercase font-sans text-black">{product.name}</h3>
                                    <p className="text-lg leading-relaxed mb-4 italic opacity-80">{product.description}</p>
                                    <div className="flex justify-between text-xs font-black font-sans uppercase">
                                        <span className="bg-black text-white px-2 py-0.5 tracking-widest">{product.price}</span>
                                        <span className="text-blue-600 italic font-black">CACHED_ASSET</span>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                    <div className="p-10 flex flex-col justify-center items-center text-center">
                        <div className="w-full bg-gray-50 border-4 border-black p-8 mb-10 text-black shadow-[8px_8px_0px_0px_rgba(37,99,235,0.1)]">
                            <p className="font-black text-[10px] uppercase tracking-[0.5em] text-gray-400 mb-6 underline decoration-blue-600 decoration-2">TTFB Baseline</p>
                            <p className="text-9xl font-black italic tracking-tighter leading-none mb-2 text-black">0.2<span className="text-3xl ml-2 text-black">S</span></p>
                            <p className="font-black text-xs uppercase tracking-widest text-black flex items-center justify-center gap-2 italic">
                                <Zap size={14} className="text-blue-600" /> Cached Edge retrieval
                            </p>
                        </div>

                        <div className="bg-white border-2 border-black p-6 mb-10 font-sans italic text-sm leading-relaxed text-left relative overflow-hidden group">
                            <Globe size={80} className="absolute -right-4 -bottom-4 opacity-5 group-hover:rotate-12 transition-transform duration-700" />
                            <p className="font-black uppercase text-[10px] tracking-widest text-blue-600 mb-2 underline italic decoration-black">Scientific Trade-off</p>
                            <p className="relative z-10 font-bold">Static delivery ensures high resilience and speed, but sacrifices the ability to incorporate user-specific or real-time context within the AI summary.</p>
                        </div>

                        <a href="/" className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white font-sans font-black uppercase italic tracking-widest hover:translate-x-1 hover:translate-y-1 shadow-[6px_6px_0px_0px_rgba(37,99,235,1)] transition-all no-underline">
                            <ArrowLeft size={20} /> Return to Dashboard
                        </a>
                    </div>
                </main>
            </div>
        </div>
    );
}