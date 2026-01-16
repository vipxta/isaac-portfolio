"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '@/lib/language-context';
import { portfolioData } from '@/lib/data';
import { Mail, Phone, MapPin, Linkedin, Send, Loader2 } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const { language, t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const data = portfolioData?.personal ?? {};
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res?.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/50" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {t('Vamos Conversar', "Let's Connect")}
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t(
              'Interessado em colaborar ou tem alguma pergunta? Entre em contato!',
              'Interested in collaborating or have a question? Get in touch!'
            )}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-cyan-500/20">
              <h3 className="text-xl font-semibold text-white mb-6">
                {t('Informações de Contato', 'Contact Information')}
              </h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${data?.email ?? ''}`}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-cyan-500/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">{data?.email ?? ''}</p>
                  </div>
                </a>
                <a
                  href={`tel:${data?.phone?.replace?.(/\D/g, '') ?? ''}`}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-purple-500/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{t('Telefone', 'Phone')}</p>
                    <p className="text-white">{data?.phone ?? ''}</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-3 rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{t('Localização', 'Location')}</p>
                    <p className="text-white">{data?.location ?? ''}</p>
                  </div>
                </div>
                <a
                  href={data?.linkedin ?? '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-blue-500/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">LinkedIn</p>
                    <p className="text-white">{t('Ver Perfil', 'View Profile')}</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-slate-900/80 border border-cyan-500/20">
              <h3 className="text-xl font-semibold text-white mb-6">
                {t('Enviar Mensagem', 'Send Message')}
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">{t('Nome', 'Name')}</label>
                  <input
                    type="text"
                    required
                    value={formData?.name ?? ''}
                    onChange={(e) => setFormData({ ...(formData ?? {}), name: e?.target?.value ?? '' })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-gray-700 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors"
                    placeholder={t('Seu nome', 'Your name')}
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData?.email ?? ''}
                    onChange={(e) => setFormData({ ...(formData ?? {}), email: e?.target?.value ?? '' })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-gray-700 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors"
                    placeholder={t('seu@email.com', 'your@email.com')}
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">{t('Mensagem', 'Message')}</label>
                  <textarea
                    required
                    rows={4}
                    value={formData?.message ?? ''}
                    onChange={(e) => setFormData({ ...(formData ?? {}), message: e?.target?.value ?? '' })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-gray-700 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors resize-none"
                    placeholder={t('Sua mensagem...', 'Your message...')}
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-shadow"
                >
                  {status === 'loading' ? (
                    <Loader2 size={20} className="animate-spin" />
                  ) : (
                    <>
                      <Send size={18} />
                      {t('Enviar', 'Send')}
                    </>
                  )}
                </motion.button>
                {status === 'success' && (
                  <p className="text-green-400 text-center text-sm">
                    {t('Mensagem enviada com sucesso!', 'Message sent successfully!')}
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-red-400 text-center text-sm">
                    {t('Erro ao enviar. Tente novamente.', 'Error sending. Please try again.')}
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
