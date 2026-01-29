'use client';

import React from 'react';
import {
  Zap,
  Clock,
  RefreshCcw,
  BarChart3,
  Activity,
  Cpu,
  Layout,
  ArrowRight,
  Globe,
  Gauge,
  Search
} from 'lucide-react';

/**
 * STRATEGY METRIC CARD
 * This component visualizes the target metrics for each rendering mode.
 * Use these for your scientific comparison in the demo.
 */
const MetricCard = ({ title, mode, lcp, ttfb, percentage, color }: {
  title: string;
  mode: string;
  lcp: string;
  ttfb: string;
  percentage: number;
  color: string;
}) => (
  <div className="group relative bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col h-full cursor-pointer">
    <div className="flex justify-between items-start mb-6">
      <div className="bg-black text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest">
        {title}
      </div>
      <span className="text-4xl font-black italic opacity-20 group-hover:opacity-100 transition-opacity" style={{ color }}>
        {mode === 'SSG' ? '01' : mode === 'SSR' ? '02' : '03'}
      </span>
    </div>

    <h3 className="text-5xl font-black italic mb-8 tracking-tighter uppercase">{mode}</h3>

    <div className="space-y-6 flex-grow">
      <div>
        <p className="bg-blue-600 text-white inline-block px-2 py-0.5 text-[10px] font-black uppercase tracking-wider mb-1">LCP CORE SPEED</p>
        <p className="text-5xl font-black italic leading-none">{lcp}<span className="text-xl ml-1">S</span></p>
      </div>
      <div>
        <p className="bg-blue-600 text-white inline-block px-2 py-0.5 text-[10px] font-black uppercase tracking-wider mb-1">FIRST BYTE</p>
        <p className="text-5xl font-black italic leading-none">{ttfb}<span className="text-xl ml-1">MS</span></p>
      </div>
    </div>

    <div className="mt-8 pt-6 border-t-2 border-dotted border-gray-200">
      <div className="flex justify-between items-end mb-2">
        <span className="text-sm font-black italic uppercase tracking-widest">{mode === 'SSG' ? 'FASTEST' : mode === 'SSR' ? 'DEMAND' : 'HYBRID'}</span>
        <span className="text-2xl font-black italic">{percentage}%</span>
      </div>
      <div className="h-6 border-4 border-black bg-white overflow-hidden p-1">
        <div className="h-full transition-all duration-1000" style={{ width: `${percentage}%`, backgroundColor: color }} />
      </div>
    </div>
  </div>
);

export default function RenderingLabHub() {
  return (
    <div className="min-h-screen bg-white text-black font-sans p-6 md:p-12 selection:bg-yellow-300">
      {/* Header Navigation */}
      <nav className="flex justify-between items-center mb-16 border-b-4 border-black pb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-black rounded italic">RL</div>
          <div className="font-black uppercase italic text-sm tracking-tighter leading-none">RENDERING<br />LAB</div>
        </div>
        <div className="flex gap-6 items-center">
          <div className="hidden md:flex gap-6 text-[10px] font-black uppercase tracking-widest">
            <span className="text-blue-600 border-b-2 border-blue-600">Dashboard</span>
            <span className="text-gray-400 hover:text-black cursor-pointer transition-colors">SSG View</span>
            <span className="text-gray-400 hover:text-black cursor-pointer transition-colors">SSR View</span>
          </div>
          <button className="bg-black text-white p-2 rounded shadow-[4px_4px_0px_0px_rgba(37,99,235,1)] hover:translate-y-0.5 transition-transform">
            <Search size={18} />
          </button>
        </div>
      </nav>

      <header className="mb-20">
        <p className="font-black uppercase tracking-widest text-xs mb-2 text-blue-600">LIVE RESEARCH BENCHMARKING</p>
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] uppercase italic">
          SYSTEM<br />METRICS
        </h1>
      </header>

      <main className="max-w-7xl mx-auto">
        {/* Main Benchmarking Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <MetricCard
            title="STATIC GENERATION" mode="SSG" lcp="0.8" ttfb="120" percentage={92} color="#2563eb"
          />
          <MetricCard
            title="SERVER RENDER" mode="SSR" lcp="1.5" ttfb="450" percentage={65} color="#ea580c"
          />
          <MetricCard
            title="REVALIDATION" mode="ISR" lcp="1.1" ttfb="280" percentage={82} color="#10b981"
          />
        </div>

        {/* Global Infrastructure Status */}
        <div className="bg-black text-white p-8 flex flex-col md:flex-row items-center justify-between shadow-[8px_8px_0px_0px_rgba(37,99,235,1)] gap-6">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-gray-900 rounded-lg">
              <Globe size={40} className="text-blue-500 animate-pulse" />
            </div>
            <div>
              <h2 className="text-3xl font-black italic uppercase tracking-tighter">REGION: US-CENTRAL1</h2>
              <p className="text-xs font-bold tracking-[0.3em] text-gray-500 uppercase">Global Compute Nodes Active</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-right">
              <p className="text-[10px] font-black uppercase text-gray-500 mb-1">Infrastructure</p>
              <p className="font-bold italic uppercase tracking-widest">Cloud Run (GCP)</p>
            </div>
          </div>
        </div>

        {/* Analytical Deep Dive Section */}
        <section className="mt-32 pt-20 border-t-8 border-black">
          <p className="text-amber-500 font-bold text-sm tracking-widest uppercase mb-4">Laboratory Observations</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter italic leading-none mb-12 uppercase">
                CYBER BOLD<br />
                <span className="text-cyan-400">LATENCY</span><br />
                DEEP DIVE
              </h2>
              <p className="text-gray-500 font-bold leading-relaxed mb-8 max-w-md">
                Analyzing the correlation between rendering strategy and Time to First Byte (TTFB).
                The impact of container "Warm-up" times on dynamic routes is a core focus of Phase 3 testing.
              </p>
            </div>
            <div className="bg-cyan-400 p-12 rounded-[3rem] text-black text-center shadow-xl border-4 border-black group overflow-hidden relative">
              <div className="relative z-10">
                <p className="font-black uppercase tracking-widest mb-4">PEAK SPEED BOOST</p>
                <p className="text-9xl font-black tracking-tighter italic">80<span className="text-6xl">%</span></p>
                <div className="mt-8 bg-black text-cyan-400 inline-block px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform">
                  OPTIMIZED INFRASTRUCTURE
                </div>
              </div>
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Activity size={200} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-32 pt-8 border-t-4 border-black flex flex-col md:flex-row justify-between items-center gap-6 grayscale opacity-50">
        <div className="flex items-center gap-2">
          <Cpu size={20} />
          <p className="text-[10px] font-black uppercase tracking-[0.3em]">M.Sc. Applied Computer Science // Render Lab Hub</p>
        </div>
        <p className="text-[10px] font-black uppercase tracking-[0.3em]">© 2026 NextBench Research Project</p>
      </footer>
    </div>
  );
}