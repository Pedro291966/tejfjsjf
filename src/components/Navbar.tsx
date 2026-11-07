import React, { useState } from 'react';
import { Menu, X, Shield, Globe, LogOut, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import { BOT_LOGO_URL } from '../data/botData';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  lang: Language;
  setLang: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  lang,
  setLang,
}) => {
  const { user, openLoginModal, logout, isBotAdmin } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const t = translations[lang].nav;

  const navLinks = [
    { id: 'inicio', label: t.home },
    { id: 'sobre', label: t.about },
    { id: 'comandos', label: t.commands },
    { id: 'prints', label: t.prints, badge: 'NOVO' },
    { id: 'planos', label: t.plans },
    { id: 'suporte', label: t.support },
    { id: 'avisos', label: t.announcements },
  ];

  const handleNavClick = (id: string) => {
    setCurrentTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-30 w-full bg-black/85 backdrop-blur-xl border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Brand Wordmark (Single text element in display face with logo) */}
        <button
          onClick={() => handleNavClick('inicio')}
          className="text-2xl font-black tracking-tighter text-white hover:opacity-90 transition-opacity whitespace-nowrap shrink-0 flex items-center gap-2.5 cursor-pointer font-display"
        >
          <div className="w-8 h-8 rounded-full border border-white/30 overflow-hidden bg-black shrink-0 neon-glow-white-subtle">
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
          <span className="text-[10px] tracking-widest font-mono uppercase px-1.5 py-0.5 rounded border border-white/30 text-zinc-300">
            BOT
          </span>
        </button>

        {/* Zone 2: Navigation Links (Single-line text links with subtle hover effect) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-zinc-300">
          {navLinks.map((link) => {
            const isActive = currentTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'text-white font-semibold underline underline-offset-8 decoration-white decoration-2'
                    : 'hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[9px] font-mono font-bold bg-white text-black px-1.5 py-0.2 rounded-full neon-glow-white-subtle">
                    {link.badge}
                  </span>
                )}
              </button>
            );
          })}

          {/* Admin Panel link for quick navigation if user is Bot Admin */}
          {isBotAdmin && (
            <button
              onClick={() => handleNavClick('admin')}
              className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5 ${
                currentTab === 'admin'
                  ? 'text-white font-semibold underline underline-offset-8 decoration-white decoration-2'
                  : 'text-zinc-200 hover:text-white'
              }`}
            >
              <Shield className="w-3.5 h-3.5 text-white" />
              <span>{t.adminPanel}</span>
            </button>
          )}
        </nav>

        {/* Zone 3: Primary Action & Auth Controls */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-zinc-300 hover:text-white rounded-md border border-white/10 hover:border-white/30 bg-zinc-950/60 transition-all cursor-pointer whitespace-nowrap shrink-0"
              title="Mudar Idioma"
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="uppercase font-mono font-medium">{lang}</span>
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-[#0a0a0c] border border-white/20 rounded-lg shadow-2xl py-1 z-50 text-xs text-zinc-300">
                <button
                  onClick={() => {
                    setLang('pt');
                    setLangDropdownOpen(false);
                  }}
                  className={`w-full text-left px-3 py-1.5 hover:bg-white/10 flex items-center justify-between cursor-pointer ${
                    lang === 'pt' ? 'text-white font-bold bg-white/5' : ''
                  }`}
                >
                  <span>Português</span>
                  <span className="font-mono text-[10px] text-zinc-400">BR</span>
                </button>
                <button
                  onClick={() => {
                    setLang('en');
                    setLangDropdownOpen(false);
                  }}
                  className={`w-full text-left px-3 py-1.5 hover:bg-white/10 flex items-center justify-between cursor-pointer ${
                    lang === 'en' ? 'text-white font-bold bg-white/5' : ''
                  }`}
                >
                  <span>English</span>
                  <span className="font-mono text-[10px] text-zinc-400">EN</span>
                </button>
                <button
                  onClick={() => {
                    setLang('es');
                    setLangDropdownOpen(false);
                  }}
                  className={`w-full text-left px-3 py-1.5 hover:bg-white/10 flex items-center justify-between cursor-pointer ${
                    lang === 'es' ? 'text-white font-bold bg-white/5' : ''
                  }`}
                >
                  <span>Español</span>
                  <span className="font-mono text-[10px] text-zinc-400">ES</span>
                </button>
              </div>
            )}
          </div>

          {/* Discord User Profile or Login Trigger */}
          {user ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  if (user.isBotAdmin) {
                    handleNavClick('admin');
                  } else {
                    openLoginModal();
                  }
                }}
                className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-white/20 hover:border-white/40 rounded-lg text-xs transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                <img
                  src={user.avatar}
                  alt={user.displayName}
                  className="w-5 h-5 rounded-full object-cover border border-white/30"
                />
                <span className="text-white font-medium max-w-[110px] truncate">
                  {user.displayName.split(' ')[0]}
                </span>
                {user.isBotAdmin && (
                  <span className="px-1 py-0.2 text-[9px] font-bold bg-white text-black rounded">
                    ADMIN
                  </span>
                )}
              </button>
              <button
                onClick={logout}
                className="p-1.5 text-zinc-400 hover:text-white rounded-md border border-white/10 hover:border-white/30 cursor-pointer"
                title="Desconectar"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              onClick={openLoginModal}
              className="px-3.5 py-2 text-xs font-semibold text-black bg-white hover:bg-zinc-200 rounded-lg transition-all flex items-center gap-1.5 neon-glow-white-subtle whitespace-nowrap shrink-0 cursor-pointer"
            >
              <User className="w-3.5 h-3.5" />
              <span>{t.loginDiscord}</span>
            </button>
          )}

          {/* Add Bot to Discord Button */}
          <a
            href="https://discord.com/oauth2/authorize?client_id=123456789012345678&scope=bot%20applications.commands&permissions=8"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex px-3.5 py-2 text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 border border-white/30 hover:border-white/60 rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            {t.addBot}
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white rounded-lg border border-white/10 cursor-pointer"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070709] border-b border-white/20 px-6 py-4 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left py-2 px-3 rounded-md text-sm font-medium transition-colors flex items-center justify-between ${
                  currentTab === link.id
                    ? 'bg-white/10 text-white font-semibold'
                    : 'text-zinc-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[9px] font-mono font-bold bg-white text-black px-1.5 py-0.5 rounded-full">
                    {link.badge}
                  </span>
                )}
              </button>
            ))}

            {isBotAdmin && (
              <button
                onClick={() => handleNavClick('admin')}
                className={`text-left py-2 px-3 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                  currentTab === 'admin'
                    ? 'bg-white text-black font-semibold'
                    : 'text-zinc-200 hover:bg-white/5'
                }`}
              >
                <Shield className="w-4 h-4" />
                <span>{t.adminPanel}</span>
              </button>
            )}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            {!user ? (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openLoginModal();
                }}
                className="w-full py-2.5 px-4 text-center text-xs font-bold text-black bg-white rounded-lg"
              >
                {t.loginDiscord}
              </button>
            ) : (
              <button
                onClick={logout}
                className="w-full py-2 px-4 text-center text-xs font-medium text-zinc-400 hover:text-white border border-white/20 rounded-lg"
              >
                {t.logout} (@{user.username})
              </button>
            )}

            <a
              href="https://discord.com/oauth2/authorize?client_id=123456789012345678&scope=bot%20applications.commands&permissions=8"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 text-center text-xs font-semibold text-white bg-zinc-900 border border-white/30 rounded-lg"
            >
              {t.addBot}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
