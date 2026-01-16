"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { portfolioData } from '@/lib/data';
import { ChevronDown, Mail, Linkedin, MapPin } from 'lucide-react';

export default function Hero() {
  const { language, t } = useLanguage();
  const data = portfolioData?.personal ?? {};

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(6,182,212,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.15),transparent_50%)]" />
        {/* Animated particles */}
        {[...Array(20)]?.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: [0, -100],
              x: Math.random() * 20 - 10,
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${50 + Math.random() * 50}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <MapPin size={14} />
            {data?.location ?? 'Itapetininga, SP'}
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-white">{data?.name?.split(' ')?.[0] ?? 'Isaac'}</span>{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {data?.name?.split(' ')?.slice(1)?.join(' ') ?? 'Albuquerque'}
            </span>
          </h1>

          <motion.h2
            className="text-xl md:text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {data?.title?.[language] ?? 'Quality Assurance Analyst'}
          </motion.h2>

          <motion.p
            className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {t(
              '+5 anos garantindo qualidade, segurança e performance em software',
              '5+ years ensuring quality, security and performance in software'
            )}
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              href="#contact"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                <Mail size={18} />
                {t('Entre em Contato', 'Get in Touch')}
              </span>
            </motion.a>
            <motion.a
              href={data?.linkedin ?? '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border border-cyan-500/50 text-cyan-400 font-semibold hover:bg-cyan-500/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                <Linkedin size={18} />
                LinkedIn
              </span>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cyan-400"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} />
        </motion.a>
      </div>
    </section>
  );
}
