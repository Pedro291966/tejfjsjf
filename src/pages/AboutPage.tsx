import React from 'react';
import {
  Shield,
  Zap,
  Server,
  Code,
  HeartHandshake,
  Database,
  Cpu,
  CheckCircle,
  Radio,
  Layers,
  Sparkles,
  Lock,
} from 'lucide-react';
import { Language } from '../types';
import { BOT_LOGO_URL } from '../data/botData';

interface AboutPageProps {
  lang: Language;
  setCurrentTab: (tab: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ lang, setCurrentTab }) => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-16 text-left">
      {/* Header with animated logo */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-white/10 pb-8">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-300">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span className="uppercase tracking-wider font-semibold">
              Manifesto & Engenharia
            </span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="text-zinc-400">Cluster 100% Livre de Paywall</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight font-display">
            A História e Missão do <span className="neon-text-glow">sori</span>
          </h1>

          <p className="text-base text-zinc-300 leading-relaxed">
            Nascido da insatisfação com as barreiras pagas e limites arbitrários impostos por bots
            tradicionais de Discord, o <strong className="text-white">sori</strong> foi construído
            para entregar uma suíte completa de automação, moderação, loja e tickets totalmente gratuita.
          </p>
        </div>

        {/* Animated Bot Avatar */}
        <div className="w-28 h-28 rounded-full border-2 border-white/30 overflow-hidden bg-black shrink-0 neon-glow-white animate-float p-1">
          <img
            src={BOT_LOGO_URL}
            alt="Logo sori"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover rounded-full"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/src/assets/images/sori_bot_avatar_1793981999577.jpg';
            }}
          />
        </div>
      </div>

      {/* Story & Philosophy */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="p-8 rounded-2xl bg-zinc-950/80 border border-white/15 space-y-4 shadow-xl">
          <div className="flex items-center gap-2 text-white font-bold text-xs uppercase font-mono">
            <HeartHandshake className="w-4 h-4 text-white" />
            <span>Por que existimos</span>
          </div>
          <h3 className="text-xl font-bold text-white font-display">
            A Filosofia 100% Gratuita
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Muitos proprietários de servidores gastavam centenas de reais mensalmente pagando múltiplos
            bots para conseguir funções fundamentais como exportar histórico de tickets em HTML,
            painéis com menus ou sistema de tempo automático de punição.
          </p>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            O sori foi projetado para consolidar todas essas necessidades em uma única inteligência
            centralizada, rápida, sem limites de chamados, sem taxas ocultas e sem anúncios intrusivos
            na sua comunidade.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-zinc-950/80 border border-white/15 space-y-4 shadow-xl">
          <div className="flex items-center gap-2 text-white font-bold text-xs uppercase font-mono">
            <Server className="w-4 h-4 text-white" />
            <span>Infraestrutura em Nuvem</span>
          </div>
          <h3 className="text-xl font-bold text-white font-display">
            Arquitetura & Engenharia de Baixa Latência
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            O cluster do sori utiliza TypeScript de alta velocidade integrado à API oficial do Discord
            com suporte a 8 shards distribuídos globalmente. Nossa infraestrutura monitora picos de
            tráfego e escala dinamicamente para manter o tempo de resposta abaixo de 20ms.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-300">
            <span className="px-2.5 py-1 rounded bg-white/10 border border-white/20">8 Shards Dedicados</span>
            <span className="px-2.5 py-1 rounded bg-white/10 border border-white/20">Latência &lt;18ms</span>
            <span className="px-2.5 py-1 rounded bg-white/10 border border-white/20">99.98% Uptime</span>
          </div>
        </div>
      </div>

      {/* Tech Stack Specs */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white font-display">
          Stack Tecnológica do Cluster
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-zinc-950 border border-white/10 space-y-1">
            <div className="text-[10px] font-mono text-zinc-500 uppercase">Linguagem</div>
            <div className="text-sm font-bold text-white">Node.js & TypeScript</div>
            <p className="text-[11px] text-zinc-400">Tipagem estrita e execução assíncrona</p>
          </div>
          <div className="p-5 rounded-xl bg-zinc-950 border border-white/10 space-y-1">
            <div className="text-[10px] font-mono text-zinc-500 uppercase">Gateway</div>
            <div className="text-sm font-bold text-white">Discord API v10</div>
            <p className="text-[11px] text-zinc-400">WebSockets com compressão zlib</p>
          </div>
          <div className="p-5 rounded-xl bg-zinc-950 border border-white/10 space-y-1">
            <div className="text-[10px] font-mono text-zinc-500 uppercase">Cache em Memória</div>
            <div className="text-sm font-bold text-white">Redis Cluster</div>
            <p className="text-[11px] text-zinc-400">Roteamento de comandos em 2ms</p>
          </div>
          <div className="p-5 rounded-xl bg-zinc-950 border border-white/10 space-y-1">
            <div className="text-[10px] font-mono text-zinc-500 uppercase">Segurança</div>
            <div className="text-sm font-bold text-white">AES-256-GCM</div>
            <p className="text-[11px] text-zinc-400">Transcrições e senhas encriptadas</p>
          </div>
        </div>
      </div>

      {/* 3 Core Pillars */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white font-display">
          Pilares Fundamentais do sori
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-zinc-950/60 border border-white/10 space-y-3">
            <Zap className="w-6 h-6 text-white" />
            <h4 className="text-base font-bold text-white">Velocidade Extrema</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Comandos slash que executam em frações de segundo, proporcionando respostas imediatas
              para membros e moderadores no chat.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-950/60 border border-white/10 space-y-3">
            <Shield className="w-6 h-6 text-white" />
            <h4 className="text-base font-bold text-white">Segurança Sem Concessões</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Transcrições de tickets e dados de loja salvos com criptografia ponta a ponta. Zero
              venda de dados ou telemetria invasiva.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-950/60 border border-white/10 space-y-3">
            <HeartHandshake className="w-6 h-6 text-white" />
            <h4 className="text-base font-bold text-white">Foco na Comunidade</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Ouvimos feedbacks constantes dos servidores parceiros para implementar melhorias
              semanais e novos módulos úteis.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="p-8 rounded-2xl bg-black border border-white/20 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-white">
            Faça parte da nossa comunidade
          </h3>
          <p className="text-xs text-zinc-400">
            Adicione o sori ao seu servidor em menos de 1 minuto ou tire dúvidas no suporte.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setCurrentTab('suporte')}
            className="px-4 py-2.5 text-xs font-semibold text-zinc-300 hover:text-white border border-white/20 rounded-lg cursor-pointer"
          >
            Acessar Suporte
          </button>
          <a
            href="https://discord.com/oauth2/authorize?client_id=123456789012345678&scope=bot%20applications.commands&permissions=8"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-xs font-bold text-black bg-white hover:bg-zinc-200 rounded-lg neon-glow-white-subtle cursor-pointer"
          >
            Adicionar Bot
          </a>
        </div>
      </div>
    </div>
  );
};
