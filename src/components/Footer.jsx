import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, Heart, Award, ArrowUp, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { lang, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-portal-navy-dark text-white border-t border-slate-800 text-xs">
      {/* Top tricolor ribbon on footer */}
      <div className="tricolor-strip w-full" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Col 1 & 2: Branding & Description */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 shrink-0">
                <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="46" fill="#0B2545" stroke="#FF671F" strokeWidth="2.5" />
                  <circle cx="50" cy="50" r="39" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3 3" />
                  <path d="M50 18 C53 28, 62 33, 62 44 C62 52, 56 57, 50 57 C44 57, 38 52, 38 44 C38 33, 47 28, 50 18 Z" fill="#FF671F" />
                  <path d="M43 59 L57 59 L55 76 L45 76 Z" fill="#046A38" />
                </svg>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-portal-saffron block leading-none mb-1">
                  OFFICIAL PORTAL
                </span>
                <span className="text-base font-bold text-white font-heading">
                  National Annual Talent & Sports Championship
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              An all-India multi-generational championship platform dedicated to fostering sportsmanship, technical innovation, and artistic mastery across Kids, Middle Age, and Under 35 age brackets.
            </p>

            <div className="pt-2 text-[11px] text-slate-300 space-y-1">
              <p>National Championship Secretariat • Central Enclave, New Delhi</p>
              <p className="text-portal-saffron font-semibold">Chief Organizing Convener: Venkata Subramani S (Helpline: +91 95858 99506)</p>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-portal-saffron">
              Quick Links
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Championship</Link></li>
              <li><Link to="/competitions" className="hover:text-white transition-colors">Competitions</Link></li>
              <li><Link to="/schedule" className="hover:text-white transition-colors">Master Schedule</Link></li>
              <li><Link to="/eligibility" className="hover:text-white transition-colors">Eligibility Matrix</Link></li>
              <li><Link to="/venues" className="hover:text-white transition-colors">Venues & Facilities</Link></li>
              <li><Link to="/rules" className="hover:text-white transition-colors">Rules & Regulations</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ & Support</Link></li>
            </ul>
          </div>

          {/* Col 4: Participant Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-portal-saffron">
              Participant Services
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link to="/register" className="text-portal-saffron hover:underline font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Register for 2026</span>
                </Link>
              </li>
              <li>
                <Link to="/my-registrations" className="hover:text-white transition-colors">
                  My Registration Status
                </Link>
              </li>
              <li>
                <Link to="/my-registrations" className="hover:text-white transition-colors">
                  Download Acknowledgement Slip
                </Link>
              </li>
              <li>
                <Link to="/prizes" className="hover:text-white transition-colors">
                  Podium Awards & Cash Grants
                </Link>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Secretariat Helpdesk
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Legal & Connect */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-portal-saffron">
              Legal & Community
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li><Link to="/rules" className="hover:text-white transition-colors">Terms & Tournament Code</Link></li>
              <li><Link to="/rules" className="hover:text-white transition-colors">Privacy & Data Ethics</Link></li>
              <li><Link to="/eligibility" className="hover:text-white transition-colors">Document Guidelines</Link></li>
            </ul>

            <div className="pt-2">
              <span className="text-[11px] uppercase font-bold text-slate-400 block mb-2">Connect Channels</span>
              <div className="flex items-center gap-2">
                <a
                  href="#facebook"
                  aria-label="Facebook"
                  onClick={(e) => e.preventDefault()}
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-portal-blue text-slate-200 flex items-center justify-center transition-colors text-xs font-bold"
                >
                  FB
                </a>
                <a
                  href="#instagram"
                  aria-label="Instagram"
                  onClick={(e) => e.preventDefault()}
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-pink-600 text-slate-200 flex items-center justify-center transition-colors text-xs font-bold"
                >
                  IG
                </a>
                <a
                  href="#youtube"
                  aria-label="YouTube"
                  onClick={(e) => e.preventDefault()}
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-rose-600 text-slate-200 flex items-center justify-center transition-colors text-xs font-bold"
                >
                  YT
                </a>
                <a
                  href="#linkedin"
                  aria-label="LinkedIn"
                  onClick={(e) => e.preventDefault()}
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-sky-600 text-slate-200 flex items-center justify-center transition-colors text-xs font-bold"
                >
                  IN
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* OFFICIAL COMMITTEE COMPLIANCE BANNER */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 mb-8 text-center text-xs text-slate-400">
          <p className="font-semibold text-slate-300 mb-1">
            🏛️ National Talent &amp; Sports Organizing Committee:
          </p>
          <p className="max-w-3xl mx-auto">
            Governed in full conformity with standard Indian athletic, academic, and cultural federation guidelines. Promoting transparent merit evaluation, grassroots talent discovery, and pan-Indian sporting integration.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 National Annual Talent &amp; Sports Championship (NATSC 2026). All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-400 font-medium">Official National Event Portal</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
