import React, { useState } from 'react';
import { Bell, Sparkles, Wrench, Info, Plus, Calendar, User, Shield } from 'lucide-react';
import { Language, Announcement } from '../types';
import { translations } from '../i18n/translations';
import { useAuth } from '../context/AuthContext';

interface AnnouncementsPageProps {
  lang: Language;
  announcements: Announcement[];
  setCurrentTab: (tab: string) => void;
}

export const AnnouncementsPage: React.FC<AnnouncementsPageProps> = ({
  lang,
  announcements,
  setCurrentTab,
}) => {
  const t = translations[lang].announcements;
  const { isBotAdmin } = useAuth();
  const [filter, setFilter] = useState<'all' | 'update' | 'maintenance' | 'announcement'>('all');

  const filtered = announcements.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-12 text-left">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            Registro Oficial de Atividades
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight font-display">
            {t.title}
          </h1>
          <p className="text-base text-zinc-300 max-w-2xl">
            {t.subtitle}
          </p>
        </div>

        {isBotAdmin && (
          <button
            onClick={() => setCurrentTab('admin')}
            className="px-4 py-2.5 text-xs font-bold text-black bg-white hover:bg-zinc-200 rounded-lg neon-glow-white-subtle flex items-center gap-2 cursor-pointer shrink-0"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Gerenciar Avisos no Admin</span>
          </button>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-4">
        <button
          onClick={() => setFilter('all')}
          className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
            filter === 'all'
              ? 'bg-white text-black font-bold'
              : 'text-zinc-400 hover:text-white hover:bg-white/5'
          }`}
        >
          {t.filterAll}
        </button>
        <button
          onClick={() => setFilter('update')}
          className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
            filter === 'update'
              ? 'bg-white text-black font-bold'
              : 'text-zinc-400 hover:text-white hover:bg-white/5'
          }`}
        >
          {t.filterUpdates}
        </button>
        <button
          onClick={() => setFilter('maintenance')}
          className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
            filter === 'maintenance'
              ? 'bg-white text-black font-bold'
              : 'text-zinc-400 hover:text-white hover:bg-white/5'
          }`}
        >
          {t.filterMaintenance}
        </button>
        <button
          onClick={() => setFilter('announcement')}
          className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
            filter === 'announcement'
              ? 'bg-white text-black font-bold'
              : 'text-zinc-400 hover:text-white hover:bg-white/5'
          }`}
        >
          {t.filterNotices}
        </button>
      </div>

      {/* Announcements Stream */}
      <div className="space-y-6">
        {filtered.map((item) => {
          let categoryIcon = <Info className="w-4 h-4 text-white" />;
          let categoryLabel = 'Comunicado';

          if (item.category === 'update') {
            categoryIcon = <Sparkles className="w-4 h-4 text-white" />;
            categoryLabel = 'Atualização';
          } else if (item.category === 'maintenance') {
            categoryIcon = <Wrench className="w-4 h-4 text-white" />;
            categoryLabel = 'Manutenção';
          }

          return (
            <article
              key={item.id}
              className={`p-6 sm:p-8 rounded-2xl bg-zinc-950/80 border transition-all space-y-4 ${
                item.isImportant
                  ? 'border-white/40 shadow-xl'
                  : 'border-white/10 hover:border-white/25'
              }`}
            >
              {/* Top metadata line */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400 font-mono">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded bg-white/10 text-white">
                    {categoryIcon}
                  </span>
                  <span className="font-bold text-white uppercase">{categoryLabel}</span>
                  {item.isImportant && (
                    <span className="px-1.5 py-0.2 rounded bg-white text-black text-[10px] font-extrabold uppercase">
                      Destaque
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3 text-zinc-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    <span>{item.author}</span>
                  </span>
                </div>
              </div>

              {/* Title & Body */}
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-display">
                {item.title}
              </h2>

              <p className="text-sm text-zinc-300 leading-relaxed whitespace-pre-line">
                {item.content}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
};
