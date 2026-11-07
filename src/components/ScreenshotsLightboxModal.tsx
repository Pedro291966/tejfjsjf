import React from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink, Terminal, Shield } from 'lucide-react';
import { BotScreenshot } from '../types';

interface ScreenshotsLightboxModalProps {
  screenshot: BotScreenshot | null;
  allScreenshots: BotScreenshot[];
  onClose: () => void;
  onSelect: (item: BotScreenshot) => void;
}

export const ScreenshotsLightboxModal: React.FC<ScreenshotsLightboxModalProps> = ({
  screenshot,
  allScreenshots,
  onClose,
  onSelect,
}) => {
  if (!screenshot) return null;

  const currentIndex = allScreenshots.findIndex((s) => s.id === screenshot.id);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + allScreenshots.length) % allScreenshots.length;
    onSelect(allScreenshots[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % allScreenshots.length;
    onSelect(allScreenshots[nextIndex]);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl bg-[#090a0f] border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
      >
        {/* Top Bar */}
        <div className="p-4 px-6 border-b border-white/10 flex items-center justify-between bg-black/60">
          <div className="flex items-center gap-3 min-w-0">
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-white text-black font-extrabold uppercase">
              {screenshot.categoryLabel}
            </span>
            <h3 className="text-sm sm:text-base font-bold text-white truncate">
              {screenshot.title}
            </h3>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-mono text-zinc-400 hidden sm:inline">
              {currentIndex + 1} de {allScreenshots.length}
            </span>
            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white rounded-lg border border-white/10 hover:border-white/30 transition-colors cursor-pointer"
              title="Fechar (ESC)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Center Image Container with Navigation Arrows */}
        <div className="relative flex-1 bg-black flex items-center justify-center p-4 overflow-hidden min-h-[300px] sm:min-h-[460px]">
          <button
            onClick={handlePrev}
            className="absolute left-4 z-10 p-2.5 rounded-full bg-black/70 hover:bg-white hover:text-black text-white border border-white/20 transition-all cursor-pointer"
            title="Print Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <img
            src={screenshot.imageUrl}
            alt={screenshot.title}
            referrerPolicy="no-referrer"
            className="max-h-[62vh] max-w-full object-contain rounded-lg shadow-2xl border border-white/10"
            onError={(e) => {
              // Graceful fallback container
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent && !parent.querySelector('.fallback-placeholder')) {
                const div = document.createElement('div');
                div.className = 'fallback-placeholder p-8 text-center space-y-2';
                div.innerHTML = `<div class="text-white font-bold">${screenshot.title}</div><div class="text-xs text-zinc-400">Captura de tela do Discord do Bot sori</div>`;
                parent.appendChild(div);
              }
            }}
          />

          <button
            onClick={handleNext}
            className="absolute right-4 z-10 p-2.5 rounded-full bg-black/70 hover:bg-white hover:text-black text-white border border-white/20 transition-all cursor-pointer"
            title="Próximo Print"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Details Footer */}
        <div className="p-4 sm:p-5 bg-[#0d0e12] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
          <div className="space-y-1 max-w-2xl">
            <p className="text-zinc-300 leading-relaxed">
              {screenshot.description}
            </p>
            {screenshot.commandRelated && (
              <div className="flex items-center gap-2 pt-1 font-mono text-[11px] text-zinc-400">
                <Terminal className="w-3.5 h-3.5 text-white" />
                <span>Comando relacionado:</span>
                <code className="text-white bg-white/10 px-2 py-0.5 rounded font-bold">
                  {screenshot.commandRelated}
                </code>
              </div>
            )}
          </div>

          <a
            href={screenshot.imageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white border border-white/20 hover:border-white/50 rounded-lg font-semibold flex items-center gap-1.5 shrink-0 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Abrir Imagem Original</span>
          </a>
        </div>
      </div>
    </div>
  );
};
