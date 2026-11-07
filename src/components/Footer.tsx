import React from 'react';
import { ShieldCheck, Heart, Terminal, Bot } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import { BOT_LOGO_URL } from '../data/botData';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentTab, lang }) => {
  const t = translations[lang].nav;

  const navigate = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#040405] border-t border-white/10 text-zinc-400 py-12 px-6">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Wordmark & Mission */}
          <div className="space-y-3 md:col-span-1">
            <button
              onClick={() => navigate('inicio')}
              className="text-2xl font-black tracking-tighter text-white font-display flex items-center gap-2.5 cursor-pointer"
            >
              <div className="w-7 h-7 rounded-full border border-white/30 overflow-hidden bg-black shrink-0">
                <img
                  src={BOT_LOGO_URL}
                  alt="sori logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/src/assets/images/sori_bot_avatar_1793981999577.jpg';
                  }}
                />
              </div>
              <span className="neon-text-glow">sori</span>
              <span className="text-[10px] font-mono tracking-widest uppercase border border-white/30 px-1.5 py-0.5 rounded text-zinc-300">
                BOT
              </span>
            </button>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Automação de alta performance, tickets inteligentes, moderação anti-raid e loja
              virtual para servidores Discord. 100% gratuito.
            </p>
            <div className="text-xs text-zinc-400 flex items-center gap-2 pt-1">
              <span className="font-semibold text-white">Cluster Cloud:</span>
              <span className="text-zinc-300">US-East & BR-Central</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => navigate('inicio')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('sobre')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('comandos')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.commands}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('prints')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>{t.prints}</span>
                  <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-white text-black font-bold">
                    NOVO
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('planos')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.plans}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Support & Updates */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Comunidade
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => navigate('suporte')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.support}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('avisos')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.announcements}
                </button>
              </li>
              <li>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Servidor Discord Oficial
                </a>
              </li>
              <li>
                <button
                  onClick={() => navigate('admin')}
                  className="text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-white" />
                  <span>{t.adminPanel}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Legal & Privacidade
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => navigate('termos')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.terms}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('privacidade')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.privacy}
                </button>
              </li>
              <li className="pt-2 text-[11px] text-zinc-400">
                Em conformidade com as Diretrizes da Comunidade do Discord e termos de desenvolvedor.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © 2026 <strong className="text-zinc-200">sori bot</strong>. 100% Gratuito. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-zinc-400">Desenvolvido com foco em velocidade & segurança</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
