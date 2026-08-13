import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: '50K+', label: 'Nights Curated', icon: '🌙' },
  { value: '98%', label: 'Satisfaction Rate', icon: '✨' },
  { value: '4.9', label: 'Average Rating', icon: '⭐' },
  { value: '200+', label: 'Activities Available', icon: '🔥' },
];

export default function SocialProof() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section ref={ref} className="relative py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Divider line */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-16" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-center group"
            >
              <motion.div
                className="text-2xl mb-3"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {stat.icon}
              </motion.div>
              <div className="font-playfair text-3xl sm:text-4xl font-semibold bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-white/40 font-inter font-light">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mt-16" />
      </div>
    </section>
  );
}
