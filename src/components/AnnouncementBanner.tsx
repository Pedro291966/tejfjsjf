import React from 'react';
import { Bell, ArrowRight, X } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';

interface AnnouncementBannerProps {
  bannerText: string;
  lang: Language;
  onNavigateToAnnouncements: () => void;
  onDismiss?: () => void;
  isVisible: boolean;
}

export const AnnouncementBanner: React.FC<AnnouncementBannerProps> = ({
  bannerText,
  lang,
  onNavigateToAnnouncements,
  onDismiss,
  isVisible,
}) => {
  if (!isVisible) return null;
  const t = translations[lang].banner;

  return (
    <div className="relative bg-black/90 border-b border-white/20 backdrop-blur-md z-40 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4 text-xs sm:text-sm">
        <div className="flex items-center gap-3 min-w-0">
          <span className="shrink-0 inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-white text-black font-bold tracking-wider text-[10px] uppercase">
            <Bell className="w-3 h-3" />
            Aviso
          </span>
          <p className="truncate text-zinc-300 font-medium">
            {bannerText || t.defaultText}
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onNavigateToAnnouncements}
            className="inline-flex items-center gap-1 text-white hover:text-zinc-300 font-medium underline underline-offset-4 transition-colors cursor-pointer"
          >
            {t.actionText}
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {onDismiss && (
            <button
              onClick={onDismiss}
              className="text-zinc-500 hover:text-white transition-colors p-1 rounded-md"
              aria-label="Fechar aviso"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
