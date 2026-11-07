import { BotCommand, Announcement, TicketSimulation, AdminTelemetry, BotScreenshot } from '../types';

export const BOT_LOGO_URL =
  'https://media.discordapp.net/attachments/1563366057442418738/1568306200464982087/logo_bot.gif?ex=6aef5677&is=6aee04f7&hm=1d425c66563f04d119132c88207b314c6e777f80918a85cc17258d71e84841f5&=';

export const BOT_COMMANDS: BotCommand[] = [
  // 1. /painel criar
  {
    name: '/painel criar',
    category: 'tickets',
    usage: '/painel criar canal:#atendimento titulo:"Suporte Oficial" tipo:botoes_e_menus',
    permissions: 'Gerenciar Servidor',
    description: {
      pt: 'Cria o painel interativo de tickets com botões estilizados, menus suspensos (select menus) e formulários (modals).',
      en: 'Creates interactive ticket panels with custom styled buttons, select menus, and modal inputs.',
      es: 'Crea el panel interactivo de tickets con botones personalizados, menús desplegables y modals.',
    },
    previewEmbed: {
      title: 'Central de Atendimento ao Cliente | Servidor Oficial',
      description: 'Olá! Clique em um dos botões abaixo ou selecione uma opção no menu suspenso para iniciar seu chamado privado com nossa equipe.',
      color: '#ffffff',
      fields: [
        { name: 'Disponibilidade', value: '24 horas / 7 dias por semana', inline: true },
        { name: 'Tempo Médio', value: '< 2 minutos', inline: true },
        { name: 'Departamentos', value: '📩 Dúvidas Gerais\n💳 Loja & Pagamentos\n🚨 Denúncias & Apelações\n🤝 Parcerias', inline: false },
      ],
      footer: 'sori tickets • Painel interativo com botões e menus',
      buttons: [
        { label: 'Dúvidas Gerais', style: 'primary', emoji: '📩' },
        { label: 'Loja & Pagamentos', style: 'success', emoji: '💳' },
        { label: 'Fazer Denúncia', style: 'danger', emoji: '🚨' },
        { label: 'Parcerias', style: 'secondary', emoji: '🤝' },
      ],
    },
    screenshots: [
      {
        url: 'https://media.discordapp.net/attachments/1563366057442418738/1568307573034193017/Captura_de_tela_2026-11-06_135322.png?ex=6aef57bf&is=6aee063f&hm=ce477832dd68c9532068805bfb9be56c1072330c0a176b34620f18702734ff52&=&format=webp&quality=lossless&width=507&height=768',
        caption: 'Demonstração Tickets #1: Criação do Painel Interativo com Botões e Menus Dropdown',
      },
      {
        url: 'https://media.discordapp.net/attachments/1563366057442418738/1568307907785793566/Captura_de_tela_2026-11-06_135526.png?ex=6aef580e&is=6aee068e&hm=91c6fb5ac4a289698079734fc6420c495c12d2b154e773ea3b66377401d34b58&=&format=webp&quality=lossless&width=479&height=512',
        caption: 'Demonstração Tickets #2: Menu de Seleção de Categorias de Atendimento (Select Menu)',
      },
      {
        url: 'https://media.discordapp.net/attachments/1563366057442418738/1568308117580812389/Captura_de_tela_2026-11-06_135619.png?ex=6aef5840&is=6aee06c0&hm=fe2b2d3d2ac5d56e90142d3f444eec6963d2c83c62cbf5fb1401dfa934523578&=&format=webp&quality=lossless&width=384&height=146',
        caption: 'Demonstração Tickets #3: Modal de Confirmação e Coleta de Dados do Membro',
      },
      {
        url: 'https://media.discordapp.net/attachments/1563366057442418738/1568308374569746502/Captura_de_tela_2026-11-06_135714.png?ex=6aef587e&is=6aee06fe&hm=1203f034e92373605a3c32daf6ef740377cb7504e6034aaf92a36a2de42326ed&=&format=webp&quality=lossless',
        caption: 'Demonstração Tickets #4: Painel Interno de Ações da Staff no Canal de Suporte',
      },
      {
        url: 'https://media.discordapp.net/attachments/1563366057442418738/1568308585270607969/Captura_de_tela_2026-11-06_135757.png?ex=6aef58b0&is=6aee0730&hm=c30bf95c258fbc5233195bb898664aba1359110457c03e9cab0770decc427671&=&format=webp&quality=lossless',
        caption: 'Demonstração Tickets #5: Notificação Instantânea de Abertura de Ticket para a Equipe',
      },
      {
        url: 'https://media.discordapp.net/attachments/1563366057442418738/1568308852406100169/Captura_de_tela_2026-11-06_135900.png?ex=6aef58f0&is=6aee0770&hm=16ca97990a13a112435205966b157e052da7d20ef4880f69f4fac5857daca46f&=&format=webp&quality=lossless&width=320&height=223',
        caption: 'Demonstração Tickets #6: Parâmetros e Opções Avançadas de Configuração de Chamados',
      },
      {
        url: 'https://media.discordapp.net/attachments/1563366057442418738/1568308852863008951/Captura_de_tela_2026-11-06_135914.png?ex=6aef58f0&is=6aee0770&hm=0c51e35512b695103c792ff3f5e0ad25cf609aea94aff42d84137922a54cbb46&=&format=webp&quality=lossless&width=218&height=256',
        caption: 'Demonstração Tickets #7: Botões de Avaliação de Atendimento pelo Usuário (Feedback)',
      },
    ],
  },

  // 2. /banir
  {
    name: '/banir',
    category: 'moderacao',
    usage: '/banir usuario:@infrator motivo:"Raid / Divulgação Maliciosa" deletar_dias:1 prova:link.png',
    permissions: 'Banir Membros',
    description: {
      pt: 'Bane pessoas com envio automático de notificação no privado, motivo detalhado e registro no canal de punições.',
      en: 'Bans users from the guild with automatic DM notices, case logs, and evidence attachment.',
      es: 'Expulsa permanentemente a personas con aviso automático por privado y registro en logs.',
    },
    previewEmbed: {
      title: 'Punição Aplicada: Banimento Definitivo',
      description: 'O usuário foi removido permanentemente da comunidade por violação direta das regras.',
      color: '#ffffff',
      fields: [
        { name: 'Infrator', value: '@spammer_99 (ID: 98124819284)', inline: true },
        { name: 'Moderador Responsável', value: '@Staff_Alex', inline: true },
        { name: 'Motivo', value: 'Envio em massa de convites maliciosos e tentativa de raid', inline: false },
        { name: 'Histórico de Infrações', value: '3 advertências prévias registradas', inline: true },
        { name: 'Apelação', value: 'Permitida via /revisao em 30 dias', inline: true },
      ],
      footer: 'sori moderation • Registro de Auditoria #4892',
    },
    screenshots: [
      {
        url: 'https://media.discordapp.net/attachments/1563366057442418738/1568309071461752943/Captura_de_tela_2026-11-06_135959.png?ex=6aef5924&is=6aee07a4&hm=408685e1d5f14e865aef5806e4317a97ef2b82a00d221efdbbfa7d7d06723032&=&format=webp&quality=lossless&width=512&height=294',
        caption: 'Demonstração de Punição: Embed Oficial de Banimento / Mute com ID do Infrator e Motivo',
      },
      {
        url: 'https://media.discordapp.net/attachments/1563366057442418738/1568309284092125235/Captura_de_tela_2026-11-06_140052.png?ex=6aef5957&is=6aee07d7&hm=5433d971d30c5bfeb1a2433692e114b106b25643ae43e03e9366221720f23894&=&format=webp&quality=lossless&width=1280&height=288',
        caption: 'Demonstração de Punição: Tabela de Tempo de Punição Automático por Motivo e Gravidade',
      },
    ],
  },

  // 3. /mute
  {
    name: '/mute',
    category: 'moderacao',
    usage: '/mute usuario:@infrator tempo:2h motivo:"Flood no chat geral" silencioso:false',
    permissions: 'Moderar Membros (Timeout)',
    description: {
      pt: 'Muta as pessoas temporariamente aplicando timeout do Discord com cálculo de tempo automático por reincidência.',
      en: 'Temporarily mutes members using Discord native timeout with automatic duration escalations.',
      es: 'Silencia a los usuarios temporalmente con tiempo y motivo calculados automáticamente.',
    },
    previewEmbed: {
      title: 'Silenciamento Aplicado (Mute)',
      description: 'O usuário foi silenciado e está impedido de enviar mensagens ou falar em canais de voz.',
      color: '#ffffff',
      fields: [
        { name: 'Usuário Silenciado', value: '@usuario_flood (ID: 4892018492)', inline: true },
        { name: 'Duração', value: '2 Horas (Expira às 16:30)', inline: true },
        { name: 'Motivo', value: 'Spam excessivo de mensagens e emojis no #geral', inline: false },
        { name: 'Tempo Automático', value: 'Calculado com base na tabela de reincidências', inline: false },
      ],
      footer: 'sori timeout system • Desmute automático',
    },
    screenshots: [
      {
        url: 'https://media.discordapp.net/attachments/1563366057442418738/1568309071461752943/Captura_de_tela_2026-11-06_135959.png?ex=6aef5924&is=6aee07a4&hm=408685e1d5f14e865aef5806e4317a97ef2b82a00d221efdbbfa7d7d06723032&=&format=webp&quality=lossless&width=512&height=294',
        caption: 'Demonstração de Mute: Registro Oficial com Notificação e Tempo de Timeout',
      },
      {
        url: 'https://media.discordapp.net/attachments/1563366057442418738/1568309284092125235/Captura_de_tela_2026-11-06_140052.png?ex=6aef5957&is=6aee07d7&hm=5433d971d30c5bfeb1a2433692e114b106b25643ae43e03e9366221720f23894&=&format=webp&quality=lossless&width=1280&height=288',
        caption: 'Demonstração de Mute: Tabela Oficial de Duração e Reincidência Automática',
      },
    ],
  },

  // 4. /advertencia
  {
    name: '/advertencia',
    category: 'moderacao',
    usage: '/advertencia usuario:@membro motivo:"Linguagem ofensiva" prova:print.jpg',
    permissions: 'Gerenciar Mensagens',
    description: {
      pt: 'Aplica advertências nas pessoas com contagem progressiva e punição automática ao atingir limites.',
      en: 'Issues warnings to members with automatic progressive sanctions upon reaching warning thresholds.',
      es: 'Aplica advertencias con conteo progresivo y sanción automática al alcanzar límites.',
    },
    previewEmbed: {
      title: 'Advertência Registrada [2/3]',
      description: 'Uma advertência formal foi adicionada ao histórico disciplinar do usuário.',
      color: '#ffffff',
      fields: [
        { name: 'Membro', value: '@MembroAlvo (ID: 3948572819)', inline: true },
        { name: 'Moderador', value: '@ModeradorChefe', inline: true },
        { name: 'Motivo', value: 'Uso de linguagem desrespeitosa com outros membros', inline: false },
        { name: 'Próxima Punição', value: 'Caso atinja 3 advertências: Mute automático de 24h', inline: false },
      ],
      footer: 'sori warn system • Histórico auditável',
      buttons: [
        { label: 'Ver Histórico Completo', style: 'secondary', emoji: '📜' },
        { label: 'Apelar Advertência', style: 'primary', emoji: '⚖️' },
      ],
    },
    screenshots: [
      {
        url: 'https://media.discordapp.net/attachments/1563366057442418738/1568309071461752943/Captura_de_tela_2026-11-06_135959.png?ex=6aef5924&is=6aee07a4&hm=408685e1d5f14e865aef5806e4317a97ef2b82a00d221efdbbfa7d7d06723032&=&format=webp&quality=lossless&width=512&height=294',
        caption: 'Demonstração de Advertência: Embed com Contagem Progressiva e Histórico Disciplinar',
      },
      {
        url: 'https://media.discordapp.net/attachments/1563366057442418738/1568309284092125235/Captura_de_tela_2026-11-06_140052.png?ex=6aef5957&is=6aee07d7&hm=5433d971d30c5bfeb1a2433692e114b106b25643ae43e03e9366221720f23894&=&format=webp&quality=lossless&width=1280&height=288',
        caption: 'Demonstração de Advertência: Tabela de Escalação e Punição Automática por Limite de Avisos',
      },
    ],
  },

  // 5. /configurar bot
  {
    name: '/configurar bot',
    category: 'automacao',
    usage: '/configurar bot',
    permissions: 'Administrador',
    description: {
      pt: 'Abre o painel completo interativo com menus suspensos para configurar tickets, moderação, loja e logs.',
      en: 'Opens the complete interactive configuration dashboard with select menus for tickets, mod, shop, and logs.',
      es: 'Abre el panel interactivo completo con menús desplegables para configurar el bot en tu servidor.',
    },
    previewEmbed: {
      title: 'Painel Central de Configurações do sori',
      description: 'Selecione abaixo no menu o módulo que você deseja ativar, ajustar ou vincular aos canais do seu servidor.',
      color: '#ffffff',
      fields: [
        { name: 'Canal de Logs de Punições', value: '✅ #logs-punicoes', inline: true },
        { name: 'Canal de Transcrições', value: '✅ #transcricoes-tickets', inline: true },
        { name: 'Cargos de Atendimento', value: '✅ @Staff, @Moderador', inline: true },
        { name: 'Proteção Anti-Raid', value: '🛡️ Ativada (Sensibilidade: Alta)', inline: false },
      ],
      footer: 'sori setup • 100% Gratuito',
      buttons: [
        { label: 'Configurar Tickets', style: 'primary', emoji: '🎫' },
        { label: 'Configurar Punições', style: 'secondary', emoji: '⚖️' },
        { label: 'Configurar Loja', style: 'success', emoji: '🛒' },
      ],
    },
    screenshots: [
      {
        url: 'https://media.discordapp.net/attachments/1563366057442418738/1568307573378261032/Captura_de_tela_2026-11-06_135339.png?ex=6aef57bf&is=6aee063f&hm=cac27b0153cd78ecd0f45e3af53835497a29a88c9bb0fdd9c28e8bd88e21a516&=&format=webp&quality=lossless',
        caption: 'Demonstração Configurar Bot: Interface Central com Dropdowns para Seleção de Canais e Permissões',
      },
    ],
  },

  // 6. /revisao
  {
    name: '/revisao',
    category: 'moderacao',
    usage: '/revisao protocolo:ADV-4892 justificativa:"Foi um mal-entendido"',
    permissions: 'Todos os Membros',
    description: {
      pt: 'Sistema de revisão de punições: membros podem solicitar apelação formal de mutes, advertências ou banimentos.',
      en: 'Punishment review system: members can submit formal appeals for mutes, warnings, or bans.',
      es: 'Sistema de revisión de sanciones: los usuarios pueden apelar advertencias o expulsiones.',
    },
    previewEmbed: {
      title: 'Solicitação de Revisão de Punição',
      description: 'Um membro submeteu um pedido formal de apelação para análise da moderação sênior.',
      color: '#ffffff',
      fields: [
        { name: 'Protocolo da Punição', value: '#PUN-8492 (Advertência)', inline: true },
        { name: 'Membro Solicitante', value: '@LucasSilva', inline: true },
        { name: 'Justificativa do Membro', value: '"Gostaria de pedir desculpas pelo comportamento no chat de jogos, não tornará a acontecer."', inline: false },
        { name: 'Status da Análise', value: '⏳ Aguardando revisão de um Administrador', inline: false },
      ],
      footer: 'sori review system • Transparência e justiça',
      buttons: [
        { label: 'Aceitar Apelação (Remover)', style: 'success', emoji: '✅' },
        { label: 'Rejeitar Apelação', style: 'danger', emoji: '❌' },
      ],
    },
    screenshots: [
      {
        url: 'https://media.discordapp.net/attachments/1563366057442418738/1568307573688377454/Captura_de_tela_2026-11-06_135359.png?ex=6aef57bf&is=6aee063f&hm=30b76b82691a8769e321a3a79bb763076703863fbe5489b51dcfd3b8ab467061&=&format=webp&quality=lossless',
        caption: 'Demonstração Revisão de Punições: Apelação Formal de Membros e Julgamento com Botões de Ação',
      },
    ],
  },

  // 7. /loja criar
  {
    name: '/loja criar',
    category: 'loja',
    usage: '/loja criar nome:"VIP Diamante" preco:5000 cargo:@VIP entrega:"Chave de Acesso"',
    permissions: 'Gerenciar Cargos',
    description: {
      pt: 'Cadastra produtos na loja virtual do servidor com saldo virtual ou Pix e entrega automática 24/7.',
      en: 'Creates shop products with virtual coins or Pix and automatic 24/7 instant deliveries.',
      es: 'Registra artículos en la tienda virtual con entrega automatizada 24/7.',
    },
    previewEmbed: {
      title: 'Novo Item Publicado na Loja do Servidor',
      description: 'O produto está disponível para compra imediata com entrega automatizada em milissegundos.',
      color: '#ffffff',
      fields: [
        { name: 'Item', value: 'Passe VIP Diamante [30 Dias]', inline: true },
        { name: 'Preço', value: '💎 5.000 Moedas', inline: true },
        { name: 'Entrega Instantânea', value: 'Cargo atribuído + Chave enviada na DM', inline: false },
      ],
      footer: 'sori shop • 100% Grátis',
      buttons: [
        { label: 'Comprar Agora', style: 'success', emoji: '🛒' },
      ],
    },
  },

  // 8. /sorteio iniciar
  {
    name: '/sorteio iniciar',
    category: 'entretenimento',
    usage: '/sorteio iniciar duracao:"24h" ganhadores:2 premio:"Nitro Básico"',
    permissions: 'Gerenciar Servidor',
    description: {
      pt: 'Cria sorteios auditáveis com botão de entrada, contagem regressiva e verificação de requisitos.',
      en: 'Creates provably fair giveaways with interactive buttons and role requirements.',
      es: 'Inicia sorteos verificables con botón de participación y requisitos configurables.',
    },
    previewEmbed: {
      title: '🎉 SORTEIO: 1 Mês de Discord Nitro!',
      description: 'Clique no botão abaixo para participar do sorteio do servidor!',
      color: '#ffffff',
      fields: [
        { name: 'Ganhadores', value: '2 Vencedores', inline: true },
        { name: 'Tempo Restante', value: '23 horas e 45 minutos', inline: true },
      ],
      footer: 'sori giveaways • Sorteio justo auditável',
      buttons: [
        { label: 'Participar do Sorteio', style: 'primary', emoji: '🎉' },
      ],
    },
  },
];

