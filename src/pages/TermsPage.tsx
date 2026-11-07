import React, { useState } from 'react';
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Scale,
  Lock,
  Search,
  ExternalLink,
  Printer,
  ChevronRight,
  HelpCircle,
  Bot,
} from 'lucide-react';
import { Language } from '../types';

interface TermsPageProps {
  lang: Language;
}

export const TermsPage: React.FC<TermsPageProps> = ({ lang }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState<string>('todos');

  const sections = [
    {
      id: 'aceitacao',
      number: '01',
      title: 'Aceitação dos Termos e Escopo',
      tldr: 'Ao adicionar o sori ou executar comandos como /painel criar ou /configurar bot, você concorda com estes termos e com as regras oficiais do Discord.',
      content: `Ao adicionar o bot sori a qualquer servidor Discord (guilda) ou interagir com seus comandos slash, botões, modais ou painéis web, você declara ter pelo menos 13 anos de idade (ou a idade mínima exigida em sua jurisdição), capacidade legal para representar seu servidor e concordância irrestrita com estes Termos de Uso, com os Termos de Serviço do Discord e com as Diretrizes da Comunidade do Discord. Caso discorde de qualquer cláusula, basta remover o bot de seu servidor e descontinuar o uso.`,
    },
    {
      id: 'gratuidade',
      number: '02',
      title: 'Compromisso 100% Gratuito e Sem Paywalls',
      tldr: 'O sori é e continuará sendo 100% gratuito. Não há cobranças ocultas, assinaturas obrigatórias ou comandos bloqueados.',
      content: `O bot sori é fornecido no modelo 100% Gratuito. Todos os seus recursos essenciais — incluindo painéis de tickets ilimitados, transcrições em HTML, sistema de punição e moderação (/banir, /mute, /advertencia), loja virtual com entrega automática e sistema de revisão (/revisao) — são disponibilizados sem qualquer cobrança financeira obrigatória. Doações comunitárias voluntárias servem exclusivamente para custear servidores dedicados em nuvem e não condicionam o funcionamento básico das ferramentas.`,
    },
    {
      id: 'responsabilidades',
      number: '03',
      title: 'Responsabilidades do Administrador do Servidor',
      tldr: 'Você é responsável por configurar permissões corretas, proteger canais restritos e garantir que seus membros usem o bot eticamente.',
      content: `O administrador do servidor é o único responsável por: (a) Conceder permissões adequadas no Discord aos cargos de moderador e administrador para executar comandos de impacto como /banir, /mute e /advertencia; (b) Proteger o canal de transcrições de tickets configurado via /configurar bot contra acessos não autorizados de terceiros; (c) Assegurar que nenhum produto comercializado na loja virtual do servidor infrinja direitos autorais, leis aplicáveis ou as diretrizes de desenvolvedor do Discord; (d) Responder legalmente por qualquer conteúdo compartilhado por membros nos canais criados pelo bot.`,
    },
    {
      id: 'punicoes-revisao',
      number: '04',
      title: 'Moderação, Punições e Sistema de Revisão (/revisao)',
      tldr: 'O sori automatiza cálculos de tempo de punição e registros de auditoria, oferecendo canal de apelação transparente para os membros.',
      content: `O sori atua como ferramenta executora sob comando dos moderadores humanos ou gatilhos pré-programados de AutoMod. O sistema calcula tempos de punição automáticos baseando-se em motivos e histórico de infrações. O comando /revisao permite aos usuários submeter apelações documentadas, cabendo exclusivamente à equipe do respectivo servidor aceitar ou rejeitar a revogação de punições. A equipe do sori não atua como tribunal de julgamento interno de servidores individuais.`,
    },
    {
      id: 'tickets-transcricoes',
      number: '05',
      title: 'Tickets de Atendimento e Transcrições em HTML',
      tldr: 'Canais de tickets são privados entre membro e equipe. O histórico gerado ao fechar é arquivado com segurança por até 30 dias.',
      content: `Os canais criados via /painel criar são destinados ao atendimento entre usuários e administradores da guilda. Ao encerrar um chamado, o sori compila o histórico de mensagens e anexos em formato HTML criptografado. Este documento destina-se a fins de auditoria e resolução de disputas internas. Não é permitido utilizar os tickets do sori para armazenar intencionalmente dados bancários confidenciais ou senhas de acesso pessoal.`,
    },
    {
      id: 'loja-economia',
      number: '06',
      title: 'Loja Virtual e Economia Interna',
      tldr: 'O sori entrega produtos digitais e cargos automaticamente, sem processar nem reter dinheiro real em custódia bancária.',
      content: `O módulo de loja permite a entrega automática de cargos e chaves digitais mediante saldo virtual ou verificação externa. O sori não atua como instituição bancária ou gateway de pagamento direto. Quaisquer transações com moeda fiduciária ocorrem por conta e risco dos administradores e compradores da guilda.`,
    },
    {
      id: 'disponibilidade',
      number: '07',
      title: 'SLA de Disponibilidade, Shards e Latência',
      tldr: 'Mantemos infraestrutura distribuída com meta de 99.98% de disponibilidade, com manutenção comunicada na página de avisos.',
      content: `Nossa infraestrutura opera em cluster multi-shard com redundância em nuvem para assegurar respostas abaixo de 20ms e histórico de 99.98% de disponibilidade. No entanto, o serviço pode sofrer interrupções temporárias decorrentes de manutenções programadas (sempre divulgadas em nossa página de Avisos), quedas na API do Discord ou falhas generalizadas de telecomunicações.`,
    },
    {
      id: 'violacoes',
      number: '08',
      title: 'Medidas Disciplinares e Bloqueio Global',
      tldr: 'Tentativas de raid, exploração de falhas, abuso de API ou atividades ilícitas resultarão em banimento global imediato do bot.',
      content: `A equipe do sori reserva-se o direito de bloquear permanentemente o acesso de qualquer usuário ou servidor (blacklist global) que: (a) Realize engenharia reversa maliciosa ou ataque as APIs do sori; (b) Force intencionalmente estouro de limites de taxa (rate-limits) para travar shards; (c) Utilize o bot para orquestrar invasões, ataques cibernéticos ou disseminação de vírus.`,
    },
    {
      id: 'alteracoes',
      number: '09',
      title: 'Modificações nos Termos e Contato',
      tldr: 'Atualizações relevantes são notificadas via faixa de aviso e changelog. Dúvidas podem ser esclarecidas no suporte.',
      content: `Reservamo-nos o direito de atualizar estes termos periodicamente para refletir novos módulos ou exigências legais. Alterações substanciais serão comunicadas com destaque na página inicial e no canal de avisos do Discord. Para questões jurídicas, abra um chamado em nossa Central de Suporte.`,
    },
  ];

  const filteredSections = sections.filter((sec) => {
    const matchesSearch =
      sec.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sec.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sec.tldr.toLowerCase().includes(searchTerm.toLowerCase());

    if (activeSection === 'todos') return matchesSearch;
    return sec.id === activeSection && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12 text-left">
      {/* Top Banner Header */}
      <div className="space-y-4 border-b border-white/10 pb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-300">
            <Scale className="w-3.5 h-3.5 text-white" />
            <span className="uppercase tracking-wider font-semibold">
              Marco Regulatório & Termos de Serviço
            </span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="text-zinc-400">Versão 2.4 (Revisão 2026)</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 rounded-lg border border-white/20 hover:border-white/40 text-xs font-medium text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir Termos</span>
            </button>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight font-display">
          Termos de Uso do <span className="neon-text-glow">sori bot</span>
        </h1>
        <p className="text-base text-zinc-300 max-w-3xl leading-relaxed">
          Transparência completa sobre direitos, gratuidade, funcionamento dos tickets, moderação
          automática e obrigações na utilização de nossos serviços de automação para Discord.
        </p>

        {/* Search bar inside terms */}
        <div className="relative max-w-md pt-2">
          <Search className="absolute left-3.5 top-5 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Pesquisar cláusula ou palavra-chave (ex: tickets, banir, loja)..."
            className="w-full pl-10 pr-4 py-2.5 bg-zinc-950 border border-white/20 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors"
          />
        </div>
      </div>

      {/* Main Grid: Sidebar Navigator + Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Table of contents / Section picker (Left 4 cols) */}
        <div className="lg:col-span-4 space-y-3 sticky top-24">
          <div className="text-xs font-bold text-white uppercase tracking-wider px-2">
            Índice de Cláusulas
          </div>

          <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-2 space-y-1">
            <button
              onClick={() => setActiveSection('todos')}
              className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                activeSection === 'todos'
                  ? 'bg-white text-black font-bold'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>Ver Todas as Cláusulas</span>
              <span className="font-mono text-[10px]">({sections.length})</span>
            </button>

            {sections.map((sec) => {
              const isSelected = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => setActiveSection(sec.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-white text-black font-bold'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="truncate pr-2">
                    <strong className="font-mono mr-1.5">{sec.number}.</strong>
                    {sec.title}
                  </span>
                  <ChevronRight className="w-3 h-3 shrink-0 opacity-60" />
                </button>
              );
            })}
          </div>

          {/* Quick Notice box */}
          <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/10 text-xs text-zinc-400 space-y-2">
            <div className="flex items-center gap-2 text-white font-bold">
              <ShieldCheck className="w-4 h-4 text-white" />
              <span>Conformidade com o Discord</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              O sori segue estritamente as Políticas de Desenvolvedor do Discord. Não coletamos senhas,
              mensagens privadas de canais não autorizados ou dados bancários.
            </p>
          </div>
        </div>

        {/* Clauses Stream (Right 8 cols) */}
        <div className="lg:col-span-8 space-y-8">
          {filteredSections.map((sec) => (
            <section
              key={sec.id}
              id={sec.id}
              className="p-6 sm:p-8 rounded-2xl bg-zinc-950/90 border border-white/15 space-y-4 hover:border-white/30 transition-all shadow-md"
            >
              {/* Header of clause */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono font-bold text-white bg-white/10 px-2 py-0.5 rounded">
                  CLÁUSULA {sec.number}
                </span>
                <span className="text-[11px] font-mono text-zinc-500">
                  Validação Ativa
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-display">
                {sec.title}
              </h2>

              {/* TL;DR Callout Box */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/15 text-xs text-zinc-300 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold mb-0.5">Resumo Rápido (TL;DR):</strong>
                  <span>{sec.tldr}</span>
                </div>
              </div>

              {/* Full Legal Text */}
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed text-justify">
                {sec.content}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};
