import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiChevronDown } from 'react-icons/hi2';

const faqs = [
  {
    q: 'Is my selection data stored anywhere?',
    a: 'Absolutely not. All selections happen locally in your browser. Nothing is sent to any server, and no data persists after you close the page. Your privacy is sacred to us.',
  },
  {
    q: 'Can I share my selections with a partner?',
    a: 'With the Satin plan, you can generate a private, encrypted link that lets your partner view your curated list. Only they can access it with your permission.',
  },
  {
    q: 'How often are new activities added?',
    a: 'We add new curated experiences every month, carefully designed by intimacy coaches and relationship experts. Satin and Velvet members get early access.',
  },
  {
    q: 'Is this appropriate for solo use?',
    a: 'Absolutely! Many of our activities are designed for self-exploration and self-care. Intimacy with yourself is just as important as with a partner.',
  },
  {
    q: 'What makes the intensity levels different?',
    a: 'Gentle activities focus on romance and emotional connection. Moderate introduces playful exploration and light adventure. Adventurous pushes boundaries in exciting, consent-forward ways.',
  },
  {
    q: 'Can I cancel my subscription anytime?',
    a: 'Yes, no contracts or commitments. Cancel with one click, and you\'ll still have access until the end of your billing period. We believe in earning your trust every month.',
  },
];

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="border-b border-white/[0.06] last:border-none"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
        aria-expanded={open}
      >
        <span className="text-base sm:text-lg font-inter font-medium text-white/80 group-hover:text-white transition-colors pr-4">
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <HiChevronDown className="w-5 h-5 text-white/30" />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm sm:text-base text-white/40 font-inter font-light leading-relaxed max-w-3xl">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="faq" ref={ref} className="relative py-24 sm:py-32 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-cyan-400/80 font-inter font-medium mb-4">
            Questions & Answers
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-semibold mb-5">
            Frequently{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Asked
            </span>
          </h2>
        </motion.div>

        {/* FAQ items */}
        {inView && (
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 sm:px-8">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
