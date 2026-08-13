import { motion, AnimatePresence } from 'framer-motion';
import { HiXMark, HiTrash, HiSparkles, HiHeart } from 'react-icons/hi2';
import type { Activity } from '../App';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  activities: Activity[];
  onRemove: (id: string) => void;
}

export default function SelectedDrawer({ isOpen, onClose, activities, onRemove }: Props) {
const sendPicks = async () => { if (activities.length === 0) return; const picks = activities .map((activity, index) => `${index + 1}. ${activity.title}`) .join("\n"); try { const response = await fetch("https://formspree.io/f/mwlebwjk", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json", }, body: JSON.stringify({ subject: "New Saturday Night Picks", picks, }), }); if (response.ok) { alert("Your picks were sent!"); } else { alert("Something went wrong. Please try again."); } } catch (error) { alert("Could not send your picks. Please try again."); } };


                                                                                          
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[440px] bg-[#0f0f18]/95 backdrop-blur-2xl border-l border-white/[0.06] z-[70] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.06]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                  <HiSparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-playfair text-lg font-semibold">My Picks</h3>
                  <p className="text-xs text-white/40 font-inter font-light">
                    {activities.length} experience{activities.length !== 1 ? 's' : ''} selected
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-xl border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.04] transition-all"
                aria-label="Close drawer"
              >
                <HiXMark className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {activities.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="text-5xl mb-6"
                  >
                    🌙
                  </motion.div>
                  <h4 className="font-playfair text-xl font-semibold mb-2 text-white/80">
                    Nothing selected yet
                  </h4>
                  <p className="text-sm text-white/30 font-inter font-light max-w-xs">
                    Browse the activities and tap the ones that excite you. They'll appear here for your review.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  <AnimatePresence mode="popLayout">
                    {activities.map((activity, i) => (
                      <motion.div
                        key={activity.id}
                        layout
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30, scale: 0.9 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        className="group flex items-start gap-4 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
                      >
                        <div className={`w-11 h-11 rounded-lg bg-gradient-to-br ${activity.color} flex items-center justify-center text-xl flex-shrink-0`}>
                          {activity.emoji}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-inter font-semibold text-white/85 truncate">
                            {activity.title}
                          </h4>
                          <p className="text-xs text-white/35 font-inter font-light mt-0.5 line-clamp-2">
                            {activity.description}
                          </p>
                          <span className={`inline-block mt-1.5 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full ${
                            activity.intensity === 'gentle'
                              ? 'bg-emerald-500/10 text-emerald-400/70'
                              : activity.intensity === 'moderate'
                              ? 'bg-amber-500/10 text-amber-400/70'
                              : 'bg-red-500/10 text-red-400/70'
                          }`}>
                            {activity.intensity}
                          </span>
                        </div>
                        <motion.button
                          onClick={() => onRemove(activity.id)}
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-white/20 hover:text-red-400 hover:bg-red-500/10 transition-all duration-300 opacity-0 group-hover:opacity-100 flex-shrink-0"
                          whileTap={{ scale: 0.9 }}
                          aria-label={`Remove ${activity.title}`}
                        >
                          <HiTrash className="w-4 h-4" />
                        </motion.button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* https://formspree.io/f/mwlebwjk */}
            {activities.length > 0 && (
              <div className="px-6 py-5 border-t border-white/[0.06]">
                <motion.button
                  onClick={sendPicks}

                 className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl text-base font-inter font-medium bg-gradient-to-r from-pink-500 to-purple-600 shadow-xl shadow-pink-500/20 hover:shadow-pink-500/30 transition-shadow duration-500"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <HiHeart className="w-5 h-5" />
                  Confirm My Saturday Night
                </motion.button>
                <p className="text-[11px] text-white/20 font-inter font-light text-center mt-3">
                  Your selections are private and only visible to you
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
