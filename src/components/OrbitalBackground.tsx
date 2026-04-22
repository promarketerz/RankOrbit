import { motion } from 'motion/react';

export const OrbitalBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-slate-950">
      {/* Mesh Gradient Background Overlays from Design */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(15,23,42,0.8)_100%)]" />

      {/* Subtle Orbital Paths */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-white/5 rounded-full opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-white/5 rounded-full opacity-30" />

      {/* Moving Orbs */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-orange-500/50 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.3)]" />
      </motion.div>
    </div>
  );
};