// REAL SCREENSHOTS & PRINTS FROM DISCORD PROVIDED BY USER
export const BOT_SCREENSHOTS: BotScreenshot[] = [
  // 1. Painel de Tickets (8 imagens)
  {
    id: 'ticket-1',
    title: 'Criação do Painel de Tickets com Botões e Menus',
    category: 'tickets',
    categoryLabel: 'Tickets 2.0',
    description: 'Interface de configuração e visualização do painel interativo de suporte onde os membros abrem canais privados com um único clique.',
    imageUrl: 'https://media.discordapp.net/attachments/1563366057442418738/1568307573034193017/Captura_de_tela_2026-11-06_135322.png?ex=6aef57bf&is=6aee063f&hm=ce477832dd68c9532068805bfb9be56c1072330c0a176b34620f18702734ff52&=&format=webp&quality=lossless&width=507&height=768',
    commandRelated: '/painel criar',
    badge: 'Painel Interativo',
  },
  {
    id: 'ticket-2',
    title: 'Menu de Seleção de Categorias de Atendimento',
    category: 'tickets',
    categoryLabel: 'Tickets 2.0',
    description: 'Menu suspenso dinâmico (Select Menu) permitindo ao membro escolher a área exata de atendimento: Dúvidas, Loja, Denúncias ou Parcerias.',
    imageUrl: 'https://media.discordapp.net/attachments/1563366057442418738/1568307907785793566/Captura_de_tela_2026-11-06_135526.png?ex=6aef580e&is=6aee068e&hm=91c6fb5ac4a289698079734fc6420c495c12d2b154e773ea3b66377401d34b58&=&format=webp&quality=lossless&width=479&height=512',
    commandRelated: '/painel criar',
    badge: 'Select Menu',
  },
  {
    id: 'ticket-3',
    title: 'Painel Interno do Canal de Ticket com Ações da Staff',
    category: 'tickets',
    categoryLabel: 'Tickets 2.0',
    description: 'Barra de ferramentas do ticket: botões para assumir chamado, adicionar membro, renomear canal, notificar usuário e fechar com transcript.',
    imageUrl: 'https://media.discordapp.net/attachments/1563366057442418738/1568308374569746502/Captura_de_tela_2026-11-06_135714.png?ex=6aef587e&is=6aee06fe&hm=1203f034e92373605a3c32daf6ef740377cb7504e6034aaf92a36a2de42326ed&=&format=webp&quality=lossless',
    commandRelated: '/painel criar',
    badge: 'Controle de Staff',
  },
  {
    id: 'ticket-4',
    title: 'Modal de Confirmação & Formulário Dinâmico',
    category: 'tickets',
    categoryLabel: 'Tickets 2.0',
    description: 'Janela modal nativa do Discord onde o usuário preenche informações essenciais antes da abertura do canal de texto.',
    imageUrl: 'https://media.discordapp.net/attachments/1563366057442418738/1568308117580812389/Captura_de_tela_2026-11-06_135619.png?ex=6aef5840&is=6aee06c0&hm=fe2b2d3d2ac5d56e90142d3f444eec6963d2c83c62cbf5fb1401dfa934523578&=&format=webp&quality=lossless&width=384&height=146',
    commandRelated: '/painel criar',
    badge: 'Modal Nativo',
  },
  {
    id: 'ticket-5',
    title: 'Notificação Instantânea de Abertura de Chamado',
    category: 'tickets',
    categoryLabel: 'Tickets 2.0',
    description: 'Aviso disparado em tempo real mencionando a equipe de atendimento com link direto para o canal recém-criado.',
    imageUrl: 'https://media.discordapp.net/attachments/1563366057442418738/1568308585270607969/Captura_de_tela_2026-11-06_135757.png?ex=6aef58b0&is=6aee0730&hm=c30bf95c258fbc5233195bb898664aba1359110457c03e9cab0770decc427671&=&format=webp&quality=lossless',
    commandRelated: '/painel criar',
    badge: 'Alerta de Staff',
  },
  {
    id: 'ticket-6',
    title: 'Encerramento de Ticket com Transcrição HTML',
    category: 'tickets',
    categoryLabel: 'Tickets 2.0',
    description: 'Compilação de todo o histórico da conversa com mensagens, anexos e horários arquivados com segurança.',
    imageUrl: 'https://media.discordapp.net/attachments/1563366057442418738/1568308585631580260/Captura_de_tela_2026-11-06_135812.png?ex=6aef58b0&is=6aee0730&hm=1ba61bab76b77b8a64aeafc99a4a3cbd0d268bf27a7939ec6f05603e0daf2205&=&format=webp&quality=lossless&width=501&height=640',
    commandRelated: '/painel criar',
    badge: 'Transcript HTML',
  },
  {
    id: 'ticket-7',
    title: 'Menu de Parâmetros e Configuração do Chamado',
    category: 'tickets',
    categoryLabel: 'Tickets 2.0',
    description: 'Opções detalhadas para transferir ticket de atendente, definir prioridade alta e vincular tags de assunto.',
    imageUrl: 'https://media.discordapp.net/attachments/1563366057442418738/1568308852406100169/Captura_de_tela_2026-11-06_135900.png?ex=6aef58f0&is=6aee0770&hm=16ca97990a13a112435205966b157e052da7d20ef4880f69f4fac5857daca46f&=&format=webp&quality=lossless&width=320&height=223',
    commandRelated: '/painel criar',
    badge: 'Parâmetros',
  },
  {
    id: 'ticket-8',
    title: 'Botões de Avaliação de Atendimento (CSAT)',
    category: 'tickets',
    categoryLabel: 'Tickets 2.0',
    description: 'Sistema pós-atendimento para os membros avaliarem a velocidade e educação do moderador de 1 a 5 estrelas.',
    imageUrl: 'https://media.discordapp.net/attachments/1563366057442418738/1568308852863008951/Captura_de_tela_2026-11-06_135914.png?ex=6aef58f0&is=6aee0770&hm=0c51e35512b695103c792ff3f5e0ad25cf609aea94aff42d84137922a54cbb46&=&format=webp&quality=lossless&width=218&height=256',
    commandRelated: '/painel criar',
    badge: 'Feedback do Membro',
  },

  // 2. Configurar Bot
  {
    id: 'config-1',
    title: 'Painel Central Interativo de Configuração do Bot',
    category: 'config',
    categoryLabel: 'Configuração',
    description: 'Tela completa do comando /configurar bot com menus drop-down para vincular canais de logs, transcrições e cargos administrativos.',
    imageUrl: 'https://media.discordapp.net/attachments/1563366057442418738/1568307573378261032/Captura_de_tela_2026-11-06_135339.png?ex=6aef57bf&is=6aee063f&hm=cac27b0153cd78ecd0f45e3af53835497a29a88c9bb0fdd9c28e8bd88e21a516&=&format=webp&quality=lossless',
    commandRelated: '/configurar bot',
    badge: '/configurar bot',
  },

  // 3. Sistema de Revisão de Punições
  {
    id: 'revisao-1',
    title: 'Sistema de Revisão e Apelação de Punições',
    category: 'revisao',
    categoryLabel: 'Revisão de Punições',
    description: 'Membros podem enviar pedidos de apelação e justificativa. A equipe avalia e decide se remove advertências ou revoga banimentos.',
    imageUrl: 'https://media.discordapp.net/attachments/1563366057442418738/1568307573688377454/Captura_de_tela_2026-11-06_135359.png?ex=6aef57bf&is=6aee063f&hm=30b76b82691a8769e321a3a79bb763076703863fbe5489b51dcfd3b8ab467061&=&format=webp&quality=lossless',
    commandRelated: '/revisao',
    badge: 'Apelação Justa',
  },

  // 4. Sistema de Punição
  {
    id: 'punicao-1',
    title: 'Sistema Unificado de Punição: Ban, Mute e Advertência',
    category: 'punicao',
    categoryLabel: 'Punições',
    description: 'Embeds oficiais de punição com protocolo único, usuário punido, moderador, motivo fundamentado e prova fotográfica.',
    imageUrl: 'https://media.discordapp.net/attachments/1563366057442418738/1568309071461752943/Captura_de_tela_2026-11-06_135959.png?ex=6aef5924&is=6aee07a4&hm=408685e1d5f14e865aef5806e4317a97ef2b82a00d221efdbbfa7d7d06723032&=&format=webp&quality=lossless&width=512&height=293',
    commandRelated: '/banir • /mute • /advertencia',
    badge: 'Punição Imediata',
  },

  // 5. Tempo de Punição Automático com Motivos
  {
    id: 'tempo-1',
    title: 'Tabela de Tempo de Punição Automático por Motivo',
    category: 'tempo',
    categoryLabel: 'Tempos Automáticos',
    description: 'Cálculo inteligente do tempo de mute e advertências baseado na gravidade e histórico de reincidência de infrações do usuário.',
    imageUrl: 'https://media.discordapp.net/attachments/1563366057442418738/1568309284092125235/Captura_de_tela_2026-11-06_140052.png?ex=6aef5957&is=6aee07d7&hm=5433d971d30c5bfeb1a2433692e114b106b25643ae43e03e9366221720f23894&=&format=webp&quality=lossless&width=1280&height=288',
    commandRelated: '/mute • /advertencia',
    badge: 'Tempo Automático',
  },
];

