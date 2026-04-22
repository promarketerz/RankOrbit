import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Send, FileText, CheckCircle2, Wand2, Download } from 'lucide-react';
import { optimizeResume } from '@/src/services/geminiService';
import Markdown from 'react-markdown';

export const AIResumePage = () => {
  const [resume, setResume] = useState('');
  const [jobDesc, setJobDesc] = useState('');
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleOptimize = async () => {
    if (!resume || !jobDesc) return;
    setIsOptimizing(true);
    const optimized = await optimizeResume(resume, jobDesc);
    setResult(optimized || "No result generated.");
    setIsOptimizing(false);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 flex flex-col items-center">
      <div className="w-full max-w-7xl flex-1 flex flex-col glass-main rounded-3xl overflow-hidden min-h-[calc(100vh-140px)]">
        
        <main className="flex-1 flex flex-col p-8 overflow-y-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-sans font-black tracking-tight mb-4">
              AI RESUME <span className="text-orange-500">FORGEMASTER</span>
            </h1>
            <p className="text-slate-400 font-medium">
              Tailor your resume for specific technical SEO roles in seconds using Gemini 3 Flash.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start flex-1">
            {/* Inputs */}
            <div className="space-y-6">
              <div className="glass-card p-6 rounded-3xl">
                <label className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500 mb-4 font-bold">
                  <FileText className="w-3 h-3" />
                  Your Current Resume
                </label>
                <textarea
                  value={resume}
                  onChange={(e) => setResume(e.target.value)}
                  placeholder="Paste your existing resume..."
                  className="w-full h-64 bg-transparent border-none outline-none text-sm text-white/90 placeholder:text-white/20 resize-none font-sans"
                />
              </div>

              <div className="glass-card p-6 rounded-3xl border-orange-500/20">
                <label className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-orange-400 mb-4 font-bold">
                  <Sparkles className="w-3 h-3" />
                  Target Job Description
                </label>
                <textarea
                  value={jobDesc}
                  onChange={(e) => setJobDesc(e.target.value)}
                  placeholder="Paste target SEO role description..."
                  className="w-full h-48 bg-transparent border-none outline-none text-sm text-white/90 placeholder:text-white/20 resize-none font-sans"
                />
              </div>

              <button
                onClick={handleOptimize}
                disabled={isOptimizing || !resume || !jobDesc}
                className="w-full py-4 bg-white text-black font-black rounded-2xl flex items-center justify-center gap-3 transition-all disabled:opacity-50 shadow-xl"
              >
                {isOptimizing ? (
                  <>
                    <Wand2 className="w-5 h-5 animate-spin" />
                    Forging Keywords...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Forge Optimized Resume
                  </>
                )}
              </button>
            </div>

            {/* Result Space */}
            <div className="sticky top-0 h-full">
              <AnimatePresence mode="wait">
                {result ? (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass-card p-8 rounded-3xl border-green-500/20 h-[calc(100vh-320px)] flex flex-col"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <h3 className="font-bold text-white/90 uppercase tracking-wider text-xs">Optimization Complete</h3>
                      </div>
                      <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                        <Download className="w-5 h-5 text-white/40" />
                      </button>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto pr-4 markdown-body text-sm text-slate-300 leading-relaxed custom-scrollbar">
                      <Markdown>{result}</Markdown>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="glass-card border-dashed border-white/10 p-12 rounded-3xl h-[600px] flex flex-col items-center justify-center text-center text-slate-600"
                  >
                    <Wand2 className="w-12 h-12 mb-4 opacity-50" />
                    <p className="text-sm font-medium">
                      Your optimized SEO resume <br /> will materialize here
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
