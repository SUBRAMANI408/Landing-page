import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CompetitionsPage } from './pages/CompetitionsPage';
import { CompetitionDetailPage } from './pages/CompetitionDetailPage';
import { SchedulePage } from './pages/SchedulePage';
import { EligibilityPage } from './pages/EligibilityPage';
import { VenuesPage } from './pages/VenuesPage';
import { PrizesPage } from './pages/PrizesPage';
import { RulesPage } from './pages/RulesPage';
import { FaqPage } from './pages/FaqPage';
import { RegisterPage } from './pages/RegisterPage';
import { RegistrationSuccessPage } from './pages/RegistrationSuccessPage';
import { MyRegistrationPage } from './pages/MyRegistrationPage';
import { X, Calendar, AlertCircle } from 'lucide-react';

// Scroll to top helper
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function App() {
  const [activeAnnouncement, setActiveAnnouncement] = useState(null);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-portal-gray-light text-slate-800 antialiased selection:bg-portal-navy selection:text-white">
      <ScrollToTop />
      
      {/* Unified Sticky Header: Announcement Bar + Navigation */}
      <div className="sticky top-0 z-40 bg-white shadow-portal-header">
        <AnnouncementBar onOpenAnnouncement={(ann) => setActiveAnnouncement(ann)} />
        <Header />
      </div>

      {/* Main Routed Content */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onOpenAnnouncement={(ann) => setActiveAnnouncement(ann)} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/competitions" element={<CompetitionsPage />} />
          <Route path="/competitions/:id" element={<CompetitionDetailPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/eligibility" element={<EligibilityPage />} />
          <Route path="/venues" element={<VenuesPage />} />
          <Route path="/prizes" element={<PrizesPage />} />
          <Route path="/rules" element={<RulesPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/registration-success" element={<RegistrationSuccessPage />} />
          <Route path="/my-registrations" element={<MyRegistrationPage />} />
          {/* Fallback route */}
          <Route path="*" element={<HomePage onOpenAnnouncement={(ann) => setActiveAnnouncement(ann)} />} />
        </Routes>
      </div>

      {/* Global Announcement Details Modal */}
      {activeAnnouncement && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="app-announcement-modal-title"
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div
            className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveAnnouncement(null)}
              aria-label="Close notification"
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-orange-100 text-orange-800 border border-orange-200">
                {activeAnnouncement.badge}
              </span>
              <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {activeAnnouncement.dateFormatted}
              </span>
            </div>

            <h2 id="app-announcement-modal-title" className="text-xl font-heading font-bold text-portal-navy mb-4">
              {activeAnnouncement.title}
            </h2>

            <div className="text-sm text-slate-700 leading-relaxed space-y-3 mb-6 bg-slate-50 p-4 rounded-xl border border-slate-200">
              <p>{activeAnnouncement.fullContent}</p>
            </div>

            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={() => setActiveAnnouncement(null)}
                className="px-5 py-2.5 bg-portal-navy text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-portal-navy-light cursor-pointer"
              >
                Dismiss Notice
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 18. Footer */}
      <Footer />
    </div>
  );
}
export default App;
