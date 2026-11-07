export type Language = 'pt' | 'en' | 'es';

export type UserRole = 'owner' | 'admin' | 'moderator' | 'user';

export interface UserProfile {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  role: UserRole;
  isBotAdmin: boolean;
  email?: string;
  guildsCount?: number;
}

export type CommandCategory = 'all' | 'tickets' | 'moderacao' | 'loja' | 'entretenimento' | 'automacao';

export interface BotCommand {
  name: string;
  description: Record<Language, string>;
  category: CommandCategory;
  usage: string;
  permissions?: string;
  previewEmbed: {
    title: string;
    description: string;
    color: string;
    fields?: Array<{ name: string; value: string; inline?: boolean }>;
    footer?: string;
    buttons?: Array<{ label: string; style: 'primary' | 'secondary' | 'danger' | 'success'; emoji?: string }>;
  };
  screenshots?: Array<{
    url: string;
    caption: string;
  }>;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  category: 'update' | 'maintenance' | 'announcement';
  author: string;
  isImportant?: boolean;
}

export interface TicketSimulation {
  id: string;
  user: string;
  category: string;
  subject: string;
  status: 'open' | 'pending' | 'resolved';
  createdAt: string;
  messages: Array<{
    sender: 'user' | 'sori' | 'support';
    text: string;
    timestamp: string;
  }>;
}

export interface BotScreenshot {
  id: string;
  title: string;
  category: 'tickets' | 'config' | 'punicao' | 'revisao' | 'tempo';
  categoryLabel: string;
  description: string;
  imageUrl: string;
  commandRelated?: string;
  badge?: string;
}

export interface AdminTelemetry {
  serversCount: number;
  usersCount: number;
  uptimePercentage: number;
  pingMs: number;
  shardsCount: number;
  activeTickets: number;
  cpuUsage: number;
  ramUsage: string;
  messagesProcessed: number;
  modulesStatus: {
    tickets: boolean;
    moderation: boolean;
    shop: boolean;
    entertainment: boolean;
    autoMod: boolean;
  };
}
