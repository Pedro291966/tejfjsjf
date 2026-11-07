import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile } from '../types';

interface AuthContextType {
  user: UserProfile | null;
  isLoginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  loginAs: (profile: UserProfile) => void;
  logout: () => void;
  isBotAdmin: boolean;
}

export const PRESET_PROFILES: UserProfile[] = [
  {
    id: '109283746591823746',
    username: 'pedro_dev',
    displayName: 'Pedro (Criador & Super Admin)',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
    role: 'owner',
    isBotAdmin: true,
    email: 'pedrooliverdasilvazxz@gmail.com',
    guildsCount: 42,
  },
  {
    id: '209384756192837465',
    username: 'staff_amanda',
    displayName: 'Amanda (Staff & Suporte)',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    role: 'admin',
    isBotAdmin: true,
    email: 'amanda.support@soribot.io',
    guildsCount: 15,
  },
  {
    id: '394857261948572619',
    username: 'lucas_community',
    displayName: 'Lucas (Dono de Servidor)',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80',
    role: 'moderator',
    isBotAdmin: false,
    email: 'lucas@gamershub.gg',
    guildsCount: 3,
  },
  {
    id: '492817263548192039',
    username: 'discord_member',
    displayName: 'Visitante Discord',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    role: 'user',
    isBotAdmin: false,
    email: 'user@discord.gg',
    guildsCount: 1,
  },
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(() => {
    try {
      const stored = localStorage.getItem('sori_auth_user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    if (user) {
      localStorage.setItem('sori_auth_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('sori_auth_user');
    }
  }, [user]);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const loginAs = (profile: UserProfile) => {
    setUser(profile);
    setIsLoginModalOpen(false);
  };

  const logout = () => {
    setUser(null);
  };

  const isBotAdmin = !!(user && (user.role === 'owner' || user.role === 'admin' || user.isBotAdmin));

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoginModalOpen,
        openLoginModal,
        closeLoginModal,
        loginAs,
        logout,
        isBotAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
