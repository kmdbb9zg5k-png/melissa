import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiLockClosed, HiHeart, HiAdjustmentsHorizontal, HiShieldCheck, HiSparkles, HiBolt } from 'react-icons/hi2';

const features = [
  {
    icon: HiLockClosed,
    title: 'Completely Private',
    description: 'Your selections never leave your device. No accounts, no tracking, no data stored.',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    icon: HiHeart,
    title: 'Consent-First Design',
    description: 'Built around communication and mutual enthusiasm. Every choice is yours to make.',
    gradient: 'from-purple-500 to-violet-600',
  },
  {
    icon: HiAdjustmentsHorizontal,
    title: 'Intensity Levels',
    description: 'From gentle romance to bold adventure — filter by your comfort zone.',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    icon: HiShieldCheck,
    title: 'Judgment-Free Zone',
    description: 'Explore without shame. Every desire is valid and celebrated here.',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    icon: HiSparkles,
    title: 'Curated Experiences',
    description: 'Each activity is thoughtfully designed for maximum connection and pleasure.',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: HiBolt,
    title: 'Instant Planning',
    description: 'Select, confirm, and your perfect evening itinerary is ready in seconds.',
    gradient: 'from-fuchsia-500 to-pink-600',
  },
];

export default function Features() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="features" ref={ref} className="relative py-24 sm:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-purple-400/80 font-inter font-medium mb-4">
            Why Melissa's Night
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-semibold mb-5">
            Designed for{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Pleasure
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-white/40 font-inter font-light text-lg">
            Every detail crafted to make your intimate moments more intentional,
            exciting, and deeply connected.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.10] transition-all duration-500"
            >
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-inter font-semibold text-lg text-white/90 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-white/40 font-inter font-light leading-relaxed">
                {feature.description}
              </p>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-tr-2xl rounded-bl-[100px]`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
