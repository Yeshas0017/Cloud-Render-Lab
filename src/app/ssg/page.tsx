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
    Search,
    BookOpen
} from 'lucide-react';

/**
 * INLINED MOCK DATA
 * For the purpose of this research preview, the data is inlined to ensure 
 * the simulation runs without dependency resolution errors.
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

/**
 * PAGE 1: STATIC SITE GENERATION (SSG)
 * Strategy: "The Morning Edition"
 * Research Context: Data is fetched ONCE during the build process.
 * Assets are served via Global CDN for sub-second latency.
 */
export default function App() {
    // In a real SSG build, this timestamp would be locked at the moment of 'npm run build'
    const buildTimestamp = "08:00:00 AM";

    return (
        <div className="min-h-screen bg-[#F4F1EA] text-black font-serif selection:bg-black selection:text-white">
            {/* GLOBAL NAVIGATION HEADER */}
            <nav className="sticky top-0 z-50 bg-white border-b-4 border-black font-sans">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <a href="/" className="flex items-center gap-3 no-underline text-black">
                        <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-black rounded italic shadow-[4px_4px_0px_0px_rgba(37,99,235,1)]">
                            <Cpu size={22} />
                        </div>
                        <div className="hidden sm:block">
                            <span className="font-black text-xl tracking-tighter block leading-none uppercase">RENDERING<span className="text-blue-600">LAB</span></span>
                            <span className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase">Cloud Native Research</span>
                        </div>
                    </a>

                    <div className="flex items-center gap-10">
                        <a href="/" className="text-sm font-black text-gray-400 hover:text-black transition-colors uppercase italic no-underline">Dashboard</a>
                        <a href="/ssg" className="text-sm font-black text-blue-600 border-b-2 border-blue-600 uppercase italic no-underline">SSG View</a>
                        <a href="/ssr" className="text-sm font-black text-gray-400 hover:text-black transition-colors uppercase italic no-underline">SSR View</a>
                        <a href="/isr" className="text-sm font-black text-gray-400 hover:text-black transition-colors uppercase italic no-underline">isr View</a>
                    </div>

                    <button className="p-2 bg-black text-white rounded shadow-[4px_4px_0px_0px_rgba(37,99,235,1)]">
                        <Search size={18} />
                    </button>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-6 py-12">
                <div className="mb-12 font-sans">
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black no-underline text-black"
                    >
                        <ArrowLeft size={16} /> Back to Metrics
                    </a>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Strategy Background Column */}
                    <div className="lg:col-span-5 font-sans">
                        <div className="bg-blue-600 text-white inline-block px-3 py-1 text-[10px] font-black uppercase tracking-[0.3em] mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            RESEARCH VARIANT 01
                        </div>
                        <h1 className="text-7xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8 uppercase italic text-black">
                            THE <span className="underline decoration-[12px] decoration-blue-600 underline-offset-8">MORNING</span> EDITION
                        </h1>
                        <p className="text-2xl font-medium leading-relaxed mb-12 italic opacity-80 border-l-4 border-black pl-6 text-black">
                            "Assets are pre-rendered at build time. Served globally from the GCP edge. High persistence, zero server-side logic at runtime."
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-20 text-black">
                            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                                <div className="flex items-center gap-2 mb-2">
                                    <ShieldCheck className="text-green-600" size={20} />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">CORE WEB VITAL</span>
                                </div>
                                <p className="text-5xl font-black italic tracking-tighter">100<span className="text-xl ml-1">/100</span></p>
                            </div>
                            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                                <div className="flex items-center gap-2 mb-2">
                                    <Clock className="text-blue-600" size={20} />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">BUILD TIMESTAMP</span>
                                </div>
                                <p className="text-5xl font-black italic tracking-tighter">08:00</p>
                            </div>
                        </div>
                    </div>

                    {/* The Newspaper UI Column */}
                    <div className="lg:col-span-7">
                        <div className="bg-[#FFFDF5] border-4 border-black p-8 md:p-16 rotate-1 shadow-2xl relative text-black">
                            <div className="border-b-4 border-black pb-8 mb-8 flex justify-between items-end">
                                <p className="font-mono text-[10px] font-black uppercase tracking-widest">VOL. 01 // RESEARCH ISSUE // €0.00</p>
                                <h2 className="text-4xl font-black tracking-tighter italic uppercase flex items-center gap-2">
                                    <BookOpen size={32} /> THE STATIC GAZETTE
                                </h2>
                                <p className="font-mono text-[10px] font-black uppercase tracking-widest text-right">EDITION: {buildTimestamp}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-8">
                                    {mockProducts.slice(0, 3).map(product => (
                                        <div key={product.id} className="border-b-2 border-black/10 pb-6">
                                            <h4 className="font-black uppercase text-2xl mb-2 leading-none">{product.name}</h4>
                                            <p className="text-sm font-serif italic leading-relaxed text-gray-700">{product.description}</p>
                                            <div className="mt-4 flex justify-between items-center">
                                                <span className="bg-black text-white px-2 py-0.5 text-[10px] font-black uppercase">{product.price}</span>
                                                <span className="text-[10px] font-black uppercase text-blue-600 tracking-widest italic">CACHED ASSET</span>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="h-40 bg-black/5 border-4 border-dashed border-black/10 flex flex-col items-center justify-center p-6 text-center">
                                        <Globe size={40} className="mb-2 opacity-20" />
                                        <p className="text-[10px] font-bold uppercase opacity-30 leading-tight">Asset cached on 142 edge nodes globally</p>
                                    </div>
                                </div>
                                <div className="space-y-8">
                                    <div className="p-6 bg-blue-50 border-2 border-black rotate-[-1deg] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                        <h4 className="font-black text-xs uppercase mb-2 flex items-center gap-2 text-blue-800">
                                            <Zap size={14} /> The Build-Time Advantage
                                        </h4>
                                        <p className="text-[12px] font-serif leading-relaxed italic">
                                            By fetching data during the build phase, we eliminate the "Waterfall" effect. The server simply sends a pre-made file.
                                        </p>
                                    </div>
                                    {mockProducts.slice(3, 7).map(product => (
                                        <div key={product.id} className="border-b-2 border-black/10 pb-6">
                                            <h4 className="font-black uppercase text-2xl mb-2 leading-none">{product.name}</h4>
                                            <p className="text-sm font-serif italic leading-relaxed text-gray-700">{product.description}</p>
                                            <p className="mt-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Target: {product.latencyTarget}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-16 pt-8 border-t-4 border-black font-sans">
                                <p className="text-3xl font-black tracking-tighter leading-none mb-6 uppercase italic">Latency Benchmark Results</p>
                                <div className="flex items-center gap-10">
                                    <div className="p-4 bg-black text-white rounded-lg">
                                        <BarChart3 size={40} />
                                    </div>
                                    <div>
                                        <p className="text-7xl font-black italic tracking-tighter leading-none">0.2<span className="text-3xl ml-1">S</span></p>
                                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">TTFB (Time to First Byte)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technical Deep Dive */}
                <section className="mt-32 pt-20 border-t-8 border-black grid grid-cols-1 md:grid-cols-2 gap-12 font-sans text-black">
                    <div className="bg-white border-4 border-black p-10 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                        <h3 className="text-4xl font-black tracking-tighter mb-8 uppercase italic flex items-center gap-3">
                            <Terminal size={32} /> Infrastructure Flow
                        </h3>
                        <p className="text-gray-500 mb-10 leading-relaxed font-bold uppercase text-sm">
                            How Google Cloud handles Static Generation for this project:
                        </p>
                        <div className="space-y-6">
                            {[
                                { t: "Trigger", d: "Developer pushes code to GitHub repository." },
                                { t: "GCP Build", d: "Cloud Build triggers 'next build' + data fetch." },
                                { t: "Deployment", d: "Static HTML is uploaded to Global Bucket storage." }
                            ].map((step, idx) => (
                                <div key={idx} className="flex gap-6 items-start group">
                                    <div className="w-12 h-12 bg-black text-white flex-shrink-0 flex items-center justify-center font-black italic text-xl shadow-[4px_4px_0px_0px_rgba(37,99,235,1)] group-hover:bg-blue-600 transition-colors">
                                        0{idx + 1}
                                    </div>
                                    <div>
                                        <h5 className="font-black uppercase text-xs text-blue-600 mb-1 tracking-widest">{step.t}</h5>
                                        <p className="text-gray-600 text-sm font-bold leading-tight uppercase">{step.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <div className="bg-slate-950 text-white p-10 rounded-[3rem] shadow-2xl font-mono text-xs border-t-[12px] border-blue-600 relative group overflow-hidden">
                            <div className="flex gap-2 mb-8 border-b border-white/10 pb-4 relative z-10">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                <span className="text-[10px] ml-auto opacity-30 tracking-widest uppercase">ssg-rendering-logic.ts</span>
                            </div>
                            <pre className="text-blue-300 overflow-x-auto relative z-10 leading-loose">
                                {`// src/app/ssg/page.tsx
// All logic is executed at BUILD TIME

export default async function Page() {
  // Fetched once on GCP Cloud Build
  const products = await getProducts();
  
  return (
    <Layout>
      {products.map(p => <StaticItem p={p} />)}
    </Layout>
  );
}`}
                            </pre>
                            <div className="absolute top-1/2 right-4 opacity-5 group-hover:opacity-10 transition-opacity text-white">
                                <Cpu size={200} />
                            </div>
                        </div>

                        <div className="bg-amber-400 border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                            <h4 className="font-black uppercase italic mb-3 flex items-center gap-2">
                                <AlertTriangle size={20} /> STALE DATA WARNING
                            </h4>
                            <p className="text-sm font-black leading-tight uppercase tracking-tight">
                                Unlike a website that fetches data live, this page is "Stale." If you change the product price in the database now, it will NOT update here until you trigger a new GCP Build.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}