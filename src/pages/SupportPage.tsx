import React, { useState } from 'react';
import {
  LifeBuoy,
  MessageSquare,
  Search,
  ExternalLink,
  CheckCircle,
  Clock,
  Send,
  Bot,
  AlertCircle,
  HelpCircle,
  ShieldCheck,
  RefreshCw,
} from 'lucide-react';
import { Language, TicketSimulation } from '../types';
import { INITIAL_TICKET_SIMULATIONS, BOT_LOGO_URL } from '../data/botData';
import { translations } from '../i18n/translations';

interface SupportPageProps {
  lang: Language;
}

export const SupportPage: React.FC<SupportPageProps> = ({ lang }) => {
  const t = translations[lang].support;

  // Search state
  const [searchQuery, setSearchQuery] = useState('');

  // Active tickets state for simulation
  const [tickets, setTickets] = useState<TicketSimulation[]>(INITIAL_TICKET_SIMULATIONS);
  const [selectedTicketId, setSelectedTicketId] = useState<string>(INITIAL_TICKET_SIMULATIONS[0].id);
  
  // New ticket modal/form state
  const [category, setCategory] = useState('Dúvidas de Configuração');
  const [subject, setSubject] = useState('');
  const [userMsg, setUserMsg] = useState('');
  const [isCreatingTicket, setIsCreatingTicket] = useState(false);
  const [replyText, setReplyText] = useState('');

  const currentTicket = tickets.find((t) => t.id === selectedTicketId) || tickets[0];

  const handleCreateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject.trim() || !userMsg.trim()) return;

    const newTicketId = `TICK-${Math.floor(1000 + Math.random() * 9000)}`;
    const newTicket: TicketSimulation = {
      id: newTicketId,
      user: 'Você (Membro)',
      category,
      subject,
      status: 'open',
      createdAt: 'Agora mesmo',
      messages: [
        {
          sender: 'user',
          text: userMsg,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
        {
          sender: 'sori',
          text: `Olá! Seu chamado "${subject}" foi registrado no sistema sob o protocolo ${newTicketId}. Nossa inteligência sori analisou seu caso e um atendente ou comando correspondente responderá em instantes.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ],
    };

    setTickets([newTicket, ...tickets]);
    setSelectedTicketId(newTicketId);
    setSubject('');
    setUserMsg('');
    setIsCreatingTicket(false);
  };

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim()) return;

    const updated = tickets.map((tick) => {
      if (tick.id === selectedTicketId) {
        return {
          ...tick,
          messages: [
            ...tick.messages,
            {
              sender: 'user' as const,
              text: replyText,
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            },
            {
              sender: 'support' as const,
              text: 'Mensagem recebida pela equipe sori! Estamos verificando seus logs no servidor para solucionar o caso.',
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            },
          ],
        };
      }
      return tick;
    });

    setTickets(updated);
    setReplyText('');
  };

  const faqs = [
    {
      q: 'O bot sori não responde aos meus comandos no servidor. O que fazer?',
      a: 'Verifique se o bot possui a permissão "Usar Comandos de Aplicativo" e "Ver Canais" no canal onde você está digitando. Você também pode digitar `/ping` para checar a conexão do shard.',
    },
    {
      q: 'Como gero o transcript HTML de um ticket finalizado?',
      a: 'Ao executar `/ticket fechar`, o sori compila automaticamente todas as mensagens enviadas no canal e gera um link protegido de download com o transcript visual.',
    },
    {
      q: 'Como configurar o envio automático de produtos na loja virtual?',
      a: 'Utilize `/loja criar nome:"Produto" cargo:@Cargo chave:"link_ou_codigo"`. Assim que o comprador interagir com o botão de compra, a entrega é despachada na hora.',
    },
    {
      q: 'O anti-raid bloqueia membros inocentes?',
      a: 'Não. O sori utiliza uma pontuação heurística que avalia idade da conta, histórico de menções e links externos. Você pode ajustar a sensibilidade através do `/config automod`.',
    },
  ];

  const filteredFaqs = faqs.filter(
    (f) =>
      f.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-16 text-left">
      {/* Header */}
      <div className="space-y-4">
        <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
          Atendimento & Suporte Dinâmico
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight font-display">
          {t.title}
        </h1>
        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-3xl">
          {t.subtitle}
        </p>

        {/* Search Input */}
        <div className="relative max-w-xl pt-2">
          <Search className="absolute left-3.5 top-5 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar dúvida, comando ou erro frequente..."
            className="w-full pl-10 pr-4 py-3 bg-zinc-950 border border-white/20 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors"
          />
        </div>

        {/* Quick Diagnostic Checklist for Faster Resolutions */}
        <div className="p-4 rounded-xl bg-zinc-950 border border-white/10 text-xs text-zinc-300 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-white shrink-0" />
            <span>Executou <strong>/configurar bot</strong> no servidor?</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-white shrink-0" />
            <span>Permissão de <strong>Ver Canais</strong> habilitada?</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-white shrink-0" />
            <span>Cargo do sori acima dos cargos que gerencia?</span>
          </div>
        </div>
      </div>

      {/* DYNAMIC TICKET SIMULATOR WIDGET */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white font-display">
              {t.ticketSimTitle}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              {t.ticketSimDesc}
            </p>
          </div>

          <button
            onClick={() => setIsCreatingTicket(!isCreatingTicket)}
            className="px-4 py-2.5 text-xs font-bold text-black bg-white hover:bg-zinc-200 rounded-lg neon-glow-white-subtle transition-all cursor-pointer whitespace-nowrap"
          >
            {isCreatingTicket ? 'Voltar para Meus Tickets' : '+ Abrir Novo Chamado'}
          </button>
        </div>

        {isCreatingTicket ? (
          /* Create Ticket Form */
          <div className="bg-zinc-950 border border-white/20 rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-bold text-white">Criar Chamado de Atendimento</h3>
            <form onSubmit={handleCreateTicket} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                  {t.categorySelect}
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-black border border-white/20 rounded-lg text-xs text-white focus:outline-none focus:border-white"
                >
                  <option value="Dúvidas de Configuração">Dúvidas de Configuração</option>
                  <option value="Reportar Bug">Reportar Bug / Falha Técnica</option>
                  <option value="Loja & Pagamentos">Loja Virtual & Economia</option>
                  <option value="Parcerias & Comunidade">Parcerias & Comunidade</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                  Assunto Resumido
                </label>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Ex: Como mudar o canal de logs do automod?"
                  className="w-full px-3.5 py-2.5 bg-black border border-white/20 rounded-lg text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                  Mensagem Detalhada
                </label>
                <textarea
                  required
                  rows={4}
                  value={userMsg}
                  onChange={(e) => setUserMsg(e.target.value)}
                  placeholder="Descreva o que está acontecendo no seu servidor..."
                  className="w-full px-3.5 py-2.5 bg-black border border-white/20 rounded-lg text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsCreatingTicket(false)}
                  className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 text-xs font-bold text-black bg-white hover:bg-zinc-200 rounded-lg neon-glow-white-subtle"
                >
                  {t.createTicketBtn}
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Active Ticket Viewer */
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-zinc-950/90 border border-white/15 rounded-2xl overflow-hidden">
            {/* Tickets Sidebar List */}
            <div className="md:col-span-4 border-r border-white/10 p-4 space-y-2 bg-black/40">
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                Seus Chamados Ativos ({tickets.length})
              </div>

              <div className="space-y-2 max-h-[380px] overflow-y-auto">
                {tickets.map((tItem) => {
                  const isSelected = tItem.id === currentTicket.id;
                  return (
                    <div
                      key={tItem.id}
                      onClick={() => setSelectedTicketId(tItem.id)}
                      className={`p-3 rounded-lg border transition-all cursor-pointer space-y-1 ${
                        isSelected
                          ? 'border-white bg-white/10'
                          : 'border-white/5 bg-zinc-900/40 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[11px] font-bold text-white">
                          {tItem.id}
                        </span>
                        <span
                          className={`text-[9px] font-bold uppercase px-1.5 py-0.2 rounded ${
                            tItem.status === 'open'
                              ? 'bg-white text-black'
                              : 'bg-zinc-800 text-zinc-400'
                          }`}
                        >
                          {tItem.status === 'open' ? 'Aberto' : 'Resolvido'}
                        </span>
                      </div>
                      <div className="text-xs font-semibold text-zinc-200 line-clamp-1">
                        {tItem.subject}
                      </div>
                      <div className="text-[10px] text-zinc-500">{tItem.createdAt}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Ticket Thread Chat */}
            <div className="md:col-span-8 p-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Thread Header */}
                <div className="flex items-start justify-between border-b border-white/10 pb-4">
                  <div>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase">
                      {currentTicket.category} • Protocolo {currentTicket.id}
                    </span>
                    <h3 className="text-base font-bold text-white mt-0.5">
                      {currentTicket.subject}
                    </h3>
                  </div>
                  <span className="text-xs text-zinc-400">
                    Solicitante: <strong className="text-white">{currentTicket.user}</strong>
                  </span>
                </div>

                {/* Messages stream */}
                <div className="space-y-3 max-h-[260px] overflow-y-auto pr-1">
                  {currentTicket.messages.map((m, idx) => (
                    <div
                      key={idx}
                      className={`p-3.5 rounded-xl text-xs space-y-1 ${
                        m.sender === 'user'
                          ? 'bg-zinc-900 border border-white/10 ml-6 text-zinc-200'
                          : 'bg-white/10 border border-white/20 mr-6 text-white'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[10px] text-zinc-400">
                        <span className="font-bold flex items-center gap-1.5 text-white">
                          {m.sender === 'user' ? (
                            'Você'
                          ) : (
                            <>
                              <img
                                src={BOT_LOGO_URL}
                                alt="sori"
                                referrerPolicy="no-referrer"
                                className="w-3.5 h-3.5 rounded-full object-cover inline-block"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = '/src/assets/images/sori_bot_avatar_1793981999577.jpg';
                                }}
                              />
                              <span>sori Atendimento</span>
                            </>
                          )}
                        </span>
                        <span className="font-mono">{m.timestamp}</span>
                      </div>
                      <p className="leading-relaxed whitespace-pre-line">{m.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message Reply Form */}
              <form onSubmit={handleSendReply} className="flex gap-2">
                <input
                  type="text"
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Escreva sua resposta para o atendente sori..."
                  className="flex-1 px-3.5 py-2.5 bg-black border border-white/20 rounded-lg text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-white text-black hover:bg-zinc-200 rounded-lg text-xs font-bold flex items-center gap-1.5 neon-glow-white-subtle cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Enviar</span>
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* SERVICE STATUS PROBER */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white font-display">
          {t.statusTitle}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/10 flex items-center justify-between">
            <div>
              <div className="text-xs text-zinc-400">Discord Gateway</div>
              <div className="text-sm font-bold text-white">100% Operacional</div>
            </div>
            <div className="w-2.5 h-2.5 rounded-full bg-white neon-glow-white-subtle" />
          </div>

          <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/10 flex items-center justify-between">
            <div>
              <div className="text-xs text-zinc-400">Motor de Tickets</div>
              <div className="text-sm font-bold text-white">100% Operacional</div>
            </div>
            <div className="w-2.5 h-2.5 rounded-full bg-white neon-glow-white-subtle" />
          </div>

          <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/10 flex items-center justify-between">
            <div>
              <div className="text-xs text-zinc-400">Cluster de Shards</div>
              <div className="text-sm font-bold text-white">8/8 Ativos</div>
            </div>
            <div className="w-2.5 h-2.5 rounded-full bg-white neon-glow-white-subtle" />
          </div>

          <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/10 flex items-center justify-between">
            <div>
              <div className="text-xs text-zinc-400">Banco de Dados</div>
              <div className="text-sm font-bold text-white">Latência 4ms</div>
            </div>
            <div className="w-2.5 h-2.5 rounded-full bg-white neon-glow-white-subtle" />
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white font-display">
          {t.faqTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-zinc-950/60 border border-white/10 space-y-2 hover:border-white/30 transition-all"
            >
              <h4 className="text-sm font-bold text-white flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* DISCORD INVITE CTA */}
      <div className="p-8 rounded-2xl bg-black border border-white/20 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-white">
            Prefere atendimento diretamente no Discord?
          </h3>
          <p className="text-xs text-zinc-400">
            Nossa equipe de suporte e comunidade de moderadores estão online 24/7.
          </p>
        </div>
        <a
          href="https://discord.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 text-xs font-bold text-black bg-white hover:bg-zinc-200 rounded-lg neon-glow-white-subtle transition-all cursor-pointer whitespace-nowrap"
        >
          {t.discordJoinBtn}
        </a>
      </div>
    </div>
  );
};
