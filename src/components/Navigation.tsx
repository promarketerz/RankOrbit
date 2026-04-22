import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Briefcase, FileText, BarChart3, Bookmark, Search } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navItems = [
  { path: '/', label: 'Jobs', icon: Briefcase },
  { path: '/resume', label: 'AI Resume', icon: FileText },
  { path: '/trends', label: 'Trends', icon: BarChart3 },
];

export const Navigation = () => {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-rose-600 rounded-lg shadow-lg shadow-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="font-bold text-lg text-white">R</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-white">
            Rank<span className="text-orange-500">Orbit</span>
          </h1>
        </Link>
      </div>

      <nav className="flex items-center gap-8">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "relative flex items-center gap-2 text-sm font-medium transition-all py-1",
                isActive 
                  ? "text-white border-b-2 border-orange-500" 
                  : "text-slate-400 hover:text-white"
              )}
            >
              <Icon className="w-4 h-4" />
              <span>{item.label}</span>
            </Link>
          );
        })}
        <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium">
          <Bookmark className="w-4 h-4" />
          <span>Bookmarks</span>
        </button>
      </nav>

      <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full border border-white/5">
        <div className="w-6 h-6 rounded-full bg-slate-500 bg-[url('https://i.pravatar.cc/150?u=seo')] bg-cover border border-white/10" />
        <span className="text-xs font-medium uppercase tracking-wider text-slate-300">Alex Rivera</span>
      </div>
    </header>
  );
};
