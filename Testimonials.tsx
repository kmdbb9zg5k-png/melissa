import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiStar } from 'react-icons/hi2';

const testimonials = [
  {
    name: 'Sarah K.',
    role: 'Saturday Night Regular',
    text: "This completely changed how we communicate about what we want. It's playful, zero pressure, and so beautifully designed. Our Saturday nights have never been better.",
    rating: 5,
    avatar: '👩‍🦰',
  },
  {
    name: 'Priya M.',
    role: 'New Explorer',
    text: "I was nervous at first, but the interface is so inviting and non-judgmental. I discovered desires I didn't even know I had. Absolutely life-changing for intimacy.",
    rating: 5,
    avatar: '👩🏽',
  },
  {
    name: 'Emma & Jake',
    role: 'Couple, 3 Years',
    text: "We'd fallen into a routine. This reignited everything. The selection process itself became part of foreplay — choosing together is incredibly intimate.",
    rating: 5,
    avatar: '💑',
  },
  {
    name: 'Aria L.',
    role: 'Confidence Advocate',
    text: "Finally, a platform that treats intimacy with the elegance it deserves. No vulgarity, just gorgeous design and empowering choices. I feel seen.",
    rating: 5,
    avatar: '👩🏻‍🦱',
  },
  {
    name: 'Danielle R.',
    role: 'Weekend Planner',
    text: "The intensity levels are genius. We start gentle and work our way up. It's like having a personal intimacy concierge that actually gets it.",
    rating: 5,
    avatar: '👱‍♀️',
  },
  {
    name: 'Mia Chen',
    role: 'Self-Care Enthusiast',
    text: "I use this for solo nights too. It's not just for couples — it's for anyone who wants to be more intentional about their pleasure. Beautiful experience.",
    rating: 5,
    avatar: '👩🏻',
  },
];

export default function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="testimonials" ref={ref} className="relative py-24 sm:py-32 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-amber-400/80 font-inter font-medium mb-4">
            Loved by Thousands
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-semibold mb-5">
            Real{' '}
            <span className="bg-gradient-to-r from-amber-400 to-pink-400 bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-white/40 font-inter font-light text-lg">
            Hear from people who transformed their intimate experiences.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.10] transition-all duration-500"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <HiStar key={si} className="w-4 h-4 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-white/60 font-inter font-light leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center text-lg">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-inter font-medium text-white/80">
                    {t.name}
                  </div>
                  <div className="text-xs text-white/30 font-inter font-light">
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
