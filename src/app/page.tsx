'use client';

import React, { useState } from 'react';
import {
  Zap,
  Clock,
  RefreshCcw,
  BarChart3,
  Activity,
  Cpu,
  Globe,
  Search,
  TrendingDown,
  Sparkles,
  Terminal,
  BrainCircuit,
  Timer
} from 'lucide-react';

/**
 * STRATEGY METRIC CARD
 * Uses standard anchor tags for preview environment compatibility.
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
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);
  const [analysisMetrics, setAnalysisMetrics] = useState<{ duration: number } | null>(null);

  const handleGenerateSummary = async () => {
    setIsAnalyzing(true);
    setSummary(null);
    const start = performance.now();

    try {
      const response = await fetch('/api/summarize', {
        method: 'POST',
      });
      const data = await response.json();
      setSummary(data.summary);
      setAnalysisMetrics({ duration: Math.round(performance.now() - start) });
    } catch (error) {
      console.error("AI Analysis failed:", error);
      setSummary("Error: Unable to reach Gemini API. Please check your .env.local file.");
    } finally {
      setIsAnalyzing(false);
    }
  };

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
            <a href="/isr" className="text-gray-400 hover:text-black transition-colors no-underline">ISR View</a>
          </div>
          <button className="bg-black text-white p-2 rounded shadow-[4px_4px_0px_0px_rgba(37,99,235,1)]">
            <Search size={18} />
          </button>
        </div>
      </nav>

      <header className="mb-20 text-black">
        <p className="font-black uppercase tracking-widest text-[10px] mb-2 text-blue-600"></p>
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] uppercase italic text-black">
          SYSTEM<br />METRICS
        </h1>
      </header>

      <main className="max-w-7xl mx-auto space-y-16">
        {/* Main Benchmarking Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MetricCard title="STATIC GENERATION" mode="SSG" lcp="0.8" ttfb="120" percentage={92} color="#2563eb" href="/ssg" />
          <MetricCard title="SERVER RENDER" mode="SSR" lcp="1.5" ttfb="450" percentage={65} color="#ea580c" href="/ssr" />
          <MetricCard title="REVALIDATION" mode="ISR" lcp="1.1" ttfb="280" percentage={82} color="#10b981" href="/isr" />
        </div>

        {/* Latency Distribution Graph */}
        <section className="border-4 border-black p-8 bg-gray-50 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-black italic uppercase tracking-tighter">LATENCY DISTRIBUTION</h2>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Cross-Strategy Performance Gap (Target Metrics)</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-black"><div className="w-3 h-3 bg-blue-600" /> <span className="text-[10px] font-bold uppercase">SSG</span></div>
              <div className="flex items-center gap-2 text-black"><div className="w-3 h-3 bg-orange-600" /> <span className="text-[10px] font-bold uppercase">SSR</span></div>
              <div className="flex items-center gap-2 text-black"><div className="w-3 h-3 bg-emerald-500" /> <span className="text-[10px] font-bold uppercase">ISR</span></div>
            </div>
          </div>

          <div className="h-64 flex items-end gap-6 md:gap-12 px-4 border-b-4 border-black">
            <div className="flex-1 flex flex-col items-center gap-2 group">
              <div className="w-full bg-blue-600 border-x-4 border-t-4 border-black h-[20%] group-hover:h-[25%] transition-all duration-500 relative">
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 font-black italic text-xs">120ms</span>
              </div>
              <span className="font-black text-[10px] uppercase opacity-40">TTFB</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-2 group">
              <div className="w-full bg-orange-600 border-x-4 border-t-4 border-black h-[85%] group-hover:h-[90%] transition-all duration-500 relative">
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 font-black italic text-xs">450ms</span>
              </div>
              <span className="font-black text-[10px] uppercase opacity-40">TTFB</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-2 group">
              <div className="w-full bg-emerald-500 border-x-4 border-t-4 border-black h-[55%] group-hover:h-[60%] transition-all duration-500 relative">
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 font-black italic text-xs">280ms</span>
              </div>
              <span className="font-black text-[10px] uppercase opacity-40">TTFB</span>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-2 text-orange-600">
            <TrendingDown size={16} />
            <p className="text-[10px] font-black uppercase tracking-tight">Note: Higher TTFB in SSR variant is due to dynamic hydration and server logic execution time.</p>
          </div>
        </section>

        {/* AI Research Assistant Section */}
        <section className="bg-slate-950 text-white rounded-[2rem] p-10 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-500/10 to-transparent pointer-events-none" />

          <div className="flex flex-col lg:flex-row gap-12 items-start relative z-10">
            <div className="lg:w-1/3">
              <div className="flex items-center gap-3 text-blue-400 mb-4">
                <BrainCircuit size={32} />
                <h2 className="text-3xl font-black italic tracking-tighter uppercase">AI Research Assistant</h2>
              </div>
              <p className="text-gray-400 text-sm font-bold uppercase leading-relaxed mb-8">
                Use Flash to take a look at the current infrastructure data and create a summary of its performance.
              </p>

              <button
                onClick={handleGenerateSummary}
                disabled={isAnalyzing}
                className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-black py-6 rounded-2xl transition-all shadow-[0px_8px_0px_0px_rgba(30,58,138,1)] active:translate-y-1 active:shadow-none uppercase italic tracking-widest"
              >
                {isAnalyzing ? (
                  <RefreshCcw className="animate-spin" />
                ) : (
                  <Sparkles size={20} />
                )}
                {isAnalyzing ? "Processing AI Logic..." : "Generate Research Summary"}
              </button>
            </div>

            <div className="lg:w-2/3 w-full bg-white/5 border border-white/10 rounded-3xl p-8 min-h-[300px] flex flex-col">
              <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 flex items-center gap-2">
                  <Terminal size={12} /> Execution_Output
                </span>
              </div>

              <div className="flex-grow font-mono text-sm leading-relaxed text-blue-100">
                {isAnalyzing ? (
                  <div className="space-y-2 animate-pulse">
                    <p className="">{`> Accessing Gemini 2.5 Flash API...`}</p>
                    <p className="">{`> Payload: 20 products from src/lib/data.ts`}</p>
                    <p className="">{`> Performing background compute...`}</p>
                  </div>
                ) : summary ? (
                  <div className="space-y-4 animate-in fade-in duration-700">
                    <p className="text-white italic">{summary}</p>
                    {analysisMetrics && (
                      <div className="flex items-center gap-4 mt-6 pt-4 border-t border-white/10">
                        <div className="flex items-center gap-2 text-green-400">
                          <Timer size={16} />
                          <span className="text-[10px] font-black uppercase">Round Trip: {analysisMetrics.duration}ms</span>
                        </div>
                        <div className="flex items-center gap-2 text-blue-400">
                          <Activity size={16} />
                          <span className="text-[10px] font-black uppercase">Model: Gemini-2.5-Flash</span>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="opacity-30 italic text-center py-12">Click the button above to start the AI performance analysis...</p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Global Infrastructure Status */}
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
          <div className="text-right text-white">
            <p className="text-[10px] font-black uppercase text-gray-500 mb-1">Infrastructure</p>
            <p className="font-bold italic uppercase tracking-widest text-white italic">Cloud Run (GCP)</p>
          </div>
        </div>
      </main>

      <footer className="mt-32 pt-8 border-t-4 border-black flex flex-col md:flex-row justify-between items-center gap-6 grayscale opacity-50 text-black">
        <div className="flex items-center gap-2 text-black">
          <Cpu size={20} />
          <p className="text-[10px] font-black uppercase tracking-[0.3em]">M.Sc. Applied Computer Science // Render Lab Hub</p>
        </div>
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black">© 2026 NextBench Research Project</p>
      </footer>
    </div>
  );
}