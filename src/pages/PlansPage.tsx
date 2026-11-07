import React from 'react';
import { Check, Sparkles, HelpCircle, Heart, LockOpen, ArrowRight, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';

interface PlansPageProps {
  lang: Language;
  setCurrentTab: (tab: string) => void;
}

export const PlansPage: React.FC<PlansPageProps> = ({ lang, setCurrentTab }) => {
  const t = translations[lang].plans;

  const comparisonFeatures = [
    { name: 'Criação de Painéis de Tickets', others: 'Limitado a 1 ou 2', sori: 'Ilimitado (100% Grátis)' },
    { name: 'Transcrições de Histórico em HTML', others: 'Exclusivo VIP ($5/mês)', sori: 'Incluso Grátis' },
    { name: 'Sistema de Loja & Entrega Automática', others: 'Exclusivo Pago ($15/mês)', sori: 'Incluso Grátis' },
    { name: 'Anti-Raid e Filtro de Convites', others: 'Básico', sori: 'Avançado com Captcha' },
    { name: 'Sistema de Economia e Moedas', others: 'Com restrições', sori: 'Completo e Auditável' },
    { name: 'Sorteios com Requisitos', others: 'Apenas 1 ativo', sori: 'Sorteios Ilimitados' },
    { name: 'Suporte Dinâmico Comunitário', others: 'Apenas para assinantes', sori: 'Disponível para Todos' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-16 text-left">
      {/* Header */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold text-white uppercase tracking-wider">
          <LockOpen className="w-3.5 h-3.5 text-white" />
          <span>{t.currentFreeBadge}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight font-display">
          {t.title}
        </h1>
        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      {/* Main Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Card 1: 100% Free Plan (Prominent) */}
        <div className="relative p-8 rounded-2xl bg-zinc-950 border-2 border-white rounded-2xl shadow-2xl flex flex-col justify-between space-y-6 neon-glow-white-subtle">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Acesso Global
              </span>
              <span className="px-2.5 py-0.5 rounded text-[10px] font-extrabold bg-white text-black uppercase">
                Atualmente Ativo
              </span>
            </div>

            <h3 className="text-2xl font-black text-white font-display">
              {t.freePlanTitle}
            </h3>

            <div className="flex items-baseline gap-2">
              <span className="text-4xl sm:text-5xl font-black text-white tracking-tight font-display tabular-nums">
                {t.freePlanPrice}
              </span>
              <span className="text-xs text-zinc-400 font-medium">
                / {t.freePlanPeriod}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {t.freePlanDesc}
            </p>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                Recursos Inclusos:
              </div>
              <ul className="space-y-2 text-xs text-zinc-300">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-white shrink-0" />
                  <span>Painéis de Tickets e Transcrições HTML ilimitadas</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-white shrink-0" />
                  <span>Loja Virtual com entrega 24/7 de cargos e produtos digitais</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-white shrink-0" />
                  <span>AutoMod com escudo Anti-Raid e filtros anti-spam</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-white shrink-0" />
                  <span>Sistema de Economia, carteira virtual e ranking de XP</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-white shrink-0" />
                  <span>Sorteios automatizados com verificação de requisitos</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-white shrink-0" />
                  <span>Cluster na nuvem com 99.98% de disponibilidade e baixa latência</span>
                </li>
              </ul>
            </div>
          </div>

          <a
            href="https://discord.com/oauth2/authorize?client_id=123456789012345678&scope=bot%20applications.commands&permissions=8"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 text-center text-sm font-bold text-black bg-white hover:bg-zinc-200 rounded-xl transition-all neon-glow-white-subtle cursor-pointer active:scale-95"
          >
            {t.freePlanCta}
          </a>
        </div>

        {/* Card 2: Community Supporter (Donations) */}
        <div className="p-8 rounded-2xl bg-zinc-950/60 border border-white/15 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Comunidade
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-medium border border-white/20 text-zinc-300">
                Opcional
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white font-display">
              {t.supporterTitle}
            </h3>

            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-white tracking-tight font-display">
                {t.supporterPrice}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              {t.supporterDesc}
            </p>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                Vantagens de Apoiador:
              </div>
              <ul className="space-y-2 text-xs text-zinc-400">
                <li className="flex items-center gap-2.5">
                  <Heart className="w-4 h-4 text-white shrink-0" />
                  <span>Cargo exclusivo de Apoiador no Discord Oficial do sori</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-white shrink-0" />
                  <span>Emblema brilhante especial no perfil do bot</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-white shrink-0" />
                  <span>Acesso antecipado aos canais de teste de novos módulos</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-white shrink-0" />
                  <span>Garantia de manter a infraestrutura 100% gratuita para todos</span>
                </li>
              </ul>
            </div>
          </div>

          <button
            onClick={() => setCurrentTab('suporte')}
            className="w-full py-3.5 text-center text-sm font-semibold text-white bg-zinc-900 hover:bg-zinc-800 border border-white/20 rounded-xl transition-all cursor-pointer"
          >
            {t.supporterCta}
          </button>
        </div>
      </div>

      {/* Comparison Table: Others vs Sori */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white font-display">
            Comparativo: sori vs. Outros Bots Pagos
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Veja como o sori elimina custos recorrentes na gestão do seu servidor.
          </p>
        </div>

        <div className="bg-zinc-950/80 border border-white/10 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-black/60 border-b border-white/10 text-zinc-400 uppercase font-mono text-[11px]">
                <tr>
                  <th className="p-4 font-semibold">Funcionalidade</th>
                  <th className="p-4 font-semibold text-zinc-500">Bots Tradicionais</th>
                  <th className="p-4 font-bold text-white">sori (100% Grátis)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-zinc-300">
                {comparisonFeatures.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 font-medium text-white">{row.name}</td>
                    <td className="p-4 text-zinc-500">{row.others}</td>
                    <td className="p-4 font-bold text-white flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-white shrink-0" />
                      <span>{row.sori}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white font-display">
          {t.faqTitle}
        </h2>

        <div className="space-y-3">
          <div className="p-5 rounded-xl bg-zinc-950/60 border border-white/10 space-y-2">
            <h4 className="text-sm font-bold text-white">
              O sori vai se tornar pago no futuro?
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Não! Todas as funcionalidades principais de tickets, moderação, loja e entretenimento
              permanecerão 100% gratuitas para sempre. Cobrimos os custos de infraestrutura através de
              doações comunitárias voluntárias.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-zinc-950/60 border border-white/10 space-y-2">
            <h4 className="text-sm font-bold text-white">
              Existe algum limite de tickets que posso abrir por dia?
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Nenhum limite numérico! Seu servidor pode abrir quantos tickets forem necessários.
              Todas as transcrições são salvas com criptografia sem nenhum custo adicional.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-zinc-950/60 border border-white/10 space-y-2">
            <h4 className="text-sm font-bold text-white">
              Como funciona a entrega automática na loja virtual?
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Você cadastra um produto ou cargo com o comando `/loja criar`. Quando o membro efetua a
              compra no servidor, o bot sori adiciona o cargo ou envia a mensagem secreta (link, chave ou
              arquivo) no chat privado do comprador automaticamente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
