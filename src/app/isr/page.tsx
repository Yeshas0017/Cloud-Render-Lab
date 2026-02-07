'use client';

import React, { useState, useEffect } from 'react';
import {
    Layers,
    RefreshCcw,
    ArrowLeft,
    Globe,
    Terminal,
    BarChart3,
    Zap,
    CheckCircle2,
    Cpu,
    Search,
    BookOpen,
    Timer
} from 'lucide-react';

/**
 * PAGE 3: INCREMENTAL STATIC REGENERATION (ISR)
 * Strategy: "The CloudEdu Portal"
 * Research Context: Hybrid strategy. Static first, then revalidates in the background.
 * Demonstrates: High-performance caching with eventual consistency.
 */
export default function ISRPage() {
    const [countdown, setCountdown] = useState(60);
    const buildTimestamp = "10:00:00 AM"; // Simulated build time

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => (prev <= 1 ? 60 : prev - 1));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Mock Products (Inlined for consistency)
    const products = [
        { id: "1", name: "Quantum Processor X1", category: "Core Unit", price: "€499.00", status: "Stale-While-Revalidate" },
        { id: "2", name: "Neural Link Module", category: "AI Interface", price: "€850.00", status: "Stale-While-Revalidate" },
        { id: "3", name: "Cloud Core G2", category: "Infrastructure", price: "€1,200.00", status: "Stale-While-Revalidate" },
        { id: "4", name: "Edge Sync Hub", category: "Networking", price: "€320.00", status: "Stale-While-Revalidate" }
    ];

    return (
        <div className="min-h-screen bg-[#FDFDFF] text-slate-900 font-sans selection:bg-emerald-100 overflow-x-hidden">
            {/* NAVIGATION */}
            <nav className="sticky top-0 z-50 bg-white border-b-4 border-black">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <a href="/" className="flex items-center gap-3 no-underline text-black group">
                        <div className="w-10 h-10 bg-emerald-500 text-white flex items-center justify-center font-black rounded italic shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:-rotate-6 transition-transform">
                            <Layers size={22} />
                        </div>
                        <div className="hidden sm:block">
                            <span className="font-black text-xl tracking-tighter block leading-none uppercase">CLOUD<span className="text-emerald-500">EDU</span></span>
                            <span className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase italic">Hybrid Lab Portal</span>
                        </div>
                    </a>

                    <div className="flex items-center gap-10">
                        <a href="/" className="text-sm font-black text-gray-400 hover:text-black transition-colors uppercase italic no-underline">Dashboard</a>
                        <a href="/ssg" className="text-sm font-black text-gray-400 hover:text-black transition-colors uppercase italic no-underline">SSG View</a>
                        <a href="/ssr" className="text-sm font-black text-gray-400 hover:text-black transition-colors uppercase italic no-underline">SSR View</a>
                        <a href="/isr" className="text-sm font-black text-emerald-500 border-b-2 border-emerald-500 uppercase italic no-underline">ISR View</a>
                    </div>

                    <button className="p-2 bg-black text-white rounded shadow-[4px_4px_0px_0px_rgba(16,185,129,1)]">
                        <Search size={18} />
                    </button>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-6 py-12">
                <div className="mb-12">
                    <a href="/" className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-black font-black text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] no-underline text-black">
                        <ArrowLeft size={16} /> Exit Portal
                    </a>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Theory Column */}
                    <div className="lg:col-span-5">
                        <div className="bg-emerald-500 text-white inline-block px-3 py-1 text-[10px] font-black uppercase tracking-[0.3em] mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            RESEARCH VARIANT 03
                        </div>
                        <h1 className="text-7xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8 uppercase italic text-black">
                            HYBRID<br />DYNAMIC<br /><span className="text-emerald-500 underline decoration-[12px] decoration-black underline-offset-8">STATIC</span>
                        </h1>
                        <p className="text-2xl font-bold leading-relaxed mb-12 italic opacity-80 border-l-4 border-black pl-6 text-black">
                            "ISR serves static assets instantly from the edge, but triggers a background refresh every 60s. Best of both worlds."
                        </p>

                        {/* Revalidation Timer UI */}
                        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
                            <div className="flex justify-between items-center mb-6">
                                <h4 className="font-black text-xs uppercase tracking-widest text-gray-400">Revalidation Cycle</h4>
                                <RefreshCcw size={20} className="text-emerald-500 animate-spin" />
                            </div>
                            <div className="flex items-end gap-2">
                                <p className="text-7xl font-black italic tracking-tighter text-black">{countdown}</p>
                                <p className="text-xl font-bold mb-2 uppercase text-emerald-500">Seconds</p>
                            </div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase mt-4">Next background refresh attempt in T-minus {countdown}s</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                                <div className="flex items-center gap-2 mb-2 text-emerald-500">
                                    <Zap size={20} />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">TTFB (Cached)</span>
                                </div>
                                <p className="text-5xl font-black italic tracking-tighter text-black">280<span className="text-xl ml-1">MS</span></p>
                            </div>
                            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                                <div className="flex items-center gap-2 mb-2 text-blue-500">
                                    <CheckCircle2 size={20} />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">SEO READY</span>
                                </div>
                                <p className="text-5xl font-black italic tracking-tighter text-black">100%</p>
                            </div>
                        </div>
                    </div>

                    {/* Educational UI Column */}
                    <div className="lg:col-span-7">
                        <div className="bg-white border-4 border-black p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(16,185,129,1)] relative overflow-hidden text-black">
                            <div className="flex justify-between items-center mb-12 border-b-2 border-black pb-8">
                                <div>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">STALE VERSION TIMESTAMP</p>
                                    <p className="text-2xl font-black italic text-emerald-600 font-mono tracking-tighter">{buildTimestamp}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">REVALIDATE TAG</p>
                                    <p className="text-xl font-black italic text-black flex items-center gap-2 justify-end">
                                        <Timer size={18} /> 60_SEC_TTL
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4 mb-12">
                                {products.map(p => (
                                    <div key={p.id} className="p-6 bg-emerald-50/20 border-2 border-black flex justify-between items-center group hover:bg-emerald-50 transition-colors">
                                        <div>
                                            <h4 className="font-black uppercase text-xl group-hover:text-emerald-600 transition-colors">{p.name}</h4>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{p.category}</p>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="text-xl font-black italic">{p.price}</span>
                                            <span className="text-[9px] font-black bg-emerald-500 text-white px-1 mt-1 uppercase tracking-tighter italic">REVALIDATING...</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Technical Simulation Terminal */}
                            <div className="p-8 bg-slate-950 text-emerald-400 rounded-3xl font-mono text-xs border-b-[12px] border-emerald-500 shadow-2xl">
                                <div className="flex items-center gap-2 mb-4 border-b border-emerald-500/20 pb-2">
                                    <Globe size={14} />
                                    <span className="opacity-50 uppercase tracking-widest">Hybrid Regeneration Flow</span>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-white opacity-40">// Background Process Started</p>
                                    <p className="text-emerald-300">1. Client requests page: Serve STALE cache (instant).</p>
                                    <p className="text-emerald-300">2. Timer check: Age &gt; 60s? YES.</p>
                                    <p className="text-white">3. Background: Triggering Cloud Run worker...</p>
                                    <p className="text-white">4. Fetching Gemini AI Summaries...</p>
                                    <p className="text-emerald-500 font-bold">5. SWAP: Cache updated. Next user gets FRESH.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technical Deep Dive */}
                <section className="mt-32 pt-20 border-t-8 border-black grid grid-cols-1 md:grid-cols-2 gap-12 font-sans text-black">
                    <div className="bg-white border-4 border-black p-10 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                        <h3 className="text-4xl font-black tracking-tighter mb-8 uppercase italic flex items-center gap-3">
                            <Terminal size={32} /> The Hybrid Benefit
                        </h3>
                        <div className="space-y-6">
                            {[
                                { t: "Best Performance", d: "Users never wait for a database query. They get the cached version immediately." },
                                { t: "Automated Freshness", d: "No manual build trigger required. The system handles its own updates." },
                                { t: "Server Stability", d: "Reduces CPU load on Cloud Run by serving static files 99% of the time." }
                            ].map((step, idx) => (
                                <div key={idx} className="flex gap-6 items-start group">
                                    <div className="w-12 h-12 bg-black text-white flex-shrink-0 flex items-center justify-center font-black italic text-xl shadow-[4px_4px_0px_0px_rgba(16,185,129,1)]">
                                        0{idx + 1}
                                    </div>
                                    <div>
                                        <h5 className="font-black uppercase text-xs text-emerald-600 mb-1 tracking-widest">{step.t}</h5>
                                        <p className="text-gray-600 text-sm font-bold leading-tight uppercase">{step.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <div className="bg-[#1e1b4b] text-white p-10 rounded-[3rem] shadow-2xl font-mono text-xs border-t-[12px] border-emerald-500 relative group overflow-hidden">
                            <pre className="text-emerald-300 overflow-x-auto relative z-10 leading-loose">
                                {`// src/app/isr/page.tsx
// Incremental Static Regeneration

export const revalidate = 60; // Refresh every min

export default async function Page() {
  const products = await getProducts();
  
  return (
    <Layout>
      {products.map(p => <Item p={p} />)}
    </Layout>
  );
}`}
                            </pre>
                            <div className="absolute top-1/2 right-4 opacity-5 group-hover:opacity-10 transition-opacity text-white">
                                <RefreshCcw size={200} />
                            </div>
                        </div>

                        <div className="bg-emerald-100 border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black text-center">
                            <BookOpen size={40} className="mx-auto mb-4 text-emerald-600" />
                            <h4 className="font-black uppercase italic mb-2">Ideal Use Case</h4>
                            <p className="text-sm font-bold leading-tight uppercase tracking-tight italic">
                                Course Portals (CloudEdu), E-commerce Catalogs, and News Feeds where data updates hourly but speed is non-negotiable.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}