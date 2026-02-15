'use client';

import React, { useState, useEffect } from 'react';
import {
    Coffee,
    ArrowLeft,
    RefreshCcw,
    Layers,
    Timer,
    Zap,
    CheckCircle2,
    Globe,
    BarChart3,
    Info,
    Terminal,
    BookOpen
} from 'lucide-react';

/**
 * RESEARCH DATA (INLINED)
 * Resolved: Inlined data to ensure the simulation runs without module resolution errors.
 */
const mockProducts = [
    { id: "1", name: "Quantum Processor X1", category: "Core Unit", price: "€499.00", status: "Stale-While-Revalidate" },
    { id: "2", name: "Neural Link Module", category: "AI Interface", price: "€850.00", status: "Stale-While-Revalidate" },
    { id: "3", name: "Cloud Core G2", category: "Infrastructure", price: "€1,200.00", status: "Stale-While-Revalidate" },
    { id: "4", name: "Edge Sync Hub", category: "Networking", price: "€320.00", status: "Stale-While-Revalidate" }
];

export default function ISRPage() {
    const [countdown, setCountdown] = useState(60);
    const buildTimestamp = "10:00:00 AM"; // Simulated build time

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => (prev <= 1 ? 60 : prev - 1));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen bg-[#FDFDFF] text-slate-900 font-sans p-6 md:p-12 selection:bg-emerald-100 overflow-x-hidden">

            {/* RESEARCH VARIANT BRIEF - TOP LAYER (Matching SSG/SSR Structure) */}
            <section className="max-w-6xl mx-auto mb-10 bg-emerald-600 text-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] font-sans">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white text-emerald-600 rounded-lg shadow-sm"><BarChart3 size={24} /></div>
                    <div>
                        <h2 className="text-xs font-black uppercase tracking-[0.4em] opacity-90">Research Variant 03</h2>
                        <p className="text-2xl font-black italic uppercase tracking-tighter">Incremental Static Regeneration (ISR)</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4 border-r border-white/20 pr-10 text-white">
                        <p className="text-xl font-bold leading-tight italic">“This page combines static speed with periodic regeneration, like a buffet where trays are refreshed every 60 seconds.”</p>
                        <p className="text-sm opacity-90 leading-relaxed font-bold uppercase tracking-widest italic text-white">Behavior: Page is initially static, but Next.js regenerates it in the background when the revalidate window expires.</p>
                    </div>
                    <div className="space-y-4 text-white">
                        <div className="flex justify-between items-end border-b border-white/20 pb-2">
                            <span className="text-[10px] font-black uppercase tracking-widest">Initial Latency</span>
                            <span className="text-4xl font-black italic">NEAR-INSTANT</span>
                        </div>
                        <p className="text-sm font-bold italic leading-relaxed">“Users enjoy static-speed responses while content is fresh, but may see up to 60 seconds of ‘stale’ output.”</p>
                    </div>
                </div>
            </section>

            {/* THE SMART BUFFET METAPHOR - BOTTOM LAYER */}
            <div className="max-w-6xl mx-auto border-4 border-black shadow-[12px_12px_0px_0px_rgba(16,185,129,1)] bg-white overflow-hidden">
                <div className="p-6 bg-emerald-600 flex justify-between items-center border-b-4 border-black">
                    <div className="flex items-center gap-2 font-black italic uppercase tracking-tighter text-white">
                        <Coffee size={24} /> THE SMART BUFFET
                    </div>
                    <a href="/" className="text-white font-black text-xs uppercase tracking-widest no-underline border-b-2 border-white hover:opacity-80 transition-opacity">Back to Lab</a>
                </div>

                <main className="p-8 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Information Side */}
                        <div className="lg:col-span-6 space-y-10">
                            <div>
                                <h1 className="text-7xl md:text-8xl font-black tracking-tighter italic uppercase leading-none text-slate-900">HYBRID<br /><span className="text-emerald-600 underline decoration-8 underline-offset-8 decoration-black">STATIC</span></h1>
                            </div>

                            <p className="text-2xl font-bold italic leading-tight text-slate-500 border-l-4 border-emerald-600 pl-6">
                                "Serving pre-cooked static assets from the global edge, while the AI 'chef' refreshes the data in the background."
                            </p>

                            {/* Revalidation Cycle Card */}
                            <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group">
                                <RefreshCcw size={100} className="absolute -right-8 -bottom-8 opacity-5 group-hover:rotate-180 transition-transform duration-[2000ms]" />
                                <div className="flex justify-between items-center mb-4 relative z-10">
                                    <h4 className="font-black text-xs uppercase tracking-widest text-emerald-600 italic">Background Revalidation</h4>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                                        <span className="text-[10px] font-black uppercase text-gray-400">Timer_Active</span>
                                    </div>
                                </div>
                                <div className="flex items-end gap-3 relative z-10">
                                    <p className="text-8xl font-black italic tracking-tighter text-slate-900 leading-none">{countdown}</p>
                                    <p className="text-2xl font-bold mb-1 uppercase text-emerald-600">Seconds</p>
                                </div>
                                <p className="text-[10px] font-bold text-gray-400 uppercase mt-4 tracking-widest relative z-10">Next background sync in T-minus {countdown}s</p>
                            </div>

                            <div className="p-8 bg-slate-900 text-emerald-400 rounded-3xl font-mono text-xs border-b-[12px] border-emerald-500 shadow-inner">
                                <div className="flex items-center gap-2 mb-4 border-b border-emerald-500/20 pb-2">
                                    <Globe size={14} />
                                    <span className="opacity-50 uppercase tracking-widest text-emerald-200 italic">Hybrid Lab Execution Flow</span>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-white opacity-40">// Request received</p>
                                    <p className="text-emerald-300">1. Client requests page: Serving cache ({buildTimestamp}).</p>
                                    <p className="text-emerald-300">2. Cache Check: Is version &gt; 60s? {countdown < 5 ? "YES" : "NO"}.</p>
                                    <p className="text-white">3. Background Trigger: Calling Gemini Summarization...</p>
                                    <p className="text-emerald-500 font-bold">4. Hot-Swap: New HTML generated for future requests.</p>
                                </div>
                            </div>
                        </div>

                        {/* Visual Metric Side */}
                        <div className="lg:col-span-6 space-y-8">
                            <div className="bg-slate-50 border-4 border-black p-10 flex flex-col justify-center items-center text-center relative group shadow-[0px_0px_30px_rgba(0,0,0,0.05)]">
                                <div className="absolute top-4 left-4"><Zap size={24} className="text-emerald-500 animate-pulse" /></div>
                                <p className="font-black text-[10px] uppercase tracking-[0.5em] mb-10 text-slate-400 italic">Initial Edge Latency</p>
                                <p className="text-9xl font-black italic tracking-tighter leading-none mb-10 text-slate-900">0.2<span className="text-3xl ml-1 text-emerald-600">S</span></p>

                                <div className="grid grid-cols-2 gap-4 w-full mb-10">
                                    <div className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                        <p className="text-[10px] font-black text-slate-400 uppercase mb-1 tracking-widest">Hydration</p>
                                        <p className="text-xl font-black text-emerald-600 uppercase">INSTANT</p>
                                    </div>
                                    <div className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                        <p className="text-[10px] font-black text-slate-400 uppercase mb-1 tracking-widest">Consistency</p>
                                        <p className="text-xl font-black text-blue-600 italic">EVENTUAL</p>
                                    </div>
                                </div>

                                <div className="p-6 bg-white border-2 border-black font-sans italic text-sm leading-relaxed text-left relative overflow-hidden group text-slate-900">
                                    <BookOpen size={80} className="absolute -right-4 -bottom-4 opacity-5 group-hover:rotate-12 transition-transform duration-700" />
                                    <p className="font-black uppercase text-[10px] tracking-widest text-emerald-600 mb-2 underline italic decoration-black">Scientific Trade-off</p>
                                    <p className="relative z-10 font-bold">ISR hides AI latency entirely by serving stale content first. This is ideal for research portals where 60s of staleness is acceptable for a 10x gain in speed.</p>
                                </div>
                            </div>

                            {/* Educational Portal Items */}
                            <div className="bg-white border-4 border-black p-6 space-y-4 shadow-[8px_8px_0px_0px_rgba(16,185,129,0.1)]">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 italic">Active Course Inventory</p>
                                {mockProducts.map(p => (
                                    <div key={p.id} className="flex justify-between items-center border-b-2 border-slate-100 pb-4">
                                        <div>
                                            <p className="font-black text-sm uppercase text-slate-900">{p.name}</p>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase">{p.category}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-black italic text-emerald-600">{p.price}</p>
                                            <p className="text-[9px] font-bold text-blue-400 uppercase tracking-tighter italic">REVALIDATING...</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>

                <footer className="p-10 flex justify-center border-t border-slate-100 bg-slate-50/50">
                    <a href="/" className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white font-black uppercase italic tracking-widest hover:bg-emerald-600 hover:translate-x-1 hover:-translate-y-1 transition-all shadow-[6px_6px_0px_0px_rgba(16,185,129,1)] no-underline">
                        <ArrowLeft size={20} /> Return to Dashboard
                    </a>
                </footer>
            </div>
        </div>
    );
}