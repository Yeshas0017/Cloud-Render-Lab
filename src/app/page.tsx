'use client';

import React, { useState } from 'react';
import {
  Zap, Clock, RefreshCcw, BarChart3, Activity, Cpu, Terminal,
  BrainCircuit, Timer, User, BookOpen, Globe, Search, TrendingDown,
  Sparkles, Lightbulb
} from 'lucide-react';

const MetricCard = ({ title, mode, lcp, ttfb, percentage, color, href, metaphor }: any) => (
  <a href={href} className="group relative bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col h-full cursor-pointer no-underline text-black overflow-hidden">
    <div className="flex justify-between items-start mb-6">
      <div className="bg-black text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest">{title}</div>
      <div className="text-right">
        <span className="text-4xl font-black italic opacity-20 group-hover:opacity-100 transition-opacity" style={{ color }}>
          {mode === 'SSG' ? '01' : mode === 'SSR' ? '02' : '03'}
        </span>
        <p className="text-[10px] font-bold text-slate-400 uppercase italic">{metaphor}</p>
      </div>
    </div>
    <h3 className="text-5xl font-black italic mb-8 tracking-tighter uppercase">{mode}</h3>
    <div className="space-y-6 flex-grow">
      <div>
        <p className="bg-blue-600 text-white inline-block px-2 py-0.5 text-[10px] font-black uppercase tracking-wider mb-1">LCP SPEED</p>
        <p className="text-5xl font-black italic leading-none">{lcp}<span className="text-xl ml-1">S</span></p>
      </div>
      <div>
        <p className="bg-blue-600 text-white inline-block px-2 py-0.5 text-[10px] font-black uppercase tracking-wider mb-1">WAIT TIME</p>
        <p className="text-5xl font-black italic leading-none">{ttfb}<span className="text-xl ml-1">MS</span></p>
      </div>
    </div>
    <div className="mt-8 pt-6 border-t-2 border-dotted border-gray-200">
      <div className="flex justify-between items-end mb-2">
        <span className="text-sm font-black italic uppercase tracking-widest text-slate-400">RESEARCH_SCORE</span>
        <span className="text-2xl font-black italic">{percentage}%</span>
      </div>
      <div className="h-6 border-4 border-black bg-white overflow-hidden p-1">
        <div className="h-full transition-all duration-1000" style={{ width: `${percentage}%`, backgroundColor: color }} />
      </div>
    </div>
  </a>
);

