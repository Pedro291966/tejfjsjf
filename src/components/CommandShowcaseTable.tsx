import React, { useState } from 'react';
import { Eye, Terminal, Sparkles, Shield, Tag, ChevronRight, ChevronLeft, LayoutGrid, Maximize2, ExternalLink, Camera, Image as ImageIcon } from 'lucide-react';
import { BotCommand, CommandCategory, Language, BotScreenshot } from '../types';
import { BOT_COMMANDS, BOT_SCREENSHOTS } from '../data/botData';
import { DiscordEmbedSimulator } from './DiscordEmbedSimulator';
import { ScreenshotsLightboxModal } from './ScreenshotsLightboxModal';
import { translations } from '../i18n/translations';

interface CommandShowcaseTableProps {
  lang: Language;
}

export const CommandShowcaseTable: React.FC<CommandShowcaseTableProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<CommandCategory>('all');
  const [selectedCommand, setSelectedCommand] = useState<BotCommand>(BOT_COMMANDS[0]);
  const [viewMode, setViewMode] = useState<'interactive' | 'prints'>('interactive');
  
  // Per-command preview mode: simulator or screenshots
  const [commandPreviewMode, setCommandPreviewMode] = useState<'simulator' | 'screenshots'>('simulator');
  const [selectedScreenshotIndex, setSelectedScreenshotIndex] = useState<number>(0);

  // Screenshots filter and lightbox modal state
  const [screenshotFilter, setScreenshotFilter] = useState<'all' | 'tickets' | 'config' | 'punicao' | 'revisao' | 'tempo'>('all');
  const [activeScreenshot, setActiveScreenshot] = useState<BotScreenshot | null>(null);

  const t = translations[lang].commandsTable;

  const categories: { id: CommandCategory; label: string }[] = [
    { id: 'all', label: t.all },
    { id: 'tickets', label: t.tickets },
    { id: 'moderacao', label: t.moderation },
    { id: 'loja', label: t.shop },
    { id: 'entretenimento', label: t.entertainment },
    { id: 'automacao', label: t.automation },
  ];

  const filteredCommands = BOT_COMMANDS.filter((cmd) => {
    if (activeCategory === 'all') return true;
    return cmd.category === activeCategory;
  });

  const filteredScreenshots = BOT_SCREENSHOTS.filter((s) => {
    if (screenshotFilter === 'all') return true;
    return s.category === screenshotFilter;
  });

  const handleSelectCommand = (cmd: BotCommand) => {
    setSelectedCommand(cmd);
    setSelectedScreenshotIndex(0);
    // keep current preview mode if it has screenshots, else fallback to simulator
    if (!cmd.screenshots || cmd.screenshots.length === 0) {
      setCommandPreviewMode('simulator');
    }
  };

  const handleOpenScreenshotInLightbox = (url: string, caption: string) => {
    // Find matching screenshot in BOT_SCREENSHOTS or create virtual one
    const found = BOT_SCREENSHOTS.find((s) => s.imageUrl === url);
    if (found) {
      setActiveScreenshot(found);
    } else {
      setActiveScreenshot({
        id: `shot-${Date.now()}`,
        title: caption,
        category: 'tickets',
        categoryLabel: selectedCommand.name,
        description: caption,
        imageUrl: url,
        commandRelated: selectedCommand.name,
      });
    }
  };

  const currentCommandScreenshots = selectedCommand.screenshots || [];
  const currentScreenshot = currentCommandScreenshots[selectedScreenshotIndex] || currentCommandScreenshots[0];

  return (
    <div className="w-full space-y-8">
      {/* Category Filter Tabs and View Switcher */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-4">
        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-950/80 border border-white/10 rounded-xl">
          {viewMode === 'interactive' ? (
            categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-white text-black neon-glow-white-subtle'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })
          ) : (
            <>
              <button
                onClick={() => setScreenshotFilter('all')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  screenshotFilter === 'all'
                    ? 'bg-white text-black'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Todos os Prints ({BOT_SCREENSHOTS.length})
              </button>
              <button
                onClick={() => setScreenshotFilter('tickets')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  screenshotFilter === 'tickets'
                    ? 'bg-white text-black'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Tickets (8)
              </button>
              <button
                onClick={() => setScreenshotFilter('config')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  screenshotFilter === 'config'
                    ? 'bg-white text-black'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Configurar Bot
              </button>
              <button
                onClick={() => setScreenshotFilter('punicao')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  screenshotFilter === 'punicao'
                    ? 'bg-white text-black'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Punições (Ban/Mute/Warn)
              </button>
              <button
                onClick={() => setScreenshotFilter('revisao')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  screenshotFilter === 'revisao'
                    ? 'bg-white text-black'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Revisão de Punições
              </button>
              <button
                onClick={() => setScreenshotFilter('tempo')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  screenshotFilter === 'tempo'
                    ? 'bg-white text-black'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Tempos Automáticos
              </button>
            </>
          )}
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-1 p-1 bg-zinc-950/80 border border-white/10 rounded-xl text-xs">
          <button
            onClick={() => setViewMode('interactive')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
              viewMode === 'interactive'
                ? 'bg-white text-black font-bold'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Simulador Interativo</span>
          </button>
          <button
            onClick={() => setViewMode('prints')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
              viewMode === 'prints'
                ? 'bg-white text-black font-bold'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Galeria Geral de Prints ({BOT_SCREENSHOTS.length})</span>
          </button>
        </div>
      </div>

      {viewMode === 'interactive' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Table List of Commands (Left col-span-5) */}
          <div className="lg:col-span-5 bg-zinc-950/60 border border-white/10 rounded-xl overflow-hidden">
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                Comandos Slash ({filteredCommands.length})
              </span>
              <span className="text-[11px] text-zinc-500">
                Selecione para simular
              </span>
            </div>

            <div className="divide-y divide-white/5 max-h-[640px] overflow-y-auto">
              {filteredCommands.map((cmd) => {
                const isSelected = selectedCommand.name === cmd.name;
                const hasScreenshots = cmd.screenshots && cmd.screenshots.length > 0;
                return (
                  <div
                    key={cmd.name}
                    onClick={() => handleSelectCommand(cmd)}
                    className={`p-4 transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-white/10 border-l-2 border-white'
                        : 'hover:bg-white/5'
                    }`}
                  >
                    <div className="space-y-1.5 min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <code className="text-sm font-bold font-mono text-white bg-black/60 px-2 py-0.5 rounded border border-white/10">
                          {cmd.name}
                        </code>
                        <span className="text-[10px] uppercase font-mono text-zinc-400">
                          {cmd.category}
                        </span>
                        {hasScreenshots && (
                          <span className="text-[10px] font-semibold bg-white/15 text-white border border-white/20 px-1.5 py-0.5 rounded flex items-center gap-1">
                            <Camera className="w-3 h-3 text-white" />
                            <span>{cmd.screenshots!.length} prints</span>
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-zinc-400 line-clamp-1">
                        {cmd.description[lang]}
                      </p>
                      <div className="text-[11px] text-zinc-500 font-mono truncate">
                        {cmd.usage}
                      </div>
                    </div>

                    <button
                      className={`p-2 rounded-lg transition-colors shrink-0 ${
                        isSelected
                          ? 'bg-white text-black'
                          : 'bg-zinc-900 text-zinc-400 hover:text-white'
                      }`}
                      title={t.viewPreview}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Discord Simulator & Screenshots Tab (Right col-span-7) */}
          <div className="lg:col-span-7 space-y-4">
            {/* View Sub-Switcher for Selected Command */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-1">
              <div className="text-xs text-zinc-400 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>Comando ativo:</span>
                <code className="text-white font-mono font-bold bg-white/10 px-2 py-0.5 rounded border border-white/10">
                  {selectedCommand.name}
                </code>
              </div>

              {/* Toggle: Simulator vs Real Screenshots */}
              <div className="flex items-center gap-1 p-1 bg-zinc-950/90 border border-white/10 rounded-lg text-xs self-start sm:self-auto">
                <button
                  onClick={() => setCommandPreviewMode('simulator')}
                  className={`px-3 py-1 rounded-md flex items-center gap-1.5 transition-all cursor-pointer font-medium ${
                    commandPreviewMode === 'simulator'
                      ? 'bg-white text-black font-bold'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Terminal className="w-3 h-3" />
                  <span>Simulador Interativo</span>
                </button>

                <button
                  onClick={() => {
                    if (currentCommandScreenshots.length > 0) {
                      setCommandPreviewMode('screenshots');
                    }
                  }}
                  disabled={currentCommandScreenshots.length === 0}
                  className={`px-3 py-1 rounded-md flex items-center gap-1.5 transition-all cursor-pointer font-medium ${
                    commandPreviewMode === 'screenshots'
                      ? 'bg-white text-black font-bold'
                      : currentCommandScreenshots.length > 0
                      ? 'text-zinc-400 hover:text-white'
                      : 'text-zinc-600 cursor-not-allowed'
                  }`}
                >
                  <Camera className="w-3 h-3" />
                  <span>Prints Reais ({currentCommandScreenshots.length})</span>
                </button>
              </div>
            </div>

            {/* Content: Either Simulator or Screenshots Carousel */}
            {commandPreviewMode === 'simulator' ? (
              <div className="space-y-4">
                <DiscordEmbedSimulator command={selectedCommand} lang={lang} />

                {/* Inline Screenshot Previews Strip for This Command */}
                {currentCommandScreenshots.length > 0 && (
                  <div className="bg-zinc-950/80 border border-white/10 rounded-xl p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Camera className="w-4 h-4 text-white" />
                        <span className="text-xs font-bold text-white uppercase tracking-wider">
                          Prints Reais no Discord ({currentCommandScreenshots.length})
                        </span>
                      </div>
                      <button
                        onClick={() => setCommandPreviewMode('screenshots')}
                        className="text-xs text-white hover:underline flex items-center gap-1 cursor-pointer font-medium"
                      >
                        <span>Abrir Visualizador de Prints</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {currentCommandScreenshots.map((shot, idx) => (
                        <div
                          key={idx}
                          onClick={() => {
                            setSelectedScreenshotIndex(idx);
                            setCommandPreviewMode('screenshots');
                          }}
                          className="group relative aspect-video rounded-lg overflow-hidden border border-white/15 hover:border-white/60 bg-black cursor-pointer transition-all shadow-md"
                          title={shot.caption}
                        >
                          <img
                            src={shot.url}
                            alt={shot.caption}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = '/src/assets/images/discord_bot_preview_1793982002391.jpg';
                            }}
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-2 text-center">
                            <Maximize2 className="w-4 h-4 text-white mb-1" />
                            <span className="text-[10px] text-white line-clamp-1 font-semibold">
                              Print #{idx + 1}
                            </span>
                          </div>
                          <div className="absolute bottom-1 left-1 bg-black/80 px-1.5 py-0.5 rounded text-[9px] font-mono text-white">
                            #{idx + 1}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Dedicated Screenshots Viewer for the Selected Command */
              <div className="bg-zinc-950/90 border border-white/15 rounded-2xl overflow-hidden shadow-2xl space-y-4 p-4 sm:p-5">
                {/* Header with Title and Counter */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-white text-black uppercase">
                        Captura Oficial Discord
                      </span>
                      <span className="text-xs font-mono text-zinc-400">
                        {selectedScreenshotIndex + 1} de {currentCommandScreenshots.length}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white">
                      {currentScreenshot.caption}
                    </h4>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        handleOpenScreenshotInLightbox(
                          currentScreenshot.url,
                          currentScreenshot.caption
                        )
                      }
                      className="p-2 rounded-lg bg-white/10 hover:bg-white text-zinc-300 hover:text-black border border-white/20 transition-all cursor-pointer flex items-center gap-1 text-xs font-semibold"
                      title="Ampliar em Alta Resolução"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Tela Cheia</span>
                    </button>
                    <a
                      href={currentScreenshot.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/20 transition-colors cursor-pointer"
                      title="Abrir URL original"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Main Large Image Frame with Navigation */}
                <div className="relative aspect-video sm:aspect-[16/10] bg-black rounded-xl overflow-hidden border border-white/15 flex items-center justify-center">
                  <button
                    onClick={() =>
                      setSelectedScreenshotIndex(
                        (selectedScreenshotIndex - 1 + currentCommandScreenshots.length) %
                          currentCommandScreenshots.length
                      )
                    }
                    className="absolute left-3 z-10 p-2.5 rounded-full bg-black/80 hover:bg-white hover:text-black text-white border border-white/20 transition-all cursor-pointer"
                    title="Print Anterior"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <img
                    src={currentScreenshot.url}
                    alt={currentScreenshot.caption}
                    referrerPolicy="no-referrer"
                    onClick={() =>
                      handleOpenScreenshotInLightbox(
                        currentScreenshot.url,
                        currentScreenshot.caption
                      )
                    }
                    className="max-h-full max-w-full object-contain cursor-zoom-in hover:scale-[1.02] transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/src/assets/images/discord_bot_preview_1793982002391.jpg';
                    }}
                  />

                  <button
                    onClick={() =>
                      setSelectedScreenshotIndex(
                        (selectedScreenshotIndex + 1) % currentCommandScreenshots.length
                      )
                    }
                    className="absolute right-3 z-10 p-2.5 rounded-full bg-black/80 hover:bg-white hover:text-black text-white border border-white/20 transition-all cursor-pointer"
                    title="Próximo Print"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Thumbnails Navigation Row */}
                <div className="space-y-2">
                  <span className="text-[11px] font-semibold text-zinc-400">
                    Selecione o print para visualizar ({currentCommandScreenshots.length} capturas disponíveis):
                  </span>
                  <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
                    {currentCommandScreenshots.map((shot, idx) => {
                      const isThumbSelected = idx === selectedScreenshotIndex;
                      return (
                        <div
                          key={idx}
                          onClick={() => setSelectedScreenshotIndex(idx)}
                          className={`relative w-24 h-16 shrink-0 rounded-lg overflow-hidden border cursor-pointer transition-all bg-black ${
                            isThumbSelected
                              ? 'border-white ring-2 ring-white/50 scale-105'
                              : 'border-white/20 opacity-60 hover:opacity-100 hover:border-white/50'
                          }`}
                        >
                          <img
                            src={shot.url}
                            alt={shot.caption}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = '/src/assets/images/discord_bot_preview_1793982002391.jpg';
                            }}
                          />
                          <span className="absolute bottom-0.5 right-1 text-[9px] font-mono bg-black/80 text-white px-1 rounded">
                            #{idx + 1}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Back to Simulator Action Button */}
                <div className="pt-2 flex items-center justify-between border-t border-white/10 text-xs">
                  <button
                    onClick={() => setCommandPreviewMode('simulator')}
                    className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white border border-white/20 transition-colors flex items-center gap-1.5 cursor-pointer font-medium"
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Voltar para o Simulador Discord</span>
                  </button>

                  <span className="text-[11px] text-zinc-500 font-mono">
                    sori • Prints verificados
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Real Screenshots Gallery Grid */
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredScreenshots.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveScreenshot(item)}
                className="group relative bg-zinc-950/80 border border-white/15 rounded-2xl overflow-hidden hover:border-white/50 transition-all cursor-pointer flex flex-col justify-between shadow-xl"
              >
                {/* Image Frame with zoom hover */}
                <div className="relative aspect-video bg-black overflow-hidden flex items-center justify-center border-b border-white/10">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/src/assets/images/discord_bot_preview_1793982002391.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3.5 py-1.5 rounded-lg bg-white text-black text-xs font-bold flex items-center gap-1.5 neon-glow-white-subtle">
                      <Maximize2 className="w-3.5 h-3.5" />
                      Visualizar em Alta Resolução
                    </span>
                  </div>

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-black/80 backdrop-blur-sm border border-white/20 text-white uppercase">
                      {item.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Card description */}
                <div className="p-5 space-y-2 text-left">
                  <h4 className="text-sm font-bold text-white group-hover:underline">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                  {item.commandRelated && (
                    <div className="pt-2 text-[10px] font-mono text-zinc-400 flex items-center gap-1">
                      <span>Comando:</span>
                      <code className="text-white bg-white/10 px-1.5 py-0.2 rounded font-bold">
                        {item.commandRelated}
                      </code>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      <ScreenshotsLightboxModal
        screenshot={activeScreenshot}
        allScreenshots={filteredScreenshots}
        onClose={() => setActiveScreenshot(null)}
        onSelect={(item) => setActiveScreenshot(item)}
      />
    </div>
  );
};
