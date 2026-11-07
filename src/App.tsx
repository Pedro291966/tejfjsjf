import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { AnnouncementBanner } from './components/AnnouncementBanner';
import { Footer } from './components/Footer';
import { DiscordLoginModal } from './components/DiscordLoginModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PlansPage } from './pages/PlansPage';
import { SupportPage } from './pages/SupportPage';
import { AnnouncementsPage } from './pages/AnnouncementsPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { AdminDashboard } from './pages/AdminDashboard';
import { ScreenshotsPage } from './pages/ScreenshotsPage';

import { Language, Announcement } from './types';
import { INITIAL_ANNOUNCEMENTS } from './data/botData';

const MainAppContent: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>('inicio');
  const [lang, setLang] = useState<Language>('pt');
  
  // Dynamic Announcement Banner state (editable in Admin Dashboard, visible on Home)
  const [bannerText, setBannerText] = useState<string>(
    'Aviso Oficial: O bot sori está 100% gratuito e atualizado para a versão 2.4 com novo motor de tickets e loja.'
  );
  const [isBannerVisible, setIsBannerVisible] = useState<boolean>(true);

  // Announcements array state (editable by admin)
  const [announcements, setAnnouncements] = useState<Announcement[]>(INITIAL_ANNOUNCEMENTS);

  const { openLoginModal } = useAuth();

  const handleAddAnnouncement = (newAnn: Announcement) => {
    setAnnouncements((prev) => [newAnn, ...prev]);
  };

  const handleNavigateToAnnouncements = () => {
    setCurrentTab('avisos');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col justify-between selection:bg-white selection:text-black bg-grid-pattern">
      {/* Top Level Notice Banner (Prominent on Home screen) */}
      <AnnouncementBanner
        bannerText={bannerText}
        lang={lang}
        onNavigateToAnnouncements={handleNavigateToAnnouncements}
        onDismiss={() => setIsBannerVisible(false)}
        isVisible={isBannerVisible}
      />

      {/* Main Top Bar Navigation (Strict 3-zone contract) */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        lang={lang}
        setLang={setLang}
      />

      {/* Main Dynamic Viewport Page */}
      <main className="flex-1 w-full">
        {currentTab === 'inicio' && (
          <HomePage
            lang={lang}
            setCurrentTab={setCurrentTab}
            openLoginModal={openLoginModal}
          />
        )}

        {currentTab === 'sobre' && (
          <AboutPage lang={lang} setCurrentTab={setCurrentTab} />
        )}

        {currentTab === 'comandos' && (
          <div className="max-w-7xl mx-auto px-6 py-12 space-y-6">
            <HomePage
              lang={lang}
              setCurrentTab={setCurrentTab}
              openLoginModal={openLoginModal}
            />
          </div>
        )}

        {currentTab === 'prints' && (
          <ScreenshotsPage lang={lang} setCurrentTab={setCurrentTab} />
        )}

        {currentTab === 'planos' && (
          <PlansPage lang={lang} setCurrentTab={setCurrentTab} />
        )}

        {currentTab === 'suporte' && (
          <SupportPage lang={lang} />
        )}

        {currentTab === 'avisos' && (
          <AnnouncementsPage
            lang={lang}
            announcements={announcements}
            setCurrentTab={setCurrentTab}
          />
        )}

        {currentTab === 'termos' && (
          <TermsPage lang={lang} />
        )}

        {currentTab === 'privacidade' && (
          <PrivacyPage lang={lang} />
        )}

        {currentTab === 'admin' && (
          <AdminDashboard
            lang={lang}
            currentBannerText={bannerText}
            onUpdateBannerText={(newText) => setBannerText(newText)}
            announcements={announcements}
            onAddAnnouncement={handleAddAnnouncement}
          />
        )}
      </main>

      {/* Global Interactive Discord Auth Modal */}
      <DiscordLoginModal lang={lang} />

      {/* Modern Minimalist Footer */}
      <Footer setCurrentTab={setCurrentTab} lang={lang} />
    </div>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <MainAppContent />
    </AuthProvider>
  );
}
