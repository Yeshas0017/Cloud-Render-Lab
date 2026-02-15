'use client';

import React, { useState, useEffect } from 'react';
import {
    Utensils,
    ArrowLeft,
    Timer,
    Activity,
    Zap,
    Flame,
    Terminal,
    BarChart3,
    Info,
    Database,
    RefreshCw
} from 'lucide-react';

/**
 * RESEARCH DATA (INLINED)
 * Resolved: Inlined data to prevent build errors related to module aliases.
 */
const mockProducts = [
    { id: "1", name: "Quantum Processor X1", category: "Core Unit", price: "€499.00", status: "Fresh" },
    { id: "2", name: "Neural Link Module", category: "AI Interface", price: "€850.00", status: "Fresh" },
    { id: "3", name: "Cloud Core G2", category: "Infrastructure", price: "€1,200.00", status: "Fresh" },
    { id: "4", name: "Edge Sync Hub", category: "Networking", price: "€320.00", status: "Fresh" }
];

export default function SSRPage() {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [timestamp, setTimestamp] = useState("");
    const [renderTime, setRenderTime] = useState(0);

    // Initialize timestamp and simulate a "Server Render" delay
    useEffect(() => {
        setTimestamp(new Date().toLocaleTimeString());
        setRenderTime(4200); // Representing the real-world AI compute cost observed
    }, []);

    const simulateRefresh = () => {
        setIsRefreshing(true);
        setTimeout(() => {
            setIsRefreshing(false);
            setTimestamp(new Date().toLocaleTimeString());
        }, 1200);
    };

    return (
        <div className="min-h-screen bg-[#F9FAFB] text-slate-900 font-sans p-6 md:p-12 selection:bg-orange-100">

            {/* RESEARCH VARIANT BRIEF - TOP LAYER (Light Mode Optimized) */}
            <section className="max-w-6xl mx-auto mb-10 bg-orange-600 text-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] font-sans">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white text-orange-600 rounded-lg shadow-sm"><BarChart3 size={24} /></div>
                    <div>
                        <h2 className="text-xs font-black uppercase tracking-[0.4em] opacity-90">Research Variant 02</h2>
                        <p className="text-2xl font-black italic uppercase tracking-tighter">Server-Side Rendering (SSR)</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4 border-r border-white/20 pr-10 text-white">
                        <p className="text-xl font-bold leading-tight italic">“This page renders on the server for every request, like a chef cooking every plate fresh.”</p>
                        <p className="text-sm opacity-90 leading-relaxed font-bold uppercase tracking-widest italic">Behavior: For each HTTP request, the server waits for Gemini to return a response, then renders HTML and sends it to the user.</p>
                    </div>
                    <div className="space-y-4 text-white">
                        <div className="flex justify-between items-end border-b border-white/20 pb-2">
                            <span className="text-[10px] font-black uppercase tracking-widest">Observed Latency</span>
                            <span className="text-4xl font-black italic">~4.2S</span>
                        </div>
                        <p className="text-sm font-bold italic leading-relaxed">“Great for always-fresh or personalized AI responses, but exposes full AI latency and increases server load.”</p>
                    </div>
                </div>
            </section>

            {/* THE CHEF'S KITCHEN METAPHOR - BOTTOM LAYER (Light Mode Kitchen) */}
            <div className="max-w-6xl mx-auto border-4 border-black shadow-[12px_12px_0px_0px_rgba(234,88,12,1)] bg-white overflow-hidden">
                <div className="p-6 bg-orange-600 flex justify-between items-center border-b-4 border-black">
                    <div className="flex items-center gap-2 font-black italic uppercase tracking-tighter text-white">
                        <Utensils size={24} /> THE CHEF'S KITCHEN
                    </div>
                    <a href="/" className="text-white font-black text-xs uppercase tracking-widest no-underline border-b-2 border-white hover:opacity-80 transition-opacity">Back to Lab</a>
                </div>

                <main className="p-8 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Interactive Side */}
                        <div className="lg:col-span-6 space-y-10">
                            <div>
                                <h1 className="text-7xl md:text-8xl font-black tracking-tighter italic uppercase leading-none text-slate-900">FRESH<br /><span className="text-orange-600 underline decoration-8 underline-offset-8 decoration-black">COMPUTE</span></h1>
                            </div>

                            <p className="text-2xl font-bold italic leading-tight text-slate-500 border-l-4 border-orange-600 pl-6">
                                "Rendering on the server for every single request. 100% data integrity at the cost of execution time."
                            </p>

                            <button
                                onClick={simulateRefresh}
                                disabled={isRefreshing}
                                className="group flex items-center gap-4 bg-black text-white px-8 py-6 rounded-full font-black uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl active:scale-95 disabled:opacity-50"
                            >
                                <RefreshCw size={24} className={isRefreshing ? "animate-spin" : ""} />
                                {isRefreshing ? "Cooking Live Data..." : "Cook Plate Fresh"}
                            </button>

                            <div className="p-8 bg-slate-900 text-orange-400 rounded-3xl font-mono text-xs border-l-8 border-orange-500 shadow-inner">
                                <div className="flex items-center gap-2 mb-4 border-b border-orange-500/20 pb-2">
                                    <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                                    <span className="opacity-50 uppercase tracking-widest text-orange-200">GCP Execution Trace</span>
                                </div>
                                <div className="space-y-1">
                                    <p className="opacity-40">TIMESTAMP: {timestamp}</p>
                                    <p className="text-white font-bold italic">POST /ssr 200 OK</p>
                                    <p className="">{`> Requesting Gemini-2.5-Flash...`}</p>
                                    <p className="">{`> Summarizing 4 inventory items...`}</p>
                                    <p className="text-orange-300 font-bold">{`> Done in ${renderTime}ms`}</p>
                                </div>
                            </div>
                        </div>

                        {/* Visual Metric Side */}
                        <div className="lg:col-span-6">
                            <div className="bg-slate-50 border-4 border-black p-10 flex flex-col justify-center items-center text-center relative group shadow-[0px_0px_30px_rgba(0,0,0,0.05)]">
                                <div className="absolute top-4 left-4"><Activity size={24} className="text-orange-600 animate-pulse" /></div>
                                <p className="font-black text-[10px] uppercase tracking-[0.5em] mb-10 text-slate-400">Live Hydration Latency</p>
                                <p className="text-9xl font-black italic tracking-tighter leading-none mb-10 text-slate-900">4.2<span className="text-3xl ml-1 text-orange-600">S</span></p>

                                <div className="grid grid-cols-2 gap-4 w-full mb-10">
                                    <div className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                        <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Compute</p>
                                        <p className="text-xl font-black text-orange-600">DYNAMIC</p>
                                    </div>
                                    <div className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                        <p className="text-[10px] font-black text-slate-400 uppercase mb-1">State</p>
                                        <p className="text-xl font-black text-green-600 italic">WARM</p>
                                    </div>
                                </div>

                                <div className="p-6 bg-white border-2 border-black font-sans italic text-sm leading-relaxed text-left relative overflow-hidden group text-slate-900">
                                    <Flame size={80} className="absolute -right-4 -bottom-4 opacity-5 group-hover:rotate-12 transition-transform duration-700" />
                                    <p className="font-black uppercase text-[10px] tracking-widest text-orange-600 mb-2 underline italic decoration-black">Scientific Trade-off</p>
                                    <p className="relative z-10 font-bold">SSR ensures AI results reflect the exact second of the request, but exposes the full "Inference Tax" to the user, potentially impacting engagement metrics.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                <footer className="p-10 flex justify-center border-t border-slate-100 bg-slate-50/50">
                    <a href="/" className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white font-black uppercase italic tracking-widest hover:bg-orange-600 hover:translate-x-1 hover:-translate-y-1 transition-all shadow-[6px_6px_0px_0px_rgba(234,88,12,1)] no-underline">
                        <ArrowLeft size={20} /> Return to Lab Hub
                    </a>
                </footer>
            </div>
        </div>
    );
}