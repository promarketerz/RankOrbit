import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, DollarSign, Zap } from 'lucide-react';

const salaryData = [
  { name: 'Intern', value: 45000 },
  { name: 'Specialist', value: 65000 },
  { name: 'Strategist', value: 92000 },
  { name: 'Manager', value: 115000 },
  { name: 'Director', value: 160000 },
];

const platformData = [
  { name: 'LinkedIn', value: 45, color: '#0077B5' },
  { name: 'WeWorkRemotely', value: 25, color: '#FF4C4C' },
  { name: 'SEOJobs', value: 15, color: '#F97316' },
  { name: 'Upwork', value: 10, color: '#65A30D' },
  { name: 'Others', value: 5, color: '#71717A' },
];

const trendProgress = [
  { day: 'Mon', jobs: 40 },
  { day: 'Tue', jobs: 35 },
  { day: 'Wed', jobs: 52 },
  { day: 'Thu', jobs: 48 },
  { day: 'Fri', jobs: 70 },
  { day: 'Sat', jobs: 30 },
  { day: 'Sun', jobs: 25 },
];

export const TrendsPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 flex flex-col items-center">
      <div className="w-full max-w-7xl flex-1 flex flex-col glass-main rounded-3xl overflow-hidden min-h-[calc(100vh-140px)]">
        
        <main className="flex-1 flex flex-col p-8 overflow-y-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-sans font-black tracking-tight mb-4">
              SEO MARKET <span className="text-orange-500">INTELLIGENCE</span>
            </h1>
            <p className="text-slate-400 font-medium">
              Real-time analytics on global SEO hiring trends and compensation models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Demand Surge', value: '+18%', icon: TrendingUp, color: 'text-green-400' },
              { label: 'Remote Ratio', value: '92%', icon: Zap, color: 'text-yellow-400' },
              { label: 'Applicants/Job', value: '42', icon: Users, color: 'text-blue-400' },
              { label: 'Avg SEO Salary', value: '$96k', icon: DollarSign, color: 'text-orange-400' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 rounded-3xl"
              >
                <stat.icon className={`w-5 h-5 ${stat.color} mb-4`} />
                <div className="text-slate-500 text-[10px] uppercase tracking-widest font-bold mb-1">{stat.label}</div>
                <div className="text-2xl font-black font-mono text-white">{stat.value}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Salary Chart */}
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8 flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-orange-500" />
                Annual SEO Salary Range
              </h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={salaryData}>
                    <defs>
                      <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#F97316" stopOpacity={0.8}/>
                        <stop offset="100%" stopColor="#F97316" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 10, fontWeight: 700 }}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 10, fontWeight: 700 }}
                      tickFormatter={(value) => `$\${value/1000}k`}
                    />
                    <Tooltip 
                      cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                      contentStyle={{ backgroundColor: '#0F172A', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                    />
                    <Bar dataKey="value" fill="url(#barGradient)" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Platform Share */}
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8 flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-500" />
                Platform Share
              </h3>
              <div className="h-[300px] w-full flex items-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={platformData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {platformData.map((entry, index) => (
                        <Cell key={`cell-\${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0F172A', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="space-y-3 pr-4">
                  {platformData.map((p) => (
                    <div key={p.name} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{p.name}</span>
                      <span className="text-xs text-white font-mono font-bold leading-none">{p.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Daily Postings Area Chart */}
            <div className="lg:col-span-2 glass-card p-8 rounded-3xl">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                Daily SEO Postings Trend
              </h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={trendProgress}>
                    <defs>
                      <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#22C55E" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#22C55E" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                    <XAxis 
                      dataKey="day" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 10, fontWeight: 700 }}
                    />
                    <YAxis hide />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0F172A', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="jobs" 
                      stroke="#22C55E" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#areaGradient)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