export default function RenderingLabHub() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);

  const handleGenerateSummary = async () => {
    setIsAnalyzing(true);
    setSummary(null);
    try {
      const response = await fetch('/api/summarize', { method: 'POST' });
      const data = await response.json();
      setSummary(data.summary);
    } catch (error) { setSummary("Error connecting to Gemini API."); }
    finally { setIsAnalyzing(false); }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFF] text-black font-sans p-6 md:p-12 selection:bg-yellow-300">
      <header className="mb-20">
        <div className="flex justify-between items-start mb-6">
          <div className="bg-emerald-100 text-emerald-800 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border border-emerald-200 shadow-sm">
            <User size={14} />
          </div>

          {/* Top Right Navigation Links */}
          <nav className="flex gap-3">
            {[
              { label: 'SSG', href: '/ssg', color: '#2563eb' },
              { label: 'SSR', href: '/ssr', color: '#ea580c' },
              { label: 'ISR', href: '/isr', color: '#10b981' }
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="bg-white border-2 border-black px-4 py-1.5 text-[10px] font-black uppercase tracking-widest hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none no-underline text-black"
                style={{ '--hover-bg': link.color } as any}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = link.color}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] uppercase italic text-black mb-8">
          Cloud<br /><span className="text-blue-600">Render Lab</span>
        </h1>
        <p className="text-2xl font-bold max-w-3xl leading-relaxed text-slate-600 border-l-8 border-blue-600 pl-8 italic">
          Hi! I'm Yeshas. In this project, I tested how different Next.js rendering strategies perform in the real world.
          After running hundreds of tests on Google Cloud, here is the story of my findings...
        </p>
      </header>

      <main className="max-w-7xl mx-auto space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MetricCard title="MEAL PREP" mode="SSG" metaphor="Newspaper" lcp="0.8" ttfb="120" percentage={92} color="#2563eb" href="/ssg" />
          <MetricCard title="PERSONAL CHEF" mode="SSR" metaphor="The Kitchen" lcp="1.5" ttfb="450" percentage={65} color="#ea580c" href="/ssr" />
          <MetricCard title="THE BUFFET" mode="ISR" metaphor="Hybrid Portal" lcp="1.1" ttfb="280" percentage={82} color="#10b981" href="/isr" />
        </div>

        {/* Human Context Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 border-4 border-black p-10 bg-slate-50 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
            <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-8 flex items-center gap-4 text-black">
              <BookOpen className="text-blue-600" /> Researcher's Perspective
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-black">
              <div className="space-y-6">
                <div className="bg-white p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="font-black text-xs uppercase text-blue-600 mb-2 tracking-widest flex items-center gap-2"><Lightbulb size={14} /> Biggest Surprise</h4>
                  <p className="text-lg font-bold italic leading-relaxed">“I thought static pages would be boring, but I realized they are the secret to global speed. My first 0.2s load time on GCP was a 'Eureka' moment!”</p>
                </div>
                <div className="bg-white p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="font-black text-xs uppercase text-emerald-600 mb-2 tracking-widest flex items-center gap-2"><Activity size={14} /> The "AI Tax"</h4>
                  <p className="text-lg font-bold italic leading-relaxed">“Intelligence costs time. Every AI summary adds ~4 seconds. My goal is to find the best way to hide that wait from the user.”</p>
                </div>
              </div>
              <div className="bg-black text-white p-8 font-mono text-sm leading-relaxed flex flex-col justify-between border-t-8 border-emerald-500">
                <div>
                  <p className="mb-6 text-emerald-400 font-black tracking-widest uppercase flex items-center gap-2"><Terminal size={16} /> YESHAS_LOG_V3.txt</p>
                  <p className="text-lg font-bold italic leading-relaxed">"Day 1: I thought SSG was always best. Day 30: After 50+ deployments, I realized that ISR (the Buffet) is the true hero of the AI era."</p>
                </div>
                <p className="mt-8 pt-4 border-t border-white/20 opacity-40 text-[10px] uppercase font-black tracking-widest">Infra: GCP Cloud Run</p>
              </div>
            </div>
          </div>
          <div className="bg-blue-600 text-white p-8 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-center">
            <h3 className="text-3xl font-black italic uppercase mb-8">The Tech Stack</h3>
            <div className="space-y-6">
              {[{ l: "Infrastructure", v: "Google Cloud Run", i: Globe }, { l: "Intelligence", v: "Gemini 2.5 Flash", i: BrainCircuit }, { l: "Framework", v: "Next.js 15 (App Router)", i: Cpu }, { l: "Benchmarking", v: "Lighthouse CI / k6", i: BarChart3 }].map((item, i) => (
                <div key={i} className="border-l-4 border-white/30 pl-4">
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">{item.l}</p>
                  <p className="font-bold flex items-center gap-2 uppercase italic text-sm text-white"><item.i size={14} /> {item.v}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latency Distribution Graph */}
        <section className="border-4 border-black p-10 bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-black">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-black italic uppercase tracking-tighter">LATENCY DISTRIBUTION</h2>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Cross-Strategy Performance Gap (Target Metrics)</p>
            </div>
          </div>

          <div className="h-80 flex items-end gap-12 px-8 border-b-4 border-black relative">
            <div className="flex-1 flex flex-col items-center gap-4 group">
              <div className="w-full bg-blue-600 border-x-4 border-t-4 border-black h-[15%] group-hover:h-[20%] transition-all duration-700 relative shadow-[4px_-4px_0px_0px_rgba(0,0,0,0.1)]">
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 font-black italic text-sm">120ms</span>
              </div>
              <span className="font-black text-[10px] uppercase text-slate-400 tracking-widest">MEAL PREP</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-4 group">
              <div className="w-full bg-orange-600 border-x-4 border-t-4 border-black h-[90%] group-hover:h-[95%] transition-all duration-700 relative shadow-[4px_-4px_0px_0px_rgba(0,0,0,0.1)]">
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 font-black italic text-sm">450ms</span>
              </div>
              <span className="font-black text-[10px] uppercase text-slate-400 tracking-widest">CHEF KITCHEN</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-4 group">
              <div className="w-full bg-emerald-500 border-x-4 border-t-4 border-black h-[45%] group-hover:h-[50%] transition-all duration-700 relative shadow-[4px_-4px_0px_0px_rgba(0,0,0,0.1)]">
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 font-black italic text-sm">280ms</span>
              </div>
              <span className="font-black text-[10px] uppercase text-slate-400 tracking-widest">THE BUFFET</span>
            </div>
          </div>
          <div className="mt-8 flex items-center gap-3 text-orange-600 font-black italic text-xs uppercase tracking-tight">
            <TrendingDown size={18} /> Note: The 4.2s gap is my measured 'AI TAX' during server-side computation.
          </div>
        </section>

        {/* AI Research Assistant Section */}
        <section className="bg-slate-950 text-white rounded-[3rem] p-12 shadow-2xl relative overflow-hidden group">
          <div className="flex flex-col lg:flex-row gap-16 items-start relative z-10">
            <div className="lg:w-1/3">
              <div className="flex items-center gap-4 text-blue-400 mb-6">
                <BrainCircuit size={48} className="animate-pulse" />
                <h2 className="text-4xl font-black italic tracking-tighter uppercase leading-none text-white">AI RESEARCH<br />ASSISTANT</h2>
              </div>
              <p className="text-slate-400 text-lg font-bold italic mb-10 leading-relaxed">
                "I'm calling Gemini 2.5 Flash to summarize my hardware list. This is the 'Personal Chef' test of the project."
              </p>
              <button onClick={handleGenerateSummary} disabled={isAnalyzing} className="w-full flex items-center justify-center gap-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-black py-6 rounded-3xl transition-all shadow-[0px_10px_0px_0px_rgba(30,58,138,1)] active:translate-y-2 active:shadow-none uppercase italic tracking-widest text-xl">
                {isAnalyzing ? <RefreshCcw className="animate-spin" /> : <Sparkles size={24} />}
                {isAnalyzing ? "AI IS 'COOKING'..." : "START AI SUMMARY"}
              </button>
            </div>
            <div className="lg:w-2/3 w-full bg-white/5 border-2 border-white/10 rounded-[2rem] p-10 min-h-[350px] flex flex-col backdrop-blur-md">
              <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
                <div className="flex gap-3"><div className="w-4 h-4 rounded-full bg-red-500" /><div className="w-4 h-4 rounded-full bg-yellow-500" /><div className="w-4 h-4 rounded-full bg-green-500" /></div>
                <span className="text-[12px] font-black uppercase tracking-[0.4em] text-slate-500">EXECUTION_TERMINAL_V3</span>
              </div>
              <div className="flex-grow font-mono text-base leading-relaxed text-blue-100 italic">
                {summary ? <p className="text-xl text-white font-bold leading-relaxed animate-in fade-in">{summary}</p> : <p className="opacity-30">Run the test above to generate the live research summary...</p>}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-40 pt-12 border-t-4 border-black flex flex-col md:flex-row justify-between items-center gap-8 grayscale opacity-40 font-black text-[10px] uppercase tracking-[0.4em] text-black">
        <div className="flex items-center gap-4">
          <Cpu size={24} />
          <div>
            <p>M.Sc. APPLIED COMPUTER SCIENCE // RESEARCH HUB</p>
            <p className="text-blue-600">INFRASTRUCTURE: GOOGLE CLOUD RUN</p>
          </div>
        </div>
        <p>© 2026 YESHAS RESEARCH LAB // BENCHMARKING_PHASE_2.2</p>
      </footer>
    </div>
  );
}