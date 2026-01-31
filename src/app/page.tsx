'use client';

import React from 'react';
import {
  Zap,
  Clock,
  RefreshCcw,
  BarChart3,
  Activity,
  Cpu,
  Globe,
  Search
} from 'lucide-react';

/**
 * STRATEGY METRIC CARD
 * This version uses standard anchor tags for compatibility with the preview
 * environment while maintaining the high-fidelity design.
 */
const MetricCard = ({ title, mode, lcp, ttfb, percentage, color, href }: {
  title: string;
  mode: string;
  lcp: string;
  ttfb: string;
  percentage: number;
  color: string;
  href: string;
}) => (
  <a href={href} className="group relative bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col h-full cursor-pointer no-underline text-black">
    <div className="flex justify-between items-start mb-6 text-black">
      <div className="bg-black text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest">
        {title}
      </div>
      <span className="text-4xl font-black italic opacity-20 group-hover:opacity-100 transition-opacity" style={{ color }}>
        {mode === 'SSG' ? '01' : mode === 'SSR' ? '02' : '03'}
      </span>
    </div>

    <h3 className="text-5xl font-black italic mb-8 tracking-tighter uppercase text-black">{mode}</h3>

    <div className="space-y-6 flex-grow text-black">
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
      <div className="flex justify-between items-end mb-2 text-black">
        <span className="text-sm font-black italic uppercase tracking-widest">{mode === 'SSG' ? 'FASTEST' : mode === 'SSR' ? 'DEMAND' : 'HYBRID'}</span>
        <span className="text-2xl font-black italic">{percentage}%</span>
      </div>
      <div className="h-6 border-4 border-black bg-white overflow-hidden p-1">
        <div className="h-full transition-all duration-1000" style={{ width: `${percentage}%`, backgroundColor: color }} />
      </div>
    </div>
  </a>
);

export default function RenderingLabHub() {
  return (
    <div className="min-h-screen bg-white text-black font-sans p-6 md:p-12 selection:bg-yellow-300">
      <nav className="flex justify-between items-center mb-16 border-b-4 border-black pb-6 text-black">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-black rounded italic">RL</div>
          <div className="font-black uppercase italic text-sm tracking-tighter leading-none">RENDERING<br />LAB</div>
        </div>
        <div className="flex gap-6 items-center">
          <div className="hidden md:flex gap-6 text-[10px] font-black uppercase tracking-widest text-black">
            <a href="/" className="text-blue-600 border-b-2 border-blue-600 no-underline">Dashboard</a>
            <a href="/ssg" className="text-gray-400 hover:text-black transition-colors no-underline">SSG View</a>
            <a href="/ssr" className="text-gray-400 hover:text-black transition-colors no-underline">SSR View</a>
            <a href="/isr" className="text-gray-400 hover:text-black transition-colors no-underline">IRS View</a>
          </div>
          <button className="bg-black text-white p-2 rounded shadow-[4px_4px_0px_0px_rgba(37,99,235,1)]">
            <Search size={18} />
          </button>
        </div>
      </nav>

      <header className="mb-20 text-black">
        <p className="font-black uppercase tracking-widest text-xs mb-2 text-blue-600">LIVE RESEARCH BENCHMARKING</p>
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] uppercase italic text-black">
          SYSTEM<br />METRICS
        </h1>
      </header>

      <main className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <MetricCard
            title="STATIC GENERATION" mode="SSG" lcp="0.8" ttfb="120" percentage={92} color="#2563eb" href="/ssg"
          />
          <MetricCard
            title="SERVER RENDER" mode="SSR" lcp="1.5" ttfb="450" percentage={65} color="#ea580c" href="/ssr"
          />
          <MetricCard
            title="REVALIDATION" mode="ISR" lcp="1.1" ttfb="280" percentage={82} color="#10b981" href="/isr"
          />
        </div>

        <div className="bg-black text-white p-8 flex flex-col md:flex-row items-center justify-between shadow-[8px_8px_0px_0px_rgba(37,99,235,1)] gap-6">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-gray-900 rounded-lg">
              <Globe size={40} className="text-blue-500 animate-pulse" />
            </div>
            <div>
              <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white">REGION: US-CENTRAL1</h2>
              <p className="text-xs font-bold tracking-[0.3em] text-gray-500 uppercase text-white">Global Compute Nodes Active</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-black uppercase text-gray-500 mb-1">Infrastructure</p>
            <p className="font-bold italic uppercase tracking-widest text-white">Cloud Run (GCP)</p>
          </div>
        </div>
      </main>

      <footer className="mt-32 pt-8 border-t-4 border-black flex flex-col md:flex-row justify-between items-center gap-6 grayscale opacity-50 text-black">
        <div className="flex items-center gap-2">
          <Cpu size={20} />
          <p className="text-[10px] font-black uppercase tracking-[0.3em]">M.Sc. Applied Computer Science // Render Lab Hub</p>
        </div>
        <p className="text-[10px] font-black uppercase tracking-[0.3em]">© 2026 NextBench Research Project</p>
      </footer>
    </div>
  );
}