import { motion } from 'framer-motion';
import { HiArrowDown, HiSparkles } from 'react-icons/hi2';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden">
      {/* Hero gradient accents */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-pink-600/10 via-purple-600/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
          </span>
          <span className="text-sm text-white/70 font-inter font-light">
            Saturday Night Edition — Curated for Melissa
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight mb-6"
        >
          <span className="block">Your Night,</span>
          <span className="block mt-2">
            Your{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
                Desires
              </span>
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: 'left' }}
              />
            </span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-white/50 font-inter font-light leading-relaxed mb-10"
        >
          Explore, select, and curate the perfect intimate experiences for your
          Saturday night. No pressure, no judgment — just what{' '}
          <span className="text-white/80 font-normal">you</span> want.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#activities"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-inter font-medium bg-gradient-to-r from-pink-500 to-purple-600 shadow-xl shadow-pink-500/20 hover:shadow-pink-500/30 transition-shadow duration-500"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <HiSparkles className="w-5 h-5" />
            Start Choosing
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
          </motion.a>

          <motion.a
            href="#features"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-inter font-light text-white/70 hover:text-white border border-white/[0.08] hover:border-white/[0.15] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Learn More
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <HiArrowDown className="w-5 h-5 text-white/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
