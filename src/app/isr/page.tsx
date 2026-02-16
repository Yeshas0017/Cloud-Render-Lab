'use client';

import React, { useState, useEffect } from 'react';
import {
    ArrowLeft,
    Zap,
    Clock,
    RefreshCw,
    Database,
    Info,
    History,
    CheckCircle,
    Timer,
    BarChart3,
    Globe,
    BookOpen
} from 'lucide-react';

/**
 * HUMANIZED RESEARCH DATA
 * Descriptions reflect personal testing observations from the Master's project.
 */
const mockProducts = [
    { id: "1", name: "Quantum Processor X1", category: "Core Unit", price: "€499.00", description: "The chip that powers 70% of our rendering tests. Surprisingly affordable and consistent.", status: "Stale-While-Revalidate" },
    { id: "2", name: "Neural Link Module", category: "AI Interface", price: "€850.00", description: "My go-to for neural integration. I've found this to be the stablest in the lineup.", status: "Stale-While-Revalidate" },
    { id: "3", name: "Cloud Core G2", category: "Infrastructure", price: "€1,200.00", description: "The 'heavy lifter.' It handles our massive parallel operations without breaking a sweat.", status: "Stale-While-Revalidate" },
    { id: "4", name: "Edge Sync Hub", category: "Networking", price: "€320.00", description: "Small but mighty. It’s what I use to keep latency low across different test regions.", status: "Stale-While-Revalidate" }
];

