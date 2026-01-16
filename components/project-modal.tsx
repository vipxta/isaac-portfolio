"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { X, Github, Shield, ExternalLink } from 'lucide-react';

interface SubProject {
  id: number;
  title: { pt: string; en: string };
  description: { pt: string; en: string };
  tech: string[];
  github: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: { pt: string; en: string };
  subProjects: SubProject[];
}

export default function ProjectModal({ isOpen, onClose, title, subProjects }: ProjectModalProps) {
  const { language, t } = useLanguage();

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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-10 bg-slate-900 rounded-2xl z-50 overflow-hidden flex flex-col border border-red-500/30 shadow-2xl shadow-red-500/20"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-gradient-to-r from-red-500/10 to-orange-500/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {title[language]}
                  </h2>
                  <p className="text-gray-400 text-sm">
                    {t(`${subProjects.length} projetos de segurança`, `${subProjects.length} security projects`)}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {subProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="group relative p-4 rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 hover:border-red-500/50 transition-all cursor-pointer"
                  >
                    {/* Project Number Badge */}
                    <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white text-xs font-bold shadow-lg">
                      {project.id}
                    </div>

                    <div className="pt-2">
                      <h3 className="text-sm font-bold text-white mb-2 line-clamp-2 group-hover:text-red-400 transition-colors">
                        {project.title[language]}
                      </h3>
                      
                      <p className="text-xs text-gray-400 mb-3 line-clamp-3">
                        {project.description[language]}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tech.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 text-[10px] font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2 py-0.5 rounded-full bg-slate-700 text-gray-400 text-[10px] font-medium">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>

                      {/* GitHub Link */}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs text-gray-500 hover:text-red-400 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-3 h-3" />
                        <span className="truncate">{t('Ver no GitHub', 'View on GitHub')}</span>
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-800 bg-slate-900/50">
              <p className="text-center text-xs text-gray-500">
                {t(
                  'Clique em qualquer projeto para ver o código no GitHub',
                  'Click on any project to view the code on GitHub'
                )}
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
