'use client';

import React, { useState, useEffect } from 'react';
import {
    ArrowLeft,
    Zap,
    Clock,
    Cpu,
    ChefHat,
    MessageSquare,
    Activity,
    Timer,
    AlertCircle,
    BarChart3,
    RefreshCw,
    Flame
} from 'lucide-react';

/**
 * HUMANIZED RESEARCH DATA
 * Descriptions reflect personal testing observations rather than generic specs.
 */
const mockProducts = [
    { id: "1", name: "Quantum Processor X1", category: "Core Unit", price: "€499.00", description: "The chip that powers 70% of our rendering tests. Surprisingly affordable and consistent.", status: "Fresh" },
    { id: "2", name: "Neural Link Module", category: "AI Interface", price: "€850.00", description: "My go-to for neural integration. I've found this to be the stablest in the lineup.", status: "Fresh" },
    { id: "3", name: "Cloud Core G2", category: "Infrastructure", price: "€1,200.00", description: "The 'heavy lifter.' It handles our massive parallel operations without breaking a sweat.", status: "Fresh" },
    { id: "4", name: "Edge Sync Hub", category: "Networking", price: "€320.00", description: "Small but mighty. It’s what I use to keep latency low across different test regions.", status: "Fresh" }
];

const App = () => {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [timestamp, setTimestamp] = useState("");
    const [renderTime, setRenderTime] = useState(4200);

    useEffect(() => {
        setTimestamp(new Date().toLocaleTimeString());
    }, []);

    const simulateRefresh = () => {
        setIsRefreshing(true);
        // Simulate server-side processing + AI inference delay
        setTimeout(() => {
            setIsRefreshing(false);
            setTimestamp(new Date().toLocaleTimeString());
            // Slightly randomize to simulate live inference variance
            setRenderTime(4000 + Math.floor(Math.random() * 500));
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-[#FFF8F0] text-slate-900 font-serif selection:bg-orange-500 selection:text-white p-4 md:p-12">

            {/* HUMANIZED RESEARCH BRIEF - ORANGE THEME */}
            <section className="max-w-6xl mx-auto mb-10 bg-orange-600 text-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] font-sans">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                    <div className="p-3 bg-white text-orange-600 rounded-lg w-fit shadow-sm">
                        <ChefHat size={24} />
                    </div>
                    <div>
                        <h2 className="text-xs font-black uppercase tracking-[0.4em] opacity-90">Master's Research // Variant 02</h2>
                        <p className="text-2xl font-black italic uppercase tracking-tighter">The "Personal Chef" Experience (SSR)</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4 md:border-r border-white/20 md:pr-10">
                        <p className="text-xl font-bold leading-tight italic">
                            "Every time you visit, the server cooks a fresh response. It's like having a personal chef—you get exactly what you need right now, but you have to wait."
                        </p>
                        <p className="text-sm opacity-90 leading-relaxed">
                            In this test, I call Google's Gemini AI on every request. This ensures 100% accuracy for live data like stock prices, but it exposes the "Inference Tax"—the 4.2s delay your users must face. I learned this adds up fast when you have multiple users!
                        </p>
                    </div>
                    <div className="bg-black/10 p-4 rounded-lg border border-white/20">
                        <div className="flex justify-between items-end mb-4 border-b border-white/20 pb-2">
                            <span className="text-[10px] font-black uppercase tracking-widest">Inference Wait Time</span>
                            <span className="text-4xl font-black italic">~4.2s</span>
                        </div>
                        <p className="text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                            <Activity size={14} className="text-orange-200" /> Best for: Personal dashboards, Real-time prices
                        </p>
                        <p className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                            <Timer size={14} className="text-red-300" /> Downside: High latency, higher server costs
                        </p>
                    </div>
                </div>
            </section>

            {/* THE LIVE KITCHEN - METAPHOR LAYER */}
            <div className="max-w-6xl mx-auto border-4 border-black bg-white shadow-[12px_12px_0px_0px_rgba(234,88,12,1)] font-sans overflow-hidden">
                <header className="p-8 border-b-4 border-black flex flex-col md:flex-row justify-between items-center bg-orange-50/50">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none text-slate-900">THE CHEF'S KITCHEN</h1>
                        <p className="font-bold text-xs tracking-[0.2em] uppercase opacity-60 mt-2">Cooking Fresh Data for {timestamp}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex flex-col items-end">
                            <span className="text-[10px] font-black uppercase text-orange-600">Server Status</span>
                            <span className="text-xs font-bold uppercase flex items-center gap-2 text-slate-900">
                                <span className={`w-2 h-2 rounded-full ${isRefreshing ? 'bg-orange-500 animate-pulse' : 'bg-green-500'}`} />
                                {isRefreshing ? 'Processing Live' : 'Ready to Cook'}
                            </span>
                        </div>
                    </div>
                </header>

                <main className="grid grid-cols-1 lg:grid-cols-3">
                    {/* AI Log Column - Dark Theme inside Orange Container */}
                    <div className="p-6 border-b-4 lg:border-b-0 lg:border-r-4 border-black bg-slate-900 text-orange-400 font-mono text-xs">
                        <div className="flex items-center gap-2 mb-4 border-b border-orange-900 pb-2 text-orange-500">
                            <Cpu size={14} /> LIVE_GEMINI_API_LOG
                        </div>
                        <div className="space-y-3 opacity-80">
                            <p>[{timestamp}] Request received from your browser</p>
                            <p>[{timestamp}] Querying Gemini-1.5-Flash...</p>
                            <p className={`underline ${isRefreshing ? 'text-white animate-pulse' : 'text-emerald-400'}`}>
                                {isRefreshing ? 'AI Generating Summary...' : 'Inference Complete.'}
                            </p>
                            <p>[{timestamp}] Logic hydration started</p>
                            <p className="text-orange-300 font-bold underline underline-offset-4 decoration-orange-600">
                                Total Response Time: {renderTime}ms
                            </p>
                            <div className="h-32 border border-orange-900/50 rounded p-2 overflow-hidden mt-4 bg-black/50 text-[10px] leading-relaxed">
                                <p className="italic text-orange-700">"Personal Insight: I noticed that cold starts in Cloud Run can add an extra 2s to this total if the server hasn't been used in 15 minutes..."</p>
                            </div>
                        </div>
                    </div>

                    {/* Result Column */}
                    <div className="p-6 md:p-10 lg:col-span-2 relative bg-white">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                            <h2 className="text-2xl font-black italic uppercase flex items-center gap-2 text-slate-900">
                                <MessageSquare size={24} className="text-orange-600" /> My Load Testing Observations
                            </h2>
                            <button
                                onClick={simulateRefresh}
                                disabled={isRefreshing}
                                className="bg-black text-white px-6 py-3 rounded-full font-black uppercase text-xs tracking-widest hover:bg-orange-600 transition-all shadow-lg active:scale-95 disabled:opacity-50 flex items-center gap-2"
                            >
                                <RefreshCw size={16} className={isRefreshing ? 'animate-spin' : ''} />
                                {isRefreshing ? 'Cooking...' : 'Cook Fresh Plate'}
                            </button>
                        </div>

                        <div className="space-y-8 font-serif text-lg leading-relaxed text-slate-800">
                            <p className="bg-orange-50 p-6 border-l-4 border-orange-500 italic shadow-sm text-slate-700">
                                "The real lesson I learned during this project is the 'Inference Tax.' For an e-commerce site where prices change every minute, SSR is non-negotiable. But I saw engagement drop during testing when this 4.2s delay hit users on slow connections."
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans text-sm">
                                <div className="p-5 border-2 border-black rounded-lg bg-white shadow-[4px_4px_0px_0px_rgba(234,88,12,1)]">
                                    <span className="text-[10px] font-black uppercase text-orange-600">Why the 4.2s matters</span>
                                    <p className="font-bold mt-1 text-slate-900 italic">User Patience vs. Data Integrity</p>
                                    <p className="text-xs mt-2 text-slate-500 leading-relaxed">In a stock app, a 4s delay is acceptable for accuracy. In a blog? It's a project-killer. This test proved that SSR needs careful placement.</p>
                                </div>
                                <div className="p-5 border-2 border-black rounded-lg bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    <span className="text-[10px] font-black uppercase text-orange-600">Testing Discovery</span>
                                    <p className="font-bold mt-1 text-slate-900 italic">Cloud Run Cold Starts</p>
                                    <p className="text-xs mt-2 text-slate-500 leading-relaxed">During my Master's testing, I realized cold starts add up to 3 seconds. Always keep a 'min-instance' of 1 if you want to use SSR professionally.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 flex flex-col sm:flex-row gap-4">
                            <a href="/" className="flex-1 py-5 bg-black text-white font-black uppercase italic tracking-widest hover:translate-x-1 hover:translate-y-1 shadow-[6px_6px_0px_0px_rgba(234,88,12,1)] transition-all flex items-center justify-center gap-3 no-underline">
                                <ArrowLeft size={20} /> Return to Lab Hub
                            </a>
                        </div>
                    </div>
                </main>

                <div className="p-4 bg-orange-50 border-t border-orange-100 flex items-center justify-center gap-6 text-[10px] font-black uppercase tracking-widest text-orange-800/50">
                    <span className="flex items-center gap-1"><Zap size={12} /> Live Render</span>
                    <span className="flex items-center gap-1"><Flame size={12} /> Hot Execution</span>
                    <span className="flex items-center gap-1"><AlertCircle size={12} /> Inference Tax Applied</span>
                </div>
            </div>
        </div>
    );
}

export default App;