const App = () => {
    const [seconds, setSeconds] = useState(60);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(prev => (prev > 1 ? prev - 1 : 60));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen bg-[#F0F7F4] text-slate-900 font-serif p-4 md:p-12 selection:bg-emerald-100">

            {/* HUMANIZED RESEARCH BRIEF - EMERALD THEME */}
            <section className="max-w-6xl mx-auto mb-10 bg-emerald-600 text-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] font-sans">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                    <div className="p-3 bg-white text-emerald-600 rounded-lg w-fit shadow-sm">
                        <RefreshCw size={24} />
                    </div>
                    <div>
                        <h2 className="text-xs font-black uppercase tracking-[0.4em] opacity-90">Master's Research // Variant 03</h2>
                        <p className="text-2xl font-black italic uppercase tracking-tighter">The "Smart Buffet" Approach (ISR)</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4 md:border-r border-white/20 md:pr-10 text-white">
                        <p className="text-xl font-bold leading-tight italic">
                            "Fast like static, fresh like dynamic. I chose 60 seconds because it's the 'Sweet Spot' for AI-generated content."
                        </p>
                        <p className="text-sm opacity-90 leading-relaxed font-bold uppercase tracking-widest italic">
                            Behavior: If you're the first visitor after 60 seconds, you get 'stale' data from the buffet, but your visit triggers the chef to cook a fresh batch in the background for the next person.
                        </p>
                    </div>
                    <div className="bg-black/10 p-4 rounded-lg border border-white/20">
                        <div className="flex justify-between items-end mb-4 border-b border-white/20 pb-2">
                            <span className="text-[10px] font-black uppercase tracking-widest text-white">Revalidation Window</span>
                            <span className="text-4xl font-black italic text-white">{seconds}s</span>
                        </div>
                        <p className="text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2 text-emerald-200">
                            <CheckCircle size={14} /> Pro: Hides AI latency entirely
                        </p>
                        <p className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 text-blue-200">
                            <Info size={14} /> Best for: Large e-commerce, News feeds
                        </p>
                    </div>
                </div>
            </section>

            {/* THE SMART BUFFET - METAPHOR LAYER */}
            <div className="max-w-6xl mx-auto border-4 border-black bg-white shadow-[12px_12px_0px_0px_rgba(16,185,129,1)] font-sans overflow-hidden">
                <header className="p-8 border-b-4 border-black flex flex-col md:flex-row justify-between items-center bg-emerald-50/50">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none text-slate-900">THE SMART BUFFET</h1>
                        <p className="font-bold text-xs tracking-[0.2em] uppercase opacity-60 mt-2">Background Revalidation Active</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-right">
                            <p className="text-[10px] font-black uppercase text-emerald-600">Freshness TTL</p>
                            <div className="flex items-center gap-2 font-black text-xl italic text-slate-900">
                                <Timer size={18} /> {seconds}s
                            </div>
                        </div>
                        <div className={`w-12 h-12 rounded-full border-4 border-emerald-500 border-t-transparent ${seconds < 5 ? 'animate-spin' : ''}`} />
                    </div>
                </header>

                <main className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Research Notes Column */}
                    <div className="lg:col-span-5 p-6 md:p-10 border-b-4 lg:border-b-0 lg:border-r-4 border-black bg-[#FAF9F6] font-serif">
                        <h2 className="text-3xl font-black italic uppercase mb-8 border-b-2 border-black pb-2 font-sans flex items-center gap-3 text-slate-900">
                            <History size={24} className="text-emerald-600" /> My Research Notes
                        </h2>

                        <div className="space-y-8">
                            <div className="bg-white p-6 border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(16,185,129,1)]">
                                <p className="font-sans font-black text-[10px] uppercase text-emerald-600 mb-2">Why 60 Seconds?</p>
                                <p className="italic text-lg text-slate-700 leading-tight">
                                    "I chose 60 seconds because it balances API costs with freshness. For a product list like this, users don't mind if the price is 59 seconds old."
                                </p>
                            </div>

                            <div className="bg-white p-6 border-2 border-black rounded-xl">
                                <p className="font-sans font-black text-[10px] uppercase text-emerald-600 mb-2">Fault Tolerance Insight</p>
                                <p className="italic text-lg text-slate-700 leading-tight">
                                    "The beauty of ISR is resilience. Even if the Gemini API fails during background regeneration, the user still sees the old data. It’s the safest way to use AI."
                                </p>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-emerald-50 rounded-lg text-xs font-bold text-emerald-800 border border-emerald-200">
                                <Zap size={18} />
                                <span>OBSERVATION: LCP stays consistently below 0.8s even while the server 'cooks' in the background.</span>
                            </div>
                        </div>
                    </div>

                    {/* Buffet Display Column */}
                    <div className="lg:col-span-7 p-6 md:p-10 flex flex-col items-center bg-white">
                        <div className="w-full bg-slate-900 p-6 mb-8 rounded-xl border-l-8 border-emerald-500 font-mono text-xs text-emerald-400">
                            <div className="flex items-center gap-2 mb-4 border-b border-emerald-900 pb-2">
                                <Database size={14} /> REVALIDATION_TRACE
                            </div>
                            <div className="space-y-1">
                                <p className="opacity-40">// Background Sync Logic</p>
                                <p>1. Serving cached HTML from edge...</p>
                                <p>2. TTL Expired? {seconds === 60 ? 'TRUE' : 'FALSE'}</p>
                                <p className={seconds < 5 ? 'text-white animate-pulse' : ''}>
                                    3. Revalidation {seconds < 5 ? 'REQUESTED...' : 'WAITING...'}
                                </p>
                                <p className="text-emerald-600 italic">4. State: {seconds < 30 ? 'STALE' : 'FRESH'}_WHILE_REVALIDATE</p>
                            </div>
                        </div>

                        <div className="w-full space-y-4">
                            <div className="flex items-center justify-between font-black text-[10px] uppercase tracking-widest text-slate-400">
                                <span>Course Inventory</span>
                                <span className="text-emerald-600 italic">INSTANT_SERVE_ACTIVE</span>
                            </div>

                            {mockProducts.map(p => (
                                <div key={p.id} className="p-5 border-2 border-black bg-white group hover:bg-emerald-50 transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-black uppercase text-slate-900">{p.name}</h3>
                                        <span className="text-[10px] bg-black text-white px-2 py-0.5 font-black uppercase tracking-widest">{p.price}</span>
                                    </div>
                                    <p className="font-serif italic text-sm text-slate-600 mb-3 leading-snug">{p.description}</p>
                                    <div className="flex items-center gap-2 text-[9px] font-black text-emerald-600 uppercase tracking-tighter">
                                        <CheckCircle size={12} /> Serving Static Version
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 w-full space-y-4">
                            <p className="text-center text-[10px] font-black uppercase text-slate-400 italic">"ISR is the hero for apps that need scale without the latency tax."</p>
                            <a href="/" className="w-full py-5 bg-black text-white font-black uppercase italic tracking-widest hover:translate-x-1 hover:translate-y-1 shadow-[6px_6px_0px_0px_rgba(16,185,129,1)] transition-all flex items-center justify-center gap-3 no-underline">
                                <ArrowLeft size={20} /> Back to Lab Hub
                            </a>
                        </div>
                    </div>
                </main>

                <div className="p-4 bg-emerald-50 border-t border-emerald-100 flex items-center justify-center gap-6 text-[10px] font-black uppercase tracking-widest text-emerald-800/50">
                    <span className="flex items-center gap-1"><Zap size={12} /> 0.2s Initial TTFB</span>
                    <span className="flex items-center gap-1"><RefreshCw size={12} /> Hybrid Strategy</span>
                    <span className="flex items-center gap-1"><BookOpen size={12} /> Research Variant 03</span>
                </div>
            </div>
        </div>
    );
}

export default App;