import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiCheck, HiSparkles } from 'react-icons/hi2';
import type { Activity } from '../App';

const activities: Activity[] = [
  // Romantic & Sensual
  { id: 'massage', title: 'Sensual Massage', emoji: '💆‍♀️', description: 'Slow, intimate full-body relaxation with aromatic oils', category: 'Romantic', intensity: 'gentle', color: 'from-rose-500/20 to-pink-600/20' },
  { id: 'candles', title: 'Candlelit Atmosphere', emoji: '🕯️', description: 'Set the mood with dim lighting and flickering warmth', category: 'Romantic', intensity: 'gentle', color: 'from-amber-500/20 to-orange-600/20' },
  { id: 'bath', title: 'Shared Bath', emoji: '🛁', description: 'Warm bubble bath together with wine and music', category: 'Romantic', intensity: 'gentle', color: 'from-blue-500/20 to-cyan-600/20' },
  { id: 'slowdance', title: 'Slow Dancing', emoji: '💃', description: 'Body-to-body swaying to your favorite love songs', category: 'Romantic', intensity: 'gentle', color: 'from-purple-500/20 to-violet-600/20' },
  { id: 'feeding', title: 'Feeding Each Other', emoji: '🍓', description: 'Strawberries, chocolate, and playful intimacy', category: 'Romantic', intensity: 'gentle', color: 'from-red-500/20 to-rose-600/20' },

  // Playful & Flirty
  { id: 'stripgame', title: 'Strip Card Game', emoji: '🃏', description: 'A playful game that builds anticipation slowly', category: 'Playful', intensity: 'moderate', color: 'from-emerald-500/20 to-teal-600/20' },
  { id: 'roleplay', title: 'Role Play Scenario', emoji: '🎭', description: 'Become someone new for the night — pick your fantasy', category: 'Playful', intensity: 'moderate', color: 'from-fuchsia-500/20 to-pink-600/20' },
  { id: 'dice', title: 'Intimacy Dice', emoji: '🎲', description: 'Roll the dice and let fate choose your next move', category: 'Playful', intensity: 'moderate', color: 'from-indigo-500/20 to-blue-600/20' },
  { id: 'blindfold', title: 'Blindfold Exploration', emoji: '🙈', description: 'Heighten every sense by removing sight — trust & touch', category: 'Playful', intensity: 'moderate', color: 'from-violet-500/20 to-purple-600/20' },
  { id: 'truth', title: 'Naughty Truth or Dare', emoji: '🔮', description: 'Escalating dares that push your comfort zone playfully', category: 'Playful', intensity: 'moderate', color: 'from-pink-500/20 to-rose-600/20' },

  // Adventurous
  { id: 'toys', title: 'Toy Exploration', emoji: '🎀', description: 'Introduce something new from the bedside collection', category: 'Adventurous', intensity: 'adventurous', color: 'from-rose-500/20 to-red-600/20' },
  { id: 'photoshoot', title: 'Boudoir Photoshoot', emoji: '📸', description: 'Capture the mood — private, artistic, and empowering', category: 'Adventurous', intensity: 'adventurous', color: 'from-amber-500/20 to-yellow-600/20' },
  { id: 'fantasy', title: 'Fantasy Sharing', emoji: '💭', description: 'Open up about your deepest desires together', category: 'Adventurous', intensity: 'adventurous', color: 'from-cyan-500/20 to-blue-600/20' },
  { id: 'tease', title: 'Extended Teasing', emoji: '🌡️', description: 'Slow build-up — no rushing, just anticipation', category: 'Adventurous', intensity: 'adventurous', color: 'from-orange-500/20 to-red-600/20' },
  { id: 'location', title: 'New Location', emoji: '🗺️', description: 'Take it somewhere unexpected — balcony, kitchen, or beyond', category: 'Adventurous', intensity: 'adventurous', color: 'from-teal-500/20 to-emerald-600/20' },
];

const categories = ['All', 'Romantic', 'Playful', 'Adventurous'];

interface Props {
  selectedActivities: Activity[];
  onToggle: (activity: Activity) => void;
}

export default function ActivitySelector({ selectedActivities, onToggle }: Props) {
  const [activeCategory, setActiveCategory] = useState('All');
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const filtered = activeCategory === 'All'
    ? activities
    : activities.filter(a => a.category === activeCategory);

  const isSelected = (id: string) => selectedActivities.some(a => a.id === id);

  return (
    <section id="activities" ref={ref} className="relative py-24 sm:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-pink-400/80 font-inter font-medium mb-4">
            Curate Your Evening
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-semibold mb-5">
            Choose What{' '}
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Excites You
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-white/40 font-inter font-light text-lg">
            Tap to select as many as you'd like. Your choices stay private and are
            entirely yours.
          </p>
        </motion.div>

        {/* Category filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-inter transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-white border border-pink-500/30'
                  : 'text-white/50 border border-white/[0.06] hover:border-white/[0.12] hover:text-white/70 bg-white/[0.02]'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
              {cat !== 'All' && (
                <span className="ml-2 text-xs text-white/30">
                  {activities.filter(a => a.category === cat).length}
                </span>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Activity grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((activity, i) => {
              const selected = isSelected(activity.id);
              return (
                <motion.button
                  key={activity.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  onClick={() => onToggle(activity)}
                  className={`group relative text-left p-6 rounded-2xl border transition-all duration-500 ${
                    selected
                      ? 'border-pink-500/40 bg-gradient-to-br from-pink-500/10 to-purple-500/10 shadow-lg shadow-pink-500/5'
                      : 'border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.04]'
                  }`}
                >
                  {/* Selection indicator */}
                  <div className={`absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                    selected
                      ? 'bg-gradient-to-br from-pink-500 to-purple-600 scale-100'
                      : 'border border-white/[0.12] scale-90 group-hover:scale-100'
                  }`}>
                    {selected && <HiCheck className="w-3.5 h-3.5 text-white" />}
                  </div>

                  {/* Content */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${activity.color} flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110`}>
                    {activity.emoji}
                  </div>

                  <h3 className="font-inter font-semibold text-lg text-white/90 mb-1.5 pr-8">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-white/40 font-inter font-light leading-relaxed mb-3">
                    {activity.description}
                  </p>

                  {/* Tags */}
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-inter uppercase tracking-wider ${
                      activity.intensity === 'gentle'
                        ? 'bg-emerald-500/10 text-emerald-400/80'
                        : activity.intensity === 'moderate'
                        ? 'bg-amber-500/10 text-amber-400/80'
                        : 'bg-red-500/10 text-red-400/80'
                    }`}>
                      {activity.intensity}
                    </span>
                    <span className="text-[11px] text-white/20 font-inter">
                      {activity.category}
                    </span>
                  </div>

                  {/* Hover glow */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${activity.color} opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10 blur-xl`} />
                </motion.button>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Selection summary */}
        <AnimatePresence>
          {selectedActivities.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-12 text-center"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm">
                <HiSparkles className="w-4 h-4 text-pink-400" />
                <span className="text-sm text-white/60 font-inter font-light">
                  <span className="text-white font-medium">{selectedActivities.length}</span>
                  {' '}experience{selectedActivities.length !== 1 ? 's' : ''} selected for your Saturday night
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
