import { motion } from 'framer-motion';

export default function AmbientBackground({ scrollY }: { scrollY: number }) {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Primary gradient orbs */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-[0.07]"
        style={{
          background: 'radial-gradient(circle, #e879a8 0%, transparent 70%)',
          top: '-200px',
          right: '-200px',
          y: scrollY * 0.1,
        }}
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.05]"
        style={{
          background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)',
          bottom: '20%',
          left: '-100px',
          y: scrollY * -0.05,
        }}
        animate={{
          scale: [1, 1.15, 1],
          y: [0, -40, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.04]"
        style={{
          background: 'radial-gradient(circle, #ec4899 0%, transparent 70%)',
          top: '50%',
          right: '10%',
          y: scrollY * 0.08,
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -20, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
