import { Language } from '../types';

export const translations: Record<Language, {
  nav: {
    home: string;
    about: string;
    commands: string;
    prints: string;
    plans: string;
    support: string;
    announcements: string;
    terms: string;
    privacy: string;
    adminPanel: string;
    loginDiscord: string;
    logout: string;
    addBot: string;
  };
  hero: {
    badge: string;
    headline: string;
    headlineHighlight: string;
    description: string;
    addDiscord: string;
    testCommands: string;
    adminBadge: string;
    statsServers: string;
    statsUsers: string;
    statsUptime: string;
    statsPing: string;
  };
  banner: {
    defaultText: string;
    actionText: string;
  };
  freeHighlight: {
    title: string;
    subtitle: string;
    badge: string;
    cards: Array<{
      title: string;
      desc: string;
    }>;
  };
  modules: {
    title: string;
    subtitle: string;
    ticketsTitle: string;
    ticketsDesc: string;
    modTitle: string;
    modDesc: string;
    shopTitle: string;
    shopDesc: string;
    funTitle: string;
    funDesc: string;
    automationTitle: string;
    automationDesc: string;
  };
  commandsTable: {
    title: string;
    subtitle: string;
    all: string;
    tickets: string;
    moderation: string;
    shop: string;
    entertainment: string;
    automation: string;
    colCommand: string;
    colCategory: string;
    colDescription: string;
    colUsage: string;
    colAction: string;
    viewPreview: string;
    interactiveSandbox: string;
    sandboxDesc: string;
  };
  plans: {
    title: string;
    subtitle: string;
    currentFreeBadge: string;
    freePlanTitle: string;
    freePlanPrice: string;
    freePlanPeriod: string;
    freePlanDesc: string;
    freePlanCta: string;
    supporterTitle: string;
    supporterPrice: string;
    supporterDesc: string;
    supporterCta: string;
    faqTitle: string;
  };
  support: {
    title: string;
    subtitle: string;
    ticketSimTitle: string;
    ticketSimDesc: string;
    createTicketBtn: string;
    categorySelect: string;
    subjectPlaceholder: string;
    discordJoinBtn: string;
    faqTitle: string;
    statusTitle: string;
  };
  announcements: {
    title: string;
    subtitle: string;
    filterAll: string;
    filterUpdates: string;
    filterMaintenance: string;
    filterNotices: string;
  };
  admin: {
    title: string;
    subtitle: string;
    accessDenied: string;
    accessDeniedDesc: string;
    loginAsAdmin: string;
    liveStats: string;
    globalToggles: string;
    bannerEditor: string;
    updateBannerBtn: string;
    transcriptsTitle: string;
    auditLogs: string;
  };
}> = {
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      commands: 'Comandos',
      prints: 'Prints do Discord',
      plans: 'Planos',
      support: 'Suporte',
      announcements: 'Avisos',
      terms: 'Termos',
      privacy: 'Privacidade',
      adminPanel: 'Painel Admin',
      loginDiscord: 'Entrar com Discord',
      logout: 'Sair',
      addBot: 'Adicionar Bot',
    },
    hero: {
      badge: 'BOT MULTIFUNCIONAL 100% GRATUITO',
      headline: 'A nova era da automação no Discord com o',
      headlineHighlight: 'sori',
      description: 'O bot definitivo de tickets interativos, moderação avançada contra raids, sistema de loja virtual e entretenimento para sua comunidade. Rápido, seguro e totalmente gratuito.',
      addDiscord: 'Adicionar ao Servidor',
      testCommands: 'Testar Comandos',
      adminBadge: 'Acesso Administrativo',
      statsServers: 'Servidores Ativos',
      statsUsers: 'Usuários Gerenciados',
      statsUptime: 'Disponibilidade',
      statsPing: 'Latência Média',
    },
    banner: {
      defaultText: 'Aviso Oficial: O bot sori está 100% gratuito e atualizado para a versão 2.4 com novo motor de tickets e loja.',
      actionText: 'Ver Atualizações',
    },
    freeHighlight: {
      title: 'Por que o sori é 100% Grátis?',
      subtitle: 'Sem pegadinhas, sem limites artificiais de tickets ou comandos pagos.',
      badge: 'Zero Assinaturas Obrigatórias',
      cards: [
        {
          title: 'Tickets Sem Limite',
          desc: 'Crie categorias infinitas, gere transcrições HTML completas e atribua cargos sem pagar um único centavo.',
        },
        {
          title: 'Moderação e AutoMod',
          desc: 'Anti-spam inteligente, verificação captcha e punições em milissegundos para manter sua comunidade protegida.',
        },
        {
          title: 'Loja Virtual Completa',
          desc: 'Venda cargos, produtos digitais e gerencie estoque com saldo virtual e entrega automática 24/7.',
        },
        {
          title: 'Hospedagem de Alta Performance',
          desc: 'Arquitetura com shards dedicados na nuvem garantindo latência abaixo de 20ms e 99.98% de disponibilidade.',
        },
      ],
    },
    modules: {
      title: 'Módulos Exclusivos do sori',
      subtitle: 'Tudo o que sua comunidade precisa integrado em um único bot moderno.',
      ticketsTitle: 'Sistema de Tickets 2.0',
      ticketsDesc: 'Painéis interativos com botões e selects, transcrições em HTML salvas com segurança e encaminhamento para a equipe.',
      modTitle: 'Moderação Avançada & Anti-Raid',
      modDesc: 'Filtros de convites, proteção contra mass mention, logs detalhados de auditoria e comandos rápidos em slash.',
      shopTitle: 'Loja Virtual & Economia',
      shopDesc: 'Venda de itens digitais, entrega automatizada, controle de estoque, cupons de desconto e moeda virtual do servidor.',
      funTitle: 'Entretenimento & Comunidade',
      funDesc: 'Sistema dinâmico de XP e níveis, sorteios interativos, minigames de azar e ranking visualmente estilizado.',
      automationTitle: 'Automação & Boas-Vindas',
      automationDesc: 'Mensagens de boas-vindas com embeds customizadas, autorole instantâneo e integração via webhooks.',
    },
    commandsTable: {
      title: 'Comandos & Demonstração Interativa',
      subtitle: 'Conheça a sintaxe dos comandos slash e veja a simulação real do embed no Discord.',
      all: 'Todos',
      tickets: 'Tickets',
      moderation: 'Moderação',
      shop: 'Loja',
      entertainment: 'Entretenimento',
      automation: 'Automação',
      colCommand: 'Comando',
      colCategory: 'Categoria',
      colDescription: 'Finalidade',
      colUsage: 'Uso Prático',
      colAction: 'Visualizar',
      viewPreview: 'Ver Embed',
      interactiveSandbox: 'Simulador de Embeds Discord',
      sandboxDesc: 'Clique em um comando para ver como o bot sori responde com estilo neon moderno dentro do Discord.',
    },
    plans: {
      title: 'Planos & Valores',
      subtitle: 'O sori é atualmente 100% Gratuito. Todos os recursos estão liberados para todos os servidores.',
      currentFreeBadge: 'ESTADO ATUAL: 100% GRÁTIS',
      freePlanTitle: 'Plano Comunidade Completo',
      freePlanPrice: 'R$ 0,00',
      freePlanPeriod: 'para sempre',
      freePlanDesc: 'Acesso irrestrito a todas as automações, tickets, moderação, loja e entretenimento.',
      freePlanCta: 'Adicionar Gratuitamente',
      supporterTitle: 'Apoiador do Projeto',
      supporterPrice: 'Doação Voluntária',
      supporterDesc: 'Para quem deseja apoiar os custos dos servidores em nuvem do bot sori e receber emblemas cosméticos.',
      supporterCta: 'Apoiar o sori',
      faqTitle: 'Perguntas Frequentes sobre Planos',
    },
    support: {
      title: 'Central de Suporte Dinâmica',
      subtitle: 'Atendimento interativo, base de conhecimento e monitoramento de status ao vivo.',
      ticketSimTitle: 'Simulador de Ticket de Suporte',
      ticketSimDesc: 'Experimente a rapidez com que nossa equipe e automação atendem seus chamados.',
      createTicketBtn: 'Abrir Chamado',
      categorySelect: 'Selecione a Categoria',
      subjectPlaceholder: 'Descreva resumidamente sua dúvida ou solicitação...',
      discordJoinBtn: 'Entrar no Discord Oficial',
      faqTitle: 'Dúvidas Comuns',
      statusTitle: 'Status dos Serviços sori',
    },
    announcements: {
      title: 'Avisos & Atualizações',
      subtitle: 'Fique por dentro das últimas melhorias, notas de versão e comunicados da equipe do sori.',
      filterAll: 'Todos',
      filterUpdates: 'Atualizações',
      filterMaintenance: 'Manutenções',
      filterNotices: 'Comunicados',
    },
    admin: {
      title: 'Painel de Controle Administrativo',
      subtitle: 'Acesso restrito para administradores verificados do bot sori.',
      accessDenied: 'Acesso Restrito',
      accessDeniedDesc: 'Este painel é exclusivo para administradores e desenvolvedores do bot sori. Por favor, conecte-se com sua conta Discord autorizada.',
      loginAsAdmin: 'Simular Login como Admin',
      liveStats: 'Métricas Globais do Cluster',
      globalToggles: 'Interruptores Globais de Módulos',
      bannerEditor: 'Gerenciador do Aviso da Página Inicial',
      updateBannerBtn: 'Salvar e Publicar Aviso',
      transcriptsTitle: 'Últimas Transcrições de Tickets',
      auditLogs: 'Registro de Auditoria ao Vivo',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      commands: 'Commands',
      prints: 'Discord Prints',
      plans: 'Plans',
      support: 'Support',
      announcements: 'Updates',
      terms: 'Terms',
      privacy: 'Privacy',
      adminPanel: 'Admin Panel',
      loginDiscord: 'Login with Discord',
      logout: 'Logout',
      addBot: 'Add Bot',
    },
    hero: {
      badge: '100% FREE MULTI-PURPOSE BOT',
      headline: 'The new era of Discord server automation with',
      headlineHighlight: 'sori',
      description: 'The ultimate bot for interactive tickets, anti-raid moderation, digital store commerce, and community games. Fast, secure, and completely free.',
      addDiscord: 'Add to Server',
      testCommands: 'Test Commands',
      adminBadge: 'Admin Access',
      statsServers: 'Active Servers',
      statsUsers: 'Managed Users',
      statsUptime: 'Availability',
      statsPing: 'Average Ping',
    },
    banner: {
      defaultText: 'Official Announcement: sori bot is 100% free and updated to v2.4 featuring a brand new ticket engine and shop system.',
      actionText: 'View Updates',
    },
    freeHighlight: {
      title: 'Why is sori 100% Free?',
      subtitle: 'No paywalls, no artificial ticket caps, and no locked commands.',
      badge: 'Zero Mandatory Subscriptions',
      cards: [
        {
          title: 'Unlimited Tickets',
          desc: 'Create unlimited categories, generate full HTML transcripts, and assign roles without paying a dime.',
        },
        {
          title: 'Moderation & AutoMod',
          desc: 'Intelligent anti-spam, captcha verification, and millisecond disciplinary actions to keep your guild safe.',
        },
        {
          title: 'Full Digital Store',
          desc: 'Sell roles, digital goods, and manage inventory with virtual balance and 24/7 automated delivery.',
        },
        {
          title: 'High Performance Hosting',
          desc: 'Dedicated cloud sharded architecture guaranteeing sub-20ms latency and 99.98% uptime.',
        },
      ],
    },
    modules: {
      title: 'Exclusive sori Modules',
      subtitle: 'Everything your community needs bundled into one sleek modern bot.',
      ticketsTitle: 'Ticket System 2.0',
      ticketsDesc: 'Interactive button and select panels, safely archived HTML transcripts, and staff dispatching.',
      modTitle: 'Advanced Moderation & Anti-Raid',
      modDesc: 'Invite link blocker, mass mention shield, detailed audit logs, and instantaneous slash commands.',
      shopTitle: 'Virtual Shop & Economy',
      shopDesc: 'Digital asset commerce, instant automated deliveries, stock management, promo coupons, and server currency.',
      funTitle: 'Entertainment & Community',
      funDesc: 'Dynamic XP and level leaderboards, interactive giveaways, casino minigames, and neon-styled rank cards.',
      automationTitle: 'Automation & Welcomer',
      automationDesc: 'Custom welcome cards with embeds, instant autorole assignment, and rich webhook integrations.',
    },
    commandsTable: {
      title: 'Commands & Interactive Demonstration',
      subtitle: 'Explore slash command syntax and preview real-time Discord embed outputs.',
      all: 'All',
      tickets: 'Tickets',
      moderation: 'Moderation',
      shop: 'Shop',
      entertainment: 'Fun',
      automation: 'Automation',
      colCommand: 'Command',
      colCategory: 'Category',
      colDescription: 'Purpose',
      colUsage: 'Usage',
      colAction: 'View',
      viewPreview: 'View Embed',
      interactiveSandbox: 'Discord Embed Simulator',
      sandboxDesc: 'Click any command to see how sori replies with crisp neon white aesthetics inside Discord.',
    },
    plans: {
      title: 'Plans & Pricing',
      subtitle: 'sori is currently 100% Free. All premium features are unlocked for every Discord server.',
      currentFreeBadge: 'CURRENT STATUS: 100% FREE',
      freePlanTitle: 'Complete Community Plan',
      freePlanPrice: '$0.00',
      freePlanPeriod: 'forever',
      freePlanDesc: 'Unrestricted access to all automation tools, tickets, moderation, shop, and games.',
      freePlanCta: 'Add for Free',
      supporterTitle: 'Project Supporter',
      supporterPrice: 'Voluntary Donation',
      supporterDesc: 'For those who want to help cover cloud hosting costs and receive cosmetic perks.',
      supporterCta: 'Support sori',
      faqTitle: 'Frequently Asked Questions',
    },
    support: {
      title: 'Dynamic Support Hub',
      subtitle: 'Interactive support desk, searchable knowledge base, and live infrastructure monitors.',
      ticketSimTitle: 'Support Ticket Simulator',
      ticketSimDesc: 'Experience how fast our team and automated assistants handle user requests.',
      createTicketBtn: 'Open Ticket',
      categorySelect: 'Select Category',
      subjectPlaceholder: 'Briefly describe your question or issue...',
      discordJoinBtn: 'Join Official Discord',
      faqTitle: 'Frequently Asked Questions',
      statusTitle: 'sori Infrastructure Status',
    },
    announcements: {
      title: 'Announcements & Updates',
      subtitle: 'Stay up to date with new releases, maintenance schedules, and official notices.',
      filterAll: 'All',
      filterUpdates: 'Updates',
      filterMaintenance: 'Maintenance',
      filterNotices: 'Notices',
    },
    admin: {
      title: 'Advanced Administrative Dashboard',
      subtitle: 'Restricted control panel for verified sori bot staff and developers.',
      accessDenied: 'Restricted Access',
      accessDeniedDesc: 'This dashboard is reserved for authorized sori bot administrators. Please connect using your verified Discord account.',
      loginAsAdmin: 'Simulate Admin Login',
      liveStats: 'Global Cluster Telemetry',
      globalToggles: 'Global Module Switches',
      bannerEditor: 'Home Banner Announcement Editor',
      updateBannerBtn: 'Save & Publish Banner',
      transcriptsTitle: 'Recent Ticket Transcripts',
      auditLogs: 'Live Security Audit Log',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Acerca de',
      commands: 'Comandos',
      prints: 'Capturas Discord',
      plans: 'Planes',
      support: 'Soporte',
      announcements: 'Avisos',
      terms: 'Términos',
      privacy: 'Privacidad',
      adminPanel: 'Panel Admin',
      loginDiscord: 'Entrar con Discord',
      logout: 'Cerrar Sesión',
      addBot: 'Añadir Bot',
    },
    hero: {
      badge: 'BOT MULTIFUNCIONAL 100% GRATUITO',
      headline: 'La nueva era de automatización en Discord con',
      headlineHighlight: 'sori',
      description: 'El bot definitivo de tickets interactivos, moderación contra raids, tienda digital y entretenimiento. Rápido, seguro y completamente gratis.',
      addDiscord: 'Añadir al Servidor',
      testCommands: 'Probar Comandos',
      adminBadge: 'Acceso Admin',
      statsServers: 'Servidores Activos',
      statsUsers: 'Usuarios Gestionados',
      statsUptime: 'Disponibilidad',
      statsPing: 'Latencia Media',
    },
    banner: {
      defaultText: 'Aviso Oficial: El bot sori es 100% gratuito y está actualizado a la versión 2.4 con nuevo motor de tickets y tienda.',
      actionText: 'Ver Actualizaciones',
    },
    freeHighlight: {
      title: '¿Por qué sori es 100% Gratis?',
      subtitle: 'Sin muros de pago, sin límites de tickets y sin comandos bloqueados.',
      badge: 'Cero Suscripciones Obligatorias',
      cards: [
        {
          title: 'Tickets Ilimitados',
          desc: 'Crea paneles y categorías ilimitadas, genera transcripciones HTML y asigna roles gratis.',
        },
        {
          title: 'Moderación & AutoMod',
          desc: 'Anti-spam inteligente, verificación captcha y sanciones en milisegundos para proteger tu servidor.',
        },
        {
          title: 'Tienda Virtual Completa',
          desc: 'Vende roles, productos digitales y gestiona inventario con entrega automática 24/7.',
        },
        {
          title: 'Alojamiento de Alta Potencia',
          desc: 'Arquitectura en la nube con shards dedicados que garantizan latencia menor a 20ms y 99.98% uptime.',
        },
      ],
    },
    modules: {
      title: 'Módulos Exclusivos de sori',
      subtitle: 'Todo lo que tu comunidad necesita reunido en un único bot moderno.',
      ticketsTitle: 'Sistema de Tickets 2.0',
      ticketsDesc: 'Paneles interactivos con botones, transcripciones HTML guardadas de forma segura y despacho al staff.',
      modTitle: 'Moderación Avanzada & Anti-Raid',
      modDesc: 'Bloqueo de enlaces, protección contra menciones masivas, registros de auditoría y comandos slash rápidos.',
      shopTitle: 'Tienda Virtual & Economía',
      shopDesc: 'Venta de productos digitales, entrega automatizada, inventario, cupones y moneda virtual.',
      funTitle: 'Entretenimiento & Comunidad',
      funDesc: 'Sistema dinámico de XP y niveles, sorteos interactivos, minijuegos de casino y ranking visual.',
      automationTitle: 'Automatización & Bienvenidas',
      automationDesc: 'Mensajes de bienvenida con embeds personalizados, autorole instantáneo y webhooks.',
    },
    commandsTable: {
      title: 'Comandos & Demostración Interactiva',
      subtitle: 'Conoce los comandos slash y visualiza la simulación real de los embeds en Discord.',
      all: 'Todos',
      tickets: 'Tickets',
      moderation: 'Moderación',
      shop: 'Tienda',
      entertainment: 'Juegos',
      automation: 'Automatización',
      colCommand: 'Comando',
      colCategory: 'Categoría',
      colDescription: 'Propósito',
      colUsage: 'Uso',
      colAction: 'Ver',
      viewPreview: 'Ver Embed',
      interactiveSandbox: 'Simulador de Embeds Discord',
      sandboxDesc: 'Haz clic en cualquier comando para ver cómo sori responde con estilo neon blanco en Discord.',
    },
    plans: {
      title: 'Planes & Precios',
      subtitle: 'sori es actualmente 100% Gratuito. Todas las funciones avanzadas están liberadas.',
      currentFreeBadge: 'ESTADO ACTUAL: 100% GRATIS',
      freePlanTitle: 'Plan Comunidad Completo',
      freePlanPrice: '$0.00',
      freePlanPeriod: 'para siempre',
      freePlanDesc: 'Acceso ilimitado a tickets, moderación, tienda, economía y entretenimiento.',
      freePlanCta: 'Añadir Gratis',
      supporterTitle: 'Partidario del Proyecto',
      supporterPrice: 'Donación Voluntaria',
      supporterDesc: 'Para quienes deseen colaborar con los costes de servidores en la nube y obtener insignias.',
      supporterCta: 'Apoyar a sori',
      faqTitle: 'Preguntas Frecuentes',
    },
    support: {
      title: 'Centro de Soporte Dinámico',
      subtitle: 'Atención interactiva, base de conocimiento y monitoreo de estado en tiempo real.',
      ticketSimTitle: 'Simulador de Ticket de Soporte',
      ticketSimDesc: 'Experimenta la rapidez de nuestro equipo y respuestas automatizadas.',
      createTicketBtn: 'Abrir Ticket',
      categorySelect: 'Seleccionar Categoría',
      subjectPlaceholder: 'Describe brevemente tu duda o problema...',
      discordJoinBtn: 'Unirse al Discord Oficial',
      faqTitle: 'Preguntas Frecuentes',
      statusTitle: 'Estado de los Servicios de sori',
    },
    announcements: {
      title: 'Avisos & Actualizaciones',
      subtitle: 'Mantente al día con las últimas novedades, parches y anuncios oficiales de sori.',
      filterAll: 'Todos',
      filterUpdates: 'Actualizaciones',
      filterMaintenance: 'Mantenimientos',
      filterNotices: 'Avisos',
    },
    admin: {
      title: 'Panel de Control Administrativo',
      subtitle: 'Acceso restringido para administradores y desarrolladores verificados de sori.',
      accessDenied: 'Acceso Restringido',
      accessDeniedDesc: 'Este panel es exclusivo para administradores autorizados de sori. Conéctate con Discord para continuar.',
      loginAsAdmin: 'Simular Login como Admin',
      liveStats: 'Métricas Globales del Clúster',
      globalToggles: 'Interruptores Globales de Módulos',
      bannerEditor: 'Editor del Aviso en la Página Principal',
      updateBannerBtn: 'Guardar y Publicar Aviso',
      transcriptsTitle: 'Últimas Transcripciones de Tickets',
      auditLogs: 'Registro de Auditoría en Vivo',
    },
  },
};
