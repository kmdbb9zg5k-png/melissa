import { motion } from 'framer-motion';
import { HiSparkles } from 'react-icons/hi2';

const footerLinks = [
  {
    title: 'Experience',
    links: ['Activities', 'Categories', 'Intensity Guide', 'New This Month'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Our Philosophy', 'Press', 'Careers'],
  },
  {
    title: 'Support',
    links: ['Help Center', 'Privacy Policy', 'Terms of Service', 'Contact'],
  },
  {
    title: 'Community',
    links: ['Blog', 'Podcast', 'Newsletter', 'Ambassador Program'],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
            <motion.a
              href="#"
              className="inline-flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                <HiSparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-playfair text-lg font-semibold">Melissa</span>
            </motion.a>
            <p className="text-sm text-white/30 font-inter font-light leading-relaxed max-w-xs">
              Curating intimate experiences with elegance, privacy, and empowerment. Your desires, beautifully designed.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-inter font-medium text-white/60 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/30 hover:text-white/60 font-inter font-light transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20 font-inter font-light">
            © 2025 Melissa's Saturday Night. All rights reserved. Made with 💜
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/20 hover:text-white/40 font-inter font-light transition-colors">
              Privacy
            </a>
            <a href="#" className="text-xs text-white/20 hover:text-white/40 font-inter font-light transition-colors">
              Terms
            </a>
            <a href="#" className="text-xs text-white/20 hover:text-white/40 font-inter font-light transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
