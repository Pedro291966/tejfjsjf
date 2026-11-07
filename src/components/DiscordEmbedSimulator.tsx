import React, { useState } from 'react';
import { Bot, Check, Sparkles, Terminal, Copy } from 'lucide-react';
import { BotCommand, Language } from '../types';
import { BOT_LOGO_URL } from '../data/botData';

interface DiscordEmbedSimulatorProps {
  command: BotCommand;
  lang: Language;
}

export const DiscordEmbedSimulator: React.FC<DiscordEmbedSimulatorProps> = ({ command, lang }) => {
  const [clickedButton, setClickedButton] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleButtonClick = (label: string) => {
    setClickedButton(label);
    setTimeout(() => {
      setClickedButton(null);
    }, 2500);
  };

  const copyUsage = () => {
    navigator.clipboard.writeText(command.usage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-[#313338] text-[#dbdee1] rounded-xl overflow-hidden border border-white/20 shadow-2xl font-sans">
      {/* Discord Channel Header Mockup */}
      <div className="bg-[#2b2d31] px-4 py-2.5 border-b border-[#1f2023] flex items-center justify-between text-xs text-[#949ba4]">
        <div className="flex items-center gap-2">
          <span className="text-[#80848e] font-bold text-sm">#</span>
          <span className="font-semibold text-white">comandos-sori</span>
          <span className="text-zinc-500 hidden sm:inline">|</span>
          <span className="text-zinc-400 hidden sm:inline text-[11px]">
            Simulação em Tempo Real do Discord
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={copyUsage}
            className="flex items-center gap-1 px-2 py-1 bg-[#1e1f22] hover:bg-[#35373c] text-zinc-300 rounded text-[11px] transition-colors cursor-pointer"
            title="Copiar comando"
          >
            {copied ? <Check className="w-3 h-3 text-white" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? 'Copiado!' : 'Copiar'}</span>
          </button>
        </div>
      </div>

      {/* Discord Chat Area */}
      <div className="p-4 sm:p-5 space-y-3">
        {/* User Command Slash Input */}
        <div className="flex items-center gap-2 text-xs text-[#949ba4] font-mono">
          <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[10px] text-white">
            /
          </div>
          <span className="text-zinc-400">Comando executado:</span>
          <code className="text-white bg-[#1e1f22] px-2 py-0.5 rounded border border-white/10 font-bold">
            {command.usage}
          </code>
        </div>

        {/* Bot Message Row */}
        <div className="flex items-start gap-3.5 pt-1">
          {/* Avatar with Glow and Official Animated GIF */}
          <div className="w-10 h-10 rounded-full border border-white/40 bg-black shrink-0 overflow-hidden neon-glow-white-subtle">
            <img
              src={BOT_LOGO_URL}
              alt="sori avatar"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/src/assets/images/sori_bot_avatar_1793981999577.jpg';
              }}
            />
          </div>

          <div className="flex-1 min-w-0">
            {/* Bot Header Line */}
            <div className="flex items-center gap-2 text-sm leading-none mb-2">
              <span className="font-bold text-white hover:underline cursor-pointer">sori</span>
              <span className="bg-[#5865F2] text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase flex items-center gap-0.5">
                <Check className="w-2.5 h-2.5" />
                BOT
              </span>
              <span className="text-[11px] text-[#949ba4] font-medium">Hoje às 12:00</span>
            </div>

            {/* Discord Embed Container */}
            <div className="bg-[#2b2d31] border-l-4 border-white rounded-r-lg p-4 max-w-2xl space-y-3 shadow-md">
              {/* Title */}
              <h4 className="text-sm font-bold text-white hover:underline cursor-pointer">
                {command.previewEmbed.title}
              </h4>

              {/* Description */}
              <p className="text-xs text-[#dbdee1] leading-relaxed whitespace-pre-line">
                {command.previewEmbed.description}
              </p>

              {/* Fields Grid */}
              {command.previewEmbed.fields && command.previewEmbed.fields.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {command.previewEmbed.fields.map((field, idx) => (
                    <div
                      key={idx}
                      className={field.inline ? 'col-span-1' : 'col-span-1 sm:col-span-2'}
                    >
                      <div className="text-[11px] font-bold text-zinc-300 uppercase tracking-wide">
                        {field.name}
                      </div>
                      <div className="text-xs text-white/90 mt-0.5 font-medium">
                        {field.value}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Footer */}
              {command.previewEmbed.footer && (
                <div className="pt-2 border-t border-[#35373c] text-[10px] text-[#949ba4] flex items-center justify-between">
                  <span>{command.previewEmbed.footer}</span>
                  <span className="font-mono text-[9px] text-zinc-500">ID: #940128</span>
                </div>
              )}
            </div>

            {/* Interactive Action Row Buttons */}
            {command.previewEmbed.buttons && (
              <div className="flex flex-wrap gap-2 mt-3">
                {command.previewEmbed.buttons.map((btn, idx) => {
                  let styleClasses = 'bg-[#4e5058] hover:bg-[#6d6f78] text-white';
                  if (btn.style === 'primary') styleClasses = 'bg-white text-black hover:bg-zinc-200 font-bold';
                  if (btn.style === 'success') styleClasses = 'bg-[#248046] hover:bg-[#1a6334] text-white';
                  if (btn.style === 'danger') styleClasses = 'bg-[#da373c] hover:bg-[#a1282c] text-white';

                  return (
                    <button
                      key={idx}
                      onClick={() => handleButtonClick(btn.label)}
                      className={`px-3 py-1.5 rounded text-xs font-medium transition-all flex items-center gap-1.5 shadow cursor-pointer active:scale-95 ${styleClasses}`}
                    >
                      {btn.emoji && <span>{btn.emoji}</span>}
                      <span>{btn.label}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Interactive Click Toast Feedback */}
            {clickedButton && (
              <div className="mt-2 text-xs bg-white/10 text-white border border-white/20 px-3 py-1.5 rounded inline-flex items-center gap-2 animate-in fade-in">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>
                  Ação disparada com sucesso no sori:{' '}
                  <strong className="text-white">"{clickedButton}"</strong>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
