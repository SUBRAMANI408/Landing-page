import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Trophy, ArrowRight, ShieldCheck, Users, CheckCircle2, User, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section aria-label="Hero" className="relative bg-gradient-to-b from-white via-portal-blue-soft/20 to-portal-gray-light border-b border-slate-200 overflow-hidden py-12 lg:py-16">
      {/* Background soft ambient glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-portal-saffron/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-portal-blue-light/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Authority Headlines & Actions */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            {/* Top Identity & Convener Directorate Strip - First Viewable */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-portal-navy text-white text-xs font-semibold shadow-xs border border-portal-navy/30">
                <User className="w-3.5 h-3.5 text-portal-saffron" />
                <span className="text-[11px] text-portal-saffron uppercase tracking-wider font-extrabold">Chief Convener:</span>
                <span className="font-bold text-white">Venkata Subramani S</span>
              </div>
              <a
                href="tel:9585899506"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-orange-50 text-portal-navy hover:text-portal-saffron-dark text-xs font-bold font-mono border border-slate-300 shadow-2xs transition-colors"
                title="Direct Helpline to Convener Venkata Subramani S"
              >
                <Phone className="w-3.5 h-3.5 text-portal-saffron" />
                <span>+91 95858 99506</span>
              </a>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 border border-portal-saffron/30 text-portal-saffron-dark text-xs font-extrabold uppercase tracking-widest shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-portal-saffron animate-pulse"></span>
                <span>{t.regOpenBadge}</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-portal-navy tracking-tight leading-[1.15]">
              {t.tagline}
            </h1>

            {/* Sub-text */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {t.subTagline}
            </p>

            {/* Category Quick Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs">
              <span className="font-semibold text-slate-500 mr-1">Open To:</span>
              <span className="px-3 py-1 bg-white border border-slate-200 text-portal-navy rounded-full font-semibold shadow-2xs">
                👦 Kids (&lt; 13 Yrs)
              </span>
              <span className="px-3 py-1 bg-white border border-slate-200 text-portal-navy rounded-full font-semibold shadow-2xs">
                🏃 Middle Age (35–59 Yrs)
              </span>
              <span className="px-3 py-1 bg-white border border-slate-200 text-portal-navy rounded-full font-semibold shadow-2xs">
                ⚡ Under 35 (18–34 Yrs)
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link
                to="/register"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-xs uppercase font-bold tracking-wider rounded-lg text-white bg-portal-saffron hover:bg-portal-saffron-dark shadow-md hover:shadow-lg transition-all duration-150 transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                <span>{t.registerNow}</span>
              </Link>
              <Link
                to="/competitions"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-xs uppercase font-bold tracking-wider rounded-lg text-portal-navy bg-white hover:bg-slate-50 border border-slate-300 shadow-xs hover:border-portal-navy transition-all duration-150"
              >
                <span>{t.exploreCompetitions}</span>
                <ArrowRight className="w-4 h-4 ml-2 text-portal-navy" />
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-portal-green shrink-0" />
                <span className="text-xs text-slate-600 font-medium">Instant ID Generation</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-portal-blue shrink-0" />
                <span className="text-xs text-slate-600 font-medium">Accredited Juries</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-portal-gold shrink-0" />
                <span className="text-xs text-slate-600 font-medium">Podium Cash Grants</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Official Visual Arena Card with Clean Integrated Badges */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Top Quick Status Pill */}
            <div className="w-full max-w-md flex items-center justify-between gap-2 mb-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs text-xs font-semibold text-slate-700">
                <span className="w-2 h-2 rounded-full bg-portal-green animate-ping"></span>
                <span>Live: <strong>Registration Open</strong></span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs text-xs font-semibold text-portal-navy">
                <Trophy className="w-3.5 h-3.5 text-portal-saffron" />
                <span><strong>50+ Events</strong></span>
              </div>
            </div>

            {/* Main Visual Arena Card */}
            <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200 shadow-portal-card p-5 sm:p-6 relative">
              
              {/* Header inside visual card */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-portal-navy text-white flex items-center justify-center font-bold text-xs">
                    IN
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-portal-navy uppercase tracking-wider">
                      National Arena 2026
                    </h3>
                    <p className="text-[10px] text-slate-500">Official Portal Fixtures</p>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-green-50 text-portal-green border border-green-200">
                  Verified Portal
                </span>
              </div>

              {/* Convener Directorial Accreditation */}
              <div className="bg-portal-gray-light border border-slate-200 rounded-xl p-2.5 mb-2 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-portal-navy text-portal-saffron flex items-center justify-center font-bold text-xs shrink-0">
                    VS
                  </div>
                  <div>
                    <span className="text-[9.5px] text-slate-500 uppercase tracking-wider block font-bold leading-none">Chief Convener</span>
                    <span className="font-bold text-portal-navy text-xs leading-tight">Venkata Subramani S</span>
                  </div>
                </div>
                <a
                  href="tel:9585899506"
                  className="text-xs font-mono font-bold text-portal-saffron-dark hover:underline flex items-center gap-1 bg-white px-2 py-1 rounded-md border border-slate-200 shadow-2xs"
                  title="Direct Convener Helpline"
                >
                  <Phone className="w-3 h-3 text-portal-saffron" />
                  +91 95858 99506
                </a>
              </div>

              {/* Central Vector Artwork: Sports, Trophy, Achievement */}
              <div className="py-2 flex items-center justify-center">
                <svg viewBox="0 0 400 300" className="w-full h-auto max-h-56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="podiumGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0B2545" />
                      <stop offset="100%" stopColor="#07172B" />
                    </linearGradient>
                    <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#D97706" />
                    </linearGradient>
                  </defs>

                  {/* Athletic Track Curves */}
                  <path d="M20 270 Q200 210 380 270" stroke="#CBD5E1" strokeWidth="8" strokeLinecap="round" />
                  <path d="M40 278 Q200 226 360 278" stroke="#FF671F" strokeWidth="3" strokeDasharray="6 6" />

                  {/* Central Podium Base */}
                  <rect x="140" y="150" width="120" height="90" rx="6" fill="url(#podiumGrad)" />
                  <text x="200" y="210" fill="#FFFFFF" fontSize="28" fontWeight="bold" textAnchor="middle">1</text>
                  
                  {/* Left Podium (Silver) */}
                  <rect x="60" y="180" width="80" height="60" rx="5" fill="#334155" />
                  <text x="100" y="222" fill="#E2E8F0" fontSize="20" fontWeight="bold" textAnchor="middle">2</text>
                  
                  {/* Right Podium (Bronze) */}
                  <rect x="260" y="195" width="80" height="45" rx="5" fill="#1E293B" />
                  <text x="300" y="230" fill="#CBD5E1" fontSize="18" fontWeight="bold" textAnchor="middle">3</text>

                  {/* Central Trophy */}
                  <path d="M170 70 L230 70 L220 115 Q200 135 200 145 L200 150 L185 150 L215 150 L200 150 L180 115 Z" fill="url(#goldGrad)" />
                  <path d="M170 75 Q150 85 170 105" stroke="#D97706" strokeWidth="4" fill="none" strokeLinecap="round" />
                  <path d="M230 75 Q250 85 230 105" stroke="#D97706" strokeWidth="4" fill="none" strokeLinecap="round" />
                  <path d="M150 90 Q140 125 180 140" stroke="#FF671F" strokeWidth="3" fill="none" />
                  <path d="M250 90 Q260 125 220 140" stroke="#046A38" strokeWidth="3" fill="none" />
                  
                  {/* Torch Flame Star */}
                  <circle cx="200" cy="50" r="12" fill="#FBBF24" />
                  <circle cx="200" cy="50" r="8" fill="#FFFBEB" />

                  {/* 3 Participant Silhouettes */}
                  <circle cx="95" cy="120" r="14" fill="#3B82F6" />
                  <path d="M80 150 C80 135 110 135 110 150 Z" fill="#93C5FD" />
                  <text x="95" y="170" fill="#1E293B" fontSize="11" fontWeight="600" textAnchor="middle">KIDS</text>

                  <circle cx="305" cy="130" r="14" fill="#046A38" />
                  <path d="M290 160 C290 145 320 145 320 160 Z" fill="#6EE7B7" />
                  <text x="305" y="185" fill="#1E293B" fontSize="11" fontWeight="600" textAnchor="middle">MID-AGE</text>

                  <circle cx="200" cy="20" r="11" fill="#FF671F" />
                  <path d="M185 42 C185 30 215 30 215 42 Z" fill="#FED7AA" />
                </svg>
              </div>

              {/* Category Segment Cards Preview */}
              <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-slate-100 text-center">
                <div className="p-2 bg-blue-50/80 rounded-lg border border-blue-100">
                  <div className="text-[10px] uppercase font-bold text-blue-700">Kids</div>
                  <div className="text-xs font-extrabold text-blue-950">&lt; 13 Yrs</div>
                </div>
                <div className="p-2 bg-orange-50/80 rounded-lg border border-orange-100">
                  <div className="text-[10px] uppercase font-bold text-orange-700">Middle Age</div>
                  <div className="text-xs font-extrabold text-orange-950">35–59 Yrs</div>
                </div>
                <div className="p-2 bg-emerald-50/80 rounded-lg border border-emerald-100">
                  <div className="text-[10px] uppercase font-bold text-emerald-700">Under 35</div>
                  <div className="text-xs font-extrabold text-emerald-950">18–34 Yrs</div>
                </div>
              </div>
            </div>

            {/* Bottom Inclusivity Pill */}
            <div className="w-full max-w-md mt-3 flex items-center justify-between text-xs text-slate-500 bg-white px-3.5 py-2 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-portal-saffron" />
                <span><strong>3 Age Categories</strong> across 5 venues</span>
              </div>
              <span className="text-[11px] text-portal-navy font-bold">100% Fair Play</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
