import React, { useState } from 'react';
import { X, ShieldCheck, UserCheck, Bot, CheckCircle2, LogIn } from 'lucide-react';
import { useAuth, PRESET_PROFILES } from '../context/AuthContext';
import { Language, UserProfile } from '../types';
import { BOT_LOGO_URL } from '../data/botData';

interface DiscordLoginModalProps {
  lang: Language;
}

export const DiscordLoginModal: React.FC<DiscordLoginModalProps> = ({ lang }) => {
  const { isLoginModalOpen, closeLoginModal, loginAs, user } = useAuth();
  const [selectedProfileId, setSelectedProfileId] = useState<string>(PRESET_PROFILES[0].id);

  if (!isLoginModalOpen) return null;

  const handleAuthorize = () => {
    const profile = PRESET_PROFILES.find((p) => p.id === selectedProfileId) || PRESET_PROFILES[0];
    loginAs(profile);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#111214] border border-white/20 rounded-xl shadow-2xl overflow-hidden text-zinc-100">
        {/* Top Header */}
        <div className="relative p-6 pb-4 border-b border-zinc-800 bg-[#0d0e10]">
          <button
            onClick={closeLoginModal}
            className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors p-1"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border border-white/40 bg-black flex items-center justify-center overflow-hidden neon-glow-white-subtle">
              <img
                src={BOT_LOGO_URL}
                alt="sori bot"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/src/assets/images/sori_bot_avatar_1793981999577.jpg';
                }}
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                Conectar com Discord
              </h3>
              <p className="text-xs text-zinc-400">
                Autorização OAuth2 para o aplicativo <strong className="text-white">sori</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Permissions Scope Notice */}
        <div className="p-6 space-y-4">
          <div className="text-xs text-zinc-400 space-y-2">
            <p className="font-semibold text-zinc-300">
              O sori terá acesso a:
            </p>
            <ul className="space-y-1.5 pl-1">
              <li className="flex items-center gap-2 text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>Acessar seu nome de usuário, avatar e ID público</span>
              </li>
              <li className="flex items-center gap-2 text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>Saber em quais servidores você possui permissões administrativas</span>
              </li>
              <li className="flex items-center gap-2 text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>Verificar cargos de Administrador do Bot sori</span>
              </li>
            </ul>
          </div>

          <div className="pt-2">
            <label className="block text-xs font-semibold text-zinc-300 mb-2">
              Selecione uma conta para simular o login:
            </label>

            <div className="space-y-2">
              {PRESET_PROFILES.map((profile) => {
                const isSelected = profile.id === selectedProfileId;
                return (
                  <button
                    key={profile.id}
                    type="button"
                    onClick={() => setSelectedProfileId(profile.id)}
                    className={`w-full text-left p-3 rounded-lg border transition-all flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'border-white bg-white/10 text-white neon-border-white'
                        : 'border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={profile.avatar}
                        alt={profile.displayName}
                        className="w-8 h-8 rounded-full border border-white/20 object-cover"
                      />
                      <div>
                        <div className="text-sm font-semibold text-white flex items-center gap-2">
                          {profile.displayName}
                          {profile.isBotAdmin && (
                            <span className="text-[10px] bg-white text-black font-extrabold px-1.5 py-0.2 rounded uppercase">
                              ADMIN
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-zinc-400 font-mono">
                          @{profile.username}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      {isSelected ? (
                        <div className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-white" />
                        </div>
                      ) : (
                        <div className="w-4 h-4 rounded-full border border-zinc-700" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-3 bg-black/40 rounded-lg border border-white/10 text-xs text-zinc-400">
            <div className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <p>
                Apenas perfis marcados como <strong className="text-white">ADMIN</strong> recebem acesso ao{' '}
                <strong className="text-white">Painel de Controle Administrativo Avançado</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-[#0d0e10] border-t border-zinc-800 flex items-center justify-between gap-3">
          <button
            onClick={closeLoginModal}
            className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            Cancelar
          </button>

          <button
            onClick={handleAuthorize}
            className="px-5 py-2 text-xs font-semibold text-black bg-white hover:bg-zinc-200 rounded-lg transition-all flex items-center gap-2 neon-glow-white-subtle cursor-pointer"
          >
            <LogIn className="w-3.5 h-3.5" />
            Autorizar e Conectar
          </button>
        </div>
      </div>
    </div>
  );
};
