import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Sparkles, ChevronRight, UserCheck, Trophy } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: t.home, path: '/' },
    { name: t.about, path: '/about' },
    { name: t.competitions, path: '/competitions' },
    { name: t.schedule, path: '/schedule' },
    { name: t.eligibility, path: '/eligibility' },
    { name: t.venues, path: '/venues' },
    { name: t.prizes, path: '/prizes' },
    { name: 'Rules', path: '/rules' },
    { name: t.faq, path: '/faq' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-2">
          
          {/* LEFT: Official Emblem & Portal Title (Clean, no text wrapping) */}
          <Link to="/" className="flex items-center gap-3 shrink-0 focus:outline-none focus:ring-2 focus:ring-portal-navy rounded-lg py-1">
            <div className="relative w-11 h-11 shrink-0">
              <svg className="w-11 h-11" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="46" fill="#0B2545" stroke="#FF671F" strokeWidth="2.5" />
                <circle cx="50" cy="50" r="39" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M22 52 C22 36, 32 26, 42 22 C37 32, 34 42, 35 52 C35 56, 30 54, 22 52 Z" fill="#FFA153" opacity="0.8" />
                <path d="M78 52 C78 36, 68 26, 58 22 C63 32, 66 42, 65 52 C65 56, 70 54, 78 52 Z" fill="#0E9F52" opacity="0.8" />
                <path d="M50 18 C53 28, 62 33, 62 44 C62 52, 56 57, 50 57 C44 57, 38 52, 38 44 C38 33, 47 28, 50 18 Z" fill="#FF671F" />
                <path d="M50 25 C52 32, 57 35, 57 42 C57 47, 53 50, 50 50 C47 50, 43 47, 43 42 C43 35, 48 32, 50 25 Z" fill="#FBBF24" />
                <path d="M43 59 L57 59 L55 76 L45 76 Z" fill="#046A38" />
                <rect x="41" y="76" width="18" height="4" rx="2" fill="#FFFFFF" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-extrabold tracking-wider uppercase text-portal-saffron leading-none mb-0.5 whitespace-nowrap">
                ALL-INDIA ANNUAL CHAMPIONSHIP
              </span>
              <span className="text-base sm:text-lg font-bold text-portal-navy tracking-tight leading-tight whitespace-nowrap">
                {lang === 'ta' ? 'தேசிய வருடாந்திர சாம்பியன்ஷிப் 2026' : 'National Annual Championship 2026'}
              </span>
              <span className="text-[11px] text-slate-500 font-medium hidden sm:block leading-none mt-0.5 whitespace-nowrap">
                Official Event &amp; Registration Portal
              </span>
            </div>
          </Link>

          {/* CENTER: Desktop Navigation Links (Spacious & Compact) */}
          <nav className="hidden xl:flex items-center space-x-0.5">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-2 py-1.5 rounded text-[11.5px] font-semibold tracking-wide whitespace-nowrap transition-colors ${
                    active
                      ? 'bg-portal-blue-soft text-portal-navy font-bold'
                      : 'text-slate-700 hover:text-portal-navy hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT: Language Selector & Register CTA */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-100 rounded p-0.5 border border-slate-200 text-xs font-medium">
              <Globe className="w-3 h-3 text-slate-500 ml-1 mr-0.5" />
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-1.5 py-0.5 rounded text-[10px] transition-colors ${
                  lang === 'en'
                    ? 'bg-portal-navy text-white font-bold shadow-xs'
                    : 'text-slate-600 hover:text-portal-navy'
                }`}
                title="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('ta')}
                className={`px-1.5 py-0.5 rounded text-[10px] transition-colors ${
                  lang === 'ta'
                    ? 'bg-portal-navy text-white font-bold shadow-xs'
                    : 'text-slate-600 hover:text-portal-navy'
                }`}
                title="தமிழுக்கு மாற்றுக"
              >
                தமிழ்
              </button>
            </div>

            {/* Check Registration Link */}
            <Link
              to="/my-registrations"
              className="text-xs font-semibold text-slate-700 hover:text-portal-navy px-1.5 py-1 flex items-center gap-1 whitespace-nowrap"
              title="Lookup your Registration ID"
            >
              <UserCheck className="w-3.5 h-3.5 text-portal-navy" />
              <span className="hidden 2xl:inline">{t.myRegistration}</span>
            </Link>

            {/* Register CTA Button */}
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-3 py-1.5 text-xs uppercase tracking-wider font-bold rounded-md text-white bg-portal-saffron hover:bg-portal-saffron-dark shadow-sm hover:shadow transition-all duration-150 transform active:scale-95 whitespace-nowrap"
            >
              <Sparkles className="w-3 h-3 mr-1" />
              <span>{t.registerNow}</span>
            </Link>
          </div>

          {/* MOBILE / TABLET RIGHT CONTROLS */}
          <div className="flex items-center gap-2 xl:hidden">
            {/* Quick Register button for mobile */}
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-3 py-1.5 text-xs font-bold rounded bg-portal-saffron text-white shadow-xs whitespace-nowrap"
            >
              {t.registerNow}
            </Link>

            {/* Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-portal-navy hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-portal-navy"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER MENU */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-slate-200 shadow-xl transition-all">
          <div className="px-4 pt-3 pb-3 space-y-1">
            {/* Language Switcher in Mobile Drawer */}
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-200">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <Globe className="w-4 h-4 text-portal-navy" />
                <span>Portal Language:</span>
              </div>
              <div className="flex items-center bg-slate-100 rounded-md p-0.5 border border-slate-200">
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`px-3 py-1 rounded text-xs ${
                    lang === 'en' ? 'bg-portal-navy text-white font-bold' : 'text-slate-600'
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setLang('ta')}
                  className={`px-3 py-1 rounded text-xs ${
                    lang === 'ta' ? 'bg-portal-navy text-white font-bold' : 'text-slate-600'
                  }`}
                >
                  தமிழ்
                </button>
              </div>
            </div>

            {/* Nav list */}
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-semibold ${
                    active
                      ? 'bg-portal-blue-soft text-portal-navy border-l-4 border-portal-navy'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}

            <div className="pt-3 border-t border-slate-200 pb-2 space-y-2">
              <Link
                to="/my-registrations"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-xs font-bold rounded-md text-portal-navy bg-slate-100 border border-slate-300"
              >
                <UserCheck className="w-4 h-4" />
                {t.myRegistration} / Acknowledgement Lookup
              </Link>
              <Link
                to="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-md text-white bg-portal-saffron hover:bg-portal-saffron-dark shadow-sm"
              >
                <Sparkles className="w-4 h-4" />
                {t.registerNow}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