export const INITIAL_ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'ann-1',
    title: 'Lançamento da Atualização v2.4 do sori: Novo Módulo de Loja e Transcrições HTML',
    content: 'Estamos muito animados em anunciar o lançamento oficial da versão 2.4 do sori. Agora todos os servidores podem criar lojas virtuais com entrega automática e os tickets contam com um visualizador interativo de transcrições com design dark neon.',
    date: 'Hoje às 11:30',
    category: 'update',
    author: 'Pedro (Lead Dev)',
    isImportant: true,
  },
  {
    id: 'ann-2',
    title: 'Compromisso 100% Gratuito: O sori Não Terá Recursos Bloqueados por Assinatura',
    content: 'Reiteramos para toda a comunidade que o sori permanece 100% grátis. Nosso objetivo é democratizar a gestão de servidores no Discord, oferecendo ferramentas de nível enterprise sem custos abusivos.',
    date: 'Ontem',
    category: 'announcement',
    author: 'Equipe sori',
    isImportant: true,
  },
  {
    id: 'ann-3',
    title: 'Manutenção Preventiva de Shards Concluída com Sucesso',
    content: 'Nossa infraestrutura em nuvem foi migrada para novos servidores com baixa latência para suportar o crescimento rápido de servidores conectados. Latência média reduzida de 35ms para 18ms!',
    date: '02 de Novembro',
    category: 'maintenance',
    author: 'Amanda (DevOps)',
    isImportant: false,
  },
  {
    id: 'ann-4',
    title: 'Nova API de Webhooks para Integrações com Lojas Externas',
    content: 'Agora desenvolvedores de servidores podem disparar eventos no sori via Webhook para entrega de compras de sites externos e pagamentos externos com validação de assinatura criptográfica.',
    date: '28 de Outubro',
    category: 'update',
    author: 'Pedro (Lead Dev)',
    isImportant: false,
  },
];

