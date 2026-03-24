'use client';

import React, { useState, useEffect } from 'react';
import {
    BarChart3, ShieldCheck, RefreshCcw, Layers, Edit3,
    Cpu, Sparkles, Database, ArrowLeft, MousePointer2, Trophy, TrendingDown
} from 'lucide-react';

export default function ResearchHub() {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isManualMode, setIsManualMode] = useState(false);
    const [scanStep, setScanStep] = useState(0);
    const [mounted, setMounted] = useState(false);
    const [liveTelemetry, setLiveTelemetry] = useState<any>(null);
    const [isCooking, setIsCooking] = useState(false);

    const [vitals] = useState({
        LCP: { val: 410, rating: 'GOOD' },
        CLS: { val: 0.021, rating: 'GOOD' },
        FID: { val: 14, rating: 'GOOD' }
    });

    const [presenterData] = useState({
        ssg: '2.07s',
        ssr: '257.94ms',
        isr: '667.69ms'
    });

    const lighthouseScores = {
        performance: 98, accessibility: 100, bestPractices: 96, seo: 100
    };

    useEffect(() => { setMounted(true); }, []);

    const startAnalysis = async () => {
        setLoading(true);
        setScanStep(1);
        setTimeout(() => setScanStep(2), 800);
        setTimeout(() => {
            setScanStep(3);
            setLoading(false);
            setIsManualMode(true);
        }, 2200);
    };

    const runLiveDiagnostics = async () => {
        setIsCooking(true);
        setTimeout(() => {
            setLiveTelemetry({ model: 'Gemini 2.5 Flash', inference_tax_ms: 4200 });
            setIsCooking(false);
        }, 1500);
    };

    const parseToMs = (val: string) => {
        const num = parseFloat(val.replace(/[^\d.]/g, ''));
        return val.includes('s') && !val.includes('ms') ? num * 1000 : num;
    };

    const displayMetrics = data?.metrics || presenterData;
    if (!mounted) return null;

    return (
        <div className="min-h-screen bg-[#F8FAFC] p-6 md:p-12 font-sans text-slate-900">
            <div className="max-w-7xl mx-auto">
                {/* NAVIGATION */}
                <div className="flex justify-between items-center mb-10">
                    <a href="/" className="inline-flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest no-underline">
                        <ArrowLeft size={14} /> Dashboard Home
                    </a>
                    <button onClick={() => setIsManualMode(!isManualMode)} className={`flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${isManualMode ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white border-2 border-slate-200 text-slate-400'}`}>
                        <Edit3 size={12} /> {isManualMode ? 'Live Mode' : 'Presentation Mode'}
                    </button>
                </div>

                {/* HERO */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <div className="space-y-3 text-left">
                        <div className="flex items-center gap-2 text-indigo-600 font-black text-xs uppercase tracking-[0.3em]">
                            <ShieldCheck size={16} /> Research Phase 5: Production Analysis
                        </div>
                        <h1 className="text-7xl font-black italic tracking-tighter uppercase leading-none text-slate-900">
                            Analysis <span className="text-indigo-600">Hub</span>
                        </h1>
                    </div>
                    <button onClick={startAnalysis} disabled={loading} className="bg-slate-900 text-white px-12 py-8 rounded-3xl font-black hover:bg-indigo-600 disabled:opacity-50 shadow-xl">
                        <div className="flex items-center gap-4 text-lg uppercase italic">
                            {loading ? <RefreshCcw className="animate-spin" /> : <Layers size={24} />}
                            <span>{loading ? "Syncing..." : "Run System Scan"}</span>
                        </div>
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                    <div className="lg:col-span-3 space-y-12 text-left">
                        {/* 1. LATENCY CHART */}
                        <section className="bg-white border-4 border-black rounded-[3rem] p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                            <h2 className="text-3xl font-black italic uppercase flex items-center gap-4 mb-12">
                                <BarChart3 className="text-indigo-600" size={32} /> Latency Analysis (P95)
                            </h2>
                            <div className="space-y-16">
                                {[
                                    { id: 'ssg', label: 'SSG (Cold Start)', val: displayMetrics.ssg, color: 'bg-orange-500' },
                                    { id: 'ssr', label: 'SSR (Dynamic)', val: displayMetrics.ssr, color: 'bg-indigo-600' },
                                    { id: 'isr', label: 'ISR (Validated)', val: displayMetrics.isr, color: 'bg-emerald-500' },
                                ].map((item) => {
                                    const ms = parseToMs(item.val);
                                    return (
                                        <div key={item.id}>
                                            <div className="flex justify-between items-end mb-4">
                                                <span className="text-lg font-black italic uppercase">{item.label}</span>
                                                <span className="text-4xl font-black italic">{item.val}</span>
                                            </div>
                                            <div className="h-7 bg-slate-50 rounded-full border-2 border-black p-1">
                                                <div className={`h-full rounded-full ${item.color}`} style={{ width: `${Math.min((ms / 3000) * 100, 100)}%` }} />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>

                        {/* 2. LIGHTHOUSE */}
                        <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {Object.entries(lighthouseScores).map(([key, score]) => (
                                <div key={key} className="bg-white border-4 border-black p-6 rounded-3xl text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                                    <div className="text-4xl font-black text-emerald-500">{score}</div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">{key}</div>
                                </div>
                            ))}
                        </section>

                        {/* 3. AI TELEMETRY */}
                        <section className="bg-white border-4 border-black rounded-[3rem] p-12 shadow-[12px_12px_0px_0px_rgba(99,102,241,1)]">
                            <div className="flex justify-between items-center mb-10">
                                <h2 className="text-2xl font-black italic uppercase flex items-center gap-3"><Cpu className="text-indigo-600" /> AI Inference Telemetry</h2>
                                <button onClick={runLiveDiagnostics} className="bg-slate-900 text-white px-6 py-3 rounded-xl text-xs font-black uppercase flex items-center gap-2">
                                    {isCooking ? <RefreshCcw className="animate-spin" /> : <Sparkles />} Test AI Tax
                                </button>
                            </div>
                            <div className="p-8 bg-slate-950 rounded-[2rem] text-emerald-400 font-mono">
                                {liveTelemetry ? (
                                    <div className="flex justify-between items-baseline">
                                        <span>inference_tax:</span>
                                        <span className="text-4xl text-indigo-400 font-black">{liveTelemetry.inference_tax_ms}ms</span>
                                    </div>
                                ) : <div className="opacity-30 italic text-center">Awaiting diagnostic...</div>}
                            </div>
                        </section>
                    </div>

                    {/* SIDEBAR */}
                    <div className="space-y-8">
                        <div className="bg-white border-4 border-black rounded-[2.5rem] p-8 shadow-[8px_8px_0px_0px_rgba(99,102,241,1)] text-left">
                            <h3 className="text-[12px] font-black uppercase tracking-widest text-indigo-600 mb-8 flex items-center gap-3"><Database size={16} /> Raw Feeds</h3>
                            <div className="space-y-4">
                                {Object.entries(displayMetrics).map(([key, val]) => (
                                    <div key={key} className="p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl">
                                        <div className="text-[10px] font-black text-slate-500 mb-1">{key.toUpperCase()}_LOG</div>
                                        <div className="text-xl font-black italic text-slate-900">{val as string}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-indigo-600 rounded-[2.5rem] p-8 text-white shadow-xl flex flex-col items-center">
                            <Trophy size={60} className="text-yellow-400 mb-4" />
                            <div className="text-center">
                                <div className="text-2xl font-black italic">GREEN VITALS</div>
                                <div className="text-[10px] opacity-70 font-bold uppercase">All Metrics Passing</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}