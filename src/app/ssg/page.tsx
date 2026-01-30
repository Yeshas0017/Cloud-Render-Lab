'use client';

import React from 'react';
import {
    ShieldCheck,
    Clock,
    ArrowLeft,
    Globe,
    Terminal,
    BarChart3,
    Zap,
    AlertTriangle,
    Cpu,
    Search
} from 'lucide-react';

/**
 * INLINED MOCK DATA
 */
const mockProducts = [
    {
        id: "1",
        name: "Quantum Processor X1",
        category: "Core Unit",
        price: "$499.00",
        description: "High-performance serverless chip designed for rapid data processing and low-latency execution.",
        latencyTarget: "0.2ms",
        lastUpdated: "08:00:00 AM"
    },
    {
        id: "2",
        name: "Neural Link Module",
        category: "AI Interface",
        price: "$850.00",
        description: "Advanced interface for real-time AI processing and neural network integration.",
        latencyTarget: "14ms",
        lastUpdated: "08:00:00 AM"
    },
    {
        id: "3",
        name: "Cloud Core G2",
        category: "Infrastructure",
        price: "$1,200.00",
        description: "Enterprise-grade cloud infrastructure component for scalable serverless deployments.",
        latencyTarget: "4ms",
        lastUpdated: "08:00:00 AM"
    },
    {
        id: "4",
        name: "Edge Sync Hub",
        category: "Networking",
        price: "$320.00",
        description: "Low-latency networking hub optimized for edge computing and rapid sync operations.",
        latencyTarget: "8ms",
        lastUpdated: "08:00:00 AM"
    }
];

/**
 * PAGE 1: STATIC SITE GENERATION (SSG)
 */
