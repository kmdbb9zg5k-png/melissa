import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const benefits = [
  {
    step: '01',
    title: 'Browse & Explore',
    description: 'Scroll through curated intimate experiences across three intensity levels. Each one is designed to spark something new.',
    visual: '🌟',
  },
  {
    step: '02',
    title: 'Select Your Desires',
    description: 'Tap to choose the experiences that excite you most. Mix and match from romantic, playful, and adventurous categories.',
    visual: '✨',
  },
  {
    step: '03',
    title: 'Review & Confirm',
    description: 'Check your selections in the private drawer. Remove or add more until your Saturday night feels absolutely perfect.',
    visual: '💫',
  },
  {
    step: '04',
    title: 'Enjoy Your Night',
    description: 'Your curated evening awaits. Let the anticipation build and make every moment count. This is your night, Melissa.',
    visual: '🔥',
  },
];

export default function Benefits() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="benefits" ref={ref} className="relative py-24 sm:py-32 px-4">
      {/* Background accent */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-gradient-to-br from-purple-600/5 to-pink-600/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-rose-400/80 font-inter font-medium mb-4">
            How It Works
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-semibold mb-5">
            Four Steps to{' '}
            <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
              Bliss
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-white/40 font-inter font-light text-lg">
            Your perfect evening is just a few taps away. Here's how the magic unfolds.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-6 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.step}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              <div className="relative p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.10] transition-all duration-500 h-full">
                {/* Step number */}
                <div className="font-playfair text-5xl font-bold text-white/[0.04] absolute top-4 right-5 group-hover:text-white/[0.06] transition-colors duration-500">
                  {benefit.step}
                </div>

                <motion.div
                  className="text-4xl mb-5"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {benefit.visual}
                </motion.div>

                <h3 className="font-inter font-semibold text-lg text-white/90 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-white/40 font-inter font-light leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Connector line (desktop only) */}
              {i < benefits.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-white/[0.08] to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