export const INITIAL_TELEMETRY: AdminTelemetry = {
  serversCount: 1482,
  usersCount: 489240,
  uptimePercentage: 99.98,
  pingMs: 18,
  shardsCount: 8,
  activeTickets: 73,
  cpuUsage: 14.2,
  ramUsage: '1.42 GB / 8 GB',
  messagesProcessed: 1849203,
  modulesStatus: {
    tickets: true,
    moderation: true,
    shop: true,
    entertainment: true,
    autoMod: true,
  },
};

export const INITIAL_TICKET_SIMULATIONS: TicketSimulation[] = [
  {
    id: 'TICK-9021',
    user: 'CyberGamer#1234',
    category: 'Dúvidas Técnicas',
    subject: 'Como configurar o canal de transcrições do sori?',
    status: 'open',
    createdAt: 'Há 5 minutos',
    messages: [
      {
        sender: 'user',
        text: 'Olá equipe! Estou tentando definir um canal privado para onde vão as transcrições dos tickets fechados, qual comando devo usar?',
        timestamp: '11:25',
      },
      {
        sender: 'sori',
        text: 'Olá @CyberGamer! Você pode usar o comando slash `/configurar bot` e selecionar o canal de transcrições no menu interativo, ou rodar `/painel criar`. Todos os históricos HTML serão enviados lá automaticamente.',
        timestamp: '11:25',
      },
    ],
  },
  {
    id: 'TICK-8994',
    user: 'DonoServidor#0001',
    category: 'Loja & Pagamentos',
    subject: 'Liberação de cargo VIP automática',
    status: 'resolved',
    createdAt: 'Há 1 hora',
    messages: [
      {
        sender: 'user',
        text: 'Os membros do meu servidor conseguem comprar cargos mesmo se eu estiver offline?',
        timestamp: '10:10',
      },
      {
        sender: 'support',
        text: 'Sim! O sori processa a atribuição do cargo instantaneamente no Discord assim que a compra é confirmada no carrinho da loja virtual.',
        timestamp: '10:12',
      },
    ],
  },
];
