import React, { useState } from 'react';
import {
  ShieldCheck,
  Zap,
  Ticket,
  ShoppingBag,
  Sparkles,
  ArrowRight,
  Bot,
  ExternalLink,
  LockOpen,
  CheckCircle2,
  Terminal,
  HelpCircle,
  Copy,
  Check,
  Camera,
  Scale,
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import { CommandShowcaseTable } from '../components/CommandShowcaseTable';
import { BOT_LOGO_URL } from '../data/botData';

interface HomePageProps {
  lang: Language;
  setCurrentTab: (tab: string) => void;
  openLoginModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  lang,
  setCurrentTab,
  openLoginModal,
}) => {
  const t = translations[lang];

  // Workflow architecture active tab
  const [activeWorkflow, setActiveWorkflow] = useState<'tickets' | 'punicao' | 'revisao' | 'loja'>('tickets');
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(text);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  return (
    <div className="w-full space-y-24 pb-20">
      {/* HERO SECTION / BOAS-VINDAS (Clean, Modern & Minimalist) */}
      <section className="relative overflow-hidden pt-12 md:pt-20">
        {/* Subtle Cyber Neon White Light Effect */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-white/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          {/* Clean Kicker Metadata with Radar Signal */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs font-mono text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-radar absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            <span className="tracking-wider uppercase font-bold text-white">
              {t.hero.badge}
            </span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="text-zinc-400">Cluster v2.4 Operacional</span>
          </div>

          {/* Dominant Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] font-display">
            {t.hero.headline}{' '}
            <span className="text-white underline decoration-white decoration-4 underline-offset-8 neon-text-glow">
              {t.hero.headlineHighlight}
            </span>
          </h1>

          {/* Concrete Value Description */}
          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>

          {/* Primary Slash Commands Highlight Bar with 1-click copy */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
            <span className="text-zinc-400 text-[11px] font-sans">Comandos Principais:</span>
            {['/painel criar', '/banir', '/mute', '/advertencia', '/configurar bot'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => copyToClipboard(cmd)}
                className="px-2.5 py-1 rounded-md bg-white/10 hover:bg-white hover:text-black border border-white/20 text-white font-bold transition-all cursor-pointer flex items-center gap-1 active:scale-95"
                title="Clique para copiar comando"
              >
                <span>{cmd}</span>
                {copiedCmd === cmd ? (
                  <Check className="w-3 h-3 text-emerald-400" />
                ) : (
                  <Copy className="w-2.5 h-2.5 opacity-60" />
                )}
              </button>
            ))}
          </div>

          {/* Clean Trust Indicators */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 border-t border-white/10 max-w-2xl mx-auto">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-white" />
              <span>100% Grátis sem assinaturas</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-white" />
              <span>Configuração rápida via /configurar bot</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-white" />
              <span>Transcrições HTML criptografadas</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO SEPARADA: INFORMAÇÕES DO SORI (Redesenhado e Separado da Página de Boas-Vindas) */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl bg-zinc-950/80 border border-white/15 p-8 sm:p-12 overflow-hidden shadow-2xl glass-panel space-y-8 text-left">
          {/* Top Row: Bot Identity Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div className="flex items-center gap-5">
              {/* Official Animated Avatar with Glowing Neon Ring */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-b from-white to-zinc-600 neon-glow-white shrink-0 overflow-hidden flex items-center justify-center">
                <img
                  src={BOT_LOGO_URL}
                  alt="Logo Oficial do Bot sori"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/src/assets/images/sori_bot_avatar_1793981999577.jpg';
                  }}
                />
              </div>

              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-white/10 border border-white/20 rounded-md text-xs font-mono font-bold text-white">
                  <span>sori#0001</span>
                  <span className="text-zinc-500">·</span>
                  <span className="text-white">OFICIAL & VERIFICADO</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
                  Automação Completa para Servidores Modernos
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400 max-w-xl leading-relaxed">
                  Substitua múltiplos bots por uma arquitetura única, veloz e 100% gratuita no Discord.
                </p>
              </div>
            </div>

            <div className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-zinc-300 flex items-center gap-2 self-start sm:self-auto shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Sistemas Operacionais</span>
            </div>
          </div>

          {/* Core Feature Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-black/60 border border-white/10 space-y-3 hover:border-white/30 transition-all flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white">
                    <Ticket className="w-4 h-4" />
                  </div>
                  <code className="text-[11px] font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded">
                    /painel criar
                  </code>
                </div>
                <h3 className="text-base font-bold text-white font-display">
                  Sistema de Tickets 2.0
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Painéis interativos com botões personalizados, menus dinâmicos, modais nativos do Discord e geração automática de transcrições completas em HTML com histórico salvo por 30 dias.
                </p>
              </div>
              <div className="pt-2 text-[11px] font-mono text-zinc-500">
                Abertura instantânea &lt; 100ms
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-black/60 border border-white/10 space-y-3 hover:border-white/30 transition-all flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <code className="text-[11px] font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded">
                    /banir • /mute • /advertencia
                  </code>
                </div>
                <h3 className="text-base font-bold text-white font-display">
                  Moderação & Defesa Automática
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Cálculo automático de tempos de mute e punições baseado em gravidade e reincidência. Conta com sistema transparente de apelações pelo comando <span className="text-white font-mono">/revisao</span>.
                </p>
              </div>
              <div className="pt-2 text-[11px] font-mono text-zinc-500">
                Auditoria e logs em tempo real
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-black/60 border border-white/10 space-y-3 hover:border-white/30 transition-all flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <code className="text-[11px] font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded">
                    /loja criar • /carteira
                  </code>
                </div>
                <h3 className="text-base font-bold text-white font-display">
                  Loja Virtual & Economia
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Venda de cargos VIP, chaves e itens digitais com entrega automatizada em milissegundos 24/7, suporte a moedas virtuais do servidor e cupons promocionais.
                </p>
              </div>
              <div className="pt-2 text-[11px] font-mono text-zinc-500">
                Entrega direta na DM do membro
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE ARCHITECTURE WORKFLOWS (Animated Interactive Deep-Dive) */}
      <section className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-2 text-left">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Fluxos de Automação
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-display">
              Como o sori opera dentro do seu servidor
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveWorkflow('tickets')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeWorkflow === 'tickets'
                  ? 'bg-white text-black neon-glow-white-subtle'
                  : 'bg-zinc-950 text-zinc-400 hover:text-white border border-white/10'
              }`}
            >
              🎫 Fluxo de Tickets 2.0
            </button>
            <button
              onClick={() => setActiveWorkflow('punicao')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeWorkflow === 'punicao'
                  ? 'bg-white text-black neon-glow-white-subtle'
                  : 'bg-zinc-950 text-zinc-400 hover:text-white border border-white/10'
              }`}
            >
              ⚖️ Punições Automáticas
            </button>
            <button
              onClick={() => setActiveWorkflow('revisao')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeWorkflow === 'revisao'
                  ? 'bg-white text-black neon-glow-white-subtle'
                  : 'bg-zinc-950 text-zinc-400 hover:text-white border border-white/10'
              }`}
            >
              📜 Sistema de Revisão (/revisao)
            </button>
            <button
              onClick={() => setActiveWorkflow('loja')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeWorkflow === 'loja'
                  ? 'bg-white text-black neon-glow-white-subtle'
                  : 'bg-zinc-950 text-zinc-400 hover:text-white border border-white/10'
              }`}
            >
              🛒 Loja & Economia
            </button>
          </div>
        </div>

        {/* Workflow Steps Card */}
        <div className="p-6 sm:p-10 rounded-2xl bg-zinc-950 border border-white/15 shadow-2xl text-left">
          {activeWorkflow === 'tickets' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white font-display flex items-center gap-2">
                  <Ticket className="w-5 h-5 text-white" />
                  <span>Ciclo de Vida Completo do Sistema de Tickets</span>
                </h3>
                <span className="text-xs font-mono text-zinc-400">Comando: /painel criar</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-black border border-white/10 space-y-2">
                  <span className="text-xs font-mono text-zinc-500">ETAPA 01</span>
                  <div className="text-sm font-bold text-white">Clique no Painel</div>
                  <p className="text-xs text-zinc-400">
                    Membro seleciona departamento (Dúvidas, Loja, Denúncia) pelo botão ou select menu.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-black border border-white/10 space-y-2">
                  <span className="text-xs font-mono text-zinc-500">ETAPA 02</span>
                  <div className="text-sm font-bold text-white">Modal Interativo</div>
                  <p className="text-xs text-zinc-400">
                    O usuário preenche motivo e detalhes em uma janela nativa do Discord.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-black border border-white/10 space-y-2">
                  <span className="text-xs font-mono text-zinc-500">ETAPA 03</span>
                  <div className="text-sm font-bold text-white">Canal Privado Criado</div>
                  <p className="text-xs text-zinc-400">
                    Canal gerado em &lt;100ms visível apenas para o solicitante e equipe responsável.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-black border border-white/10 space-y-2">
                  <span className="text-xs font-mono text-zinc-500">ETAPA 04</span>
                  <div className="text-sm font-bold text-white">Transcrição HTML</div>
                  <p className="text-xs text-zinc-400">
                    Ao encerrar, histórico completo com anexos e horários é salvo e enviado nos logs.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeWorkflow === 'punicao' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white font-display flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-white" />
                  <span>Fluxo de Moderação & Cálculo de Tempo Automático</span>
                </h3>
                <span className="text-xs font-mono text-zinc-400">Comandos: /banir • /mute • /advertencia</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-black border border-white/10 space-y-2">
                  <span className="text-xs font-mono text-zinc-500">ETAPA 01</span>
                  <div className="text-sm font-bold text-white">Aplicação do Comando</div>
                  <p className="text-xs text-zinc-400">
                    Moderador executa comando com usuário, motivo fundamentado e prova fotográfica.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-black border border-white/10 space-y-2">
                  <span className="text-xs font-mono text-zinc-500">ETAPA 02</span>
                  <div className="text-sm font-bold text-white">Cálculo de Reincidência</div>
                  <p className="text-xs text-zinc-400">
                    O sori consulta infrações anteriores e escala o tempo de punição automaticamente.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-black border border-white/10 space-y-2">
                  <span className="text-xs font-mono text-zinc-500">ETAPA 03</span>
                  <div className="text-sm font-bold text-white">Aviso no Privado (DM)</div>
                  <p className="text-xs text-zinc-400">
                    O usuário recebe notificação detalhada com protocolo único de auditoria.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-black border border-white/10 space-y-2">
                  <span className="text-xs font-mono text-zinc-500">ETAPA 04</span>
                  <div className="text-sm font-bold text-white">Registro em Logs</div>
                  <p className="text-xs text-zinc-400">
                    Embed oficial publicada no canal configurado com botões de gestão rápida.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeWorkflow === 'revisao' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white font-display flex items-center gap-2">
                  <Scale className="w-5 h-5 text-white" />
                  <span>Fluxo do Sistema de Revisão e Apelação de Punições</span>
                </h3>
                <span className="text-xs font-mono text-zinc-400">Comando: /revisao</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-black border border-white/10 space-y-2">
                  <span className="text-xs font-mono text-zinc-500">ETAPA 01</span>
                  <div className="text-sm font-bold text-white">Submissão da Apelação</div>
                  <p className="text-xs text-zinc-400">
                    Membro advertido ou silenciado digita /revisao e anexa sua justificativa formal.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-black border border-white/10 space-y-2">
                  <span className="text-xs font-mono text-zinc-500">ETAPA 02</span>
                  <div className="text-sm font-bold text-white">Despacho para Moderadores</div>
                  <p className="text-xs text-zinc-400">
                    Notificação enviada ao canal restrito da staff com histórico e prova original.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-black border border-white/10 space-y-2">
                  <span className="text-xs font-mono text-zinc-500">ETAPA 03</span>
                  <div className="text-sm font-bold text-white">Julgamento Transparente</div>
                  <p className="text-xs text-zinc-400">
                    Staff analisa e clica em [Aceitar Apelação] ou [Rejeitar Apelação].
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-black border border-white/10 space-y-2">
                  <span className="text-xs font-mono text-zinc-500">ETAPA 04</span>
                  <div className="text-sm font-bold text-white">Revogação Instantânea</div>
                  <p className="text-xs text-zinc-400">
                    Se aprovada, a advertência é expurgada do histórico e o membro é desmutado.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeWorkflow === 'loja' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white font-display flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-white" />
                  <span>Fluxo de Loja Virtual & Entrega Automática 24/7</span>
                </h3>
                <span className="text-xs font-mono text-zinc-400">Comandos: /loja criar • /carteira</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-black border border-white/10 space-y-2">
                  <span className="text-xs font-mono text-zinc-500">ETAPA 01</span>
                  <div className="text-sm font-bold text-white">Cadastro do Produto</div>
                  <p className="text-xs text-zinc-400">
                    Dono do servidor cadastra cargo, chave ou link com valor em moedas virtuais.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-black border border-white/10 space-y-2">
                  <span className="text-xs font-mono text-zinc-500">ETAPA 02</span>
                  <div className="text-sm font-bold text-white">Compra do Membro</div>
                  <p className="text-xs text-zinc-400">
                    Membro clica no botão [Comprar Agora] na embed oficial publicada no servidor.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-black border border-white/10 space-y-2">
                  <span className="text-xs font-mono text-zinc-500">ETAPA 03</span>
                  <div className="text-sm font-bold text-white">Validação de Saldo</div>
                  <p className="text-xs text-zinc-400">
                    O sori debita o saldo virtual e gera o comprovante de transação segura.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-black border border-white/10 space-y-2">
                  <span className="text-xs font-mono text-zinc-500">ETAPA 04</span>
                  <div className="text-sm font-bold text-white">Entrega em &lt;10ms</div>
                  <p className="text-xs text-zinc-400">
                    Cargo atribuído no Discord e chave de produto despachada na DM do comprador.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 100% GRATIS SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-2xl bg-zinc-950 border border-white/20 p-8 sm:p-12 overflow-hidden">
          {/* Subtle Cyber Wireframe Effect */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-3 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-300">
              <LockOpen className="w-3.5 h-3.5 text-white" />
              <span className="uppercase tracking-wider font-semibold">
                {t.freeHighlight.badge}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              {t.freeHighlight.title}
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              {t.freeHighlight.subtitle}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {t.freeHighlight.cards.map((card, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-black/60 border border-white/10 space-y-2 hover:border-white/30 transition-all"
              >
                <div className="text-xs font-mono text-zinc-400">
                  0{idx + 1}. RECURSO
                </div>
                <h3 className="text-base font-bold text-white font-display">
                  {card.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES BENTO SHOWCASE */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="space-y-3 max-w-2xl text-left">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            Arquitetura Integrada
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-display">
            {t.modules.title}
          </h2>
          <p className="text-sm text-zinc-400">
            {t.modules.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Card 1: Tickets (Spans 2 cols on md) */}
          <div className="md:col-span-2 p-8 rounded-2xl bg-zinc-950/80 border border-white/15 space-y-4 hover:border-white/30 transition-all">
            <div className="w-10 h-10 rounded-lg bg-white text-black flex items-center justify-center neon-glow-white-subtle">
              <Ticket className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white font-display">
              {t.modules.ticketsTitle}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-xl">
              {t.modules.ticketsDesc}
            </p>

            <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-zinc-300">
              <div>
                <span className="font-bold text-white block">Botões & Modals</span>
                <span className="text-zinc-500">Sem comandos confusos para os membros</span>
              </div>
              <div>
                <span className="font-bold text-white block">Transcrições HTML</span>
                <span className="text-zinc-500">Histórico completo exportável</span>
              </div>
              <div>
                <span className="font-bold text-white block">Cargos de Atendimento</span>
                <span className="text-zinc-500">Direcionamento por departamento</span>
              </div>
            </div>
          </div>

          {/* Card 2: Moderação & Anti-Raid */}
          <div className="p-8 rounded-2xl bg-zinc-950/80 border border-white/15 space-y-4 hover:border-white/30 transition-all">
            <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/30 text-white flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white font-display">
              {t.modules.modTitle}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {t.modules.modDesc}
            </p>
            <div className="pt-2 text-xs text-zinc-500 font-mono">
              /banir • /mute • /advertencia • /revisao
            </div>
          </div>

          {/* Card 3: Loja Virtual & Economia */}
          <div className="p-8 rounded-2xl bg-zinc-950/80 border border-white/15 space-y-4 hover:border-white/30 transition-all">
            <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/30 text-white flex items-center justify-center">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white font-display">
              {t.modules.shopTitle}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {t.modules.shopDesc}
            </p>
            <div className="pt-2 text-xs text-zinc-500 font-mono">
              Entrega Instantânea • Cupons • Saldo
            </div>
          </div>

          {/* Card 4: Entretenimento & XP */}
          <div className="p-8 rounded-2xl bg-zinc-950/80 border border-white/15 space-y-4 hover:border-white/30 transition-all">
            <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/30 text-white flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white font-display">
              {t.modules.funTitle}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {t.modules.funDesc}
            </p>
            <div className="pt-2 text-xs text-zinc-500 font-mono">
              Sorteios • Cartões de Rank • Roleta
            </div>
          </div>

          {/* Card 5: Automação & Boas-Vindas */}
          <div className="p-8 rounded-2xl bg-zinc-950/80 border border-white/15 space-y-4 hover:border-white/30 transition-all">
            <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/30 text-white flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white font-display">
              {t.modules.automationTitle}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {t.modules.automationDesc}
            </p>
            <div className="pt-2 text-xs text-zinc-500 font-mono">
              Autorole Instantâneo • Webhooks • Embeds
            </div>
          </div>
        </div>
      </section>

      {/* COMMANDS & INTERACTIVE DEMONSTRATION SECTION */}
      <section id="comandos-section" className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="space-y-3 max-w-2xl text-left">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            Catálogo Interativo & Prints Oficiais
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-display">
            {t.commandsTable.title}
          </h2>
          <p className="text-sm text-zinc-400">
            {t.commandsTable.subtitle}
          </p>
        </div>

        <CommandShowcaseTable lang={lang} />
      </section>

      {/* SPOTLIGHT: NOVO LOCAL PARA MOSTRAR OS PRINTS DO DISCORD */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl bg-zinc-950/90 border border-white/20 p-8 sm:p-10 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-3 max-w-2xl text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono font-bold text-white border border-white/20">
              <Camera className="w-3.5 h-3.5" />
              <span>NOVO LOCAL EXCLUSIVO NO SITE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
              Galeria Completa de Prints do Discord
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Explore a nova página dedicada aos prints reais do bot sori no Discord:
              todas as 7 telas de tickets, embeds de punição, tabela de tempo automático e painéis de configuração em alta resolução com modo cinema e comparador visual lado a lado.
            </p>
          </div>

          <button
            onClick={() => {
              setCurrentTab('prints');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-3.5 bg-white hover:bg-zinc-200 text-black font-bold rounded-xl text-center text-sm transition-all flex items-center justify-center gap-2 neon-glow-white shrink-0 cursor-pointer relative z-10"
          >
            <Camera className="w-4 h-4" />
            <span>Acessar Galeria de Prints &rarr;</span>
          </button>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS SECTION */}
      <section className="max-w-5xl mx-auto px-6 space-y-8 text-left">
        <div className="space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            Tire Suas Dúvidas
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-display">
            Perguntas Frequentes sobre o sori
          </h2>
          <p className="text-sm text-zinc-400">
            Respostas diretas sobre funcionamento, segurança e modelo 100% gratuito.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-2">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-white shrink-0" />
              <span>Como adicionar o bot ao meu servidor Discord?</span>
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Basta clicar no botão "Adicionar ao Servidor" no topo da página. Você precisa ter a permissão
              de "Gerenciar Servidor" ou "Administrador" no Discord para autorizar o bot.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-2">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-white shrink-0" />
              <span>O bot é realmente 100% gratuito?</span>
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Sim! Todos os recursos essenciais (tickets com botões, moderação com punição automática,
              transcrições HTML e loja virtual) são totalmente gratuitos e sem limitações ocultas.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-2">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-white shrink-0" />
              <span>Como funciona o tempo automático de punição?</span>
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              O sori calcula o tempo de mute ou sanção baseado no motivo da infração e no número de
              advertências prévias no histórico do infrator, garantindo coerência disciplinar.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-2">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-white shrink-0" />
              <span>O que acontece com as transcrições de tickets?</span>
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Ao fechar um ticket, o sori gera um arquivo HTML estilizado criptografado e envia no canal de logs.
              O histórico permanece disponível com segurança por até 30 dias para auditoria.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-2xl bg-gradient-to-b from-zinc-900 to-black border border-white/30 p-10 sm:p-14 text-center space-y-6 overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-display">
              Pronto para revolucionar seu servidor?
            </h2>
            <p className="text-sm sm:text-base text-zinc-300">
              Junte-se a mais de 1.480 servidores que confiam no sori para gerenciar tickets,
              moderação, lojas e entretenimento sem gastar nada.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="https://discord.com/oauth2/authorize?client_id=123456789012345678&scope=bot%20applications.commands&permissions=8"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-sm font-bold text-black bg-white hover:bg-zinc-200 rounded-xl transition-all neon-glow-white cursor-pointer active:scale-95"
            >
              Adicionar sori Gratuitamente
            </a>

            <button
              onClick={() => setCurrentTab('suporte')}
              className="px-6 py-4 text-sm font-semibold text-zinc-300 hover:text-white bg-zinc-950 border border-white/20 hover:border-white/50 rounded-xl transition-all cursor-pointer"
            >
              Falar com Suporte
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
