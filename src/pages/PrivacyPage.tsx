import React, { useState } from 'react';
import {
  ShieldCheck,
  Lock,
  EyeOff,
  Database,
  Trash2,
  Server,
  FileText,
  Search,
  CheckCircle2,
  KeyRound,
  Terminal,
  ExternalLink,
} from 'lucide-react';
import { Language } from '../types';

interface PrivacyPageProps {
  lang: Language;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'geral' | 'tabela' | 'direitos'>('geral');

  const dataLifecycle = [
    {
      type: 'Identificadores Discord (User ID, Guild ID, Channel ID)',
      purpose: 'Vincular permissões de moderadores, roteamento de shards e canais configurados no /configurar bot',
      encryption: 'TLS 1.3 em trânsito / Criptografia AES-256 em repouso',
      retention: 'Enquanto o bot permanecer no servidor',
      deletion: 'Automático após saída do bot ou via /data delete',
    },
    {
      type: 'Transcrições de Tickets (Mensagens & Anexos do Chamado)',
      purpose: 'Permitir que a equipe baixe o histórico de atendimento compilado em HTML após o encerramento',
      encryption: 'AES-256 com chaves isoladas por guilda',
      retention: '30 dias a partir do encerramento do ticket',
      deletion: 'Expurgo automático via cronjob no 30º dia',
    },
    {
      type: 'Registros de Moderação & Auditoria (/banir, /mute, /advertencia)',
      purpose: 'Cálculo de reincidência de infrações, histórico de advertências e sistema de apelação (/revisao)',
      encryption: 'Banco de dados relacional criptografado',
      retention: '90 dias para cálculo disciplinar progressivo',
      deletion: 'Manual via equipe do servidor ou exclusão de guilda',
    },
    {
      type: 'Dados de Loja & Economia Virtual',
      purpose: 'Saldo virtual da comunidade, histórico de compras e entrega automatizada de cargos e chaves',
      encryption: 'Hash criptográfico com verificação de integridade',
      retention: 'Enquanto o servidor mantiver a economia ativa',
      deletion: 'Resetável a qualquer momento pelo administrador',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12 text-left">
      {/* Header */}
      <div className="space-y-4 border-b border-white/10 pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-300">
          <ShieldCheck className="w-3.5 h-3.5 text-white" />
          <span className="uppercase tracking-wider font-semibold">
            Privacidade por Design & Segurança Criptográfica
          </span>
          <span aria-hidden="true" className="text-zinc-600">·</span>
          <span className="text-zinc-400">Em conformidade com LGPD (Brasil) e GDPR (Europa)</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight font-display">
          Política de Privacidade do <span className="neon-text-glow">sori</span>
        </h1>
        <p className="text-base text-zinc-300 max-w-3xl leading-relaxed">
          Nosso compromisso inegociável é proteger a privacidade dos membros e servidores que utilizam
          o sori. Coletamos apenas o essencial para a execução de tickets, moderação e automação, com
          zero comercialização de dados.
        </p>

        {/* Tab switchers */}
        <div className="flex flex-wrap items-center gap-2 pt-4">
          <button
            onClick={() => setActiveTab('geral')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'geral'
                ? 'bg-white text-black font-bold'
                : 'bg-zinc-950 text-zinc-400 hover:text-white border border-white/10'
            }`}
          >
            Diretrizes Gerais & Princípios
          </button>
          <button
            onClick={() => setActiveTab('tabela')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'tabela'
                ? 'bg-white text-black font-bold'
                : 'bg-zinc-950 text-zinc-400 hover:text-white border border-white/10'
            }`}
          >
            Tabela de Ciclo de Vida dos Dados
          </button>
          <button
            onClick={() => setActiveTab('direitos')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'direitos'
                ? 'bg-white text-black font-bold'
                : 'bg-zinc-950 text-zinc-400 hover:text-white border border-white/10'
            }`}
          >
            Seus Direitos & Exclusão Imediata
          </button>
        </div>
      </div>

      {activeTab === 'geral' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Card 1: Coleta Mínima */}
          <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-white/15 space-y-4 shadow-md">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white font-display">
              1. Princípio da Coleta Mínima
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              O sori não monitora conversas gerais nem canais normais do Discord. O bot lê exclusivamente
              os comandos slash disparados explicitamente pelos usuários e as mensagens trocadas nos
              canais restritos de atendimento gerados pelo comando <code className="text-white bg-white/10 px-1 py-0.5 rounded font-mono">/painel criar</code>.
            </p>
            <div className="pt-2 text-xs text-zinc-400 border-t border-white/10">
              Zero telemetria de navegação web, senhas ou dados bancários pessoais.
            </div>
          </div>

          {/* Card 2: Criptografia */}
          <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-white/15 space-y-4 shadow-md">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
              <KeyRound className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white font-display">
              2. Criptografia Ponta a Ponta
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Toda troca de mensagens com os servidores do Discord é protegida via protocolo TLS 1.3
              de alta segurança. Nossos bancos de dados utilizam encriptação AES-256 em repouso. Transcrições
              HTML de tickets geram hashes únicos não sequenciais para impedir adivinhação de URLs.
            </p>
            <div className="pt-2 text-xs text-zinc-400 border-t border-white/10">
              Links de transcrição protegidos por token de acesso da guilda.
            </div>
          </div>

          {/* Card 3: Não comercialização */}
          <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-white/15 space-y-4 shadow-md">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
              <EyeOff className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white font-display">
              3. Zero Venda de Dados
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Diferente de muitos serviços na internet, o sori <strong>nunca comercializa, aluga ou cede</strong> dados
              de seus usuários a corretores de dados, parceiros comerciais ou redes de publicidade. Nosso
              código não inclui bibliotecas de rastreamento de anúncios de terceiros.
            </p>
            <div className="pt-2 text-xs text-zinc-400 border-t border-white/10">
              Total transparência ética na condução do projeto.
            </div>
          </div>

          {/* Card 4: Retenção e Expurgos */}
          <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-white/15 space-y-4 shadow-md">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
              <Trash2 className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white font-display">
              4. Expurgos Automáticos
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Transcrições temporárias de tickets expiram e são fisicamente destruídas em nossos discos após
              o prazo estrito de <strong>30 dias</strong>. Logs operacionais transitórios de moderação são limpos em
              ciclos de 90 dias, mantendo a pegada de dados a menor possível.
            </p>
            <div className="pt-2 text-xs text-zinc-400 border-t border-white/10">
              Rotinas de limpeza automatizadas executadas 24 horas por dia.
            </div>
          </div>
        </div>
      )}

      {activeTab === 'tabela' && (
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white font-display">
              Matriz do Ciclo de Vida dos Dados
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Visão detalhada de cada dado armazenado pelo bot sori, finalidade legal e prazos de retenção.
            </p>
          </div>

          <div className="bg-zinc-950 border border-white/15 rounded-2xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-black/80 border-b border-white/10 text-zinc-400 uppercase font-mono text-[11px]">
                  <tr>
                    <th className="p-4 font-semibold">Tipo de Dado</th>
                    <th className="p-4 font-semibold">Finalidade Específica</th>
                    <th className="p-4 font-semibold">Padrão de Criptografia</th>
                    <th className="p-4 font-semibold">Tempo de Retenção</th>
                    <th className="p-4 font-semibold">Como Excluir</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-zinc-300">
                  {dataLifecycle.map((item, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="p-4 font-bold text-white min-w-[200px]">
                        {item.type}
                      </td>
                      <td className="p-4 text-zinc-300 min-w-[240px] leading-relaxed">
                        {item.purpose}
                      </td>
                      <td className="p-4 font-mono text-zinc-400 min-w-[180px]">
                        {item.encryption}
                      </td>
                      <td className="p-4 font-semibold text-white min-w-[150px]">
                        {item.retention}
                      </td>
                      <td className="p-4 text-zinc-400 min-w-[160px]">
                        {item.deletion}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'direitos' && (
        <div className="space-y-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-white/20 space-y-4">
            <h3 className="text-xl font-bold text-white font-display flex items-center gap-2">
              <Terminal className="w-5 h-5 text-white" />
              <span>Direito ao Esquecimento: Comando /data delete</span>
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Você tem total soberania sobre seus dados. Qualquer administrador de servidor ou usuário pode
              solicitar a purga definitiva de seus registros através do comando slash oficial:
            </p>

            <div className="p-4 rounded-xl bg-black border border-white/20 font-mono text-xs flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-white">
                <span className="text-zinc-500">$</span>
                <span className="font-bold">/data delete confirmar:sim</span>
              </div>
              <span className="text-[10px] text-zinc-400 uppercase font-sans">
                Exclusão em até 60 segundos
              </span>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed">
              Ao executar este comando, todos os históricos de punições, registros de economia e transcrições
              associadas ao solicitante são sobrescritos com zeros binários e destruídos permanentemente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-zinc-950/60 border border-white/10 space-y-2">
              <h4 className="text-sm font-bold text-white">Direito de Acesso</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Você pode solicitar uma cópia legível de todos os dados armazenados a respeito do seu ID
                através de um chamado de suporte.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-zinc-950/60 border border-white/10 space-y-2">
              <h4 className="text-sm font-bold text-white">Direito de Retificação</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Informações incorretas de punição podem ser contestadas a qualquer momento através do
                comando <code className="text-white font-mono">/revisao</code>.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-zinc-950/60 border border-white/10 space-y-2">
              <h4 className="text-sm font-bold text-white">Canal do DPO / Privacidade</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Para requerimentos formais sobre privacidade, entre em contato através de nossa Central
                de Atendimento ou no Discord oficial.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
