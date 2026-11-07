import React, { useState } from 'react';
import {
  ShieldAlert,
  ShieldCheck,
  Cpu,
  Database,
  Radio,
  Sliders,
  Send,
  Bell,
  CheckCircle2,
  AlertTriangle,
  FileCode,
  Users,
  Server,
  Activity,
  Plus,
  RefreshCw,
  Lock,
} from 'lucide-react';
import { useAuth, PRESET_PROFILES } from '../context/AuthContext';
import { Language, Announcement, AdminTelemetry } from '../types';
import { INITIAL_TELEMETRY } from '../data/botData';
import { translations } from '../i18n/translations';

interface AdminDashboardProps {
  lang: Language;
  currentBannerText: string;
  onUpdateBannerText: (newText: string) => void;
  announcements: Announcement[];
  onAddAnnouncement: (ann: Announcement) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  lang,
  currentBannerText,
  onUpdateBannerText,
  announcements,
  onAddAnnouncement,
}) => {
  const { user, isBotAdmin, openLoginModal, loginAs } = useAuth();
  const t = translations[lang].admin;

  // Local state for telemetry
  const [telemetry, setTelemetry] = useState<AdminTelemetry>(INITIAL_TELEMETRY);
  const [bannerInput, setBannerInput] = useState(currentBannerText);
  const [bannerSavedAlert, setBannerSavedAlert] = useState(false);

  // New notice state
  const [newNoticeTitle, setNewNoticeTitle] = useState('');
  const [newNoticeContent, setNewNoticeContent] = useState('');
  const [newNoticeCategory, setNewNoticeCategory] = useState<'update' | 'maintenance' | 'announcement'>('update');
  const [noticeSavedAlert, setNoticeSavedAlert] = useState(false);

  // Module toggle handler
  const handleToggleModule = (key: keyof AdminTelemetry['modulesStatus']) => {
    setTelemetry((prev) => ({
      ...prev,
      modulesStatus: {
        ...prev.modulesStatus,
        [key]: !prev.modulesStatus[key],
      },
    }));
  };

  const handleSaveBanner = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateBannerText(bannerInput);
    setBannerSavedAlert(true);
    setTimeout(() => setBannerSavedAlert(false), 3000);
  };

  const handleCreateAnnouncement = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoticeTitle.trim() || !newNoticeContent.trim()) return;

    const newAnn: Announcement = {
      id: `ann-${Date.now()}`,
      title: newNoticeTitle,
      content: newNoticeContent,
      date: 'Agora mesmo',
      category: newNoticeCategory,
      author: user?.displayName || 'Administrador sori',
      isImportant: true,
    };

    onAddAnnouncement(newAnn);
    setNewNoticeTitle('');
    setNewNoticeContent('');
    setNoticeSavedAlert(true);
    setTimeout(() => setNoticeSavedAlert(false), 3000);
  };

  // If not logged in or not admin, show security gate
  if (!user || !isBotAdmin) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-20 text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-zinc-900 border border-white/20 flex items-center justify-center neon-glow-white-subtle">
          <Lock className="w-8 h-8 text-white" />
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-black text-white font-display">
            {t.accessDenied}
          </h1>
          <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
            {t.accessDeniedDesc}
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => loginAs(PRESET_PROFILES[0])}
            className="w-full sm:w-auto px-6 py-3 text-xs font-bold text-black bg-white hover:bg-zinc-200 rounded-xl neon-glow-white-subtle transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <ShieldCheck className="w-4 h-4 text-black" />
            <span>Entrar como Pedro (Criador & Super Admin)</span>
          </button>
          <button
            onClick={openLoginModal}
            className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-zinc-300 hover:text-white bg-zinc-900 border border-white/20 hover:border-white/40 rounded-xl transition-all cursor-pointer"
          >
            Escolher Outra Conta Discord
          </button>
        </div>

        <div className="pt-6 border-t border-white/10 text-xs text-zinc-500">
          Acesso exclusivo para administradores verificados do cluster do bot sori.
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12 text-left">
      {/* Top Banner Verification Status */}
      <div className="p-6 rounded-2xl bg-zinc-950 border border-white/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img
            src={user.avatar}
            alt={user.displayName}
            className="w-12 h-12 rounded-full border border-white/40 object-cover"
          />
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Sessão Segura Ativa
              </span>
              <span className="px-1.5 py-0.2 text-[9px] font-extrabold bg-white text-black rounded uppercase">
                {user.role}
              </span>
            </div>
            <h1 className="text-lg font-bold text-white font-display">
              {user.displayName}
            </h1>
            <p className="text-xs text-zinc-400 font-mono">
              ID Discord: {user.id} • Permissão: Acesso Total
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block text-xs font-mono text-zinc-400">
            <div>Uptime do Cluster: 99.98%</div>
            <div>Cluster: 8 Shards Ativos</div>
          </div>
        </div>
      </div>

      {/* CLUSTER TELEMETRY METRICS */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
          <Activity className="w-5 h-5 text-white" />
          <span>{t.liveStats}</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-zinc-950/80 border border-white/10 space-y-1">
            <div className="text-xs text-zinc-400">Total de Servidores</div>
            <div className="text-2xl font-black text-white font-display tabular-nums">
              {telemetry.serversCount.toLocaleString()}
            </div>
            <div className="text-[10px] text-zinc-500 font-mono">Distribuídos em 8 shards</div>
          </div>

          <div className="p-5 rounded-xl bg-zinc-950/80 border border-white/10 space-y-1">
            <div className="text-xs text-zinc-400">Usuários Conectados</div>
            <div className="text-2xl font-black text-white font-display tabular-nums">
              {telemetry.usersCount.toLocaleString()}
            </div>
            <div className="text-[10px] text-zinc-500 font-mono">Cache sincronizado</div>
          </div>

          <div className="p-5 rounded-xl bg-zinc-950/80 border border-white/10 space-y-1">
            <div className="text-xs text-zinc-400">Consumo de CPU</div>
            <div className="text-2xl font-black text-white font-display tabular-nums">
              {telemetry.cpuUsage}%
            </div>
            <div className="text-[10px] text-zinc-500 font-mono">RAM: {telemetry.ramUsage}</div>
          </div>

          <div className="p-5 rounded-xl bg-zinc-950/80 border border-white/10 space-y-1">
            <div className="text-xs text-zinc-400">Chamados de Tickets</div>
            <div className="text-2xl font-black text-white font-display tabular-nums">
              {telemetry.activeTickets}
            </div>
            <div className="text-[10px] text-zinc-500 font-mono">Atendimento em tempo real</div>
          </div>
        </div>
      </div>

      {/* BANNER & ANNOUNCEMENT MANAGEMENT (Requested in User Prompt) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Editor of Home Page Announcement Banner */}
        <div className="p-6 rounded-2xl bg-zinc-950 border border-white/15 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Bell className="w-4 h-4 text-white" />
              <span>{t.bannerEditor}</span>
            </h3>
            <span className="text-[10px] uppercase font-mono text-zinc-400">
              Ao Vivo na Home
            </span>
          </div>

          <p className="text-xs text-zinc-400 leading-relaxed">
            O texto abaixo é exibido na faixa de aviso de alta visibilidade no topo da página inicial do
            site para todos os visitantes.
          </p>

          <form onSubmit={handleSaveBanner} className="space-y-3">
            <textarea
              rows={3}
              value={bannerInput}
              onChange={(e) => setBannerInput(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-black border border-white/20 rounded-lg text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white leading-relaxed"
              placeholder="Digite o texto do aviso exibido na tela inicial..."
            />

            <div className="flex items-center justify-between">
              {bannerSavedAlert ? (
                <span className="text-xs text-white font-semibold flex items-center gap-1.5 animate-in fade-in">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  Aviso publicado com sucesso na Home!
                </span>
              ) : (
                <span className="text-[11px] text-zinc-500">
                  Atualização instantânea na página inicial
                </span>
              )}

              <button
                type="submit"
                className="px-4 py-2 text-xs font-bold text-black bg-white hover:bg-zinc-200 rounded-lg neon-glow-white-subtle transition-all cursor-pointer"
              >
                {t.updateBannerBtn}
              </button>
            </div>
          </form>
        </div>

        {/* Global Module Killswitch Toggles */}
        <div className="p-6 rounded-2xl bg-zinc-950 border border-white/15 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Sliders className="w-4 h-4 text-white" />
              <span>{t.globalToggles}</span>
            </h3>
            <span className="text-[10px] uppercase font-mono text-zinc-400">
              Cluster Gateway
            </span>
          </div>

          <p className="text-xs text-zinc-400 leading-relaxed">
            Habilite ou desabilite módulos globalmente em caso de manutenção emergencial.
          </p>

          <div className="space-y-2 pt-1">
            <div className="flex items-center justify-between p-3 rounded-lg bg-black/60 border border-white/10">
              <div>
                <div className="text-xs font-semibold text-white">Módulo de Tickets 2.0</div>
                <div className="text-[10px] text-zinc-400">Abertura de chamados e transcrições HTML</div>
              </div>
              <button
                type="button"
                onClick={() => handleToggleModule('tickets')}
                className={`px-3 py-1 text-xs font-bold rounded cursor-pointer transition-colors ${
                  telemetry.modulesStatus.tickets
                    ? 'bg-white text-black'
                    : 'bg-zinc-800 text-zinc-400'
                }`}
              >
                {telemetry.modulesStatus.tickets ? 'ATIVADO' : 'PAUSADO'}
              </button>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-black/60 border border-white/10">
              <div>
                <div className="text-xs font-semibold text-white">Módulo de Moderação & Anti-Raid</div>
                <div className="text-[10px] text-zinc-400">Proteção de links, banimentos e logs</div>
              </div>
              <button
                type="button"
                onClick={() => handleToggleModule('moderation')}
                className={`px-3 py-1 text-xs font-bold rounded cursor-pointer transition-colors ${
                  telemetry.modulesStatus.moderation
                    ? 'bg-white text-black'
                    : 'bg-zinc-800 text-zinc-400'
                }`}
              >
                {telemetry.modulesStatus.moderation ? 'ATIVADO' : 'PAUSADO'}
              </button>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-black/60 border border-white/10">
              <div>
                <div className="text-xs font-semibold text-white">Módulo de Loja Virtual</div>
                <div className="text-[10px] text-zinc-400">Processamento de saldo e entrega digital</div>
              </div>
              <button
                type="button"
                onClick={() => handleToggleModule('shop')}
                className={`px-3 py-1 text-xs font-bold rounded cursor-pointer transition-colors ${
                  telemetry.modulesStatus.shop
                    ? 'bg-white text-black'
                    : 'bg-zinc-800 text-zinc-400'
                }`}
              >
                {telemetry.modulesStatus.shop ? 'ATIVADO' : 'PAUSADO'}
              </button>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-black/60 border border-white/10">
              <div>
                <div className="text-xs font-semibold text-white">Entretenimento & Ranking</div>
                <div className="text-[10px] text-zinc-400">Sorteios, XP de bate-papo e minigames</div>
              </div>
              <button
                type="button"
                onClick={() => handleToggleModule('entertainment')}
                className={`px-3 py-1 text-xs font-bold rounded cursor-pointer transition-colors ${
                  telemetry.modulesStatus.entertainment
                    ? 'bg-white text-black'
                    : 'bg-zinc-800 text-zinc-400'
                }`}
              >
                {telemetry.modulesStatus.entertainment ? 'ATIVADO' : 'PAUSADO'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* PUBLISH NEW NOTICE TO ANNOUNCEMENTS PAGE */}
      <div className="p-6 rounded-2xl bg-zinc-950 border border-white/15 space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <Plus className="w-4 h-4 text-white" />
          <span>Publicar Nova Notícia na Página de Avisos</span>
        </h3>

        <form onSubmit={handleCreateAnnouncement} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-zinc-300 mb-1">
                Título do Comunicado
              </label>
              <input
                type="text"
                required
                value={newNoticeTitle}
                onChange={(e) => setNewNoticeTitle(e.target.value)}
                placeholder="Ex: Atualização v2.5: Novo Painel de Webhooks"
                className="w-full px-3.5 py-2.5 bg-black border border-white/20 rounded-lg text-xs text-white focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">
                Categoria
              </label>
              <select
                value={newNoticeCategory}
                onChange={(e) => setNewNoticeCategory(e.target.value as any)}
                className="w-full px-3.5 py-2.5 bg-black border border-white/20 rounded-lg text-xs text-white focus:outline-none focus:border-white"
              >
                <option value="update">Atualização</option>
                <option value="maintenance">Manutenção</option>
                <option value="announcement">Comunicado Oficial</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-1">
              Conteúdo Detalhado
            </label>
            <textarea
              rows={3}
              required
              value={newNoticeContent}
              onChange={(e) => setNewNoticeContent(e.target.value)}
              placeholder="Descreva as mudanças ou comunicado que serão lidos pela comunidade..."
              className="w-full px-3.5 py-2.5 bg-black border border-white/20 rounded-lg text-xs text-white focus:outline-none focus:border-white"
            />
          </div>

          <div className="flex items-center justify-between">
            {noticeSavedAlert && (
              <span className="text-xs text-white font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                Notícia adicionada à página de Avisos!
              </span>
            )}
            <button
              type="submit"
              className="ml-auto px-5 py-2.5 text-xs font-bold text-black bg-white hover:bg-zinc-200 rounded-lg neon-glow-white-subtle cursor-pointer"
            >
              Publicar Notícia
            </button>
          </div>
        </form>
      </div>

      {/* RECENT TRANSCRIPTS & LIVE AUDIT LOGS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Transcripts */}
        <div className="p-6 rounded-2xl bg-zinc-950 border border-white/15 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <FileCode className="w-4 h-4 text-white" />
            <span>{t.transcriptsTitle}</span>
          </h3>

          <div className="space-y-2 text-xs">
            <div className="p-3 rounded-lg bg-black/60 border border-white/10 flex items-center justify-between">
              <div>
                <div className="font-mono font-bold text-white">#ticket-0492</div>
                <div className="text-[10px] text-zinc-400">Servidor: Nexus Community (1.2k membros)</div>
              </div>
              <span className="text-white hover:underline cursor-pointer font-mono text-[11px]">
                [Baixar HTML]
              </span>
            </div>

            <div className="p-3 rounded-lg bg-black/60 border border-white/10 flex items-center justify-between">
              <div>
                <div className="font-mono font-bold text-white">#ticket-0491</div>
                <div className="text-[10px] text-zinc-400">Servidor: Arena Gamers (4.8k membros)</div>
              </div>
              <span className="text-white hover:underline cursor-pointer font-mono text-[11px]">
                [Baixar HTML]
              </span>
            </div>

            <div className="p-3 rounded-lg bg-black/60 border border-white/10 flex items-center justify-between">
              <div>
                <div className="font-mono font-bold text-white">#ticket-0490</div>
                <div className="text-[10px] text-zinc-400">Servidor: Loja Oficial (850 membros)</div>
              </div>
              <span className="text-white hover:underline cursor-pointer font-mono text-[11px]">
                [Baixar HTML]
              </span>
            </div>
          </div>
        </div>

        {/* Live Security Audit Log */}
        <div className="p-6 rounded-2xl bg-zinc-950 border border-white/15 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Radio className="w-4 h-4 text-white" />
            <span>{t.auditLogs}</span>
          </h3>

          <div className="space-y-2 font-mono text-xs">
            <div className="p-2.5 rounded bg-black/60 border border-white/10 text-zinc-300">
              <span className="text-zinc-500">[11:42:09]</span>{' '}
              <span className="text-white font-bold">AutoMod:</span> 14 mensagens de raid
              bloqueadas em menos de 800ms na Guild #8921.
            </div>
            <div className="p-2.5 rounded bg-black/60 border border-white/10 text-zinc-300">
              <span className="text-zinc-500">[11:38:15]</span>{' '}
              <span className="text-white font-bold">Loja:</span> Entrega automática de cargo VIP
              executada com sucesso para o usuário ID 98214.
            </div>
            <div className="p-2.5 rounded bg-black/60 border border-white/10 text-zinc-300">
              <span className="text-zinc-500">[11:30:00]</span>{' '}
              <span className="text-white font-bold">Cluster:</span> Shard #3 rebalanceado.
              Latência média: 17ms.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
