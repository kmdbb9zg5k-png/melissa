import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiSparkles } from 'react-icons/hi2';

interface CTAProps {
  selectedCount: number;
  onOpenDrawer: () => void;
}

export default function CTA({ selectedCount, onOpenDrawer }: CTAProps) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl border border-white/[0.08] bg-gradient-to-br from-pink-500/[0.08] via-purple-500/[0.05] to-violet-500/[0.08] p-10 sm:p-16 text-center overflow-hidden"
        >
          {/* Background orbs */}
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-pink-500/10 blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-purple-500/10 blur-[100px]" />

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3, type: 'spring' }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mx-auto mb-8 shadow-xl shadow-pink-500/20"
            >
              <HiSparkles className="w-8 h-8 text-white" />
            </motion.div>

            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
              Ready for Your{' '}
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Saturday Night
              </span>
              ?
            </h2>

            <p className="max-w-lg mx-auto text-white/40 font-inter font-light text-lg mb-10">
              {selectedCount > 0
                ? `You've selected ${selectedCount} experience${selectedCount !== 1 ? 's' : ''}. Review your picks and make this night unforgettable.`
                : "Start curating your perfect evening. Scroll up to explore and select the experiences that speak to you, Melissa."}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {selectedCount > 0 ? (
                <motion.button
                  onClick={onOpenDrawer}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-inter font-medium bg-gradient-to-r from-pink-500 to-purple-600 shadow-xl shadow-pink-500/20 hover:shadow-pink-500/30 transition-shadow duration-500"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <HiSparkles className="w-5 h-5" />
                  Review My Picks ({selectedCount})
                </motion.button>
              ) : (
                <motion.a
                  href="#activities"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-inter font-medium bg-gradient-to-r from-pink-500 to-purple-600 shadow-xl shadow-pink-500/20 hover:shadow-pink-500/30 transition-shadow duration-500"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <HiSparkles className="w-5 h-5" />
                  Start Choosing
                </motion.a>
              )}
              <motion.a
                href="#pricing"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-inter font-light text-white/70 hover:text-white border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View Plans
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