export default function App() {
    const buildTimestamp = "08:00:00 AM";

    return (
        <div className="min-h-screen bg-[#FFB86C] text-black font-serif selection:bg-black selection:text-white">
            {/* GLOBAL NAVIGATION HEADER */}
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/10 font-sans">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <a href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-black rounded italic shadow-lg">
                            <Cpu size={22} />
                        </div>
                        <div>
                            <span className="font-black text-xl tracking-tighter block leading-none uppercase">RENDERING<span className="text-blue-600">LAB</span></span>
                            <span className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase">Cloud Native Research</span>
                        </div>
                    </a>

                    <div className="hidden md:flex items-center gap-10">
                        <a href="/" className="text-sm font-bold text-gray-500 hover:text-black transition-colors">Dashboard</a>
                        <a href="/ssg" className="text-sm font-bold text-blue-600 border-b-2 border-blue-600 transition-colors">SSG View</a>
                        <a href="/ssr" className="text-sm font-bold text-gray-500 hover:text-black transition-colors">SSR View</a>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-100">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-[10px] font-bold text-green-700 uppercase tracking-wider">GCP Active</span>
                        </div>
                        <button className="p-2.5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors text-gray-400">
                            <Search size={20} />
                        </button>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-6 py-12">
                {/* Secondary Back Link */}
                <div className="mb-8">
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full font-sans font-black text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-lg border-2 border-black"
                    >
                        <ArrowLeft size={16} /> Back to Metrics Hub
                    </a>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Strategy Info Column */}
                    <div className="lg:col-span-5 font-sans">
                        <div className="bg-white inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            STATIC SITE GENERATION (SSG)
                        </div>
                        <h1 className="text-7xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8 uppercase italic">
                            THE <span className="underline decoration-[12px] decoration-black underline-offset-8">MORNING</span> EDITION
                        </h1>
                        <p className="text-2xl font-medium leading-relaxed mb-12 italic opacity-80">
                            "Assets are pre-rendered at build time. Served globally from the GCP edge. Faster than your morning coffee."
                        </p>

                        <div className="flex gap-4 mb-20">
                            <div className="bg-white border-4 border-black p-6 flex-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                                <div className="flex items-center gap-2 mb-2">
                                    <ShieldCheck className="text-green-600" size={20} />
                                    <span className="text-[10px] font-black uppercase tracking-widest">PERFORMANCE SCORE</span>
                                </div>
                                <p className="text-5xl font-black italic">100<span className="text-xl">/100</span></p>
                            </div>
                            <div className="bg-white border-4 border-black p-6 flex-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                                <div className="flex items-center gap-2 mb-2">
                                    <Clock className="text-orange-600" size={20} />
                                    <span className="text-[10px] font-black uppercase tracking-widest">BUILD COMPLETED</span>
                                </div>
                                <p className="text-5xl font-black italic">08:00</p>
                            </div>
                        </div>
                    </div>

                    {/* The Newspaper Content Column */}
                    <div className="lg:col-span-7">
                        <div className="bg-[#f4f1ea] border-4 border-black p-8 md:p-16 rotate-1 shadow-2xl relative">
                            <div className="border-b-4 border-black pb-8 mb-8 flex justify-between items-end">
                                <p className="font-mono text-[10px] font-black uppercase tracking-widest">VOL. 01 // RESEARCH ISSUE // $0.00</p>
                                <h2 className="text-4xl font-black tracking-tighter italic uppercase">THE STATIC GAZETTE</h2>
                                <p className="font-mono text-[10px] font-black uppercase tracking-widest text-right">TIMESTAMP: {buildTimestamp}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    {mockProducts.slice(0, 2).map(product => (
                                        <div key={product.id} className="border-b-2 border-black/10 pb-4">
                                            <h4 className="font-black uppercase text-xl mb-1">{product.name}</h4>
                                            <p className="text-sm font-serif italic leading-relaxed">{product.description}</p>
                                            <p className="mt-2 font-sans font-black text-xs text-orange-600 tracking-tighter">{product.price} — ASSET READY</p>
                                        </div>
                                    ))}
                                    <div className="h-32 bg-black/5 rounded-2xl flex items-center justify-center border-4 border-dashed border-black/10">
                                        <Globe size={48} className="opacity-10 animate-pulse" />
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="p-4 bg-orange-100 border-2 border-black rotate-[-1deg] shadow-inner">
                                        <h4 className="font-black text-xs uppercase mb-2">Build-Time Analysis</h4>
                                        <p className="text-[11px] font-serif leading-tight">
                                            SSG renders pages during the build phase. This results in zero server processing latency during user requests.
                                        </p>
                                    </div>
                                    {mockProducts.slice(2, 4).map(product => (
                                        <div key={product.id} className="border-b-2 border-black/10 pb-4">
                                            <h4 className="font-black uppercase text-xl mb-1">{product.name}</h4>
                                            <p className="text-sm font-serif italic leading-relaxed">{product.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t-4 border-black">
                                <p className="text-3xl font-black tracking-tighter leading-none mb-4 uppercase italic">Global Edge Delivery Speed</p>
                                <div className="flex items-center gap-8">
                                    <BarChart3 size={40} />
                                    <div>
                                        <p className="text-6xl font-black italic tracking-tighter">0.2<span className="text-2xl ml-1">S</span></p>
                                        <p className="text-[10px] font-black uppercase tracking-widest opacity-50">TTFB (Time to First Byte)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technical Deep Dive */}
                <section className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-12 font-sans">
                    <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                        <h3 className="text-3xl font-black tracking-tighter mb-6 uppercase italic flex items-center gap-3">
                            <Terminal size={24} /> Under the Hood
                        </h3>
                        <p className="text-gray-600 mb-8 leading-relaxed font-medium">
                            When you run <code>npm run build</code>, Next.js calls your data source and bakes the HTML into a static file ready for distribution.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 bg-gray-50 p-4 border-2 border-black transform hover:scale-[1.02] transition-transform">
                                <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black">1</div>
                                <span className="text-sm font-black uppercase tracking-tight">Data Fetching at Build Time</span>
                            </div>
                            <div className="flex items-center gap-4 bg-gray-50 p-4 border-2 border-black transform hover:scale-[1.02] transition-transform">
                                <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black">2</div>
                                <span className="text-sm font-black uppercase tracking-tight">HTML/CSS Serialization</span>
                            </div>
                            <div className="flex items-center gap-4 bg-gray-50 p-4 border-2 border-black transform hover:scale-[1.02] transition-transform">
                                <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black">3</div>
                                <span className="text-sm font-black uppercase tracking-tight">Global CDN Distribution</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-2xl font-mono text-sm border-t-[12px] border-orange-500 relative group overflow-hidden">
                            <div className="flex gap-2 mb-6 border-b border-white/10 pb-4 relative z-10">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                <span className="text-xs ml-auto opacity-50">static-gen-analysis.tsx</span>
                            </div>
                            <pre className="text-orange-400 overflow-x-auto relative z-10">
                                {`// App Router SSG Pattern
// Next.js caches this by default
const products = await getProducts();

export default function SSGPage() {
  return (
    <main>
      {products.map(p => <News key={p.id} />)}
    </main>
  )
}`}
                            </pre>
                            <div className="absolute top-1/2 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Zap size={200} />
                            </div>
                        </div>

                        <div className="bg-yellow-400 border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                            <h4 className="font-black uppercase italic mb-2 flex items-center gap-2">
                                <AlertTriangle size={18} /> Research Observation
                            </h4>
                            <p className="text-sm font-bold leading-tight uppercase tracking-tight">
                                Note: While SSG provides the fastest performance benchmarks, data remains "stale" until the next rebuild. This is the core trade-off we are measuring.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}