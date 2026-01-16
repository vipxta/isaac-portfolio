"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '@/lib/language-context';
import { portfolioData } from '@/lib/data';
import { Shield, Zap, Bot, Server, TrendingUp, LucideIcon, ChevronRight, Layers } from 'lucide-react';
import ProjectModal from './project-modal';

const categoryConfig: Record<string, { icon: LucideIcon; gradient: string; border: string; badge: string }> = {
  security: {
    icon: Shield,
    gradient: 'from-red-500/20 to-orange-500/20',
    border: 'border-red-500/40',
    badge: 'bg-red-500/20 text-red-400',
  },
  performance: {
    icon: Zap,
    gradient: 'from-yellow-500/20 to-amber-500/20',
    border: 'border-yellow-500/40',
    badge: 'bg-yellow-500/20 text-yellow-400',
  },
  automation: {
    icon: Bot,
    gradient: 'from-cyan-500/20 to-blue-500/20',
    border: 'border-cyan-500/40',
    badge: 'bg-cyan-500/20 text-cyan-400',
  },
  devops: {
    icon: Server,
    gradient: 'from-purple-500/20 to-pink-500/20',
    border: 'border-purple-500/40',
    badge: 'bg-purple-500/20 text-purple-400',
  },
};

interface SubProject {
  id: number;
  title: { pt: string; en: string };
  description: { pt: string; en: string };
  tech: string[];
  github: string;
}

interface Project {
  title: { pt: string; en: string };
  category: string;
  hasSubProjects?: boolean;
  description: { pt: string; en: string };
  tech: string[];
  metrics: { pt: string; en: string };
  subProjects?: SubProject[];
}

export default function Projects() {
  const { language, t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const projects = (portfolioData?.projects ?? []) as Project[];
  
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    if (project.hasSubProjects && project.subProjects) {
      setSelectedProject(project);
      setModalOpen(true);
    }
  };

  return (
    <>
      <section id="projects" className="py-24 bg-slate-900/50" ref={ref}>
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {t('Projetos em Destaque', 'Featured Projects')}
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t(
                'Soluções desenvolvidas com foco em segurança, performance e automação',
                'Solutions developed with focus on security, performance, and automation'
              )}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects?.map?.((project, i) => {
              const config = categoryConfig?.[project?.category ?? ''] ?? categoryConfig?.automation;
              const IconComponent = config?.icon ?? Bot;
              const isHighlighted = project?.category === 'security' || project?.category === 'performance';
              const hasSubProjects = project?.hasSubProjects && project?.subProjects;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onClick={() => handleProjectClick(project)}
                  className={`relative p-6 rounded-2xl bg-gradient-to-br ${config?.gradient ?? ''} border ${config?.border ?? ''} shadow-lg hover:shadow-xl transition-all ${
                    isHighlighted ? 'ring-2 ring-offset-2 ring-offset-slate-950 ring-opacity-50 ' + (project?.category === 'security' ? 'ring-red-500' : 'ring-yellow-500') : ''
                  } ${hasSubProjects ? 'cursor-pointer group' : ''}`}
                >
                  {isHighlighted && (
                    <div className={`absolute -top-3 -right-3 px-3 py-1 rounded-full text-xs font-bold ${project?.category === 'security' ? 'bg-red-500' : 'bg-yellow-500'} text-white shadow-lg`}>
                      {t('Destaque', 'Featured')}
                    </div>
                  )}

                  {/* Sub-projects indicator */}
                  {hasSubProjects && (
                    <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-slate-800/80 text-xs text-gray-300">
                      <Layers size={12} />
                      <span>{project.subProjects?.length}</span>
                    </div>
                  )}

                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${config?.badge ?? ''}`}>
                      <IconComponent size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {project?.title?.[language] ?? ''}
                      </h3>
                      <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${config?.badge ?? ''}`}>
                        {project?.category?.toUpperCase?.() ?? ''}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project?.description?.[language] ?? ''}
                  </p>

                  <div className="flex items-center gap-2 mb-4 text-sm">
                    <TrendingUp size={16} className="text-green-400" />
                    <span className="text-green-400 font-medium">{project?.metrics?.[language] ?? ''}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project?.tech?.map?.((tech, j) => (
                      <span
                        key={j}
                        className="px-2 py-1 rounded-md bg-slate-800/80 text-gray-300 text-xs font-medium"
                      >
                        {tech ?? ''}
                      </span>
                    )) ?? []}
                  </div>

                  {/* Click to expand indicator */}
                  {hasSubProjects && (
                    <div className="mt-4 pt-4 border-t border-slate-700/50 flex items-center justify-center gap-2 text-sm text-gray-400 group-hover:text-red-400 transition-colors">
                      <span>{t('Clique para ver todos os projetos', 'Click to see all projects')}</span>
                      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                </motion.div>
              );
            }) ?? []}
          </div>
        </div>
      </section>

      {/* Modal for sub-projects */}
      {selectedProject && (
        <ProjectModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title={selectedProject.title}
          subProjects={selectedProject.subProjects || []}
        />
      )}
    </>
  );
}
