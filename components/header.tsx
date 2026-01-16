"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: '#about', label: t('Sobre', 'About') },
    { href: '#experience', label: t('Experiência', 'Experience') },
    { href: '#projects', label: t('Projetos', 'Projects') },
    { href: '#skills', label: t('Habilidades', 'Skills') },
    { href: '#contact', label: t('Contato', 'Contact') },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-cyan-500/20"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          Isaac.QA
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems?.map((item, i) => (
            <motion.a
              key={i}
              href={item?.href ?? '#'}
              className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium"
              whileHover={{ y: -2 }}
            >
              {item?.label ?? ''}
            </motion.a>
          ))}
          <motion.button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-400 hover:from-cyan-500/30 hover:to-purple-500/30 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Globe size={16} />
            <span className="text-sm font-medium">{language?.toUpperCase?.() ?? 'PT'}</span>
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <motion.button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400"
            whileTap={{ scale: 0.95 }}
          >
            <Globe size={14} />
            <span className="text-xs">{language?.toUpperCase?.() ?? 'PT'}</span>
          </motion.button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-300">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-slate-900/95 border-t border-cyan-500/20 px-4 py-4"
        >
          {navItems?.map((item, i) => (
            <a
              key={i}
              href={item?.href ?? '#'}
              className="block py-3 text-gray-300 hover:text-cyan-400 border-b border-gray-800"
              onClick={() => setMenuOpen(false)}
            >
              {item?.label ?? ''}
            </a>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
}
