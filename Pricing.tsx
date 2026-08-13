import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiCheck, HiSparkles } from 'react-icons/hi2';

const plans = [
  {
    name: 'Free Night',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started with curated evenings',
    features: [
      '5 basic activities',
      'Gentle intensity only',
      'Private selections',
      'Mobile-friendly',
    ],
    cta: 'Get Started Free',
    popular: false,
    gradient: 'from-white/[0.04] to-white/[0.02]',
    border: 'border-white/[0.06]',
  },
  {
    name: 'Satin',
    price: '$9',
    period: '/month',
    description: 'Unlock the full experience with all intensities',
    features: [
      'All 15+ activities',
      'All intensity levels',
      'Custom categories',
      'Shareable wish lists',
      'New monthly additions',
      'Priority experiences',
    ],
    cta: 'Start Satin Plan',
    popular: true,
    gradient: 'from-pink-500/10 to-purple-500/10',
    border: 'border-pink-500/20',
  },
  {
    name: 'Velvet',
    price: '$19',
    period: '/month',
    description: 'The ultimate intimate experience for connoisseurs',
    features: [
      'Everything in Satin',
      'Exclusive premium activities',
      'AI mood matching',
      'Couple sync mode',
      'Intimacy journal',
      'Concierge support',
      'Early access to new features',
    ],
    cta: 'Go Velvet',
    popular: false,
    gradient: 'from-purple-500/10 to-violet-500/10',
    border: 'border-purple-500/15',
  },
];

export default function Pricing() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="pricing" ref={ref} className="relative py-24 sm:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-pink-400/80 font-inter font-medium mb-4">
            Choose Your Experience
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-semibold mb-5">
            Invest in{' '}
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Yourself
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-white/40 font-inter font-light text-lg">
            Start free, upgrade when you're ready for more. Cancel anytime.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative p-7 sm:p-8 rounded-2xl border ${plan.border} bg-gradient-to-br ${plan.gradient} hover:border-white/[0.15] transition-all duration-500 ${
                plan.popular ? 'md:-mt-4 md:mb-4 shadow-xl shadow-pink-500/5' : ''
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-xs font-inter font-medium shadow-lg shadow-pink-500/20">
                    <HiSparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className="font-inter font-semibold text-lg text-white/90 mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-white/40 font-inter font-light mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="font-playfair text-4xl sm:text-5xl font-semibold text-white">
                    {plan.price}
                  </span>
                  <span className="text-sm text-white/30 font-inter font-light">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <HiCheck className="w-4 h-4 text-pink-400/80 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white/50 font-inter font-light">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.button
                className={`w-full py-3.5 rounded-xl text-sm font-inter font-medium transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/20 hover:shadow-pink-500/30'
                    : 'border border-white/[0.10] text-white/70 hover:text-white hover:border-white/[0.20] hover:bg-white/[0.04]'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
