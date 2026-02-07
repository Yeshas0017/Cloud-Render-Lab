'use client';

import React, { useState, useEffect } from 'react';
import {
    Utensils,
    Clock,
    ArrowLeft,
    RefreshCw,
    Flame,
    Terminal,
    Activity,
    Cpu,
    Search,
    Database,
    Timer
} from 'lucide-react';

/**
 * PAGE 2: SERVER-SIDE RENDERING (SSR)
 * Strategy: "The Chef's Kitchen"
 * Research Context: Data is fetched LIVE for every request.
 * Demonstrates: Server processing time and "Cold Start" impact.
 */
export default function App() {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [timestamp, setTimestamp] = useState("");
    const [renderTime, setRenderTime] = useState(0);

    // Initialize timestamp and simulate a "Server Render" delay
    useEffect(() => {
        setTimestamp(new Date().toLocaleTimeString());
        // Simulate a typical SSR delay in a serverless environment (450ms - 650ms)
        setRenderTime(450 + Math.floor(Math.random() * 200));
    }, []);

    const simulateRefresh = () => {
        setIsRefreshing(true);
        // Simulation of a fresh fetch from the GCP server
        setTimeout(() => {
            setIsRefreshing(false);
            setTimestamp(new Date().toLocaleTimeString());
            setRenderTime(450 + Math.floor(Math.random() * 200));
        }, 1200);
    };

    // Central Mock Data (Inlined for reliability in this variant)
    const products = [
        { id: "1", name: "Quantum Processor X1", category: "Core Unit", price: "€499.00", status: "Fresh" },
        { id: "2", name: "Neural Link Module", category: "AI Interface", price: "€850.00", status: "Fresh" },
        { id: "3", name: "Cloud Core G2", category: "Infrastructure", price: "€1,200.00", status: "Fresh" },
        { id: "4", name: "Edge Sync Hub", category: "Networking", price: "€320.00", status: "Fresh" }
    ];

    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-pink-100 overflow-x-hidden">
            {/* GLOBAL NAVIGATION HEADER */}
            <nav className="sticky top-0 z-50 bg-white border-b-4 border-black">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <a href="/" className="flex items-center gap-3 no-underline text-black group">
                        <div className="w-10 h-10 bg-pink-500 text-white flex items-center justify-center font-black rounded italic shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-6 transition-transform text-white">
                            <Utensils size={22} />
                        </div>
                        <div className="hidden sm:block">
                            <span className="font-black text-xl tracking-tighter block leading-none uppercase">CHEF'S <span className="text-pink-500">KITCHEN</span></span>
                            <span className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase italic">Real-Time Compute</span>
                        </div>
                    </a>

                    <div className="flex items-center gap-10">
                        <a href="/" className="text-sm font-black text-gray-400 hover:text-black transition-colors uppercase italic no-underline">Dashboard</a>
                        <a href="/ssg" className="text-sm font-black text-gray-400 hover:text-black transition-colors uppercase italic no-underline">SSG View</a>
                        <a href="/ssr" className="text-sm font-black text-pink-500 border-b-2 border-pink-500 uppercase italic no-underline">SSR View</a>
                        <a href="/isr" className="text-sm font-black text-gray-400 hover:text-black transition-colors uppercase italic no-underline">ISR View</a>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="p-2 bg-black text-white rounded shadow-[4px_4px_0px_0px_rgba(236,72,153,1)]">
                            <Search size={18} />
                        </button>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-6 py-12">
                <div className="mb-12">
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-black font-black text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] no-underline text-black"
                    >
                        <ArrowLeft size={16} /> Close Kitchen
                    </a>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Strategy Side Column */}
                    <div className="lg:col-span-5">
                        <div className="bg-pink-500 text-white inline-block px-3 py-1 text-[10px] font-black uppercase tracking-[0.3em] mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            RESEARCH VARIANT 02
                        </div>
                        <h1 className="text-7xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8 uppercase italic text-black">
                            DYNAMIC<br />SERVER<br /><span className="text-pink-500 underline decoration-[12px] decoration-black underline-offset-8">RENDER</span>
                        </h1>
                        <p className="text-2xl font-bold leading-relaxed mb-12 italic opacity-80 border-l-4 border-black pl-6 text-black">
                            "Unlike the pre-printed SSG news, SSR cooks the data live on every request. This ensures 100% freshness at the cost of server heat."
                        </p>

                        <button
                            onClick={simulateRefresh}
                            disabled={isRefreshing}
                            className="group flex items-center gap-4 bg-black text-white px-8 py-6 rounded-full font-black uppercase tracking-widest hover:bg-pink-600 transition-all shadow-xl active:scale-95 disabled:opacity-50"
                        >
                            <RefreshCw size={24} className={isRefreshing ? "animate-spin" : ""} />
                            {isRefreshing ? "Cooking Live Data..." : "Re-Cook Live Data"}
                        </button>

                        <div className="mt-12 grid grid-cols-2 gap-4">
                            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                                <div className="flex items-center gap-2 mb-2 text-pink-500">
                                    <Timer size={20} />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">RENDER COST</span>
                                </div>
                                <p className="text-5xl font-black italic tracking-tighter text-black">{renderTime}<span className="text-xl ml-1 text-black">MS</span></p>
                            </div>
                            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                                <div className="flex items-center gap-2 mb-2 text-orange-500">
                                    <Flame size={20} />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">GCP CPU</span>
                                </div>
                                <p className="text-5xl font-black italic tracking-tighter text-black">WARM</p>
                            </div>
                        </div>
                    </div>

                    {/* Kitchen UI Column */}
                    <div className="lg:col-span-7">
                        <div className="bg-white border-4 border-black p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(236,72,153,1)] relative overflow-hidden text-black">
                            {/* Kitchen Receipt Header */}
                            <div className="flex justify-between items-center mb-12 border-b-4 border-black border-dashed pb-8">
                                <div>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">ORDER TIMESTAMP</p>
                                    <p className="text-3xl font-black italic text-pink-500 font-mono tracking-tighter">{timestamp || "INITIALIZING..."}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">RECIPE VARIANT</p>
                                    <p className="text-xl font-black italic text-black flex items-center gap-2 justify-end">
                                        <Database size={18} /> LIVE_DB_FETCH
                                    </p>
                                </div>
                            </div>

                            {/* Live Menu Items */}
                            <div className="space-y-6">
                                {products.map(p => (
                                    <div key={p.id} className="flex justify-between items-center p-6 bg-pink-50/30 border-2 border-black group hover:bg-pink-50 transition-colors">
                                        <div>
                                            <h4 className="font-black uppercase text-2xl mb-1 group-hover:text-pink-600 transition-colors">{p.name}</h4>
                                            <div className="flex gap-4">
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{p.category}</p>
                                                <p className="text-[10px] font-black text-green-600 uppercase tracking-widest flex items-center gap-1">
                                                    <Activity size={10} /> Live Hydration
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-3xl font-black italic tracking-tighter">{p.price}</p>
                                            <p className="text-[10px] font-black text-pink-500 uppercase italic">Cooked for You</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Infrastructure Terminal */}
                            <div className="mt-12 p-8 bg-slate-950 text-pink-400 rounded-3xl font-mono text-xs border-l-8 border-pink-500 shadow-inner">
                                <div className="flex items-center gap-2 mb-4 border-b border-pink-500/20 pb-2">
                                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                    <span className="opacity-50 uppercase tracking-widest text-pink-500">GCP Cloud Run Execution Log</span>
                                </div>
                                <div className="space-y-1">
                                    <p className="opacity-40">TIMESTAMP: {timestamp}</p>
                                    <p className="text-white font-bold">GET /ssr 200 - {renderTime}ms</p>
                                    <p className="">{`> Executing getServerSideProps()...`}</p>
                                    <p className="">{`> Querying live mock_database.json...`}</p>
                                    <p className="text-green-400">{`> Container state: ACTIVE (Warm Start)`}</p>
                                    <p className="text-pink-300">{`> HTML Stream generated and sent.`}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technical Analysis Section */}
                <section className="mt-32 pt-20 border-t-8 border-black grid grid-cols-1 md:grid-cols-2 gap-12 text-black font-sans">
                    <div className="bg-white border-4 border-black p-10 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                        <h3 className="text-4xl font-black tracking-tighter mb-8 uppercase italic flex items-center gap-3">
                            <Terminal size={32} /> The Dynamic Cost
                        </h3>
                        <p className="text-gray-500 mb-10 leading-relaxed font-bold uppercase text-sm">
                            Understanding the trade-offs of Server-Side Rendering:
                        </p>
                        <div className="space-y-8">
                            {[
                                { t: "Live Fetch", d: "Every request hits the database. Data is never more than 1ms old." },
                                { t: "Cold Starts", d: "If the server is idle, the first visitor may wait 2s for the container to boot." },
                                { t: "Compute Charge", d: "You pay for CPU time on every click, unlike the 'Free' delivery of SSG." }
                            ].map((point, idx) => (
                                <div key={idx} className="flex gap-6 items-start">
                                    <div className="w-12 h-12 bg-pink-500 text-white flex-shrink-0 flex items-center justify-center font-black italic text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-white">
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <h5 className="font-black uppercase text-xs text-pink-600 mb-1 tracking-widest">{point.t}</h5>
                                        <p className="text-gray-600 text-sm font-bold leading-tight uppercase">{point.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-pink-100 border-4 border-black p-10 flex flex-col justify-center items-center text-center shadow-[12px_12px_0px_0px_rgba(236,72,153,1)]">
                        <Cpu size={60} className="mb-6 text-pink-600 animate-pulse" />
                        <h4 className="text-3xl font-black uppercase italic mb-4">When to use SSR?</h4>
                        <p className="text-sm font-bold leading-relaxed uppercase tracking-tight max-w-sm">
                            SSR is mandatory for personalized dashboards, bank accounts, or real-time AI processing where "Stale Data" (SSG) would be a security or functional failure.
                        </p>
                        <div className="mt-8 pt-8 border-t-2 border-black/10 w-full">
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Infrastructure Recommendation</p>
                            <p className="font-black italic uppercase text-pink-600">Always use with Cloud Run Min-Instances</p>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="mt-32 py-12 border-t-4 border-black bg-gray-50 flex flex-col items-center opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
                <p className="text-[10px] font-black uppercase tracking-[0.5em] mb-4">M.Sc. Applied Computer Science // Render Lab Hub</p>
                <div className="flex gap-8">
                    <span className="text-[10px] font-black border-2 border-black px-2 py-0.5 text-black">SSR_VARIANT_LIVE</span>
                    <span className="text-[10px] font-black border-2 border-black px-2 py-0.5 text-black">GCP_COMPUTE_ACTIVE</span>
                </div>
            </footer>
        </div>
    );
}