"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '@/lib/language-context';
import { portfolioData } from '@/lib/data';
import { Shield, Zap, Bot, Cloud, LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Zap,
  Bot,
  Cloud,
};

export default function About() {
  const { language, t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const data = portfolioData ?? {};

  return (
    <section id="about" className="py-24 bg-slate-900/50" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {t('Sobre Mim', 'About Me')}
            </span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            {data?.summary?.[language] ?? ''}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data?.highlights?.map?.((item, i) => {
            const IconComponent = iconMap?.[item?.icon ?? ''] ?? Shield;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`p-6 rounded-2xl bg-gradient-to-br ${
                  item?.icon === 'Shield'
                    ? 'from-red-500/10 to-orange-500/10 border-red-500/30'
                    : item?.icon === 'Zap'
                    ? 'from-yellow-500/10 to-amber-500/10 border-yellow-500/30'
                    : item?.icon === 'Bot'
                    ? 'from-cyan-500/10 to-blue-500/10 border-cyan-500/30'
                    : 'from-purple-500/10 to-pink-500/10 border-purple-500/30'
                } border shadow-lg hover:shadow-xl transition-all cursor-default`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    item?.icon === 'Shield'
                      ? 'bg-red-500/20 text-red-400'
                      : item?.icon === 'Zap'
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : item?.icon === 'Bot'
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : 'bg-purple-500/20 text-purple-400'
                  }`}
                >
                  <IconComponent size={24} />
                </div>
                <h3 className="text-white font-semibold mb-2 text-lg">
                  {item?.title?.[language] ?? ''}
                </h3>
                <p className="text-gray-400 text-sm">{item?.description?.[language] ?? ''}</p>
              </motion.div>
            );
          }) ?? []}
        </div>
      </div>
    </section>
  );
}
