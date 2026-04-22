import { motion } from 'motion/react';
import { MapPin, Clock, ExternalLink, ShieldCheck } from 'lucide-react';
import { Job } from '@/src/types';
import { cn } from '@/src/lib/utils';

interface JobCardProps {
  job: Job;
}

export const JobCard = ({ job }: JobCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -5,
        rotateX: 0,
        rotateY: -2,
        perspective: 1000
      }}
      style={{ transform: 'rotateY(-5deg) translateZ(0)' }}
      viewport={{ once: true }}
      className="glass-card group p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 relative overflow-hidden cursor-pointer"
    >
      <div className="absolute top-0 right-0 px-4 py-2 bg-white/5 rounded-bl-2xl border-l border-b border-white/10 group-hover:bg-orange-500/10 transition-colors">
        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 group-hover:text-orange-400 transition-colors">
          via {job.platform}
        </span>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-orange-400 transition-colors leading-snug">
              {job.title}
            </h3>
            {job.salary && (
              <span className="text-xs font-mono px-2 py-1 rounded bg-orange-500/20 text-orange-400 border border-orange-500/10">
                {job.salary}
              </span>
            )}
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="font-medium text-slate-300">{job.company}</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>{job.location}</span>
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
          {job.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {job.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium px-2 py-1 rounded bg-slate-800 text-slate-300 border border-white/5 uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-white/5">
          <div className="flex items-center gap-2 text-[10px] text-slate-500 font-mono">
            <Clock className="w-3 h-3" />
            <span>{job.postedAt}</span>
          </div>
          <a
            href={job.link}
            className="flex items-center gap-2 text-xs font-bold text-white bg-white/5 hover:bg-orange-500 px-4 py-2 rounded-xl transition-all"
          >
            Details
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
