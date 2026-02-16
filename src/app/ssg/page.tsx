import React from 'react';
import {
    ArrowLeft,
    Zap,
    Clock,
    BarChart3,
    Globe,
    Calendar,
    CheckCircle2,
    AlertTriangle,
    Info
} from 'lucide-react';

/**
 * HUMANIZED RESEARCH DATA
 * Descriptions reflect personal testing observations rather than generic specs.
 */
const mockProducts = [
    { id: "1", name: "Quantum Processor X1", category: "Core Unit", price: "€499.00", description: "The chip that powers 70% of our rendering tests. Surprisingly affordable and consistent.", lastUpdated: "Today, 04:00 AM" },
    { id: "2", name: "Neural Link Module", category: "AI Interface", price: "€850.00", description: "My go-to for neural integration. I've found this to be the stablest in the lineup.", lastUpdated: "Today, 04:00 AM" },
    { id: "3", name: "Cloud Core G2", category: "Infrastructure", price: "€1,200.00", description: "The 'heavy lifter.' It handles our massive parallel operations without breaking a sweat.", lastUpdated: "Today, 04:00 AM" },
    { id: "4", name: "Edge Sync Hub", category: "Networking", price: "€320.00", description: "Small but mighty. It’s what I use to keep latency low across different test regions.", lastUpdated: "Today, 04:00 AM" }
];

const App = () => {
    return (
        <div className="min-h-screen bg-[#F4F1EA] text-slate-900 font-serif selection:bg-black selection:text-white p-4 md:p-12">

            {/* HUMANIZED RESEARCH BRIEF - INDIGO THEME */}
            <section className="max-w-5xl mx-auto mb-12 bg-indigo-600 text-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] font-sans">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                    <div className="p-3 bg-white text-indigo-600 rounded-lg w-fit">
                        <BarChart3 size={24} />
                    </div>
                    <div>
                        <h2 className="text-xs font-black uppercase tracking-[0.4em]">Master's Research // Variant 01</h2>
                        <p className="text-2xl font-black italic uppercase tracking-tighter">The "Sunday Meal Prep" Approach (SSG)</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4 md:border-r border-white/20 md:pr-10">
                        <p className="text-xl font-bold leading-tight italic">
                            "Think of this like meal prep on Sunday—I cook everything once, store it, and it's ready instantly all week."
                        </p>
                        <p className="text-sm opacity-90 leading-relaxed">
                            I pre-render these pages during the build process. Since there's no waiting for a server or AI to 'cook' the data when you click, it's lightning fast. What surprised me during testing was how much this saves on API costs!
                        </p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                        <div className="flex justify-between items-end mb-4 border-b border-white/20 pb-2">
                            <span className="text-[10px] font-black uppercase tracking-widest">Efficiency Rating</span>
                            <span className="text-4xl font-black italic">0.2s</span>
                        </div>
                        <p className="text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                            <CheckCircle2 size={14} className="text-emerald-400" /> Best for: Portfolios, Blogs, Documentation
                        </p>
                        <p className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                            <AlertTriangle size={14} className="text-amber-400" /> Avoid for: Stock prices, Live chats
                        </p>
                    </div>
                </div>
            </section>

            {/* THE GAZETTE - METAPHOR LAYER */}
            <div className="max-w-5xl mx-auto border-4 border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] font-sans overflow-hidden">
                <header className="p-8 border-b-4 border-black text-center relative">
                    <div className="absolute top-4 right-8 flex items-center gap-2 text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                        <Calendar size={12} />
                    </div>
                    <div className="flex justify-between items-center mb-6 font-black text-[10px] uppercase tracking-widest opacity-40">
                        <span></span>
                        <span></span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter mb-4 leading-none text-black">THE MORNING EDITION</h1>
                    <p className="font-bold text-sm tracking-[0.3em] uppercase opacity-60">Pre-cooked & Flash-Frozen for Speed</p>
                </header>

                <main className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Left Column: Personal Observations */}
                    <div className="p-6 md:p-10 border-b-4 lg:border-b-0 lg:border-r-4 border-black bg-[#FAF9F6]">
                        <h2 className="text-3xl font-black italic uppercase mb-8 border-b-2 border-black pb-2 flex items-center gap-3">
                            <Info size={24} /> My Observations
                        </h2>
                        <div className="space-y-8">
                            {mockProducts.map(product => (
                                <article key={product.id} className="group">
                                    <h3 className="text-2xl font-black leading-none mb-2 uppercase group-hover:text-indigo-600 transition-colors">{product.name}</h3>
                                    <p className="font-serif italic text-slate-600 mb-3">{product.description}</p>
                                    <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-tighter">
                                        <span className="bg-black text-white px-2 py-0.5">{product.price}</span>
                                        <span className="text-slate-400 flex items-center gap-1">
                                            <Clock size={12} /> Captured at Build
                                        </span>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Speed Metrics & Trade-offs */}
                    <div className="p-6 md:p-10 flex flex-col items-center bg-slate-50">
                        <div className="w-full bg-white border-4 border-black p-8 mb-8 shadow-[8px_8px_0px_0px_rgba(79,70,229,1)]">
                            <p className="font-black text-[10px] uppercase tracking-[0.5em] text-slate-400 mb-4">Actual Page Speed</p>
                            <p className="text-8xl font-black italic tracking-tighter leading-none mb-4">0.2<span className="text-3xl ml-2">S</span></p>
                            <p className="text-xs font-bold leading-relaxed opacity-70">
                                Because the HTML was already waiting on the server, the browser didn't have to wait for any scripts to run. This is the fastest experience possible.
                            </p>
                        </div>

                        <div className="w-full border-2 border-dashed border-slate-300 p-6 rounded-xl mb-8">
                            <h4 className="font-black uppercase text-xs mb-4 flex items-center gap-2">
                                <Globe size={16} className="text-indigo-600" /> When I use SSG
                            </h4>
                            <table className="w-full text-left text-xs">
                                <thead>
                                    <tr className="border-b-2 border-black font-black uppercase tracking-tighter">
                                        <th className="pb-2">Feature</th>
                                        <th className="pb-2">Benefit</th>
                                    </tr>
                                </thead>
                                <tbody className="font-medium text-slate-600">
                                    <tr className="border-b border-slate-100">
                                        <td className="py-2 font-bold text-slate-900">SEO</td>
                                        <td className="py-2">Search engines love pre-rendered text.</td>
                                    </tr>
                                    <tr className="border-b border-slate-100">
                                        <td className="py-2 font-bold text-slate-900">Scalability</td>
                                        <td className="py-2">Handles 1,000s of users with zero server strain.</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 font-bold text-slate-900">Cost</td>
                                        <td className="py-2">Cheapest to host since it's just static files.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <button className="w-full py-5 bg-black text-white font-black uppercase italic tracking-widest hover:translate-x-1 hover:translate-y-1 shadow-[6px_6px_0px_0px_rgba(79,70,229,1)] transition-all flex items-center justify-center gap-3">
                            <ArrowLeft size={20} /> Back to Lab Dashboard
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;