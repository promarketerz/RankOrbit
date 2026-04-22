import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Globe2, Sparkles, RefreshCw } from 'lucide-react';
import { MOCK_JOBS } from '@/src/data/mockJobs';
import { JobCard } from '@/src/components/JobCard';
import { cn } from '@/src/lib/utils';

export const HomePage = () => {
  const [search, setSearch] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 800);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 flex flex-col items-center">
      {/* Design-specified Glass Dashboard Container */}
      <div className="w-full max-w-7xl flex-1 flex flex-col glass-main rounded-3xl overflow-hidden min-h-[calc(100vh-140px)]">
        
        {/* Dashboard Content Area */}
        <main className="flex-1 flex flex-col lg:flex-row overflow-hidden p-8 gap-8">
          
          {/* Left: Job Feed (3D Stacked View) */}
          <section className="lg:w-2/5 flex flex-col gap-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold flex items-center gap-2">
                Live Job Feed
                <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              </h2>
              <span className="text-xs text-slate-400">142 new jobs today</span>
            </div>
            
            <div className="relative group mb-4">
              <div className="absolute inset-0 bg-orange-500/10 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity" />
              <div className="relative glass-card p-2 rounded-2xl flex items-center gap-4 border-white/5">
                <div className="pl-4">
                  <Search className="w-5 h-5 text-white/30" />
                </div>
                <input
                  type="text"
                  placeholder="Search elite SEO roles..."
                  className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-white/20 font-medium text-sm"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-6 overflow-y-auto pr-2 perspective-stack flex-1 scrollbar-hide">
              {MOCK_JOBS.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </section>

          {/* Right: AI Tools & Market Pulse */}
          <section className="flex-1 flex flex-col gap-8">
            {/* Hero Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { label: 'Avg Salary', value: '$92k', trend: '+4.2%' },
                { label: 'Active Jobs', value: '1,420', trend: '-2.1%' },
                { label: 'Remote Index', value: '94%', trend: '+0.5%' },
              ].map((stat) => (
                <div key={stat.label} className="glass-card p-4 rounded-2xl">
                  <div className="text-white/40 text-[10px] uppercase tracking-wider mb-1 font-bold">{stat.label}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold font-mono">{stat.value}</span>
                    <span className={cn("text-[9px] font-bold px-1.5 py-0.5 rounded", 
                      stat.trend.startsWith('+') ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-500"
                    )}>
                      {stat.trend}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Market Pulse Chart Card */}
            <div className="p-8 bg-indigo-600/10 border border-indigo-500/20 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-indigo-500/20 transition-all"></div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-indigo-400 mb-8 flex items-center gap-2">
                <Globe2 className="w-4 h-4" />
                Market Pulse: SEO Demand
              </h3>
              <div className="flex items-end gap-3 h-32 relative z-10">
                <div className="flex-1 bg-indigo-500/30 rounded-t-lg hover:bg-indigo-500/40 transition-colors" style={{ height: '40%' }}></div>
                <div className="flex-1 bg-indigo-500/40 rounded-t-lg hover:bg-indigo-500/50 transition-colors" style={{ height: '65%' }}></div>
                <div className="flex-1 bg-indigo-500/50 rounded-t-lg hover:bg-indigo-500/60 transition-colors" style={{ height: '55%' }}></div>
                <div className="flex-1 bg-orange-500/60 rounded-t-lg hover:bg-orange-500/70 transition-colors shadow-[0_-4px_20px_rgba(249,115,22,0.3)]" style={{ height: '90%' }}></div>
                <div className="flex-1 bg-indigo-500/40 rounded-t-lg hover:bg-indigo-500/50 transition-colors" style={{ height: '75%' }}></div>
                <div className="flex-1 bg-indigo-500/30 rounded-t-lg hover:bg-indigo-500/40 transition-colors" style={{ height: '50%' }}></div>
              </div>
              <div className="mt-6 flex justify-between text-[10px] text-slate-500 font-mono font-bold">
                <span>JAN</span><span>FEB</span><span>MAR</span><span className="text-orange-400">APR (NOW)</span><span>MAY</span><span>JUN</span>
              </div>
            </div>

            {/* AI Resume Strength Card */}
            <div className="flex-1 glass-card rounded-3xl p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full -mr-24 -mt-24 blur-3xl group-hover:bg-orange-500/20 transition-all"></div>
              
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div>
                  <h3 className="font-bold text-2xl text-white mb-1">AI Resume Power</h3>
                  <p className="text-xs text-slate-400">Tailored insights for highest match</p>
                </div>
                <div className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-black border border-green-500/10 backdrop-blur-md">
                  92% MATCH
                </div>
              </div>

              <div className="space-y-6 relative z-10">
                <div className="bg-black/20 p-5 rounded-2xl border border-white/5 backdrop-blur-sm">
                  <p className="text-xs text-slate-400 mb-3 italic underline decoration-orange-500/50 font-medium">AI Insight for Elite Roles:</p>
                  <p className="text-sm leading-relaxed text-slate-200">
                    Your experience with <span className="text-orange-400 font-bold">Headless CMS architectures</span> is a key differentiator. We suggest highlighting your Next.js SEO audit results in your professional summary.
                  </p>
                </div>
                
                <button 
                  onClick={() => window.location.href = '/resume'}
                  className="w-full py-4 bg-white text-black font-black rounded-2xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 shadow-xl"
                >
                  <Sparkles className="w-5 h-5 fill-current" />
                  Optimize Resume for Global SEO
                </button>
              </div>
            </div>
          </section>
        </main>

        {/* Status Bar Footer */}
        <footer className="px-8 py-4 glass-header border-t-0 flex justify-between items-center text-[10px] text-slate-500 uppercase tracking-widest font-bold">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              Orbit System: <span className="text-green-500">Online</span>
            </span>
            <span className="flex items-center gap-2">
              <RefreshCw className={cn("w-3 h-3", isRefreshing && "animate-spin")} />
              Last Update: 2 mins ago
            </span>
          </div>
          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-white cursor-pointer transition-colors">API Access</span>
            <span className="text-slate-300">© 2026 RankOrbit International</span>
          </div>
        </footer>
      </div>
    </div>
  );
};
