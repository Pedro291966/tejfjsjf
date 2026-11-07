import React, { useState } from 'react';
import {
  Camera,
  Maximize2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Terminal,
  Sparkles,
  Search,
  LayoutGrid,
  Monitor,
  Split,
  Copy,
  Check,
  CheckCircle2,
  Bot,
  ArrowRight,
  ShieldAlert,
  Ticket,
  Sliders,
  Scale,
} from 'lucide-react';
import { Language, BotScreenshot, BotCommand } from '../types';
import { BOT_SCREENSHOTS, BOT_COMMANDS } from '../data/botData';
import { ScreenshotsLightboxModal } from '../components/ScreenshotsLightboxModal';
import { DiscordEmbedSimulator } from '../components/DiscordEmbedSimulator';

interface ScreenshotsPageProps {
  lang: Language;
  setCurrentTab: (tab: string) => void;
}

export const ScreenshotsPage: React.FC<ScreenshotsPageProps> = ({
  lang,
  setCurrentTab,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'cinema' | 'compare'>('grid');
  
  // Cinema Mode state
  const [cinemaIndex, setCinemaIndex] = useState<number>(0);
  
  // Compare Mode state: selected screenshot and related command
  const [compareIndex, setCompareIndex] = useState<number>(0);
  
  // Lightbox Modal state
  const [activeLightboxScreenshot, setActiveLightboxScreenshot] = useState<BotScreenshot | null>(null);
  
  // Copied command state
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(text);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  // Filtered Screenshots
  const filteredScreenshots = BOT_SCREENSHOTS.filter((s) => {
    const matchesCategory =
      activeCategory === 'all' ? true : s.category === activeCategory;
    
    const query = searchQuery.toLowerCase().trim();
    const matchesQuery =
      query === '' ||
      s.title.toLowerCase().includes(query) ||
      s.description.toLowerCase().includes(query) ||
      (s.commandRelated && s.commandRelated.toLowerCase().includes(query)) ||
      s.categoryLabel.toLowerCase().includes(query);

    return matchesCategory && matchesQuery;
  });

  const currentCinemaScreenshot =
    filteredScreenshots[cinemaIndex] || BOT_SCREENSHOTS[0];

  const currentCompareScreenshot =
    filteredScreenshots[compareIndex] || BOT_SCREENSHOTS[0];

  // Find command corresponding to compare screenshot
  const matchedCommand: BotCommand =
    BOT_COMMANDS.find((cmd) => {
      if (!currentCompareScreenshot.commandRelated) return false;
      return currentCompareScreenshot.commandRelated.includes(cmd.name);
    }) || BOT_COMMANDS[0];

  return (
    <div className="w-full space-y-16 pb-24">
      {/* 1. HERO HEADER SECTION */}
      <section className="relative overflow-hidden pt-12 md:pt-16 border-b border-white/10 pb-12">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-white/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 space-y-8 relative">
          <div className="space-y-4 max-w-3xl">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs font-mono text-zinc-300">
              <Camera className="w-3.5 h-3.5 text-white" />
              <span className="font-bold text-white uppercase tracking-wider">
                Novo Local Oficial: Galeria de Prints do Discord
              </span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400">9 Capturas Verificadas</span>
            </div>

            {/* Dominant Headline */}
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight font-display">
              Prints Reais & Telas Oficiais do{' '}
              <span className="text-white underline decoration-white decoration-4 underline-offset-8 neon-text-glow">
                sori
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              Confira exatamente como as interfaces, embeds dinâmicas, modais nativos e botões do{' '}
              <strong className="text-white">sori</strong> operam dentro de servidores reais do Discord.
              Todas as capturas abaixo são autênticas e mostram as funcionalidades 100% gratuitas do bot.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/10 space-y-1">
              <div className="text-2xl font-black text-white font-mono">7 Telas</div>
              <div className="text-xs text-zinc-400 flex items-center gap-1.5">
                <Ticket className="w-3.5 h-3.5 text-white" />
                <span>Tickets & Atendimento</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/10 space-y-1">
              <div className="text-2xl font-black text-white font-mono">2 Telas</div>
              <div className="text-xs text-zinc-400 flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-white" />
                <span>Punições & Moderação</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/10 space-y-1">
              <div className="text-2xl font-black text-white font-mono">100% Grátis</div>
              <div className="text-xs text-zinc-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                <span>Sem funções pagas</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/10 space-y-1">
              <div className="text-2xl font-black text-white font-mono">Full HD</div>
              <div className="text-xs text-zinc-400 flex items-center gap-1.5">
                <Maximize2 className="w-3.5 h-3.5 text-white" />
                <span>Zoom & Alta Resolução</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTROLS BAR: CATEGORIES, SEARCH & VIEW MODES */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-2 bg-zinc-950/90 border border-white/10 rounded-2xl shadow-xl">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-thin">
            {[
              { id: 'all', label: `Todos os Prints (${BOT_SCREENSHOTS.length})` },
              { id: 'tickets', label: '🎫 Tickets (7)' },
              { id: 'punicao', label: '⚖️ Punições (Ban/Mute/Warn)' },
              { id: 'tempo', label: '⏱️ Tempos Automáticos' },
              { id: 'config', label: '⚙️ Configurar Bot' },
              { id: 'revisao', label: '📋 Revisão & Apelações' },
            ].map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setCinemaIndex(0);
                    setCompareIndex(0);
                  }}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-white text-black font-bold neon-glow-white-subtle'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Right Area: Search + View Mode Switcher */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative min-w-[220px]">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por comando ou título..."
                className="w-full pl-9 pr-3 py-1.5 bg-black/60 border border-white/10 hover:border-white/20 focus:border-white rounded-xl text-xs text-white placeholder-zinc-500 outline-none transition-colors"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 p-1 bg-black/80 border border-white/10 rounded-xl text-xs shrink-0">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-white text-black font-bold'
                    : 'text-zinc-400 hover:text-white'
                }`}
                title="Grade de Cards"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Grade</span>
              </button>

              <button
                onClick={() => setViewMode('cinema')}
                className={`p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === 'cinema'
                    ? 'bg-white text-black font-bold'
                    : 'text-zinc-400 hover:text-white'
                }`}
                title="Modo Cinema"
              >
                <Monitor className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Cinema</span>
              </button>

              <button
                onClick={() => setViewMode('compare')}
                className={`p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === 'compare'
                    ? 'bg-white text-black font-bold'
                    : 'text-zinc-400 hover:text-white'
                }`}
                title="Comparativo: Print vs Simulador"
              >
                <Split className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Comparar</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAIN GALLERY VIEWPORT */}
      <section className="max-w-7xl mx-auto px-6">
        {filteredScreenshots.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-zinc-950/60 border border-white/10 space-y-3">
            <Search className="w-8 h-8 text-zinc-500 mx-auto" />
            <h3 className="text-base font-bold text-white">Nenhum print encontrado</h3>
            <p className="text-xs text-zinc-400">
              Tente buscar por outro termo ou mude o filtro de categoria selecionado.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-white text-black text-xs font-bold rounded-lg cursor-pointer hover:bg-zinc-200"
            >
              Limpar Filtros
            </button>
          </div>
        ) : (
          <>
            {/* MODE 1: GRID VIEW */}
            {viewMode === 'grid' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredScreenshots.map((item, idx) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveLightboxScreenshot(item)}
                    className="group relative bg-zinc-950/80 border border-white/15 rounded-2xl overflow-hidden hover:border-white/50 transition-all cursor-pointer flex flex-col justify-between shadow-xl"
                  >
                    {/* Top Image Frame */}
                    <div className="relative aspect-video bg-black overflow-hidden flex items-center justify-center border-b border-white/10">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            '/src/assets/images/discord_bot_preview_1793982002391.jpg';
                        }}
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                        <span className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold flex items-center gap-1.5 neon-glow-white-subtle">
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>Ampliar em Alta Resolução</span>
                        </span>
                        <span className="text-[11px] text-zinc-300 font-mono">
                          Clique para abrir em tela cheia
                        </span>
                      </div>

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5">
                        <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-black/80 backdrop-blur-sm border border-white/20 text-white uppercase">
                          {item.categoryLabel}
                        </span>
                      </div>

                      <div className="absolute top-3 right-3">
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-black/80 backdrop-blur-sm border border-white/20 text-zinc-300">
                          #{idx + 1}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 space-y-3 text-left flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <h3 className="text-sm font-bold text-white group-hover:underline leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Footer Info with Command and Copy */}
                      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                        {item.commandRelated ? (
                          <div
                            onClick={(e) => {
                              e.stopPropagation();
                              copyToClipboard(item.commandRelated!);
                            }}
                            className="flex items-center gap-1.5 bg-white/5 hover:bg-white/15 px-2 py-1 rounded text-[11px] text-zinc-300 transition-colors"
                            title="Clique para copiar comando"
                          >
                            <Terminal className="w-3 h-3 text-white" />
                            <span className="text-white font-bold truncate max-w-[170px]">
                              {item.commandRelated}
                            </span>
                            {copiedCmd === item.commandRelated ? (
                              <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                            ) : (
                              <Copy className="w-2.5 h-2.5 text-zinc-400 shrink-0" />
                            )}
                          </div>
                        ) : (
                          <span className="text-zinc-500 text-[11px]">sori oficial</span>
                        )}

                        <span className="text-zinc-400 group-hover:text-white flex items-center gap-1 text-[11px]">
                          <span>Ver</span>
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* MODE 2: CINEMA / PRESENTATION VIEW */}
            {viewMode === 'cinema' && (
              <div className="bg-zinc-950/90 border border-white/15 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6">
                {/* Cinema Top Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-white text-black uppercase">
                        {currentCinemaScreenshot.categoryLabel}
                      </span>
                      <span className="text-xs font-mono text-zinc-400">
                        Print {cinemaIndex + 1} de {filteredScreenshots.length}
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-white font-display">
                      {currentCinemaScreenshot.title}
                    </h2>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={() => setActiveLightboxScreenshot(currentCinemaScreenshot)}
                      className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 transition-all font-semibold flex items-center gap-1.5 text-xs cursor-pointer"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Tela Cheia</span>
                    </button>

                    <a
                      href={currentCinemaScreenshot.imageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/20 transition-colors flex items-center gap-1.5 text-xs"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Discord CDN</span>
                    </a>
                  </div>
                </div>

                {/* Big Cinema Image Stage */}
                <div className="relative aspect-video sm:aspect-[16/9] bg-black rounded-2xl overflow-hidden border border-white/15 flex items-center justify-center shadow-inner">
                  {/* Prev Button */}
                  <button
                    onClick={() =>
                      setCinemaIndex(
                        (cinemaIndex - 1 + filteredScreenshots.length) %
                          filteredScreenshots.length
                      )
                    }
                    className="absolute left-4 z-10 p-3 rounded-full bg-black/80 hover:bg-white hover:text-black text-white border border-white/20 transition-all cursor-pointer shadow-lg"
                    title="Print Anterior (Seta Esquerda)"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <img
                    src={currentCinemaScreenshot.imageUrl}
                    alt={currentCinemaScreenshot.title}
                    referrerPolicy="no-referrer"
                    onClick={() => setActiveLightboxScreenshot(currentCinemaScreenshot)}
                    className="max-h-full max-w-full object-contain cursor-zoom-in hover:scale-[1.01] transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        '/src/assets/images/discord_bot_preview_1793982002391.jpg';
                    }}
                  />

                  {/* Next Button */}
                  <button
                    onClick={() =>
                      setCinemaIndex((cinemaIndex + 1) % filteredScreenshots.length)
                    }
                    className="absolute right-4 z-10 p-3 rounded-full bg-black/80 hover:bg-white hover:text-black text-white border border-white/20 transition-all cursor-pointer shadow-lg"
                    title="Próximo Print (Seta Direita)"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Cinema Description & Command Usage Info */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pt-2">
                  <div className="md:col-span-8 space-y-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                      O que está acontecendo nesta tela:
                    </h4>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {currentCinemaScreenshot.description}
                    </p>
                  </div>

                  <div className="md:col-span-4 bg-black/60 border border-white/10 rounded-xl p-4 space-y-2 text-xs">
                    <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block">
                      Comando Relacionado:
                    </span>
                    {currentCinemaScreenshot.commandRelated ? (
                      <div className="flex items-center justify-between gap-2 bg-white/10 p-2 rounded-lg font-mono">
                        <code className="text-white font-bold">
                          {currentCinemaScreenshot.commandRelated}
                        </code>
                        <button
                          onClick={() => copyToClipboard(currentCinemaScreenshot.commandRelated!)}
                          className="p-1 hover:bg-white hover:text-black text-zinc-300 rounded transition-colors cursor-pointer"
                          title="Copiar"
                        >
                          {copiedCmd === currentCinemaScreenshot.commandRelated ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    ) : (
                      <span className="text-zinc-500">Módulo Geral do sori</span>
                    )}
                  </div>
                </div>

                {/* Scrubber Thumbnails Strip */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <span className="text-xs font-semibold text-zinc-400">
                    Navegação rápida por miniaturas ({filteredScreenshots.length} capturas):
                  </span>
                  <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-thin">
                    {filteredScreenshots.map((item, idx) => {
                      const isSelected = idx === cinemaIndex;
                      return (
                        <div
                          key={item.id}
                          onClick={() => setCinemaIndex(idx)}
                          className={`relative w-28 h-18 shrink-0 rounded-xl overflow-hidden border cursor-pointer transition-all bg-black ${
                            isSelected
                              ? 'border-white ring-2 ring-white/50 scale-105'
                              : 'border-white/20 opacity-60 hover:opacity-100 hover:border-white/50'
                          }`}
                        >
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src =
                                '/src/assets/images/discord_bot_preview_1793982002391.jpg';
                            }}
                          />
                          <span className="absolute bottom-1 right-1 text-[9px] font-mono bg-black/80 text-white px-1.5 rounded">
                            #{idx + 1}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* MODE 3: COMPARISON VIEW (REAL PRINT VS INTERACTIVE SIMULATOR) */}
            {viewMode === 'compare' && (
              <div className="space-y-6">
                {/* Mode description header */}
                <div className="p-4 rounded-2xl bg-zinc-950/80 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <span className="text-xs font-bold font-mono text-white flex items-center gap-1.5 uppercase">
                      <Split className="w-3.5 h-3.5 text-white" />
                      Comparativo de Fidelidade Visual
                    </span>
                    <p className="text-xs text-zinc-400">
                      Compare a captura real do Discord enviada pela comunidade lado a lado com o simulador interativo de slash commands.
                    </p>
                  </div>

                  {/* Selector of Screenshot */}
                  <select
                    value={compareIndex}
                    onChange={(e) => setCompareIndex(Number(e.target.value))}
                    className="bg-black border border-white/20 rounded-xl px-3 py-1.5 text-xs text-white outline-none cursor-pointer"
                  >
                    {filteredScreenshots.map((s, idx) => (
                      <option key={s.id} value={idx}>
                        #{idx + 1}: {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 2-Columns Side by Side */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left Column: Real Print from Discord (6 cols) */}
                  <div className="lg:col-span-6 bg-zinc-950/80 border border-white/15 rounded-2xl overflow-hidden p-4 space-y-3">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="text-xs font-bold text-white uppercase tracking-wider">
                          1. Captura Real no Discord
                        </span>
                      </div>
                      <button
                        onClick={() => setActiveLightboxScreenshot(currentCompareScreenshot)}
                        className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 cursor-pointer"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Ampliar</span>
                      </button>
                    </div>

                    <div className="relative aspect-video bg-black rounded-xl overflow-hidden border border-white/10 flex items-center justify-center">
                      <img
                        src={currentCompareScreenshot.imageUrl}
                        alt={currentCompareScreenshot.title}
                        referrerPolicy="no-referrer"
                        className="max-h-full max-w-full object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            '/src/assets/images/discord_bot_preview_1793982002391.jpg';
                        }}
                      />
                    </div>

                    <div className="space-y-1 text-xs">
                      <h4 className="font-bold text-white">
                        {currentCompareScreenshot.title}
                      </h4>
                      <p className="text-zinc-400 leading-relaxed">
                        {currentCompareScreenshot.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Live Interactive Simulator (6 cols) */}
                  <div className="lg:col-span-6 space-y-3">
                    <div className="flex items-center justify-between px-1">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-white" />
                        <span className="text-xs font-bold text-white uppercase tracking-wider">
                          2. Simulador Interativo do sori
                        </span>
                      </div>
                      <code className="text-xs font-mono text-white bg-white/10 px-2 py-0.5 rounded">
                        {matchedCommand.name}
                      </code>
                    </div>

                    <DiscordEmbedSimulator command={matchedCommand} lang={lang} />
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </section>

      {/* 4. BOTTOM INVITATION CTA */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl bg-zinc-950/90 border border-white/20 p-8 sm:p-12 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-3 max-w-2xl text-left relative z-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-white" />
              Tudo o que você viu é 100% Gratuito
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
              Gostou das interfaces do sori no Discord?
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Adicione agora mesmo ao seu servidor. Você pode configurar tickets, painéis, moderação
              e mensagens com um único comando slash <code className="text-white bg-white/15 px-1.5 py-0.5 rounded font-mono font-bold">/configurar bot</code>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 relative z-10 w-full sm:w-auto">
            <a
              href="https://discord.com/oauth2/authorize?client_id=123456789012345678&scope=bot%20applications.commands&permissions=8"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-white hover:bg-zinc-200 text-black font-bold rounded-xl text-center text-sm transition-all flex items-center justify-center gap-2 neon-glow-white-subtle cursor-pointer"
            >
              <Bot className="w-4 h-4" />
              <span>Adicionar Bot ao Discord</span>
            </a>

            <button
              onClick={() => {
                setCurrentTab('comandos');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-5 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold rounded-xl text-center text-sm border border-white/20 transition-colors cursor-pointer"
            >
              <span>Ver Lista de Comandos</span>
            </button>
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <ScreenshotsLightboxModal
        screenshot={activeLightboxScreenshot}
        allScreenshots={filteredScreenshots}
        onClose={() => setActiveLightboxScreenshot(null)}
        onSelect={(item) => setActiveLightboxScreenshot(item)}
      />
    </div>
  );
};
