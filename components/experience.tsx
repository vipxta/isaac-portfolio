"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '@/lib/language-context';
import { portfolioData } from '@/lib/data';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

export default function Experience() {
  const { language, t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const experiences = portfolioData?.experience ?? [];

  return (
    <section id="experience" className="py-24 bg-slate-950" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {t('Experiência Profissional', 'Professional Experience')}
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500" />

          {experiences?.map?.((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative mb-12 md:mb-16 ${
                i % 2 === 0 ? 'md:pr-[52%]' : 'md:pl-[52%]'
              }`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 top-6 w-4 h-4 -ml-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 shadow-lg shadow-cyan-500/50" />

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-2xl bg-slate-900/80 border border-cyan-500/20 shadow-lg hover:shadow-cyan-500/10 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-cyan-400">
                    <Briefcase size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white">{exp?.company ?? ''}</h3>
                    <p className="text-cyan-400 font-medium">{exp?.role?.[language] ?? ''}</p>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp?.period ?? ''}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp?.location ?? ''}
                      </span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp?.description?.[language]?.map?.((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-300 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                      {item ?? ''}
                    </li>
                  )) ?? []}
                </ul>
              </motion.div>
            </motion.div>
          )) ?? []}
        </div>
      </div>
    </section>
  );
}
