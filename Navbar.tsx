import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSparkles, HiOutlineBars3, HiXMark } from 'react-icons/hi2';

interface NavbarProps {
  selectedCount: number;
  onOpenDrawer: () => void;
}

export default function Navbar({ selectedCount, onOpenDrawer }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Activities', href: '#activities' },
    { label: 'Features', href: '#features' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Plans', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg shadow-pink-500/20">
                <HiSparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-playfair text-xl font-semibold tracking-tight">
                Melissa
              </span>
              <span className="hidden sm:inline text-xs text-white/40 font-inter font-light ml-1">
                Saturday Night
              </span>
            </motion.a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm text-white/60 hover:text-white transition-colors duration-300 font-inter font-light rounded-lg hover:bg-white/[0.04]"
                  whileHover={{ y: -1 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <motion.button
                onClick={onOpenDrawer}
                className="relative px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-sm font-inter font-medium bg-gradient-to-r from-pink-500/90 to-purple-600/90 hover:from-pink-500 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-pink-500/20 hover:shadow-pink-500/30"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                My Picks
                <AnimatePresence>
                  {selectedCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-white text-[#0a0a0f] text-xs flex items-center justify-center font-semibold"
                    >
                      {selectedCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-white/60 hover:text-white"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <HiXMark className="w-6 h-6" /> : <HiOutlineBars3 className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 z-40 lg:hidden bg-[#0a0a0f]/95 backdrop-blur-2xl border-b border-white/[0.06]"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-white/70 hover:text-white hover:bg-white/[0.04] rounded-xl transition-colors font-inter"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
