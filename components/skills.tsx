"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '@/lib/language-context';
import { portfolioData } from '@/lib/data';
import { Code, Wrench, Server, Shield, Cloud, GitBranch, LayoutDashboard, Zap, LucideIcon } from 'lucide-react';

const categoryMeta: Record<string, { icon: LucideIcon; label: { pt: string; en: string }; color: string }> = {
  automation: { icon: Wrench, label: { pt: 'Automação de Testes', en: 'Test Automation' }, color: 'cyan' },
  languages: { icon: Code, label: { pt: 'Linguagens', en: 'Languages' }, color: 'purple' },
  api: { icon: Server, label: { pt: 'Testes de API', en: 'API Testing' }, color: 'blue' },
  performance: { icon: Zap, label: { pt: 'Performance', en: 'Performance' }, color: 'yellow' },
  security: { icon: Shield, label: { pt: 'Segurança', en: 'Security' }, color: 'red' },
  cloud: { icon: Cloud, label: { pt: 'Cloud & Infra', en: 'Cloud & Infra' }, color: 'green' },
  devops: { icon: GitBranch, label: { pt: 'DevOps & CI/CD', en: 'DevOps & CI/CD' }, color: 'orange' },
  management: { icon: LayoutDashboard, label: { pt: 'Gestão de Testes', en: 'Test Management' }, color: 'pink' },
};

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-500/30' },
  purple: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30' },
  blue: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30' },
  yellow: { bg: 'bg-yellow-500/10', text: 'text-yellow-400', border: 'border-yellow-500/30' },
  red: { bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/30' },
  green: { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/30' },
  orange: { bg: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/30' },
  pink: { bg: 'bg-pink-500/10', text: 'text-pink-400', border: 'border-pink-500/30' },
};

export default function Skills() {
  const { language, t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const skills = portfolioData?.skills ?? {};

  return (
    <section id="skills" className="py-24 bg-slate-950" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {t('Habilidades Técnicas', 'Technical Skills')}
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills)?.map?.(([key, items], i) => {
            const meta = categoryMeta?.[key] ?? { icon: Code, label: { pt: key, en: key }, color: 'cyan' };
            const colors = colorClasses?.[meta?.color ?? 'cyan'] ?? colorClasses?.cyan;
            const IconComponent = meta?.icon ?? Code;

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className={`p-5 rounded-2xl ${colors?.bg ?? ''} border ${colors?.border ?? ''} shadow-lg`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colors?.bg ?? ''} ${colors?.text ?? ''}`}>
                    <IconComponent size={20} />
                  </div>
                  <h3 className={`font-semibold ${colors?.text ?? ''}`}>
                    {meta?.label?.[language] ?? key}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {(items as string[])?.map?.((skill, j) => (
                    <motion.span
                      key={j}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: i * 0.1 + j * 0.05 }}
                      className="px-2 py-1 rounded-md bg-slate-800/80 text-gray-300 text-xs"
                    >
                      {skill ?? ''}
                    </motion.span>
                  )) ?? []}
                </div>
              </motion.div>
            );
          }) ?? []}
        </div>
      </div>
    </section>
  );
}
