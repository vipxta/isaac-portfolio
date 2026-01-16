"use client";

import { useLanguage } from '@/lib/language-context';
import { portfolioData } from '@/lib/data';
import { Heart } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();
  const data = portfolioData?.personal ?? {};

  return (
    <footer className="py-8 bg-slate-950 border-t border-cyan-500/10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-400 text-sm flex items-center justify-center gap-1">
          {t('Feito com', 'Made with')}
          <Heart size={14} className="text-red-500 fill-red-500" />
          {t('por', 'by')}{' '}
          <span className="text-cyan-400 font-medium">{data?.name?.split(' ')?.[0] ?? 'Isaac'}</span>
        </p>
        <p className="text-gray-500 text-xs mt-2">
          © {new Date().getFullYear()} - {t('Todos os direitos reservados', 'All rights reserved')}
        </p>
      </div>
    </footer>
  );
}
